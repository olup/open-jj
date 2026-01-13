/* eslint no-bitwise: 0 */

type Hash = string;

function assert(condition: boolean, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

enum ColumnType {
  Empty = 0,
  Blocked = 1,
  Reserved = 2,
  Ancestor = 3,
  Parent = 4,
}

type ColumnProps =
  | {
      type: ColumnType.Empty | ColumnType.Blocked;
      hash: undefined;
    }
  | {
      type: ColumnType.Reserved | ColumnType.Ancestor | ColumnType.Parent;
      hash: Hash;
    };

class Column {
  constructor(private inner: ColumnProps = { type: ColumnType.Empty, hash: undefined }) {}

  static empty(): Column {
    return new Column();
  }

  get type(): ColumnType {
    return this.inner.type;
  }

  get hash(): undefined | Hash {
    return this.inner.hash;
  }

  matches(n: Hash): boolean {
    return this.hash === n;
  }

  isEmpty(): boolean {
    return this.type === ColumnType.Empty;
  }

  variant(): number {
    return this.type;
  }

  mergeColumn(other: Column): Column {
    return other.variant() > this.variant() ? other : this;
  }

  reset(): Column {
    return this.type === ColumnType.Blocked ? Column.empty() : this;
  }

  toNodeLine(): NodeLine {
    switch (this.type) {
      case ColumnType.Ancestor:
        return NodeLine.Ancestor;
      case ColumnType.Parent:
        return NodeLine.Parent;
      default:
        return NodeLine.Blank;
    }
  }

  toLinkLine(): LinkLine {
    switch (this.type) {
      case ColumnType.Ancestor:
        return LinkLine.from(LinkLine.VERT_ANCESTOR);
      case ColumnType.Parent:
        return LinkLine.from(LinkLine.VERT_PARENT);
      default:
        return LinkLine.empty();
    }
  }

  toPadLine(): PadLine {
    switch (this.type) {
      case ColumnType.Ancestor:
        return PadLine.Ancestor;
      case ColumnType.Parent:
        return PadLine.Parent;
      default:
        return PadLine.Blank;
    }
  }
}

class Columns {
  public inner: Array<Column>;

  constructor(columns?: Array<Column>) {
    this.inner = columns ?? [];
  }

  find(node: Hash): number | undefined {
    const index = this.inner.findIndex(column => column.matches(node));
    return index >= 0 ? index : undefined;
  }

  findEmpty(index?: number): number | undefined {
    if (index != null && this.inner.at(index)?.isEmpty()) {
      return index;
    }
    return this.firstEmpty();
  }

  firstEmpty(): number | undefined {
    const index = this.inner.findIndex(column => column.isEmpty());
    return index >= 0 ? index : undefined;
  }

  newEmpty(): number {
    const columns = this.inner;
    columns.push(Column.empty());
    return columns.length - 1;
  }

  convertAncestorToParent() {
    const columns = this.inner;
    for (let i = 0; i < columns.length; i++) {
      const { type, hash } = columns[i];
      if (type === ColumnType.Ancestor && hash != null) {
        columns[i] = new Column({ type: ColumnType.Parent, hash });
      }
    }
  }

  reset(): void {
    let columns = this.inner;
    columns = columns.map(column => column.reset());
    while (columns.at(-1)?.isEmpty()) {
      columns.pop();
    }
    this.inner = columns;
  }

  merge(index: number, column: Column) {
    const columns = this.inner;
    columns[index] = columns[index].mergeColumn(column);
  }

  swap(index1: number, index2: number) {
    if (index1 !== index2) {
      const column1 = this.inner[index1];
      const column2 = this.inner[index2];
      this.inner[index1] = column2;
      this.inner[index2] = column1;
    }
  }
}

export enum AncestorType {
  Ancestor = 'Ancestor',
  Parent = 'Parent',
  Anonymous = 'Anonymous',
}

type AncestorProps =
  | {
      type: AncestorType.Ancestor | AncestorType.Parent;
      hash: Hash;
    }
  | {
      type: AncestorType.Anonymous;
      hash: undefined;
    };

export class Ancestor {
  constructor(private inner: AncestorProps = { type: AncestorType.Anonymous, hash: undefined }) {}

  toColumn(): Column {
    switch (this.inner.type) {
      case AncestorType.Ancestor:
        return new Column({ type: ColumnType.Ancestor, hash: this.inner.hash });
      case AncestorType.Parent:
        return new Column({ type: ColumnType.Parent, hash: this.inner.hash });
      case AncestorType.Anonymous:
        return new Column({ type: ColumnType.Blocked, hash: undefined });
    }
  }

  id(): Hash | undefined {
    return this.inner.hash;
  }

  isDirect(): boolean {
    return this.inner.type !== AncestorType.Ancestor;
  }

  toLinkLine(direct: LinkLine, indirect: LinkLine): LinkLine {
    return this.isDirect() ? direct : indirect;
  }
}

class AncestorColumnBounds {
  constructor(private inner: { target: number; minAncestor: number; minParent: number; maxParent: number; maxAncestor: number }) {}

  static new(columns: Array<[number, Ancestor]>, target: number): AncestorColumnBounds | undefined {
    if (columns.length === 0) {
      return undefined;
    }
    const ancestorNumbers = [target, ...columns.map(([index]) => index)];
    const parentNumbers = [target, ...columns.filter(([, a]) => a.isDirect()).map(([i]) => i)];
    const minAncestor = Math.min(...ancestorNumbers);
    const maxAncestor = Math.max(...ancestorNumbers);
    const minParent = Math.min(...parentNumbers);
    const maxParent = Math.max(...parentNumbers);
    return new AncestorColumnBounds({ target, minAncestor, minParent, maxParent, maxAncestor });
  }

  get minAncestor(): number {
    return this.inner.minAncestor;
  }

  get minParent(): number {
    return this.inner.minParent;
  }

  get maxParent(): number {
    return this.inner.maxParent;
  }

  get maxAncestor(): number {
    return this.inner.maxAncestor;
  }

  get target(): number {
    return this.inner.target;
  }

  *range(): Iterable<number> {
    for (let i = this.minAncestor + 1; i < this.maxAncestor; ++i) {
      yield i;
    }
  }

  horizontalLine(index: number): LinkLine {
    if (index === this.target) {
      return LinkLine.empty();
    } else if (index > this.minParent && index < this.maxParent) {
      return LinkLine.from(LinkLine.HORIZ_PARENT);
    } else if (index > this.minAncestor && index < this.maxAncestor) {
      return LinkLine.from(LinkLine.HORIZ_ANCESTOR);
    }
    return LinkLine.empty();
  }
}

export class LinkLine {
  constructor(public value = 0) {}

  static HORIZ_PARENT = 1 << 0;
  static HORIZ_ANCESTOR = 1 << 1;
  static VERT_PARENT = 1 << 2;
  static VERT_ANCESTOR = 1 << 3;
  static LEFT_FORK_PARENT = 1 << 4;
  static LEFT_FORK_ANCESTOR = 1 << 5;
  static RIGHT_FORK_PARENT = 1 << 6;
  static RIGHT_FORK_ANCESTOR = 1 << 7;
  static LEFT_MERGE_PARENT = 1 << 8;
  static LEFT_MERGE_ANCESTOR = 1 << 9;
  static RIGHT_MERGE_PARENT = 1 << 10;
  static RIGHT_MERGE_ANCESTOR = 1 << 11;
  static CHILD = 1 << 12;

  static HORIZONTAL = LinkLine.HORIZ_PARENT | LinkLine.HORIZ_ANCESTOR;
  static VERTICAL = LinkLine.VERT_PARENT | LinkLine.VERT_ANCESTOR;
  static LEFT_FORK = LinkLine.LEFT_FORK_PARENT | LinkLine.LEFT_FORK_ANCESTOR;
  static RIGHT_FORK = LinkLine.RIGHT_FORK_PARENT | LinkLine.RIGHT_FORK_ANCESTOR;
  static LEFT_MERGE = LinkLine.LEFT_MERGE_PARENT | LinkLine.LEFT_MERGE_ANCESTOR;
  static RIGHT_MERGE = LinkLine.RIGHT_MERGE_PARENT | LinkLine.RIGHT_MERGE_ANCESTOR;
  static ANY_MERGE = LinkLine.LEFT_MERGE | LinkLine.RIGHT_MERGE;
  static ANY_FORK = LinkLine.LEFT_FORK | LinkLine.RIGHT_FORK;
  static ANY_FORK_OR_MERGE = LinkLine.ANY_MERGE | LinkLine.ANY_FORK;

  static from(value: number): LinkLine {
    return new LinkLine(value);
  }

  static empty(): LinkLine {
    return new LinkLine(0);
  }

  valueOf(): number {
    return this.value;
  }

  contains(value: number): boolean {
    return (this.value & value) === value;
  }

  intersects(value: number): boolean {
    return (this.value & value) !== 0;
  }

  or(value: number): LinkLine {
    return LinkLine.from(this.value | value);
  }
}

export enum NodeLine {
  Blank = 0,
  Ancestor = 1,
  Parent = 2,
  Node = 3,
}

export enum PadLine {
  Blank = 0,
  Ancestor = 1,
  Parent = 2,
}

type GraphRow = {
  hash: Hash;
  merge: boolean;
  nodeLine: Array<NodeLine>;
  linkLine?: Array<LinkLine>;
  termLine?: Array<boolean>;
  ancestryLine: Array<PadLine>;
  isHead: boolean;
  isRoot: boolean;
  nodeColumn: number;
  parentColumns: number[];
  parentColumnsByHash: Array<{ hash: Hash; column: number }>;
  linkLineFromNode?: Array<LinkLine>;
};

export type ExtendedGraphRow = GraphRow & {
  hasIndirectAncestor: boolean;
  preNodeLine: Array<PadLine>;
  postNodeLine: Array<PadLine>;
  postAncestryLine: Array<PadLine>;
  valueOf(): string;
};

function nodeToPadLine(node: NodeLine, useBlank: boolean): PadLine {
  switch (node) {
    case NodeLine.Blank:
      return PadLine.Blank;
    case NodeLine.Ancestor:
      return PadLine.Ancestor;
    case NodeLine.Parent:
      return PadLine.Parent;
    case NodeLine.Node:
      return useBlank ? PadLine.Blank : PadLine.Parent;
  }
}

function extendGraphRow(row: GraphRow): ExtendedGraphRow {
  const rowStr = [
    row.hash,
    row.nodeLine.join(''),
    row.linkLine?.map(l => l.value.toString(16)).join('') ?? '',
    row.termLine?.map(l => (l ? '1' : '0')).join('') ?? '',
    row.ancestryLine?.join('') ?? '',
    row.parentColumns.join(','),
    row.isHead ? 'h' : '',
    row.isRoot ? 'r' : '',
  ].join(';');

  return {
    ...row,
    get hasIndirectAncestor() {
      return row.ancestryLine.some(line => line === PadLine.Ancestor);
    },
    get preNodeLine() {
      return row.nodeLine.map(l => nodeToPadLine(l, row.isHead));
    },
    get postNodeLine() {
      return row.nodeLine.map(l => nodeToPadLine(l, row.isRoot));
    },
    get postAncestryLine() {
      return row.ancestryLine.map(l => (l === PadLine.Ancestor ? PadLine.Parent : l));
    },
    valueOf(): string {
      return rowStr;
    },
  };
}

type NextRowOptions = {
  forceLastColumn?: boolean;
};

export class Renderer {
  private columns: Columns = new Columns();

  reserve(hash: Hash) {
    if (this.columns.find(hash) == null) {
      const index = this.columns.firstEmpty();
      const column = new Column({ type: ColumnType.Reserved, hash });
      if (index == null) {
        this.columns.inner.push(column);
      } else {
        this.columns.inner[index] = column;
      }
    }
  }

  nextRow(hash: Hash, parents: Array<Ancestor>, opts?: NextRowOptions): ExtendedGraphRow {
    const { forceLastColumn = false } = opts ?? {};

    const existingColumn = this.columns.find(hash);
    let column: number;
    if (forceLastColumn) {
      assert(existingColumn == null, 'forceLastColumn should only apply to heads');
      column = this.columns.newEmpty();
    } else {
      column = existingColumn ?? this.columns.firstEmpty() ?? this.columns.newEmpty();
    }
    const isHead =
      existingColumn == null || this.columns.inner.at(existingColumn)?.type === ColumnType.Reserved;
    const isRoot = parents.length === 0;

    this.columns.inner[column] = Column.empty();

    const merge = parents.length > 1;

    const nodeLine: NodeLine[] = this.columns.inner.map(c => c.toNodeLine());
    nodeLine[column] = NodeLine.Node;

    const linkLine: LinkLine[] = this.columns.inner.map(c => c.toLinkLine());
    const linkLineFromNode: LinkLine[] = this.columns.inner.map(_c => LinkLine.empty());
    linkLineFromNode[column] = linkLine[column];
    let needLinkLine = false;

    const linkBoth = (i: number, bits: number) => {
      if (bits < 0) {
        linkLine[i] = LinkLine.from(bits);
        linkLineFromNode[i] = LinkLine.from(bits);
      } else {
        linkLine[i] = linkLine[i].or(bits);
        linkLineFromNode[i] = linkLineFromNode[i].or(bits);
      }
    };

    const termLine: boolean[] = this.columns.inner.map(_c => false);
    let needTermLine = false;

    const ancestryLine: PadLine[] = this.columns.inner.map(c => c.toPadLine());

    const parentColumns = new Map<number, Ancestor>();
    const parentColumnsByHash: Array<{ hash: Hash; column: number }> = [];
    for (const p of parents) {
      const parentId = p.id();
      if (parentId != null) {
        const index = this.columns.find(parentId);
        if (index != null) {
          this.columns.merge(index, p.toColumn());
          parentColumns.set(index, p);
          parentColumnsByHash.push({ hash: parentId, column: index });
          continue;
        }
      }

      const index = this.columns.findEmpty(column);
      if (index != null) {
        this.columns.merge(index, p.toColumn());
        parentColumns.set(index, p);
        if (parentId != null) {
          parentColumnsByHash.push({ hash: parentId, column: index });
        }
        continue;
      }

      parentColumns.set(this.columns.inner.length, p);
      if (parentId != null) {
        parentColumnsByHash.push({ hash: parentId, column: this.columns.inner.length });
      }
      nodeLine.push(NodeLine.Blank);
      ancestryLine.push(PadLine.Blank);
      linkLine.push(LinkLine.empty());
      linkLineFromNode.push(LinkLine.empty());
      termLine.push(false);
      this.columns.inner.push(p.toColumn());
    }

    for (const [i, p] of parentColumns.entries()) {
      if (p.id() == null) {
        termLine[i] = true;
        needTermLine = true;
      }
    }

    if (parents.length === 1) {
      const [[parentColumn, parentAncestor]] = parentColumns.entries();
      if (parentColumn != null && parentColumn > column) {
        this.columns.swap(column, parentColumn);
        parentColumns.delete(parentColumn);
        parentColumns.set(column, parentAncestor);
        const wasDirect = linkLine.at(parentColumn)?.contains(LinkLine.VERT_PARENT);
        linkLine[column] = linkLine[column].or(
          wasDirect ? LinkLine.RIGHT_FORK_PARENT : LinkLine.RIGHT_FORK_ANCESTOR,
        );
        for (let i = column + 1; i < parentColumn; ++i) {
          linkLine[i] = linkLine[i].or(wasDirect ? LinkLine.HORIZ_PARENT : LinkLine.HORIZ_ANCESTOR);
        }
        linkLine[parentColumn] = LinkLine.from(
          wasDirect ? LinkLine.LEFT_MERGE_PARENT : LinkLine.LEFT_MERGE_ANCESTOR,
        );
        needLinkLine = true;
        ancestryLine[parentColumn] = PadLine.Blank;
      }
    }

    const bounds = AncestorColumnBounds.new([...parentColumns.entries()], column);
    if (bounds != null) {
      for (const i of bounds.range()) {
        linkBoth(i, bounds.horizontalLine(i).value);
        needLinkLine = true;
      }
      if (bounds.maxParent > column) {
        linkBoth(column, LinkLine.RIGHT_MERGE_PARENT);
        needLinkLine = true;
      } else if (bounds.maxAncestor > column) {
        linkBoth(column, LinkLine.RIGHT_MERGE_ANCESTOR);
        needLinkLine = true;
      }
      if (bounds.minParent < column) {
        linkBoth(column, LinkLine.LEFT_MERGE_PARENT);
        needLinkLine = true;
      } else if (bounds.minAncestor < column) {
        linkBoth(column, LinkLine.LEFT_MERGE_ANCESTOR);
        needLinkLine = true;
      }
      for (const [i, p] of parentColumns.entries()) {
        ancestryLine[i] = this.columns.inner[i].toPadLine();
        let orValue = 0;
        if (i < column) {
          orValue = p.toLinkLine(
            LinkLine.from(LinkLine.RIGHT_FORK_PARENT),
            LinkLine.from(LinkLine.RIGHT_FORK_ANCESTOR),
          ).value;
        } else if (i === column) {
          orValue =
            LinkLine.CHILD |
            p.toLinkLine(LinkLine.from(LinkLine.VERT_PARENT), LinkLine.from(LinkLine.VERT_ANCESTOR))
              .value;
        } else {
          orValue = p.toLinkLine(
            LinkLine.from(LinkLine.LEFT_FORK_PARENT),
            LinkLine.from(LinkLine.LEFT_FORK_ANCESTOR),
          ).value;
        }
        linkBoth(i, orValue);
      }
    }

    this.columns.convertAncestorToParent();
    this.columns.reset();

    const optionalLinkLine = needLinkLine ? linkLine : undefined;
    const optionalTermLine = needTermLine ? termLine : undefined;

    const row: GraphRow = {
      hash,
      merge,
      nodeLine,
      linkLine: optionalLinkLine,
      termLine: optionalTermLine,
      ancestryLine,
      isHead,
      isRoot,
      nodeColumn: column,
      parentColumns: [...parentColumns.keys()].sort((a, b) => a - b),
      parentColumnsByHash,
      linkLineFromNode: needLinkLine ? linkLineFromNode : undefined,
    };

    return extendGraphRow(row);
  }
}
