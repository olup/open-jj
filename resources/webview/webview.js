var hE = { exports: {} }, Jp = {}, Qm = { exports: {} }, Nt = {};
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
function r1() {
  if (eT) return Nt;
  eT = 1;
  var W = Symbol.for("react.element"), re = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), ye = Symbol.for("react.strict_mode"), Ke = Symbol.for("react.profiler"), ct = Symbol.for("react.provider"), lt = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), ge = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), Ne = Symbol.iterator;
  function k(w) {
    return w === null || typeof w != "object" ? null : (w = Ne && w[Ne] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var Q = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, j = Object.assign, Z = {};
  function De(w, B, Te) {
    this.props = w, this.context = B, this.refs = Z, this.updater = Te || Q;
  }
  De.prototype.isReactComponent = {}, De.prototype.setState = function(w, B) {
    if (typeof w != "object" && typeof w != "function" && w != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, w, B, "setState");
  }, De.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function ht() {
  }
  ht.prototype = De.prototype;
  function We(w, B, Te) {
    this.props = w, this.context = B, this.refs = Z, this.updater = Te || Q;
  }
  var ft = We.prototype = new ht();
  ft.constructor = We, j(ft, De.prototype), ft.isPureReactComponent = !0;
  var He = Array.isArray, ut = Object.prototype.hasOwnProperty, be = { current: null }, ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function me(w, B, Te) {
    var Je, tt = {}, St = null, Lt = null;
    if (B != null) for (Je in B.ref !== void 0 && (Lt = B.ref), B.key !== void 0 && (St = "" + B.key), B) ut.call(B, Je) && !ee.hasOwnProperty(Je) && (tt[Je] = B[Je]);
    var at = arguments.length - 2;
    if (at === 1) tt.children = Te;
    else if (1 < at) {
      for (var Dt = Array(at), Wt = 0; Wt < at; Wt++) Dt[Wt] = arguments[Wt + 2];
      tt.children = Dt;
    }
    if (w && w.defaultProps) for (Je in at = w.defaultProps, at) tt[Je] === void 0 && (tt[Je] = at[Je]);
    return { $$typeof: W, type: w, key: St, ref: Lt, props: tt, _owner: be.current };
  }
  function Pe(w, B) {
    return { $$typeof: W, type: w.type, key: B, ref: w.ref, props: w.props, _owner: w._owner };
  }
  function Xe(w) {
    return typeof w == "object" && w !== null && w.$$typeof === W;
  }
  function _t(w) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(Te) {
      return B[Te];
    });
  }
  var Ye = /\/+/g;
  function dt(w, B) {
    return typeof w == "object" && w !== null && w.key != null ? _t("" + w.key) : B.toString(36);
  }
  function Le(w, B, Te, Je, tt) {
    var St = typeof w;
    (St === "undefined" || St === "boolean") && (w = null);
    var Lt = !1;
    if (w === null) Lt = !0;
    else switch (St) {
      case "string":
      case "number":
        Lt = !0;
        break;
      case "object":
        switch (w.$$typeof) {
          case W:
          case re:
            Lt = !0;
        }
    }
    if (Lt) return Lt = w, tt = tt(Lt), w = Je === "" ? "." + dt(Lt, 0) : Je, He(tt) ? (Te = "", w != null && (Te = w.replace(Ye, "$&/") + "/"), Le(tt, B, Te, "", function(Wt) {
      return Wt;
    })) : tt != null && (Xe(tt) && (tt = Pe(tt, Te + (!tt.key || Lt && Lt.key === tt.key ? "" : ("" + tt.key).replace(Ye, "$&/") + "/") + w)), B.push(tt)), 1;
    if (Lt = 0, Je = Je === "" ? "." : Je + ":", He(w)) for (var at = 0; at < w.length; at++) {
      St = w[at];
      var Dt = Je + dt(St, at);
      Lt += Le(St, B, Te, Dt, tt);
    }
    else if (Dt = k(w), typeof Dt == "function") for (w = Dt.call(w), at = 0; !(St = w.next()).done; ) St = St.value, Dt = Je + dt(St, at++), Lt += Le(St, B, Te, Dt, tt);
    else if (St === "object") throw B = String(w), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return Lt;
  }
  function kt(w, B, Te) {
    if (w == null) return w;
    var Je = [], tt = 0;
    return Le(w, Je, "", "", function(St) {
      return B.call(Te, St, tt++);
    }), Je;
  }
  function ae(w) {
    if (w._status === -1) {
      var B = w._result;
      B = B(), B.then(function(Te) {
        (w._status === 0 || w._status === -1) && (w._status = 1, w._result = Te);
      }, function(Te) {
        (w._status === 0 || w._status === -1) && (w._status = 2, w._result = Te);
      }), w._status === -1 && (w._status = 0, w._result = B);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var Ve = { current: null }, $ = { transition: null }, se = { ReactCurrentDispatcher: Ve, ReactCurrentBatchConfig: $, ReactCurrentOwner: be };
  function ie() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Nt.Children = { map: kt, forEach: function(w, B, Te) {
    kt(w, function() {
      B.apply(this, arguments);
    }, Te);
  }, count: function(w) {
    var B = 0;
    return kt(w, function() {
      B++;
    }), B;
  }, toArray: function(w) {
    return kt(w, function(B) {
      return B;
    }) || [];
  }, only: function(w) {
    if (!Xe(w)) throw Error("React.Children.only expected to receive a single React element child.");
    return w;
  } }, Nt.Component = De, Nt.Fragment = F, Nt.Profiler = Ke, Nt.PureComponent = We, Nt.StrictMode = ye, Nt.Suspense = Ie, Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se, Nt.act = ie, Nt.cloneElement = function(w, B, Te) {
    if (w == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
    var Je = j({}, w.props), tt = w.key, St = w.ref, Lt = w._owner;
    if (B != null) {
      if (B.ref !== void 0 && (St = B.ref, Lt = be.current), B.key !== void 0 && (tt = "" + B.key), w.type && w.type.defaultProps) var at = w.type.defaultProps;
      for (Dt in B) ut.call(B, Dt) && !ee.hasOwnProperty(Dt) && (Je[Dt] = B[Dt] === void 0 && at !== void 0 ? at[Dt] : B[Dt]);
    }
    var Dt = arguments.length - 2;
    if (Dt === 1) Je.children = Te;
    else if (1 < Dt) {
      at = Array(Dt);
      for (var Wt = 0; Wt < Dt; Wt++) at[Wt] = arguments[Wt + 2];
      Je.children = at;
    }
    return { $$typeof: W, type: w.type, key: tt, ref: St, props: Je, _owner: Lt };
  }, Nt.createContext = function(w) {
    return w = { $$typeof: lt, _currentValue: w, _currentValue2: w, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, w.Provider = { $$typeof: ct, _context: w }, w.Consumer = w;
  }, Nt.createElement = me, Nt.createFactory = function(w) {
    var B = me.bind(null, w);
    return B.type = w, B;
  }, Nt.createRef = function() {
    return { current: null };
  }, Nt.forwardRef = function(w) {
    return { $$typeof: S, render: w };
  }, Nt.isValidElement = Xe, Nt.lazy = function(w) {
    return { $$typeof: ue, _payload: { _status: -1, _result: w }, _init: ae };
  }, Nt.memo = function(w, B) {
    return { $$typeof: ge, type: w, compare: B === void 0 ? null : B };
  }, Nt.startTransition = function(w) {
    var B = $.transition;
    $.transition = {};
    try {
      w();
    } finally {
      $.transition = B;
    }
  }, Nt.unstable_act = ie, Nt.useCallback = function(w, B) {
    return Ve.current.useCallback(w, B);
  }, Nt.useContext = function(w) {
    return Ve.current.useContext(w);
  }, Nt.useDebugValue = function() {
  }, Nt.useDeferredValue = function(w) {
    return Ve.current.useDeferredValue(w);
  }, Nt.useEffect = function(w, B) {
    return Ve.current.useEffect(w, B);
  }, Nt.useId = function() {
    return Ve.current.useId();
  }, Nt.useImperativeHandle = function(w, B, Te) {
    return Ve.current.useImperativeHandle(w, B, Te);
  }, Nt.useInsertionEffect = function(w, B) {
    return Ve.current.useInsertionEffect(w, B);
  }, Nt.useLayoutEffect = function(w, B) {
    return Ve.current.useLayoutEffect(w, B);
  }, Nt.useMemo = function(w, B) {
    return Ve.current.useMemo(w, B);
  }, Nt.useReducer = function(w, B, Te) {
    return Ve.current.useReducer(w, B, Te);
  }, Nt.useRef = function(w) {
    return Ve.current.useRef(w);
  }, Nt.useState = function(w) {
    return Ve.current.useState(w);
  }, Nt.useSyncExternalStore = function(w, B, Te) {
    return Ve.current.useSyncExternalStore(w, B, Te);
  }, Nt.useTransition = function() {
    return Ve.current.useTransition();
  }, Nt.version = "18.3.1", Nt;
}
var ev = { exports: {} };
ev.exports;
var tT;
function a1() {
  return tT || (tT = 1, function(W, re) {
    var F = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    F.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var ye = "18.3.1", Ke = Symbol.for("react.element"), ct = Symbol.for("react.portal"), lt = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Ie = Symbol.for("react.profiler"), ge = Symbol.for("react.provider"), ue = Symbol.for("react.context"), Ne = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), De = Symbol.for("react.offscreen"), ht = Symbol.iterator, We = "@@iterator";
      function ft(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = ht && h[ht] || h[We];
        return typeof C == "function" ? C : null;
      }
      var He = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ut = {
        transition: null
      }, be = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, me = {}, Pe = null;
      function Xe(h) {
        Pe = h;
      }
      me.setExtraStackFrame = function(h) {
        Pe = h;
      }, me.getCurrentStack = null, me.getStackAddendum = function() {
        var h = "";
        Pe && (h += Pe);
        var C = me.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var _t = !1, Ye = !1, dt = !1, Le = !1, kt = !1, ae = {
        ReactCurrentDispatcher: He,
        ReactCurrentBatchConfig: ut,
        ReactCurrentOwner: ee
      };
      ae.ReactDebugCurrentFrame = me, ae.ReactCurrentActQueue = be;
      function Ve(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            M[H - 1] = arguments[H];
          se("warn", h, M);
        }
      }
      function $(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            M[H - 1] = arguments[H];
          se("error", h, M);
        }
      }
      function se(h, C, M) {
        {
          var H = ae.ReactDebugCurrentFrame, ne = H.getStackAddendum();
          ne !== "" && (C += "%s", M = M.concat([ne]));
          var we = M.map(function(Se) {
            return String(Se);
          });
          we.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, we);
        }
      }
      var ie = {};
      function w(h, C) {
        {
          var M = h.constructor, H = M && (M.displayName || M.name) || "ReactClass", ne = H + "." + C;
          if (ie[ne])
            return;
          $("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, H), ie[ne] = !0;
        }
      }
      var B = {
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
        enqueueForceUpdate: function(h, C, M) {
          w(h, "forceUpdate");
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
        enqueueReplaceState: function(h, C, M, H) {
          w(h, "replaceState");
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
        enqueueSetState: function(h, C, M, H) {
          w(h, "setState");
        }
      }, Te = Object.assign, Je = {};
      Object.freeze(Je);
      function tt(h, C, M) {
        this.props = h, this.context = C, this.refs = Je, this.updater = M || B;
      }
      tt.prototype.isReactComponent = {}, tt.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, tt.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var St = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Lt = function(h, C) {
          Object.defineProperty(tt.prototype, h, {
            get: function() {
              Ve("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var at in St)
          St.hasOwnProperty(at) && Lt(at, St[at]);
      }
      function Dt() {
      }
      Dt.prototype = tt.prototype;
      function Wt(h, C, M) {
        this.props = h, this.context = C, this.refs = Je, this.updater = M || B;
      }
      var Ln = Wt.prototype = new Dt();
      Ln.constructor = Wt, Te(Ln, tt.prototype), Ln.isPureReactComponent = !0;
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
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
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
          return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(h)), zn(h);
      }
      function Ga(h, C, M) {
        var H = h.displayName;
        if (H)
          return H;
        var ne = C.displayName || C.name || "";
        return ne !== "" ? M + "(" + ne + ")" : M;
      }
      function Or(h) {
        return h.displayName || "Context";
      }
      function $n(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case lt:
            return "Fragment";
          case ct:
            return "Portal";
          case Ie:
            return "Profiler";
          case S:
            return "StrictMode";
          case k:
            return "Suspense";
          case Q:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ue:
              var C = h;
              return Or(C) + ".Consumer";
            case ge:
              var M = h;
              return Or(M._context) + ".Provider";
            case Ne:
              return Ga(h, h.render, "ForwardRef");
            case j:
              var H = h.displayName || null;
              return H !== null ? H : $n(h.type) || "Memo";
            case Z: {
              var ne = h, we = ne._payload, Se = ne._init;
              try {
                return $n(Se(we));
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
      }, Rr, qa, Un;
      Un = {};
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
      function Li(h, C) {
        var M = function() {
          Rr || (Rr = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function pa(h, C) {
        var M = function() {
          qa || (qa = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function le(h) {
        if (typeof h.ref == "string" && ee.current && h.__self && ee.current.stateNode !== h.__self) {
          var C = $n(ee.current.type);
          Un[C] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Un[C] = !0);
        }
      }
      var je = function(h, C, M, H, ne, we, Se) {
        var Ge = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ke,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: Se,
          // Record the component responsible for creating this element.
          _owner: we
        };
        return Ge._store = {}, Object.defineProperty(Ge._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ge, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: H
        }), Object.defineProperty(Ge, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ne
        }), Object.freeze && (Object.freeze(Ge.props), Object.freeze(Ge)), Ge;
      };
      function mt(h, C, M) {
        var H, ne = {}, we = null, Se = null, Ge = null, gt = null;
        if (C != null) {
          lr(C) && (Se = C.ref, le(C)), Wr(C) && (da(C.key), we = "" + C.key), Ge = C.__self === void 0 ? null : C.__self, gt = C.__source === void 0 ? null : C.__source;
          for (H in C)
            Kn.call(C, H) && !Xn.hasOwnProperty(H) && (ne[H] = C[H]);
        }
        var $t = arguments.length - 2;
        if ($t === 1)
          ne.children = M;
        else if ($t > 1) {
          for (var Jt = Array($t), Zt = 0; Zt < $t; Zt++)
            Jt[Zt] = arguments[Zt + 2];
          Object.freeze && Object.freeze(Jt), ne.children = Jt;
        }
        if (h && h.defaultProps) {
          var pt = h.defaultProps;
          for (H in pt)
            ne[H] === void 0 && (ne[H] = pt[H]);
        }
        if (we || Se) {
          var rn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          we && Li(ne, rn), Se && pa(ne, rn);
        }
        return je(h, we, Se, Ge, gt, ee.current, ne);
      }
      function Pt(h, C) {
        var M = je(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function sn(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var H, ne = Te({}, h.props), we = h.key, Se = h.ref, Ge = h._self, gt = h._source, $t = h._owner;
        if (C != null) {
          lr(C) && (Se = C.ref, $t = ee.current), Wr(C) && (da(C.key), we = "" + C.key);
          var Jt;
          h.type && h.type.defaultProps && (Jt = h.type.defaultProps);
          for (H in C)
            Kn.call(C, H) && !Xn.hasOwnProperty(H) && (C[H] === void 0 && Jt !== void 0 ? ne[H] = Jt[H] : ne[H] = C[H]);
        }
        var Zt = arguments.length - 2;
        if (Zt === 1)
          ne.children = M;
        else if (Zt > 1) {
          for (var pt = Array(Zt), rn = 0; rn < Zt; rn++)
            pt[rn] = arguments[rn + 2];
          ne.children = pt;
        }
        return je(h.type, we, Se, Ge, gt, $t, ne);
      }
      function cn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ke;
      }
      var fn = ".", Jn = ":";
      function un(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, H = h.replace(C, function(ne) {
          return M[ne];
        });
        return "$" + H;
      }
      var Kt = !1, Vt = /\/+/g;
      function va(h) {
        return h.replace(Vt, "$&/");
      }
      function ka(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (da(h.key), un("" + h.key)) : C.toString(36);
      }
      function Da(h, C, M, H, ne) {
        var we = typeof h;
        (we === "undefined" || we === "boolean") && (h = null);
        var Se = !1;
        if (h === null)
          Se = !0;
        else
          switch (we) {
            case "string":
            case "number":
              Se = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Ke:
                case ct:
                  Se = !0;
              }
          }
        if (Se) {
          var Ge = h, gt = ne(Ge), $t = H === "" ? fn + ka(Ge, 0) : H;
          if (Mn(gt)) {
            var Jt = "";
            $t != null && (Jt = va($t) + "/"), Da(gt, C, Jt, "", function(Zf) {
              return Zf;
            });
          } else gt != null && (cn(gt) && (gt.key && (!Ge || Ge.key !== gt.key) && da(gt.key), gt = Pt(
            gt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (gt.key && (!Ge || Ge.key !== gt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              va("" + gt.key) + "/"
            ) : "") + $t
          )), C.push(gt));
          return 1;
        }
        var Zt, pt, rn = 0, bn = H === "" ? fn : H + Jn;
        if (Mn(h))
          for (var eu = 0; eu < h.length; eu++)
            Zt = h[eu], pt = bn + ka(Zt, eu), rn += Da(Zt, C, M, pt, ne);
        else {
          var qo = ft(h);
          if (typeof qo == "function") {
            var Bi = h;
            qo === Bi.entries && (Kt || Ve("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Kt = !0);
            for (var tu = qo.call(Bi), Ko, Jf = 0; !(Ko = tu.next()).done; )
              Zt = Ko.value, pt = bn + ka(Zt, Jf++), rn += Da(Zt, C, M, pt, ne);
          } else if (we === "object") {
            var cc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (cc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : cc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return rn;
      }
      function Mi(h, C, M) {
        if (h == null)
          return h;
        var H = [], ne = 0;
        return Da(h, H, "", "", function(we) {
          return C.call(M, we, ne++);
        }), H;
      }
      function Wl(h) {
        var C = 0;
        return Mi(h, function() {
          C++;
        }), C;
      }
      function Ql(h, C, M) {
        Mi(h, function() {
          C.apply(this, arguments);
        }, M);
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
          $$typeof: ue,
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
          $$typeof: ge,
          _context: C
        };
        var M = !1, H = !1, ne = !1;
        {
          var we = {
            $$typeof: ue,
            _context: C
          };
          Object.defineProperties(we, {
            Provider: {
              get: function() {
                return H || (H = !0, $("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
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
                return M || (M = !0, $("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(Se) {
                ne || (Ve("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Se), ne = !0);
              }
            }
          }), C.Consumer = we;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var ha = -1, ur = 0, ma = 1, Qr = 2;
      function ci(h) {
        if (h._status === ha) {
          var C = h._result, M = C();
          if (M.then(function(we) {
            if (h._status === ur || h._status === ha) {
              var Se = h;
              Se._status = ma, Se._result = we;
            }
          }, function(we) {
            if (h._status === ur || h._status === ha) {
              var Se = h;
              Se._status = Qr, Se._result = we;
            }
          }), h._status === ha) {
            var H = h;
            H._status = ur, H._result = M;
          }
        }
        if (h._status === ma) {
          var ne = h._result;
          return ne === void 0 && $(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ne), "default" in ne || $(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ne), ne.default;
        } else
          throw h._result;
      }
      function fi(h) {
        var C = {
          // We use these fields to store the result.
          _status: ha,
          _result: h
        }, M = {
          $$typeof: Z,
          _payload: C,
          _init: ci
        };
        {
          var H, ne;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return H;
              },
              set: function(we) {
                $("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), H = we, Object.defineProperty(M, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ne;
              },
              set: function(we) {
                $("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ne = we, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function Ui(h) {
        h != null && h.$$typeof === j ? $("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? $("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && $("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && $("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Ne,
          render: h
        };
        {
          var M;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return M;
            },
            set: function(H) {
              M = H, !h.name && !h.displayName && (h.displayName = H);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function G(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === lt || h === Ie || kt || h === S || h === k || h === Q || Le || h === De || _t || Ye || dt || typeof h == "object" && h !== null && (h.$$typeof === Z || h.$$typeof === j || h.$$typeof === ge || h.$$typeof === ue || h.$$typeof === Ne || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function fe(h, C) {
        G(h) || $("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: j,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var H;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(ne) {
              H = ne, !h.name && !h.displayName && (h.displayName = ne);
            }
          });
        }
        return M;
      }
      function pe() {
        var h = He.current;
        return h === null && $(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ct(h) {
        var C = pe();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? $("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && $("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function nt(h) {
        var C = pe();
        return C.useState(h);
      }
      function Tt(h, C, M) {
        var H = pe();
        return H.useReducer(h, C, M);
      }
      function yt(h) {
        var C = pe();
        return C.useRef(h);
      }
      function wn(h, C) {
        var M = pe();
        return M.useEffect(h, C);
      }
      function on(h, C) {
        var M = pe();
        return M.useInsertionEffect(h, C);
      }
      function dn(h, C) {
        var M = pe();
        return M.useLayoutEffect(h, C);
      }
      function Tr(h, C) {
        var M = pe();
        return M.useCallback(h, C);
      }
      function Ka(h, C) {
        var M = pe();
        return M.useMemo(h, C);
      }
      function Bt(h, C, M) {
        var H = pe();
        return H.useImperativeHandle(h, C, M);
      }
      function mn(h, C) {
        {
          var M = pe();
          return M.useDebugValue(h, C);
        }
      }
      function ot() {
        var h = pe();
        return h.useTransition();
      }
      function di(h) {
        var C = pe();
        return C.useDeferredValue(h);
      }
      function Ai() {
        var h = pe();
        return h.useId();
      }
      function lc(h, C, M) {
        var H = pe();
        return H.useSyncExternalStore(h, C, M);
      }
      var Fi = 0, ol, Gr, $o, Nr, Yo, uc, oc;
      function ji() {
      }
      ji.__reactDisabledLog = !0;
      function sl() {
        {
          if (Fi === 0) {
            ol = console.log, Gr = console.info, $o = console.warn, Nr = console.error, Yo = console.group, uc = console.groupCollapsed, oc = console.groupEnd;
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
              log: Te({}, h, {
                value: ol
              }),
              info: Te({}, h, {
                value: Gr
              }),
              warn: Te({}, h, {
                value: $o
              }),
              error: Te({}, h, {
                value: Nr
              }),
              group: Te({}, h, {
                value: Yo
              }),
              groupCollapsed: Te({}, h, {
                value: uc
              }),
              groupEnd: Te({}, h, {
                value: oc
              })
            });
          }
          Fi < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var pi = ae.ReactCurrentDispatcher, cl;
      function Hu(h, C, M) {
        {
          if (cl === void 0)
            try {
              throw Error();
            } catch (ne) {
              var H = ne.stack.trim().match(/\n( *(at )?)/);
              cl = H && H[1] || "";
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
          var M = ql.get(h);
          if (M !== void 0)
            return M;
        }
        var H;
        Hi = !0;
        var ne = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var we;
        we = pi.current, pi.current = null, sl();
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
                H = bn;
              }
              Reflect.construct(h, [], Se);
            } else {
              try {
                Se.call();
              } catch (bn) {
                H = bn;
              }
              h.call(Se.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (bn) {
              H = bn;
            }
            h();
          }
        } catch (bn) {
          if (bn && H && typeof bn.stack == "string") {
            for (var Ge = bn.stack.split(`
`), gt = H.stack.split(`
`), $t = Ge.length - 1, Jt = gt.length - 1; $t >= 1 && Jt >= 0 && Ge[$t] !== gt[Jt]; )
              Jt--;
            for (; $t >= 1 && Jt >= 0; $t--, Jt--)
              if (Ge[$t] !== gt[Jt]) {
                if ($t !== 1 || Jt !== 1)
                  do
                    if ($t--, Jt--, Jt < 0 || Ge[$t] !== gt[Jt]) {
                      var Zt = `
` + Ge[$t].replace(" at new ", " at ");
                      return h.displayName && Zt.includes("<anonymous>") && (Zt = Zt.replace("<anonymous>", h.displayName)), typeof h == "function" && ql.set(h, Zt), Zt;
                    }
                  while ($t >= 1 && Jt >= 0);
                break;
              }
          }
        } finally {
          Hi = !1, pi.current = we, qr(), Error.prepareStackTrace = ne;
        }
        var pt = h ? h.displayName || h.name : "", rn = pt ? Hu(pt) : "";
        return typeof h == "function" && ql.set(h, rn), rn;
      }
      function Io(h, C, M) {
        return fl(h, !1);
      }
      function Wo(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Mt(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return fl(h, Wo(h));
        if (typeof h == "string")
          return Hu(h);
        switch (h) {
          case k:
            return Hu("Suspense");
          case Q:
            return Hu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Ne:
              return Io(h.render);
            case j:
              return Mt(h.type, C, M);
            case Z: {
              var H = h, ne = H._payload, we = H._init;
              try {
                return Mt(we(ne), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var Qo = {}, Pu = ae.ReactDebugCurrentFrame;
      function zt(h) {
        if (h) {
          var C = h._owner, M = Mt(h.type, h._source, C ? C.type : null);
          Pu.setExtraStackFrame(M);
        } else
          Pu.setExtraStackFrame(null);
      }
      function sc(h, C, M, H, ne) {
        {
          var we = Function.call.bind(Kn);
          for (var Se in h)
            if (we(h, Se)) {
              var Ge = void 0;
              try {
                if (typeof h[Se] != "function") {
                  var gt = Error((H || "React class") + ": " + M + " type `" + Se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[Se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw gt.name = "Invariant Violation", gt;
                }
                Ge = h[Se](C, Se, H, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch ($t) {
                Ge = $t;
              }
              Ge && !(Ge instanceof Error) && (zt(ne), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", M, Se, typeof Ge), zt(null)), Ge instanceof Error && !(Ge.message in Qo) && (Qo[Ge.message] = !0, zt(ne), $("Failed %s type: %s", M, Ge.message), zt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var C = h._owner, M = Mt(h.type, h._source, C ? C.type : null);
          Xe(M);
        } else
          Xe(null);
      }
      var Ze;
      Ze = !1;
      function Xl() {
        if (ee.current) {
          var h = $n(ee.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Zn(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
      function Kr(h) {
        return h != null ? Zn(h.__source) : "";
      }
      var Lr = {};
      function hi(h) {
        var C = Xl();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function Cn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = hi(C);
          if (!Lr[M]) {
            Lr[M] = !0;
            var H = "";
            h && h._owner && h._owner !== ee.current && (H = " It was passed a child from " + $n(h._owner.type) + "."), vi(h), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, H), vi(null);
          }
        }
      }
      function Xt(h, C) {
        if (typeof h == "object") {
          if (Mn(h))
            for (var M = 0; M < h.length; M++) {
              var H = h[M];
              cn(H) && Cn(H, C);
            }
          else if (cn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var ne = ft(h);
            if (typeof ne == "function" && ne !== h.entries)
              for (var we = ne.call(h), Se; !(Se = we.next()).done; )
                cn(Se.value) && Cn(Se.value, C);
          }
        }
      }
      function Xa(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Ne || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === j))
            M = C.propTypes;
          else
            return;
          if (M) {
            var H = $n(C);
            sc(M, h.props, "prop", H, h);
          } else if (C.PropTypes !== void 0 && !Ze) {
            Ze = !0;
            var ne = $n(C);
            $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ne || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Oa(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var H = C[M];
            if (H !== "children" && H !== "key") {
              vi(h), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), $("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function xr(h, C, M) {
        var H = G(h);
        if (!H) {
          var ne = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var we = Kr(C);
          we ? ne += we : ne += Xl();
          var Se;
          h === null ? Se = "null" : Mn(h) ? Se = "array" : h !== void 0 && h.$$typeof === Ke ? (Se = "<" + ($n(h.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof h, $("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, ne);
        }
        var Ge = mt.apply(this, arguments);
        if (Ge == null)
          return Ge;
        if (H)
          for (var gt = 2; gt < arguments.length; gt++)
            Xt(arguments[gt], h);
        return h === lt ? Oa(Ge) : Xa(Ge), Ge;
      }
      var Mr = !1;
      function Xf(h) {
        var C = xr.bind(null, h);
        return C.type = h, Mr || (Mr = !0, Ve("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Ve("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Vu(h, C, M) {
        for (var H = sn.apply(this, arguments), ne = 2; ne < arguments.length; ne++)
          Xt(arguments[ne], H.type);
        return Xa(H), H;
      }
      function Jl(h, C) {
        var M = ut.transition;
        ut.transition = {};
        var H = ut.transition;
        ut.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ut.transition = M, M === null && H._updatedFibers) {
            var ne = H._updatedFibers.size;
            ne > 10 && Ve("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), H._updatedFibers.clear();
          }
        }
      }
      var Bu = !1, $u = null;
      function Zl(h) {
        if ($u === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = W && W[C];
            $u = M.call(W, "timers").setImmediate;
          } catch {
            $u = function(ne) {
              Bu === !1 && (Bu = !0, typeof MessageChannel > "u" && $("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var we = new MessageChannel();
              we.port1.onmessage = ne, we.port2.postMessage(void 0);
            };
          }
        return $u(h);
      }
      var Na = 0, La = !1;
      function dl(h) {
        {
          var C = Na;
          Na++, be.current === null && (be.current = []);
          var M = be.isBatchingLegacy, H;
          try {
            if (be.isBatchingLegacy = !0, H = h(), !M && be.didScheduleLegacyUpdate) {
              var ne = be.current;
              ne !== null && (be.didScheduleLegacyUpdate = !1, Vi(ne));
            }
          } catch (pt) {
            throw Pi(C), pt;
          } finally {
            be.isBatchingLegacy = M;
          }
          if (H !== null && typeof H == "object" && typeof H.then == "function") {
            var we = H, Se = !1, Ge = {
              then: function(pt, rn) {
                Se = !0, we.then(function(bn) {
                  Pi(C), Na === 0 ? Yu(bn, pt, rn) : pt(bn);
                }, function(bn) {
                  Pi(C), rn(bn);
                });
              }
            };
            return !La && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Se || (La = !0, $("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ge;
          } else {
            var gt = H;
            if (Pi(C), Na === 0) {
              var $t = be.current;
              $t !== null && (Vi($t), be.current = null);
              var Jt = {
                then: function(pt, rn) {
                  be.current === null ? (be.current = [], Yu(gt, pt, rn)) : pt(gt);
                }
              };
              return Jt;
            } else {
              var Zt = {
                then: function(pt, rn) {
                  pt(gt);
                }
              };
              return Zt;
            }
          }
        }
      }
      function Pi(h) {
        h !== Na - 1 && $("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Na = h;
      }
      function Yu(h, C, M) {
        {
          var H = be.current;
          if (H !== null)
            try {
              Vi(H), Zl(function() {
                H.length === 0 ? (be.current = null, C(h)) : Yu(h, C, M);
              });
            } catch (ne) {
              M(ne);
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
              var M = h[C];
              do
                M = M(!0);
              while (M !== null);
            }
            h.length = 0;
          } catch (H) {
            throw h = h.slice(C + 1), H;
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
      re.Children = Wu, re.Component = tt, re.Fragment = lt, re.Profiler = Ie, re.PureComponent = Wt, re.StrictMode = S, re.Suspense = k, re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, re.act = dl, re.cloneElement = Go, re.createContext = si, re.createElement = Iu, re.createFactory = Ma, re.createRef = qn, re.forwardRef = Ui, re.isValidElement = cn, re.lazy = fi, re.memo = fe, re.startTransition = Jl, re.unstable_act = dl, re.useCallback = Tr, re.useContext = Ct, re.useDebugValue = mn, re.useDeferredValue = di, re.useEffect = wn, re.useId = Ai, re.useImperativeHandle = Bt, re.useInsertionEffect = on, re.useLayoutEffect = dn, re.useMemo = Ka, re.useReducer = Tt, re.useRef = yt, re.useState = nt, re.useSyncExternalStore = lc, re.useTransition = ot, re.version = ye, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ev, ev.exports)), ev.exports;
}
var nT;
function tv() {
  if (nT) return Qm.exports;
  nT = 1;
  var W = {};
  return W.NODE_ENV === "production" ? Qm.exports = r1() : Qm.exports = a1(), Qm.exports;
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
function i1() {
  if (rT) return Jp;
  rT = 1;
  var W = tv(), re = Symbol.for("react.element"), F = Symbol.for("react.fragment"), ye = Object.prototype.hasOwnProperty, Ke = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ct = { key: !0, ref: !0, __self: !0, __source: !0 };
  function lt(S, Ie, ge) {
    var ue, Ne = {}, k = null, Q = null;
    ge !== void 0 && (k = "" + ge), Ie.key !== void 0 && (k = "" + Ie.key), Ie.ref !== void 0 && (Q = Ie.ref);
    for (ue in Ie) ye.call(Ie, ue) && !ct.hasOwnProperty(ue) && (Ne[ue] = Ie[ue]);
    if (S && S.defaultProps) for (ue in Ie = S.defaultProps, Ie) Ne[ue] === void 0 && (Ne[ue] = Ie[ue]);
    return { $$typeof: re, type: S, key: k, ref: Q, props: Ne, _owner: Ke.current };
  }
  return Jp.Fragment = F, Jp.jsx = lt, Jp.jsxs = lt, Jp;
}
var Zp = {}, aT;
function l1() {
  if (aT) return Zp;
  aT = 1;
  var W = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return W.NODE_ENV !== "production" && function() {
    var re = tv(), F = Symbol.for("react.element"), ye = Symbol.for("react.portal"), Ke = Symbol.for("react.fragment"), ct = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Ie = Symbol.for("react.context"), ge = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), Ne = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), Q = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), Z = Symbol.iterator, De = "@@iterator";
    function ht(R) {
      if (R === null || typeof R != "object")
        return null;
      var G = Z && R[Z] || R[De];
      return typeof G == "function" ? G : null;
    }
    var We = re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ft(R) {
      {
        for (var G = arguments.length, fe = new Array(G > 1 ? G - 1 : 0), pe = 1; pe < G; pe++)
          fe[pe - 1] = arguments[pe];
        He("error", R, fe);
      }
    }
    function He(R, G, fe) {
      {
        var pe = We.ReactDebugCurrentFrame, Ct = pe.getStackAddendum();
        Ct !== "" && (G += "%s", fe = fe.concat([Ct]));
        var nt = fe.map(function(Tt) {
          return String(Tt);
        });
        nt.unshift("Warning: " + G), Function.prototype.apply.call(console[R], console, nt);
      }
    }
    var ut = !1, be = !1, ee = !1, me = !1, Pe = !1, Xe;
    Xe = Symbol.for("react.module.reference");
    function _t(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Ke || R === lt || Pe || R === ct || R === ue || R === Ne || me || R === j || ut || be || ee || typeof R == "object" && R !== null && (R.$$typeof === Q || R.$$typeof === k || R.$$typeof === S || R.$$typeof === Ie || R.$$typeof === ge || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Xe || R.getModuleId !== void 0));
    }
    function Ye(R, G, fe) {
      var pe = R.displayName;
      if (pe)
        return pe;
      var Ct = G.displayName || G.name || "";
      return Ct !== "" ? fe + "(" + Ct + ")" : fe;
    }
    function dt(R) {
      return R.displayName || "Context";
    }
    function Le(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && ft("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Ke:
          return "Fragment";
        case ye:
          return "Portal";
        case lt:
          return "Profiler";
        case ct:
          return "StrictMode";
        case ue:
          return "Suspense";
        case Ne:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Ie:
            var G = R;
            return dt(G) + ".Consumer";
          case S:
            var fe = R;
            return dt(fe._context) + ".Provider";
          case ge:
            return Ye(R, R.render, "ForwardRef");
          case k:
            var pe = R.displayName || null;
            return pe !== null ? pe : Le(R.type) || "Memo";
          case Q: {
            var Ct = R, nt = Ct._payload, Tt = Ct._init;
            try {
              return Le(Tt(nt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var kt = Object.assign, ae = 0, Ve, $, se, ie, w, B, Te;
    function Je() {
    }
    Je.__reactDisabledLog = !0;
    function tt() {
      {
        if (ae === 0) {
          Ve = console.log, $ = console.info, se = console.warn, ie = console.error, w = console.group, B = console.groupCollapsed, Te = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Je,
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
        ae++;
      }
    }
    function St() {
      {
        if (ae--, ae === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: kt({}, R, {
              value: Ve
            }),
            info: kt({}, R, {
              value: $
            }),
            warn: kt({}, R, {
              value: se
            }),
            error: kt({}, R, {
              value: ie
            }),
            group: kt({}, R, {
              value: w
            }),
            groupCollapsed: kt({}, R, {
              value: B
            }),
            groupEnd: kt({}, R, {
              value: Te
            })
          });
        }
        ae < 0 && ft("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Lt = We.ReactCurrentDispatcher, at;
    function Dt(R, G, fe) {
      {
        if (at === void 0)
          try {
            throw Error();
          } catch (Ct) {
            var pe = Ct.stack.trim().match(/\n( *(at )?)/);
            at = pe && pe[1] || "";
          }
        return `
` + at + R;
      }
    }
    var Wt = !1, Ln;
    {
      var qn = typeof WeakMap == "function" ? WeakMap : Map;
      Ln = new qn();
    }
    function ir(R, G) {
      if (!R || Wt)
        return "";
      {
        var fe = Ln.get(R);
        if (fe !== void 0)
          return fe;
      }
      var pe;
      Wt = !0;
      var Ct = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var nt;
      nt = Lt.current, Lt.current = null, tt();
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
              pe = mn;
            }
            Reflect.construct(R, [], Tt);
          } else {
            try {
              Tt.call();
            } catch (mn) {
              pe = mn;
            }
            R.call(Tt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (mn) {
            pe = mn;
          }
          R();
        }
      } catch (mn) {
        if (mn && pe && typeof mn.stack == "string") {
          for (var yt = mn.stack.split(`
`), wn = pe.stack.split(`
`), on = yt.length - 1, dn = wn.length - 1; on >= 1 && dn >= 0 && yt[on] !== wn[dn]; )
            dn--;
          for (; on >= 1 && dn >= 0; on--, dn--)
            if (yt[on] !== wn[dn]) {
              if (on !== 1 || dn !== 1)
                do
                  if (on--, dn--, dn < 0 || yt[on] !== wn[dn]) {
                    var Tr = `
` + yt[on].replace(" at new ", " at ");
                    return R.displayName && Tr.includes("<anonymous>") && (Tr = Tr.replace("<anonymous>", R.displayName)), typeof R == "function" && Ln.set(R, Tr), Tr;
                  }
                while (on >= 1 && dn >= 0);
              break;
            }
        }
      } finally {
        Wt = !1, Lt.current = nt, St(), Error.prepareStackTrace = Ct;
      }
      var Ka = R ? R.displayName || R.name : "", Bt = Ka ? Dt(Ka) : "";
      return typeof R == "function" && Ln.set(R, Bt), Bt;
    }
    function Mn(R, G, fe) {
      return ir(R, !1);
    }
    function Cr(R) {
      var G = R.prototype;
      return !!(G && G.isReactComponent);
    }
    function Bn(R, G, fe) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return ir(R, Cr(R));
      if (typeof R == "string")
        return Dt(R);
      switch (R) {
        case ue:
          return Dt("Suspense");
        case Ne:
          return Dt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ge:
            return Mn(R.render);
          case k:
            return Bn(R.type, G, fe);
          case Q: {
            var pe = R, Ct = pe._payload, nt = pe._init;
            try {
              return Bn(nt(Ct), G, fe);
            } catch {
            }
          }
        }
      return "";
    }
    var zn = Object.prototype.hasOwnProperty, da = {}, Ga = We.ReactDebugCurrentFrame;
    function Or(R) {
      if (R) {
        var G = R._owner, fe = Bn(R.type, R._source, G ? G.type : null);
        Ga.setExtraStackFrame(fe);
      } else
        Ga.setExtraStackFrame(null);
    }
    function $n(R, G, fe, pe, Ct) {
      {
        var nt = Function.call.bind(zn);
        for (var Tt in R)
          if (nt(R, Tt)) {
            var yt = void 0;
            try {
              if (typeof R[Tt] != "function") {
                var wn = Error((pe || "React class") + ": " + fe + " type `" + Tt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Tt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw wn.name = "Invariant Violation", wn;
              }
              yt = R[Tt](G, Tt, pe, fe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (on) {
              yt = on;
            }
            yt && !(yt instanceof Error) && (Or(Ct), ft("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", pe || "React class", fe, Tt, typeof yt), Or(null)), yt instanceof Error && !(yt.message in da) && (da[yt.message] = !0, Or(Ct), ft("Failed %s type: %s", fe, yt.message), Or(null));
          }
      }
    }
    var Kn = Array.isArray;
    function Xn(R) {
      return Kn(R);
    }
    function Rr(R) {
      {
        var G = typeof Symbol == "function" && Symbol.toStringTag, fe = G && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return fe;
      }
    }
    function qa(R) {
      try {
        return Un(R), !1;
      } catch {
        return !0;
      }
    }
    function Un(R) {
      return "" + R;
    }
    function lr(R) {
      if (qa(R))
        return ft("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(R)), Un(R);
    }
    var Wr = We.ReactCurrentOwner, Li = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pa, le;
    function je(R) {
      if (zn.call(R, "ref")) {
        var G = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function mt(R) {
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
        var fe = function() {
          pa || (pa = !0, ft("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        fe.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: fe,
          configurable: !0
        });
      }
    }
    function cn(R, G) {
      {
        var fe = function() {
          le || (le = !0, ft("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        fe.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: fe,
          configurable: !0
        });
      }
    }
    var fn = function(R, G, fe, pe, Ct, nt, Tt) {
      var yt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: F,
        // Built-in properties that belong on the element
        type: R,
        key: G,
        ref: fe,
        props: Tt,
        // Record the component responsible for creating this element.
        _owner: nt
      };
      return yt._store = {}, Object.defineProperty(yt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(yt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pe
      }), Object.defineProperty(yt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ct
      }), Object.freeze && (Object.freeze(yt.props), Object.freeze(yt)), yt;
    };
    function Jn(R, G, fe, pe, Ct) {
      {
        var nt, Tt = {}, yt = null, wn = null;
        fe !== void 0 && (lr(fe), yt = "" + fe), mt(G) && (lr(G.key), yt = "" + G.key), je(G) && (wn = G.ref, Pt(G, Ct));
        for (nt in G)
          zn.call(G, nt) && !Li.hasOwnProperty(nt) && (Tt[nt] = G[nt]);
        if (R && R.defaultProps) {
          var on = R.defaultProps;
          for (nt in on)
            Tt[nt] === void 0 && (Tt[nt] = on[nt]);
        }
        if (yt || wn) {
          var dn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          yt && sn(Tt, dn), wn && cn(Tt, dn);
        }
        return fn(R, yt, wn, Ct, pe, Wr.current, Tt);
      }
    }
    var un = We.ReactCurrentOwner, Kt = We.ReactDebugCurrentFrame;
    function Vt(R) {
      if (R) {
        var G = R._owner, fe = Bn(R.type, R._source, G ? G.type : null);
        Kt.setExtraStackFrame(fe);
      } else
        Kt.setExtraStackFrame(null);
    }
    var va;
    va = !1;
    function ka(R) {
      return typeof R == "object" && R !== null && R.$$typeof === F;
    }
    function Da() {
      {
        if (un.current) {
          var R = Le(un.current.type);
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
          var fe = typeof R == "string" ? R : R.displayName || R.name;
          fe && (G = `

Check the top-level render call using <` + fe + ">.");
        }
        return G;
      }
    }
    function zi(R, G) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var fe = Ql(G);
        if (Wl[fe])
          return;
        Wl[fe] = !0;
        var pe = "";
        R && R._owner && R._owner !== un.current && (pe = " It was passed a child from " + Le(R._owner.type) + "."), Vt(R), ft('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', fe, pe), Vt(null);
      }
    }
    function Gl(R, G) {
      {
        if (typeof R != "object")
          return;
        if (Xn(R))
          for (var fe = 0; fe < R.length; fe++) {
            var pe = R[fe];
            ka(pe) && zi(pe, G);
          }
        else if (ka(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ct = ht(R);
          if (typeof Ct == "function" && Ct !== R.entries)
            for (var nt = Ct.call(R), Tt; !(Tt = nt.next()).done; )
              ka(Tt.value) && zi(Tt.value, G);
        }
      }
    }
    function si(R) {
      {
        var G = R.type;
        if (G == null || typeof G == "string")
          return;
        var fe;
        if (typeof G == "function")
          fe = G.propTypes;
        else if (typeof G == "object" && (G.$$typeof === ge || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        G.$$typeof === k))
          fe = G.propTypes;
        else
          return;
        if (fe) {
          var pe = Le(G);
          $n(fe, R.props, "prop", pe, R);
        } else if (G.PropTypes !== void 0 && !va) {
          va = !0;
          var Ct = Le(G);
          ft("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ct || "Unknown");
        }
        typeof G.getDefaultProps == "function" && !G.getDefaultProps.isReactClassApproved && ft("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ha(R) {
      {
        for (var G = Object.keys(R.props), fe = 0; fe < G.length; fe++) {
          var pe = G[fe];
          if (pe !== "children" && pe !== "key") {
            Vt(R), ft("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", pe), Vt(null);
            break;
          }
        }
        R.ref !== null && (Vt(R), ft("Invalid attribute `ref` supplied to `React.Fragment`."), Vt(null));
      }
    }
    var ur = {};
    function ma(R, G, fe, pe, Ct, nt) {
      {
        var Tt = _t(R);
        if (!Tt) {
          var yt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (yt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var wn = Mi();
          wn ? yt += wn : yt += Da();
          var on;
          R === null ? on = "null" : Xn(R) ? on = "array" : R !== void 0 && R.$$typeof === F ? (on = "<" + (Le(R.type) || "Unknown") + " />", yt = " Did you accidentally export a JSX literal instead of a component?") : on = typeof R, ft("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", on, yt);
        }
        var dn = Jn(R, G, fe, Ct, nt);
        if (dn == null)
          return dn;
        if (Tt) {
          var Tr = G.children;
          if (Tr !== void 0)
            if (pe)
              if (Xn(Tr)) {
                for (var Ka = 0; Ka < Tr.length; Ka++)
                  Gl(Tr[Ka], R);
                Object.freeze && Object.freeze(Tr);
              } else
                ft("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Gl(Tr, R);
        }
        if (zn.call(G, "key")) {
          var Bt = Le(R), mn = Object.keys(G).filter(function(Ai) {
            return Ai !== "key";
          }), ot = mn.length > 0 ? "{key: someKey, " + mn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ur[Bt + ot]) {
            var di = mn.length > 0 ? "{" + mn.join(": ..., ") + ": ...}" : "{}";
            ft(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ot, Bt, di, Bt), ur[Bt + ot] = !0;
          }
        }
        return R === Ke ? ha(dn) : si(dn), dn;
      }
    }
    function Qr(R, G, fe) {
      return ma(R, G, fe, !0);
    }
    function ci(R, G, fe) {
      return ma(R, G, fe, !1);
    }
    var fi = ci, Ui = Qr;
    Zp.Fragment = Ke, Zp.jsx = fi, Zp.jsxs = Ui;
  }(), Zp;
}
var u1 = {};
u1.NODE_ENV === "production" ? hE.exports = i1() : hE.exports = l1();
var Me = hE.exports, mE = { exports: {} }, Wa = {}, Gm = { exports: {} }, pE = {};
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
function o1() {
  return iT || (iT = 1, function(W) {
    function re($, se) {
      var ie = $.length;
      $.push(se);
      e: for (; 0 < ie; ) {
        var w = ie - 1 >>> 1, B = $[w];
        if (0 < Ke(B, se)) $[w] = se, $[ie] = B, ie = w;
        else break e;
      }
    }
    function F($) {
      return $.length === 0 ? null : $[0];
    }
    function ye($) {
      if ($.length === 0) return null;
      var se = $[0], ie = $.pop();
      if (ie !== se) {
        $[0] = ie;
        e: for (var w = 0, B = $.length, Te = B >>> 1; w < Te; ) {
          var Je = 2 * (w + 1) - 1, tt = $[Je], St = Je + 1, Lt = $[St];
          if (0 > Ke(tt, ie)) St < B && 0 > Ke(Lt, tt) ? ($[w] = Lt, $[St] = ie, w = St) : ($[w] = tt, $[Je] = ie, w = Je);
          else if (St < B && 0 > Ke(Lt, ie)) $[w] = Lt, $[St] = ie, w = St;
          else break e;
        }
      }
      return se;
    }
    function Ke($, se) {
      var ie = $.sortIndex - se.sortIndex;
      return ie !== 0 ? ie : $.id - se.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ct = performance;
      W.unstable_now = function() {
        return ct.now();
      };
    } else {
      var lt = Date, S = lt.now();
      W.unstable_now = function() {
        return lt.now() - S;
      };
    }
    var Ie = [], ge = [], ue = 1, Ne = null, k = 3, Q = !1, j = !1, Z = !1, De = typeof setTimeout == "function" ? setTimeout : null, ht = typeof clearTimeout == "function" ? clearTimeout : null, We = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ft($) {
      for (var se = F(ge); se !== null; ) {
        if (se.callback === null) ye(ge);
        else if (se.startTime <= $) ye(ge), se.sortIndex = se.expirationTime, re(Ie, se);
        else break;
        se = F(ge);
      }
    }
    function He($) {
      if (Z = !1, ft($), !j) if (F(Ie) !== null) j = !0, ae(ut);
      else {
        var se = F(ge);
        se !== null && Ve(He, se.startTime - $);
      }
    }
    function ut($, se) {
      j = !1, Z && (Z = !1, ht(me), me = -1), Q = !0;
      var ie = k;
      try {
        for (ft(se), Ne = F(Ie); Ne !== null && (!(Ne.expirationTime > se) || $ && !_t()); ) {
          var w = Ne.callback;
          if (typeof w == "function") {
            Ne.callback = null, k = Ne.priorityLevel;
            var B = w(Ne.expirationTime <= se);
            se = W.unstable_now(), typeof B == "function" ? Ne.callback = B : Ne === F(Ie) && ye(Ie), ft(se);
          } else ye(Ie);
          Ne = F(Ie);
        }
        if (Ne !== null) var Te = !0;
        else {
          var Je = F(ge);
          Je !== null && Ve(He, Je.startTime - se), Te = !1;
        }
        return Te;
      } finally {
        Ne = null, k = ie, Q = !1;
      }
    }
    var be = !1, ee = null, me = -1, Pe = 5, Xe = -1;
    function _t() {
      return !(W.unstable_now() - Xe < Pe);
    }
    function Ye() {
      if (ee !== null) {
        var $ = W.unstable_now();
        Xe = $;
        var se = !0;
        try {
          se = ee(!0, $);
        } finally {
          se ? dt() : (be = !1, ee = null);
        }
      } else be = !1;
    }
    var dt;
    if (typeof We == "function") dt = function() {
      We(Ye);
    };
    else if (typeof MessageChannel < "u") {
      var Le = new MessageChannel(), kt = Le.port2;
      Le.port1.onmessage = Ye, dt = function() {
        kt.postMessage(null);
      };
    } else dt = function() {
      De(Ye, 0);
    };
    function ae($) {
      ee = $, be || (be = !0, dt());
    }
    function Ve($, se) {
      me = De(function() {
        $(W.unstable_now());
      }, se);
    }
    W.unstable_IdlePriority = 5, W.unstable_ImmediatePriority = 1, W.unstable_LowPriority = 4, W.unstable_NormalPriority = 3, W.unstable_Profiling = null, W.unstable_UserBlockingPriority = 2, W.unstable_cancelCallback = function($) {
      $.callback = null;
    }, W.unstable_continueExecution = function() {
      j || Q || (j = !0, ae(ut));
    }, W.unstable_forceFrameRate = function($) {
      0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pe = 0 < $ ? Math.floor(1e3 / $) : 5;
    }, W.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, W.unstable_getFirstCallbackNode = function() {
      return F(Ie);
    }, W.unstable_next = function($) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var se = 3;
          break;
        default:
          se = k;
      }
      var ie = k;
      k = se;
      try {
        return $();
      } finally {
        k = ie;
      }
    }, W.unstable_pauseExecution = function() {
    }, W.unstable_requestPaint = function() {
    }, W.unstable_runWithPriority = function($, se) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var ie = k;
      k = $;
      try {
        return se();
      } finally {
        k = ie;
      }
    }, W.unstable_scheduleCallback = function($, se, ie) {
      var w = W.unstable_now();
      switch (typeof ie == "object" && ie !== null ? (ie = ie.delay, ie = typeof ie == "number" && 0 < ie ? w + ie : w) : ie = w, $) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = ie + B, $ = { id: ue++, callback: se, priorityLevel: $, startTime: ie, expirationTime: B, sortIndex: -1 }, ie > w ? ($.sortIndex = ie, re(ge, $), F(Ie) === null && $ === F(ge) && (Z ? (ht(me), me = -1) : Z = !0, Ve(He, ie - w))) : ($.sortIndex = B, re(Ie, $), j || Q || (j = !0, ae(ut))), $;
    }, W.unstable_shouldYield = _t, W.unstable_wrapCallback = function($) {
      var se = k;
      return function() {
        var ie = k;
        k = se;
        try {
          return $.apply(this, arguments);
        } finally {
          k = ie;
        }
      };
    };
  }(pE)), pE;
}
var vE = {}, lT;
function s1() {
  return lT || (lT = 1, function(W) {
    var re = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    re.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var F = !1, ye = 5;
      function Ke(le, je) {
        var mt = le.length;
        le.push(je), S(le, je, mt);
      }
      function ct(le) {
        return le.length === 0 ? null : le[0];
      }
      function lt(le) {
        if (le.length === 0)
          return null;
        var je = le[0], mt = le.pop();
        return mt !== je && (le[0] = mt, Ie(le, mt, 0)), je;
      }
      function S(le, je, mt) {
        for (var Pt = mt; Pt > 0; ) {
          var sn = Pt - 1 >>> 1, cn = le[sn];
          if (ge(cn, je) > 0)
            le[sn] = je, le[Pt] = cn, Pt = sn;
          else
            return;
        }
      }
      function Ie(le, je, mt) {
        for (var Pt = mt, sn = le.length, cn = sn >>> 1; Pt < cn; ) {
          var fn = (Pt + 1) * 2 - 1, Jn = le[fn], un = fn + 1, Kt = le[un];
          if (ge(Jn, je) < 0)
            un < sn && ge(Kt, Jn) < 0 ? (le[Pt] = Kt, le[un] = je, Pt = un) : (le[Pt] = Jn, le[fn] = je, Pt = fn);
          else if (un < sn && ge(Kt, je) < 0)
            le[Pt] = Kt, le[un] = je, Pt = un;
          else
            return;
        }
      }
      function ge(le, je) {
        var mt = le.sortIndex - je.sortIndex;
        return mt !== 0 ? mt : le.id - je.id;
      }
      var ue = 1, Ne = 2, k = 3, Q = 4, j = 5;
      function Z(le, je) {
      }
      var De = typeof performance == "object" && typeof performance.now == "function";
      if (De) {
        var ht = performance;
        W.unstable_now = function() {
          return ht.now();
        };
      } else {
        var We = Date, ft = We.now();
        W.unstable_now = function() {
          return We.now() - ft;
        };
      }
      var He = 1073741823, ut = -1, be = 250, ee = 5e3, me = 1e4, Pe = He, Xe = [], _t = [], Ye = 1, dt = null, Le = k, kt = !1, ae = !1, Ve = !1, $ = typeof setTimeout == "function" ? setTimeout : null, se = typeof clearTimeout == "function" ? clearTimeout : null, ie = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function w(le) {
        for (var je = ct(_t); je !== null; ) {
          if (je.callback === null)
            lt(_t);
          else if (je.startTime <= le)
            lt(_t), je.sortIndex = je.expirationTime, Ke(Xe, je);
          else
            return;
          je = ct(_t);
        }
      }
      function B(le) {
        if (Ve = !1, w(le), !ae)
          if (ct(Xe) !== null)
            ae = !0, Un(Te);
          else {
            var je = ct(_t);
            je !== null && lr(B, je.startTime - le);
          }
      }
      function Te(le, je) {
        ae = !1, Ve && (Ve = !1, Wr()), kt = !0;
        var mt = Le;
        try {
          var Pt;
          if (!F) return Je(le, je);
        } finally {
          dt = null, Le = mt, kt = !1;
        }
      }
      function Je(le, je) {
        var mt = je;
        for (w(mt), dt = ct(Xe); dt !== null && !(dt.expirationTime > mt && (!le || Ga())); ) {
          var Pt = dt.callback;
          if (typeof Pt == "function") {
            dt.callback = null, Le = dt.priorityLevel;
            var sn = dt.expirationTime <= mt, cn = Pt(sn);
            mt = W.unstable_now(), typeof cn == "function" ? dt.callback = cn : dt === ct(Xe) && lt(Xe), w(mt);
          } else
            lt(Xe);
          dt = ct(Xe);
        }
        if (dt !== null)
          return !0;
        var fn = ct(_t);
        return fn !== null && lr(B, fn.startTime - mt), !1;
      }
      function tt(le, je) {
        switch (le) {
          case ue:
          case Ne:
          case k:
          case Q:
          case j:
            break;
          default:
            le = k;
        }
        var mt = Le;
        Le = le;
        try {
          return je();
        } finally {
          Le = mt;
        }
      }
      function St(le) {
        var je;
        switch (Le) {
          case ue:
          case Ne:
          case k:
            je = k;
            break;
          default:
            je = Le;
            break;
        }
        var mt = Le;
        Le = je;
        try {
          return le();
        } finally {
          Le = mt;
        }
      }
      function Lt(le) {
        var je = Le;
        return function() {
          var mt = Le;
          Le = je;
          try {
            return le.apply(this, arguments);
          } finally {
            Le = mt;
          }
        };
      }
      function at(le, je, mt) {
        var Pt = W.unstable_now(), sn;
        if (typeof mt == "object" && mt !== null) {
          var cn = mt.delay;
          typeof cn == "number" && cn > 0 ? sn = Pt + cn : sn = Pt;
        } else
          sn = Pt;
        var fn;
        switch (le) {
          case ue:
            fn = ut;
            break;
          case Ne:
            fn = be;
            break;
          case j:
            fn = Pe;
            break;
          case Q:
            fn = me;
            break;
          case k:
          default:
            fn = ee;
            break;
        }
        var Jn = sn + fn, un = {
          id: Ye++,
          callback: je,
          priorityLevel: le,
          startTime: sn,
          expirationTime: Jn,
          sortIndex: -1
        };
        return sn > Pt ? (un.sortIndex = sn, Ke(_t, un), ct(Xe) === null && un === ct(_t) && (Ve ? Wr() : Ve = !0, lr(B, sn - Pt))) : (un.sortIndex = Jn, Ke(Xe, un), !ae && !kt && (ae = !0, Un(Te))), un;
      }
      function Dt() {
      }
      function Wt() {
        !ae && !kt && (ae = !0, Un(Te));
      }
      function Ln() {
        return ct(Xe);
      }
      function qn(le) {
        le.callback = null;
      }
      function ir() {
        return Le;
      }
      var Mn = !1, Cr = null, Bn = -1, zn = ye, da = -1;
      function Ga() {
        var le = W.unstable_now() - da;
        return !(le < zn);
      }
      function Or() {
      }
      function $n(le) {
        if (le < 0 || le > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        le > 0 ? zn = Math.floor(1e3 / le) : zn = ye;
      }
      var Kn = function() {
        if (Cr !== null) {
          var le = W.unstable_now();
          da = le;
          var je = !0, mt = !0;
          try {
            mt = Cr(je, le);
          } finally {
            mt ? Xn() : (Mn = !1, Cr = null);
          }
        } else
          Mn = !1;
      }, Xn;
      if (typeof ie == "function")
        Xn = function() {
          ie(Kn);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), qa = Rr.port2;
        Rr.port1.onmessage = Kn, Xn = function() {
          qa.postMessage(null);
        };
      } else
        Xn = function() {
          $(Kn, 0);
        };
      function Un(le) {
        Cr = le, Mn || (Mn = !0, Xn());
      }
      function lr(le, je) {
        Bn = $(function() {
          le(W.unstable_now());
        }, je);
      }
      function Wr() {
        se(Bn), Bn = -1;
      }
      var Li = Or, pa = null;
      W.unstable_IdlePriority = j, W.unstable_ImmediatePriority = ue, W.unstable_LowPriority = Q, W.unstable_NormalPriority = k, W.unstable_Profiling = pa, W.unstable_UserBlockingPriority = Ne, W.unstable_cancelCallback = qn, W.unstable_continueExecution = Wt, W.unstable_forceFrameRate = $n, W.unstable_getCurrentPriorityLevel = ir, W.unstable_getFirstCallbackNode = Ln, W.unstable_next = St, W.unstable_pauseExecution = Dt, W.unstable_requestPaint = Li, W.unstable_runWithPriority = tt, W.unstable_scheduleCallback = at, W.unstable_shouldYield = Ga, W.unstable_wrapCallback = Lt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(vE)), vE;
}
var uT;
function pT() {
  if (uT) return Gm.exports;
  uT = 1;
  var W = {};
  return W.NODE_ENV === "production" ? Gm.exports = o1() : Gm.exports = s1(), Gm.exports;
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
function c1() {
  if (oT) return Wa;
  oT = 1;
  var W = tv(), re = pT();
  function F(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ye = /* @__PURE__ */ new Set(), Ke = {};
  function ct(n, r) {
    lt(n, r), lt(n + "Capture", r);
  }
  function lt(n, r) {
    for (Ke[n] = r, n = 0; n < r.length; n++) ye.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ie = Object.prototype.hasOwnProperty, ge = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ue = {}, Ne = {};
  function k(n) {
    return Ie.call(Ne, n) ? !0 : Ie.call(ue, n) ? !1 : ge.test(n) ? Ne[n] = !0 : (ue[n] = !0, !1);
  }
  function Q(n, r, l, o) {
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
  function j(n, r, l, o) {
    if (r === null || typeof r > "u" || Q(n, r, l, o)) return !0;
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
  function Z(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var De = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    De[n] = new Z(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    De[r] = new Z(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    De[n] = new Z(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    De[n] = new Z(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    De[n] = new Z(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    De[n] = new Z(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    De[n] = new Z(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    De[n] = new Z(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    De[n] = new Z(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ht = /[\-:]([a-z])/g;
  function We(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ht,
      We
    );
    De[r] = new Z(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ht, We);
    De[r] = new Z(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ht, We);
    De[r] = new Z(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    De[n] = new Z(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), De.xlinkHref = new Z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    De[n] = new Z(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ft(n, r, l, o) {
    var c = De.hasOwnProperty(r) ? De[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (j(r, l, c, o) && (l = null), o || c === null ? k(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var He = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ut = Symbol.for("react.element"), be = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), me = Symbol.for("react.strict_mode"), Pe = Symbol.for("react.profiler"), Xe = Symbol.for("react.provider"), _t = Symbol.for("react.context"), Ye = Symbol.for("react.forward_ref"), dt = Symbol.for("react.suspense"), Le = Symbol.for("react.suspense_list"), kt = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), Ve = Symbol.for("react.offscreen"), $ = Symbol.iterator;
  function se(n) {
    return n === null || typeof n != "object" ? null : (n = $ && n[$] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ie = Object.assign, w;
  function B(n) {
    if (w === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      w = r && r[1] || "";
    }
    return `
` + w + n;
  }
  var Te = !1;
  function Je(n, r) {
    if (!n || Te) return "";
    Te = !0;
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
        } catch (U) {
          var o = U;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (U) {
          o = U;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
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
      Te = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? B(n) : "";
  }
  function tt(n) {
    switch (n.tag) {
      case 5:
        return B(n.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Je(n.type, !1), n;
      case 11:
        return n = Je(n.type.render, !1), n;
      case 1:
        return n = Je(n.type, !0), n;
      default:
        return "";
    }
  }
  function St(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ee:
        return "Fragment";
      case be:
        return "Portal";
      case Pe:
        return "Profiler";
      case me:
        return "StrictMode";
      case dt:
        return "Suspense";
      case Le:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case _t:
        return (n.displayName || "Context") + ".Consumer";
      case Xe:
        return (n._context.displayName || "Context") + ".Provider";
      case Ye:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case kt:
        return r = n.displayName || null, r !== null ? r : St(n.type) || "Memo";
      case ae:
        r = n._payload, n = n._init;
        try {
          return St(n(r));
        } catch {
        }
    }
    return null;
  }
  function Lt(n) {
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
        return St(r);
      case 8:
        return r === me ? "StrictMode" : "Mode";
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
  function at(n) {
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
  function Dt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Wt(n) {
    var r = Dt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function Ln(n) {
    n._valueTracker || (n._valueTracker = Wt(n));
  }
  function qn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Dt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
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
    return ie({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Cr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = at(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && ft(n, "checked", r, !1);
  }
  function zn(n, r) {
    Bn(n, r);
    var l = at(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ga(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ga(n, r.type, at(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
      for (l = "" + at(l), r = null, c = 0; c < n.length; c++) {
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
    if (r.dangerouslySetInnerHTML != null) throw Error(F(91));
    return ie({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Xn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(F(92));
        if (Or(l)) {
          if (1 < l.length) throw Error(F(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: at(l) };
  }
  function Rr(n, r) {
    var l = at(r.value), o = at(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function qa(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Un(n) {
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
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Un(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Wr, Li = function(n) {
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
  }, je = ["Webkit", "ms", "Moz", "O"];
  Object.keys(le).forEach(function(n) {
    je.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), le[r] = le[n];
    });
  });
  function mt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || le.hasOwnProperty(n) && le[n] ? ("" + r).trim() : r + "px";
  }
  function Pt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = mt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var sn = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function cn(n, r) {
    if (r) {
      if (sn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(F(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(F(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(F(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(F(62));
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
      if (typeof Kt != "function") throw Error(F(280));
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
    if (l && typeof l != "function") throw Error(F(231, r, typeof l));
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
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (K) {
      this.onError(K);
    }
  }
  var Qr = !1, ci = null, fi = !1, Ui = null, R = { onError: function(n) {
    Qr = !0, ci = n;
  } };
  function G(n, r, l, o, c, d, m, E, T) {
    Qr = !1, ci = null, ma.apply(R, arguments);
  }
  function fe(n, r, l, o, c, d, m, E, T) {
    if (G.apply(this, arguments), Qr) {
      if (Qr) {
        var U = ci;
        Qr = !1, ci = null;
      } else throw Error(F(198));
      fi || (fi = !0, Ui = U);
    }
  }
  function pe(n) {
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
  function Ct(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function nt(n) {
    if (pe(n) !== n) throw Error(F(188));
  }
  function Tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = pe(n), r === null) throw Error(F(188));
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
          if (d === l) return nt(c), n;
          if (d === o) return nt(c), r;
          d = d.sibling;
        }
        throw Error(F(188));
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
          if (!m) throw Error(F(189));
        }
      }
      if (l.alternate !== o) throw Error(F(190));
    }
    if (l.tag !== 3) throw Error(F(188));
    return l.stateNode.current === l ? n : r;
  }
  function yt(n) {
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
  var on = re.unstable_scheduleCallback, dn = re.unstable_cancelCallback, Tr = re.unstable_shouldYield, Ka = re.unstable_requestPaint, Bt = re.unstable_now, mn = re.unstable_getCurrentPriorityLevel, ot = re.unstable_ImmediatePriority, di = re.unstable_UserBlockingPriority, Ai = re.unstable_NormalPriority, lc = re.unstable_LowPriority, Fi = re.unstable_IdlePriority, ol = null, Gr = null;
  function $o(n) {
    if (Gr && typeof Gr.onCommitFiberRoot == "function") try {
      Gr.onCommitFiberRoot(ol, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Nr = Math.clz32 ? Math.clz32 : oc, Yo = Math.log, uc = Math.LN2;
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
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Nr(r), c = 1 << l, o |= n[l], r &= ~c;
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
      var m = 31 - Nr(d), E = 1 << m, T = c[m];
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
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Nr(r), n[r] = l;
  }
  function Io(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Nr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Wo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Nr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Mt = 0;
  function Qo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Pu, zt, sc, vi, Ze, Xl = !1, Zn = [], Kr = null, Lr = null, hi = null, Cn = /* @__PURE__ */ new Map(), Xt = /* @__PURE__ */ new Map(), Xa = [], Oa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function xr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Kr = null;
        break;
      case "dragenter":
      case "dragleave":
        Lr = null;
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
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = cs(r), r !== null && zt(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Xf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Kr = Mr(Kr, n, r, l, o, c), !0;
      case "dragenter":
        return Lr = Mr(Lr, n, r, l, o, c), !0;
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
      var l = pe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ct(l), r !== null) {
            n.blockedOn = r, Ze(n.priority, function() {
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
      } else return r = cs(l), r !== null && zt(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Bu(n, r, l) {
    Jl(n) && l.delete(r);
  }
  function $u() {
    Xl = !1, Kr !== null && Jl(Kr) && (Kr = null), Lr !== null && Jl(Lr) && (Lr = null), hi !== null && Jl(hi) && (hi = null), Cn.forEach(Bu), Xt.forEach(Bu);
  }
  function Zl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Xl || (Xl = !0, re.unstable_scheduleCallback(re.unstable_NormalPriority, $u)));
  }
  function Na(n) {
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
    for (Kr !== null && Zl(Kr, n), Lr !== null && Zl(Lr, n), hi !== null && Zl(hi, n), Cn.forEach(r), Xt.forEach(r), l = 0; l < Xa.length; l++) o = Xa[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Xa.length && (l = Xa[0], l.blockedOn === null); ) Vu(l), l.blockedOn === null && Xa.shift();
  }
  var La = He.ReactCurrentBatchConfig, dl = !0;
  function Pi(n, r, l, o) {
    var c = Mt, d = La.transition;
    La.transition = null;
    try {
      Mt = 1, pl(n, r, l, o);
    } finally {
      Mt = c, La.transition = d;
    }
  }
  function Yu(n, r, l, o) {
    var c = Mt, d = La.transition;
    La.transition = null;
    try {
      Mt = 4, pl(n, r, l, o);
    } finally {
      Mt = c, La.transition = d;
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
    if (Vi = null, n = un(o), n = lu(n), n !== null) if (r = pe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ct(r), n !== null) return n;
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
          case Ai:
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
  function M(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function H() {
    return !0;
  }
  function ne() {
    return !1;
  }
  function we(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? H : ne, this.isPropagationStopped = ne, this;
    }
    return ie(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = H);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = H);
    }, persist: function() {
    }, isPersistent: H }), r;
  }
  var Se = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ge = we(Se), gt = ie({}, Se, { view: 0, detail: 0 }), $t = we(gt), Jt, Zt, pt, rn = ie({}, gt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ja, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== pt && (pt && n.type === "mousemove" ? (Jt = n.screenX - pt.screenX, Zt = n.screenY - pt.screenY) : Zt = Jt = 0, pt = n), Jt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Zt;
  } }), bn = we(rn), eu = ie({}, rn, { dataTransfer: 0 }), qo = we(eu), Bi = ie({}, gt, { relatedTarget: 0 }), tu = we(Bi), Ko = ie({}, Se, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Jf = we(Ko), cc = ie({}, Se, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Zf = we(cc), nv = ie({}, Se, { data: 0 }), fc = we(nv), rv = {
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
  var Xm = ie({}, gt, { key: function(n) {
    if (n.key) {
      var r = rv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = M(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? av[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ja, charCode: function(n) {
    return n.type === "keypress" ? M(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? M(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ed = we(Xm), td = ie({}, rn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), dc = we(td), Jm = ie({}, gt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ja }), pc = we(Jm), lv = ie({}, Se, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xr = we(lv), $i = ie({}, rn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), An = we($i), Yi = [9, 13, 27, 32], Xo = S && "CompositionEvent" in window, vl = null;
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
    Da(o), r = us(r, "onChange"), 0 < r.length && (l = new Ge("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var qu = null, mi = null;
  function nd(n) {
    gc(n, 0);
  }
  function Jo(n) {
    var r = Ue(n);
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
      if (!Ie.call(r, c) || !Za(n[c], r[c])) return !1;
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
    ld || Ju == null || Ju !== ir(o) || (o = Ju, "selectionStart" in o && Ku(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), es && Zo(es, o) || (es = o, o = us(id, "onSelect"), 0 < o.length && (r = new Ge("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Ju)));
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
  yi(xv, "onAnimationEnd"), yi(wv, "onAnimationIteration"), yi(bv, "onAnimationStart"), yi("dblclick", "onDoubleClick"), yi("focusin", "onFocus"), yi("focusout", "onBlur"), yi(_v, "onTransitionEnd"), lt("onMouseEnter", ["mouseout", "mouseover"]), lt("onMouseLeave", ["mouseout", "mouseover"]), lt("onPointerEnter", ["pointerout", "pointerover"]), lt("onPointerLeave", ["pointerout", "pointerover"]), ct("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ct("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ct("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ct("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ct("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ct("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ly = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function yc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, fe(o, r, void 0, n), n.currentTarget = null;
  }
  function gc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, U = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          yc(c, E, U), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, U = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          yc(c, E, U), d = T;
        }
      }
    }
    if (fi) throw n = Ui, fi = !1, Ui = null, n;
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
      n[is] = !0, ye.forEach(function(l) {
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
      var U = d, K = un(l), X = [];
      e: {
        var q = kv.get(n);
        if (q !== void 0) {
          var Ee = Ge, _e = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0) break e;
            case "keydown":
            case "keyup":
              Ee = ed;
              break;
            case "focusin":
              _e = "focus", Ee = tu;
              break;
            case "focusout":
              _e = "blur", Ee = tu;
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
              Ee = An;
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
          var Oe = (r & 4) !== 0, On = !Oe && n === "scroll", D = Oe ? q !== null ? q + "Capture" : null : q;
          Oe = [];
          for (var b = U, L; b !== null; ) {
            L = b;
            var te = L.stateNode;
            if (L.tag === 5 && te !== null && (L = te, D !== null && (te = si(b, D), te != null && Oe.push(eo(b, te, L)))), On) break;
            b = b.return;
          }
          0 < Oe.length && (q = new Ee(q, _e, null, l, K), X.push({ event: q, listeners: Oe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (q = n === "mouseover" || n === "pointerover", Ee = n === "mouseout" || n === "pointerout", q && l !== Jn && (_e = l.relatedTarget || l.fromElement) && (lu(_e) || _e[Ii])) break e;
          if ((Ee || q) && (q = K.window === K ? K : (q = K.ownerDocument) ? q.defaultView || q.parentWindow : window, Ee ? (_e = l.relatedTarget || l.toElement, Ee = U, _e = _e ? lu(_e) : null, _e !== null && (On = pe(_e), _e !== On || _e.tag !== 5 && _e.tag !== 6) && (_e = null)) : (Ee = null, _e = U), Ee !== _e)) {
            if (Oe = bn, te = "onMouseLeave", D = "onMouseEnter", b = "mouse", (n === "pointerout" || n === "pointerover") && (Oe = dc, te = "onPointerLeave", D = "onPointerEnter", b = "pointer"), On = Ee == null ? q : Ue(Ee), L = _e == null ? q : Ue(_e), q = new Oe(te, b + "leave", Ee, l, K), q.target = On, q.relatedTarget = L, te = null, lu(K) === U && (Oe = new Oe(D, b + "enter", _e, l, K), Oe.target = L, Oe.relatedTarget = On, te = Oe), On = te, Ee && _e) t: {
              for (Oe = Ee, D = _e, b = 0, L = Oe; L; L = ru(L)) b++;
              for (L = 0, te = D; te; te = ru(te)) L++;
              for (; 0 < b - L; ) Oe = ru(Oe), b--;
              for (; 0 < L - b; ) D = ru(D), L--;
              for (; b--; ) {
                if (Oe === D || D !== null && Oe === D.alternate) break t;
                Oe = ru(Oe), D = ru(D);
              }
              Oe = null;
            }
            else Oe = null;
            Ee !== null && Sc(X, q, Ee, Oe, !1), _e !== null && On !== null && Sc(X, On, _e, Oe, !0);
          }
        }
        e: {
          if (q = U ? Ue(U) : window, Ee = q.nodeName && q.nodeName.toLowerCase(), Ee === "select" || Ee === "input" && q.type === "file") var ve = pv;
          else if (fv(q)) if (vv) ve = ay;
          else {
            ve = ry;
            var Fe = ny;
          }
          else (Ee = q.nodeName) && Ee.toLowerCase() === "input" && (q.type === "checkbox" || q.type === "radio") && (ve = gv);
          if (ve && (ve = ve(n, U))) {
            dv(X, ve, l, K);
            break e;
          }
          Fe && Fe(n, q, U), n === "focusout" && (Fe = q._wrapperState) && Fe.controlled && q.type === "number" && Ga(q, "number", q.value);
        }
        switch (Fe = U ? Ue(U) : window, n) {
          case "focusin":
            (fv(Fe) || Fe.contentEditable === "true") && (Ju = Fe, id = U, es = null);
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
            ld = !1, Tv(X, l, K);
            break;
          case "selectionchange":
            if (Xu) break;
          case "keydown":
          case "keyup":
            Tv(X, l, K);
        }
        var $e;
        if (Xo) e: {
          switch (n) {
            case "compositionstart":
              var et = "onCompositionStart";
              break e;
            case "compositionend":
              et = "onCompositionEnd";
              break e;
            case "compositionupdate":
              et = "onCompositionUpdate";
              break e;
          }
          et = void 0;
        }
        else Gu ? vc(n, l) && (et = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (et = "onCompositionStart");
        et && (Qu && l.locale !== "ko" && (Gu || et !== "onCompositionStart" ? et === "onCompositionEnd" && Gu && ($e = C()) : (Ma = K, Wu = "value" in Ma ? Ma.value : Ma.textContent, Gu = !0)), Fe = us(U, et), 0 < Fe.length && (et = new fc(et, n, null, l, K), X.push({ event: et, listeners: Fe }), $e ? et.data = $e : ($e = sv(l), $e !== null && (et.data = $e)))), ($e = Zm ? ey(n, l) : cv(n, l)) && (U = us(U, "onBeforeInput"), 0 < U.length && (K = new fc("onBeforeInput", "beforeinput", null, l, K), X.push({ event: K, listeners: U }), K.data = $e));
      }
      gc(X, r);
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
      var E = l, T = E.alternate, U = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && U !== null && (E = U, c ? (T = si(l, d), T != null && m.unshift(eo(l, T, E))) : c || (T = si(l, d), T != null && m.push(eo(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var uy = /\r\n?/g, Dv = /\u0000|\uFFFD/g;
  function Ov(n) {
    return (typeof n == "string" ? n : "" + n).replace(uy, `
`).replace(Dv, "");
  }
  function Ec(n, r, l) {
    if (r = Ov(r), Ov(n) !== r && l) throw Error(F(425));
  }
  function Cc() {
  }
  var au = null, os = null;
  function iu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Rc = typeof setTimeout == "function" ? setTimeout : void 0, Nv = typeof clearTimeout == "function" ? clearTimeout : void 0, Tc = typeof Promise == "function" ? Promise : void 0, oy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Tc < "u" ? function(n) {
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
          n.removeChild(c), Na(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Na(r);
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
  function Ue(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(F(33));
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
  var Et = {}, yn = Jr(Et), Fn = Jr(!1), Ua = Et;
  function ya(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Et;
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
    if (yn.current !== Et) throw Error(F(168));
    an(yn, r), an(Fn, l);
  }
  function Lv(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(F(108, Lt(n) || "Unknown", c));
    return ie({}, l, o);
  }
  function uu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Et, Ua = yn.current, an(yn, n), an(Fn, Fn.current), !0;
  }
  function br(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(F(169));
    l ? (n = Lv(n, r, Ua), o.__reactInternalMemoizedMergedChildContext = n, Qt(Fn), Qt(yn), an(yn, n)) : Qt(Fn), an(Fn, l);
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
      var n = 0, r = Mt;
      try {
        var l = ti;
        for (Mt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ti = null, fs = !1;
      } catch (c) {
        throw ti !== null && (ti = ti.slice(n + 1)), on(ot, zr), c;
      } finally {
        Mt = r, ds = !1;
      }
    }
    return null;
  }
  var gl = [], Sl = 0, io = null, El = 0, or = [], jn = 0, ou = null, Ur = 1, Si = "";
  function Cl(n, r) {
    gl[Sl++] = El, gl[Sl++] = io, io = n, El = r;
  }
  function Mv(n, r, l) {
    or[jn++] = Ur, or[jn++] = Si, or[jn++] = ou, ou = n;
    var o = Ur;
    n = Si;
    var c = 32 - Nr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Nr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Ur = 1 << 32 - Nr(r) + c | l << c | o, Si = d + n;
    } else Ur = 1 << d | l << c | o, Si = n;
  }
  function vd(n) {
    n.return !== null && (Cl(n, 1), Mv(n, 1, 0));
  }
  function bc(n) {
    for (; n === io; ) io = gl[--Sl], gl[Sl] = null, El = gl[--Sl], gl[Sl] = null;
    for (; n === ou; ) ou = or[--jn], or[jn] = null, Si = or[--jn], or[jn] = null, Ur = or[--jn], or[jn] = null;
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
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ou !== null ? { id: Ur, overflow: Si } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Pa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Zr = n, ea = null, !0) : !1;
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
          if (yd(n)) throw Error(F(418));
          r = ei(l.nextSibling);
          var o = Zr;
          r && md(n, r) ? hd(o, l) : (n.flags = n.flags & -4097 | 2, pn = !1, Zr = n);
        }
      } else {
        if (yd(n)) throw Error(F(418));
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
      if (yd(n)) throw Uv(), Error(F(418));
      for (; r; ) hd(n, r), r = ei(r.nextSibling);
    }
    if (zv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(F(317));
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
  function Uv() {
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
          if (l.tag !== 1) throw Error(F(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(F(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(F(284));
      if (!l._owner) throw Error(F(290, n));
    }
    return n;
  }
  function lo(n, r) {
    throw n = Object.prototype.toString.call(r), Error(F(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Av(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Fv(n) {
    function r(D, b) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [b], D.flags |= 16) : L.push(b);
      }
    }
    function l(D, b) {
      if (!n) return null;
      for (; b !== null; ) r(D, b), b = b.sibling;
      return null;
    }
    function o(D, b) {
      for (D = /* @__PURE__ */ new Map(); b !== null; ) b.key !== null ? D.set(b.key, b) : D.set(b.index, b), b = b.sibling;
      return D;
    }
    function c(D, b) {
      return D = Ll(D, b), D.index = 0, D.sibling = null, D;
    }
    function d(D, b, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < b ? (D.flags |= 2, b) : L) : (D.flags |= 2, b)) : (D.flags |= 1048576, b);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, b, L, te) {
      return b === null || b.tag !== 6 ? (b = bu(L, D.mode, te), b.return = D, b) : (b = c(b, L), b.return = D, b);
    }
    function T(D, b, L, te) {
      var ve = L.type;
      return ve === ee ? K(D, b, L.props.children, te, L.key) : b !== null && (b.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === ae && Av(ve) === b.type) ? (te = c(b, L.props), te.ref = vs(D, b, L), te.return = D, te) : (te = df(L.type, L.key, L.props, null, D.mode, te), te.ref = vs(D, b, L), te.return = D, te);
    }
    function U(D, b, L, te) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== L.containerInfo || b.stateNode.implementation !== L.implementation ? (b = qd(L, D.mode, te), b.return = D, b) : (b = c(b, L.children || []), b.return = D, b);
    }
    function K(D, b, L, te, ve) {
      return b === null || b.tag !== 7 ? (b = Ml(L, D.mode, te, ve), b.return = D, b) : (b = c(b, L), b.return = D, b);
    }
    function X(D, b, L) {
      if (typeof b == "string" && b !== "" || typeof b == "number") return b = bu("" + b, D.mode, L), b.return = D, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case ut:
            return L = df(b.type, b.key, b.props, null, D.mode, L), L.ref = vs(D, null, b), L.return = D, L;
          case be:
            return b = qd(b, D.mode, L), b.return = D, b;
          case ae:
            var te = b._init;
            return X(D, te(b._payload), L);
        }
        if (Or(b) || se(b)) return b = Ml(b, D.mode, L, null), b.return = D, b;
        lo(D, b);
      }
      return null;
    }
    function q(D, b, L, te) {
      var ve = b !== null ? b.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ve !== null ? null : E(D, b, "" + L, te);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case ut:
            return L.key === ve ? T(D, b, L, te) : null;
          case be:
            return L.key === ve ? U(D, b, L, te) : null;
          case ae:
            return ve = L._init, q(
              D,
              b,
              ve(L._payload),
              te
            );
        }
        if (Or(L) || se(L)) return ve !== null ? null : K(D, b, L, te, null);
        lo(D, L);
      }
      return null;
    }
    function Ee(D, b, L, te, ve) {
      if (typeof te == "string" && te !== "" || typeof te == "number") return D = D.get(L) || null, E(b, D, "" + te, ve);
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case ut:
            return D = D.get(te.key === null ? L : te.key) || null, T(b, D, te, ve);
          case be:
            return D = D.get(te.key === null ? L : te.key) || null, U(b, D, te, ve);
          case ae:
            var Fe = te._init;
            return Ee(D, b, L, Fe(te._payload), ve);
        }
        if (Or(te) || se(te)) return D = D.get(L) || null, K(b, D, te, ve, null);
        lo(b, te);
      }
      return null;
    }
    function _e(D, b, L, te) {
      for (var ve = null, Fe = null, $e = b, et = b = 0, Qn = null; $e !== null && et < L.length; et++) {
        $e.index > et ? (Qn = $e, $e = null) : Qn = $e.sibling;
        var Ft = q(D, $e, L[et], te);
        if (Ft === null) {
          $e === null && ($e = Qn);
          break;
        }
        n && $e && Ft.alternate === null && r(D, $e), b = d(Ft, b, et), Fe === null ? ve = Ft : Fe.sibling = Ft, Fe = Ft, $e = Qn;
      }
      if (et === L.length) return l(D, $e), pn && Cl(D, et), ve;
      if ($e === null) {
        for (; et < L.length; et++) $e = X(D, L[et], te), $e !== null && (b = d($e, b, et), Fe === null ? ve = $e : Fe.sibling = $e, Fe = $e);
        return pn && Cl(D, et), ve;
      }
      for ($e = o(D, $e); et < L.length; et++) Qn = Ee($e, D, et, L[et], te), Qn !== null && (n && Qn.alternate !== null && $e.delete(Qn.key === null ? et : Qn.key), b = d(Qn, b, et), Fe === null ? ve = Qn : Fe.sibling = Qn, Fe = Qn);
      return n && $e.forEach(function(Ul) {
        return r(D, Ul);
      }), pn && Cl(D, et), ve;
    }
    function Oe(D, b, L, te) {
      var ve = se(L);
      if (typeof ve != "function") throw Error(F(150));
      if (L = ve.call(L), L == null) throw Error(F(151));
      for (var Fe = ve = null, $e = b, et = b = 0, Qn = null, Ft = L.next(); $e !== null && !Ft.done; et++, Ft = L.next()) {
        $e.index > et ? (Qn = $e, $e = null) : Qn = $e.sibling;
        var Ul = q(D, $e, Ft.value, te);
        if (Ul === null) {
          $e === null && ($e = Qn);
          break;
        }
        n && $e && Ul.alternate === null && r(D, $e), b = d(Ul, b, et), Fe === null ? ve = Ul : Fe.sibling = Ul, Fe = Ul, $e = Qn;
      }
      if (Ft.done) return l(
        D,
        $e
      ), pn && Cl(D, et), ve;
      if ($e === null) {
        for (; !Ft.done; et++, Ft = L.next()) Ft = X(D, Ft.value, te), Ft !== null && (b = d(Ft, b, et), Fe === null ? ve = Ft : Fe.sibling = Ft, Fe = Ft);
        return pn && Cl(D, et), ve;
      }
      for ($e = o(D, $e); !Ft.done; et++, Ft = L.next()) Ft = Ee($e, D, et, Ft.value, te), Ft !== null && (n && Ft.alternate !== null && $e.delete(Ft.key === null ? et : Ft.key), b = d(Ft, b, et), Fe === null ? ve = Ft : Fe.sibling = Ft, Fe = Ft);
      return n && $e.forEach(function(Ry) {
        return r(D, Ry);
      }), pn && Cl(D, et), ve;
    }
    function On(D, b, L, te) {
      if (typeof L == "object" && L !== null && L.type === ee && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case ut:
            e: {
              for (var ve = L.key, Fe = b; Fe !== null; ) {
                if (Fe.key === ve) {
                  if (ve = L.type, ve === ee) {
                    if (Fe.tag === 7) {
                      l(D, Fe.sibling), b = c(Fe, L.props.children), b.return = D, D = b;
                      break e;
                    }
                  } else if (Fe.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === ae && Av(ve) === Fe.type) {
                    l(D, Fe.sibling), b = c(Fe, L.props), b.ref = vs(D, Fe, L), b.return = D, D = b;
                    break e;
                  }
                  l(D, Fe);
                  break;
                } else r(D, Fe);
                Fe = Fe.sibling;
              }
              L.type === ee ? (b = Ml(L.props.children, D.mode, te, L.key), b.return = D, D = b) : (te = df(L.type, L.key, L.props, null, D.mode, te), te.ref = vs(D, b, L), te.return = D, D = te);
            }
            return m(D);
          case be:
            e: {
              for (Fe = L.key; b !== null; ) {
                if (b.key === Fe) if (b.tag === 4 && b.stateNode.containerInfo === L.containerInfo && b.stateNode.implementation === L.implementation) {
                  l(D, b.sibling), b = c(b, L.children || []), b.return = D, D = b;
                  break e;
                } else {
                  l(D, b);
                  break;
                }
                else r(D, b);
                b = b.sibling;
              }
              b = qd(L, D.mode, te), b.return = D, D = b;
            }
            return m(D);
          case ae:
            return Fe = L._init, On(D, b, Fe(L._payload), te);
        }
        if (Or(L)) return _e(D, b, L, te);
        if (se(L)) return Oe(D, b, L, te);
        lo(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, b !== null && b.tag === 6 ? (l(D, b.sibling), b = c(b, L), b.return = D, D = b) : (l(D, b), b = bu(L, D.mode, te), b.return = D, D = b), m(D)) : l(D, b);
    }
    return On;
  }
  var ri = Fv(!0), sr = Fv(!1), ce = Jr(null), ga = null, _r = null, Sd = null;
  function Ed() {
    Sd = _r = ga = null;
  }
  function Cd(n) {
    var r = ce.current;
    Qt(ce), n._currentValue = r;
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
      if (ga === null) throw Error(F(308));
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
  var Aa = !1;
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
    Aa = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, U = T.next;
      T.next = null, m === null ? d = U : m.next = U, m = T;
      var K = n.alternate;
      K !== null && (K = K.updateQueue, E = K.lastBaseUpdate, E !== m && (E === null ? K.firstBaseUpdate = U : E.next = U, K.lastBaseUpdate = T));
    }
    if (d !== null) {
      var X = c.baseState;
      m = 0, K = U = T = null, E = d;
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
            var _e = n, Oe = E;
            switch (q = r, Ee = l, Oe.tag) {
              case 1:
                if (_e = Oe.payload, typeof _e == "function") {
                  X = _e.call(Ee, X, q);
                  break e;
                }
                X = _e;
                break e;
              case 3:
                _e.flags = _e.flags & -65537 | 128;
              case 0:
                if (_e = Oe.payload, q = typeof _e == "function" ? _e.call(Ee, X, q) : _e, q == null) break e;
                X = ie({}, X, q);
                break e;
              case 2:
                Aa = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, q = c.effects, q === null ? c.effects = [E] : q.push(E));
        } else Ee = { eventTime: Ee, lane: q, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, K === null ? (U = K = Ee, T = X) : K = K.next = Ee, m |= q;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          q = E, E = q.next, q.next = null, c.lastBaseUpdate = q, c.shared.pending = null;
        }
      } while (!0);
      if (K === null && (T = X), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = K, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Eu |= m, n.lanes = m, n.memoizedState = X;
    }
  }
  function xd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(F(191, c));
        c.call(o);
      }
    }
  }
  var oo = {}, Ci = Jr(oo), hs = Jr(oo), ms = Jr(oo);
  function fu(n) {
    if (n === oo) throw Error(F(174));
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
  var Ae = He.ReactCurrentDispatcher, Rt = He.ReactCurrentBatchConfig, Ot = 0, st = null, en = null, Yn = null, Oc = !1, gs = !1, Ss = 0, Dd = 0;
  function Y() {
    throw Error(F(321));
  }
  function Hn(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Za(n[l], r[l])) return !1;
    return !0;
  }
  function Qe(n, r, l, o, c, d) {
    if (Ot = d, st = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ae.current = n === null || n.memoizedState === null ? Ic : Wc, n = l(o, c), gs) {
      d = 0;
      do {
        if (gs = !1, Ss = 0, 25 <= d) throw Error(F(301));
        d += 1, Yn = en = null, r.updateQueue = null, Ae.current = xs, n = l(o, c);
      } while (gs);
    }
    if (Ae.current = qt, r = en !== null && en.next !== null, Ot = 0, Yn = en = st = null, Oc = !1, r) throw Error(F(300));
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
      if (n === null) throw Error(F(310));
      en = n, n = { memoizedState: en.memoizedState, baseState: en.baseState, baseQueue: en.baseQueue, queue: en.queue, next: null }, Yn === null ? st.memoizedState = Yn = n : Yn = Yn.next = n;
    }
    return Yn;
  }
  function ta(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function du(n) {
    var r = tr(), l = r.queue;
    if (l === null) throw Error(F(311));
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
      var E = m = null, T = null, U = d;
      do {
        var K = U.lane;
        if ((Ot & K) === K) T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var X = {
            lane: K,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = X, m = o) : T = T.next = X, st.lanes |= K, Eu |= K;
        }
        U = U.next;
      } while (U !== null && U !== d);
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
    if (l === null) throw Error(F(311));
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
  function Nc(n, r) {
    var l = st, o = tr(), c = r(), d = !Za(o.memoizedState, c);
    if (d && (o.memoizedState = c, nr = !0), o = o.queue, Es(zc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Yn !== null && Yn.memoizedState.tag & 1) {
      if (l.flags |= 2048, pu(9, Mc.bind(null, l, o, c, r), void 0, null), Pn === null) throw Error(F(349));
      Ot & 30 || Lc(l, r, c);
    }
    return c;
  }
  function Lc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = st.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, st.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Mc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Uc(r) && Ac(n);
  }
  function zc(n, r, l) {
    return l(function() {
      Uc(r) && Ac(n);
    });
  }
  function Uc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Za(n, l);
    } catch {
      return !0;
    }
  }
  function Ac(n) {
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
    return Ot & 21 ? (Za(l, r) || (l = ql(), st.lanes |= l, Eu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, nr = !0), n.memoizedState = l);
  }
  function Vv(n, r) {
    var l = Mt;
    Mt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Rt.transition;
    Rt.transition = {};
    try {
      n(!1), r();
    } finally {
      Mt = l, Rt.transition = o;
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
  var qt = { readContext: Gt, useCallback: Y, useContext: Y, useEffect: Y, useImperativeHandle: Y, useInsertionEffect: Y, useLayoutEffect: Y, useMemo: Y, useReducer: Y, useRef: Y, useState: Y, useDebugValue: Y, useDeferredValue: Y, useTransition: Y, useMutableSource: Y, useSyncExternalStore: Y, useId: Y, unstable_isNewReconciler: !1 }, Ic = { readContext: Gt, useCallback: function(n, r) {
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
      if (l === void 0) throw Error(F(407));
      l = l();
    } else {
      if (l = r(), Pn === null) throw Error(F(349));
      Ot & 30 || Lc(o, r, l);
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
      var l = Si, o = Ur;
      l = (o & ~(1 << 32 - Nr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ss++, 0 < l && (r += "H" + l.toString(32)), r += ":";
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
    useSyncExternalStore: Nc,
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
  }, useMutableSource: co, useSyncExternalStore: Nc, useId: vo, unstable_isNewReconciler: !1 };
  function ra(n, r) {
    if (n && n.defaultProps) {
      r = ie({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Od(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ie({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? pe(n) === n : !1;
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
    var o = !1, c = Et, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Gt(d) : (c = Tn(r) ? Ua : yn.current, o = r.contextTypes, d = (o = o != null) ? ya(n, c) : Et), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Qc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Gc(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Qc.enqueueReplaceState(r, r.state, null);
  }
  function Nd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Rl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Gt(d) : (d = Tn(r) ? Ua : yn.current, c.context = ya(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Od(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Qc.enqueueReplaceState(c, c.state, null), kc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _l(n, r) {
    try {
      var l = "", o = r;
      do
        l += tt(o), o = o.return;
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
  function Ld(n, r) {
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
      Dl || (Dl = !0, Ms = o), Ld(n, r);
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
        Ld(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ld(n, r), typeof o != "function" && (Ha === null ? Ha = /* @__PURE__ */ new Set([this]) : Ha.add(this));
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
    return uo(r, c), o = Qe(n, r, l, o, d, c), l = xl(), n !== null && !nr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (pn && l && vd(r), r.flags |= 1, kn(n, r, o, c), r.child);
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
    return r.flags |= 1, n = Ll(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function mu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Zo(d, o) && n.ref === r.ref) if (nr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (nr = !0);
      else return r.lanes = n.lanes, cr(n, r, c);
    }
    return Xc(n, r, l, o, c);
  }
  function vt(n, r, l) {
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
    var d = Tn(l) ? Ua : yn.current;
    return d = ya(r, d), uo(r, c), l = Qe(n, r, l, o, d, c), o = xl(), n !== null && !nr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (pn && o && vd(r), r.flags |= 1, kn(n, r, l, c), r.child);
  }
  function cy(n, r, l, o, c) {
    if (Tn(l)) {
      var d = !0;
      uu(r);
    } else d = !1;
    if (uo(r, c), r.stateNode === null) Fa(n, r), Iv(r, l, o), Nd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Gt(U) : (U = Tn(l) ? Ua : yn.current, U = ya(r, U));
      var K = l.getDerivedStateFromProps, X = typeof K == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      X || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Gc(r, m, o, U), Aa = !1;
      var q = r.memoizedState;
      m.state = q, kc(r, o, m, c), T = r.memoizedState, E !== o || q !== T || Fn.current || Aa ? (typeof K == "function" && (Od(r, l, K, o), T = r.memoizedState), (E = Aa || Yv(r, l, E, o, q, T, U)) ? (X || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Hv(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : ra(r.type, E), m.props = U, X = r.pendingProps, q = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Gt(T) : (T = Tn(l) ? Ua : yn.current, T = ya(r, T));
      var Ee = l.getDerivedStateFromProps;
      (K = typeof Ee == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== X || q !== T) && Gc(r, m, o, T), Aa = !1, q = r.memoizedState, m.state = q, kc(r, o, m, c);
      var _e = r.memoizedState;
      E !== X || q !== _e || Fn.current || Aa ? (typeof Ee == "function" && (Od(r, l, Ee, o), _e = r.memoizedState), (U = Aa || Yv(r, l, U, o, q, _e, T) || !1) ? (K || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, _e, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, _e, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = _e), m.props = o, m.state = _e, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Ud(n, r, l, o, d, c);
  }
  function Ud(n, r, l, o, c, d) {
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
  var Ad = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Zc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Gv(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), an(gn, c & 1), n === null)
      return gd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = xo(m, o, 0, null), n = Ml(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Zc(l), r.memoizedState = Ad, n) : _s(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return qv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Ll(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Ll(E, d) : (d = Ml(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Zc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Ad, o;
    }
    return d = n.child, n = d.sibling, o = Ll(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function _s(n, r) {
    return r = xo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ef(n, r, l, o) {
    return o !== null && ps(o), ri(r, n.child, null, l), n = _s(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function qv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = qc(Error(F(422))), ef(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = xo({ mode: "visible", children: o.children }, c, 0, null), d = Ml(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ri(r, n.child, null, m), r.child.memoizedState = Zc(m), r.memoizedState = Ad, d);
    if (!(r.mode & 1)) return ef(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(F(419)), o = qc(d, o, void 0), ef(n, r, m, o);
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
      return Yd(), o = qc(Error(F(421))), ef(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = my.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ea = ei(c.nextSibling), Zr = r, pn = !0, ni = null, n !== null && (or[jn++] = Ur, or[jn++] = Si, or[jn++] = ou, Ur = n.id, Si = n.overflow, ou = r), r = _s(r, o.children), r.flags |= 4096, r);
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
    if (n !== null && r.child !== n.child) throw Error(F(153));
    if (r.child !== null) {
      for (n = r.child, l = Ll(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Ll(n, n.pendingProps), l.return = r;
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
        an(ce, o._currentValue), o._currentValue = c;
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
        return r.lanes = 0, vt(n, r, l);
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
          c = ie({}, c, { value: void 0 }), o = ie({}, o, { value: void 0 }), d = [];
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
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (Ke.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (Ke.hasOwnProperty(U) ? (T != null && U === "onScroll" && Yt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
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
            if (r.stateNode === null) throw Error(F(166));
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
              ), c = ["children", "" + E]) : Ke.hasOwnProperty(m) && E != null && m === "onScroll" && Yt("scroll", o);
            }
            switch (l) {
              case "input":
                Ln(o), da(o, d, !0);
                break;
              case "textarea":
                Ln(o), qa(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Cc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Un(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[za] = r, n[ss] = o, mo(n, r, !1, !1), r.stateNode = n;
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
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ie({}, o, { value: void 0 }), Yt("invalid", n);
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
                d === "style" ? Pt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Li(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && pa(n, T) : typeof T == "number" && pa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ke.hasOwnProperty(d) ? T != null && d === "onScroll" && Yt("scroll", n) : T != null && ft(n, d, T, m));
              }
              switch (l) {
                case "input":
                  Ln(n), da(n, o, !1);
                  break;
                case "textarea":
                  Ln(n), qa(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + at(o.value));
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
          if (typeof o != "string" && r.stateNode === null) throw Error(F(166));
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
          if (pn && ea !== null && r.mode & 1 && !(r.flags & 128)) Uv(), Qi(), r.flags |= 98560, d = !1;
          else if (d = _n(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(F(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(F(317));
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
    throw Error(F(156, r.tag));
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
          if (r.alternate === null) throw Error(F(340));
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
  var yu = !1, fr = !1, fy = typeof WeakSet == "function" ? WeakSet : Set, xe = null;
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
          var m = 0, E = -1, T = -1, U = 0, K = 0, X = n, q = null;
          t: for (; ; ) {
            for (var Ee; X !== l || c !== 0 && X.nodeType !== 3 || (E = m + c), X !== d || o !== 0 && X.nodeType !== 3 || (T = m + o), X.nodeType === 3 && (m += X.nodeValue.length), (Ee = X.firstChild) !== null; )
              q = X, X = Ee;
            for (; ; ) {
              if (X === n) break t;
              if (q === l && ++U === c && (E = m), q === d && ++K === o && (T = m), (Ee = X.nextSibling) !== null) break;
              X = q, q = X.parentNode;
            }
            X = Ee;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (os = { focusedElem: n, selectionRange: l }, dl = !1, xe = r; xe !== null; ) if (r = xe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, xe = n;
    else for (; xe !== null; ) {
      r = xe;
      try {
        var _e = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (_e !== null) {
              var Oe = _e.memoizedProps, On = _e.memoizedState, D = r.stateNode, b = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Oe : ra(r.type, Oe), On);
              D.__reactInternalSnapshotBeforeUpdate = b;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(F(163));
        }
      } catch (te) {
        xn(r, r.return, te);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, xe = n;
        break;
      }
      xe = r.return;
    }
    return _e = Pd, Pd = !1, _e;
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
  var Sn = null, Ar = !1;
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
        var o = Sn, c = Ar;
        Sn = null, ja(n, r, l), Sn = o, Ar = c, Sn !== null && (Ar ? (n = Sn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Sn.removeChild(l.stateNode));
        break;
      case 18:
        Sn !== null && (Ar ? (n = Sn, l = l.stateNode, n.nodeType === 8 ? no(n.parentNode, l) : n.nodeType === 1 && no(n, l), Na(n)) : no(Sn, l.stateNode));
        break;
      case 4:
        o = Sn, c = Ar, Sn = l.stateNode.containerInfo, Ar = !0, ja(n, r, l), Sn = o, Ar = c;
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
              Sn = E.stateNode, Ar = !1;
              break e;
            case 3:
              Sn = E.stateNode.containerInfo, Ar = !0;
              break e;
            case 4:
              Sn = E.stateNode.containerInfo, Ar = !0;
              break e;
          }
          E = E.return;
        }
        if (Sn === null) throw Error(F(160));
        qi(d, m, c), Sn = null, Ar = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (U) {
        xn(c, r, U);
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
          } catch (Oe) {
            xn(n, n.return, Oe);
          }
          try {
            yo(5, n, n.return);
          } catch (Oe) {
            xn(n, n.return, Oe);
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
          } catch (Oe) {
            xn(n, n.return, Oe);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Bn(c, d), fn(E, m);
            var U = fn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var K = T[m], X = T[m + 1];
              K === "style" ? Pt(c, X) : K === "dangerouslySetInnerHTML" ? Li(c, X) : K === "children" ? pa(c, X) : ft(c, K, X, U);
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
          } catch (Oe) {
            xn(n, n.return, Oe);
          }
        }
        break;
      case 6:
        if (ai(r, n), ii(n), o & 4) {
          if (n.stateNode === null) throw Error(F(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Oe) {
            xn(n, n.return, Oe);
          }
        }
        break;
      case 3:
        if (ai(r, n), ii(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Na(r.containerInfo);
        } catch (Oe) {
          xn(n, n.return, Oe);
        }
        break;
      case 4:
        ai(r, n), ii(n);
        break;
      case 13:
        ai(r, n), ii(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Bd = Bt())), o & 4 && Zv(n);
        break;
      case 22:
        if (K = l !== null && l.memoizedState !== null, n.mode & 1 ? (fr = (U = fr) || K, ai(r, n), fr = U) : ai(r, n), ii(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !K && n.mode & 1) for (xe = n, K = n.child; K !== null; ) {
            for (X = xe = K; xe !== null; ) {
              switch (q = xe, Ee = q.child, q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  yo(4, q, q.return);
                  break;
                case 1:
                  kl(q, q.return);
                  var _e = q.stateNode;
                  if (typeof _e.componentWillUnmount == "function") {
                    o = q, l = q.return;
                    try {
                      r = o, _e.props = r.memoizedProps, _e.state = r.memoizedState, _e.componentWillUnmount();
                    } catch (Oe) {
                      xn(o, l, Oe);
                    }
                  }
                  break;
                case 5:
                  kl(q, q.return);
                  break;
                case 22:
                  if (q.memoizedState !== null) {
                    nh(X);
                    continue;
                  }
              }
              Ee !== null ? (Ee.return = q, xe = Ee) : nh(X);
            }
            K = K.sibling;
          }
          e: for (K = null, X = n; ; ) {
            if (X.tag === 5) {
              if (K === null) {
                K = X;
                try {
                  c = X.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = X.stateNode, T = X.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = mt("display", m));
                } catch (Oe) {
                  xn(n, n.return, Oe);
                }
              }
            } else if (X.tag === 6) {
              if (K === null) try {
                X.stateNode.nodeValue = U ? "" : X.memoizedProps;
              } catch (Oe) {
                xn(n, n.return, Oe);
              }
            } else if ((X.tag !== 22 && X.tag !== 23 || X.memoizedState === null || X === n) && X.child !== null) {
              X.child.return = X, X = X.child;
              continue;
            }
            if (X === n) break e;
            for (; X.sibling === null; ) {
              if (X.return === null || X.return === n) break e;
              K === X && (K = null), X = X.return;
            }
            K === X && (K = null), X.sibling.return = X.return, X = X.sibling;
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
          throw Error(F(160));
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
            throw Error(F(161));
        }
      } catch (T) {
        xn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Os(n, r, l) {
    xe = n, th(n);
  }
  function th(n, r, l) {
    for (var o = (n.mode & 1) !== 0; xe !== null; ) {
      var c = xe, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || yu;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || fr;
          E = yu;
          var U = fr;
          if (yu = m, (fr = T) && !U) for (xe = c; xe !== null; ) m = xe, T = m.child, m.tag === 22 && m.memoizedState !== null ? Ns(c) : T !== null ? (T.return = m, xe = T) : Ns(c);
          for (; d !== null; ) xe = d, th(d), d = d.sibling;
          xe = c, yu = E, fr = U;
        }
        Vd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, xe = d) : Vd(n);
    }
  }
  function Vd(n) {
    for (; xe !== null; ) {
      var r = xe;
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
                var U = r.alternate;
                if (U !== null) {
                  var K = U.memoizedState;
                  if (K !== null) {
                    var X = K.dehydrated;
                    X !== null && Na(X);
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
              throw Error(F(163));
          }
          fr || r.flags & 512 && af(r);
        } catch (q) {
          xn(r, r.return, q);
        }
      }
      if (r === n) {
        xe = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, xe = l;
        break;
      }
      xe = r.return;
    }
  }
  function nh(n) {
    for (; xe !== null; ) {
      var r = xe;
      if (r === n) {
        xe = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, xe = l;
        break;
      }
      xe = r.return;
    }
  }
  function Ns(n) {
    for (; xe !== null; ) {
      var r = xe;
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
        xe = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, xe = E;
        break;
      }
      xe = r.return;
    }
  }
  var rh = Math.ceil, uf = He.ReactCurrentDispatcher, gu = He.ReactCurrentOwner, Dr = He.ReactCurrentBatchConfig, wt = 0, Pn = null, Dn = null, dr = 0, Ea = 0, go = Jr(0), Wn = 0, Su = null, Eu = 0, Cu = 0, Ls = 0, So = null, la = null, Bd = 0, Eo = 1 / 0, Ki = null, Dl = !1, Ms = null, Ha = null, of = !1, Ol = null, zs = 0, Co = 0, Ro = null, Ru = -1, Us = 0;
  function ln() {
    return wt & 6 ? Bt() : Ru !== -1 ? Ru : Ru = Bt();
  }
  function Ca(n) {
    return n.mode & 1 ? wt & 2 && dr !== 0 ? dr & -dr : su.transition !== null ? (Us === 0 && (Us = ql()), Us) : (n = Mt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Go(n.type)), n) : 1;
  }
  function Ra(n, r, l, o) {
    if (50 < Co) throw Co = 0, Ro = null, Error(F(185));
    fl(n, l, o), (!(wt & 2) || n !== Pn) && (n === Pn && (!(wt & 2) && (Cu |= l), Wn === 4 && Nl(n, dr)), rr(n, o), l === 1 && wt === 0 && !(r.mode & 1) && (Eo = Bt() + 500, fs && zr()));
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
            l = Ai;
            break;
          case 536870912:
            l = Fi;
            break;
          default:
            l = Ai;
        }
        l = sh(l, ah.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function ah(n, r) {
    if (Ru = -1, Us = 0, wt & 6) throw Error(F(327));
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
      if (r === 2 && (c = Hi(n), c !== 0 && (o = c, r = As(n, c))), r === 1) throw l = Su, xu(n, 0), Nl(n, o), rr(n, Bt()), l;
      if (r === 6) Nl(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !js(c) && (r = ff(n, o), r === 2 && (d = Hi(n), d !== 0 && (o = d, r = As(n, d))), r === 1)) throw l = Su, xu(n, 0), Nl(n, o), rr(n, Bt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(F(345));
          case 2:
            wu(n, la, Ki);
            break;
          case 3:
            if (Nl(n, o), (o & 130023424) === o && (r = Bd + 500 - Bt(), 10 < r)) {
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
            if (Nl(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Nr(o);
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
            throw Error(F(329));
        }
      }
    }
    return rr(n, Bt()), n.callbackNode === l ? ah.bind(null, n) : null;
  }
  function As(n, r) {
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
  function Nl(n, r) {
    for (r &= ~Ls, r &= ~Cu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Nr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Hs(n) {
    if (wt & 6) throw Error(F(327));
    To();
    var r = pi(n, 0);
    if (!(r & 1)) return rr(n, Bt()), null;
    var l = ff(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Hi(n);
      o !== 0 && (r = o, l = As(n, o));
    }
    if (l === 1) throw l = Su, xu(n, 0), Nl(n, r), rr(n, Bt()), l;
    if (l === 6) throw Error(F(345));
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
    var l = Dr.transition, o = Mt;
    try {
      if (Dr.transition = null, Mt = 1, n) return n();
    } finally {
      Mt = o, Dr.transition = l, wt = r, !(wt & 6) && zr();
    }
  }
  function $d() {
    Ea = go.current, Qt(go);
  }
  function xu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Nv(l)), Dn !== null) for (l = Dn.return; l !== null; ) {
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
    if (Pn = n, Dn = n = Ll(n.current, null), dr = Ea = r, Wn = 0, Su = null, Ls = Cu = Eu = 0, la = So = null, cu !== null) {
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
        if (Ed(), Ae.current = qt, Oc) {
          for (var o = st.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Oc = !1;
        }
        if (Ot = 0, Yn = en = st = null, gs = !1, Ss = 0, gu.current = null, l === null || l.return === null) {
          Wn = 1, Su = r, Dn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = dr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, K = E, X = K.tag;
            if (!(K.mode & 1) && (X === 0 || X === 11 || X === 15)) {
              var q = K.alternate;
              q ? (K.updateQueue = q.updateQueue, K.memoizedState = q.memoizedState, K.lanes = q.lanes) : (K.updateQueue = null, K.memoizedState = null);
            }
            var Ee = zd(m);
            if (Ee !== null) {
              Ee.flags &= -257, Qv(Ee, m, E, d, r), Ee.mode & 1 && Md(d, U, r), r = Ee, T = U;
              var _e = r.updateQueue;
              if (_e === null) {
                var Oe = /* @__PURE__ */ new Set();
                Oe.add(T), r.updateQueue = Oe;
              } else _e.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Md(d, U, r), Yd();
                break e;
              }
              T = Error(F(426));
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
                var D = ws(d, T, r);
                Pv(d, D);
                break e;
              case 1:
                E = T;
                var b = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof b.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Ha === null || !Ha.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var te = Wv(d, E, r);
                  Pv(d, te);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        lh(l);
      } catch (ve) {
        r = ve, Dn === l && l !== null && (Dn = l = l.return);
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
    (Wn === 0 || Wn === 3 || Wn === 2) && (Wn = 4), Pn === null || !(Eu & 268435455) && !(Cu & 268435455) || Nl(Pn, dr);
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
    if (Ed(), wt = l, uf.current = o, Dn !== null) throw Error(F(261));
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
    var o = Mt, c = Dr.transition;
    try {
      Dr.transition = null, Mt = 1, hy(n, r, l, o);
    } finally {
      Dr.transition = c, Mt = o;
    }
    return null;
  }
  function hy(n, r, l, o) {
    do
      To();
    while (Ol !== null);
    if (wt & 6) throw Error(F(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(F(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Io(n, d), n === Pn && (Dn = Pn = null, dr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || of || (of = !0, sh(Ai, function() {
      return To(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Dr.transition, Dr.transition = null;
      var m = Mt;
      Mt = 1;
      var E = wt;
      wt |= 4, gu.current = null, dy(n, l), eh(l, n), Rv(os), dl = !!au, os = au = null, n.current = l, Os(l), Ka(), wt = E, Mt = m, Dr.transition = d;
    } else n.current = l;
    if (of && (of = !1, Ol = n, zs = c), d = n.pendingLanes, d === 0 && (Ha = null), $o(l.stateNode), rr(n, Bt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Dl) throw Dl = !1, n = Ms, Ms = null, n;
    return zs & 1 && n.tag !== 0 && To(), d = n.pendingLanes, d & 1 ? n === Ro ? Co++ : (Co = 0, Ro = n) : Co = 0, zr(), null;
  }
  function To() {
    if (Ol !== null) {
      var n = Qo(zs), r = Dr.transition, l = Mt;
      try {
        if (Dr.transition = null, Mt = 16 > n ? 16 : n, Ol === null) var o = !1;
        else {
          if (n = Ol, Ol = null, zs = 0, wt & 6) throw Error(F(331));
          var c = wt;
          for (wt |= 4, xe = n.current; xe !== null; ) {
            var d = xe, m = d.child;
            if (xe.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (xe = U; xe !== null; ) {
                    var K = xe;
                    switch (K.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yo(8, K, d);
                    }
                    var X = K.child;
                    if (X !== null) X.return = K, xe = X;
                    else for (; xe !== null; ) {
                      K = xe;
                      var q = K.sibling, Ee = K.return;
                      if (Jv(K), K === U) {
                        xe = null;
                        break;
                      }
                      if (q !== null) {
                        q.return = Ee, xe = q;
                        break;
                      }
                      xe = Ee;
                    }
                  }
                }
                var _e = d.alternate;
                if (_e !== null) {
                  var Oe = _e.child;
                  if (Oe !== null) {
                    _e.child = null;
                    do {
                      var On = Oe.sibling;
                      Oe.sibling = null, Oe = On;
                    } while (Oe !== null);
                  }
                }
                xe = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, xe = m;
            else e: for (; xe !== null; ) {
              if (d = xe, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  yo(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, xe = D;
                break e;
              }
              xe = d.return;
            }
          }
          var b = n.current;
          for (xe = b; xe !== null; ) {
            m = xe;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, xe = L;
            else e: for (m = b; xe !== null; ) {
              if (E = xe, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rf(9, E);
                }
              } catch (ve) {
                xn(E, E.return, ve);
              }
              if (E === m) {
                xe = null;
                break e;
              }
              var te = E.sibling;
              if (te !== null) {
                te.return = E.return, xe = te;
                break e;
              }
              xe = E.return;
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
        Mt = l, Dr.transition = r;
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
    o !== null && o.delete(r), r = ln(), n.pingedLanes |= n.suspendedLanes & l, Pn === n && (dr & l) === l && (Wn === 4 || Wn === 3 && (dr & 130023424) === dr && 500 > Bt() - Bd ? xu(n, 0) : Ls |= l), rr(n, r);
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
        throw Error(F(314));
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
        uo(r, l), c = Qe(null, r, o, n, c, l);
        var d = xl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Tn(o) ? (d = !0, uu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Rl(r), c.updater = Qc, r.stateNode = c, c._reactInternals = r, Nd(r, o, n, l), r = Ud(null, r, o, !0, d, l)) : (r.tag = 0, pn && d && vd(r), kn(null, r, c, l), r = r.child), r;
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
          throw Error(F(
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
          if (Jc(r), n === null) throw Error(F(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Hv(n, r), kc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _l(Error(F(423)), r), r = ho(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _l(Error(F(424)), r), r = ho(n, r, o, l, c);
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
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, an(ce, o._currentValue), o._currentValue = m, d !== null) if (Za(d.value, m)) {
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
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var K = U.pending;
                      K === null ? T.next = T : (T.next = K.next, K.next = T), U.pending = T;
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
              if (m = d.return, m === null) throw Error(F(341));
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), Fa(n, r), r.tag = 1, Tn(o) ? (n = !0, uu(r)) : n = !1, uo(r, l), Iv(r, o, c), Nd(r, o, c, l), Ud(null, r, o, !0, n, l);
      case 19:
        return ia(n, r, l);
      case 22:
        return vt(n, r, l);
    }
    throw Error(F(156, r.tag));
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
      if (n === kt) return 14;
    }
    return 2;
  }
  function Ll(n, r) {
    var l = n.alternate;
    return l === null ? (l = Pa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function df(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Gd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case ee:
        return Ml(l.children, c, d, r);
      case me:
        m = 8, c |= 8;
        break;
      case Pe:
        return n = Pa(12, l, r, c | 2), n.elementType = Pe, n.lanes = d, n;
      case dt:
        return n = Pa(13, l, r, c), n.elementType = dt, n.lanes = d, n;
      case Le:
        return n = Pa(19, l, r, c), n.elementType = Le, n.lanes = d, n;
      case Ve:
        return xo(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Xe:
            m = 10;
            break e;
          case _t:
            m = 9;
            break e;
          case Ye:
            m = 11;
            break e;
          case kt:
            m = 14;
            break e;
          case ae:
            m = 16, o = null;
            break e;
        }
        throw Error(F(130, n == null ? n : typeof n, ""));
    }
    return r = Pa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ml(n, r, l, o) {
    return n = Pa(7, n, o, r), n.lanes = l, n;
  }
  function xo(n, r, l, o) {
    return n = Pa(22, n, o, r), n.elementType = Ve, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
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
    return { $$typeof: be, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function dh(n) {
    if (!n) return Et;
    n = n._reactInternals;
    e: {
      if (pe(n) !== n || n.tag !== 1) throw Error(F(170));
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
      throw Error(F(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Tn(l)) return Lv(n, l, r);
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
    if (r === null) throw Error(F(409));
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
          var U = hf(m);
          d.call(U);
        };
      }
      var m = Kd(r, o, n, 0, null, !1, !1, "", hh);
      return n._reactRootContainer = m, n[Ii] = m.current, ls(n.nodeType === 8 ? n.parentNode : n), Tu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = hf(T);
        E.call(U);
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
  }, zt = function(n) {
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
    return Mt;
  }, Ze = function(n, r) {
    var l = Mt;
    try {
      return Mt = n, r();
    } finally {
      Mt = l;
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
              if (!c) throw Error(F(90));
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
  var mh = { usingClientEntryPoint: !1, Events: [cs, Ue, Wi, Da, Mi, sf] }, Ps = { findFiberByHostInstance: lu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Cy = { bundleType: Ps.bundleType, version: Ps.version, rendererPackageName: Ps.rendererPackageName, rendererConfig: Ps.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: He.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = yt(n), n === null ? null : n.stateNode;
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
    if (!Jd(r)) throw Error(F(200));
    return fh(n, r, null, l);
  }, Wa.createRoot = function(n, r) {
    if (!Jd(n)) throw Error(F(299));
    var l = !1, o = "", c = Xd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = pf(n, 1, !1, null, null, l, !1, o, c), n[Ii] = r.current, ls(n.nodeType === 8 ? n.parentNode : n), new zl(r);
  }, Wa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(F(188)) : (n = Object.keys(n).join(","), Error(F(268, n)));
    return n = yt(r), n = n === null ? null : n.stateNode, n;
  }, Wa.flushSync = function(n) {
    return Tu(n);
  }, Wa.hydrate = function(n, r, l) {
    if (!gf(r)) throw Error(F(200));
    return Sf(null, n, r, !0, l);
  }, Wa.hydrateRoot = function(n, r, l) {
    if (!Jd(n)) throw Error(F(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Xd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Kd(r, null, n, 1, l ?? null, c, !1, d, m), n[Ii] = r.current, ls(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new yf(r);
  }, Wa.render = function(n, r, l) {
    if (!gf(r)) throw Error(F(200));
    return Sf(null, n, r, !1, l);
  }, Wa.unmountComponentAtNode = function(n) {
    if (!gf(n)) throw Error(F(40));
    return n._reactRootContainer ? (Tu(function() {
      Sf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ii] = null;
      });
    }), !0) : !1;
  }, Wa.unstable_batchedUpdates = sf, Wa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!gf(l)) throw Error(F(200));
    if (n == null || n._reactInternals === void 0) throw Error(F(38));
    return Sf(n, r, l, !1, o);
  }, Wa.version = "18.3.1-next-f1338f8080-20240426", Wa;
}
var Qa = {}, sT;
function f1() {
  if (sT) return Qa;
  sT = 1;
  var W = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return W.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var re = tv(), F = pT(), ye = re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ke = !1;
    function ct(e) {
      Ke = e;
    }
    function lt(e) {
      if (!Ke) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ie("warn", e, a);
      }
    }
    function S(e) {
      if (!Ke) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ie("error", e, a);
      }
    }
    function Ie(e, t, a) {
      {
        var i = ye.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ge = 0, ue = 1, Ne = 2, k = 3, Q = 4, j = 5, Z = 6, De = 7, ht = 8, We = 9, ft = 10, He = 11, ut = 12, be = 13, ee = 14, me = 15, Pe = 16, Xe = 17, _t = 18, Ye = 19, dt = 21, Le = 22, kt = 23, ae = 24, Ve = 25, $ = !0, se = !1, ie = !1, w = !1, B = !1, Te = !0, Je = !0, tt = !0, St = !0, Lt = /* @__PURE__ */ new Set(), at = {}, Dt = {};
    function Wt(e, t) {
      Ln(e, t), Ln(e + "Capture", t);
    }
    function Ln(e, t) {
      at[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), at[e] = t;
      {
        var a = e.toLowerCase();
        Dt[a] = e, e === "onDoubleClick" && (Dt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Lt.add(t[i]);
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
    var Xn = 0, Rr = 1, qa = 2, Un = 3, lr = 4, Wr = 5, Li = 6, pa = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", le = pa + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", je = new RegExp("^[" + pa + "][" + le + "]*$"), mt = {}, Pt = {};
    function sn(e) {
      return ir.call(Pt, e) ? !0 : ir.call(mt, e) ? !1 : je.test(e) ? (Pt[e] = !0, !0) : (mt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
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
          case Un:
            return !t;
          case lr:
            return t === !1;
          case Wr:
            return isNaN(t);
          case Li:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function un(e) {
      return Vt.hasOwnProperty(e) ? Vt[e] : null;
    }
    function Kt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === qa || t === Un || t === lr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
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
        Un,
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
        Un,
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
        Li,
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
          if (i.type === Un)
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
            e[p] = v === Un ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, x;
          _ === Un || _ === lr && a === !0 ? x = "" : (zn(a, y), x = "" + a, u.sanitizeURL && zi(x.toString())), g ? e.setAttributeNS(g, y, x) : e.setAttribute(y, x);
        }
      }
    }
    var ur = Symbol.for("react.element"), ma = Symbol.for("react.portal"), Qr = Symbol.for("react.fragment"), ci = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), Ui = Symbol.for("react.provider"), R = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), pe = Symbol.for("react.suspense_list"), Ct = Symbol.for("react.memo"), nt = Symbol.for("react.lazy"), Tt = Symbol.for("react.scope"), yt = Symbol.for("react.debug_trace_mode"), wn = Symbol.for("react.offscreen"), on = Symbol.for("react.legacy_hidden"), dn = Symbol.for("react.cache"), Tr = Symbol.for("react.tracing_marker"), Ka = Symbol.iterator, Bt = "@@iterator";
    function mn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ka && e[Ka] || e[Bt];
      return typeof t == "function" ? t : null;
    }
    var ot = Object.assign, di = 0, Ai, lc, Fi, ol, Gr, $o, Nr;
    function Yo() {
    }
    Yo.__reactDisabledLog = !0;
    function uc() {
      {
        if (di === 0) {
          Ai = console.log, lc = console.info, Fi = console.warn, ol = console.error, Gr = console.group, $o = console.groupCollapsed, Nr = console.groupEnd;
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
              value: Ai
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
              value: Nr
            })
          });
        }
        di < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ji = ye.ReactCurrentDispatcher, sl;
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
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
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
      var x = e ? e.displayName || e.name : "", z = x ? qr(x) : "";
      return typeof e == "function" && cl.set(e, z), z;
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
        case fe:
          return qr("Suspense");
        case pe:
          return qr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case G:
            return Kl(e.render);
          case Ct:
            return Io(e.type, t, a);
          case nt: {
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
        case j:
          return qr(e.type);
        case Pe:
          return qr("Lazy");
        case be:
          return qr("Suspense");
        case Ye:
          return qr("SuspenseList");
        case ge:
        case Ne:
        case me:
          return Kl(e.type);
        case He:
          return Kl(e.type.render);
        case ue:
          return ql(e.type);
        default:
          return "";
      }
    }
    function Mt(e) {
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
    function zt(e) {
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
        case fe:
          return "Suspense";
        case pe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Pu(t) + ".Consumer";
          case Ui:
            var a = e;
            return Pu(a._context) + ".Provider";
          case G:
            return Qo(e, e.render, "ForwardRef");
          case Ct:
            var i = e.displayName || null;
            return i !== null ? i : zt(e.type) || "Memo";
          case nt: {
            var u = e, s = u._payload, f = u._init;
            try {
              return zt(f(s));
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
    function Ze(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case ae:
          return "Cache";
        case We:
          var i = a;
          return vi(i) + ".Consumer";
        case ft:
          var u = a;
          return vi(u._context) + ".Provider";
        case _t:
          return "DehydratedFragment";
        case He:
          return sc(a, a.render, "ForwardRef");
        case De:
          return "Fragment";
        case j:
          return a;
        case Q:
          return "Portal";
        case k:
          return "Root";
        case Z:
          return "Text";
        case Pe:
          return zt(a);
        case ht:
          return a === ci ? "StrictMode" : "Mode";
        case Le:
          return "Offscreen";
        case ut:
          return "Profiler";
        case dt:
          return "Scope";
        case be:
          return "Suspense";
        case Ye:
          return "SuspenseList";
        case Ve:
          return "TracingMarker";
        case ue:
        case ge:
        case Xe:
        case Ne:
        case ee:
        case me:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Xl = ye.ReactDebugCurrentFrame, Zn = null, Kr = !1;
    function Lr() {
      {
        if (Zn === null)
          return null;
        var e = Zn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ze(e);
      }
      return null;
    }
    function hi() {
      return Zn === null ? "" : Mt(Zn);
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
    function Na(e) {
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
    function La(e) {
      Bu(e) || (e._valueTracker = Na(e));
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
      Vu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !pl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), pl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Yu && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), Yu = !0);
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
      t.hasOwnProperty("value") ? we(a, t.type, u) : t.hasOwnProperty("defaultValue") && we(a, t.type, Mr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function M(e, t, a) {
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
    function H(e, t) {
      var a = e;
      C(a, t), ne(a, t);
    }
    function ne(e, t) {
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
    function we(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Pi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = xr(e._wrapperState.initialValue) : e.defaultValue !== xr(a) && (e.defaultValue = xr(a)));
    }
    var Se = !1, Ge = !1, gt = !1;
    function $t(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? re.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ge || (Ge = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (gt || (gt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Se && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Se = !0);
    }
    function Jt(e, t) {
      t.value != null && e.setAttribute("value", xr(Mr(t.value)));
    }
    var Zt = Array.isArray;
    function pt(e) {
      return Zt(e);
    }
    var rn;
    rn = !1;
    function bn() {
      var e = Lr();
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
            var i = pt(e[a]);
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
        for (var g = xr(Mr(a)), _ = null, x = 0; x < u.length; x++) {
          if (u[x].value === g) {
            u[x].selected = !0, i && (u[x].defaultSelected = !0);
            return;
          }
          _ === null && !u[x].disabled && (_ = u[x]);
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
      Vu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !nv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component"), nv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (pt(u)) {
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
    }), Xr = 1, $i = 3, An = 8, Yi = 9, Xo = 11, vl = function(e, t) {
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
        return typeof a == "boolean" && fn(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), wr[t] = !0, !0) : y ? !0 : fn(t, a, v, !1) ? (wr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Un && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), wr[t] = !0), !0);
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
    var Nv = Rc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Tc = document.createElement("react");
      Nv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, x = !0, z = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function P() {
          Tc.removeEventListener(V, Be, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var de = Array.prototype.slice.call(arguments, 3);
        function Be() {
          _ = !0, P(), a.apply(i, de), x = !1;
        }
        var ze, At = !1, bt = !1;
        function O(N) {
          if (ze = N.error, At = !0, ze === null && N.colno === 0 && N.lineno === 0 && (bt = !0), N.defaultPrevented && ze != null && typeof ze == "object")
            try {
              ze._suppressLogging = !0;
            } catch {
            }
        }
        var V = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), Tc.addEventListener(V, Be, !1), g.initEvent(V, !1, !1), Tc.dispatchEvent(g), A && Object.defineProperty(window, "event", A), _ && x && (At ? bt && (ze = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ze = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ze)), window.removeEventListener("error", O), !_)
          return P(), Rc.apply(this, arguments);
      };
    }
    var oy = Nv, to = !1, no = null, ei = !1, xc = null, ro = {
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
    var Ue = (
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
    ), Et = (
      /*                   */
      128
    ), yn = (
      /*            */
      256
    ), Fn = (
      /*                          */
      512
    ), Ua = (
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
    ), Lv = (
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
      xt | Ua | 0
    ), io = Rn | xt | Jr | Qt | Fn | Tn | gi, El = xt | an | Fn | gi, or = ya | Jr, jn = yl | pd | ds, ou = ye.ReactCurrentOwner;
    function Ur(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Rn | Tn)) !== Ue && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === k ? a : null;
    }
    function Si(e) {
      if (e.tag === be) {
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
      return e.tag === k ? e.stateNode.containerInfo : null;
    }
    function Mv(e) {
      return Ur(e) === e;
    }
    function vd(e) {
      {
        var t = ou.current;
        if (t !== null && t.tag === ue) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ze(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ao(e);
      return u ? Ur(u) === u : !1;
    }
    function bc(e) {
      if (Ur(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Zr(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ur(e);
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
      if (i.tag !== k)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ea(e) {
      var t = Zr(e);
      return t !== null ? pn(t) : null;
    }
    function pn(e) {
      if (e.tag === j || e.tag === Z)
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
      if (e.tag === j || e.tag === Z)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Q) {
          var a = hd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var md = F.unstable_scheduleCallback, yd = F.unstable_cancelCallback, gd = F.unstable_shouldYield, zv = F.unstable_requestPaint, _n = F.unstable_now, Uv = F.unstable_getCurrentPriorityLevel, Qi = F.unstable_ImmediatePriority, ps = F.unstable_UserBlockingPriority, su = F.unstable_NormalPriority, vs = F.unstable_LowPriority, lo = F.unstable_IdlePriority, Av = F.unstable_yieldValue, Fv = F.unstable_setDisableYieldValue, ri = null, sr = null, ce = null, ga = !1, _r = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Sd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Je && (e = ot({}, e, {
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
          var a = (e.current.flags & Et) === Et;
          if (tt) {
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
      if (typeof Av == "function" && (Fv(e), ct(e)), sr && typeof sr.setStrictMode == "function")
        try {
          sr.setStrictMode(ri, e);
        } catch (t) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function cu(e) {
      ce = e;
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
      ce !== null && typeof ce.markCommitStarted == "function" && ce.markCommitStarted(e);
    }
    function Ei() {
      ce !== null && typeof ce.markCommitStopped == "function" && ce.markCommitStopped();
    }
    function Aa(e) {
      ce !== null && typeof ce.markComponentRenderStarted == "function" && ce.markComponentRenderStarted(e);
    }
    function Rl() {
      ce !== null && typeof ce.markComponentRenderStopped == "function" && ce.markComponentRenderStopped();
    }
    function Hv(e) {
      ce !== null && typeof ce.markComponentPassiveEffectMountStarted == "function" && ce.markComponentPassiveEffectMountStarted(e);
    }
    function Gi() {
      ce !== null && typeof ce.markComponentPassiveEffectMountStopped == "function" && ce.markComponentPassiveEffectMountStopped();
    }
    function Tl(e) {
      ce !== null && typeof ce.markComponentPassiveEffectUnmountStarted == "function" && ce.markComponentPassiveEffectUnmountStarted(e);
    }
    function _c() {
      ce !== null && typeof ce.markComponentPassiveEffectUnmountStopped == "function" && ce.markComponentPassiveEffectUnmountStopped();
    }
    function Pv(e) {
      ce !== null && typeof ce.markComponentLayoutEffectMountStarted == "function" && ce.markComponentLayoutEffectMountStarted(e);
    }
    function kc() {
      ce !== null && typeof ce.markComponentLayoutEffectMountStopped == "function" && ce.markComponentLayoutEffectMountStopped();
    }
    function xd(e) {
      ce !== null && typeof ce.markComponentLayoutEffectUnmountStarted == "function" && ce.markComponentLayoutEffectUnmountStarted(e);
    }
    function oo() {
      ce !== null && typeof ce.markComponentLayoutEffectUnmountStopped == "function" && ce.markComponentLayoutEffectUnmountStopped();
    }
    function Ci(e, t, a) {
      ce !== null && typeof ce.markComponentErrored == "function" && ce.markComponentErrored(e, t, a);
    }
    function hs(e, t, a) {
      ce !== null && typeof ce.markComponentSuspended == "function" && ce.markComponentSuspended(e, t, a);
    }
    function ms(e) {
      ce !== null && typeof ce.markLayoutEffectsStarted == "function" && ce.markLayoutEffectsStarted(e);
    }
    function fu() {
      ce !== null && typeof ce.markLayoutEffectsStopped == "function" && ce.markLayoutEffectsStopped();
    }
    function wd(e) {
      ce !== null && typeof ce.markPassiveEffectsStarted == "function" && ce.markPassiveEffectsStarted(e);
    }
    function so() {
      ce !== null && typeof ce.markPassiveEffectsStopped == "function" && ce.markPassiveEffectsStopped();
    }
    function bd(e) {
      ce !== null && typeof ce.markRenderStarted == "function" && ce.markRenderStarted(e);
    }
    function _d() {
      ce !== null && typeof ce.markRenderYielded == "function" && ce.markRenderYielded();
    }
    function gn() {
      ce !== null && typeof ce.markRenderStopped == "function" && ce.markRenderStopped();
    }
    function Dc(e) {
      ce !== null && typeof ce.markRenderScheduled == "function" && ce.markRenderScheduled(e);
    }
    function kd(e, t) {
      ce !== null && typeof ce.markForceUpdateScheduled == "function" && ce.markForceUpdateScheduled(e, t);
    }
    function ys(e, t) {
      ce !== null && typeof ce.markStateUpdateScheduled == "function" && ce.markStateUpdateScheduled(e, t);
    }
    var Ae = (
      /*                         */
      0
    ), Rt = (
      /*                 */
      1
    ), Ot = (
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
    var Dd = 31, Y = (
      /*                        */
      0
    ), Hn = (
      /*                          */
      0
    ), Qe = (
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
    ), Nc = (
      /*                        */
      128
    ), Lc = (
      /*                        */
      256
    ), Mc = (
      /*                        */
      512
    ), zc = (
      /*                        */
      1024
    ), Uc = (
      /*                        */
      2048
    ), Ac = (
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
        if (e & Qe)
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
        case Qe:
          return Qe;
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
        case Nc:
        case Lc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
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
      if (a === Y)
        return Y;
      var i = Y, u = e.suspendedLanes, s = e.pingedLanes, f = a & Bv;
      if (f !== Y) {
        var p = f & ~u;
        if (p !== Y)
          i = xs(p);
        else {
          var v = f & s;
          v !== Y && (i = xs(v));
        }
      } else {
        var y = a & ~u;
        y !== Y ? i = xs(y) : s !== Y && (i = xs(s));
      }
      if (i === Y)
        return Y;
      if (t !== Y && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Y) {
        var g = hu(i), _ = hu(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ta && (_ & wl) !== Y
        )
          return t;
      }
      (i & er) !== Y && (i |= a & ta);
      var x = e.entangledLanes;
      if (x !== Y)
        for (var z = e.entanglements, A = i & x; A > 0; ) {
          var P = kn(A), de = 1 << P;
          i |= z[P], A &= ~de;
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
        case Qe:
        case xl:
        case er:
          return t + 250;
        case tr:
        case ta:
        case du:
        case co:
        case Nc:
        case Lc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
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
        y === qt ? ((v & i) === Y || (v & u) !== Y) && (s[p] = Qc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Iv(e) {
      return xs(e.pendingLanes);
    }
    function Gc(e) {
      var t = e.pendingLanes & ~na;
      return t !== Y ? t : t & na ? na : Y;
    }
    function Nd(e) {
      return (e & Qe) !== Y;
    }
    function _l(e) {
      return (e & Bv) !== Y;
    }
    function qc(e) {
      return (e & Cs) === e;
    }
    function Ld(e) {
      var t = Qe | er | ta;
      return (e & t) === Y;
    }
    function sy(e) {
      return (e & wl) === e;
    }
    function ws(e, t) {
      var a = xl | er | tr | ta;
      return (t & a) !== Y;
    }
    function Wv(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Md(e) {
      return (e & wl) !== Y;
    }
    function zd() {
      var e = Ic;
      return Ic <<= 1, (Ic & wl) === Y && (Ic = co), e;
    }
    function Qv() {
      var e = Wc;
      return Wc <<= 1, (Wc & Cs) === Y && (Wc = vu), e;
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
      return (e & t) !== Y;
    }
    function mu(e, t) {
      return (e & t) === t;
    }
    function vt(e, t) {
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
    function Ud(e, t) {
      return e !== Hn && e < t ? e : t;
    }
    function Jc(e) {
      for (var t = [], a = 0; a < Dd; a++)
        t.push(e);
      return t;
    }
    function ho(e, t, a) {
      e.pendingLanes |= t, t !== bl && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = Kc(t);
      i[u] = a;
    }
    function Ad(e, t) {
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
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = kn(f), v = 1 << p;
        i[p] = Y, u[p] = qt, s[p] = qt, f &= ~v;
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
        case Nc:
        case Lc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
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
    var ia = Qe, Fa = er, cr = ta, nf = bl, mo = Hn;
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
    function xe(e) {
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
    var lf = !1, Ds = [], Ri = null, Ti = null, Sn = null, Ar = /* @__PURE__ */ new Map(), ja = /* @__PURE__ */ new Map(), qi = [], Zv = [
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
          Ar.delete(a);
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
          return Ar.set(y, Os(Ar.get(y) || null, e, t, a, i, v)), !0;
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
        var a = Ur(t);
        if (a !== null) {
          var i = a.tag;
          if (i === be) {
            var u = Si(a);
            if (u !== null) {
              e.blockedOn = u, af(e.priority, function() {
                Pd(a);
              });
              return;
            }
          } else if (i === k) {
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
    function Ns(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ls(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
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
      Ns(e) && a.delete(t);
    }
    function uf() {
      lf = !1, Ri !== null && Ns(Ri) && (Ri = null), Ti !== null && Ns(Ti) && (Ti = null), Sn !== null && Ns(Sn) && (Sn = null), Ar.forEach(rh), ja.forEach(rh);
    }
    function gu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, lf || (lf = !0, F.unstable_scheduleCallback(F.unstable_NormalPriority, uf)));
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
      Ar.forEach(i), ja.forEach(i);
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
    var wt = ye.ReactCurrentBatchConfig, Pn = !0;
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
      var u = Ls(e, t, a, i);
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
          s !== null && xe(s);
          var f = Ls(e, t, a, i);
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
    function Ls(e, t, a, i) {
      Cu = null;
      var u = yc(i), s = Ys(u);
      if (s !== null) {
        var f = Ur(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === be) {
            var v = Si(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === k) {
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
          var t = Uv();
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
    function Us() {
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
        return y ? this.isDefaultPrevented = Ru : this.isDefaultPrevented = Us, this.isPropagationStopped = Us, this;
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
    }), ah = ln(rr), As, Fs, js;
    function Nl(e) {
      e !== js && (js && e.type === "mousemove" ? (As = e.screenX - js.screenX, Fs = e.screenY - js.screenY) : (As = 0, Fs = 0), js = e);
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
        return "movementX" in e ? e.movementX : (Nl(e), As);
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
    }), Ll = ln(Sy), df = [9, 13, 27, 32], Ml = 229, xo = qn && "CompositionEvent" in window, bu = null;
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
      NE(e, 0);
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
    function U() {
      n && (n.detachEvent("onpropertychange", K), n = null, r = null);
    }
    function K(e) {
      e.propertyName === "value" && d(r) && o(e);
    }
    function X(e, t, a) {
      e === "focusin" ? (U(), T(t, a)) : e === "focusout" && U();
    }
    function q(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return d(r);
    }
    function Ee(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function _e(e, t) {
      if (e === "click")
        return d(t);
    }
    function Oe(e, t) {
      if (e === "input" || e === "change")
        return d(t);
    }
    function On(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || we(e, "number", e.value);
    }
    function D(e, t, a, i, u, s, f) {
      var p = a ? wf(a) : window, v, y;
      if (l(p) ? v = m : mh(p) ? E ? v = Oe : (v = q, y = X) : Ee(p) && (v = _e), v) {
        var g = v(t, a);
        if (g) {
          Vs(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && On(p);
    }
    function b() {
      Ln("onMouseEnter", ["mouseout", "mouseover"]), Ln("onMouseLeave", ["mouseout", "mouseover"]), Ln("onPointerEnter", ["pointerout", "pointerover"]), Ln("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function L(e, t, a, i, u, s, f) {
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
        var x, z;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (x = a, z = A ? Ys(A) : null, z !== null) {
            var P = Ur(z);
            (z !== P || z.tag !== j && z.tag !== Z) && (z = null);
          }
        } else
          x = null, z = a;
        if (x !== z) {
          var de = sf, Be = "onMouseLeave", ze = "onMouseEnter", At = "mouse";
          (t === "pointerout" || t === "pointerover") && (de = Qd, Be = "onPointerLeave", ze = "onPointerEnter", At = "pointer");
          var bt = x == null ? g : wf(x), O = z == null ? g : wf(z), V = new de(Be, At + "leave", x, i, u);
          V.target = bt, V.relatedTarget = O;
          var N = null, J = Ys(u);
          if (J === a) {
            var Re = new de(ze, At + "enter", z, i, u);
            Re.target = O, Re.relatedTarget = bt, N = Re;
          }
          UT(e, V, N, x, z);
        }
      }
    }
    function te(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ve = typeof Object.is == "function" ? Object.is : te;
    function Fe(e, t) {
      if (ve(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!ir.call(t, s) || !ve(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function $e(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function et(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Qn(e, t) {
      for (var a = $e(e), i = 0, u = 0; a; ) {
        if (a.nodeType === $i) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = $e(et(a));
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
      return Ul(e, u, s, f, p);
    }
    function Ul(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e: for (; ; ) {
        for (var x = null; g === t && (a === 0 || g.nodeType === $i) && (f = s + a), g === i && (u === 0 || g.nodeType === $i) && (p = s + u), g.nodeType === $i && (s += g.nodeValue.length), (x = g.firstChild) !== null; )
          _ = g, g = x;
        for (; ; ) {
          if (g === e)
            break e;
          if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (x = g.nextSibling) !== null)
            break;
          g = _, _ = g.parentNode;
        }
        g = x;
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
    function SE(e) {
      return e && e.nodeType === $i;
    }
    function EE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : SE(e) ? !1 : SE(t) ? EE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function yT(e) {
      return e && e.ownerDocument && EE(e.ownerDocument.documentElement, e);
    }
    function gT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function CE() {
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
      var e = CE();
      return {
        focusedElem: e,
        selectionRange: Ty(e) ? CT(e) : null
      };
    }
    function ET(e) {
      var t = CE(), a = e.focusedElem, i = e.selectionRange;
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
    function RE(e, t, a) {
      var i = bT(a);
      if (!(wy || Ef == null || Ef !== Pi(i))) {
        var u = wT(Ef);
        if (!Zd || !Fe(Zd, u)) {
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
          wy = !1, RE(e, i, u);
          break;
        case "selectionchange":
          if (TT)
            break;
        case "keydown":
        case "keyup":
          RE(e, i, u);
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
    }, by = {}, TE = {};
    qn && (TE = document.createElement("div").style, "AnimationEvent" in window || (delete Cf.animationend.animation, delete Cf.animationiteration.animation, delete Cf.animationstart.animation), "TransitionEvent" in window || delete Cf.transitionend.transition);
    function gh(e) {
      if (by[e])
        return by[e];
      if (!Cf[e])
        return e;
      var t = Cf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in TE)
          return by[e] = t[a];
      return e;
    }
    var xE = gh("animationend"), wE = gh("animationiteration"), bE = gh("animationstart"), _E = gh("transitionend"), kE = /* @__PURE__ */ new Map(), DE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function wo(e, t) {
      kE.set(e, t), Wt(t, [e]);
    }
    function kT() {
      for (var e = 0; e < DE.length; e++) {
        var t = DE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        wo(a, "on" + i);
      }
      wo(xE, "onAnimationEnd"), wo(wE, "onAnimationIteration"), wo(bE, "onAnimationStart"), wo("dblclick", "onDoubleClick"), wo("focusin", "onFocus"), wo("focusout", "onBlur"), wo(_E, "onTransitionEnd");
    }
    function DT(e, t, a, i, u, s, f) {
      var p = kE.get(t);
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
          case xE:
          case wE:
          case bE:
            v = Yd;
            break;
          case _E:
            v = Gd;
            break;
          case "scroll":
            v = ah;
            break;
          case "wheel":
            v = Ll;
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
          t === "scroll", x = MT(a, p, i.type, g, _);
          if (x.length > 0) {
            var z = new v(p, y, null, i, u);
            e.push({
              event: z,
              listeners: x
            });
          }
        }
      }
    }
    kT(), b(), Cy(), xT(), dh();
    function OT(e, t, a, i, u, s, f) {
      DT(e, t, a, i, u, s);
      var p = (s & od) === 0;
      p && (L(e, t, a, i, u), D(e, t, a, i, u), _T(e, t, a, i, u), Ey(e, t, a, i, u));
    }
    var ep = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], _y = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ep));
    function OE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ss(i, t, void 0, e), e.currentTarget = null;
    }
    function NT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          OE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, x = g.currentTarget, z = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          OE(e, z, x), i = _;
        }
    }
    function NE(e, t) {
      for (var a = (t & nu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        NT(s, f, a);
      }
      Ii();
    }
    function LT(e, t, a, i, u) {
      var s = yc(a), f = [];
      OT(f, e, i, a, s, t), NE(f, t);
    }
    function En(e, t) {
      _y.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = ow(t), u = AT(e);
      i.has(u) || (LE(t, e, yi, a), i.add(u));
    }
    function ky(e, t, a) {
      _y.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= nu), LE(a, e, i, t);
    }
    var Sh = "_reactListening" + Math.random().toString(36).slice(2);
    function tp(e) {
      if (!e[Sh]) {
        e[Sh] = !0, Lt.forEach(function(a) {
          a !== "selectionchange" && (_y.has(a) || ky(a, !1, e), ky(a, !0, e));
        });
        var t = e.nodeType === Yi ? e : e.ownerDocument;
        t !== null && (t[Sh] || (t[Sh] = !0, ky("selectionchange", !1, t)));
      }
    }
    function LE(e, t, a, i, u) {
      var s = Ea(e, t, a), f = void 0;
      os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Eo(e, t, s, f) : Bd(e, t, s) : f !== void 0 ? Ki(e, t, s, f) : la(e, t, s);
    }
    function ME(e, t) {
      return e === t || e.nodeType === An && e.parentNode === t;
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
            if (v === k || v === Q) {
              var y = p.stateNode.containerInfo;
              if (ME(y, f))
                break;
              if (v === Q)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === k || _ === Q) {
                    var x = g.stateNode.containerInfo;
                    if (ME(x, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var z = Ys(y);
                if (z === null)
                  return;
                var A = z.tag;
                if (A === j || A === Z) {
                  p = s = z;
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
        return LT(e, t, a, s);
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
        var _ = y, x = _.stateNode, z = _.tag;
        if (z === j && x !== null && (g = x, p !== null)) {
          var A = au(y, p);
          A != null && v.push(np(y, A, g));
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
        if (p === j && f !== null) {
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
      while (e && e.tag !== j);
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
    function zE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === j && g !== null) {
          var x = g;
          if (u) {
            var z = au(p, s);
            z != null && f.unshift(np(p, z, x));
          } else if (!u) {
            var A = au(p, s);
            A != null && f.push(np(p, A, x));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function UT(e, t, a, i, u) {
      var s = i && u ? zT(i, u) : null;
      i !== null && zE(e, t, i, s, !1), u !== null && a !== null && zE(e, a, u, s, !0);
    }
    function AT(e, t) {
      return e + "__bubble";
    }
    var Va = !1, rp = "dangerouslySetInnerHTML", Ch = "suppressContentEditableWarning", bo = "suppressHydrationWarning", UE = "autoFocus", Bs = "children", $s = "style", Rh = "__html", Oy, Th, ap, AE, xh, FE, jE;
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
        registrationNameDependencies: at,
        possibleRegistrationNames: Dt
      });
    }, FE = qn && !document.documentMode, ap = function(e, t, a) {
      if (!Va) {
        var i = wh(a), u = wh(t);
        u !== i && (Va = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, AE = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, xh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, jE = function(e, t) {
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
      if (s !== u && (i && (Va || (Va = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && $))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function HE(e) {
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
          else s === Ch || s === bo || s === UE || (at.hasOwnProperty(s) ? f != null && (typeof f != "function" && xh(s, f), s === "onScroll" && En("scroll", t)) : f != null && ha(t, s, f, u));
        }
    }
    function VT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === $s ? gv(e, f) : s === rp ? lv(e, f) : s === Bs ? vl(e, f) : ha(e, s, f, i);
      }
    }
    function BT(e, t, a, i) {
      var u, s = HE(a), f, p = i;
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
      return HE(t).createTextNode(e);
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
          La(e), M(e, a, !1);
          break;
        case "textarea":
          La(e), iv(e);
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
          } else v === rp || v === Bs || v === Ch || v === bo || v === UE || (at.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], z = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === z || x == null && z == null))
          if (v === $s)
            if (x && Object.freeze(x), z) {
              for (y in z)
                z.hasOwnProperty(y) && (!x || !x.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in x)
                x.hasOwnProperty(y) && z[y] !== x[y] && (g || (g = {}), g[y] = x[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = x;
          else if (v === rp) {
            var A = x ? x[Rh] : void 0, P = z ? z[Rh] : void 0;
            A != null && P !== A && (s = s || []).push(v, A);
          } else v === Bs ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === Ch || v === bo || (at.hasOwnProperty(v) ? (x != null && (typeof x != "function" && xh(v, x), v === "onScroll" && En("scroll", e)), !s && z !== x && (s = [])) : (s = s || []).push(v, x));
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
          var x = g[_].name.toLowerCase();
          switch (x) {
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
      var z = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var P = a[A];
          if (A === Bs)
            typeof P == "string" ? e.textContent !== P && (a[bo] !== !0 && bh(e.textContent, P, s, f), z = [Bs, P]) : typeof P == "number" && e.textContent !== "" + P && (a[bo] !== !0 && bh(e.textContent, P, s, f), z = [Bs, "" + P]);
          else if (at.hasOwnProperty(A))
            P != null && (typeof P != "function" && xh(A, P), A === "onScroll" && En("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var de = void 0, Be = un(A);
            if (a[bo] !== !0) {
              if (!(A === Ch || A === bo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === rp) {
                  var ze = e.innerHTML, At = P ? P[Rh] : void 0;
                  if (At != null) {
                    var bt = jE(e, At);
                    bt !== ze && ap(A, ze, bt);
                  }
                } else if (A === $s) {
                  if (v.delete(A), FE) {
                    var O = ry(P);
                    de = e.getAttribute("style"), O !== de && ap(A, de, O);
                  }
                } else if (p && !B)
                  v.delete(A.toLowerCase()), de = si(e, A, P), P !== de && ap(A, de, P);
                else if (!cn(A, Be, p) && !Jn(A, P, Be, p)) {
                  var V = !1;
                  if (Be !== null)
                    v.delete(Be.attributeName), de = Gl(e, A, P, Be);
                  else {
                    var N = i;
                    if (N === Ja && (N = td(t)), N === Ja)
                      v.delete(A.toLowerCase());
                    else {
                      var J = QT(A);
                      J !== null && J !== A && (V = !0, v.delete(J)), v.delete(A);
                    }
                    de = si(e, A, P);
                  }
                  var Re = B;
                  !Re && P !== de && !V && ap(A, de, P);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[bo] !== !0 && AE(v), t) {
        case "input":
          La(e), M(e, a, !0);
          break;
        case "textarea":
          La(e), iv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && _h(e);
          break;
      }
      return z;
    }
    function qT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ny(e, t) {
      {
        if (Va)
          return;
        Va = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
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
          H(e, a);
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
      var XT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], PE = [
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
      ], JT = PE.concat(["button"]), ZT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], VE = {
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
        var a = ot({}, e || VE), i = {
          tag: t
        };
        return PE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), JT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), XT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
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
      }, BE = {};
      ip = function(e, t, a) {
        a = a || VE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = ex(e, u) ? null : i, f = s ? null : tx(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!BE[y]) {
            BE[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var x = "";
              v === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, x);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var kh = "suppressHydrationWarning", Dh = "$", Oh = "/$", up = "$?", op = "$!", nx = "style", Uy = null, Ay = null;
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
          var s = i === An ? e.parentNode : e, f = s.namespaceURI || null;
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
    function S1(e) {
      return e;
    }
    function ix(e) {
      Uy = dr(), Ay = ST();
      var t = null;
      return Dn(!1), t;
    }
    function lx(e) {
      ET(Ay), Dn(Uy), Uy = null, Ay = null;
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
    var jy = typeof setTimeout == "function" ? setTimeout : void 0, px = typeof clearTimeout == "function" ? clearTimeout : void 0, Hy = -1, $E = typeof Promise == "function" ? Promise : void 0, vx = typeof queueMicrotask == "function" ? queueMicrotask : typeof $E < "u" ? function(e) {
      return $E.resolve(null).then(e).catch(hx);
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
    function YE(e) {
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
      e.nodeType === An ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && _h(a);
    }
    function Cx(e, t, a) {
      e.insertBefore(t, a);
    }
    function Rx(e, t, a) {
      e.nodeType === An ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Tx(e, t) {
      e.removeChild(t);
    }
    function xx(e, t) {
      e.nodeType === An ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Py(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === An) {
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
      e.nodeType === An ? Py(e.parentNode, t) : e.nodeType === Xr && Py(e, t), Dr(e);
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
    function Nx(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Lx(e, t) {
      return t === "" || e.nodeType !== $i ? null : e;
    }
    function Mx(e) {
      return e.nodeType !== An ? null : e;
    }
    function IE(e) {
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
    function Ux(e, t) {
      e._reactRetry = t;
    }
    function Nh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Xr || t === $i)
          break;
        if (t === An) {
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
      return Nh(e.nextSibling);
    }
    function Ax(e) {
      return Nh(e.firstChild);
    }
    function Fx(e) {
      return Nh(e.firstChild);
    }
    function jx(e) {
      return Nh(e.nextSibling);
    }
    function Hx(e, t, a, i, u, s, f) {
      fp(s, e), Yy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & Rt) !== Ae;
      return GT(e, t, a, p, i, y, f);
    }
    function Px(e, t, a, i) {
      return fp(a, e), a.mode & Rt, qT(e, t);
    }
    function Vx(e, t) {
      fp(t, e);
    }
    function Bx(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === An) {
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
    function WE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === An) {
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
      t.nodeType === Xr ? Ny(e, t) : t.nodeType === An || Ly(e, t);
    }
    function qx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? Ny(a, t) : t.nodeType === An || Ly(a, t));
      }
    }
    function Kx(e, t, a, i, u) {
      (u || t[kh] !== !0) && (i.nodeType === Xr ? Ny(a, i) : i.nodeType === An || Ly(a, i));
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
    function Lh(e, t) {
      t[cp] = e;
    }
    function QE(e) {
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
            for (var u = WE(e); u !== null; ) {
              var s = u[xf];
              if (s)
                return s;
              u = WE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function _o(e) {
      var t = e[xf] || e[cp];
      return t && (t.tag === j || t.tag === Z || t.tag === be || t.tag === k) ? t : null;
    }
    function wf(e) {
      if (e.tag === j || e.tag === Z)
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
    var GE = {}, qE = ye.ReactDebugCurrentFrame;
    function zh(e) {
      if (e) {
        var t = e._owner, a = Io(e.type, e._source, t ? t.type : null);
        qE.setExtraStackFrame(a);
      } else
        qE.setExtraStackFrame(null);
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
            p && !(p instanceof Error) && (zh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), zh(null)), p instanceof Error && !(p.message in GE) && (GE[p.message] = !0, zh(u), S("Failed %s type: %s", a, p.message), zh(null));
          }
      }
    }
    var Iy = [], Uh;
    Uh = [];
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
      t !== Uh[_u] && S("Unexpected Fiber popped."), e.current = Iy[_u], Iy[_u] = null, Uh[_u] = null, _u--;
    }
    function oa(e, t, a) {
      _u++, Iy[_u] = e.current, Uh[_u] = a, e.current = t;
    }
    var Wy;
    Wy = {};
    var li = {};
    Object.freeze(li);
    var ku = ko(li), Al = ko(!1), Qy = li;
    function bf(e, t, a) {
      return a && Fl(t) ? Qy : ku.current;
    }
    function KE(e, t, a) {
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
          var p = Ze(e) || "Unknown";
          Xi(i, s, "context", p);
        }
        return u && KE(e, t, s), s;
      }
    }
    function Ah() {
      return Al.current;
    }
    function Fl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Fh(e) {
      ua(Al, e), ua(ku, e);
    }
    function Gy(e) {
      ua(Al, e), ua(ku, e);
    }
    function XE(e, t, a) {
      {
        if (ku.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        oa(ku, t, e), oa(Al, a, e);
      }
    }
    function JE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ze(e) || "Unknown";
            Wy[s] || (Wy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ze(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ze(e) || "Unknown";
          Xi(u, f, "child context", v);
        }
        return ot({}, a, f);
      }
    }
    function jh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return Qy = ku.current, oa(ku, a, e), oa(Al, Al.current, e), !0;
      }
    }
    function ZE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = JE(e, t, Qy);
          i.__reactInternalMemoizedMergedChildContext = u, ua(Al, e), ua(ku, e), oa(ku, u, e), oa(Al, a, e);
        } else
          ua(Al, e), oa(Al, a, e);
      }
    }
    function sw(e) {
      {
        if (!Mv(e) || e.tag !== ue)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case k:
              return t.stateNode.context;
            case ue: {
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
    function e0(e) {
      Du === null ? Du = [e] : Du.push(e);
    }
    function cw(e) {
      qy = !0, e0(e);
    }
    function t0() {
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
    var kf = [], Df = 0, Ph = null, Vh = 0, xi = [], wi = 0, Is = null, Ou = 1, Nu = "";
    function fw(e) {
      return Qs(), (e.flags & fs) !== Ue;
    }
    function dw(e) {
      return Qs(), Vh;
    }
    function pw() {
      var e = Nu, t = Ou, a = t & ~vw(t);
      return a.toString(32) + e;
    }
    function Ws(e, t) {
      Qs(), kf[Df++] = Vh, kf[Df++] = Ph, Ph = e, Vh = t;
    }
    function n0(e, t, a) {
      Qs(), xi[wi++] = Ou, xi[wi++] = Nu, xi[wi++] = Is, Is = e;
      var i = Ou, u = Nu, s = Bh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Bh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), x = f >> y, z = s - y, A = Bh(t) + z, P = p << z, de = P | x, Be = _ + u;
        Ou = 1 << A | de, Nu = Be;
      } else {
        var ze = p << s, At = ze | f, bt = u;
        Ou = 1 << v | At, Nu = bt;
      }
    }
    function Xy(e) {
      Qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ws(e, a), n0(e, a, i);
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
        Is = xi[--wi], xi[wi] = null, Nu = xi[--wi], xi[wi] = null, Ou = xi[--wi], xi[wi] = null;
    }
    function hw() {
      return Qs(), Is !== null ? {
        id: Ou,
        overflow: Nu
      } : null;
    }
    function mw(e, t) {
      Qs(), xi[wi++] = Ou, xi[wi++] = Nu, xi[wi++] = Is, Ou = t.id, Nu = t.overflow, Is = e;
    }
    function Qs() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Fr = null, bi = null, Ji = !1, Gs = !1, No = null;
    function yw() {
      Ji && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function r0() {
      Gs = !0;
    }
    function gw() {
      return Gs;
    }
    function Sw(e) {
      var t = e.stateNode.containerInfo;
      return bi = Fx(t), Fr = e, Ji = !0, No = null, Gs = !1, !0;
    }
    function Ew(e, t, a) {
      return bi = jx(t), Fr = e, Ji = !0, No = null, Gs = !1, a !== null && mw(e, a), !0;
    }
    function a0(e, t) {
      switch (e.tag) {
        case k: {
          Gx(e.stateNode.containerInfo, t);
          break;
        }
        case j: {
          var a = (e.mode & Rt) !== Ae;
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
        case be: {
          var i = e.memoizedState;
          i.dehydrated !== null && qx(i.dehydrated, t);
          break;
        }
      }
    }
    function i0(e, t) {
      a0(e, t);
      var a = xk();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Jr) : i.push(a);
    }
    function Zy(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case k: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case j:
                var i = t.type;
                t.pendingProps, Xx(a, i);
                break;
              case Z:
                var u = t.pendingProps;
                Jx(a, u);
                break;
            }
            break;
          }
          case j: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case j: {
                var v = t.type, y = t.pendingProps, g = (e.mode & Rt) !== Ae;
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
              case Z: {
                var _ = t.pendingProps, x = (e.mode & Rt) !== Ae;
                nw(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
            }
            break;
          }
          case be: {
            var z = e.memoizedState, A = z.dehydrated;
            if (A !== null) switch (t.tag) {
              case j:
                var P = t.type;
                t.pendingProps, Zx(A, P);
                break;
              case Z:
                var de = t.pendingProps;
                ew(A, de);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function l0(e, t) {
      t.flags = t.flags & ~Tn | Rn, Zy(e, t);
    }
    function u0(e, t) {
      switch (e.tag) {
        case j: {
          var a = e.type;
          e.pendingProps;
          var i = Nx(t, a);
          return i !== null ? (e.stateNode = i, Fr = e, bi = Ax(i), !0) : !1;
        }
        case Z: {
          var u = e.pendingProps, s = Lx(t, u);
          return s !== null ? (e.stateNode = s, Fr = e, bi = null, !0) : !1;
        }
        case be: {
          var f = Mx(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: hw(),
              retryLane: na
            };
            e.memoizedState = p;
            var v = wk(f);
            return v.return = e, e.child = v, Fr = e, bi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function eg(e) {
      return (e.mode & Rt) !== Ae && (e.flags & Et) === Ue;
    }
    function tg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ng(e) {
      if (Ji) {
        var t = bi;
        if (!t) {
          eg(e) && (Zy(Fr, e), tg()), l0(Fr, e), Ji = !1, Fr = e;
          return;
        }
        var a = t;
        if (!u0(e, t)) {
          eg(e) && (Zy(Fr, e), tg()), t = sp(a);
          var i = Fr;
          if (!t || !u0(e, t)) {
            l0(Fr, e), Ji = !1, Fr = e;
            return;
          }
          i0(i, a);
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
            case k: {
              var s = u.stateNode.containerInfo, f = (u.mode & Rt) !== Ae;
              Wx(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case j: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & Rt) !== Ae;
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
    function o0(e) {
      for (var t = e.return; t !== null && t.tag !== j && t.tag !== k && t.tag !== be; )
        t = t.return;
      Fr = t;
    }
    function $h(e) {
      if (e !== Fr)
        return !1;
      if (!Ji)
        return o0(e), Ji = !0, !1;
      if (e.tag !== k && (e.tag !== j || Ix(e.type) && !Fy(e.type, e.memoizedProps))) {
        var t = bi;
        if (t)
          if (eg(e))
            s0(e), tg();
          else
            for (; t; )
              i0(e, t), t = sp(t);
      }
      return o0(e), e.tag === be ? bi = xw(e) : bi = Fr ? sp(e.stateNode) : null, !0;
    }
    function ww() {
      return Ji && bi !== null;
    }
    function s0(e) {
      for (var t = bi; t; )
        a0(e, t), t = sp(t);
    }
    function Of() {
      Fr = null, bi = null, Ji = !1, Gs = !1;
    }
    function c0() {
      No !== null && (rR(No), No = null);
    }
    function jr() {
      return Ji;
    }
    function rg(e) {
      No === null ? No = [e] : No.push(e);
    }
    var bw = ye.ReactCurrentBatchConfig, _w = null;
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
        pp.length > 0 && (pp.forEach(function(x) {
          e.add(Ze(x) || "Component"), Ks.add(x.type);
        }), pp = []);
        var t = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(x) {
          t.add(Ze(x) || "Component"), Ks.add(x.type);
        }), vp = []);
        var a = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(x) {
          a.add(Ze(x) || "Component"), Ks.add(x.type);
        }), hp = []);
        var i = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(x) {
          i.add(Ze(x) || "Component"), Ks.add(x.type);
        }), mp = []);
        var u = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(x) {
          u.add(Ze(x) || "Component"), Ks.add(x.type);
        }), yp = []);
        var s = /* @__PURE__ */ new Set();
        if (gp.length > 0 && (gp.forEach(function(x) {
          s.add(Ze(x) || "Component"), Ks.add(x.type);
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
          lt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = qs(a);
          lt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = qs(u);
          lt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Yh = /* @__PURE__ */ new Map(), f0 = /* @__PURE__ */ new Set();
      Zi.recordLegacyContextWarning = function(e, t) {
        var a = Dw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!f0.has(e.type)) {
          var i = Yh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Yh.set(a, i)), i.push(e));
        }
      }, Zi.flushLegacyContextWarning = function() {
        Yh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ze(s) || "Component"), f0.add(s.type);
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
    var ag, ig, lg, ug, og, d0 = function(e, t) {
    };
    ag = !1, ig = !1, lg = {}, ug = {}, og = {}, d0 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ze(t) || "Component";
        ug[a] || (ug[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Ow(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Sp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & st || Te) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ue) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Ow(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ze(e) || "Component";
          lg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), lg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ue)
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
            var x = v.refs;
            _ === null ? delete x[y] : x[y] = _;
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
        var t = Ze(e) || "Component";
        if (og[t])
          return;
        og[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function p0(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function v0(e) {
      function t(O, V) {
        if (e) {
          var N = O.deletions;
          N === null ? (O.deletions = [V], O.flags |= Jr) : N.push(V);
        }
      }
      function a(O, V) {
        if (!e)
          return null;
        for (var N = V; N !== null; )
          t(O, N), N = N.sibling;
        return null;
      }
      function i(O, V) {
        for (var N = /* @__PURE__ */ new Map(), J = V; J !== null; )
          J.key !== null ? N.set(J.key, J) : N.set(J.index, J), J = J.sibling;
        return N;
      }
      function u(O, V) {
        var N = ic(O, V);
        return N.index = 0, N.sibling = null, N;
      }
      function s(O, V, N) {
        if (O.index = N, !e)
          return O.flags |= fs, V;
        var J = O.alternate;
        if (J !== null) {
          var Re = J.index;
          return Re < V ? (O.flags |= Rn, V) : Re;
        } else
          return O.flags |= Rn, V;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= Rn), O;
      }
      function p(O, V, N, J) {
        if (V === null || V.tag !== Z) {
          var Re = rE(N, O.mode, J);
          return Re.return = O, Re;
        } else {
          var he = u(V, N);
          return he.return = O, he;
        }
      }
      function v(O, V, N, J) {
        var Re = N.type;
        if (Re === Qr)
          return g(O, V, N.props.children, J, N.key);
        if (V !== null && (V.elementType === Re || // Keep this check inline so it only runs on the false path:
        SR(V, N) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Re == "object" && Re !== null && Re.$$typeof === nt && p0(Re) === V.type)) {
          var he = u(V, N.props);
          return he.ref = Sp(O, V, N), he.return = O, he._debugSource = N._source, he._debugOwner = N._owner, he;
        }
        var qe = nE(N, O.mode, J);
        return qe.ref = Sp(O, V, N), qe.return = O, qe;
      }
      function y(O, V, N, J) {
        if (V === null || V.tag !== Q || V.stateNode.containerInfo !== N.containerInfo || V.stateNode.implementation !== N.implementation) {
          var Re = aE(N, O.mode, J);
          return Re.return = O, Re;
        } else {
          var he = u(V, N.children || []);
          return he.return = O, he;
        }
      }
      function g(O, V, N, J, Re) {
        if (V === null || V.tag !== De) {
          var he = Bo(N, O.mode, J, Re);
          return he.return = O, he;
        } else {
          var qe = u(V, N);
          return qe.return = O, qe;
        }
      }
      function _(O, V, N) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var J = rE("" + V, O.mode, N);
          return J.return = O, J;
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case ur: {
              var Re = nE(V, O.mode, N);
              return Re.ref = Sp(O, null, V), Re.return = O, Re;
            }
            case ma: {
              var he = aE(V, O.mode, N);
              return he.return = O, he;
            }
            case nt: {
              var qe = V._payload, it = V._init;
              return _(O, it(qe), N);
            }
          }
          if (pt(V) || mn(V)) {
            var nn = Bo(V, O.mode, N, null);
            return nn.return = O, nn;
          }
          Ih(O, V);
        }
        return typeof V == "function" && Wh(O), null;
      }
      function x(O, V, N, J) {
        var Re = V !== null ? V.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number")
          return Re !== null ? null : p(O, V, "" + N, J);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case ur:
              return N.key === Re ? v(O, V, N, J) : null;
            case ma:
              return N.key === Re ? y(O, V, N, J) : null;
            case nt: {
              var he = N._payload, qe = N._init;
              return x(O, V, qe(he), J);
            }
          }
          if (pt(N) || mn(N))
            return Re !== null ? null : g(O, V, N, J, null);
          Ih(O, N);
        }
        return typeof N == "function" && Wh(O), null;
      }
      function z(O, V, N, J, Re) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var he = O.get(N) || null;
          return p(V, he, "" + J, Re);
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case ur: {
              var qe = O.get(J.key === null ? N : J.key) || null;
              return v(V, qe, J, Re);
            }
            case ma: {
              var it = O.get(J.key === null ? N : J.key) || null;
              return y(V, it, J, Re);
            }
            case nt:
              var nn = J._payload, jt = J._init;
              return z(O, V, N, jt(nn), Re);
          }
          if (pt(J) || mn(J)) {
            var Gn = O.get(N) || null;
            return g(V, Gn, J, Re, null);
          }
          Ih(V, J);
        }
        return typeof J == "function" && Wh(V), null;
      }
      function A(O, V, N) {
        {
          if (typeof O != "object" || O === null)
            return V;
          switch (O.$$typeof) {
            case ur:
            case ma:
              d0(O, N);
              var J = O.key;
              if (typeof J != "string")
                break;
              if (V === null) {
                V = /* @__PURE__ */ new Set(), V.add(J);
                break;
              }
              if (!V.has(J)) {
                V.add(J);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", J);
              break;
            case nt:
              var Re = O._payload, he = O._init;
              A(he(Re), V, N);
              break;
          }
        }
        return V;
      }
      function P(O, V, N, J) {
        for (var Re = null, he = 0; he < N.length; he++) {
          var qe = N[he];
          Re = A(qe, Re, O);
        }
        for (var it = null, nn = null, jt = V, Gn = 0, Ht = 0, Vn = null; jt !== null && Ht < N.length; Ht++) {
          jt.index > Ht ? (Vn = jt, jt = null) : Vn = jt.sibling;
          var ca = x(O, jt, N[Ht], J);
          if (ca === null) {
            jt === null && (jt = Vn);
            break;
          }
          e && jt && ca.alternate === null && t(O, jt), Gn = s(ca, Gn, Ht), nn === null ? it = ca : nn.sibling = ca, nn = ca, jt = Vn;
        }
        if (Ht === N.length) {
          if (a(O, jt), jr()) {
            var Ir = Ht;
            Ws(O, Ir);
          }
          return it;
        }
        if (jt === null) {
          for (; Ht < N.length; Ht++) {
            var oi = _(O, N[Ht], J);
            oi !== null && (Gn = s(oi, Gn, Ht), nn === null ? it = oi : nn.sibling = oi, nn = oi);
          }
          if (jr()) {
            var ba = Ht;
            Ws(O, ba);
          }
          return it;
        }
        for (var _a = i(O, jt); Ht < N.length; Ht++) {
          var fa = z(_a, O, Ht, N[Ht], J);
          fa !== null && (e && fa.alternate !== null && _a.delete(fa.key === null ? Ht : fa.key), Gn = s(fa, Gn, Ht), nn === null ? it = fa : nn.sibling = fa, nn = fa);
        }
        if (e && _a.forEach(function(qf) {
          return t(O, qf);
        }), jr()) {
          var ju = Ht;
          Ws(O, ju);
        }
        return it;
      }
      function de(O, V, N, J) {
        var Re = mn(N);
        if (typeof Re != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          N[Symbol.toStringTag] === "Generator" && (ig || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ig = !0), N.entries === Re && (ag || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ag = !0);
          var he = Re.call(N);
          if (he)
            for (var qe = null, it = he.next(); !it.done; it = he.next()) {
              var nn = it.value;
              qe = A(nn, qe, O);
            }
        }
        var jt = Re.call(N);
        if (jt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, Ht = null, Vn = V, ca = 0, Ir = 0, oi = null, ba = jt.next(); Vn !== null && !ba.done; Ir++, ba = jt.next()) {
          Vn.index > Ir ? (oi = Vn, Vn = null) : oi = Vn.sibling;
          var _a = x(O, Vn, ba.value, J);
          if (_a === null) {
            Vn === null && (Vn = oi);
            break;
          }
          e && Vn && _a.alternate === null && t(O, Vn), ca = s(_a, ca, Ir), Ht === null ? Gn = _a : Ht.sibling = _a, Ht = _a, Vn = oi;
        }
        if (ba.done) {
          if (a(O, Vn), jr()) {
            var fa = Ir;
            Ws(O, fa);
          }
          return Gn;
        }
        if (Vn === null) {
          for (; !ba.done; Ir++, ba = jt.next()) {
            var ju = _(O, ba.value, J);
            ju !== null && (ca = s(ju, ca, Ir), Ht === null ? Gn = ju : Ht.sibling = ju, Ht = ju);
          }
          if (jr()) {
            var qf = Ir;
            Ws(O, qf);
          }
          return Gn;
        }
        for (var Xp = i(O, Vn); !ba.done; Ir++, ba = jt.next()) {
          var Il = z(Xp, O, Ir, ba.value, J);
          Il !== null && (e && Il.alternate !== null && Xp.delete(Il.key === null ? Ir : Il.key), ca = s(Il, ca, Ir), Ht === null ? Gn = Il : Ht.sibling = Il, Ht = Il);
        }
        if (e && Xp.forEach(function(n1) {
          return t(O, n1);
        }), jr()) {
          var t1 = Ir;
          Ws(O, t1);
        }
        return Gn;
      }
      function Be(O, V, N, J) {
        if (V !== null && V.tag === Z) {
          a(O, V.sibling);
          var Re = u(V, N);
          return Re.return = O, Re;
        }
        a(O, V);
        var he = rE(N, O.mode, J);
        return he.return = O, he;
      }
      function ze(O, V, N, J) {
        for (var Re = N.key, he = V; he !== null; ) {
          if (he.key === Re) {
            var qe = N.type;
            if (qe === Qr) {
              if (he.tag === De) {
                a(O, he.sibling);
                var it = u(he, N.props.children);
                return it.return = O, it._debugSource = N._source, it._debugOwner = N._owner, it;
              }
            } else if (he.elementType === qe || // Keep this check inline so it only runs on the false path:
            SR(he, N) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof qe == "object" && qe !== null && qe.$$typeof === nt && p0(qe) === he.type) {
              a(O, he.sibling);
              var nn = u(he, N.props);
              return nn.ref = Sp(O, he, N), nn.return = O, nn._debugSource = N._source, nn._debugOwner = N._owner, nn;
            }
            a(O, he);
            break;
          } else
            t(O, he);
          he = he.sibling;
        }
        if (N.type === Qr) {
          var jt = Bo(N.props.children, O.mode, J, N.key);
          return jt.return = O, jt;
        } else {
          var Gn = nE(N, O.mode, J);
          return Gn.ref = Sp(O, V, N), Gn.return = O, Gn;
        }
      }
      function At(O, V, N, J) {
        for (var Re = N.key, he = V; he !== null; ) {
          if (he.key === Re)
            if (he.tag === Q && he.stateNode.containerInfo === N.containerInfo && he.stateNode.implementation === N.implementation) {
              a(O, he.sibling);
              var qe = u(he, N.children || []);
              return qe.return = O, qe;
            } else {
              a(O, he);
              break;
            }
          else
            t(O, he);
          he = he.sibling;
        }
        var it = aE(N, O.mode, J);
        return it.return = O, it;
      }
      function bt(O, V, N, J) {
        var Re = typeof N == "object" && N !== null && N.type === Qr && N.key === null;
        if (Re && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case ur:
              return f(ze(O, V, N, J));
            case ma:
              return f(At(O, V, N, J));
            case nt:
              var he = N._payload, qe = N._init;
              return bt(O, V, qe(he), J);
          }
          if (pt(N))
            return P(O, V, N, J);
          if (mn(N))
            return de(O, V, N, J);
          Ih(O, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" ? f(Be(O, V, "" + N, J)) : (typeof N == "function" && Wh(O), a(O, V));
      }
      return bt;
    }
    var Nf = v0(!0), h0 = v0(!1);
    function Nw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ic(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ic(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Lw(e, t) {
      for (var a = e.child; a !== null; )
        Sk(a, t), a = a.sibling;
    }
    var sg = ko(null), cg;
    cg = {};
    var Qh = null, Lf = null, fg = null, Gh = !1;
    function qh() {
      Qh = null, Lf = null, fg = null, Gh = !1;
    }
    function m0() {
      Gh = !0;
    }
    function y0() {
      Gh = !1;
    }
    function g0(e, t, a) {
      oa(sg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== cg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = cg;
    }
    function dg(e, t) {
      var a = sg.current;
      ua(sg, t), e._currentValue = a;
    }
    function pg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (mu(i.childLanes, t) ? u !== null && !mu(u.childLanes, t) && (u.childLanes = vt(u.childLanes, t)) : (i.childLanes = vt(i.childLanes, t), u !== null && (u.childLanes = vt(u.childLanes, t))), i === a)
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
              if (i.tag === ue) {
                var p = nr(a), v = Lu(qt, p);
                v.tag = Xh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = vt(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = vt(x.lanes, a)), pg(i.return, a, e), s.lanes = vt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ft)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === _t) {
          var z = i.return;
          if (z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          z.lanes = vt(z.lanes, a);
          var A = z.alternate;
          A !== null && (A.lanes = vt(A.lanes, a)), pg(z, a, e), u = i.sibling;
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
            var P = u.sibling;
            if (P !== null) {
              P.return = u.return, u = P;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Mf(e, t) {
      Qh = e, Lf = null, fg = null;
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
        if (Lf === null) {
          if (Qh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Lf = a, Qh.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          Lf = Lf.next = a;
      }
      return t;
    }
    var Xs = null;
    function vg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function Uw() {
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
    function S0(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Kh(e, i);
    }
    function Aw(e, t, a, i) {
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
      e.lanes = vt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = vt(a.lanes, t)), a === null && (e.flags & (Rn | Tn)) !== Ue && hR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = vt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = vt(a.childLanes, t) : (u.flags & (Rn | Tn)) !== Ue && hR(e), i = u, u = u.return;
      if (i.tag === k) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var E0 = 0, C0 = 1, Xh = 2, hg = 3, Jh = !1, mg, Zh;
    mg = !1, Zh = null;
    function yg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Y
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function R0(e, t) {
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
    function Lu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: E0,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Lo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Zh === u && !mg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), mg = !0), A_()) {
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
          var f = vt(s, a);
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
        case C0: {
          var f = a.payload;
          if (typeof f == "function") {
            m0();
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
              y0();
            }
            return p;
          }
          return f;
        }
        case hg:
          e.flags = e.flags & ~br | Et;
        case E0: {
          var v = a.payload, y;
          if (typeof v == "function") {
            m0(), y = v.call(s, i, u);
            {
              if (e.mode & st) {
                Gt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Gt(!1);
                }
              }
              y0();
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
          var _ = g.updateQueue, x = _.lastBaseUpdate;
          x !== f && (x === null ? _.firstBaseUpdate = y : x.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var z = u.baseState, A = Y, P = null, de = null, Be = null, ze = s;
        do {
          var At = ze.lane, bt = ze.eventTime;
          if (mu(i, At)) {
            if (Be !== null) {
              var V = {
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
              Be = Be.next = V;
            }
            z = Hw(e, u, ze, z, t, a);
            var N = ze.callback;
            if (N !== null && // If the update was already committed, we should not queue its
            // callback again.
            ze.lane !== Hn) {
              e.flags |= an;
              var J = u.effects;
              J === null ? u.effects = [ze] : J.push(ze);
            }
          } else {
            var O = {
              eventTime: bt,
              lane: At,
              tag: ze.tag,
              payload: ze.payload,
              callback: ze.callback,
              next: null
            };
            Be === null ? (de = Be = O, P = z) : Be = Be.next = O, A = vt(A, At);
          }
          if (ze = ze.next, ze === null) {
            if (p = u.shared.pending, p === null)
              break;
            var Re = p, he = Re.next;
            Re.next = null, ze = he, u.lastBaseUpdate = Re, u.shared.pending = null;
          }
        } while (!0);
        Be === null && (P = z), u.baseState = P, u.firstBaseUpdate = de, u.lastBaseUpdate = Be;
        var qe = u.shared.interleaved;
        if (qe !== null) {
          var it = qe;
          do
            A = vt(A, it.lane), it = it.next;
          while (it !== qe);
        } else s === null && (u.shared.lanes = Y);
        Wp(A), e.lanes = A, e.memoizedState = z;
      }
      Zh = null;
    }
    function Pw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function T0() {
      Jh = !1;
    }
    function nm() {
      return Jh;
    }
    function x0(e, t, a) {
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
    function w0() {
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
    function b0(e) {
      am(rm.current);
      var t = am(Mo.current), a = ax(t, e.type);
      t !== a && (oa(Cp, e, e), oa(Mo, a, e));
    }
    function Cg(e) {
      Cp.current === e && (ua(Mo, e), ua(Cp, e));
    }
    var Vw = 0, _0 = 1, k0 = 1, Rp = 2, el = ko(Vw);
    function Rg(e, t) {
      return (e & t) !== 0;
    }
    function Uf(e) {
      return e & _0;
    }
    function Tg(e, t) {
      return e & _0 | t;
    }
    function Bw(e, t) {
      return e | t;
    }
    function zo(e, t) {
      oa(el, t, e);
    }
    function Af(e) {
      ua(el, e);
    }
    function $w(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function im(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === be) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || IE(i) || Vy(i))
              return t;
          }
        } else if (t.tag === Ye && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Et) !== Ue;
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
    var Ce = ye.ReactCurrentDispatcher, Tp = ye.ReactCurrentBatchConfig, bg, Ff;
    bg = /* @__PURE__ */ new Set();
    var Js = Y, tn = null, hr = null, mr = null, lm = !1, xp = !1, wp = 0, Iw = 0, Ww = 25, I = null, _i = null, Uo = -1, _g = !1;
    function It() {
      {
        var e = I;
        _i === null ? _i = [e] : _i.push(e);
      }
    }
    function oe() {
      {
        var e = I;
        _i !== null && (Uo++, _i[Uo] !== e && Qw(e));
      }
    }
    function jf(e) {
      e != null && !pt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", I, typeof e);
    }
    function Qw(e) {
      {
        var t = Ze(tn);
        if (!bg.has(t) && (bg.add(t), _i !== null)) {
          for (var a = "", i = 30, u = 0; u <= Uo; u++) {
            for (var s = _i[u], f = u === Uo ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", I), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, I, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ve(e[a], t[a]))
          return !1;
      return !0;
    }
    function Hf(e, t, a, i, u, s) {
      Js = s, tn = t, _i = e !== null ? e._debugHookTypes : null, Uo = -1, _g = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? Ce.current = K0 : _i !== null ? Ce.current = q0 : Ce.current = G0;
      var f = a(i, u);
      if (xp) {
        var p = 0;
        do {
          if (xp = !1, wp = 0, p >= Ww)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, _g = !1, hr = null, mr = null, t.updateQueue = null, Uo = -1, Ce.current = X0, f = a(i, u);
        } while (xp);
      }
      Ce.current = Sm, t._debugHookTypes = _i;
      var v = hr !== null && hr.next !== null;
      if (Js = Y, tn = null, hr = null, mr = null, I = null, _i = null, Uo = -1, e !== null && (e.flags & jn) !== (t.flags & jn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Rt) !== Ae && S("Internal React error: Expected static flag was missing. Please notify the React team."), lm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Pf() {
      var e = wp !== 0;
      return wp = 0, e;
    }
    function D0(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & en) !== Ae ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = bs(e.lanes, a);
    }
    function O0() {
      if (Ce.current = Sm, lm) {
        for (var e = tn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        lm = !1;
      }
      Js = Y, tn = null, hr = null, mr = null, _i = null, Uo = -1, I = null, $0 = !1, xp = !1, wp = 0;
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
    function N0() {
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
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Xw.bind(null, tn, s);
      return [i.memoizedState, f];
    }
    function Ng(e, t, a) {
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
        var g = f.next, _ = s.baseState, x = null, z = null, A = null, P = g;
        do {
          var de = P.lane;
          if (mu(Js, de)) {
            if (A !== null) {
              var ze = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Hn,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null
              };
              A = A.next = ze;
            }
            if (P.hasEagerState)
              _ = P.eagerState;
            else {
              var At = P.action;
              _ = e(_, At);
            }
          } else {
            var Be = {
              lane: de,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            };
            A === null ? (z = A = Be, x = _) : A = A.next = Be, tn.lanes = vt(tn.lanes, de), Wp(de);
          }
          P = P.next;
        } while (P !== null && P !== g);
        A === null ? x = _ : A.next = z, ve(_, i.memoizedState) || zp(), i.memoizedState = _, i.baseState = x, i.baseQueue = A, u.lastRenderedState = _;
      }
      var bt = u.interleaved;
      if (bt !== null) {
        var O = bt;
        do {
          var V = O.lane;
          tn.lanes = vt(tn.lanes, V), Wp(V), O = O.next;
        } while (O !== bt);
      } else f === null && (u.lanes = Y);
      var N = u.dispatch;
      return [i.memoizedState, N];
    }
    function Lg(e, t, a) {
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
        ve(p, i.memoizedState) || zp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function E1(e, t, a) {
    }
    function C1(e, t, a) {
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
          ve(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Ff = !0);
        }
        var v = jm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(v, Js) || L0(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, fm(z0.bind(null, i, y, e), [e]), i.flags |= ya, bp(pr | Hr, M0.bind(null, i, y, s, t), void 0, null), s;
    }
    function um(e, t, a) {
      var i = tn, u = ki(), s = t();
      if (!Ff) {
        var f = t();
        ve(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Ff = !0);
      }
      var p = u.memoizedState, v = !ve(p, s);
      v && (u.memoizedState = s, zp());
      var y = u.queue;
      if (kp(z0.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      mr !== null && mr.memoizedState.tag & pr) {
        i.flags |= ya, bp(pr | Hr, M0.bind(null, i, y, s, t), void 0, null);
        var g = jm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(g, Js) || L0(i, t, s);
      }
      return s;
    }
    function L0(e, t, a) {
      e.flags |= wc;
      var i = {
        getSnapshot: t,
        value: a
      }, u = tn.updateQueue;
      if (u === null)
        u = N0(), tn.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function M0(e, t, a, i) {
      t.value = a, t.getSnapshot = i, U0(t) && A0(e);
    }
    function z0(e, t, a) {
      var i = function() {
        U0(t) && A0(e);
      };
      return a(i);
    }
    function U0(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ve(a, i);
      } catch {
        return !0;
      }
    }
    function A0(e) {
      var t = Ba(e, Qe);
      t !== null && Er(t, e, Qe, qt);
    }
    function om(e) {
      var t = Hl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: Dg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Jw.bind(null, tn, a);
      return [t.memoizedState, i];
    }
    function zg(e) {
      return Ng(Dg);
    }
    function Ug(e) {
      return Lg(Dg);
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
        s = N0(), tn.updateQueue = s, s.lastEffect = u.next = u;
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
    function Ag(e) {
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
      return (tn.mode & en) !== Ae ? _p(gl | ya | pd, Hr, e, t) : _p(ya | pd, Hr, e, t);
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
      return a |= yl, (tn.mode & en) !== Ae && (a |= zr), _p(a, vr, e, t);
    }
    function pm(e, t) {
      return cm(xt, vr, e, t);
    }
    function F0(e, t) {
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
      return u |= yl, (tn.mode & en) !== Ae && (u |= zr), _p(u, vr, F0.bind(null, t, e), i);
    }
    function vm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return cm(xt, vr, F0.bind(null, t, e), i);
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
    function j0(e) {
      var t = ki(), a = hr, i = a.memoizedState;
      return P0(t, i, e);
    }
    function H0(e) {
      var t = ki();
      if (hr === null)
        return t.memoizedState = e, e;
      var a = hr.memoizedState;
      return P0(t, a, e);
    }
    function P0(e, t, a) {
      var i = !Ld(Js);
      if (i) {
        if (!ve(a, t)) {
          var u = zd();
          tn.lanes = vt(tn.lanes, u), Wp(u), e.baseState = !0;
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
          f > 10 && lt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function $g() {
      var e = om(!1), t = e[0], a = e[1], i = qw.bind(null, a), u = Hl();
      return u.memoizedState = i, [t, i];
    }
    function V0() {
      var e = zg(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    function B0() {
      var e = Ug(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    var $0 = !1;
    function Kw() {
      return $0;
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
      if (Y0(e))
        I0(t, u);
      else {
        var s = S0(e, t, u, i);
        if (s !== null) {
          var f = wa();
          Er(s, e, i, f), W0(s, t, i);
        }
      }
      Q0(e, i);
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
      if (Y0(e))
        I0(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Ce.current, Ce.current = tl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, ve(y, v)) {
                Aw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Ce.current = p;
            }
          }
        }
        var g = S0(e, t, u, i);
        if (g !== null) {
          var _ = wa();
          Er(g, e, i, _), W0(g, t, i);
        }
      }
      Q0(e, i);
    }
    function Y0(e) {
      var t = e.alternate;
      return e === tn || t !== null && t === tn;
    }
    function I0(e, t) {
      xp = lm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function W0(e, t, a) {
      if (Md(a)) {
        var i = t.lanes;
        i = Xc(i, e.pendingLanes);
        var u = vt(i, a);
        t.lanes = u, _s(e, u);
      }
    }
    function Q0(e, t, a) {
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
      unstable_isNewReconciler: se
    }, G0 = null, q0 = null, K0 = null, X0 = null, Pl = null, tl = null, Em = null;
    {
      var Ig = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, rt = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      G0 = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", It(), jf(t), Pg(e, t);
        },
        useContext: function(e) {
          return I = "useContext", It(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", It(), jf(t), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", It(), jf(a), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", It(), jf(t), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", It(), jf(t), jg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", It(), jf(t);
          var a = Ce.current;
          Ce.current = Pl;
          try {
            return Vg(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", It();
          var i = Ce.current;
          Ce.current = Pl;
          try {
            return Og(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", It(), Ag(e);
        },
        useState: function(e) {
          I = "useState", It();
          var t = Ce.current;
          Ce.current = Pl;
          try {
            return om(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", It(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", It(), Bg(e);
        },
        useTransition: function() {
          return I = "useTransition", It(), $g();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", It(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", It(), Mg(e, t, a);
        },
        useId: function() {
          return I = "useId", It(), Yg();
        },
        unstable_isNewReconciler: se
      }, q0 = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", oe(), Pg(e, t);
        },
        useContext: function(e) {
          return I = "useContext", oe(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", oe(), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", oe(), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", oe(), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", oe(), jg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", oe();
          var a = Ce.current;
          Ce.current = Pl;
          try {
            return Vg(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", oe();
          var i = Ce.current;
          Ce.current = Pl;
          try {
            return Og(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", oe(), Ag(e);
        },
        useState: function(e) {
          I = "useState", oe();
          var t = Ce.current;
          Ce.current = Pl;
          try {
            return om(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", oe(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", oe(), Bg(e);
        },
        useTransition: function() {
          return I = "useTransition", oe(), $g();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", oe(), Mg(e, t, a);
        },
        useId: function() {
          return I = "useId", oe(), Yg();
        },
        unstable_isNewReconciler: se
      }, K0 = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", oe(), mm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", oe(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", oe(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", oe(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", oe(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", oe(), pm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", oe();
          var a = Ce.current;
          Ce.current = tl;
          try {
            return ym(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", oe();
          var i = Ce.current;
          Ce.current = tl;
          try {
            return Ng(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", oe(), sm();
        },
        useState: function(e) {
          I = "useState", oe();
          var t = Ce.current;
          Ce.current = tl;
          try {
            return zg(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", oe(), hm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", oe(), j0(e);
        },
        useTransition: function() {
          return I = "useTransition", oe(), V0();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", oe(), um(e, t);
        },
        useId: function() {
          return I = "useId", oe(), gm();
        },
        unstable_isNewReconciler: se
      }, X0 = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", oe(), mm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", oe(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", oe(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", oe(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", oe(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", oe(), pm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", oe();
          var a = Ce.current;
          Ce.current = Em;
          try {
            return ym(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", oe();
          var i = Ce.current;
          Ce.current = Em;
          try {
            return Lg(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", oe(), sm();
        },
        useState: function(e) {
          I = "useState", oe();
          var t = Ce.current;
          Ce.current = Em;
          try {
            return Ug(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", oe(), hm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", oe(), H0(e);
        },
        useTransition: function() {
          return I = "useTransition", oe(), B0();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", oe(), um(e, t);
        },
        useId: function() {
          return I = "useId", oe(), gm();
        },
        unstable_isNewReconciler: se
      }, Pl = {
        readContext: function(e) {
          return Ig(), ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", rt(), It(), Pg(e, t);
        },
        useContext: function(e) {
          return I = "useContext", rt(), It(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", rt(), It(), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", rt(), It(), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", rt(), It(), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", rt(), It(), jg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", rt(), It();
          var a = Ce.current;
          Ce.current = Pl;
          try {
            return Vg(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", rt(), It();
          var i = Ce.current;
          Ce.current = Pl;
          try {
            return Og(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", rt(), It(), Ag(e);
        },
        useState: function(e) {
          I = "useState", rt(), It();
          var t = Ce.current;
          Ce.current = Pl;
          try {
            return om(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", rt(), It(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", rt(), It(), Bg(e);
        },
        useTransition: function() {
          return I = "useTransition", rt(), It(), $g();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", rt(), It(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", rt(), It(), Mg(e, t, a);
        },
        useId: function() {
          return I = "useId", rt(), It(), Yg();
        },
        unstable_isNewReconciler: se
      }, tl = {
        readContext: function(e) {
          return Ig(), ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", rt(), oe(), mm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", rt(), oe(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", rt(), oe(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", rt(), oe(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", rt(), oe(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", rt(), oe(), pm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", rt(), oe();
          var a = Ce.current;
          Ce.current = tl;
          try {
            return ym(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", rt(), oe();
          var i = Ce.current;
          Ce.current = tl;
          try {
            return Ng(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", rt(), oe(), sm();
        },
        useState: function(e) {
          I = "useState", rt(), oe();
          var t = Ce.current;
          Ce.current = tl;
          try {
            return zg(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", rt(), oe(), hm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", rt(), oe(), j0(e);
        },
        useTransition: function() {
          return I = "useTransition", rt(), oe(), V0();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", rt(), oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", rt(), oe(), um(e, t);
        },
        useId: function() {
          return I = "useId", rt(), oe(), gm();
        },
        unstable_isNewReconciler: se
      }, Em = {
        readContext: function(e) {
          return Ig(), ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", rt(), oe(), mm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", rt(), oe(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", rt(), oe(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", rt(), oe(), vm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", rt(), oe(), dm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", rt(), oe(), pm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", rt(), oe();
          var a = Ce.current;
          Ce.current = tl;
          try {
            return ym(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", rt(), oe();
          var i = Ce.current;
          Ce.current = tl;
          try {
            return Lg(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", rt(), oe(), sm();
        },
        useState: function(e) {
          I = "useState", rt(), oe();
          var t = Ce.current;
          Ce.current = tl;
          try {
            return Ug(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", rt(), oe(), hm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", rt(), oe(), H0(e);
        },
        useTransition: function() {
          return I = "useTransition", rt(), oe(), B0();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", rt(), oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", rt(), oe(), um(e, t);
        },
        useId: function() {
          return I = "useId", rt(), oe(), gm();
        },
        unstable_isNewReconciler: se
      };
    }
    var Ao = F.unstable_now, J0 = 0, Cm = -1, Dp = -1, Rm = -1, Wg = !1, Tm = !1;
    function Z0() {
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
      return J0;
    }
    function tC() {
      J0 = Ao();
    }
    function Qg(e) {
      Dp = Ao(), e.actualStartTime < 0 && (e.actualStartTime = Ao());
    }
    function nC(e) {
      Dp = -1;
    }
    function xm(e, t) {
      if (Dp >= 0) {
        var a = Ao() - Dp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Dp = -1;
      }
    }
    function Vl(e) {
      if (Cm >= 0) {
        var t = Ao() - Cm;
        Cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case k:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ut:
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
        var t = Ao() - Rm;
        Rm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case k:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ut:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Bl() {
      Cm = Ao();
    }
    function qg() {
      Rm = Ao();
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
          var a = zt(e) || "Component";
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
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var uS = {
      isMounted: vd,
      enqueueSetState: function(e, t, a) {
        var i = ao(e), u = wa(), s = Po(i), f = Lu(u, s);
        f.payload = t, a != null && (wm(a, "setState"), f.callback = a);
        var p = Lo(i, f, s);
        p !== null && (Er(p, i, s, u), em(p, i, s)), ys(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ao(e), u = wa(), s = Po(i), f = Lu(u, s);
        f.tag = C0, f.payload = t, a != null && (wm(a, "replaceState"), f.callback = a);
        var p = Lo(i, f, s);
        p !== null && (Er(p, i, s, u), em(p, i, s)), ys(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ao(e), i = wa(), u = Po(a), s = Lu(i, u);
        s.tag = Xh, t != null && (wm(t, "forceUpdate"), s.callback = t);
        var f = Lo(a, s, u);
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
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", zt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Fe(a, i) || !Fe(u, s) : !0;
    }
    function nb(e, t, a) {
      var i = e.stateNode;
      {
        var u = zt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & st) === Ae && (Op.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & st) === Ae && (Op.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !aS.has(t) && (aS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", zt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !eS.has(t) && (eS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", zt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || pt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
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
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Ui ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", zt(t) || "Component", v);
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
          var x = zt(t) || "Component";
          Zg.has(x) || (Zg.add(x), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, g.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var z = null, A = null, P = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? P = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (P = "UNSAFE_componentWillUpdate"), z !== null || A !== null || P !== null) {
            var de = zt(t) || "Component", Be = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            tS.has(de) || (tS.add(de), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, de, Be, z !== null ? `
  ` + z : "", A !== null ? `
  ` + A : "", P !== null ? `
  ` + P : ""));
          }
        }
      }
      return i && KE(e, u, s), g;
    }
    function rb(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ze(e) || "Component"), uS.enqueueReplaceState(t, t.state, null));
    }
    function oC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ze(e) || "Component";
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
          var p = zt(t) || "Component";
          rS.has(p) || (rS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & st && Zi.recordLegacyContextWarning(e, u), Zi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (lS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (rb(e, u), tm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = xt;
        y |= yl, (e.mode & en) !== Ae && (y |= zr), e.flags |= y;
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
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && oC(e, u, a, v), T0();
      var x = e.memoizedState, z = u.state = x;
      if (tm(e, a, u, i), z = e.memoizedState, s === a && x === z && !Ah() && !nm()) {
        if (typeof u.componentDidMount == "function") {
          var A = xt;
          A |= yl, (e.mode & en) !== Ae && (A |= zr), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (lS(e, t, g, a), z = e.memoizedState);
      var P = nm() || iC(e, t, s, a, x, z, v);
      if (P) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var de = xt;
          de |= yl, (e.mode & en) !== Ae && (de |= zr), e.flags |= de;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Be = xt;
          Be |= yl, (e.mode & en) !== Ae && (Be |= zr), e.flags |= Be;
        }
        e.memoizedProps = a, e.memoizedState = z;
      }
      return u.props = a, u.state = z, u.context = v, P;
    }
    function ib(e, t, a, i, u) {
      var s = t.stateNode;
      R0(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = li;
      if (typeof g == "object" && g !== null)
        _ = ar(g);
      else {
        var x = bf(t, a, !0);
        _ = _f(t, x);
      }
      var z = a.getDerivedStateFromProps, A = typeof z == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && oC(t, s, i, _), T0();
      var P = t.memoizedState, de = s.state = P;
      if (tm(t, i, s, u), de = t.memoizedState, f === v && P === de && !Ah() && !nm() && !ie)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= xt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ua), !1;
      typeof z == "function" && (lS(t, a, z, i), de = t.memoizedState);
      var Be = nm() || iC(t, a, p, i, P, de, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ie;
      return Be ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, de, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, de, _)), typeof s.componentDidUpdate == "function" && (t.flags |= xt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Ua)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= xt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ua), t.memoizedProps = i, t.memoizedState = de), s.props = i, s.state = de, s.context = _, Be;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: Mt(t),
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
          if (e.tag === ue)
            return;
          console.error(i);
        }
        var p = u ? Ze(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === k)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ze(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (x) {
        setTimeout(function() {
          throw x;
        });
      }
    }
    var ub = typeof WeakMap == "function" ? WeakMap : Map;
    function sC(e, t, a) {
      var i = Lu(qt, a);
      i.tag = hg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Z_(u), cS(e, t);
      }, i;
    }
    function fS(e, t, a) {
      var i = Lu(qt, a);
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
        }), typeof u != "function" && (aa(e.lanes, Qe) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ze(e) || "Unknown"));
      }), i;
    }
    function cC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ub(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = ek.bind(null, e, t, a);
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
      if ((e.mode & Rt) === Ae && (a === ge || a === He || a === me)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function fC(e) {
      var t = e;
      do {
        if (t.tag === be && $w(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function dC(e, t, a, i, u) {
      if ((e.mode & Rt) === Ae) {
        if (e === t)
          e.flags |= br;
        else {
          if (e.flags |= Et, a.flags |= ti, a.flags &= -52805, a.tag === ue) {
            var s = a.alternate;
            if (s === null)
              a.tag = Xe;
            else {
              var f = Lu(qt, Qe);
              f.tag = Xh, Lo(a, f, Qe);
            }
          }
          a.lanes = vt(a.lanes, Qe);
        }
        return e;
      }
      return e.flags |= br, e.lanes = u, e;
    }
    function cb(e, t, a, i, u) {
      if (a.flags |= uu, _r && Qp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        sb(a), jr() && a.mode & Rt && r0();
        var f = fC(t);
        if (f !== null) {
          f.flags &= ~yn, dC(f, t, a, e, u), f.mode & Rt && cC(e, s, u), ob(f, e, s);
          return;
        } else {
          if (!Nd(u)) {
            cC(e, s, u), YS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & Rt) {
        r0();
        var v = fC(t);
        if (v !== null) {
          (v.flags & br) === Ue && (v.flags |= yn), dC(v, t, a, e, u), rg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), $_(i);
      var y = t;
      do {
        switch (y.tag) {
          case k: {
            var g = i;
            y.flags |= br;
            var _ = nr(u);
            y.lanes = vt(y.lanes, _);
            var x = sC(y, g, _);
            gg(y, x);
            return;
          }
          case ue:
            var z = i, A = y.type, P = y.stateNode;
            if ((y.flags & Et) === Ue && (typeof A.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && !fR(P))) {
              y.flags |= br;
              var de = nr(u);
              y.lanes = vt(y.lanes, de);
              var Be = fS(y, z, de);
              gg(y, Be);
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
    var Np = ye.ReactCurrentOwner, rl = !1, dS, Lp, pS, vS, hS, ec, mS, bm, Mp;
    dS = {}, Lp = {}, pS = {}, vS = {}, hS = {}, ec = !1, mS = {}, bm = {}, Mp = {};
    function Ta(e, t, a, i) {
      e === null ? t.child = h0(t, null, a, i) : t.child = Nf(t, e.child, a, i);
    }
    function db(e, t, a, i) {
      t.child = Nf(t, e.child, null, i), t.child = Nf(t, null, a, i);
    }
    function pC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xi(
          s,
          i,
          // Resolved props
          "prop",
          zt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Mf(t, u), Aa(t);
      {
        if (Np.current = t, Oa(!0), v = Hf(e, t, f, i, p, u), y = Pf(), t.mode & st) {
          Gt(!0);
          try {
            v = Hf(e, t, f, i, p, u), y = Pf();
          } finally {
            Gt(!1);
          }
        }
        Oa(!1);
      }
      return Rl(), e !== null && !rl ? (D0(e, t, u), Mu(e, t, u)) : (jr() && y && Xy(t), t.flags |= Wi, Ta(e, t, v, u), t.child);
    }
    function vC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (yk(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Gf(s), t.tag = me, t.type = f, SS(t, s), hC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Xi(
            p,
            i,
            // Resolved props
            "prop",
            zt(s)
          ), a.defaultProps !== void 0) {
            var v = zt(s) || "Unknown";
            Mp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Mp[v] = !0);
          }
        }
        var y = tE(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, _ = g.propTypes;
        _ && Xi(
          _,
          i,
          // Resolved props
          "prop",
          zt(g)
        );
      }
      var x = e.child, z = wS(e, u);
      if (!z) {
        var A = x.memoizedProps, P = a.compare;
        if (P = P !== null ? P : Fe, P(A, i) && e.ref === t.ref)
          return Mu(e, t, u);
      }
      t.flags |= Wi;
      var de = ic(x, i);
      return de.ref = t.ref, de.return = t, t.child = de, de;
    }
    function hC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === nt) {
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
            zt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Fe(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (rl = !1, t.pendingProps = i = g, wS(e, u))
            (e.flags & ti) !== Ue && (rl = !0);
          else return t.lanes = e.lanes, Mu(e, t, u);
      }
      return yS(e, t, a, i, u);
    }
    function mC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || w)
        if ((t.mode & Rt) === Ae) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Hm(t, a);
        } else if (aa(a, na)) {
          var _ = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var x = s !== null ? s.baseLanes : a;
          Hm(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = vt(y, a);
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
        var z;
        s !== null ? (z = vt(s.baseLanes, a), t.memoizedState = null) : z = a, Hm(t, z);
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
          zt(a)
        );
      }
      var f;
      {
        var p = bf(t, a, !0);
        f = _f(t, p);
      }
      var v, y;
      Mf(t, u), Aa(t);
      {
        if (Np.current = t, Oa(!0), v = Hf(e, t, a, i, f, u), y = Pf(), t.mode & st) {
          Gt(!0);
          try {
            v = Hf(e, t, a, i, f, u), y = Pf();
          } finally {
            Gt(!1);
          }
        }
        Oa(!1);
      }
      return Rl(), e !== null && !rl ? (D0(e, t, u), Mu(e, t, u)) : (jr() && y && Xy(t), t.flags |= Wi, Ta(e, t, v, u), t.child);
    }
    function gC(e, t, a, i, u) {
      {
        switch (Lk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Et, t.flags |= br;
            var y = new Error("Simulated error coming from DevTools"), g = nr(u);
            t.lanes = vt(t.lanes, g);
            var _ = fS(t, Zs(y, t), g);
            gg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && Xi(
            x,
            i,
            // Resolved props
            "prop",
            zt(a)
          );
        }
      }
      var z;
      Fl(a) ? (z = !0, jh(t)) : z = !1, Mf(t, u);
      var A = t.stateNode, P;
      A === null ? (km(e, t), uC(t, a, i), oS(t, a, i, u), P = !0) : e === null ? P = ab(t, a, i, u) : P = ib(e, t, a, i, u);
      var de = gS(e, t, a, P, z, u);
      {
        var Be = t.stateNode;
        P && Be.props !== i && (ec || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ze(t) || "a component"), ec = !0);
      }
      return de;
    }
    function gS(e, t, a, i, u, s) {
      yC(e, t);
      var f = (t.flags & Et) !== Ue;
      if (!i && !f)
        return u && ZE(t, a, !1), Mu(e, t, s);
      var p = t.stateNode;
      Np.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, nC();
      else {
        Aa(t);
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
      return t.flags |= Wi, e !== null && f ? db(e, t, v, s) : Ta(e, t, v, s), t.memoizedState = p.state, u && ZE(t, a, !0), t.child;
    }
    function SC(e) {
      var t = e.stateNode;
      t.pendingContext ? XE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && XE(e, t.context, !1), Sg(e, t.containerInfo);
    }
    function mb(e, t, a) {
      if (SC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      R0(e, t), tm(t, i, null, a);
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
          var x = h0(t, null, p, a);
          t.child = x;
          for (var z = x; z; )
            z.flags = z.flags & ~Rn | Tn, z = z.sibling;
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
      b0(t), e === null && ng(t);
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
      var y = t.tag = gk(v), g = nl(v, u), _;
      switch (y) {
        case ge:
          return SS(t, v), t.type = v = Gf(v), _ = yS(null, t, v, g, i), _;
        case ue:
          return t.type = v = qS(v), _ = gC(null, t, v, g, i), _;
        case He:
          return t.type = v = KS(v), _ = pC(null, t, v, g, i), _;
        case ee: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && Xi(
              x,
              g,
              // Resolved for outer only
              "prop",
              zt(v)
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
      var z = "";
      throw v !== null && typeof v == "object" && v.$$typeof === nt && (z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + z));
    }
    function Eb(e, t, a, i, u) {
      km(e, t), t.tag = ue;
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
      Aa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = zt(a) || "Unknown";
          dS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), dS[y] = !0);
        }
        t.mode & st && Zi.recordLegacyContextWarning(t, null), Oa(!0), Np.current = t, p = Hf(null, t, a, u, s, i), v = Pf(), Oa(!1);
      }
      if (Rl(), t.flags |= Wi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = zt(a) || "Unknown";
        Lp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Lp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = zt(a) || "Unknown";
          Lp[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Lp[_] = !0);
        }
        t.tag = ue, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return Fl(a) ? (x = !0, jh(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, yg(t), lC(t, p), oS(t, a, u, i), gS(null, t, a, !0, x, i);
      } else {
        if (t.tag = ge, t.mode & st) {
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
          var a = "", i = Lr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), hS[u] || (hS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = zt(t) || "Unknown";
          Mp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Mp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = zt(t) || "Unknown";
          vS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), vS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = zt(t) || "Unknown";
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
        baseLanes: vt(e.baseLanes, t),
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
      Mk(t) && (t.flags |= Et);
      var u = el.current, s = !1, f = (t.flags & Et) !== Ue;
      if (f || Tb(u, e) ? (s = !0, t.flags &= ~Et) : (e === null || e.memoizedState !== null) && (u = Bw(u, k0)), u = Uf(u), zo(t, u), e === null) {
        ng(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Db(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = wb(t, y, g, a), x = t.child;
          return x.memoizedState = CS(a), t.memoizedState = ES, _;
        } else
          return RS(t, y);
      } else {
        var z = e.memoizedState;
        if (z !== null) {
          var A = z.dehydrated;
          if (A !== null)
            return Ob(e, t, f, i, A, z, a);
        }
        if (s) {
          var P = i.fallback, de = i.children, Be = _b(e, t, de, P, a), ze = t.child, At = e.child.memoizedState;
          return ze.memoizedState = At === null ? CS(a) : Rb(At, a), ze.childLanes = xb(e, a), t.memoizedState = ES, Be;
        } else {
          var bt = i.children, O = bb(e, t, bt, a);
          return t.memoizedState = null, O;
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
      return (u & Rt) === Ae && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & Ot && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Bo(a, u, i, null)) : (p = TS(f, u), v = Bo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function TS(e, t, a) {
      return RR(e, t, Y, null);
    }
    function RC(e, t) {
      return ic(e, t);
    }
    function bb(e, t, a, i) {
      var u = e.child, s = u.sibling, f = RC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Rt) === Ae && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
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
        (s & Rt) === Ae && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = Y, y.pendingProps = v, t.mode & Ot && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = RC(f, v), y.subtreeFlags = f.subtreeFlags & jn;
      var _;
      return p !== null ? _ = ic(p, i) : (_ = Bo(i, s, u, null), _.flags |= Rn), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function _m(e, t, a, i) {
      i !== null && rg(i), Nf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = RS(t, s);
      return f.flags |= Rn, t.memoizedState = null, f;
    }
    function kb(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = TS(f, s), v = Bo(i, s, u, null);
      return v.flags |= Rn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Rt) !== Ae && Nf(t, e.child, null, u), v;
    }
    function Db(e, t, a) {
      return (e.mode & Rt) === Ae ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Qe) : Vy(t) ? e.lanes = tr : e.lanes = na, null;
    }
    function Ob(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & yn) {
          t.flags &= ~yn;
          var O = sS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return _m(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Et, null;
          var V = i.children, N = i.fallback, J = kb(e, t, V, N, f), Re = t.child;
          return Re.memoizedState = CS(f), t.memoizedState = ES, J;
        }
      else {
        if (yw(), (t.mode & Rt) === Ae)
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
          var x = sS(_, p, y);
          return _m(e, t, f, x);
        }
        var z = aa(f, e.childLanes);
        if (rl || z) {
          var A = jm();
          if (A !== null) {
            var P = ef(A, f);
            if (P !== Hn && P !== s.retryLane) {
              s.retryLane = P;
              var de = qt;
              Ba(e, P), Er(A, e, P, de);
            }
          }
          YS();
          var Be = sS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return _m(e, t, f, Be);
        } else if (IE(u)) {
          t.flags |= Et, t.child = e.child;
          var ze = tk.bind(null, e);
          return Ux(u, ze), null;
        } else {
          Ew(t, u, s.treeContext);
          var At = i.children, bt = RS(t, At);
          return bt.flags |= Tn, bt;
        }
      }
    }
    function TC(e, t, a) {
      e.lanes = vt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = vt(i.lanes, t)), pg(e.return, t, a);
    }
    function Nb(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === be) {
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
    function Lb(e) {
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
        var a = pt(e), i = !a && typeof mn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Ub(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (pt(e)) {
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
      Mb(u), zb(s, u), Ub(f, u), Ta(e, t, f, a);
      var p = el.current, v = Rg(p, Rp);
      if (v)
        p = Tg(p, Rp), t.flags |= Et;
      else {
        var y = e !== null && (e.flags & Et) !== Ue;
        y && Nb(t, t.child, a), p = Uf(p);
      }
      if (zo(t, p), (t.mode & Rt) === Ae)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Lb(t.child), _;
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
            var x = null, z = t.child;
            for (t.child = null; z !== null; ) {
              var A = z.alternate;
              if (A !== null && im(A) === null) {
                t.child = z;
                break;
              }
              var P = z.sibling;
              z.sibling = x, x = z, z = P;
            }
            xS(
              t,
              !0,
              // isBackwards
              x,
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
    function Ab(e, t, a) {
      Sg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Nf(t, null, i, a) : Ta(e, t, i, a), t.child;
    }
    var bC = !1;
    function Fb(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || bC || (bC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Xi(v, s, "prop", "Context.Provider");
      }
      if (g0(t, u, p), f !== null) {
        var y = f.value;
        if (ve(y, p)) {
          if (f.children === s.children && !Ah())
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
      Aa(t);
      var p;
      return Np.current = t, Oa(!0), p = s(f), Oa(!1), Rl(), t.flags |= Wi, Ta(e, t, p, a), t.child;
    }
    function zp() {
      rl = !0;
    }
    function km(e, t) {
      (t.mode & Rt) === Ae && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Rn);
    }
    function Mu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), nC(), Wp(t.lanes), aa(a, t.childLanes) ? (Nw(e, t), t.child) : null;
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
        case k:
          SC(t), t.stateNode, Of();
          break;
        case j:
          b0(t);
          break;
        case ue: {
          var i = t.type;
          Fl(i) && jh(t);
          break;
        }
        case Q:
          Sg(t, t.stateNode.containerInfo);
          break;
        case ft: {
          var u = t.memoizedProps.value, s = t.type._context;
          g0(t, s, u);
          break;
        }
        case ut:
          {
            var f = aa(a, t.childLanes);
            f && (t.flags |= xt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case be: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return zo(t, Uf(el.current)), t.flags |= Et, null;
            var y = t.child, g = y.childLanes;
            if (aa(a, g))
              return CC(e, t, a);
            zo(t, Uf(el.current));
            var _ = Mu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            zo(t, Uf(el.current));
          break;
        }
        case Ye: {
          var x = (e.flags & Et) !== Ue, z = aa(a, t.childLanes);
          if (x) {
            if (z)
              return wC(e, t, a);
            t.flags |= Et;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), zo(t, el.current), z)
            break;
          return null;
        }
        case Le:
        case kt:
          return t.lanes = Y, mC(e, t, a);
      }
      return Mu(e, t, a);
    }
    function kC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Hb(e, t, tE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Ah() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          rl = !0;
        else {
          var s = wS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Et) === Ue)
            return rl = !1, Pb(e, t, a);
          (e.flags & ti) !== Ue ? rl = !0 : rl = !1;
        }
      } else if (rl = !1, jr() && fw(t)) {
        var f = t.index, p = dw();
        n0(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case Ne:
          return Cb(e, t, t.type, a);
        case Pe: {
          var v = t.elementType;
          return Sb(e, t, v, a);
        }
        case ge: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : nl(y, g);
          return yS(e, t, y, _, a);
        }
        case ue: {
          var x = t.type, z = t.pendingProps, A = t.elementType === x ? z : nl(x, z);
          return gC(e, t, x, A, a);
        }
        case k:
          return mb(e, t, a);
        case j:
          return yb(e, t, a);
        case Z:
          return gb(e, t);
        case be:
          return CC(e, t, a);
        case Q:
          return Ab(e, t, a);
        case He: {
          var P = t.type, de = t.pendingProps, Be = t.elementType === P ? de : nl(P, de);
          return pC(e, t, P, Be, a);
        }
        case De:
          return pb(e, t, a);
        case ht:
          return vb(e, t, a);
        case ut:
          return hb(e, t, a);
        case ft:
          return Fb(e, t, a);
        case We:
          return jb(e, t, a);
        case ee: {
          var ze = t.type, At = t.pendingProps, bt = nl(ze, At);
          if (t.type !== t.elementType) {
            var O = ze.propTypes;
            O && Xi(
              O,
              bt,
              // Resolved for outer only
              "prop",
              zt(ze)
            );
          }
          return bt = nl(ze.type, bt), vC(e, t, ze, bt, a);
        }
        case me:
          return hC(e, t, t.type, t.pendingProps, a);
        case Xe: {
          var V = t.type, N = t.pendingProps, J = t.elementType === V ? N : nl(V, N);
          return Eb(e, t, V, J, a);
        }
        case Ye:
          return wC(e, t, a);
        case dt:
          break;
        case Le:
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
    var OC, bS, NC, LC;
    OC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === j || u.tag === Z)
          ox(e, u.stateNode);
        else if (u.tag !== Q) {
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
    }, NC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Eg(), v = cx(f, a, s, i, u, p);
        t.updateQueue = v, v && Vf(t);
      }
    }, LC = function(e, t, a, i) {
      a !== i && Vf(t);
    };
    function Up(e, t) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = Ue;
      if (t) {
        if ((e.mode & Ot) !== Ae) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = vt(a, vt(y.lanes, y.childLanes)), i |= y.subtreeFlags & jn, i |= y.flags & jn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = vt(a, vt(g.lanes, g.childLanes)), i |= g.subtreeFlags & jn, i |= g.flags & jn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ot) !== Ae) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = vt(a, vt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = vt(a, vt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Vb(e, t, a) {
      if (ww() && (t.mode & Rt) !== Ae && (t.flags & Et) === Ue)
        return s0(t), Of(), t.flags |= yn | uu | br, !1;
      var i = $h(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Tw(t), Pr(t), (t.mode & Ot) !== Ae) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Of(), (t.flags & Et) === Ue && (t.memoizedState = null), t.flags |= xt, Pr(t), (t.mode & Ot) !== Ae) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return c0(), !0;
    }
    function MC(e, t, a) {
      var i = t.pendingProps;
      switch (Jy(t), t.tag) {
        case Ne:
        case Pe:
        case me:
        case ge:
        case He:
        case De:
        case ht:
        case ut:
        case We:
        case ee:
          return Pr(t), null;
        case ue: {
          var u = t.type;
          return Fl(u) && Fh(t), Pr(t), null;
        }
        case k: {
          var s = t.stateNode;
          if (zf(t), Gy(t), wg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = $h(t);
            if (f)
              Vf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & yn) !== Ue) && (t.flags |= Ua, c0());
            }
          }
          return bS(e, t), Pr(t), null;
        }
        case j: {
          Cg(t);
          var v = w0(), y = t.type;
          if (e !== null && t.stateNode != null)
            NC(e, t, y, i, v), e.ref !== t.ref && DC(t);
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
              var x = ux(y, i, v, g, t);
              OC(x, t, !1, !1), t.stateNode = x, sx(x, y, i, v) && Vf(t);
            }
            t.ref !== null && DC(t);
          }
          return Pr(t), null;
        }
        case Z: {
          var z = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            LC(e, t, A, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var P = w0(), de = Eg(), Be = $h(t);
            Be ? Rw(t) && Vf(t) : t.stateNode = fx(z, P, de, t);
          }
          return Pr(t), null;
        }
        case be: {
          Af(t);
          var ze = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var At = Vb(e, t, ze);
            if (!At)
              return t.flags & br ? t : null;
          }
          if ((t.flags & Et) !== Ue)
            return t.lanes = a, (t.mode & Ot) !== Ae && Kg(t), t;
          var bt = ze !== null, O = e !== null && e.memoizedState !== null;
          if (bt !== O && bt) {
            var V = t.child;
            if (V.flags |= gi, (t.mode & Rt) !== Ae) {
              var N = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              N || Rg(el.current, k0) ? B_() : YS();
            }
          }
          var J = t.updateQueue;
          if (J !== null && (t.flags |= xt), Pr(t), (t.mode & Ot) !== Ae && bt) {
            var Re = t.child;
            Re !== null && (t.treeBaseDuration -= Re.treeBaseDuration);
          }
          return null;
        }
        case Q:
          return zf(t), bS(e, t), e === null && aw(t.stateNode.containerInfo), Pr(t), null;
        case ft:
          var he = t.type._context;
          return dg(he, t), Pr(t), null;
        case Xe: {
          var qe = t.type;
          return Fl(qe) && Fh(t), Pr(t), null;
        }
        case Ye: {
          Af(t);
          var it = t.memoizedState;
          if (it === null)
            return Pr(t), null;
          var nn = (t.flags & Et) !== Ue, jt = it.rendering;
          if (jt === null)
            if (nn)
              Up(it, !1);
            else {
              var Gn = Y_() && (e === null || (e.flags & Et) === Ue);
              if (!Gn)
                for (var Ht = t.child; Ht !== null; ) {
                  var Vn = im(Ht);
                  if (Vn !== null) {
                    nn = !0, t.flags |= Et, Up(it, !1);
                    var ca = Vn.updateQueue;
                    return ca !== null && (t.updateQueue = ca, t.flags |= xt), t.subtreeFlags = Ue, Lw(t, a), zo(t, Tg(el.current, Rp)), t.child;
                  }
                  Ht = Ht.sibling;
                }
              it.tail !== null && _n() > eR() && (t.flags |= Et, nn = !0, Up(it, !1), t.lanes = Vv);
            }
          else {
            if (!nn) {
              var Ir = im(jt);
              if (Ir !== null) {
                t.flags |= Et, nn = !0;
                var oi = Ir.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= xt), Up(it, !0), it.tail === null && it.tailMode === "hidden" && !jt.alternate && !jr())
                  return Pr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              _n() * 2 - it.renderingStartTime > eR() && a !== na && (t.flags |= Et, nn = !0, Up(it, !1), t.lanes = Vv);
            }
            if (it.isBackwards)
              jt.sibling = t.child, t.child = jt;
            else {
              var ba = it.last;
              ba !== null ? ba.sibling = jt : t.child = jt, it.last = jt;
            }
          }
          if (it.tail !== null) {
            var _a = it.tail;
            it.rendering = _a, it.tail = _a.sibling, it.renderingStartTime = _n(), _a.sibling = null;
            var fa = el.current;
            return nn ? fa = Tg(fa, Rp) : fa = Uf(fa), zo(t, fa), _a;
          }
          return Pr(t), null;
        }
        case dt:
          break;
        case Le:
        case kt: {
          $S(t);
          var ju = t.memoizedState, qf = ju !== null;
          if (e !== null) {
            var Xp = e.memoizedState, Il = Xp !== null;
            Il !== qf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !w && (t.flags |= gi);
          }
          return !qf || (t.mode & Rt) === Ae ? Pr(t) : aa(Yl, na) && (Pr(t), t.subtreeFlags & (Rn | xt) && (t.flags |= gi)), null;
        }
        case ae:
          return null;
        case Ve:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bb(e, t, a) {
      switch (Jy(t), t.tag) {
        case ue: {
          var i = t.type;
          Fl(i) && Fh(t);
          var u = t.flags;
          return u & br ? (t.flags = u & ~br | Et, (t.mode & Ot) !== Ae && Kg(t), t) : null;
        }
        case k: {
          t.stateNode, zf(t), Gy(t), wg();
          var s = t.flags;
          return (s & br) !== Ue && (s & Et) === Ue ? (t.flags = s & ~br | Et, t) : null;
        }
        case j:
          return Cg(t), null;
        case be: {
          Af(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Of();
          }
          var p = t.flags;
          return p & br ? (t.flags = p & ~br | Et, (t.mode & Ot) !== Ae && Kg(t), t) : null;
        }
        case Ye:
          return Af(t), null;
        case Q:
          return zf(t), null;
        case ft:
          var v = t.type._context;
          return dg(v, t), null;
        case Le:
        case kt:
          return $S(t), null;
        case ae:
          return null;
        default:
          return null;
      }
    }
    function zC(e, t, a) {
      switch (Jy(t), t.tag) {
        case ue: {
          var i = t.type.childContextTypes;
          i != null && Fh(t);
          break;
        }
        case k: {
          t.stateNode, zf(t), Gy(t), wg();
          break;
        }
        case j: {
          Cg(t);
          break;
        }
        case Q:
          zf(t);
          break;
        case be:
          Af(t);
          break;
        case Ye:
          Af(t);
          break;
        case ft:
          var u = t.type._context;
          dg(u, t);
          break;
        case Le:
        case kt:
          $S(t);
          break;
      }
    }
    var UC = null;
    UC = /* @__PURE__ */ new Set();
    var Dm = !1, Vr = !1, $b = typeof WeakSet == "function" ? WeakSet : Set, ke = null, Bf = null, $f = null;
    function Yb(e) {
      za(null, function() {
        throw e;
      }), dd();
    }
    var Ib = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ot)
        try {
          Bl(), t.componentWillUnmount();
        } finally {
          Vl(e);
        }
      else
        t.componentWillUnmount();
    };
    function AC(e, t) {
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
            if (tt && St && e.mode & Ot)
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
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ze(e));
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
      ix(e.containerInfo), ke = t, Gb();
      var a = jC;
      return jC = !1, a;
    }
    function Gb() {
      for (; ke !== null; ) {
        var e = ke, t = e.child;
        (e.subtreeFlags & Sl) !== Ue && t !== null ? (t.return = e, ke = t) : qb();
      }
    }
    function qb() {
      for (; ke !== null; ) {
        var e = ke;
        Xt(e);
        try {
          Kb(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        Cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ke = t;
          return;
        }
        ke = e.return;
      }
    }
    function Kb(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ua) !== Ue) {
        switch (Xt(e), e.tag) {
          case ge:
          case He:
          case me:
            break;
          case ue: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ec && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ze(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ze(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nl(e.type, i), u);
              {
                var p = UC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ze(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case k: {
            {
              var v = e.stateNode;
              Ox(v.containerInfo);
            }
            break;
          }
          case j:
          case Z:
          case Q:
          case Xe:
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
                (s.tag & vr) !== Ue ? v = "useLayoutEffect" : (s.tag & jl) !== Ue ? v = "useInsertionEffect" : v = "useEffect";
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
      if ((t.flags & xt) !== Ue)
        switch (t.tag) {
          case ut: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = eC(), p = t.alternate === null ? "mount" : "update";
            Z0() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case k:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case ut:
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
      if ((a.flags & El) !== Ue)
        switch (a.tag) {
          case ge:
          case He:
          case me: {
            if (!Vr)
              if (a.mode & Ot)
                try {
                  Bl(), Fo(vr | pr, a);
                } finally {
                  Vl(a);
                }
              else
                Fo(vr | pr, a);
            break;
          }
          case ue: {
            var u = a.stateNode;
            if (a.flags & xt && !Vr)
              if (t === null)
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ze(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ze(a) || "instance")), a.mode & Ot)
                  try {
                    Bl(), u.componentDidMount();
                  } finally {
                    Vl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ze(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ze(a) || "instance")), a.mode & Ot)
                  try {
                    Bl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Vl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ze(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ze(a) || "instance")), x0(a, p, u));
            break;
          }
          case k: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case j:
                    y = a.child.stateNode;
                    break;
                  case ue:
                    y = a.child.stateNode;
                    break;
                }
              x0(a, v, y);
            }
            break;
          }
          case j: {
            var g = a.stateNode;
            if (t === null && a.flags & xt) {
              var _ = a.type, x = a.memoizedProps;
              mx(g, _, x);
            }
            break;
          }
          case Z:
            break;
          case Q:
            break;
          case ut: {
            {
              var z = a.memoizedProps, A = z.onCommit, P = z.onRender, de = a.stateNode.effectDuration, Be = eC(), ze = t === null ? "mount" : "update";
              Z0() && (ze = "nested-update"), typeof P == "function" && P(a.memoizedProps.id, ze, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Be);
              {
                typeof A == "function" && A(a.memoizedProps.id, ze, de, Be), q_(a);
                var At = a.return;
                e: for (; At !== null; ) {
                  switch (At.tag) {
                    case k:
                      var bt = At.stateNode;
                      bt.effectDuration += de;
                      break e;
                    case ut:
                      var O = At.stateNode;
                      O.effectDuration += de;
                      break e;
                  }
                  At = At.return;
                }
              }
            }
            break;
          }
          case be: {
            l_(e, a);
            break;
          }
          case Ye:
          case Xe:
          case dt:
          case Le:
          case kt:
          case Ve:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Vr || a.flags & Fn && HC(a);
    }
    function Zb(e) {
      switch (e.tag) {
        case ge:
        case He:
        case me: {
          if (e.mode & Ot)
            try {
              Bl(), AC(e, e.return);
            } finally {
              Vl(e);
            }
          else
            AC(e, e.return);
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Wb(e, e.return, t), FC(e, e.return);
          break;
        }
        case j: {
          FC(e, e.return);
          break;
        }
      }
    }
    function e_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === j) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? bx(u) : kx(i.stateNode, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
          }
        } else if (i.tag === Z) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? _x(s) : Dx(s, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
        } else if (!((i.tag === Le || i.tag === kt) && i.memoizedState !== null && i !== e)) {
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
          case j:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ot)
            try {
              Bl(), u = t(i);
            } finally {
              Vl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ze(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ze(e)), t.current = i;
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
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === j) {
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
      return e.tag === j || e.tag === k || e.tag === Q;
    }
    function BC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || VC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== j && t.tag !== Z && t.tag !== _t; ) {
          if (t.flags & Rn || t.child === null || t.tag === Q)
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
        case j: {
          var a = t.stateNode;
          t.flags & Qt && (YE(a), t.flags &= ~Qt);
          var i = BC(e);
          DS(e, i, a);
          break;
        }
        case k:
        case Q: {
          var u = t.stateNode.containerInfo, s = BC(e);
          kS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function kS(e, t, a) {
      var i = e.tag, u = i === j || i === Z;
      if (u) {
        var s = e.stateNode;
        t ? Rx(a, s, t) : Ex(a, s);
      } else if (i !== Q) {
        var f = e.child;
        if (f !== null) {
          kS(f, t, a);
          for (var p = f.sibling; p !== null; )
            kS(p, t, a), p = p.sibling;
        }
      }
    }
    function DS(e, t, a) {
      var i = e.tag, u = i === j || i === Z;
      if (u) {
        var s = e.stateNode;
        t ? Cx(a, s, t) : Sx(a, s);
      } else if (i !== Q) {
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
            case j: {
              Br = i.stateNode, il = !1;
              break e;
            }
            case k: {
              Br = i.stateNode.containerInfo, il = !0;
              break e;
            }
            case Q: {
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
        case j:
          Vr || Yf(a, t);
        case Z: {
          {
            var i = Br, u = il;
            Br = null, jo(e, t, a), Br = i, il = u, Br !== null && (il ? xx(Br, a.stateNode) : Tx(Br, a.stateNode));
          }
          return;
        }
        case _t: {
          Br !== null && (il ? wx(Br, a.stateNode) : Py(Br, a.stateNode));
          return;
        }
        case Q: {
          {
            var s = Br, f = il;
            Br = a.stateNode.containerInfo, il = !0, jo(e, t, a), Br = s, il = f;
          }
          return;
        }
        case ge:
        case He:
        case ee:
        case me: {
          if (!Vr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, x = _.destroy, z = _.tag;
                  x !== void 0 && ((z & jl) !== $a ? Om(a, t, x) : (z & vr) !== $a && (xd(a), a.mode & Ot ? (Bl(), Om(a, t, x), Vl(a)) : Om(a, t, x), oo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          jo(e, t, a);
          return;
        }
        case ue: {
          if (!Vr) {
            Yf(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && _S(a, t, A);
          }
          jo(e, t, a);
          return;
        }
        case dt: {
          jo(e, t, a);
          return;
        }
        case Le: {
          if (
            // TODO: Remove this dead flag
            a.mode & Rt
          ) {
            var P = Vr;
            Vr = P || a.memoizedState !== null, jo(e, t, a), Vr = P;
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
          var u = nk.bind(null, e, i);
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
        case ge:
        case He:
        case ee:
        case me: {
          if (ll(t, e), $l(e), u & xt) {
            try {
              al(jl | pr, e, e.return), Fo(jl | pr, e);
            } catch (qe) {
              vn(e, e.return, qe);
            }
            if (e.mode & Ot) {
              try {
                Bl(), al(vr | pr, e, e.return);
              } catch (qe) {
                vn(e, e.return, qe);
              }
              Vl(e);
            } else
              try {
                al(vr | pr, e, e.return);
              } catch (qe) {
                vn(e, e.return, qe);
              }
          }
          return;
        }
        case ue: {
          ll(t, e), $l(e), u & Fn && i !== null && Yf(i, i.return);
          return;
        }
        case j: {
          ll(t, e), $l(e), u & Fn && i !== null && Yf(i, i.return);
          {
            if (e.flags & Qt) {
              var s = e.stateNode;
              try {
                YE(s);
              } catch (qe) {
                vn(e, e.return, qe);
              }
            }
            if (u & xt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    yx(f, g, y, v, p, e);
                  } catch (qe) {
                    vn(e, e.return, qe);
                  }
              }
            }
          }
          return;
        }
        case Z: {
          if (ll(t, e), $l(e), u & xt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, x = e.memoizedProps, z = i !== null ? i.memoizedProps : x;
            try {
              gx(_, z, x);
            } catch (qe) {
              vn(e, e.return, qe);
            }
          }
          return;
        }
        case k: {
          if (ll(t, e), $l(e), u & xt && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                $x(t.containerInfo);
              } catch (qe) {
                vn(e, e.return, qe);
              }
          }
          return;
        }
        case Q: {
          ll(t, e), $l(e);
          return;
        }
        case be: {
          ll(t, e), $l(e);
          var P = e.child;
          if (P.flags & gi) {
            var de = P.stateNode, Be = P.memoizedState, ze = Be !== null;
            if (de.isHidden = ze, ze) {
              var At = P.alternate !== null && P.alternate.memoizedState !== null;
              At || V_();
            }
          }
          if (u & xt) {
            try {
              i_(e);
            } catch (qe) {
              vn(e, e.return, qe);
            }
            YC(e);
          }
          return;
        }
        case Le: {
          var bt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Rt
          ) {
            var O = Vr;
            Vr = O || bt, ll(t, e), Vr = O;
          } else
            ll(t, e);
          if ($l(e), u & gi) {
            var V = e.stateNode, N = e.memoizedState, J = N !== null, Re = e;
            if (V.isHidden = J, J && !bt && (Re.mode & Rt) !== Ae) {
              ke = Re;
              for (var he = Re.child; he !== null; )
                ke = he, s_(he), he = he.sibling;
            }
            e_(Re, J);
          }
          return;
        }
        case Ye: {
          ll(t, e), $l(e), u & xt && YC(e);
          return;
        }
        case dt:
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
      Bf = a, $f = t, ke = e, WC(e, t, a), Bf = null, $f = null;
    }
    function WC(e, t, a) {
      for (var i = (e.mode & Rt) !== Ae; ke !== null; ) {
        var u = ke, s = u.child;
        if (u.tag === Le && i) {
          var f = u.memoizedState !== null, p = f || Dm;
          if (p) {
            OS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Vr, _ = Dm, x = Vr;
            Dm = p, Vr = g, Vr && !x && (ke = u, c_(u));
            for (var z = s; z !== null; )
              ke = z, WC(
                z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), z = z.sibling;
            ke = u, Dm = _, Vr = x, OS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & El) !== Ue && s !== null ? (s.return = u, ke = s) : OS(e, t, a);
      }
    }
    function OS(e, t, a) {
      for (; ke !== null; ) {
        var i = ke;
        if ((i.flags & El) !== Ue) {
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
          ke = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ke = s;
          return;
        }
        ke = i.return;
      }
    }
    function s_(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.child;
        switch (t.tag) {
          case ge:
          case He:
          case ee:
          case me: {
            if (t.mode & Ot)
              try {
                Bl(), al(vr, t, t.return);
              } finally {
                Vl(t);
              }
            else
              al(vr, t, t.return);
            break;
          }
          case ue: {
            Yf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && _S(t, t.return, i);
            break;
          }
          case j: {
            Yf(t, t.return);
            break;
          }
          case Le: {
            var u = t.memoizedState !== null;
            if (u) {
              QC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ke = a) : QC(e);
      }
    }
    function QC(e) {
      for (; ke !== null; ) {
        var t = ke;
        if (t === e) {
          ke = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ke = a;
          return;
        }
        ke = t.return;
      }
    }
    function c_(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.child;
        if (t.tag === Le) {
          var i = t.memoizedState !== null;
          if (i) {
            GC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ke = a) : GC(e);
      }
    }
    function GC(e) {
      for (; ke !== null; ) {
        var t = ke;
        Xt(t);
        try {
          Zb(t);
        } catch (i) {
          vn(t, t.return, i);
        }
        if (Cn(), t === e) {
          ke = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ke = a;
          return;
        }
        ke = t.return;
      }
    }
    function f_(e, t, a, i) {
      ke = t, d_(t, e, a, i);
    }
    function d_(e, t, a, i) {
      for (; ke !== null; ) {
        var u = ke, s = u.child;
        (u.subtreeFlags & or) !== Ue && s !== null ? (s.return = u, ke = s) : p_(e, t, a, i);
      }
    }
    function p_(e, t, a, i) {
      for (; ke !== null; ) {
        var u = ke;
        if ((u.flags & ya) !== Ue) {
          Xt(u);
          try {
            v_(t, u, a, i);
          } catch (f) {
            vn(u, u.return, f);
          }
          Cn();
        }
        if (u === e) {
          ke = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ke = s;
          return;
        }
        ke = u.return;
      }
    }
    function v_(e, t, a, i) {
      switch (t.tag) {
        case ge:
        case He:
        case me: {
          if (t.mode & Ot) {
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
      ke = e, m_();
    }
    function m_() {
      for (; ke !== null; ) {
        var e = ke, t = e.child;
        if ((ke.flags & Jr) !== Ue) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ke = u, S_(u, e);
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
            ke = e;
          }
        }
        (e.subtreeFlags & or) !== Ue && t !== null ? (t.return = e, ke = t) : y_();
      }
    }
    function y_() {
      for (; ke !== null; ) {
        var e = ke;
        (e.flags & ya) !== Ue && (Xt(e), g_(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ke = t;
          return;
        }
        ke = e.return;
      }
    }
    function g_(e) {
      switch (e.tag) {
        case ge:
        case He:
        case me: {
          e.mode & Ot ? (qg(), al(Hr | pr, e, e.return), Gg(e)) : al(Hr | pr, e, e.return);
          break;
        }
      }
    }
    function S_(e, t) {
      for (; ke !== null; ) {
        var a = ke;
        Xt(a), C_(a, t), Cn();
        var i = a.child;
        i !== null ? (i.return = a, ke = i) : E_(e);
      }
    }
    function E_(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.sibling, i = t.return;
        if (PC(t), t === e) {
          ke = null;
          return;
        }
        if (a !== null) {
          a.return = i, ke = a;
          return;
        }
        ke = i;
      }
    }
    function C_(e, t) {
      switch (e.tag) {
        case ge:
        case He:
        case me: {
          e.mode & Ot ? (qg(), al(Hr, e, t), Gg(e)) : al(Hr, e, t);
          break;
        }
      }
    }
    function R_(e) {
      switch (e.tag) {
        case ge:
        case He:
        case me: {
          try {
            Fo(vr | pr, e);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case ue: {
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
        case ge:
        case He:
        case me: {
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
        case ge:
        case He:
        case me: {
          try {
            al(vr | pr, e, e.return);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _S(e, e.return, t);
          break;
        }
      }
    }
    function w_(e) {
      switch (e.tag) {
        case ge:
        case He:
        case me:
          try {
            al(Hr | pr, e, e.return);
          } catch (t) {
            vn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Ap = Symbol.for;
      Ap("selector.component"), Ap("selector.has_pseudo_class"), Ap("selector.role"), Ap("selector.test_id"), Ap("selector.text");
    }
    var b_ = [];
    function __() {
      b_.forEach(function(e) {
        return e();
      });
    }
    var k_ = ye.ReactCurrentActQueue;
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
    var O_ = Math.ceil, NS = ye.ReactCurrentDispatcher, LS = ye.ReactCurrentOwner, $r = ye.ReactCurrentBatchConfig, ul = ye.ReactCurrentActQueue, yr = (
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
    ), zu = 0, Fp = 1, tc = 2, Nm = 3, jp = 4, XC = 5, MS = 6, Ut = yr, xa = null, Nn = null, gr = Y, Yl = Y, zS = ko(Y), Sr = zu, Hp = null, Lm = Y, Pp = Y, Mm = Y, Vp = null, Ya = null, US = 0, JC = 500, ZC = 1 / 0, N_ = 500, Uu = null;
    function Bp() {
      ZC = _n() + N_;
    }
    function eR() {
      return ZC;
    }
    var zm = !1, AS = null, If = null, nc = !1, Ho = null, $p = Y, FS = [], jS = null, L_ = 50, Yp = 0, HS = null, PS = !1, Um = !1, M_ = 50, Wf = 0, Am = null, Ip = qt, Fm = Y, tR = !1;
    function jm() {
      return xa;
    }
    function wa() {
      return (Ut & (Yr | Di)) !== yr ? _n() : (Ip !== qt || (Ip = _n()), Ip);
    }
    function Po(e) {
      var t = e.mode;
      if ((t & Rt) === Ae)
        return Qe;
      if ((Ut & Yr) !== yr && gr !== Y)
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
      return (t & Rt) === Ae ? Qe : Qv();
    }
    function Er(e, t, a, i) {
      ak(), tR && S("useInsertionEffect must not schedule updates."), PS && (Um = !0), ho(e, a, i), (Ut & Yr) !== Y && e === xa ? uk(t) : (_r && qv(e, t, a), ok(t), e === xa && ((Ut & Yr) === yr && (Pp = vt(Pp, a)), Sr === jp && Vo(e, gr)), Ia(e, i), a === Qe && Ut === yr && (t.mode & Rt) === Ae && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ul.isBatchingLegacy && (Bp(), t0()));
    }
    function U_(e, t, a) {
      var i = e.current;
      i.lanes = t, ho(e, t, a), Ia(e, a);
    }
    function A_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ut & Yr) !== yr
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      Yv(e, t);
      var i = ra(e, e === xa ? gr : Y);
      if (i === Y) {
        a !== null && yR(a), e.callbackNode = null, e.callbackPriority = Hn;
        return;
      }
      var u = hu(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ul.current !== null && a !== QS)) {
        a == null && s !== Qe && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && yR(a);
      var f;
      if (u === Qe)
        e.tag === Do ? (ul.isBatchingLegacy !== null && (ul.didScheduleLegacyUpdate = !0), cw(aR.bind(null, e))) : e0(aR.bind(null, e)), ul.current !== null ? ul.current.push(Oo) : vx(function() {
          (Ut & (Yr | Di)) === yr && Oo();
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
      if (eb(), Ip = qt, Fm = Y, (Ut & (Yr | Di)) !== yr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Fu();
      if (i && e.callbackNode !== a)
        return null;
      var u = ra(e, e === xa ? gr : Y);
      if (u === Y)
        return null;
      var s = !ws(e, u) && !Wv(e, u) && !t, f = s ? W_(e, u) : Pm(e, u);
      if (f !== zu) {
        if (f === tc) {
          var p = Gc(e);
          p !== Y && (u = p, f = VS(e, p));
        }
        if (f === Fp) {
          var v = Hp;
          throw rc(e, Y), Vo(e, u), Ia(e, _n()), v;
        }
        if (f === MS)
          Vo(e, u);
        else {
          var y = !ws(e, u), g = e.current.alternate;
          if (y && !j_(g)) {
            if (f = Pm(e, u), f === tc) {
              var _ = Gc(e);
              _ !== Y && (u = _, f = VS(e, _));
            }
            if (f === Fp) {
              var x = Hp;
              throw rc(e, Y), Vo(e, u), Ia(e, _n()), x;
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
          ac(e, Ya, Uu);
          break;
        }
        case Nm: {
          if (Vo(e, a), qc(a) && // do not delay if we're inside an act() scope
          !gR()) {
            var i = US + JC - _n();
            if (i > 10) {
              var u = ra(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!mu(s, a)) {
                wa(), Zc(e, s);
                break;
              }
              e.timeoutHandle = jy(ac.bind(null, e, Ya, Uu), i);
              break;
            }
          }
          ac(e, Ya, Uu);
          break;
        }
        case jp: {
          if (Vo(e, a), sy(a))
            break;
          if (!gR()) {
            var f = Od(e, a), p = f, v = _n() - p, y = rk(v) - v;
            if (y > 10) {
              e.timeoutHandle = jy(ac.bind(null, e, Ya, Uu), y);
              break;
            }
          }
          ac(e, Ya, Uu);
          break;
        }
        case XC: {
          ac(e, Ya, Uu);
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
                  if (!ve(f(), p))
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
      t = bs(t, Mm), t = bs(t, Pp), Ad(e, t);
    }
    function aR(e) {
      if (tb(), (Ut & (Yr | Di)) !== yr)
        throw new Error("Should not already be working.");
      Fu();
      var t = ra(e, Y);
      if (!aa(t, Qe))
        return Ia(e, _n()), null;
      var a = Pm(e, t);
      if (e.tag !== Do && a === tc) {
        var i = Gc(e);
        i !== Y && (t = i, a = VS(e, i));
      }
      if (a === Fp) {
        var u = Hp;
        throw rc(e, Y), Vo(e, t), Ia(e, _n()), u;
      }
      if (a === MS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ac(e, Ya, Uu), Ia(e, _n()), null;
    }
    function H_(e, t) {
      t !== Y && (_s(e, vt(t, Qe)), Ia(e, _n()), (Ut & (Yr | Di)) === yr && (Bp(), Oo()));
    }
    function BS(e, t) {
      var a = Ut;
      Ut |= KC;
      try {
        return e(t);
      } finally {
        Ut = a, Ut === yr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ul.isBatchingLegacy && (Bp(), t0());
      }
    }
    function P_(e, t, a, i, u) {
      var s = Sa(), f = $r.transition;
      try {
        return $r.transition = null, In(ia), e(t, a, i, u);
      } finally {
        In(s), $r.transition = f, Ut === yr && Bp();
      }
    }
    function Au(e) {
      Ho !== null && Ho.tag === Do && (Ut & (Yr | Di)) === yr && Fu();
      var t = Ut;
      Ut |= KC;
      var a = $r.transition, i = Sa();
      try {
        return $r.transition = null, In(ia), e ? e() : void 0;
      } finally {
        In(i), $r.transition = a, Ut = t, (Ut & (Yr | Di)) === yr && Oo();
      }
    }
    function iR() {
      return (Ut & (Yr | Di)) !== yr;
    }
    function Hm(e, t) {
      oa(zS, Yl, e), Yl = vt(Yl, t);
    }
    function $S(e) {
      Yl = zS.current, ua(zS, e);
    }
    function rc(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== Hy && (e.timeoutHandle = Hy, px(a)), Nn !== null)
        for (var i = Nn.return; i !== null; ) {
          var u = i.alternate;
          zC(u, i), i = i.return;
        }
      xa = e;
      var s = ic(e.current, null);
      return Nn = s, gr = Yl = t, Sr = zu, Hp = null, Lm = Y, Pp = Y, Mm = Y, Vp = null, Ya = null, Uw(), Zi.discardPendingWarnings(), s;
    }
    function lR(e, t) {
      do {
        var a = Nn;
        try {
          if (qh(), O0(), Cn(), LS.current = null, a === null || a.return === null) {
            Sr = Fp, Hp = t, Nn = null;
            return;
          }
          if (tt && a.mode & Ot && xm(a, !0), Je)
            if (Rl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              hs(a, i, gr);
            } else
              Ci(a, t, gr);
          cb(e, a.return, a, t, gr), cR(a);
        } catch (u) {
          t = u, Nn === a && a !== null ? (a = a.return, Nn = a) : a = Nn;
          continue;
        }
        return;
      } while (!0);
    }
    function uR() {
      var e = NS.current;
      return NS.current = Sm, e === null ? Sm : e;
    }
    function oR(e) {
      NS.current = e;
    }
    function V_() {
      US = _n();
    }
    function Wp(e) {
      Lm = vt(e, Lm);
    }
    function B_() {
      Sr === zu && (Sr = Nm);
    }
    function YS() {
      (Sr === zu || Sr === Nm || Sr === tc) && (Sr = jp), xa !== null && (_l(Lm) || _l(Pp)) && Vo(xa, gr);
    }
    function $_(e) {
      Sr !== jp && (Sr = tc), Vp === null ? Vp = [e] : Vp.push(e);
    }
    function Y_() {
      return Sr === zu;
    }
    function Pm(e, t) {
      var a = Ut;
      Ut |= Yr;
      var i = uR();
      if (xa !== e || gr !== t) {
        if (_r) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, gr), u.clear()), Fd(e, t);
        }
        Uu = tf(), rc(e, t);
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
      if (qh(), Ut = a, oR(i), Nn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return gn(), xa = null, gr = Y, Sr;
    }
    function I_() {
      for (; Nn !== null; )
        sR(Nn);
    }
    function W_(e, t) {
      var a = Ut;
      Ut |= Yr;
      var i = uR();
      if (xa !== e || gr !== t) {
        if (_r) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, gr), u.clear()), Fd(e, t);
        }
        Uu = tf(), Bp(), rc(e, t);
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
      return qh(), oR(i), Ut = a, Nn !== null ? (_d(), zu) : (gn(), xa = null, gr = Y, Sr);
    }
    function Q_() {
      for (; Nn !== null && !gd(); )
        sR(Nn);
    }
    function sR(e) {
      var t = e.alternate;
      Xt(e);
      var a;
      (e.mode & Ot) !== Ae ? (Qg(e), a = IS(t, e, Yl), xm(e, !0)) : a = IS(t, e, Yl), Cn(), e.memoizedProps = e.pendingProps, a === null ? cR(e) : Nn = a, LS.current = null;
    }
    function cR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & uu) === Ue) {
          Xt(t);
          var u = void 0;
          if ((t.mode & Ot) === Ae ? u = MC(a, t, Yl) : (Qg(t), u = MC(a, t, Yl), xm(t, !1)), Cn(), u !== null) {
            Nn = u;
            return;
          }
        } else {
          var s = Bb(a, t);
          if (s !== null) {
            s.flags &= Lv, Nn = s;
            return;
          }
          if ((t.mode & Ot) !== Ae) {
            xm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= uu, i.subtreeFlags = Ue, i.deletions = null;
          else {
            Sr = MS, Nn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Nn = v;
          return;
        }
        t = i, Nn = t;
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
      if (ik(), (Ut & (Yr | Di)) !== yr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (jv(s), u === null)
        return Ei(), null;
      if (s === Y && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Hn;
      var f = vt(u.lanes, u.childLanes);
      Gv(e, f), e === xa && (xa = null, Nn = null, gr = Y), ((u.subtreeFlags & or) !== Ue || (u.flags & or) !== Ue) && (nc || (nc = !0, jS = a, GS(su, function() {
        return Fu(), null;
      })));
      var p = (u.subtreeFlags & (Sl | io | El | or)) !== Ue, v = (u.flags & (Sl | io | El | or)) !== Ue;
      if (p || v) {
        var y = $r.transition;
        $r.transition = null;
        var g = Sa();
        In(ia);
        var _ = Ut;
        Ut |= Di, LS.current = null, Qb(e, u), tC(), u_(e, u, s), lx(e.containerInfo), e.current = u, ms(s), o_(u, e, s), fu(), zv(), Ut = _, In(g), $r.transition = y;
      } else
        e.current = u, tC();
      var x = nc;
      if (nc ? (nc = !1, Ho = e, $p = s) : (Wf = 0, Am = null), f = e.pendingLanes, f === Y && (If = null), x || vR(e.current, !1), Cd(u.stateNode, i), _r && e.memoizedUpdaters.clear(), __(), Ia(e, _n()), t !== null)
        for (var z = e.onRecoverableError, A = 0; A < t.length; A++) {
          var P = t[A], de = P.stack, Be = P.digest;
          z(P.value, {
            componentStack: de,
            digest: Be
          });
        }
      if (zm) {
        zm = !1;
        var ze = AS;
        throw AS = null, ze;
      }
      return aa($p, Qe) && e.tag !== Do && Fu(), f = e.pendingLanes, aa(f, Qe) ? (Zw(), e === HS ? Yp++ : (Yp = 0, HS = e)) : Yp = 0, Oo(), Ei(), null;
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
      if (Ho = null, $p = Y, (Ut & (Yr | Di)) !== yr)
        throw new Error("Cannot flush passive effects while already rendering.");
      PS = !0, Um = !1, wd(a);
      var i = Ut;
      Ut |= Di, h_(t.current), f_(t, t.current, a, e);
      {
        var u = FS;
        FS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Xb(t, f);
        }
      }
      so(), vR(t.current, !0), Ut = i, Oo(), Um ? t === Am ? Wf++ : (Wf = 0, Am = t) : Wf = 0, PS = !1, Um = !1, Rd(t);
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
      zm || (zm = !0, AS = e);
    }
    var Z_ = J_;
    function dR(e, t, a) {
      var i = Zs(a, t), u = sC(e, i, Qe), s = Lo(e, u, Qe), f = wa();
      s !== null && (ho(s, Qe, f), Ia(s, f));
    }
    function vn(e, t, a) {
      if (Yb(a), Gp(!1), e.tag === k) {
        dR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === k) {
          dR(i, e, a);
          return;
        } else if (i.tag === ue) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !fR(s)) {
            var f = Zs(a, e), p = fS(i, f, Qe), v = Lo(i, p, Qe), y = wa();
            v !== null && (ho(v, Qe, y), Ia(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function ek(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = wa();
      Zc(e, a), sk(e), xa === e && mu(gr, a) && (Sr === jp || Sr === Nm && qc(gr) && _n() - US < JC ? rc(e, Y) : Mm = vt(Mm, a)), Ia(e, u);
    }
    function pR(e, t) {
      t === Hn && (t = z_(e));
      var a = wa(), i = Ba(e, t);
      i !== null && (ho(i, t, a), Ia(i, a));
    }
    function tk(e) {
      var t = e.memoizedState, a = Hn;
      t !== null && (a = t.retryLane), pR(e, a);
    }
    function nk(e, t) {
      var a = Hn, i;
      switch (e.tag) {
        case be:
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
    function rk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : O_(e / 1960) * 1960;
    }
    function ak() {
      if (Yp > L_)
        throw Yp = 0, HS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Wf > M_ && (Wf = 0, Am = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function ik() {
      Zi.flushLegacyContextWarning(), Zi.flushPendingUnsafeLifecycleWarnings();
    }
    function vR(e, t) {
      Xt(e), Vm(e, zr, x_), t && Vm(e, gl, w_), Vm(e, zr, R_), t && Vm(e, gl, T_), Cn();
    }
    function Vm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ue ? i = i.child : ((i.flags & t) !== Ue && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Bm = null;
    function hR(e) {
      {
        if ((Ut & Yr) !== yr || !(e.mode & Rt))
          return;
        var t = e.tag;
        if (t !== Ne && t !== k && t !== ue && t !== ge && t !== He && t !== ee && t !== me)
          return;
        var a = Ze(e) || "ReactComponent";
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
      var lk = null;
      IS = function(e, t, a) {
        var i = TR(lk, t);
        try {
          return kC(e, t, a);
        } catch (s) {
          if (gw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (qh(), O0(), zC(e, t), TR(t, i), t.mode & Ot && Qg(t), za(null, kC, null, e, t, a), fd()) {
            var u = dd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var mR = !1, WS;
    WS = /* @__PURE__ */ new Set();
    function uk(e) {
      if (Kr && !Kw())
        switch (e.tag) {
          case ge:
          case He:
          case me: {
            var t = Nn && Ze(Nn) || "Unknown", a = t;
            if (!WS.has(a)) {
              WS.add(a);
              var i = Ze(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ue: {
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
    function ok(e) {
      {
        if (e.mode & Rt) {
          if (!qC())
            return;
        } else if (!D_() || Ut !== yr || e.tag !== ge && e.tag !== He && e.tag !== me)
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

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ze(e));
          } finally {
            t ? Xt(e) : Cn();
          }
        }
      }
    }
    function sk(e) {
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
    var Oi = null, Qf = null, ck = function(e) {
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
          case ue: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ge: {
            (typeof i == "function" || s === nt) && (u = !0);
            break;
          }
          case He: {
            (s === G || s === nt) && (u = !0);
            break;
          }
          case ee:
          case me: {
            (s === Ct || s === nt) && (u = !0);
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
    var fk = function(e, t) {
      {
        if (Oi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Fu(), Au(function() {
          XS(e.current, i, a);
        });
      }
    }, dk = function(e, t) {
      {
        if (e.context !== li)
          return;
        Fu(), Au(function() {
          qp(t, e, null, null);
        });
      }
    };
    function XS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ge:
          case me:
          case ue:
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
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === ue ? g = !0 : y = !0));
        }
        if (Qf !== null && (Qf.has(e) || i !== null && Qf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var x = Ba(e, Qe);
          x !== null && Er(x, e, Qe, qt);
        }
        u !== null && !g && XS(u, t, a), s !== null && XS(s, t, a);
      }
    }
    var pk = function(e, t) {
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
          case ge:
          case me:
          case ue:
            p = f;
            break;
          case He:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? vk(e, a) : i !== null && JS(i, t, a), u !== null && JS(u, t, a);
      }
    }
    function vk(e, t) {
      {
        var a = hk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case j:
              t.add(i.stateNode);
              return;
            case Q:
              t.add(i.stateNode.containerInfo);
              return;
            case k:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function hk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === j)
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
    function mk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ue, this.subtreeFlags = Ue, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !ZS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new mk(e, t, a, i);
    };
    function eE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function yk(e) {
      return typeof e == "function" && !eE(e) && e.defaultProps === void 0;
    }
    function gk(e) {
      if (typeof e == "function")
        return eE(e) ? ue : ge;
      if (e != null) {
        var t = e.$$typeof;
        if (t === G)
          return He;
        if (t === Ct)
          return ee;
      }
      return Ne;
    }
    function ic(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ue, a.subtreeFlags = Ue, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & jn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ne:
        case ge:
        case me:
          a.type = Gf(e.type);
          break;
        case ue:
          a.type = qS(e.type);
          break;
        case He:
          a.type = KS(e.type);
          break;
      }
      return a;
    }
    function Sk(e, t) {
      e.flags &= jn | Rn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = Ue, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ue, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Ek(e, t, a) {
      var i;
      return e === Hh ? (i = Rt, t === !0 && (i |= st, i |= en)) : i = Ae, _r && (i |= Ot), ui(k, null, null, i);
    }
    function tE(e, t, a, i, u, s) {
      var f = Ne, p = e;
      if (typeof e == "function")
        eE(e) ? (f = ue, p = qS(p)) : p = Gf(p);
      else if (typeof e == "string")
        f = j;
      else
        e: switch (e) {
          case Qr:
            return Bo(a.children, u, s, t);
          case ci:
            f = ht, u |= st, (u & Rt) !== Ae && (u |= en);
            break;
          case fi:
            return Ck(a, u, s, t);
          case fe:
            return Rk(a, u, s, t);
          case pe:
            return Tk(a, u, s, t);
          case wn:
            return RR(a, u, s, t);
          case on:
          case Tt:
          case dn:
          case Tr:
          case yt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ui:
                  f = ft;
                  break e;
                case R:
                  f = We;
                  break e;
                case G:
                  f = He, p = KS(p);
                  break e;
                case Ct:
                  f = ee;
                  break e;
                case nt:
                  f = Pe, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ze(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ui(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function nE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = tE(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Bo(e, t, a, i) {
      var u = ui(De, e, i, t);
      return u.lanes = a, u;
    }
    function Ck(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(ut, e, i, t | Ot);
      return u.elementType = fi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Rk(e, t, a, i) {
      var u = ui(be, e, i, t);
      return u.elementType = fe, u.lanes = a, u;
    }
    function Tk(e, t, a, i) {
      var u = ui(Ye, e, i, t);
      return u.elementType = pe, u.lanes = a, u;
    }
    function RR(e, t, a, i) {
      var u = ui(Le, e, i, t);
      u.elementType = wn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function rE(e, t, a) {
      var i = ui(Z, e, null, t);
      return i.lanes = a, i;
    }
    function xk() {
      var e = ui(j, null, null, Ae);
      return e.elementType = "DELETED", e;
    }
    function wk(e) {
      var t = ui(_t, null, null, Ae);
      return t.stateNode = e, t;
    }
    function aE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(Q, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function TR(e, t) {
      return e === null && (e = ui(Ne, null, null, Ae)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function bk(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Hy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Hn, this.eventTimes = Jc(Y), this.expirationTimes = Jc(qt), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = Jc(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
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
      var g = new bk(e, t, a, p, v), _ = Ek(t, s);
      g.current = _, _.stateNode = g;
      {
        var x = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = x;
      }
      return yg(_), g;
    }
    var iE = "18.3.1";
    function _k(e, t, a) {
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
    var lE, uE;
    lE = !1, uE = {};
    function wR(e) {
      if (!e)
        return li;
      var t = ao(e), a = sw(t);
      if (t.tag === ue) {
        var i = t.type;
        if (Fl(i))
          return JE(t, i, a);
      }
      return a;
    }
    function kk(e, t) {
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
          var s = Ze(a) || "Component";
          if (!uE[s]) {
            uE[s] = !0;
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
      var x = _.current, z = wa(), A = Po(x), P = Lu(z, A);
      return P.callback = t ?? null, Lo(x, P, A), U_(_, A, z), _;
    }
    function qp(e, t, a, i) {
      Ed(t, e);
      var u = t.current, s = wa(), f = Po(u);
      Dc(f);
      var p = wR(a);
      t.context === null ? t.context = p : t.pendingContext = p, Kr && Zn !== null && !lE && (lE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ze(Zn) || "Unknown"));
      var v = Lu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Lo(u, v, f);
      return y !== null && (Er(y, u, f, s), em(y, u, f)), f;
    }
    function $m(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case j:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Dk(e) {
      switch (e.tag) {
        case k: {
          var t = e.stateNode;
          if (yu(t)) {
            var a = Iv(t);
            H_(t, a);
          }
          break;
        }
        case be: {
          Au(function() {
            var u = Ba(e, Qe);
            if (u !== null) {
              var s = wa();
              Er(u, e, Qe, s);
            }
          });
          var i = Qe;
          oE(e, i);
          break;
        }
      }
    }
    function kR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Ud(a.retryLane, t));
    }
    function oE(e, t) {
      kR(e, t);
      var a = e.alternate;
      a && kR(a, t);
    }
    function Ok(e) {
      if (e.tag === be) {
        var t = vo, a = Ba(e, t);
        if (a !== null) {
          var i = wa();
          Er(a, e, t, i);
        }
        oE(e, t);
      }
    }
    function Nk(e) {
      if (e.tag === be) {
        var t = Po(e), a = Ba(e, t);
        if (a !== null) {
          var i = wa();
          Er(a, e, t, i);
        }
        oE(e, t);
      }
    }
    function DR(e) {
      var t = ni(e);
      return t === null ? null : t.stateNode;
    }
    var OR = function(e) {
      return null;
    };
    function Lk(e) {
      return OR(e);
    }
    var NR = function(e) {
      return !1;
    };
    function Mk(e) {
      return NR(e);
    }
    var LR = null, MR = null, zR = null, UR = null, AR = null, FR = null, jR = null, HR = null, PR = null;
    {
      var VR = function(e, t, a) {
        var i = t[a], u = pt(e) ? e.slice() : ot({}, e);
        return a + 1 === t.length ? (pt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = VR(e[i], t, a + 1), u);
      }, BR = function(e, t) {
        return VR(e, t, 0);
      }, $R = function(e, t, a, i) {
        var u = t[i], s = pt(e) ? e.slice() : ot({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], pt(s) ? s.splice(u, 1) : delete s[u];
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
          lt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              lt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return $R(e, t, a, 0);
      }, IR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = pt(e) ? e.slice() : ot({}, e);
        return s[u] = IR(e[u], t, a + 1, i), s;
      }, WR = function(e, t, a) {
        return IR(e, t, 0, a);
      }, sE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      LR = function(e, t, a, i) {
        var u = sE(e, t);
        if (u !== null) {
          var s = WR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = Ba(e, Qe);
          f !== null && Er(f, e, Qe, qt);
        }
      }, MR = function(e, t, a) {
        var i = sE(e, t);
        if (i !== null) {
          var u = BR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = ot({}, e.memoizedProps);
          var s = Ba(e, Qe);
          s !== null && Er(s, e, Qe, qt);
        }
      }, zR = function(e, t, a, i) {
        var u = sE(e, t);
        if (u !== null) {
          var s = YR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = Ba(e, Qe);
          f !== null && Er(f, e, Qe, qt);
        }
      }, UR = function(e, t, a) {
        e.pendingProps = WR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, Qe);
        i !== null && Er(i, e, Qe, qt);
      }, AR = function(e, t) {
        e.pendingProps = BR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, Qe);
        a !== null && Er(a, e, Qe, qt);
      }, FR = function(e, t, a) {
        e.pendingProps = YR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, Qe);
        i !== null && Er(i, e, Qe, qt);
      }, jR = function(e) {
        var t = Ba(e, Qe);
        t !== null && Er(t, e, Qe, qt);
      }, HR = function(e) {
        OR = e;
      }, PR = function(e) {
        NR = e;
      };
    }
    function zk(e) {
      var t = ea(e);
      return t === null ? null : t.stateNode;
    }
    function Uk(e) {
      return null;
    }
    function Ak() {
      return Zn;
    }
    function Fk(e) {
      var t = e.findFiberByHostInstance, a = ye.ReactCurrentDispatcher;
      return Sd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: LR,
        overrideHookStateDeletePath: MR,
        overrideHookStateRenamePath: zR,
        overrideProps: UR,
        overridePropsDeletePath: AR,
        overridePropsRenamePath: FR,
        setErrorHandler: HR,
        setSuspenseHandler: PR,
        scheduleUpdate: jR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: zk,
        findFiberByHostInstance: t || Uk,
        // React Refresh
        findHostInstancesForRefresh: pk,
        scheduleRefresh: fk,
        scheduleRoot: dk,
        setRefreshHandler: ck,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Ak,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: iE
      });
    }
    var QR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function cE(e) {
      this._internalRoot = e;
    }
    Ym.prototype.render = cE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Im(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== An) {
          var i = DR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      qp(e, t, null, null);
    }, Ym.prototype.unmount = cE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        iR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Au(function() {
          qp(null, e, null, null);
        }), QE(t);
      }
    };
    function jk(e, t) {
      if (!Im(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      GR(e);
      var a = !1, i = !1, u = "", s = QR;
      t != null && (t.hydrate ? lt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ur && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = bR(e, Hh, null, a, i, u, s);
      Lh(f.current, e);
      var p = e.nodeType === An ? e.parentNode : e;
      return tp(p), new cE(f);
    }
    function Ym(e) {
      this._internalRoot = e;
    }
    function Hk(e) {
      e && nh(e);
    }
    Ym.prototype.unstable_scheduleHydration = Hk;
    function Pk(e, t, a) {
      if (!Im(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      GR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = QR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = _R(t, null, e, Hh, i, s, f, p, v);
      if (Lh(y.current, e), tp(e), u)
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
      return !!(e && (e.nodeType === Xr || e.nodeType === Yi || e.nodeType === Xo || e.nodeType === An && e.nodeValue === " react-mount-point-unstable "));
    }
    function GR(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), dp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Vk = ye.ReactCurrentOwner, qR;
    qR = function(e) {
      if (e._reactRootContainer && e.nodeType !== An) {
        var t = DR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = fE(e), u = !!(i && _o(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function fE(e) {
      return e ? e.nodeType === Yi ? e.documentElement : e.firstChild : null;
    }
    function KR() {
    }
    function Bk(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = $m(f);
            s.call(x);
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
        e._reactRootContainer = f, Lh(f.current, e);
        var p = e.nodeType === An ? e.parentNode : e;
        return tp(p), Au(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var x = $m(g);
            y.call(x);
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
        e._reactRootContainer = g, Lh(g.current, e);
        var _ = e.nodeType === An ? e.parentNode : e;
        return tp(_), Au(function() {
          qp(t, g, a, i);
        }), g;
      }
    }
    function $k(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Wm(e, t, a, i, u) {
      qR(a), $k(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Bk(a, t, e, u, i);
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
    function Yk(e) {
      {
        XR || (XR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Vk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", zt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : kk(e, "findDOMNode");
    }
    function Ik(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Wm(null, e, t, !0, a);
    }
    function Wk(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Wm(null, e, t, !1, a);
    }
    function Qk(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !lu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Wm(e, t, a, !1, i);
    }
    var JR = !1;
    function Gk(e) {
      if (JR || (JR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Kp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = dp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = fE(e), i = a && !_o(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Au(function() {
          Wm(null, null, e, !1, function() {
            e._reactRootContainer = null, QE(e);
          });
        }), !0;
      } else {
        {
          var u = fE(e), s = !!(u && _o(u)), f = e.nodeType === Xr && Kp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    fy(Dk), Hd(Ok), dy(Nk), rf(Sa), Jv(Kv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ls(KT), Ov(BS, P_, Au);
    function qk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Im(t))
        throw new Error("Target container is not a DOM element.");
      return _k(e, t, null, a);
    }
    function Kk(e, t, a, i) {
      return Qk(e, t, a, i);
    }
    var dE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [_o, wf, Mh, sd, eo, BS]
    };
    function Xk(e, t) {
      return dE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), jk(e, t);
    }
    function Jk(e, t, a) {
      return dE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Pk(e, t, a);
    }
    function Zk(e) {
      return iR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Au(e);
    }
    var e1 = Fk({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: iE,
      rendererPackageName: "react-dom"
    });
    if (!e1 && qn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var ZR = window.location.protocol;
      /^(https?|file):$/.test(ZR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (ZR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dE, Qa.createPortal = qk, Qa.createRoot = Xk, Qa.findDOMNode = Yk, Qa.flushSync = Zk, Qa.hydrate = Ik, Qa.hydrateRoot = Jk, Qa.render = Wk, Qa.unmountComponentAtNode = Gk, Qa.unstable_batchedUpdates = BS, Qa.unstable_renderSubtreeIntoContainer = Kk, Qa.version = iE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Qa;
}
var vT = {};
function hT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (vT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hT);
    } catch (W) {
      console.error(W);
    }
  }
}
vT.NODE_ENV === "production" ? (hT(), mE.exports = c1()) : mE.exports = f1();
var d1 = mE.exports, yE, p1 = {}, qm = d1;
if (p1.NODE_ENV === "production")
  yE = qm.createRoot, qm.hydrateRoot;
else {
  var cT = qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  yE = function(W, re) {
    cT.usingClientEntryPoint = !0;
    try {
      return qm.createRoot(W, re);
    } finally {
      cT.usingClientEntryPoint = !1;
    }
  };
}
var Kf = tv();
const fT = async (W) => {
  if (!W)
    return;
  try {
    await navigator.clipboard.writeText(W);
    return;
  } catch {
  }
  const re = document.createElement("textarea");
  re.value = W, re.setAttribute("readonly", "true"), re.style.position = "fixed", re.style.top = "-1000px", re.style.left = "-1000px", document.body.appendChild(re), re.select();
  try {
    document.execCommand("copy");
  } finally {
    document.body.removeChild(re);
  }
}, v1 = acquireVsCodeApi(), gE = 12;
function hn(W, re = {}) {
  v1.postMessage({ command: W, ...re });
}
function h1() {
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
const Ni = {
  LEFT_FORK_PARENT: 16,
  LEFT_FORK_ANCESTOR: 32,
  RIGHT_FORK_PARENT: 64,
  RIGHT_FORK_ANCESTOR: 128,
  LEFT_MERGE_PARENT: 256,
  LEFT_MERGE_ANCESTOR: 512,
  RIGHT_MERGE_PARENT: 1024,
  RIGHT_MERGE_ANCESTOR: 2048
};
function m1(W, re, F, ye) {
  var kt;
  const Ke = gE, ct = 28, lt = 4, S = ct / 2, Ie = ct, ge = (ye == null ? void 0 : ye.nodeColumn) ?? 0, ue = (ye == null ? void 0 : ye.maxColumns) ?? 1, Ne = Math.max(ue * Ke + Ke, 16), k = ge * Ke + Ke / 2, Q = "var(--vscode-descriptionForeground)", j = W.isWorkingCopy ? "var(--vscode-textLink-foreground)" : W.hasConflict ? "var(--vscode-gitDecoration-conflictingResourceForeground)" : "var(--vscode-descriptionForeground)", Z = W.isWorkingCopy ? "var(--vscode-textLink-foreground)" : W.hasConflict ? "var(--vscode-gitDecoration-conflictingResourceForeground)" : "var(--vscode-editor-background)";
  let De = `<svg width="${Ne}" height="${ct}" viewBox="0 0 ${Ne} ${ct}" xmlns="http://www.w3.org/2000/svg">`;
  const ht = (ye == null ? void 0 : ye.preNodeLine) ?? [], We = (ye == null ? void 0 : ye.postNodeLine) ?? [], ft = (ye == null ? void 0 : ye.parentColumns) ?? [], He = new Set((ye == null ? void 0 : ye.dashedParentColumns) ?? []), ut = (ye == null ? void 0 : ye.linkLine) ?? [], be = (ye == null ? void 0 : ye.linkLineFromNode) ?? [], ee = ((ye == null ? void 0 : ye.dashedParentColumns) ?? []).map((ae) => ({ min: ae - 0.5, max: ae + 0.5 })), me = (ae) => ee.some((Ve) => ae > Ve.min && ae < Ve.max), Xe = (be[ge] ?? 0) !== 0;
  let _t = -1;
  if (Xe && ((ut[ge] ?? 0) & (Ni.RIGHT_FORK_PARENT | Ni.RIGHT_FORK_ANCESTOR)) !== 0) {
    for (let $ = ge + 1; $ < ut.length; $++)
      if ((ut[$] ?? 0) & (Ni.LEFT_MERGE_PARENT | Ni.LEFT_MERGE_ANCESTOR)) {
        _t = $;
        break;
      }
  }
  for (let ae = 0; ae < ue; ae += 1) {
    const Ve = ae * Ke + Ke / 2;
    ht[ae] !== void 0 && ht[ae] !== 0 && (De += `<line x1="${Ve}" y1="0" x2="${Ve}" y2="${S}" stroke="${Q}" stroke-width="1"/>`);
    const $ = ((kt = ye == null ? void 0 : ye.parentColumns) == null ? void 0 : kt.includes(ge)) ?? !1;
    ae === ge && !$ || ae !== _t && We[ae] !== void 0 && We[ae] !== 0 && (De += `<line x1="${Ve}" y1="${S}" x2="${Ve}" y2="${ct}" stroke="${Q}" stroke-width="1"/>`);
  }
  for (const ae of ft) {
    if (ae === ge)
      continue;
    const Ve = ae * Ke + Ke / 2, $ = He.has(ae) ? ' stroke-dasharray="3 3"' : "", se = Math.min(lt + 1, 5), ie = S + se, w = (ie + Ie) / 2;
    De += `<path d="M ${k} ${ie} C ${k} ${w} ${Ve} ${w} ${Ve} ${Ie}" stroke="${Q}" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"${$}/>`;
  }
  const Ye = ut[ge] ?? 0;
  if ((Ye & (Ni.RIGHT_FORK_PARENT | Ni.RIGHT_FORK_ANCESTOR)) !== 0) {
    for (let ae = ge + 1; ae < ut.length; ae++)
      if (((ut[ae] ?? 0) & (Ni.LEFT_MERGE_PARENT | Ni.LEFT_MERGE_ANCESTOR)) !== 0) {
        const se = ae * Ke + Ke / 2, ie = me(ae) ? ' stroke-dasharray="3 3"' : "";
        if (Xe) {
          const w = S, B = Ie, Te = (w + B) / 2;
          De += `<path d="M ${se} ${w} C ${se} ${Te} ${k} ${Te} ${k} ${B}" stroke="${Q}" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"${ie}/>`;
        } else {
          const w = Math.min(lt + 1, 5), B = S + w, Te = (B + Ie) / 2;
          De += `<path d="M ${k} ${B} C ${k} ${Te} ${se} ${Te} ${se} ${Ie}" stroke="${Q}" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"${ie}/>`;
        }
        break;
      }
  }
  if ((Ye & (Ni.LEFT_FORK_PARENT | Ni.LEFT_FORK_ANCESTOR)) !== 0) {
    for (let ae = ge - 1; ae >= 0; ae--)
      if (((ut[ae] ?? 0) & (Ni.RIGHT_MERGE_PARENT | Ni.RIGHT_MERGE_ANCESTOR)) !== 0) {
        const se = ae * Ke + Ke / 2, ie = me(ae) ? ' stroke-dasharray="3 3"' : "";
        if (Xe) {
          const w = S, B = Ie, Te = (w + B) / 2;
          De += `<path d="M ${se} ${w} C ${se} ${Te} ${k} ${Te} ${k} ${B}" stroke="${Q}" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"${ie}/>`;
        } else {
          const w = Math.min(lt + 1, 5), B = S + w, Te = (B + Ie) / 2;
          De += `<path d="M ${k} ${B} C ${k} ${Te} ${se} ${Te} ${se} ${Ie}" stroke="${Q}" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"${ie}/>`;
        }
        break;
      }
  }
  if (W.isImmutable) {
    const ae = Math.max(4, lt + 1);
    De += `<polygon points="${k},${S - ae} ${k + ae},${S} ${k},${S + ae} ${k - ae},${S}" fill="${Z}" stroke="${j}" stroke-width="1.5"/>`;
  } else
    De += `<circle cx="${k}" cy="${S}" r="${lt}" fill="${Z}" stroke="${j}" stroke-width="1.5"/>`;
  return De += "</svg>", De;
}
function y1(W) {
  const re = gE, F = W.activeColumns, ye = W.nodeColumn, Ke = F.reduce((Ne, k, Q) => k ? Q : Ne, 0), ct = Math.max((Ke + 1) * re, re), lt = 1;
  let S = `<svg class="graph-file-svg" width="${ct}" height="100%" viewBox="0 0 ${ct} ${lt}" preserveAspectRatio="none">`;
  const Ie = W.postNodeLine ?? [], ue = (W.parentColumns ?? []).includes(ye);
  for (let Ne = 0; Ne < F.length; Ne += 1) {
    if (!F[Ne] || Ne === ye && (!ue || !(Ie[Ne] !== void 0 && Ie[Ne] !== 0)))
      continue;
    const k = Ne * re + re / 2;
    S += `<line x1="${k}" y1="0" x2="${k}" y2="${lt}" class="graph-file-line" vector-effect="non-scaling-stroke"/>`;
  }
  return S += "</svg>", { svg: S, width: ct };
}
function g1() {
  const [W, re] = Kf.useState(() => h1()), F = Kf.useRef(null);
  Kf.useEffect(() => {
    const k = (Q) => {
      const j = Q.data;
      (j == null ? void 0 : j.type) === "state" && j.state && re(j.state);
    };
    return window.addEventListener("message", k), hn("ready"), () => window.removeEventListener("message", k);
  }, []);
  const ye = Kf.useMemo(() => new Set(W.expandedCommitIds), [W.expandedCommitIds]), Ke = (k) => {
    const Q = W.changes.find((De) => De.commitId === k), j = W.graphInfo[k], Z = Q != null && Q.isWorkingCopy ? W.workingCopyFiles : W.changeFiles[k];
    console.log("[open-jj] toggleChange", {
      commitId: k,
      changeId: Q == null ? void 0 : Q.changeId,
      isWorkingCopy: Q == null ? void 0 : Q.isWorkingCopy,
      hasConflict: Q == null ? void 0 : Q.hasConflict,
      graphInfo: j,
      postNodeLine: j == null ? void 0 : j.postNodeLine,
      preNodeLine: j == null ? void 0 : j.preNodeLine,
      parentColumns: j == null ? void 0 : j.parentColumns,
      activeColumns: j == null ? void 0 : j.activeColumns,
      filesCount: (Z == null ? void 0 : Z.length) ?? 0
    }), hn("toggleChange", { commitId: k });
  }, ct = (k, Q) => {
    k.preventDefault(), lt(k.nativeEvent, Q.changeId, Q.isWorkingCopy);
  }, lt = (k, Q, j) => {
    const Z = new CustomEvent("open-jj:context-menu", {
      detail: { type: "change", x: k.pageX, y: k.pageY, changeId: Q, isWorkingCopy: j }
    });
    window.dispatchEvent(Z);
  }, S = (k, Q, j, Z) => {
    k.preventDefault(), k.stopPropagation();
    const De = new CustomEvent("open-jj:context-menu", {
      detail: { type: "bookmark", x: k.pageX, y: k.pageY, bookmarkName: Q, changeId: j, isTracked: Z }
    });
    window.dispatchEvent(De);
  }, Ie = (k, Q, j) => {
    const Z = k.querySelectorAll(".menu-change"), De = k.querySelectorAll(".menu-bookmark");
    Z.forEach((We) => {
      We.style.display = Q === "change" ? "" : "none";
    }), De.forEach((We) => {
      We.style.display = Q === "bookmark" ? "" : "none";
    });
    const ht = k.querySelector('[data-action="edit-change"]');
    ht && (ht.style.display = Q === "change" && !j ? "" : "none");
  };
  Kf.useEffect(() => {
    const k = (Q) => {
      const j = Q.detail, Z = document.getElementById("context-menu");
      Z && (Z.setAttribute("data-type", j.type), Z.setAttribute("data-x", String(j.x)), Z.setAttribute("data-y", String(j.y)), Z.setAttribute("data-change-id", j.changeId ?? ""), Z.setAttribute("data-working-copy", String(j.isWorkingCopy ?? !1)), Z.setAttribute("data-bookmark-name", j.bookmarkName ?? ""), Z.setAttribute("data-tracked", String(j.isTracked ?? !1)), Ie(Z, j.type, j.isWorkingCopy ?? !1), Z.classList.add("visible"), Z.style.left = `${j.x}px`, Z.style.top = `${j.y}px`);
    };
    return window.addEventListener("open-jj:context-menu", k), () => window.removeEventListener("open-jj:context-menu", k);
  }, []), Kf.useEffect(() => {
    const k = () => {
      const Q = document.getElementById("context-menu");
      Q && Q.classList.remove("visible");
    };
    return document.addEventListener("click", k), () => document.removeEventListener("click", k);
  }, []);
  const ge = (k) => {
    const Q = k.target;
    if (!Q) return;
    const j = Q.closest("#context-menu"), Z = Q.closest("[data-action]");
    if (!j || !Z) return;
    const De = Z.dataset.action, ht = j.dataset.changeId, We = j.dataset.bookmarkName;
    switch (De) {
      case "copy-change-id":
        ht && fT(ht);
        break;
      case "new-change-from":
        ht && hn("newChangeFrom", { changeId: ht });
        break;
      case "describe-change":
        ht && hn("describeChange", { changeId: ht });
        break;
      case "manage-bookmarks":
        ht && hn("manageBookmarks", { changeId: ht });
        break;
      case "edit-change":
        ht && hn("editChange", { changeId: ht });
        break;
      case "squash-change":
        ht && hn("squashChange", { changeId: ht });
        break;
      case "abandon-change":
        ht && hn("abandonChange", { changeId: ht });
        break;
      case "copy-bookmark-name":
        We && fT(We);
        break;
      case "push-bookmark":
        We && hn("pushBookmark", { bookmarkName: We });
        break;
      case "push-and-create-pr":
        We && hn("pushAndCreatePr", { bookmarkName: We });
        break;
      case "create-pull-request":
        We && hn("createPullRequest", { bookmarkName: We });
        break;
      case "delete-bookmark":
        We && hn("deleteBookmark", { bookmarkName: We });
        break;
    }
    j.classList.remove("visible");
  }, ue = (k, Q) => {
    F.current = Q, k.dataTransfer.setData("text/plain", JSON.stringify(Q)), k.dataTransfer.effectAllowed = "move";
  }, Ne = (k, Q) => {
    k.preventDefault(), k.stopPropagation();
    const j = F.current;
    F.current = null, j && (j.type === "change" ? j.changeId !== Q && hn("rebaseChange", { sourceChangeId: j.changeId, targetChangeId: Q }) : j.type === "bookmark" ? hn("moveBookmark", { bookmarkName: j.bookmarkName, targetChangeId: Q }) : j.type === "file" && j.fromChangeId !== Q && hn("moveFile", { filePath: j.filePath, fromChangeId: j.fromChangeId, targetChangeId: Q }));
  };
  return W.hasRepository ? /* @__PURE__ */ Me.jsxs("div", { className: "log", children: [
    W.changes.length === 0 ? /* @__PURE__ */ Me.jsx("div", { className: "empty", children: "No changes found" }) : W.changes.map((k, Q) => {
      const j = ye.has(k.commitId), Z = k.isWorkingCopy, De = Z ? W.workingCopyFiles : W.changeFiles[k.commitId] ?? [], ht = De.length > 0 || !k.isEmpty, We = W.graphInfo[k.commitId], ft = m1(k, Q === 0, Q === W.changes.length - 1, We), He = k.description && k.description !== "(no description)", ut = k.bookmarks.filter((ee) => !ee.includes("@")), be = k.bookmarks.filter((ee) => ee.includes("@"));
      return /* @__PURE__ */ Me.jsxs(
        "div",
        {
          className: `change ${Z ? "working-copy" : ""} ${k.hasConflict ? "conflict" : ""}`,
          "data-change-id": k.changeId,
          children: [
            /* @__PURE__ */ Me.jsxs(
              "div",
              {
                className: "change-header",
                "data-change-id": k.changeId,
                "data-commit-id": k.commitId,
                onClick: () => Ke(k.commitId),
                onContextMenu: (ee) => ct(ee, k),
                onDragOver: (ee) => {
                  ee.preventDefault(), ee.dataTransfer.dropEffect = "move";
                },
                onDragEnter: (ee) => {
                  ee.preventDefault(), ee.currentTarget.classList.add("drag-over");
                },
                onDragLeave: (ee) => {
                  ee.currentTarget.contains(ee.relatedTarget) || ee.currentTarget.classList.remove("drag-over");
                },
                onDrop: (ee) => {
                  ee.currentTarget.classList.remove("drag-over"), Ne(ee, k.changeId);
                },
                children: [
                  /* @__PURE__ */ Me.jsx(
                    "span",
                    {
                      className: "graph-node",
                      draggable: !0,
                      onDragStart: (ee) => ue(ee, { type: "change", changeId: k.changeId }),
                      onDoubleClick: (ee) => {
                        ee.stopPropagation(), hn("editChange", { changeId: k.changeId });
                      },
                      onClick: (ee) => ee.stopPropagation(),
                      dangerouslySetInnerHTML: { __html: ft }
                    }
                  ),
                  /* @__PURE__ */ Me.jsx(
                    "span",
                    {
                      className: `expand-icon codicon ${ht ? "" : "hidden"} ${j ? "codicon-chevron-down" : "codicon-chevron-right"}`,
                      style: We ? { marginLeft: -((We.maxColumns - We.nodeColumn - 1) * gE) } : void 0
                    }
                  ),
                  He ? /* @__PURE__ */ Me.jsxs("span", { className: "change-desc", children: [
                    Z ? "@ " : "",
                    k.description
                  ] }) : /* @__PURE__ */ Me.jsxs(Me.Fragment, { children: [
                    /* @__PURE__ */ Me.jsx("span", { className: "change-desc placeholder", children: Z ? "@ " : "" }),
                    /* @__PURE__ */ Me.jsx(
                      "button",
                      {
                        className: "describe-btn",
                        onClick: (ee) => {
                          ee.stopPropagation(), hn("describeChange", { changeId: k.changeId });
                        },
                        children: "Describe"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ Me.jsxs("span", { className: "bookmarks", onClick: (ee) => {
                    ee.stopPropagation(), hn("manageBookmarks", { changeId: k.changeId });
                  }, children: [
                    ut.map((ee) => {
                      const me = ee.endsWith("*"), Pe = me ? ee.slice(0, -1) : ee, Xe = W.bookmarks.find((ae) => ae.name === Pe && !ae.isRemote), _t = (Xe == null ? void 0 : Xe.isTracked) ?? !1, Ye = W.prInfo[Pe];
                      let dt = "badge local", Le = "Local bookmark (not pushed)";
                      Ye ? Ye.state === "merged" ? (dt = "badge merged", Le = `PR #${Ye.number} merged`) : Ye.state === "open" || Ye.state === "draft" ? (dt = Ye.state === "draft" ? "badge pr-draft" : "badge pr-open", Le = `PR #${Ye.number} ${Ye.state}`) : Ye.state === "closed" && (dt = "badge pr-closed", Le = `PR #${Ye.number} closed`) : _t && (dt = "badge tracked", Le = "Pushed to remote (no PR)");
                      const kt = me || (Xe == null ? void 0 : Xe.isConflicted);
                      return kt && (Le += " - DIVERGED from remote"), /* @__PURE__ */ Me.jsxs(
                        "span",
                        {
                          className: `${dt}${Ye != null && Ye.url ? " clickable" : ""}`,
                          draggable: !0,
                          title: Le,
                          onDragStart: (ae) => ue(ae, { type: "bookmark", bookmarkName: Pe, fromChangeId: k.changeId }),
                          onContextMenu: (ae) => S(ae, Pe, k.changeId, _t),
                          onClick: (ae) => {
                            ae.stopPropagation(), Ye != null && Ye.url && hn("openUrl", { url: Ye.url });
                          },
                          children: [
                            Pe,
                            Ye ? /* @__PURE__ */ Me.jsx("span", { className: "codicon codicon-git-merge badge-pr-icon", title: "Pull request" }) : null,
                            _t ? /* @__PURE__ */ Me.jsx("span", { className: "codicon codicon-cloud badge-cloud-icon", title: "Synced" }) : null,
                            kt ? /* @__PURE__ */ Me.jsx("span", { className: "codicon codicon-cloud badge-cloud-icon diverged", title: "Diverged" }) : null
                          ]
                        },
                        ee
                      );
                    }),
                    be.map((ee) => {
                      const me = ee.split("@")[0];
                      if (ut.includes(me) || ut.includes(`${me}*`))
                        return null;
                      const Pe = W.prInfo[me];
                      let Xe = "badge remote", _t = "Remote only";
                      return Pe && (Pe.state === "merged" ? (Xe = "badge merged", _t = `PR #${Pe.number} merged`) : Pe.state === "open" || Pe.state === "draft" ? (Xe = Pe.state === "draft" ? "badge pr-draft" : "badge pr-open", _t = `PR #${Pe.number} ${Pe.state}`) : Pe.state === "closed" && (Xe = "badge pr-closed", _t = `PR #${Pe.number} closed`)), /* @__PURE__ */ Me.jsxs(
                        "span",
                        {
                          className: `${Xe}${Pe != null && Pe.url ? " clickable" : ""}`,
                          title: _t,
                          onClick: (Ye) => {
                            Ye.stopPropagation(), Pe != null && Pe.url && hn("openUrl", { url: Pe.url });
                          },
                          children: [
                            ee,
                            Pe ? /* @__PURE__ */ Me.jsx("span", { className: "codicon codicon-git-merge badge-pr-icon", title: "Pull request" }) : null,
                            Pe ? null : /* @__PURE__ */ Me.jsx("span", { className: "codicon codicon-cloud badge-cloud-icon", title: "Remote" })
                          ]
                        },
                        ee
                      );
                    })
                  ] }),
                  /* @__PURE__ */ Me.jsx("span", { className: "change-actions", children: /* @__PURE__ */ Me.jsx(
                    "button",
                    {
                      className: "icon-button small",
                      onClick: (ee) => {
                        ee.stopPropagation(), hn("newChangeFrom", { changeId: k.changeId });
                      },
                      children: /* @__PURE__ */ Me.jsx("span", { className: "codicon codicon-add" })
                    }
                  ) })
                ]
              }
            ),
            j && De.length > 0 ? /* @__PURE__ */ Me.jsx("div", { className: "files", children: We ? (() => {
              const ee = y1(We);
              return /* @__PURE__ */ Me.jsxs(Me.Fragment, { children: [
                /* @__PURE__ */ Me.jsx(
                  "div",
                  {
                    className: "files-gutter",
                    style: { width: ee.width },
                    dangerouslySetInnerHTML: { __html: ee.svg }
                  }
                ),
                /* @__PURE__ */ Me.jsx("div", { className: "files-list", style: { marginLeft: `${ee.width + 6}px` }, children: De.map((me) => /* @__PURE__ */ Me.jsxs(
                  "div",
                  {
                    className: "file",
                    draggable: !0,
                    title: "Drag to move to another change",
                    onDragStart: (Pe) => ue(Pe, { type: "file", filePath: me.path, fromChangeId: k.changeId }),
                    children: [
                      /* @__PURE__ */ Me.jsx("span", { className: `file-icon ${me.status}`, children: /* @__PURE__ */ Me.jsx("span", { className: `codicon ${dT(me.status)}` }) }),
                      /* @__PURE__ */ Me.jsx(
                        "span",
                        {
                          className: "file-path",
                          onClick: (Pe) => {
                            Pe.stopPropagation(), hn("openDiff", { path: me.path, revision: Z ? void 0 : k.commitIdShort });
                          },
                          children: me.path
                        }
                      ),
                      /* @__PURE__ */ Me.jsx(
                        "button",
                        {
                          className: "icon-button small",
                          title: "Open File",
                          onClick: (Pe) => {
                            Pe.stopPropagation(), hn("openFile", { path: me.path });
                          },
                          children: /* @__PURE__ */ Me.jsx("span", { className: "codicon codicon-go-to-file" })
                        }
                      )
                    ]
                  },
                  me.path
                )) })
              ] });
            })() : /* @__PURE__ */ Me.jsx("div", { className: "files-list", children: De.map((ee) => /* @__PURE__ */ Me.jsxs(
              "div",
              {
                className: "file",
                draggable: !0,
                title: "Drag to move to another change",
                onDragStart: (me) => ue(me, { type: "file", filePath: ee.path, fromChangeId: k.changeId }),
                children: [
                  /* @__PURE__ */ Me.jsx("span", { className: `file-icon ${ee.status}`, children: /* @__PURE__ */ Me.jsx("span", { className: `codicon ${dT(ee.status)}` }) }),
                  /* @__PURE__ */ Me.jsx(
                    "span",
                    {
                      className: "file-path",
                      onClick: (me) => {
                        me.stopPropagation(), hn("openDiff", { path: ee.path, revision: Z ? void 0 : k.commitIdShort });
                      },
                      children: ee.path
                    }
                  ),
                  /* @__PURE__ */ Me.jsx(
                    "button",
                    {
                      className: "icon-button small",
                      title: "Open File",
                      onClick: (me) => {
                        me.stopPropagation(), hn("openFile", { path: ee.path });
                      },
                      children: /* @__PURE__ */ Me.jsx("span", { className: "codicon codicon-go-to-file" })
                    }
                  )
                ]
              },
              ee.path
            )) }) }) : null
          ]
        },
        k.commitId
      );
    }),
    /* @__PURE__ */ Me.jsxs(
      "div",
      {
        id: "context-menu",
        className: "context-menu",
        onClick: ge,
        children: [
          /* @__PURE__ */ Me.jsx("div", { className: "context-menu-item menu-change", "data-action": "copy-change-id", children: "Copy Change ID" }),
          /* @__PURE__ */ Me.jsx("div", { className: "context-menu-separator menu-change" }),
          /* @__PURE__ */ Me.jsx("div", { className: "context-menu-item menu-change", "data-action": "new-change-from", children: "New Change" }),
          /* @__PURE__ */ Me.jsx("div", { className: "context-menu-item menu-change", "data-action": "describe-change", children: "Describe Change" }),
          /* @__PURE__ */ Me.jsx("div", { className: "context-menu-item menu-change", "data-action": "manage-bookmarks", children: "Manage Bookmarks" }),
          /* @__PURE__ */ Me.jsx("div", { className: "context-menu-item menu-change", "data-action": "edit-change", children: "Edit Change" }),
          /* @__PURE__ */ Me.jsx("div", { className: "context-menu-item menu-change", "data-action": "squash-change", children: "Squash into Parent" }),
          /* @__PURE__ */ Me.jsx("div", { className: "context-menu-separator menu-change" }),
          /* @__PURE__ */ Me.jsx("div", { className: "context-menu-item danger menu-change", "data-action": "abandon-change", children: "Abandon Change" }),
          /* @__PURE__ */ Me.jsx("div", { className: "context-menu-separator menu-bookmark" }),
          /* @__PURE__ */ Me.jsx("div", { className: "context-menu-item menu-bookmark", "data-action": "copy-bookmark-name", children: "Copy Bookmark Name" }),
          /* @__PURE__ */ Me.jsx("div", { className: "context-menu-item menu-bookmark", "data-action": "create-pull-request", children: "Create Pull Request" }),
          /* @__PURE__ */ Me.jsx("div", { className: "context-menu-item menu-bookmark", "data-action": "push-bookmark", children: "Push to Remote" }),
          /* @__PURE__ */ Me.jsx("div", { className: "context-menu-item menu-bookmark", "data-action": "push-and-create-pr", children: "Push and Create PR" }),
          /* @__PURE__ */ Me.jsx("div", { className: "context-menu-item danger menu-bookmark", "data-action": "delete-bookmark", children: "Delete Bookmark" })
        ]
      }
    )
  ] }) : /* @__PURE__ */ Me.jsxs("div", { className: "empty", children: [
    /* @__PURE__ */ Me.jsx("div", { children: "No JJ repository found." }),
    /* @__PURE__ */ Me.jsxs("div", { style: { marginTop: "8px" }, children: [
      /* @__PURE__ */ Me.jsx("button", { className: "describe-btn", onClick: () => hn("init"), children: "Initialize Repository" }),
      /* @__PURE__ */ Me.jsx("button", { className: "describe-btn", style: { marginLeft: "8px" }, onClick: () => hn("initWithGit"), children: "Initialize with Git Backend" })
    ] })
  ] });
}
function dT(W) {
  switch (W) {
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
yE(mT).render(/* @__PURE__ */ Me.jsx(g1, {}));
//# sourceMappingURL=webview.js.map
