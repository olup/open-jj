var h0 = { exports: {} }, Jp = {}, Qm = { exports: {} }, Dt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eT;
function rk() {
  if (eT) return Dt;
  eT = 1;
  var Q = Symbol.for("react.element"), ie = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), he = Symbol.for("react.strict_mode"), qe = Symbol.for("react.profiler"), ct = Symbol.for("react.provider"), it = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), lt = Symbol.for("react.suspense"), me = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), Re = Symbol.iterator;
  function L(x) {
    return x === null || typeof x != "object" ? null : (x = Re && x[Re] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var X = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, M = Object.assign, J = {};
  function Be(x, $, xe) {
    this.props = x, this.context = $, this.refs = J, this.updater = xe || X;
  }
  Be.prototype.isReactComponent = {}, Be.prototype.setState = function(x, $) {
    if (typeof x != "object" && typeof x != "function" && x != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, $, "setState");
  }, Be.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function vt() {
  }
  vt.prototype = Be.prototype;
  function Me(x, $, xe) {
    this.props = x, this.context = $, this.refs = J, this.updater = xe || X;
  }
  var ut = Me.prototype = new vt();
  ut.constructor = Me, M(ut, Be.prototype), ut.isPureReactComponent = !0;
  var He = Array.isArray, Rt = Object.prototype.hasOwnProperty, _e = { current: null }, Z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ye(x, $, xe) {
    var ge, Fe = {}, gt = null, Ot = null;
    if ($ != null) for (ge in $.ref !== void 0 && (Ot = $.ref), $.key !== void 0 && (gt = "" + $.key), $) Rt.call($, ge) && !Z.hasOwnProperty(ge) && (Fe[ge] = $[ge]);
    var rt = arguments.length - 2;
    if (rt === 1) Fe.children = xe;
    else if (1 < rt) {
      for (var _t = Array(rt), Wt = 0; Wt < rt; Wt++) _t[Wt] = arguments[Wt + 2];
      Fe.children = _t;
    }
    if (x && x.defaultProps) for (ge in rt = x.defaultProps, rt) Fe[ge] === void 0 && (Fe[ge] = rt[ge]);
    return { $$typeof: Q, type: x, key: gt, ref: Ot, props: Fe, _owner: _e.current };
  }
  function Pe(x, $) {
    return { $$typeof: Q, type: x.type, key: $, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function Ze(x) {
    return typeof x == "object" && x !== null && x.$$typeof === Q;
  }
  function At(x) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(xe) {
      return $[xe];
    });
  }
  var Ye = /\/+/g;
  function nt(x, $) {
    return typeof x == "object" && x !== null && x.key != null ? At("" + x.key) : $.toString(36);
  }
  function Oe(x, $, xe, ge, Fe) {
    var gt = typeof x;
    (gt === "undefined" || gt === "boolean") && (x = null);
    var Ot = !1;
    if (x === null) Ot = !0;
    else switch (gt) {
      case "string":
      case "number":
        Ot = !0;
        break;
      case "object":
        switch (x.$$typeof) {
          case Q:
          case ie:
            Ot = !0;
        }
    }
    if (Ot) return Ot = x, Fe = Fe(Ot), x = ge === "" ? "." + nt(Ot, 0) : ge, He(Fe) ? (xe = "", x != null && (xe = x.replace(Ye, "$&/") + "/"), Oe(Fe, $, xe, "", function(Wt) {
      return Wt;
    })) : Fe != null && (Ze(Fe) && (Fe = Pe(Fe, xe + (!Fe.key || Ot && Ot.key === Fe.key ? "" : ("" + Fe.key).replace(Ye, "$&/") + "/") + x)), $.push(Fe)), 1;
    if (Ot = 0, ge = ge === "" ? "." : ge + ":", He(x)) for (var rt = 0; rt < x.length; rt++) {
      gt = x[rt];
      var _t = ge + nt(gt, rt);
      Ot += Oe(gt, $, xe, _t, Fe);
    }
    else if (_t = L(x), typeof _t == "function") for (x = _t.call(x), rt = 0; !(gt = x.next()).done; ) gt = gt.value, _t = ge + nt(gt, rt++), Ot += Oe(gt, $, xe, _t, Fe);
    else if (gt === "object") throw $ = String(x), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return Ot;
  }
  function Ut(x, $, xe) {
    if (x == null) return x;
    var ge = [], Fe = 0;
    return Oe(x, ge, "", "", function(gt) {
      return $.call(xe, gt, Fe++);
    }), ge;
  }
  function Ke(x) {
    if (x._status === -1) {
      var $ = x._result;
      $ = $(), $.then(function(xe) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = xe);
      }, function(xe) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = xe);
      }), x._status === -1 && (x._status = 0, x._result = $);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var ft = { current: null }, U = { transition: null }, ue = { ReactCurrentDispatcher: ft, ReactCurrentBatchConfig: U, ReactCurrentOwner: _e };
  function ae() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Dt.Children = { map: Ut, forEach: function(x, $, xe) {
    Ut(x, function() {
      $.apply(this, arguments);
    }, xe);
  }, count: function(x) {
    var $ = 0;
    return Ut(x, function() {
      $++;
    }), $;
  }, toArray: function(x) {
    return Ut(x, function($) {
      return $;
    }) || [];
  }, only: function(x) {
    if (!Ze(x)) throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, Dt.Component = Be, Dt.Fragment = H, Dt.Profiler = qe, Dt.PureComponent = Me, Dt.StrictMode = he, Dt.Suspense = lt, Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ue, Dt.act = ae, Dt.cloneElement = function(x, $, xe) {
    if (x == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var ge = M({}, x.props), Fe = x.key, gt = x.ref, Ot = x._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (gt = $.ref, Ot = _e.current), $.key !== void 0 && (Fe = "" + $.key), x.type && x.type.defaultProps) var rt = x.type.defaultProps;
      for (_t in $) Rt.call($, _t) && !Z.hasOwnProperty(_t) && (ge[_t] = $[_t] === void 0 && rt !== void 0 ? rt[_t] : $[_t]);
    }
    var _t = arguments.length - 2;
    if (_t === 1) ge.children = xe;
    else if (1 < _t) {
      rt = Array(_t);
      for (var Wt = 0; Wt < _t; Wt++) rt[Wt] = arguments[Wt + 2];
      ge.children = rt;
    }
    return { $$typeof: Q, type: x.type, key: Fe, ref: gt, props: ge, _owner: Ot };
  }, Dt.createContext = function(x) {
    return x = { $$typeof: it, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: ct, _context: x }, x.Consumer = x;
  }, Dt.createElement = ye, Dt.createFactory = function(x) {
    var $ = ye.bind(null, x);
    return $.type = x, $;
  }, Dt.createRef = function() {
    return { current: null };
  }, Dt.forwardRef = function(x) {
    return { $$typeof: S, render: x };
  }, Dt.isValidElement = Ze, Dt.lazy = function(x) {
    return { $$typeof: Y, _payload: { _status: -1, _result: x }, _init: Ke };
  }, Dt.memo = function(x, $) {
    return { $$typeof: me, type: x, compare: $ === void 0 ? null : $ };
  }, Dt.startTransition = function(x) {
    var $ = U.transition;
    U.transition = {};
    try {
      x();
    } finally {
      U.transition = $;
    }
  }, Dt.unstable_act = ae, Dt.useCallback = function(x, $) {
    return ft.current.useCallback(x, $);
  }, Dt.useContext = function(x) {
    return ft.current.useContext(x);
  }, Dt.useDebugValue = function() {
  }, Dt.useDeferredValue = function(x) {
    return ft.current.useDeferredValue(x);
  }, Dt.useEffect = function(x, $) {
    return ft.current.useEffect(x, $);
  }, Dt.useId = function() {
    return ft.current.useId();
  }, Dt.useImperativeHandle = function(x, $, xe) {
    return ft.current.useImperativeHandle(x, $, xe);
  }, Dt.useInsertionEffect = function(x, $) {
    return ft.current.useInsertionEffect(x, $);
  }, Dt.useLayoutEffect = function(x, $) {
    return ft.current.useLayoutEffect(x, $);
  }, Dt.useMemo = function(x, $) {
    return ft.current.useMemo(x, $);
  }, Dt.useReducer = function(x, $, xe) {
    return ft.current.useReducer(x, $, xe);
  }, Dt.useRef = function(x) {
    return ft.current.useRef(x);
  }, Dt.useState = function(x) {
    return ft.current.useState(x);
  }, Dt.useSyncExternalStore = function(x, $, xe) {
    return ft.current.useSyncExternalStore(x, $, xe);
  }, Dt.useTransition = function() {
    return ft.current.useTransition();
  }, Dt.version = "18.3.1", Dt;
}
var ev = { exports: {} };
ev.exports;
var tT;
function ak() {
  return tT || (tT = 1, function(Q, ie) {
    var H = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    H.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var he = "18.3.1", qe = Symbol.for("react.element"), ct = Symbol.for("react.portal"), it = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), me = Symbol.for("react.provider"), Y = Symbol.for("react.context"), Re = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), Be = Symbol.for("react.offscreen"), vt = Symbol.iterator, Me = "@@iterator";
      function ut(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = vt && h[vt] || h[Me];
        return typeof C == "function" ? C : null;
      }
      var He = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Rt = {
        transition: null
      }, _e = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Z = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ye = {}, Pe = null;
      function Ze(h) {
        Pe = h;
      }
      ye.setExtraStackFrame = function(h) {
        Pe = h;
      }, ye.getCurrentStack = null, ye.getStackAddendum = function() {
        var h = "";
        Pe && (h += Pe);
        var C = ye.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var At = !1, Ye = !1, nt = !1, Oe = !1, Ut = !1, Ke = {
        ReactCurrentDispatcher: He,
        ReactCurrentBatchConfig: Rt,
        ReactCurrentOwner: Z
      };
      Ke.ReactDebugCurrentFrame = ye, Ke.ReactCurrentActQueue = _e;
      function ft(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), P = 1; P < C; P++)
            z[P - 1] = arguments[P];
          ue("warn", h, z);
        }
      }
      function U(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), P = 1; P < C; P++)
            z[P - 1] = arguments[P];
          ue("error", h, z);
        }
      }
      function ue(h, C, z) {
        {
          var P = Ke.ReactDebugCurrentFrame, re = P.getStackAddendum();
          re !== "" && (C += "%s", z = z.concat([re]));
          var be = z.map(function(Se) {
            return String(Se);
          });
          be.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, be);
        }
      }
      var ae = {};
      function x(h, C) {
        {
          var z = h.constructor, P = z && (z.displayName || z.name) || "ReactClass", re = P + "." + C;
          if (ae[re])
            return;
          U("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, P), ae[re] = !0;
        }
      }
      var $ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, z) {
          x(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, z, P) {
          x(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, z, P) {
          x(h, "setState");
        }
      }, xe = Object.assign, ge = {};
      Object.freeze(ge);
      function Fe(h, C, z) {
        this.props = h, this.context = C, this.refs = ge, this.updater = z || $;
      }
      Fe.prototype.isReactComponent = {}, Fe.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Fe.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var gt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Ot = function(h, C) {
          Object.defineProperty(Fe.prototype, h, {
            get: function() {
              ft("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var rt in gt)
          gt.hasOwnProperty(rt) && Ot(rt, gt[rt]);
      }
      function _t() {
      }
      _t.prototype = Fe.prototype;
      function Wt(h, C, z) {
        this.props = h, this.context = C, this.refs = ge, this.updater = z || $;
      }
      var Nn = Wt.prototype = new _t();
      Nn.constructor = Wt, xe(Nn, Fe.prototype), Nn.isPureReactComponent = !0;
      function qn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var ir = Array.isArray;
      function Mn(h) {
        return ir(h);
      }
      function Cr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Bn(h) {
        try {
          return zn(h), !1;
        } catch {
          return !0;
        }
      }
      function zn(h) {
        return "" + h;
      }
      function da(h) {
        if (Bn(h))
          return U("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(h)), zn(h);
      }
      function Ga(h, C, z) {
        var P = h.displayName;
        if (P)
          return P;
        var re = C.displayName || C.name || "";
        return re !== "" ? z + "(" + re + ")" : z;
      }
      function Or(h) {
        return h.displayName || "Context";
      }
      function $n(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && U("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case it:
            return "Fragment";
          case ct:
            return "Portal";
          case lt:
            return "Profiler";
          case S:
            return "StrictMode";
          case L:
            return "Suspense";
          case X:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Y:
              var C = h;
              return Or(C) + ".Consumer";
            case me:
              var z = h;
              return Or(z._context) + ".Provider";
            case Re:
              return Ga(h, h.render, "ForwardRef");
            case M:
              var P = h.displayName || null;
              return P !== null ? P : $n(h.type) || "Memo";
            case J: {
              var re = h, be = re._payload, Se = re._init;
              try {
                return $n(Se(be));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Kn = Object.prototype.hasOwnProperty, Xn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Rr, qa, An;
      An = {};
      function lr(h) {
        if (Kn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Wr(h) {
        if (Kn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Ni(h, C) {
        var z = function() {
          Rr || (Rr = !0, U("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function pa(h, C) {
        var z = function() {
          qa || (qa = !0, U("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function le(h) {
        if (typeof h.ref == "string" && Z.current && h.__self && Z.current.stateNode !== h.__self) {
          var C = $n(Z.current.type);
          An[C] || (U('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), An[C] = !0);
        }
      }
      var Ve = function(h, C, z, P, re, be, Se) {
        var Qe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: qe,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: z,
          props: Se,
          // Record the component responsible for creating this element.
          _owner: be
        };
        return Qe._store = {}, Object.defineProperty(Qe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Qe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: P
        }), Object.defineProperty(Qe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: re
        }), Object.freeze && (Object.freeze(Qe.props), Object.freeze(Qe)), Qe;
      };
      function ht(h, C, z) {
        var P, re = {}, be = null, Se = null, Qe = null, yt = null;
        if (C != null) {
          lr(C) && (Se = C.ref, le(C)), Wr(C) && (da(C.key), be = "" + C.key), Qe = C.__self === void 0 ? null : C.__self, yt = C.__source === void 0 ? null : C.__source;
          for (P in C)
            Kn.call(C, P) && !Xn.hasOwnProperty(P) && (re[P] = C[P]);
        }
        var $t = arguments.length - 2;
        if ($t === 1)
          re.children = z;
        else if ($t > 1) {
          for (var Jt = Array($t), Zt = 0; Zt < $t; Zt++)
            Jt[Zt] = arguments[Zt + 2];
          Object.freeze && Object.freeze(Jt), re.children = Jt;
        }
        if (h && h.defaultProps) {
          var dt = h.defaultProps;
          for (P in dt)
            re[P] === void 0 && (re[P] = dt[P]);
        }
        if (be || Se) {
          var rn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          be && Ni(re, rn), Se && pa(re, rn);
        }
        return Ve(h, be, Se, Qe, yt, Z.current, re);
      }
      function Pt(h, C) {
        var z = Ve(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function sn(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var P, re = xe({}, h.props), be = h.key, Se = h.ref, Qe = h._self, yt = h._source, $t = h._owner;
        if (C != null) {
          lr(C) && (Se = C.ref, $t = Z.current), Wr(C) && (da(C.key), be = "" + C.key);
          var Jt;
          h.type && h.type.defaultProps && (Jt = h.type.defaultProps);
          for (P in C)
            Kn.call(C, P) && !Xn.hasOwnProperty(P) && (C[P] === void 0 && Jt !== void 0 ? re[P] = Jt[P] : re[P] = C[P]);
        }
        var Zt = arguments.length - 2;
        if (Zt === 1)
          re.children = z;
        else if (Zt > 1) {
          for (var dt = Array(Zt), rn = 0; rn < Zt; rn++)
            dt[rn] = arguments[rn + 2];
          re.children = dt;
        }
        return Ve(h.type, be, Se, Qe, yt, $t, re);
      }
      function cn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === qe;
      }
      var fn = ".", Jn = ":";
      function un(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, P = h.replace(C, function(re) {
          return z[re];
        });
        return "$" + P;
      }
      var Kt = !1, Vt = /\/+/g;
      function va(h) {
        return h.replace(Vt, "$&/");
      }
      function ka(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (da(h.key), un("" + h.key)) : C.toString(36);
      }
      function Da(h, C, z, P, re) {
        var be = typeof h;
        (be === "undefined" || be === "boolean") && (h = null);
        var Se = !1;
        if (h === null)
          Se = !0;
        else
          switch (be) {
            case "string":
            case "number":
              Se = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case qe:
                case ct:
                  Se = !0;
              }
          }
        if (Se) {
          var Qe = h, yt = re(Qe), $t = P === "" ? fn + ka(Qe, 0) : P;
          if (Mn(yt)) {
            var Jt = "";
            $t != null && (Jt = va($t) + "/"), Da(yt, C, Jt, "", function(Zf) {
              return Zf;
            });
          } else yt != null && (cn(yt) && (yt.key && (!Qe || Qe.key !== yt.key) && da(yt.key), yt = Pt(
            yt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (yt.key && (!Qe || Qe.key !== yt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              va("" + yt.key) + "/"
            ) : "") + $t
          )), C.push(yt));
          return 1;
        }
        var Zt, dt, rn = 0, bn = P === "" ? fn : P + Jn;
        if (Mn(h))
          for (var eu = 0; eu < h.length; eu++)
            Zt = h[eu], dt = bn + ka(Zt, eu), rn += Da(Zt, C, z, dt, re);
        else {
          var qo = ut(h);
          if (typeof qo == "function") {
            var Bi = h;
            qo === Bi.entries && (Kt || ft("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Kt = !0);
            for (var tu = qo.call(Bi), Ko, Jf = 0; !(Ko = tu.next()).done; )
              Zt = Ko.value, dt = bn + ka(Zt, Jf++), rn += Da(Zt, C, z, dt, re);
          } else if (be === "object") {
            var cc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (cc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : cc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return rn;
      }
      function Mi(h, C, z) {
        if (h == null)
          return h;
        var P = [], re = 0;
        return Da(h, P, "", "", function(be) {
          return C.call(z, be, re++);
        }), P;
      }
      function Wl(h) {
        var C = 0;
        return Mi(h, function() {
          C++;
        }), C;
      }
      function Ql(h, C, z) {
        Mi(h, function() {
          C.apply(this, arguments);
        }, z);
      }
      function zi(h) {
        return Mi(h, function(C) {
          return C;
        }) || [];
      }
      function Gl(h) {
        if (!cn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function si(h) {
        var C = {
          $$typeof: Y,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: me,
          _context: C
        };
        var z = !1, P = !1, re = !1;
        {
          var be = {
            $$typeof: Y,
            _context: C
          };
          Object.defineProperties(be, {
            Provider: {
              get: function() {
                return P || (P = !0, U("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(Se) {
                C.Provider = Se;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(Se) {
                C._currentValue = Se;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(Se) {
                C._currentValue2 = Se;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(Se) {
                C._threadCount = Se;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, U("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(Se) {
                re || (ft("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Se), re = !0);
              }
            }
          }), C.Consumer = be;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var ha = -1, ur = 0, ma = 1, Qr = 2;
      function ci(h) {
        if (h._status === ha) {
          var C = h._result, z = C();
          if (z.then(function(be) {
            if (h._status === ur || h._status === ha) {
              var Se = h;
              Se._status = ma, Se._result = be;
            }
          }, function(be) {
            if (h._status === ur || h._status === ha) {
              var Se = h;
              Se._status = Qr, Se._result = be;
            }
          }), h._status === ha) {
            var P = h;
            P._status = ur, P._result = z;
          }
        }
        if (h._status === ma) {
          var re = h._result;
          return re === void 0 && U(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, re), "default" in re || U(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, re), re.default;
        } else
          throw h._result;
      }
      function fi(h) {
        var C = {
          // We use these fields to store the result.
          _status: ha,
          _result: h
        }, z = {
          $$typeof: J,
          _payload: C,
          _init: ci
        };
        {
          var P, re;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return P;
              },
              set: function(be) {
                U("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), P = be, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return re;
              },
              set: function(be) {
                U("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), re = be, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function Ai(h) {
        h != null && h.$$typeof === M ? U("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? U("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && U("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && U("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Re,
          render: h
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(P) {
              z = P, !h.name && !h.displayName && (h.displayName = P);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function G(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === it || h === lt || Ut || h === S || h === L || h === X || Oe || h === Be || At || Ye || nt || typeof h == "object" && h !== null && (h.$$typeof === J || h.$$typeof === M || h.$$typeof === me || h.$$typeof === Y || h.$$typeof === Re || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ce(h, C) {
        G(h) || U("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: M,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var P;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return P;
            },
            set: function(re) {
              P = re, !h.name && !h.displayName && (h.displayName = re);
            }
          });
        }
        return z;
      }
      function de() {
        var h = He.current;
        return h === null && U(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Et(h) {
        var C = de();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? U("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && U("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function et(h) {
        var C = de();
        return C.useState(h);
      }
      function Tt(h, C, z) {
        var P = de();
        return P.useReducer(h, C, z);
      }
      function mt(h) {
        var C = de();
        return C.useRef(h);
      }
      function wn(h, C) {
        var z = de();
        return z.useEffect(h, C);
      }
      function on(h, C) {
        var z = de();
        return z.useInsertionEffect(h, C);
      }
      function dn(h, C) {
        var z = de();
        return z.useLayoutEffect(h, C);
      }
      function Tr(h, C) {
        var z = de();
        return z.useCallback(h, C);
      }
      function Ka(h, C) {
        var z = de();
        return z.useMemo(h, C);
      }
      function Bt(h, C, z) {
        var P = de();
        return P.useImperativeHandle(h, C, z);
      }
      function mn(h, C) {
        {
          var z = de();
          return z.useDebugValue(h, C);
        }
      }
      function ot() {
        var h = de();
        return h.useTransition();
      }
      function di(h) {
        var C = de();
        return C.useDeferredValue(h);
      }
      function Ui() {
        var h = de();
        return h.useId();
      }
      function lc(h, C, z) {
        var P = de();
        return P.useSyncExternalStore(h, C, z);
      }
      var Fi = 0, ol, Gr, $o, Lr, Yo, uc, oc;
      function ji() {
      }
      ji.__reactDisabledLog = !0;
      function sl() {
        {
          if (Fi === 0) {
            ol = console.log, Gr = console.info, $o = console.warn, Lr = console.error, Yo = console.group, uc = console.groupCollapsed, oc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: ji,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Fi++;
        }
      }
      function qr() {
        {
          if (Fi--, Fi === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: xe({}, h, {
                value: ol
              }),
              info: xe({}, h, {
                value: Gr
              }),
              warn: xe({}, h, {
                value: $o
              }),
              error: xe({}, h, {
                value: Lr
              }),
              group: xe({}, h, {
                value: Yo
              }),
              groupCollapsed: xe({}, h, {
                value: uc
              }),
              groupEnd: xe({}, h, {
                value: oc
              })
            });
          }
          Fi < 0 && U("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var pi = Ke.ReactCurrentDispatcher, cl;
      function Hu(h, C, z) {
        {
          if (cl === void 0)
            try {
              throw Error();
            } catch (re) {
              var P = re.stack.trim().match(/\n( *(at )?)/);
              cl = P && P[1] || "";
            }
          return `
` + cl + h;
        }
      }
      var Hi = !1, ql;
      {
        var Kl = typeof WeakMap == "function" ? WeakMap : Map;
        ql = new Kl();
      }
      function fl(h, C) {
        if (!h || Hi)
          return "";
        {
          var z = ql.get(h);
          if (z !== void 0)
            return z;
        }
        var P;
        Hi = !0;
        var re = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var be;
        be = pi.current, pi.current = null, sl();
        try {
          if (C) {
            var Se = function() {
              throw Error();
            };
            if (Object.defineProperty(Se.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Se, []);
              } catch (bn) {
                P = bn;
              }
              Reflect.construct(h, [], Se);
            } else {
              try {
                Se.call();
              } catch (bn) {
                P = bn;
              }
              h.call(Se.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (bn) {
              P = bn;
            }
            h();
          }
        } catch (bn) {
          if (bn && P && typeof bn.stack == "string") {
            for (var Qe = bn.stack.split(`
`), yt = P.stack.split(`
`), $t = Qe.length - 1, Jt = yt.length - 1; $t >= 1 && Jt >= 0 && Qe[$t] !== yt[Jt]; )
              Jt--;
            for (; $t >= 1 && Jt >= 0; $t--, Jt--)
              if (Qe[$t] !== yt[Jt]) {
                if ($t !== 1 || Jt !== 1)
                  do
                    if ($t--, Jt--, Jt < 0 || Qe[$t] !== yt[Jt]) {
                      var Zt = `
` + Qe[$t].replace(" at new ", " at ");
                      return h.displayName && Zt.includes("<anonymous>") && (Zt = Zt.replace("<anonymous>", h.displayName)), typeof h == "function" && ql.set(h, Zt), Zt;
                    }
                  while ($t >= 1 && Jt >= 0);
                break;
              }
          }
        } finally {
          Hi = !1, pi.current = be, qr(), Error.prepareStackTrace = re;
        }
        var dt = h ? h.displayName || h.name : "", rn = dt ? Hu(dt) : "";
        return typeof h == "function" && ql.set(h, rn), rn;
      }
      function Io(h, C, z) {
        return fl(h, !1);
      }
      function Wo(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Lt(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return fl(h, Wo(h));
        if (typeof h == "string")
          return Hu(h);
        switch (h) {
          case L:
            return Hu("Suspense");
          case X:
            return Hu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Re:
              return Io(h.render);
            case M:
              return Lt(h.type, C, z);
            case J: {
              var P = h, re = P._payload, be = P._init;
              try {
                return Lt(be(re), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Qo = {}, Pu = Ke.ReactDebugCurrentFrame;
      function Nt(h) {
        if (h) {
          var C = h._owner, z = Lt(h.type, h._source, C ? C.type : null);
          Pu.setExtraStackFrame(z);
        } else
          Pu.setExtraStackFrame(null);
      }
      function sc(h, C, z, P, re) {
        {
          var be = Function.call.bind(Kn);
          for (var Se in h)
            if (be(h, Se)) {
              var Qe = void 0;
              try {
                if (typeof h[Se] != "function") {
                  var yt = Error((P || "React class") + ": " + z + " type `" + Se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[Se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw yt.name = "Invariant Violation", yt;
                }
                Qe = h[Se](C, Se, P, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch ($t) {
                Qe = $t;
              }
              Qe && !(Qe instanceof Error) && (Nt(re), U("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", z, Se, typeof Qe), Nt(null)), Qe instanceof Error && !(Qe.message in Qo) && (Qo[Qe.message] = !0, Nt(re), U("Failed %s type: %s", z, Qe.message), Nt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var C = h._owner, z = Lt(h.type, h._source, C ? C.type : null);
          Ze(z);
        } else
          Ze(null);
      }
      var Xe;
      Xe = !1;
      function Xl() {
        if (Z.current) {
          var h = $n(Z.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Zn(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function Kr(h) {
        return h != null ? Zn(h.__source) : "";
      }
      var Nr = {};
      function hi(h) {
        var C = Xl();
        if (!C) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function Cn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = hi(C);
          if (!Nr[z]) {
            Nr[z] = !0;
            var P = "";
            h && h._owner && h._owner !== Z.current && (P = " It was passed a child from " + $n(h._owner.type) + "."), vi(h), U('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, P), vi(null);
          }
        }
      }
      function Xt(h, C) {
        if (typeof h == "object") {
          if (Mn(h))
            for (var z = 0; z < h.length; z++) {
              var P = h[z];
              cn(P) && Cn(P, C);
            }
          else if (cn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var re = ut(h);
            if (typeof re == "function" && re !== h.entries)
              for (var be = re.call(h), Se; !(Se = be.next()).done; )
                cn(Se.value) && Cn(Se.value, C);
          }
        }
      }
      function Xa(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Re || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === M))
            z = C.propTypes;
          else
            return;
          if (z) {
            var P = $n(C);
            sc(z, h.props, "prop", P, h);
          } else if (C.PropTypes !== void 0 && !Xe) {
            Xe = !0;
            var re = $n(C);
            U("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", re || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && U("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Oa(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var P = C[z];
            if (P !== "children" && P !== "key") {
              vi(h), U("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), U("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function xr(h, C, z) {
        var P = G(h);
        if (!P) {
          var re = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var be = Kr(C);
          be ? re += be : re += Xl();
          var Se;
          h === null ? Se = "null" : Mn(h) ? Se = "array" : h !== void 0 && h.$$typeof === qe ? (Se = "<" + ($n(h.type) || "Unknown") + " />", re = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof h, U("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, re);
        }
        var Qe = ht.apply(this, arguments);
        if (Qe == null)
          return Qe;
        if (P)
          for (var yt = 2; yt < arguments.length; yt++)
            Xt(arguments[yt], h);
        return h === it ? Oa(Qe) : Xa(Qe), Qe;
      }
      var Mr = !1;
      function Xf(h) {
        var C = xr.bind(null, h);
        return C.type = h, Mr || (Mr = !0, ft("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return ft("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Vu(h, C, z) {
        for (var P = sn.apply(this, arguments), re = 2; re < arguments.length; re++)
          Xt(arguments[re], P.type);
        return Xa(P), P;
      }
      function Jl(h, C) {
        var z = Rt.transition;
        Rt.transition = {};
        var P = Rt.transition;
        Rt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (Rt.transition = z, z === null && P._updatedFibers) {
            var re = P._updatedFibers.size;
            re > 10 && ft("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), P._updatedFibers.clear();
          }
        }
      }
      var Bu = !1, $u = null;
      function Zl(h) {
        if ($u === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = Q && Q[C];
            $u = z.call(Q, "timers").setImmediate;
          } catch {
            $u = function(re) {
              Bu === !1 && (Bu = !0, typeof MessageChannel > "u" && U("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var be = new MessageChannel();
              be.port1.onmessage = re, be.port2.postMessage(void 0);
            };
          }
        return $u(h);
      }
      var La = 0, Na = !1;
      function dl(h) {
        {
          var C = La;
          La++, _e.current === null && (_e.current = []);
          var z = _e.isBatchingLegacy, P;
          try {
            if (_e.isBatchingLegacy = !0, P = h(), !z && _e.didScheduleLegacyUpdate) {
              var re = _e.current;
              re !== null && (_e.didScheduleLegacyUpdate = !1, Vi(re));
            }
          } catch (dt) {
            throw Pi(C), dt;
          } finally {
            _e.isBatchingLegacy = z;
          }
          if (P !== null && typeof P == "object" && typeof P.then == "function") {
            var be = P, Se = !1, Qe = {
              then: function(dt, rn) {
                Se = !0, be.then(function(bn) {
                  Pi(C), La === 0 ? Yu(bn, dt, rn) : dt(bn);
                }, function(bn) {
                  Pi(C), rn(bn);
                });
              }
            };
            return !Na && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Se || (Na = !0, U("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Qe;
          } else {
            var yt = P;
            if (Pi(C), La === 0) {
              var $t = _e.current;
              $t !== null && (Vi($t), _e.current = null);
              var Jt = {
                then: function(dt, rn) {
                  _e.current === null ? (_e.current = [], Yu(yt, dt, rn)) : dt(yt);
                }
              };
              return Jt;
            } else {
              var Zt = {
                then: function(dt, rn) {
                  dt(yt);
                }
              };
              return Zt;
            }
          }
        }
      }
      function Pi(h) {
        h !== La - 1 && U("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), La = h;
      }
      function Yu(h, C, z) {
        {
          var P = _e.current;
          if (P !== null)
            try {
              Vi(P), Zl(function() {
                P.length === 0 ? (_e.current = null, C(h)) : Yu(h, C, z);
              });
            } catch (re) {
              z(re);
            }
          else
            C(h);
        }
      }
      var pl = !1;
      function Vi(h) {
        if (!pl) {
          pl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var z = h[C];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (P) {
            throw h = h.slice(C + 1), P;
          } finally {
            pl = !1;
          }
        }
      }
      var Iu = xr, Go = Vu, Ma = Xf, Wu = {
        map: Mi,
        forEach: Ql,
        count: Wl,
        toArray: zi,
        only: Gl
      };
      ie.Children = Wu, ie.Component = Fe, ie.Fragment = it, ie.Profiler = lt, ie.PureComponent = Wt, ie.StrictMode = S, ie.Suspense = L, ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ke, ie.act = dl, ie.cloneElement = Go, ie.createContext = si, ie.createElement = Iu, ie.createFactory = Ma, ie.createRef = qn, ie.forwardRef = Ai, ie.isValidElement = cn, ie.lazy = fi, ie.memo = ce, ie.startTransition = Jl, ie.unstable_act = dl, ie.useCallback = Tr, ie.useContext = Et, ie.useDebugValue = mn, ie.useDeferredValue = di, ie.useEffect = wn, ie.useId = Ui, ie.useImperativeHandle = Bt, ie.useInsertionEffect = on, ie.useLayoutEffect = dn, ie.useMemo = Ka, ie.useReducer = Tt, ie.useRef = mt, ie.useState = et, ie.useSyncExternalStore = lc, ie.useTransition = ot, ie.version = he, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ev, ev.exports)), ev.exports;
}
var nT;
function tv() {
  if (nT) return Qm.exports;
  nT = 1;
  var Q = {};
  return Q.NODE_ENV === "production" ? Qm.exports = rk() : Qm.exports = ak(), Qm.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rT;
function ik() {
  if (rT) return Jp;
  rT = 1;
  var Q = tv(), ie = Symbol.for("react.element"), H = Symbol.for("react.fragment"), he = Object.prototype.hasOwnProperty, qe = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ct = { key: !0, ref: !0, __self: !0, __source: !0 };
  function it(S, lt, me) {
    var Y, Re = {}, L = null, X = null;
    me !== void 0 && (L = "" + me), lt.key !== void 0 && (L = "" + lt.key), lt.ref !== void 0 && (X = lt.ref);
    for (Y in lt) he.call(lt, Y) && !ct.hasOwnProperty(Y) && (Re[Y] = lt[Y]);
    if (S && S.defaultProps) for (Y in lt = S.defaultProps, lt) Re[Y] === void 0 && (Re[Y] = lt[Y]);
    return { $$typeof: ie, type: S, key: L, ref: X, props: Re, _owner: qe.current };
  }
  return Jp.Fragment = H, Jp.jsx = it, Jp.jsxs = it, Jp;
}
var Zp = {}, aT;
function lk() {
  if (aT) return Zp;
  aT = 1;
  var Q = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return Q.NODE_ENV !== "production" && function() {
    var ie = tv(), H = Symbol.for("react.element"), he = Symbol.for("react.portal"), qe = Symbol.for("react.fragment"), ct = Symbol.for("react.strict_mode"), it = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), lt = Symbol.for("react.context"), me = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), Re = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), J = Symbol.iterator, Be = "@@iterator";
    function vt(R) {
      if (R === null || typeof R != "object")
        return null;
      var G = J && R[J] || R[Be];
      return typeof G == "function" ? G : null;
    }
    var Me = ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ut(R) {
      {
        for (var G = arguments.length, ce = new Array(G > 1 ? G - 1 : 0), de = 1; de < G; de++)
          ce[de - 1] = arguments[de];
        He("error", R, ce);
      }
    }
    function He(R, G, ce) {
      {
        var de = Me.ReactDebugCurrentFrame, Et = de.getStackAddendum();
        Et !== "" && (G += "%s", ce = ce.concat([Et]));
        var et = ce.map(function(Tt) {
          return String(Tt);
        });
        et.unshift("Warning: " + G), Function.prototype.apply.call(console[R], console, et);
      }
    }
    var Rt = !1, _e = !1, Z = !1, ye = !1, Pe = !1, Ze;
    Ze = Symbol.for("react.module.reference");
    function At(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === qe || R === it || Pe || R === ct || R === Y || R === Re || ye || R === M || Rt || _e || Z || typeof R == "object" && R !== null && (R.$$typeof === X || R.$$typeof === L || R.$$typeof === S || R.$$typeof === lt || R.$$typeof === me || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ze || R.getModuleId !== void 0));
    }
    function Ye(R, G, ce) {
      var de = R.displayName;
      if (de)
        return de;
      var Et = G.displayName || G.name || "";
      return Et !== "" ? ce + "(" + Et + ")" : ce;
    }
    function nt(R) {
      return R.displayName || "Context";
    }
    function Oe(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && ut("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case qe:
          return "Fragment";
        case he:
          return "Portal";
        case it:
          return "Profiler";
        case ct:
          return "StrictMode";
        case Y:
          return "Suspense";
        case Re:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case lt:
            var G = R;
            return nt(G) + ".Consumer";
          case S:
            var ce = R;
            return nt(ce._context) + ".Provider";
          case me:
            return Ye(R, R.render, "ForwardRef");
          case L:
            var de = R.displayName || null;
            return de !== null ? de : Oe(R.type) || "Memo";
          case X: {
            var Et = R, et = Et._payload, Tt = Et._init;
            try {
              return Oe(Tt(et));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ut = Object.assign, Ke = 0, ft, U, ue, ae, x, $, xe;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Fe() {
      {
        if (Ke === 0) {
          ft = console.log, U = console.info, ue = console.warn, ae = console.error, x = console.group, $ = console.groupCollapsed, xe = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        Ke++;
      }
    }
    function gt() {
      {
        if (Ke--, Ke === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ut({}, R, {
              value: ft
            }),
            info: Ut({}, R, {
              value: U
            }),
            warn: Ut({}, R, {
              value: ue
            }),
            error: Ut({}, R, {
              value: ae
            }),
            group: Ut({}, R, {
              value: x
            }),
            groupCollapsed: Ut({}, R, {
              value: $
            }),
            groupEnd: Ut({}, R, {
              value: xe
            })
          });
        }
        Ke < 0 && ut("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ot = Me.ReactCurrentDispatcher, rt;
    function _t(R, G, ce) {
      {
        if (rt === void 0)
          try {
            throw Error();
          } catch (Et) {
            var de = Et.stack.trim().match(/\n( *(at )?)/);
            rt = de && de[1] || "";
          }
        return `
` + rt + R;
      }
    }
    var Wt = !1, Nn;
    {
      var qn = typeof WeakMap == "function" ? WeakMap : Map;
      Nn = new qn();
    }
    function ir(R, G) {
      if (!R || Wt)
        return "";
      {
        var ce = Nn.get(R);
        if (ce !== void 0)
          return ce;
      }
      var de;
      Wt = !0;
      var Et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var et;
      et = Ot.current, Ot.current = null, Fe();
      try {
        if (G) {
          var Tt = function() {
            throw Error();
          };
          if (Object.defineProperty(Tt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Tt, []);
            } catch (mn) {
              de = mn;
            }
            Reflect.construct(R, [], Tt);
          } else {
            try {
              Tt.call();
            } catch (mn) {
              de = mn;
            }
            R.call(Tt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (mn) {
            de = mn;
          }
          R();
        }
      } catch (mn) {
        if (mn && de && typeof mn.stack == "string") {
          for (var mt = mn.stack.split(`
`), wn = de.stack.split(`
`), on = mt.length - 1, dn = wn.length - 1; on >= 1 && dn >= 0 && mt[on] !== wn[dn]; )
            dn--;
          for (; on >= 1 && dn >= 0; on--, dn--)
            if (mt[on] !== wn[dn]) {
              if (on !== 1 || dn !== 1)
                do
                  if (on--, dn--, dn < 0 || mt[on] !== wn[dn]) {
                    var Tr = `
` + mt[on].replace(" at new ", " at ");
                    return R.displayName && Tr.includes("<anonymous>") && (Tr = Tr.replace("<anonymous>", R.displayName)), typeof R == "function" && Nn.set(R, Tr), Tr;
                  }
                while (on >= 1 && dn >= 0);
              break;
            }
        }
      } finally {
        Wt = !1, Ot.current = et, gt(), Error.prepareStackTrace = Et;
      }
      var Ka = R ? R.displayName || R.name : "", Bt = Ka ? _t(Ka) : "";
      return typeof R == "function" && Nn.set(R, Bt), Bt;
    }
    function Mn(R, G, ce) {
      return ir(R, !1);
    }
    function Cr(R) {
      var G = R.prototype;
      return !!(G && G.isReactComponent);
    }
    function Bn(R, G, ce) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return ir(R, Cr(R));
      if (typeof R == "string")
        return _t(R);
      switch (R) {
        case Y:
          return _t("Suspense");
        case Re:
          return _t("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case me:
            return Mn(R.render);
          case L:
            return Bn(R.type, G, ce);
          case X: {
            var de = R, Et = de._payload, et = de._init;
            try {
              return Bn(et(Et), G, ce);
            } catch {
            }
          }
        }
      return "";
    }
    var zn = Object.prototype.hasOwnProperty, da = {}, Ga = Me.ReactDebugCurrentFrame;
    function Or(R) {
      if (R) {
        var G = R._owner, ce = Bn(R.type, R._source, G ? G.type : null);
        Ga.setExtraStackFrame(ce);
      } else
        Ga.setExtraStackFrame(null);
    }
    function $n(R, G, ce, de, Et) {
      {
        var et = Function.call.bind(zn);
        for (var Tt in R)
          if (et(R, Tt)) {
            var mt = void 0;
            try {
              if (typeof R[Tt] != "function") {
                var wn = Error((de || "React class") + ": " + ce + " type `" + Tt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Tt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw wn.name = "Invariant Violation", wn;
              }
              mt = R[Tt](G, Tt, de, ce, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (on) {
              mt = on;
            }
            mt && !(mt instanceof Error) && (Or(Et), ut("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", de || "React class", ce, Tt, typeof mt), Or(null)), mt instanceof Error && !(mt.message in da) && (da[mt.message] = !0, Or(Et), ut("Failed %s type: %s", ce, mt.message), Or(null));
          }
      }
    }
    var Kn = Array.isArray;
    function Xn(R) {
      return Kn(R);
    }
    function Rr(R) {
      {
        var G = typeof Symbol == "function" && Symbol.toStringTag, ce = G && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ce;
      }
    }
    function qa(R) {
      try {
        return An(R), !1;
      } catch {
        return !0;
      }
    }
    function An(R) {
      return "" + R;
    }
    function lr(R) {
      if (qa(R))
        return ut("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(R)), An(R);
    }
    var Wr = Me.ReactCurrentOwner, Ni = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pa, le;
    function Ve(R) {
      if (zn.call(R, "ref")) {
        var G = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function ht(R) {
      if (zn.call(R, "key")) {
        var G = Object.getOwnPropertyDescriptor(R, "key").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Pt(R, G) {
      typeof R.ref == "string" && Wr.current;
    }
    function sn(R, G) {
      {
        var ce = function() {
          pa || (pa = !0, ut("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        ce.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ce,
          configurable: !0
        });
      }
    }
    function cn(R, G) {
      {
        var ce = function() {
          le || (le = !0, ut("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        ce.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ce,
          configurable: !0
        });
      }
    }
    var fn = function(R, G, ce, de, Et, et, Tt) {
      var mt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: H,
        // Built-in properties that belong on the element
        type: R,
        key: G,
        ref: ce,
        props: Tt,
        // Record the component responsible for creating this element.
        _owner: et
      };
      return mt._store = {}, Object.defineProperty(mt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(mt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.defineProperty(mt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Et
      }), Object.freeze && (Object.freeze(mt.props), Object.freeze(mt)), mt;
    };
    function Jn(R, G, ce, de, Et) {
      {
        var et, Tt = {}, mt = null, wn = null;
        ce !== void 0 && (lr(ce), mt = "" + ce), ht(G) && (lr(G.key), mt = "" + G.key), Ve(G) && (wn = G.ref, Pt(G, Et));
        for (et in G)
          zn.call(G, et) && !Ni.hasOwnProperty(et) && (Tt[et] = G[et]);
        if (R && R.defaultProps) {
          var on = R.defaultProps;
          for (et in on)
            Tt[et] === void 0 && (Tt[et] = on[et]);
        }
        if (mt || wn) {
          var dn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          mt && sn(Tt, dn), wn && cn(Tt, dn);
        }
        return fn(R, mt, wn, Et, de, Wr.current, Tt);
      }
    }
    var un = Me.ReactCurrentOwner, Kt = Me.ReactDebugCurrentFrame;
    function Vt(R) {
      if (R) {
        var G = R._owner, ce = Bn(R.type, R._source, G ? G.type : null);
        Kt.setExtraStackFrame(ce);
      } else
        Kt.setExtraStackFrame(null);
    }
    var va;
    va = !1;
    function ka(R) {
      return typeof R == "object" && R !== null && R.$$typeof === H;
    }
    function Da() {
      {
        if (un.current) {
          var R = Oe(un.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Mi(R) {
      return "";
    }
    var Wl = {};
    function Ql(R) {
      {
        var G = Da();
        if (!G) {
          var ce = typeof R == "string" ? R : R.displayName || R.name;
          ce && (G = `

Check the top-level render call using <` + ce + ">.");
        }
        return G;
      }
    }
    function zi(R, G) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ce = Ql(G);
        if (Wl[ce])
          return;
        Wl[ce] = !0;
        var de = "";
        R && R._owner && R._owner !== un.current && (de = " It was passed a child from " + Oe(R._owner.type) + "."), Vt(R), ut('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ce, de), Vt(null);
      }
    }
    function Gl(R, G) {
      {
        if (typeof R != "object")
          return;
        if (Xn(R))
          for (var ce = 0; ce < R.length; ce++) {
            var de = R[ce];
            ka(de) && zi(de, G);
          }
        else if (ka(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Et = vt(R);
          if (typeof Et == "function" && Et !== R.entries)
            for (var et = Et.call(R), Tt; !(Tt = et.next()).done; )
              ka(Tt.value) && zi(Tt.value, G);
        }
      }
    }
    function si(R) {
      {
        var G = R.type;
        if (G == null || typeof G == "string")
          return;
        var ce;
        if (typeof G == "function")
          ce = G.propTypes;
        else if (typeof G == "object" && (G.$$typeof === me || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        G.$$typeof === L))
          ce = G.propTypes;
        else
          return;
        if (ce) {
          var de = Oe(G);
          $n(ce, R.props, "prop", de, R);
        } else if (G.PropTypes !== void 0 && !va) {
          va = !0;
          var Et = Oe(G);
          ut("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Et || "Unknown");
        }
        typeof G.getDefaultProps == "function" && !G.getDefaultProps.isReactClassApproved && ut("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ha(R) {
      {
        for (var G = Object.keys(R.props), ce = 0; ce < G.length; ce++) {
          var de = G[ce];
          if (de !== "children" && de !== "key") {
            Vt(R), ut("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", de), Vt(null);
            break;
          }
        }
        R.ref !== null && (Vt(R), ut("Invalid attribute `ref` supplied to `React.Fragment`."), Vt(null));
      }
    }
    var ur = {};
    function ma(R, G, ce, de, Et, et) {
      {
        var Tt = At(R);
        if (!Tt) {
          var mt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (mt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var wn = Mi();
          wn ? mt += wn : mt += Da();
          var on;
          R === null ? on = "null" : Xn(R) ? on = "array" : R !== void 0 && R.$$typeof === H ? (on = "<" + (Oe(R.type) || "Unknown") + " />", mt = " Did you accidentally export a JSX literal instead of a component?") : on = typeof R, ut("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", on, mt);
        }
        var dn = Jn(R, G, ce, Et, et);
        if (dn == null)
          return dn;
        if (Tt) {
          var Tr = G.children;
          if (Tr !== void 0)
            if (de)
              if (Xn(Tr)) {
                for (var Ka = 0; Ka < Tr.length; Ka++)
                  Gl(Tr[Ka], R);
                Object.freeze && Object.freeze(Tr);
              } else
                ut("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Gl(Tr, R);
        }
        if (zn.call(G, "key")) {
          var Bt = Oe(R), mn = Object.keys(G).filter(function(Ui) {
            return Ui !== "key";
          }), ot = mn.length > 0 ? "{key: someKey, " + mn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ur[Bt + ot]) {
            var di = mn.length > 0 ? "{" + mn.join(": ..., ") + ": ...}" : "{}";
            ut(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ot, Bt, di, Bt), ur[Bt + ot] = !0;
          }
        }
        return R === qe ? ha(dn) : si(dn), dn;
      }
    }
    function Qr(R, G, ce) {
      return ma(R, G, ce, !0);
    }
    function ci(R, G, ce) {
      return ma(R, G, ce, !1);
    }
    var fi = ci, Ai = Qr;
    Zp.Fragment = qe, Zp.jsx = fi, Zp.jsxs = Ai;
  }(), Zp;
}
var uk = {};
uk.NODE_ENV === "production" ? h0.exports = ik() : h0.exports = lk();
var Ne = h0.exports, m0 = { exports: {} }, Wa = {}, Gm = { exports: {} }, p0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iT;
function ok() {
  return iT || (iT = 1, function(Q) {
    function ie(U, ue) {
      var ae = U.length;
      U.push(ue);
      e: for (; 0 < ae; ) {
        var x = ae - 1 >>> 1, $ = U[x];
        if (0 < qe($, ue)) U[x] = ue, U[ae] = $, ae = x;
        else break e;
      }
    }
    function H(U) {
      return U.length === 0 ? null : U[0];
    }
    function he(U) {
      if (U.length === 0) return null;
      var ue = U[0], ae = U.pop();
      if (ae !== ue) {
        U[0] = ae;
        e: for (var x = 0, $ = U.length, xe = $ >>> 1; x < xe; ) {
          var ge = 2 * (x + 1) - 1, Fe = U[ge], gt = ge + 1, Ot = U[gt];
          if (0 > qe(Fe, ae)) gt < $ && 0 > qe(Ot, Fe) ? (U[x] = Ot, U[gt] = ae, x = gt) : (U[x] = Fe, U[ge] = ae, x = ge);
          else if (gt < $ && 0 > qe(Ot, ae)) U[x] = Ot, U[gt] = ae, x = gt;
          else break e;
        }
      }
      return ue;
    }
    function qe(U, ue) {
      var ae = U.sortIndex - ue.sortIndex;
      return ae !== 0 ? ae : U.id - ue.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ct = performance;
      Q.unstable_now = function() {
        return ct.now();
      };
    } else {
      var it = Date, S = it.now();
      Q.unstable_now = function() {
        return it.now() - S;
      };
    }
    var lt = [], me = [], Y = 1, Re = null, L = 3, X = !1, M = !1, J = !1, Be = typeof setTimeout == "function" ? setTimeout : null, vt = typeof clearTimeout == "function" ? clearTimeout : null, Me = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ut(U) {
      for (var ue = H(me); ue !== null; ) {
        if (ue.callback === null) he(me);
        else if (ue.startTime <= U) he(me), ue.sortIndex = ue.expirationTime, ie(lt, ue);
        else break;
        ue = H(me);
      }
    }
    function He(U) {
      if (J = !1, ut(U), !M) if (H(lt) !== null) M = !0, Ke(Rt);
      else {
        var ue = H(me);
        ue !== null && ft(He, ue.startTime - U);
      }
    }
    function Rt(U, ue) {
      M = !1, J && (J = !1, vt(ye), ye = -1), X = !0;
      var ae = L;
      try {
        for (ut(ue), Re = H(lt); Re !== null && (!(Re.expirationTime > ue) || U && !At()); ) {
          var x = Re.callback;
          if (typeof x == "function") {
            Re.callback = null, L = Re.priorityLevel;
            var $ = x(Re.expirationTime <= ue);
            ue = Q.unstable_now(), typeof $ == "function" ? Re.callback = $ : Re === H(lt) && he(lt), ut(ue);
          } else he(lt);
          Re = H(lt);
        }
        if (Re !== null) var xe = !0;
        else {
          var ge = H(me);
          ge !== null && ft(He, ge.startTime - ue), xe = !1;
        }
        return xe;
      } finally {
        Re = null, L = ae, X = !1;
      }
    }
    var _e = !1, Z = null, ye = -1, Pe = 5, Ze = -1;
    function At() {
      return !(Q.unstable_now() - Ze < Pe);
    }
    function Ye() {
      if (Z !== null) {
        var U = Q.unstable_now();
        Ze = U;
        var ue = !0;
        try {
          ue = Z(!0, U);
        } finally {
          ue ? nt() : (_e = !1, Z = null);
        }
      } else _e = !1;
    }
    var nt;
    if (typeof Me == "function") nt = function() {
      Me(Ye);
    };
    else if (typeof MessageChannel < "u") {
      var Oe = new MessageChannel(), Ut = Oe.port2;
      Oe.port1.onmessage = Ye, nt = function() {
        Ut.postMessage(null);
      };
    } else nt = function() {
      Be(Ye, 0);
    };
    function Ke(U) {
      Z = U, _e || (_e = !0, nt());
    }
    function ft(U, ue) {
      ye = Be(function() {
        U(Q.unstable_now());
      }, ue);
    }
    Q.unstable_IdlePriority = 5, Q.unstable_ImmediatePriority = 1, Q.unstable_LowPriority = 4, Q.unstable_NormalPriority = 3, Q.unstable_Profiling = null, Q.unstable_UserBlockingPriority = 2, Q.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, Q.unstable_continueExecution = function() {
      M || X || (M = !0, Ke(Rt));
    }, Q.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pe = 0 < U ? Math.floor(1e3 / U) : 5;
    }, Q.unstable_getCurrentPriorityLevel = function() {
      return L;
    }, Q.unstable_getFirstCallbackNode = function() {
      return H(lt);
    }, Q.unstable_next = function(U) {
      switch (L) {
        case 1:
        case 2:
        case 3:
          var ue = 3;
          break;
        default:
          ue = L;
      }
      var ae = L;
      L = ue;
      try {
        return U();
      } finally {
        L = ae;
      }
    }, Q.unstable_pauseExecution = function() {
    }, Q.unstable_requestPaint = function() {
    }, Q.unstable_runWithPriority = function(U, ue) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var ae = L;
      L = U;
      try {
        return ue();
      } finally {
        L = ae;
      }
    }, Q.unstable_scheduleCallback = function(U, ue, ae) {
      var x = Q.unstable_now();
      switch (typeof ae == "object" && ae !== null ? (ae = ae.delay, ae = typeof ae == "number" && 0 < ae ? x + ae : x) : ae = x, U) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return $ = ae + $, U = { id: Y++, callback: ue, priorityLevel: U, startTime: ae, expirationTime: $, sortIndex: -1 }, ae > x ? (U.sortIndex = ae, ie(me, U), H(lt) === null && U === H(me) && (J ? (vt(ye), ye = -1) : J = !0, ft(He, ae - x))) : (U.sortIndex = $, ie(lt, U), M || X || (M = !0, Ke(Rt))), U;
    }, Q.unstable_shouldYield = At, Q.unstable_wrapCallback = function(U) {
      var ue = L;
      return function() {
        var ae = L;
        L = ue;
        try {
          return U.apply(this, arguments);
        } finally {
          L = ae;
        }
      };
    };
  }(p0)), p0;
}
var v0 = {}, lT;
function sk() {
  return lT || (lT = 1, function(Q) {
    var ie = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    ie.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var H = !1, he = 5;
      function qe(le, Ve) {
        var ht = le.length;
        le.push(Ve), S(le, Ve, ht);
      }
      function ct(le) {
        return le.length === 0 ? null : le[0];
      }
      function it(le) {
        if (le.length === 0)
          return null;
        var Ve = le[0], ht = le.pop();
        return ht !== Ve && (le[0] = ht, lt(le, ht, 0)), Ve;
      }
      function S(le, Ve, ht) {
        for (var Pt = ht; Pt > 0; ) {
          var sn = Pt - 1 >>> 1, cn = le[sn];
          if (me(cn, Ve) > 0)
            le[sn] = Ve, le[Pt] = cn, Pt = sn;
          else
            return;
        }
      }
      function lt(le, Ve, ht) {
        for (var Pt = ht, sn = le.length, cn = sn >>> 1; Pt < cn; ) {
          var fn = (Pt + 1) * 2 - 1, Jn = le[fn], un = fn + 1, Kt = le[un];
          if (me(Jn, Ve) < 0)
            un < sn && me(Kt, Jn) < 0 ? (le[Pt] = Kt, le[un] = Ve, Pt = un) : (le[Pt] = Jn, le[fn] = Ve, Pt = fn);
          else if (un < sn && me(Kt, Ve) < 0)
            le[Pt] = Kt, le[un] = Ve, Pt = un;
          else
            return;
        }
      }
      function me(le, Ve) {
        var ht = le.sortIndex - Ve.sortIndex;
        return ht !== 0 ? ht : le.id - Ve.id;
      }
      var Y = 1, Re = 2, L = 3, X = 4, M = 5;
      function J(le, Ve) {
      }
      var Be = typeof performance == "object" && typeof performance.now == "function";
      if (Be) {
        var vt = performance;
        Q.unstable_now = function() {
          return vt.now();
        };
      } else {
        var Me = Date, ut = Me.now();
        Q.unstable_now = function() {
          return Me.now() - ut;
        };
      }
      var He = 1073741823, Rt = -1, _e = 250, Z = 5e3, ye = 1e4, Pe = He, Ze = [], At = [], Ye = 1, nt = null, Oe = L, Ut = !1, Ke = !1, ft = !1, U = typeof setTimeout == "function" ? setTimeout : null, ue = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function x(le) {
        for (var Ve = ct(At); Ve !== null; ) {
          if (Ve.callback === null)
            it(At);
          else if (Ve.startTime <= le)
            it(At), Ve.sortIndex = Ve.expirationTime, qe(Ze, Ve);
          else
            return;
          Ve = ct(At);
        }
      }
      function $(le) {
        if (ft = !1, x(le), !Ke)
          if (ct(Ze) !== null)
            Ke = !0, An(xe);
          else {
            var Ve = ct(At);
            Ve !== null && lr($, Ve.startTime - le);
          }
      }
      function xe(le, Ve) {
        Ke = !1, ft && (ft = !1, Wr()), Ut = !0;
        var ht = Oe;
        try {
          var Pt;
          if (!H) return ge(le, Ve);
        } finally {
          nt = null, Oe = ht, Ut = !1;
        }
      }
      function ge(le, Ve) {
        var ht = Ve;
        for (x(ht), nt = ct(Ze); nt !== null && !(nt.expirationTime > ht && (!le || Ga())); ) {
          var Pt = nt.callback;
          if (typeof Pt == "function") {
            nt.callback = null, Oe = nt.priorityLevel;
            var sn = nt.expirationTime <= ht, cn = Pt(sn);
            ht = Q.unstable_now(), typeof cn == "function" ? nt.callback = cn : nt === ct(Ze) && it(Ze), x(ht);
          } else
            it(Ze);
          nt = ct(Ze);
        }
        if (nt !== null)
          return !0;
        var fn = ct(At);
        return fn !== null && lr($, fn.startTime - ht), !1;
      }
      function Fe(le, Ve) {
        switch (le) {
          case Y:
          case Re:
          case L:
          case X:
          case M:
            break;
          default:
            le = L;
        }
        var ht = Oe;
        Oe = le;
        try {
          return Ve();
        } finally {
          Oe = ht;
        }
      }
      function gt(le) {
        var Ve;
        switch (Oe) {
          case Y:
          case Re:
          case L:
            Ve = L;
            break;
          default:
            Ve = Oe;
            break;
        }
        var ht = Oe;
        Oe = Ve;
        try {
          return le();
        } finally {
          Oe = ht;
        }
      }
      function Ot(le) {
        var Ve = Oe;
        return function() {
          var ht = Oe;
          Oe = Ve;
          try {
            return le.apply(this, arguments);
          } finally {
            Oe = ht;
          }
        };
      }
      function rt(le, Ve, ht) {
        var Pt = Q.unstable_now(), sn;
        if (typeof ht == "object" && ht !== null) {
          var cn = ht.delay;
          typeof cn == "number" && cn > 0 ? sn = Pt + cn : sn = Pt;
        } else
          sn = Pt;
        var fn;
        switch (le) {
          case Y:
            fn = Rt;
            break;
          case Re:
            fn = _e;
            break;
          case M:
            fn = Pe;
            break;
          case X:
            fn = ye;
            break;
          case L:
          default:
            fn = Z;
            break;
        }
        var Jn = sn + fn, un = {
          id: Ye++,
          callback: Ve,
          priorityLevel: le,
          startTime: sn,
          expirationTime: Jn,
          sortIndex: -1
        };
        return sn > Pt ? (un.sortIndex = sn, qe(At, un), ct(Ze) === null && un === ct(At) && (ft ? Wr() : ft = !0, lr($, sn - Pt))) : (un.sortIndex = Jn, qe(Ze, un), !Ke && !Ut && (Ke = !0, An(xe))), un;
      }
      function _t() {
      }
      function Wt() {
        !Ke && !Ut && (Ke = !0, An(xe));
      }
      function Nn() {
        return ct(Ze);
      }
      function qn(le) {
        le.callback = null;
      }
      function ir() {
        return Oe;
      }
      var Mn = !1, Cr = null, Bn = -1, zn = he, da = -1;
      function Ga() {
        var le = Q.unstable_now() - da;
        return !(le < zn);
      }
      function Or() {
      }
      function $n(le) {
        if (le < 0 || le > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        le > 0 ? zn = Math.floor(1e3 / le) : zn = he;
      }
      var Kn = function() {
        if (Cr !== null) {
          var le = Q.unstable_now();
          da = le;
          var Ve = !0, ht = !0;
          try {
            ht = Cr(Ve, le);
          } finally {
            ht ? Xn() : (Mn = !1, Cr = null);
          }
        } else
          Mn = !1;
      }, Xn;
      if (typeof ae == "function")
        Xn = function() {
          ae(Kn);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), qa = Rr.port2;
        Rr.port1.onmessage = Kn, Xn = function() {
          qa.postMessage(null);
        };
      } else
        Xn = function() {
          U(Kn, 0);
        };
      function An(le) {
        Cr = le, Mn || (Mn = !0, Xn());
      }
      function lr(le, Ve) {
        Bn = U(function() {
          le(Q.unstable_now());
        }, Ve);
      }
      function Wr() {
        ue(Bn), Bn = -1;
      }
      var Ni = Or, pa = null;
      Q.unstable_IdlePriority = M, Q.unstable_ImmediatePriority = Y, Q.unstable_LowPriority = X, Q.unstable_NormalPriority = L, Q.unstable_Profiling = pa, Q.unstable_UserBlockingPriority = Re, Q.unstable_cancelCallback = qn, Q.unstable_continueExecution = Wt, Q.unstable_forceFrameRate = $n, Q.unstable_getCurrentPriorityLevel = ir, Q.unstable_getFirstCallbackNode = Nn, Q.unstable_next = gt, Q.unstable_pauseExecution = _t, Q.unstable_requestPaint = Ni, Q.unstable_runWithPriority = Fe, Q.unstable_scheduleCallback = rt, Q.unstable_shouldYield = Ga, Q.unstable_wrapCallback = Ot, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(v0)), v0;
}
var uT;
function pT() {
  if (uT) return Gm.exports;
  uT = 1;
  var Q = {};
  return Q.NODE_ENV === "production" ? Gm.exports = ok() : Gm.exports = sk(), Gm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oT;
function ck() {
  if (oT) return Wa;
  oT = 1;
  var Q = tv(), ie = pT();
  function H(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var he = /* @__PURE__ */ new Set(), qe = {};
  function ct(n, r) {
    it(n, r), it(n + "Capture", r);
  }
  function it(n, r) {
    for (qe[n] = r, n = 0; n < r.length; n++) he.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), lt = Object.prototype.hasOwnProperty, me = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Y = {}, Re = {};
  function L(n) {
    return lt.call(Re, n) ? !0 : lt.call(Y, n) ? !1 : me.test(n) ? Re[n] = !0 : (Y[n] = !0, !1);
  }
  function X(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function M(n, r, l, o) {
    if (r === null || typeof r > "u" || X(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function J(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Be = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Be[n] = new J(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Be[r] = new J(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Be[n] = new J(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Be[n] = new J(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Be[n] = new J(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Be[n] = new J(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Be[n] = new J(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Be[n] = new J(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Be[n] = new J(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var vt = /[\-:]([a-z])/g;
  function Me(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      vt,
      Me
    );
    Be[r] = new J(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(vt, Me);
    Be[r] = new J(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(vt, Me);
    Be[r] = new J(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Be[n] = new J(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Be.xlinkHref = new J("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Be[n] = new J(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ut(n, r, l, o) {
    var c = Be.hasOwnProperty(r) ? Be[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (M(r, l, c, o) && (l = null), o || c === null ? L(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var He = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Rt = Symbol.for("react.element"), _e = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), ye = Symbol.for("react.strict_mode"), Pe = Symbol.for("react.profiler"), Ze = Symbol.for("react.provider"), At = Symbol.for("react.context"), Ye = Symbol.for("react.forward_ref"), nt = Symbol.for("react.suspense"), Oe = Symbol.for("react.suspense_list"), Ut = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), ft = Symbol.for("react.offscreen"), U = Symbol.iterator;
  function ue(n) {
    return n === null || typeof n != "object" ? null : (n = U && n[U] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ae = Object.assign, x;
  function $(n) {
    if (x === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      x = r && r[1] || "";
    }
    return `
` + x + n;
  }
  var xe = !1;
  function ge(n, r) {
    if (!n || xe) return "";
    xe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (F) {
          var o = F;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (F) {
          o = F;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (F) {
          o = F;
        }
        n();
      }
    } catch (F) {
      if (F && o && typeof F.stack == "string") {
        for (var c = F.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      xe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? $(n) : "";
  }
  function Fe(n) {
    switch (n.tag) {
      case 5:
        return $(n.type);
      case 16:
        return $("Lazy");
      case 13:
        return $("Suspense");
      case 19:
        return $("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ge(n.type, !1), n;
      case 11:
        return n = ge(n.type.render, !1), n;
      case 1:
        return n = ge(n.type, !0), n;
      default:
        return "";
    }
  }
  function gt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Z:
        return "Fragment";
      case _e:
        return "Portal";
      case Pe:
        return "Profiler";
      case ye:
        return "StrictMode";
      case nt:
        return "Suspense";
      case Oe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case At:
        return (n.displayName || "Context") + ".Consumer";
      case Ze:
        return (n._context.displayName || "Context") + ".Provider";
      case Ye:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Ut:
        return r = n.displayName || null, r !== null ? r : gt(n.type) || "Memo";
      case Ke:
        r = n._payload, n = n._init;
        try {
          return gt(n(r));
        } catch {
        }
    }
    return null;
  }
  function Ot(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return gt(r);
      case 8:
        return r === ye ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function rt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function _t(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Wt(n) {
    var r = _t(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Nn(n) {
    n._valueTracker || (n._valueTracker = Wt(n));
  }
  function qn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = _t(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function ir(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Mn(n, r) {
    var l = r.checked;
    return ae({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Cr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = rt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && ut(n, "checked", r, !1);
  }
  function zn(n, r) {
    Bn(n, r);
    var l = rt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ga(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ga(n, r.type, rt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function da(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Ga(n, r, l) {
    (r !== "number" || ir(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Or = Array.isArray;
  function $n(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + rt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Kn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(H(91));
    return ae({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Xn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(H(92));
        if (Or(l)) {
          if (1 < l.length) throw Error(H(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: rt(l) };
  }
  function Rr(n, r) {
    var l = rt(r.value), o = rt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function qa(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function An(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? An(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Wr, Ni = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Wr = Wr || document.createElement("div"), Wr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Wr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function pa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var le = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ve = ["Webkit", "ms", "Moz", "O"];
  Object.keys(le).forEach(function(n) {
    Ve.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), le[r] = le[n];
    });
  });
  function ht(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || le.hasOwnProperty(n) && le[n] ? ("" + r).trim() : r + "px";
  }
  function Pt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = ht(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var sn = ae({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function cn(n, r) {
    if (r) {
      if (sn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(H(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(H(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(H(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(H(62));
    }
  }
  function fn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Jn = null;
  function un(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Kt = null, Vt = null, va = null;
  function ka(n) {
    if (n = cs(n)) {
      if (typeof Kt != "function") throw Error(H(280));
      var r = n.stateNode;
      r && (r = Wi(r), Kt(n.stateNode, n.type, r));
    }
  }
  function Da(n) {
    Vt ? va ? va.push(n) : va = [n] : Vt = n;
  }
  function Mi() {
    if (Vt) {
      var n = Vt, r = va;
      if (va = Vt = null, ka(n), r) for (n = 0; n < r.length; n++) ka(r[n]);
    }
  }
  function Wl(n, r) {
    return n(r);
  }
  function Ql() {
  }
  var zi = !1;
  function Gl(n, r, l) {
    if (zi) return n(r, l);
    zi = !0;
    try {
      return Wl(n, r, l);
    } finally {
      zi = !1, (Vt !== null || va !== null) && (Ql(), Mi());
    }
  }
  function si(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Wi(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(H(231, r, typeof l));
    return l;
  }
  var ha = !1;
  if (S) try {
    var ur = {};
    Object.defineProperty(ur, "passive", { get: function() {
      ha = !0;
    } }), window.addEventListener("test", ur, ur), window.removeEventListener("test", ur, ur);
  } catch {
    ha = !1;
  }
  function ma(n, r, l, o, c, d, m, E, T) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, F);
    } catch (K) {
      this.onError(K);
    }
  }
  var Qr = !1, ci = null, fi = !1, Ai = null, R = { onError: function(n) {
    Qr = !0, ci = n;
  } };
  function G(n, r, l, o, c, d, m, E, T) {
    Qr = !1, ci = null, ma.apply(R, arguments);
  }
  function ce(n, r, l, o, c, d, m, E, T) {
    if (G.apply(this, arguments), Qr) {
      if (Qr) {
        var F = ci;
        Qr = !1, ci = null;
      } else throw Error(H(198));
      fi || (fi = !0, Ai = F);
    }
  }
  function de(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Et(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function et(n) {
    if (de(n) !== n) throw Error(H(188));
  }
  function Tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = de(n), r === null) throw Error(H(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return et(c), n;
          if (d === o) return et(c), r;
          d = d.sibling;
        }
        throw Error(H(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(H(189));
        }
      }
      if (l.alternate !== o) throw Error(H(190));
    }
    if (l.tag !== 3) throw Error(H(188));
    return l.stateNode.current === l ? n : r;
  }
  function mt(n) {
    return n = Tt(n), n !== null ? wn(n) : null;
  }
  function wn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = wn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var on = ie.unstable_scheduleCallback, dn = ie.unstable_cancelCallback, Tr = ie.unstable_shouldYield, Ka = ie.unstable_requestPaint, Bt = ie.unstable_now, mn = ie.unstable_getCurrentPriorityLevel, ot = ie.unstable_ImmediatePriority, di = ie.unstable_UserBlockingPriority, Ui = ie.unstable_NormalPriority, lc = ie.unstable_LowPriority, Fi = ie.unstable_IdlePriority, ol = null, Gr = null;
  function $o(n) {
    if (Gr && typeof Gr.onCommitFiberRoot == "function") try {
      Gr.onCommitFiberRoot(ol, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Lr = Math.clz32 ? Math.clz32 : oc, Yo = Math.log, uc = Math.LN2;
  function oc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Yo(n) / uc | 0) | 0;
  }
  var ji = 64, sl = 4194304;
  function qr(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function pi(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = qr(E) : (d &= m, d !== 0 && (o = qr(d)));
    } else m = l & ~c, m !== 0 ? o = qr(m) : d !== 0 && (o = qr(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Lr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function cl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Hu(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Lr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = cl(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function Hi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ql() {
    var n = ji;
    return ji <<= 1, !(ji & 4194240) && (ji = 64), n;
  }
  function Kl(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function fl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Lr(r), n[r] = l;
  }
  function Io(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Lr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Wo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Lr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Lt = 0;
  function Qo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Pu, Nt, sc, vi, Xe, Xl = !1, Zn = [], Kr = null, Nr = null, hi = null, Cn = /* @__PURE__ */ new Map(), Xt = /* @__PURE__ */ new Map(), Xa = [], Oa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function xr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Kr = null;
        break;
      case "dragenter":
      case "dragleave":
        Nr = null;
        break;
      case "mouseover":
      case "mouseout":
        hi = null;
        break;
      case "pointerover":
      case "pointerout":
        Cn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xt.delete(r.pointerId);
    }
  }
  function Mr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = cs(r), r !== null && Nt(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Xf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Kr = Mr(Kr, n, r, l, o, c), !0;
      case "dragenter":
        return Nr = Mr(Nr, n, r, l, o, c), !0;
      case "mouseover":
        return hi = Mr(hi, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Cn.set(d, Mr(Cn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Xt.set(d, Mr(Xt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Vu(n) {
    var r = lu(n.target);
    if (r !== null) {
      var l = de(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Et(l), r !== null) {
            n.blockedOn = r, Xe(n.priority, function() {
              sc(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Jl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Iu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Jn = o, l.target.dispatchEvent(o), Jn = null;
      } else return r = cs(l), r !== null && Nt(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Bu(n, r, l) {
    Jl(n) && l.delete(r);
  }
  function $u() {
    Xl = !1, Kr !== null && Jl(Kr) && (Kr = null), Nr !== null && Jl(Nr) && (Nr = null), hi !== null && Jl(hi) && (hi = null), Cn.forEach(Bu), Xt.forEach(Bu);
  }
  function Zl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Xl || (Xl = !0, ie.unstable_scheduleCallback(ie.unstable_NormalPriority, $u)));
  }
  function La(n) {
    function r(c) {
      return Zl(c, n);
    }
    if (0 < Zn.length) {
      Zl(Zn[0], n);
      for (var l = 1; l < Zn.length; l++) {
        var o = Zn[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Kr !== null && Zl(Kr, n), Nr !== null && Zl(Nr, n), hi !== null && Zl(hi, n), Cn.forEach(r), Xt.forEach(r), l = 0; l < Xa.length; l++) o = Xa[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Xa.length && (l = Xa[0], l.blockedOn === null); ) Vu(l), l.blockedOn === null && Xa.shift();
  }
  var Na = He.ReactCurrentBatchConfig, dl = !0;
  function Pi(n, r, l, o) {
    var c = Lt, d = Na.transition;
    Na.transition = null;
    try {
      Lt = 1, pl(n, r, l, o);
    } finally {
      Lt = c, Na.transition = d;
    }
  }
  function Yu(n, r, l, o) {
    var c = Lt, d = Na.transition;
    Na.transition = null;
    try {
      Lt = 4, pl(n, r, l, o);
    } finally {
      Lt = c, Na.transition = d;
    }
  }
  function pl(n, r, l, o) {
    if (dl) {
      var c = Iu(n, r, l, o);
      if (c === null) cd(n, r, o, Vi, l), xr(n, o);
      else if (Xf(c, n, r, l, o)) o.stopPropagation();
      else if (xr(n, o), r & 4 && -1 < Oa.indexOf(n)) {
        for (; c !== null; ) {
          var d = cs(c);
          if (d !== null && Pu(d), d = Iu(n, r, l, o), d === null && cd(n, r, o, Vi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else cd(n, r, o, null, l);
    }
  }
  var Vi = null;
  function Iu(n, r, l, o) {
    if (Vi = null, n = un(o), n = lu(n), n !== null) if (r = de(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Et(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Vi = n, null;
  }
  function Go(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (mn()) {
          case ot:
            return 1;
          case di:
            return 4;
          case Ui:
          case lc:
            return 16;
          case Fi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ma = null, Wu = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Wu, l = r.length, o, c = "value" in Ma ? Ma.value : Ma.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function z(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function P() {
    return !0;
  }
  function re() {
    return !1;
  }
  function be(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? P : re, this.isPropagationStopped = re, this;
    }
    return ae(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = P);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = P);
    }, persist: function() {
    }, isPersistent: P }), r;
  }
  var Se = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Qe = be(Se), yt = ae({}, Se, { view: 0, detail: 0 }), $t = be(yt), Jt, Zt, dt, rn = ae({}, yt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ja, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== dt && (dt && n.type === "mousemove" ? (Jt = n.screenX - dt.screenX, Zt = n.screenY - dt.screenY) : Zt = Jt = 0, dt = n), Jt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Zt;
  } }), bn = be(rn), eu = ae({}, rn, { dataTransfer: 0 }), qo = be(eu), Bi = ae({}, yt, { relatedTarget: 0 }), tu = be(Bi), Ko = ae({}, Se, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Jf = be(Ko), cc = ae({}, Se, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Zf = be(cc), nv = ae({}, Se, { data: 0 }), fc = be(nv), rv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, av = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, iv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Km(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = iv[n]) ? !!r[n] : !1;
  }
  function Ja() {
    return Km;
  }
  var Xm = ae({}, yt, { key: function(n) {
    if (n.key) {
      var r = rv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = z(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? av[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ja, charCode: function(n) {
    return n.type === "keypress" ? z(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? z(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ed = be(Xm), td = ae({}, rn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), dc = be(td), Jm = ae({}, yt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ja }), pc = be(Jm), lv = ae({}, Se, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xr = be(lv), $i = ae({}, rn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Un = be($i), Yi = [9, 13, 27, 32], Xo = S && "CompositionEvent" in window, vl = null;
  S && "documentMode" in document && (vl = document.documentMode);
  var Zm = S && "TextEvent" in window && !vl, Qu = S && (!Xo || vl && 8 < vl && 11 >= vl), uv = " ", ov = !1;
  function vc(n, r) {
    switch (n) {
      case "keyup":
        return Yi.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Gu = !1;
  function ey(n, r) {
    switch (n) {
      case "compositionend":
        return sv(r);
      case "keypress":
        return r.which !== 32 ? null : (ov = !0, uv);
      case "textInput":
        return n = r.data, n === uv && ov ? null : n;
      default:
        return null;
    }
  }
  function cv(n, r) {
    if (Gu) return n === "compositionend" || !Xo && vc(n, r) ? (n = C(), h = Wu = Ma = null, Gu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Qu && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ty = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function fv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ty[n.type] : r === "textarea";
  }
  function dv(n, r, l, o) {
    Da(o), r = us(r, "onChange"), 0 < r.length && (l = new Qe("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var qu = null, mi = null;
  function nd(n) {
    gc(n, 0);
  }
  function Jo(n) {
    var r = Ae(n);
    if (qn(r)) return n;
  }
  function pv(n, r) {
    if (n === "change") return r;
  }
  var vv = !1;
  if (S) {
    var rd;
    if (S) {
      var ad = "oninput" in document;
      if (!ad) {
        var hv = document.createElement("div");
        hv.setAttribute("oninput", "return;"), ad = typeof hv.oninput == "function";
      }
      rd = ad;
    } else rd = !1;
    vv = rd && (!document.documentMode || 9 < document.documentMode);
  }
  function mv() {
    qu && (qu.detachEvent("onpropertychange", yv), mi = qu = null);
  }
  function yv(n) {
    if (n.propertyName === "value" && Jo(mi)) {
      var r = [];
      dv(r, mi, n, un(n)), Gl(nd, r);
    }
  }
  function ny(n, r, l) {
    n === "focusin" ? (mv(), qu = r, mi = l, qu.attachEvent("onpropertychange", yv)) : n === "focusout" && mv();
  }
  function ry(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Jo(mi);
  }
  function gv(n, r) {
    if (n === "click") return Jo(r);
  }
  function ay(n, r) {
    if (n === "input" || n === "change") return Jo(r);
  }
  function Sv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Za = typeof Object.is == "function" ? Object.is : Sv;
  function Zo(n, r) {
    if (Za(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!lt.call(r, c) || !Za(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Ev(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Cv(n, r) {
    var l = Ev(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Ev(l);
    }
  }
  function hc(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? hc(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function hl() {
    for (var n = window, r = ir(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = ir(n.document);
    }
    return r;
  }
  function Ku(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Rv(n) {
    var r = hl(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && hc(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ku(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = Cv(l, d);
          var m = Cv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Xu = S && "documentMode" in document && 11 >= document.documentMode, Ju = null, id = null, es = null, ld = !1;
  function Tv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ld || Ju == null || Ju !== ir(o) || (o = Ju, "selectionStart" in o && Ku(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), es && Zo(es, o) || (es = o, o = us(id, "onSelect"), 0 < o.length && (r = new Qe("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Ju)));
  }
  function ts(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Zu = { animationend: ts("Animation", "AnimationEnd"), animationiteration: ts("Animation", "AnimationIteration"), animationstart: ts("Animation", "AnimationStart"), transitionend: ts("Transition", "TransitionEnd") }, mc = {}, wr = {};
  S && (wr = document.createElement("div").style, "AnimationEvent" in window || (delete Zu.animationend.animation, delete Zu.animationiteration.animation, delete Zu.animationstart.animation), "TransitionEvent" in window || delete Zu.transitionend.transition);
  function ns(n) {
    if (mc[n]) return mc[n];
    if (!Zu[n]) return n;
    var r = Zu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in wr) return mc[n] = r[l];
    return n;
  }
  var xv = ns("animationend"), wv = ns("animationiteration"), bv = ns("animationstart"), _v = ns("transitionend"), kv = /* @__PURE__ */ new Map(), ud = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yi(n, r) {
    kv.set(n, r), ct(r, [n]);
  }
  for (var nu = 0; nu < ud.length; nu++) {
    var od = ud[nu], rs = od.toLowerCase(), iy = od[0].toUpperCase() + od.slice(1);
    yi(rs, "on" + iy);
  }
  yi(xv, "onAnimationEnd"), yi(wv, "onAnimationIteration"), yi(bv, "onAnimationStart"), yi("dblclick", "onDoubleClick"), yi("focusin", "onFocus"), yi("focusout", "onBlur"), yi(_v, "onTransitionEnd"), it("onMouseEnter", ["mouseout", "mouseover"]), it("onMouseLeave", ["mouseout", "mouseover"]), it("onPointerEnter", ["pointerout", "pointerover"]), it("onPointerLeave", ["pointerout", "pointerover"]), ct("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ct("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ct("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ct("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ct("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ct("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ly = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function yc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ce(o, r, void 0, n), n.currentTarget = null;
  }
  function gc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, F = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          yc(c, E, F), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, F = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          yc(c, E, F), d = T;
        }
      }
    }
    if (fi) throw n = Ai, fi = !1, Ai = null, n;
  }
  function Yt(n, r) {
    var l = r[fd];
    l === void 0 && (l = r[fd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (sd(r, n, 2, !1), l.add(o));
  }
  function ml(n, r, l) {
    var o = 0;
    r && (o |= 4), sd(l, n, o, r);
  }
  var is = "_reactListening" + Math.random().toString(36).slice(2);
  function ls(n) {
    if (!n[is]) {
      n[is] = !0, he.forEach(function(l) {
        l !== "selectionchange" && (ly.has(l) || ml(l, !1, n), ml(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[is] || (r[is] = !0, ml("selectionchange", !1, r));
    }
  }
  function sd(n, r, l, o) {
    switch (Go(r)) {
      case 1:
        var c = Pi;
        break;
      case 4:
        c = Yu;
        break;
      default:
        c = pl;
    }
    l = c.bind(null, r, l, n), c = void 0, !ha || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function cd(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = lu(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    Gl(function() {
      var F = d, K = un(l), ee = [];
      e: {
        var q = kv.get(n);
        if (q !== void 0) {
          var Ee = Qe, ke = n;
          switch (n) {
            case "keypress":
              if (z(l) === 0) break e;
            case "keydown":
            case "keyup":
              Ee = ed;
              break;
            case "focusin":
              ke = "focus", Ee = tu;
              break;
            case "focusout":
              ke = "blur", Ee = tu;
              break;
            case "beforeblur":
            case "afterblur":
              Ee = tu;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Ee = bn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ee = qo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ee = pc;
              break;
            case xv:
            case wv:
            case bv:
              Ee = Jf;
              break;
            case _v:
              Ee = Xr;
              break;
            case "scroll":
              Ee = $t;
              break;
            case "wheel":
              Ee = Un;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ee = Zf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ee = dc;
          }
          var Le = (r & 4) !== 0, On = !Le && n === "scroll", k = Le ? q !== null ? q + "Capture" : null : q;
          Le = [];
          for (var b = F, N; b !== null; ) {
            N = b;
            var ne = N.stateNode;
            if (N.tag === 5 && ne !== null && (N = ne, k !== null && (ne = si(b, k), ne != null && Le.push(eo(b, ne, N)))), On) break;
            b = b.return;
          }
          0 < Le.length && (q = new Ee(q, ke, null, l, K), ee.push({ event: q, listeners: Le }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (q = n === "mouseover" || n === "pointerover", Ee = n === "mouseout" || n === "pointerout", q && l !== Jn && (ke = l.relatedTarget || l.fromElement) && (lu(ke) || ke[Ii])) break e;
          if ((Ee || q) && (q = K.window === K ? K : (q = K.ownerDocument) ? q.defaultView || q.parentWindow : window, Ee ? (ke = l.relatedTarget || l.toElement, Ee = F, ke = ke ? lu(ke) : null, ke !== null && (On = de(ke), ke !== On || ke.tag !== 5 && ke.tag !== 6) && (ke = null)) : (Ee = null, ke = F), Ee !== ke)) {
            if (Le = bn, ne = "onMouseLeave", k = "onMouseEnter", b = "mouse", (n === "pointerout" || n === "pointerover") && (Le = dc, ne = "onPointerLeave", k = "onPointerEnter", b = "pointer"), On = Ee == null ? q : Ae(Ee), N = ke == null ? q : Ae(ke), q = new Le(ne, b + "leave", Ee, l, K), q.target = On, q.relatedTarget = N, ne = null, lu(K) === F && (Le = new Le(k, b + "enter", ke, l, K), Le.target = N, Le.relatedTarget = On, ne = Le), On = ne, Ee && ke) t: {
              for (Le = Ee, k = ke, b = 0, N = Le; N; N = ru(N)) b++;
              for (N = 0, ne = k; ne; ne = ru(ne)) N++;
              for (; 0 < b - N; ) Le = ru(Le), b--;
              for (; 0 < N - b; ) k = ru(k), N--;
              for (; b--; ) {
                if (Le === k || k !== null && Le === k.alternate) break t;
                Le = ru(Le), k = ru(k);
              }
              Le = null;
            }
            else Le = null;
            Ee !== null && Sc(ee, q, Ee, Le, !1), ke !== null && On !== null && Sc(ee, On, ke, Le, !0);
          }
        }
        e: {
          if (q = F ? Ae(F) : window, Ee = q.nodeName && q.nodeName.toLowerCase(), Ee === "select" || Ee === "input" && q.type === "file") var pe = pv;
          else if (fv(q)) if (vv) pe = ay;
          else {
            pe = ry;
            var je = ny;
          }
          else (Ee = q.nodeName) && Ee.toLowerCase() === "input" && (q.type === "checkbox" || q.type === "radio") && (pe = gv);
          if (pe && (pe = pe(n, F))) {
            dv(ee, pe, l, K);
            break e;
          }
          je && je(n, q, F), n === "focusout" && (je = q._wrapperState) && je.controlled && q.type === "number" && Ga(q, "number", q.value);
        }
        switch (je = F ? Ae(F) : window, n) {
          case "focusin":
            (fv(je) || je.contentEditable === "true") && (Ju = je, id = F, es = null);
            break;
          case "focusout":
            es = id = Ju = null;
            break;
          case "mousedown":
            ld = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ld = !1, Tv(ee, l, K);
            break;
          case "selectionchange":
            if (Xu) break;
          case "keydown":
          case "keyup":
            Tv(ee, l, K);
        }
        var Ie;
        if (Xo) e: {
          switch (n) {
            case "compositionstart":
              var Je = "onCompositionStart";
              break e;
            case "compositionend":
              Je = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Je = "onCompositionUpdate";
              break e;
          }
          Je = void 0;
        }
        else Gu ? vc(n, l) && (Je = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Je = "onCompositionStart");
        Je && (Qu && l.locale !== "ko" && (Gu || Je !== "onCompositionStart" ? Je === "onCompositionEnd" && Gu && (Ie = C()) : (Ma = K, Wu = "value" in Ma ? Ma.value : Ma.textContent, Gu = !0)), je = us(F, Je), 0 < je.length && (Je = new fc(Je, n, null, l, K), ee.push({ event: Je, listeners: je }), Ie ? Je.data = Ie : (Ie = sv(l), Ie !== null && (Je.data = Ie)))), (Ie = Zm ? ey(n, l) : cv(n, l)) && (F = us(F, "onBeforeInput"), 0 < F.length && (K = new fc("onBeforeInput", "beforeinput", null, l, K), ee.push({ event: K, listeners: F }), K.data = Ie));
      }
      gc(ee, r);
    });
  }
  function eo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function us(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = si(n, l), d != null && o.unshift(eo(n, d, c)), d = si(n, r), d != null && o.push(eo(n, d, c))), n = n.return;
    }
    return o;
  }
  function ru(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Sc(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, F = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && F !== null && (E = F, c ? (T = si(l, d), T != null && m.unshift(eo(l, T, E))) : c || (T = si(l, d), T != null && m.push(eo(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var uy = /\r\n?/g, Dv = /\u0000|\uFFFD/g;
  function Ov(n) {
    return (typeof n == "string" ? n : "" + n).replace(uy, `
`).replace(Dv, "");
  }
  function Ec(n, r, l) {
    if (r = Ov(r), Ov(n) !== r && l) throw Error(H(425));
  }
  function Cc() {
  }
  var au = null, os = null;
  function iu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Rc = typeof setTimeout == "function" ? setTimeout : void 0, Lv = typeof clearTimeout == "function" ? clearTimeout : void 0, Tc = typeof Promise == "function" ? Promise : void 0, oy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Tc < "u" ? function(n) {
    return Tc.resolve(null).then(n).catch(to);
  } : Rc;
  function to(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function no(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), La(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    La(r);
  }
  function ei(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function xc(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var ro = Math.random().toString(36).slice(2), za = "__reactFiber$" + ro, ss = "__reactProps$" + ro, Ii = "__reactContainer$" + ro, fd = "__reactEvents$" + ro, dd = "__reactListeners$" + ro, ao = "__reactHandles$" + ro;
  function lu(n) {
    var r = n[za];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Ii] || l[za]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = xc(n); n !== null; ) {
          if (l = n[za]) return l;
          n = xc(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function cs(n) {
    return n = n[za] || n[Ii], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Ae(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(H(33));
  }
  function Wi(n) {
    return n[ss] || null;
  }
  var Rn = [], xt = -1;
  function Jr(n) {
    return { current: n };
  }
  function Qt(n) {
    0 > xt || (n.current = Rn[xt], Rn[xt] = null, xt--);
  }
  function an(n, r) {
    xt++, Rn[xt] = n.current, n.current = r;
  }
  var St = {}, yn = Jr(St), Fn = Jr(!1), Aa = St;
  function ya(n, r) {
    var l = n.type.contextTypes;
    if (!l) return St;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Tn(n) {
    return n = n.childContextTypes, n != null;
  }
  function gi() {
    Qt(Fn), Qt(yn);
  }
  function wc(n, r, l) {
    if (yn.current !== St) throw Error(H(168));
    an(yn, r), an(Fn, l);
  }
  function Nv(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(H(108, Ot(n) || "Unknown", c));
    return ae({}, l, o);
  }
  function uu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || St, Aa = yn.current, an(yn, n), an(Fn, Fn.current), !0;
  }
  function br(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(H(169));
    l ? (n = Nv(n, r, Aa), o.__reactInternalMemoizedMergedChildContext = n, Qt(Fn), Qt(yn), an(yn, n)) : Qt(Fn), an(Fn, l);
  }
  var ti = null, fs = !1, ds = !1;
  function yl(n) {
    ti === null ? ti = [n] : ti.push(n);
  }
  function pd(n) {
    fs = !0, yl(n);
  }
  function zr() {
    if (!ds && ti !== null) {
      ds = !0;
      var n = 0, r = Lt;
      try {
        var l = ti;
        for (Lt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ti = null, fs = !1;
      } catch (c) {
        throw ti !== null && (ti = ti.slice(n + 1)), on(ot, zr), c;
      } finally {
        Lt = r, ds = !1;
      }
    }
    return null;
  }
  var gl = [], Sl = 0, io = null, El = 0, or = [], jn = 0, ou = null, Ar = 1, Si = "";
  function Cl(n, r) {
    gl[Sl++] = El, gl[Sl++] = io, io = n, El = r;
  }
  function Mv(n, r, l) {
    or[jn++] = Ar, or[jn++] = Si, or[jn++] = ou, ou = n;
    var o = Ar;
    n = Si;
    var c = 32 - Lr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Lr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Ar = 1 << 32 - Lr(r) + c | l << c | o, Si = d + n;
    } else Ar = 1 << d | l << c | o, Si = n;
  }
  function vd(n) {
    n.return !== null && (Cl(n, 1), Mv(n, 1, 0));
  }
  function bc(n) {
    for (; n === io; ) io = gl[--Sl], gl[Sl] = null, El = gl[--Sl], gl[Sl] = null;
    for (; n === ou; ) ou = or[--jn], or[jn] = null, Si = or[--jn], or[jn] = null, Ar = or[--jn], or[jn] = null;
  }
  var Zr = null, ea = null, pn = !1, ni = null;
  function hd(n, r) {
    var l = Pa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function md(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Zr = n, ea = ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Zr = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ou !== null ? { id: Ar, overflow: Si } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Pa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Zr = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function yd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function gd(n) {
    if (pn) {
      var r = ea;
      if (r) {
        var l = r;
        if (!md(n, r)) {
          if (yd(n)) throw Error(H(418));
          r = ei(l.nextSibling);
          var o = Zr;
          r && md(n, r) ? hd(o, l) : (n.flags = n.flags & -4097 | 2, pn = !1, Zr = n);
        }
      } else {
        if (yd(n)) throw Error(H(418));
        n.flags = n.flags & -4097 | 2, pn = !1, Zr = n;
      }
    }
  }
  function zv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Zr = n;
  }
  function _n(n) {
    if (n !== Zr) return !1;
    if (!pn) return zv(n), pn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !iu(n.type, n.memoizedProps)), r && (r = ea)) {
      if (yd(n)) throw Av(), Error(H(418));
      for (; r; ) hd(n, r), r = ei(r.nextSibling);
    }
    if (zv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(H(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ea = ei(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ea = null;
      }
    } else ea = Zr ? ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Av() {
    for (var n = ea; n; ) n = ei(n.nextSibling);
  }
  function Qi() {
    ea = Zr = null, pn = !1;
  }
  function ps(n) {
    ni === null ? ni = [n] : ni.push(n);
  }
  var su = He.ReactCurrentBatchConfig;
  function vs(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(H(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(H(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(H(284));
      if (!l._owner) throw Error(H(290, n));
    }
    return n;
  }
  function lo(n, r) {
    throw n = Object.prototype.toString.call(r), Error(H(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Uv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Fv(n) {
    function r(k, b) {
      if (n) {
        var N = k.deletions;
        N === null ? (k.deletions = [b], k.flags |= 16) : N.push(b);
      }
    }
    function l(k, b) {
      if (!n) return null;
      for (; b !== null; ) r(k, b), b = b.sibling;
      return null;
    }
    function o(k, b) {
      for (k = /* @__PURE__ */ new Map(); b !== null; ) b.key !== null ? k.set(b.key, b) : k.set(b.index, b), b = b.sibling;
      return k;
    }
    function c(k, b) {
      return k = Nl(k, b), k.index = 0, k.sibling = null, k;
    }
    function d(k, b, N) {
      return k.index = N, n ? (N = k.alternate, N !== null ? (N = N.index, N < b ? (k.flags |= 2, b) : N) : (k.flags |= 2, b)) : (k.flags |= 1048576, b);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, b, N, ne) {
      return b === null || b.tag !== 6 ? (b = bu(N, k.mode, ne), b.return = k, b) : (b = c(b, N), b.return = k, b);
    }
    function T(k, b, N, ne) {
      var pe = N.type;
      return pe === Z ? K(k, b, N.props.children, ne, N.key) : b !== null && (b.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === Ke && Uv(pe) === b.type) ? (ne = c(b, N.props), ne.ref = vs(k, b, N), ne.return = k, ne) : (ne = df(N.type, N.key, N.props, null, k.mode, ne), ne.ref = vs(k, b, N), ne.return = k, ne);
    }
    function F(k, b, N, ne) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== N.containerInfo || b.stateNode.implementation !== N.implementation ? (b = qd(N, k.mode, ne), b.return = k, b) : (b = c(b, N.children || []), b.return = k, b);
    }
    function K(k, b, N, ne, pe) {
      return b === null || b.tag !== 7 ? (b = Ml(N, k.mode, ne, pe), b.return = k, b) : (b = c(b, N), b.return = k, b);
    }
    function ee(k, b, N) {
      if (typeof b == "string" && b !== "" || typeof b == "number") return b = bu("" + b, k.mode, N), b.return = k, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Rt:
            return N = df(b.type, b.key, b.props, null, k.mode, N), N.ref = vs(k, null, b), N.return = k, N;
          case _e:
            return b = qd(b, k.mode, N), b.return = k, b;
          case Ke:
            var ne = b._init;
            return ee(k, ne(b._payload), N);
        }
        if (Or(b) || ue(b)) return b = Ml(b, k.mode, N, null), b.return = k, b;
        lo(k, b);
      }
      return null;
    }
    function q(k, b, N, ne) {
      var pe = b !== null ? b.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number") return pe !== null ? null : E(k, b, "" + N, ne);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Rt:
            return N.key === pe ? T(k, b, N, ne) : null;
          case _e:
            return N.key === pe ? F(k, b, N, ne) : null;
          case Ke:
            return pe = N._init, q(
              k,
              b,
              pe(N._payload),
              ne
            );
        }
        if (Or(N) || ue(N)) return pe !== null ? null : K(k, b, N, ne, null);
        lo(k, N);
      }
      return null;
    }
    function Ee(k, b, N, ne, pe) {
      if (typeof ne == "string" && ne !== "" || typeof ne == "number") return k = k.get(N) || null, E(b, k, "" + ne, pe);
      if (typeof ne == "object" && ne !== null) {
        switch (ne.$$typeof) {
          case Rt:
            return k = k.get(ne.key === null ? N : ne.key) || null, T(b, k, ne, pe);
          case _e:
            return k = k.get(ne.key === null ? N : ne.key) || null, F(b, k, ne, pe);
          case Ke:
            var je = ne._init;
            return Ee(k, b, N, je(ne._payload), pe);
        }
        if (Or(ne) || ue(ne)) return k = k.get(N) || null, K(b, k, ne, pe, null);
        lo(b, ne);
      }
      return null;
    }
    function ke(k, b, N, ne) {
      for (var pe = null, je = null, Ie = b, Je = b = 0, Qn = null; Ie !== null && Je < N.length; Je++) {
        Ie.index > Je ? (Qn = Ie, Ie = null) : Qn = Ie.sibling;
        var Ft = q(k, Ie, N[Je], ne);
        if (Ft === null) {
          Ie === null && (Ie = Qn);
          break;
        }
        n && Ie && Ft.alternate === null && r(k, Ie), b = d(Ft, b, Je), je === null ? pe = Ft : je.sibling = Ft, je = Ft, Ie = Qn;
      }
      if (Je === N.length) return l(k, Ie), pn && Cl(k, Je), pe;
      if (Ie === null) {
        for (; Je < N.length; Je++) Ie = ee(k, N[Je], ne), Ie !== null && (b = d(Ie, b, Je), je === null ? pe = Ie : je.sibling = Ie, je = Ie);
        return pn && Cl(k, Je), pe;
      }
      for (Ie = o(k, Ie); Je < N.length; Je++) Qn = Ee(Ie, k, Je, N[Je], ne), Qn !== null && (n && Qn.alternate !== null && Ie.delete(Qn.key === null ? Je : Qn.key), b = d(Qn, b, Je), je === null ? pe = Qn : je.sibling = Qn, je = Qn);
      return n && Ie.forEach(function(Al) {
        return r(k, Al);
      }), pn && Cl(k, Je), pe;
    }
    function Le(k, b, N, ne) {
      var pe = ue(N);
      if (typeof pe != "function") throw Error(H(150));
      if (N = pe.call(N), N == null) throw Error(H(151));
      for (var je = pe = null, Ie = b, Je = b = 0, Qn = null, Ft = N.next(); Ie !== null && !Ft.done; Je++, Ft = N.next()) {
        Ie.index > Je ? (Qn = Ie, Ie = null) : Qn = Ie.sibling;
        var Al = q(k, Ie, Ft.value, ne);
        if (Al === null) {
          Ie === null && (Ie = Qn);
          break;
        }
        n && Ie && Al.alternate === null && r(k, Ie), b = d(Al, b, Je), je === null ? pe = Al : je.sibling = Al, je = Al, Ie = Qn;
      }
      if (Ft.done) return l(
        k,
        Ie
      ), pn && Cl(k, Je), pe;
      if (Ie === null) {
        for (; !Ft.done; Je++, Ft = N.next()) Ft = ee(k, Ft.value, ne), Ft !== null && (b = d(Ft, b, Je), je === null ? pe = Ft : je.sibling = Ft, je = Ft);
        return pn && Cl(k, Je), pe;
      }
      for (Ie = o(k, Ie); !Ft.done; Je++, Ft = N.next()) Ft = Ee(Ie, k, Je, Ft.value, ne), Ft !== null && (n && Ft.alternate !== null && Ie.delete(Ft.key === null ? Je : Ft.key), b = d(Ft, b, Je), je === null ? pe = Ft : je.sibling = Ft, je = Ft);
      return n && Ie.forEach(function(Ry) {
        return r(k, Ry);
      }), pn && Cl(k, Je), pe;
    }
    function On(k, b, N, ne) {
      if (typeof N == "object" && N !== null && N.type === Z && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Rt:
            e: {
              for (var pe = N.key, je = b; je !== null; ) {
                if (je.key === pe) {
                  if (pe = N.type, pe === Z) {
                    if (je.tag === 7) {
                      l(k, je.sibling), b = c(je, N.props.children), b.return = k, k = b;
                      break e;
                    }
                  } else if (je.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === Ke && Uv(pe) === je.type) {
                    l(k, je.sibling), b = c(je, N.props), b.ref = vs(k, je, N), b.return = k, k = b;
                    break e;
                  }
                  l(k, je);
                  break;
                } else r(k, je);
                je = je.sibling;
              }
              N.type === Z ? (b = Ml(N.props.children, k.mode, ne, N.key), b.return = k, k = b) : (ne = df(N.type, N.key, N.props, null, k.mode, ne), ne.ref = vs(k, b, N), ne.return = k, k = ne);
            }
            return m(k);
          case _e:
            e: {
              for (je = N.key; b !== null; ) {
                if (b.key === je) if (b.tag === 4 && b.stateNode.containerInfo === N.containerInfo && b.stateNode.implementation === N.implementation) {
                  l(k, b.sibling), b = c(b, N.children || []), b.return = k, k = b;
                  break e;
                } else {
                  l(k, b);
                  break;
                }
                else r(k, b);
                b = b.sibling;
              }
              b = qd(N, k.mode, ne), b.return = k, k = b;
            }
            return m(k);
          case Ke:
            return je = N._init, On(k, b, je(N._payload), ne);
        }
        if (Or(N)) return ke(k, b, N, ne);
        if (ue(N)) return Le(k, b, N, ne);
        lo(k, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, b !== null && b.tag === 6 ? (l(k, b.sibling), b = c(b, N), b.return = k, k = b) : (l(k, b), b = bu(N, k.mode, ne), b.return = k, k = b), m(k)) : l(k, b);
    }
    return On;
  }
  var ri = Fv(!0), sr = Fv(!1), se = Jr(null), ga = null, _r = null, Sd = null;
  function Ed() {
    Sd = _r = ga = null;
  }
  function Cd(n) {
    var r = se.current;
    Qt(se), n._currentValue = r;
  }
  function Rd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function uo(n, r) {
    ga = n, Sd = _r = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (nr = !0), n.firstContext = null);
  }
  function Gt(n) {
    var r = n._currentValue;
    if (Sd !== n) if (n = { context: n, memoizedValue: r, next: null }, _r === null) {
      if (ga === null) throw Error(H(308));
      _r = n, ga.dependencies = { lanes: 0, firstContext: n };
    } else _r = _r.next = n;
    return r;
  }
  var cu = null;
  function Td(n) {
    cu === null ? cu = [n] : cu.push(n);
  }
  function jv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Td(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ei(n, o);
  }
  function Ei(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ua = !1;
  function Rl(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Hv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Gi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Tl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, wt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ei(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Td(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ei(n, l);
  }
  function _c(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wo(n, l);
    }
  }
  function Pv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function kc(n, r, l, o) {
    var c = n.updateQueue;
    Ua = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, F = T.next;
      T.next = null, m === null ? d = F : m.next = F, m = T;
      var K = n.alternate;
      K !== null && (K = K.updateQueue, E = K.lastBaseUpdate, E !== m && (E === null ? K.firstBaseUpdate = F : E.next = F, K.lastBaseUpdate = T));
    }
    if (d !== null) {
      var ee = c.baseState;
      m = 0, K = F = T = null, E = d;
      do {
        var q = E.lane, Ee = E.eventTime;
        if ((o & q) === q) {
          K !== null && (K = K.next = {
            eventTime: Ee,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ke = n, Le = E;
            switch (q = r, Ee = l, Le.tag) {
              case 1:
                if (ke = Le.payload, typeof ke == "function") {
                  ee = ke.call(Ee, ee, q);
                  break e;
                }
                ee = ke;
                break e;
              case 3:
                ke.flags = ke.flags & -65537 | 128;
              case 0:
                if (ke = Le.payload, q = typeof ke == "function" ? ke.call(Ee, ee, q) : ke, q == null) break e;
                ee = ae({}, ee, q);
                break e;
              case 2:
                Ua = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, q = c.effects, q === null ? c.effects = [E] : q.push(E));
        } else Ee = { eventTime: Ee, lane: q, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, K === null ? (F = K = Ee, T = ee) : K = K.next = Ee, m |= q;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          q = E, E = q.next, q.next = null, c.lastBaseUpdate = q, c.shared.pending = null;
        }
      } while (!0);
      if (K === null && (T = ee), c.baseState = T, c.firstBaseUpdate = F, c.lastBaseUpdate = K, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Eu |= m, n.lanes = m, n.memoizedState = ee;
    }
  }
  function xd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(H(191, c));
        c.call(o);
      }
    }
  }
  var oo = {}, Ci = Jr(oo), hs = Jr(oo), ms = Jr(oo);
  function fu(n) {
    if (n === oo) throw Error(H(174));
    return n;
  }
  function wd(n, r) {
    switch (an(ms, r), an(hs, n), an(Ci, oo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : lr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = lr(r, n);
    }
    Qt(Ci), an(Ci, r);
  }
  function so() {
    Qt(Ci), Qt(hs), Qt(ms);
  }
  function bd(n) {
    fu(ms.current);
    var r = fu(Ci.current), l = lr(r, n.type);
    r !== l && (an(hs, n), an(Ci, l));
  }
  function _d(n) {
    hs.current === n && (Qt(Ci), Qt(hs));
  }
  var gn = Jr(0);
  function Dc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var kd = [];
  function ys() {
    for (var n = 0; n < kd.length; n++) kd[n]._workInProgressVersionPrimary = null;
    kd.length = 0;
  }
  var Ue = He.ReactCurrentDispatcher, Ct = He.ReactCurrentBatchConfig, kt = 0, st = null, en = null, Yn = null, Oc = !1, gs = !1, Ss = 0, Dd = 0;
  function I() {
    throw Error(H(321));
  }
  function Hn(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Za(n[l], r[l])) return !1;
    return !0;
  }
  function We(n, r, l, o, c, d) {
    if (kt = d, st = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ue.current = n === null || n.memoizedState === null ? Ic : Wc, n = l(o, c), gs) {
      d = 0;
      do {
        if (gs = !1, Ss = 0, 25 <= d) throw Error(H(301));
        d += 1, Yn = en = null, r.updateQueue = null, Ue.current = xs, n = l(o, c);
      } while (gs);
    }
    if (Ue.current = qt, r = en !== null && en.next !== null, kt = 0, Yn = en = st = null, Oc = !1, r) throw Error(H(300));
    return n;
  }
  function xl() {
    var n = Ss !== 0;
    return Ss = 0, n;
  }
  function er() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Yn === null ? st.memoizedState = Yn = n : Yn = Yn.next = n, Yn;
  }
  function tr() {
    if (en === null) {
      var n = st.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = en.next;
    var r = Yn === null ? st.memoizedState : Yn.next;
    if (r !== null) Yn = r, en = n;
    else {
      if (n === null) throw Error(H(310));
      en = n, n = { memoizedState: en.memoizedState, baseState: en.baseState, baseQueue: en.baseQueue, queue: en.queue, next: null }, Yn === null ? st.memoizedState = Yn = n : Yn = Yn.next = n;
    }
    return Yn;
  }
  function ta(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function du(n) {
    var r = tr(), l = r.queue;
    if (l === null) throw Error(H(311));
    l.lastRenderedReducer = n;
    var o = en, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, F = d;
      do {
        var K = F.lane;
        if ((kt & K) === K) T !== null && (T = T.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), o = F.hasEagerState ? F.eagerState : n(o, F.action);
        else {
          var ee = {
            lane: K,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          T === null ? (E = T = ee, m = o) : T = T.next = ee, st.lanes |= K, Eu |= K;
        }
        F = F.next;
      } while (F !== null && F !== d);
      T === null ? m = o : T.next = E, Za(o, r.memoizedState) || (nr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, st.lanes |= d, Eu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function wl(n) {
    var r = tr(), l = r.queue;
    if (l === null) throw Error(H(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Za(d, r.memoizedState) || (nr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function co() {
  }
  function Lc(n, r) {
    var l = st, o = tr(), c = r(), d = !Za(o.memoizedState, c);
    if (d && (o.memoizedState = c, nr = !0), o = o.queue, Es(zc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Yn !== null && Yn.memoizedState.tag & 1) {
      if (l.flags |= 2048, pu(9, Mc.bind(null, l, o, c, r), void 0, null), Pn === null) throw Error(H(349));
      kt & 30 || Nc(l, r, c);
    }
    return c;
  }
  function Nc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = st.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, st.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Mc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Ac(r) && Uc(n);
  }
  function zc(n, r, l) {
    return l(function() {
      Ac(r) && Uc(n);
    });
  }
  function Ac(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Za(n, l);
    } catch {
      return !0;
    }
  }
  function Uc(n) {
    var r = Ei(n, 1);
    r !== null && Ra(r, n, 1, -1);
  }
  function Fc(n) {
    var r = er();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ts.bind(null, st, n), [r.memoizedState, n];
  }
  function pu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = st.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, st.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function jc() {
    return tr().memoizedState;
  }
  function fo(n, r, l, o) {
    var c = er();
    st.flags |= n, c.memoizedState = pu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function po(n, r, l, o) {
    var c = tr();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (en !== null) {
      var m = en.memoizedState;
      if (d = m.destroy, o !== null && Hn(o, m.deps)) {
        c.memoizedState = pu(r, l, d, o);
        return;
      }
    }
    st.flags |= n, c.memoizedState = pu(1 | r, l, d, o);
  }
  function Hc(n, r) {
    return fo(8390656, 8, n, r);
  }
  function Es(n, r) {
    return po(2048, 8, n, r);
  }
  function Pc(n, r) {
    return po(4, 2, n, r);
  }
  function Vc(n, r) {
    return po(4, 4, n, r);
  }
  function Cs(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function vu(n, r, l) {
    return l = l != null ? l.concat([n]) : null, po(4, 4, Cs.bind(null, r, n), l);
  }
  function Rs() {
  }
  function Bc(n, r) {
    var l = tr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Hn(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function $c(n, r) {
    var l = tr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Hn(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Yc(n, r, l) {
    return kt & 21 ? (Za(l, r) || (l = ql(), st.lanes |= l, Eu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, nr = !0), n.memoizedState = l);
  }
  function Vv(n, r) {
    var l = Lt;
    Lt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Ct.transition;
    Ct.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = l, Ct.transition = o;
    }
  }
  function vo() {
    return tr().memoizedState;
  }
  function Bv(n, r, l) {
    var o = Ca(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, bl(n)) na(r, l);
    else if (l = jv(n, r, l, o), l !== null) {
      var c = ln();
      Ra(l, n, o, c), $v(l, r, o);
    }
  }
  function Ts(n, r, l) {
    var o = Ca(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (bl(n)) na(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Za(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Td(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = jv(n, r, c, o), l !== null && (c = ln(), Ra(l, n, o, c), $v(l, r, o));
    }
  }
  function bl(n) {
    var r = n.alternate;
    return n === st || r !== null && r === st;
  }
  function na(n, r) {
    gs = Oc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function $v(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wo(n, l);
    }
  }
  var qt = { readContext: Gt, useCallback: I, useContext: I, useEffect: I, useImperativeHandle: I, useInsertionEffect: I, useLayoutEffect: I, useMemo: I, useReducer: I, useRef: I, useState: I, useDebugValue: I, useDeferredValue: I, useTransition: I, useMutableSource: I, useSyncExternalStore: I, useId: I, unstable_isNewReconciler: !1 }, Ic = { readContext: Gt, useCallback: function(n, r) {
    return er().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Gt, useEffect: Hc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, fo(
      4194308,
      4,
      Cs.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return fo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return fo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = er();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = er();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Bv.bind(null, st, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = er();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Fc, useDebugValue: Rs, useDeferredValue: function(n) {
    return er().memoizedState = n;
  }, useTransition: function() {
    var n = Fc(!1), r = n[0];
    return n = Vv.bind(null, n[1]), er().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = st, c = er();
    if (pn) {
      if (l === void 0) throw Error(H(407));
      l = l();
    } else {
      if (l = r(), Pn === null) throw Error(H(349));
      kt & 30 || Nc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Hc(zc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, pu(9, Mc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = er(), r = Pn.identifierPrefix;
    if (pn) {
      var l = Si, o = Ar;
      l = (o & ~(1 << 32 - Lr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ss++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Dd++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Wc = {
    readContext: Gt,
    useCallback: Bc,
    useContext: Gt,
    useEffect: Es,
    useImperativeHandle: vu,
    useInsertionEffect: Pc,
    useLayoutEffect: Vc,
    useMemo: $c,
    useReducer: du,
    useRef: jc,
    useState: function() {
      return du(ta);
    },
    useDebugValue: Rs,
    useDeferredValue: function(n) {
      var r = tr();
      return Yc(r, en.memoizedState, n);
    },
    useTransition: function() {
      var n = du(ta)[0], r = tr().memoizedState;
      return [n, r];
    },
    useMutableSource: co,
    useSyncExternalStore: Lc,
    useId: vo,
    unstable_isNewReconciler: !1
  }, xs = { readContext: Gt, useCallback: Bc, useContext: Gt, useEffect: Es, useImperativeHandle: vu, useInsertionEffect: Pc, useLayoutEffect: Vc, useMemo: $c, useReducer: wl, useRef: jc, useState: function() {
    return wl(ta);
  }, useDebugValue: Rs, useDeferredValue: function(n) {
    var r = tr();
    return en === null ? r.memoizedState = n : Yc(r, en.memoizedState, n);
  }, useTransition: function() {
    var n = wl(ta)[0], r = tr().memoizedState;
    return [n, r];
  }, useMutableSource: co, useSyncExternalStore: Lc, useId: vo, unstable_isNewReconciler: !1 };
  function ra(n, r) {
    if (n && n.defaultProps) {
      r = ae({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Od(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ae({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? de(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = ln(), c = Ca(n), d = Gi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ra(r, n, c, o), _c(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = ln(), c = Ca(n), d = Gi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ra(r, n, c, o), _c(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = ln(), o = Ca(n), c = Gi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Tl(n, c, o), r !== null && (Ra(r, n, o, l), _c(r, n, o));
  } };
  function Yv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Zo(l, o) || !Zo(c, d) : !0;
  }
  function Iv(n, r, l) {
    var o = !1, c = St, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Gt(d) : (c = Tn(r) ? Aa : yn.current, o = r.contextTypes, d = (o = o != null) ? ya(n, c) : St), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Qc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Gc(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Qc.enqueueReplaceState(r, r.state, null);
  }
  function Ld(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Rl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Gt(d) : (d = Tn(r) ? Aa : yn.current, c.context = ya(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Od(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Qc.enqueueReplaceState(c, c.state, null), kc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _l(n, r) {
    try {
      var l = "", o = r;
      do
        l += Fe(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function qc(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Nd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var sy = typeof WeakMap == "function" ? WeakMap : Map;
  function ws(n, r, l) {
    l = Gi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Dl || (Dl = !0, Ms = o), Nd(n, r);
    }, l;
  }
  function Wv(n, r, l) {
    l = Gi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Nd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Nd(n, r), typeof o != "function" && (Ha === null ? Ha = /* @__PURE__ */ new Set([this]) : Ha.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Md(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new sy();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Wd.bind(null, n, r, l), r.then(n, n));
  }
  function zd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Qv(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Gi(-1, 1), r.tag = 2, Tl(l, r, 1))), l.lanes |= 1), n);
  }
  var hu = He.ReactCurrentOwner, nr = !1;
  function kn(n, r, l, o) {
    r.child = n === null ? sr(r, null, l, o) : ri(r, n.child, l, o);
  }
  function Kc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return uo(r, c), o = We(n, r, l, o, d, c), l = xl(), n !== null && !nr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (pn && l && vd(r), r.flags |= 1, kn(n, r, o, c), r.child);
  }
  function aa(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Gd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, mu(n, r, d, o, c)) : (n = df(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zo, l(m, o) && n.ref === r.ref) return cr(n, r, c);
    }
    return r.flags |= 1, n = Nl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function mu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Zo(d, o) && n.ref === r.ref) if (nr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (nr = !0);
      else return r.lanes = n.lanes, cr(n, r, c);
    }
    return Xc(n, r, l, o, c);
  }
  function pt(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, an(go, Ea), Ea |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, an(go, Ea), Ea |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, an(go, Ea), Ea |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, an(go, Ea), Ea |= o;
    return kn(n, r, c, l), r.child;
  }
  function bs(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Xc(n, r, l, o, c) {
    var d = Tn(l) ? Aa : yn.current;
    return d = ya(r, d), uo(r, c), l = We(n, r, l, o, d, c), o = xl(), n !== null && !nr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (pn && o && vd(r), r.flags |= 1, kn(n, r, l, c), r.child);
  }
  function cy(n, r, l, o, c) {
    if (Tn(l)) {
      var d = !0;
      uu(r);
    } else d = !1;
    if (uo(r, c), r.stateNode === null) Fa(n, r), Iv(r, l, o), Ld(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, F = l.contextType;
      typeof F == "object" && F !== null ? F = Gt(F) : (F = Tn(l) ? Aa : yn.current, F = ya(r, F));
      var K = l.getDerivedStateFromProps, ee = typeof K == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      ee || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== F) && Gc(r, m, o, F), Ua = !1;
      var q = r.memoizedState;
      m.state = q, kc(r, o, m, c), T = r.memoizedState, E !== o || q !== T || Fn.current || Ua ? (typeof K == "function" && (Od(r, l, K, o), T = r.memoizedState), (E = Ua || Yv(r, l, E, o, q, T, F)) ? (ee || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = F, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Hv(n, r), E = r.memoizedProps, F = r.type === r.elementType ? E : ra(r.type, E), m.props = F, ee = r.pendingProps, q = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Gt(T) : (T = Tn(l) ? Aa : yn.current, T = ya(r, T));
      var Ee = l.getDerivedStateFromProps;
      (K = typeof Ee == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== ee || q !== T) && Gc(r, m, o, T), Ua = !1, q = r.memoizedState, m.state = q, kc(r, o, m, c);
      var ke = r.memoizedState;
      E !== ee || q !== ke || Fn.current || Ua ? (typeof Ee == "function" && (Od(r, l, Ee, o), ke = r.memoizedState), (F = Ua || Yv(r, l, F, o, q, ke, T) || !1) ? (K || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ke, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ke, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ke), m.props = o, m.state = ke, m.context = T, o = F) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Ad(n, r, l, o, d, c);
  }
  function Ad(n, r, l, o, c, d) {
    bs(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && br(r, l, !1), cr(n, r, d);
    o = r.stateNode, hu.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ri(r, n.child, null, d), r.child = ri(r, null, E, d)) : kn(n, r, E, d), r.memoizedState = o.state, c && br(r, l, !0), r.child;
  }
  function Jc(n) {
    var r = n.stateNode;
    r.pendingContext ? wc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && wc(n, r.context, !1), wd(n, r.containerInfo);
  }
  function ho(n, r, l, o, c) {
    return Qi(), ps(c), r.flags |= 256, kn(n, r, l, o), r.child;
  }
  var Ud = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Zc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Gv(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), an(gn, c & 1), n === null)
      return gd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = xo(m, o, 0, null), n = Ml(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Zc(l), r.memoizedState = Ud, n) : _s(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return qv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Nl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Nl(E, d) : (d = Ml(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Zc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Ud, o;
    }
    return d = n.child, n = d.sibling, o = Nl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function _s(n, r) {
    return r = xo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ef(n, r, l, o) {
    return o !== null && ps(o), ri(r, n.child, null, l), n = _s(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function qv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = qc(Error(H(422))), ef(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = xo({ mode: "visible", children: o.children }, c, 0, null), d = Ml(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ri(r, n.child, null, m), r.child.memoizedState = Zc(m), r.memoizedState = Ud, d);
    if (!(r.mode & 1)) return ef(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(H(419)), o = qc(d, o, void 0), ef(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, nr || E) {
      if (o = Pn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ei(n, c), Ra(o, n, c, -1));
      }
      return Yd(), o = qc(Error(H(421))), ef(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = my.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ea = ei(c.nextSibling), Zr = r, pn = !0, ni = null, n !== null && (or[jn++] = Ar, or[jn++] = Si, or[jn++] = ou, Ar = n.id, Si = n.overflow, ou = r), r = _s(r, o.children), r.flags |= 4096, r);
  }
  function Fd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Rd(n.return, r, l);
  }
  function tf(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function ia(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (kn(n, r, o.children, l), o = gn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Fd(n, l, r);
        else if (n.tag === 19) Fd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (an(gn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Dc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), tf(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Dc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        tf(r, !0, l, null, d);
        break;
      case "together":
        tf(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Fa(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function cr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Eu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(H(153));
    if (r.child !== null) {
      for (n = r.child, l = Nl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Nl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function nf(n, r, l) {
    switch (r.tag) {
      case 3:
        Jc(r), Qi();
        break;
      case 5:
        bd(r);
        break;
      case 1:
        Tn(r.type) && uu(r);
        break;
      case 4:
        wd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        an(se, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (an(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Gv(n, r, l) : (an(gn, gn.current & 1), n = cr(n, r, l), n !== null ? n.sibling : null);
        an(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return ia(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), an(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, pt(n, r, l);
    }
    return cr(n, r, l);
  }
  var mo, Sa, In, Kv;
  mo = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Sa = function() {
  }, In = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, fu(Ci.current);
      var d = null;
      switch (l) {
        case "input":
          c = Mn(n, c), o = Mn(n, o), d = [];
          break;
        case "select":
          c = ae({}, c, { value: void 0 }), o = ae({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Kn(n, c), o = Kn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Cc);
      }
      cn(l, o);
      var m;
      l = null;
      for (F in c) if (!o.hasOwnProperty(F) && c.hasOwnProperty(F) && c[F] != null) if (F === "style") {
        var E = c[F];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (qe.hasOwnProperty(F) ? d || (d = []) : (d = d || []).push(F, null));
      for (F in o) {
        var T = o[F];
        if (E = c != null ? c[F] : void 0, o.hasOwnProperty(F) && T !== E && (T != null || E != null)) if (F === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          F,
          l
        )), l = T;
        else F === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(F, T)) : F === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(F, "" + T) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (qe.hasOwnProperty(F) ? (T != null && F === "onScroll" && Yt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(F, T));
      }
      l && (d = d || []).push("style", l);
      var F = d;
      (r.updateQueue = F) && (r.flags |= 4);
    }
  }, Kv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ks(n, r) {
    if (!pn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function kr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function jd(n, r, l) {
    var o = r.pendingProps;
    switch (bc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return kr(r), null;
      case 1:
        return Tn(r.type) && gi(), kr(r), null;
      case 3:
        return o = r.stateNode, so(), Qt(Fn), Qt(yn), ys(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (_n(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ni !== null && (Fs(ni), ni = null))), Sa(n, r), kr(r), null;
      case 5:
        _d(r);
        var c = fu(ms.current);
        if (l = r.type, n !== null && r.stateNode != null) In(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(H(166));
            return kr(r), null;
          }
          if (n = fu(Ci.current), _n(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[za] = r, o[ss] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Yt("cancel", o), Yt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Yt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < as.length; c++) Yt(as[c], o);
                break;
              case "source":
                Yt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Yt(
                  "error",
                  o
                ), Yt("load", o);
                break;
              case "details":
                Yt("toggle", o);
                break;
              case "input":
                Cr(o, d), Yt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Yt("invalid", o);
                break;
              case "textarea":
                Xn(o, d), Yt("invalid", o);
            }
            cn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Ec(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Ec(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : qe.hasOwnProperty(m) && E != null && m === "onScroll" && Yt("scroll", o);
            }
            switch (l) {
              case "input":
                Nn(o), da(o, d, !0);
                break;
              case "textarea":
                Nn(o), qa(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Cc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = An(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[za] = r, n[ss] = o, mo(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = fn(l, o), l) {
                case "dialog":
                  Yt("cancel", n), Yt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Yt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < as.length; c++) Yt(as[c], n);
                  c = o;
                  break;
                case "source":
                  Yt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Yt(
                    "error",
                    n
                  ), Yt("load", n), c = o;
                  break;
                case "details":
                  Yt("toggle", n), c = o;
                  break;
                case "input":
                  Cr(n, o), c = Mn(n, o), Yt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ae({}, o, { value: void 0 }), Yt("invalid", n);
                  break;
                case "textarea":
                  Xn(n, o), c = Kn(n, o), Yt("invalid", n);
                  break;
                default:
                  c = o;
              }
              cn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Pt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Ni(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && pa(n, T) : typeof T == "number" && pa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (qe.hasOwnProperty(d) ? T != null && d === "onScroll" && Yt("scroll", n) : T != null && ut(n, d, T, m));
              }
              switch (l) {
                case "input":
                  Nn(n), da(n, o, !1);
                  break;
                case "textarea":
                  Nn(n), qa(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + rt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? $n(n, !!o.multiple, d, !1) : o.defaultValue != null && $n(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Cc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return kr(r), null;
      case 6:
        if (n && r.stateNode != null) Kv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(H(166));
          if (l = fu(ms.current), fu(Ci.current), _n(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[za] = r, (d = o.nodeValue !== l) && (n = Zr, n !== null)) switch (n.tag) {
              case 3:
                Ec(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ec(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[za] = r, r.stateNode = o;
        }
        return kr(r), null;
      case 13:
        if (Qt(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (pn && ea !== null && r.mode & 1 && !(r.flags & 128)) Av(), Qi(), r.flags |= 98560, d = !1;
          else if (d = _n(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(H(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(H(317));
              d[za] = r;
            } else Qi(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            kr(r), d = !1;
          } else ni !== null && (Fs(ni), ni = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? Wn === 0 && (Wn = 3) : Yd())), r.updateQueue !== null && (r.flags |= 4), kr(r), null);
      case 4:
        return so(), Sa(n, r), n === null && ls(r.stateNode.containerInfo), kr(r), null;
      case 10:
        return Cd(r.type._context), kr(r), null;
      case 17:
        return Tn(r.type) && gi(), kr(r), null;
      case 19:
        if (Qt(gn), d = r.memoizedState, d === null) return kr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) ks(d, !1);
        else {
          if (Wn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Dc(n), m !== null) {
              for (r.flags |= 128, ks(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return an(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Bt() > Eo && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Dc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ks(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !pn) return kr(r), null;
          } else 2 * Bt() - d.renderingStartTime > Eo && l !== 1073741824 && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Bt(), r.sibling = null, l = gn.current, an(gn, o ? l & 1 | 2 : l & 1), r) : (kr(r), null);
      case 22:
      case 23:
        return $d(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Ea & 1073741824 && (kr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : kr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(H(156, r.tag));
  }
  function Xv(n, r) {
    switch (bc(r), r.tag) {
      case 1:
        return Tn(r.type) && gi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return so(), Qt(Fn), Qt(yn), ys(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return _d(r), null;
      case 13:
        if (Qt(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(H(340));
          Qi();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Qt(gn), null;
      case 4:
        return so(), null;
      case 10:
        return Cd(r.type._context), null;
      case 22:
      case 23:
        return $d(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var yu = !1, fr = !1, fy = typeof WeakSet == "function" ? WeakSet : Set, we = null;
  function kl(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      xn(n, r, o);
    }
    else l.current = null;
  }
  function Hd(n, r, l) {
    try {
      l();
    } catch (o) {
      xn(n, r, o);
    }
  }
  var Pd = !1;
  function dy(n, r) {
    if (au = dl, n = hl(), Ku(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, F = 0, K = 0, ee = n, q = null;
          t: for (; ; ) {
            for (var Ee; ee !== l || c !== 0 && ee.nodeType !== 3 || (E = m + c), ee !== d || o !== 0 && ee.nodeType !== 3 || (T = m + o), ee.nodeType === 3 && (m += ee.nodeValue.length), (Ee = ee.firstChild) !== null; )
              q = ee, ee = Ee;
            for (; ; ) {
              if (ee === n) break t;
              if (q === l && ++F === c && (E = m), q === d && ++K === o && (T = m), (Ee = ee.nextSibling) !== null) break;
              ee = q, q = ee.parentNode;
            }
            ee = Ee;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (os = { focusedElem: n, selectionRange: l }, dl = !1, we = r; we !== null; ) if (r = we, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, we = n;
    else for (; we !== null; ) {
      r = we;
      try {
        var ke = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ke !== null) {
              var Le = ke.memoizedProps, On = ke.memoizedState, k = r.stateNode, b = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Le : ra(r.type, Le), On);
              k.__reactInternalSnapshotBeforeUpdate = b;
            }
            break;
          case 3:
            var N = r.stateNode.containerInfo;
            N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(H(163));
        }
      } catch (ne) {
        xn(r, r.return, ne);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, we = n;
        break;
      }
      we = r.return;
    }
    return ke = Pd, Pd = !1, ke;
  }
  function yo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Hd(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function rf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function af(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Jv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Jv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[za], delete r[ss], delete r[fd], delete r[dd], delete r[ao])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function lf(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ds(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || lf(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ri(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Cc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ri(n, r, l), n = n.sibling; n !== null; ) Ri(n, r, l), n = n.sibling;
  }
  function Ti(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ti(n, r, l), n = n.sibling; n !== null; ) Ti(n, r, l), n = n.sibling;
  }
  var Sn = null, Ur = !1;
  function ja(n, r, l) {
    for (l = l.child; l !== null; ) qi(n, r, l), l = l.sibling;
  }
  function qi(n, r, l) {
    if (Gr && typeof Gr.onCommitFiberUnmount == "function") try {
      Gr.onCommitFiberUnmount(ol, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        fr || kl(l, r);
      case 6:
        var o = Sn, c = Ur;
        Sn = null, ja(n, r, l), Sn = o, Ur = c, Sn !== null && (Ur ? (n = Sn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Sn.removeChild(l.stateNode));
        break;
      case 18:
        Sn !== null && (Ur ? (n = Sn, l = l.stateNode, n.nodeType === 8 ? no(n.parentNode, l) : n.nodeType === 1 && no(n, l), La(n)) : no(Sn, l.stateNode));
        break;
      case 4:
        o = Sn, c = Ur, Sn = l.stateNode.containerInfo, Ur = !0, ja(n, r, l), Sn = o, Ur = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!fr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Hd(l, r, m), c = c.next;
          } while (c !== o);
        }
        ja(n, r, l);
        break;
      case 1:
        if (!fr && (kl(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          xn(l, r, E);
        }
        ja(n, r, l);
        break;
      case 21:
        ja(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (fr = (o = fr) || l.memoizedState !== null, ja(n, r, l), fr = o) : ja(n, r, l);
        break;
      default:
        ja(n, r, l);
    }
  }
  function Zv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new fy()), r.forEach(function(o) {
        var c = yy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ai(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              Sn = E.stateNode, Ur = !1;
              break e;
            case 3:
              Sn = E.stateNode.containerInfo, Ur = !0;
              break e;
            case 4:
              Sn = E.stateNode.containerInfo, Ur = !0;
              break e;
          }
          E = E.return;
        }
        if (Sn === null) throw Error(H(160));
        qi(d, m, c), Sn = null, Ur = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (F) {
        xn(c, r, F);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) eh(r, n), r = r.sibling;
  }
  function eh(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ai(r, n), ii(n), o & 4) {
          try {
            yo(3, n, n.return), rf(3, n);
          } catch (Le) {
            xn(n, n.return, Le);
          }
          try {
            yo(5, n, n.return);
          } catch (Le) {
            xn(n, n.return, Le);
          }
        }
        break;
      case 1:
        ai(r, n), ii(n), o & 512 && l !== null && kl(l, l.return);
        break;
      case 5:
        if (ai(r, n), ii(n), o & 512 && l !== null && kl(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            pa(c, "");
          } catch (Le) {
            xn(n, n.return, Le);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Bn(c, d), fn(E, m);
            var F = fn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var K = T[m], ee = T[m + 1];
              K === "style" ? Pt(c, ee) : K === "dangerouslySetInnerHTML" ? Ni(c, ee) : K === "children" ? pa(c, ee) : ut(c, K, ee, F);
            }
            switch (E) {
              case "input":
                zn(c, d);
                break;
              case "textarea":
                Rr(c, d);
                break;
              case "select":
                var q = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var Ee = d.value;
                Ee != null ? $n(c, !!d.multiple, Ee, !1) : q !== !!d.multiple && (d.defaultValue != null ? $n(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : $n(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ss] = d;
          } catch (Le) {
            xn(n, n.return, Le);
          }
        }
        break;
      case 6:
        if (ai(r, n), ii(n), o & 4) {
          if (n.stateNode === null) throw Error(H(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Le) {
            xn(n, n.return, Le);
          }
        }
        break;
      case 3:
        if (ai(r, n), ii(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          La(r.containerInfo);
        } catch (Le) {
          xn(n, n.return, Le);
        }
        break;
      case 4:
        ai(r, n), ii(n);
        break;
      case 13:
        ai(r, n), ii(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Bd = Bt())), o & 4 && Zv(n);
        break;
      case 22:
        if (K = l !== null && l.memoizedState !== null, n.mode & 1 ? (fr = (F = fr) || K, ai(r, n), fr = F) : ai(r, n), ii(n), o & 8192) {
          if (F = n.memoizedState !== null, (n.stateNode.isHidden = F) && !K && n.mode & 1) for (we = n, K = n.child; K !== null; ) {
            for (ee = we = K; we !== null; ) {
              switch (q = we, Ee = q.child, q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  yo(4, q, q.return);
                  break;
                case 1:
                  kl(q, q.return);
                  var ke = q.stateNode;
                  if (typeof ke.componentWillUnmount == "function") {
                    o = q, l = q.return;
                    try {
                      r = o, ke.props = r.memoizedProps, ke.state = r.memoizedState, ke.componentWillUnmount();
                    } catch (Le) {
                      xn(o, l, Le);
                    }
                  }
                  break;
                case 5:
                  kl(q, q.return);
                  break;
                case 22:
                  if (q.memoizedState !== null) {
                    nh(ee);
                    continue;
                  }
              }
              Ee !== null ? (Ee.return = q, we = Ee) : nh(ee);
            }
            K = K.sibling;
          }
          e: for (K = null, ee = n; ; ) {
            if (ee.tag === 5) {
              if (K === null) {
                K = ee;
                try {
                  c = ee.stateNode, F ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = ee.stateNode, T = ee.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = ht("display", m));
                } catch (Le) {
                  xn(n, n.return, Le);
                }
              }
            } else if (ee.tag === 6) {
              if (K === null) try {
                ee.stateNode.nodeValue = F ? "" : ee.memoizedProps;
              } catch (Le) {
                xn(n, n.return, Le);
              }
            } else if ((ee.tag !== 22 && ee.tag !== 23 || ee.memoizedState === null || ee === n) && ee.child !== null) {
              ee.child.return = ee, ee = ee.child;
              continue;
            }
            if (ee === n) break e;
            for (; ee.sibling === null; ) {
              if (ee.return === null || ee.return === n) break e;
              K === ee && (K = null), ee = ee.return;
            }
            K === ee && (K = null), ee.sibling.return = ee.return, ee = ee.sibling;
          }
        }
        break;
      case 19:
        ai(r, n), ii(n), o & 4 && Zv(n);
        break;
      case 21:
        break;
      default:
        ai(
          r,
          n
        ), ii(n);
    }
  }
  function ii(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (lf(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(H(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (pa(c, ""), o.flags &= -33);
            var d = Ds(n);
            Ti(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ds(n);
            Ri(n, E, m);
            break;
          default:
            throw Error(H(161));
        }
      } catch (T) {
        xn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Os(n, r, l) {
    we = n, th(n);
  }
  function th(n, r, l) {
    for (var o = (n.mode & 1) !== 0; we !== null; ) {
      var c = we, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || yu;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || fr;
          E = yu;
          var F = fr;
          if (yu = m, (fr = T) && !F) for (we = c; we !== null; ) m = we, T = m.child, m.tag === 22 && m.memoizedState !== null ? Ls(c) : T !== null ? (T.return = m, we = T) : Ls(c);
          for (; d !== null; ) we = d, th(d), d = d.sibling;
          we = c, yu = E, fr = F;
        }
        Vd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, we = d) : Vd(n);
    }
  }
  function Vd(n) {
    for (; we !== null; ) {
      var r = we;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              fr || rf(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !fr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ra(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && xd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                xd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var F = r.alternate;
                if (F !== null) {
                  var K = F.memoizedState;
                  if (K !== null) {
                    var ee = K.dehydrated;
                    ee !== null && La(ee);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(H(163));
          }
          fr || r.flags & 512 && af(r);
        } catch (q) {
          xn(r, r.return, q);
        }
      }
      if (r === n) {
        we = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, we = l;
        break;
      }
      we = r.return;
    }
  }
  function nh(n) {
    for (; we !== null; ) {
      var r = we;
      if (r === n) {
        we = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, we = l;
        break;
      }
      we = r.return;
    }
  }
  function Ls(n) {
    for (; we !== null; ) {
      var r = we;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              rf(4, r);
            } catch (T) {
              xn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                xn(r, c, T);
              }
            }
            var d = r.return;
            try {
              af(r);
            } catch (T) {
              xn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              af(r);
            } catch (T) {
              xn(r, m, T);
            }
        }
      } catch (T) {
        xn(r, r.return, T);
      }
      if (r === n) {
        we = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, we = E;
        break;
      }
      we = r.return;
    }
  }
  var rh = Math.ceil, uf = He.ReactCurrentDispatcher, gu = He.ReactCurrentOwner, Dr = He.ReactCurrentBatchConfig, wt = 0, Pn = null, Dn = null, dr = 0, Ea = 0, go = Jr(0), Wn = 0, Su = null, Eu = 0, Cu = 0, Ns = 0, So = null, la = null, Bd = 0, Eo = 1 / 0, Ki = null, Dl = !1, Ms = null, Ha = null, of = !1, Ol = null, zs = 0, Co = 0, Ro = null, Ru = -1, As = 0;
  function ln() {
    return wt & 6 ? Bt() : Ru !== -1 ? Ru : Ru = Bt();
  }
  function Ca(n) {
    return n.mode & 1 ? wt & 2 && dr !== 0 ? dr & -dr : su.transition !== null ? (As === 0 && (As = ql()), As) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Go(n.type)), n) : 1;
  }
  function Ra(n, r, l, o) {
    if (50 < Co) throw Co = 0, Ro = null, Error(H(185));
    fl(n, l, o), (!(wt & 2) || n !== Pn) && (n === Pn && (!(wt & 2) && (Cu |= l), Wn === 4 && Ll(n, dr)), rr(n, o), l === 1 && wt === 0 && !(r.mode & 1) && (Eo = Bt() + 500, fs && zr()));
  }
  function rr(n, r) {
    var l = n.callbackNode;
    Hu(n, r);
    var o = pi(n, n === Pn ? dr : 0);
    if (o === 0) l !== null && dn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && dn(l), r === 1) n.tag === 0 ? pd(Hs.bind(null, n)) : yl(Hs.bind(null, n)), oy(function() {
        !(wt & 6) && zr();
      }), l = null;
      else {
        switch (Qo(o)) {
          case 1:
            l = ot;
            break;
          case 4:
            l = di;
            break;
          case 16:
            l = Ui;
            break;
          case 536870912:
            l = Fi;
            break;
          default:
            l = Ui;
        }
        l = sh(l, ah.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function ah(n, r) {
    if (Ru = -1, As = 0, wt & 6) throw Error(H(327));
    var l = n.callbackNode;
    if (To() && n.callbackNode !== l) return null;
    var o = pi(n, n === Pn ? dr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = ff(n, o);
    else {
      r = o;
      var c = wt;
      wt |= 2;
      var d = ih();
      (Pn !== n || dr !== r) && (Ki = null, Eo = Bt() + 500, xu(n, r));
      do
        try {
          vy();
          break;
        } catch (E) {
          cf(n, E);
        }
      while (!0);
      Ed(), uf.current = d, wt = c, Dn !== null ? r = 0 : (Pn = null, dr = 0, r = Wn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Hi(n), c !== 0 && (o = c, r = Us(n, c))), r === 1) throw l = Su, xu(n, 0), Ll(n, o), rr(n, Bt()), l;
      if (r === 6) Ll(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !js(c) && (r = ff(n, o), r === 2 && (d = Hi(n), d !== 0 && (o = d, r = Us(n, d))), r === 1)) throw l = Su, xu(n, 0), Ll(n, o), rr(n, Bt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(H(345));
          case 2:
            wu(n, la, Ki);
            break;
          case 3:
            if (Ll(n, o), (o & 130023424) === o && (r = Bd + 500 - Bt(), 10 < r)) {
              if (pi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                ln(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Rc(wu.bind(null, n, la, Ki), r);
              break;
            }
            wu(n, la, Ki);
            break;
          case 4:
            if (Ll(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Lr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Bt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * rh(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Rc(wu.bind(null, n, la, Ki), o);
              break;
            }
            wu(n, la, Ki);
            break;
          case 5:
            wu(n, la, Ki);
            break;
          default:
            throw Error(H(329));
        }
      }
    }
    return rr(n, Bt()), n.callbackNode === l ? ah.bind(null, n) : null;
  }
  function Us(n, r) {
    var l = So;
    return n.current.memoizedState.isDehydrated && (xu(n, r).flags |= 256), n = ff(n, r), n !== 2 && (r = la, la = l, r !== null && Fs(r)), n;
  }
  function Fs(n) {
    la === null ? la = n : la.push.apply(la, n);
  }
  function js(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Za(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ll(n, r) {
    for (r &= ~Ns, r &= ~Cu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Lr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Hs(n) {
    if (wt & 6) throw Error(H(327));
    To();
    var r = pi(n, 0);
    if (!(r & 1)) return rr(n, Bt()), null;
    var l = ff(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Hi(n);
      o !== 0 && (r = o, l = Us(n, o));
    }
    if (l === 1) throw l = Su, xu(n, 0), Ll(n, r), rr(n, Bt()), l;
    if (l === 6) throw Error(H(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, wu(n, la, Ki), rr(n, Bt()), null;
  }
  function sf(n, r) {
    var l = wt;
    wt |= 1;
    try {
      return n(r);
    } finally {
      wt = l, wt === 0 && (Eo = Bt() + 500, fs && zr());
    }
  }
  function Tu(n) {
    Ol !== null && Ol.tag === 0 && !(wt & 6) && To();
    var r = wt;
    wt |= 1;
    var l = Dr.transition, o = Lt;
    try {
      if (Dr.transition = null, Lt = 1, n) return n();
    } finally {
      Lt = o, Dr.transition = l, wt = r, !(wt & 6) && zr();
    }
  }
  function $d() {
    Ea = go.current, Qt(go);
  }
  function xu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Lv(l)), Dn !== null) for (l = Dn.return; l !== null; ) {
      var o = l;
      switch (bc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && gi();
          break;
        case 3:
          so(), Qt(Fn), Qt(yn), ys();
          break;
        case 5:
          _d(o);
          break;
        case 4:
          so();
          break;
        case 13:
          Qt(gn);
          break;
        case 19:
          Qt(gn);
          break;
        case 10:
          Cd(o.type._context);
          break;
        case 22:
        case 23:
          $d();
      }
      l = l.return;
    }
    if (Pn = n, Dn = n = Nl(n.current, null), dr = Ea = r, Wn = 0, Su = null, Ns = Cu = Eu = 0, la = So = null, cu !== null) {
      for (r = 0; r < cu.length; r++) if (l = cu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      cu = null;
    }
    return n;
  }
  function cf(n, r) {
    do {
      var l = Dn;
      try {
        if (Ed(), Ue.current = qt, Oc) {
          for (var o = st.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Oc = !1;
        }
        if (kt = 0, Yn = en = st = null, gs = !1, Ss = 0, gu.current = null, l === null || l.return === null) {
          Wn = 1, Su = r, Dn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = dr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var F = T, K = E, ee = K.tag;
            if (!(K.mode & 1) && (ee === 0 || ee === 11 || ee === 15)) {
              var q = K.alternate;
              q ? (K.updateQueue = q.updateQueue, K.memoizedState = q.memoizedState, K.lanes = q.lanes) : (K.updateQueue = null, K.memoizedState = null);
            }
            var Ee = zd(m);
            if (Ee !== null) {
              Ee.flags &= -257, Qv(Ee, m, E, d, r), Ee.mode & 1 && Md(d, F, r), r = Ee, T = F;
              var ke = r.updateQueue;
              if (ke === null) {
                var Le = /* @__PURE__ */ new Set();
                Le.add(T), r.updateQueue = Le;
              } else ke.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Md(d, F, r), Yd();
                break e;
              }
              T = Error(H(426));
            }
          } else if (pn && E.mode & 1) {
            var On = zd(m);
            if (On !== null) {
              !(On.flags & 65536) && (On.flags |= 256), Qv(On, m, E, d, r), ps(_l(T, E));
              break e;
            }
          }
          d = T = _l(T, E), Wn !== 4 && (Wn = 2), So === null ? So = [d] : So.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = ws(d, T, r);
                Pv(d, k);
                break e;
              case 1:
                E = T;
                var b = d.type, N = d.stateNode;
                if (!(d.flags & 128) && (typeof b.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (Ha === null || !Ha.has(N)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ne = Wv(d, E, r);
                  Pv(d, ne);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        lh(l);
      } catch (pe) {
        r = pe, Dn === l && l !== null && (Dn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ih() {
    var n = uf.current;
    return uf.current = qt, n === null ? qt : n;
  }
  function Yd() {
    (Wn === 0 || Wn === 3 || Wn === 2) && (Wn = 4), Pn === null || !(Eu & 268435455) && !(Cu & 268435455) || Ll(Pn, dr);
  }
  function ff(n, r) {
    var l = wt;
    wt |= 2;
    var o = ih();
    (Pn !== n || dr !== r) && (Ki = null, xu(n, r));
    do
      try {
        py();
        break;
      } catch (c) {
        cf(n, c);
      }
    while (!0);
    if (Ed(), wt = l, uf.current = o, Dn !== null) throw Error(H(261));
    return Pn = null, dr = 0, Wn;
  }
  function py() {
    for (; Dn !== null; ) Id(Dn);
  }
  function vy() {
    for (; Dn !== null && !Tr(); ) Id(Dn);
  }
  function Id(n) {
    var r = Qd(n.alternate, n, Ea);
    n.memoizedProps = n.pendingProps, r === null ? lh(n) : Dn = r, gu.current = null;
  }
  function lh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Xv(l, r), l !== null) {
          l.flags &= 32767, Dn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Wn = 6, Dn = null;
          return;
        }
      } else if (l = jd(l, r, Ea), l !== null) {
        Dn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Dn = r;
        return;
      }
      Dn = r = n;
    } while (r !== null);
    Wn === 0 && (Wn = 5);
  }
  function wu(n, r, l) {
    var o = Lt, c = Dr.transition;
    try {
      Dr.transition = null, Lt = 1, hy(n, r, l, o);
    } finally {
      Dr.transition = c, Lt = o;
    }
    return null;
  }
  function hy(n, r, l, o) {
    do
      To();
    while (Ol !== null);
    if (wt & 6) throw Error(H(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(H(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Io(n, d), n === Pn && (Dn = Pn = null, dr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || of || (of = !0, sh(Ui, function() {
      return To(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Dr.transition, Dr.transition = null;
      var m = Lt;
      Lt = 1;
      var E = wt;
      wt |= 4, gu.current = null, dy(n, l), eh(l, n), Rv(os), dl = !!au, os = au = null, n.current = l, Os(l), Ka(), wt = E, Lt = m, Dr.transition = d;
    } else n.current = l;
    if (of && (of = !1, Ol = n, zs = c), d = n.pendingLanes, d === 0 && (Ha = null), $o(l.stateNode), rr(n, Bt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Dl) throw Dl = !1, n = Ms, Ms = null, n;
    return zs & 1 && n.tag !== 0 && To(), d = n.pendingLanes, d & 1 ? n === Ro ? Co++ : (Co = 0, Ro = n) : Co = 0, zr(), null;
  }
  function To() {
    if (Ol !== null) {
      var n = Qo(zs), r = Dr.transition, l = Lt;
      try {
        if (Dr.transition = null, Lt = 16 > n ? 16 : n, Ol === null) var o = !1;
        else {
          if (n = Ol, Ol = null, zs = 0, wt & 6) throw Error(H(331));
          var c = wt;
          for (wt |= 4, we = n.current; we !== null; ) {
            var d = we, m = d.child;
            if (we.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var F = E[T];
                  for (we = F; we !== null; ) {
                    var K = we;
                    switch (K.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yo(8, K, d);
                    }
                    var ee = K.child;
                    if (ee !== null) ee.return = K, we = ee;
                    else for (; we !== null; ) {
                      K = we;
                      var q = K.sibling, Ee = K.return;
                      if (Jv(K), K === F) {
                        we = null;
                        break;
                      }
                      if (q !== null) {
                        q.return = Ee, we = q;
                        break;
                      }
                      we = Ee;
                    }
                  }
                }
                var ke = d.alternate;
                if (ke !== null) {
                  var Le = ke.child;
                  if (Le !== null) {
                    ke.child = null;
                    do {
                      var On = Le.sibling;
                      Le.sibling = null, Le = On;
                    } while (Le !== null);
                  }
                }
                we = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, we = m;
            else e: for (; we !== null; ) {
              if (d = we, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  yo(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, we = k;
                break e;
              }
              we = d.return;
            }
          }
          var b = n.current;
          for (we = b; we !== null; ) {
            m = we;
            var N = m.child;
            if (m.subtreeFlags & 2064 && N !== null) N.return = m, we = N;
            else e: for (m = b; we !== null; ) {
              if (E = we, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rf(9, E);
                }
              } catch (pe) {
                xn(E, E.return, pe);
              }
              if (E === m) {
                we = null;
                break e;
              }
              var ne = E.sibling;
              if (ne !== null) {
                ne.return = E.return, we = ne;
                break e;
              }
              we = E.return;
            }
          }
          if (wt = c, zr(), Gr && typeof Gr.onPostCommitFiberRoot == "function") try {
            Gr.onPostCommitFiberRoot(ol, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Lt = l, Dr.transition = r;
      }
    }
    return !1;
  }
  function uh(n, r, l) {
    r = _l(l, r), r = ws(n, r, 1), n = Tl(n, r, 1), r = ln(), n !== null && (fl(n, 1, r), rr(n, r));
  }
  function xn(n, r, l) {
    if (n.tag === 3) uh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        uh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ha === null || !Ha.has(o))) {
          n = _l(l, n), n = Wv(r, n, 1), r = Tl(r, n, 1), n = ln(), r !== null && (fl(r, 1, n), rr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Wd(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = ln(), n.pingedLanes |= n.suspendedLanes & l, Pn === n && (dr & l) === l && (Wn === 4 || Wn === 3 && (dr & 130023424) === dr && 500 > Bt() - Bd ? xu(n, 0) : Ns |= l), rr(n, r);
  }
  function oh(n, r) {
    r === 0 && (n.mode & 1 ? (r = sl, sl <<= 1, !(sl & 130023424) && (sl = 4194304)) : r = 1);
    var l = ln();
    n = Ei(n, r), n !== null && (fl(n, r, l), rr(n, l));
  }
  function my(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), oh(n, l);
  }
  function yy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(H(314));
    }
    o !== null && o.delete(r), oh(n, l);
  }
  var Qd;
  Qd = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Fn.current) nr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return nr = !1, nf(n, r, l);
      nr = !!(n.flags & 131072);
    }
    else nr = !1, pn && r.flags & 1048576 && Mv(r, El, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Fa(n, r), n = r.pendingProps;
        var c = ya(r, yn.current);
        uo(r, l), c = We(null, r, o, n, c, l);
        var d = xl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Tn(o) ? (d = !0, uu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Rl(r), c.updater = Qc, r.stateNode = c, c._reactInternals = r, Ld(r, o, n, l), r = Ad(null, r, o, !0, d, l)) : (r.tag = 0, pn && d && vd(r), kn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Fa(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Sy(o), n = ra(o, n), c) {
            case 0:
              r = Xc(null, r, o, n, l);
              break e;
            case 1:
              r = cy(null, r, o, n, l);
              break e;
            case 11:
              r = Kc(null, r, o, n, l);
              break e;
            case 14:
              r = aa(null, r, o, ra(o.type, n), l);
              break e;
          }
          throw Error(H(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), Xc(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), cy(n, r, o, c, l);
      case 3:
        e: {
          if (Jc(r), n === null) throw Error(H(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Hv(n, r), kc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _l(Error(H(423)), r), r = ho(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _l(Error(H(424)), r), r = ho(n, r, o, l, c);
            break e;
          } else for (ea = ei(r.stateNode.containerInfo.firstChild), Zr = r, pn = !0, ni = null, l = sr(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Qi(), o === c) {
              r = cr(n, r, l);
              break e;
            }
            kn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return bd(r), n === null && gd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, iu(o, c) ? m = null : d !== null && iu(o, d) && (r.flags |= 32), bs(n, r), kn(n, r, m, l), r.child;
      case 6:
        return n === null && gd(r), null;
      case 13:
        return Gv(n, r, l);
      case 4:
        return wd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ri(r, null, o, l) : kn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), Kc(n, r, o, c, l);
      case 7:
        return kn(n, r, r.pendingProps, l), r.child;
      case 8:
        return kn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return kn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, an(se, o._currentValue), o._currentValue = m, d !== null) if (Za(d.value, m)) {
            if (d.children === c.children && !Fn.current) {
              r = cr(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = Gi(-1, l & -l), T.tag = 2;
                    var F = d.updateQueue;
                    if (F !== null) {
                      F = F.shared;
                      var K = F.pending;
                      K === null ? T.next = T : (T.next = K.next, K.next = T), F.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Rd(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(H(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Rd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          kn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, uo(r, l), c = Gt(c), o = o(c), r.flags |= 1, kn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ra(o, r.pendingProps), c = ra(o.type, c), aa(n, r, o, c, l);
      case 15:
        return mu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), Fa(n, r), r.tag = 1, Tn(o) ? (n = !0, uu(r)) : n = !1, uo(r, l), Iv(r, o, c), Ld(r, o, c, l), Ad(null, r, o, !0, n, l);
      case 19:
        return ia(n, r, l);
      case 22:
        return pt(n, r, l);
    }
    throw Error(H(156, r.tag));
  };
  function sh(n, r) {
    return on(n, r);
  }
  function gy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pa(n, r, l, o) {
    return new gy(n, r, l, o);
  }
  function Gd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Sy(n) {
    if (typeof n == "function") return Gd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Ye) return 11;
      if (n === Ut) return 14;
    }
    return 2;
  }
  function Nl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Pa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function df(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Gd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Z:
        return Ml(l.children, c, d, r);
      case ye:
        m = 8, c |= 8;
        break;
      case Pe:
        return n = Pa(12, l, r, c | 2), n.elementType = Pe, n.lanes = d, n;
      case nt:
        return n = Pa(13, l, r, c), n.elementType = nt, n.lanes = d, n;
      case Oe:
        return n = Pa(19, l, r, c), n.elementType = Oe, n.lanes = d, n;
      case ft:
        return xo(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Ze:
            m = 10;
            break e;
          case At:
            m = 9;
            break e;
          case Ye:
            m = 11;
            break e;
          case Ut:
            m = 14;
            break e;
          case Ke:
            m = 16, o = null;
            break e;
        }
        throw Error(H(130, n == null ? n : typeof n, ""));
    }
    return r = Pa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ml(n, r, l, o) {
    return n = Pa(7, n, o, r), n.lanes = l, n;
  }
  function xo(n, r, l, o) {
    return n = Pa(22, n, o, r), n.elementType = ft, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function bu(n, r, l) {
    return n = Pa(6, n, null, r), n.lanes = l, n;
  }
  function qd(n, r, l) {
    return r = Pa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ch(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kl(0), this.expirationTimes = Kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function pf(n, r, l, o, c, d, m, E, T) {
    return n = new ch(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Pa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rl(d), n;
  }
  function fh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: _e, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function dh(n) {
    if (!n) return St;
    n = n._reactInternals;
    e: {
      if (de(n) !== n || n.tag !== 1) throw Error(H(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Tn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(H(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Tn(l)) return Nv(n, l, r);
    }
    return r;
  }
  function Kd(n, r, l, o, c, d, m, E, T) {
    return n = pf(l, o, !0, n, c, d, m, E, T), n.context = dh(null), l = n.current, o = ln(), c = Ca(l), d = Gi(o, c), d.callback = r ?? null, Tl(l, d, c), n.current.lanes = c, fl(n, c, o), rr(n, o), n;
  }
  function vf(n, r, l, o) {
    var c = r.current, d = ln(), m = Ca(c);
    return l = dh(l), r.context === null ? r.context = l : r.pendingContext = l, r = Gi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Tl(c, r, m), n !== null && (Ra(n, c, m, d), _c(n, c, m)), m;
  }
  function hf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function ph(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function mf(n, r) {
    ph(n, r), (n = n.alternate) && ph(n, r);
  }
  function vh() {
    return null;
  }
  var Xd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function zl(n) {
    this._internalRoot = n;
  }
  yf.prototype.render = zl.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(H(409));
    vf(n, r, null, null);
  }, yf.prototype.unmount = zl.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Tu(function() {
        vf(null, n, null, null);
      }), r[Ii] = null;
    }
  };
  function yf(n) {
    this._internalRoot = n;
  }
  yf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = vi();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Xa.length && r !== 0 && r < Xa[l].priority; l++) ;
      Xa.splice(l, 0, n), l === 0 && Vu(n);
    }
  };
  function Jd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function gf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function hh() {
  }
  function Ey(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var F = hf(m);
          d.call(F);
        };
      }
      var m = Kd(r, o, n, 0, null, !1, !1, "", hh);
      return n._reactRootContainer = m, n[Ii] = m.current, ls(n.nodeType === 8 ? n.parentNode : n), Tu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var F = hf(T);
        E.call(F);
      };
    }
    var T = pf(n, 0, !1, null, null, !1, !1, "", hh);
    return n._reactRootContainer = T, n[Ii] = T.current, ls(n.nodeType === 8 ? n.parentNode : n), Tu(function() {
      vf(r, T, l, o);
    }), T;
  }
  function Sf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = hf(m);
          E.call(T);
        };
      }
      vf(r, m, n, c);
    } else m = Ey(l, r, n, c, o);
    return hf(m);
  }
  Pu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = qr(r.pendingLanes);
          l !== 0 && (Wo(r, l | 1), rr(r, Bt()), !(wt & 6) && (Eo = Bt() + 500, zr()));
        }
        break;
      case 13:
        Tu(function() {
          var o = Ei(n, 1);
          if (o !== null) {
            var c = ln();
            Ra(o, n, 1, c);
          }
        }), mf(n, 1);
    }
  }, Nt = function(n) {
    if (n.tag === 13) {
      var r = Ei(n, 134217728);
      if (r !== null) {
        var l = ln();
        Ra(r, n, 134217728, l);
      }
      mf(n, 134217728);
    }
  }, sc = function(n) {
    if (n.tag === 13) {
      var r = Ca(n), l = Ei(n, r);
      if (l !== null) {
        var o = ln();
        Ra(l, n, r, o);
      }
      mf(n, r);
    }
  }, vi = function() {
    return Lt;
  }, Xe = function(n, r) {
    var l = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = l;
    }
  }, Kt = function(n, r, l) {
    switch (r) {
      case "input":
        if (zn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Wi(o);
              if (!c) throw Error(H(90));
              qn(o), zn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Rr(n, l);
        break;
      case "select":
        r = l.value, r != null && $n(n, !!l.multiple, r, !1);
    }
  }, Wl = sf, Ql = Tu;
  var mh = { usingClientEntryPoint: !1, Events: [cs, Ae, Wi, Da, Mi, sf] }, Ps = { findFiberByHostInstance: lu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Cy = { bundleType: Ps.bundleType, version: Ps.version, rendererPackageName: Ps.rendererPackageName, rendererConfig: Ps.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: He.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = mt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ps.findFiberByHostInstance || vh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vs.isDisabled && Vs.supportsFiber) try {
      ol = Vs.inject(Cy), Gr = Vs;
    } catch {
    }
  }
  return Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mh, Wa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Jd(r)) throw Error(H(200));
    return fh(n, r, null, l);
  }, Wa.createRoot = function(n, r) {
    if (!Jd(n)) throw Error(H(299));
    var l = !1, o = "", c = Xd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = pf(n, 1, !1, null, null, l, !1, o, c), n[Ii] = r.current, ls(n.nodeType === 8 ? n.parentNode : n), new zl(r);
  }, Wa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(H(188)) : (n = Object.keys(n).join(","), Error(H(268, n)));
    return n = mt(r), n = n === null ? null : n.stateNode, n;
  }, Wa.flushSync = function(n) {
    return Tu(n);
  }, Wa.hydrate = function(n, r, l) {
    if (!gf(r)) throw Error(H(200));
    return Sf(null, n, r, !0, l);
  }, Wa.hydrateRoot = function(n, r, l) {
    if (!Jd(n)) throw Error(H(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Xd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Kd(r, null, n, 1, l ?? null, c, !1, d, m), n[Ii] = r.current, ls(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new yf(r);
  }, Wa.render = function(n, r, l) {
    if (!gf(r)) throw Error(H(200));
    return Sf(null, n, r, !1, l);
  }, Wa.unmountComponentAtNode = function(n) {
    if (!gf(n)) throw Error(H(40));
    return n._reactRootContainer ? (Tu(function() {
      Sf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ii] = null;
      });
    }), !0) : !1;
  }, Wa.unstable_batchedUpdates = sf, Wa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!gf(l)) throw Error(H(200));
    if (n == null || n._reactInternals === void 0) throw Error(H(38));
    return Sf(n, r, l, !1, o);
  }, Wa.version = "18.3.1-next-f1338f8080-20240426", Wa;
}
var Qa = {}, sT;
function fk() {
  if (sT) return Qa;
  sT = 1;
  var Q = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return Q.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var ie = tv(), H = pT(), he = ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, qe = !1;
    function ct(e) {
      qe = e;
    }
    function it(e) {
      if (!qe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        lt("warn", e, a);
      }
    }
    function S(e) {
      if (!qe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        lt("error", e, a);
      }
    }
    function lt(e, t, a) {
      {
        var i = he.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var me = 0, Y = 1, Re = 2, L = 3, X = 4, M = 5, J = 6, Be = 7, vt = 8, Me = 9, ut = 10, He = 11, Rt = 12, _e = 13, Z = 14, ye = 15, Pe = 16, Ze = 17, At = 18, Ye = 19, nt = 21, Oe = 22, Ut = 23, Ke = 24, ft = 25, U = !0, ue = !1, ae = !1, x = !1, $ = !1, xe = !0, ge = !0, Fe = !0, gt = !0, Ot = /* @__PURE__ */ new Set(), rt = {}, _t = {};
    function Wt(e, t) {
      Nn(e, t), Nn(e + "Capture", t);
    }
    function Nn(e, t) {
      rt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), rt[e] = t;
      {
        var a = e.toLowerCase();
        _t[a] = e, e === "onDoubleClick" && (_t.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Ot.add(t[i]);
    }
    var qn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ir = Object.prototype.hasOwnProperty;
    function Mn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Cr(e) {
      try {
        return Bn(e), !1;
      } catch {
        return !0;
      }
    }
    function Bn(e) {
      return "" + e;
    }
    function zn(e, t) {
      if (Cr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Mn(e)), Bn(e);
    }
    function da(e) {
      if (Cr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mn(e)), Bn(e);
    }
    function Ga(e, t) {
      if (Cr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Mn(e)), Bn(e);
    }
    function Or(e, t) {
      if (Cr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Mn(e)), Bn(e);
    }
    function $n(e) {
      if (Cr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Mn(e)), Bn(e);
    }
    function Kn(e) {
      if (Cr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Mn(e)), Bn(e);
    }
    var Xn = 0, Rr = 1, qa = 2, An = 3, lr = 4, Wr = 5, Ni = 6, pa = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", le = pa + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ve = new RegExp("^[" + pa + "][" + le + "]*$"), ht = {}, Pt = {};
    function sn(e) {
      return ir.call(Pt, e) ? !0 : ir.call(ht, e) ? !1 : Ve.test(e) ? (Pt[e] = !0, !0) : (ht[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function cn(e, t, a) {
      return t !== null ? t.type === Xn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function fn(e, t, a, i) {
      if (a !== null && a.type === Xn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Jn(e, t, a, i) {
      if (t === null || typeof t > "u" || fn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case An:
            return !t;
          case lr:
            return t === !1;
          case Wr:
            return isNaN(t);
          case Ni:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function un(e) {
      return Vt.hasOwnProperty(e) ? Vt[e] : null;
    }
    function Kt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === qa || t === An || t === lr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Vt = {}, va = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    va.forEach(function(e) {
      Vt[e] = new Kt(
        e,
        Xn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Vt[t] = new Kt(
        t,
        Rr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Vt[e] = new Kt(
        e,
        qa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Vt[e] = new Kt(
        e,
        qa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Vt[e] = new Kt(
        e,
        An,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Vt[e] = new Kt(
        e,
        An,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Vt[e] = new Kt(
        e,
        lr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Vt[e] = new Kt(
        e,
        Ni,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Vt[e] = new Kt(
        e,
        Wr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ka = /[\-\:]([a-z])/g, Da = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, Da);
      Vt[t] = new Kt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, Da);
      Vt[t] = new Kt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, Da);
      Vt[t] = new Kt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Vt[e] = new Kt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Mi = "xlinkHref";
    Vt[Mi] = new Kt(
      "xlinkHref",
      Rr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Vt[e] = new Kt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Wl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ql = !1;
    function zi(e) {
      !Ql && Wl.test(e) && (Ql = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Gl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        zn(a, t), i.sanitizeURL && zi("" + a);
        var s = i.attributeName, f = null;
        if (i.type === lr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Jn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Jn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === An)
            return a;
          f = e.getAttribute(s);
        }
        return Jn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function si(e, t, a, i) {
      {
        if (!sn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return zn(a, t), u === "" + a ? a : u;
      }
    }
    function ha(e, t, a, i) {
      var u = un(t);
      if (!cn(t, u, i)) {
        if (Jn(t, a, u, i) && (a = null), i || u === null) {
          if (sn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (zn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === An ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, w;
          _ === An || _ === lr && a === !0 ? w = "" : (zn(a, y), w = "" + a, u.sanitizeURL && zi(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var ur = Symbol.for("react.element"), ma = Symbol.for("react.portal"), Qr = Symbol.for("react.fragment"), ci = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), Ai = Symbol.for("react.provider"), R = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), de = Symbol.for("react.suspense_list"), Et = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), Tt = Symbol.for("react.scope"), mt = Symbol.for("react.debug_trace_mode"), wn = Symbol.for("react.offscreen"), on = Symbol.for("react.legacy_hidden"), dn = Symbol.for("react.cache"), Tr = Symbol.for("react.tracing_marker"), Ka = Symbol.iterator, Bt = "@@iterator";
    function mn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ka && e[Ka] || e[Bt];
      return typeof t == "function" ? t : null;
    }
    var ot = Object.assign, di = 0, Ui, lc, Fi, ol, Gr, $o, Lr;
    function Yo() {
    }
    Yo.__reactDisabledLog = !0;
    function uc() {
      {
        if (di === 0) {
          Ui = console.log, lc = console.info, Fi = console.warn, ol = console.error, Gr = console.group, $o = console.groupCollapsed, Lr = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Yo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        di++;
      }
    }
    function oc() {
      {
        if (di--, di === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ot({}, e, {
              value: Ui
            }),
            info: ot({}, e, {
              value: lc
            }),
            warn: ot({}, e, {
              value: Fi
            }),
            error: ot({}, e, {
              value: ol
            }),
            group: ot({}, e, {
              value: Gr
            }),
            groupCollapsed: ot({}, e, {
              value: $o
            }),
            groupEnd: ot({}, e, {
              value: Lr
            })
          });
        }
        di < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ji = he.ReactCurrentDispatcher, sl;
    function qr(e, t, a) {
      {
        if (sl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            sl = i && i[1] || "";
          }
        return `
` + sl + e;
      }
    }
    var pi = !1, cl;
    {
      var Hu = typeof WeakMap == "function" ? WeakMap : Map;
      cl = new Hu();
    }
    function Hi(e, t) {
      if (!e || pi)
        return "";
      {
        var a = cl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      pi = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ji.current, ji.current = null, uc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (j) {
              i = j;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (j) {
              i = j;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            i = j;
          }
          e();
        }
      } catch (j) {
        if (j && i && typeof j.stack == "string") {
          for (var p = j.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && cl.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        pi = !1, ji.current = s, oc(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", A = w ? qr(w) : "";
      return typeof e == "function" && cl.set(e, A), A;
    }
    function ql(e, t, a) {
      return Hi(e, !0);
    }
    function Kl(e, t, a) {
      return Hi(e, !1);
    }
    function fl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Io(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Hi(e, fl(e));
      if (typeof e == "string")
        return qr(e);
      switch (e) {
        case ce:
          return qr("Suspense");
        case de:
          return qr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case G:
            return Kl(e.render);
          case Et:
            return Io(e.type, t, a);
          case et: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Io(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Wo(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case M:
          return qr(e.type);
        case Pe:
          return qr("Lazy");
        case _e:
          return qr("Suspense");
        case Ye:
          return qr("SuspenseList");
        case me:
        case Re:
        case ye:
          return Kl(e.type);
        case He:
          return Kl(e.type.render);
        case Y:
          return ql(e.type);
        default:
          return "";
      }
    }
    function Lt(e) {
      try {
        var t = "", a = e;
        do
          t += Wo(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Qo(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Pu(e) {
      return e.displayName || "Context";
    }
    function Nt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Qr:
          return "Fragment";
        case ma:
          return "Portal";
        case fi:
          return "Profiler";
        case ci:
          return "StrictMode";
        case ce:
          return "Suspense";
        case de:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Pu(t) + ".Consumer";
          case Ai:
            var a = e;
            return Pu(a._context) + ".Provider";
          case G:
            return Qo(e, e.render, "ForwardRef");
          case Et:
            var i = e.displayName || null;
            return i !== null ? i : Nt(e.type) || "Memo";
          case et: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Nt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function sc(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function vi(e) {
      return e.displayName || "Context";
    }
    function Xe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ke:
          return "Cache";
        case Me:
          var i = a;
          return vi(i) + ".Consumer";
        case ut:
          var u = a;
          return vi(u._context) + ".Provider";
        case At:
          return "DehydratedFragment";
        case He:
          return sc(a, a.render, "ForwardRef");
        case Be:
          return "Fragment";
        case M:
          return a;
        case X:
          return "Portal";
        case L:
          return "Root";
        case J:
          return "Text";
        case Pe:
          return Nt(a);
        case vt:
          return a === ci ? "StrictMode" : "Mode";
        case Oe:
          return "Offscreen";
        case Rt:
          return "Profiler";
        case nt:
          return "Scope";
        case _e:
          return "Suspense";
        case Ye:
          return "SuspenseList";
        case ft:
          return "TracingMarker";
        case Y:
        case me:
        case Ze:
        case Re:
        case Z:
        case ye:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Xl = he.ReactDebugCurrentFrame, Zn = null, Kr = !1;
    function Nr() {
      {
        if (Zn === null)
          return null;
        var e = Zn._debugOwner;
        if (e !== null && typeof e < "u")
          return Xe(e);
      }
      return null;
    }
    function hi() {
      return Zn === null ? "" : Lt(Zn);
    }
    function Cn() {
      Xl.getCurrentStack = null, Zn = null, Kr = !1;
    }
    function Xt(e) {
      Xl.getCurrentStack = e === null ? null : hi, Zn = e, Kr = !1;
    }
    function Xa() {
      return Zn;
    }
    function Oa(e) {
      Kr = e;
    }
    function xr(e) {
      return "" + e;
    }
    function Mr(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Kn(e), e;
        default:
          return "";
      }
    }
    var Xf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Vu(e, t) {
      Xf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Jl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Bu(e) {
      return e._valueTracker;
    }
    function $u(e) {
      e._valueTracker = null;
    }
    function Zl(e) {
      var t = "";
      return e && (Jl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function La(e) {
      var t = Jl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Kn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Kn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Kn(p), i = "" + p;
          },
          stopTracking: function() {
            $u(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Na(e) {
      Bu(e) || (e._valueTracker = La(e));
    }
    function dl(e) {
      if (!e)
        return !1;
      var t = Bu(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Zl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Pi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Yu = !1, pl = !1, Vi = !1, Iu = !1;
    function Go(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Ma(e, t) {
      var a = e, i = t.checked, u = ot({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Wu(e, t) {
      Vu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !pl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component", t.type), pl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Yu && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component", t.type), Yu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Mr(t.value != null ? t.value : i),
        controlled: Go(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && ha(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = Go(t);
        !a._wrapperState.controlled && i && !Iu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Iu = !0), a._wrapperState.controlled && !i && !Vi && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Vi = !0);
      }
      h(e, t);
      var u = Mr(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = xr(u)) : a.value !== xr(u) && (a.value = xr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? be(a, t.type, u) : t.hasOwnProperty("defaultValue") && be(a, t.type, Mr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = xr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function P(e, t) {
      var a = e;
      C(a, t), re(a, t);
    }
    function re(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        zn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Mh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            dl(f), C(f, p);
          }
        }
      }
    }
    function be(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Pi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = xr(e._wrapperState.initialValue) : e.defaultValue !== xr(a) && (e.defaultValue = xr(a)));
    }
    var Se = !1, Qe = !1, yt = !1;
    function $t(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? ie.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Qe || (Qe = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (yt || (yt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Se && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Se = !0);
    }
    function Jt(e, t) {
      t.value != null && e.setAttribute("value", xr(Mr(t.value)));
    }
    var Zt = Array.isArray;
    function dt(e) {
      return Zt(e);
    }
    var rn;
    rn = !1;
    function bn() {
      var e = Nr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var eu = ["value", "defaultValue"];
    function qo(e) {
      {
        Vu("select", e);
        for (var t = 0; t < eu.length; t++) {
          var a = eu[t];
          if (e[a] != null) {
            var i = dt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, bn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, bn());
          }
        }
      }
    }
    function Bi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = xr(Mr(a)), _ = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          _ === null && !u[w].disabled && (_ = u[w]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function tu(e, t) {
      return ot({}, t, {
        value: void 0
      });
    }
    function Ko(e, t) {
      var a = e;
      qo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !rn && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), rn = !0);
    }
    function Jf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Bi(a, !!t.multiple, i, !1) : t.defaultValue != null && Bi(a, !!t.multiple, t.defaultValue, !0);
    }
    function cc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Bi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Bi(a, !!t.multiple, t.defaultValue, !0) : Bi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Zf(e, t) {
      var a = e, i = t.value;
      i != null && Bi(a, !!t.multiple, i, !1);
    }
    var nv = !1;
    function fc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ot({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: xr(a._wrapperState.initialValue)
      });
      return i;
    }
    function rv(e, t) {
      var a = e;
      Vu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !nv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component"), nv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (dt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Mr(i)
      };
    }
    function av(e, t) {
      var a = e, i = Mr(t.value), u = Mr(t.defaultValue);
      if (i != null) {
        var s = xr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = xr(u));
    }
    function iv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Km(e, t) {
      av(e, t);
    }
    var Ja = "http://www.w3.org/1999/xhtml", Xm = "http://www.w3.org/1998/Math/MathML", ed = "http://www.w3.org/2000/svg";
    function td(e) {
      switch (e) {
        case "svg":
          return ed;
        case "math":
          return Xm;
        default:
          return Ja;
      }
    }
    function dc(e, t) {
      return e == null || e === Ja ? td(t) : e === ed && t === "foreignObject" ? Ja : e;
    }
    var Jm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, pc, lv = Jm(function(e, t) {
      if (e.namespaceURI === ed && !("innerHTML" in e)) {
        pc = pc || document.createElement("div"), pc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = pc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Xr = 1, $i = 3, Un = 8, Yi = 9, Xo = 11, vl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === $i) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Zm = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Qu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function uv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var ov = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Qu).forEach(function(e) {
      ov.forEach(function(t) {
        Qu[uv(t, e)] = Qu[e];
      });
    });
    function vc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Qu.hasOwnProperty(e) && Qu[e]) ? t + "px" : (Or(t, e), ("" + t).trim());
    }
    var sv = /([A-Z])/g, Gu = /^ms-/;
    function ey(e) {
      return e.replace(sv, "-$1").toLowerCase().replace(Gu, "-ms-");
    }
    var cv = function() {
    };
    {
      var ty = /^(?:webkit|moz|o)[A-Z]/, fv = /^-ms-/, dv = /-(.)/g, qu = /;\s*$/, mi = {}, nd = {}, Jo = !1, pv = !1, vv = function(e) {
        return e.replace(dv, function(t, a) {
          return a.toUpperCase();
        });
      }, rd = function(e) {
        mi.hasOwnProperty(e) && mi[e] || (mi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          vv(e.replace(fv, "ms-"))
        ));
      }, ad = function(e) {
        mi.hasOwnProperty(e) && mi[e] || (mi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, hv = function(e, t) {
        nd.hasOwnProperty(t) && nd[t] || (nd[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(qu, "")));
      }, mv = function(e, t) {
        Jo || (Jo = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, yv = function(e, t) {
        pv || (pv = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      cv = function(e, t) {
        e.indexOf("-") > -1 ? rd(e) : ty.test(e) ? ad(e) : qu.test(t) && hv(e, t), typeof t == "number" && (isNaN(t) ? mv(e, t) : isFinite(t) || yv(e, t));
      };
    }
    var ny = cv;
    function ry(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : ey(i)) + ":", t += vc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function gv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || ny(i, t[i]);
          var s = vc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ay(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Sv(e) {
      var t = {};
      for (var a in e)
        for (var i = Zm[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Za(e, t) {
      {
        if (!t)
          return;
        var a = Sv(e), i = Sv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ay(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Zo = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Ev = ot({
      menuitem: !0
    }, Zo), Cv = "__html";
    function hc(e, t) {
      if (t) {
        if (Ev[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Cv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function hl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Ku = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Rv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Xu = {}, Ju = new RegExp("^(aria)-[" + le + "]*$"), id = new RegExp("^(aria)[A-Z][" + le + "]*$");
    function es(e, t) {
      {
        if (ir.call(Xu, t) && Xu[t])
          return !0;
        if (id.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Rv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Xu[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Xu[t] = !0, !0;
        }
        if (Ju.test(t)) {
          var u = t.toLowerCase(), s = Rv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Xu[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Xu[t] = !0, !0;
        }
      }
      return !0;
    }
    function ld(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = es(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Tv(e, t) {
      hl(e, t) || ld(e, t);
    }
    var ts = !1;
    function Zu(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ts && (ts = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var mc = function() {
    };
    {
      var wr = {}, ns = /^on./, xv = /^on[^A-Z]/, wv = new RegExp("^(aria)-[" + le + "]*$"), bv = new RegExp("^(aria)[A-Z][" + le + "]*$");
      mc = function(e, t, a, i) {
        if (ir.call(wr, t) && wr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), wr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), wr[t] = !0, !0;
          if (ns.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), wr[t] = !0, !0;
        } else if (ns.test(t))
          return xv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), wr[t] = !0, !0;
        if (wv.test(t) || bv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), wr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), wr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), wr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), wr[t] = !0, !0;
        var v = un(t), y = v !== null && v.type === Xn;
        if (Ku.hasOwnProperty(u)) {
          var g = Ku[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), wr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), wr[t] = !0, !0;
        return typeof a == "boolean" && fn(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), wr[t] = !0, !0) : y ? !0 : fn(t, a, v, !1) ? (wr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === An && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), wr[t] = !0), !0);
      };
    }
    var _v = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = mc(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function kv(e, t, a) {
      hl(e, t) || _v(e, t, a);
    }
    var ud = 1, yi = 2, nu = 4, od = ud | yi | nu, rs = null;
    function iy(e) {
      rs !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), rs = e;
    }
    function as() {
      rs === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), rs = null;
    }
    function ly(e) {
      return e === rs;
    }
    function yc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === $i ? t.parentNode : t;
    }
    var gc = null, Yt = null, ml = null;
    function is(e) {
      var t = _o(e);
      if (t) {
        if (typeof gc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Mh(a);
          gc(t.stateNode, t.type, i);
        }
      }
    }
    function ls(e) {
      gc = e;
    }
    function sd(e) {
      Yt ? ml ? ml.push(e) : ml = [e] : Yt = e;
    }
    function cd() {
      return Yt !== null || ml !== null;
    }
    function eo() {
      if (Yt) {
        var e = Yt, t = ml;
        if (Yt = null, ml = null, is(e), t)
          for (var a = 0; a < t.length; a++)
            is(t[a]);
      }
    }
    var us = function(e, t) {
      return e(t);
    }, ru = function() {
    }, Sc = !1;
    function uy() {
      var e = cd();
      e && (ru(), eo());
    }
    function Dv(e, t, a) {
      if (Sc)
        return e(t, a);
      Sc = !0;
      try {
        return us(e, t, a);
      } finally {
        Sc = !1, uy();
      }
    }
    function Ov(e, t, a) {
      us = e, ru = a;
    }
    function Ec(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Cc(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Ec(t));
        default:
          return !1;
      }
    }
    function au(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Mh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Cc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var os = !1;
    if (qn)
      try {
        var iu = {};
        Object.defineProperty(iu, "passive", {
          get: function() {
            os = !0;
          }
        }), window.addEventListener("test", iu, iu), window.removeEventListener("test", iu, iu);
      } catch {
        os = !1;
      }
    function Rc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Lv = Rc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Tc = document.createElement("react");
      Lv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, w = !0, A = window.event, j = Object.getOwnPropertyDescriptor(window, "event");
        function V() {
          Tc.removeEventListener(B, $e, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = A);
        }
        var fe = Array.prototype.slice.call(arguments, 3);
        function $e() {
          _ = !0, V(), a.apply(i, fe), w = !1;
        }
        var ze, zt = !1, bt = !1;
        function D(O) {
          if (ze = O.error, zt = !0, ze === null && O.colno === 0 && O.lineno === 0 && (bt = !0), O.defaultPrevented && ze != null && typeof ze == "object")
            try {
              ze._suppressLogging = !0;
            } catch {
            }
        }
        var B = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), Tc.addEventListener(B, $e, !1), g.initEvent(B, !1, !1), Tc.dispatchEvent(g), j && Object.defineProperty(window, "event", j), _ && w && (zt ? bt && (ze = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ze = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ze)), window.removeEventListener("error", D), !_)
          return V(), Rc.apply(this, arguments);
      };
    }
    var oy = Lv, to = !1, no = null, ei = !1, xc = null, ro = {
      onError: function(e) {
        to = !0, no = e;
      }
    };
    function za(e, t, a, i, u, s, f, p, v) {
      to = !1, no = null, oy.apply(ro, arguments);
    }
    function ss(e, t, a, i, u, s, f, p, v) {
      if (za.apply(this, arguments), to) {
        var y = dd();
        ei || (ei = !0, xc = y);
      }
    }
    function Ii() {
      if (ei) {
        var e = xc;
        throw ei = !1, xc = null, e;
      }
    }
    function fd() {
      return to;
    }
    function dd() {
      if (to) {
        var e = no;
        return to = !1, no = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ao(e) {
      return e._reactInternals;
    }
    function lu(e) {
      return e._reactInternals !== void 0;
    }
    function cs(e, t) {
      e._reactInternals = t;
    }
    var Ae = (
      /*                      */
      0
    ), Wi = (
      /*                */
      1
    ), Rn = (
      /*                    */
      2
    ), xt = (
      /*                       */
      4
    ), Jr = (
      /*                */
      16
    ), Qt = (
      /*                 */
      32
    ), an = (
      /*                     */
      64
    ), St = (
      /*                   */
      128
    ), yn = (
      /*            */
      256
    ), Fn = (
      /*                          */
      512
    ), Aa = (
      /*                     */
      1024
    ), ya = (
      /*                      */
      2048
    ), Tn = (
      /*                    */
      4096
    ), gi = (
      /*                   */
      8192
    ), wc = (
      /*             */
      16384
    ), Nv = (
      /*               */
      32767
    ), uu = (
      /*                   */
      32768
    ), br = (
      /*                */
      65536
    ), ti = (
      /* */
      131072
    ), fs = (
      /*                       */
      1048576
    ), ds = (
      /*                    */
      2097152
    ), yl = (
      /*                 */
      4194304
    ), pd = (
      /*                */
      8388608
    ), zr = (
      /*               */
      16777216
    ), gl = (
      /*              */
      33554432
    ), Sl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      xt | Aa | 0
    ), io = Rn | xt | Jr | Qt | Fn | Tn | gi, El = xt | an | Fn | gi, or = ya | Jr, jn = yl | pd | ds, ou = he.ReactCurrentOwner;
    function Ar(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Rn | Tn)) !== Ae && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === L ? a : null;
    }
    function Si(e) {
      if (e.tag === _e) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Cl(e) {
      return e.tag === L ? e.stateNode.containerInfo : null;
    }
    function Mv(e) {
      return Ar(e) === e;
    }
    function vd(e) {
      {
        var t = ou.current;
        if (t !== null && t.tag === Y) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Xe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ao(e);
      return u ? Ar(u) === u : !1;
    }
    function bc(e) {
      if (Ar(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Zr(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ar(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return bc(s), e;
            if (v === u)
              return bc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== L)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ea(e) {
      var t = Zr(e);
      return t !== null ? pn(t) : null;
    }
    function pn(e) {
      if (e.tag === M || e.tag === J)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = pn(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ni(e) {
      var t = Zr(e);
      return t !== null ? hd(t) : null;
    }
    function hd(e) {
      if (e.tag === M || e.tag === J)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== X) {
          var a = hd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var md = H.unstable_scheduleCallback, yd = H.unstable_cancelCallback, gd = H.unstable_shouldYield, zv = H.unstable_requestPaint, _n = H.unstable_now, Av = H.unstable_getCurrentPriorityLevel, Qi = H.unstable_ImmediatePriority, ps = H.unstable_UserBlockingPriority, su = H.unstable_NormalPriority, vs = H.unstable_LowPriority, lo = H.unstable_IdlePriority, Uv = H.unstable_yieldValue, Fv = H.unstable_setDisableYieldValue, ri = null, sr = null, se = null, ga = !1, _r = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Sd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ge && (e = ot({}, e, {
          getLaneLabelMap: Td,
          injectProfilingHooks: cu
        })), ri = t.inject(e), sr = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Ed(e, t) {
      if (sr && typeof sr.onScheduleFiberRoot == "function")
        try {
          sr.onScheduleFiberRoot(ri, e, t);
        } catch (a) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Cd(e, t) {
      if (sr && typeof sr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & St) === St;
          if (Fe) {
            var i;
            switch (t) {
              case ia:
                i = Qi;
                break;
              case Fa:
                i = ps;
                break;
              case cr:
                i = su;
                break;
              case nf:
                i = lo;
                break;
              default:
                i = su;
                break;
            }
            sr.onCommitFiberRoot(ri, e, i, a);
          }
        } catch (u) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Rd(e) {
      if (sr && typeof sr.onPostCommitFiberRoot == "function")
        try {
          sr.onPostCommitFiberRoot(ri, e);
        } catch (t) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function uo(e) {
      if (sr && typeof sr.onCommitFiberUnmount == "function")
        try {
          sr.onCommitFiberUnmount(ri, e);
        } catch (t) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Gt(e) {
      if (typeof Uv == "function" && (Fv(e), ct(e)), sr && typeof sr.setStrictMode == "function")
        try {
          sr.setStrictMode(ri, e);
        } catch (t) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function cu(e) {
      se = e;
    }
    function Td() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Dd; a++) {
          var i = $v(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function jv(e) {
      se !== null && typeof se.markCommitStarted == "function" && se.markCommitStarted(e);
    }
    function Ei() {
      se !== null && typeof se.markCommitStopped == "function" && se.markCommitStopped();
    }
    function Ua(e) {
      se !== null && typeof se.markComponentRenderStarted == "function" && se.markComponentRenderStarted(e);
    }
    function Rl() {
      se !== null && typeof se.markComponentRenderStopped == "function" && se.markComponentRenderStopped();
    }
    function Hv(e) {
      se !== null && typeof se.markComponentPassiveEffectMountStarted == "function" && se.markComponentPassiveEffectMountStarted(e);
    }
    function Gi() {
      se !== null && typeof se.markComponentPassiveEffectMountStopped == "function" && se.markComponentPassiveEffectMountStopped();
    }
    function Tl(e) {
      se !== null && typeof se.markComponentPassiveEffectUnmountStarted == "function" && se.markComponentPassiveEffectUnmountStarted(e);
    }
    function _c() {
      se !== null && typeof se.markComponentPassiveEffectUnmountStopped == "function" && se.markComponentPassiveEffectUnmountStopped();
    }
    function Pv(e) {
      se !== null && typeof se.markComponentLayoutEffectMountStarted == "function" && se.markComponentLayoutEffectMountStarted(e);
    }
    function kc() {
      se !== null && typeof se.markComponentLayoutEffectMountStopped == "function" && se.markComponentLayoutEffectMountStopped();
    }
    function xd(e) {
      se !== null && typeof se.markComponentLayoutEffectUnmountStarted == "function" && se.markComponentLayoutEffectUnmountStarted(e);
    }
    function oo() {
      se !== null && typeof se.markComponentLayoutEffectUnmountStopped == "function" && se.markComponentLayoutEffectUnmountStopped();
    }
    function Ci(e, t, a) {
      se !== null && typeof se.markComponentErrored == "function" && se.markComponentErrored(e, t, a);
    }
    function hs(e, t, a) {
      se !== null && typeof se.markComponentSuspended == "function" && se.markComponentSuspended(e, t, a);
    }
    function ms(e) {
      se !== null && typeof se.markLayoutEffectsStarted == "function" && se.markLayoutEffectsStarted(e);
    }
    function fu() {
      se !== null && typeof se.markLayoutEffectsStopped == "function" && se.markLayoutEffectsStopped();
    }
    function wd(e) {
      se !== null && typeof se.markPassiveEffectsStarted == "function" && se.markPassiveEffectsStarted(e);
    }
    function so() {
      se !== null && typeof se.markPassiveEffectsStopped == "function" && se.markPassiveEffectsStopped();
    }
    function bd(e) {
      se !== null && typeof se.markRenderStarted == "function" && se.markRenderStarted(e);
    }
    function _d() {
      se !== null && typeof se.markRenderYielded == "function" && se.markRenderYielded();
    }
    function gn() {
      se !== null && typeof se.markRenderStopped == "function" && se.markRenderStopped();
    }
    function Dc(e) {
      se !== null && typeof se.markRenderScheduled == "function" && se.markRenderScheduled(e);
    }
    function kd(e, t) {
      se !== null && typeof se.markForceUpdateScheduled == "function" && se.markForceUpdateScheduled(e, t);
    }
    function ys(e, t) {
      se !== null && typeof se.markStateUpdateScheduled == "function" && se.markStateUpdateScheduled(e, t);
    }
    var Ue = (
      /*                         */
      0
    ), Ct = (
      /*                 */
      1
    ), kt = (
      /*                    */
      2
    ), st = (
      /*               */
      8
    ), en = (
      /*              */
      16
    ), Yn = Math.clz32 ? Math.clz32 : Ss, Oc = Math.log, gs = Math.LN2;
    function Ss(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Oc(t) / gs | 0) | 0;
    }
    var Dd = 31, I = (
      /*                        */
      0
    ), Hn = (
      /*                          */
      0
    ), We = (
      /*                        */
      1
    ), xl = (
      /*    */
      2
    ), er = (
      /*             */
      4
    ), tr = (
      /*            */
      8
    ), ta = (
      /*                     */
      16
    ), du = (
      /*                */
      32
    ), wl = (
      /*                       */
      4194240
    ), co = (
      /*                        */
      64
    ), Lc = (
      /*                        */
      128
    ), Nc = (
      /*                        */
      256
    ), Mc = (
      /*                        */
      512
    ), zc = (
      /*                        */
      1024
    ), Ac = (
      /*                        */
      2048
    ), Uc = (
      /*                        */
      4096
    ), Fc = (
      /*                        */
      8192
    ), pu = (
      /*                        */
      16384
    ), jc = (
      /*                       */
      32768
    ), fo = (
      /*                       */
      65536
    ), po = (
      /*                       */
      131072
    ), Hc = (
      /*                       */
      262144
    ), Es = (
      /*                       */
      524288
    ), Pc = (
      /*                       */
      1048576
    ), Vc = (
      /*                       */
      2097152
    ), Cs = (
      /*                            */
      130023424
    ), vu = (
      /*                             */
      4194304
    ), Rs = (
      /*                             */
      8388608
    ), Bc = (
      /*                             */
      16777216
    ), $c = (
      /*                             */
      33554432
    ), Yc = (
      /*                             */
      67108864
    ), Vv = vu, vo = (
      /*          */
      134217728
    ), Bv = (
      /*                          */
      268435455
    ), Ts = (
      /*               */
      268435456
    ), bl = (
      /*                        */
      536870912
    ), na = (
      /*                   */
      1073741824
    );
    function $v(e) {
      {
        if (e & We)
          return "Sync";
        if (e & xl)
          return "InputContinuousHydration";
        if (e & er)
          return "InputContinuous";
        if (e & tr)
          return "DefaultHydration";
        if (e & ta)
          return "Default";
        if (e & du)
          return "TransitionHydration";
        if (e & wl)
          return "Transition";
        if (e & Cs)
          return "Retry";
        if (e & vo)
          return "SelectiveHydration";
        if (e & Ts)
          return "IdleHydration";
        if (e & bl)
          return "Idle";
        if (e & na)
          return "Offscreen";
      }
    }
    var qt = -1, Ic = co, Wc = vu;
    function xs(e) {
      switch (hu(e)) {
        case We:
          return We;
        case xl:
          return xl;
        case er:
          return er;
        case tr:
          return tr;
        case ta:
          return ta;
        case du:
          return du;
        case co:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Ac:
        case Uc:
        case Fc:
        case pu:
        case jc:
        case fo:
        case po:
        case Hc:
        case Es:
        case Pc:
        case Vc:
          return e & wl;
        case vu:
        case Rs:
        case Bc:
        case $c:
        case Yc:
          return e & Cs;
        case vo:
          return vo;
        case Ts:
          return Ts;
        case bl:
          return bl;
        case na:
          return na;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ra(e, t) {
      var a = e.pendingLanes;
      if (a === I)
        return I;
      var i = I, u = e.suspendedLanes, s = e.pingedLanes, f = a & Bv;
      if (f !== I) {
        var p = f & ~u;
        if (p !== I)
          i = xs(p);
        else {
          var v = f & s;
          v !== I && (i = xs(v));
        }
      } else {
        var y = a & ~u;
        y !== I ? i = xs(y) : s !== I && (i = xs(s));
      }
      if (i === I)
        return I;
      if (t !== I && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === I) {
        var g = hu(i), _ = hu(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ta && (_ & wl) !== I
        )
          return t;
      }
      (i & er) !== I && (i |= a & ta);
      var w = e.entangledLanes;
      if (w !== I)
        for (var A = e.entanglements, j = i & w; j > 0; ) {
          var V = kn(j), fe = 1 << V;
          i |= A[V], j &= ~fe;
        }
      return i;
    }
    function Od(e, t) {
      for (var a = e.eventTimes, i = qt; t > 0; ) {
        var u = kn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Qc(e, t) {
      switch (e) {
        case We:
        case xl:
        case er:
          return t + 250;
        case tr:
        case ta:
        case du:
        case co:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Ac:
        case Uc:
        case Fc:
        case pu:
        case jc:
        case fo:
        case po:
        case Hc:
        case Es:
        case Pc:
        case Vc:
          return t + 5e3;
        case vu:
        case Rs:
        case Bc:
        case $c:
        case Yc:
          return qt;
        case vo:
        case Ts:
        case bl:
        case na:
          return qt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), qt;
      }
    }
    function Yv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = kn(f), v = 1 << p, y = s[p];
        y === qt ? ((v & i) === I || (v & u) !== I) && (s[p] = Qc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Iv(e) {
      return xs(e.pendingLanes);
    }
    function Gc(e) {
      var t = e.pendingLanes & ~na;
      return t !== I ? t : t & na ? na : I;
    }
    function Ld(e) {
      return (e & We) !== I;
    }
    function _l(e) {
      return (e & Bv) !== I;
    }
    function qc(e) {
      return (e & Cs) === e;
    }
    function Nd(e) {
      var t = We | er | ta;
      return (e & t) === I;
    }
    function sy(e) {
      return (e & wl) === e;
    }
    function ws(e, t) {
      var a = xl | er | tr | ta;
      return (t & a) !== I;
    }
    function Wv(e, t) {
      return (t & e.expiredLanes) !== I;
    }
    function Md(e) {
      return (e & wl) !== I;
    }
    function zd() {
      var e = Ic;
      return Ic <<= 1, (Ic & wl) === I && (Ic = co), e;
    }
    function Qv() {
      var e = Wc;
      return Wc <<= 1, (Wc & Cs) === I && (Wc = vu), e;
    }
    function hu(e) {
      return e & -e;
    }
    function nr(e) {
      return hu(e);
    }
    function kn(e) {
      return 31 - Yn(e);
    }
    function Kc(e) {
      return kn(e);
    }
    function aa(e, t) {
      return (e & t) !== I;
    }
    function mu(e, t) {
      return (e & t) === t;
    }
    function pt(e, t) {
      return e | t;
    }
    function bs(e, t) {
      return e & ~t;
    }
    function Xc(e, t) {
      return e & t;
    }
    function cy(e) {
      return e;
    }
    function Ad(e, t) {
      return e !== Hn && e < t ? e : t;
    }
    function Jc(e) {
      for (var t = [], a = 0; a < Dd; a++)
        t.push(e);
      return t;
    }
    function ho(e, t, a) {
      e.pendingLanes |= t, t !== bl && (e.suspendedLanes = I, e.pingedLanes = I);
      var i = e.eventTimes, u = Kc(t);
      i[u] = a;
    }
    function Ud(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = kn(i), s = 1 << u;
        a[u] = qt, i &= ~s;
      }
    }
    function Zc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Gv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = I, e.pingedLanes = I, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = kn(f), v = 1 << p;
        i[p] = I, u[p] = qt, s[p] = qt, f &= ~v;
      }
    }
    function _s(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = kn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function ef(e, t) {
      var a = hu(t), i;
      switch (a) {
        case er:
          i = xl;
          break;
        case ta:
          i = tr;
          break;
        case co:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Ac:
        case Uc:
        case Fc:
        case pu:
        case jc:
        case fo:
        case po:
        case Hc:
        case Es:
        case Pc:
        case Vc:
        case vu:
        case Rs:
        case Bc:
        case $c:
        case Yc:
          i = du;
          break;
        case bl:
          i = Ts;
          break;
        default:
          i = Hn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Hn ? Hn : i;
    }
    function qv(e, t, a) {
      if (_r)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Kc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Fd(e, t) {
      if (_r)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Kc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function tf(e, t) {
      return null;
    }
    var ia = We, Fa = er, cr = ta, nf = bl, mo = Hn;
    function Sa() {
      return mo;
    }
    function In(e) {
      mo = e;
    }
    function Kv(e, t) {
      var a = mo;
      try {
        return mo = e, t();
      } finally {
        mo = a;
      }
    }
    function ks(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function kr(e, t) {
      return e > t ? e : t;
    }
    function jd(e, t) {
      return e !== 0 && e < t;
    }
    function Xv(e) {
      var t = hu(e);
      return jd(ia, t) ? jd(Fa, t) ? _l(t) ? cr : nf : Fa : ia;
    }
    function yu(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var fr;
    function fy(e) {
      fr = e;
    }
    function we(e) {
      fr(e);
    }
    var kl;
    function Hd(e) {
      kl = e;
    }
    var Pd;
    function dy(e) {
      Pd = e;
    }
    var yo;
    function rf(e) {
      yo = e;
    }
    var af;
    function Jv(e) {
      af = e;
    }
    var lf = !1, Ds = [], Ri = null, Ti = null, Sn = null, Ur = /* @__PURE__ */ new Map(), ja = /* @__PURE__ */ new Map(), qi = [], Zv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function ai(e) {
      return Zv.indexOf(e) > -1;
    }
    function eh(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function ii(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ri = null;
          break;
        case "dragenter":
        case "dragleave":
          Ti = null;
          break;
        case "mouseover":
        case "mouseout":
          Sn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ur.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          ja.delete(i);
          break;
        }
      }
    }
    function Os(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = eh(t, a, i, u, s);
        if (t !== null) {
          var p = _o(t);
          p !== null && kl(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function th(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ri = Os(Ri, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ti = Os(Ti, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Sn = Os(Sn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Ur.set(y, Os(Ur.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, _ = g.pointerId;
          return ja.set(_, Os(ja.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Vd(e) {
      var t = Ys(e.target);
      if (t !== null) {
        var a = Ar(t);
        if (a !== null) {
          var i = a.tag;
          if (i === _e) {
            var u = Si(a);
            if (u !== null) {
              e.blockedOn = u, af(e.priority, function() {
                Pd(a);
              });
              return;
            }
          } else if (i === L) {
            var s = a.stateNode;
            if (yu(s)) {
              e.blockedOn = Cl(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function nh(e) {
      for (var t = yo(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < qi.length && jd(t, qi[i].priority); i++)
        ;
      qi.splice(i, 0, a), i === 0 && Vd(a);
    }
    function Ls(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ns(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          iy(s), u.target.dispatchEvent(s), as();
        } else {
          var f = _o(i);
          return f !== null && kl(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function rh(e, t, a) {
      Ls(e) && a.delete(t);
    }
    function uf() {
      lf = !1, Ri !== null && Ls(Ri) && (Ri = null), Ti !== null && Ls(Ti) && (Ti = null), Sn !== null && Ls(Sn) && (Sn = null), Ur.forEach(rh), ja.forEach(rh);
    }
    function gu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, lf || (lf = !0, H.unstable_scheduleCallback(H.unstable_NormalPriority, uf)));
    }
    function Dr(e) {
      if (Ds.length > 0) {
        gu(Ds[0], e);
        for (var t = 1; t < Ds.length; t++) {
          var a = Ds[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ri !== null && gu(Ri, e), Ti !== null && gu(Ti, e), Sn !== null && gu(Sn, e);
      var i = function(p) {
        return gu(p, e);
      };
      Ur.forEach(i), ja.forEach(i);
      for (var u = 0; u < qi.length; u++) {
        var s = qi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; qi.length > 0; ) {
        var f = qi[0];
        if (f.blockedOn !== null)
          break;
        Vd(f), f.blockedOn === null && qi.shift();
      }
    }
    var wt = he.ReactCurrentBatchConfig, Pn = !0;
    function Dn(e) {
      Pn = !!e;
    }
    function dr() {
      return Pn;
    }
    function Ea(e, t, a) {
      var i = So(t), u;
      switch (i) {
        case ia:
          u = go;
          break;
        case Fa:
          u = Wn;
          break;
        case cr:
        default:
          u = Su;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function go(e, t, a, i) {
      var u = Sa(), s = wt.transition;
      wt.transition = null;
      try {
        In(ia), Su(e, t, a, i);
      } finally {
        In(u), wt.transition = s;
      }
    }
    function Wn(e, t, a, i) {
      var u = Sa(), s = wt.transition;
      wt.transition = null;
      try {
        In(Fa), Su(e, t, a, i);
      } finally {
        In(u), wt.transition = s;
      }
    }
    function Su(e, t, a, i) {
      Pn && Eu(e, t, a, i);
    }
    function Eu(e, t, a, i) {
      var u = Ns(e, t, a, i);
      if (u === null) {
        Dy(e, t, i, Cu, a), ii(e, i);
        return;
      }
      if (th(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ii(e, i), t & nu && ai(e)) {
        for (; u !== null; ) {
          var s = _o(u);
          s !== null && we(s);
          var f = Ns(e, t, a, i);
          if (f === null && Dy(e, t, i, Cu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Dy(e, t, i, null, a);
    }
    var Cu = null;
    function Ns(e, t, a, i) {
      Cu = null;
      var u = yc(i), s = Ys(u);
      if (s !== null) {
        var f = Ar(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === _e) {
            var v = Si(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === L) {
            var y = f.stateNode;
            if (yu(y))
              return Cl(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Cu = s, null;
    }
    function So(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return ia;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Fa;
        case "message": {
          var t = Av();
          switch (t) {
            case Qi:
              return ia;
            case ps:
              return Fa;
            case su:
            case vs:
              return cr;
            case lo:
              return nf;
            default:
              return cr;
          }
        }
        default:
          return cr;
      }
    }
    function la(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Bd(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Eo(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Ki(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Dl = null, Ms = null, Ha = null;
    function of(e) {
      return Dl = e, Ms = Co(), !0;
    }
    function Ol() {
      Dl = null, Ms = null, Ha = null;
    }
    function zs() {
      if (Ha)
        return Ha;
      var e, t = Ms, a = t.length, i, u = Co(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ha = u.slice(e, p), Ha;
    }
    function Co() {
      return "value" in Dl ? Dl.value : Dl.textContent;
    }
    function Ro(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Ru() {
      return !0;
    }
    function As() {
      return !1;
    }
    function ln(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Ru : this.isDefaultPrevented = As, this.isPropagationStopped = As, this;
      }
      return ot(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ru);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ru);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Ru
      }), t;
    }
    var Ca = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ra = ln(Ca), rr = ot({}, Ca, {
      view: 0,
      detail: 0
    }), ah = ln(rr), Us, Fs, js;
    function Ll(e) {
      e !== js && (js && e.type === "mousemove" ? (Us = e.screenX - js.screenX, Fs = e.screenY - js.screenY) : (Us = 0, Fs = 0), js = e);
    }
    var Hs = ot({}, rr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Wd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ll(e), Us);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Fs;
      }
    }), sf = ln(Hs), Tu = ot({}, Hs, {
      dataTransfer: 0
    }), $d = ln(Tu), xu = ot({}, rr, {
      relatedTarget: 0
    }), cf = ln(xu), ih = ot({}, Ca, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Yd = ln(ih), ff = ot({}, Ca, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), py = ln(ff), vy = ot({}, Ca, {
      data: 0
    }), Id = ln(vy), lh = Id, wu = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, hy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function To(e) {
      if (e.key) {
        var t = wu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Ro(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? hy[e.keyCode] || "Unidentified" : "";
    }
    var uh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function xn(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = uh[e];
      return i ? !!a[i] : !1;
    }
    function Wd(e) {
      return xn;
    }
    var oh = ot({}, rr, {
      key: To,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Wd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Ro(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ro(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), my = ln(oh), yy = ot({}, Hs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Qd = ln(yy), sh = ot({}, rr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Wd
    }), gy = ln(sh), Pa = ot({}, Ca, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Gd = ln(Pa), Sy = ot({}, Hs, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Nl = ln(Sy), df = [9, 13, 27, 32], Ml = 229, xo = qn && "CompositionEvent" in window, bu = null;
    qn && "documentMode" in document && (bu = document.documentMode);
    var qd = qn && "TextEvent" in window && !bu, ch = qn && (!xo || bu && bu > 8 && bu <= 11), pf = 32, fh = String.fromCharCode(pf);
    function dh() {
      Wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Wt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Wt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Wt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Kd = !1;
    function vf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function hf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function ph(e, t) {
      return e === "keydown" && t.keyCode === Ml;
    }
    function mf(e, t) {
      switch (e) {
        case "keyup":
          return df.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ml;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function vh(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Xd(e) {
      return e.locale === "ko";
    }
    var zl = !1;
    function yf(e, t, a, i, u) {
      var s, f;
      if (xo ? s = hf(t) : zl ? mf(t, i) && (s = "onCompositionEnd") : ph(t, i) && (s = "onCompositionStart"), !s)
        return null;
      ch && !Xd(i) && (!zl && s === "onCompositionStart" ? zl = of(u) : s === "onCompositionEnd" && zl && (f = zs()));
      var p = Eh(a, s);
      if (p.length > 0) {
        var v = new Id(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = vh(i);
          y !== null && (v.data = y);
        }
      }
    }
    function Jd(e, t) {
      switch (e) {
        case "compositionend":
          return vh(t);
        case "keypress":
          var a = t.which;
          return a !== pf ? null : (Kd = !0, fh);
        case "textInput":
          var i = t.data;
          return i === fh && Kd ? null : i;
        default:
          return null;
      }
    }
    function gf(e, t) {
      if (zl) {
        if (e === "compositionend" || !xo && mf(e, t)) {
          var a = zs();
          return Ol(), zl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!vf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ch && !Xd(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hh(e, t, a, i, u) {
      var s;
      if (qd ? s = Jd(t, i) : s = gf(t, i), !s)
        return null;
      var f = Eh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new lh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Ey(e, t, a, i, u, s, f) {
      yf(e, t, a, i, u), hh(e, t, a, i, u);
    }
    var Sf = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function mh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Sf[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Ps(e) {
      if (!qn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Cy() {
      Wt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Vs(e, t, a, i) {
      sd(i);
      var u = Eh(t, "onChange");
      if (u.length > 0) {
        var s = new Ra("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var n = null, r = null;
    function l(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function o(e) {
      var t = [];
      Vs(t, r, e, yc(e)), Dv(c, t);
    }
    function c(e) {
      L0(e, 0);
    }
    function d(e) {
      var t = wf(e);
      if (dl(t))
        return e;
    }
    function m(e, t) {
      if (e === "change")
        return t;
    }
    var E = !1;
    qn && (E = Ps("input") && (!document.documentMode || document.documentMode > 9));
    function T(e, t) {
      n = e, r = t, n.attachEvent("onpropertychange", K);
    }
    function F() {
      n && (n.detachEvent("onpropertychange", K), n = null, r = null);
    }
    function K(e) {
      e.propertyName === "value" && d(r) && o(e);
    }
    function ee(e, t, a) {
      e === "focusin" ? (F(), T(t, a)) : e === "focusout" && F();
    }
    function q(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return d(r);
    }
    function Ee(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ke(e, t) {
      if (e === "click")
        return d(t);
    }
    function Le(e, t) {
      if (e === "input" || e === "change")
        return d(t);
    }
    function On(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || be(e, "number", e.value);
    }
    function k(e, t, a, i, u, s, f) {
      var p = a ? wf(a) : window, v, y;
      if (l(p) ? v = m : mh(p) ? E ? v = Le : (v = q, y = ee) : Ee(p) && (v = ke), v) {
        var g = v(t, a);
        if (g) {
          Vs(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && On(p);
    }
    function b() {
      Nn("onMouseEnter", ["mouseout", "mouseover"]), Nn("onMouseLeave", ["mouseout", "mouseover"]), Nn("onPointerEnter", ["pointerout", "pointerover"]), Nn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function N(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ly(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Ys(y) || dp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var _ = u.ownerDocument;
          _ ? g = _.defaultView || _.parentWindow : g = window;
        }
        var w, A;
        if (v) {
          var j = i.relatedTarget || i.toElement;
          if (w = a, A = j ? Ys(j) : null, A !== null) {
            var V = Ar(A);
            (A !== V || A.tag !== M && A.tag !== J) && (A = null);
          }
        } else
          w = null, A = a;
        if (w !== A) {
          var fe = sf, $e = "onMouseLeave", ze = "onMouseEnter", zt = "mouse";
          (t === "pointerout" || t === "pointerover") && (fe = Qd, $e = "onPointerLeave", ze = "onPointerEnter", zt = "pointer");
          var bt = w == null ? g : wf(w), D = A == null ? g : wf(A), B = new fe($e, zt + "leave", w, i, u);
          B.target = bt, B.relatedTarget = D;
          var O = null, te = Ys(u);
          if (te === a) {
            var Te = new fe(ze, zt + "enter", A, i, u);
            Te.target = D, Te.relatedTarget = bt, O = Te;
          }
          AT(e, B, O, w, A);
        }
      }
    }
    function ne(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var pe = typeof Object.is == "function" ? Object.is : ne;
    function je(e, t) {
      if (pe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!ir.call(t, s) || !pe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ie(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Je(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Qn(e, t) {
      for (var a = Ie(e), i = 0, u = 0; a; ) {
        if (a.nodeType === $i) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ie(Je(a));
      }
    }
    function Ft(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Al(e, u, s, f, p);
    }
    function Al(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === $i) && (f = s + a), g === i && (u === 0 || g.nodeType === $i) && (p = s + u), g.nodeType === $i && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          _ = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
            break;
          g = _, _ = g.parentNode;
        }
        g = w;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Ry(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Qn(e, f), g = Qn(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), u.addRange(_));
        }
      }
    }
    function S0(e) {
      return e && e.nodeType === $i;
    }
    function E0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : S0(e) ? !1 : S0(t) ? E0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function yT(e) {
      return e && e.ownerDocument && E0(e.ownerDocument.documentElement, e);
    }
    function gT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function C0() {
      for (var e = window, t = Pi(); t instanceof e.HTMLIFrameElement; ) {
        if (gT(t))
          e = t.contentWindow;
        else
          return t;
        t = Pi(e.document);
      }
      return t;
    }
    function Ty(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function ST() {
      var e = C0();
      return {
        focusedElem: e,
        selectionRange: Ty(e) ? CT(e) : null
      };
    }
    function ET(e) {
      var t = C0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && yT(a)) {
        i !== null && Ty(a) && RT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Xr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function CT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ft(e), t || {
        start: 0,
        end: 0
      };
    }
    function RT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Ry(e, t);
    }
    var TT = qn && "documentMode" in document && document.documentMode <= 11;
    function xT() {
      Wt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Ef = null, xy = null, Zd = null, wy = !1;
    function wT(e) {
      if ("selectionStart" in e && Ty(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function bT(e) {
      return e.window === e ? e.document : e.nodeType === Yi ? e : e.ownerDocument;
    }
    function R0(e, t, a) {
      var i = bT(a);
      if (!(wy || Ef == null || Ef !== Pi(i))) {
        var u = wT(Ef);
        if (!Zd || !je(Zd, u)) {
          Zd = u;
          var s = Eh(xy, "onSelect");
          if (s.length > 0) {
            var f = new Ra("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Ef;
          }
        }
      }
    }
    function _T(e, t, a, i, u, s, f) {
      var p = a ? wf(a) : window;
      switch (t) {
        case "focusin":
          (mh(p) || p.contentEditable === "true") && (Ef = p, xy = a, Zd = null);
          break;
        case "focusout":
          Ef = null, xy = null, Zd = null;
          break;
        case "mousedown":
          wy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wy = !1, R0(e, i, u);
          break;
        case "selectionchange":
          if (TT)
            break;
        case "keydown":
        case "keyup":
          R0(e, i, u);
      }
    }
    function yh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Cf = {
      animationend: yh("Animation", "AnimationEnd"),
      animationiteration: yh("Animation", "AnimationIteration"),
      animationstart: yh("Animation", "AnimationStart"),
      transitionend: yh("Transition", "TransitionEnd")
    }, by = {}, T0 = {};
    qn && (T0 = document.createElement("div").style, "AnimationEvent" in window || (delete Cf.animationend.animation, delete Cf.animationiteration.animation, delete Cf.animationstart.animation), "TransitionEvent" in window || delete Cf.transitionend.transition);
    function gh(e) {
      if (by[e])
        return by[e];
      if (!Cf[e])
        return e;
      var t = Cf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in T0)
          return by[e] = t[a];
      return e;
    }
    var x0 = gh("animationend"), w0 = gh("animationiteration"), b0 = gh("animationstart"), _0 = gh("transitionend"), k0 = /* @__PURE__ */ new Map(), D0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function wo(e, t) {
      k0.set(e, t), Wt(t, [e]);
    }
    function kT() {
      for (var e = 0; e < D0.length; e++) {
        var t = D0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        wo(a, "on" + i);
      }
      wo(x0, "onAnimationEnd"), wo(w0, "onAnimationIteration"), wo(b0, "onAnimationStart"), wo("dblclick", "onDoubleClick"), wo("focusin", "onFocus"), wo("focusout", "onBlur"), wo(_0, "onTransitionEnd");
    }
    function DT(e, t, a, i, u, s, f) {
      var p = k0.get(t);
      if (p !== void 0) {
        var v = Ra, y = t;
        switch (t) {
          case "keypress":
            if (Ro(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = my;
            break;
          case "focusin":
            y = "focus", v = cf;
            break;
          case "focusout":
            y = "blur", v = cf;
            break;
          case "beforeblur":
          case "afterblur":
            v = cf;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = sf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = $d;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = gy;
            break;
          case x0:
          case w0:
          case b0:
            v = Yd;
            break;
          case _0:
            v = Gd;
            break;
          case "scroll":
            v = ah;
            break;
          case "wheel":
            v = Nl;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = py;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Qd;
            break;
        }
        var g = (s & nu) !== 0;
        {
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = MT(a, p, i.type, g, _);
          if (w.length > 0) {
            var A = new v(p, y, null, i, u);
            e.push({
              event: A,
              listeners: w
            });
          }
        }
      }
    }
    kT(), b(), Cy(), xT(), dh();
    function OT(e, t, a, i, u, s, f) {
      DT(e, t, a, i, u, s);
      var p = (s & od) === 0;
      p && (N(e, t, a, i, u), k(e, t, a, i, u), _T(e, t, a, i, u), Ey(e, t, a, i, u));
    }
    var ep = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], _y = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ep));
    function O0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ss(i, t, void 0, e), e.currentTarget = null;
    }
    function LT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          O0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, w = g.currentTarget, A = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          O0(e, A, w), i = _;
        }
    }
    function L0(e, t) {
      for (var a = (t & nu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        LT(s, f, a);
      }
      Ii();
    }
    function NT(e, t, a, i, u) {
      var s = yc(a), f = [];
      OT(f, e, i, a, s, t), L0(f, t);
    }
    function En(e, t) {
      _y.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = ow(t), u = UT(e);
      i.has(u) || (N0(t, e, yi, a), i.add(u));
    }
    function ky(e, t, a) {
      _y.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= nu), N0(a, e, i, t);
    }
    var Sh = "_reactListening" + Math.random().toString(36).slice(2);
    function tp(e) {
      if (!e[Sh]) {
        e[Sh] = !0, Ot.forEach(function(a) {
          a !== "selectionchange" && (_y.has(a) || ky(a, !1, e), ky(a, !0, e));
        });
        var t = e.nodeType === Yi ? e : e.ownerDocument;
        t !== null && (t[Sh] || (t[Sh] = !0, ky("selectionchange", !1, t)));
      }
    }
    function N0(e, t, a, i, u) {
      var s = Ea(e, t, a), f = void 0;
      os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Eo(e, t, s, f) : Bd(e, t, s) : f !== void 0 ? Ki(e, t, s, f) : la(e, t, s);
    }
    function M0(e, t) {
      return e === t || e.nodeType === Un && e.parentNode === t;
    }
    function Dy(e, t, a, i, u) {
      var s = i;
      if (!(t & ud) && !(t & yi)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === L || v === X) {
              var y = p.stateNode.containerInfo;
              if (M0(y, f))
                break;
              if (v === X)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === L || _ === X) {
                    var w = g.stateNode.containerInfo;
                    if (M0(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var A = Ys(y);
                if (A === null)
                  return;
                var j = A.tag;
                if (j === M || j === J) {
                  p = s = A;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Dv(function() {
        return NT(e, t, a, s);
      });
    }
    function np(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function MT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, w = _.stateNode, A = _.tag;
        if (A === M && w !== null && (g = w, p !== null)) {
          var j = au(y, p);
          j != null && v.push(np(y, j, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function Eh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === M && f !== null) {
          var v = f, y = au(u, a);
          y != null && i.unshift(np(u, y, v));
          var g = au(u, t);
          g != null && i.push(np(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function Rf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== M);
      return e || null;
    }
    function zT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Rf(s))
        u++;
      for (var f = 0, p = i; p; p = Rf(p))
        f++;
      for (; u - f > 0; )
        a = Rf(a), u--;
      for (; f - u > 0; )
        i = Rf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Rf(a), i = Rf(i);
      }
      return null;
    }
    function z0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === M && g !== null) {
          var w = g;
          if (u) {
            var A = au(p, s);
            A != null && f.unshift(np(p, A, w));
          } else if (!u) {
            var j = au(p, s);
            j != null && f.push(np(p, j, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function AT(e, t, a, i, u) {
      var s = i && u ? zT(i, u) : null;
      i !== null && z0(e, t, i, s, !1), u !== null && a !== null && z0(e, a, u, s, !0);
    }
    function UT(e, t) {
      return e + "__bubble";
    }
    var Va = !1, rp = "dangerouslySetInnerHTML", Ch = "suppressContentEditableWarning", bo = "suppressHydrationWarning", A0 = "autoFocus", Bs = "children", $s = "style", Rh = "__html", Oy, Th, ap, U0, xh, F0, j0;
    Oy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Th = function(e, t) {
      Tv(e, t), Zu(e, t), kv(e, t, {
        registrationNameDependencies: rt,
        possibleRegistrationNames: _t
      });
    }, F0 = qn && !document.documentMode, ap = function(e, t, a) {
      if (!Va) {
        var i = wh(a), u = wh(t);
        u !== i && (Va = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, U0 = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, xh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, j0 = function(e, t) {
      var a = e.namespaceURI === Ja ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var FT = /\r\n?/g, jT = /\u0000|\uFFFD/g;
    function wh(e) {
      $n(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(FT, `
`).replace(jT, "");
    }
    function bh(e, t, a, i) {
      var u = wh(t), s = wh(e);
      if (s !== u && (i && (Va || (Va = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && U))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function H0(e) {
      return e.nodeType === Yi ? e : e.ownerDocument;
    }
    function HT() {
    }
    function _h(e) {
      e.onclick = HT;
    }
    function PT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === $s)
            f && Object.freeze(f), gv(t, f);
          else if (s === rp) {
            var p = f ? f[Rh] : void 0;
            p != null && lv(t, p);
          } else if (s === Bs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && vl(t, f);
            } else typeof f == "number" && vl(t, "" + f);
          else s === Ch || s === bo || s === A0 || (rt.hasOwnProperty(s) ? f != null && (typeof f != "function" && xh(s, f), s === "onScroll" && En("scroll", t)) : f != null && ha(t, s, f, u));
        }
    }
    function VT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === $s ? gv(e, f) : s === rp ? lv(e, f) : s === Bs ? vl(e, f) : ha(e, s, f, i);
      }
    }
    function BT(e, t, a, i) {
      var u, s = H0(a), f, p = i;
      if (p === Ja && (p = td(e)), p === Ja) {
        if (u = hl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Ja && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ir.call(Oy, e) && (Oy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function $T(e, t) {
      return H0(t).createTextNode(e);
    }
    function YT(e, t, a, i) {
      var u = hl(t, a);
      Th(t, a);
      var s;
      switch (t) {
        case "dialog":
          En("cancel", e), En("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ep.length; f++)
            En(ep[f], e);
          s = a;
          break;
        case "source":
          En("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e), s = a;
          break;
        case "details":
          En("toggle", e), s = a;
          break;
        case "input":
          Wu(e, a), s = Ma(e, a), En("invalid", e);
          break;
        case "option":
          $t(e, a), s = a;
          break;
        case "select":
          Ko(e, a), s = tu(e, a), En("invalid", e);
          break;
        case "textarea":
          rv(e, a), s = fc(e, a), En("invalid", e);
          break;
        default:
          s = a;
      }
      switch (hc(t, s), PT(t, e, i, s, u), t) {
        case "input":
          Na(e), z(e, a, !1);
          break;
        case "textarea":
          Na(e), iv(e);
          break;
        case "option":
          Jt(e, a);
          break;
        case "select":
          Jf(e, a);
          break;
        default:
          typeof s.onClick == "function" && _h(e);
          break;
      }
    }
    function IT(e, t, a, i, u) {
      Th(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Ma(e, a), p = Ma(e, i), s = [];
          break;
        case "select":
          f = tu(e, a), p = tu(e, i), s = [];
          break;
        case "textarea":
          f = fc(e, a), p = fc(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && _h(e);
          break;
      }
      hc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === $s) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === rp || v === Bs || v === Ch || v === bo || v === A0 || (rt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], A = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === A || w == null && A == null))
          if (v === $s)
            if (w && Object.freeze(w), A) {
              for (y in A)
                A.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && A[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === rp) {
            var j = w ? w[Rh] : void 0, V = A ? A[Rh] : void 0;
            j != null && V !== j && (s = s || []).push(v, j);
          } else v === Bs ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === Ch || v === bo || (rt.hasOwnProperty(v) ? (w != null && (typeof w != "function" && xh(v, w), v === "onScroll" && En("scroll", e)), !s && A !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Za(g, p[$s]), (s = s || []).push($s, g)), s;
    }
    function WT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = hl(a, i), f = hl(a, u);
      switch (VT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          av(e, u);
          break;
        case "select":
          cc(e, u);
          break;
      }
    }
    function QT(e) {
      {
        var t = e.toLowerCase();
        return Ku.hasOwnProperty(t) && Ku[t] || null;
      }
    }
    function GT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = hl(t, a), Th(t, a), t) {
        case "dialog":
          En("cancel", e), En("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < ep.length; y++)
            En(ep[y], e);
          break;
        case "source":
          En("error", e);
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e);
          break;
        case "details":
          En("toggle", e);
          break;
        case "input":
          Wu(e, a), En("invalid", e);
          break;
        case "option":
          $t(e, a);
          break;
        case "select":
          Ko(e, a), En("invalid", e);
          break;
        case "textarea":
          rv(e, a), En("invalid", e);
          break;
      }
      hc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, _ = 0; _ < g.length; _++) {
          var w = g[_].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[_].name);
          }
        }
      }
      var A = null;
      for (var j in a)
        if (a.hasOwnProperty(j)) {
          var V = a[j];
          if (j === Bs)
            typeof V == "string" ? e.textContent !== V && (a[bo] !== !0 && bh(e.textContent, V, s, f), A = [Bs, V]) : typeof V == "number" && e.textContent !== "" + V && (a[bo] !== !0 && bh(e.textContent, V, s, f), A = [Bs, "" + V]);
          else if (rt.hasOwnProperty(j))
            V != null && (typeof V != "function" && xh(j, V), j === "onScroll" && En("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var fe = void 0, $e = un(j);
            if (a[bo] !== !0) {
              if (!(j === Ch || j === bo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              j === "value" || j === "checked" || j === "selected")) {
                if (j === rp) {
                  var ze = e.innerHTML, zt = V ? V[Rh] : void 0;
                  if (zt != null) {
                    var bt = j0(e, zt);
                    bt !== ze && ap(j, ze, bt);
                  }
                } else if (j === $s) {
                  if (v.delete(j), F0) {
                    var D = ry(V);
                    fe = e.getAttribute("style"), D !== fe && ap(j, fe, D);
                  }
                } else if (p && !$)
                  v.delete(j.toLowerCase()), fe = si(e, j, V), V !== fe && ap(j, fe, V);
                else if (!cn(j, $e, p) && !Jn(j, V, $e, p)) {
                  var B = !1;
                  if ($e !== null)
                    v.delete($e.attributeName), fe = Gl(e, j, V, $e);
                  else {
                    var O = i;
                    if (O === Ja && (O = td(t)), O === Ja)
                      v.delete(j.toLowerCase());
                    else {
                      var te = QT(j);
                      te !== null && te !== j && (B = !0, v.delete(te)), v.delete(j);
                    }
                    fe = si(e, j, V);
                  }
                  var Te = $;
                  !Te && V !== fe && !B && ap(j, fe, V);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[bo] !== !0 && U0(v), t) {
        case "input":
          Na(e), z(e, a, !0);
          break;
        case "textarea":
          Na(e), iv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && _h(e);
          break;
      }
      return A;
    }
    function qT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ly(e, t) {
      {
        if (Va)
          return;
        Va = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (Va)
          return;
        Va = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function My(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function zy(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function KT(e, t, a) {
      switch (t) {
        case "input":
          P(e, a);
          return;
        case "textarea":
          Km(e, a);
          return;
        case "select":
          Zf(e, a);
          return;
      }
    }
    var ip = function() {
    }, lp = function() {
    };
    {
      var XT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], P0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], JT = P0.concat(["button"]), ZT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], V0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      lp = function(e, t) {
        var a = ot({}, e || V0), i = {
          tag: t
        };
        return P0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), JT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), XT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var ex = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return ZT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, tx = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, B0 = {};
      ip = function(e, t, a) {
        a = a || V0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = ex(e, u) ? null : i, f = s ? null : tx(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!B0[y]) {
            B0[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var kh = "suppressHydrationWarning", Dh = "$", Oh = "/$", up = "$?", op = "$!", nx = "style", Ay = null, Uy = null;
    function rx(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Yi:
        case Xo: {
          t = i === Yi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : dc(null, "");
          break;
        }
        default: {
          var s = i === Un ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = dc(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = lp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function ax(e, t, a) {
      {
        var i = e, u = dc(i.namespace, t), s = lp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Sk(e) {
      return e;
    }
    function ix(e) {
      Ay = dr(), Uy = ST();
      var t = null;
      return Dn(!1), t;
    }
    function lx(e) {
      ET(Uy), Dn(Ay), Ay = null, Uy = null;
    }
    function ux(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ip(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = lp(f.ancestorInfo, e);
          ip(null, p, v);
        }
        s = f.namespace;
      }
      var y = BT(e, t, a, s);
      return fp(u, y), Yy(y, t), y;
    }
    function ox(e, t) {
      e.appendChild(t);
    }
    function sx(e, t, a, i, u) {
      switch (YT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function cx(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = lp(f.ancestorInfo, t);
          ip(null, p, v);
        }
      }
      return IT(e, t, a, i);
    }
    function Fy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function fx(e, t, a, i) {
      {
        var u = a;
        ip(null, e, u.ancestorInfo);
      }
      var s = $T(e, t);
      return fp(i, s), s;
    }
    function dx() {
      var e = window.event;
      return e === void 0 ? cr : So(e.type);
    }
    var jy = typeof setTimeout == "function" ? setTimeout : void 0, px = typeof clearTimeout == "function" ? clearTimeout : void 0, Hy = -1, $0 = typeof Promise == "function" ? Promise : void 0, vx = typeof queueMicrotask == "function" ? queueMicrotask : typeof $0 < "u" ? function(e) {
      return $0.resolve(null).then(e).catch(hx);
    } : jy;
    function hx(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function mx(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function yx(e, t, a, i, u, s) {
      WT(e, t, a, i, u), Yy(e, u);
    }
    function Y0(e) {
      vl(e, "");
    }
    function gx(e, t, a) {
      e.nodeValue = a;
    }
    function Sx(e, t) {
      e.appendChild(t);
    }
    function Ex(e, t) {
      var a;
      e.nodeType === Un ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && _h(a);
    }
    function Cx(e, t, a) {
      e.insertBefore(t, a);
    }
    function Rx(e, t, a) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Tx(e, t) {
      e.removeChild(t);
    }
    function xx(e, t) {
      e.nodeType === Un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Py(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Un) {
          var s = u.data;
          if (s === Oh)
            if (i === 0) {
              e.removeChild(u), Dr(t);
              return;
            } else
              i--;
          else (s === Dh || s === up || s === op) && i++;
        }
        a = u;
      } while (a);
      Dr(t);
    }
    function wx(e, t) {
      e.nodeType === Un ? Py(e.parentNode, t) : e.nodeType === Xr && Py(e, t), Dr(e);
    }
    function bx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function _x(e) {
      e.nodeValue = "";
    }
    function kx(e, t) {
      e = e;
      var a = t[nx], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = vc("display", i);
    }
    function Dx(e, t) {
      e.nodeValue = t;
    }
    function Ox(e) {
      e.nodeType === Xr ? e.textContent = "" : e.nodeType === Yi && e.documentElement && e.removeChild(e.documentElement);
    }
    function Lx(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Nx(e, t) {
      return t === "" || e.nodeType !== $i ? null : e;
    }
    function Mx(e) {
      return e.nodeType !== Un ? null : e;
    }
    function I0(e) {
      return e.data === up;
    }
    function Vy(e) {
      return e.data === op;
    }
    function zx(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Ax(e, t) {
      e._reactRetry = t;
    }
    function Lh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Xr || t === $i)
          break;
        if (t === Un) {
          var a = e.data;
          if (a === Dh || a === op || a === up)
            break;
          if (a === Oh)
            return null;
        }
      }
      return e;
    }
    function sp(e) {
      return Lh(e.nextSibling);
    }
    function Ux(e) {
      return Lh(e.firstChild);
    }
    function Fx(e) {
      return Lh(e.firstChild);
    }
    function jx(e) {
      return Lh(e.nextSibling);
    }
    function Hx(e, t, a, i, u, s, f) {
      fp(s, e), Yy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & Ct) !== Ue;
      return GT(e, t, a, p, i, y, f);
    }
    function Px(e, t, a, i) {
      return fp(a, e), a.mode & Ct, qT(e, t);
    }
    function Vx(e, t) {
      fp(t, e);
    }
    function Bx(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === Oh) {
            if (a === 0)
              return sp(t);
            a--;
          } else (i === Dh || i === op || i === up) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function W0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === Dh || i === op || i === up) {
            if (a === 0)
              return t;
            a--;
          } else i === Oh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function $x(e) {
      Dr(e);
    }
    function Yx(e) {
      Dr(e);
    }
    function Ix(e) {
      return e !== "head" && e !== "body";
    }
    function Wx(e, t, a, i) {
      var u = !0;
      bh(t.nodeValue, a, i, u);
    }
    function Qx(e, t, a, i, u, s) {
      if (t[kh] !== !0) {
        var f = !0;
        bh(i.nodeValue, u, s, f);
      }
    }
    function Gx(e, t) {
      t.nodeType === Xr ? Ly(e, t) : t.nodeType === Un || Ny(e, t);
    }
    function qx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? Ly(a, t) : t.nodeType === Un || Ny(a, t));
      }
    }
    function Kx(e, t, a, i, u) {
      (u || t[kh] !== !0) && (i.nodeType === Xr ? Ly(a, i) : i.nodeType === Un || Ny(a, i));
    }
    function Xx(e, t, a) {
      My(e, t);
    }
    function Jx(e, t) {
      zy(e, t);
    }
    function Zx(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && My(i, t);
      }
    }
    function ew(e, t) {
      {
        var a = e.parentNode;
        a !== null && zy(a, t);
      }
    }
    function tw(e, t, a, i, u, s) {
      (s || t[kh] !== !0) && My(a, i);
    }
    function nw(e, t, a, i, u) {
      (u || t[kh] !== !0) && zy(a, i);
    }
    function rw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function aw(e) {
      tp(e);
    }
    var Tf = Math.random().toString(36).slice(2), xf = "__reactFiber$" + Tf, By = "__reactProps$" + Tf, cp = "__reactContainer$" + Tf, $y = "__reactEvents$" + Tf, iw = "__reactListeners$" + Tf, lw = "__reactHandles$" + Tf;
    function uw(e) {
      delete e[xf], delete e[By], delete e[$y], delete e[iw], delete e[lw];
    }
    function fp(e, t) {
      t[xf] = e;
    }
    function Nh(e, t) {
      t[cp] = e;
    }
    function Q0(e) {
      e[cp] = null;
    }
    function dp(e) {
      return !!e[cp];
    }
    function Ys(e) {
      var t = e[xf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[cp] || a[xf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = W0(e); u !== null; ) {
              var s = u[xf];
              if (s)
                return s;
              u = W0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function _o(e) {
      var t = e[xf] || e[cp];
      return t && (t.tag === M || t.tag === J || t.tag === _e || t.tag === L) ? t : null;
    }
    function wf(e) {
      if (e.tag === M || e.tag === J)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Mh(e) {
      return e[By] || null;
    }
    function Yy(e, t) {
      e[By] = t;
    }
    function ow(e) {
      var t = e[$y];
      return t === void 0 && (t = e[$y] = /* @__PURE__ */ new Set()), t;
    }
    var G0 = {}, q0 = he.ReactDebugCurrentFrame;
    function zh(e) {
      if (e) {
        var t = e._owner, a = Io(e.type, e._source, t ? t.type : null);
        q0.setExtraStackFrame(a);
      } else
        q0.setExtraStackFrame(null);
    }
    function Xi(e, t, a, i, u) {
      {
        var s = Function.call.bind(ir);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (zh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), zh(null)), p instanceof Error && !(p.message in G0) && (G0[p.message] = !0, zh(u), S("Failed %s type: %s", a, p.message), zh(null));
          }
      }
    }
    var Iy = [], Ah;
    Ah = [];
    var _u = -1;
    function ko(e) {
      return {
        current: e
      };
    }
    function ua(e, t) {
      if (_u < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Ah[_u] && S("Unexpected Fiber popped."), e.current = Iy[_u], Iy[_u] = null, Ah[_u] = null, _u--;
    }
    function oa(e, t, a) {
      _u++, Iy[_u] = e.current, Ah[_u] = a, e.current = t;
    }
    var Wy;
    Wy = {};
    var li = {};
    Object.freeze(li);
    var ku = ko(li), Ul = ko(!1), Qy = li;
    function bf(e, t, a) {
      return a && Fl(t) ? Qy : ku.current;
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function _f(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return li;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Xe(e) || "Unknown";
          Xi(i, s, "context", p);
        }
        return u && K0(e, t, s), s;
      }
    }
    function Uh() {
      return Ul.current;
    }
    function Fl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Fh(e) {
      ua(Ul, e), ua(ku, e);
    }
    function Gy(e) {
      ua(Ul, e), ua(ku, e);
    }
    function X0(e, t, a) {
      {
        if (ku.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        oa(ku, t, e), oa(Ul, a, e);
      }
    }
    function J0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Xe(e) || "Unknown";
            Wy[s] || (Wy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Xe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Xe(e) || "Unknown";
          Xi(u, f, "child context", v);
        }
        return ot({}, a, f);
      }
    }
    function jh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return Qy = ku.current, oa(ku, a, e), oa(Ul, Ul.current, e), !0;
      }
    }
    function Z0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = J0(e, t, Qy);
          i.__reactInternalMemoizedMergedChildContext = u, ua(Ul, e), ua(ku, e), oa(ku, u, e), oa(Ul, a, e);
        } else
          ua(Ul, e), oa(Ul, a, e);
      }
    }
    function sw(e) {
      {
        if (!Mv(e) || e.tag !== Y)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case L:
              return t.stateNode.context;
            case Y: {
              var a = t.type;
              if (Fl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Do = 0, Hh = 1, Du = null, qy = !1, Ky = !1;
    function eE(e) {
      Du === null ? Du = [e] : Du.push(e);
    }
    function cw(e) {
      qy = !0, eE(e);
    }
    function tE() {
      qy && Oo();
    }
    function Oo() {
      if (!Ky && Du !== null) {
        Ky = !0;
        var e = 0, t = Sa();
        try {
          var a = !0, i = Du;
          for (In(ia); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Du = null, qy = !1;
        } catch (s) {
          throw Du !== null && (Du = Du.slice(e + 1)), md(Qi, Oo), s;
        } finally {
          In(t), Ky = !1;
        }
      }
      return null;
    }
    var kf = [], Df = 0, Ph = null, Vh = 0, xi = [], wi = 0, Is = null, Ou = 1, Lu = "";
    function fw(e) {
      return Qs(), (e.flags & fs) !== Ae;
    }
    function dw(e) {
      return Qs(), Vh;
    }
    function pw() {
      var e = Lu, t = Ou, a = t & ~vw(t);
      return a.toString(32) + e;
    }
    function Ws(e, t) {
      Qs(), kf[Df++] = Vh, kf[Df++] = Ph, Ph = e, Vh = t;
    }
    function nE(e, t, a) {
      Qs(), xi[wi++] = Ou, xi[wi++] = Lu, xi[wi++] = Is, Is = e;
      var i = Ou, u = Lu, s = Bh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Bh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), w = f >> y, A = s - y, j = Bh(t) + A, V = p << A, fe = V | w, $e = _ + u;
        Ou = 1 << j | fe, Lu = $e;
      } else {
        var ze = p << s, zt = ze | f, bt = u;
        Ou = 1 << v | zt, Lu = bt;
      }
    }
    function Xy(e) {
      Qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ws(e, a), nE(e, a, i);
      }
    }
    function Bh(e) {
      return 32 - Yn(e);
    }
    function vw(e) {
      return 1 << Bh(e) - 1;
    }
    function Jy(e) {
      for (; e === Ph; )
        Ph = kf[--Df], kf[Df] = null, Vh = kf[--Df], kf[Df] = null;
      for (; e === Is; )
        Is = xi[--wi], xi[wi] = null, Lu = xi[--wi], xi[wi] = null, Ou = xi[--wi], xi[wi] = null;
    }
    function hw() {
      return Qs(), Is !== null ? {
        id: Ou,
        overflow: Lu
      } : null;
    }
    function mw(e, t) {
      Qs(), xi[wi++] = Ou, xi[wi++] = Lu, xi[wi++] = Is, Ou = t.id, Lu = t.overflow, Is = e;
    }
    function Qs() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Fr = null, bi = null, Ji = !1, Gs = !1, Lo = null;
    function yw() {
      Ji && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function rE() {
      Gs = !0;
    }
    function gw() {
      return Gs;
    }
    function Sw(e) {
      var t = e.stateNode.containerInfo;
      return bi = Fx(t), Fr = e, Ji = !0, Lo = null, Gs = !1, !0;
    }
    function Ew(e, t, a) {
      return bi = jx(t), Fr = e, Ji = !0, Lo = null, Gs = !1, a !== null && mw(e, a), !0;
    }
    function aE(e, t) {
      switch (e.tag) {
        case L: {
          Gx(e.stateNode.containerInfo, t);
          break;
        }
        case M: {
          var a = (e.mode & Ct) !== Ue;
          Kx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case _e: {
          var i = e.memoizedState;
          i.dehydrated !== null && qx(i.dehydrated, t);
          break;
        }
      }
    }
    function iE(e, t) {
      aE(e, t);
      var a = x1();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Jr) : i.push(a);
    }
    function Zy(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case L: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case M:
                var i = t.type;
                t.pendingProps, Xx(a, i);
                break;
              case J:
                var u = t.pendingProps;
                Jx(a, u);
                break;
            }
            break;
          }
          case M: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case M: {
                var v = t.type, y = t.pendingProps, g = (e.mode & Ct) !== Ue;
                tw(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case J: {
                var _ = t.pendingProps, w = (e.mode & Ct) !== Ue;
                nw(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case _e: {
            var A = e.memoizedState, j = A.dehydrated;
            if (j !== null) switch (t.tag) {
              case M:
                var V = t.type;
                t.pendingProps, Zx(j, V);
                break;
              case J:
                var fe = t.pendingProps;
                ew(j, fe);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function lE(e, t) {
      t.flags = t.flags & ~Tn | Rn, Zy(e, t);
    }
    function uE(e, t) {
      switch (e.tag) {
        case M: {
          var a = e.type;
          e.pendingProps;
          var i = Lx(t, a);
          return i !== null ? (e.stateNode = i, Fr = e, bi = Ux(i), !0) : !1;
        }
        case J: {
          var u = e.pendingProps, s = Nx(t, u);
          return s !== null ? (e.stateNode = s, Fr = e, bi = null, !0) : !1;
        }
        case _e: {
          var f = Mx(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: hw(),
              retryLane: na
            };
            e.memoizedState = p;
            var v = w1(f);
            return v.return = e, e.child = v, Fr = e, bi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function eg(e) {
      return (e.mode & Ct) !== Ue && (e.flags & St) === Ae;
    }
    function tg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ng(e) {
      if (Ji) {
        var t = bi;
        if (!t) {
          eg(e) && (Zy(Fr, e), tg()), lE(Fr, e), Ji = !1, Fr = e;
          return;
        }
        var a = t;
        if (!uE(e, t)) {
          eg(e) && (Zy(Fr, e), tg()), t = sp(a);
          var i = Fr;
          if (!t || !uE(e, t)) {
            lE(Fr, e), Ji = !1, Fr = e;
            return;
          }
          iE(i, a);
        }
      }
    }
    function Cw(e, t, a) {
      var i = e.stateNode, u = !Gs, s = Hx(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Rw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Px(t, a, e);
      if (i) {
        var u = Fr;
        if (u !== null)
          switch (u.tag) {
            case L: {
              var s = u.stateNode.containerInfo, f = (u.mode & Ct) !== Ue;
              Wx(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case M: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & Ct) !== Ue;
              Qx(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function Tw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Vx(a, e);
    }
    function xw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Bx(a);
    }
    function oE(e) {
      for (var t = e.return; t !== null && t.tag !== M && t.tag !== L && t.tag !== _e; )
        t = t.return;
      Fr = t;
    }
    function $h(e) {
      if (e !== Fr)
        return !1;
      if (!Ji)
        return oE(e), Ji = !0, !1;
      if (e.tag !== L && (e.tag !== M || Ix(e.type) && !Fy(e.type, e.memoizedProps))) {
        var t = bi;
        if (t)
          if (eg(e))
            sE(e), tg();
          else
            for (; t; )
              iE(e, t), t = sp(t);
      }
      return oE(e), e.tag === _e ? bi = xw(e) : bi = Fr ? sp(e.stateNode) : null, !0;
    }
    function ww() {
      return Ji && bi !== null;
    }
    function sE(e) {
      for (var t = bi; t; )
        aE(e, t), t = sp(t);
    }
    function Of() {
      Fr = null, bi = null, Ji = !1, Gs = !1;
    }
    function cE() {
      Lo !== null && (rR(Lo), Lo = null);
    }
    function jr() {
      return Ji;
    }
    function rg(e) {
      Lo === null ? Lo = [e] : Lo.push(e);
    }
    var bw = he.ReactCurrentBatchConfig, _w = null;
    function kw() {
      return bw.transition;
    }
    var Zi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Dw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & st && (t = a), a = a.return;
        return t;
      }, qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, pp = [], vp = [], hp = [], mp = [], yp = [], gp = [], Ks = /* @__PURE__ */ new Set();
      Zi.recordUnsafeLifecycleWarnings = function(e, t) {
        Ks.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & st && typeof t.UNSAFE_componentWillMount == "function" && vp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & st && typeof t.UNSAFE_componentWillReceiveProps == "function" && mp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && yp.push(e), e.mode & st && typeof t.UNSAFE_componentWillUpdate == "function" && gp.push(e));
      }, Zi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          e.add(Xe(w) || "Component"), Ks.add(w.type);
        }), pp = []);
        var t = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          t.add(Xe(w) || "Component"), Ks.add(w.type);
        }), vp = []);
        var a = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(w) {
          a.add(Xe(w) || "Component"), Ks.add(w.type);
        }), hp = []);
        var i = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(w) {
          i.add(Xe(w) || "Component"), Ks.add(w.type);
        }), mp = []);
        var u = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(w) {
          u.add(Xe(w) || "Component"), Ks.add(w.type);
        }), yp = []);
        var s = /* @__PURE__ */ new Set();
        if (gp.length > 0 && (gp.forEach(function(w) {
          s.add(Xe(w) || "Component"), Ks.add(w.type);
        }), gp = []), t.size > 0) {
          var f = qs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = qs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = qs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = qs(e);
          it(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = qs(a);
          it(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = qs(u);
          it(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Yh = /* @__PURE__ */ new Map(), fE = /* @__PURE__ */ new Set();
      Zi.recordLegacyContextWarning = function(e, t) {
        var a = Dw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!fE.has(e.type)) {
          var i = Yh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Yh.set(a, i)), i.push(e));
        }
      }, Zi.flushLegacyContextWarning = function() {
        Yh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Xe(s) || "Component"), fE.add(s.type);
            });
            var u = qs(i);
            try {
              Xt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Cn();
            }
          }
        });
      }, Zi.discardPendingWarnings = function() {
        pp = [], vp = [], hp = [], mp = [], yp = [], gp = [], Yh = /* @__PURE__ */ new Map();
      };
    }
    var ag, ig, lg, ug, og, dE = function(e, t) {
    };
    ag = !1, ig = !1, lg = {}, ug = {}, og = {}, dE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Xe(t) || "Component";
        ug[a] || (ug[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Ow(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Sp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & st || xe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== Y) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Ow(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Xe(e) || "Component";
          lg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), lg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== Y)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Ga(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(_) {
            var w = v.refs;
            _ === null ? delete w[y] : w[y] = _;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Ih(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Wh(e) {
      {
        var t = Xe(e) || "Component";
        if (og[t])
          return;
        og[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function pE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function vE(e) {
      function t(D, B) {
        if (e) {
          var O = D.deletions;
          O === null ? (D.deletions = [B], D.flags |= Jr) : O.push(B);
        }
      }
      function a(D, B) {
        if (!e)
          return null;
        for (var O = B; O !== null; )
          t(D, O), O = O.sibling;
        return null;
      }
      function i(D, B) {
        for (var O = /* @__PURE__ */ new Map(), te = B; te !== null; )
          te.key !== null ? O.set(te.key, te) : O.set(te.index, te), te = te.sibling;
        return O;
      }
      function u(D, B) {
        var O = ic(D, B);
        return O.index = 0, O.sibling = null, O;
      }
      function s(D, B, O) {
        if (D.index = O, !e)
          return D.flags |= fs, B;
        var te = D.alternate;
        if (te !== null) {
          var Te = te.index;
          return Te < B ? (D.flags |= Rn, B) : Te;
        } else
          return D.flags |= Rn, B;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= Rn), D;
      }
      function p(D, B, O, te) {
        if (B === null || B.tag !== J) {
          var Te = r0(O, D.mode, te);
          return Te.return = D, Te;
        } else {
          var ve = u(B, O);
          return ve.return = D, ve;
        }
      }
      function v(D, B, O, te) {
        var Te = O.type;
        if (Te === Qr)
          return g(D, B, O.props.children, te, O.key);
        if (B !== null && (B.elementType === Te || // Keep this check inline so it only runs on the false path:
        SR(B, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Te == "object" && Te !== null && Te.$$typeof === et && pE(Te) === B.type)) {
          var ve = u(B, O.props);
          return ve.ref = Sp(D, B, O), ve.return = D, ve._debugSource = O._source, ve._debugOwner = O._owner, ve;
        }
        var Ge = n0(O, D.mode, te);
        return Ge.ref = Sp(D, B, O), Ge.return = D, Ge;
      }
      function y(D, B, O, te) {
        if (B === null || B.tag !== X || B.stateNode.containerInfo !== O.containerInfo || B.stateNode.implementation !== O.implementation) {
          var Te = a0(O, D.mode, te);
          return Te.return = D, Te;
        } else {
          var ve = u(B, O.children || []);
          return ve.return = D, ve;
        }
      }
      function g(D, B, O, te, Te) {
        if (B === null || B.tag !== Be) {
          var ve = Bo(O, D.mode, te, Te);
          return ve.return = D, ve;
        } else {
          var Ge = u(B, O);
          return Ge.return = D, Ge;
        }
      }
      function _(D, B, O) {
        if (typeof B == "string" && B !== "" || typeof B == "number") {
          var te = r0("" + B, D.mode, O);
          return te.return = D, te;
        }
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case ur: {
              var Te = n0(B, D.mode, O);
              return Te.ref = Sp(D, null, B), Te.return = D, Te;
            }
            case ma: {
              var ve = a0(B, D.mode, O);
              return ve.return = D, ve;
            }
            case et: {
              var Ge = B._payload, at = B._init;
              return _(D, at(Ge), O);
            }
          }
          if (dt(B) || mn(B)) {
            var nn = Bo(B, D.mode, O, null);
            return nn.return = D, nn;
          }
          Ih(D, B);
        }
        return typeof B == "function" && Wh(D), null;
      }
      function w(D, B, O, te) {
        var Te = B !== null ? B.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return Te !== null ? null : p(D, B, "" + O, te);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ur:
              return O.key === Te ? v(D, B, O, te) : null;
            case ma:
              return O.key === Te ? y(D, B, O, te) : null;
            case et: {
              var ve = O._payload, Ge = O._init;
              return w(D, B, Ge(ve), te);
            }
          }
          if (dt(O) || mn(O))
            return Te !== null ? null : g(D, B, O, te, null);
          Ih(D, O);
        }
        return typeof O == "function" && Wh(D), null;
      }
      function A(D, B, O, te, Te) {
        if (typeof te == "string" && te !== "" || typeof te == "number") {
          var ve = D.get(O) || null;
          return p(B, ve, "" + te, Te);
        }
        if (typeof te == "object" && te !== null) {
          switch (te.$$typeof) {
            case ur: {
              var Ge = D.get(te.key === null ? O : te.key) || null;
              return v(B, Ge, te, Te);
            }
            case ma: {
              var at = D.get(te.key === null ? O : te.key) || null;
              return y(B, at, te, Te);
            }
            case et:
              var nn = te._payload, jt = te._init;
              return A(D, B, O, jt(nn), Te);
          }
          if (dt(te) || mn(te)) {
            var Gn = D.get(O) || null;
            return g(B, Gn, te, Te, null);
          }
          Ih(B, te);
        }
        return typeof te == "function" && Wh(B), null;
      }
      function j(D, B, O) {
        {
          if (typeof D != "object" || D === null)
            return B;
          switch (D.$$typeof) {
            case ur:
            case ma:
              dE(D, O);
              var te = D.key;
              if (typeof te != "string")
                break;
              if (B === null) {
                B = /* @__PURE__ */ new Set(), B.add(te);
                break;
              }
              if (!B.has(te)) {
                B.add(te);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", te);
              break;
            case et:
              var Te = D._payload, ve = D._init;
              j(ve(Te), B, O);
              break;
          }
        }
        return B;
      }
      function V(D, B, O, te) {
        for (var Te = null, ve = 0; ve < O.length; ve++) {
          var Ge = O[ve];
          Te = j(Ge, Te, D);
        }
        for (var at = null, nn = null, jt = B, Gn = 0, Ht = 0, Vn = null; jt !== null && Ht < O.length; Ht++) {
          jt.index > Ht ? (Vn = jt, jt = null) : Vn = jt.sibling;
          var ca = w(D, jt, O[Ht], te);
          if (ca === null) {
            jt === null && (jt = Vn);
            break;
          }
          e && jt && ca.alternate === null && t(D, jt), Gn = s(ca, Gn, Ht), nn === null ? at = ca : nn.sibling = ca, nn = ca, jt = Vn;
        }
        if (Ht === O.length) {
          if (a(D, jt), jr()) {
            var Ir = Ht;
            Ws(D, Ir);
          }
          return at;
        }
        if (jt === null) {
          for (; Ht < O.length; Ht++) {
            var oi = _(D, O[Ht], te);
            oi !== null && (Gn = s(oi, Gn, Ht), nn === null ? at = oi : nn.sibling = oi, nn = oi);
          }
          if (jr()) {
            var ba = Ht;
            Ws(D, ba);
          }
          return at;
        }
        for (var _a = i(D, jt); Ht < O.length; Ht++) {
          var fa = A(_a, D, Ht, O[Ht], te);
          fa !== null && (e && fa.alternate !== null && _a.delete(fa.key === null ? Ht : fa.key), Gn = s(fa, Gn, Ht), nn === null ? at = fa : nn.sibling = fa, nn = fa);
        }
        if (e && _a.forEach(function(qf) {
          return t(D, qf);
        }), jr()) {
          var ju = Ht;
          Ws(D, ju);
        }
        return at;
      }
      function fe(D, B, O, te) {
        var Te = mn(O);
        if (typeof Te != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (ig || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ig = !0), O.entries === Te && (ag || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ag = !0);
          var ve = Te.call(O);
          if (ve)
            for (var Ge = null, at = ve.next(); !at.done; at = ve.next()) {
              var nn = at.value;
              Ge = j(nn, Ge, D);
            }
        }
        var jt = Te.call(O);
        if (jt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, Ht = null, Vn = B, ca = 0, Ir = 0, oi = null, ba = jt.next(); Vn !== null && !ba.done; Ir++, ba = jt.next()) {
          Vn.index > Ir ? (oi = Vn, Vn = null) : oi = Vn.sibling;
          var _a = w(D, Vn, ba.value, te);
          if (_a === null) {
            Vn === null && (Vn = oi);
            break;
          }
          e && Vn && _a.alternate === null && t(D, Vn), ca = s(_a, ca, Ir), Ht === null ? Gn = _a : Ht.sibling = _a, Ht = _a, Vn = oi;
        }
        if (ba.done) {
          if (a(D, Vn), jr()) {
            var fa = Ir;
            Ws(D, fa);
          }
          return Gn;
        }
        if (Vn === null) {
          for (; !ba.done; Ir++, ba = jt.next()) {
            var ju = _(D, ba.value, te);
            ju !== null && (ca = s(ju, ca, Ir), Ht === null ? Gn = ju : Ht.sibling = ju, Ht = ju);
          }
          if (jr()) {
            var qf = Ir;
            Ws(D, qf);
          }
          return Gn;
        }
        for (var Xp = i(D, Vn); !ba.done; Ir++, ba = jt.next()) {
          var Il = A(Xp, D, Ir, ba.value, te);
          Il !== null && (e && Il.alternate !== null && Xp.delete(Il.key === null ? Ir : Il.key), ca = s(Il, ca, Ir), Ht === null ? Gn = Il : Ht.sibling = Il, Ht = Il);
        }
        if (e && Xp.forEach(function(nk) {
          return t(D, nk);
        }), jr()) {
          var tk = Ir;
          Ws(D, tk);
        }
        return Gn;
      }
      function $e(D, B, O, te) {
        if (B !== null && B.tag === J) {
          a(D, B.sibling);
          var Te = u(B, O);
          return Te.return = D, Te;
        }
        a(D, B);
        var ve = r0(O, D.mode, te);
        return ve.return = D, ve;
      }
      function ze(D, B, O, te) {
        for (var Te = O.key, ve = B; ve !== null; ) {
          if (ve.key === Te) {
            var Ge = O.type;
            if (Ge === Qr) {
              if (ve.tag === Be) {
                a(D, ve.sibling);
                var at = u(ve, O.props.children);
                return at.return = D, at._debugSource = O._source, at._debugOwner = O._owner, at;
              }
            } else if (ve.elementType === Ge || // Keep this check inline so it only runs on the false path:
            SR(ve, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ge == "object" && Ge !== null && Ge.$$typeof === et && pE(Ge) === ve.type) {
              a(D, ve.sibling);
              var nn = u(ve, O.props);
              return nn.ref = Sp(D, ve, O), nn.return = D, nn._debugSource = O._source, nn._debugOwner = O._owner, nn;
            }
            a(D, ve);
            break;
          } else
            t(D, ve);
          ve = ve.sibling;
        }
        if (O.type === Qr) {
          var jt = Bo(O.props.children, D.mode, te, O.key);
          return jt.return = D, jt;
        } else {
          var Gn = n0(O, D.mode, te);
          return Gn.ref = Sp(D, B, O), Gn.return = D, Gn;
        }
      }
      function zt(D, B, O, te) {
        for (var Te = O.key, ve = B; ve !== null; ) {
          if (ve.key === Te)
            if (ve.tag === X && ve.stateNode.containerInfo === O.containerInfo && ve.stateNode.implementation === O.implementation) {
              a(D, ve.sibling);
              var Ge = u(ve, O.children || []);
              return Ge.return = D, Ge;
            } else {
              a(D, ve);
              break;
            }
          else
            t(D, ve);
          ve = ve.sibling;
        }
        var at = a0(O, D.mode, te);
        return at.return = D, at;
      }
      function bt(D, B, O, te) {
        var Te = typeof O == "object" && O !== null && O.type === Qr && O.key === null;
        if (Te && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ur:
              return f(ze(D, B, O, te));
            case ma:
              return f(zt(D, B, O, te));
            case et:
              var ve = O._payload, Ge = O._init;
              return bt(D, B, Ge(ve), te);
          }
          if (dt(O))
            return V(D, B, O, te);
          if (mn(O))
            return fe(D, B, O, te);
          Ih(D, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f($e(D, B, "" + O, te)) : (typeof O == "function" && Wh(D), a(D, B));
      }
      return bt;
    }
    var Lf = vE(!0), hE = vE(!1);
    function Lw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ic(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ic(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Nw(e, t) {
      for (var a = e.child; a !== null; )
        S1(a, t), a = a.sibling;
    }
    var sg = ko(null), cg;
    cg = {};
    var Qh = null, Nf = null, fg = null, Gh = !1;
    function qh() {
      Qh = null, Nf = null, fg = null, Gh = !1;
    }
    function mE() {
      Gh = !0;
    }
    function yE() {
      Gh = !1;
    }
    function gE(e, t, a) {
      oa(sg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== cg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = cg;
    }
    function dg(e, t) {
      var a = sg.current;
      ua(sg, t), e._currentValue = a;
    }
    function pg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (mu(i.childLanes, t) ? u !== null && !mu(u.childLanes, t) && (u.childLanes = pt(u.childLanes, t)) : (i.childLanes = pt(i.childLanes, t), u !== null && (u.childLanes = pt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Mw(e, t, a) {
      zw(e, t, a);
    }
    function zw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === Y) {
                var p = nr(a), v = Nu(qt, p);
                v.tag = Xh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = pt(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = pt(w.lanes, a)), pg(i.return, a, e), s.lanes = pt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ut)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === At) {
          var A = i.return;
          if (A === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          A.lanes = pt(A.lanes, a);
          var j = A.alternate;
          j !== null && (j.lanes = pt(j.lanes, a)), pg(A, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var V = u.sibling;
            if (V !== null) {
              V.return = u.return, u = V;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Mf(e, t) {
      Qh = e, Nf = null, fg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (aa(a.lanes, t) && zp(), a.firstContext = null);
      }
    }
    function ar(e) {
      Gh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (fg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Nf === null) {
          if (Qh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Nf = a, Qh.dependencies = {
            lanes: I,
            firstContext: a
          };
        } else
          Nf = Nf.next = a;
      }
      return t;
    }
    var Xs = null;
    function vg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function Aw() {
      if (Xs !== null) {
        for (var e = 0; e < Xs.length; e++) {
          var t = Xs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Xs = null;
      }
    }
    function SE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Kh(e, i);
    }
    function Uw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Fw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Kh(e, i);
    }
    function Ba(e, t) {
      return Kh(e, t);
    }
    var jw = Kh;
    function Kh(e, t) {
      e.lanes = pt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = pt(a.lanes, t)), a === null && (e.flags & (Rn | Tn)) !== Ae && hR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = pt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = pt(a.childLanes, t) : (u.flags & (Rn | Tn)) !== Ae && hR(e), i = u, u = u.return;
      if (i.tag === L) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var EE = 0, CE = 1, Xh = 2, hg = 3, Jh = !1, mg, Zh;
    mg = !1, Zh = null;
    function yg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: I
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function RE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Nu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: EE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function No(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Zh === u && !mg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), mg = !0), U_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, jw(e, a);
      } else
        return Fw(e, u, t, a);
    }
    function em(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Md(a)) {
          var s = u.lanes;
          s = Xc(s, e.pendingLanes);
          var f = pt(s, a);
          u.lanes = f, _s(e, f);
        }
      }
    }
    function gg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Hw(e, t, a, i, u, s) {
      switch (a.tag) {
        case CE: {
          var f = a.payload;
          if (typeof f == "function") {
            mE();
            var p = f.call(s, i, u);
            {
              if (e.mode & st) {
                Gt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Gt(!1);
                }
              }
              yE();
            }
            return p;
          }
          return f;
        }
        case hg:
          e.flags = e.flags & ~br | St;
        case EE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            mE(), y = v.call(s, i, u);
            {
              if (e.mode & st) {
                Gt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Gt(!1);
                }
              }
              yE();
            }
          } else
            y = v;
          return y == null ? i : ot({}, i, y);
        }
        case Xh:
          return Jh = !0, i;
      }
      return i;
    }
    function tm(e, t, a, i) {
      var u = e.updateQueue;
      Jh = !1, Zh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var _ = g.updateQueue, w = _.lastBaseUpdate;
          w !== f && (w === null ? _.firstBaseUpdate = y : w.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var A = u.baseState, j = I, V = null, fe = null, $e = null, ze = s;
        do {
          var zt = ze.lane, bt = ze.eventTime;
          if (mu(i, zt)) {
            if ($e !== null) {
              var B = {
                eventTime: bt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Hn,
                tag: ze.tag,
                payload: ze.payload,
                callback: ze.callback,
                next: null
              };
              $e = $e.next = B;
            }
            A = Hw(e, u, ze, A, t, a);
            var O = ze.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            ze.lane !== Hn) {
              e.flags |= an;
              var te = u.effects;
              te === null ? u.effects = [ze] : te.push(ze);
            }
          } else {
            var D = {
              eventTime: bt,
              lane: zt,
              tag: ze.tag,
              payload: ze.payload,
              callback: ze.callback,
              next: null
            };
            $e === null ? (fe = $e = D, V = A) : $e = $e.next = D, j = pt(j, zt);
          }
          if (ze = ze.next, ze === null) {
            if (p = u.shared.pending, p === null)
              break;
            var Te = p, ve = Te.next;
            Te.next = null, ze = ve, u.lastBaseUpdate = Te, u.shared.pending = null;
          }
        } while (!0);
        $e === null && (V = A), u.baseState = V, u.firstBaseUpdate = fe, u.lastBaseUpdate = $e;
        var Ge = u.shared.interleaved;
        if (Ge !== null) {
          var at = Ge;
          do
            j = pt(j, at.lane), at = at.next;
          while (at !== Ge);
        } else s === null && (u.shared.lanes = I);
        Wp(j), e.lanes = j, e.memoizedState = A;
      }
      Zh = null;
    }
    function Pw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function TE() {
      Jh = !1;
    }
    function nm() {
      return Jh;
    }
    function xE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Pw(f, a));
        }
    }
    var Ep = {}, Mo = ko(Ep), Cp = ko(Ep), rm = ko(Ep);
    function am(e) {
      if (e === Ep)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function wE() {
      var e = am(rm.current);
      return e;
    }
    function Sg(e, t) {
      oa(rm, t, e), oa(Cp, e, e), oa(Mo, Ep, e);
      var a = rx(t);
      ua(Mo, e), oa(Mo, a, e);
    }
    function zf(e) {
      ua(Mo, e), ua(Cp, e), ua(rm, e);
    }
    function Eg() {
      var e = am(Mo.current);
      return e;
    }
    function bE(e) {
      am(rm.current);
      var t = am(Mo.current), a = ax(t, e.type);
      t !== a && (oa(Cp, e, e), oa(Mo, a, e));
    }
    function Cg(e) {
      Cp.current === e && (ua(Mo, e), ua(Cp, e));
    }
    var Vw = 0, _E = 1, kE = 1, Rp = 2, el = ko(Vw);
    function Rg(e, t) {
      return (e & t) !== 0;
    }
    function Af(e) {
      return e & _E;
    }
    function Tg(e, t) {
      return e & _E | t;
    }
    function Bw(e, t) {
      return e | t;
    }
    function zo(e, t) {
      oa(el, t, e);
    }
    function Uf(e) {
      ua(el, e);
    }
    function $w(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function im(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === _e) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || I0(i) || Vy(i))
              return t;
          }
        } else if (t.tag === Ye && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & St) !== Ae;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var $a = (
      /*   */
      0
    ), pr = (
      /* */
      1
    ), jl = (
      /*  */
      2
    ), vr = (
      /*    */
      4
    ), Hr = (
      /*   */
      8
    ), xg = [];
    function wg() {
      for (var e = 0; e < xg.length; e++) {
        var t = xg[e];
        t._workInProgressVersionPrimary = null;
      }
      xg.length = 0;
    }
    function Yw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ce = he.ReactCurrentDispatcher, Tp = he.ReactCurrentBatchConfig, bg, Ff;
    bg = /* @__PURE__ */ new Set();
    var Js = I, tn = null, hr = null, mr = null, lm = !1, xp = !1, wp = 0, Iw = 0, Ww = 25, W = null, _i = null, Ao = -1, _g = !1;
    function It() {
      {
        var e = W;
        _i === null ? _i = [e] : _i.push(e);
      }
    }
    function oe() {
      {
        var e = W;
        _i !== null && (Ao++, _i[Ao] !== e && Qw(e));
      }
    }
    function jf(e) {
      e != null && !dt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", W, typeof e);
    }
    function Qw(e) {
      {
        var t = Xe(tn);
        if (!bg.has(t) && (bg.add(t), _i !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ao; u++) {
            for (var s = _i[u], f = u === Ao ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function sa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function kg(e, t) {
      if (_g)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", W), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, W, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!pe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Hf(e, t, a, i, u, s) {
      Js = s, tn = t, _i = e !== null ? e._debugHookTypes : null, Ao = -1, _g = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = I, e !== null && e.memoizedState !== null ? Ce.current = KE : _i !== null ? Ce.current = qE : Ce.current = GE;
      var f = a(i, u);
      if (xp) {
        var p = 0;
        do {
          if (xp = !1, wp = 0, p >= Ww)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, _g = !1, hr = null, mr = null, t.updateQueue = null, Ao = -1, Ce.current = XE, f = a(i, u);
        } while (xp);
      }
      Ce.current = Sm, t._debugHookTypes = _i;
      var v = hr !== null && hr.next !== null;
      if (Js = I, tn = null, hr = null, mr = null, W = null, _i = null, Ao = -1, e !== null && (e.flags & jn) !== (t.flags & jn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ct) !== Ue && S("Internal React error: Expected static flag was missing. Please notify the React team."), lm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Pf() {
      var e = wp !== 0;
      return wp = 0, e;
    }
    function DE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & en) !== Ue ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = bs(e.lanes, a);
    }
    function OE() {
      if (Ce.current = Sm, lm) {
        for (var e = tn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        lm = !1;
      }
      Js = I, tn = null, hr = null, mr = null, _i = null, Ao = -1, W = null, $E = !1, xp = !1, wp = 0;
    }
    function Hl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return mr === null ? tn.memoizedState = mr = e : mr = mr.next = e, mr;
    }
    function ki() {
      var e;
      if (hr === null) {
        var t = tn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = hr.next;
      var a;
      if (mr === null ? a = tn.memoizedState : a = mr.next, a !== null)
        mr = a, a = mr.next, hr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        hr = e;
        var i = {
          memoizedState: hr.memoizedState,
          baseState: hr.baseState,
          baseQueue: hr.baseQueue,
          queue: hr.queue,
          next: null
        };
        mr === null ? tn.memoizedState = mr = i : mr = mr.next = i;
      }
      return mr;
    }
    function LE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Dg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Og(e, t, a) {
      var i = Hl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Xw.bind(null, tn, s);
      return [i.memoizedState, f];
    }
    function Lg(e, t, a) {
      var i = ki(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = hr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, w = null, A = null, j = null, V = g;
        do {
          var fe = V.lane;
          if (mu(Js, fe)) {
            if (j !== null) {
              var ze = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Hn,
                action: V.action,
                hasEagerState: V.hasEagerState,
                eagerState: V.eagerState,
                next: null
              };
              j = j.next = ze;
            }
            if (V.hasEagerState)
              _ = V.eagerState;
            else {
              var zt = V.action;
              _ = e(_, zt);
            }
          } else {
            var $e = {
              lane: fe,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            };
            j === null ? (A = j = $e, w = _) : j = j.next = $e, tn.lanes = pt(tn.lanes, fe), Wp(fe);
          }
          V = V.next;
        } while (V !== null && V !== g);
        j === null ? w = _ : j.next = A, pe(_, i.memoizedState) || zp(), i.memoizedState = _, i.baseState = w, i.baseQueue = j, u.lastRenderedState = _;
      }
      var bt = u.interleaved;
      if (bt !== null) {
        var D = bt;
        do {
          var B = D.lane;
          tn.lanes = pt(tn.lanes, B), Wp(B), D = D.next;
        } while (D !== bt);
      } else f === null && (u.lanes = I);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Ng(e, t, a) {
      var i = ki(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        pe(p, i.memoizedState) || zp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Ek(e, t, a) {
    }
    function Ck(e, t, a) {
    }
    function Mg(e, t, a) {
      var i = tn, u = Hl(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Ff || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Ff = !0);
      } else {
        if (s = t(), !Ff) {
          var p = t();
          pe(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Ff = !0);
        }
        var v = jm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(v, Js) || NE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, fm(zE.bind(null, i, y, e), [e]), i.flags |= ya, bp(pr | Hr, ME.bind(null, i, y, s, t), void 0, null), s;
    }
    function um(e, t, a) {
      var i = tn, u = ki(), s = t();
      if (!Ff) {
        var f = t();
        pe(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Ff = !0);
      }
      var p = u.memoizedState, v = !pe(p, s);
      v && (u.memoizedState = s, zp());
      var y = u.queue;
      if (kp(zE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      mr !== null && mr.memoizedState.tag & pr) {
        i.flags |= ya, bp(pr | Hr, ME.bind(null, i, y, s, t), void 0, null);
        var g = jm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(g, Js) || NE(i, t, s);
      }
      return s;
    }
    function NE(e, t, a) {
      e.flags |= wc;
      var i = {
        getSnapshot: t,
        value: a
      }, u = tn.updateQueue;
      if (u === null)
        u = LE(), tn.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function ME(e, t, a, i) {
      t.value = a, t.getSnapshot = i, AE(t) && UE(e);
    }
    function zE(e, t, a) {
      var i = function() {
        AE(t) && UE(e);
      };
      return a(i);
    }
    function AE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !pe(a, i);
      } catch {
        return !0;
      }
    }
    function UE(e) {
      var t = Ba(e, We);
      t !== null && Er(t, e, We, qt);
    }
    function om(e) {
      var t = Hl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: Dg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Jw.bind(null, tn, a);
      return [t.memoizedState, i];
    }
    function zg(e) {
      return Lg(Dg);
    }
    function Ag(e) {
      return Ng(Dg);
    }
    function bp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = tn.updateQueue;
      if (s === null)
        s = LE(), tn.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Ug(e) {
      var t = Hl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function sm(e) {
      var t = ki();
      return t.memoizedState;
    }
    function _p(e, t, a, i) {
      var u = Hl(), s = i === void 0 ? null : i;
      tn.flags |= e, u.memoizedState = bp(pr | t, a, void 0, s);
    }
    function cm(e, t, a, i) {
      var u = ki(), s = i === void 0 ? null : i, f = void 0;
      if (hr !== null) {
        var p = hr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (kg(s, v)) {
            u.memoizedState = bp(t, a, f, s);
            return;
          }
        }
      }
      tn.flags |= e, u.memoizedState = bp(pr | t, a, f, s);
    }
    function fm(e, t) {
      return (tn.mode & en) !== Ue ? _p(gl | ya | pd, Hr, e, t) : _p(ya | pd, Hr, e, t);
    }
    function kp(e, t) {
      return cm(ya, Hr, e, t);
    }
    function Fg(e, t) {
      return _p(xt, jl, e, t);
    }
    function dm(e, t) {
      return cm(xt, jl, e, t);
    }
    function jg(e, t) {
      var a = xt;
      return a |= yl, (tn.mode & en) !== Ue && (a |= zr), _p(a, vr, e, t);
    }
    function pm(e, t) {
      return cm(xt, vr, e, t);
    }
    function FE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Hg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = xt;
      return u |= yl, (tn.mode & en) !== Ue && (u |= zr), _p(u, vr, FE.bind(null, t, e), i);
    }
    function vm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return cm(xt, vr, FE.bind(null, t, e), i);
    }
    function Gw(e, t) {
    }
    var hm = Gw;
    function Pg(e, t) {
      var a = Hl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function mm(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (kg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Vg(e, t) {
      var a = Hl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function ym(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (kg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Bg(e) {
      var t = Hl();
      return t.memoizedState = e, e;
    }
    function jE(e) {
      var t = ki(), a = hr, i = a.memoizedState;
      return PE(t, i, e);
    }
    function HE(e) {
      var t = ki();
      if (hr === null)
        return t.memoizedState = e, e;
      var a = hr.memoizedState;
      return PE(t, a, e);
    }
    function PE(e, t, a) {
      var i = !Nd(Js);
      if (i) {
        if (!pe(a, t)) {
          var u = zd();
          tn.lanes = pt(tn.lanes, u), Wp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, zp()), e.memoizedState = a, a;
    }
    function qw(e, t, a) {
      var i = Sa();
      In(ks(i, Fa)), e(!0);
      var u = Tp.transition;
      Tp.transition = {};
      var s = Tp.transition;
      Tp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (In(i), Tp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && it("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function $g() {
      var e = om(!1), t = e[0], a = e[1], i = qw.bind(null, a), u = Hl();
      return u.memoizedState = i, [t, i];
    }
    function VE() {
      var e = zg(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    function BE() {
      var e = Ag(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    var $E = !1;
    function Kw() {
      return $E;
    }
    function Yg() {
      var e = Hl(), t = jm(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = pw();
        i = ":" + a + "R" + u;
        var s = wp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Iw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function gm() {
      var e = ki(), t = e.memoizedState;
      return t;
    }
    function Xw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YE(e))
        IE(t, u);
      else {
        var s = SE(e, t, u, i);
        if (s !== null) {
          var f = wa();
          Er(s, e, i, f), WE(s, t, i);
        }
      }
      QE(e, i);
    }
    function Jw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YE(e))
        IE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === I && (s === null || s.lanes === I)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Ce.current, Ce.current = tl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, pe(y, v)) {
                Uw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Ce.current = p;
            }
          }
        }
        var g = SE(e, t, u, i);
        if (g !== null) {
          var _ = wa();
          Er(g, e, i, _), WE(g, t, i);
        }
      }
      QE(e, i);
    }
    function YE(e) {
      var t = e.alternate;
      return e === tn || t !== null && t === tn;
    }
    function IE(e, t) {
      xp = lm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function WE(e, t, a) {
      if (Md(a)) {
        var i = t.lanes;
        i = Xc(i, e.pendingLanes);
        var u = pt(i, a);
        t.lanes = u, _s(e, u);
      }
    }
    function QE(e, t, a) {
      ys(e, t);
    }
    var Sm = {
      readContext: ar,
      useCallback: sa,
      useContext: sa,
      useEffect: sa,
      useImperativeHandle: sa,
      useInsertionEffect: sa,
      useLayoutEffect: sa,
      useMemo: sa,
      useReducer: sa,
      useRef: sa,
      useState: sa,
      useDebugValue: sa,
      useDeferredValue: sa,
      useTransition: sa,
      useMutableSource: sa,
      useSyncExternalStore: sa,
      useId: sa,
      unstable_isNewReconciler: ue
    }, GE = null, qE = null, KE = null, XE = null, Pl = null, tl = null, Em = null;
    {
      var Ig = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, tt = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      GE = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", It(), jf(t), Pg(e, t);
        },
        useContext: function(e) {
          return W = "useContext", It(), ar(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", It(), jf(t), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", It(), jf(a), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", It(), jf(t), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", It(), jf(t), jg(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", It(), jf(t);
          var a = Ce.current;
          Ce.current = Pl;
          try {
            return Vg(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", It();
          var i = Ce.current;
          Ce.current = Pl;
          try {
            return Og(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", It(), Ug(e);
        },
        useState: function(e) {
          W = "useState", It();
          var t = Ce.current;
          Ce.current = Pl;
          try {
            return om(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", It(), void 0;
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", It(), Bg(e);
        },
        useTransition: function() {
          return W = "useTransition", It(), $g();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", It(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", It(), Mg(e, t, a);
        },
        useId: function() {
          return W = "useId", It(), Yg();
        },
        unstable_isNewReconciler: ue
      }, qE = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", oe(), Pg(e, t);
        },
        useContext: function(e) {
          return W = "useContext", oe(), ar(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", oe(), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", oe(), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", oe(), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", oe(), jg(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", oe();
          var a = Ce.current;
          Ce.current = Pl;
          try {
            return Vg(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", oe();
          var i = Ce.current;
          Ce.current = Pl;
          try {
            return Og(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", oe(), Ug(e);
        },
        useState: function(e) {
          W = "useState", oe();
          var t = Ce.current;
          Ce.current = Pl;
          try {
            return om(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", oe(), void 0;
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", oe(), Bg(e);
        },
        useTransition: function() {
          return W = "useTransition", oe(), $g();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", oe(), Mg(e, t, a);
        },
        useId: function() {
          return W = "useId", oe(), Yg();
        },
        unstable_isNewReconciler: ue
      }, KE = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", oe(), mm(e, t);
        },
        useContext: function(e) {
          return W = "useContext", oe(), ar(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", oe(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", oe(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", oe(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", oe(), pm(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", oe();
          var a = Ce.current;
          Ce.current = tl;
          try {
            return ym(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", oe();
          var i = Ce.current;
          Ce.current = tl;
          try {
            return Lg(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", oe(), sm();
        },
        useState: function(e) {
          W = "useState", oe();
          var t = Ce.current;
          Ce.current = tl;
          try {
            return zg(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", oe(), hm();
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", oe(), jE(e);
        },
        useTransition: function() {
          return W = "useTransition", oe(), VE();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", oe(), um(e, t);
        },
        useId: function() {
          return W = "useId", oe(), gm();
        },
        unstable_isNewReconciler: ue
      }, XE = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", oe(), mm(e, t);
        },
        useContext: function(e) {
          return W = "useContext", oe(), ar(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", oe(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", oe(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", oe(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", oe(), pm(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", oe();
          var a = Ce.current;
          Ce.current = Em;
          try {
            return ym(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", oe();
          var i = Ce.current;
          Ce.current = Em;
          try {
            return Ng(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", oe(), sm();
        },
        useState: function(e) {
          W = "useState", oe();
          var t = Ce.current;
          Ce.current = Em;
          try {
            return Ag(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", oe(), hm();
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", oe(), HE(e);
        },
        useTransition: function() {
          return W = "useTransition", oe(), BE();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", oe(), um(e, t);
        },
        useId: function() {
          return W = "useId", oe(), gm();
        },
        unstable_isNewReconciler: ue
      }, Pl = {
        readContext: function(e) {
          return Ig(), ar(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", tt(), It(), Pg(e, t);
        },
        useContext: function(e) {
          return W = "useContext", tt(), It(), ar(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", tt(), It(), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", tt(), It(), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", tt(), It(), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", tt(), It(), jg(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", tt(), It();
          var a = Ce.current;
          Ce.current = Pl;
          try {
            return Vg(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", tt(), It();
          var i = Ce.current;
          Ce.current = Pl;
          try {
            return Og(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", tt(), It(), Ug(e);
        },
        useState: function(e) {
          W = "useState", tt(), It();
          var t = Ce.current;
          Ce.current = Pl;
          try {
            return om(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", tt(), It(), void 0;
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", tt(), It(), Bg(e);
        },
        useTransition: function() {
          return W = "useTransition", tt(), It(), $g();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", tt(), It(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", tt(), It(), Mg(e, t, a);
        },
        useId: function() {
          return W = "useId", tt(), It(), Yg();
        },
        unstable_isNewReconciler: ue
      }, tl = {
        readContext: function(e) {
          return Ig(), ar(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", tt(), oe(), mm(e, t);
        },
        useContext: function(e) {
          return W = "useContext", tt(), oe(), ar(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", tt(), oe(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", tt(), oe(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", tt(), oe(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", tt(), oe(), pm(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", tt(), oe();
          var a = Ce.current;
          Ce.current = tl;
          try {
            return ym(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", tt(), oe();
          var i = Ce.current;
          Ce.current = tl;
          try {
            return Lg(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", tt(), oe(), sm();
        },
        useState: function(e) {
          W = "useState", tt(), oe();
          var t = Ce.current;
          Ce.current = tl;
          try {
            return zg(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", tt(), oe(), hm();
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", tt(), oe(), jE(e);
        },
        useTransition: function() {
          return W = "useTransition", tt(), oe(), VE();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", tt(), oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", tt(), oe(), um(e, t);
        },
        useId: function() {
          return W = "useId", tt(), oe(), gm();
        },
        unstable_isNewReconciler: ue
      }, Em = {
        readContext: function(e) {
          return Ig(), ar(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", tt(), oe(), mm(e, t);
        },
        useContext: function(e) {
          return W = "useContext", tt(), oe(), ar(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", tt(), oe(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", tt(), oe(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", tt(), oe(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", tt(), oe(), pm(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", tt(), oe();
          var a = Ce.current;
          Ce.current = tl;
          try {
            return ym(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", tt(), oe();
          var i = Ce.current;
          Ce.current = tl;
          try {
            return Ng(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", tt(), oe(), sm();
        },
        useState: function(e) {
          W = "useState", tt(), oe();
          var t = Ce.current;
          Ce.current = tl;
          try {
            return Ag(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", tt(), oe(), hm();
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", tt(), oe(), HE(e);
        },
        useTransition: function() {
          return W = "useTransition", tt(), oe(), BE();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", tt(), oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", tt(), oe(), um(e, t);
        },
        useId: function() {
          return W = "useId", tt(), oe(), gm();
        },
        unstable_isNewReconciler: ue
      };
    }
    var Uo = H.unstable_now, JE = 0, Cm = -1, Dp = -1, Rm = -1, Wg = !1, Tm = !1;
    function ZE() {
      return Wg;
    }
    function Zw() {
      Tm = !0;
    }
    function eb() {
      Wg = !1, Tm = !1;
    }
    function tb() {
      Wg = Tm, Tm = !1;
    }
    function eC() {
      return JE;
    }
    function tC() {
      JE = Uo();
    }
    function Qg(e) {
      Dp = Uo(), e.actualStartTime < 0 && (e.actualStartTime = Uo());
    }
    function nC(e) {
      Dp = -1;
    }
    function xm(e, t) {
      if (Dp >= 0) {
        var a = Uo() - Dp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Dp = -1;
      }
    }
    function Vl(e) {
      if (Cm >= 0) {
        var t = Uo() - Cm;
        Cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case L:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Rt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Gg(e) {
      if (Rm >= 0) {
        var t = Uo() - Rm;
        Rm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case L:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Rt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Bl() {
      Cm = Uo();
    }
    function qg() {
      Rm = Uo();
    }
    function Kg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function nl(e, t) {
      if (e && e.defaultProps) {
        var a = ot({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Xg = {}, Jg, Zg, eS, tS, nS, rC, wm, rS, aS, iS, Op;
    {
      Jg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), Op = /* @__PURE__ */ new Set();
      var aC = /* @__PURE__ */ new Set();
      wm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          aC.has(a) || (aC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, rC = function(e, t) {
        if (t === void 0) {
          var a = Nt(e) || "Component";
          nS.has(a) || (nS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Xg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Xg);
    }
    function lS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & st) {
          Gt(!0);
          try {
            s = a(i, u);
          } finally {
            Gt(!1);
          }
        }
        rC(t, s);
      }
      var f = s == null ? u : ot({}, u, s);
      if (e.memoizedState = f, e.lanes === I) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var uS = {
      isMounted: vd,
      enqueueSetState: function(e, t, a) {
        var i = ao(e), u = wa(), s = Po(i), f = Nu(u, s);
        f.payload = t, a != null && (wm(a, "setState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Er(p, i, s, u), em(p, i, s)), ys(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ao(e), u = wa(), s = Po(i), f = Nu(u, s);
        f.tag = CE, f.payload = t, a != null && (wm(a, "replaceState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Er(p, i, s, u), em(p, i, s)), ys(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ao(e), i = wa(), u = Po(a), s = Nu(i, u);
        s.tag = Xh, t != null && (wm(t, "forceUpdate"), s.callback = t);
        var f = No(a, s, u);
        f !== null && (Er(f, a, u, i), em(f, a, u)), kd(a, u);
      }
    };
    function iC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & st) {
            Gt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Gt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Nt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !je(a, i) || !je(u, s) : !0;
    }
    function nb(e, t, a) {
      var i = e.stateNode;
      {
        var u = Nt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & st) === Ue && (Op.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & st) === Ue && (Op.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !aS.has(t) && (aS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Nt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !eS.has(t) && (eS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Nt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || dt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function lC(e, t) {
      t.updater = uS, e.stateNode = t, cs(t, e), t._reactInternalInstance = Xg;
    }
    function uC(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !iS.has(t)) {
          iS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Ai ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Nt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ar(f);
      else {
        u = bf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? _f(e, u) : li;
      }
      var g = new t(a, s);
      if (e.mode & st) {
        Gt(!0);
        try {
          g = new t(a, s);
        } finally {
          Gt(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      lC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var w = Nt(t) || "Component";
          Zg.has(w) || (Zg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var A = null, j = null, V = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? A = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (A = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? j = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (j = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? V = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (V = "UNSAFE_componentWillUpdate"), A !== null || j !== null || V !== null) {
            var fe = Nt(t) || "Component", $e = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            tS.has(fe) || (tS.add(fe), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, fe, $e, A !== null ? `
  ` + A : "", j !== null ? `
  ` + j : "", V !== null ? `
  ` + V : ""));
          }
        }
      }
      return i && K0(e, u, s), g;
    }
    function rb(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Xe(e) || "Component"), uS.enqueueReplaceState(t, t.state, null));
    }
    function oC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Xe(e) || "Component";
          Jg.has(s) || (Jg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        uS.enqueueReplaceState(t, t.state, null);
      }
    }
    function oS(e, t, a, i) {
      nb(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, yg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = ar(s);
      else {
        var f = bf(e, t, !0);
        u.context = _f(e, f);
      }
      {
        if (u.state === a) {
          var p = Nt(t) || "Component";
          rS.has(p) || (rS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & st && Zi.recordLegacyContextWarning(e, u), Zi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (lS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (rb(e, u), tm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = xt;
        y |= yl, (e.mode & en) !== Ue && (y |= zr), e.flags |= y;
      }
    }
    function ab(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = ar(p);
      else {
        var y = bf(e, t, !0);
        v = _f(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && oC(e, u, a, v), TE();
      var w = e.memoizedState, A = u.state = w;
      if (tm(e, a, u, i), A = e.memoizedState, s === a && w === A && !Uh() && !nm()) {
        if (typeof u.componentDidMount == "function") {
          var j = xt;
          j |= yl, (e.mode & en) !== Ue && (j |= zr), e.flags |= j;
        }
        return !1;
      }
      typeof g == "function" && (lS(e, t, g, a), A = e.memoizedState);
      var V = nm() || iC(e, t, s, a, w, A, v);
      if (V) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var fe = xt;
          fe |= yl, (e.mode & en) !== Ue && (fe |= zr), e.flags |= fe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var $e = xt;
          $e |= yl, (e.mode & en) !== Ue && ($e |= zr), e.flags |= $e;
        }
        e.memoizedProps = a, e.memoizedState = A;
      }
      return u.props = a, u.state = A, u.context = v, V;
    }
    function ib(e, t, a, i, u) {
      var s = t.stateNode;
      RE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = li;
      if (typeof g == "object" && g !== null)
        _ = ar(g);
      else {
        var w = bf(t, a, !0);
        _ = _f(t, w);
      }
      var A = a.getDerivedStateFromProps, j = typeof A == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !j && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && oC(t, s, i, _), TE();
      var V = t.memoizedState, fe = s.state = V;
      if (tm(t, i, s, u), fe = t.memoizedState, f === v && V === fe && !Uh() && !nm() && !ae)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= xt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Aa), !1;
      typeof A == "function" && (lS(t, a, A, i), fe = t.memoizedState);
      var $e = nm() || iC(t, a, p, i, V, fe, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ae;
      return $e ? (!j && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, fe, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, fe, _)), typeof s.componentDidUpdate == "function" && (t.flags |= xt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Aa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= xt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Aa), t.memoizedProps = i, t.memoizedState = fe), s.props = i, s.state = fe, s.context = _, $e;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: Lt(t),
        digest: null
      };
    }
    function sS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function lb(e, t) {
      return !0;
    }
    function cS(e, t) {
      try {
        var a = lb(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === Y)
            return;
          console.error(i);
        }
        var p = u ? Xe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === L)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Xe(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var ub = typeof WeakMap == "function" ? WeakMap : Map;
    function sC(e, t, a) {
      var i = Nu(qt, a);
      i.tag = hg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Z_(u), cS(e, t);
      }, i;
    }
    function fS(e, t, a) {
      var i = Nu(qt, a);
      i.tag = hg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          ER(e), cS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        ER(e), cS(e, t), typeof u != "function" && X_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (aa(e.lanes, We) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Xe(e) || "Unknown"));
      }), i;
    }
    function cC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ub(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = e1.bind(null, e, t, a);
        _r && Qp(e, a), t.then(s, s);
      }
    }
    function ob(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function sb(e, t) {
      var a = e.tag;
      if ((e.mode & Ct) === Ue && (a === me || a === He || a === ye)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function fC(e) {
      var t = e;
      do {
        if (t.tag === _e && $w(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function dC(e, t, a, i, u) {
      if ((e.mode & Ct) === Ue) {
        if (e === t)
          e.flags |= br;
        else {
          if (e.flags |= St, a.flags |= ti, a.flags &= -52805, a.tag === Y) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ze;
            else {
              var f = Nu(qt, We);
              f.tag = Xh, No(a, f, We);
            }
          }
          a.lanes = pt(a.lanes, We);
        }
        return e;
      }
      return e.flags |= br, e.lanes = u, e;
    }
    function cb(e, t, a, i, u) {
      if (a.flags |= uu, _r && Qp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        sb(a), jr() && a.mode & Ct && rE();
        var f = fC(t);
        if (f !== null) {
          f.flags &= ~yn, dC(f, t, a, e, u), f.mode & Ct && cC(e, s, u), ob(f, e, s);
          return;
        } else {
          if (!Ld(u)) {
            cC(e, s, u), YS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & Ct) {
        rE();
        var v = fC(t);
        if (v !== null) {
          (v.flags & br) === Ae && (v.flags |= yn), dC(v, t, a, e, u), rg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), $_(i);
      var y = t;
      do {
        switch (y.tag) {
          case L: {
            var g = i;
            y.flags |= br;
            var _ = nr(u);
            y.lanes = pt(y.lanes, _);
            var w = sC(y, g, _);
            gg(y, w);
            return;
          }
          case Y:
            var A = i, j = y.type, V = y.stateNode;
            if ((y.flags & St) === Ae && (typeof j.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && !fR(V))) {
              y.flags |= br;
              var fe = nr(u);
              y.lanes = pt(y.lanes, fe);
              var $e = fS(y, A, fe);
              gg(y, $e);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function fb() {
      return null;
    }
    var Lp = he.ReactCurrentOwner, rl = !1, dS, Np, pS, vS, hS, ec, mS, bm, Mp;
    dS = {}, Np = {}, pS = {}, vS = {}, hS = {}, ec = !1, mS = {}, bm = {}, Mp = {};
    function Ta(e, t, a, i) {
      e === null ? t.child = hE(t, null, a, i) : t.child = Lf(t, e.child, a, i);
    }
    function db(e, t, a, i) {
      t.child = Lf(t, e.child, null, i), t.child = Lf(t, null, a, i);
    }
    function pC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xi(
          s,
          i,
          // Resolved props
          "prop",
          Nt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Mf(t, u), Ua(t);
      {
        if (Lp.current = t, Oa(!0), v = Hf(e, t, f, i, p, u), y = Pf(), t.mode & st) {
          Gt(!0);
          try {
            v = Hf(e, t, f, i, p, u), y = Pf();
          } finally {
            Gt(!1);
          }
        }
        Oa(!1);
      }
      return Rl(), e !== null && !rl ? (DE(e, t, u), Mu(e, t, u)) : (jr() && y && Xy(t), t.flags |= Wi, Ta(e, t, v, u), t.child);
    }
    function vC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (y1(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Gf(s), t.tag = ye, t.type = f, SS(t, s), hC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Xi(
            p,
            i,
            // Resolved props
            "prop",
            Nt(s)
          ), a.defaultProps !== void 0) {
            var v = Nt(s) || "Unknown";
            Mp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Mp[v] = !0);
          }
        }
        var y = t0(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, _ = g.propTypes;
        _ && Xi(
          _,
          i,
          // Resolved props
          "prop",
          Nt(g)
        );
      }
      var w = e.child, A = wS(e, u);
      if (!A) {
        var j = w.memoizedProps, V = a.compare;
        if (V = V !== null ? V : je, V(j, i) && e.ref === t.ref)
          return Mu(e, t, u);
      }
      t.flags |= Wi;
      var fe = ic(w, i);
      return fe.ref = t.ref, fe.return = t, t.child = fe, fe;
    }
    function hC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === et) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Xi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Nt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (je(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (rl = !1, t.pendingProps = i = g, wS(e, u))
            (e.flags & ti) !== Ae && (rl = !0);
          else return t.lanes = e.lanes, Mu(e, t, u);
      }
      return yS(e, t, a, i, u);
    }
    function mC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || x)
        if ((t.mode & Ct) === Ue) {
          var f = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Hm(t, a);
        } else if (aa(a, na)) {
          var _ = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var w = s !== null ? s.baseLanes : a;
          Hm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = pt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = na;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Hm(t, v), null;
        }
      else {
        var A;
        s !== null ? (A = pt(s.baseLanes, a), t.memoizedState = null) : A = a, Hm(t, A);
      }
      return Ta(e, t, u, a), t.child;
    }
    function pb(e, t, a) {
      var i = t.pendingProps;
      return Ta(e, t, i, a), t.child;
    }
    function vb(e, t, a) {
      var i = t.pendingProps.children;
      return Ta(e, t, i, a), t.child;
    }
    function hb(e, t, a) {
      {
        t.flags |= xt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ta(e, t, s, a), t.child;
    }
    function yC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Fn, t.flags |= ds);
    }
    function yS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xi(
          s,
          i,
          // Resolved props
          "prop",
          Nt(a)
        );
      }
      var f;
      {
        var p = bf(t, a, !0);
        f = _f(t, p);
      }
      var v, y;
      Mf(t, u), Ua(t);
      {
        if (Lp.current = t, Oa(!0), v = Hf(e, t, a, i, f, u), y = Pf(), t.mode & st) {
          Gt(!0);
          try {
            v = Hf(e, t, a, i, f, u), y = Pf();
          } finally {
            Gt(!1);
          }
        }
        Oa(!1);
      }
      return Rl(), e !== null && !rl ? (DE(e, t, u), Mu(e, t, u)) : (jr() && y && Xy(t), t.flags |= Wi, Ta(e, t, v, u), t.child);
    }
    function gC(e, t, a, i, u) {
      {
        switch (N1(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= St, t.flags |= br;
            var y = new Error("Simulated error coming from DevTools"), g = nr(u);
            t.lanes = pt(t.lanes, g);
            var _ = fS(t, Zs(y, t), g);
            gg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && Xi(
            w,
            i,
            // Resolved props
            "prop",
            Nt(a)
          );
        }
      }
      var A;
      Fl(a) ? (A = !0, jh(t)) : A = !1, Mf(t, u);
      var j = t.stateNode, V;
      j === null ? (km(e, t), uC(t, a, i), oS(t, a, i, u), V = !0) : e === null ? V = ab(t, a, i, u) : V = ib(e, t, a, i, u);
      var fe = gS(e, t, a, V, A, u);
      {
        var $e = t.stateNode;
        V && $e.props !== i && (ec || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Xe(t) || "a component"), ec = !0);
      }
      return fe;
    }
    function gS(e, t, a, i, u, s) {
      yC(e, t);
      var f = (t.flags & St) !== Ae;
      if (!i && !f)
        return u && Z0(t, a, !1), Mu(e, t, s);
      var p = t.stateNode;
      Lp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, nC();
      else {
        Ua(t);
        {
          if (Oa(!0), v = p.render(), t.mode & st) {
            Gt(!0);
            try {
              p.render();
            } finally {
              Gt(!1);
            }
          }
          Oa(!1);
        }
        Rl();
      }
      return t.flags |= Wi, e !== null && f ? db(e, t, v, s) : Ta(e, t, v, s), t.memoizedState = p.state, u && Z0(t, a, !0), t.child;
    }
    function SC(e) {
      var t = e.stateNode;
      t.pendingContext ? X0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && X0(e, t.context, !1), Sg(e, t.containerInfo);
    }
    function mb(e, t, a) {
      if (SC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      RE(e, t), tm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & yn) {
          var g = Zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return EC(e, t, p, a, g);
        } else if (p !== s) {
          var _ = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return EC(e, t, p, a, _);
        } else {
          Sw(t);
          var w = hE(t, null, p, a);
          t.child = w;
          for (var A = w; A; )
            A.flags = A.flags & ~Rn | Tn, A = A.sibling;
        }
      } else {
        if (Of(), p === s)
          return Mu(e, t, a);
        Ta(e, t, p, a);
      }
      return t.child;
    }
    function EC(e, t, a, i, u) {
      return Of(), rg(u), t.flags |= yn, Ta(e, t, a, i), t.child;
    }
    function yb(e, t, a) {
      bE(t), e === null && ng(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Fy(i, u);
      return p ? f = null : s !== null && Fy(i, s) && (t.flags |= Qt), yC(e, t), Ta(e, t, f, a), t.child;
    }
    function gb(e, t) {
      return e === null && ng(t), null;
    }
    function Sb(e, t, a, i) {
      km(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = g1(v), g = nl(v, u), _;
      switch (y) {
        case me:
          return SS(t, v), t.type = v = Gf(v), _ = yS(null, t, v, g, i), _;
        case Y:
          return t.type = v = qS(v), _ = gC(null, t, v, g, i), _;
        case He:
          return t.type = v = KS(v), _ = pC(null, t, v, g, i), _;
        case Z: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && Xi(
              w,
              g,
              // Resolved for outer only
              "prop",
              Nt(v)
            );
          }
          return _ = vC(
            null,
            t,
            v,
            nl(v.type, g),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var A = "";
      throw v !== null && typeof v == "object" && v.$$typeof === et && (A = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + A));
    }
    function Eb(e, t, a, i, u) {
      km(e, t), t.tag = Y;
      var s;
      return Fl(a) ? (s = !0, jh(t)) : s = !1, Mf(t, u), uC(t, a, i), oS(t, a, i, u), gS(null, t, a, !0, s, u);
    }
    function Cb(e, t, a, i) {
      km(e, t);
      var u = t.pendingProps, s;
      {
        var f = bf(t, a, !1);
        s = _f(t, f);
      }
      Mf(t, i);
      var p, v;
      Ua(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Nt(a) || "Unknown";
          dS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), dS[y] = !0);
        }
        t.mode & st && Zi.recordLegacyContextWarning(t, null), Oa(!0), Lp.current = t, p = Hf(null, t, a, u, s, i), v = Pf(), Oa(!1);
      }
      if (Rl(), t.flags |= Wi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Nt(a) || "Unknown";
        Np[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Np[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = Nt(a) || "Unknown";
          Np[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Np[_] = !0);
        }
        t.tag = Y, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Fl(a) ? (w = !0, jh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, yg(t), lC(t, p), oS(t, a, u, i), gS(null, t, a, !0, w, i);
      } else {
        if (t.tag = me, t.mode & st) {
          Gt(!0);
          try {
            p = Hf(null, t, a, u, s, i), v = Pf();
          } finally {
            Gt(!1);
          }
        }
        return jr() && v && Xy(t), Ta(null, t, p, i), SS(t, a), t.child;
      }
    }
    function SS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Nr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), hS[u] || (hS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Nt(t) || "Unknown";
          Mp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Mp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Nt(t) || "Unknown";
          vS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), vS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Nt(t) || "Unknown";
          pS[v] || (S("%s: Function components do not support contextType.", v), pS[v] = !0);
        }
      }
    }
    var ES = {
      dehydrated: null,
      treeContext: null,
      retryLane: Hn
    };
    function CS(e) {
      return {
        baseLanes: e,
        cachePool: fb(),
        transitions: null
      };
    }
    function Rb(e, t) {
      var a = null;
      return {
        baseLanes: pt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Tb(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Rg(e, Rp);
    }
    function xb(e, t) {
      return bs(e.childLanes, t);
    }
    function CC(e, t, a) {
      var i = t.pendingProps;
      M1(t) && (t.flags |= St);
      var u = el.current, s = !1, f = (t.flags & St) !== Ae;
      if (f || Tb(u, e) ? (s = !0, t.flags &= ~St) : (e === null || e.memoizedState !== null) && (u = Bw(u, kE)), u = Af(u), zo(t, u), e === null) {
        ng(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Db(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = wb(t, y, g, a), w = t.child;
          return w.memoizedState = CS(a), t.memoizedState = ES, _;
        } else
          return RS(t, y);
      } else {
        var A = e.memoizedState;
        if (A !== null) {
          var j = A.dehydrated;
          if (j !== null)
            return Ob(e, t, f, i, j, A, a);
        }
        if (s) {
          var V = i.fallback, fe = i.children, $e = _b(e, t, fe, V, a), ze = t.child, zt = e.child.memoizedState;
          return ze.memoizedState = zt === null ? CS(a) : Rb(zt, a), ze.childLanes = xb(e, a), t.memoizedState = ES, $e;
        } else {
          var bt = i.children, D = bb(e, t, bt, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function RS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = TS(u, i);
      return s.return = e, e.child = s, s;
    }
    function wb(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Ct) === Ue && s !== null ? (p = s, p.childLanes = I, p.pendingProps = f, e.mode & kt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Bo(a, u, i, null)) : (p = TS(f, u), v = Bo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function TS(e, t, a) {
      return RR(e, t, I, null);
    }
    function RC(e, t) {
      return ic(e, t);
    }
    function bb(e, t, a, i) {
      var u = e.child, s = u.sibling, f = RC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ct) === Ue && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Jr) : p.push(s);
      }
      return t.child = f, f;
    }
    function _b(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ct) === Ue && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = I, y.pendingProps = v, t.mode & kt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = RC(f, v), y.subtreeFlags = f.subtreeFlags & jn;
      var _;
      return p !== null ? _ = ic(p, i) : (_ = Bo(i, s, u, null), _.flags |= Rn), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function _m(e, t, a, i) {
      i !== null && rg(i), Lf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = RS(t, s);
      return f.flags |= Rn, t.memoizedState = null, f;
    }
    function kb(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = TS(f, s), v = Bo(i, s, u, null);
      return v.flags |= Rn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Ct) !== Ue && Lf(t, e.child, null, u), v;
    }
    function Db(e, t, a) {
      return (e.mode & Ct) === Ue ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = We) : Vy(t) ? e.lanes = tr : e.lanes = na, null;
    }
    function Ob(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & yn) {
          t.flags &= ~yn;
          var D = sS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return _m(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= St, null;
          var B = i.children, O = i.fallback, te = kb(e, t, B, O, f), Te = t.child;
          return Te.memoizedState = CS(f), t.memoizedState = ES, te;
        }
      else {
        if (yw(), (t.mode & Ct) === Ue)
          return _m(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Vy(u)) {
          var p, v, y;
          {
            var g = zx(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = sS(_, p, y);
          return _m(e, t, f, w);
        }
        var A = aa(f, e.childLanes);
        if (rl || A) {
          var j = jm();
          if (j !== null) {
            var V = ef(j, f);
            if (V !== Hn && V !== s.retryLane) {
              s.retryLane = V;
              var fe = qt;
              Ba(e, V), Er(j, e, V, fe);
            }
          }
          YS();
          var $e = sS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return _m(e, t, f, $e);
        } else if (I0(u)) {
          t.flags |= St, t.child = e.child;
          var ze = t1.bind(null, e);
          return Ax(u, ze), null;
        } else {
          Ew(t, u, s.treeContext);
          var zt = i.children, bt = RS(t, zt);
          return bt.flags |= Tn, bt;
        }
      }
    }
    function TC(e, t, a) {
      e.lanes = pt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = pt(i.lanes, t)), pg(e.return, t, a);
    }
    function Lb(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === _e) {
          var u = i.memoizedState;
          u !== null && TC(i, a, e);
        } else if (i.tag === Ye)
          TC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Nb(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && im(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Mb(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !mS[e])
        if (mS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function zb(e, t) {
      e !== void 0 && !bm[e] && (e !== "collapsed" && e !== "hidden" ? (bm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (bm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function xC(e, t) {
      {
        var a = dt(e), i = !a && typeof mn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Ab(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (dt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!xC(e[a], a))
              return;
        } else {
          var i = mn(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!xC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function xS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function wC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Mb(u), zb(s, u), Ab(f, u), Ta(e, t, f, a);
      var p = el.current, v = Rg(p, Rp);
      if (v)
        p = Tg(p, Rp), t.flags |= St;
      else {
        var y = e !== null && (e.flags & St) !== Ae;
        y && Lb(t, t.child, a), p = Af(p);
      }
      if (zo(t, p), (t.mode & Ct) === Ue)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Nb(t.child), _;
            g === null ? (_ = t.child, t.child = null) : (_ = g.sibling, g.sibling = null), xS(
              t,
              !1,
              // isBackwards
              _,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, A = t.child;
            for (t.child = null; A !== null; ) {
              var j = A.alternate;
              if (j !== null && im(j) === null) {
                t.child = A;
                break;
              }
              var V = A.sibling;
              A.sibling = w, w = A, A = V;
            }
            xS(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            xS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Ub(e, t, a) {
      Sg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Lf(t, null, i, a) : Ta(e, t, i, a), t.child;
    }
    var bC = !1;
    function Fb(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || bC || (bC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Xi(v, s, "prop", "Context.Provider");
      }
      if (gE(t, u, p), f !== null) {
        var y = f.value;
        if (pe(y, p)) {
          if (f.children === s.children && !Uh())
            return Mu(e, t, a);
        } else
          Mw(t, u, a);
      }
      var g = s.children;
      return Ta(e, t, g, a), t.child;
    }
    var _C = !1;
    function jb(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (_C || (_C = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Mf(t, a);
      var f = ar(i);
      Ua(t);
      var p;
      return Lp.current = t, Oa(!0), p = s(f), Oa(!1), Rl(), t.flags |= Wi, Ta(e, t, p, a), t.child;
    }
    function zp() {
      rl = !0;
    }
    function km(e, t) {
      (t.mode & Ct) === Ue && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Rn);
    }
    function Mu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), nC(), Wp(t.lanes), aa(a, t.childLanes) ? (Lw(e, t), t.child) : null;
    }
    function Hb(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Jr) : s.push(e), a.flags |= Rn, a;
      }
    }
    function wS(e, t) {
      var a = e.lanes;
      return !!aa(a, t);
    }
    function Pb(e, t, a) {
      switch (t.tag) {
        case L:
          SC(t), t.stateNode, Of();
          break;
        case M:
          bE(t);
          break;
        case Y: {
          var i = t.type;
          Fl(i) && jh(t);
          break;
        }
        case X:
          Sg(t, t.stateNode.containerInfo);
          break;
        case ut: {
          var u = t.memoizedProps.value, s = t.type._context;
          gE(t, s, u);
          break;
        }
        case Rt:
          {
            var f = aa(a, t.childLanes);
            f && (t.flags |= xt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case _e: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return zo(t, Af(el.current)), t.flags |= St, null;
            var y = t.child, g = y.childLanes;
            if (aa(a, g))
              return CC(e, t, a);
            zo(t, Af(el.current));
            var _ = Mu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            zo(t, Af(el.current));
          break;
        }
        case Ye: {
          var w = (e.flags & St) !== Ae, A = aa(a, t.childLanes);
          if (w) {
            if (A)
              return wC(e, t, a);
            t.flags |= St;
          }
          var j = t.memoizedState;
          if (j !== null && (j.rendering = null, j.tail = null, j.lastEffect = null), zo(t, el.current), A)
            break;
          return null;
        }
        case Oe:
        case Ut:
          return t.lanes = I, mC(e, t, a);
      }
      return Mu(e, t, a);
    }
    function kC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Hb(e, t, t0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Uh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          rl = !0;
        else {
          var s = wS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & St) === Ae)
            return rl = !1, Pb(e, t, a);
          (e.flags & ti) !== Ae ? rl = !0 : rl = !1;
        }
      } else if (rl = !1, jr() && fw(t)) {
        var f = t.index, p = dw();
        nE(t, p, f);
      }
      switch (t.lanes = I, t.tag) {
        case Re:
          return Cb(e, t, t.type, a);
        case Pe: {
          var v = t.elementType;
          return Sb(e, t, v, a);
        }
        case me: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : nl(y, g);
          return yS(e, t, y, _, a);
        }
        case Y: {
          var w = t.type, A = t.pendingProps, j = t.elementType === w ? A : nl(w, A);
          return gC(e, t, w, j, a);
        }
        case L:
          return mb(e, t, a);
        case M:
          return yb(e, t, a);
        case J:
          return gb(e, t);
        case _e:
          return CC(e, t, a);
        case X:
          return Ub(e, t, a);
        case He: {
          var V = t.type, fe = t.pendingProps, $e = t.elementType === V ? fe : nl(V, fe);
          return pC(e, t, V, $e, a);
        }
        case Be:
          return pb(e, t, a);
        case vt:
          return vb(e, t, a);
        case Rt:
          return hb(e, t, a);
        case ut:
          return Fb(e, t, a);
        case Me:
          return jb(e, t, a);
        case Z: {
          var ze = t.type, zt = t.pendingProps, bt = nl(ze, zt);
          if (t.type !== t.elementType) {
            var D = ze.propTypes;
            D && Xi(
              D,
              bt,
              // Resolved for outer only
              "prop",
              Nt(ze)
            );
          }
          return bt = nl(ze.type, bt), vC(e, t, ze, bt, a);
        }
        case ye:
          return hC(e, t, t.type, t.pendingProps, a);
        case Ze: {
          var B = t.type, O = t.pendingProps, te = t.elementType === B ? O : nl(B, O);
          return Eb(e, t, B, te, a);
        }
        case Ye:
          return wC(e, t, a);
        case nt:
          break;
        case Oe:
          return mC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Vf(e) {
      e.flags |= xt;
    }
    function DC(e) {
      e.flags |= Fn, e.flags |= ds;
    }
    var OC, bS, LC, NC;
    OC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === M || u.tag === J)
          ox(e, u.stateNode);
        else if (u.tag !== X) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, bS = function(e, t) {
    }, LC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Eg(), v = cx(f, a, s, i, u, p);
        t.updateQueue = v, v && Vf(t);
      }
    }, NC = function(e, t, a, i) {
      a !== i && Vf(t);
    };
    function Ap(e, t) {
      if (!jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Pr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = I, i = Ae;
      if (t) {
        if ((e.mode & kt) !== Ue) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = pt(a, pt(y.lanes, y.childLanes)), i |= y.subtreeFlags & jn, i |= y.flags & jn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = pt(a, pt(g.lanes, g.childLanes)), i |= g.subtreeFlags & jn, i |= g.flags & jn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & kt) !== Ue) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = pt(a, pt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = pt(a, pt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Vb(e, t, a) {
      if (ww() && (t.mode & Ct) !== Ue && (t.flags & St) === Ae)
        return sE(t), Of(), t.flags |= yn | uu | br, !1;
      var i = $h(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Tw(t), Pr(t), (t.mode & kt) !== Ue) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Of(), (t.flags & St) === Ae && (t.memoizedState = null), t.flags |= xt, Pr(t), (t.mode & kt) !== Ue) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return cE(), !0;
    }
    function MC(e, t, a) {
      var i = t.pendingProps;
      switch (Jy(t), t.tag) {
        case Re:
        case Pe:
        case ye:
        case me:
        case He:
        case Be:
        case vt:
        case Rt:
        case Me:
        case Z:
          return Pr(t), null;
        case Y: {
          var u = t.type;
          return Fl(u) && Fh(t), Pr(t), null;
        }
        case L: {
          var s = t.stateNode;
          if (zf(t), Gy(t), wg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = $h(t);
            if (f)
              Vf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & yn) !== Ae) && (t.flags |= Aa, cE());
            }
          }
          return bS(e, t), Pr(t), null;
        }
        case M: {
          Cg(t);
          var v = wE(), y = t.type;
          if (e !== null && t.stateNode != null)
            LC(e, t, y, i, v), e.ref !== t.ref && DC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Pr(t), null;
            }
            var g = Eg(), _ = $h(t);
            if (_)
              Cw(t, v, g) && Vf(t);
            else {
              var w = ux(y, i, v, g, t);
              OC(w, t, !1, !1), t.stateNode = w, sx(w, y, i, v) && Vf(t);
            }
            t.ref !== null && DC(t);
          }
          return Pr(t), null;
        }
        case J: {
          var A = i;
          if (e && t.stateNode != null) {
            var j = e.memoizedProps;
            NC(e, t, j, A);
          } else {
            if (typeof A != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var V = wE(), fe = Eg(), $e = $h(t);
            $e ? Rw(t) && Vf(t) : t.stateNode = fx(A, V, fe, t);
          }
          return Pr(t), null;
        }
        case _e: {
          Uf(t);
          var ze = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var zt = Vb(e, t, ze);
            if (!zt)
              return t.flags & br ? t : null;
          }
          if ((t.flags & St) !== Ae)
            return t.lanes = a, (t.mode & kt) !== Ue && Kg(t), t;
          var bt = ze !== null, D = e !== null && e.memoizedState !== null;
          if (bt !== D && bt) {
            var B = t.child;
            if (B.flags |= gi, (t.mode & Ct) !== Ue) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || Rg(el.current, kE) ? B_() : YS();
            }
          }
          var te = t.updateQueue;
          if (te !== null && (t.flags |= xt), Pr(t), (t.mode & kt) !== Ue && bt) {
            var Te = t.child;
            Te !== null && (t.treeBaseDuration -= Te.treeBaseDuration);
          }
          return null;
        }
        case X:
          return zf(t), bS(e, t), e === null && aw(t.stateNode.containerInfo), Pr(t), null;
        case ut:
          var ve = t.type._context;
          return dg(ve, t), Pr(t), null;
        case Ze: {
          var Ge = t.type;
          return Fl(Ge) && Fh(t), Pr(t), null;
        }
        case Ye: {
          Uf(t);
          var at = t.memoizedState;
          if (at === null)
            return Pr(t), null;
          var nn = (t.flags & St) !== Ae, jt = at.rendering;
          if (jt === null)
            if (nn)
              Ap(at, !1);
            else {
              var Gn = Y_() && (e === null || (e.flags & St) === Ae);
              if (!Gn)
                for (var Ht = t.child; Ht !== null; ) {
                  var Vn = im(Ht);
                  if (Vn !== null) {
                    nn = !0, t.flags |= St, Ap(at, !1);
                    var ca = Vn.updateQueue;
                    return ca !== null && (t.updateQueue = ca, t.flags |= xt), t.subtreeFlags = Ae, Nw(t, a), zo(t, Tg(el.current, Rp)), t.child;
                  }
                  Ht = Ht.sibling;
                }
              at.tail !== null && _n() > eR() && (t.flags |= St, nn = !0, Ap(at, !1), t.lanes = Vv);
            }
          else {
            if (!nn) {
              var Ir = im(jt);
              if (Ir !== null) {
                t.flags |= St, nn = !0;
                var oi = Ir.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= xt), Ap(at, !0), at.tail === null && at.tailMode === "hidden" && !jt.alternate && !jr())
                  return Pr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              _n() * 2 - at.renderingStartTime > eR() && a !== na && (t.flags |= St, nn = !0, Ap(at, !1), t.lanes = Vv);
            }
            if (at.isBackwards)
              jt.sibling = t.child, t.child = jt;
            else {
              var ba = at.last;
              ba !== null ? ba.sibling = jt : t.child = jt, at.last = jt;
            }
          }
          if (at.tail !== null) {
            var _a = at.tail;
            at.rendering = _a, at.tail = _a.sibling, at.renderingStartTime = _n(), _a.sibling = null;
            var fa = el.current;
            return nn ? fa = Tg(fa, Rp) : fa = Af(fa), zo(t, fa), _a;
          }
          return Pr(t), null;
        }
        case nt:
          break;
        case Oe:
        case Ut: {
          $S(t);
          var ju = t.memoizedState, qf = ju !== null;
          if (e !== null) {
            var Xp = e.memoizedState, Il = Xp !== null;
            Il !== qf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !x && (t.flags |= gi);
          }
          return !qf || (t.mode & Ct) === Ue ? Pr(t) : aa(Yl, na) && (Pr(t), t.subtreeFlags & (Rn | xt) && (t.flags |= gi)), null;
        }
        case Ke:
          return null;
        case ft:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bb(e, t, a) {
      switch (Jy(t), t.tag) {
        case Y: {
          var i = t.type;
          Fl(i) && Fh(t);
          var u = t.flags;
          return u & br ? (t.flags = u & ~br | St, (t.mode & kt) !== Ue && Kg(t), t) : null;
        }
        case L: {
          t.stateNode, zf(t), Gy(t), wg();
          var s = t.flags;
          return (s & br) !== Ae && (s & St) === Ae ? (t.flags = s & ~br | St, t) : null;
        }
        case M:
          return Cg(t), null;
        case _e: {
          Uf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Of();
          }
          var p = t.flags;
          return p & br ? (t.flags = p & ~br | St, (t.mode & kt) !== Ue && Kg(t), t) : null;
        }
        case Ye:
          return Uf(t), null;
        case X:
          return zf(t), null;
        case ut:
          var v = t.type._context;
          return dg(v, t), null;
        case Oe:
        case Ut:
          return $S(t), null;
        case Ke:
          return null;
        default:
          return null;
      }
    }
    function zC(e, t, a) {
      switch (Jy(t), t.tag) {
        case Y: {
          var i = t.type.childContextTypes;
          i != null && Fh(t);
          break;
        }
        case L: {
          t.stateNode, zf(t), Gy(t), wg();
          break;
        }
        case M: {
          Cg(t);
          break;
        }
        case X:
          zf(t);
          break;
        case _e:
          Uf(t);
          break;
        case Ye:
          Uf(t);
          break;
        case ut:
          var u = t.type._context;
          dg(u, t);
          break;
        case Oe:
        case Ut:
          $S(t);
          break;
      }
    }
    var AC = null;
    AC = /* @__PURE__ */ new Set();
    var Dm = !1, Vr = !1, $b = typeof WeakSet == "function" ? WeakSet : Set, De = null, Bf = null, $f = null;
    function Yb(e) {
      za(null, function() {
        throw e;
      }), dd();
    }
    var Ib = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & kt)
        try {
          Bl(), t.componentWillUnmount();
        } finally {
          Vl(e);
        }
      else
        t.componentWillUnmount();
    };
    function UC(e, t) {
      try {
        Fo(vr, e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function _S(e, t, a) {
      try {
        Ib(e, a);
      } catch (i) {
        vn(e, t, i);
      }
    }
    function Wb(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        vn(e, t, i);
      }
    }
    function FC(e, t) {
      try {
        HC(e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function Yf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Fe && gt && e.mode & kt)
              try {
                Bl(), i = a(null);
              } finally {
                Vl(e);
              }
            else
              i = a(null);
          } catch (u) {
            vn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Xe(e));
        } else
          a.current = null;
    }
    function Om(e, t, a) {
      try {
        a();
      } catch (i) {
        vn(e, t, i);
      }
    }
    var jC = !1;
    function Qb(e, t) {
      ix(e.containerInfo), De = t, Gb();
      var a = jC;
      return jC = !1, a;
    }
    function Gb() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        (e.subtreeFlags & Sl) !== Ae && t !== null ? (t.return = e, De = t) : qb();
      }
    }
    function qb() {
      for (; De !== null; ) {
        var e = De;
        Xt(e);
        try {
          Kb(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        Cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function Kb(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Aa) !== Ae) {
        switch (Xt(e), e.tag) {
          case me:
          case He:
          case ye:
            break;
          case Y: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ec && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nl(e.type, i), u);
              {
                var p = AC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Xe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case L: {
            {
              var v = e.stateNode;
              Ox(v.containerInfo);
            }
            break;
          }
          case M:
          case J:
          case X:
          case Ze:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Cn();
      }
    }
    function al(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Hr) !== $a ? Tl(t) : (e & vr) !== $a && xd(t), (e & jl) !== $a && Gp(!0), Om(t, a, p), (e & jl) !== $a && Gp(!1), (e & Hr) !== $a ? _c() : (e & vr) !== $a && oo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Fo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Hr) !== $a ? Hv(t) : (e & vr) !== $a && Pv(t);
            var f = s.create;
            (e & jl) !== $a && Gp(!0), s.destroy = f(), (e & jl) !== $a && Gp(!1), (e & Hr) !== $a ? Gi() : (e & vr) !== $a && kc();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & vr) !== Ae ? v = "useLayoutEffect" : (s.tag & jl) !== Ae ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Xb(e, t) {
      if ((t.flags & xt) !== Ae)
        switch (t.tag) {
          case Rt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = eC(), p = t.alternate === null ? "mount" : "update";
            ZE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case L:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case Rt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Jb(e, t, a, i) {
      if ((a.flags & El) !== Ae)
        switch (a.tag) {
          case me:
          case He:
          case ye: {
            if (!Vr)
              if (a.mode & kt)
                try {
                  Bl(), Fo(vr | pr, a);
                } finally {
                  Vl(a);
                }
              else
                Fo(vr | pr, a);
            break;
          }
          case Y: {
            var u = a.stateNode;
            if (a.flags & xt && !Vr)
              if (t === null)
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), a.mode & kt)
                  try {
                    Bl(), u.componentDidMount();
                  } finally {
                    Vl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), a.mode & kt)
                  try {
                    Bl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Vl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), xE(a, p, u));
            break;
          }
          case L: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case M:
                    y = a.child.stateNode;
                    break;
                  case Y:
                    y = a.child.stateNode;
                    break;
                }
              xE(a, v, y);
            }
            break;
          }
          case M: {
            var g = a.stateNode;
            if (t === null && a.flags & xt) {
              var _ = a.type, w = a.memoizedProps;
              mx(g, _, w);
            }
            break;
          }
          case J:
            break;
          case X:
            break;
          case Rt: {
            {
              var A = a.memoizedProps, j = A.onCommit, V = A.onRender, fe = a.stateNode.effectDuration, $e = eC(), ze = t === null ? "mount" : "update";
              ZE() && (ze = "nested-update"), typeof V == "function" && V(a.memoizedProps.id, ze, a.actualDuration, a.treeBaseDuration, a.actualStartTime, $e);
              {
                typeof j == "function" && j(a.memoizedProps.id, ze, fe, $e), q_(a);
                var zt = a.return;
                e: for (; zt !== null; ) {
                  switch (zt.tag) {
                    case L:
                      var bt = zt.stateNode;
                      bt.effectDuration += fe;
                      break e;
                    case Rt:
                      var D = zt.stateNode;
                      D.effectDuration += fe;
                      break e;
                  }
                  zt = zt.return;
                }
              }
            }
            break;
          }
          case _e: {
            l_(e, a);
            break;
          }
          case Ye:
          case Ze:
          case nt:
          case Oe:
          case Ut:
          case ft:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Vr || a.flags & Fn && HC(a);
    }
    function Zb(e) {
      switch (e.tag) {
        case me:
        case He:
        case ye: {
          if (e.mode & kt)
            try {
              Bl(), UC(e, e.return);
            } finally {
              Vl(e);
            }
          else
            UC(e, e.return);
          break;
        }
        case Y: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Wb(e, e.return, t), FC(e, e.return);
          break;
        }
        case M: {
          FC(e, e.return);
          break;
        }
      }
    }
    function e_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === M) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? bx(u) : kx(i.stateNode, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
          }
        } else if (i.tag === J) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? _x(s) : Dx(s, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
        } else if (!((i.tag === Oe || i.tag === Ut) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function HC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case M:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & kt)
            try {
              Bl(), u = t(i);
            } finally {
              Vl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Xe(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Xe(e)), t.current = i;
      }
    }
    function t_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function PC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, PC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === M) {
          var a = e.stateNode;
          a !== null && uw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function n_(e) {
      for (var t = e.return; t !== null; ) {
        if (VC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function VC(e) {
      return e.tag === M || e.tag === L || e.tag === X;
    }
    function BC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || VC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== M && t.tag !== J && t.tag !== At; ) {
          if (t.flags & Rn || t.child === null || t.tag === X)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Rn))
          return t.stateNode;
      }
    }
    function r_(e) {
      var t = n_(e);
      switch (t.tag) {
        case M: {
          var a = t.stateNode;
          t.flags & Qt && (Y0(a), t.flags &= ~Qt);
          var i = BC(e);
          DS(e, i, a);
          break;
        }
        case L:
        case X: {
          var u = t.stateNode.containerInfo, s = BC(e);
          kS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function kS(e, t, a) {
      var i = e.tag, u = i === M || i === J;
      if (u) {
        var s = e.stateNode;
        t ? Rx(a, s, t) : Ex(a, s);
      } else if (i !== X) {
        var f = e.child;
        if (f !== null) {
          kS(f, t, a);
          for (var p = f.sibling; p !== null; )
            kS(p, t, a), p = p.sibling;
        }
      }
    }
    function DS(e, t, a) {
      var i = e.tag, u = i === M || i === J;
      if (u) {
        var s = e.stateNode;
        t ? Cx(a, s, t) : Sx(a, s);
      } else if (i !== X) {
        var f = e.child;
        if (f !== null) {
          DS(f, t, a);
          for (var p = f.sibling; p !== null; )
            DS(p, t, a), p = p.sibling;
        }
      }
    }
    var Br = null, il = !1;
    function a_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case M: {
              Br = i.stateNode, il = !1;
              break e;
            }
            case L: {
              Br = i.stateNode.containerInfo, il = !0;
              break e;
            }
            case X: {
              Br = i.stateNode.containerInfo, il = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Br === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        $C(e, t, a), Br = null, il = !1;
      }
      t_(a);
    }
    function jo(e, t, a) {
      for (var i = a.child; i !== null; )
        $C(e, t, i), i = i.sibling;
    }
    function $C(e, t, a) {
      switch (uo(a), a.tag) {
        case M:
          Vr || Yf(a, t);
        case J: {
          {
            var i = Br, u = il;
            Br = null, jo(e, t, a), Br = i, il = u, Br !== null && (il ? xx(Br, a.stateNode) : Tx(Br, a.stateNode));
          }
          return;
        }
        case At: {
          Br !== null && (il ? wx(Br, a.stateNode) : Py(Br, a.stateNode));
          return;
        }
        case X: {
          {
            var s = Br, f = il;
            Br = a.stateNode.containerInfo, il = !0, jo(e, t, a), Br = s, il = f;
          }
          return;
        }
        case me:
        case He:
        case Z:
        case ye: {
          if (!Vr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, w = _.destroy, A = _.tag;
                  w !== void 0 && ((A & jl) !== $a ? Om(a, t, w) : (A & vr) !== $a && (xd(a), a.mode & kt ? (Bl(), Om(a, t, w), Vl(a)) : Om(a, t, w), oo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          jo(e, t, a);
          return;
        }
        case Y: {
          if (!Vr) {
            Yf(a, t);
            var j = a.stateNode;
            typeof j.componentWillUnmount == "function" && _S(a, t, j);
          }
          jo(e, t, a);
          return;
        }
        case nt: {
          jo(e, t, a);
          return;
        }
        case Oe: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ct
          ) {
            var V = Vr;
            Vr = V || a.memoizedState !== null, jo(e, t, a), Vr = V;
          } else
            jo(e, t, a);
          break;
        }
        default: {
          jo(e, t, a);
          return;
        }
      }
    }
    function i_(e) {
      e.memoizedState;
    }
    function l_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Yx(s);
          }
        }
      }
    }
    function YC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new $b()), t.forEach(function(i) {
          var u = n1.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), _r)
              if (Bf !== null && $f !== null)
                Qp($f, Bf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function u_(e, t, a) {
      Bf = a, $f = e, Xt(t), IC(t, e), Xt(t), Bf = null, $f = null;
    }
    function ll(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            a_(e, t, s);
          } catch (v) {
            vn(s, t, v);
          }
        }
      var f = Xa();
      if (t.subtreeFlags & io)
        for (var p = t.child; p !== null; )
          Xt(p), IC(p, e), p = p.sibling;
      Xt(f);
    }
    function IC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case me:
        case He:
        case Z:
        case ye: {
          if (ll(t, e), $l(e), u & xt) {
            try {
              al(jl | pr, e, e.return), Fo(jl | pr, e);
            } catch (Ge) {
              vn(e, e.return, Ge);
            }
            if (e.mode & kt) {
              try {
                Bl(), al(vr | pr, e, e.return);
              } catch (Ge) {
                vn(e, e.return, Ge);
              }
              Vl(e);
            } else
              try {
                al(vr | pr, e, e.return);
              } catch (Ge) {
                vn(e, e.return, Ge);
              }
          }
          return;
        }
        case Y: {
          ll(t, e), $l(e), u & Fn && i !== null && Yf(i, i.return);
          return;
        }
        case M: {
          ll(t, e), $l(e), u & Fn && i !== null && Yf(i, i.return);
          {
            if (e.flags & Qt) {
              var s = e.stateNode;
              try {
                Y0(s);
              } catch (Ge) {
                vn(e, e.return, Ge);
              }
            }
            if (u & xt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    yx(f, g, y, v, p, e);
                  } catch (Ge) {
                    vn(e, e.return, Ge);
                  }
              }
            }
          }
          return;
        }
        case J: {
          if (ll(t, e), $l(e), u & xt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, w = e.memoizedProps, A = i !== null ? i.memoizedProps : w;
            try {
              gx(_, A, w);
            } catch (Ge) {
              vn(e, e.return, Ge);
            }
          }
          return;
        }
        case L: {
          if (ll(t, e), $l(e), u & xt && i !== null) {
            var j = i.memoizedState;
            if (j.isDehydrated)
              try {
                $x(t.containerInfo);
              } catch (Ge) {
                vn(e, e.return, Ge);
              }
          }
          return;
        }
        case X: {
          ll(t, e), $l(e);
          return;
        }
        case _e: {
          ll(t, e), $l(e);
          var V = e.child;
          if (V.flags & gi) {
            var fe = V.stateNode, $e = V.memoizedState, ze = $e !== null;
            if (fe.isHidden = ze, ze) {
              var zt = V.alternate !== null && V.alternate.memoizedState !== null;
              zt || V_();
            }
          }
          if (u & xt) {
            try {
              i_(e);
            } catch (Ge) {
              vn(e, e.return, Ge);
            }
            YC(e);
          }
          return;
        }
        case Oe: {
          var bt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ct
          ) {
            var D = Vr;
            Vr = D || bt, ll(t, e), Vr = D;
          } else
            ll(t, e);
          if ($l(e), u & gi) {
            var B = e.stateNode, O = e.memoizedState, te = O !== null, Te = e;
            if (B.isHidden = te, te && !bt && (Te.mode & Ct) !== Ue) {
              De = Te;
              for (var ve = Te.child; ve !== null; )
                De = ve, s_(ve), ve = ve.sibling;
            }
            e_(Te, te);
          }
          return;
        }
        case Ye: {
          ll(t, e), $l(e), u & xt && YC(e);
          return;
        }
        case nt:
          return;
        default: {
          ll(t, e), $l(e);
          return;
        }
      }
    }
    function $l(e) {
      var t = e.flags;
      if (t & Rn) {
        try {
          r_(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        e.flags &= ~Rn;
      }
      t & Tn && (e.flags &= ~Tn);
    }
    function o_(e, t, a) {
      Bf = a, $f = t, De = e, WC(e, t, a), Bf = null, $f = null;
    }
    function WC(e, t, a) {
      for (var i = (e.mode & Ct) !== Ue; De !== null; ) {
        var u = De, s = u.child;
        if (u.tag === Oe && i) {
          var f = u.memoizedState !== null, p = f || Dm;
          if (p) {
            OS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Vr, _ = Dm, w = Vr;
            Dm = p, Vr = g, Vr && !w && (De = u, c_(u));
            for (var A = s; A !== null; )
              De = A, WC(
                A,
                // New root; bubble back up to here and stop.
                t,
                a
              ), A = A.sibling;
            De = u, Dm = _, Vr = w, OS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & El) !== Ae && s !== null ? (s.return = u, De = s) : OS(e, t, a);
      }
    }
    function OS(e, t, a) {
      for (; De !== null; ) {
        var i = De;
        if ((i.flags & El) !== Ae) {
          var u = i.alternate;
          Xt(i);
          try {
            Jb(t, u, i, a);
          } catch (f) {
            vn(i, i.return, f);
          }
          Cn();
        }
        if (i === e) {
          De = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, De = s;
          return;
        }
        De = i.return;
      }
    }
    function s_(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        switch (t.tag) {
          case me:
          case He:
          case Z:
          case ye: {
            if (t.mode & kt)
              try {
                Bl(), al(vr, t, t.return);
              } finally {
                Vl(t);
              }
            else
              al(vr, t, t.return);
            break;
          }
          case Y: {
            Yf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && _S(t, t.return, i);
            break;
          }
          case M: {
            Yf(t, t.return);
            break;
          }
          case Oe: {
            var u = t.memoizedState !== null;
            if (u) {
              QC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, De = a) : QC(e);
      }
    }
    function QC(e) {
      for (; De !== null; ) {
        var t = De;
        if (t === e) {
          De = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, De = a;
          return;
        }
        De = t.return;
      }
    }
    function c_(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        if (t.tag === Oe) {
          var i = t.memoizedState !== null;
          if (i) {
            GC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, De = a) : GC(e);
      }
    }
    function GC(e) {
      for (; De !== null; ) {
        var t = De;
        Xt(t);
        try {
          Zb(t);
        } catch (i) {
          vn(t, t.return, i);
        }
        if (Cn(), t === e) {
          De = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, De = a;
          return;
        }
        De = t.return;
      }
    }
    function f_(e, t, a, i) {
      De = t, d_(t, e, a, i);
    }
    function d_(e, t, a, i) {
      for (; De !== null; ) {
        var u = De, s = u.child;
        (u.subtreeFlags & or) !== Ae && s !== null ? (s.return = u, De = s) : p_(e, t, a, i);
      }
    }
    function p_(e, t, a, i) {
      for (; De !== null; ) {
        var u = De;
        if ((u.flags & ya) !== Ae) {
          Xt(u);
          try {
            v_(t, u, a, i);
          } catch (f) {
            vn(u, u.return, f);
          }
          Cn();
        }
        if (u === e) {
          De = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, De = s;
          return;
        }
        De = u.return;
      }
    }
    function v_(e, t, a, i) {
      switch (t.tag) {
        case me:
        case He:
        case ye: {
          if (t.mode & kt) {
            qg();
            try {
              Fo(Hr | pr, t);
            } finally {
              Gg(t);
            }
          } else
            Fo(Hr | pr, t);
          break;
        }
      }
    }
    function h_(e) {
      De = e, m_();
    }
    function m_() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        if ((De.flags & Jr) !== Ae) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              De = u, S_(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            De = e;
          }
        }
        (e.subtreeFlags & or) !== Ae && t !== null ? (t.return = e, De = t) : y_();
      }
    }
    function y_() {
      for (; De !== null; ) {
        var e = De;
        (e.flags & ya) !== Ae && (Xt(e), g_(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function g_(e) {
      switch (e.tag) {
        case me:
        case He:
        case ye: {
          e.mode & kt ? (qg(), al(Hr | pr, e, e.return), Gg(e)) : al(Hr | pr, e, e.return);
          break;
        }
      }
    }
    function S_(e, t) {
      for (; De !== null; ) {
        var a = De;
        Xt(a), C_(a, t), Cn();
        var i = a.child;
        i !== null ? (i.return = a, De = i) : E_(e);
      }
    }
    function E_(e) {
      for (; De !== null; ) {
        var t = De, a = t.sibling, i = t.return;
        if (PC(t), t === e) {
          De = null;
          return;
        }
        if (a !== null) {
          a.return = i, De = a;
          return;
        }
        De = i;
      }
    }
    function C_(e, t) {
      switch (e.tag) {
        case me:
        case He:
        case ye: {
          e.mode & kt ? (qg(), al(Hr, e, t), Gg(e)) : al(Hr, e, t);
          break;
        }
      }
    }
    function R_(e) {
      switch (e.tag) {
        case me:
        case He:
        case ye: {
          try {
            Fo(vr | pr, e);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case Y: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
      }
    }
    function T_(e) {
      switch (e.tag) {
        case me:
        case He:
        case ye: {
          try {
            Fo(Hr | pr, e);
          } catch (t) {
            vn(e, e.return, t);
          }
          break;
        }
      }
    }
    function x_(e) {
      switch (e.tag) {
        case me:
        case He:
        case ye: {
          try {
            al(vr | pr, e, e.return);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case Y: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _S(e, e.return, t);
          break;
        }
      }
    }
    function w_(e) {
      switch (e.tag) {
        case me:
        case He:
        case ye:
          try {
            al(Hr | pr, e, e.return);
          } catch (t) {
            vn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Up = Symbol.for;
      Up("selector.component"), Up("selector.has_pseudo_class"), Up("selector.role"), Up("selector.test_id"), Up("selector.text");
    }
    var b_ = [];
    function __() {
      b_.forEach(function(e) {
        return e();
      });
    }
    var k_ = he.ReactCurrentActQueue;
    function D_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function qC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && k_.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var O_ = Math.ceil, LS = he.ReactCurrentDispatcher, NS = he.ReactCurrentOwner, $r = he.ReactCurrentBatchConfig, ul = he.ReactCurrentActQueue, yr = (
      /*             */
      0
    ), KC = (
      /*               */
      1
    ), Yr = (
      /*                */
      2
    ), Di = (
      /*                */
      4
    ), zu = 0, Fp = 1, tc = 2, Lm = 3, jp = 4, XC = 5, MS = 6, Mt = yr, xa = null, Ln = null, gr = I, Yl = I, zS = ko(I), Sr = zu, Hp = null, Nm = I, Pp = I, Mm = I, Vp = null, Ya = null, AS = 0, JC = 500, ZC = 1 / 0, L_ = 500, Au = null;
    function Bp() {
      ZC = _n() + L_;
    }
    function eR() {
      return ZC;
    }
    var zm = !1, US = null, If = null, nc = !1, Ho = null, $p = I, FS = [], jS = null, N_ = 50, Yp = 0, HS = null, PS = !1, Am = !1, M_ = 50, Wf = 0, Um = null, Ip = qt, Fm = I, tR = !1;
    function jm() {
      return xa;
    }
    function wa() {
      return (Mt & (Yr | Di)) !== yr ? _n() : (Ip !== qt || (Ip = _n()), Ip);
    }
    function Po(e) {
      var t = e.mode;
      if ((t & Ct) === Ue)
        return We;
      if ((Mt & Yr) !== yr && gr !== I)
        return nr(gr);
      var a = kw() !== _w;
      if (a) {
        if ($r.transition !== null) {
          var i = $r.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Fm === Hn && (Fm = zd()), Fm;
      }
      var u = Sa();
      if (u !== Hn)
        return u;
      var s = dx();
      return s;
    }
    function z_(e) {
      var t = e.mode;
      return (t & Ct) === Ue ? We : Qv();
    }
    function Er(e, t, a, i) {
      a1(), tR && S("useInsertionEffect must not schedule updates."), PS && (Am = !0), ho(e, a, i), (Mt & Yr) !== I && e === xa ? u1(t) : (_r && qv(e, t, a), o1(t), e === xa && ((Mt & Yr) === yr && (Pp = pt(Pp, a)), Sr === jp && Vo(e, gr)), Ia(e, i), a === We && Mt === yr && (t.mode & Ct) === Ue && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ul.isBatchingLegacy && (Bp(), tE()));
    }
    function A_(e, t, a) {
      var i = e.current;
      i.lanes = t, ho(e, t, a), Ia(e, a);
    }
    function U_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Mt & Yr) !== yr
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      Yv(e, t);
      var i = ra(e, e === xa ? gr : I);
      if (i === I) {
        a !== null && yR(a), e.callbackNode = null, e.callbackPriority = Hn;
        return;
      }
      var u = hu(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ul.current !== null && a !== QS)) {
        a == null && s !== We && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && yR(a);
      var f;
      if (u === We)
        e.tag === Do ? (ul.isBatchingLegacy !== null && (ul.didScheduleLegacyUpdate = !0), cw(aR.bind(null, e))) : eE(aR.bind(null, e)), ul.current !== null ? ul.current.push(Oo) : vx(function() {
          (Mt & (Yr | Di)) === yr && Oo();
        }), f = null;
      else {
        var p;
        switch (Xv(i)) {
          case ia:
            p = Qi;
            break;
          case Fa:
            p = ps;
            break;
          case cr:
            p = su;
            break;
          case nf:
            p = lo;
            break;
          default:
            p = su;
            break;
        }
        f = GS(p, nR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function nR(e, t) {
      if (eb(), Ip = qt, Fm = I, (Mt & (Yr | Di)) !== yr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Fu();
      if (i && e.callbackNode !== a)
        return null;
      var u = ra(e, e === xa ? gr : I);
      if (u === I)
        return null;
      var s = !ws(e, u) && !Wv(e, u) && !t, f = s ? W_(e, u) : Pm(e, u);
      if (f !== zu) {
        if (f === tc) {
          var p = Gc(e);
          p !== I && (u = p, f = VS(e, p));
        }
        if (f === Fp) {
          var v = Hp;
          throw rc(e, I), Vo(e, u), Ia(e, _n()), v;
        }
        if (f === MS)
          Vo(e, u);
        else {
          var y = !ws(e, u), g = e.current.alternate;
          if (y && !j_(g)) {
            if (f = Pm(e, u), f === tc) {
              var _ = Gc(e);
              _ !== I && (u = _, f = VS(e, _));
            }
            if (f === Fp) {
              var w = Hp;
              throw rc(e, I), Vo(e, u), Ia(e, _n()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, F_(e, f, u);
        }
      }
      return Ia(e, _n()), e.callbackNode === a ? nR.bind(null, e) : null;
    }
    function VS(e, t) {
      var a = Vp;
      if (yu(e)) {
        var i = rc(e, t);
        i.flags |= yn, rw(e.containerInfo);
      }
      var u = Pm(e, t);
      if (u !== tc) {
        var s = Ya;
        Ya = a, s !== null && rR(s);
      }
      return u;
    }
    function rR(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function F_(e, t, a) {
      switch (t) {
        case zu:
        case Fp:
          throw new Error("Root did not complete. This is a bug in React.");
        case tc: {
          ac(e, Ya, Au);
          break;
        }
        case Lm: {
          if (Vo(e, a), qc(a) && // do not delay if we're inside an act() scope
          !gR()) {
            var i = AS + JC - _n();
            if (i > 10) {
              var u = ra(e, I);
              if (u !== I)
                break;
              var s = e.suspendedLanes;
              if (!mu(s, a)) {
                wa(), Zc(e, s);
                break;
              }
              e.timeoutHandle = jy(ac.bind(null, e, Ya, Au), i);
              break;
            }
          }
          ac(e, Ya, Au);
          break;
        }
        case jp: {
          if (Vo(e, a), sy(a))
            break;
          if (!gR()) {
            var f = Od(e, a), p = f, v = _n() - p, y = r1(v) - v;
            if (y > 10) {
              e.timeoutHandle = jy(ac.bind(null, e, Ya, Au), y);
              break;
            }
          }
          ac(e, Ya, Au);
          break;
        }
        case XC: {
          ac(e, Ya, Au);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function j_(e) {
      for (var t = e; ; ) {
        if (t.flags & wc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!pe(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & wc && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Vo(e, t) {
      t = bs(t, Mm), t = bs(t, Pp), Ud(e, t);
    }
    function aR(e) {
      if (tb(), (Mt & (Yr | Di)) !== yr)
        throw new Error("Should not already be working.");
      Fu();
      var t = ra(e, I);
      if (!aa(t, We))
        return Ia(e, _n()), null;
      var a = Pm(e, t);
      if (e.tag !== Do && a === tc) {
        var i = Gc(e);
        i !== I && (t = i, a = VS(e, i));
      }
      if (a === Fp) {
        var u = Hp;
        throw rc(e, I), Vo(e, t), Ia(e, _n()), u;
      }
      if (a === MS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ac(e, Ya, Au), Ia(e, _n()), null;
    }
    function H_(e, t) {
      t !== I && (_s(e, pt(t, We)), Ia(e, _n()), (Mt & (Yr | Di)) === yr && (Bp(), Oo()));
    }
    function BS(e, t) {
      var a = Mt;
      Mt |= KC;
      try {
        return e(t);
      } finally {
        Mt = a, Mt === yr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ul.isBatchingLegacy && (Bp(), tE());
      }
    }
    function P_(e, t, a, i, u) {
      var s = Sa(), f = $r.transition;
      try {
        return $r.transition = null, In(ia), e(t, a, i, u);
      } finally {
        In(s), $r.transition = f, Mt === yr && Bp();
      }
    }
    function Uu(e) {
      Ho !== null && Ho.tag === Do && (Mt & (Yr | Di)) === yr && Fu();
      var t = Mt;
      Mt |= KC;
      var a = $r.transition, i = Sa();
      try {
        return $r.transition = null, In(ia), e ? e() : void 0;
      } finally {
        In(i), $r.transition = a, Mt = t, (Mt & (Yr | Di)) === yr && Oo();
      }
    }
    function iR() {
      return (Mt & (Yr | Di)) !== yr;
    }
    function Hm(e, t) {
      oa(zS, Yl, e), Yl = pt(Yl, t);
    }
    function $S(e) {
      Yl = zS.current, ua(zS, e);
    }
    function rc(e, t) {
      e.finishedWork = null, e.finishedLanes = I;
      var a = e.timeoutHandle;
      if (a !== Hy && (e.timeoutHandle = Hy, px(a)), Ln !== null)
        for (var i = Ln.return; i !== null; ) {
          var u = i.alternate;
          zC(u, i), i = i.return;
        }
      xa = e;
      var s = ic(e.current, null);
      return Ln = s, gr = Yl = t, Sr = zu, Hp = null, Nm = I, Pp = I, Mm = I, Vp = null, Ya = null, Aw(), Zi.discardPendingWarnings(), s;
    }
    function lR(e, t) {
      do {
        var a = Ln;
        try {
          if (qh(), OE(), Cn(), NS.current = null, a === null || a.return === null) {
            Sr = Fp, Hp = t, Ln = null;
            return;
          }
          if (Fe && a.mode & kt && xm(a, !0), ge)
            if (Rl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              hs(a, i, gr);
            } else
              Ci(a, t, gr);
          cb(e, a.return, a, t, gr), cR(a);
        } catch (u) {
          t = u, Ln === a && a !== null ? (a = a.return, Ln = a) : a = Ln;
          continue;
        }
        return;
      } while (!0);
    }
    function uR() {
      var e = LS.current;
      return LS.current = Sm, e === null ? Sm : e;
    }
    function oR(e) {
      LS.current = e;
    }
    function V_() {
      AS = _n();
    }
    function Wp(e) {
      Nm = pt(e, Nm);
    }
    function B_() {
      Sr === zu && (Sr = Lm);
    }
    function YS() {
      (Sr === zu || Sr === Lm || Sr === tc) && (Sr = jp), xa !== null && (_l(Nm) || _l(Pp)) && Vo(xa, gr);
    }
    function $_(e) {
      Sr !== jp && (Sr = tc), Vp === null ? Vp = [e] : Vp.push(e);
    }
    function Y_() {
      return Sr === zu;
    }
    function Pm(e, t) {
      var a = Mt;
      Mt |= Yr;
      var i = uR();
      if (xa !== e || gr !== t) {
        if (_r) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, gr), u.clear()), Fd(e, t);
        }
        Au = tf(), rc(e, t);
      }
      bd(t);
      do
        try {
          I_();
          break;
        } catch (s) {
          lR(e, s);
        }
      while (!0);
      if (qh(), Mt = a, oR(i), Ln !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return gn(), xa = null, gr = I, Sr;
    }
    function I_() {
      for (; Ln !== null; )
        sR(Ln);
    }
    function W_(e, t) {
      var a = Mt;
      Mt |= Yr;
      var i = uR();
      if (xa !== e || gr !== t) {
        if (_r) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, gr), u.clear()), Fd(e, t);
        }
        Au = tf(), Bp(), rc(e, t);
      }
      bd(t);
      do
        try {
          Q_();
          break;
        } catch (s) {
          lR(e, s);
        }
      while (!0);
      return qh(), oR(i), Mt = a, Ln !== null ? (_d(), zu) : (gn(), xa = null, gr = I, Sr);
    }
    function Q_() {
      for (; Ln !== null && !gd(); )
        sR(Ln);
    }
    function sR(e) {
      var t = e.alternate;
      Xt(e);
      var a;
      (e.mode & kt) !== Ue ? (Qg(e), a = IS(t, e, Yl), xm(e, !0)) : a = IS(t, e, Yl), Cn(), e.memoizedProps = e.pendingProps, a === null ? cR(e) : Ln = a, NS.current = null;
    }
    function cR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & uu) === Ae) {
          Xt(t);
          var u = void 0;
          if ((t.mode & kt) === Ue ? u = MC(a, t, Yl) : (Qg(t), u = MC(a, t, Yl), xm(t, !1)), Cn(), u !== null) {
            Ln = u;
            return;
          }
        } else {
          var s = Bb(a, t);
          if (s !== null) {
            s.flags &= Nv, Ln = s;
            return;
          }
          if ((t.mode & kt) !== Ue) {
            xm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= uu, i.subtreeFlags = Ae, i.deletions = null;
          else {
            Sr = MS, Ln = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Ln = v;
          return;
        }
        t = i, Ln = t;
      } while (t !== null);
      Sr === zu && (Sr = XC);
    }
    function ac(e, t, a) {
      var i = Sa(), u = $r.transition;
      try {
        $r.transition = null, In(ia), G_(e, t, a, i);
      } finally {
        $r.transition = u, In(i);
      }
      return null;
    }
    function G_(e, t, a, i) {
      do
        Fu();
      while (Ho !== null);
      if (i1(), (Mt & (Yr | Di)) !== yr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (jv(s), u === null)
        return Ei(), null;
      if (s === I && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = I, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Hn;
      var f = pt(u.lanes, u.childLanes);
      Gv(e, f), e === xa && (xa = null, Ln = null, gr = I), ((u.subtreeFlags & or) !== Ae || (u.flags & or) !== Ae) && (nc || (nc = !0, jS = a, GS(su, function() {
        return Fu(), null;
      })));
      var p = (u.subtreeFlags & (Sl | io | El | or)) !== Ae, v = (u.flags & (Sl | io | El | or)) !== Ae;
      if (p || v) {
        var y = $r.transition;
        $r.transition = null;
        var g = Sa();
        In(ia);
        var _ = Mt;
        Mt |= Di, NS.current = null, Qb(e, u), tC(), u_(e, u, s), lx(e.containerInfo), e.current = u, ms(s), o_(u, e, s), fu(), zv(), Mt = _, In(g), $r.transition = y;
      } else
        e.current = u, tC();
      var w = nc;
      if (nc ? (nc = !1, Ho = e, $p = s) : (Wf = 0, Um = null), f = e.pendingLanes, f === I && (If = null), w || vR(e.current, !1), Cd(u.stateNode, i), _r && e.memoizedUpdaters.clear(), __(), Ia(e, _n()), t !== null)
        for (var A = e.onRecoverableError, j = 0; j < t.length; j++) {
          var V = t[j], fe = V.stack, $e = V.digest;
          A(V.value, {
            componentStack: fe,
            digest: $e
          });
        }
      if (zm) {
        zm = !1;
        var ze = US;
        throw US = null, ze;
      }
      return aa($p, We) && e.tag !== Do && Fu(), f = e.pendingLanes, aa(f, We) ? (Zw(), e === HS ? Yp++ : (Yp = 0, HS = e)) : Yp = 0, Oo(), Ei(), null;
    }
    function Fu() {
      if (Ho !== null) {
        var e = Xv($p), t = kr(cr, e), a = $r.transition, i = Sa();
        try {
          return $r.transition = null, In(t), K_();
        } finally {
          In(i), $r.transition = a;
        }
      }
      return !1;
    }
    function q_(e) {
      FS.push(e), nc || (nc = !0, GS(su, function() {
        return Fu(), null;
      }));
    }
    function K_() {
      if (Ho === null)
        return !1;
      var e = jS;
      jS = null;
      var t = Ho, a = $p;
      if (Ho = null, $p = I, (Mt & (Yr | Di)) !== yr)
        throw new Error("Cannot flush passive effects while already rendering.");
      PS = !0, Am = !1, wd(a);
      var i = Mt;
      Mt |= Di, h_(t.current), f_(t, t.current, a, e);
      {
        var u = FS;
        FS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Xb(t, f);
        }
      }
      so(), vR(t.current, !0), Mt = i, Oo(), Am ? t === Um ? Wf++ : (Wf = 0, Um = t) : Wf = 0, PS = !1, Am = !1, Rd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function fR(e) {
      return If !== null && If.has(e);
    }
    function X_(e) {
      If === null ? If = /* @__PURE__ */ new Set([e]) : If.add(e);
    }
    function J_(e) {
      zm || (zm = !0, US = e);
    }
    var Z_ = J_;
    function dR(e, t, a) {
      var i = Zs(a, t), u = sC(e, i, We), s = No(e, u, We), f = wa();
      s !== null && (ho(s, We, f), Ia(s, f));
    }
    function vn(e, t, a) {
      if (Yb(a), Gp(!1), e.tag === L) {
        dR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === L) {
          dR(i, e, a);
          return;
        } else if (i.tag === Y) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !fR(s)) {
            var f = Zs(a, e), p = fS(i, f, We), v = No(i, p, We), y = wa();
            v !== null && (ho(v, We, y), Ia(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function e1(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = wa();
      Zc(e, a), s1(e), xa === e && mu(gr, a) && (Sr === jp || Sr === Lm && qc(gr) && _n() - AS < JC ? rc(e, I) : Mm = pt(Mm, a)), Ia(e, u);
    }
    function pR(e, t) {
      t === Hn && (t = z_(e));
      var a = wa(), i = Ba(e, t);
      i !== null && (ho(i, t, a), Ia(i, a));
    }
    function t1(e) {
      var t = e.memoizedState, a = Hn;
      t !== null && (a = t.retryLane), pR(e, a);
    }
    function n1(e, t) {
      var a = Hn, i;
      switch (e.tag) {
        case _e:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Ye:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), pR(e, a);
    }
    function r1(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : O_(e / 1960) * 1960;
    }
    function a1() {
      if (Yp > N_)
        throw Yp = 0, HS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Wf > M_ && (Wf = 0, Um = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function i1() {
      Zi.flushLegacyContextWarning(), Zi.flushPendingUnsafeLifecycleWarnings();
    }
    function vR(e, t) {
      Xt(e), Vm(e, zr, x_), t && Vm(e, gl, w_), Vm(e, zr, R_), t && Vm(e, gl, T_), Cn();
    }
    function Vm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ae ? i = i.child : ((i.flags & t) !== Ae && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Bm = null;
    function hR(e) {
      {
        if ((Mt & Yr) !== yr || !(e.mode & Ct))
          return;
        var t = e.tag;
        if (t !== Re && t !== L && t !== Y && t !== me && t !== He && t !== Z && t !== ye)
          return;
        var a = Xe(e) || "ReactComponent";
        if (Bm !== null) {
          if (Bm.has(a))
            return;
          Bm.add(a);
        } else
          Bm = /* @__PURE__ */ new Set([a]);
        var i = Zn;
        try {
          Xt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Xt(e) : Cn();
        }
      }
    }
    var IS;
    {
      var l1 = null;
      IS = function(e, t, a) {
        var i = TR(l1, t);
        try {
          return kC(e, t, a);
        } catch (s) {
          if (gw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (qh(), OE(), zC(e, t), TR(t, i), t.mode & kt && Qg(t), za(null, kC, null, e, t, a), fd()) {
            var u = dd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var mR = !1, WS;
    WS = /* @__PURE__ */ new Set();
    function u1(e) {
      if (Kr && !Kw())
        switch (e.tag) {
          case me:
          case He:
          case ye: {
            var t = Ln && Xe(Ln) || "Unknown", a = t;
            if (!WS.has(a)) {
              WS.add(a);
              var i = Xe(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case Y: {
            mR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), mR = !0);
            break;
          }
        }
    }
    function Qp(e, t) {
      if (_r) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          qv(e, i, t);
        });
      }
    }
    var QS = {};
    function GS(e, t) {
      {
        var a = ul.current;
        return a !== null ? (a.push(t), QS) : md(e, t);
      }
    }
    function yR(e) {
      if (e !== QS)
        return yd(e);
    }
    function gR() {
      return ul.current !== null;
    }
    function o1(e) {
      {
        if (e.mode & Ct) {
          if (!qC())
            return;
        } else if (!D_() || Mt !== yr || e.tag !== me && e.tag !== He && e.tag !== ye)
          return;
        if (ul.current === null) {
          var t = Zn;
          try {
            Xt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Xe(e));
          } finally {
            t ? Xt(e) : Cn();
          }
        }
      }
    }
    function s1(e) {
      e.tag !== Do && qC() && ul.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Gp(e) {
      tR = e;
    }
    var Oi = null, Qf = null, c1 = function(e) {
      Oi = e;
    };
    function Gf(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function qS(e) {
      return Gf(e);
    }
    function KS(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Gf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: G,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function SR(e, t) {
      {
        if (Oi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case Y: {
            typeof i == "function" && (u = !0);
            break;
          }
          case me: {
            (typeof i == "function" || s === et) && (u = !0);
            break;
          }
          case He: {
            (s === G || s === et) && (u = !0);
            break;
          }
          case Z:
          case ye: {
            (s === Et || s === et) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Oi(a);
          if (f !== void 0 && f === Oi(i))
            return !0;
        }
        return !1;
      }
    }
    function ER(e) {
      {
        if (Oi === null || typeof WeakSet != "function")
          return;
        Qf === null && (Qf = /* @__PURE__ */ new WeakSet()), Qf.add(e);
      }
    }
    var f1 = function(e, t) {
      {
        if (Oi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Fu(), Uu(function() {
          XS(e.current, i, a);
        });
      }
    }, d1 = function(e, t) {
      {
        if (e.context !== li)
          return;
        Fu(), Uu(function() {
          qp(t, e, null, null);
        });
      }
    };
    function XS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case me:
          case ye:
          case Y:
            v = p;
            break;
          case He:
            v = p.render;
            break;
        }
        if (Oi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = Oi(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === Y ? g = !0 : y = !0));
        }
        if (Qf !== null && (Qf.has(e) || i !== null && Qf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Ba(e, We);
          w !== null && Er(w, e, We, qt);
        }
        u !== null && !g && XS(u, t, a), s !== null && XS(s, t, a);
      }
    }
    var p1 = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return JS(e.current, i, a), a;
      }
    };
    function JS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case me:
          case ye:
          case Y:
            p = f;
            break;
          case He:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? v1(e, a) : i !== null && JS(i, t, a), u !== null && JS(u, t, a);
      }
    }
    function v1(e, t) {
      {
        var a = h1(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case M:
              t.add(i.stateNode);
              return;
            case X:
              t.add(i.stateNode.containerInfo);
              return;
            case L:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function h1(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === M)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var ZS;
    {
      ZS = !1;
      try {
        var CR = Object.preventExtensions({});
      } catch {
        ZS = !0;
      }
    }
    function m1(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ae, this.subtreeFlags = Ae, this.deletions = null, this.lanes = I, this.childLanes = I, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !ZS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new m1(e, t, a, i);
    };
    function e0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function y1(e) {
      return typeof e == "function" && !e0(e) && e.defaultProps === void 0;
    }
    function g1(e) {
      if (typeof e == "function")
        return e0(e) ? Y : me;
      if (e != null) {
        var t = e.$$typeof;
        if (t === G)
          return He;
        if (t === Et)
          return Z;
      }
      return Re;
    }
    function ic(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ae, a.subtreeFlags = Ae, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & jn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Re:
        case me:
        case ye:
          a.type = Gf(e.type);
          break;
        case Y:
          a.type = qS(e.type);
          break;
        case He:
          a.type = KS(e.type);
          break;
      }
      return a;
    }
    function S1(e, t) {
      e.flags &= jn | Rn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = I, e.lanes = t, e.child = null, e.subtreeFlags = Ae, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ae, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function E1(e, t, a) {
      var i;
      return e === Hh ? (i = Ct, t === !0 && (i |= st, i |= en)) : i = Ue, _r && (i |= kt), ui(L, null, null, i);
    }
    function t0(e, t, a, i, u, s) {
      var f = Re, p = e;
      if (typeof e == "function")
        e0(e) ? (f = Y, p = qS(p)) : p = Gf(p);
      else if (typeof e == "string")
        f = M;
      else
        e: switch (e) {
          case Qr:
            return Bo(a.children, u, s, t);
          case ci:
            f = vt, u |= st, (u & Ct) !== Ue && (u |= en);
            break;
          case fi:
            return C1(a, u, s, t);
          case ce:
            return R1(a, u, s, t);
          case de:
            return T1(a, u, s, t);
          case wn:
            return RR(a, u, s, t);
          case on:
          case Tt:
          case dn:
          case Tr:
          case mt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ai:
                  f = ut;
                  break e;
                case R:
                  f = Me;
                  break e;
                case G:
                  f = He, p = KS(p);
                  break e;
                case Et:
                  f = Z;
                  break e;
                case et:
                  f = Pe, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Xe(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ui(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function n0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = t0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Bo(e, t, a, i) {
      var u = ui(Be, e, i, t);
      return u.lanes = a, u;
    }
    function C1(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(Rt, e, i, t | kt);
      return u.elementType = fi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function R1(e, t, a, i) {
      var u = ui(_e, e, i, t);
      return u.elementType = ce, u.lanes = a, u;
    }
    function T1(e, t, a, i) {
      var u = ui(Ye, e, i, t);
      return u.elementType = de, u.lanes = a, u;
    }
    function RR(e, t, a, i) {
      var u = ui(Oe, e, i, t);
      u.elementType = wn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function r0(e, t, a) {
      var i = ui(J, e, null, t);
      return i.lanes = a, i;
    }
    function x1() {
      var e = ui(M, null, null, Ue);
      return e.elementType = "DELETED", e;
    }
    function w1(e) {
      var t = ui(At, null, null, Ue);
      return t.stateNode = e, t;
    }
    function a0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(X, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function TR(e, t) {
      return e === null && (e = ui(Re, null, null, Ue)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function b1(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Hy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Hn, this.eventTimes = Jc(I), this.expirationTimes = Jc(qt), this.pendingLanes = I, this.suspendedLanes = I, this.pingedLanes = I, this.expiredLanes = I, this.mutableReadLanes = I, this.finishedLanes = I, this.entangledLanes = I, this.entanglements = Jc(I), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Dd; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Hh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Do:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function xR(e, t, a, i, u, s, f, p, v, y) {
      var g = new b1(e, t, a, p, v), _ = E1(t, s);
      g.current = _, _.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = w;
      }
      return yg(_), g;
    }
    var i0 = "18.3.1";
    function _1(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return da(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ma,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var l0, u0;
    l0 = !1, u0 = {};
    function wR(e) {
      if (!e)
        return li;
      var t = ao(e), a = sw(t);
      if (t.tag === Y) {
        var i = t.type;
        if (Fl(i))
          return J0(t, i, a);
      }
      return a;
    }
    function k1(e, t) {
      {
        var a = ao(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = ea(a);
        if (u === null)
          return null;
        if (u.mode & st) {
          var s = Xe(a) || "Component";
          if (!u0[s]) {
            u0[s] = !0;
            var f = Zn;
            try {
              Xt(u), a.mode & st ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Xt(f) : Cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function bR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return xR(e, t, v, y, a, i, u, s, f);
    }
    function _R(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, _ = xR(a, i, g, e, u, s, f, p, v);
      _.context = wR(null);
      var w = _.current, A = wa(), j = Po(w), V = Nu(A, j);
      return V.callback = t ?? null, No(w, V, j), A_(_, j, A), _;
    }
    function qp(e, t, a, i) {
      Ed(t, e);
      var u = t.current, s = wa(), f = Po(u);
      Dc(f);
      var p = wR(a);
      t.context === null ? t.context = p : t.pendingContext = p, Kr && Zn !== null && !l0 && (l0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Xe(Zn) || "Unknown"));
      var v = Nu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = No(u, v, f);
      return y !== null && (Er(y, u, f, s), em(y, u, f)), f;
    }
    function $m(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case M:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function D1(e) {
      switch (e.tag) {
        case L: {
          var t = e.stateNode;
          if (yu(t)) {
            var a = Iv(t);
            H_(t, a);
          }
          break;
        }
        case _e: {
          Uu(function() {
            var u = Ba(e, We);
            if (u !== null) {
              var s = wa();
              Er(u, e, We, s);
            }
          });
          var i = We;
          o0(e, i);
          break;
        }
      }
    }
    function kR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Ad(a.retryLane, t));
    }
    function o0(e, t) {
      kR(e, t);
      var a = e.alternate;
      a && kR(a, t);
    }
    function O1(e) {
      if (e.tag === _e) {
        var t = vo, a = Ba(e, t);
        if (a !== null) {
          var i = wa();
          Er(a, e, t, i);
        }
        o0(e, t);
      }
    }
    function L1(e) {
      if (e.tag === _e) {
        var t = Po(e), a = Ba(e, t);
        if (a !== null) {
          var i = wa();
          Er(a, e, t, i);
        }
        o0(e, t);
      }
    }
    function DR(e) {
      var t = ni(e);
      return t === null ? null : t.stateNode;
    }
    var OR = function(e) {
      return null;
    };
    function N1(e) {
      return OR(e);
    }
    var LR = function(e) {
      return !1;
    };
    function M1(e) {
      return LR(e);
    }
    var NR = null, MR = null, zR = null, AR = null, UR = null, FR = null, jR = null, HR = null, PR = null;
    {
      var VR = function(e, t, a) {
        var i = t[a], u = dt(e) ? e.slice() : ot({}, e);
        return a + 1 === t.length ? (dt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = VR(e[i], t, a + 1), u);
      }, BR = function(e, t) {
        return VR(e, t, 0);
      }, $R = function(e, t, a, i) {
        var u = t[i], s = dt(e) ? e.slice() : ot({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], dt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = $R(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, YR = function(e, t, a) {
        if (t.length !== a.length) {
          it("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              it("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return $R(e, t, a, 0);
      }, IR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = dt(e) ? e.slice() : ot({}, e);
        return s[u] = IR(e[u], t, a + 1, i), s;
      }, WR = function(e, t, a) {
        return IR(e, t, 0, a);
      }, s0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      NR = function(e, t, a, i) {
        var u = s0(e, t);
        if (u !== null) {
          var s = WR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = Ba(e, We);
          f !== null && Er(f, e, We, qt);
        }
      }, MR = function(e, t, a) {
        var i = s0(e, t);
        if (i !== null) {
          var u = BR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = ot({}, e.memoizedProps);
          var s = Ba(e, We);
          s !== null && Er(s, e, We, qt);
        }
      }, zR = function(e, t, a, i) {
        var u = s0(e, t);
        if (u !== null) {
          var s = YR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = Ba(e, We);
          f !== null && Er(f, e, We, qt);
        }
      }, AR = function(e, t, a) {
        e.pendingProps = WR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, We);
        i !== null && Er(i, e, We, qt);
      }, UR = function(e, t) {
        e.pendingProps = BR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, We);
        a !== null && Er(a, e, We, qt);
      }, FR = function(e, t, a) {
        e.pendingProps = YR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, We);
        i !== null && Er(i, e, We, qt);
      }, jR = function(e) {
        var t = Ba(e, We);
        t !== null && Er(t, e, We, qt);
      }, HR = function(e) {
        OR = e;
      }, PR = function(e) {
        LR = e;
      };
    }
    function z1(e) {
      var t = ea(e);
      return t === null ? null : t.stateNode;
    }
    function A1(e) {
      return null;
    }
    function U1() {
      return Zn;
    }
    function F1(e) {
      var t = e.findFiberByHostInstance, a = he.ReactCurrentDispatcher;
      return Sd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: NR,
        overrideHookStateDeletePath: MR,
        overrideHookStateRenamePath: zR,
        overrideProps: AR,
        overridePropsDeletePath: UR,
        overridePropsRenamePath: FR,
        setErrorHandler: HR,
        setSuspenseHandler: PR,
        scheduleUpdate: jR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: z1,
        findFiberByHostInstance: t || A1,
        // React Refresh
        findHostInstancesForRefresh: p1,
        scheduleRefresh: f1,
        scheduleRoot: d1,
        setRefreshHandler: c1,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: U1,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: i0
      });
    }
    var QR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function c0(e) {
      this._internalRoot = e;
    }
    Ym.prototype.render = c0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Im(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Un) {
          var i = DR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      qp(e, t, null, null);
    }, Ym.prototype.unmount = c0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        iR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Uu(function() {
          qp(null, e, null, null);
        }), Q0(t);
      }
    };
    function j1(e, t) {
      if (!Im(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      GR(e);
      var a = !1, i = !1, u = "", s = QR;
      t != null && (t.hydrate ? it("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ur && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = bR(e, Hh, null, a, i, u, s);
      Nh(f.current, e);
      var p = e.nodeType === Un ? e.parentNode : e;
      return tp(p), new c0(f);
    }
    function Ym(e) {
      this._internalRoot = e;
    }
    function H1(e) {
      e && nh(e);
    }
    Ym.prototype.unstable_scheduleHydration = H1;
    function P1(e, t, a) {
      if (!Im(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      GR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = QR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = _R(t, null, e, Hh, i, s, f, p, v);
      if (Nh(y.current, e), tp(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          Yw(y, _);
        }
      return new Ym(y);
    }
    function Im(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Yi || e.nodeType === Xo));
    }
    function Kp(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Yi || e.nodeType === Xo || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    function GR(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), dp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var V1 = he.ReactCurrentOwner, qR;
    qR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = DR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = f0(e), u = !!(i && _o(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function f0(e) {
      return e ? e.nodeType === Yi ? e.documentElement : e.firstChild : null;
    }
    function KR() {
    }
    function B1(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = $m(f);
            s.call(w);
          };
        }
        var f = _R(
          t,
          i,
          e,
          Do,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          KR
        );
        e._reactRootContainer = f, Nh(f.current, e);
        var p = e.nodeType === Un ? e.parentNode : e;
        return tp(p), Uu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = $m(g);
            y.call(w);
          };
        }
        var g = bR(
          e,
          Do,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          KR
        );
        e._reactRootContainer = g, Nh(g.current, e);
        var _ = e.nodeType === Un ? e.parentNode : e;
        return tp(_), Uu(function() {
          qp(t, g, a, i);
        }), g;
      }
    }
    function $1(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Wm(e, t, a, i, u) {
      qR(a), $1(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = B1(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = $m(f);
            p.call(v);
          };
        }
        qp(t, f, e, u);
      }
      return $m(f);
    }
    var XR = !1;
    function Y1(e) {
      {
        XR || (XR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = V1.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Nt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : k1(e, "findDOMNode");
    }
    function I1(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Wm(null, e, t, !0, a);
    }
    function W1(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Wm(null, e, t, !1, a);
    }
    function Q1(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !lu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Wm(e, t, a, !1, i);
    }
    var JR = !1;
    function G1(e) {
      if (JR || (JR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Kp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = dp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = f0(e), i = a && !_o(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Uu(function() {
          Wm(null, null, e, !1, function() {
            e._reactRootContainer = null, Q0(e);
          });
        }), !0;
      } else {
        {
          var u = f0(e), s = !!(u && _o(u)), f = e.nodeType === Xr && Kp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    fy(D1), Hd(O1), dy(L1), rf(Sa), Jv(Kv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ls(KT), Ov(BS, P_, Uu);
    function q1(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Im(t))
        throw new Error("Target container is not a DOM element.");
      return _1(e, t, null, a);
    }
    function K1(e, t, a, i) {
      return Q1(e, t, a, i);
    }
    var d0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [_o, wf, Mh, sd, eo, BS]
    };
    function X1(e, t) {
      return d0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), j1(e, t);
    }
    function J1(e, t, a) {
      return d0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), P1(e, t, a);
    }
    function Z1(e) {
      return iR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var ek = F1({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: i0,
      rendererPackageName: "react-dom"
    });
    if (!ek && qn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var ZR = window.location.protocol;
      /^(https?|file):$/.test(ZR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (ZR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d0, Qa.createPortal = q1, Qa.createRoot = X1, Qa.findDOMNode = Y1, Qa.flushSync = Z1, Qa.hydrate = I1, Qa.hydrateRoot = J1, Qa.render = W1, Qa.unmountComponentAtNode = G1, Qa.unstable_batchedUpdates = BS, Qa.unstable_renderSubtreeIntoContainer = K1, Qa.version = i0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Qa;
}
var vT = {};
function hT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (vT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hT);
    } catch (Q) {
      console.error(Q);
    }
  }
}
vT.NODE_ENV === "production" ? (hT(), m0.exports = ck()) : m0.exports = fk();
var dk = m0.exports, y0, pk = {}, qm = dk;
if (pk.NODE_ENV === "production")
  y0 = qm.createRoot, qm.hydrateRoot;
else {
  var cT = qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  y0 = function(Q, ie) {
    cT.usingClientEntryPoint = !0;
    try {
      return qm.createRoot(Q, ie);
    } finally {
      cT.usingClientEntryPoint = !1;
    }
  };
}
var Kf = tv();
const fT = async (Q) => {
  if (!Q)
    return;
  try {
    await navigator.clipboard.writeText(Q);
    return;
  } catch {
  }
  const ie = document.createElement("textarea");
  ie.value = Q, ie.setAttribute("readonly", "true"), ie.style.position = "fixed", ie.style.top = "-1000px", ie.style.left = "-1000px", document.body.appendChild(ie), ie.select();
  try {
    document.execCommand("copy");
  } finally {
    document.body.removeChild(ie);
  }
}, vk = acquireVsCodeApi(), g0 = 12;
function hn(Q, ie = {}) {
  vk.postMessage({ command: Q, ...ie });
}
function hk() {
  return window.__INITIAL_STATE__ ?? {
    hasRepository: !1,
    changes: [],
    workingCopyFiles: [],
    expandedCommitIds: [],
    changeFiles: {},
    graphInfo: {},
    prInfo: {},
    bookmarks: []
  };
}
const Li = {
  LEFT_FORK_PARENT: 16,
  LEFT_FORK_ANCESTOR: 32,
  RIGHT_FORK_PARENT: 64,
  RIGHT_FORK_ANCESTOR: 128,
  LEFT_MERGE_PARENT: 256,
  LEFT_MERGE_ANCESTOR: 512,
  RIGHT_MERGE_PARENT: 1024,
  RIGHT_MERGE_ANCESTOR: 2048
};
function mk(Q, ie, H, he) {
  var ft;
  const qe = g0, ct = 42, it = 4, S = ct / 2, lt = ct, me = ct, Y = 5, Re = (he == null ? void 0 : he.nodeColumn) ?? 0, L = (he == null ? void 0 : he.maxColumns) ?? 1, X = Math.max(L * qe + qe, 16), M = Re * qe + qe / 2, J = "var(--vscode-descriptionForeground)", Be = Q.isWorkingCopy ? "var(--vscode-textLink-foreground)" : Q.hasConflict ? "var(--vscode-gitDecoration-conflictingResourceForeground)" : "var(--vscode-descriptionForeground)", vt = Q.isWorkingCopy ? "var(--vscode-textLink-foreground)" : Q.hasConflict ? "var(--vscode-gitDecoration-conflictingResourceForeground)" : "var(--vscode-editor-background)";
  let Me = `<svg width="${X}" height="${ct}" viewBox="0 0 ${X} ${ct}" xmlns="http://www.w3.org/2000/svg">`;
  const ut = (he == null ? void 0 : he.preNodeLine) ?? [], He = (he == null ? void 0 : he.postNodeLine) ?? [], Rt = (he == null ? void 0 : he.parentColumns) ?? [], _e = new Set((he == null ? void 0 : he.dashedParentColumns) ?? []), Z = (he == null ? void 0 : he.linkLine) ?? [], ye = (he == null ? void 0 : he.linkLineFromNode) ?? [], Pe = ((he == null ? void 0 : he.dashedParentColumns) ?? []).map((U) => ({ min: U - 0.5, max: U + 0.5 })), Ze = (U) => Pe.some((ue) => U > ue.min && U < ue.max), Ye = (ye[Re] ?? 0) !== 0;
  let nt = -1;
  if (Ye && ((Z[Re] ?? 0) & (Li.RIGHT_FORK_PARENT | Li.RIGHT_FORK_ANCESTOR)) !== 0) {
    for (let ae = Re + 1; ae < Z.length; ae++)
      if ((Z[ae] ?? 0) & (Li.LEFT_MERGE_PARENT | Li.LEFT_MERGE_ANCESTOR)) {
        nt = ae;
        break;
      }
  }
  for (let U = 0; U < L; U += 1) {
    const ue = U * qe + qe / 2;
    ut[U] !== void 0 && ut[U] !== 0 && (Me += `<line x1="${ue}" y1="0" x2="${ue}" y2="${S}" stroke="${J}" stroke-width="1"/>`);
    const ae = ((ft = he == null ? void 0 : he.parentColumns) == null ? void 0 : ft.includes(Re)) ?? !1;
    U === Re && !ae || U !== nt && He[U] !== void 0 && He[U] !== 0 && (Me += `<line x1="${ue}" y1="${S}" x2="${ue}" y2="${lt}" stroke="${J}" stroke-width="1"/>`);
  }
  for (const U of Rt) {
    if (U === Re)
      continue;
    const ue = U * qe + qe / 2, ae = _e.has(U) ? ' stroke-dasharray="3 3"' : "", x = S + it + 1, $ = me - Y, xe = ue > M, ge = xe ? 1 : -1, Fe = [
      `M ${M} ${x}`,
      `L ${M} ${$ - Y}`,
      `A ${Y} ${Y} 0 0 ${xe ? 0 : 1} ${M + ge * Y} ${$}`,
      `L ${ue - ge * Y} ${$}`,
      `A ${Y} ${Y} 0 0 ${xe ? 1 : 0} ${ue} ${$ + Y}`,
      `L ${ue} ${me}`
    ].join(" ");
    Me += `<path d="${Fe}" stroke="${J}" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"${ae}/>`;
  }
  const Oe = Z[Re] ?? 0;
  if ((Oe & (Li.RIGHT_FORK_PARENT | Li.RIGHT_FORK_ANCESTOR)) !== 0) {
    for (let U = Re + 1; U < Z.length; U++)
      if (((Z[U] ?? 0) & (Li.LEFT_MERGE_PARENT | Li.LEFT_MERGE_ANCESTOR)) !== 0) {
        const x = U * qe + qe / 2, $ = Ze(U) ? ' stroke-dasharray="3 3"' : "";
        if (Ye) {
          const xe = S, ge = me - Y, Fe = [
            `M ${x} ${xe}`,
            `L ${x} ${ge - Y}`,
            `A ${Y} ${Y} 0 0 1 ${x - Y} ${ge}`,
            `L ${M + Y} ${ge}`,
            `A ${Y} ${Y} 0 0 0 ${M} ${ge + Y}`,
            `L ${M} ${me}`
          ].join(" ");
          Me += `<path d="${Fe}" stroke="${J}" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"${$}/>`;
        } else {
          const xe = S + it + 1, ge = me - Y, Fe = [
            `M ${M} ${xe}`,
            `L ${M} ${ge - Y}`,
            `A ${Y} ${Y} 0 0 0 ${M + Y} ${ge}`,
            `L ${x - Y} ${ge}`,
            `A ${Y} ${Y} 0 0 1 ${x} ${ge + Y}`,
            `L ${x} ${me}`
          ].join(" ");
          Me += `<path d="${Fe}" stroke="${J}" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"${$}/>`;
        }
        break;
      }
  }
  if ((Oe & (Li.LEFT_FORK_PARENT | Li.LEFT_FORK_ANCESTOR)) !== 0) {
    for (let U = Re - 1; U >= 0; U--)
      if (((Z[U] ?? 0) & (Li.RIGHT_MERGE_PARENT | Li.RIGHT_MERGE_ANCESTOR)) !== 0) {
        const x = U * qe + qe / 2, $ = Ze(U) ? ' stroke-dasharray="3 3"' : "";
        if (Ye) {
          const xe = S, ge = me - Y, Fe = [
            `M ${x} ${xe}`,
            `L ${x} ${ge - Y}`,
            `A ${Y} ${Y} 0 0 0 ${x + Y} ${ge}`,
            `L ${M - Y} ${ge}`,
            `A ${Y} ${Y} 0 0 1 ${M} ${ge + Y}`,
            `L ${M} ${me}`
          ].join(" ");
          Me += `<path d="${Fe}" stroke="${J}" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"${$}/>`;
        } else {
          const xe = S + it + 1, ge = me - Y, Fe = [
            `M ${M} ${xe}`,
            `L ${M} ${ge - Y}`,
            `A ${Y} ${Y} 0 0 1 ${M - Y} ${ge}`,
            `L ${x + Y} ${ge}`,
            `A ${Y} ${Y} 0 0 0 ${x} ${ge + Y}`,
            `L ${x} ${me}`
          ].join(" ");
          Me += `<path d="${Fe}" stroke="${J}" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"${$}/>`;
        }
        break;
      }
  }
  if (Q.isImmutable) {
    const U = Math.max(4, it + 1);
    Me += `<polygon points="${M},${S - U} ${M + U},${S} ${M},${S + U} ${M - U},${S}" fill="${vt}" stroke="${Be}" stroke-width="1.5"/>`;
  } else
    Me += `<circle cx="${M}" cy="${S}" r="${it}" fill="${vt}" stroke="${Be}" stroke-width="1.5"/>`;
  return Me += "</svg>", Me;
}
function yk(Q) {
  const ie = g0, H = Q.activeColumns, he = Q.nodeColumn, qe = H.reduce((Re, L, X) => L ? X : Re, 0), ct = Math.max((qe + 1) * ie, ie), it = 1;
  let S = `<svg class="graph-file-svg" width="${ct}" height="100%" viewBox="0 0 ${ct} ${it}" preserveAspectRatio="none">`;
  const lt = Q.postNodeLine ?? [], Y = (Q.parentColumns ?? []).includes(he);
  for (let Re = 0; Re < H.length; Re += 1) {
    if (!H[Re] || Re === he && (!Y || !(lt[Re] !== void 0 && lt[Re] !== 0)))
      continue;
    const L = Re * ie + ie / 2;
    S += `<line x1="${L}" y1="0" x2="${L}" y2="${it}" class="graph-file-line" vector-effect="non-scaling-stroke"/>`;
  }
  return S += "</svg>", { svg: S, width: ct };
}
function gk() {
  const [Q, ie] = Kf.useState(() => hk()), H = Kf.useRef(null);
  Kf.useEffect(() => {
    const L = (X) => {
      const M = X.data;
      (M == null ? void 0 : M.type) === "state" && M.state && ie(M.state);
    };
    return window.addEventListener("message", L), hn("ready"), () => window.removeEventListener("message", L);
  }, []);
  const he = Kf.useMemo(() => new Set(Q.expandedCommitIds), [Q.expandedCommitIds]), qe = (L) => {
    const X = Q.changes.find((Be) => Be.commitId === L), M = Q.graphInfo[L], J = X != null && X.isWorkingCopy ? Q.workingCopyFiles : Q.changeFiles[L];
    console.log("[open-jj] toggleChange", {
      commitId: L,
      changeId: X == null ? void 0 : X.changeId,
      isWorkingCopy: X == null ? void 0 : X.isWorkingCopy,
      hasConflict: X == null ? void 0 : X.hasConflict,
      graphInfo: M,
      postNodeLine: M == null ? void 0 : M.postNodeLine,
      preNodeLine: M == null ? void 0 : M.preNodeLine,
      parentColumns: M == null ? void 0 : M.parentColumns,
      activeColumns: M == null ? void 0 : M.activeColumns,
      filesCount: (J == null ? void 0 : J.length) ?? 0
    }), hn("toggleChange", { commitId: L });
  }, ct = (L, X) => {
    L.preventDefault(), it(L.nativeEvent, X.changeId, X.isWorkingCopy);
  }, it = (L, X, M) => {
    const J = new CustomEvent("open-jj:context-menu", {
      detail: { type: "change", x: L.pageX, y: L.pageY, changeId: X, isWorkingCopy: M }
    });
    window.dispatchEvent(J);
  }, S = (L, X, M, J) => {
    L.preventDefault(), L.stopPropagation();
    const Be = new CustomEvent("open-jj:context-menu", {
      detail: { type: "bookmark", x: L.pageX, y: L.pageY, bookmarkName: X, changeId: M, isTracked: J }
    });
    window.dispatchEvent(Be);
  }, lt = (L, X, M) => {
    const J = L.querySelectorAll(".menu-change"), Be = L.querySelectorAll(".menu-bookmark");
    J.forEach((Me) => {
      Me.style.display = X === "change" ? "" : "none";
    }), Be.forEach((Me) => {
      Me.style.display = X === "bookmark" ? "" : "none";
    });
    const vt = L.querySelector('[data-action="edit-change"]');
    vt && (vt.style.display = X === "change" && !M ? "" : "none");
  };
  Kf.useEffect(() => {
    const L = (X) => {
      const M = X.detail, J = document.getElementById("context-menu");
      J && (J.setAttribute("data-type", M.type), J.setAttribute("data-x", String(M.x)), J.setAttribute("data-y", String(M.y)), J.setAttribute("data-change-id", M.changeId ?? ""), J.setAttribute("data-working-copy", String(M.isWorkingCopy ?? !1)), J.setAttribute("data-bookmark-name", M.bookmarkName ?? ""), J.setAttribute("data-tracked", String(M.isTracked ?? !1)), lt(J, M.type, M.isWorkingCopy ?? !1), J.classList.add("visible"), J.style.left = `${M.x}px`, J.style.top = `${M.y}px`);
    };
    return window.addEventListener("open-jj:context-menu", L), () => window.removeEventListener("open-jj:context-menu", L);
  }, []), Kf.useEffect(() => {
    const L = () => {
      const X = document.getElementById("context-menu");
      X && X.classList.remove("visible");
    };
    return document.addEventListener("click", L), () => document.removeEventListener("click", L);
  }, []);
  const me = (L) => {
    const X = L.target;
    if (!X) return;
    const M = X.closest("#context-menu"), J = X.closest("[data-action]");
    if (!M || !J) return;
    const Be = J.dataset.action, vt = M.dataset.changeId, Me = M.dataset.bookmarkName;
    switch (Be) {
      case "copy-change-id":
        vt && fT(vt);
        break;
      case "new-change-from":
        vt && hn("newChangeFrom", { changeId: vt });
        break;
      case "describe-change":
        vt && hn("describeChange", { changeId: vt });
        break;
      case "manage-bookmarks":
        vt && hn("manageBookmarks", { changeId: vt });
        break;
      case "edit-change":
        vt && hn("editChange", { changeId: vt });
        break;
      case "squash-change":
        vt && hn("squashChange", { changeId: vt });
        break;
      case "abandon-change":
        vt && hn("abandonChange", { changeId: vt });
        break;
      case "copy-bookmark-name":
        Me && fT(Me);
        break;
      case "push-bookmark":
        Me && hn("pushBookmark", { bookmarkName: Me });
        break;
      case "push-and-create-pr":
        Me && hn("pushAndCreatePr", { bookmarkName: Me });
        break;
      case "create-pull-request":
        Me && hn("createPullRequest", { bookmarkName: Me });
        break;
      case "delete-bookmark":
        Me && hn("deleteBookmark", { bookmarkName: Me });
        break;
    }
    M.classList.remove("visible");
  }, Y = (L, X) => {
    H.current = X, L.dataTransfer.setData("text/plain", JSON.stringify(X)), L.dataTransfer.effectAllowed = "move";
  }, Re = (L, X) => {
    L.preventDefault(), L.stopPropagation();
    const M = H.current;
    H.current = null, M && (M.type === "change" ? M.changeId !== X && hn("rebaseChange", { sourceChangeId: M.changeId, targetChangeId: X }) : M.type === "bookmark" ? hn("moveBookmark", { bookmarkName: M.bookmarkName, targetChangeId: X }) : M.type === "file" && M.fromChangeId !== X && hn("moveFile", { filePath: M.filePath, fromChangeId: M.fromChangeId, targetChangeId: X }));
  };
  return Q.hasRepository ? /* @__PURE__ */ Ne.jsxs("div", { className: "log", children: [
    Q.changes.length === 0 ? /* @__PURE__ */ Ne.jsx("div", { className: "empty", children: "No changes found" }) : Q.changes.map((L, X) => {
      const M = he.has(L.commitId), J = L.isWorkingCopy, Be = J ? Q.workingCopyFiles : Q.changeFiles[L.commitId] ?? [], vt = Be.length > 0 || !L.isEmpty, Me = Q.graphInfo[L.commitId], ut = mk(L, X === 0, X === Q.changes.length - 1, Me), He = L.description && L.description !== "(no description)", Rt = L.bookmarks.filter((Z) => !Z.includes("@")), _e = L.bookmarks.filter((Z) => Z.includes("@"));
      return /* @__PURE__ */ Ne.jsxs(
        "div",
        {
          className: `change ${J ? "working-copy" : ""} ${L.hasConflict ? "conflict" : ""}`,
          "data-change-id": L.changeId,
          children: [
            /* @__PURE__ */ Ne.jsxs(
              "div",
              {
                className: "change-header",
                "data-change-id": L.changeId,
                "data-commit-id": L.commitId,
                onClick: () => qe(L.commitId),
                onContextMenu: (Z) => ct(Z, L),
                onDragOver: (Z) => {
                  Z.preventDefault(), Z.dataTransfer.dropEffect = "move";
                },
                onDragEnter: (Z) => {
                  Z.preventDefault(), Z.currentTarget.classList.add("drag-over");
                },
                onDragLeave: (Z) => {
                  Z.currentTarget.contains(Z.relatedTarget) || Z.currentTarget.classList.remove("drag-over");
                },
                onDrop: (Z) => {
                  Z.currentTarget.classList.remove("drag-over"), Re(Z, L.changeId);
                },
                children: [
                  /* @__PURE__ */ Ne.jsx(
                    "span",
                    {
                      className: "graph-node",
                      draggable: !0,
                      onDragStart: (Z) => Y(Z, { type: "change", changeId: L.changeId }),
                      onDoubleClick: (Z) => {
                        Z.stopPropagation(), hn("editChange", { changeId: L.changeId });
                      },
                      onClick: (Z) => Z.stopPropagation(),
                      dangerouslySetInnerHTML: { __html: ut }
                    }
                  ),
                  /* @__PURE__ */ Ne.jsx(
                    "span",
                    {
                      className: `expand-icon codicon ${vt ? "" : "hidden"} ${M ? "codicon-chevron-down" : "codicon-chevron-right"}`,
                      style: Me ? { marginLeft: -((Me.maxColumns - Me.nodeColumn - 1) * g0) } : void 0
                    }
                  ),
                  He ? /* @__PURE__ */ Ne.jsxs("span", { className: "change-desc", children: [
                    J ? "@ " : "",
                    L.description
                  ] }) : /* @__PURE__ */ Ne.jsxs(Ne.Fragment, { children: [
                    /* @__PURE__ */ Ne.jsx("span", { className: "change-desc placeholder", children: J ? "@ " : "" }),
                    /* @__PURE__ */ Ne.jsx(
                      "button",
                      {
                        className: "describe-btn",
                        onClick: (Z) => {
                          Z.stopPropagation(), hn("describeChange", { changeId: L.changeId });
                        },
                        children: "Describe"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ Ne.jsxs("span", { className: "bookmarks", onClick: (Z) => {
                    Z.stopPropagation(), hn("manageBookmarks", { changeId: L.changeId });
                  }, children: [
                    Rt.map((Z) => {
                      const ye = Z.endsWith("*"), Pe = ye ? Z.slice(0, -1) : Z, Ze = Q.bookmarks.find((Ke) => Ke.name === Pe && !Ke.isRemote), At = (Ze == null ? void 0 : Ze.isTracked) ?? !1, Ye = Q.prInfo[Pe];
                      let nt = "badge local", Oe = "Local bookmark (not pushed)";
                      Ye ? Ye.state === "merged" ? (nt = "badge merged", Oe = `PR #${Ye.number} merged`) : Ye.state === "open" || Ye.state === "draft" ? (nt = Ye.state === "draft" ? "badge pr-draft" : "badge pr-open", Oe = `PR #${Ye.number} ${Ye.state}`) : Ye.state === "closed" && (nt = "badge pr-closed", Oe = `PR #${Ye.number} closed`) : At && (nt = "badge tracked", Oe = "Pushed to remote (no PR)");
                      const Ut = ye || (Ze == null ? void 0 : Ze.isConflicted);
                      return Ut && (Oe += " - DIVERGED from remote"), /* @__PURE__ */ Ne.jsxs(
                        "span",
                        {
                          className: `${nt}${Ye != null && Ye.url ? " clickable" : ""}`,
                          draggable: !0,
                          title: Oe,
                          onDragStart: (Ke) => Y(Ke, { type: "bookmark", bookmarkName: Pe, fromChangeId: L.changeId }),
                          onContextMenu: (Ke) => S(Ke, Pe, L.changeId, At),
                          onClick: (Ke) => {
                            Ke.stopPropagation(), Ye != null && Ye.url && hn("openUrl", { url: Ye.url });
                          },
                          children: [
                            Pe,
                            Ye ? /* @__PURE__ */ Ne.jsx("span", { className: "codicon codicon-git-merge badge-pr-icon", title: "Pull request" }) : null,
                            At ? /* @__PURE__ */ Ne.jsx("span", { className: "codicon codicon-cloud badge-cloud-icon", title: "Synced" }) : null,
                            Ut ? /* @__PURE__ */ Ne.jsx("span", { className: "codicon codicon-cloud badge-cloud-icon diverged", title: "Diverged" }) : null
                          ]
                        },
                        Z
                      );
                    }),
                    _e.map((Z) => {
                      const ye = Z.split("@")[0];
                      if (Rt.includes(ye) || Rt.includes(`${ye}*`))
                        return null;
                      const Pe = Q.prInfo[ye];
                      let Ze = "badge remote", At = "Remote only";
                      return Pe && (Pe.state === "merged" ? (Ze = "badge merged", At = `PR #${Pe.number} merged`) : Pe.state === "open" || Pe.state === "draft" ? (Ze = Pe.state === "draft" ? "badge pr-draft" : "badge pr-open", At = `PR #${Pe.number} ${Pe.state}`) : Pe.state === "closed" && (Ze = "badge pr-closed", At = `PR #${Pe.number} closed`)), /* @__PURE__ */ Ne.jsxs(
                        "span",
                        {
                          className: `${Ze}${Pe != null && Pe.url ? " clickable" : ""}`,
                          title: At,
                          onClick: (Ye) => {
                            Ye.stopPropagation(), Pe != null && Pe.url && hn("openUrl", { url: Pe.url });
                          },
                          children: [
                            Z,
                            Pe ? /* @__PURE__ */ Ne.jsx("span", { className: "codicon codicon-git-merge badge-pr-icon", title: "Pull request" }) : null,
                            Pe ? null : /* @__PURE__ */ Ne.jsx("span", { className: "codicon codicon-cloud badge-cloud-icon", title: "Remote" })
                          ]
                        },
                        Z
                      );
                    })
                  ] }),
                  /* @__PURE__ */ Ne.jsx("span", { className: "change-actions", children: /* @__PURE__ */ Ne.jsx(
                    "button",
                    {
                      className: "icon-button small",
                      onClick: (Z) => {
                        Z.stopPropagation(), hn("newChangeFrom", { changeId: L.changeId });
                      },
                      children: /* @__PURE__ */ Ne.jsx("span", { className: "codicon codicon-add" })
                    }
                  ) })
                ]
              }
            ),
            M && Be.length > 0 ? /* @__PURE__ */ Ne.jsx("div", { className: "files", children: Me ? (() => {
              const Z = yk(Me);
              return /* @__PURE__ */ Ne.jsxs(Ne.Fragment, { children: [
                /* @__PURE__ */ Ne.jsx(
                  "div",
                  {
                    className: "files-gutter",
                    style: { width: Z.width },
                    dangerouslySetInnerHTML: { __html: Z.svg }
                  }
                ),
                /* @__PURE__ */ Ne.jsx("div", { className: "files-list", style: { marginLeft: `${Z.width + 6}px` }, children: Be.map((ye) => /* @__PURE__ */ Ne.jsxs(
                  "div",
                  {
                    className: "file",
                    draggable: !0,
                    title: "Drag to move to another change",
                    onDragStart: (Pe) => Y(Pe, { type: "file", filePath: ye.path, fromChangeId: L.changeId }),
                    children: [
                      /* @__PURE__ */ Ne.jsx("span", { className: `file-icon ${ye.status}`, children: /* @__PURE__ */ Ne.jsx("span", { className: `codicon ${dT(ye.status)}` }) }),
                      /* @__PURE__ */ Ne.jsx(
                        "span",
                        {
                          className: "file-path",
                          onClick: (Pe) => {
                            Pe.stopPropagation(), hn("openDiff", { path: ye.path, revision: J ? void 0 : L.commitIdShort });
                          },
                          children: ye.path
                        }
                      ),
                      /* @__PURE__ */ Ne.jsx(
                        "button",
                        {
                          className: "icon-button small",
                          title: "Open File",
                          onClick: (Pe) => {
                            Pe.stopPropagation(), hn("openFile", { path: ye.path });
                          },
                          children: /* @__PURE__ */ Ne.jsx("span", { className: "codicon codicon-go-to-file" })
                        }
                      )
                    ]
                  },
                  ye.path
                )) })
              ] });
            })() : /* @__PURE__ */ Ne.jsx("div", { className: "files-list", children: Be.map((Z) => /* @__PURE__ */ Ne.jsxs(
              "div",
              {
                className: "file",
                draggable: !0,
                title: "Drag to move to another change",
                onDragStart: (ye) => Y(ye, { type: "file", filePath: Z.path, fromChangeId: L.changeId }),
                children: [
                  /* @__PURE__ */ Ne.jsx("span", { className: `file-icon ${Z.status}`, children: /* @__PURE__ */ Ne.jsx("span", { className: `codicon ${dT(Z.status)}` }) }),
                  /* @__PURE__ */ Ne.jsx(
                    "span",
                    {
                      className: "file-path",
                      onClick: (ye) => {
                        ye.stopPropagation(), hn("openDiff", { path: Z.path, revision: J ? void 0 : L.commitIdShort });
                      },
                      children: Z.path
                    }
                  ),
                  /* @__PURE__ */ Ne.jsx(
                    "button",
                    {
                      className: "icon-button small",
                      title: "Open File",
                      onClick: (ye) => {
                        ye.stopPropagation(), hn("openFile", { path: Z.path });
                      },
                      children: /* @__PURE__ */ Ne.jsx("span", { className: "codicon codicon-go-to-file" })
                    }
                  )
                ]
              },
              Z.path
            )) }) }) : null
          ]
        },
        L.commitId
      );
    }),
    /* @__PURE__ */ Ne.jsxs(
      "div",
      {
        id: "context-menu",
        className: "context-menu",
        onClick: me,
        children: [
          /* @__PURE__ */ Ne.jsx("div", { className: "context-menu-item menu-change", "data-action": "edit-change", children: "Edit Change" }),
          /* @__PURE__ */ Ne.jsx("div", { className: "context-menu-separator menu-change" }),
          /* @__PURE__ */ Ne.jsx("div", { className: "context-menu-item menu-change", "data-action": "new-change-from", children: "New Change" }),
          /* @__PURE__ */ Ne.jsx("div", { className: "context-menu-item menu-change", "data-action": "describe-change", children: "Describe Change" }),
          /* @__PURE__ */ Ne.jsx("div", { className: "context-menu-item menu-change", "data-action": "manage-bookmarks", children: "Manage Bookmarks" }),
          /* @__PURE__ */ Ne.jsx("div", { className: "context-menu-item menu-change", "data-action": "squash-change", children: "Squash into Parent" }),
          /* @__PURE__ */ Ne.jsx("div", { className: "context-menu-item menu-change", "data-action": "copy-change-id", children: "Copy Change ID" }),
          /* @__PURE__ */ Ne.jsx("div", { className: "context-menu-separator menu-change" }),
          /* @__PURE__ */ Ne.jsx("div", { className: "context-menu-item danger menu-change", "data-action": "abandon-change", children: "Abandon Change" }),
          /* @__PURE__ */ Ne.jsx("div", { className: "context-menu-item menu-bookmark", "data-action": "push-bookmark", children: "Push to Remote" }),
          /* @__PURE__ */ Ne.jsx("div", { className: "context-menu-separator menu-bookmark" }),
          /* @__PURE__ */ Ne.jsx("div", { className: "context-menu-item menu-bookmark", "data-action": "create-pull-request", children: "Create Pull Request" }),
          /* @__PURE__ */ Ne.jsx("div", { className: "context-menu-item menu-bookmark", "data-action": "push-and-create-pr", children: "Push and Create PR" }),
          /* @__PURE__ */ Ne.jsx("div", { className: "context-menu-item menu-bookmark", "data-action": "copy-bookmark-name", children: "Copy Bookmark Name" }),
          /* @__PURE__ */ Ne.jsx("div", { className: "context-menu-separator menu-bookmark" }),
          /* @__PURE__ */ Ne.jsx("div", { className: "context-menu-item danger menu-bookmark", "data-action": "delete-bookmark", children: "Delete Bookmark" })
        ]
      }
    )
  ] }) : /* @__PURE__ */ Ne.jsxs("div", { className: "empty", children: [
    /* @__PURE__ */ Ne.jsx("div", { children: "No JJ repository found." }),
    /* @__PURE__ */ Ne.jsxs("div", { style: { marginTop: "8px" }, children: [
      /* @__PURE__ */ Ne.jsx("button", { className: "describe-btn", onClick: () => hn("init"), children: "Initialize Repository" }),
      /* @__PURE__ */ Ne.jsx("button", { className: "describe-btn", style: { marginLeft: "8px" }, onClick: () => hn("initWithGit"), children: "Initialize with Git Backend" })
    ] })
  ] });
}
function dT(Q) {
  switch (Q) {
    case "added":
      return "codicon-diff-added";
    case "modified":
      return "codicon-diff-modified";
    case "deleted":
      return "codicon-diff-removed";
    case "renamed":
      return "codicon-diff-renamed";
    case "copied":
      return "codicon-copy";
    case "conflict":
      return "codicon-warning";
    default:
      return "codicon-diff-modified";
  }
}
const mT = document.getElementById("root");
if (!mT)
  throw new Error("Missing root element");
y0(mT).render(/* @__PURE__ */ Ne.jsx(gk, {}));
//# sourceMappingURL=webview.js.map
