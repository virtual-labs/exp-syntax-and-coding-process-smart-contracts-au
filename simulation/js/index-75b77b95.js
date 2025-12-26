function A2(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(r, i);
          a &&
            Object.defineProperty(
              e,
              i,
              a.get ? a : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const u of a.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && r(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = n(i);
    fetch(i.href, a);
  }
})();
var Zu =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function uc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var R2 = { exports: {} },
  sp = {},
  I2 = { exports: {} },
  Ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sc = Symbol.for("react.element"),
  C5 = Symbol.for("react.portal"),
  _5 = Symbol.for("react.fragment"),
  E5 = Symbol.for("react.strict_mode"),
  O5 = Symbol.for("react.profiler"),
  k5 = Symbol.for("react.provider"),
  P5 = Symbol.for("react.context"),
  T5 = Symbol.for("react.forward_ref"),
  A5 = Symbol.for("react.suspense"),
  R5 = Symbol.for("react.memo"),
  I5 = Symbol.for("react.lazy"),
  bw = Symbol.iterator;
function $5(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bw && e[bw]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $2 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  M2 = Object.assign,
  L2 = {};
function xu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = L2),
    (this.updater = n || $2);
}
xu.prototype.isReactComponent = {};
xu.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xu.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function N2() {}
N2.prototype = xu.prototype;
function C0(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = L2),
    (this.updater = n || $2);
}
var _0 = (C0.prototype = new N2());
_0.constructor = C0;
M2(_0, xu.prototype);
_0.isPureReactComponent = !0;
var ww = Array.isArray,
  z2 = Object.prototype.hasOwnProperty,
  E0 = { current: null },
  j2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function D2(e, t, n) {
  var r,
    i = {},
    a = null,
    u = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (u = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      z2.call(t, r) && !j2.hasOwnProperty(r) && (i[r] = t[r]);
  var c = arguments.length - 2;
  if (c === 1) i.children = n;
  else if (1 < c) {
    for (var f = Array(c), d = 0; d < c; d++) f[d] = arguments[d + 2];
    i.children = f;
  }
  if (e && e.defaultProps)
    for (r in ((c = e.defaultProps), c)) i[r] === void 0 && (i[r] = c[r]);
  return {
    $$typeof: sc,
    type: e,
    key: a,
    ref: u,
    props: i,
    _owner: E0.current,
  };
}
function M5(e, t) {
  return {
    $$typeof: sc,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function O0(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sc;
}
function L5(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Sw = /\/+/g;
function Ov(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? L5("" + e.key)
    : t.toString(36);
}
function Zf(e, t, n, r, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else
    switch (a) {
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case sc:
          case C5:
            u = !0;
        }
    }
  if (u)
    return (
      (u = e),
      (i = i(u)),
      (e = r === "" ? "." + Ov(u, 0) : r),
      ww(i)
        ? ((n = ""),
          e != null && (n = e.replace(Sw, "$&/") + "/"),
          Zf(i, t, n, "", function (d) {
            return d;
          }))
        : i != null &&
          (O0(i) &&
            (i = M5(
              i,
              n +
                (!i.key || (u && u.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Sw, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((u = 0), (r = r === "" ? "." : r + ":"), ww(e)))
    for (var c = 0; c < e.length; c++) {
      a = e[c];
      var f = r + Ov(a, c);
      u += Zf(a, t, n, f, i);
    }
  else if (((f = $5(e)), typeof f == "function"))
    for (e = f.call(e), c = 0; !(a = e.next()).done; )
      (a = a.value), (f = r + Ov(a, c++)), (u += Zf(a, t, n, f, i));
  else if (a === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return u;
}
function df(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Zf(e, r, "", "", function (a) {
      return t.call(n, a, i++);
    }),
    r
  );
}
function N5(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Pn = { current: null },
  Jf = { transition: null },
  z5 = {
    ReactCurrentDispatcher: Pn,
    ReactCurrentBatchConfig: Jf,
    ReactCurrentOwner: E0,
  };
Ne.Children = {
  map: df,
  forEach: function (e, t, n) {
    df(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      df(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      df(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!O0(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Ne.Component = xu;
Ne.Fragment = _5;
Ne.Profiler = O5;
Ne.PureComponent = C0;
Ne.StrictMode = E5;
Ne.Suspense = A5;
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z5;
Ne.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = M2({}, e.props),
    i = e.key,
    a = e.ref,
    u = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (u = E0.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var c = e.type.defaultProps;
    for (f in t)
      z2.call(t, f) &&
        !j2.hasOwnProperty(f) &&
        (r[f] = t[f] === void 0 && c !== void 0 ? c[f] : t[f]);
  }
  var f = arguments.length - 2;
  if (f === 1) r.children = n;
  else if (1 < f) {
    c = Array(f);
    for (var d = 0; d < f; d++) c[d] = arguments[d + 2];
    r.children = c;
  }
  return { $$typeof: sc, type: e.type, key: i, ref: a, props: r, _owner: u };
};
Ne.createContext = function (e) {
  return (
    (e = {
      $$typeof: P5,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: k5, _context: e }),
    (e.Consumer = e)
  );
};
Ne.createElement = D2;
Ne.createFactory = function (e) {
  var t = D2.bind(null, e);
  return (t.type = e), t;
};
Ne.createRef = function () {
  return { current: null };
};
Ne.forwardRef = function (e) {
  return { $$typeof: T5, render: e };
};
Ne.isValidElement = O0;
Ne.lazy = function (e) {
  return { $$typeof: I5, _payload: { _status: -1, _result: e }, _init: N5 };
};
Ne.memo = function (e, t) {
  return { $$typeof: R5, type: e, compare: t === void 0 ? null : t };
};
Ne.startTransition = function (e) {
  var t = Jf.transition;
  Jf.transition = {};
  try {
    e();
  } finally {
    Jf.transition = t;
  }
};
Ne.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Ne.useCallback = function (e, t) {
  return Pn.current.useCallback(e, t);
};
Ne.useContext = function (e) {
  return Pn.current.useContext(e);
};
Ne.useDebugValue = function () {};
Ne.useDeferredValue = function (e) {
  return Pn.current.useDeferredValue(e);
};
Ne.useEffect = function (e, t) {
  return Pn.current.useEffect(e, t);
};
Ne.useId = function () {
  return Pn.current.useId();
};
Ne.useImperativeHandle = function (e, t, n) {
  return Pn.current.useImperativeHandle(e, t, n);
};
Ne.useInsertionEffect = function (e, t) {
  return Pn.current.useInsertionEffect(e, t);
};
Ne.useLayoutEffect = function (e, t) {
  return Pn.current.useLayoutEffect(e, t);
};
Ne.useMemo = function (e, t) {
  return Pn.current.useMemo(e, t);
};
Ne.useReducer = function (e, t, n) {
  return Pn.current.useReducer(e, t, n);
};
Ne.useRef = function (e) {
  return Pn.current.useRef(e);
};
Ne.useState = function (e) {
  return Pn.current.useState(e);
};
Ne.useSyncExternalStore = function (e, t, n) {
  return Pn.current.useSyncExternalStore(e, t, n);
};
Ne.useTransition = function () {
  return Pn.current.useTransition();
};
Ne.version = "18.2.0";
I2.exports = Ne;
var x = I2.exports;
const Te = uc(x),
  cp = A2({ __proto__: null, default: Te }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var j5 = x,
  D5 = Symbol.for("react.element"),
  F5 = Symbol.for("react.fragment"),
  B5 = Object.prototype.hasOwnProperty,
  W5 = j5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  H5 = { key: !0, ref: !0, __self: !0, __source: !0 };
function F2(e, t, n) {
  var r,
    i = {},
    a = null,
    u = null;
  n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (u = t.ref);
  for (r in t) B5.call(t, r) && !H5.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: D5,
    type: e,
    key: a,
    ref: u,
    props: i,
    _owner: W5.current,
  };
}
sp.Fragment = F5;
sp.jsx = F2;
sp.jsxs = F2;
R2.exports = sp;
var ee = R2.exports,
  Mm = {},
  B2 = { exports: {} },
  ir = {},
  W2 = { exports: {} },
  H2 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, B) {
    var W = R.length;
    R.push(B);
    e: for (; 0 < W; ) {
      var H = (W - 1) >>> 1,
        Q = R[H];
      if (0 < i(Q, B)) (R[H] = B), (R[W] = Q), (W = H);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var B = R[0],
      W = R.pop();
    if (W !== B) {
      R[0] = W;
      e: for (var H = 0, Q = R.length, de = Q >>> 1; H < de; ) {
        var Se = 2 * (H + 1) - 1,
          xe = R[Se],
          Oe = Se + 1,
          ze = R[Oe];
        if (0 > i(xe, W))
          Oe < Q && 0 > i(ze, xe)
            ? ((R[H] = ze), (R[Oe] = W), (H = Oe))
            : ((R[H] = xe), (R[Se] = W), (H = Se));
        else if (Oe < Q && 0 > i(ze, W)) (R[H] = ze), (R[Oe] = W), (H = Oe);
        else break e;
      }
    }
    return B;
  }
  function i(R, B) {
    var W = R.sortIndex - B.sortIndex;
    return W !== 0 ? W : R.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var u = Date,
      c = u.now();
    e.unstable_now = function () {
      return u.now() - c;
    };
  }
  var f = [],
    d = [],
    h = 1,
    v = null,
    g = 3,
    b = !1,
    E = !1,
    O = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    C = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function S(R) {
    for (var B = n(d); B !== null; ) {
      if (B.callback === null) r(d);
      else if (B.startTime <= R)
        r(d), (B.sortIndex = B.expirationTime), t(f, B);
      else break;
      B = n(d);
    }
  }
  function k(R) {
    if (((O = !1), S(R), !E))
      if (n(f) !== null) (E = !0), j($);
      else {
        var B = n(d);
        B !== null && z(k, B.startTime - R);
      }
  }
  function $(R, B) {
    (E = !1), O && ((O = !1), C(U), (U = -1)), (b = !0);
    var W = g;
    try {
      for (
        S(B), v = n(f);
        v !== null && (!(v.expirationTime > B) || (R && !J()));

      ) {
        var H = v.callback;
        if (typeof H == "function") {
          (v.callback = null), (g = v.priorityLevel);
          var Q = H(v.expirationTime <= B);
          (B = e.unstable_now()),
            typeof Q == "function" ? (v.callback = Q) : v === n(f) && r(f),
            S(B);
        } else r(f);
        v = n(f);
      }
      if (v !== null) var de = !0;
      else {
        var Se = n(d);
        Se !== null && z(k, Se.startTime - B), (de = !1);
      }
      return de;
    } finally {
      (v = null), (g = W), (b = !1);
    }
  }
  var L = !1,
    A = null,
    U = -1,
    G = 5,
    D = -1;
  function J() {
    return !(e.unstable_now() - D < G);
  }
  function le() {
    if (A !== null) {
      var R = e.unstable_now();
      D = R;
      var B = !0;
      try {
        B = A(!0, R);
      } finally {
        B ? ne() : ((L = !1), (A = null));
      }
    } else L = !1;
  }
  var ne;
  if (typeof y == "function")
    ne = function () {
      y(le);
    };
  else if (typeof MessageChannel < "u") {
    var se = new MessageChannel(),
      q = se.port2;
    (se.port1.onmessage = le),
      (ne = function () {
        q.postMessage(null);
      });
  } else
    ne = function () {
      T(le, 0);
    };
  function j(R) {
    (A = R), L || ((L = !0), ne());
  }
  function z(R, B) {
    U = T(function () {
      R(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      E || b || ((E = !0), j($));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (G = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(f);
    }),
    (e.unstable_next = function (R) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = g;
      }
      var W = g;
      g = B;
      try {
        return R();
      } finally {
        g = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, B) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var W = g;
      g = R;
      try {
        return B();
      } finally {
        g = W;
      }
    }),
    (e.unstable_scheduleCallback = function (R, B, W) {
      var H = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? H + W : H))
          : (W = H),
        R)
      ) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return (
        (Q = W + Q),
        (R = {
          id: h++,
          callback: B,
          priorityLevel: R,
          startTime: W,
          expirationTime: Q,
          sortIndex: -1,
        }),
        W > H
          ? ((R.sortIndex = W),
            t(d, R),
            n(f) === null &&
              R === n(d) &&
              (O ? (C(U), (U = -1)) : (O = !0), z(k, W - H)))
          : ((R.sortIndex = Q), t(f, R), E || b || ((E = !0), j($))),
        R
      );
    }),
    (e.unstable_shouldYield = J),
    (e.unstable_wrapCallback = function (R) {
      var B = g;
      return function () {
        var W = g;
        g = B;
        try {
          return R.apply(this, arguments);
        } finally {
          g = W;
        }
      };
    });
})(H2);
W2.exports = H2;
var U5 = W2.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var U2 = x,
  nr = U5;
function Z(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var V2 = new Set(),
  As = {};
function qa(e, t) {
  su(e, t), su(e + "Capture", t);
}
function su(e, t) {
  for (As[e] = t, e = 0; e < t.length; e++) V2.add(t[e]);
}
var Xi = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Lm = Object.prototype.hasOwnProperty,
  V5 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  xw = {},
  Cw = {};
function G5(e) {
  return Lm.call(Cw, e)
    ? !0
    : Lm.call(xw, e)
    ? !1
    : V5.test(e)
    ? (Cw[e] = !0)
    : ((xw[e] = !0), !1);
}
function K5(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Y5(e, t, n, r) {
  if (t === null || typeof t > "u" || K5(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Tn(e, t, n, r, i, a, u) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = u);
}
var sn = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    sn[e] = new Tn(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  sn[t] = new Tn(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  sn[e] = new Tn(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  sn[e] = new Tn(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    sn[e] = new Tn(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  sn[e] = new Tn(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  sn[e] = new Tn(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  sn[e] = new Tn(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  sn[e] = new Tn(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var k0 = /[\-:]([a-z])/g;
function P0(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(k0, P0);
    sn[t] = new Tn(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(k0, P0);
    sn[t] = new Tn(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(k0, P0);
  sn[t] = new Tn(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  sn[e] = new Tn(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
sn.xlinkHref = new Tn(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  sn[e] = new Tn(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function T0(e, t, n, r) {
  var i = sn.hasOwnProperty(t) ? sn[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Y5(t, n, i, r) && (n = null),
    r || i === null
      ? G5(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var oo = U2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pf = Symbol.for("react.element"),
  Ml = Symbol.for("react.portal"),
  Ll = Symbol.for("react.fragment"),
  A0 = Symbol.for("react.strict_mode"),
  Nm = Symbol.for("react.profiler"),
  G2 = Symbol.for("react.provider"),
  K2 = Symbol.for("react.context"),
  R0 = Symbol.for("react.forward_ref"),
  zm = Symbol.for("react.suspense"),
  jm = Symbol.for("react.suspense_list"),
  I0 = Symbol.for("react.memo"),
  To = Symbol.for("react.lazy"),
  Y2 = Symbol.for("react.offscreen"),
  _w = Symbol.iterator;
function Ju(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_w && e[_w]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Et = Object.assign,
  kv;
function ss(e) {
  if (kv === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      kv = (t && t[1]) || "";
    }
  return (
    `
` +
    kv +
    e
  );
}
var Pv = !1;
function Tv(e, t) {
  if (!e || Pv) return "";
  Pv = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var i = d.stack.split(`
`),
          a = r.stack.split(`
`),
          u = i.length - 1,
          c = a.length - 1;
        1 <= u && 0 <= c && i[u] !== a[c];

      )
        c--;
      for (; 1 <= u && 0 <= c; u--, c--)
        if (i[u] !== a[c]) {
          if (u !== 1 || c !== 1)
            do
              if ((u--, c--, 0 > c || i[u] !== a[c])) {
                var f =
                  `
` + i[u].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    f.includes("<anonymous>") &&
                    (f = f.replace("<anonymous>", e.displayName)),
                  f
                );
              }
            while (1 <= u && 0 <= c);
          break;
        }
    }
  } finally {
    (Pv = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ss(e) : "";
}
function X5(e) {
  switch (e.tag) {
    case 5:
      return ss(e.type);
    case 16:
      return ss("Lazy");
    case 13:
      return ss("Suspense");
    case 19:
      return ss("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Tv(e.type, !1)), e;
    case 11:
      return (e = Tv(e.type.render, !1)), e;
    case 1:
      return (e = Tv(e.type, !0)), e;
    default:
      return "";
  }
}
function Dm(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ll:
      return "Fragment";
    case Ml:
      return "Portal";
    case Nm:
      return "Profiler";
    case A0:
      return "StrictMode";
    case zm:
      return "Suspense";
    case jm:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case K2:
        return (e.displayName || "Context") + ".Consumer";
      case G2:
        return (e._context.displayName || "Context") + ".Provider";
      case R0:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case I0:
        return (
          (t = e.displayName || null), t !== null ? t : Dm(e.type) || "Memo"
        );
      case To:
        (t = e._payload), (e = e._init);
        try {
          return Dm(e(t));
        } catch {}
    }
  return null;
}
function Q5(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Dm(t);
    case 8:
      return t === A0 ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Qo(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function X2(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function q5(e) {
  var t = X2(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (u) {
          (r = "" + u), a.call(this, u);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (u) {
          r = "" + u;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function hf(e) {
  e._valueTracker || (e._valueTracker = q5(e));
}
function Q2(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = X2(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function yd(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fm(e, t) {
  var n = t.checked;
  return Et({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ew(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Qo(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function q2(e, t) {
  (t = t.checked), t != null && T0(e, "checked", t, !1);
}
function Bm(e, t) {
  q2(e, t);
  var n = Qo(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Wm(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Wm(e, t.type, Qo(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ow(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Wm(e, t, n) {
  (t !== "number" || yd(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var cs = Array.isArray;
function Jl(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Qo(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Hm(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(Z(91));
  return Et({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function kw(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(Z(92));
      if (cs(n)) {
        if (1 < n.length) throw Error(Z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Qo(n) };
}
function Z2(e, t) {
  var n = Qo(t.value),
    r = Qo(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Pw(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function J2(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Um(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? J2(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var vf,
  eC = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        vf = vf || document.createElement("div"),
          vf.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = vf.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ms = {
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
    strokeWidth: !0,
  },
  Z5 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ms).forEach(function (e) {
  Z5.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ms[t] = ms[e]);
  });
});
function tC(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ms.hasOwnProperty(e) && ms[e])
    ? ("" + t).trim()
    : t + "px";
}
function nC(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = tC(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var J5 = Et(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function Vm(e, t) {
  if (t) {
    if (J5[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(Z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(Z(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(Z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(Z(62));
  }
}
function Gm(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Km = null;
function $0(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ym = null,
  eu = null,
  tu = null;
function Tw(e) {
  if ((e = dc(e))) {
    if (typeof Ym != "function") throw Error(Z(280));
    var t = e.stateNode;
    t && ((t = vp(t)), Ym(e.stateNode, e.type, t));
  }
}
function rC(e) {
  eu ? (tu ? tu.push(e) : (tu = [e])) : (eu = e);
}
function iC() {
  if (eu) {
    var e = eu,
      t = tu;
    if (((tu = eu = null), Tw(e), t)) for (e = 0; e < t.length; e++) Tw(t[e]);
  }
}
function oC(e, t) {
  return e(t);
}
function aC() {}
var Av = !1;
function lC(e, t, n) {
  if (Av) return e(t, n);
  Av = !0;
  try {
    return oC(e, t, n);
  } finally {
    (Av = !1), (eu !== null || tu !== null) && (aC(), iC());
  }
}
function Is(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = vp(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(Z(231, t, typeof n));
  return n;
}
var Xm = !1;
if (Xi)
  try {
    var es = {};
    Object.defineProperty(es, "passive", {
      get: function () {
        Xm = !0;
      },
    }),
      window.addEventListener("test", es, es),
      window.removeEventListener("test", es, es);
  } catch {
    Xm = !1;
  }
function eI(e, t, n, r, i, a, u, c, f) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var gs = !1,
  bd = null,
  wd = !1,
  Qm = null,
  tI = {
    onError: function (e) {
      (gs = !0), (bd = e);
    },
  };
function nI(e, t, n, r, i, a, u, c, f) {
  (gs = !1), (bd = null), eI.apply(tI, arguments);
}
function rI(e, t, n, r, i, a, u, c, f) {
  if ((nI.apply(this, arguments), gs)) {
    if (gs) {
      var d = bd;
      (gs = !1), (bd = null);
    } else throw Error(Z(198));
    wd || ((wd = !0), (Qm = d));
  }
}
function Za(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function uC(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Aw(e) {
  if (Za(e) !== e) throw Error(Z(188));
}
function iI(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Za(e)), t === null)) throw Error(Z(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === n) return Aw(i), e;
        if (a === r) return Aw(i), t;
        a = a.sibling;
      }
      throw Error(Z(188));
    }
    if (n.return !== r.return) (n = i), (r = a);
    else {
      for (var u = !1, c = i.child; c; ) {
        if (c === n) {
          (u = !0), (n = i), (r = a);
          break;
        }
        if (c === r) {
          (u = !0), (r = i), (n = a);
          break;
        }
        c = c.sibling;
      }
      if (!u) {
        for (c = a.child; c; ) {
          if (c === n) {
            (u = !0), (n = a), (r = i);
            break;
          }
          if (c === r) {
            (u = !0), (r = a), (n = i);
            break;
          }
          c = c.sibling;
        }
        if (!u) throw Error(Z(189));
      }
    }
    if (n.alternate !== r) throw Error(Z(190));
  }
  if (n.tag !== 3) throw Error(Z(188));
  return n.stateNode.current === n ? e : t;
}
function sC(e) {
  return (e = iI(e)), e !== null ? cC(e) : null;
}
function cC(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = cC(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var fC = nr.unstable_scheduleCallback,
  Rw = nr.unstable_cancelCallback,
  oI = nr.unstable_shouldYield,
  aI = nr.unstable_requestPaint,
  Mt = nr.unstable_now,
  lI = nr.unstable_getCurrentPriorityLevel,
  M0 = nr.unstable_ImmediatePriority,
  dC = nr.unstable_UserBlockingPriority,
  Sd = nr.unstable_NormalPriority,
  uI = nr.unstable_LowPriority,
  pC = nr.unstable_IdlePriority,
  fp = null,
  vi = null;
function sI(e) {
  if (vi && typeof vi.onCommitFiberRoot == "function")
    try {
      vi.onCommitFiberRoot(fp, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Kr = Math.clz32 ? Math.clz32 : dI,
  cI = Math.log,
  fI = Math.LN2;
function dI(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((cI(e) / fI) | 0)) | 0;
}
var mf = 64,
  gf = 4194304;
function fs(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function xd(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    u = n & 268435455;
  if (u !== 0) {
    var c = u & ~i;
    c !== 0 ? (r = fs(c)) : ((a &= u), a !== 0 && (r = fs(a)));
  } else (u = n & ~i), u !== 0 ? (r = fs(u)) : a !== 0 && (r = fs(a));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Kr(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function pI(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function hI(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var u = 31 - Kr(a),
      c = 1 << u,
      f = i[u];
    f === -1
      ? (!(c & n) || c & r) && (i[u] = pI(c, t))
      : f <= t && (e.expiredLanes |= c),
      (a &= ~c);
  }
}
function qm(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function hC() {
  var e = mf;
  return (mf <<= 1), !(mf & 4194240) && (mf = 64), e;
}
function Rv(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cc(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Kr(t)),
    (e[t] = n);
}
function vI(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Kr(n),
      a = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
  }
}
function L0(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Kr(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Xe = 0;
function vC(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var mC,
  N0,
  gC,
  yC,
  bC,
  Zm = !1,
  yf = [],
  Do = null,
  Fo = null,
  Bo = null,
  $s = new Map(),
  Ms = new Map(),
  Ro = [],
  mI =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Iw(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Do = null;
      break;
    case "dragenter":
    case "dragleave":
      Fo = null;
      break;
    case "mouseover":
    case "mouseout":
      Bo = null;
      break;
    case "pointerover":
    case "pointerout":
      $s.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ms.delete(t.pointerId);
  }
}
function ts(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i],
      }),
      t !== null && ((t = dc(t)), t !== null && N0(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function gI(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Do = ts(Do, e, t, n, r, i)), !0;
    case "dragenter":
      return (Fo = ts(Fo, e, t, n, r, i)), !0;
    case "mouseover":
      return (Bo = ts(Bo, e, t, n, r, i)), !0;
    case "pointerover":
      var a = i.pointerId;
      return $s.set(a, ts($s.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (a = i.pointerId), Ms.set(a, ts(Ms.get(a) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function wC(e) {
  var t = Ta(e.target);
  if (t !== null) {
    var n = Za(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = uC(n)), t !== null)) {
          (e.blockedOn = t),
            bC(e.priority, function () {
              gC(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ed(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Jm(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Km = r), n.target.dispatchEvent(r), (Km = null);
    } else return (t = dc(n)), t !== null && N0(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $w(e, t, n) {
  ed(e) && n.delete(t);
}
function yI() {
  (Zm = !1),
    Do !== null && ed(Do) && (Do = null),
    Fo !== null && ed(Fo) && (Fo = null),
    Bo !== null && ed(Bo) && (Bo = null),
    $s.forEach($w),
    Ms.forEach($w);
}
function ns(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Zm ||
      ((Zm = !0),
      nr.unstable_scheduleCallback(nr.unstable_NormalPriority, yI)));
}
function Ls(e) {
  function t(i) {
    return ns(i, e);
  }
  if (0 < yf.length) {
    ns(yf[0], e);
    for (var n = 1; n < yf.length; n++) {
      var r = yf[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Do !== null && ns(Do, e),
      Fo !== null && ns(Fo, e),
      Bo !== null && ns(Bo, e),
      $s.forEach(t),
      Ms.forEach(t),
      n = 0;
    n < Ro.length;
    n++
  )
    (r = Ro[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ro.length && ((n = Ro[0]), n.blockedOn === null); )
    wC(n), n.blockedOn === null && Ro.shift();
}
var nu = oo.ReactCurrentBatchConfig,
  Cd = !0;
function bI(e, t, n, r) {
  var i = Xe,
    a = nu.transition;
  nu.transition = null;
  try {
    (Xe = 1), z0(e, t, n, r);
  } finally {
    (Xe = i), (nu.transition = a);
  }
}
function wI(e, t, n, r) {
  var i = Xe,
    a = nu.transition;
  nu.transition = null;
  try {
    (Xe = 4), z0(e, t, n, r);
  } finally {
    (Xe = i), (nu.transition = a);
  }
}
function z0(e, t, n, r) {
  if (Cd) {
    var i = Jm(e, t, n, r);
    if (i === null) Bv(e, t, r, _d, n), Iw(e, r);
    else if (gI(i, e, t, n, r)) r.stopPropagation();
    else if ((Iw(e, r), t & 4 && -1 < mI.indexOf(e))) {
      for (; i !== null; ) {
        var a = dc(i);
        if (
          (a !== null && mC(a),
          (a = Jm(e, t, n, r)),
          a === null && Bv(e, t, r, _d, n),
          a === i)
        )
          break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else Bv(e, t, r, null, n);
  }
}
var _d = null;
function Jm(e, t, n, r) {
  if (((_d = null), (e = $0(r)), (e = Ta(e)), e !== null))
    if (((t = Za(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = uC(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (_d = e), null;
}
function SC(e) {
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
      switch (lI()) {
        case M0:
          return 1;
        case dC:
          return 4;
        case Sd:
        case uI:
          return 16;
        case pC:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mo = null,
  j0 = null,
  td = null;
function xC() {
  if (td) return td;
  var e,
    t = j0,
    n = t.length,
    r,
    i = "value" in Mo ? Mo.value : Mo.textContent,
    a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var u = n - e;
  for (r = 1; r <= u && t[n - r] === i[a - r]; r++);
  return (td = i.slice(e, 1 < r ? 1 - r : void 0));
}
function nd(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function bf() {
  return !0;
}
function Mw() {
  return !1;
}
function or(e) {
  function t(n, r, i, a, u) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = u),
      (this.currentTarget = null);
    for (var c in e)
      e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(a) : a[c]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? bf
        : Mw),
      (this.isPropagationStopped = Mw),
      this
    );
  }
  return (
    Et(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = bf));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = bf));
      },
      persist: function () {},
      isPersistent: bf,
    }),
    t
  );
}
var Cu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  D0 = or(Cu),
  fc = Et({}, Cu, { view: 0, detail: 0 }),
  SI = or(fc),
  Iv,
  $v,
  rs,
  dp = Et({}, fc, {
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
    getModifierState: F0,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== rs &&
            (rs && e.type === "mousemove"
              ? ((Iv = e.screenX - rs.screenX), ($v = e.screenY - rs.screenY))
              : ($v = Iv = 0),
            (rs = e)),
          Iv);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : $v;
    },
  }),
  Lw = or(dp),
  xI = Et({}, dp, { dataTransfer: 0 }),
  CI = or(xI),
  _I = Et({}, fc, { relatedTarget: 0 }),
  Mv = or(_I),
  EI = Et({}, Cu, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  OI = or(EI),
  kI = Et({}, Cu, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  PI = or(kI),
  TI = Et({}, Cu, { data: 0 }),
  Nw = or(TI),
  AI = {
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
    MozPrintableKey: "Unidentified",
  },
  RI = {
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
    224: "Meta",
  },
  II = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function $I(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = II[e]) ? !!t[e] : !1;
}
function F0() {
  return $I;
}
var MI = Et({}, fc, {
    key: function (e) {
      if (e.key) {
        var t = AI[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = nd(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? RI[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: F0,
    charCode: function (e) {
      return e.type === "keypress" ? nd(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? nd(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  LI = or(MI),
  NI = Et({}, dp, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  zw = or(NI),
  zI = Et({}, fc, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: F0,
  }),
  jI = or(zI),
  DI = Et({}, Cu, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  FI = or(DI),
  BI = Et({}, dp, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  WI = or(BI),
  HI = [9, 13, 27, 32],
  B0 = Xi && "CompositionEvent" in window,
  ys = null;
Xi && "documentMode" in document && (ys = document.documentMode);
var UI = Xi && "TextEvent" in window && !ys,
  CC = Xi && (!B0 || (ys && 8 < ys && 11 >= ys)),
  jw = String.fromCharCode(32),
  Dw = !1;
function _C(e, t) {
  switch (e) {
    case "keyup":
      return HI.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function EC(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Nl = !1;
function VI(e, t) {
  switch (e) {
    case "compositionend":
      return EC(t);
    case "keypress":
      return t.which !== 32 ? null : ((Dw = !0), jw);
    case "textInput":
      return (e = t.data), e === jw && Dw ? null : e;
    default:
      return null;
  }
}
function GI(e, t) {
  if (Nl)
    return e === "compositionend" || (!B0 && _C(e, t))
      ? ((e = xC()), (td = j0 = Mo = null), (Nl = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return CC && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var KI = {
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
  week: !0,
};
function Fw(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!KI[e.type] : t === "textarea";
}
function OC(e, t, n, r) {
  rC(r),
    (t = Ed(t, "onChange")),
    0 < t.length &&
      ((n = new D0("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var bs = null,
  Ns = null;
function YI(e) {
  zC(e, 0);
}
function pp(e) {
  var t = Dl(e);
  if (Q2(t)) return e;
}
function XI(e, t) {
  if (e === "change") return t;
}
var kC = !1;
if (Xi) {
  var Lv;
  if (Xi) {
    var Nv = "oninput" in document;
    if (!Nv) {
      var Bw = document.createElement("div");
      Bw.setAttribute("oninput", "return;"),
        (Nv = typeof Bw.oninput == "function");
    }
    Lv = Nv;
  } else Lv = !1;
  kC = Lv && (!document.documentMode || 9 < document.documentMode);
}
function Ww() {
  bs && (bs.detachEvent("onpropertychange", PC), (Ns = bs = null));
}
function PC(e) {
  if (e.propertyName === "value" && pp(Ns)) {
    var t = [];
    OC(t, Ns, e, $0(e)), lC(YI, t);
  }
}
function QI(e, t, n) {
  e === "focusin"
    ? (Ww(), (bs = t), (Ns = n), bs.attachEvent("onpropertychange", PC))
    : e === "focusout" && Ww();
}
function qI(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return pp(Ns);
}
function ZI(e, t) {
  if (e === "click") return pp(t);
}
function JI(e, t) {
  if (e === "input" || e === "change") return pp(t);
}
function e$(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Qr = typeof Object.is == "function" ? Object.is : e$;
function zs(e, t) {
  if (Qr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Lm.call(t, i) || !Qr(e[i], t[i])) return !1;
  }
  return !0;
}
function Hw(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Uw(e, t) {
  var n = Hw(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Hw(n);
  }
}
function TC(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? TC(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function AC() {
  for (var e = window, t = yd(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = yd(e.document);
  }
  return t;
}
function W0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function t$(e) {
  var t = AC(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    TC(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && W0(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          a = Math.min(r.start, i);
        (r = r.end === void 0 ? a : Math.min(r.end, i)),
          !e.extend && a > r && ((i = r), (r = a), (a = i)),
          (i = Uw(n, a));
        var u = Uw(n, r);
        i &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(u.node, u.offset))
            : (t.setEnd(u.node, u.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var n$ = Xi && "documentMode" in document && 11 >= document.documentMode,
  zl = null,
  eg = null,
  ws = null,
  tg = !1;
function Vw(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  tg ||
    zl == null ||
    zl !== yd(r) ||
    ((r = zl),
    "selectionStart" in r && W0(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ws && zs(ws, r)) ||
      ((ws = r),
      (r = Ed(eg, "onSelect")),
      0 < r.length &&
        ((t = new D0("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zl))));
}
function wf(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var jl = {
    animationend: wf("Animation", "AnimationEnd"),
    animationiteration: wf("Animation", "AnimationIteration"),
    animationstart: wf("Animation", "AnimationStart"),
    transitionend: wf("Transition", "TransitionEnd"),
  },
  zv = {},
  RC = {};
Xi &&
  ((RC = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete jl.animationend.animation,
    delete jl.animationiteration.animation,
    delete jl.animationstart.animation),
  "TransitionEvent" in window || delete jl.transitionend.transition);
function hp(e) {
  if (zv[e]) return zv[e];
  if (!jl[e]) return e;
  var t = jl[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in RC) return (zv[e] = t[n]);
  return e;
}
var IC = hp("animationend"),
  $C = hp("animationiteration"),
  MC = hp("animationstart"),
  LC = hp("transitionend"),
  NC = new Map(),
  Gw =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ia(e, t) {
  NC.set(e, t), qa(t, [e]);
}
for (var jv = 0; jv < Gw.length; jv++) {
  var Dv = Gw[jv],
    r$ = Dv.toLowerCase(),
    i$ = Dv[0].toUpperCase() + Dv.slice(1);
  ia(r$, "on" + i$);
}
ia(IC, "onAnimationEnd");
ia($C, "onAnimationIteration");
ia(MC, "onAnimationStart");
ia("dblclick", "onDoubleClick");
ia("focusin", "onFocus");
ia("focusout", "onBlur");
ia(LC, "onTransitionEnd");
su("onMouseEnter", ["mouseout", "mouseover"]);
su("onMouseLeave", ["mouseout", "mouseover"]);
su("onPointerEnter", ["pointerout", "pointerover"]);
su("onPointerLeave", ["pointerout", "pointerover"]);
qa(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qa(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qa(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qa(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qa(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ds =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  o$ = new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));
function Kw(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), rI(r, t, void 0, e), (e.currentTarget = null);
}
function zC(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var u = r.length - 1; 0 <= u; u--) {
          var c = r[u],
            f = c.instance,
            d = c.currentTarget;
          if (((c = c.listener), f !== a && i.isPropagationStopped())) break e;
          Kw(i, c, d), (a = f);
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((c = r[u]),
            (f = c.instance),
            (d = c.currentTarget),
            (c = c.listener),
            f !== a && i.isPropagationStopped())
          )
            break e;
          Kw(i, c, d), (a = f);
        }
    }
  }
  if (wd) throw ((e = Qm), (wd = !1), (Qm = null), e);
}
function lt(e, t) {
  var n = t[ag];
  n === void 0 && (n = t[ag] = new Set());
  var r = e + "__bubble";
  n.has(r) || (jC(t, e, 2, !1), n.add(r));
}
function Fv(e, t, n) {
  var r = 0;
  t && (r |= 4), jC(n, e, r, t);
}
var Sf = "_reactListening" + Math.random().toString(36).slice(2);
function js(e) {
  if (!e[Sf]) {
    (e[Sf] = !0),
      V2.forEach(function (n) {
        n !== "selectionchange" && (o$.has(n) || Fv(n, !1, e), Fv(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Sf] || ((t[Sf] = !0), Fv("selectionchange", !1, t));
  }
}
function jC(e, t, n, r) {
  switch (SC(t)) {
    case 1:
      var i = bI;
      break;
    case 4:
      i = wI;
      break;
    default:
      i = z0;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Xm ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Bv(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var c = r.stateNode.containerInfo;
        if (c === i || (c.nodeType === 8 && c.parentNode === i)) break;
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var f = u.tag;
            if (
              (f === 3 || f === 4) &&
              ((f = u.stateNode.containerInfo),
              f === i || (f.nodeType === 8 && f.parentNode === i))
            )
              return;
            u = u.return;
          }
        for (; c !== null; ) {
          if (((u = Ta(c)), u === null)) return;
          if (((f = u.tag), f === 5 || f === 6)) {
            r = a = u;
            continue e;
          }
          c = c.parentNode;
        }
      }
      r = r.return;
    }
  lC(function () {
    var d = a,
      h = $0(n),
      v = [];
    e: {
      var g = NC.get(e);
      if (g !== void 0) {
        var b = D0,
          E = e;
        switch (e) {
          case "keypress":
            if (nd(n) === 0) break e;
          case "keydown":
          case "keyup":
            b = LI;
            break;
          case "focusin":
            (E = "focus"), (b = Mv);
            break;
          case "focusout":
            (E = "blur"), (b = Mv);
            break;
          case "beforeblur":
          case "afterblur":
            b = Mv;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            b = Lw;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = CI;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = jI;
            break;
          case IC:
          case $C:
          case MC:
            b = OI;
            break;
          case LC:
            b = FI;
            break;
          case "scroll":
            b = SI;
            break;
          case "wheel":
            b = WI;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = PI;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = zw;
        }
        var O = (t & 4) !== 0,
          T = !O && e === "scroll",
          C = O ? (g !== null ? g + "Capture" : null) : g;
        O = [];
        for (var y = d, S; y !== null; ) {
          S = y;
          var k = S.stateNode;
          if (
            (S.tag === 5 &&
              k !== null &&
              ((S = k),
              C !== null && ((k = Is(y, C)), k != null && O.push(Ds(y, k, S)))),
            T)
          )
            break;
          y = y.return;
        }
        0 < O.length &&
          ((g = new b(g, E, null, n, h)), v.push({ event: g, listeners: O }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (b = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Km &&
            (E = n.relatedTarget || n.fromElement) &&
            (Ta(E) || E[Qi]))
        )
          break e;
        if (
          (b || g) &&
          ((g =
            h.window === h
              ? h
              : (g = h.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          b
            ? ((E = n.relatedTarget || n.toElement),
              (b = d),
              (E = E ? Ta(E) : null),
              E !== null &&
                ((T = Za(E)), E !== T || (E.tag !== 5 && E.tag !== 6)) &&
                (E = null))
            : ((b = null), (E = d)),
          b !== E)
        ) {
          if (
            ((O = Lw),
            (k = "onMouseLeave"),
            (C = "onMouseEnter"),
            (y = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((O = zw),
              (k = "onPointerLeave"),
              (C = "onPointerEnter"),
              (y = "pointer")),
            (T = b == null ? g : Dl(b)),
            (S = E == null ? g : Dl(E)),
            (g = new O(k, y + "leave", b, n, h)),
            (g.target = T),
            (g.relatedTarget = S),
            (k = null),
            Ta(h) === d &&
              ((O = new O(C, y + "enter", E, n, h)),
              (O.target = S),
              (O.relatedTarget = T),
              (k = O)),
            (T = k),
            b && E)
          )
            t: {
              for (O = b, C = E, y = 0, S = O; S; S = kl(S)) y++;
              for (S = 0, k = C; k; k = kl(k)) S++;
              for (; 0 < y - S; ) (O = kl(O)), y--;
              for (; 0 < S - y; ) (C = kl(C)), S--;
              for (; y--; ) {
                if (O === C || (C !== null && O === C.alternate)) break t;
                (O = kl(O)), (C = kl(C));
              }
              O = null;
            }
          else O = null;
          b !== null && Yw(v, g, b, O, !1),
            E !== null && T !== null && Yw(v, T, E, O, !0);
        }
      }
      e: {
        if (
          ((g = d ? Dl(d) : window),
          (b = g.nodeName && g.nodeName.toLowerCase()),
          b === "select" || (b === "input" && g.type === "file"))
        )
          var $ = XI;
        else if (Fw(g))
          if (kC) $ = JI;
          else {
            $ = qI;
            var L = QI;
          }
        else
          (b = g.nodeName) &&
            b.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            ($ = ZI);
        if ($ && ($ = $(e, d))) {
          OC(v, $, n, h);
          break e;
        }
        L && L(e, g, d),
          e === "focusout" &&
            (L = g._wrapperState) &&
            L.controlled &&
            g.type === "number" &&
            Wm(g, "number", g.value);
      }
      switch (((L = d ? Dl(d) : window), e)) {
        case "focusin":
          (Fw(L) || L.contentEditable === "true") &&
            ((zl = L), (eg = d), (ws = null));
          break;
        case "focusout":
          ws = eg = zl = null;
          break;
        case "mousedown":
          tg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (tg = !1), Vw(v, n, h);
          break;
        case "selectionchange":
          if (n$) break;
        case "keydown":
        case "keyup":
          Vw(v, n, h);
      }
      var A;
      if (B0)
        e: {
          switch (e) {
            case "compositionstart":
              var U = "onCompositionStart";
              break e;
            case "compositionend":
              U = "onCompositionEnd";
              break e;
            case "compositionupdate":
              U = "onCompositionUpdate";
              break e;
          }
          U = void 0;
        }
      else
        Nl
          ? _C(e, n) && (U = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (U = "onCompositionStart");
      U &&
        (CC &&
          n.locale !== "ko" &&
          (Nl || U !== "onCompositionStart"
            ? U === "onCompositionEnd" && Nl && (A = xC())
            : ((Mo = h),
              (j0 = "value" in Mo ? Mo.value : Mo.textContent),
              (Nl = !0))),
        (L = Ed(d, U)),
        0 < L.length &&
          ((U = new Nw(U, e, null, n, h)),
          v.push({ event: U, listeners: L }),
          A ? (U.data = A) : ((A = EC(n)), A !== null && (U.data = A)))),
        (A = UI ? VI(e, n) : GI(e, n)) &&
          ((d = Ed(d, "onBeforeInput")),
          0 < d.length &&
            ((h = new Nw("onBeforeInput", "beforeinput", null, n, h)),
            v.push({ event: h, listeners: d }),
            (h.data = A)));
    }
    zC(v, t);
  });
}
function Ds(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ed(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = Is(e, n)),
      a != null && r.unshift(Ds(e, a, i)),
      (a = Is(e, t)),
      a != null && r.push(Ds(e, a, i))),
      (e = e.return);
  }
  return r;
}
function kl(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Yw(e, t, n, r, i) {
  for (var a = t._reactName, u = []; n !== null && n !== r; ) {
    var c = n,
      f = c.alternate,
      d = c.stateNode;
    if (f !== null && f === r) break;
    c.tag === 5 &&
      d !== null &&
      ((c = d),
      i
        ? ((f = Is(n, a)), f != null && u.unshift(Ds(n, f, c)))
        : i || ((f = Is(n, a)), f != null && u.push(Ds(n, f, c)))),
      (n = n.return);
  }
  u.length !== 0 && e.push({ event: t, listeners: u });
}
var a$ = /\r\n?/g,
  l$ = /\u0000|\uFFFD/g;
function Xw(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      a$,
      `
`
    )
    .replace(l$, "");
}
function xf(e, t, n) {
  if (((t = Xw(t)), Xw(e) !== t && n)) throw Error(Z(425));
}
function Od() {}
var ng = null,
  rg = null;
function ig(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var og = typeof setTimeout == "function" ? setTimeout : void 0,
  u$ = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Qw = typeof Promise == "function" ? Promise : void 0,
  s$ =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Qw < "u"
      ? function (e) {
          return Qw.resolve(null).then(e).catch(c$);
        }
      : og;
function c$(e) {
  setTimeout(function () {
    throw e;
  });
}
function Wv(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ls(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ls(t);
}
function Wo(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qw(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var _u = Math.random().toString(36).slice(2),
  pi = "__reactFiber$" + _u,
  Fs = "__reactProps$" + _u,
  Qi = "__reactContainer$" + _u,
  ag = "__reactEvents$" + _u,
  f$ = "__reactListeners$" + _u,
  d$ = "__reactHandles$" + _u;
function Ta(e) {
  var t = e[pi];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Qi] || n[pi])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qw(e); e !== null; ) {
          if ((n = e[pi])) return n;
          e = qw(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function dc(e) {
  return (
    (e = e[pi] || e[Qi]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Dl(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(Z(33));
}
function vp(e) {
  return e[Fs] || null;
}
var lg = [],
  Fl = -1;
function oa(e) {
  return { current: e };
}
function st(e) {
  0 > Fl || ((e.current = lg[Fl]), (lg[Fl] = null), Fl--);
}
function it(e, t) {
  Fl++, (lg[Fl] = e.current), (e.current = t);
}
var qo = {},
  wn = oa(qo),
  Nn = oa(!1),
  Ba = qo;
function cu(e, t) {
  var n = e.type.contextTypes;
  if (!n) return qo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in n) i[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function zn(e) {
  return (e = e.childContextTypes), e != null;
}
function kd() {
  st(Nn), st(wn);
}
function Zw(e, t, n) {
  if (wn.current !== qo) throw Error(Z(168));
  it(wn, t), it(Nn, n);
}
function DC(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(Z(108, Q5(e) || "Unknown", i));
  return Et({}, n, r);
}
function Pd(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || qo),
    (Ba = wn.current),
    it(wn, e),
    it(Nn, Nn.current),
    !0
  );
}
function Jw(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(Z(169));
  n
    ? ((e = DC(e, t, Ba)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      st(Nn),
      st(wn),
      it(wn, e))
    : st(Nn),
    it(Nn, n);
}
var Ui = null,
  mp = !1,
  Hv = !1;
function FC(e) {
  Ui === null ? (Ui = [e]) : Ui.push(e);
}
function p$(e) {
  (mp = !0), FC(e);
}
function aa() {
  if (!Hv && Ui !== null) {
    Hv = !0;
    var e = 0,
      t = Xe;
    try {
      var n = Ui;
      for (Xe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ui = null), (mp = !1);
    } catch (i) {
      throw (Ui !== null && (Ui = Ui.slice(e + 1)), fC(M0, aa), i);
    } finally {
      (Xe = t), (Hv = !1);
    }
  }
  return null;
}
var Bl = [],
  Wl = 0,
  Td = null,
  Ad = 0,
  xr = [],
  Cr = 0,
  Wa = null,
  Gi = 1,
  Ki = "";
function _a(e, t) {
  (Bl[Wl++] = Ad), (Bl[Wl++] = Td), (Td = e), (Ad = t);
}
function BC(e, t, n) {
  (xr[Cr++] = Gi), (xr[Cr++] = Ki), (xr[Cr++] = Wa), (Wa = e);
  var r = Gi;
  e = Ki;
  var i = 32 - Kr(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var a = 32 - Kr(t) + i;
  if (30 < a) {
    var u = i - (i % 5);
    (a = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (i -= u),
      (Gi = (1 << (32 - Kr(t) + i)) | (n << i) | r),
      (Ki = a + e);
  } else (Gi = (1 << a) | (n << i) | r), (Ki = e);
}
function H0(e) {
  e.return !== null && (_a(e, 1), BC(e, 1, 0));
}
function U0(e) {
  for (; e === Td; )
    (Td = Bl[--Wl]), (Bl[Wl] = null), (Ad = Bl[--Wl]), (Bl[Wl] = null);
  for (; e === Wa; )
    (Wa = xr[--Cr]),
      (xr[Cr] = null),
      (Ki = xr[--Cr]),
      (xr[Cr] = null),
      (Gi = xr[--Cr]),
      (xr[Cr] = null);
}
var tr = null,
  Jn = null,
  gt = !1,
  Ur = null;
function WC(e, t) {
  var n = _r(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function eS(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (tr = e), (Jn = Wo(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (tr = e), (Jn = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Wa !== null ? { id: Gi, overflow: Ki } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = _r(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (tr = e),
            (Jn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ug(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function sg(e) {
  if (gt) {
    var t = Jn;
    if (t) {
      var n = t;
      if (!eS(e, t)) {
        if (ug(e)) throw Error(Z(418));
        t = Wo(n.nextSibling);
        var r = tr;
        t && eS(e, t)
          ? WC(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (gt = !1), (tr = e));
      }
    } else {
      if (ug(e)) throw Error(Z(418));
      (e.flags = (e.flags & -4097) | 2), (gt = !1), (tr = e);
    }
  }
}
function tS(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  tr = e;
}
function Cf(e) {
  if (e !== tr) return !1;
  if (!gt) return tS(e), (gt = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ig(e.type, e.memoizedProps))),
    t && (t = Jn))
  ) {
    if (ug(e)) throw (HC(), Error(Z(418)));
    for (; t; ) WC(e, t), (t = Wo(t.nextSibling));
  }
  if ((tS(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(Z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Jn = Wo(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Jn = null;
    }
  } else Jn = tr ? Wo(e.stateNode.nextSibling) : null;
  return !0;
}
function HC() {
  for (var e = Jn; e; ) e = Wo(e.nextSibling);
}
function fu() {
  (Jn = tr = null), (gt = !1);
}
function V0(e) {
  Ur === null ? (Ur = [e]) : Ur.push(e);
}
var h$ = oo.ReactCurrentBatchConfig;
function Br(e, t) {
  if (e && e.defaultProps) {
    (t = Et({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Rd = oa(null),
  Id = null,
  Hl = null,
  G0 = null;
function K0() {
  G0 = Hl = Id = null;
}
function Y0(e) {
  var t = Rd.current;
  st(Rd), (e._currentValue = t);
}
function cg(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ru(e, t) {
  (Id = e),
    (G0 = Hl = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ln = !0), (e.firstContext = null));
}
function Or(e) {
  var t = e._currentValue;
  if (G0 !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hl === null)) {
      if (Id === null) throw Error(Z(308));
      (Hl = e), (Id.dependencies = { lanes: 0, firstContext: e });
    } else Hl = Hl.next = e;
  return t;
}
var Aa = null;
function X0(e) {
  Aa === null ? (Aa = [e]) : Aa.push(e);
}
function UC(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), X0(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    qi(e, r)
  );
}
function qi(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ao = !1;
function Q0(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function VC(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Yi(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ho(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Be & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      qi(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), X0(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    qi(e, n)
  );
}
function rd(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), L0(e, n);
  }
}
function nS(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var u = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        a === null ? (i = a = u) : (a = a.next = u), (n = n.next);
      } while (n !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function $d(e, t, n, r) {
  var i = e.updateQueue;
  Ao = !1;
  var a = i.firstBaseUpdate,
    u = i.lastBaseUpdate,
    c = i.shared.pending;
  if (c !== null) {
    i.shared.pending = null;
    var f = c,
      d = f.next;
    (f.next = null), u === null ? (a = d) : (u.next = d), (u = f);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (c = h.lastBaseUpdate),
      c !== u &&
        (c === null ? (h.firstBaseUpdate = d) : (c.next = d),
        (h.lastBaseUpdate = f)));
  }
  if (a !== null) {
    var v = i.baseState;
    (u = 0), (h = d = f = null), (c = a);
    do {
      var g = c.lane,
        b = c.eventTime;
      if ((r & g) === g) {
        h !== null &&
          (h = h.next =
            {
              eventTime: b,
              lane: 0,
              tag: c.tag,
              payload: c.payload,
              callback: c.callback,
              next: null,
            });
        e: {
          var E = e,
            O = c;
          switch (((g = t), (b = n), O.tag)) {
            case 1:
              if (((E = O.payload), typeof E == "function")) {
                v = E.call(b, v, g);
                break e;
              }
              v = E;
              break e;
            case 3:
              E.flags = (E.flags & -65537) | 128;
            case 0:
              if (
                ((E = O.payload),
                (g = typeof E == "function" ? E.call(b, v, g) : E),
                g == null)
              )
                break e;
              v = Et({}, v, g);
              break e;
            case 2:
              Ao = !0;
          }
        }
        c.callback !== null &&
          c.lane !== 0 &&
          ((e.flags |= 64),
          (g = i.effects),
          g === null ? (i.effects = [c]) : g.push(c));
      } else
        (b = {
          eventTime: b,
          lane: g,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null,
        }),
          h === null ? ((d = h = b), (f = v)) : (h = h.next = b),
          (u |= g);
      if (((c = c.next), c === null)) {
        if (((c = i.shared.pending), c === null)) break;
        (g = c),
          (c = g.next),
          (g.next = null),
          (i.lastBaseUpdate = g),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (f = v),
      (i.baseState = f),
      (i.firstBaseUpdate = d),
      (i.lastBaseUpdate = h),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (u |= i.lane), (i = i.next);
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    (Ua |= u), (e.lanes = u), (e.memoizedState = v);
  }
}
function rS(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(Z(191, i));
        i.call(r);
      }
    }
}
var GC = new U2.Component().refs;
function fg(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Et({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var gp = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Za(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = kn(),
      i = Vo(e),
      a = Yi(r, i);
    (a.payload = t),
      n != null && (a.callback = n),
      (t = Ho(e, a, i)),
      t !== null && (Yr(t, e, i, r), rd(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = kn(),
      i = Vo(e),
      a = Yi(r, i);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = Ho(e, a, i)),
      t !== null && (Yr(t, e, i, r), rd(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = kn(),
      r = Vo(e),
      i = Yi(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ho(e, i, r)),
      t !== null && (Yr(t, e, r, n), rd(t, e, r));
  },
};
function iS(e, t, n, r, i, a, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, u)
      : t.prototype && t.prototype.isPureReactComponent
      ? !zs(n, r) || !zs(i, a)
      : !0
  );
}
function KC(e, t, n) {
  var r = !1,
    i = qo,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = Or(a))
      : ((i = zn(t) ? Ba : wn.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? cu(e, i) : qo)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = gp),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function oS(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && gp.enqueueReplaceState(t, t.state, null);
}
function dg(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = GC), Q0(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (i.context = Or(a))
    : ((a = zn(t) ? Ba : wn.current), (i.context = cu(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (fg(e, t, a, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && gp.enqueueReplaceState(i, i.state, null),
      $d(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function is(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(Z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(Z(147, e));
      var i = r,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (u) {
            var c = i.refs;
            c === GC && (c = i.refs = {}),
              u === null ? delete c[a] : (c[a] = u);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(Z(284));
    if (!n._owner) throw Error(Z(290, e));
  }
  return e;
}
function _f(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      Z(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function aS(e) {
  var t = e._init;
  return t(e._payload);
}
function YC(e) {
  function t(C, y) {
    if (e) {
      var S = C.deletions;
      S === null ? ((C.deletions = [y]), (C.flags |= 16)) : S.push(y);
    }
  }
  function n(C, y) {
    if (!e) return null;
    for (; y !== null; ) t(C, y), (y = y.sibling);
    return null;
  }
  function r(C, y) {
    for (C = new Map(); y !== null; )
      y.key !== null ? C.set(y.key, y) : C.set(y.index, y), (y = y.sibling);
    return C;
  }
  function i(C, y) {
    return (C = Go(C, y)), (C.index = 0), (C.sibling = null), C;
  }
  function a(C, y, S) {
    return (
      (C.index = S),
      e
        ? ((S = C.alternate),
          S !== null
            ? ((S = S.index), S < y ? ((C.flags |= 2), y) : S)
            : ((C.flags |= 2), y))
        : ((C.flags |= 1048576), y)
    );
  }
  function u(C) {
    return e && C.alternate === null && (C.flags |= 2), C;
  }
  function c(C, y, S, k) {
    return y === null || y.tag !== 6
      ? ((y = Qv(S, C.mode, k)), (y.return = C), y)
      : ((y = i(y, S)), (y.return = C), y);
  }
  function f(C, y, S, k) {
    var $ = S.type;
    return $ === Ll
      ? h(C, y, S.props.children, k, S.key)
      : y !== null &&
        (y.elementType === $ ||
          (typeof $ == "object" &&
            $ !== null &&
            $.$$typeof === To &&
            aS($) === y.type))
      ? ((k = i(y, S.props)), (k.ref = is(C, y, S)), (k.return = C), k)
      : ((k = sd(S.type, S.key, S.props, null, C.mode, k)),
        (k.ref = is(C, y, S)),
        (k.return = C),
        k);
  }
  function d(C, y, S, k) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== S.containerInfo ||
      y.stateNode.implementation !== S.implementation
      ? ((y = qv(S, C.mode, k)), (y.return = C), y)
      : ((y = i(y, S.children || [])), (y.return = C), y);
  }
  function h(C, y, S, k, $) {
    return y === null || y.tag !== 7
      ? ((y = za(S, C.mode, k, $)), (y.return = C), y)
      : ((y = i(y, S)), (y.return = C), y);
  }
  function v(C, y, S) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (y = Qv("" + y, C.mode, S)), (y.return = C), y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case pf:
          return (
            (S = sd(y.type, y.key, y.props, null, C.mode, S)),
            (S.ref = is(C, null, y)),
            (S.return = C),
            S
          );
        case Ml:
          return (y = qv(y, C.mode, S)), (y.return = C), y;
        case To:
          var k = y._init;
          return v(C, k(y._payload), S);
      }
      if (cs(y) || Ju(y))
        return (y = za(y, C.mode, S, null)), (y.return = C), y;
      _f(C, y);
    }
    return null;
  }
  function g(C, y, S, k) {
    var $ = y !== null ? y.key : null;
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return $ !== null ? null : c(C, y, "" + S, k);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case pf:
          return S.key === $ ? f(C, y, S, k) : null;
        case Ml:
          return S.key === $ ? d(C, y, S, k) : null;
        case To:
          return ($ = S._init), g(C, y, $(S._payload), k);
      }
      if (cs(S) || Ju(S)) return $ !== null ? null : h(C, y, S, k, null);
      _f(C, S);
    }
    return null;
  }
  function b(C, y, S, k, $) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (C = C.get(S) || null), c(y, C, "" + k, $);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case pf:
          return (C = C.get(k.key === null ? S : k.key) || null), f(y, C, k, $);
        case Ml:
          return (C = C.get(k.key === null ? S : k.key) || null), d(y, C, k, $);
        case To:
          var L = k._init;
          return b(C, y, S, L(k._payload), $);
      }
      if (cs(k) || Ju(k)) return (C = C.get(S) || null), h(y, C, k, $, null);
      _f(y, k);
    }
    return null;
  }
  function E(C, y, S, k) {
    for (
      var $ = null, L = null, A = y, U = (y = 0), G = null;
      A !== null && U < S.length;
      U++
    ) {
      A.index > U ? ((G = A), (A = null)) : (G = A.sibling);
      var D = g(C, A, S[U], k);
      if (D === null) {
        A === null && (A = G);
        break;
      }
      e && A && D.alternate === null && t(C, A),
        (y = a(D, y, U)),
        L === null ? ($ = D) : (L.sibling = D),
        (L = D),
        (A = G);
    }
    if (U === S.length) return n(C, A), gt && _a(C, U), $;
    if (A === null) {
      for (; U < S.length; U++)
        (A = v(C, S[U], k)),
          A !== null &&
            ((y = a(A, y, U)), L === null ? ($ = A) : (L.sibling = A), (L = A));
      return gt && _a(C, U), $;
    }
    for (A = r(C, A); U < S.length; U++)
      (G = b(A, C, U, S[U], k)),
        G !== null &&
          (e && G.alternate !== null && A.delete(G.key === null ? U : G.key),
          (y = a(G, y, U)),
          L === null ? ($ = G) : (L.sibling = G),
          (L = G));
    return (
      e &&
        A.forEach(function (J) {
          return t(C, J);
        }),
      gt && _a(C, U),
      $
    );
  }
  function O(C, y, S, k) {
    var $ = Ju(S);
    if (typeof $ != "function") throw Error(Z(150));
    if (((S = $.call(S)), S == null)) throw Error(Z(151));
    for (
      var L = ($ = null), A = y, U = (y = 0), G = null, D = S.next();
      A !== null && !D.done;
      U++, D = S.next()
    ) {
      A.index > U ? ((G = A), (A = null)) : (G = A.sibling);
      var J = g(C, A, D.value, k);
      if (J === null) {
        A === null && (A = G);
        break;
      }
      e && A && J.alternate === null && t(C, A),
        (y = a(J, y, U)),
        L === null ? ($ = J) : (L.sibling = J),
        (L = J),
        (A = G);
    }
    if (D.done) return n(C, A), gt && _a(C, U), $;
    if (A === null) {
      for (; !D.done; U++, D = S.next())
        (D = v(C, D.value, k)),
          D !== null &&
            ((y = a(D, y, U)), L === null ? ($ = D) : (L.sibling = D), (L = D));
      return gt && _a(C, U), $;
    }
    for (A = r(C, A); !D.done; U++, D = S.next())
      (D = b(A, C, U, D.value, k)),
        D !== null &&
          (e && D.alternate !== null && A.delete(D.key === null ? U : D.key),
          (y = a(D, y, U)),
          L === null ? ($ = D) : (L.sibling = D),
          (L = D));
    return (
      e &&
        A.forEach(function (le) {
          return t(C, le);
        }),
      gt && _a(C, U),
      $
    );
  }
  function T(C, y, S, k) {
    if (
      (typeof S == "object" &&
        S !== null &&
        S.type === Ll &&
        S.key === null &&
        (S = S.props.children),
      typeof S == "object" && S !== null)
    ) {
      switch (S.$$typeof) {
        case pf:
          e: {
            for (var $ = S.key, L = y; L !== null; ) {
              if (L.key === $) {
                if ((($ = S.type), $ === Ll)) {
                  if (L.tag === 7) {
                    n(C, L.sibling),
                      (y = i(L, S.props.children)),
                      (y.return = C),
                      (C = y);
                    break e;
                  }
                } else if (
                  L.elementType === $ ||
                  (typeof $ == "object" &&
                    $ !== null &&
                    $.$$typeof === To &&
                    aS($) === L.type)
                ) {
                  n(C, L.sibling),
                    (y = i(L, S.props)),
                    (y.ref = is(C, L, S)),
                    (y.return = C),
                    (C = y);
                  break e;
                }
                n(C, L);
                break;
              } else t(C, L);
              L = L.sibling;
            }
            S.type === Ll
              ? ((y = za(S.props.children, C.mode, k, S.key)),
                (y.return = C),
                (C = y))
              : ((k = sd(S.type, S.key, S.props, null, C.mode, k)),
                (k.ref = is(C, y, S)),
                (k.return = C),
                (C = k));
          }
          return u(C);
        case Ml:
          e: {
            for (L = S.key; y !== null; ) {
              if (y.key === L)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === S.containerInfo &&
                  y.stateNode.implementation === S.implementation
                ) {
                  n(C, y.sibling),
                    (y = i(y, S.children || [])),
                    (y.return = C),
                    (C = y);
                  break e;
                } else {
                  n(C, y);
                  break;
                }
              else t(C, y);
              y = y.sibling;
            }
            (y = qv(S, C.mode, k)), (y.return = C), (C = y);
          }
          return u(C);
        case To:
          return (L = S._init), T(C, y, L(S._payload), k);
      }
      if (cs(S)) return E(C, y, S, k);
      if (Ju(S)) return O(C, y, S, k);
      _f(C, S);
    }
    return (typeof S == "string" && S !== "") || typeof S == "number"
      ? ((S = "" + S),
        y !== null && y.tag === 6
          ? (n(C, y.sibling), (y = i(y, S)), (y.return = C), (C = y))
          : (n(C, y), (y = Qv(S, C.mode, k)), (y.return = C), (C = y)),
        u(C))
      : n(C, y);
  }
  return T;
}
var du = YC(!0),
  XC = YC(!1),
  pc = {},
  mi = oa(pc),
  Bs = oa(pc),
  Ws = oa(pc);
function Ra(e) {
  if (e === pc) throw Error(Z(174));
  return e;
}
function q0(e, t) {
  switch ((it(Ws, t), it(Bs, e), it(mi, pc), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Um(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Um(t, e));
  }
  st(mi), it(mi, t);
}
function pu() {
  st(mi), st(Bs), st(Ws);
}
function QC(e) {
  Ra(Ws.current);
  var t = Ra(mi.current),
    n = Um(t, e.type);
  t !== n && (it(Bs, e), it(mi, n));
}
function Z0(e) {
  Bs.current === e && (st(mi), st(Bs));
}
var Ct = oa(0);
function Md(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Uv = [];
function J0() {
  for (var e = 0; e < Uv.length; e++)
    Uv[e]._workInProgressVersionPrimary = null;
  Uv.length = 0;
}
var id = oo.ReactCurrentDispatcher,
  Vv = oo.ReactCurrentBatchConfig,
  Ha = 0,
  _t = null,
  Ht = null,
  Zt = null,
  Ld = !1,
  Ss = !1,
  Hs = 0,
  v$ = 0;
function mn() {
  throw Error(Z(321));
}
function ey(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Qr(e[n], t[n])) return !1;
  return !0;
}
function ty(e, t, n, r, i, a) {
  if (
    ((Ha = a),
    (_t = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (id.current = e === null || e.memoizedState === null ? b$ : w$),
    (e = n(r, i)),
    Ss)
  ) {
    a = 0;
    do {
      if (((Ss = !1), (Hs = 0), 25 <= a)) throw Error(Z(301));
      (a += 1),
        (Zt = Ht = null),
        (t.updateQueue = null),
        (id.current = S$),
        (e = n(r, i));
    } while (Ss);
  }
  if (
    ((id.current = Nd),
    (t = Ht !== null && Ht.next !== null),
    (Ha = 0),
    (Zt = Ht = _t = null),
    (Ld = !1),
    t)
  )
    throw Error(Z(300));
  return e;
}
function ny() {
  var e = Hs !== 0;
  return (Hs = 0), e;
}
function fi() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Zt === null ? (_t.memoizedState = Zt = e) : (Zt = Zt.next = e), Zt;
}
function kr() {
  if (Ht === null) {
    var e = _t.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ht.next;
  var t = Zt === null ? _t.memoizedState : Zt.next;
  if (t !== null) (Zt = t), (Ht = e);
  else {
    if (e === null) throw Error(Z(310));
    (Ht = e),
      (e = {
        memoizedState: Ht.memoizedState,
        baseState: Ht.baseState,
        baseQueue: Ht.baseQueue,
        queue: Ht.queue,
        next: null,
      }),
      Zt === null ? (_t.memoizedState = Zt = e) : (Zt = Zt.next = e);
  }
  return Zt;
}
function Us(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Gv(e) {
  var t = kr(),
    n = t.queue;
  if (n === null) throw Error(Z(311));
  n.lastRenderedReducer = e;
  var r = Ht,
    i = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var u = i.next;
      (i.next = a.next), (a.next = u);
    }
    (r.baseQueue = i = a), (n.pending = null);
  }
  if (i !== null) {
    (a = i.next), (r = r.baseState);
    var c = (u = null),
      f = null,
      d = a;
    do {
      var h = d.lane;
      if ((Ha & h) === h)
        f !== null &&
          (f = f.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var v = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        f === null ? ((c = f = v), (u = r)) : (f = f.next = v),
          (_t.lanes |= h),
          (Ua |= h);
      }
      d = d.next;
    } while (d !== null && d !== a);
    f === null ? (u = r) : (f.next = c),
      Qr(r, t.memoizedState) || (Ln = !0),
      (t.memoizedState = r),
      (t.baseState = u),
      (t.baseQueue = f),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (_t.lanes |= a), (Ua |= a), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Kv(e) {
  var t = kr(),
    n = t.queue;
  if (n === null) throw Error(Z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var u = (i = i.next);
    do (a = e(a, u.action)), (u = u.next);
    while (u !== i);
    Qr(a, t.memoizedState) || (Ln = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function qC() {}
function ZC(e, t) {
  var n = _t,
    r = kr(),
    i = t(),
    a = !Qr(r.memoizedState, i);
  if (
    (a && ((r.memoizedState = i), (Ln = !0)),
    (r = r.queue),
    ry(t_.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (Zt !== null && Zt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Vs(9, e_.bind(null, n, r, i, t), void 0, null),
      Jt === null)
    )
      throw Error(Z(349));
    Ha & 30 || JC(n, t, i);
  }
  return i;
}
function JC(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = _t.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (_t.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function e_(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), n_(t) && r_(e);
}
function t_(e, t, n) {
  return n(function () {
    n_(t) && r_(e);
  });
}
function n_(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qr(e, n);
  } catch {
    return !0;
  }
}
function r_(e) {
  var t = qi(e, 1);
  t !== null && Yr(t, e, 1, -1);
}
function lS(e) {
  var t = fi();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Us,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = y$.bind(null, _t, e)),
    [t.memoizedState, e]
  );
}
function Vs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = _t.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (_t.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function i_() {
  return kr().memoizedState;
}
function od(e, t, n, r) {
  var i = fi();
  (_t.flags |= e),
    (i.memoizedState = Vs(1 | t, n, void 0, r === void 0 ? null : r));
}
function yp(e, t, n, r) {
  var i = kr();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Ht !== null) {
    var u = Ht.memoizedState;
    if (((a = u.destroy), r !== null && ey(r, u.deps))) {
      i.memoizedState = Vs(t, n, a, r);
      return;
    }
  }
  (_t.flags |= e), (i.memoizedState = Vs(1 | t, n, a, r));
}
function uS(e, t) {
  return od(8390656, 8, e, t);
}
function ry(e, t) {
  return yp(2048, 8, e, t);
}
function o_(e, t) {
  return yp(4, 2, e, t);
}
function a_(e, t) {
  return yp(4, 4, e, t);
}
function l_(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function u_(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), yp(4, 4, l_.bind(null, t, e), n)
  );
}
function iy() {}
function s_(e, t) {
  var n = kr();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ey(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function c_(e, t) {
  var n = kr();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ey(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function f_(e, t, n) {
  return Ha & 21
    ? (Qr(n, t) || ((n = hC()), (_t.lanes |= n), (Ua |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ln = !0)), (e.memoizedState = n));
}
function m$(e, t) {
  var n = Xe;
  (Xe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Vv.transition;
  Vv.transition = {};
  try {
    e(!1), t();
  } finally {
    (Xe = n), (Vv.transition = r);
  }
}
function d_() {
  return kr().memoizedState;
}
function g$(e, t, n) {
  var r = Vo(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    p_(e))
  )
    h_(t, n);
  else if (((n = UC(e, t, n, r)), n !== null)) {
    var i = kn();
    Yr(n, e, r, i), v_(n, t, r);
  }
}
function y$(e, t, n) {
  var r = Vo(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (p_(e)) h_(t, i);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var u = t.lastRenderedState,
          c = a(u, n);
        if (((i.hasEagerState = !0), (i.eagerState = c), Qr(c, u))) {
          var f = t.interleaved;
          f === null
            ? ((i.next = i), X0(t))
            : ((i.next = f.next), (f.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = UC(e, t, i, r)),
      n !== null && ((i = kn()), Yr(n, e, r, i), v_(n, t, r));
  }
}
function p_(e) {
  var t = e.alternate;
  return e === _t || (t !== null && t === _t);
}
function h_(e, t) {
  Ss = Ld = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function v_(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), L0(e, n);
  }
}
var Nd = {
    readContext: Or,
    useCallback: mn,
    useContext: mn,
    useEffect: mn,
    useImperativeHandle: mn,
    useInsertionEffect: mn,
    useLayoutEffect: mn,
    useMemo: mn,
    useReducer: mn,
    useRef: mn,
    useState: mn,
    useDebugValue: mn,
    useDeferredValue: mn,
    useTransition: mn,
    useMutableSource: mn,
    useSyncExternalStore: mn,
    useId: mn,
    unstable_isNewReconciler: !1,
  },
  b$ = {
    readContext: Or,
    useCallback: function (e, t) {
      return (fi().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Or,
    useEffect: uS,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        od(4194308, 4, l_.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return od(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return od(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = fi();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = fi();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = g$.bind(null, _t, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = fi();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: lS,
    useDebugValue: iy,
    useDeferredValue: function (e) {
      return (fi().memoizedState = e);
    },
    useTransition: function () {
      var e = lS(!1),
        t = e[0];
      return (e = m$.bind(null, e[1])), (fi().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = _t,
        i = fi();
      if (gt) {
        if (n === void 0) throw Error(Z(407));
        n = n();
      } else {
        if (((n = t()), Jt === null)) throw Error(Z(349));
        Ha & 30 || JC(r, t, n);
      }
      i.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (i.queue = a),
        uS(t_.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        Vs(9, e_.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = fi(),
        t = Jt.identifierPrefix;
      if (gt) {
        var n = Ki,
          r = Gi;
        (n = (r & ~(1 << (32 - Kr(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Hs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = v$++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  w$ = {
    readContext: Or,
    useCallback: s_,
    useContext: Or,
    useEffect: ry,
    useImperativeHandle: u_,
    useInsertionEffect: o_,
    useLayoutEffect: a_,
    useMemo: c_,
    useReducer: Gv,
    useRef: i_,
    useState: function () {
      return Gv(Us);
    },
    useDebugValue: iy,
    useDeferredValue: function (e) {
      var t = kr();
      return f_(t, Ht.memoizedState, e);
    },
    useTransition: function () {
      var e = Gv(Us)[0],
        t = kr().memoizedState;
      return [e, t];
    },
    useMutableSource: qC,
    useSyncExternalStore: ZC,
    useId: d_,
    unstable_isNewReconciler: !1,
  },
  S$ = {
    readContext: Or,
    useCallback: s_,
    useContext: Or,
    useEffect: ry,
    useImperativeHandle: u_,
    useInsertionEffect: o_,
    useLayoutEffect: a_,
    useMemo: c_,
    useReducer: Kv,
    useRef: i_,
    useState: function () {
      return Kv(Us);
    },
    useDebugValue: iy,
    useDeferredValue: function (e) {
      var t = kr();
      return Ht === null ? (t.memoizedState = e) : f_(t, Ht.memoizedState, e);
    },
    useTransition: function () {
      var e = Kv(Us)[0],
        t = kr().memoizedState;
      return [e, t];
    },
    useMutableSource: qC,
    useSyncExternalStore: ZC,
    useId: d_,
    unstable_isNewReconciler: !1,
  };
function hu(e, t) {
  try {
    var n = "",
      r = t;
    do (n += X5(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Yv(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function pg(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var x$ = typeof WeakMap == "function" ? WeakMap : Map;
function m_(e, t, n) {
  (n = Yi(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      jd || ((jd = !0), (Cg = r)), pg(e, t);
    }),
    n
  );
}
function g_(e, t, n) {
  (n = Yi(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        pg(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (n.callback = function () {
        pg(e, t),
          typeof r != "function" &&
            (Uo === null ? (Uo = new Set([this])) : Uo.add(this));
        var u = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: u !== null ? u : "",
        });
      }),
    n
  );
}
function sS(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new x$();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = N$.bind(null, e, t, n)), t.then(e, e));
}
function cS(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function fS(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Yi(-1, 1)), (t.tag = 2), Ho(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var C$ = oo.ReactCurrentOwner,
  Ln = !1;
function En(e, t, n, r) {
  t.child = e === null ? XC(t, null, n, r) : du(t, e.child, n, r);
}
function dS(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return (
    ru(t, i),
    (r = ty(e, t, n, r, a, i)),
    (n = ny()),
    e !== null && !Ln
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Zi(e, t, i))
      : (gt && n && H0(t), (t.flags |= 1), En(e, t, r, i), t.child)
  );
}
function pS(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !dy(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), y_(e, t, a, r, i))
      : ((e = sd(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var u = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : zs), n(u, r) && e.ref === t.ref)
    )
      return Zi(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Go(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function y_(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (zs(a, r) && e.ref === t.ref)
      if (((Ln = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ln = !0);
      else return (t.lanes = e.lanes), Zi(e, t, i);
  }
  return hg(e, t, n, r, i);
}
function b_(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        it(Vl, qn),
        (qn |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          it(Vl, qn),
          (qn |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        it(Vl, qn),
        (qn |= r);
    }
  else
    a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      it(Vl, qn),
      (qn |= r);
  return En(e, t, i, n), t.child;
}
function w_(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function hg(e, t, n, r, i) {
  var a = zn(n) ? Ba : wn.current;
  return (
    (a = cu(t, a)),
    ru(t, i),
    (n = ty(e, t, n, r, a, i)),
    (r = ny()),
    e !== null && !Ln
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Zi(e, t, i))
      : (gt && r && H0(t), (t.flags |= 1), En(e, t, n, i), t.child)
  );
}
function hS(e, t, n, r, i) {
  if (zn(n)) {
    var a = !0;
    Pd(t);
  } else a = !1;
  if ((ru(t, i), t.stateNode === null))
    ad(e, t), KC(t, n, r), dg(t, n, r, i), (r = !0);
  else if (e === null) {
    var u = t.stateNode,
      c = t.memoizedProps;
    u.props = c;
    var f = u.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Or(d))
      : ((d = zn(n) ? Ba : wn.current), (d = cu(t, d)));
    var h = n.getDerivedStateFromProps,
      v =
        typeof h == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((c !== r || f !== d) && oS(t, u, r, d)),
      (Ao = !1);
    var g = t.memoizedState;
    (u.state = g),
      $d(t, r, u, i),
      (f = t.memoizedState),
      c !== r || g !== f || Nn.current || Ao
        ? (typeof h == "function" && (fg(t, n, h, r), (f = t.memoizedState)),
          (c = Ao || iS(t, n, c, r, g, f, d))
            ? (v ||
                (typeof u.UNSAFE_componentWillMount != "function" &&
                  typeof u.componentWillMount != "function") ||
                (typeof u.componentWillMount == "function" &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == "function" &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = f)),
          (u.props = r),
          (u.state = f),
          (u.context = d),
          (r = c))
        : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (u = t.stateNode),
      VC(e, t),
      (c = t.memoizedProps),
      (d = t.type === t.elementType ? c : Br(t.type, c)),
      (u.props = d),
      (v = t.pendingProps),
      (g = u.context),
      (f = n.contextType),
      typeof f == "object" && f !== null
        ? (f = Or(f))
        : ((f = zn(n) ? Ba : wn.current), (f = cu(t, f)));
    var b = n.getDerivedStateFromProps;
    (h =
      typeof b == "function" ||
      typeof u.getSnapshotBeforeUpdate == "function") ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((c !== v || g !== f) && oS(t, u, r, f)),
      (Ao = !1),
      (g = t.memoizedState),
      (u.state = g),
      $d(t, r, u, i);
    var E = t.memoizedState;
    c !== v || g !== E || Nn.current || Ao
      ? (typeof b == "function" && (fg(t, n, b, r), (E = t.memoizedState)),
        (d = Ao || iS(t, n, d, r, g, E, f) || !1)
          ? (h ||
              (typeof u.UNSAFE_componentWillUpdate != "function" &&
                typeof u.componentWillUpdate != "function") ||
              (typeof u.componentWillUpdate == "function" &&
                u.componentWillUpdate(r, E, f),
              typeof u.UNSAFE_componentWillUpdate == "function" &&
                u.UNSAFE_componentWillUpdate(r, E, f)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof u.componentDidUpdate != "function" ||
              (c === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" ||
              (c === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = E)),
        (u.props = r),
        (u.state = E),
        (u.context = f),
        (r = d))
      : (typeof u.componentDidUpdate != "function" ||
          (c === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != "function" ||
          (c === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return vg(e, t, n, r, a, i);
}
function vg(e, t, n, r, i, a) {
  w_(e, t);
  var u = (t.flags & 128) !== 0;
  if (!r && !u) return i && Jw(t, n, !1), Zi(e, t, a);
  (r = t.stateNode), (C$.current = t);
  var c =
    u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && u
      ? ((t.child = du(t, e.child, null, a)), (t.child = du(t, null, c, a)))
      : En(e, t, c, a),
    (t.memoizedState = r.state),
    i && Jw(t, n, !0),
    t.child
  );
}
function S_(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Zw(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Zw(e, t.context, !1),
    q0(e, t.containerInfo);
}
function vS(e, t, n, r, i) {
  return fu(), V0(i), (t.flags |= 256), En(e, t, n, r), t.child;
}
var mg = { dehydrated: null, treeContext: null, retryLane: 0 };
function gg(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function x_(e, t, n) {
  var r = t.pendingProps,
    i = Ct.current,
    a = !1,
    u = (t.flags & 128) !== 0,
    c;
  if (
    ((c = u) ||
      (c = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    c
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    it(Ct, i & 1),
    e === null)
  )
    return (
      sg(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((u = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (u = { mode: "hidden", children: u }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = u))
                : (a = Sp(u, r, 0, null)),
              (e = za(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = gg(n)),
              (t.memoizedState = mg),
              e)
            : oy(t, u))
    );
  if (((i = e.memoizedState), i !== null && ((c = i.dehydrated), c !== null)))
    return _$(e, t, u, r, c, i, n);
  if (a) {
    (a = r.fallback), (u = t.mode), (i = e.child), (c = i.sibling);
    var f = { mode: "hidden", children: r.children };
    return (
      !(u & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = f),
          (t.deletions = null))
        : ((r = Go(i, f)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      c !== null ? (a = Go(c, a)) : ((a = za(a, u, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? gg(n)
          : {
              baseLanes: u.baseLanes | n,
              cachePool: null,
              transitions: u.transitions,
            }),
      (a.memoizedState = u),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = mg),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = Go(a, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function oy(e, t) {
  return (
    (t = Sp({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ef(e, t, n, r) {
  return (
    r !== null && V0(r),
    du(t, e.child, null, n),
    (e = oy(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function _$(e, t, n, r, i, a, u) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Yv(Error(Z(422)))), Ef(e, t, u, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (i = t.mode),
        (r = Sp({ mode: "visible", children: r.children }, i, 0, null)),
        (a = za(a, i, u, null)),
        (a.flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        t.mode & 1 && du(t, e.child, null, u),
        (t.child.memoizedState = gg(u)),
        (t.memoizedState = mg),
        a);
  if (!(t.mode & 1)) return Ef(e, t, u, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var c = r.dgst;
    return (r = c), (a = Error(Z(419))), (r = Yv(a, r, void 0)), Ef(e, t, u, r);
  }
  if (((c = (u & e.childLanes) !== 0), Ln || c)) {
    if (((r = Jt), r !== null)) {
      switch (u & -u) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | u) ? 0 : i),
        i !== 0 &&
          i !== a.retryLane &&
          ((a.retryLane = i), qi(e, i), Yr(r, e, i, -1));
    }
    return fy(), (r = Yv(Error(Z(421)))), Ef(e, t, u, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = z$.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Jn = Wo(i.nextSibling)),
      (tr = t),
      (gt = !0),
      (Ur = null),
      e !== null &&
        ((xr[Cr++] = Gi),
        (xr[Cr++] = Ki),
        (xr[Cr++] = Wa),
        (Gi = e.id),
        (Ki = e.overflow),
        (Wa = t)),
      (t = oy(t, r.children)),
      (t.flags |= 4096),
      t);
}
function mS(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), cg(e.return, t, n);
}
function Xv(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = i));
}
function C_(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail;
  if ((En(e, t, r.children, n), (r = Ct.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && mS(e, n, t);
        else if (e.tag === 19) mS(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((it(Ct, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Md(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Xv(t, !1, i, n, a);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Md(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Xv(t, !0, n, null, a);
        break;
      case "together":
        Xv(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ad(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Zi(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ua |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(Z(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Go(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Go(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function E$(e, t, n) {
  switch (t.tag) {
    case 3:
      S_(t), fu();
      break;
    case 5:
      QC(t);
      break;
    case 1:
      zn(t.type) && Pd(t);
      break;
    case 4:
      q0(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      it(Rd, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (it(Ct, Ct.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? x_(e, t, n)
          : (it(Ct, Ct.current & 1),
            (e = Zi(e, t, n)),
            e !== null ? e.sibling : null);
      it(Ct, Ct.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return C_(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        it(Ct, Ct.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), b_(e, t, n);
  }
  return Zi(e, t, n);
}
var __, yg, E_, O_;
__ = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
yg = function () {};
E_ = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Ra(mi.current);
    var a = null;
    switch (n) {
      case "input":
        (i = Fm(e, i)), (r = Fm(e, r)), (a = []);
        break;
      case "select":
        (i = Et({}, i, { value: void 0 })),
          (r = Et({}, r, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (i = Hm(e, i)), (r = Hm(e, r)), (a = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Od);
    }
    Vm(n, r);
    var u;
    n = null;
    for (d in i)
      if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && i[d] != null)
        if (d === "style") {
          var c = i[d];
          for (u in c) c.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (As.hasOwnProperty(d)
              ? a || (a = [])
              : (a = a || []).push(d, null));
    for (d in r) {
      var f = r[d];
      if (
        ((c = i != null ? i[d] : void 0),
        r.hasOwnProperty(d) && f !== c && (f != null || c != null))
      )
        if (d === "style")
          if (c) {
            for (u in c)
              !c.hasOwnProperty(u) ||
                (f && f.hasOwnProperty(u)) ||
                (n || (n = {}), (n[u] = ""));
            for (u in f)
              f.hasOwnProperty(u) &&
                c[u] !== f[u] &&
                (n || (n = {}), (n[u] = f[u]));
          } else n || (a || (a = []), a.push(d, n)), (n = f);
        else
          d === "dangerouslySetInnerHTML"
            ? ((f = f ? f.__html : void 0),
              (c = c ? c.__html : void 0),
              f != null && c !== f && (a = a || []).push(d, f))
            : d === "children"
            ? (typeof f != "string" && typeof f != "number") ||
              (a = a || []).push(d, "" + f)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (As.hasOwnProperty(d)
                ? (f != null && d === "onScroll" && lt("scroll", e),
                  a || c === f || (a = []))
                : (a = a || []).push(d, f));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
O_ = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function os(e, t) {
  if (!gt)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function gn(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function O$(e, t, n) {
  var r = t.pendingProps;
  switch ((U0(t), t.tag)) {
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
      return gn(t), null;
    case 1:
      return zn(t.type) && kd(), gn(t), null;
    case 3:
      return (
        (r = t.stateNode),
        pu(),
        st(Nn),
        st(wn),
        J0(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Cf(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ur !== null && (Og(Ur), (Ur = null)))),
        yg(e, t),
        gn(t),
        null
      );
    case 5:
      Z0(t);
      var i = Ra(Ws.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        E_(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(Z(166));
          return gn(t), null;
        }
        if (((e = Ra(mi.current)), Cf(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[pi] = t), (r[Fs] = a), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              lt("cancel", r), lt("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              lt("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ds.length; i++) lt(ds[i], r);
              break;
            case "source":
              lt("error", r);
              break;
            case "img":
            case "image":
            case "link":
              lt("error", r), lt("load", r);
              break;
            case "details":
              lt("toggle", r);
              break;
            case "input":
              Ew(r, a), lt("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!a.multiple }),
                lt("invalid", r);
              break;
            case "textarea":
              kw(r, a), lt("invalid", r);
          }
          Vm(n, a), (i = null);
          for (var u in a)
            if (a.hasOwnProperty(u)) {
              var c = a[u];
              u === "children"
                ? typeof c == "string"
                  ? r.textContent !== c &&
                    (a.suppressHydrationWarning !== !0 &&
                      xf(r.textContent, c, e),
                    (i = ["children", c]))
                  : typeof c == "number" &&
                    r.textContent !== "" + c &&
                    (a.suppressHydrationWarning !== !0 &&
                      xf(r.textContent, c, e),
                    (i = ["children", "" + c]))
                : As.hasOwnProperty(u) &&
                  c != null &&
                  u === "onScroll" &&
                  lt("scroll", r);
            }
          switch (n) {
            case "input":
              hf(r), Ow(r, a, !0);
              break;
            case "textarea":
              hf(r), Pw(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Od);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (u = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = J2(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = u.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = u.createElement(n, { is: r.is }))
                : ((e = u.createElement(n)),
                  n === "select" &&
                    ((u = e),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, n)),
            (e[pi] = t),
            (e[Fs] = r),
            __(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((u = Gm(n, r)), n)) {
              case "dialog":
                lt("cancel", e), lt("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                lt("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ds.length; i++) lt(ds[i], e);
                i = r;
                break;
              case "source":
                lt("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                lt("error", e), lt("load", e), (i = r);
                break;
              case "details":
                lt("toggle", e), (i = r);
                break;
              case "input":
                Ew(e, r), (i = Fm(e, r)), lt("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Et({}, r, { value: void 0 })),
                  lt("invalid", e);
                break;
              case "textarea":
                kw(e, r), (i = Hm(e, r)), lt("invalid", e);
                break;
              default:
                i = r;
            }
            Vm(n, i), (c = i);
            for (a in c)
              if (c.hasOwnProperty(a)) {
                var f = c[a];
                a === "style"
                  ? nC(e, f)
                  : a === "dangerouslySetInnerHTML"
                  ? ((f = f ? f.__html : void 0), f != null && eC(e, f))
                  : a === "children"
                  ? typeof f == "string"
                    ? (n !== "textarea" || f !== "") && Rs(e, f)
                    : typeof f == "number" && Rs(e, "" + f)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (As.hasOwnProperty(a)
                      ? f != null && a === "onScroll" && lt("scroll", e)
                      : f != null && T0(e, a, f, u));
              }
            switch (n) {
              case "input":
                hf(e), Ow(e, r, !1);
                break;
              case "textarea":
                hf(e), Pw(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Qo(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? Jl(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      Jl(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Od);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return gn(t), null;
    case 6:
      if (e && t.stateNode != null) O_(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(Z(166));
        if (((n = Ra(Ws.current)), Ra(mi.current), Cf(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pi] = t),
            (a = r.nodeValue !== n) && ((e = tr), e !== null))
          )
            switch (e.tag) {
              case 3:
                xf(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  xf(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pi] = t),
            (t.stateNode = r);
      }
      return gn(t), null;
    case 13:
      if (
        (st(Ct),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (gt && Jn !== null && t.mode & 1 && !(t.flags & 128))
          HC(), fu(), (t.flags |= 98560), (a = !1);
        else if (((a = Cf(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(Z(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(Z(317));
            a[pi] = t;
          } else
            fu(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          gn(t), (a = !1);
        } else Ur !== null && (Og(Ur), (Ur = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ct.current & 1 ? Ut === 0 && (Ut = 3) : fy())),
          t.updateQueue !== null && (t.flags |= 4),
          gn(t),
          null);
    case 4:
      return (
        pu(), yg(e, t), e === null && js(t.stateNode.containerInfo), gn(t), null
      );
    case 10:
      return Y0(t.type._context), gn(t), null;
    case 17:
      return zn(t.type) && kd(), gn(t), null;
    case 19:
      if ((st(Ct), (a = t.memoizedState), a === null)) return gn(t), null;
      if (((r = (t.flags & 128) !== 0), (u = a.rendering), u === null))
        if (r) os(a, !1);
        else {
          if (Ut !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((u = Md(e)), u !== null)) {
                for (
                  t.flags |= 128,
                    os(a, !1),
                    r = u.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (u = a.alternate),
                    u === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = u.childLanes),
                        (a.lanes = u.lanes),
                        (a.child = u.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = u.memoizedProps),
                        (a.memoizedState = u.memoizedState),
                        (a.updateQueue = u.updateQueue),
                        (a.type = u.type),
                        (e = u.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return it(Ct, (Ct.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            Mt() > vu &&
            ((t.flags |= 128), (r = !0), os(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Md(u)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              os(a, !0),
              a.tail === null && a.tailMode === "hidden" && !u.alternate && !gt)
            )
              return gn(t), null;
          } else
            2 * Mt() - a.renderingStartTime > vu &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), os(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((u.sibling = t.child), (t.child = u))
          : ((n = a.last),
            n !== null ? (n.sibling = u) : (t.child = u),
            (a.last = u));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = Mt()),
          (t.sibling = null),
          (n = Ct.current),
          it(Ct, r ? (n & 1) | 2 : n & 1),
          t)
        : (gn(t), null);
    case 22:
    case 23:
      return (
        cy(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? qn & 1073741824 && (gn(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : gn(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(Z(156, t.tag));
}
function k$(e, t) {
  switch ((U0(t), t.tag)) {
    case 1:
      return (
        zn(t.type) && kd(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        pu(),
        st(Nn),
        st(wn),
        J0(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Z0(t), null;
    case 13:
      if (
        (st(Ct), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(Z(340));
        fu();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return st(Ct), null;
    case 4:
      return pu(), null;
    case 10:
      return Y0(t.type._context), null;
    case 22:
    case 23:
      return cy(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Of = !1,
  bn = !1,
  P$ = typeof WeakSet == "function" ? WeakSet : Set,
  oe = null;
function Ul(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Pt(e, t, r);
      }
    else n.current = null;
}
function bg(e, t, n) {
  try {
    n();
  } catch (r) {
    Pt(e, t, r);
  }
}
var gS = !1;
function T$(e, t) {
  if (((ng = Cd), (e = AC()), W0(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0,
            c = -1,
            f = -1,
            d = 0,
            h = 0,
            v = e,
            g = null;
          t: for (;;) {
            for (
              var b;
              v !== n || (i !== 0 && v.nodeType !== 3) || (c = u + i),
                v !== a || (r !== 0 && v.nodeType !== 3) || (f = u + r),
                v.nodeType === 3 && (u += v.nodeValue.length),
                (b = v.firstChild) !== null;

            )
              (g = v), (v = b);
            for (;;) {
              if (v === e) break t;
              if (
                (g === n && ++d === i && (c = u),
                g === a && ++h === r && (f = u),
                (b = v.nextSibling) !== null)
              )
                break;
              (v = g), (g = v.parentNode);
            }
            v = b;
          }
          n = c === -1 || f === -1 ? null : { start: c, end: f };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    rg = { focusedElem: e, selectionRange: n }, Cd = !1, oe = t;
    oe !== null;

  )
    if (((t = oe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (oe = e);
    else
      for (; oe !== null; ) {
        t = oe;
        try {
          var E = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (E !== null) {
                  var O = E.memoizedProps,
                    T = E.memoizedState,
                    C = t.stateNode,
                    y = C.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? O : Br(t.type, O),
                      T
                    );
                  C.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var S = t.stateNode.containerInfo;
                S.nodeType === 1
                  ? (S.textContent = "")
                  : S.nodeType === 9 &&
                    S.documentElement &&
                    S.removeChild(S.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(Z(163));
            }
        } catch (k) {
          Pt(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (oe = e);
          break;
        }
        oe = t.return;
      }
  return (E = gS), (gS = !1), E;
}
function xs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && bg(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function bp(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function wg(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function k_(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), k_(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[pi], delete t[Fs], delete t[ag], delete t[f$], delete t[d$])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function P_(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function yS(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || P_(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Sg(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Od));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Sg(e, t, n), e = e.sibling; e !== null; ) Sg(e, t, n), (e = e.sibling);
}
function xg(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xg(e, t, n), e = e.sibling; e !== null; ) xg(e, t, n), (e = e.sibling);
}
var an = null,
  Wr = !1;
function Oo(e, t, n) {
  for (n = n.child; n !== null; ) T_(e, t, n), (n = n.sibling);
}
function T_(e, t, n) {
  if (vi && typeof vi.onCommitFiberUnmount == "function")
    try {
      vi.onCommitFiberUnmount(fp, n);
    } catch {}
  switch (n.tag) {
    case 5:
      bn || Ul(n, t);
    case 6:
      var r = an,
        i = Wr;
      (an = null),
        Oo(e, t, n),
        (an = r),
        (Wr = i),
        an !== null &&
          (Wr
            ? ((e = an),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : an.removeChild(n.stateNode));
      break;
    case 18:
      an !== null &&
        (Wr
          ? ((e = an),
            (n = n.stateNode),
            e.nodeType === 8
              ? Wv(e.parentNode, n)
              : e.nodeType === 1 && Wv(e, n),
            Ls(e))
          : Wv(an, n.stateNode));
      break;
    case 4:
      (r = an),
        (i = Wr),
        (an = n.stateNode.containerInfo),
        (Wr = !0),
        Oo(e, t, n),
        (an = r),
        (Wr = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !bn &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var a = i,
            u = a.destroy;
          (a = a.tag),
            u !== void 0 && (a & 2 || a & 4) && bg(n, t, u),
            (i = i.next);
        } while (i !== r);
      }
      Oo(e, t, n);
      break;
    case 1:
      if (
        !bn &&
        (Ul(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (c) {
          Pt(n, t, c);
        }
      Oo(e, t, n);
      break;
    case 21:
      Oo(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((bn = (r = bn) || n.memoizedState !== null), Oo(e, t, n), (bn = r))
        : Oo(e, t, n);
      break;
    default:
      Oo(e, t, n);
  }
}
function bS(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new P$()),
      t.forEach(function (r) {
        var i = j$.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Dr(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var a = e,
          u = t,
          c = u;
        e: for (; c !== null; ) {
          switch (c.tag) {
            case 5:
              (an = c.stateNode), (Wr = !1);
              break e;
            case 3:
              (an = c.stateNode.containerInfo), (Wr = !0);
              break e;
            case 4:
              (an = c.stateNode.containerInfo), (Wr = !0);
              break e;
          }
          c = c.return;
        }
        if (an === null) throw Error(Z(160));
        T_(a, u, i), (an = null), (Wr = !1);
        var f = i.alternate;
        f !== null && (f.return = null), (i.return = null);
      } catch (d) {
        Pt(i, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) A_(t, e), (t = t.sibling);
}
function A_(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Dr(t, e), ci(e), r & 4)) {
        try {
          xs(3, e, e.return), bp(3, e);
        } catch (O) {
          Pt(e, e.return, O);
        }
        try {
          xs(5, e, e.return);
        } catch (O) {
          Pt(e, e.return, O);
        }
      }
      break;
    case 1:
      Dr(t, e), ci(e), r & 512 && n !== null && Ul(n, n.return);
      break;
    case 5:
      if (
        (Dr(t, e),
        ci(e),
        r & 512 && n !== null && Ul(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Rs(i, "");
        } catch (O) {
          Pt(e, e.return, O);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          u = n !== null ? n.memoizedProps : a,
          c = e.type,
          f = e.updateQueue;
        if (((e.updateQueue = null), f !== null))
          try {
            c === "input" && a.type === "radio" && a.name != null && q2(i, a),
              Gm(c, u);
            var d = Gm(c, a);
            for (u = 0; u < f.length; u += 2) {
              var h = f[u],
                v = f[u + 1];
              h === "style"
                ? nC(i, v)
                : h === "dangerouslySetInnerHTML"
                ? eC(i, v)
                : h === "children"
                ? Rs(i, v)
                : T0(i, h, v, d);
            }
            switch (c) {
              case "input":
                Bm(i, a);
                break;
              case "textarea":
                Z2(i, a);
                break;
              case "select":
                var g = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var b = a.value;
                b != null
                  ? Jl(i, !!a.multiple, b, !1)
                  : g !== !!a.multiple &&
                    (a.defaultValue != null
                      ? Jl(i, !!a.multiple, a.defaultValue, !0)
                      : Jl(i, !!a.multiple, a.multiple ? [] : "", !1));
            }
            i[Fs] = a;
          } catch (O) {
            Pt(e, e.return, O);
          }
      }
      break;
    case 6:
      if ((Dr(t, e), ci(e), r & 4)) {
        if (e.stateNode === null) throw Error(Z(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (O) {
          Pt(e, e.return, O);
        }
      }
      break;
    case 3:
      if (
        (Dr(t, e), ci(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ls(t.containerInfo);
        } catch (O) {
          Pt(e, e.return, O);
        }
      break;
    case 4:
      Dr(t, e), ci(e);
      break;
    case 13:
      Dr(t, e),
        ci(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (uy = Mt())),
        r & 4 && bS(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((bn = (d = bn) || h), Dr(t, e), (bn = d)) : Dr(t, e),
        ci(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !h && e.mode & 1)
        )
          for (oe = e, h = e.child; h !== null; ) {
            for (v = oe = h; oe !== null; ) {
              switch (((g = oe), (b = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xs(4, g, g.return);
                  break;
                case 1:
                  Ul(g, g.return);
                  var E = g.stateNode;
                  if (typeof E.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (E.props = t.memoizedProps),
                        (E.state = t.memoizedState),
                        E.componentWillUnmount();
                    } catch (O) {
                      Pt(r, n, O);
                    }
                  }
                  break;
                case 5:
                  Ul(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    SS(v);
                    continue;
                  }
              }
              b !== null ? ((b.return = g), (oe = b)) : SS(v);
            }
            h = h.sibling;
          }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                (i = v.stateNode),
                  d
                    ? ((a = i.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((c = v.stateNode),
                      (f = v.memoizedProps.style),
                      (u =
                        f != null && f.hasOwnProperty("display")
                          ? f.display
                          : null),
                      (c.style.display = tC("display", u)));
              } catch (O) {
                Pt(e, e.return, O);
              }
            }
          } else if (v.tag === 6) {
            if (h === null)
              try {
                v.stateNode.nodeValue = d ? "" : v.memoizedProps;
              } catch (O) {
                Pt(e, e.return, O);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            h === v && (h = null), (v = v.return);
          }
          h === v && (h = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      Dr(t, e), ci(e), r & 4 && bS(e);
      break;
    case 21:
      break;
    default:
      Dr(t, e), ci(e);
  }
}
function ci(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (P_(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(Z(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Rs(i, ""), (r.flags &= -33));
          var a = yS(e);
          xg(e, a, i);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            c = yS(e);
          Sg(e, c, u);
          break;
        default:
          throw Error(Z(161));
      }
    } catch (f) {
      Pt(e, e.return, f);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function A$(e, t, n) {
  (oe = e), R_(e);
}
function R_(e, t, n) {
  for (var r = (e.mode & 1) !== 0; oe !== null; ) {
    var i = oe,
      a = i.child;
    if (i.tag === 22 && r) {
      var u = i.memoizedState !== null || Of;
      if (!u) {
        var c = i.alternate,
          f = (c !== null && c.memoizedState !== null) || bn;
        c = Of;
        var d = bn;
        if (((Of = u), (bn = f) && !d))
          for (oe = i; oe !== null; )
            (u = oe),
              (f = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? xS(i)
                : f !== null
                ? ((f.return = u), (oe = f))
                : xS(i);
        for (; a !== null; ) (oe = a), R_(a), (a = a.sibling);
        (oe = i), (Of = c), (bn = d);
      }
      wS(e);
    } else
      i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (oe = a)) : wS(e);
  }
}
function wS(e) {
  for (; oe !== null; ) {
    var t = oe;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              bn || bp(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !bn)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Br(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && rS(t, a, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                rS(t, u, n);
              }
              break;
            case 5:
              var c = t.stateNode;
              if (n === null && t.flags & 4) {
                n = c;
                var f = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    f.autoFocus && n.focus();
                    break;
                  case "img":
                    f.src && (n.src = f.src);
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
              if (t.memoizedState === null) {
                var d = t.alternate;
                if (d !== null) {
                  var h = d.memoizedState;
                  if (h !== null) {
                    var v = h.dehydrated;
                    v !== null && Ls(v);
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
              throw Error(Z(163));
          }
        bn || (t.flags & 512 && wg(t));
      } catch (g) {
        Pt(t, t.return, g);
      }
    }
    if (t === e) {
      oe = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (oe = n);
      break;
    }
    oe = t.return;
  }
}
function SS(e) {
  for (; oe !== null; ) {
    var t = oe;
    if (t === e) {
      oe = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (oe = n);
      break;
    }
    oe = t.return;
  }
}
function xS(e) {
  for (; oe !== null; ) {
    var t = oe;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            bp(4, t);
          } catch (f) {
            Pt(t, n, f);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (f) {
              Pt(t, i, f);
            }
          }
          var a = t.return;
          try {
            wg(t);
          } catch (f) {
            Pt(t, a, f);
          }
          break;
        case 5:
          var u = t.return;
          try {
            wg(t);
          } catch (f) {
            Pt(t, u, f);
          }
      }
    } catch (f) {
      Pt(t, t.return, f);
    }
    if (t === e) {
      oe = null;
      break;
    }
    var c = t.sibling;
    if (c !== null) {
      (c.return = t.return), (oe = c);
      break;
    }
    oe = t.return;
  }
}
var R$ = Math.ceil,
  zd = oo.ReactCurrentDispatcher,
  ay = oo.ReactCurrentOwner,
  Er = oo.ReactCurrentBatchConfig,
  Be = 0,
  Jt = null,
  jt = null,
  ln = 0,
  qn = 0,
  Vl = oa(0),
  Ut = 0,
  Gs = null,
  Ua = 0,
  wp = 0,
  ly = 0,
  Cs = null,
  Mn = null,
  uy = 0,
  vu = 1 / 0,
  Hi = null,
  jd = !1,
  Cg = null,
  Uo = null,
  kf = !1,
  Lo = null,
  Dd = 0,
  _s = 0,
  _g = null,
  ld = -1,
  ud = 0;
function kn() {
  return Be & 6 ? Mt() : ld !== -1 ? ld : (ld = Mt());
}
function Vo(e) {
  return e.mode & 1
    ? Be & 2 && ln !== 0
      ? ln & -ln
      : h$.transition !== null
      ? (ud === 0 && (ud = hC()), ud)
      : ((e = Xe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : SC(e.type))),
        e)
    : 1;
}
function Yr(e, t, n, r) {
  if (50 < _s) throw ((_s = 0), (_g = null), Error(Z(185)));
  cc(e, n, r),
    (!(Be & 2) || e !== Jt) &&
      (e === Jt && (!(Be & 2) && (wp |= n), Ut === 4 && Io(e, ln)),
      jn(e, r),
      n === 1 && Be === 0 && !(t.mode & 1) && ((vu = Mt() + 500), mp && aa()));
}
function jn(e, t) {
  var n = e.callbackNode;
  hI(e, t);
  var r = xd(e, e === Jt ? ln : 0);
  if (r === 0)
    n !== null && Rw(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Rw(n), t === 1))
      e.tag === 0 ? p$(CS.bind(null, e)) : FC(CS.bind(null, e)),
        s$(function () {
          !(Be & 6) && aa();
        }),
        (n = null);
    else {
      switch (vC(r)) {
        case 1:
          n = M0;
          break;
        case 4:
          n = dC;
          break;
        case 16:
          n = Sd;
          break;
        case 536870912:
          n = pC;
          break;
        default:
          n = Sd;
      }
      n = D_(n, I_.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function I_(e, t) {
  if (((ld = -1), (ud = 0), Be & 6)) throw Error(Z(327));
  var n = e.callbackNode;
  if (iu() && e.callbackNode !== n) return null;
  var r = xd(e, e === Jt ? ln : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Fd(e, r);
  else {
    t = r;
    var i = Be;
    Be |= 2;
    var a = M_();
    (Jt !== e || ln !== t) && ((Hi = null), (vu = Mt() + 500), Na(e, t));
    do
      try {
        M$();
        break;
      } catch (c) {
        $_(e, c);
      }
    while (1);
    K0(),
      (zd.current = a),
      (Be = i),
      jt !== null ? (t = 0) : ((Jt = null), (ln = 0), (t = Ut));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = qm(e)), i !== 0 && ((r = i), (t = Eg(e, i)))), t === 1)
    )
      throw ((n = Gs), Na(e, 0), Io(e, r), jn(e, Mt()), n);
    if (t === 6) Io(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !I$(i) &&
          ((t = Fd(e, r)),
          t === 2 && ((a = qm(e)), a !== 0 && ((r = a), (t = Eg(e, a)))),
          t === 1))
      )
        throw ((n = Gs), Na(e, 0), Io(e, r), jn(e, Mt()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(Z(345));
        case 2:
          Ea(e, Mn, Hi);
          break;
        case 3:
          if (
            (Io(e, r), (r & 130023424) === r && ((t = uy + 500 - Mt()), 10 < t))
          ) {
            if (xd(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              kn(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = og(Ea.bind(null, e, Mn, Hi), t);
            break;
          }
          Ea(e, Mn, Hi);
          break;
        case 4:
          if ((Io(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var u = 31 - Kr(r);
            (a = 1 << u), (u = t[u]), u > i && (i = u), (r &= ~a);
          }
          if (
            ((r = i),
            (r = Mt() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * R$(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = og(Ea.bind(null, e, Mn, Hi), r);
            break;
          }
          Ea(e, Mn, Hi);
          break;
        case 5:
          Ea(e, Mn, Hi);
          break;
        default:
          throw Error(Z(329));
      }
    }
  }
  return jn(e, Mt()), e.callbackNode === n ? I_.bind(null, e) : null;
}
function Eg(e, t) {
  var n = Cs;
  return (
    e.current.memoizedState.isDehydrated && (Na(e, t).flags |= 256),
    (e = Fd(e, t)),
    e !== 2 && ((t = Mn), (Mn = n), t !== null && Og(t)),
    e
  );
}
function Og(e) {
  Mn === null ? (Mn = e) : Mn.push.apply(Mn, e);
}
function I$(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!Qr(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Io(e, t) {
  for (
    t &= ~ly,
      t &= ~wp,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Kr(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function CS(e) {
  if (Be & 6) throw Error(Z(327));
  iu();
  var t = xd(e, 0);
  if (!(t & 1)) return jn(e, Mt()), null;
  var n = Fd(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = qm(e);
    r !== 0 && ((t = r), (n = Eg(e, r)));
  }
  if (n === 1) throw ((n = Gs), Na(e, 0), Io(e, t), jn(e, Mt()), n);
  if (n === 6) throw Error(Z(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ea(e, Mn, Hi),
    jn(e, Mt()),
    null
  );
}
function sy(e, t) {
  var n = Be;
  Be |= 1;
  try {
    return e(t);
  } finally {
    (Be = n), Be === 0 && ((vu = Mt() + 500), mp && aa());
  }
}
function Va(e) {
  Lo !== null && Lo.tag === 0 && !(Be & 6) && iu();
  var t = Be;
  Be |= 1;
  var n = Er.transition,
    r = Xe;
  try {
    if (((Er.transition = null), (Xe = 1), e)) return e();
  } finally {
    (Xe = r), (Er.transition = n), (Be = t), !(Be & 6) && aa();
  }
}
function cy() {
  (qn = Vl.current), st(Vl);
}
function Na(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), u$(n)), jt !== null))
    for (n = jt.return; n !== null; ) {
      var r = n;
      switch ((U0(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && kd();
          break;
        case 3:
          pu(), st(Nn), st(wn), J0();
          break;
        case 5:
          Z0(r);
          break;
        case 4:
          pu();
          break;
        case 13:
          st(Ct);
          break;
        case 19:
          st(Ct);
          break;
        case 10:
          Y0(r.type._context);
          break;
        case 22:
        case 23:
          cy();
      }
      n = n.return;
    }
  if (
    ((Jt = e),
    (jt = e = Go(e.current, null)),
    (ln = qn = t),
    (Ut = 0),
    (Gs = null),
    (ly = wp = Ua = 0),
    (Mn = Cs = null),
    Aa !== null)
  ) {
    for (t = 0; t < Aa.length; t++)
      if (((n = Aa[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          a = n.pending;
        if (a !== null) {
          var u = a.next;
          (a.next = i), (r.next = u);
        }
        n.pending = r;
      }
    Aa = null;
  }
  return e;
}
function $_(e, t) {
  do {
    var n = jt;
    try {
      if ((K0(), (id.current = Nd), Ld)) {
        for (var r = _t.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ld = !1;
      }
      if (
        ((Ha = 0),
        (Zt = Ht = _t = null),
        (Ss = !1),
        (Hs = 0),
        (ay.current = null),
        n === null || n.return === null)
      ) {
        (Ut = 1), (Gs = t), (jt = null);
        break;
      }
      e: {
        var a = e,
          u = n.return,
          c = n,
          f = t;
        if (
          ((t = ln),
          (c.flags |= 32768),
          f !== null && typeof f == "object" && typeof f.then == "function")
        ) {
          var d = f,
            h = c,
            v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var g = h.alternate;
            g
              ? ((h.updateQueue = g.updateQueue),
                (h.memoizedState = g.memoizedState),
                (h.lanes = g.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var b = cS(u);
          if (b !== null) {
            (b.flags &= -257),
              fS(b, u, c, a, t),
              b.mode & 1 && sS(a, d, t),
              (t = b),
              (f = d);
            var E = t.updateQueue;
            if (E === null) {
              var O = new Set();
              O.add(f), (t.updateQueue = O);
            } else E.add(f);
            break e;
          } else {
            if (!(t & 1)) {
              sS(a, d, t), fy();
              break e;
            }
            f = Error(Z(426));
          }
        } else if (gt && c.mode & 1) {
          var T = cS(u);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              fS(T, u, c, a, t),
              V0(hu(f, c));
            break e;
          }
        }
        (a = f = hu(f, c)),
          Ut !== 4 && (Ut = 2),
          Cs === null ? (Cs = [a]) : Cs.push(a),
          (a = u);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var C = m_(a, f, t);
              nS(a, C);
              break e;
            case 1:
              c = f;
              var y = a.type,
                S = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof y.getDerivedStateFromError == "function" ||
                  (S !== null &&
                    typeof S.componentDidCatch == "function" &&
                    (Uo === null || !Uo.has(S))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var k = g_(a, c, t);
                nS(a, k);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      N_(n);
    } catch ($) {
      (t = $), jt === n && n !== null && (jt = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function M_() {
  var e = zd.current;
  return (zd.current = Nd), e === null ? Nd : e;
}
function fy() {
  (Ut === 0 || Ut === 3 || Ut === 2) && (Ut = 4),
    Jt === null || (!(Ua & 268435455) && !(wp & 268435455)) || Io(Jt, ln);
}
function Fd(e, t) {
  var n = Be;
  Be |= 2;
  var r = M_();
  (Jt !== e || ln !== t) && ((Hi = null), Na(e, t));
  do
    try {
      $$();
      break;
    } catch (i) {
      $_(e, i);
    }
  while (1);
  if ((K0(), (Be = n), (zd.current = r), jt !== null)) throw Error(Z(261));
  return (Jt = null), (ln = 0), Ut;
}
function $$() {
  for (; jt !== null; ) L_(jt);
}
function M$() {
  for (; jt !== null && !oI(); ) L_(jt);
}
function L_(e) {
  var t = j_(e.alternate, e, qn);
  (e.memoizedProps = e.pendingProps),
    t === null ? N_(e) : (jt = t),
    (ay.current = null);
}
function N_(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = k$(n, t)), n !== null)) {
        (n.flags &= 32767), (jt = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ut = 6), (jt = null);
        return;
      }
    } else if (((n = O$(n, t, qn)), n !== null)) {
      jt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      jt = t;
      return;
    }
    jt = t = e;
  } while (t !== null);
  Ut === 0 && (Ut = 5);
}
function Ea(e, t, n) {
  var r = Xe,
    i = Er.transition;
  try {
    (Er.transition = null), (Xe = 1), L$(e, t, n, r);
  } finally {
    (Er.transition = i), (Xe = r);
  }
  return null;
}
function L$(e, t, n, r) {
  do iu();
  while (Lo !== null);
  if (Be & 6) throw Error(Z(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(Z(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (vI(e, a),
    e === Jt && ((jt = Jt = null), (ln = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      kf ||
      ((kf = !0),
      D_(Sd, function () {
        return iu(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = Er.transition), (Er.transition = null);
    var u = Xe;
    Xe = 1;
    var c = Be;
    (Be |= 4),
      (ay.current = null),
      T$(e, n),
      A_(n, e),
      t$(rg),
      (Cd = !!ng),
      (rg = ng = null),
      (e.current = n),
      A$(n),
      aI(),
      (Be = c),
      (Xe = u),
      (Er.transition = a);
  } else e.current = n;
  if (
    (kf && ((kf = !1), (Lo = e), (Dd = i)),
    (a = e.pendingLanes),
    a === 0 && (Uo = null),
    sI(n.stateNode),
    jn(e, Mt()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (jd) throw ((jd = !1), (e = Cg), (Cg = null), e);
  return (
    Dd & 1 && e.tag !== 0 && iu(),
    (a = e.pendingLanes),
    a & 1 ? (e === _g ? _s++ : ((_s = 0), (_g = e))) : (_s = 0),
    aa(),
    null
  );
}
function iu() {
  if (Lo !== null) {
    var e = vC(Dd),
      t = Er.transition,
      n = Xe;
    try {
      if (((Er.transition = null), (Xe = 16 > e ? 16 : e), Lo === null))
        var r = !1;
      else {
        if (((e = Lo), (Lo = null), (Dd = 0), Be & 6)) throw Error(Z(331));
        var i = Be;
        for (Be |= 4, oe = e.current; oe !== null; ) {
          var a = oe,
            u = a.child;
          if (oe.flags & 16) {
            var c = a.deletions;
            if (c !== null) {
              for (var f = 0; f < c.length; f++) {
                var d = c[f];
                for (oe = d; oe !== null; ) {
                  var h = oe;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xs(8, h, a);
                  }
                  var v = h.child;
                  if (v !== null) (v.return = h), (oe = v);
                  else
                    for (; oe !== null; ) {
                      h = oe;
                      var g = h.sibling,
                        b = h.return;
                      if ((k_(h), h === d)) {
                        oe = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = b), (oe = g);
                        break;
                      }
                      oe = b;
                    }
                }
              }
              var E = a.alternate;
              if (E !== null) {
                var O = E.child;
                if (O !== null) {
                  E.child = null;
                  do {
                    var T = O.sibling;
                    (O.sibling = null), (O = T);
                  } while (O !== null);
                }
              }
              oe = a;
            }
          }
          if (a.subtreeFlags & 2064 && u !== null) (u.return = a), (oe = u);
          else
            e: for (; oe !== null; ) {
              if (((a = oe), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xs(9, a, a.return);
                }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (oe = C);
                break e;
              }
              oe = a.return;
            }
        }
        var y = e.current;
        for (oe = y; oe !== null; ) {
          u = oe;
          var S = u.child;
          if (u.subtreeFlags & 2064 && S !== null) (S.return = u), (oe = S);
          else
            e: for (u = y; oe !== null; ) {
              if (((c = oe), c.flags & 2048))
                try {
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bp(9, c);
                  }
                } catch ($) {
                  Pt(c, c.return, $);
                }
              if (c === u) {
                oe = null;
                break e;
              }
              var k = c.sibling;
              if (k !== null) {
                (k.return = c.return), (oe = k);
                break e;
              }
              oe = c.return;
            }
        }
        if (
          ((Be = i), aa(), vi && typeof vi.onPostCommitFiberRoot == "function")
        )
          try {
            vi.onPostCommitFiberRoot(fp, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Xe = n), (Er.transition = t);
    }
  }
  return !1;
}
function _S(e, t, n) {
  (t = hu(n, t)),
    (t = m_(e, t, 1)),
    (e = Ho(e, t, 1)),
    (t = kn()),
    e !== null && (cc(e, 1, t), jn(e, t));
}
function Pt(e, t, n) {
  if (e.tag === 3) _S(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _S(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Uo === null || !Uo.has(r)))
        ) {
          (e = hu(n, e)),
            (e = g_(t, e, 1)),
            (t = Ho(t, e, 1)),
            (e = kn()),
            t !== null && (cc(t, 1, e), jn(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function N$(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = kn()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Jt === e &&
      (ln & n) === n &&
      (Ut === 4 || (Ut === 3 && (ln & 130023424) === ln && 500 > Mt() - uy)
        ? Na(e, 0)
        : (ly |= n)),
    jn(e, t);
}
function z_(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = gf), (gf <<= 1), !(gf & 130023424) && (gf = 4194304))
      : (t = 1));
  var n = kn();
  (e = qi(e, t)), e !== null && (cc(e, t, n), jn(e, n));
}
function z$(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), z_(e, n);
}
function j$(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(Z(314));
  }
  r !== null && r.delete(t), z_(e, n);
}
var j_;
j_ = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Nn.current) Ln = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ln = !1), E$(e, t, n);
      Ln = !!(e.flags & 131072);
    }
  else (Ln = !1), gt && t.flags & 1048576 && BC(t, Ad, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ad(e, t), (e = t.pendingProps);
      var i = cu(t, wn.current);
      ru(t, n), (i = ty(null, t, r, e, i, n));
      var a = ny();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            zn(r) ? ((a = !0), Pd(t)) : (a = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Q0(t),
            (i.updater = gp),
            (t.stateNode = i),
            (i._reactInternals = t),
            dg(t, r, e, n),
            (t = vg(null, t, r, !0, a, n)))
          : ((t.tag = 0), gt && a && H0(t), En(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ad(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = F$(r)),
          (e = Br(r, e)),
          i)
        ) {
          case 0:
            t = hg(null, t, r, e, n);
            break e;
          case 1:
            t = hS(null, t, r, e, n);
            break e;
          case 11:
            t = dS(null, t, r, e, n);
            break e;
          case 14:
            t = pS(null, t, r, Br(r.type, e), n);
            break e;
        }
        throw Error(Z(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Br(r, i)),
        hg(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Br(r, i)),
        hS(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((S_(t), e === null)) throw Error(Z(387));
        (r = t.pendingProps),
          (a = t.memoizedState),
          (i = a.element),
          VC(e, t),
          $d(t, r, null, n);
        var u = t.memoizedState;
        if (((r = u.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (i = hu(Error(Z(423)), t)), (t = vS(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = hu(Error(Z(424)), t)), (t = vS(e, t, r, n, i));
            break e;
          } else
            for (
              Jn = Wo(t.stateNode.containerInfo.firstChild),
                tr = t,
                gt = !0,
                Ur = null,
                n = XC(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((fu(), r === i)) {
            t = Zi(e, t, n);
            break e;
          }
          En(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        QC(t),
        e === null && sg(t),
        (r = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (u = i.children),
        ig(r, i) ? (u = null) : a !== null && ig(r, a) && (t.flags |= 32),
        w_(e, t),
        En(e, t, u, n),
        t.child
      );
    case 6:
      return e === null && sg(t), null;
    case 13:
      return x_(e, t, n);
    case 4:
      return (
        q0(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = du(t, null, r, n)) : En(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Br(r, i)),
        dS(e, t, r, i, n)
      );
    case 7:
      return En(e, t, t.pendingProps, n), t.child;
    case 8:
      return En(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return En(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (u = i.value),
          it(Rd, r._currentValue),
          (r._currentValue = u),
          a !== null)
        )
          if (Qr(a.value, u)) {
            if (a.children === i.children && !Nn.current) {
              t = Zi(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var c = a.dependencies;
              if (c !== null) {
                u = a.child;
                for (var f = c.firstContext; f !== null; ) {
                  if (f.context === r) {
                    if (a.tag === 1) {
                      (f = Yi(-1, n & -n)), (f.tag = 2);
                      var d = a.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var h = d.pending;
                        h === null
                          ? (f.next = f)
                          : ((f.next = h.next), (h.next = f)),
                          (d.pending = f);
                      }
                    }
                    (a.lanes |= n),
                      (f = a.alternate),
                      f !== null && (f.lanes |= n),
                      cg(a.return, n, t),
                      (c.lanes |= n);
                    break;
                  }
                  f = f.next;
                }
              } else if (a.tag === 10) u = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((u = a.return), u === null)) throw Error(Z(341));
                (u.lanes |= n),
                  (c = u.alternate),
                  c !== null && (c.lanes |= n),
                  cg(u, n, t),
                  (u = a.sibling);
              } else u = a.child;
              if (u !== null) u.return = a;
              else
                for (u = a; u !== null; ) {
                  if (u === t) {
                    u = null;
                    break;
                  }
                  if (((a = u.sibling), a !== null)) {
                    (a.return = u.return), (u = a);
                    break;
                  }
                  u = u.return;
                }
              a = u;
            }
        En(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        ru(t, n),
        (i = Or(i)),
        (r = r(i)),
        (t.flags |= 1),
        En(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Br(r, t.pendingProps)),
        (i = Br(r.type, i)),
        pS(e, t, r, i, n)
      );
    case 15:
      return y_(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Br(r, i)),
        ad(e, t),
        (t.tag = 1),
        zn(r) ? ((e = !0), Pd(t)) : (e = !1),
        ru(t, n),
        KC(t, r, i),
        dg(t, r, i, n),
        vg(null, t, r, !0, e, n)
      );
    case 19:
      return C_(e, t, n);
    case 22:
      return b_(e, t, n);
  }
  throw Error(Z(156, t.tag));
};
function D_(e, t) {
  return fC(e, t);
}
function D$(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function _r(e, t, n, r) {
  return new D$(e, t, n, r);
}
function dy(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function F$(e) {
  if (typeof e == "function") return dy(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === R0)) return 11;
    if (e === I0) return 14;
  }
  return 2;
}
function Go(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = _r(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function sd(e, t, n, r, i, a) {
  var u = 2;
  if (((r = e), typeof e == "function")) dy(e) && (u = 1);
  else if (typeof e == "string") u = 5;
  else
    e: switch (e) {
      case Ll:
        return za(n.children, i, a, t);
      case A0:
        (u = 8), (i |= 8);
        break;
      case Nm:
        return (
          (e = _r(12, n, t, i | 2)), (e.elementType = Nm), (e.lanes = a), e
        );
      case zm:
        return (e = _r(13, n, t, i)), (e.elementType = zm), (e.lanes = a), e;
      case jm:
        return (e = _r(19, n, t, i)), (e.elementType = jm), (e.lanes = a), e;
      case Y2:
        return Sp(n, i, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case G2:
              u = 10;
              break e;
            case K2:
              u = 9;
              break e;
            case R0:
              u = 11;
              break e;
            case I0:
              u = 14;
              break e;
            case To:
              (u = 16), (r = null);
              break e;
          }
        throw Error(Z(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = _r(u, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = a), t
  );
}
function za(e, t, n, r) {
  return (e = _r(7, e, r, t)), (e.lanes = n), e;
}
function Sp(e, t, n, r) {
  return (
    (e = _r(22, e, r, t)),
    (e.elementType = Y2),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Qv(e, t, n) {
  return (e = _r(6, e, null, t)), (e.lanes = n), e;
}
function qv(e, t, n) {
  return (
    (t = _r(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function B$(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Rv(0)),
    (this.expirationTimes = Rv(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Rv(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function py(e, t, n, r, i, a, u, c, f) {
  return (
    (e = new B$(e, t, n, c, f)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = _r(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Q0(a),
    e
  );
}
function W$(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ml,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function F_(e) {
  if (!e) return qo;
  e = e._reactInternals;
  e: {
    if (Za(e) !== e || e.tag !== 1) throw Error(Z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (zn(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(Z(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (zn(n)) return DC(e, n, t);
  }
  return t;
}
function B_(e, t, n, r, i, a, u, c, f) {
  return (
    (e = py(n, r, !0, e, i, a, u, c, f)),
    (e.context = F_(null)),
    (n = e.current),
    (r = kn()),
    (i = Vo(n)),
    (a = Yi(r, i)),
    (a.callback = t ?? null),
    Ho(n, a, i),
    (e.current.lanes = i),
    cc(e, i, r),
    jn(e, r),
    e
  );
}
function xp(e, t, n, r) {
  var i = t.current,
    a = kn(),
    u = Vo(i);
  return (
    (n = F_(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Yi(a, u)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ho(i, t, u)),
    e !== null && (Yr(e, i, u, a), rd(e, i, u)),
    u
  );
}
function Bd(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ES(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function hy(e, t) {
  ES(e, t), (e = e.alternate) && ES(e, t);
}
function H$() {
  return null;
}
var W_ =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function vy(e) {
  this._internalRoot = e;
}
Cp.prototype.render = vy.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(Z(409));
  xp(e, t, null, null);
};
Cp.prototype.unmount = vy.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Va(function () {
      xp(null, e, null, null);
    }),
      (t[Qi] = null);
  }
};
function Cp(e) {
  this._internalRoot = e;
}
Cp.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = yC();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ro.length && t !== 0 && t < Ro[n].priority; n++);
    Ro.splice(n, 0, e), n === 0 && wC(e);
  }
};
function my(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _p(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function OS() {}
function U$(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var d = Bd(u);
        a.call(d);
      };
    }
    var u = B_(t, r, e, 0, null, !1, !1, "", OS);
    return (
      (e._reactRootContainer = u),
      (e[Qi] = u.current),
      js(e.nodeType === 8 ? e.parentNode : e),
      Va(),
      u
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var c = r;
    r = function () {
      var d = Bd(f);
      c.call(d);
    };
  }
  var f = py(e, 0, !1, null, null, !1, !1, "", OS);
  return (
    (e._reactRootContainer = f),
    (e[Qi] = f.current),
    js(e.nodeType === 8 ? e.parentNode : e),
    Va(function () {
      xp(t, f, n, r);
    }),
    f
  );
}
function Ep(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var u = a;
    if (typeof i == "function") {
      var c = i;
      i = function () {
        var f = Bd(u);
        c.call(f);
      };
    }
    xp(t, u, e, i);
  } else u = U$(n, t, e, i, r);
  return Bd(u);
}
mC = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = fs(t.pendingLanes);
        n !== 0 &&
          (L0(t, n | 1), jn(t, Mt()), !(Be & 6) && ((vu = Mt() + 500), aa()));
      }
      break;
    case 13:
      Va(function () {
        var r = qi(e, 1);
        if (r !== null) {
          var i = kn();
          Yr(r, e, 1, i);
        }
      }),
        hy(e, 1);
  }
};
N0 = function (e) {
  if (e.tag === 13) {
    var t = qi(e, 134217728);
    if (t !== null) {
      var n = kn();
      Yr(t, e, 134217728, n);
    }
    hy(e, 134217728);
  }
};
gC = function (e) {
  if (e.tag === 13) {
    var t = Vo(e),
      n = qi(e, t);
    if (n !== null) {
      var r = kn();
      Yr(n, e, t, r);
    }
    hy(e, t);
  }
};
yC = function () {
  return Xe;
};
bC = function (e, t) {
  var n = Xe;
  try {
    return (Xe = e), t();
  } finally {
    Xe = n;
  }
};
Ym = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Bm(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = vp(r);
            if (!i) throw Error(Z(90));
            Q2(r), Bm(r, i);
          }
        }
      }
      break;
    case "textarea":
      Z2(e, n);
      break;
    case "select":
      (t = n.value), t != null && Jl(e, !!n.multiple, t, !1);
  }
};
oC = sy;
aC = Va;
var V$ = { usingClientEntryPoint: !1, Events: [dc, Dl, vp, rC, iC, sy] },
  as = {
    findFiberByHostInstance: Ta,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  G$ = {
    bundleType: as.bundleType,
    version: as.version,
    rendererPackageName: as.rendererPackageName,
    rendererConfig: as.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: oo.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = sC(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: as.findFiberByHostInstance || H$,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Pf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pf.isDisabled && Pf.supportsFiber)
    try {
      (fp = Pf.inject(G$)), (vi = Pf);
    } catch {}
}
ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V$;
ir.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!my(t)) throw Error(Z(200));
  return W$(e, t, null, n);
};
ir.createRoot = function (e, t) {
  if (!my(e)) throw Error(Z(299));
  var n = !1,
    r = "",
    i = W_;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = py(e, 1, !1, null, null, n, !1, r, i)),
    (e[Qi] = t.current),
    js(e.nodeType === 8 ? e.parentNode : e),
    new vy(t)
  );
};
ir.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(Z(188))
      : ((e = Object.keys(e).join(",")), Error(Z(268, e)));
  return (e = sC(t)), (e = e === null ? null : e.stateNode), e;
};
ir.flushSync = function (e) {
  return Va(e);
};
ir.hydrate = function (e, t, n) {
  if (!_p(t)) throw Error(Z(200));
  return Ep(null, e, t, !0, n);
};
ir.hydrateRoot = function (e, t, n) {
  if (!my(e)) throw Error(Z(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    a = "",
    u = W_;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
    (t = B_(t, null, e, 1, n ?? null, i, !1, a, u)),
    (e[Qi] = t.current),
    js(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Cp(t);
};
ir.render = function (e, t, n) {
  if (!_p(t)) throw Error(Z(200));
  return Ep(null, e, t, !1, n);
};
ir.unmountComponentAtNode = function (e) {
  if (!_p(e)) throw Error(Z(40));
  return e._reactRootContainer
    ? (Va(function () {
        Ep(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qi] = null);
        });
      }),
      !0)
    : !1;
};
ir.unstable_batchedUpdates = sy;
ir.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_p(n)) throw Error(Z(200));
  if (e == null || e._reactInternals === void 0) throw Error(Z(38));
  return Ep(e, t, n, !1, r);
};
ir.version = "18.2.0-next-9e3b772b8-20220608";
function H_() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H_);
    } catch (e) {
      console.error(e);
    }
}
H_(), (B2.exports = ir);
var hc = B2.exports;
const U_ = uc(hc),
  K$ = A2({ __proto__: null, default: U_ }, [hc]);
var kS = hc;
(Mm.createRoot = kS.createRoot), (Mm.hydrateRoot = kS.hydrateRoot);
var V_ = { exports: {} },
  G_ = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mu = x;
function Y$(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var X$ = typeof Object.is == "function" ? Object.is : Y$,
  Q$ = mu.useState,
  q$ = mu.useEffect,
  Z$ = mu.useLayoutEffect,
  J$ = mu.useDebugValue;
function e6(e, t) {
  var n = t(),
    r = Q$({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    a = r[1];
  return (
    Z$(
      function () {
        (i.value = n), (i.getSnapshot = t), Zv(i) && a({ inst: i });
      },
      [e, n, t]
    ),
    q$(
      function () {
        return (
          Zv(i) && a({ inst: i }),
          e(function () {
            Zv(i) && a({ inst: i });
          })
        );
      },
      [e]
    ),
    J$(n),
    n
  );
}
function Zv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !X$(e, n);
  } catch {
    return !0;
  }
}
function t6(e, t) {
  return t();
}
var n6 =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? t6
    : e6;
G_.useSyncExternalStore =
  mu.useSyncExternalStore !== void 0 ? mu.useSyncExternalStore : n6;
V_.exports = G_;
var r6 = V_.exports,
  K_ = { exports: {} },
  Y_ = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Op = x,
  i6 = r6;
function o6(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var a6 = typeof Object.is == "function" ? Object.is : o6,
  l6 = i6.useSyncExternalStore,
  u6 = Op.useRef,
  s6 = Op.useEffect,
  c6 = Op.useMemo,
  f6 = Op.useDebugValue;
Y_.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var a = u6(null);
  if (a.current === null) {
    var u = { hasValue: !1, value: null };
    a.current = u;
  } else u = a.current;
  a = c6(
    function () {
      function f(b) {
        if (!d) {
          if (((d = !0), (h = b), (b = r(b)), i !== void 0 && u.hasValue)) {
            var E = u.value;
            if (i(E, b)) return (v = E);
          }
          return (v = b);
        }
        if (((E = v), a6(h, b))) return E;
        var O = r(b);
        return i !== void 0 && i(E, O) ? E : ((h = b), (v = O));
      }
      var d = !1,
        h,
        v,
        g = n === void 0 ? null : n;
      return [
        function () {
          return f(t());
        },
        g === null
          ? void 0
          : function () {
              return f(g());
            },
      ];
    },
    [t, n, r, i]
  );
  var c = l6(e, a[0], a[1]);
  return (
    s6(
      function () {
        (u.hasValue = !0), (u.value = c);
      },
      [c]
    ),
    f6(c),
    c
  );
};
K_.exports = Y_;
var d6 = K_.exports;
function p6(e) {
  e();
}
let X_ = p6;
const h6 = (e) => (X_ = e),
  v6 = () => X_,
  PS = Symbol.for("react-redux-context"),
  TS = typeof globalThis < "u" ? globalThis : {};
function m6() {
  var e;
  if (!x.createContext) return {};
  const t = (e = TS[PS]) != null ? e : (TS[PS] = new Map());
  let n = t.get(x.createContext);
  return n || ((n = x.createContext(null)), t.set(x.createContext, n)), n;
}
const Zo = m6();
function gy(e = Zo) {
  return function () {
    return x.useContext(e);
  };
}
const Q_ = gy(),
  g6 = () => {
    throw new Error("uSES not initialized!");
  };
let q_ = g6;
const y6 = (e) => {
    q_ = e;
  },
  b6 = (e, t) => e === t;
function w6(e = Zo) {
  const t = e === Zo ? Q_ : gy(e);
  return function (r, i = {}) {
    const {
        equalityFn: a = b6,
        stabilityCheck: u = void 0,
        noopCheck: c = void 0,
      } = typeof i == "function" ? { equalityFn: i } : i,
      {
        store: f,
        subscription: d,
        getServerState: h,
        stabilityCheck: v,
        noopCheck: g,
      } = t();
    x.useRef(!0);
    const b = x.useCallback(
        {
          [r.name](O) {
            return r(O);
          },
        }[r.name],
        [r, v, u]
      ),
      E = q_(d.addNestedSub, f.getState, h || f.getState, b, a);
    return x.useDebugValue(E), E;
  };
}
const Ks = w6();
function Vt() {
  return (
    (Vt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vt.apply(this, arguments)
  );
}
function S6(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Z_ = { exports: {} },
  Qe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var en = typeof Symbol == "function" && Symbol.for,
  yy = en ? Symbol.for("react.element") : 60103,
  by = en ? Symbol.for("react.portal") : 60106,
  kp = en ? Symbol.for("react.fragment") : 60107,
  Pp = en ? Symbol.for("react.strict_mode") : 60108,
  Tp = en ? Symbol.for("react.profiler") : 60114,
  Ap = en ? Symbol.for("react.provider") : 60109,
  Rp = en ? Symbol.for("react.context") : 60110,
  wy = en ? Symbol.for("react.async_mode") : 60111,
  Ip = en ? Symbol.for("react.concurrent_mode") : 60111,
  $p = en ? Symbol.for("react.forward_ref") : 60112,
  Mp = en ? Symbol.for("react.suspense") : 60113,
  x6 = en ? Symbol.for("react.suspense_list") : 60120,
  Lp = en ? Symbol.for("react.memo") : 60115,
  Np = en ? Symbol.for("react.lazy") : 60116,
  C6 = en ? Symbol.for("react.block") : 60121,
  _6 = en ? Symbol.for("react.fundamental") : 60117,
  E6 = en ? Symbol.for("react.responder") : 60118,
  O6 = en ? Symbol.for("react.scope") : 60119;
function ar(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case yy:
        switch (((e = e.type), e)) {
          case wy:
          case Ip:
          case kp:
          case Tp:
          case Pp:
          case Mp:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Rp:
              case $p:
              case Np:
              case Lp:
              case Ap:
                return e;
              default:
                return t;
            }
        }
      case by:
        return t;
    }
  }
}
function J_(e) {
  return ar(e) === Ip;
}
Qe.AsyncMode = wy;
Qe.ConcurrentMode = Ip;
Qe.ContextConsumer = Rp;
Qe.ContextProvider = Ap;
Qe.Element = yy;
Qe.ForwardRef = $p;
Qe.Fragment = kp;
Qe.Lazy = Np;
Qe.Memo = Lp;
Qe.Portal = by;
Qe.Profiler = Tp;
Qe.StrictMode = Pp;
Qe.Suspense = Mp;
Qe.isAsyncMode = function (e) {
  return J_(e) || ar(e) === wy;
};
Qe.isConcurrentMode = J_;
Qe.isContextConsumer = function (e) {
  return ar(e) === Rp;
};
Qe.isContextProvider = function (e) {
  return ar(e) === Ap;
};
Qe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === yy;
};
Qe.isForwardRef = function (e) {
  return ar(e) === $p;
};
Qe.isFragment = function (e) {
  return ar(e) === kp;
};
Qe.isLazy = function (e) {
  return ar(e) === Np;
};
Qe.isMemo = function (e) {
  return ar(e) === Lp;
};
Qe.isPortal = function (e) {
  return ar(e) === by;
};
Qe.isProfiler = function (e) {
  return ar(e) === Tp;
};
Qe.isStrictMode = function (e) {
  return ar(e) === Pp;
};
Qe.isSuspense = function (e) {
  return ar(e) === Mp;
};
Qe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === kp ||
    e === Ip ||
    e === Tp ||
    e === Pp ||
    e === Mp ||
    e === x6 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Np ||
        e.$$typeof === Lp ||
        e.$$typeof === Ap ||
        e.$$typeof === Rp ||
        e.$$typeof === $p ||
        e.$$typeof === _6 ||
        e.$$typeof === E6 ||
        e.$$typeof === O6 ||
        e.$$typeof === C6))
  );
};
Qe.typeOf = ar;
Z_.exports = Qe;
var k6 = Z_.exports,
  eE = k6,
  P6 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  T6 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  tE = {};
tE[eE.ForwardRef] = P6;
tE[eE.Memo] = T6;
var et = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sy = Symbol.for("react.element"),
  xy = Symbol.for("react.portal"),
  zp = Symbol.for("react.fragment"),
  jp = Symbol.for("react.strict_mode"),
  Dp = Symbol.for("react.profiler"),
  Fp = Symbol.for("react.provider"),
  Bp = Symbol.for("react.context"),
  A6 = Symbol.for("react.server_context"),
  Wp = Symbol.for("react.forward_ref"),
  Hp = Symbol.for("react.suspense"),
  Up = Symbol.for("react.suspense_list"),
  Vp = Symbol.for("react.memo"),
  Gp = Symbol.for("react.lazy"),
  R6 = Symbol.for("react.offscreen"),
  nE;
nE = Symbol.for("react.module.reference");
function Ar(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Sy:
        switch (((e = e.type), e)) {
          case zp:
          case Dp:
          case jp:
          case Hp:
          case Up:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case A6:
              case Bp:
              case Wp:
              case Gp:
              case Vp:
              case Fp:
                return e;
              default:
                return t;
            }
        }
      case xy:
        return t;
    }
  }
}
et.ContextConsumer = Bp;
et.ContextProvider = Fp;
et.Element = Sy;
et.ForwardRef = Wp;
et.Fragment = zp;
et.Lazy = Gp;
et.Memo = Vp;
et.Portal = xy;
et.Profiler = Dp;
et.StrictMode = jp;
et.Suspense = Hp;
et.SuspenseList = Up;
et.isAsyncMode = function () {
  return !1;
};
et.isConcurrentMode = function () {
  return !1;
};
et.isContextConsumer = function (e) {
  return Ar(e) === Bp;
};
et.isContextProvider = function (e) {
  return Ar(e) === Fp;
};
et.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Sy;
};
et.isForwardRef = function (e) {
  return Ar(e) === Wp;
};
et.isFragment = function (e) {
  return Ar(e) === zp;
};
et.isLazy = function (e) {
  return Ar(e) === Gp;
};
et.isMemo = function (e) {
  return Ar(e) === Vp;
};
et.isPortal = function (e) {
  return Ar(e) === xy;
};
et.isProfiler = function (e) {
  return Ar(e) === Dp;
};
et.isStrictMode = function (e) {
  return Ar(e) === jp;
};
et.isSuspense = function (e) {
  return Ar(e) === Hp;
};
et.isSuspenseList = function (e) {
  return Ar(e) === Up;
};
et.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === zp ||
    e === Dp ||
    e === jp ||
    e === Hp ||
    e === Up ||
    e === R6 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Gp ||
        e.$$typeof === Vp ||
        e.$$typeof === Fp ||
        e.$$typeof === Bp ||
        e.$$typeof === Wp ||
        e.$$typeof === nE ||
        e.getModuleId !== void 0))
  );
};
et.typeOf = Ar;
function I6() {
  const e = v6();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        i = t;
      for (; i; ) r.push(i), (i = i.next);
      return r;
    },
    subscribe(r) {
      let i = !0,
        a = (n = { callback: r, next: null, prev: n });
      return (
        a.prev ? (a.prev.next = a) : (t = a),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            a.next ? (a.next.prev = a.prev) : (n = a.prev),
            a.prev ? (a.prev.next = a.next) : (t = a.next));
        }
      );
    },
  };
}
const AS = { notify() {}, get: () => [] };
function $6(e, t) {
  let n,
    r = AS,
    i = 0,
    a = !1;
  function u(O) {
    h();
    const T = r.subscribe(O);
    let C = !1;
    return () => {
      C || ((C = !0), T(), v());
    };
  }
  function c() {
    r.notify();
  }
  function f() {
    E.onStateChange && E.onStateChange();
  }
  function d() {
    return a;
  }
  function h() {
    i++, n || ((n = t ? t.addNestedSub(f) : e.subscribe(f)), (r = I6()));
  }
  function v() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = AS));
  }
  function g() {
    a || ((a = !0), h());
  }
  function b() {
    a && ((a = !1), v());
  }
  const E = {
    addNestedSub: u,
    notifyNestedSubs: c,
    handleChangeWrapper: f,
    isSubscribed: d,
    trySubscribe: g,
    tryUnsubscribe: b,
    getListeners: () => r,
  };
  return E;
}
const M6 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  L6 = M6 ? x.useLayoutEffect : x.useEffect;
function N6({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  noopCheck: a = "once",
}) {
  const u = x.useMemo(() => {
      const d = $6(e);
      return {
        store: e,
        subscription: d,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        noopCheck: a,
      };
    }, [e, r, i, a]),
    c = x.useMemo(() => e.getState(), [e]);
  L6(() => {
    const { subscription: d } = u;
    return (
      (d.onStateChange = d.notifyNestedSubs),
      d.trySubscribe(),
      c !== e.getState() && d.notifyNestedSubs(),
      () => {
        d.tryUnsubscribe(), (d.onStateChange = void 0);
      }
    );
  }, [u, c]);
  const f = t || Zo;
  return x.createElement(f.Provider, { value: u }, n);
}
function rE(e = Zo) {
  const t = e === Zo ? Q_ : gy(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const z6 = rE();
function j6(e = Zo) {
  const t = e === Zo ? z6 : rE(e);
  return function () {
    return t().dispatch;
  };
}
const Kp = j6();
y6(d6.useSyncExternalStoreWithSelector);
h6(hc.unstable_batchedUpdates);
var D6 = x.createContext({});
const Cy = D6;
function iE(e) {
  if (Array.isArray(e)) return e;
}
function F6(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      a,
      u,
      c = [],
      f = !0,
      d = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        f = !1;
      } else
        for (
          ;
          !(f = (r = a.call(n)).done) && (c.push(r.value), c.length !== t);
          f = !0
        );
    } catch (h) {
      (d = !0), (i = h);
    } finally {
      try {
        if (!f && n.return != null && ((u = n.return()), Object(u) !== u))
          return;
      } finally {
        if (d) throw i;
      }
    }
    return c;
  }
}
function kg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function _y(e, t) {
  if (e) {
    if (typeof e == "string") return kg(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return kg(e, t);
  }
}
function oE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function me(e, t) {
  return iE(e) || F6(e, t) || _y(e, t) || oE();
}
function yt(e) {
  "@babel/helpers - typeof";
  return (
    (yt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    yt(e)
  );
}
function B6(e, t) {
  if (yt(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (yt(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function aE(e) {
  var t = B6(e, "string");
  return yt(t) === "symbol" ? t : String(t);
}
function He(e, t, n) {
  return (
    (t = aE(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ga(e, t) {
  if (e == null) return {};
  var n = S6(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
var lE = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        if (a) {
          var u = typeof a;
          if (u === "string" || u === "number") r.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var c = n.apply(null, a);
              c && r.push(c);
            }
          } else if (u === "object") {
            if (
              a.toString !== Object.prototype.toString &&
              !a.toString.toString().includes("[native code]")
            ) {
              r.push(a.toString());
              continue;
            }
            for (var f in a) t.call(a, f) && a[f] && r.push(f);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(lE);
var W6 = lE.exports;
const At = uc(W6);
function un(e, t) {
  H6(e) && (e = "100%");
  var n = U6(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function Tf(e) {
  return Math.min(1, Math.max(0, e));
}
function H6(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function U6(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function uE(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Af(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Ia(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function V6(e, t, n) {
  return { r: un(e, 255) * 255, g: un(t, 255) * 255, b: un(n, 255) * 255 };
}
function RS(e, t, n) {
  (e = un(e, 255)), (t = un(t, 255)), (n = un(n, 255));
  var r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = 0,
    u = 0,
    c = (r + i) / 2;
  if (r === i) (u = 0), (a = 0);
  else {
    var f = r - i;
    switch (((u = c > 0.5 ? f / (2 - r - i) : f / (r + i)), r)) {
      case e:
        a = (t - n) / f + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / f + 2;
        break;
      case n:
        a = (e - t) / f + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: u, l: c };
}
function Jv(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * (6 * n)
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function G6(e, t, n) {
  var r, i, a;
  if (((e = un(e, 360)), (t = un(t, 100)), (n = un(n, 100)), t === 0))
    (i = n), (a = n), (r = n);
  else {
    var u = n < 0.5 ? n * (1 + t) : n + t - n * t,
      c = 2 * n - u;
    (r = Jv(c, u, e + 1 / 3)), (i = Jv(c, u, e)), (a = Jv(c, u, e - 1 / 3));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function Pg(e, t, n) {
  (e = un(e, 255)), (t = un(t, 255)), (n = un(n, 255));
  var r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = 0,
    u = r,
    c = r - i,
    f = r === 0 ? 0 : c / r;
  if (r === i) a = 0;
  else {
    switch (r) {
      case e:
        a = (t - n) / c + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / c + 2;
        break;
      case n:
        a = (e - t) / c + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: f, v: u };
}
function K6(e, t, n) {
  (e = un(e, 360) * 6), (t = un(t, 100)), (n = un(n, 100));
  var r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    u = n * (1 - i * t),
    c = n * (1 - (1 - i) * t),
    f = r % 6,
    d = [n, u, a, a, c, n][f],
    h = [c, n, n, u, a, a][f],
    v = [a, a, c, n, n, u][f];
  return { r: d * 255, g: h * 255, b: v * 255 };
}
function Tg(e, t, n, r) {
  var i = [
    Ia(Math.round(e).toString(16)),
    Ia(Math.round(t).toString(16)),
    Ia(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join("");
}
function Y6(e, t, n, r, i) {
  var a = [
    Ia(Math.round(e).toString(16)),
    Ia(Math.round(t).toString(16)),
    Ia(Math.round(n).toString(16)),
    Ia(X6(r)),
  ];
  return i &&
    a[0].startsWith(a[0].charAt(1)) &&
    a[1].startsWith(a[1].charAt(1)) &&
    a[2].startsWith(a[2].charAt(1)) &&
    a[3].startsWith(a[3].charAt(1))
    ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0)
    : a.join("");
}
function X6(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function IS(e) {
  return Qn(e) / 255;
}
function Qn(e) {
  return parseInt(e, 16);
}
function Q6(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
var Ag = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
};
function $l(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    i = null,
    a = null,
    u = !1,
    c = !1;
  return (
    typeof e == "string" && (e = J6(e)),
    typeof e == "object" &&
      (Bi(e.r) && Bi(e.g) && Bi(e.b)
        ? ((t = V6(e.r, e.g, e.b)),
          (u = !0),
          (c = String(e.r).substr(-1) === "%" ? "prgb" : "rgb"))
        : Bi(e.h) && Bi(e.s) && Bi(e.v)
        ? ((r = Af(e.s)),
          (i = Af(e.v)),
          (t = K6(e.h, r, i)),
          (u = !0),
          (c = "hsv"))
        : Bi(e.h) &&
          Bi(e.s) &&
          Bi(e.l) &&
          ((r = Af(e.s)),
          (a = Af(e.l)),
          (t = G6(e.h, r, a)),
          (u = !0),
          (c = "hsl")),
      Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)),
    (n = uE(n)),
    {
      ok: u,
      format: e.format || c,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n,
    }
  );
}
var q6 = "[-\\+]?\\d+%?",
  Z6 = "[-\\+]?\\d*\\.\\d+%?",
  No = "(?:".concat(Z6, ")|(?:").concat(q6, ")"),
  em = "[\\s|\\(]+("
    .concat(No, ")[,|\\s]+(")
    .concat(No, ")[,|\\s]+(")
    .concat(No, ")\\s*\\)?"),
  tm = "[\\s|\\(]+("
    .concat(No, ")[,|\\s]+(")
    .concat(No, ")[,|\\s]+(")
    .concat(No, ")[,|\\s]+(")
    .concat(No, ")\\s*\\)?"),
  Fr = {
    CSS_UNIT: new RegExp(No),
    rgb: new RegExp("rgb" + em),
    rgba: new RegExp("rgba" + tm),
    hsl: new RegExp("hsl" + em),
    hsla: new RegExp("hsla" + tm),
    hsv: new RegExp("hsv" + em),
    hsva: new RegExp("hsva" + tm),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function J6(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var t = !1;
  if (Ag[e]) (e = Ag[e]), (t = !0);
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Fr.rgb.exec(e);
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = Fr.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = Fr.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = Fr.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = Fr.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = Fr.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = Fr.hex8.exec(e)),
                          n
                            ? {
                                r: Qn(n[1]),
                                g: Qn(n[2]),
                                b: Qn(n[3]),
                                a: IS(n[4]),
                                format: t ? "name" : "hex8",
                              }
                            : ((n = Fr.hex6.exec(e)),
                              n
                                ? {
                                    r: Qn(n[1]),
                                    g: Qn(n[2]),
                                    b: Qn(n[3]),
                                    format: t ? "name" : "hex",
                                  }
                                : ((n = Fr.hex4.exec(e)),
                                  n
                                    ? {
                                        r: Qn(n[1] + n[1]),
                                        g: Qn(n[2] + n[2]),
                                        b: Qn(n[3] + n[3]),
                                        a: IS(n[4] + n[4]),
                                        format: t ? "name" : "hex8",
                                      }
                                    : ((n = Fr.hex3.exec(e)),
                                      n
                                        ? {
                                            r: Qn(n[1] + n[1]),
                                            g: Qn(n[2] + n[2]),
                                            b: Qn(n[3] + n[3]),
                                            format: t ? "name" : "hex",
                                          }
                                        : !1)))))))));
}
function Bi(e) {
  return !!Fr.CSS_UNIT.exec(String(e));
}
var er = (function () {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e) return t;
      typeof t == "number" && (t = Q6(t)), (this.originalInput = t);
      var i = $l(t);
      (this.originalInput = t),
        (this.r = i.r),
        (this.g = i.g),
        (this.b = i.b),
        (this.a = i.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = (r = n.format) !== null && r !== void 0 ? r : i.format),
        (this.gradientType = n.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = i.ok);
    }
    return (
      (e.prototype.isDark = function () {
        return this.getBrightness() < 128;
      }),
      (e.prototype.isLight = function () {
        return !this.isDark();
      }),
      (e.prototype.getBrightness = function () {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
      }),
      (e.prototype.getLuminance = function () {
        var t = this.toRgb(),
          n,
          r,
          i,
          a = t.r / 255,
          u = t.g / 255,
          c = t.b / 255;
        return (
          a <= 0.03928
            ? (n = a / 12.92)
            : (n = Math.pow((a + 0.055) / 1.055, 2.4)),
          u <= 0.03928
            ? (r = u / 12.92)
            : (r = Math.pow((u + 0.055) / 1.055, 2.4)),
          c <= 0.03928
            ? (i = c / 12.92)
            : (i = Math.pow((c + 0.055) / 1.055, 2.4)),
          0.2126 * n + 0.7152 * r + 0.0722 * i
        );
      }),
      (e.prototype.getAlpha = function () {
        return this.a;
      }),
      (e.prototype.setAlpha = function (t) {
        return (
          (this.a = uE(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        );
      }),
      (e.prototype.isMonochrome = function () {
        var t = this.toHsl().s;
        return t === 0;
      }),
      (e.prototype.toHsv = function () {
        var t = Pg(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
      }),
      (e.prototype.toHsvString = function () {
        var t = Pg(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          i = Math.round(t.v * 100);
        return this.a === 1
          ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(i, "%)")
          : "hsva("
              .concat(n, ", ")
              .concat(r, "%, ")
              .concat(i, "%, ")
              .concat(this.roundA, ")");
      }),
      (e.prototype.toHsl = function () {
        var t = RS(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
      }),
      (e.prototype.toHslString = function () {
        var t = RS(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          i = Math.round(t.l * 100);
        return this.a === 1
          ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(i, "%)")
          : "hsla("
              .concat(n, ", ")
              .concat(r, "%, ")
              .concat(i, "%, ")
              .concat(this.roundA, ")");
      }),
      (e.prototype.toHex = function (t) {
        return t === void 0 && (t = !1), Tg(this.r, this.g, this.b, t);
      }),
      (e.prototype.toHexString = function (t) {
        return t === void 0 && (t = !1), "#" + this.toHex(t);
      }),
      (e.prototype.toHex8 = function (t) {
        return t === void 0 && (t = !1), Y6(this.r, this.g, this.b, this.a, t);
      }),
      (e.prototype.toHex8String = function (t) {
        return t === void 0 && (t = !1), "#" + this.toHex8(t);
      }),
      (e.prototype.toHexShortString = function (t) {
        return (
          t === void 0 && (t = !1),
          this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
        );
      }),
      (e.prototype.toRgb = function () {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a,
        };
      }),
      (e.prototype.toRgbString = function () {
        var t = Math.round(this.r),
          n = Math.round(this.g),
          r = Math.round(this.b);
        return this.a === 1
          ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")")
          : "rgba("
              .concat(t, ", ")
              .concat(n, ", ")
              .concat(r, ", ")
              .concat(this.roundA, ")");
      }),
      (e.prototype.toPercentageRgb = function () {
        var t = function (n) {
          return "".concat(Math.round(un(n, 255) * 100), "%");
        };
        return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
      }),
      (e.prototype.toPercentageRgbString = function () {
        var t = function (n) {
          return Math.round(un(n, 255) * 100);
        };
        return this.a === 1
          ? "rgb("
              .concat(t(this.r), "%, ")
              .concat(t(this.g), "%, ")
              .concat(t(this.b), "%)")
          : "rgba("
              .concat(t(this.r), "%, ")
              .concat(t(this.g), "%, ")
              .concat(t(this.b), "%, ")
              .concat(this.roundA, ")");
      }),
      (e.prototype.toName = function () {
        if (this.a === 0) return "transparent";
        if (this.a < 1) return !1;
        for (
          var t = "#" + Tg(this.r, this.g, this.b, !1),
            n = 0,
            r = Object.entries(Ag);
          n < r.length;
          n++
        ) {
          var i = r[n],
            a = i[0],
            u = i[1];
          if (t === u) return a;
        }
        return !1;
      }),
      (e.prototype.toString = function (t) {
        var n = !!t;
        t = t ?? this.format;
        var r = !1,
          i = this.a < 1 && this.a >= 0,
          a = !n && i && (t.startsWith("hex") || t === "name");
        return a
          ? t === "name" && this.a === 0
            ? this.toName()
            : this.toRgbString()
          : (t === "rgb" && (r = this.toRgbString()),
            t === "prgb" && (r = this.toPercentageRgbString()),
            (t === "hex" || t === "hex6") && (r = this.toHexString()),
            t === "hex3" && (r = this.toHexString(!0)),
            t === "hex4" && (r = this.toHex8String(!0)),
            t === "hex8" && (r = this.toHex8String()),
            t === "name" && (r = this.toName()),
            t === "hsl" && (r = this.toHslString()),
            t === "hsv" && (r = this.toHsvString()),
            r || this.toHexString());
      }),
      (e.prototype.toNumber = function () {
        return (
          (Math.round(this.r) << 16) +
          (Math.round(this.g) << 8) +
          Math.round(this.b)
        );
      }),
      (e.prototype.clone = function () {
        return new e(this.toString());
      }),
      (e.prototype.lighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l += t / 100), (n.l = Tf(n.l)), new e(n);
      }),
      (e.prototype.brighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toRgb();
        return (
          (n.r = Math.max(
            0,
            Math.min(255, n.r - Math.round(255 * -(t / 100)))
          )),
          (n.g = Math.max(
            0,
            Math.min(255, n.g - Math.round(255 * -(t / 100)))
          )),
          (n.b = Math.max(
            0,
            Math.min(255, n.b - Math.round(255 * -(t / 100)))
          )),
          new e(n)
        );
      }),
      (e.prototype.darken = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l -= t / 100), (n.l = Tf(n.l)), new e(n);
      }),
      (e.prototype.tint = function (t) {
        return t === void 0 && (t = 10), this.mix("white", t);
      }),
      (e.prototype.shade = function (t) {
        return t === void 0 && (t = 10), this.mix("black", t);
      }),
      (e.prototype.desaturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s -= t / 100), (n.s = Tf(n.s)), new e(n);
      }),
      (e.prototype.saturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s += t / 100), (n.s = Tf(n.s)), new e(n);
      }),
      (e.prototype.greyscale = function () {
        return this.desaturate(100);
      }),
      (e.prototype.spin = function (t) {
        var n = this.toHsl(),
          r = (n.h + t) % 360;
        return (n.h = r < 0 ? 360 + r : r), new e(n);
      }),
      (e.prototype.mix = function (t, n) {
        n === void 0 && (n = 50);
        var r = this.toRgb(),
          i = new e(t).toRgb(),
          a = n / 100,
          u = {
            r: (i.r - r.r) * a + r.r,
            g: (i.g - r.g) * a + r.g,
            b: (i.b - r.b) * a + r.b,
            a: (i.a - r.a) * a + r.a,
          };
        return new e(u);
      }),
      (e.prototype.analogous = function (t, n) {
        t === void 0 && (t = 6), n === void 0 && (n = 30);
        var r = this.toHsl(),
          i = 360 / n,
          a = [this];
        for (r.h = (r.h - ((i * t) >> 1) + 720) % 360; --t; )
          (r.h = (r.h + i) % 360), a.push(new e(r));
        return a;
      }),
      (e.prototype.complement = function () {
        var t = this.toHsl();
        return (t.h = (t.h + 180) % 360), new e(t);
      }),
      (e.prototype.monochromatic = function (t) {
        t === void 0 && (t = 6);
        for (
          var n = this.toHsv(), r = n.h, i = n.s, a = n.v, u = [], c = 1 / t;
          t--;

        )
          u.push(new e({ h: r, s: i, v: a })), (a = (a + c) % 1);
        return u;
      }),
      (e.prototype.splitcomplement = function () {
        var t = this.toHsl(),
          n = t.h;
        return [
          this,
          new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (n + 216) % 360, s: t.s, l: t.l }),
        ];
      }),
      (e.prototype.onBackground = function (t) {
        var n = this.toRgb(),
          r = new e(t).toRgb(),
          i = n.a + r.a * (1 - n.a);
        return new e({
          r: (n.r * n.a + r.r * r.a * (1 - n.a)) / i,
          g: (n.g * n.a + r.g * r.a * (1 - n.a)) / i,
          b: (n.b * n.a + r.b * r.a * (1 - n.a)) / i,
          a: i,
        });
      }),
      (e.prototype.triad = function () {
        return this.polyad(3);
      }),
      (e.prototype.tetrad = function () {
        return this.polyad(4);
      }),
      (e.prototype.polyad = function (t) {
        for (
          var n = this.toHsl(), r = n.h, i = [this], a = 360 / t, u = 1;
          u < t;
          u++
        )
          i.push(new e({ h: (r + u * a) % 360, s: n.s, l: n.l }));
        return i;
      }),
      (e.prototype.equals = function (t) {
        return this.toRgbString() === new e(t).toRgbString();
      }),
      e
    );
  })(),
  Rf = 2,
  $S = 0.16,
  eM = 0.05,
  tM = 0.05,
  nM = 0.15,
  sE = 5,
  cE = 4,
  rM = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ];
function MS(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    i = Pg(t, n, r);
  return { h: i.h * 360, s: i.s, v: i.v };
}
function If(e) {
  var t = e.r,
    n = e.g,
    r = e.b;
  return "#".concat(Tg(t, n, r, !1));
}
function iM(e, t, n) {
  var r = n / 100,
    i = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b,
    };
  return i;
}
function LS(e, t, n) {
  var r;
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - Rf * t : Math.round(e.h) + Rf * t)
      : (r = n ? Math.round(e.h) + Rf * t : Math.round(e.h) - Rf * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  );
}
function NS(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s;
  var r;
  return (
    n ? (r = e.s - $S * t) : t === cE ? (r = e.s + $S) : (r = e.s + eM * t),
    r > 1 && (r = 1),
    n && t === sE && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  );
}
function zS(e, t, n) {
  var r;
  return (
    n ? (r = e.v + tM * t) : (r = e.v - nM * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  );
}
function Ka(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = $l(e),
      i = sE;
    i > 0;
    i -= 1
  ) {
    var a = MS(r),
      u = If($l({ h: LS(a, i, !0), s: NS(a, i, !0), v: zS(a, i, !0) }));
    n.push(u);
  }
  n.push(If(r));
  for (var c = 1; c <= cE; c += 1) {
    var f = MS(r),
      d = If($l({ h: LS(f, c), s: NS(f, c), v: zS(f, c) }));
    n.push(d);
  }
  return t.theme === "dark"
    ? rM.map(function (h) {
        var v = h.index,
          g = h.opacity,
          b = If(iM($l(t.backgroundColor || "#141414"), $l(n[v]), g * 100));
        return b;
      })
    : n;
}
var nm = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1677FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666",
  },
  cd = {},
  rm = {};
Object.keys(nm).forEach(function (e) {
  (cd[e] = Ka(nm[e])),
    (cd[e].primary = cd[e][5]),
    (rm[e] = Ka(nm[e], { theme: "dark", backgroundColor: "#141414" })),
    (rm[e].primary = rm[e][5]);
});
var oM = cd.blue;
function jS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jS(Object(n), !0).forEach(function (r) {
          He(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : jS(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Dn() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function aM(e, t) {
  if (!e) return !1;
  if (e.contains) return e.contains(t);
  for (var n = t; n; ) {
    if (n === e) return !0;
    n = n.parentNode;
  }
  return !1;
}
var DS = "data-rc-order",
  FS = "data-rc-priority",
  lM = "rc-util-key",
  Rg = new Map();
function fE() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark;
  return t ? (t.startsWith("data-") ? t : "data-".concat(t)) : lM;
}
function Yp(e) {
  if (e.attachTo) return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function uM(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function dE(e) {
  return Array.from((Rg.get(e) || e).children).filter(function (t) {
    return t.tagName === "STYLE";
  });
}
function pE(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Dn()) return null;
  var n = t.csp,
    r = t.prepend,
    i = t.priority,
    a = i === void 0 ? 0 : i,
    u = uM(r),
    c = u === "prependQueue",
    f = document.createElement("style");
  f.setAttribute(DS, u),
    c && a && f.setAttribute(FS, "".concat(a)),
    n != null && n.nonce && (f.nonce = n == null ? void 0 : n.nonce),
    (f.innerHTML = e);
  var d = Yp(t),
    h = d.firstChild;
  if (r) {
    if (c) {
      var v = dE(d).filter(function (g) {
        if (!["prepend", "prependQueue"].includes(g.getAttribute(DS)))
          return !1;
        var b = Number(g.getAttribute(FS) || 0);
        return a >= b;
      });
      if (v.length) return d.insertBefore(f, v[v.length - 1].nextSibling), f;
    }
    d.insertBefore(f, h);
  } else d.appendChild(f);
  return f;
}
function hE(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Yp(t);
  return dE(n).find(function (r) {
    return r.getAttribute(fE(t)) === e;
  });
}
function Wd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = hE(e, t);
  if (n) {
    var r = Yp(t);
    r.removeChild(n);
  }
}
function sM(e, t) {
  var n = Rg.get(e);
  if (!n || !aM(document, n)) {
    var r = pE("", t),
      i = r.parentNode;
    Rg.set(e, i), e.removeChild(r);
  }
}
function gu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = Yp(n);
  sM(r, n);
  var i = hE(t, n);
  if (i) {
    var a, u;
    if (
      (a = n.csp) !== null &&
      a !== void 0 &&
      a.nonce &&
      i.nonce !== ((u = n.csp) === null || u === void 0 ? void 0 : u.nonce)
    ) {
      var c;
      i.nonce = (c = n.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var f = pE(e, n);
  return f.setAttribute(fE(n), t), f;
}
function vE(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0
    ? void 0
    : t.call(e);
}
function cM(e) {
  return vE(e) instanceof ShadowRoot;
}
function Hd(e) {
  return cM(e) ? vE(e) : null;
}
var Ig = {},
  fM = function (t) {};
function dM(e, t) {}
function pM(e, t) {}
function hM() {
  Ig = {};
}
function mE(e, t, n) {
  !t && !Ig[n] && (e(!1, n), (Ig[n] = !0));
}
function vc(e, t) {
  mE(dM, e, t);
}
function vM(e, t) {
  mE(pM, e, t);
}
vc.preMessage = fM;
vc.resetWarned = hM;
vc.noteOnce = vM;
function mM(e) {
  return e.replace(/-(.)/g, function (t, n) {
    return n.toUpperCase();
  });
}
function gM(e, t) {
  vc(e, "[@ant-design/icons] ".concat(t));
}
function BS(e) {
  return (
    yt(e) === "object" &&
    typeof e.name == "string" &&
    typeof e.theme == "string" &&
    (yt(e.icon) === "object" || typeof e.icon == "function")
  );
}
function WS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        (t.className = r), delete t.class;
        break;
      default:
        delete t[n], (t[mM(n)] = r);
    }
    return t;
  }, {});
}
function $g(e, t, n) {
  return n
    ? Te.createElement(
        e.tag,
        ue(ue({ key: t }, WS(e.attrs)), n),
        (e.children || []).map(function (r, i) {
          return $g(r, "".concat(t, "-").concat(e.tag, "-").concat(i));
        })
      )
    : Te.createElement(
        e.tag,
        ue({ key: t }, WS(e.attrs)),
        (e.children || []).map(function (r, i) {
          return $g(r, "".concat(t, "-").concat(e.tag, "-").concat(i));
        })
      );
}
function gE(e) {
  return Ka(e)[0];
}
function yE(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var yM = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  bM = function (t) {
    var n = x.useContext(Cy),
      r = n.csp,
      i = n.prefixCls,
      a = yM;
    i && (a = a.replace(/anticon/g, i)),
      x.useEffect(function () {
        var u = t.current,
          c = Hd(u);
        gu(a, "@ant-design-icons", { prepend: !0, csp: r, attachTo: c });
      }, []);
  },
  wM = [
    "icon",
    "className",
    "onClick",
    "style",
    "primaryColor",
    "secondaryColor",
  ],
  Es = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: !1 };
function SM(e) {
  var t = e.primaryColor,
    n = e.secondaryColor;
  (Es.primaryColor = t),
    (Es.secondaryColor = n || gE(t)),
    (Es.calculated = !!n);
}
function xM() {
  return ue({}, Es);
}
var Xp = function (t) {
  var n = t.icon,
    r = t.className,
    i = t.onClick,
    a = t.style,
    u = t.primaryColor,
    c = t.secondaryColor,
    f = Ga(t, wM),
    d = x.useRef(),
    h = Es;
  if (
    (u && (h = { primaryColor: u, secondaryColor: c || gE(u) }),
    bM(d),
    gM(BS(n), "icon should be icon definiton, but got ".concat(n)),
    !BS(n))
  )
    return null;
  var v = n;
  return (
    v &&
      typeof v.icon == "function" &&
      (v = ue(
        ue({}, v),
        {},
        { icon: v.icon(h.primaryColor, h.secondaryColor) }
      )),
    $g(
      v.icon,
      "svg-".concat(v.name),
      ue(
        ue(
          {
            className: r,
            onClick: i,
            style: a,
            "data-icon": v.name,
            width: "1em",
            height: "1em",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          f
        ),
        {},
        { ref: d }
      )
    )
  );
};
Xp.displayName = "IconReact";
Xp.getTwoToneColors = xM;
Xp.setTwoToneColors = SM;
const Ey = Xp;
function bE(e) {
  var t = yE(e),
    n = me(t, 2),
    r = n[0],
    i = n[1];
  return Ey.setTwoToneColors({ primaryColor: r, secondaryColor: i });
}
function CM() {
  var e = Ey.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var _M = [
  "className",
  "icon",
  "spin",
  "rotate",
  "tabIndex",
  "onClick",
  "twoToneColor",
];
bE(oM.primary);
var Qp = x.forwardRef(function (e, t) {
  var n,
    r = e.className,
    i = e.icon,
    a = e.spin,
    u = e.rotate,
    c = e.tabIndex,
    f = e.onClick,
    d = e.twoToneColor,
    h = Ga(e, _M),
    v = x.useContext(Cy),
    g = v.prefixCls,
    b = g === void 0 ? "anticon" : g,
    E = v.rootClassName,
    O = At(
      E,
      b,
      ((n = {}),
      He(n, "".concat(b, "-").concat(i.name), !!i.name),
      He(n, "".concat(b, "-spin"), !!a || i.name === "loading"),
      n),
      r
    ),
    T = c;
  T === void 0 && f && (T = -1);
  var C = u
      ? {
          msTransform: "rotate(".concat(u, "deg)"),
          transform: "rotate(".concat(u, "deg)"),
        }
      : void 0,
    y = yE(d),
    S = me(y, 2),
    k = S[0],
    $ = S[1];
  return x.createElement(
    "span",
    Vt({ role: "img", "aria-label": i.name }, h, {
      ref: t,
      tabIndex: T,
      onClick: f,
      className: O,
    }),
    x.createElement(Ey, {
      icon: i,
      primaryColor: k,
      secondaryColor: $,
      style: C,
    })
  );
});
Qp.displayName = "AntdIcon";
Qp.getTwoToneColor = CM;
Qp.setTwoToneColor = bE;
const yi = Qp;
var EM = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M348 676.1C250 619.4 184 513.4 184 392c0-181.1 146.9-328 328-328s328 146.9 328 328c0 121.4-66 227.4-164 284.1V792c0 17.7-14.3 32-32 32H380c-17.7 0-32-14.3-32-32V676.1zM392 888h240c4.4 0 8 3.6 8 8v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32v-32c0-4.4 3.6-8 8-8z",
        },
      },
    ],
  },
  name: "bulb",
  theme: "filled",
};
const OM = EM;
var kM = function (t, n) {
  return x.createElement(yi, Vt({}, t, { ref: n, icon: OM }));
};
const PM = x.forwardRef(kM);
var TM = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z",
        },
      },
    ],
  },
  name: "caret-down",
  theme: "filled",
};
const AM = TM;
var RM = function (t, n) {
  return x.createElement(yi, Vt({}, t, { ref: n, icon: AM }));
};
const Mg = x.forwardRef(RM);
var IM = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z",
        },
      },
    ],
  },
  name: "caret-right",
  theme: "filled",
};
const $M = IM;
var MM = function (t, n) {
  return x.createElement(yi, Vt({}, t, { ref: n, icon: $M }));
};
const LM = x.forwardRef(MM);
var NM = {
  icon: {
    tag: "svg",
    attrs: {
      "fill-rule": "evenodd",
      viewBox: "64 64 896 896",
      focusable: "false",
    },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z",
        },
      },
    ],
  },
  name: "close",
  theme: "outlined",
};
const zM = NM;
var jM = function (t, n) {
  return x.createElement(yi, Vt({}, t, { ref: n, icon: zM }));
};
const DM = x.forwardRef(jM);
var FM = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z",
        },
      },
    ],
  },
  name: "file-add",
  theme: "outlined",
};
const BM = FM;
var WM = function (t, n) {
  return x.createElement(yi, Vt({}, t, { ref: n, icon: BM }));
};
const wE = x.forwardRef(WM);
var HM = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z",
        },
      },
    ],
  },
  name: "file",
  theme: "outlined",
};
const UM = HM;
var VM = function (t, n) {
  return x.createElement(yi, Vt({}, t, { ref: n, icon: UM }));
};
const GM = x.forwardRef(VM);
var KM = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z",
        },
      },
    ],
  },
  name: "left",
  theme: "outlined",
};
const YM = KM;
var XM = function (t, n) {
  return x.createElement(yi, Vt({}, t, { ref: n, icon: YM }));
};
const QM = x.forwardRef(XM);
var qM = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z",
        },
      },
    ],
  },
  name: "loading",
  theme: "outlined",
};
const ZM = qM;
var JM = function (t, n) {
  return x.createElement(yi, Vt({}, t, { ref: n, icon: ZM }));
};
const eL = x.forwardRef(JM);
var tL = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z",
        },
      },
    ],
  },
  name: "right",
  theme: "outlined",
};
const nL = tL;
var rL = function (t, n) {
  return x.createElement(yi, Vt({}, t, { ref: n, icon: nL }));
};
const iL = x.forwardRef(rL);
var oL = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0162.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1096 0 48 48 0 10-96 0z",
        },
      },
    ],
  },
  name: "rocket",
  theme: "outlined",
};
const aL = oL;
var lL = function (t, n) {
  return x.createElement(yi, Vt({}, t, { ref: n, icon: aL }));
};
const uL = x.forwardRef(lL);
var SE = { exports: {} },
  qe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oy = Symbol.for("react.element"),
  ky = Symbol.for("react.portal"),
  qp = Symbol.for("react.fragment"),
  Zp = Symbol.for("react.strict_mode"),
  Jp = Symbol.for("react.profiler"),
  eh = Symbol.for("react.provider"),
  th = Symbol.for("react.context"),
  sL = Symbol.for("react.server_context"),
  nh = Symbol.for("react.forward_ref"),
  rh = Symbol.for("react.suspense"),
  ih = Symbol.for("react.suspense_list"),
  oh = Symbol.for("react.memo"),
  ah = Symbol.for("react.lazy"),
  cL = Symbol.for("react.offscreen"),
  xE;
xE = Symbol.for("react.module.reference");
function Rr(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Oy:
        switch (((e = e.type), e)) {
          case qp:
          case Jp:
          case Zp:
          case rh:
          case ih:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case sL:
              case th:
              case nh:
              case ah:
              case oh:
              case eh:
                return e;
              default:
                return t;
            }
        }
      case ky:
        return t;
    }
  }
}
qe.ContextConsumer = th;
qe.ContextProvider = eh;
qe.Element = Oy;
qe.ForwardRef = nh;
qe.Fragment = qp;
qe.Lazy = ah;
qe.Memo = oh;
qe.Portal = ky;
qe.Profiler = Jp;
qe.StrictMode = Zp;
qe.Suspense = rh;
qe.SuspenseList = ih;
qe.isAsyncMode = function () {
  return !1;
};
qe.isConcurrentMode = function () {
  return !1;
};
qe.isContextConsumer = function (e) {
  return Rr(e) === th;
};
qe.isContextProvider = function (e) {
  return Rr(e) === eh;
};
qe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Oy;
};
qe.isForwardRef = function (e) {
  return Rr(e) === nh;
};
qe.isFragment = function (e) {
  return Rr(e) === qp;
};
qe.isLazy = function (e) {
  return Rr(e) === ah;
};
qe.isMemo = function (e) {
  return Rr(e) === oh;
};
qe.isPortal = function (e) {
  return Rr(e) === ky;
};
qe.isProfiler = function (e) {
  return Rr(e) === Jp;
};
qe.isStrictMode = function (e) {
  return Rr(e) === Zp;
};
qe.isSuspense = function (e) {
  return Rr(e) === rh;
};
qe.isSuspenseList = function (e) {
  return Rr(e) === ih;
};
qe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === qp ||
    e === Jp ||
    e === Zp ||
    e === rh ||
    e === ih ||
    e === cL ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === ah ||
        e.$$typeof === oh ||
        e.$$typeof === eh ||
        e.$$typeof === th ||
        e.$$typeof === nh ||
        e.$$typeof === xE ||
        e.getModuleId !== void 0))
  );
};
qe.typeOf = Rr;
SE.exports = qe;
var CE = SE.exports;
function Py(e, t, n) {
  var r = x.useRef({});
  return (
    (!("value" in r.current) || n(r.current.condition, t)) &&
      ((r.current.value = e()), (r.current.condition = t)),
    r.current.value
  );
}
function Ty(e, t) {
  typeof e == "function"
    ? e(t)
    : yt(e) === "object" && e && "current" in e && (e.current = t);
}
function lh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t.filter(function (i) {
    return i;
  });
  return r.length <= 1
    ? r[0]
    : function (i) {
        t.forEach(function (a) {
          Ty(a, i);
        });
      };
}
function Ay() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Py(
    function () {
      return lh.apply(void 0, t);
    },
    t,
    function (r, i) {
      return (
        r.length !== i.length ||
        r.every(function (a, u) {
          return a !== i[u];
        })
      );
    }
  );
}
function mc(e) {
  var t,
    n,
    r = CE.isMemo(e) ? e.type.type : e.type;
  return !(
    (typeof r == "function" &&
      !((t = r.prototype) !== null && t !== void 0 && t.render)) ||
    (typeof e == "function" &&
      !((n = e.prototype) !== null && n !== void 0 && n.render))
  );
}
function Lg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = [];
  return (
    Te.Children.forEach(e, function (r) {
      (r == null && !t.keepEmpty) ||
        (Array.isArray(r)
          ? (n = n.concat(Lg(r)))
          : CE.isFragment(r) && r.props
          ? (n = n.concat(Lg(r.props.children, t)))
          : n.push(r));
    }),
    n
  );
}
function Ud(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function fd(e) {
  return Ud(e) ? e : e instanceof Te.Component ? U_.findDOMNode(e) : null;
}
var Ng = x.createContext(null);
function fL(e) {
  var t = e.children,
    n = e.onBatchResize,
    r = x.useRef(0),
    i = x.useRef([]),
    a = x.useContext(Ng),
    u = x.useCallback(
      function (c, f, d) {
        r.current += 1;
        var h = r.current;
        i.current.push({ size: c, element: f, data: d }),
          Promise.resolve().then(function () {
            h === r.current && (n == null || n(i.current), (i.current = []));
          }),
          a == null || a(c, f, d);
      },
      [n, a]
    );
  return x.createElement(Ng.Provider, { value: u }, t);
}
var _E = (function () {
    if (typeof Map < "u") return Map;
    function e(t, n) {
      var r = -1;
      return (
        t.some(function (i, a) {
          return i[0] === n ? ((r = a), !0) : !1;
        }),
        r
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (n) {
          var r = e(this.__entries__, n),
            i = this.__entries__[r];
          return i && i[1];
        }),
        (t.prototype.set = function (n, r) {
          var i = e(this.__entries__, n);
          ~i ? (this.__entries__[i][1] = r) : this.__entries__.push([n, r]);
        }),
        (t.prototype.delete = function (n) {
          var r = this.__entries__,
            i = e(r, n);
          ~i && r.splice(i, 1);
        }),
        (t.prototype.has = function (n) {
          return !!~e(this.__entries__, n);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (n, r) {
          r === void 0 && (r = null);
          for (var i = 0, a = this.__entries__; i < a.length; i++) {
            var u = a[i];
            n.call(r, u[1], u[0]);
          }
        }),
        t
      );
    })();
  })(),
  zg =
    typeof window < "u" &&
    typeof document < "u" &&
    window.document === document,
  Vd = (function () {
    return typeof global < "u" && global.Math === Math
      ? global
      : typeof self < "u" && self.Math === Math
      ? self
      : typeof window < "u" && window.Math === Math
      ? window
      : Function("return this")();
  })(),
  dL = (function () {
    return typeof requestAnimationFrame == "function"
      ? requestAnimationFrame.bind(Vd)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        };
  })(),
  pL = 2;
function hL(e, t) {
  var n = !1,
    r = !1,
    i = 0;
  function a() {
    n && ((n = !1), e()), r && c();
  }
  function u() {
    dL(a);
  }
  function c() {
    var f = Date.now();
    if (n) {
      if (f - i < pL) return;
      r = !0;
    } else (n = !0), (r = !1), setTimeout(u, t);
    i = f;
  }
  return c;
}
var vL = 20,
  mL = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  gL = typeof MutationObserver < "u",
  yL = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = hL(this.refresh.bind(this), vL));
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (t) {
        var n = this.observers_,
          r = n.indexOf(t);
        ~r && n.splice(r, 1),
          !n.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_();
        t && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (n) {
          return n.gatherActive(), n.hasActive();
        });
        return (
          t.forEach(function (n) {
            return n.broadcastActive();
          }),
          t.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        !zg ||
          this.connected_ ||
          (document.addEventListener("transitionend", this.onTransitionEnd_),
          window.addEventListener("resize", this.refresh),
          gL
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener("DOMSubtreeModified", this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        !zg ||
          !this.connected_ ||
          (document.removeEventListener("transitionend", this.onTransitionEnd_),
          window.removeEventListener("resize", this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener("DOMSubtreeModified", this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var n = t.propertyName,
          r = n === void 0 ? "" : n,
          i = mL.some(function (a) {
            return !!~r.indexOf(a);
          });
        i && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  EE = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var i = r[n];
      Object.defineProperty(e, i, {
        value: t[i],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return e;
  },
  yu = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || Vd;
  },
  OE = uh(0, 0, 0, 0);
function Gd(e) {
  return parseFloat(e) || 0;
}
function HS(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (r, i) {
    var a = e["border-" + i + "-width"];
    return r + Gd(a);
  }, 0);
}
function bL(e) {
  for (
    var t = ["top", "right", "bottom", "left"], n = {}, r = 0, i = t;
    r < i.length;
    r++
  ) {
    var a = i[r],
      u = e["padding-" + a];
    n[a] = Gd(u);
  }
  return n;
}
function wL(e) {
  var t = e.getBBox();
  return uh(0, 0, t.width, t.height);
}
function SL(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return OE;
  var r = yu(e).getComputedStyle(e),
    i = bL(r),
    a = i.left + i.right,
    u = i.top + i.bottom,
    c = Gd(r.width),
    f = Gd(r.height);
  if (
    (r.boxSizing === "border-box" &&
      (Math.round(c + a) !== t && (c -= HS(r, "left", "right") + a),
      Math.round(f + u) !== n && (f -= HS(r, "top", "bottom") + u)),
    !CL(e))
  ) {
    var d = Math.round(c + a) - t,
      h = Math.round(f + u) - n;
    Math.abs(d) !== 1 && (c -= d), Math.abs(h) !== 1 && (f -= h);
  }
  return uh(i.left, i.top, c, f);
}
var xL = (function () {
  return typeof SVGGraphicsElement < "u"
    ? function (e) {
        return e instanceof yu(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof yu(e).SVGElement && typeof e.getBBox == "function";
      };
})();
function CL(e) {
  return e === yu(e).document.documentElement;
}
function _L(e) {
  return zg ? (xL(e) ? wL(e) : SL(e)) : OE;
}
function EL(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    i = e.height,
    a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
    u = Object.create(a.prototype);
  return (
    EE(u, {
      x: t,
      y: n,
      width: r,
      height: i,
      top: n,
      right: t + r,
      bottom: i + n,
      left: t,
    }),
    u
  );
}
function uh(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var OL = (function () {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = uh(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function () {
        var t = _L(this.target);
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_;
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        );
      }),
      e
    );
  })(),
  kL = (function () {
    function e(t, n) {
      var r = EL(n);
      EE(this, { target: t, contentRect: r });
    }
    return e;
  })(),
  PL = (function () {
    function e(t, n, r) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new _E()),
        typeof t != "function")
      )
        throw new TypeError(
          "The callback provided as parameter 1 is not a function."
        );
      (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof yu(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) ||
            (n.set(t, new OL(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof yu(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) &&
            (n.delete(t), n.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(),
          this.observations_.forEach(function (n) {
            n.isActive() && t.activeObservations_.push(n);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            n = this.activeObservations_.map(function (r) {
              return new kL(r.target, r.broadcastRect());
            });
          this.callback_.call(t, n, t), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  kE = typeof WeakMap < "u" ? new WeakMap() : new _E(),
  PE = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = yL.getInstance(),
        r = new PL(t, n, this);
      kE.set(this, r);
    }
    return e;
  })();
["observe", "unobserve", "disconnect"].forEach(function (e) {
  PE.prototype[e] = function () {
    var t;
    return (t = kE.get(this))[e].apply(t, arguments);
  };
});
var TL = (function () {
    return typeof Vd.ResizeObserver < "u" ? Vd.ResizeObserver : PE;
  })(),
  zo = new Map();
function AL(e) {
  e.forEach(function (t) {
    var n,
      r = t.target;
    (n = zo.get(r)) === null ||
      n === void 0 ||
      n.forEach(function (i) {
        return i(r);
      });
  });
}
var TE = new TL(AL);
function RL(e, t) {
  zo.has(e) || (zo.set(e, new Set()), TE.observe(e)), zo.get(e).add(t);
}
function IL(e, t) {
  zo.has(e) &&
    (zo.get(e).delete(t), zo.get(e).size || (TE.unobserve(e), zo.delete(e)));
}
function Ja(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function US(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, aE(r.key), r);
  }
}
function el(e, t, n) {
  return (
    t && US(e.prototype, t),
    n && US(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function jg(e, t) {
  return (
    (jg = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    jg(e, t)
  );
}
function Ry(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && jg(e, t);
}
function Kd(e) {
  return (
    (Kd = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Kd(e)
  );
}
function $L() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Dg(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function ML(e, t) {
  if (t && (yt(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Dg(e);
}
function Iy(e) {
  var t = $L();
  return function () {
    var r = Kd(e),
      i;
    if (t) {
      var a = Kd(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else i = r.apply(this, arguments);
    return ML(this, i);
  };
}
var LL = (function (e) {
  Ry(n, e);
  var t = Iy(n);
  function n() {
    return Ja(this, n), t.apply(this, arguments);
  }
  return (
    el(n, [
      {
        key: "render",
        value: function () {
          return this.props.children;
        },
      },
    ]),
    n
  );
})(x.Component);
function NL(e, t) {
  var n = e.children,
    r = e.disabled,
    i = x.useRef(null),
    a = x.useRef(null),
    u = x.useContext(Ng),
    c = typeof n == "function",
    f = c ? n(i) : n,
    d = x.useRef({ width: -1, height: -1, offsetWidth: -1, offsetHeight: -1 }),
    h = !c && x.isValidElement(f) && mc(f),
    v = h ? f.ref : null,
    g = Ay(v, i),
    b = function () {
      var C;
      return (
        fd(i.current) ||
        (i.current && yt(i.current) === "object"
          ? fd(
              (C = i.current) === null || C === void 0
                ? void 0
                : C.nativeElement
            )
          : null) ||
        fd(a.current)
      );
    };
  x.useImperativeHandle(t, function () {
    return b();
  });
  var E = x.useRef(e);
  E.current = e;
  var O = x.useCallback(function (T) {
    var C = E.current,
      y = C.onResize,
      S = C.data,
      k = T.getBoundingClientRect(),
      $ = k.width,
      L = k.height,
      A = T.offsetWidth,
      U = T.offsetHeight,
      G = Math.floor($),
      D = Math.floor(L);
    if (
      d.current.width !== G ||
      d.current.height !== D ||
      d.current.offsetWidth !== A ||
      d.current.offsetHeight !== U
    ) {
      var J = { width: G, height: D, offsetWidth: A, offsetHeight: U };
      d.current = J;
      var le = A === Math.round($) ? $ : A,
        ne = U === Math.round(L) ? L : U,
        se = ue(ue({}, J), {}, { offsetWidth: le, offsetHeight: ne });
      u == null || u(se, T, S),
        y &&
          Promise.resolve().then(function () {
            y(se, T);
          });
    }
  }, []);
  return (
    x.useEffect(
      function () {
        var T = b();
        return (
          T && !r && RL(T, O),
          function () {
            return IL(T, O);
          }
        );
      },
      [i.current, r]
    ),
    x.createElement(LL, { ref: a }, h ? x.cloneElement(f, { ref: g }) : f)
  );
}
var zL = x.forwardRef(NL),
  jL = "rc-observer-key";
function DL(e, t) {
  var n = e.children,
    r = typeof n == "function" ? [n] : Lg(n);
  return r.map(function (i, a) {
    var u = (i == null ? void 0 : i.key) || "".concat(jL, "-").concat(a);
    return x.createElement(
      zL,
      Vt({}, e, { key: u, ref: a === 0 ? t : void 0 }),
      i
    );
  });
}
var $y = x.forwardRef(DL);
$y.Collection = fL;
function FL(e, t) {
  var n = ue({}, e);
  return (
    Array.isArray(t) &&
      t.forEach(function (r) {
        delete n[r];
      }),
    n
  );
}
function BL(e) {
  if (Array.isArray(e)) return kg(e);
}
function AE(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function WL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pr(e) {
  return BL(e) || AE(e) || _y(e) || WL();
}
var RE = function (t) {
    return +setTimeout(t, 16);
  },
  IE = function (t) {
    return clearTimeout(t);
  };
typeof window < "u" &&
  "requestAnimationFrame" in window &&
  ((RE = function (t) {
    return window.requestAnimationFrame(t);
  }),
  (IE = function (t) {
    return window.cancelAnimationFrame(t);
  }));
var VS = 0,
  My = new Map();
function $E(e) {
  My.delete(e);
}
var Ji = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  VS += 1;
  var r = VS;
  function i(a) {
    if (a === 0) $E(r), t();
    else {
      var u = RE(function () {
        i(a - 1);
      });
      My.set(r, u);
    }
  }
  return i(n), r;
};
Ji.cancel = function (e) {
  var t = My.get(e);
  return $E(e), IE(t);
};
function Ly(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
function HL(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    r = new Set();
  function i(a, u) {
    var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      f = r.has(a);
    if ((vc(!f, "Warning: There may be circular references"), f)) return !1;
    if (a === u) return !0;
    if (n && c > 1) return !1;
    r.add(a);
    var d = c + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(u) || a.length !== u.length) return !1;
      for (var h = 0; h < a.length; h++) if (!i(a[h], u[h], d)) return !1;
      return !0;
    }
    if (a && u && yt(a) === "object" && yt(u) === "object") {
      var v = Object.keys(a);
      return v.length !== Object.keys(u).length
        ? !1
        : v.every(function (g) {
            return i(a[g], u[g], d);
          });
    }
    return !1;
  }
  return i(e, t);
}
var GS = "%",
  UL = (function () {
    function e(t) {
      Ja(this, e),
        He(this, "instanceId", void 0),
        He(this, "cache", new Map()),
        (this.instanceId = t);
    }
    return (
      el(e, [
        {
          key: "get",
          value: function (n) {
            return this.cache.get(n.join(GS)) || null;
          },
        },
        {
          key: "update",
          value: function (n, r) {
            var i = n.join(GS),
              a = this.cache.get(i),
              u = r(a);
            u === null ? this.cache.delete(i) : this.cache.set(i, u);
          },
        },
      ]),
      e
    );
  })(),
  Fg = "data-token-hash",
  ja = "data-css-hash",
  Gl = "__cssinjs_instance__";
function VL() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(ja, "]")) || [],
      n = document.head.firstChild;
    Array.from(t).forEach(function (i) {
      (i[Gl] = i[Gl] || e), i[Gl] === e && document.head.insertBefore(i, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(ja, "]"))).forEach(
      function (i) {
        var a = i.getAttribute(ja);
        if (r[a]) {
          if (i[Gl] === e) {
            var u;
            (u = i.parentNode) === null || u === void 0 || u.removeChild(i);
          }
        } else r[a] = !0;
      }
    );
  }
  return new UL(e);
}
var GL = x.createContext({
  hashPriority: "low",
  cache: VL(),
  defaultCache: !0,
});
const Ny = GL;
function KL(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var zy = (function () {
  function e() {
    Ja(this, e),
      He(this, "cache", void 0),
      He(this, "keys", void 0),
      He(this, "cacheCallTimes", void 0),
      (this.cache = new Map()),
      (this.keys = []),
      (this.cacheCallTimes = 0);
  }
  return (
    el(e, [
      {
        key: "size",
        value: function () {
          return this.keys.length;
        },
      },
      {
        key: "internalGet",
        value: function (n) {
          var r,
            i,
            a =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            u = { map: this.cache };
          return (
            n.forEach(function (c) {
              if (!u) u = void 0;
              else {
                var f, d;
                u =
                  (f = u) === null ||
                  f === void 0 ||
                  (d = f.map) === null ||
                  d === void 0
                    ? void 0
                    : d.get(c);
              }
            }),
            (r = u) !== null &&
              r !== void 0 &&
              r.value &&
              a &&
              (u.value[1] = this.cacheCallTimes++),
            (i = u) === null || i === void 0 ? void 0 : i.value
          );
        },
      },
      {
        key: "get",
        value: function (n) {
          var r;
          return (r = this.internalGet(n, !0)) === null || r === void 0
            ? void 0
            : r[0];
        },
      },
      {
        key: "has",
        value: function (n) {
          return !!this.internalGet(n);
        },
      },
      {
        key: "set",
        value: function (n, r) {
          var i = this;
          if (!this.has(n)) {
            if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
              var a = this.keys.reduce(
                  function (d, h) {
                    var v = me(d, 2),
                      g = v[1];
                    return i.internalGet(h)[1] < g
                      ? [h, i.internalGet(h)[1]]
                      : d;
                  },
                  [this.keys[0], this.cacheCallTimes]
                ),
                u = me(a, 1),
                c = u[0];
              this.delete(c);
            }
            this.keys.push(n);
          }
          var f = this.cache;
          n.forEach(function (d, h) {
            if (h === n.length - 1)
              f.set(d, { value: [r, i.cacheCallTimes++] });
            else {
              var v = f.get(d);
              v ? v.map || (v.map = new Map()) : f.set(d, { map: new Map() }),
                (f = f.get(d).map);
            }
          });
        },
      },
      {
        key: "deleteByPath",
        value: function (n, r) {
          var i = n.get(r[0]);
          if (r.length === 1) {
            var a;
            return (
              i.map ? n.set(r[0], { map: i.map }) : n.delete(r[0]),
              (a = i.value) === null || a === void 0 ? void 0 : a[0]
            );
          }
          var u = this.deleteByPath(i.map, r.slice(1));
          return (!i.map || i.map.size === 0) && !i.value && n.delete(r[0]), u;
        },
      },
      {
        key: "delete",
        value: function (n) {
          if (this.has(n))
            return (
              (this.keys = this.keys.filter(function (r) {
                return !KL(r, n);
              })),
              this.deleteByPath(this.cache, n)
            );
        },
      },
    ]),
    e
  );
})();
He(zy, "MAX_CACHE_SIZE", 20);
He(zy, "MAX_CACHE_OFFSET", 5);
var KS = 0,
  ME = (function () {
    function e(t) {
      Ja(this, e),
        He(this, "derivatives", void 0),
        He(this, "id", void 0),
        (this.derivatives = Array.isArray(t) ? t : [t]),
        (this.id = KS),
        t.length === 0 && (t.length > 0, void 0),
        (KS += 1);
    }
    return (
      el(e, [
        {
          key: "getDerivativeToken",
          value: function (n) {
            return this.derivatives.reduce(function (r, i) {
              return i(n, r);
            }, void 0);
          },
        },
      ]),
      e
    );
  })(),
  im = new zy();
function Bg(e) {
  var t = Array.isArray(e) ? e : [e];
  return im.has(t) || im.set(t, new ME(t)), im.get(t);
}
var YL = new WeakMap(),
  om = {};
function XL(e, t) {
  for (var n = YL, r = 0; r < t.length; r += 1) {
    var i = t[r];
    n.has(i) || n.set(i, new WeakMap()), (n = n.get(i));
  }
  return n.has(om) || n.set(om, e()), n.get(om);
}
var YS = new WeakMap();
function Yd(e) {
  var t = YS.get(e) || "";
  return (
    t ||
      (Object.keys(e).forEach(function (n) {
        var r = e[n];
        (t += n),
          r instanceof ME
            ? (t += r.id)
            : r && yt(r) === "object"
            ? (t += Yd(r))
            : (t += r);
      }),
      YS.set(e, t)),
    t
  );
}
function QL(e, t) {
  return Ly("".concat(t, "_").concat(Yd(e)));
}
var Os = "random-"
    .concat(Date.now(), "-")
    .concat(Math.random())
    .replace(/\./g, ""),
  LE = "_bAmBoO_";
function qL(e, t, n) {
  if (Dn()) {
    var r, i;
    gu(e, Os);
    var a = document.createElement("div");
    (a.style.position = "fixed"),
      (a.style.left = "0"),
      (a.style.top = "0"),
      t == null || t(a),
      document.body.appendChild(a);
    var u = n
      ? n(a)
      : (r = getComputedStyle(a).content) === null || r === void 0
      ? void 0
      : r.includes(LE);
    return (
      (i = a.parentNode) === null || i === void 0 || i.removeChild(a), Wd(Os), u
    );
  }
  return !1;
}
var am = void 0;
function ZL() {
  return (
    am === void 0 &&
      (am = qL(
        "@layer "
          .concat(Os, " { .")
          .concat(Os, ' { content: "')
          .concat(LE, '"!important; } }'),
        function (e) {
          e.className = Os;
        }
      )),
    am
  );
}
var XS = Dn() ? x.useLayoutEffect : x.useEffect,
  On = function (t, n) {
    var r = x.useRef(!0);
    XS(function () {
      return t(r.current);
    }, n),
      XS(function () {
        return (
          (r.current = !1),
          function () {
            r.current = !0;
          }
        );
      }, []);
  },
  QS = function (t, n) {
    On(function (r) {
      if (!r) return t();
    }, n);
  },
  JL = ue({}, cp),
  qS = JL.useInsertionEffect,
  e8 = function (t, n, r) {
    x.useMemo(t, r),
      On(function () {
        return n(!0);
      }, r);
  },
  t8 = qS
    ? function (e, t, n) {
        return qS(function () {
          return e(), t();
        }, n);
      }
    : e8;
const n8 = t8;
var r8 = ue({}, cp),
  i8 = r8.useInsertionEffect,
  o8 = function (t) {
    var n = [],
      r = !1;
    function i(a) {
      r || n.push(a);
    }
    return (
      x.useEffect(function () {
        return (
          (r = !1),
          function () {
            (r = !0),
              n.length &&
                n.forEach(function (a) {
                  return a();
                });
          }
        );
      }, t),
      i
    );
  },
  a8 = function () {
    return function (t) {
      t();
    };
  },
  l8 = typeof i8 < "u" ? o8 : a8;
const u8 = l8;
function NE(e, t, n, r, i) {
  var a = x.useContext(Ny),
    u = a.cache,
    c = [e].concat(Pr(t)),
    f = c.join("_"),
    d = u8([f]),
    h = function (E) {
      u.update(c, function (O) {
        var T = O || [],
          C = me(T, 2),
          y = C[0],
          S = y === void 0 ? 0 : y,
          k = C[1],
          $ = k,
          L = $ || n(),
          A = [S, L];
        return E ? E(A) : A;
      });
    };
  x.useMemo(
    function () {
      h();
    },
    [f]
  );
  var v = u.get(c),
    g = v[1];
  return (
    n8(
      function () {
        i == null || i(g);
      },
      function (b) {
        return (
          h(function (E) {
            var O = me(E, 2),
              T = O[0],
              C = O[1];
            return b && T === 0 && (i == null || i(g)), [T + 1, C];
          }),
          function () {
            u.update(c, function (E) {
              var O = E || [],
                T = me(O, 2),
                C = T[0],
                y = C === void 0 ? 0 : C,
                S = T[1],
                k = y - 1;
              return k === 0
                ? (d(function () {
                    return r == null ? void 0 : r(S, !1);
                  }),
                  null)
                : [y - 1, S];
            });
          }
        );
      },
      [f]
    ),
    g
  );
}
var s8 = {},
  c8 = "css",
  Pa = new Map();
function f8(e) {
  Pa.set(e, (Pa.get(e) || 0) + 1);
}
function d8(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll(
      "style[".concat(Fg, '="').concat(e, '"]')
    );
    n.forEach(function (r) {
      if (r[Gl] === t) {
        var i;
        (i = r.parentNode) === null || i === void 0 || i.removeChild(r);
      }
    });
  }
}
var p8 = 0;
function h8(e, t) {
  Pa.set(e, (Pa.get(e) || 0) - 1);
  var n = Array.from(Pa.keys()),
    r = n.filter(function (i) {
      var a = Pa.get(i) || 0;
      return a <= 0;
    });
  n.length - r.length > p8 &&
    r.forEach(function (i) {
      d8(i, t), Pa.delete(i);
    });
}
var v8 = function (t, n, r, i) {
  var a = r.getDerivativeToken(t),
    u = ue(ue({}, a), n);
  return i && (u = i(u)), u;
};
function m8(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = x.useContext(Ny),
    i = r.cache.instanceId,
    a = n.salt,
    u = a === void 0 ? "" : a,
    c = n.override,
    f = c === void 0 ? s8 : c,
    d = n.formatToken,
    h = n.getComputedToken,
    v = XL(function () {
      return Object.assign.apply(Object, [{}].concat(Pr(t)));
    }, t),
    g = Yd(v),
    b = Yd(f),
    E = NE(
      "token",
      [u, e.id, g, b],
      function () {
        var O = h ? h(v, f, e) : v8(v, f, e, d),
          T = QL(O, u);
        (O._tokenKey = T), f8(T);
        var C = "".concat(c8, "-").concat(Ly(T));
        return (O._hashId = C), [O, C];
      },
      function (O) {
        h8(O[0]._tokenKey, i);
      }
    );
  return E;
}
var g8 = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  zE = "comm",
  jE = "rule",
  DE = "decl",
  y8 = "@import",
  b8 = "@keyframes",
  w8 = "@layer",
  S8 = Math.abs,
  jy = String.fromCharCode;
function FE(e) {
  return e.trim();
}
function dd(e, t, n) {
  return e.replace(t, n);
}
function x8(e, t) {
  return e.indexOf(t);
}
function Ys(e, t) {
  return e.charCodeAt(t) | 0;
}
function Xs(e, t, n) {
  return e.slice(t, n);
}
function Vi(e) {
  return e.length;
}
function C8(e) {
  return e.length;
}
function $f(e, t) {
  return t.push(e), e;
}
var sh = 1,
  bu = 1,
  BE = 0,
  Tr = 0,
  zt = 0,
  Eu = "";
function Dy(e, t, n, r, i, a, u, c) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: a,
    line: sh,
    column: bu,
    length: u,
    return: "",
    siblings: c,
  };
}
function _8() {
  return zt;
}
function E8() {
  return (
    (zt = Tr > 0 ? Ys(Eu, --Tr) : 0), bu--, zt === 10 && ((bu = 1), sh--), zt
  );
}
function Xr() {
  return (
    (zt = Tr < BE ? Ys(Eu, Tr++) : 0), bu++, zt === 10 && ((bu = 1), sh++), zt
  );
}
function Da() {
  return Ys(Eu, Tr);
}
function pd() {
  return Tr;
}
function ch(e, t) {
  return Xs(Eu, e, t);
}
function Wg(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function O8(e) {
  return (sh = bu = 1), (BE = Vi((Eu = e))), (Tr = 0), [];
}
function k8(e) {
  return (Eu = ""), e;
}
function lm(e) {
  return FE(ch(Tr - 1, Hg(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function P8(e) {
  for (; (zt = Da()) && zt < 33; ) Xr();
  return Wg(e) > 2 || Wg(zt) > 3 ? "" : " ";
}
function T8(e, t) {
  for (
    ;
    --t &&
    Xr() &&
    !(zt < 48 || zt > 102 || (zt > 57 && zt < 65) || (zt > 70 && zt < 97));

  );
  return ch(e, pd() + (t < 6 && Da() == 32 && Xr() == 32));
}
function Hg(e) {
  for (; Xr(); )
    switch (zt) {
      case e:
        return Tr;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Hg(zt);
        break;
      case 40:
        e === 41 && Hg(e);
        break;
      case 92:
        Xr();
        break;
    }
  return Tr;
}
function A8(e, t) {
  for (; Xr() && e + zt !== 47 + 10; )
    if (e + zt === 42 + 42 && Da() === 47) break;
  return "/*" + ch(t, Tr - 1) + "*" + jy(e === 47 ? e : Xr());
}
function R8(e) {
  for (; !Wg(Da()); ) Xr();
  return ch(e, Tr);
}
function I8(e) {
  return k8(hd("", null, null, null, [""], (e = O8(e)), 0, [0], e));
}
function hd(e, t, n, r, i, a, u, c, f) {
  for (
    var d = 0,
      h = 0,
      v = u,
      g = 0,
      b = 0,
      E = 0,
      O = 1,
      T = 1,
      C = 1,
      y = 0,
      S = "",
      k = i,
      $ = a,
      L = r,
      A = S;
    T;

  )
    switch (((E = y), (y = Xr()))) {
      case 40:
        if (E != 108 && Ys(A, v - 1) == 58) {
          x8((A += dd(lm(y), "&", "&\f")), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += lm(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += P8(E);
        break;
      case 92:
        A += T8(pd() - 1, 7);
        continue;
      case 47:
        switch (Da()) {
          case 42:
          case 47:
            $f($8(A8(Xr(), pd()), t, n, f), f);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * O:
        c[d++] = Vi(A) * C;
      case 125 * O:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            T = 0;
          case 59 + h:
            C == -1 && (A = dd(A, /\f/g, "")),
              b > 0 &&
                Vi(A) - v &&
                $f(
                  b > 32
                    ? JS(A + ";", r, n, v - 1, f)
                    : JS(dd(A, " ", "") + ";", r, n, v - 2, f),
                  f
                );
            break;
          case 59:
            A += ";";
          default:
            if (
              ($f(
                (L = ZS(A, t, n, d, h, i, c, S, (k = []), ($ = []), v, a)),
                a
              ),
              y === 123)
            )
              if (h === 0) hd(A, t, L, L, k, a, v, c, $);
              else
                switch (g === 99 && Ys(A, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    hd(
                      e,
                      L,
                      L,
                      r && $f(ZS(e, L, L, 0, 0, i, c, S, i, (k = []), v, $), $),
                      i,
                      $,
                      v,
                      c,
                      r ? k : $
                    );
                    break;
                  default:
                    hd(A, L, L, L, [""], $, 0, c, $);
                }
        }
        (d = h = b = 0), (O = C = 1), (S = A = ""), (v = u);
        break;
      case 58:
        (v = 1 + Vi(A)), (b = E);
      default:
        if (O < 1) {
          if (y == 123) --O;
          else if (y == 125 && O++ == 0 && E8() == 125) continue;
        }
        switch (((A += jy(y)), y * O)) {
          case 38:
            C = h > 0 ? 1 : ((A += "\f"), -1);
            break;
          case 44:
            (c[d++] = (Vi(A) - 1) * C), (C = 1);
            break;
          case 64:
            Da() === 45 && (A += lm(Xr())),
              (g = Da()),
              (h = v = Vi((S = A += R8(pd())))),
              y++;
            break;
          case 45:
            E === 45 && Vi(A) == 2 && (O = 0);
        }
    }
  return a;
}
function ZS(e, t, n, r, i, a, u, c, f, d, h, v) {
  for (
    var g = i - 1, b = i === 0 ? a : [""], E = C8(b), O = 0, T = 0, C = 0;
    O < r;
    ++O
  )
    for (var y = 0, S = Xs(e, g + 1, (g = S8((T = u[O])))), k = e; y < E; ++y)
      (k = FE(T > 0 ? b[y] + " " + S : dd(S, /&\f/g, b[y]))) && (f[C++] = k);
  return Dy(e, t, n, i === 0 ? jE : c, f, d, h, v);
}
function $8(e, t, n, r) {
  return Dy(e, t, n, zE, jy(_8()), Xs(e, 2, -2), 0, r);
}
function JS(e, t, n, r, i) {
  return Dy(e, t, n, DE, Xs(e, 0, r), Xs(e, r + 1, -1), r, i);
}
function Ug(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function M8(e, t, n, r) {
  switch (e.type) {
    case w8:
      if (e.children.length) break;
    case y8:
    case DE:
      return (e.return = e.return || e.value);
    case zE:
      return "";
    case b8:
      return (e.return = e.value + "{" + Ug(e.children, r) + "}");
    case jE:
      if (!Vi((e.value = e.props.join(",")))) return "";
  }
  return Vi((n = Ug(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
var ex = "data-ant-cssinjs-cache-path",
  WE = "_FILE_STYLE__",
  Fa,
  HE = !0;
function L8() {
  if (!Fa && ((Fa = {}), Dn())) {
    var e = document.createElement("div");
    (e.className = ex),
      (e.style.position = "fixed"),
      (e.style.visibility = "hidden"),
      (e.style.top = "-9999px"),
      document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    (t = t.replace(/^"/, "").replace(/"$/, "")),
      t.split(";").forEach(function (i) {
        var a = i.split(":"),
          u = me(a, 2),
          c = u[0],
          f = u[1];
        Fa[c] = f;
      });
    var n = document.querySelector("style[".concat(ex, "]"));
    if (n) {
      var r;
      (HE = !1),
        (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function N8(e) {
  return L8(), !!Fa[e];
}
function z8(e) {
  var t = Fa[e],
    n = null;
  if (t && Dn())
    if (HE) n = WE;
    else {
      var r = document.querySelector(
        "style[".concat(ja, '="').concat(Fa[e], '"]')
      );
      r ? (n = r.innerHTML) : delete Fa[e];
    }
  return [n, t];
}
var tx = Dn(),
  j8 = "_skip_check_",
  UE = "_multi_value_";
function nx(e) {
  var t = Ug(I8(e), M8);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function D8(e) {
  return yt(e) === "object" && e && (j8 in e || UE in e);
}
function F8(e, t, n) {
  if (!t) return e;
  var r = ".".concat(t),
    i = n === "low" ? ":where(".concat(r, ")") : r,
    a = e.split(",").map(function (u) {
      var c,
        f = u.trim().split(/\s+/),
        d = f[0] || "",
        h =
          ((c = d.match(/^\w+/)) === null || c === void 0 ? void 0 : c[0]) ||
          "";
      return (
        (d = "".concat(h).concat(i).concat(d.slice(h.length))),
        [d].concat(Pr(f.slice(1))).join(" ")
      );
    });
  return a.join(",");
}
var B8 = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { root: !0, parentSelectors: [] },
    i = r.root,
    a = r.injectHash,
    u = r.parentSelectors,
    c = n.hashId,
    f = n.layer;
  n.path;
  var d = n.hashPriority,
    h = n.transformers,
    v = h === void 0 ? [] : h;
  n.linters;
  var g = "",
    b = {};
  function E(S) {
    var k = S.getName(c);
    if (!b[k]) {
      var $ = e(S.style, n, { root: !1, parentSelectors: u }),
        L = me($, 1),
        A = L[0];
      b[k] = "@keyframes ".concat(S.getName(c)).concat(A);
    }
  }
  function O(S) {
    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return (
      S.forEach(function ($) {
        Array.isArray($) ? O($, k) : $ && k.push($);
      }),
      k
    );
  }
  var T = O(Array.isArray(t) ? t : [t]);
  if (
    (T.forEach(function (S) {
      var k = typeof S == "string" && !i ? {} : S;
      if (typeof k == "string")
        g += "".concat(
          k,
          `
`
        );
      else if (k._keyframe) E(k);
      else {
        var $ = v.reduce(function (L, A) {
          var U;
          return (
            (A == null || (U = A.visit) === null || U === void 0
              ? void 0
              : U.call(A, L)) || L
          );
        }, k);
        Object.keys($).forEach(function (L) {
          var A = $[L];
          if (
            yt(A) === "object" &&
            A &&
            (L !== "animationName" || !A._keyframe) &&
            !D8(A)
          ) {
            var U = !1,
              G = L.trim(),
              D = !1;
            (i || a) && c
              ? G.startsWith("@")
                ? (U = !0)
                : (G = F8(L, c, d))
              : i && !c && (G === "&" || G === "") && ((G = ""), (D = !0));
            var J = e(A, n, {
                root: D,
                injectHash: U,
                parentSelectors: [].concat(Pr(u), [G]),
              }),
              le = me(J, 2),
              ne = le[0],
              se = le[1];
            (b = ue(ue({}, b), se)), (g += "".concat(G).concat(ne));
          } else {
            let R = function (B, W) {
              var H = B.replace(/[A-Z]/g, function (de) {
                  return "-".concat(de.toLowerCase());
                }),
                Q = W;
              !g8[B] &&
                typeof Q == "number" &&
                Q !== 0 &&
                (Q = "".concat(Q, "px")),
                B === "animationName" &&
                  W !== null &&
                  W !== void 0 &&
                  W._keyframe &&
                  (E(W), (Q = W.getName(c))),
                (g += "".concat(H, ":").concat(Q, ";"));
            };
            var z = R,
              q,
              j =
                (q = A == null ? void 0 : A.value) !== null && q !== void 0
                  ? q
                  : A;
            yt(A) === "object" &&
            A !== null &&
            A !== void 0 &&
            A[UE] &&
            Array.isArray(j)
              ? j.forEach(function (B) {
                  R(L, B);
                })
              : R(L, j);
          }
        });
      }
    }),
    !i)
  )
    g = "{".concat(g, "}");
  else if (f && ZL()) {
    var C = f.split(","),
      y = C[C.length - 1].trim();
    (g = "@layer ".concat(y, " {").concat(g, "}")),
      C.length > 1 && (g = "@layer ".concat(f, "{%%%:%}").concat(g));
  }
  return [g, b];
};
function W8(e, t) {
  return Ly("".concat(e.join("%")).concat(t));
}
function H8() {
  return null;
}
function Vg(e, t) {
  var n = e.token,
    r = e.path,
    i = e.hashId,
    a = e.layer,
    u = e.nonce,
    c = e.clientOnly,
    f = e.order,
    d = f === void 0 ? 0 : f,
    h = x.useContext(Ny),
    v = h.autoClear;
  h.mock;
  var g = h.defaultCache,
    b = h.hashPriority,
    E = h.container,
    O = h.ssrInline,
    T = h.transformers,
    C = h.linters,
    y = h.cache,
    S = n._tokenKey,
    k = [S].concat(Pr(r)),
    $ = tx,
    L = NE(
      "style",
      k,
      function () {
        var J = k.join("|");
        if (N8(J)) {
          var le = z8(J),
            ne = me(le, 2),
            se = ne[0],
            q = ne[1];
          if (se) return [se, S, q, {}, c, d];
        }
        var j = t(),
          z = B8(j, {
            hashId: i,
            hashPriority: b,
            layer: a,
            path: r.join("-"),
            transformers: T,
            linters: C,
          }),
          R = me(z, 2),
          B = R[0],
          W = R[1],
          H = nx(B),
          Q = W8(k, H);
        return [H, S, Q, W, c, d];
      },
      function (J, le) {
        var ne = me(J, 3),
          se = ne[2];
        (le || v) && tx && Wd(se, { mark: ja });
      },
      function (J) {
        var le = me(J, 4),
          ne = le[0];
        le[1];
        var se = le[2],
          q = le[3];
        if ($ && ne !== WE) {
          var j = { mark: ja, prepend: "queue", attachTo: E, priority: d },
            z = typeof u == "function" ? u() : u;
          z && (j.csp = { nonce: z });
          var R = gu(ne, se, j);
          (R[Gl] = y.instanceId),
            R.setAttribute(Fg, S),
            Object.keys(q).forEach(function (B) {
              gu(nx(q[B]), "_effect-".concat(B), j);
            });
        }
      }
    ),
    A = me(L, 3),
    U = A[0],
    G = A[1],
    D = A[2];
  return function (J) {
    var le;
    if (!O || $ || !g) le = x.createElement(H8, null);
    else {
      var ne;
      le = x.createElement(
        "style",
        Vt({}, ((ne = {}), He(ne, Fg, G), He(ne, ja, D), ne), {
          dangerouslySetInnerHTML: { __html: U },
        })
      );
    }
    return x.createElement(x.Fragment, null, le, J);
  };
}
var Ir = (function () {
  function e(t, n) {
    Ja(this, e),
      He(this, "name", void 0),
      He(this, "style", void 0),
      He(this, "_keyframe", !0),
      (this.name = t),
      (this.style = n);
  }
  return (
    el(e, [
      {
        key: "getName",
        value: function () {
          var n =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          return n ? "".concat(n, "-").concat(this.name) : this.name;
        },
      },
    ]),
    e
  );
})();
function Pl(e) {
  return (e.notSplit = !0), e;
}
Pl(["borderTop", "borderBottom"]),
  Pl(["borderTop"]),
  Pl(["borderBottom"]),
  Pl(["borderLeft", "borderRight"]),
  Pl(["borderLeft"]),
  Pl(["borderRight"]);
function U8(e) {
  return iE(e) || AE(e) || _y(e) || oE();
}
function Gg(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null) return;
    n = n[t[r]];
  }
  return n;
}
function VE(e, t, n, r) {
  if (!t.length) return n;
  var i = U8(t),
    a = i[0],
    u = i.slice(1),
    c;
  return (
    !e && typeof a == "number"
      ? (c = [])
      : Array.isArray(e)
      ? (c = Pr(e))
      : (c = ue({}, e)),
    r && n === void 0 && u.length === 1
      ? delete c[a][u[0]]
      : (c[a] = VE(c[a], u, n, r)),
    c
  );
}
function um(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Gg(e, t.slice(0, -1))
    ? e
    : VE(e, t, n, r);
}
function V8(e) {
  return (
    yt(e) === "object" &&
    e !== null &&
    Object.getPrototypeOf(e) === Object.prototype
  );
}
function rx(e) {
  return Array.isArray(e) ? [] : {};
}
var G8 = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function K8() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = rx(t[0]);
  return (
    t.forEach(function (i) {
      function a(u, c) {
        var f = new Set(c),
          d = Gg(i, u),
          h = Array.isArray(d);
        if (h || V8(d)) {
          if (!f.has(d)) {
            f.add(d);
            var v = Gg(r, u);
            h
              ? (r = um(r, u, []))
              : (!v || yt(v) !== "object") && (r = um(r, u, rx(d))),
              G8(d).forEach(function (g) {
                a([].concat(Pr(u), [g]), f);
              });
          }
        } else r = um(r, u, d);
      }
      a([]);
    }),
    r
  );
}
function Y8() {}
const X8 = x.createContext({}),
  Q8 = () => {
    const e = () => {};
    return (e.deprecated = Y8), e;
  },
  q8 = x.createContext(void 0),
  Z8 = {
    items_per_page: "/ page",
    jump_to: "Go to",
    jump_to_confirm: "confirm",
    page: "Page",
    prev_page: "Previous Page",
    next_page: "Next Page",
    prev_5: "Previous 5 Pages",
    next_5: "Next 5 Pages",
    prev_3: "Previous 3 Pages",
    next_3: "Next 3 Pages",
    page_size: "Page Size",
  };
var J8 = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century",
};
const eN = {
    placeholder: "Select time",
    rangePlaceholder: ["Start time", "End time"],
  },
  GE = eN,
  tN = {
    lang: Object.assign(
      {
        placeholder: "Select date",
        yearPlaceholder: "Select year",
        quarterPlaceholder: "Select quarter",
        monthPlaceholder: "Select month",
        weekPlaceholder: "Select week",
        rangePlaceholder: ["Start date", "End date"],
        rangeYearPlaceholder: ["Start year", "End year"],
        rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
        rangeMonthPlaceholder: ["Start month", "End month"],
        rangeWeekPlaceholder: ["Start week", "End week"],
      },
      J8
    ),
    timePickerLocale: Object.assign({}, GE),
  },
  ix = tN,
  Xn = "${label} is not a valid ${type}",
  nN = {
    locale: "en",
    Pagination: Z8,
    DatePicker: ix,
    TimePicker: GE,
    Calendar: ix,
    global: { placeholder: "Please select" },
    Table: {
      filterTitle: "Filter menu",
      filterConfirm: "OK",
      filterReset: "Reset",
      filterEmptyText: "No filters",
      filterCheckall: "Select all items",
      filterSearchPlaceholder: "Search in filters",
      emptyText: "No data",
      selectAll: "Select current page",
      selectInvert: "Invert current page",
      selectNone: "Clear all data",
      selectionAll: "Select all data",
      sortTitle: "Sort",
      expand: "Expand row",
      collapse: "Collapse row",
      triggerDesc: "Click to sort descending",
      triggerAsc: "Click to sort ascending",
      cancelSort: "Click to cancel sorting",
    },
    Tour: { Next: "Next", Previous: "Previous", Finish: "Finish" },
    Modal: { okText: "OK", cancelText: "Cancel", justOkText: "OK" },
    Popconfirm: { okText: "OK", cancelText: "Cancel" },
    Transfer: {
      titles: ["", ""],
      searchPlaceholder: "Search here",
      itemUnit: "item",
      itemsUnit: "items",
      remove: "Remove",
      selectCurrent: "Select current page",
      removeCurrent: "Remove current page",
      selectAll: "Select all data",
      removeAll: "Remove all data",
      selectInvert: "Invert current page",
    },
    Upload: {
      uploading: "Uploading...",
      removeFile: "Remove file",
      uploadError: "Upload error",
      previewFile: "Preview file",
      downloadFile: "Download file",
    },
    Empty: { description: "No data" },
    Icon: { icon: "icon" },
    Text: { edit: "Edit", copy: "Copy", copied: "Copied", expand: "Expand" },
    PageHeader: { back: "Back" },
    Form: {
      optional: "(optional)",
      defaultValidateMessages: {
        default: "Field validation error for ${label}",
        required: "Please enter ${label}",
        enum: "${label} must be one of [${enum}]",
        whitespace: "${label} cannot be a blank character",
        date: {
          format: "${label} date format is invalid",
          parse: "${label} cannot be converted to a date",
          invalid: "${label} is an invalid date",
        },
        types: {
          string: Xn,
          method: Xn,
          array: Xn,
          object: Xn,
          number: Xn,
          date: Xn,
          boolean: Xn,
          integer: Xn,
          float: Xn,
          regexp: Xn,
          email: Xn,
          url: Xn,
          hex: Xn,
        },
        string: {
          len: "${label} must be ${len} characters",
          min: "${label} must be at least ${min} characters",
          max: "${label} must be up to ${max} characters",
          range: "${label} must be between ${min}-${max} characters",
        },
        number: {
          len: "${label} must be equal to ${len}",
          min: "${label} must be minimum ${min}",
          max: "${label} must be maximum ${max}",
          range: "${label} must be between ${min}-${max}",
        },
        array: {
          len: "Must be ${len} ${label}",
          min: "At least ${min} ${label}",
          max: "At most ${max} ${label}",
          range: "The amount of ${label} must be between ${min}-${max}",
        },
        pattern: { mismatch: "${label} does not match the pattern ${pattern}" },
      },
    },
    Image: { preview: "Preview" },
    QRCode: { expired: "QR code expired", refresh: "Refresh" },
    ColorPicker: { presetEmpty: "Empty" },
  },
  fh = nN;
Object.assign({}, fh.Modal);
let vd = [];
const ox = () =>
  vd.reduce((e, t) => Object.assign(Object.assign({}, e), t), fh.Modal);
function rN(e) {
  if (e) {
    const t = Object.assign({}, e);
    return (
      vd.push(t),
      ox(),
      () => {
        (vd = vd.filter((n) => n !== t)), ox();
      }
    );
  }
  Object.assign({}, fh.Modal);
}
const iN = x.createContext(void 0),
  KE = iN,
  oN = "internalMark",
  aN = (e) => {
    const { locale: t = {}, children: n, _ANT_MARK__: r } = e;
    x.useEffect(() => rN(t && t.Modal), [t]);
    const i = x.useMemo(
      () => Object.assign(Object.assign({}, t), { exist: !0 }),
      [t]
    );
    return x.createElement(KE.Provider, { value: i }, n);
  },
  lN = aN,
  uN = (e) => {
    const { controlHeight: t } = e;
    return {
      controlHeightSM: t * 0.75,
      controlHeightXS: t * 0.5,
      controlHeightLG: t * 1.25,
    };
  },
  sN = uN;
function cN(e) {
  const { sizeUnit: t, sizeStep: n } = e;
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3),
  };
}
const YE = {
    blue: "#1677ff",
    purple: "#722ED1",
    cyan: "#13C2C2",
    green: "#52C41A",
    magenta: "#EB2F96",
    pink: "#eb2f96",
    red: "#F5222D",
    orange: "#FA8C16",
    yellow: "#FADB14",
    volcano: "#FA541C",
    geekblue: "#2F54EB",
    gold: "#FAAD14",
    lime: "#A0D911",
  },
  fN = Object.assign(Object.assign({}, YE), {
    colorPrimary: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1677ff",
    colorLink: "",
    colorTextBase: "",
    colorBgBase: "",
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    lineWidth: 1,
    lineType: "solid",
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
    motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1,
    motion: !0,
  }),
  Qs = fN;
function dN(e, t) {
  let { generateColorPalettes: n, generateNeutralColorPalettes: r } = t;
  const {
      colorSuccess: i,
      colorWarning: a,
      colorError: u,
      colorInfo: c,
      colorPrimary: f,
      colorBgBase: d,
      colorTextBase: h,
    } = e,
    v = n(f),
    g = n(i),
    b = n(a),
    E = n(u),
    O = n(c),
    T = r(d, h),
    C = e.colorLink || e.colorInfo,
    y = n(C);
  return Object.assign(Object.assign({}, T), {
    colorPrimaryBg: v[1],
    colorPrimaryBgHover: v[2],
    colorPrimaryBorder: v[3],
    colorPrimaryBorderHover: v[4],
    colorPrimaryHover: v[5],
    colorPrimary: v[6],
    colorPrimaryActive: v[7],
    colorPrimaryTextHover: v[8],
    colorPrimaryText: v[9],
    colorPrimaryTextActive: v[10],
    colorSuccessBg: g[1],
    colorSuccessBgHover: g[2],
    colorSuccessBorder: g[3],
    colorSuccessBorderHover: g[4],
    colorSuccessHover: g[4],
    colorSuccess: g[6],
    colorSuccessActive: g[7],
    colorSuccessTextHover: g[8],
    colorSuccessText: g[9],
    colorSuccessTextActive: g[10],
    colorErrorBg: E[1],
    colorErrorBgHover: E[2],
    colorErrorBorder: E[3],
    colorErrorBorderHover: E[4],
    colorErrorHover: E[5],
    colorError: E[6],
    colorErrorActive: E[7],
    colorErrorTextHover: E[8],
    colorErrorText: E[9],
    colorErrorTextActive: E[10],
    colorWarningBg: b[1],
    colorWarningBgHover: b[2],
    colorWarningBorder: b[3],
    colorWarningBorderHover: b[4],
    colorWarningHover: b[4],
    colorWarning: b[6],
    colorWarningActive: b[7],
    colorWarningTextHover: b[8],
    colorWarningText: b[9],
    colorWarningTextActive: b[10],
    colorInfoBg: O[1],
    colorInfoBgHover: O[2],
    colorInfoBorder: O[3],
    colorInfoBorderHover: O[4],
    colorInfoHover: O[4],
    colorInfo: O[6],
    colorInfoActive: O[7],
    colorInfoTextHover: O[8],
    colorInfoText: O[9],
    colorInfoTextActive: O[10],
    colorLinkHover: y[4],
    colorLink: y[6],
    colorLinkActive: y[7],
    colorBgMask: new er("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff",
  });
}
const pN = (e) => {
    let t = e,
      n = e,
      r = e,
      i = e;
    return (
      e < 6 && e >= 5
        ? (t = e + 1)
        : e < 16 && e >= 6
        ? (t = e + 2)
        : e >= 16 && (t = 16),
      e < 7 && e >= 5
        ? (n = 4)
        : e < 8 && e >= 7
        ? (n = 5)
        : e < 14 && e >= 8
        ? (n = 6)
        : e < 16 && e >= 14
        ? (n = 7)
        : e >= 16 && (n = 8),
      e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
      e > 4 && e < 8 ? (i = 4) : e >= 8 && (i = 6),
      {
        borderRadius: e,
        borderRadiusXS: r,
        borderRadiusSM: n,
        borderRadiusLG: t,
        borderRadiusOuter: i,
      }
    );
  },
  hN = pN;
function vN(e) {
  const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: i } = e;
  return Object.assign(
    {
      motionDurationFast: `${(n + t).toFixed(1)}s`,
      motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
      lineWidthBold: i + 1,
    },
    hN(r)
  );
}
const Wi = (e, t) => new er(e).setAlpha(t).toRgbString(),
  ls = (e, t) => new er(e).darken(t).toHexString(),
  mN = (e) => {
    const t = Ka(e);
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[4],
      6: t[5],
      7: t[6],
      8: t[4],
      9: t[5],
      10: t[6],
    };
  },
  gN = (e, t) => {
    const n = e || "#fff",
      r = t || "#000";
    return {
      colorBgBase: n,
      colorTextBase: r,
      colorText: Wi(r, 0.88),
      colorTextSecondary: Wi(r, 0.65),
      colorTextTertiary: Wi(r, 0.45),
      colorTextQuaternary: Wi(r, 0.25),
      colorFill: Wi(r, 0.15),
      colorFillSecondary: Wi(r, 0.06),
      colorFillTertiary: Wi(r, 0.04),
      colorFillQuaternary: Wi(r, 0.02),
      colorBgLayout: ls(n, 4),
      colorBgContainer: ls(n, 0),
      colorBgElevated: ls(n, 0),
      colorBgSpotlight: Wi(r, 0.85),
      colorBgBlur: "transparent",
      colorBorder: ls(n, 15),
      colorBorderSecondary: ls(n, 6),
    };
  };
function yN(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const i = r - 1,
      a = e * Math.pow(2.71828, i / 5),
      u = r > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(u / 2) * 2;
  });
  return (
    (t[1] = e),
    t.map((n) => {
      const r = n + 8;
      return { size: n, lineHeight: r / n };
    })
  );
}
const bN = (e) => {
    const t = yN(e),
      n = t.map((i) => i.size),
      r = t.map((i) => i.lineHeight);
    return {
      fontSizeSM: n[0],
      fontSize: n[1],
      fontSizeLG: n[2],
      fontSizeXL: n[3],
      fontSizeHeading1: n[6],
      fontSizeHeading2: n[5],
      fontSizeHeading3: n[4],
      fontSizeHeading4: n[3],
      fontSizeHeading5: n[2],
      lineHeight: r[1],
      lineHeightLG: r[2],
      lineHeightSM: r[0],
      lineHeightHeading1: r[6],
      lineHeightHeading2: r[5],
      lineHeightHeading3: r[4],
      lineHeightHeading4: r[3],
      lineHeightHeading5: r[2],
    };
  },
  wN = bN;
function SN(e) {
  const t = Object.keys(YE)
    .map((n) => {
      const r = Ka(e[n]);
      return new Array(10)
        .fill(1)
        .reduce(
          (i, a, u) => (
            (i[`${n}-${u + 1}`] = r[u]), (i[`${n}${u + 1}`] = r[u]), i
          ),
          {}
        );
    })
    .reduce((n, r) => ((n = Object.assign(Object.assign({}, n), r)), n), {});
  return Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, e), t),
            dN(e, {
              generateColorPalettes: mN,
              generateNeutralColorPalettes: gN,
            })
          ),
          wN(e.fontSize)
        ),
        cN(e)
      ),
      sN(e)
    ),
    vN(e)
  );
}
const XE = Bg(SN),
  QE = { token: Qs, override: { override: Qs }, hashed: !0 },
  qE = Te.createContext(QE),
  ZE = "anticon",
  xN = (e, t) => t || (e ? `ant-${e}` : "ant"),
  bi = x.createContext({ getPrefixCls: xN, iconPrefixCls: ZE }),
  CN = `-ant-${Date.now()}-${Math.random()}`;
function _N(e, t) {
  const n = {},
    r = (u, c) => {
      let f = u.clone();
      return (f = (c == null ? void 0 : c(f)) || f), f.toRgbString();
    },
    i = (u, c) => {
      const f = new er(u),
        d = Ka(f.toRgbString());
      (n[`${c}-color`] = r(f)),
        (n[`${c}-color-disabled`] = d[1]),
        (n[`${c}-color-hover`] = d[4]),
        (n[`${c}-color-active`] = d[6]),
        (n[`${c}-color-outline`] = f.clone().setAlpha(0.2).toRgbString()),
        (n[`${c}-color-deprecated-bg`] = d[0]),
        (n[`${c}-color-deprecated-border`] = d[2]);
    };
  if (t.primaryColor) {
    i(t.primaryColor, "primary");
    const u = new er(t.primaryColor),
      c = Ka(u.toRgbString());
    c.forEach((d, h) => {
      n[`primary-${h + 1}`] = d;
    }),
      (n["primary-color-deprecated-l-35"] = r(u, (d) => d.lighten(35))),
      (n["primary-color-deprecated-l-20"] = r(u, (d) => d.lighten(20))),
      (n["primary-color-deprecated-t-20"] = r(u, (d) => d.tint(20))),
      (n["primary-color-deprecated-t-50"] = r(u, (d) => d.tint(50))),
      (n["primary-color-deprecated-f-12"] = r(u, (d) =>
        d.setAlpha(d.getAlpha() * 0.12)
      ));
    const f = new er(c[0]);
    (n["primary-color-active-deprecated-f-30"] = r(f, (d) =>
      d.setAlpha(d.getAlpha() * 0.3)
    )),
      (n["primary-color-active-deprecated-d-02"] = r(f, (d) => d.darken(2)));
  }
  return (
    t.successColor && i(t.successColor, "success"),
    t.warningColor && i(t.warningColor, "warning"),
    t.errorColor && i(t.errorColor, "error"),
    t.infoColor && i(t.infoColor, "info"),
    `
  :root {
    ${Object.keys(n).map((u) => `--${e}-${u}: ${n[u]};`).join(`
`)}
  }
  `.trim()
  );
}
function EN(e, t) {
  const n = _N(e, t);
  Dn() && gu(n, `${CN}-dynamic-theme`);
}
const Kg = x.createContext(!1),
  ON = (e) => {
    let { children: t, disabled: n } = e;
    const r = x.useContext(Kg);
    return x.createElement(Kg.Provider, { value: n ?? r }, t);
  },
  JE = Kg,
  Yg = x.createContext(void 0),
  kN = (e) => {
    let { children: t, size: n } = e;
    const r = x.useContext(Yg);
    return x.createElement(Yg.Provider, { value: n || r }, t);
  },
  dh = Yg;
function PN() {
  const e = x.useContext(JE),
    t = x.useContext(dh);
  return { componentDisabled: e, componentSize: t };
}
const Xd = [
    "blue",
    "purple",
    "cyan",
    "green",
    "magenta",
    "pink",
    "red",
    "orange",
    "yellow",
    "volcano",
    "geekblue",
    "lime",
    "gold",
  ],
  TN = "5.11.1";
function sm(e) {
  return e >= 0 && e <= 255;
}
function Mf(e, t) {
  const { r: n, g: r, b: i, a } = new er(e).toRgb();
  if (a < 1) return e;
  const { r: u, g: c, b: f } = new er(t).toRgb();
  for (let d = 0.01; d <= 1; d += 0.01) {
    const h = Math.round((n - u * (1 - d)) / d),
      v = Math.round((r - c * (1 - d)) / d),
      g = Math.round((i - f * (1 - d)) / d);
    if (sm(h) && sm(v) && sm(g))
      return new er({
        r: h,
        g: v,
        b: g,
        a: Math.round(d * 100) / 100,
      }).toRgbString();
  }
  return new er({ r: n, g: r, b: i, a: 1 }).toRgbString();
}
var AN =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
function eO(e) {
  const { override: t } = e,
    n = AN(e, ["override"]),
    r = Object.assign({}, t);
  Object.keys(Qs).forEach((g) => {
    delete r[g];
  });
  const i = Object.assign(Object.assign({}, n), r),
    a = 480,
    u = 576,
    c = 768,
    f = 992,
    d = 1200,
    h = 1600;
  if (i.motion === !1) {
    const g = "0s";
    (i.motionDurationFast = g),
      (i.motionDurationMid = g),
      (i.motionDurationSlow = g);
  }
  return Object.assign(
    Object.assign(Object.assign({}, i), {
      colorFillContent: i.colorFillSecondary,
      colorFillContentHover: i.colorFill,
      colorFillAlter: i.colorFillQuaternary,
      colorBgContainerDisabled: i.colorFillTertiary,
      colorBorderBg: i.colorBgContainer,
      colorSplit: Mf(i.colorBorderSecondary, i.colorBgContainer),
      colorTextPlaceholder: i.colorTextQuaternary,
      colorTextDisabled: i.colorTextQuaternary,
      colorTextHeading: i.colorText,
      colorTextLabel: i.colorTextSecondary,
      colorTextDescription: i.colorTextTertiary,
      colorTextLightSolid: i.colorWhite,
      colorHighlight: i.colorError,
      colorBgTextHover: i.colorFillSecondary,
      colorBgTextActive: i.colorFill,
      colorIcon: i.colorTextTertiary,
      colorIconHover: i.colorText,
      colorErrorOutline: Mf(i.colorErrorBg, i.colorBgContainer),
      colorWarningOutline: Mf(i.colorWarningBg, i.colorBgContainer),
      fontSizeIcon: i.fontSizeSM,
      lineWidthFocus: i.lineWidth * 4,
      lineWidth: i.lineWidth,
      controlOutlineWidth: i.lineWidth * 2,
      controlInteractiveSize: i.controlHeight / 2,
      controlItemBgHover: i.colorFillTertiary,
      controlItemBgActive: i.colorPrimaryBg,
      controlItemBgActiveHover: i.colorPrimaryBgHover,
      controlItemBgActiveDisabled: i.colorFill,
      controlTmpOutline: i.colorFillQuaternary,
      controlOutline: Mf(i.colorPrimaryBg, i.colorBgContainer),
      lineType: i.lineType,
      borderRadius: i.borderRadius,
      borderRadiusXS: i.borderRadiusXS,
      borderRadiusSM: i.borderRadiusSM,
      borderRadiusLG: i.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: "none",
      linkHoverDecoration: "none",
      linkFocusDecoration: "none",
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: i.sizeXXS,
      paddingXS: i.sizeXS,
      paddingSM: i.sizeSM,
      padding: i.size,
      paddingMD: i.sizeMD,
      paddingLG: i.sizeLG,
      paddingXL: i.sizeXL,
      paddingContentHorizontalLG: i.sizeLG,
      paddingContentVerticalLG: i.sizeMS,
      paddingContentHorizontal: i.sizeMS,
      paddingContentVertical: i.sizeSM,
      paddingContentHorizontalSM: i.size,
      paddingContentVerticalSM: i.sizeXS,
      marginXXS: i.sizeXXS,
      marginXS: i.sizeXS,
      marginSM: i.sizeSM,
      margin: i.size,
      marginMD: i.sizeMD,
      marginLG: i.sizeLG,
      marginXL: i.sizeXL,
      marginXXL: i.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS: a,
      screenXSMin: a,
      screenXSMax: u - 1,
      screenSM: u,
      screenSMMin: u,
      screenSMMax: c - 1,
      screenMD: c,
      screenMDMin: c,
      screenMDMax: f - 1,
      screenLG: f,
      screenLGMin: f,
      screenLGMax: d - 1,
      screenXL: d,
      screenXLMin: d,
      screenXLMax: h - 1,
      screenXXL: h,
      screenXXLMin: h,
      boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
      boxShadowCard: `
      0 1px 2px -2px ${new er("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new er("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new er("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
    }),
    r
  );
}
var ax =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
const tO = (e, t, n) => {
  const r = n.getDerivativeToken(e),
    { override: i } = t,
    a = ax(t, ["override"]);
  let u = Object.assign(Object.assign({}, r), { override: i });
  return (
    (u = eO(u)),
    a &&
      Object.entries(a).forEach((c) => {
        let [f, d] = c;
        const { theme: h } = d,
          v = ax(d, ["theme"]);
        let g = v;
        h &&
          (g = tO(Object.assign(Object.assign({}, u), v), { override: v }, h)),
          (u[f] = g);
      }),
    u
  );
};
function tl() {
  const { token: e, hashed: t, theme: n, override: r } = Te.useContext(qE),
    i = `${TN}-${t || ""}`,
    a = n || XE,
    [u, c] = m8(a, [Qs, e], {
      salt: i,
      override: r,
      getComputedToken: tO,
      formatToken: eO,
    });
  return [a, u, t ? c : ""];
}
function di(e) {
  var t = x.useRef();
  t.current = e;
  var n = x.useCallback(function () {
    for (var r, i = arguments.length, a = new Array(i), u = 0; u < i; u++)
      a[u] = arguments[u];
    return (r = t.current) === null || r === void 0
      ? void 0
      : r.call.apply(r, [t].concat(a));
  }, []);
  return n;
}
function ou(e) {
  var t = x.useRef(!1),
    n = x.useState(e),
    r = me(n, 2),
    i = r[0],
    a = r[1];
  x.useEffect(function () {
    return (
      (t.current = !1),
      function () {
        t.current = !0;
      }
    );
  }, []);
  function u(c, f) {
    (f && t.current) || a(c);
  }
  return [i, u];
}
function cm(e) {
  return e !== void 0;
}
function RN(e, t) {
  var n = t || {},
    r = n.defaultValue,
    i = n.value,
    a = n.onChange,
    u = n.postState,
    c = ou(function () {
      return cm(i)
        ? i
        : cm(r)
        ? typeof r == "function"
          ? r()
          : r
        : typeof e == "function"
        ? e()
        : e;
    }),
    f = me(c, 2),
    d = f[0],
    h = f[1],
    v = i !== void 0 ? i : d,
    g = u ? u(v) : v,
    b = di(a),
    E = ou([v]),
    O = me(E, 2),
    T = O[0],
    C = O[1];
  QS(
    function () {
      var S = T[0];
      d !== S && b(d, S);
    },
    [T]
  ),
    QS(
      function () {
        cm(i) || h(i);
      },
      [i]
    );
  var y = di(function (S, k) {
    h(S, k), C([v], k);
  });
  return [g, y];
}
const IN = (e, t, n, r, i) => {
    const a = e / 2,
      u = 0,
      c = a,
      f = (n * 1) / Math.sqrt(2),
      d = a - n * (1 - 1 / Math.sqrt(2)),
      h = a - t * (1 / Math.sqrt(2)),
      v = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)),
      g = 2 * a - h,
      b = v,
      E = 2 * a - f,
      O = d,
      T = 2 * a - u,
      C = c,
      y = a * Math.sqrt(2) + n * (Math.sqrt(2) - 2),
      S = n * (Math.sqrt(2) - 1);
    return {
      pointerEvents: "none",
      width: e,
      height: e,
      overflow: "hidden",
      "&::before": {
        position: "absolute",
        bottom: 0,
        insetInlineStart: 0,
        width: e,
        height: e / 2,
        background: r,
        clipPath: {
          _multi_value_: !0,
          value: [
            `polygon(${S}px 100%, 50% ${S}px, ${
              2 * a - S
            }px 100%, ${S}px 100%)`,
            `path('M ${u} ${c} A ${n} ${n} 0 0 0 ${f} ${d} L ${h} ${v} A ${t} ${t} 0 0 1 ${g} ${b} L ${E} ${O} A ${n} ${n} 0 0 0 ${T} ${C} Z')`,
          ],
        },
        content: '""',
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: y,
        height: y,
        bottom: 0,
        insetInline: 0,
        margin: "auto",
        borderRadius: { _skip_check_: !0, value: `0 0 ${t}px 0` },
        transform: "translateY(50%) rotate(-135deg)",
        boxShadow: i,
        zIndex: 0,
        background: "transparent",
      },
    };
  },
  $N = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
      listStyle: "none",
      fontFamily: t ? "inherit" : e.fontFamily,
    };
  },
  MN = () => ({
    display: "inline-flex",
    alignItems: "center",
    color: "inherit",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    verticalAlign: "-0.125em",
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "> *": { lineHeight: 1 },
    svg: { display: "inline-block" },
  }),
  LN = (e) => ({
    a: {
      color: e.colorLink,
      textDecoration: e.linkDecoration,
      backgroundColor: "transparent",
      outline: "none",
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "-webkit-text-decoration-skip": "objects",
      "&:hover": { color: e.colorLinkHover },
      "&:active": { color: e.colorLinkActive },
      "&:active,\n  &:hover": {
        textDecoration: e.linkHoverDecoration,
        outline: 0,
      },
      "&:focus": { textDecoration: e.linkFocusDecoration, outline: 0 },
      "&[disabled]": { color: e.colorTextDisabled, cursor: "not-allowed" },
    },
  }),
  NN = (e, t) => {
    const { fontFamily: n, fontSize: r } = e,
      i = `[class^="${t}"], [class*=" ${t}"]`;
    return {
      [i]: {
        fontFamily: n,
        fontSize: r,
        boxSizing: "border-box",
        "&::before, &::after": { boxSizing: "border-box" },
        [i]: {
          boxSizing: "border-box",
          "&::before, &::after": { boxSizing: "border-box" },
        },
      },
    };
  },
  zN = (e) => ({
    outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: "outline-offset 0s, outline 0s",
  }),
  jN = (e) => ({ "&:focus-visible": Object.assign({}, zN(e)) }),
  nO = typeof CSSINJS_STATISTIC < "u";
let Xg = !0;
function Jo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!nO) return Object.assign.apply(Object, [{}].concat(t));
  Xg = !1;
  const r = {};
  return (
    t.forEach((i) => {
      Object.keys(i).forEach((u) => {
        Object.defineProperty(r, u, {
          configurable: !0,
          enumerable: !0,
          get: () => i[u],
        });
      });
    }),
    (Xg = !0),
    r
  );
}
const lx = {};
function DN() {}
function FN(e) {
  let t,
    n = e,
    r = DN;
  return (
    nO &&
      typeof Proxy < "u" &&
      ((t = new Set()),
      (n = new Proxy(e, {
        get(i, a) {
          return Xg && t.add(a), i[a];
        },
      })),
      (r = (i, a) => {
        var u;
        lx[i] = {
          global: Array.from(t),
          component: Object.assign(
            Object.assign(
              {},
              (u = lx[i]) === null || u === void 0 ? void 0 : u.component
            ),
            a
          ),
        };
      })),
    { token: n, keys: t, flush: r }
  );
}
const BN = (e, t) => {
    const [n, r] = tl();
    return Vg(
      {
        theme: n,
        token: r,
        hashId: "",
        path: ["ant-design-icons", e],
        nonce: () => (t == null ? void 0 : t.nonce),
      },
      () => [
        {
          [`.${e}`]: Object.assign(Object.assign({}, MN()), {
            [`.${e} .${e}-icon`]: { display: "block" },
          }),
        },
      ]
    );
  },
  rO = BN;
function ph(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const i = Array.isArray(e) ? e : [e, e],
    [a] = i,
    u = i.join("-");
  return (c) => {
    const [f, d, h] = tl(),
      { getPrefixCls: v, iconPrefixCls: g, csp: b } = x.useContext(bi),
      E = v(),
      O = {
        theme: f,
        token: d,
        hashId: h,
        nonce: () => (b == null ? void 0 : b.nonce),
        clientOnly: r.clientOnly,
        order: r.order || -999,
      };
    return (
      Vg(
        Object.assign(Object.assign({}, O), {
          clientOnly: !1,
          path: ["Shared", E],
        }),
        () => [{ "&": LN(d) }]
      ),
      rO(g, b),
      [
        Vg(Object.assign(Object.assign({}, O), { path: [u, c, g] }), () => {
          const { token: T, flush: C } = FN(d),
            y = Object.assign({}, d[a]);
          if (r.deprecatedTokens) {
            const { deprecatedTokens: U } = r;
            U.forEach((G) => {
              let [D, J] = G;
              var le;
              ((y != null && y[D]) || (y != null && y[J])) &&
                (((le = y[J]) !== null && le !== void 0) ||
                  (y[J] = y == null ? void 0 : y[D]));
            });
          }
          const S = typeof n == "function" ? n(Jo(T, y ?? {})) : n,
            k = Object.assign(Object.assign({}, S), y),
            $ = `.${c}`,
            L = Jo(
              T,
              {
                componentCls: $,
                prefixCls: c,
                iconCls: `.${g}`,
                antCls: `.${E}`,
              },
              k
            ),
            A = t(L, {
              hashId: h,
              prefixCls: c,
              rootPrefixCls: E,
              iconPrefixCls: g,
              overrideComponentToken: y,
            });
          return C(a, k), [r.resetStyle === !1 ? null : NN(L, c), A];
        }),
        h,
      ]
    );
  };
}
const WN = (e, t, n, r) => {
  const i = ph(e, t, n, Object.assign({ resetStyle: !1, order: -998 }, r));
  return (u) => {
    let { prefixCls: c } = u;
    return i(c), null;
  };
};
function HN(e, t) {
  return Xd.reduce((n, r) => {
    const i = e[`${r}1`],
      a = e[`${r}3`],
      u = e[`${r}6`],
      c = e[`${r}7`];
    return Object.assign(
      Object.assign({}, n),
      t(r, { lightColor: i, lightBorderColor: a, darkColor: u, textColor: c })
    );
  }, {});
}
function UN(e, t) {
  const n = e || {},
    r = n.inherit === !1 || !t ? QE : t;
  return Py(
    () => {
      if (!e) return t;
      const i = Object.assign({}, r.components);
      return (
        Object.keys(e.components || {}).forEach((a) => {
          i[a] = Object.assign(Object.assign({}, i[a]), e.components[a]);
        }),
        Object.assign(Object.assign(Object.assign({}, r), n), {
          token: Object.assign(Object.assign({}, r.token), n.token),
          components: i,
        })
      );
    },
    [n, r],
    (i, a) =>
      i.some((u, c) => {
        const f = a[c];
        return !HL(u, f, !0);
      })
  );
}
var VN = ["children"],
  iO = x.createContext({});
function GN(e) {
  var t = e.children,
    n = Ga(e, VN);
  return x.createElement(iO.Provider, { value: n }, t);
}
var KN = (function (e) {
    Ry(n, e);
    var t = Iy(n);
    function n() {
      return Ja(this, n), t.apply(this, arguments);
    }
    return (
      el(n, [
        {
          key: "render",
          value: function () {
            return this.props.children;
          },
        },
      ]),
      n
    );
  })(x.Component),
  Oa = "none",
  Lf = "appear",
  Nf = "enter",
  zf = "leave",
  ux = "none",
  Hr = "prepare",
  Kl = "start",
  Yl = "active",
  Fy = "end",
  oO = "prepared";
function sx(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit".concat(e)] = "webkit".concat(t)),
    (n["Moz".concat(e)] = "moz".concat(t)),
    (n["ms".concat(e)] = "MS".concat(t)),
    (n["O".concat(e)] = "o".concat(t.toLowerCase())),
    n
  );
}
function YN(e, t) {
  var n = {
    animationend: sx("Animation", "AnimationEnd"),
    transitionend: sx("Transition", "TransitionEnd"),
  };
  return (
    e &&
      ("AnimationEvent" in t || delete n.animationend.animation,
      "TransitionEvent" in t || delete n.transitionend.transition),
    n
  );
}
var XN = YN(Dn(), typeof window < "u" ? window : {}),
  aO = {};
if (Dn()) {
  var QN = document.createElement("div");
  aO = QN.style;
}
var jf = {};
function lO(e) {
  if (jf[e]) return jf[e];
  var t = XN[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
      var a = n[i];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in aO)
        return (jf[e] = t[a]), jf[e];
    }
  return "";
}
var uO = lO("animationend"),
  sO = lO("transitionend"),
  cO = !!(uO && sO),
  cx = uO || "animationend",
  fx = sO || "transitionend";
function dx(e, t) {
  if (!e) return null;
  if (yt(e) === "object") {
    var n = t.replace(/-\w/g, function (r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const qN = function (e) {
  var t = x.useRef(),
    n = x.useRef(e);
  n.current = e;
  var r = x.useCallback(function (u) {
    n.current(u);
  }, []);
  function i(u) {
    u && (u.removeEventListener(fx, r), u.removeEventListener(cx, r));
  }
  function a(u) {
    t.current && t.current !== u && i(t.current),
      u &&
        u !== t.current &&
        (u.addEventListener(fx, r), u.addEventListener(cx, r), (t.current = u));
  }
  return (
    x.useEffect(function () {
      return function () {
        i(t.current);
      };
    }, []),
    [a, i]
  );
};
var fO = Dn() ? x.useLayoutEffect : x.useEffect;
const ZN = function () {
  var e = x.useRef(null);
  function t() {
    Ji.cancel(e.current);
  }
  function n(r) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = Ji(function () {
      i <= 1
        ? r({
            isCanceled: function () {
              return a !== e.current;
            },
          })
        : n(r, i - 1);
    });
    e.current = a;
  }
  return (
    x.useEffect(function () {
      return function () {
        t();
      };
    }, []),
    [n, t]
  );
};
var JN = [Hr, Kl, Yl, Fy],
  ez = [Hr, oO],
  dO = !1,
  tz = !0;
function pO(e) {
  return e === Yl || e === Fy;
}
const nz = function (e, t, n) {
  var r = ou(ux),
    i = me(r, 2),
    a = i[0],
    u = i[1],
    c = ZN(),
    f = me(c, 2),
    d = f[0],
    h = f[1];
  function v() {
    u(Hr, !0);
  }
  var g = t ? ez : JN;
  return (
    fO(
      function () {
        if (a !== ux && a !== Fy) {
          var b = g.indexOf(a),
            E = g[b + 1],
            O = n(a);
          O === dO
            ? u(E, !0)
            : E &&
              d(function (T) {
                function C() {
                  T.isCanceled() || u(E, !0);
                }
                O === !0 ? C() : Promise.resolve(O).then(C);
              });
        }
      },
      [e, a]
    ),
    x.useEffect(function () {
      return function () {
        h();
      };
    }, []),
    [v, a]
  );
};
function rz(e, t, n, r) {
  var i = r.motionEnter,
    a = i === void 0 ? !0 : i,
    u = r.motionAppear,
    c = u === void 0 ? !0 : u,
    f = r.motionLeave,
    d = f === void 0 ? !0 : f,
    h = r.motionDeadline,
    v = r.motionLeaveImmediately,
    g = r.onAppearPrepare,
    b = r.onEnterPrepare,
    E = r.onLeavePrepare,
    O = r.onAppearStart,
    T = r.onEnterStart,
    C = r.onLeaveStart,
    y = r.onAppearActive,
    S = r.onEnterActive,
    k = r.onLeaveActive,
    $ = r.onAppearEnd,
    L = r.onEnterEnd,
    A = r.onLeaveEnd,
    U = r.onVisibleChanged,
    G = ou(),
    D = me(G, 2),
    J = D[0],
    le = D[1],
    ne = ou(Oa),
    se = me(ne, 2),
    q = se[0],
    j = se[1],
    z = ou(null),
    R = me(z, 2),
    B = R[0],
    W = R[1],
    H = x.useRef(!1),
    Q = x.useRef(null);
  function de() {
    return n();
  }
  var Se = x.useRef(!1);
  function xe() {
    j(Oa, !0), W(null, !0);
  }
  function Oe(ve) {
    var Ce = de();
    if (!(ve && !ve.deadline && ve.target !== Ce)) {
      var pe = Se.current,
        Ae;
      q === Lf && pe
        ? (Ae = $ == null ? void 0 : $(Ce, ve))
        : q === Nf && pe
        ? (Ae = L == null ? void 0 : L(Ce, ve))
        : q === zf && pe && (Ae = A == null ? void 0 : A(Ce, ve)),
        q !== Oa && pe && Ae !== !1 && xe();
    }
  }
  var ze = qN(Oe),
    Fe = me(ze, 1),
    Ke = Fe[0],
    ft = function (Ce) {
      var pe, Ae, Je;
      switch (Ce) {
        case Lf:
          return (pe = {}), He(pe, Hr, g), He(pe, Kl, O), He(pe, Yl, y), pe;
        case Nf:
          return (Ae = {}), He(Ae, Hr, b), He(Ae, Kl, T), He(Ae, Yl, S), Ae;
        case zf:
          return (Je = {}), He(Je, Hr, E), He(Je, Kl, C), He(Je, Yl, k), Je;
        default:
          return {};
      }
    },
    Ue = x.useMemo(
      function () {
        return ft(q);
      },
      [q]
    ),
    Lt = nz(q, !e, function (ve) {
      if (ve === Hr) {
        var Ce = Ue[Hr];
        return Ce ? Ce(de()) : dO;
      }
      if (Ze in Ue) {
        var pe;
        W(
          ((pe = Ue[Ze]) === null || pe === void 0
            ? void 0
            : pe.call(Ue, de(), null)) || null
        );
      }
      return (
        Ze === Yl &&
          (Ke(de()),
          h > 0 &&
            (clearTimeout(Q.current),
            (Q.current = setTimeout(function () {
              Oe({ deadline: !0 });
            }, h)))),
        Ze === oO && xe(),
        tz
      );
    }),
    Kt = me(Lt, 2),
    Ie = Kt[0],
    Ze = Kt[1],
    Yt = pO(Ze);
  (Se.current = Yt),
    fO(
      function () {
        le(t);
        var ve = H.current;
        H.current = !0;
        var Ce;
        !ve && t && c && (Ce = Lf),
          ve && t && a && (Ce = Nf),
          ((ve && !t && d) || (!ve && v && !t && d)) && (Ce = zf);
        var pe = ft(Ce);
        Ce && (e || pe[Hr]) ? (j(Ce), Ie()) : j(Oa);
      },
      [t]
    ),
    x.useEffect(
      function () {
        ((q === Lf && !c) || (q === Nf && !a) || (q === zf && !d)) && j(Oa);
      },
      [c, a, d]
    ),
    x.useEffect(function () {
      return function () {
        (H.current = !1), clearTimeout(Q.current);
      };
    }, []);
  var De = x.useRef(!1);
  x.useEffect(
    function () {
      J && (De.current = !0),
        J !== void 0 &&
          q === Oa &&
          ((De.current || J) && (U == null || U(J)), (De.current = !0));
    },
    [J, q]
  );
  var bt = B;
  return (
    Ue[Hr] && Ze === Kl && (bt = ue({ transition: "none" }, bt)),
    [q, Ze, bt, J ?? t]
  );
}
function iz(e) {
  var t = e;
  yt(e) === "object" && (t = e.transitionSupport);
  function n(i, a) {
    return !!(i.motionName && t && a !== !1);
  }
  var r = x.forwardRef(function (i, a) {
    var u = i.visible,
      c = u === void 0 ? !0 : u,
      f = i.removeOnLeave,
      d = f === void 0 ? !0 : f,
      h = i.forceRender,
      v = i.children,
      g = i.motionName,
      b = i.leavedClassName,
      E = i.eventProps,
      O = x.useContext(iO),
      T = O.motion,
      C = n(i, T),
      y = x.useRef(),
      S = x.useRef();
    function k() {
      try {
        return y.current instanceof HTMLElement ? y.current : fd(S.current);
      } catch {
        return null;
      }
    }
    var $ = rz(C, c, k, i),
      L = me($, 4),
      A = L[0],
      U = L[1],
      G = L[2],
      D = L[3],
      J = x.useRef(D);
    D && (J.current = !0);
    var le = x.useCallback(
        function (W) {
          (y.current = W), Ty(a, W);
        },
        [a]
      ),
      ne,
      se = ue(ue({}, E), {}, { visible: c });
    if (!v) ne = null;
    else if (A === Oa)
      D
        ? (ne = v(ue({}, se), le))
        : !d && J.current && b
        ? (ne = v(ue(ue({}, se), {}, { className: b }), le))
        : h || (!d && !b)
        ? (ne = v(ue(ue({}, se), {}, { style: { display: "none" } }), le))
        : (ne = null);
    else {
      var q, j;
      U === Hr
        ? (j = "prepare")
        : pO(U)
        ? (j = "active")
        : U === Kl && (j = "start");
      var z = dx(g, "".concat(A, "-").concat(j));
      ne = v(
        ue(
          ue({}, se),
          {},
          {
            className: At(
              dx(g, A),
              ((q = {}), He(q, z, z && j), He(q, g, typeof g == "string"), q)
            ),
            style: G,
          }
        ),
        le
      );
    }
    if (x.isValidElement(ne) && mc(ne)) {
      var R = ne,
        B = R.ref;
      B || (ne = x.cloneElement(ne, { ref: le }));
    }
    return x.createElement(KN, { ref: S }, ne);
  });
  return (r.displayName = "CSSMotion"), r;
}
const gc = iz(cO);
var Qg = "add",
  qg = "keep",
  Zg = "remove",
  fm = "removed";
function oz(e) {
  var t;
  return (
    e && yt(e) === "object" && "key" in e ? (t = e) : (t = { key: e }),
    ue(ue({}, t), {}, { key: String(t.key) })
  );
}
function Jg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(oz);
}
function az() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = [],
    r = 0,
    i = t.length,
    a = Jg(e),
    u = Jg(t);
  a.forEach(function (d) {
    for (var h = !1, v = r; v < i; v += 1) {
      var g = u[v];
      if (g.key === d.key) {
        r < v &&
          ((n = n.concat(
            u.slice(r, v).map(function (b) {
              return ue(ue({}, b), {}, { status: Qg });
            })
          )),
          (r = v)),
          n.push(ue(ue({}, g), {}, { status: qg })),
          (r += 1),
          (h = !0);
        break;
      }
    }
    h || n.push(ue(ue({}, d), {}, { status: Zg }));
  }),
    r < i &&
      (n = n.concat(
        u.slice(r).map(function (d) {
          return ue(ue({}, d), {}, { status: Qg });
        })
      ));
  var c = {};
  n.forEach(function (d) {
    var h = d.key;
    c[h] = (c[h] || 0) + 1;
  });
  var f = Object.keys(c).filter(function (d) {
    return c[d] > 1;
  });
  return (
    f.forEach(function (d) {
      (n = n.filter(function (h) {
        var v = h.key,
          g = h.status;
        return v !== d || g !== Zg;
      })),
        n.forEach(function (h) {
          h.key === d && (h.status = qg);
        });
    }),
    n
  );
}
var lz = ["component", "children", "onVisibleChanged", "onAllRemoved"],
  uz = ["status"],
  sz = [
    "eventProps",
    "visible",
    "children",
    "motionName",
    "motionAppear",
    "motionEnter",
    "motionLeave",
    "motionLeaveImmediately",
    "motionDeadline",
    "removeOnLeave",
    "leavedClassName",
    "onAppearPrepare",
    "onAppearStart",
    "onAppearActive",
    "onAppearEnd",
    "onEnterStart",
    "onEnterActive",
    "onEnterEnd",
    "onLeaveStart",
    "onLeaveActive",
    "onLeaveEnd",
  ];
function cz(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : gc,
    n = (function (r) {
      Ry(a, r);
      var i = Iy(a);
      function a() {
        var u;
        Ja(this, a);
        for (var c = arguments.length, f = new Array(c), d = 0; d < c; d++)
          f[d] = arguments[d];
        return (
          (u = i.call.apply(i, [this].concat(f))),
          He(Dg(u), "state", { keyEntities: [] }),
          He(Dg(u), "removeKey", function (h) {
            var v = u.state.keyEntities,
              g = v.map(function (b) {
                return b.key !== h ? b : ue(ue({}, b), {}, { status: fm });
              });
            return (
              u.setState({ keyEntities: g }),
              g.filter(function (b) {
                var E = b.status;
                return E !== fm;
              }).length
            );
          }),
          u
        );
      }
      return (
        el(
          a,
          [
            {
              key: "render",
              value: function () {
                var c = this,
                  f = this.state.keyEntities,
                  d = this.props,
                  h = d.component,
                  v = d.children,
                  g = d.onVisibleChanged,
                  b = d.onAllRemoved,
                  E = Ga(d, lz),
                  O = h || x.Fragment,
                  T = {};
                return (
                  sz.forEach(function (C) {
                    (T[C] = E[C]), delete E[C];
                  }),
                  delete E.keys,
                  x.createElement(
                    O,
                    E,
                    f.map(function (C, y) {
                      var S = C.status,
                        k = Ga(C, uz),
                        $ = S === Qg || S === qg;
                      return x.createElement(
                        t,
                        Vt({}, T, {
                          key: k.key,
                          visible: $,
                          eventProps: k,
                          onVisibleChanged: function (A) {
                            if ((g == null || g(A, { key: k.key }), !A)) {
                              var U = c.removeKey(k.key);
                              U === 0 && b && b();
                            }
                          },
                        }),
                        function (L, A) {
                          return v(ue(ue({}, L), {}, { index: y }), A);
                        }
                      );
                    })
                  )
                );
              },
            },
          ],
          [
            {
              key: "getDerivedStateFromProps",
              value: function (c, f) {
                var d = c.keys,
                  h = f.keyEntities,
                  v = Jg(d),
                  g = az(h, v);
                return {
                  keyEntities: g.filter(function (b) {
                    var E = h.find(function (O) {
                      var T = O.key;
                      return b.key === T;
                    });
                    return !(E && E.status === fm && b.status === Zg);
                  }),
                };
              },
            },
          ]
        ),
        a
      );
    })(x.Component);
  return He(n, "defaultProps", { component: "div" }), n;
}
cz(cO);
function fz(e) {
  const { children: t } = e,
    [, n] = tl(),
    { motion: r } = n,
    i = x.useRef(!1);
  return (
    (i.current = i.current || r === !1),
    i.current ? x.createElement(GN, { motion: r }, t) : t
  );
}
const dz = () => null;
var pz =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
const hz = [
    "getTargetContainer",
    "getPopupContainer",
    "renderEmpty",
    "pageHeader",
    "input",
    "pagination",
    "form",
    "select",
    "button",
  ],
  vz = "ant";
let hO;
function mz() {
  return hO || vz;
}
function gz(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const yz = (e) => {
    let { prefixCls: t, iconPrefixCls: n, theme: r } = e;
    t !== void 0 && (hO = t), r && gz(r) && EN(mz(), r);
  },
  bz = (e) => {
    const {
        children: t,
        csp: n,
        autoInsertSpaceInButton: r,
        alert: i,
        anchor: a,
        form: u,
        locale: c,
        componentSize: f,
        direction: d,
        space: h,
        virtual: v,
        dropdownMatchSelectWidth: g,
        popupMatchSelectWidth: b,
        popupOverflow: E,
        legacyLocale: O,
        parentContext: T,
        iconPrefixCls: C,
        theme: y,
        componentDisabled: S,
        segmented: k,
        statistic: $,
        spin: L,
        calendar: A,
        carousel: U,
        cascader: G,
        collapse: D,
        typography: J,
        checkbox: le,
        descriptions: ne,
        divider: se,
        drawer: q,
        skeleton: j,
        steps: z,
        image: R,
        layout: B,
        list: W,
        mentions: H,
        modal: Q,
        progress: de,
        result: Se,
        slider: xe,
        breadcrumb: Oe,
        menu: ze,
        pagination: Fe,
        input: Ke,
        empty: ft,
        badge: Ue,
        radio: Lt,
        rate: Kt,
        switch: Ie,
        transfer: Ze,
        avatar: Yt,
        message: De,
        tag: bt,
        table: ve,
        card: Ce,
        tabs: pe,
        timeline: Ae,
        timePicker: Je,
        upload: Xt,
        notification: ur,
        tree: Sn,
        colorPicker: $r,
        datePicker: Fn,
        rangePicker: tn,
        flex: Qt,
        wave: cn,
        dropdown: qr,
        warning: Zr,
      } = e,
      wi = x.useCallback(
        (he, Ve) => {
          const { prefixCls: dt } = e;
          if (Ve) return Ve;
          const Nt = dt || T.getPrefixCls("");
          return he ? `${Nt}-${he}` : Nt;
        },
        [T.getPrefixCls, e.prefixCls]
      ),
      fn = C || T.iconPrefixCls || ZE,
      wt = n || T.csp;
    rO(fn, wt);
    const dn = UN(y, T.theme),
      Si = {
        csp: wt,
        autoInsertSpaceInButton: r,
        alert: i,
        anchor: a,
        locale: c || O,
        direction: d,
        space: h,
        virtual: v,
        popupMatchSelectWidth: b ?? g,
        popupOverflow: E,
        getPrefixCls: wi,
        iconPrefixCls: fn,
        theme: dn,
        segmented: k,
        statistic: $,
        spin: L,
        calendar: A,
        carousel: U,
        cascader: G,
        collapse: D,
        typography: J,
        checkbox: le,
        descriptions: ne,
        divider: se,
        drawer: q,
        skeleton: j,
        steps: z,
        image: R,
        input: Ke,
        layout: B,
        list: W,
        mentions: H,
        modal: Q,
        progress: de,
        result: Se,
        slider: xe,
        breadcrumb: Oe,
        menu: ze,
        pagination: Fe,
        empty: ft,
        badge: Ue,
        radio: Lt,
        rate: Kt,
        switch: Ie,
        transfer: Ze,
        avatar: Yt,
        message: De,
        tag: bt,
        table: ve,
        card: Ce,
        tabs: pe,
        timeline: Ae,
        timePicker: Je,
        upload: Xt,
        notification: ur,
        tree: Sn,
        colorPicker: $r,
        datePicker: Fn,
        rangePicker: tn,
        flex: Qt,
        wave: cn,
        dropdown: qr,
        warning: Zr,
      },
      pn = Object.assign({}, T);
    Object.keys(Si).forEach((he) => {
      Si[he] !== void 0 && (pn[he] = Si[he]);
    }),
      hz.forEach((he) => {
        const Ve = e[he];
        Ve && (pn[he] = Ve);
      });
    const Ot = Py(
        () => pn,
        pn,
        (he, Ve) => {
          const dt = Object.keys(he),
            Nt = Object.keys(Ve);
          return dt.length !== Nt.length || dt.some((sr) => he[sr] !== Ve[sr]);
        }
      ),
      xi = x.useMemo(() => ({ prefixCls: fn, csp: wt }), [fn, wt]);
    let nt = x.createElement(
      x.Fragment,
      null,
      x.createElement(dz, { dropdownMatchSelectWidth: g }),
      t
    );
    const Bn = x.useMemo(() => {
      var he, Ve, dt, Nt;
      return K8(
        ((he = fh.Form) === null || he === void 0
          ? void 0
          : he.defaultValidateMessages) || {},
        ((dt =
          (Ve = Ot.locale) === null || Ve === void 0 ? void 0 : Ve.Form) ===
          null || dt === void 0
          ? void 0
          : dt.defaultValidateMessages) || {},
        ((Nt = Ot.form) === null || Nt === void 0
          ? void 0
          : Nt.validateMessages) || {},
        (u == null ? void 0 : u.validateMessages) || {}
      );
    }, [Ot, u == null ? void 0 : u.validateMessages]);
    Object.keys(Bn).length > 0 &&
      (nt = x.createElement(q8.Provider, { value: Bn }, nt)),
      c && (nt = x.createElement(lN, { locale: c, _ANT_MARK__: oN }, nt)),
      (fn || wt) && (nt = x.createElement(Cy.Provider, { value: xi }, nt)),
      f && (nt = x.createElement(kN, { size: f }, nt)),
      (nt = x.createElement(fz, null, nt));
    const ot = x.useMemo(() => {
      const he = dn || {},
        { algorithm: Ve, token: dt, components: Nt } = he,
        sr = pz(he, ["algorithm", "token", "components"]),
        Jr = Ve && (!Array.isArray(Ve) || Ve.length > 0) ? Bg(Ve) : XE,
        Wn = {};
      Object.entries(Nt || {}).forEach((Ci) => {
        let [lo, ei] = Ci;
        const nn = Object.assign({}, ei);
        "algorithm" in nn &&
          (nn.algorithm === !0
            ? (nn.theme = Jr)
            : (Array.isArray(nn.algorithm) ||
                typeof nn.algorithm == "function") &&
              (nn.theme = Bg(nn.algorithm)),
          delete nn.algorithm),
          (Wn[lo] = nn);
      });
      const Dt = Object.assign(Object.assign({}, Qs), dt);
      return Object.assign(Object.assign({}, sr), {
        theme: Jr,
        token: Dt,
        components: Wn,
        override: Object.assign({ override: Dt }, Wn),
      });
    }, [dn]);
    return (
      y && (nt = x.createElement(qE.Provider, { value: ot }, nt)),
      Ot.warning &&
        (nt = x.createElement(X8.Provider, { value: Ot.warning }, nt)),
      S !== void 0 && (nt = x.createElement(ON, { disabled: S }, nt)),
      x.createElement(bi.Provider, { value: Ot }, nt)
    );
  },
  yc = (e) => {
    const t = x.useContext(bi),
      n = x.useContext(KE);
    return x.createElement(
      bz,
      Object.assign({ parentContext: t, legacyLocale: n }, e)
    );
  };
yc.ConfigContext = bi;
yc.SizeContext = dh;
yc.config = yz;
yc.useConfig = PN;
Object.defineProperty(yc, "SizeContext", { get: () => dh });
const { isValidElement: By } = cp;
function vO(e) {
  return e && By(e) && e.type === x.Fragment;
}
function wz(e, t, n) {
  return By(e)
    ? x.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n)
    : t;
}
function Wy(e, t) {
  return wz(e, e, t);
}
function qs() {
  qs = function () {
    return t;
  };
  var e,
    t = {},
    n = Object.prototype,
    r = n.hasOwnProperty,
    i =
      Object.defineProperty ||
      function (j, z, R) {
        j[z] = R.value;
      },
    a = typeof Symbol == "function" ? Symbol : {},
    u = a.iterator || "@@iterator",
    c = a.asyncIterator || "@@asyncIterator",
    f = a.toStringTag || "@@toStringTag";
  function d(j, z, R) {
    return (
      Object.defineProperty(j, z, {
        value: R,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      j[z]
    );
  }
  try {
    d({}, "");
  } catch {
    d = function (R, B, W) {
      return (R[B] = W);
    };
  }
  function h(j, z, R, B) {
    var W = z && z.prototype instanceof C ? z : C,
      H = Object.create(W.prototype),
      Q = new se(B || []);
    return i(H, "_invoke", { value: D(j, R, Q) }), H;
  }
  function v(j, z, R) {
    try {
      return { type: "normal", arg: j.call(z, R) };
    } catch (B) {
      return { type: "throw", arg: B };
    }
  }
  t.wrap = h;
  var g = "suspendedStart",
    b = "suspendedYield",
    E = "executing",
    O = "completed",
    T = {};
  function C() {}
  function y() {}
  function S() {}
  var k = {};
  d(k, u, function () {
    return this;
  });
  var $ = Object.getPrototypeOf,
    L = $ && $($(q([])));
  L && L !== n && r.call(L, u) && (k = L);
  var A = (S.prototype = C.prototype = Object.create(k));
  function U(j) {
    ["next", "throw", "return"].forEach(function (z) {
      d(j, z, function (R) {
        return this._invoke(z, R);
      });
    });
  }
  function G(j, z) {
    function R(W, H, Q, de) {
      var Se = v(j[W], j, H);
      if (Se.type !== "throw") {
        var xe = Se.arg,
          Oe = xe.value;
        return Oe && yt(Oe) == "object" && r.call(Oe, "__await")
          ? z.resolve(Oe.__await).then(
              function (ze) {
                R("next", ze, Q, de);
              },
              function (ze) {
                R("throw", ze, Q, de);
              }
            )
          : z.resolve(Oe).then(
              function (ze) {
                (xe.value = ze), Q(xe);
              },
              function (ze) {
                return R("throw", ze, Q, de);
              }
            );
      }
      de(Se.arg);
    }
    var B;
    i(this, "_invoke", {
      value: function (H, Q) {
        function de() {
          return new z(function (Se, xe) {
            R(H, Q, Se, xe);
          });
        }
        return (B = B ? B.then(de, de) : de());
      },
    });
  }
  function D(j, z, R) {
    var B = g;
    return function (W, H) {
      if (B === E) throw new Error("Generator is already running");
      if (B === O) {
        if (W === "throw") throw H;
        return { value: e, done: !0 };
      }
      for (R.method = W, R.arg = H; ; ) {
        var Q = R.delegate;
        if (Q) {
          var de = J(Q, R);
          if (de) {
            if (de === T) continue;
            return de;
          }
        }
        if (R.method === "next") R.sent = R._sent = R.arg;
        else if (R.method === "throw") {
          if (B === g) throw ((B = O), R.arg);
          R.dispatchException(R.arg);
        } else R.method === "return" && R.abrupt("return", R.arg);
        B = E;
        var Se = v(j, z, R);
        if (Se.type === "normal") {
          if (((B = R.done ? O : b), Se.arg === T)) continue;
          return { value: Se.arg, done: R.done };
        }
        Se.type === "throw" &&
          ((B = O), (R.method = "throw"), (R.arg = Se.arg));
      }
    };
  }
  function J(j, z) {
    var R = z.method,
      B = j.iterator[R];
    if (B === e)
      return (
        (z.delegate = null),
        (R === "throw" &&
          j.iterator.return &&
          ((z.method = "return"),
          (z.arg = e),
          J(j, z),
          z.method === "throw")) ||
          (R !== "return" &&
            ((z.method = "throw"),
            (z.arg = new TypeError(
              "The iterator does not provide a '" + R + "' method"
            )))),
        T
      );
    var W = v(B, j.iterator, z.arg);
    if (W.type === "throw")
      return (z.method = "throw"), (z.arg = W.arg), (z.delegate = null), T;
    var H = W.arg;
    return H
      ? H.done
        ? ((z[j.resultName] = H.value),
          (z.next = j.nextLoc),
          z.method !== "return" && ((z.method = "next"), (z.arg = e)),
          (z.delegate = null),
          T)
        : H
      : ((z.method = "throw"),
        (z.arg = new TypeError("iterator result is not an object")),
        (z.delegate = null),
        T);
  }
  function le(j) {
    var z = { tryLoc: j[0] };
    1 in j && (z.catchLoc = j[1]),
      2 in j && ((z.finallyLoc = j[2]), (z.afterLoc = j[3])),
      this.tryEntries.push(z);
  }
  function ne(j) {
    var z = j.completion || {};
    (z.type = "normal"), delete z.arg, (j.completion = z);
  }
  function se(j) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      j.forEach(le, this),
      this.reset(!0);
  }
  function q(j) {
    if (j || j === "") {
      var z = j[u];
      if (z) return z.call(j);
      if (typeof j.next == "function") return j;
      if (!isNaN(j.length)) {
        var R = -1,
          B = function W() {
            for (; ++R < j.length; )
              if (r.call(j, R)) return (W.value = j[R]), (W.done = !1), W;
            return (W.value = e), (W.done = !0), W;
          };
        return (B.next = B);
      }
    }
    throw new TypeError(yt(j) + " is not iterable");
  }
  return (
    (y.prototype = S),
    i(A, "constructor", { value: S, configurable: !0 }),
    i(S, "constructor", { value: y, configurable: !0 }),
    (y.displayName = d(S, f, "GeneratorFunction")),
    (t.isGeneratorFunction = function (j) {
      var z = typeof j == "function" && j.constructor;
      return (
        !!z && (z === y || (z.displayName || z.name) === "GeneratorFunction")
      );
    }),
    (t.mark = function (j) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(j, S)
          : ((j.__proto__ = S), d(j, f, "GeneratorFunction")),
        (j.prototype = Object.create(A)),
        j
      );
    }),
    (t.awrap = function (j) {
      return { __await: j };
    }),
    U(G.prototype),
    d(G.prototype, c, function () {
      return this;
    }),
    (t.AsyncIterator = G),
    (t.async = function (j, z, R, B, W) {
      W === void 0 && (W = Promise);
      var H = new G(h(j, z, R, B), W);
      return t.isGeneratorFunction(z)
        ? H
        : H.next().then(function (Q) {
            return Q.done ? Q.value : H.next();
          });
    }),
    U(A),
    d(A, f, "Generator"),
    d(A, u, function () {
      return this;
    }),
    d(A, "toString", function () {
      return "[object Generator]";
    }),
    (t.keys = function (j) {
      var z = Object(j),
        R = [];
      for (var B in z) R.push(B);
      return (
        R.reverse(),
        function W() {
          for (; R.length; ) {
            var H = R.pop();
            if (H in z) return (W.value = H), (W.done = !1), W;
          }
          return (W.done = !0), W;
        }
      );
    }),
    (t.values = q),
    (se.prototype = {
      constructor: se,
      reset: function (z) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = e),
          this.tryEntries.forEach(ne),
          !z)
        )
          for (var R in this)
            R.charAt(0) === "t" &&
              r.call(this, R) &&
              !isNaN(+R.slice(1)) &&
              (this[R] = e);
      },
      stop: function () {
        this.done = !0;
        var z = this.tryEntries[0].completion;
        if (z.type === "throw") throw z.arg;
        return this.rval;
      },
      dispatchException: function (z) {
        if (this.done) throw z;
        var R = this;
        function B(xe, Oe) {
          return (
            (Q.type = "throw"),
            (Q.arg = z),
            (R.next = xe),
            Oe && ((R.method = "next"), (R.arg = e)),
            !!Oe
          );
        }
        for (var W = this.tryEntries.length - 1; W >= 0; --W) {
          var H = this.tryEntries[W],
            Q = H.completion;
          if (H.tryLoc === "root") return B("end");
          if (H.tryLoc <= this.prev) {
            var de = r.call(H, "catchLoc"),
              Se = r.call(H, "finallyLoc");
            if (de && Se) {
              if (this.prev < H.catchLoc) return B(H.catchLoc, !0);
              if (this.prev < H.finallyLoc) return B(H.finallyLoc);
            } else if (de) {
              if (this.prev < H.catchLoc) return B(H.catchLoc, !0);
            } else {
              if (!Se)
                throw new Error("try statement without catch or finally");
              if (this.prev < H.finallyLoc) return B(H.finallyLoc);
            }
          }
        }
      },
      abrupt: function (z, R) {
        for (var B = this.tryEntries.length - 1; B >= 0; --B) {
          var W = this.tryEntries[B];
          if (
            W.tryLoc <= this.prev &&
            r.call(W, "finallyLoc") &&
            this.prev < W.finallyLoc
          ) {
            var H = W;
            break;
          }
        }
        H &&
          (z === "break" || z === "continue") &&
          H.tryLoc <= R &&
          R <= H.finallyLoc &&
          (H = null);
        var Q = H ? H.completion : {};
        return (
          (Q.type = z),
          (Q.arg = R),
          H
            ? ((this.method = "next"), (this.next = H.finallyLoc), T)
            : this.complete(Q)
        );
      },
      complete: function (z, R) {
        if (z.type === "throw") throw z.arg;
        return (
          z.type === "break" || z.type === "continue"
            ? (this.next = z.arg)
            : z.type === "return"
            ? ((this.rval = this.arg = z.arg),
              (this.method = "return"),
              (this.next = "end"))
            : z.type === "normal" && R && (this.next = R),
          T
        );
      },
      finish: function (z) {
        for (var R = this.tryEntries.length - 1; R >= 0; --R) {
          var B = this.tryEntries[R];
          if (B.finallyLoc === z)
            return this.complete(B.completion, B.afterLoc), ne(B), T;
        }
      },
      catch: function (z) {
        for (var R = this.tryEntries.length - 1; R >= 0; --R) {
          var B = this.tryEntries[R];
          if (B.tryLoc === z) {
            var W = B.completion;
            if (W.type === "throw") {
              var H = W.arg;
              ne(B);
            }
            return H;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (z, R, B) {
        return (
          (this.delegate = { iterator: q(z), resultName: R, nextLoc: B }),
          this.method === "next" && (this.arg = e),
          T
        );
      },
    }),
    t
  );
}
function px(e, t, n, r, i, a, u) {
  try {
    var c = e[a](u),
      f = c.value;
  } catch (d) {
    n(d);
    return;
  }
  c.done ? t(f) : Promise.resolve(f).then(r, i);
}
function mO(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, i) {
      var a = e.apply(t, n);
      function u(f) {
        px(a, r, i, u, c, "next", f);
      }
      function c(f) {
        px(a, r, i, u, c, "throw", f);
      }
      u(void 0);
    });
  };
}
var bc = ue({}, K$),
  Sz = bc.version,
  xz = bc.render,
  Cz = bc.unmountComponentAtNode,
  hh;
try {
  var _z = Number((Sz || "").split(".")[0]);
  _z >= 18 && (hh = bc.createRoot);
} catch {}
function hx(e) {
  var t = bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && yt(t) === "object" && (t.usingClientEntryPoint = e);
}
var Qd = "__rc_react_root__";
function Ez(e, t) {
  hx(!0);
  var n = t[Qd] || hh(t);
  hx(!1), n.render(e), (t[Qd] = n);
}
function Oz(e, t) {
  xz(e, t);
}
function kz(e, t) {
  if (hh) {
    Ez(e, t);
    return;
  }
  Oz(e, t);
}
function Pz(e) {
  return e0.apply(this, arguments);
}
function e0() {
  return (
    (e0 = mO(
      qs().mark(function e(t) {
        return qs().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  "return",
                  Promise.resolve().then(function () {
                    var i;
                    (i = t[Qd]) === null || i === void 0 || i.unmount(),
                      delete t[Qd];
                  })
                );
              case 1:
              case "end":
                return r.stop();
            }
        }, e);
      })
    )),
    e0.apply(this, arguments)
  );
}
function Tz(e) {
  Cz(e);
}
function Az(e) {
  return t0.apply(this, arguments);
}
function t0() {
  return (
    (t0 = mO(
      qs().mark(function e(t) {
        return qs().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (hh === void 0) {
                  r.next = 2;
                  break;
                }
                return r.abrupt("return", Pz(t));
              case 2:
                Tz(t);
              case 3:
              case "end":
                return r.stop();
            }
        }, e);
      })
    )),
    t0.apply(this, arguments)
  );
}
const Rz = (e, t, n) => (n !== void 0 ? n : `${e}-${t}`),
  gO = function (e) {
    if (!e) return !1;
    if (e instanceof Element) {
      if (e.offsetParent) return !0;
      if (e.getBBox) {
        var t = e.getBBox(),
          n = t.width,
          r = t.height;
        if (n || r) return !0;
      }
      if (e.getBoundingClientRect) {
        var i = e.getBoundingClientRect(),
          a = i.width,
          u = i.height;
        if (a || u) return !0;
      }
    }
    return !1;
  },
  Iz = (e) => {
    const { componentCls: t, colorPrimary: n } = e;
    return {
      [t]: {
        position: "absolute",
        background: "transparent",
        pointerEvents: "none",
        boxSizing: "border-box",
        color: `var(--wave-color, ${n})`,
        boxShadow: "0 0 0 0 currentcolor",
        opacity: 0.2,
        "&.wave-motion-appear": {
          transition: [
            `box-shadow 0.4s ${e.motionEaseOutCirc}`,
            `opacity 2s ${e.motionEaseOutCirc}`,
          ].join(","),
          "&-active": { boxShadow: "0 0 0 6px currentcolor", opacity: 0 },
          "&.wave-quick": {
            transition: [
              `box-shadow 0.3s ${e.motionEaseInOut}`,
              `opacity 0.35s ${e.motionEaseInOut}`,
            ].join(","),
          },
        },
      },
    };
  },
  $z = ph("Wave", (e) => [Iz(e)]);
function Mz(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function dm(e) {
  return (
    e &&
    e !== "#fff" &&
    e !== "#ffffff" &&
    e !== "rgb(255, 255, 255)" &&
    e !== "rgba(255, 255, 255, 1)" &&
    Mz(e) &&
    !/rgba\((?:\d*, ){3}0\)/.test(e) &&
    e !== "transparent"
  );
}
function Lz(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r,
  } = getComputedStyle(e);
  return dm(t) ? t : dm(n) ? n : dm(r) ? r : null;
}
const yO = "ant-wave-target";
function pm(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Nz = (e) => {
    const { className: t, target: n, component: r } = e,
      i = x.useRef(null),
      [a, u] = x.useState(null),
      [c, f] = x.useState([]),
      [d, h] = x.useState(0),
      [v, g] = x.useState(0),
      [b, E] = x.useState(0),
      [O, T] = x.useState(0),
      [C, y] = x.useState(!1),
      S = {
        left: d,
        top: v,
        width: b,
        height: O,
        borderRadius: c.map((L) => `${L}px`).join(" "),
      };
    a && (S["--wave-color"] = a);
    function k() {
      const L = getComputedStyle(n);
      u(Lz(n));
      const A = L.position === "static",
        { borderLeftWidth: U, borderTopWidth: G } = L;
      h(A ? n.offsetLeft : pm(-parseFloat(U))),
        g(A ? n.offsetTop : pm(-parseFloat(G))),
        E(n.offsetWidth),
        T(n.offsetHeight);
      const {
        borderTopLeftRadius: D,
        borderTopRightRadius: J,
        borderBottomLeftRadius: le,
        borderBottomRightRadius: ne,
      } = L;
      f([D, J, ne, le].map((se) => pm(parseFloat(se))));
    }
    if (
      (x.useEffect(() => {
        if (n) {
          const L = Ji(() => {
            k(), y(!0);
          });
          let A;
          return (
            typeof ResizeObserver < "u" &&
              ((A = new ResizeObserver(k)), A.observe(n)),
            () => {
              Ji.cancel(L), A == null || A.disconnect();
            }
          );
        }
      }, []),
      !C)
    )
      return null;
    const $ =
      (r === "Checkbox" || r === "Radio") &&
      (n == null ? void 0 : n.classList.contains(yO));
    return x.createElement(
      gc,
      {
        visible: !0,
        motionAppear: !0,
        motionName: "wave-motion",
        motionDeadline: 5e3,
        onAppearEnd: (L, A) => {
          var U;
          if (A.deadline || A.propertyName === "opacity") {
            const G =
              (U = i.current) === null || U === void 0
                ? void 0
                : U.parentElement;
            Az(G).then(() => {
              G == null || G.remove();
            });
          }
          return !1;
        },
      },
      (L) => {
        let { className: A } = L;
        return x.createElement("div", {
          ref: i,
          className: At(t, { "wave-quick": $ }, A),
          style: S,
        });
      }
    );
  },
  zz = (e, t) => {
    var n;
    const { component: r } = t;
    if (
      r === "Checkbox" &&
      !(!((n = e.querySelector("input")) === null || n === void 0) && n.checked)
    )
      return;
    const i = document.createElement("div");
    (i.style.position = "absolute"),
      (i.style.left = "0px"),
      (i.style.top = "0px"),
      e == null || e.insertBefore(i, e == null ? void 0 : e.firstChild),
      kz(x.createElement(Nz, Object.assign({}, t, { target: e })), i);
  },
  jz = zz;
function Dz(e, t, n) {
  const { wave: r } = x.useContext(bi),
    [, i, a] = tl(),
    u = di((d) => {
      const h = e.current;
      if ((r != null && r.disabled) || !h) return;
      const v = h.querySelector(`.${yO}`) || h,
        { showEffect: g } = r || {};
      (g || jz)(v, {
        className: t,
        token: i,
        component: n,
        event: d,
        hashId: a,
      });
    }),
    c = x.useRef();
  return (d) => {
    Ji.cancel(c.current),
      (c.current = Ji(() => {
        u(d);
      }));
  };
}
const Fz = (e) => {
    const { children: t, disabled: n, component: r } = e,
      { getPrefixCls: i } = x.useContext(bi),
      a = x.useRef(null),
      u = i("wave"),
      [, c] = $z(u),
      f = Dz(a, At(u, c), r);
    if (
      (Te.useEffect(() => {
        const h = a.current;
        if (!h || h.nodeType !== 1 || n) return;
        const v = (g) => {
          !gO(g.target) ||
            !h.getAttribute ||
            h.getAttribute("disabled") ||
            h.disabled ||
            h.className.includes("disabled") ||
            h.className.includes("-leave") ||
            f(g);
        };
        return (
          h.addEventListener("click", v, !0),
          () => {
            h.removeEventListener("click", v, !0);
          }
        );
      }, [n]),
      !Te.isValidElement(t))
    )
      return t ?? null;
    const d = mc(t) ? lh(t.ref, a) : a;
    return Wy(t, { ref: d });
  },
  Bz = Fz,
  Wz = (e) => {
    const t = Te.useContext(dh);
    return Te.useMemo(
      () =>
        e
          ? typeof e == "string"
            ? e ?? t
            : e instanceof Function
            ? e(t)
            : t
          : t,
      [e, t]
    );
  },
  Hz = Wz;
globalThis && globalThis.__rest;
const bO = x.createContext(null),
  Uz = (e, t) => {
    const n = x.useContext(bO),
      r = x.useMemo(() => {
        if (!n) return "";
        const { compactDirection: i, isFirstItem: a, isLastItem: u } = n,
          c = i === "vertical" ? "-vertical-" : "-";
        return At(`${e}-compact${c}item`, {
          [`${e}-compact${c}first-item`]: a,
          [`${e}-compact${c}last-item`]: u,
          [`${e}-compact${c}item-rtl`]: t === "rtl",
        });
      }, [e, t, n]);
    return {
      compactSize: n == null ? void 0 : n.compactSize,
      compactDirection: n == null ? void 0 : n.compactDirection,
      compactItemClassnames: r,
    };
  },
  Vz = (e) => {
    let { children: t } = e;
    return x.createElement(bO.Provider, { value: null }, t);
  };
var Gz =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
const wO = x.createContext(void 0),
  Kz = (e) => {
    const { getPrefixCls: t, direction: n } = x.useContext(bi),
      { prefixCls: r, size: i, className: a } = e,
      u = Gz(e, ["prefixCls", "size", "className"]),
      c = t("btn-group", r),
      [, , f] = tl();
    let d = "";
    switch (i) {
      case "large":
        d = "lg";
        break;
      case "small":
        d = "sm";
        break;
    }
    const h = At(c, { [`${c}-${d}`]: d, [`${c}-rtl`]: n === "rtl" }, a, f);
    return x.createElement(
      wO.Provider,
      { value: i },
      x.createElement("div", Object.assign({}, u, { className: h }))
    );
  },
  Yz = Kz,
  vx = /^[\u4e00-\u9fa5]{2}$/,
  n0 = vx.test.bind(vx);
function mx(e) {
  return typeof e == "string";
}
function hm(e) {
  return e === "text" || e === "link";
}
function Xz(e, t) {
  if (e == null) return;
  const n = t ? " " : "";
  return typeof e != "string" &&
    typeof e != "number" &&
    mx(e.type) &&
    n0(e.props.children)
    ? Wy(e, { children: e.props.children.split("").join(n) })
    : mx(e)
    ? n0(e)
      ? Te.createElement("span", null, e.split("").join(n))
      : Te.createElement("span", null, e)
    : vO(e)
    ? Te.createElement("span", null, e)
    : e;
}
function Qz(e, t) {
  let n = !1;
  const r = [];
  return (
    Te.Children.forEach(e, (i) => {
      const a = typeof i,
        u = a === "string" || a === "number";
      if (n && u) {
        const c = r.length - 1,
          f = r[c];
        r[c] = `${f}${i}`;
      } else r.push(i);
      n = u;
    }),
    Te.Children.map(r, (i) => Xz(i, t))
  );
}
const qz = x.forwardRef((e, t) => {
    const { className: n, style: r, children: i, prefixCls: a } = e,
      u = At(`${a}-icon`, n);
    return Te.createElement("span", { ref: t, className: u, style: r }, i);
  }),
  SO = qz,
  gx = x.forwardRef((e, t) => {
    let { prefixCls: n, className: r, style: i, iconClassName: a } = e;
    const u = At(`${n}-loading-icon`, r);
    return Te.createElement(
      SO,
      { prefixCls: n, className: u, style: i, ref: t },
      Te.createElement(eL, { className: a })
    );
  }),
  vm = () => ({ width: 0, opacity: 0, transform: "scale(0)" }),
  mm = (e) => ({ width: e.scrollWidth, opacity: 1, transform: "scale(1)" }),
  Zz = (e) => {
    const {
        prefixCls: t,
        loading: n,
        existIcon: r,
        className: i,
        style: a,
      } = e,
      u = !!n;
    return r
      ? Te.createElement(gx, { prefixCls: t, className: i, style: a })
      : Te.createElement(
          gc,
          {
            visible: u,
            motionName: `${t}-loading-icon-motion`,
            motionLeave: u,
            removeOnLeave: !0,
            onAppearStart: vm,
            onAppearActive: mm,
            onEnterStart: vm,
            onEnterActive: mm,
            onLeaveStart: mm,
            onLeaveActive: vm,
          },
          (c, f) => {
            let { className: d, style: h } = c;
            return Te.createElement(gx, {
              prefixCls: t,
              className: i,
              style: Object.assign(Object.assign({}, a), h),
              ref: f,
              iconClassName: d,
            });
          }
        );
  },
  Jz = Zz,
  yx = (e, t) => ({
    [`> span, > ${e}`]: {
      "&:not(:last-child)": {
        [`&, & > ${e}`]: { "&:not(:disabled)": { borderInlineEndColor: t } },
      },
      "&:not(:first-child)": {
        [`&, & > ${e}`]: { "&:not(:disabled)": { borderInlineStartColor: t } },
      },
    },
  }),
  ej = (e) => {
    const {
      componentCls: t,
      fontSize: n,
      lineWidth: r,
      groupBorderColor: i,
      colorErrorHover: a,
    } = e;
    return {
      [`${t}-group`]: [
        {
          position: "relative",
          display: "inline-flex",
          [`> span, > ${t}`]: {
            "&:not(:last-child)": {
              [`&, & > ${t}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
              },
            },
            "&:not(:first-child)": {
              marginInlineStart: -r,
              [`&, & > ${t}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              },
            },
          },
          [t]: {
            position: "relative",
            zIndex: 1,
            "&:hover,\n          &:focus,\n          &:active": { zIndex: 2 },
            "&[disabled]": { zIndex: 0 },
          },
          [`${t}-icon-only`]: { fontSize: n },
        },
        yx(`${t}-primary`, i),
        yx(`${t}-danger`, a),
      ],
    };
  },
  tj = ej,
  nj = (e) => {
    const { componentCls: t, iconCls: n, fontWeight: r } = e;
    return {
      [t]: {
        outline: "none",
        position: "relative",
        display: "inline-block",
        fontWeight: r,
        whiteSpace: "nowrap",
        textAlign: "center",
        backgroundImage: "none",
        backgroundColor: "transparent",
        border: `${e.lineWidth}px ${e.lineType} transparent`,
        cursor: "pointer",
        transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
        userSelect: "none",
        touchAction: "manipulation",
        lineHeight: e.lineHeight,
        color: e.colorText,
        "&:disabled > *": { pointerEvents: "none" },
        "> span": { display: "inline-block" },
        [`${t}-icon`]: { lineHeight: 0 },
        [`> ${n} + span, > span + ${n}`]: { marginInlineStart: e.marginXS },
        [`&:not(${t}-icon-only) > ${t}-icon`]: {
          [`&${t}-loading-icon, &:not(:last-child)`]: {
            marginInlineEnd: e.marginXS,
          },
        },
        "> a": { color: "currentColor" },
        "&:not(:disabled)": Object.assign({}, jN(e)),
        [`&${t}-two-chinese-chars::first-letter`]: { letterSpacing: "0.34em" },
        [`&${t}-two-chinese-chars > *:not(${n})`]: {
          marginInlineEnd: "-0.34em",
          letterSpacing: "0.34em",
        },
        [`&-icon-only${t}-compact-item`]: { flex: "none" },
        [`&-compact-item${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]:
            {
              position: "relative",
              "&:before": {
                position: "absolute",
                top: -e.lineWidth,
                insetInlineStart: -e.lineWidth,
                display: "inline-block",
                width: e.lineWidth,
                height: `calc(100% + ${e.lineWidth * 2}px)`,
                backgroundColor: e.colorPrimaryHover,
                content: '""',
              },
            },
        },
        "&-compact-vertical-item": {
          [`&${t}-primary`]: {
            [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]:
              {
                position: "relative",
                "&:before": {
                  position: "absolute",
                  top: -e.lineWidth,
                  insetInlineStart: -e.lineWidth,
                  display: "inline-block",
                  width: `calc(100% + ${e.lineWidth * 2}px)`,
                  height: e.lineWidth,
                  backgroundColor: e.colorPrimaryHover,
                  content: '""',
                },
              },
          },
        },
      },
    };
  },
  eo = (e, t, n) => ({
    [`&:not(:disabled):not(${e}-disabled)`]: { "&:hover": t, "&:active": n },
  }),
  rj = (e) => ({
    minWidth: e.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: "50%",
  }),
  ij = (e) => ({
    borderRadius: e.controlHeight,
    paddingInlineStart: e.controlHeight / 2,
    paddingInlineEnd: e.controlHeight / 2,
  }),
  oj = (e) => ({
    cursor: "not-allowed",
    borderColor: e.borderColorDisabled,
    color: e.colorTextDisabled,
    backgroundColor: e.colorBgContainerDisabled,
    boxShadow: "none",
  }),
  Zs = (e, t, n, r, i, a, u, c) => ({
    [`&${e}-background-ghost`]: Object.assign(
      Object.assign(
        {
          color: n || void 0,
          backgroundColor: t,
          borderColor: r || void 0,
          boxShadow: "none",
        },
        eo(
          e,
          Object.assign({ backgroundColor: t }, u),
          Object.assign({ backgroundColor: t }, c)
        )
      ),
      {
        "&:disabled": {
          cursor: "not-allowed",
          color: i || void 0,
          borderColor: a || void 0,
        },
      }
    ),
  }),
  Hy = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, oj(e)),
  }),
  xO = (e) => Object.assign({}, Hy(e)),
  qd = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: {
      cursor: "not-allowed",
      color: e.colorTextDisabled,
    },
  }),
  CO = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, xO(e)), {
            backgroundColor: e.defaultBg,
            borderColor: e.defaultBorderColor,
            color: e.defaultColor,
            boxShadow: e.defaultShadow,
          }),
          eo(
            e.componentCls,
            { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
            { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive }
          )
        ),
        Zs(
          e.componentCls,
          e.ghostBg,
          e.defaultGhostColor,
          e.defaultGhostBorderColor,
          e.colorTextDisabled,
          e.colorBorder
        )
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            Object.assign(
              { color: e.colorError, borderColor: e.colorError },
              eo(
                e.componentCls,
                {
                  color: e.colorErrorHover,
                  borderColor: e.colorErrorBorderHover,
                },
                { color: e.colorErrorActive, borderColor: e.colorErrorActive }
              )
            ),
            Zs(
              e.componentCls,
              e.ghostBg,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder
            )
          ),
          Hy(e)
        ),
      }
    ),
  aj = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, xO(e)), {
            color: e.primaryColor,
            backgroundColor: e.colorPrimary,
            boxShadow: e.primaryShadow,
          }),
          eo(
            e.componentCls,
            {
              color: e.colorTextLightSolid,
              backgroundColor: e.colorPrimaryHover,
            },
            {
              color: e.colorTextLightSolid,
              backgroundColor: e.colorPrimaryActive,
            }
          )
        ),
        Zs(
          e.componentCls,
          e.ghostBg,
          e.colorPrimary,
          e.colorPrimary,
          e.colorTextDisabled,
          e.colorBorder,
          { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
          { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive }
        )
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            Object.assign(
              {
                backgroundColor: e.colorError,
                boxShadow: e.dangerShadow,
                color: e.dangerColor,
              },
              eo(
                e.componentCls,
                { backgroundColor: e.colorErrorHover },
                { backgroundColor: e.colorErrorActive }
              )
            ),
            Zs(
              e.componentCls,
              e.ghostBg,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder,
              { color: e.colorErrorHover, borderColor: e.colorErrorHover },
              { color: e.colorErrorActive, borderColor: e.colorErrorActive }
            )
          ),
          Hy(e)
        ),
      }
    ),
  lj = (e) =>
    Object.assign(Object.assign({}, CO(e)), { borderStyle: "dashed" }),
  uj = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          { color: e.colorLink },
          eo(
            e.componentCls,
            { color: e.colorLinkHover, backgroundColor: e.linkHoverBg },
            { color: e.colorLinkActive }
          )
        ),
        qd(e)
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            { color: e.colorError },
            eo(
              e.componentCls,
              { color: e.colorErrorHover },
              { color: e.colorErrorActive }
            )
          ),
          qd(e)
        ),
      }
    ),
  sj = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          {},
          eo(
            e.componentCls,
            { color: e.colorText, backgroundColor: e.textHoverBg },
            { color: e.colorText, backgroundColor: e.colorBgTextActive }
          )
        ),
        qd(e)
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign({ color: e.colorError }, qd(e)),
          eo(
            e.componentCls,
            { color: e.colorErrorHover, backgroundColor: e.colorErrorBg },
            { color: e.colorErrorHover, backgroundColor: e.colorErrorBg }
          )
        ),
      }
    ),
  cj = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-default`]: CO(e),
      [`${t}-primary`]: aj(e),
      [`${t}-dashed`]: lj(e),
      [`${t}-link`]: uj(e),
      [`${t}-text`]: sj(e),
      [`${t}-ghost`]: Zs(
        e.componentCls,
        e.ghostBg,
        e.colorBgContainer,
        e.colorBgContainer,
        e.colorTextDisabled,
        e.colorBorder
      ),
    };
  },
  Uy = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const {
        componentCls: n,
        controlHeight: r,
        fontSize: i,
        lineHeight: a,
        lineWidth: u,
        borderRadius: c,
        buttonPaddingHorizontal: f,
        iconCls: d,
      } = e,
      h = Math.max(0, (r - i * a) / 2 - u),
      v = `${n}-icon-only`;
    return [
      {
        [`${n}${t}`]: {
          fontSize: i,
          height: r,
          padding: `${h}px ${f}px`,
          borderRadius: c,
          [`&${v}`]: {
            width: r,
            paddingInlineStart: 0,
            paddingInlineEnd: 0,
            [`&${n}-round`]: { width: "auto" },
            [d]: { fontSize: e.buttonIconOnlyFontSize },
          },
          [`&${n}-loading`]: { opacity: e.opacityLoading, cursor: "default" },
          [`${n}-loading-icon`]: {
            transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          },
        },
      },
      { [`${n}${n}-circle${t}`]: rj(e) },
      { [`${n}${n}-round${t}`]: ij(e) },
    ];
  },
  fj = (e) => Uy(Jo(e, { fontSize: e.contentFontSize })),
  dj = (e) => {
    const t = Jo(e, {
      controlHeight: e.controlHeightSM,
      fontSize: e.contentFontSizeSM,
      padding: e.paddingXS,
      buttonPaddingHorizontal: e.paddingInlineSM,
      borderRadius: e.borderRadiusSM,
      buttonIconOnlyFontSize: e.onlyIconSizeSM,
    });
    return Uy(t, `${e.componentCls}-sm`);
  },
  pj = (e) => {
    const t = Jo(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.contentFontSizeLG,
      buttonPaddingHorizontal: e.paddingInlineLG,
      borderRadius: e.borderRadiusLG,
      buttonIconOnlyFontSize: e.onlyIconSizeLG,
    });
    return Uy(t, `${e.componentCls}-lg`);
  },
  hj = (e) => {
    const { componentCls: t } = e;
    return { [t]: { [`&${t}-block`]: { width: "100%" } } };
  },
  _O = (e) => {
    const { paddingInline: t, onlyIconSize: n } = e;
    return Jo(e, { buttonPaddingHorizontal: t, buttonIconOnlyFontSize: n });
  },
  EO = (e) => ({
    fontWeight: 400,
    defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
    primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
    dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
    primaryColor: e.colorTextLightSolid,
    dangerColor: e.colorTextLightSolid,
    borderColorDisabled: e.colorBorder,
    defaultGhostColor: e.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: e.colorBgContainer,
    paddingInline: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineSM: 8 - e.lineWidth,
    onlyIconSize: e.fontSizeLG,
    onlyIconSizeSM: e.fontSizeLG - 2,
    onlyIconSizeLG: e.fontSizeLG + 2,
    groupBorderColor: e.colorPrimaryHover,
    linkHoverBg: "transparent",
    textHoverBg: e.colorBgTextHover,
    defaultColor: e.colorText,
    defaultBg: e.colorBgContainer,
    defaultBorderColor: e.colorBorder,
    defaultBorderColorDisabled: e.colorBorder,
    contentFontSize: e.fontSize,
    contentFontSizeSM: e.fontSize,
    contentFontSizeLG: e.fontSizeLG,
  }),
  vj = ph(
    "Button",
    (e) => {
      const t = _O(e);
      return [nj(t), dj(t), fj(t), pj(t), hj(t), cj(t), tj(t)];
    },
    EO
  );
function mj(e, t, n) {
  const { focusElCls: r, focus: i, borderElCls: a } = n,
    u = a ? "> *" : "",
    c = ["hover", i ? "focus" : null, "active"]
      .filter(Boolean)
      .map((f) => `&:${f} ${u}`)
      .join(",");
  return {
    [`&-item:not(${t}-last-item)`]: { marginInlineEnd: -e.lineWidth },
    "&-item": Object.assign(
      Object.assign(
        { [c]: { zIndex: 2 } },
        r ? { [`&${r}`]: { zIndex: 2 } } : {}
      ),
      { [`&[disabled] ${u}`]: { zIndex: 0 } }
    ),
  };
}
function gj(e, t, n) {
  const { borderElCls: r } = n,
    i = r ? `> ${r}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${i}`]: {
      borderRadius: 0,
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${i}, &${e}-sm ${i}, &${e}-lg ${i}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${i}, &${e}-sm ${i}, &${e}-lg ${i}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
      },
    },
  };
}
function yj(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { focus: !0 };
  const { componentCls: n } = e,
    r = `${n}-compact`;
  return { [r]: Object.assign(Object.assign({}, mj(e, r, t)), gj(n, r, t)) };
}
function bj(e, t) {
  return {
    [`&-item:not(${t}-last-item)`]: { marginBottom: -e.lineWidth },
    "&-item": {
      "&:hover,&:focus,&:active": { zIndex: 2 },
      "&[disabled]": { zIndex: 0 },
    },
  };
}
function wj(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: { borderRadius: 0 },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0,
      },
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0,
      },
    },
  };
}
function Sj(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, bj(e, t)), wj(e.componentCls, t)),
  };
}
const xj = WN(
  ["Button", "compact"],
  (e) => {
    const t = _O(e);
    return [yj(t), Sj(t)];
  },
  EO
);
var Cj =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
function _j(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return (
      (t = !Number.isNaN(t) && typeof t == "number" ? t : 0),
      { loading: t <= 0, delay: t }
    );
  }
  return { loading: !!e, delay: 0 };
}
const Ej = (e, t) => {
    var n, r;
    const {
        loading: i = !1,
        prefixCls: a,
        type: u = "default",
        danger: c,
        shape: f = "default",
        size: d,
        styles: h,
        disabled: v,
        className: g,
        rootClassName: b,
        children: E,
        icon: O,
        ghost: T = !1,
        block: C = !1,
        htmlType: y = "button",
        classNames: S,
        style: k = {},
      } = e,
      $ = Cj(e, [
        "loading",
        "prefixCls",
        "type",
        "danger",
        "shape",
        "size",
        "styles",
        "disabled",
        "className",
        "rootClassName",
        "children",
        "icon",
        "ghost",
        "block",
        "htmlType",
        "classNames",
        "style",
      ]),
      {
        getPrefixCls: L,
        autoInsertSpaceInButton: A,
        direction: U,
        button: G,
      } = x.useContext(bi),
      D = L("btn", a),
      [J, le] = vj(D),
      ne = x.useContext(JE),
      se = v ?? ne,
      q = x.useContext(wO),
      j = x.useMemo(() => _j(i), [i]),
      [z, R] = x.useState(j.loading),
      [B, W] = x.useState(!1),
      Q = lh(t, x.createRef()),
      de = x.Children.count(E) === 1 && !O && !hm(u);
    x.useEffect(() => {
      let Ce = null;
      j.delay > 0
        ? (Ce = setTimeout(() => {
            (Ce = null), R(!0);
          }, j.delay))
        : R(j.loading);
      function pe() {
        Ce && (clearTimeout(Ce), (Ce = null));
      }
      return pe;
    }, [j]),
      x.useEffect(() => {
        if (!Q || !Q.current || A === !1) return;
        const Ce = Q.current.textContent;
        de && n0(Ce) ? B || W(!0) : B && W(!1);
      }, [Q]);
    const Se = (Ce) => {
        const { onClick: pe } = e;
        if (z || se) {
          Ce.preventDefault();
          return;
        }
        pe == null || pe(Ce);
      },
      xe = A !== !1,
      { compactSize: Oe, compactItemClassnames: ze } = Uz(D, U),
      Fe = { large: "lg", small: "sm", middle: void 0 },
      Ke = Hz((Ce) => {
        var pe, Ae;
        return (Ae = (pe = d ?? Oe) !== null && pe !== void 0 ? pe : q) !==
          null && Ae !== void 0
          ? Ae
          : Ce;
      }),
      ft = (Ke && Fe[Ke]) || "",
      Ue = z ? "loading" : O,
      Lt = FL($, ["navigate"]),
      Kt = At(
        D,
        le,
        {
          [`${D}-${f}`]: f !== "default" && f,
          [`${D}-${u}`]: u,
          [`${D}-${ft}`]: ft,
          [`${D}-icon-only`]: !E && E !== 0 && !!Ue,
          [`${D}-background-ghost`]: T && !hm(u),
          [`${D}-loading`]: z,
          [`${D}-two-chinese-chars`]: B && xe && !z,
          [`${D}-block`]: C,
          [`${D}-dangerous`]: !!c,
          [`${D}-rtl`]: U === "rtl",
        },
        ze,
        g,
        b,
        G == null ? void 0 : G.className
      ),
      Ie = Object.assign(Object.assign({}, G == null ? void 0 : G.style), k),
      Ze = At(
        S == null ? void 0 : S.icon,
        (n = G == null ? void 0 : G.classNames) === null || n === void 0
          ? void 0
          : n.icon
      ),
      Yt = Object.assign(
        Object.assign({}, (h == null ? void 0 : h.icon) || {}),
        ((r = G == null ? void 0 : G.styles) === null || r === void 0
          ? void 0
          : r.icon) || {}
      ),
      De =
        O && !z
          ? Te.createElement(SO, { prefixCls: D, className: Ze, style: Yt }, O)
          : Te.createElement(Jz, {
              existIcon: !!O,
              prefixCls: D,
              loading: !!z,
            }),
      bt = E || E === 0 ? Qz(E, de && xe) : null;
    if (Lt.href !== void 0)
      return J(
        Te.createElement(
          "a",
          Object.assign({}, Lt, {
            className: At(Kt, { [`${D}-disabled`]: se }),
            style: Ie,
            onClick: Se,
            ref: Q,
          }),
          De,
          bt
        )
      );
    let ve = Te.createElement(
      "button",
      Object.assign({}, $, {
        type: y,
        className: Kt,
        style: Ie,
        onClick: Se,
        disabled: se,
        ref: Q,
      }),
      De,
      bt,
      ze && Te.createElement(xj, { key: "compact", prefixCls: D })
    );
    return (
      hm(u) ||
        (ve = Te.createElement(Bz, { component: "Button", disabled: !!z }, ve)),
      J(ve)
    );
  },
  Vy = x.forwardRef(Ej);
Vy.Group = Yz;
Vy.__ANT_BUTTON = !0;
const Oj = Vy;
var OO = x.createContext(null),
  bx = [];
function kj(e, t) {
  var n = x.useState(function () {
      if (!Dn()) return null;
      var E = document.createElement("div");
      return E;
    }),
    r = me(n, 1),
    i = r[0],
    a = x.useRef(!1),
    u = x.useContext(OO),
    c = x.useState(bx),
    f = me(c, 2),
    d = f[0],
    h = f[1],
    v =
      u ||
      (a.current
        ? void 0
        : function (E) {
            h(function (O) {
              var T = [E].concat(Pr(O));
              return T;
            });
          });
  function g() {
    i.parentElement || document.body.appendChild(i), (a.current = !0);
  }
  function b() {
    var E;
    (E = i.parentElement) === null || E === void 0 || E.removeChild(i),
      (a.current = !1);
  }
  return (
    On(
      function () {
        return e ? (u ? u(g) : g()) : b(), b;
      },
      [e]
    ),
    On(
      function () {
        d.length &&
          (d.forEach(function (E) {
            return E();
          }),
          h(bx));
      },
      [d]
    ),
    [i, v]
  );
}
var gm;
function Pj(e) {
  if (typeof document > "u") return 0;
  if (e || gm === void 0) {
    var t = document.createElement("div");
    (t.style.width = "100%"), (t.style.height = "200px");
    var n = document.createElement("div"),
      r = n.style;
    (r.position = "absolute"),
      (r.top = "0"),
      (r.left = "0"),
      (r.pointerEvents = "none"),
      (r.visibility = "hidden"),
      (r.width = "200px"),
      (r.height = "150px"),
      (r.overflow = "hidden"),
      n.appendChild(t),
      document.body.appendChild(n);
    var i = t.offsetWidth;
    n.style.overflow = "scroll";
    var a = t.offsetWidth;
    i === a && (a = n.clientWidth), document.body.removeChild(n), (gm = i - a);
  }
  return gm;
}
function wx(e) {
  var t = e.match(/^(.*)px$/),
    n = Number(t == null ? void 0 : t[1]);
  return Number.isNaN(n) ? Pj() : n;
}
function Tj(e) {
  if (typeof document > "u" || !e || !(e instanceof Element))
    return { width: 0, height: 0 };
  var t = getComputedStyle(e, "::-webkit-scrollbar"),
    n = t.width,
    r = t.height;
  return { width: wx(n), height: wx(r) };
}
function Aj() {
  return (
    document.body.scrollHeight >
      (window.innerHeight || document.documentElement.clientHeight) &&
    window.innerWidth > document.body.offsetWidth
  );
}
var Rj = "rc-util-locker-".concat(Date.now()),
  Sx = 0;
function Ij(e) {
  var t = !!e,
    n = x.useState(function () {
      return (Sx += 1), "".concat(Rj, "_").concat(Sx);
    }),
    r = me(n, 1),
    i = r[0];
  On(
    function () {
      if (t) {
        var a = Tj(document.body).width,
          u = Aj();
        gu(
          `
html body {
  overflow-y: hidden;
  `.concat(
            u ? "width: calc(100% - ".concat(a, "px);") : "",
            `
}`
          ),
          i
        );
      } else Wd(i);
      return function () {
        Wd(i);
      };
    },
    [t, i]
  );
}
var xx = !1;
function $j(e) {
  return typeof e == "boolean" && (xx = e), xx;
}
var Cx = function (t) {
    return t === !1
      ? !1
      : !Dn() || !t
      ? null
      : typeof t == "string"
      ? document.querySelector(t)
      : typeof t == "function"
      ? t()
      : t;
  },
  kO = x.forwardRef(function (e, t) {
    var n = e.open,
      r = e.autoLock,
      i = e.getContainer;
    e.debug;
    var a = e.autoDestroy,
      u = a === void 0 ? !0 : a,
      c = e.children,
      f = x.useState(n),
      d = me(f, 2),
      h = d[0],
      v = d[1],
      g = h || n;
    x.useEffect(
      function () {
        (u || n) && v(n);
      },
      [n, u]
    );
    var b = x.useState(function () {
        return Cx(i);
      }),
      E = me(b, 2),
      O = E[0],
      T = E[1];
    x.useEffect(function () {
      var J = Cx(i);
      T(J ?? null);
    });
    var C = kj(g && !O),
      y = me(C, 2),
      S = y[0],
      k = y[1],
      $ = O ?? S;
    Ij(r && n && Dn() && ($ === S || $ === document.body));
    var L = null;
    if (c && mc(c) && t) {
      var A = c;
      L = A.ref;
    }
    var U = Ay(L, t);
    if (!g || !Dn() || O === void 0) return null;
    var G = $ === !1 || $j(),
      D = c;
    return (
      t && (D = x.cloneElement(c, { ref: U })),
      x.createElement(OO.Provider, { value: k }, G ? D : hc.createPortal(D, $))
    );
  });
function Mj() {
  var e = ue({}, cp);
  return e.useId;
}
var _x = 0,
  Ex = Mj();
const Lj = Ex
    ? function (t) {
        var n = Ex();
        return t || n;
      }
    : function (t) {
        var n = x.useState("ssr-id"),
          r = me(n, 2),
          i = r[0],
          a = r[1];
        return (
          x.useEffect(function () {
            var u = _x;
            (_x += 1), a("rc_unique_".concat(u));
          }, []),
          t || i
        );
      },
  Nj = Te.createContext(void 0),
  PO = Nj,
  zj = (e) => ({ animationDuration: e, animationFillMode: "both" }),
  jj = (e) => ({ animationDuration: e, animationFillMode: "both" }),
  Dj = function (e, t, n, r) {
    const a = (
      arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
    )
      ? "&"
      : "";
    return {
      [`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: Object.assign(Object.assign({}, zj(r)), {
        animationPlayState: "paused",
      }),
      [`${a}${e}-leave`]: Object.assign(Object.assign({}, jj(r)), {
        animationPlayState: "paused",
      }),
      [`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: "running" },
      [`${a}${e}-leave${e}-leave-active`]: {
        animationName: n,
        animationPlayState: "running",
        pointerEvents: "none",
      },
    };
  },
  Fj = new Ir("antZoomIn", {
    "0%": { transform: "scale(0.2)", opacity: 0 },
    "100%": { transform: "scale(1)", opacity: 1 },
  }),
  Bj = new Ir("antZoomOut", {
    "0%": { transform: "scale(1)" },
    "100%": { transform: "scale(0.2)", opacity: 0 },
  }),
  Ox = new Ir("antZoomBigIn", {
    "0%": { transform: "scale(0.8)", opacity: 0 },
    "100%": { transform: "scale(1)", opacity: 1 },
  }),
  kx = new Ir("antZoomBigOut", {
    "0%": { transform: "scale(1)" },
    "100%": { transform: "scale(0.8)", opacity: 0 },
  }),
  Wj = new Ir("antZoomUpIn", {
    "0%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 },
    "100%": { transform: "scale(1)", transformOrigin: "50% 0%" },
  }),
  Hj = new Ir("antZoomUpOut", {
    "0%": { transform: "scale(1)", transformOrigin: "50% 0%" },
    "100%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 },
  }),
  Uj = new Ir("antZoomLeftIn", {
    "0%": { transform: "scale(0.8)", transformOrigin: "0% 50%", opacity: 0 },
    "100%": { transform: "scale(1)", transformOrigin: "0% 50%" },
  }),
  Vj = new Ir("antZoomLeftOut", {
    "0%": { transform: "scale(1)", transformOrigin: "0% 50%" },
    "100%": { transform: "scale(0.8)", transformOrigin: "0% 50%", opacity: 0 },
  }),
  Gj = new Ir("antZoomRightIn", {
    "0%": { transform: "scale(0.8)", transformOrigin: "100% 50%", opacity: 0 },
    "100%": { transform: "scale(1)", transformOrigin: "100% 50%" },
  }),
  Kj = new Ir("antZoomRightOut", {
    "0%": { transform: "scale(1)", transformOrigin: "100% 50%" },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "100% 50%",
      opacity: 0,
    },
  }),
  Yj = new Ir("antZoomDownIn", {
    "0%": { transform: "scale(0.8)", transformOrigin: "50% 100%", opacity: 0 },
    "100%": { transform: "scale(1)", transformOrigin: "50% 100%" },
  }),
  Xj = new Ir("antZoomDownOut", {
    "0%": { transform: "scale(1)", transformOrigin: "50% 100%" },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 100%",
      opacity: 0,
    },
  }),
  Qj = {
    zoom: { inKeyframes: Fj, outKeyframes: Bj },
    "zoom-big": { inKeyframes: Ox, outKeyframes: kx },
    "zoom-big-fast": { inKeyframes: Ox, outKeyframes: kx },
    "zoom-left": { inKeyframes: Uj, outKeyframes: Vj },
    "zoom-right": { inKeyframes: Gj, outKeyframes: Kj },
    "zoom-up": { inKeyframes: Wj, outKeyframes: Hj },
    "zoom-down": { inKeyframes: Yj, outKeyframes: Xj },
  },
  qj = (e, t) => {
    const { antCls: n } = e,
      r = `${n}-${t}`,
      { inKeyframes: i, outKeyframes: a } = Qj[t];
    return [
      Dj(
        r,
        i,
        a,
        t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid
      ),
      {
        [`
        ${r}-enter,
        ${r}-appear
      `]: {
          transform: "scale(0)",
          opacity: 0,
          animationTimingFunction: e.motionEaseOutCirc,
          "&-prepare": { transform: "none" },
        },
        [`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
      },
    ];
  },
  TO = {
    Modal: 0,
    Drawer: 0,
    Popover: 70,
    Popconfirm: 70,
    Tooltip: 70,
    Tour: 70,
  },
  Zj = {
    SelectLike: 50,
    Dropdown: 50,
    ColorPicker: 30,
    DatePicker: 50,
    Menu: 50,
  };
function Jj(e) {
  return e in TO;
}
function eD(e, t) {
  const [, n] = tl(),
    r = Te.useContext(PO),
    i = Jj(e);
  let a = r ?? 0;
  return (
    i ? (a += n.zIndexPopupBase + TO[e]) : (a += Zj[e]),
    [r === void 0 ? t : a, a]
  );
}
const tD = function () {
  if (typeof navigator > "u" || typeof window > "u") return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
      e
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
      e == null ? void 0 : e.substr(0, 4)
    )
  );
};
function nD(e) {
  var t = e.prefixCls,
    n = e.align,
    r = e.arrow,
    i = e.arrowPos,
    a = r || {},
    u = a.className,
    c = a.content,
    f = i.x,
    d = f === void 0 ? 0 : f,
    h = i.y,
    v = h === void 0 ? 0 : h,
    g = x.useRef();
  if (!n || !n.points) return null;
  var b = { position: "absolute" };
  if (n.autoArrow !== !1) {
    var E = n.points[0],
      O = n.points[1],
      T = E[0],
      C = E[1],
      y = O[0],
      S = O[1];
    T === y || !["t", "b"].includes(T)
      ? (b.top = v)
      : T === "t"
      ? (b.top = 0)
      : (b.bottom = 0),
      C === S || !["l", "r"].includes(C)
        ? (b.left = d)
        : C === "l"
        ? (b.left = 0)
        : (b.right = 0);
  }
  return x.createElement(
    "div",
    { ref: g, className: At("".concat(t, "-arrow"), u), style: b },
    c
  );
}
function rD(e) {
  var t = e.prefixCls,
    n = e.open,
    r = e.zIndex,
    i = e.mask,
    a = e.motion;
  return i
    ? x.createElement(
        gc,
        Vt({}, a, { motionAppear: !0, visible: n, removeOnLeave: !0 }),
        function (u) {
          var c = u.className;
          return x.createElement("div", {
            style: { zIndex: r },
            className: At("".concat(t, "-mask"), c),
          });
        }
      )
    : null;
}
var iD = x.memo(
    function (e) {
      var t = e.children;
      return t;
    },
    function (e, t) {
      return t.cache;
    }
  ),
  oD = x.forwardRef(function (e, t) {
    var n = e.popup,
      r = e.className,
      i = e.prefixCls,
      a = e.style,
      u = e.target,
      c = e.onVisibleChanged,
      f = e.open,
      d = e.keepDom,
      h = e.fresh,
      v = e.onClick,
      g = e.mask,
      b = e.arrow,
      E = e.arrowPos,
      O = e.align,
      T = e.motion,
      C = e.maskMotion,
      y = e.forceRender,
      S = e.getPopupContainer,
      k = e.autoDestroy,
      $ = e.portal,
      L = e.zIndex,
      A = e.onMouseEnter,
      U = e.onMouseLeave,
      G = e.onPointerEnter,
      D = e.ready,
      J = e.offsetX,
      le = e.offsetY,
      ne = e.offsetR,
      se = e.offsetB,
      q = e.onAlign,
      j = e.onPrepare,
      z = e.stretch,
      R = e.targetWidth,
      B = e.targetHeight,
      W = typeof n == "function" ? n() : n,
      H = f || d,
      Q = (S == null ? void 0 : S.length) > 0,
      de = x.useState(!S || !Q),
      Se = me(de, 2),
      xe = Se[0],
      Oe = Se[1];
    if (
      (On(
        function () {
          !xe && Q && u && Oe(!0);
        },
        [xe, Q, u]
      ),
      !xe)
    )
      return null;
    var ze = "auto",
      Fe = { left: "-1000vw", top: "-1000vh", right: ze, bottom: ze };
    if (D || !f) {
      var Ke,
        ft = O.points,
        Ue =
          O.dynamicInset ||
          ((Ke = O._experimental) === null || Ke === void 0
            ? void 0
            : Ke.dynamicInset),
        Lt = Ue && ft[0][1] === "r",
        Kt = Ue && ft[0][0] === "b";
      Lt ? ((Fe.right = ne), (Fe.left = ze)) : ((Fe.left = J), (Fe.right = ze)),
        Kt
          ? ((Fe.bottom = se), (Fe.top = ze))
          : ((Fe.top = le), (Fe.bottom = ze));
    }
    var Ie = {};
    return (
      z &&
        (z.includes("height") && B
          ? (Ie.height = B)
          : z.includes("minHeight") && B && (Ie.minHeight = B),
        z.includes("width") && R
          ? (Ie.width = R)
          : z.includes("minWidth") && R && (Ie.minWidth = R)),
      f || (Ie.pointerEvents = "none"),
      x.createElement(
        $,
        {
          open: y || H,
          getContainer:
            S &&
            function () {
              return S(u);
            },
          autoDestroy: k,
        },
        x.createElement(rD, {
          prefixCls: i,
          open: f,
          zIndex: L,
          mask: g,
          motion: C,
        }),
        x.createElement($y, { onResize: q, disabled: !f }, function (Ze) {
          return x.createElement(
            gc,
            Vt(
              {
                motionAppear: !0,
                motionEnter: !0,
                motionLeave: !0,
                removeOnLeave: !1,
                forceRender: y,
                leavedClassName: "".concat(i, "-hidden"),
              },
              T,
              {
                onAppearPrepare: j,
                onEnterPrepare: j,
                visible: f,
                onVisibleChanged: function (De) {
                  var bt;
                  T == null ||
                    (bt = T.onVisibleChanged) === null ||
                    bt === void 0 ||
                    bt.call(T, De),
                    c(De);
                },
              }
            ),
            function (Yt, De) {
              var bt = Yt.className,
                ve = Yt.style,
                Ce = At(i, bt, r);
              return x.createElement(
                "div",
                {
                  ref: lh(Ze, t, De),
                  className: Ce,
                  style: ue(
                    ue(
                      ue(
                        ue(
                          {
                            "--arrow-x": "".concat(E.x || 0, "px"),
                            "--arrow-y": "".concat(E.y || 0, "px"),
                          },
                          Fe
                        ),
                        Ie
                      ),
                      ve
                    ),
                    {},
                    { boxSizing: "border-box", zIndex: L },
                    a
                  ),
                  onMouseEnter: A,
                  onMouseLeave: U,
                  onPointerEnter: G,
                  onClick: v,
                },
                b &&
                  x.createElement(nD, {
                    prefixCls: i,
                    arrow: b,
                    arrowPos: E,
                    align: O,
                  }),
                x.createElement(iD, { cache: !f && !h }, W)
              );
            }
          );
        })
      )
    );
  }),
  aD = x.forwardRef(function (e, t) {
    var n = e.children,
      r = e.getTriggerDOMNode,
      i = mc(n),
      a = x.useCallback(
        function (c) {
          Ty(t, r ? r(c) : c);
        },
        [r]
      ),
      u = Ay(a, n.ref);
    return i ? x.cloneElement(n, { ref: u }) : n;
  }),
  Px = x.createContext(null);
function Tx(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
function lD(e, t, n, r) {
  return x.useMemo(
    function () {
      var i = Tx(n ?? t),
        a = Tx(r ?? t),
        u = new Set(i),
        c = new Set(a);
      return (
        e &&
          (u.has("hover") && (u.delete("hover"), u.add("click")),
          c.has("hover") && (c.delete("hover"), c.add("click"))),
        [u, c]
      );
    },
    [e, t, n, r]
  );
}
function uD() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function sD(e, t, n, r) {
  for (var i = n.points, a = Object.keys(e), u = 0; u < a.length; u += 1) {
    var c,
      f = a[u];
    if (uD((c = e[f]) === null || c === void 0 ? void 0 : c.points, i, r))
      return "".concat(t, "-placement-").concat(f);
  }
  return "";
}
function Ax(e, t, n, r) {
  return (
    t ||
    (n
      ? { motionName: "".concat(e, "-").concat(n) }
      : r
      ? { motionName: r }
      : null)
  );
}
function wc(e) {
  return e.ownerDocument.defaultView;
}
function r0(e) {
  for (
    var t = [],
      n = e == null ? void 0 : e.parentElement,
      r = ["hidden", "scroll", "clip", "auto"];
    n;

  ) {
    var i = wc(n).getComputedStyle(n),
      a = i.overflowX,
      u = i.overflowY,
      c = i.overflow;
    [a, u, c].some(function (f) {
      return r.includes(f);
    }) && t.push(n),
      (n = n.parentElement);
  }
  return t;
}
function Js(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function us(e) {
  return Js(parseFloat(e), 0);
}
function Rx(e, t) {
  var n = ue({}, e);
  return (
    (t || []).forEach(function (r) {
      if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
        var i = wc(r).getComputedStyle(r),
          a = i.overflow,
          u = i.overflowClipMargin,
          c = i.borderTopWidth,
          f = i.borderBottomWidth,
          d = i.borderLeftWidth,
          h = i.borderRightWidth,
          v = r.getBoundingClientRect(),
          g = r.offsetHeight,
          b = r.clientHeight,
          E = r.offsetWidth,
          O = r.clientWidth,
          T = us(c),
          C = us(f),
          y = us(d),
          S = us(h),
          k = Js(Math.round((v.width / E) * 1e3) / 1e3),
          $ = Js(Math.round((v.height / g) * 1e3) / 1e3),
          L = (E - O - y - S) * k,
          A = (g - b - T - C) * $,
          U = T * $,
          G = C * $,
          D = y * k,
          J = S * k,
          le = 0,
          ne = 0;
        if (a === "clip") {
          var se = us(u);
          (le = se * k), (ne = se * $);
        }
        var q = v.x + D - le,
          j = v.y + U - ne,
          z = q + v.width + 2 * le - D - J - L,
          R = j + v.height + 2 * ne - U - G - A;
        (n.left = Math.max(n.left, q)),
          (n.top = Math.max(n.top, j)),
          (n.right = Math.min(n.right, z)),
          (n.bottom = Math.min(n.bottom, R));
      }
    }),
    n
  );
}
function Ix(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = "".concat(t),
    r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function $x(e, t) {
  var n = t || [],
    r = me(n, 2),
    i = r[0],
    a = r[1];
  return [Ix(e.width, i), Ix(e.height, a)];
}
function Mx() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Tl(e, t) {
  var n = t[0],
    r = t[1],
    i,
    a;
  return (
    n === "t"
      ? (a = e.y)
      : n === "b"
      ? (a = e.y + e.height)
      : (a = e.y + e.height / 2),
    r === "l"
      ? (i = e.x)
      : r === "r"
      ? (i = e.x + e.width)
      : (i = e.x + e.width / 2),
    { x: i, y: a }
  );
}
function ko(e, t) {
  var n = { t: "b", b: "t", l: "r", r: "l" };
  return e
    .map(function (r, i) {
      return i === t ? n[r] || "c" : r;
    })
    .join("");
}
function cD(e, t, n, r, i, a, u) {
  var c = x.useState({
      ready: !1,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: i[r] || {},
    }),
    f = me(c, 2),
    d = f[0],
    h = f[1],
    v = x.useRef(0),
    g = x.useMemo(
      function () {
        return t ? r0(t) : [];
      },
      [t]
    ),
    b = x.useRef({}),
    E = function () {
      b.current = {};
    };
  e || E();
  var O = di(function () {
      if (t && n && e) {
        let Rt = function (pa, dr) {
            var ai =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : Ce,
              Ri = W.x + pa,
              ha = W.y + dr,
              $u = Ri + Ke,
              Mu = ha + Fe,
              fl = Math.max(Ri, ai.left),
              Lu = Math.max(ha, ai.top),
              ae = Math.min($u, ai.right),
              we = Math.min(Mu, ai.bottom);
            return Math.max(0, (ae - fl) * (we - Lu));
          },
          da = function () {
            (ti = W.y + he), (ni = ti + Fe), (ri = W.x + ot), (uo = ri + Ke);
          };
        var Ai = Rt,
          Iu = da,
          y,
          S,
          k = t,
          $ = k.ownerDocument,
          L = wc(k),
          A = L.getComputedStyle(k),
          U = A.width,
          G = A.height,
          D = A.position,
          J = k.style.left,
          le = k.style.top,
          ne = k.style.right,
          se = k.style.bottom,
          q = k.style.overflow,
          j = ue(ue({}, i[r]), a),
          z = $.createElement("div");
        (y = k.parentElement) === null || y === void 0 || y.appendChild(z),
          (z.style.left = "".concat(k.offsetLeft, "px")),
          (z.style.top = "".concat(k.offsetTop, "px")),
          (z.style.position = D),
          (z.style.height = "".concat(k.offsetHeight, "px")),
          (z.style.width = "".concat(k.offsetWidth, "px")),
          (k.style.left = "0"),
          (k.style.top = "0"),
          (k.style.right = "auto"),
          (k.style.bottom = "auto"),
          (k.style.overflow = "hidden");
        var R;
        if (Array.isArray(n)) R = { x: n[0], y: n[1], width: 0, height: 0 };
        else {
          var B = n.getBoundingClientRect();
          R = { x: B.x, y: B.y, width: B.width, height: B.height };
        }
        var W = k.getBoundingClientRect(),
          H = $.documentElement,
          Q = H.clientWidth,
          de = H.clientHeight,
          Se = H.scrollWidth,
          xe = H.scrollHeight,
          Oe = H.scrollTop,
          ze = H.scrollLeft,
          Fe = W.height,
          Ke = W.width,
          ft = R.height,
          Ue = R.width,
          Lt = { left: 0, top: 0, right: Q, bottom: de },
          Kt = { left: -ze, top: -Oe, right: Se - ze, bottom: xe - Oe },
          Ie = j.htmlRegion,
          Ze = "visible",
          Yt = "visibleFirst";
        Ie !== "scroll" && Ie !== Yt && (Ie = Ze);
        var De = Ie === Yt,
          bt = Rx(Kt, g),
          ve = Rx(Lt, g),
          Ce = Ie === Ze ? ve : bt,
          pe = De ? ve : Ce;
        (k.style.left = "auto"),
          (k.style.top = "auto"),
          (k.style.right = "0"),
          (k.style.bottom = "0");
        var Ae = k.getBoundingClientRect();
        (k.style.left = J),
          (k.style.top = le),
          (k.style.right = ne),
          (k.style.bottom = se),
          (k.style.overflow = q),
          (S = k.parentElement) === null || S === void 0 || S.removeChild(z);
        var Je = Js(Math.round((Ke / parseFloat(U)) * 1e3) / 1e3),
          Xt = Js(Math.round((Fe / parseFloat(G)) * 1e3) / 1e3);
        if (Je === 0 || Xt === 0 || (Ud(n) && !gO(n))) return;
        var ur = j.offset,
          Sn = j.targetOffset,
          $r = $x(W, ur),
          Fn = me($r, 2),
          tn = Fn[0],
          Qt = Fn[1],
          cn = $x(R, Sn),
          qr = me(cn, 2),
          Zr = qr[0],
          wi = qr[1];
        (R.x -= Zr), (R.y -= wi);
        var fn = j.points || [],
          wt = me(fn, 2),
          dn = wt[0],
          Si = wt[1],
          pn = Mx(Si),
          Ot = Mx(dn),
          xi = Tl(R, pn),
          nt = Tl(W, Ot),
          Bn = ue({}, j),
          ot = xi.x - nt.x + tn,
          he = xi.y - nt.y + Qt,
          Ve = Rt(ot, he),
          dt = Rt(ot, he, ve),
          Nt = Tl(R, ["t", "l"]),
          sr = Tl(W, ["t", "l"]),
          Jr = Tl(R, ["b", "r"]),
          Wn = Tl(W, ["b", "r"]),
          Dt = j.overflow || {},
          Ci = Dt.adjustX,
          lo = Dt.adjustY,
          ei = Dt.shiftX,
          nn = Dt.shiftY,
          nl = function (dr) {
            return typeof dr == "boolean" ? dr : dr >= 0;
          },
          ti,
          ni,
          ri,
          uo;
        da();
        var so = nl(lo),
          la = Ot[0] === pn[0];
        if (so && Ot[0] === "t" && (ni > pe.bottom || b.current.bt)) {
          var _i = he;
          la ? (_i -= Fe - ft) : (_i = Nt.y - Wn.y - Qt);
          var Ei = Rt(ot, _i),
            Pu = Rt(ot, _i, ve);
          Ei > Ve || (Ei === Ve && (!De || Pu >= dt))
            ? ((b.current.bt = !0),
              (he = _i),
              (Qt = -Qt),
              (Bn.points = [ko(Ot, 0), ko(pn, 0)]))
            : (b.current.bt = !1);
        }
        if (so && Ot[0] === "b" && (ti < pe.top || b.current.tb)) {
          var Ft = he;
          la ? (Ft += Fe - ft) : (Ft = Jr.y - sr.y - Qt);
          var rl = Rt(ot, Ft),
            co = Rt(ot, Ft, ve);
          rl > Ve || (rl === Ve && (!De || co >= dt))
            ? ((b.current.tb = !0),
              (he = Ft),
              (Qt = -Qt),
              (Bn.points = [ko(Ot, 0), ko(pn, 0)]))
            : (b.current.tb = !1);
        }
        var il = nl(Ci),
          Oi = Ot[1] === pn[1];
        if (il && Ot[1] === "l" && (uo > pe.right || b.current.rl)) {
          var ki = ot;
          Oi ? (ki -= Ke - Ue) : (ki = Nt.x - Wn.x - tn);
          var ol = Rt(ki, he),
            Tu = Rt(ki, he, ve);
          ol > Ve || (ol === Ve && (!De || Tu >= dt))
            ? ((b.current.rl = !0),
              (ot = ki),
              (tn = -tn),
              (Bn.points = [ko(Ot, 1), ko(pn, 1)]))
            : (b.current.rl = !1);
        }
        if (il && Ot[1] === "r" && (ri < pe.left || b.current.lr)) {
          var ii = ot;
          Oi ? (ii += Ke - Ue) : (ii = Jr.x - sr.x - tn);
          var ua = Rt(ii, he),
            Pi = Rt(ii, he, ve);
          ua > Ve || (ua === Ve && (!De || Pi >= dt))
            ? ((b.current.lr = !0),
              (ot = ii),
              (tn = -tn),
              (Bn.points = [ko(Ot, 1), ko(pn, 1)]))
            : (b.current.lr = !1);
        }
        da();
        var Mr = ei === !0 ? 0 : ei;
        typeof Mr == "number" &&
          (ri < ve.left &&
            ((ot -= ri - ve.left - tn),
            R.x + Ue < ve.left + Mr && (ot += R.x - ve.left + Ue - Mr)),
          uo > ve.right &&
            ((ot -= uo - ve.right - tn),
            R.x > ve.right - Mr && (ot += R.x - ve.right + Mr)));
        var Ti = nn === !0 ? 0 : nn;
        typeof Ti == "number" &&
          (ti < ve.top &&
            ((he -= ti - ve.top - Qt),
            R.y + ft < ve.top + Ti && (he += R.y - ve.top + ft - Ti)),
          ni > ve.bottom &&
            ((he -= ni - ve.bottom - Qt),
            R.y > ve.bottom - Ti && (he += R.y - ve.bottom + Ti)));
        var fo = W.x + ot,
          po = fo + Ke,
          cr = W.y + he,
          sa = cr + Fe,
          oi = R.x,
          fr = oi + Ue,
          al = R.y,
          ll = al + ft,
          ho = Math.max(fo, oi),
          ca = Math.min(po, fr),
          Au = (ho + ca) / 2,
          ul = Au - fo,
          sl = Math.max(cr, al),
          vo = Math.min(sa, ll),
          Ru = (sl + vo) / 2,
          cl = Ru - cr;
        u == null || u(t, Bn);
        var mo = Ae.right - W.x - (ot + W.width),
          fa = Ae.bottom - W.y - (he + W.height);
        h({
          ready: !0,
          offsetX: ot / Je,
          offsetY: he / Xt,
          offsetR: mo / Je,
          offsetB: fa / Xt,
          arrowX: ul / Je,
          arrowY: cl / Xt,
          scaleX: Je,
          scaleY: Xt,
          align: Bn,
        });
      }
    }),
    T = function () {
      v.current += 1;
      var S = v.current;
      Promise.resolve().then(function () {
        v.current === S && O();
      });
    },
    C = function () {
      h(function (S) {
        return ue(ue({}, S), {}, { ready: !1 });
      });
    };
  return (
    On(C, [r]),
    On(
      function () {
        e || C();
      },
      [e]
    ),
    [
      d.ready,
      d.offsetX,
      d.offsetY,
      d.offsetR,
      d.offsetB,
      d.arrowX,
      d.arrowY,
      d.scaleX,
      d.scaleY,
      d.align,
      T,
    ]
  );
}
function fD(e, t, n, r, i) {
  On(
    function () {
      if (e && t && n) {
        let g = function () {
          r(), i();
        };
        var v = g,
          a = t,
          u = n,
          c = r0(a),
          f = r0(u),
          d = wc(u),
          h = new Set([d].concat(Pr(c), Pr(f)));
        return (
          h.forEach(function (b) {
            b.addEventListener("scroll", g, { passive: !0 });
          }),
          d.addEventListener("resize", g, { passive: !0 }),
          r(),
          function () {
            h.forEach(function (b) {
              b.removeEventListener("scroll", g),
                d.removeEventListener("resize", g);
            });
          }
        );
      }
    },
    [e, t, n]
  );
}
function dD(e, t, n, r, i, a, u, c) {
  var f = x.useRef(e),
    d = x.useRef(!1);
  f.current !== e && ((d.current = !0), (f.current = e)),
    x.useEffect(
      function () {
        var h = Ji(function () {
          d.current = !1;
        });
        return function () {
          Ji.cancel(h);
        };
      },
      [e]
    ),
    x.useEffect(
      function () {
        if (t && r && (!i || a)) {
          var h = function () {
              var L = !1,
                A = function (D) {
                  var J = D.target;
                  L = u(J);
                },
                U = function (D) {
                  var J = D.target;
                  !d.current && f.current && !L && !u(J) && c(!1);
                };
              return [A, U];
            },
            v = h(),
            g = me(v, 2),
            b = g[0],
            E = g[1],
            O = h(),
            T = me(O, 2),
            C = T[0],
            y = T[1],
            S = wc(r);
          S.addEventListener("mousedown", b, !0),
            S.addEventListener("click", E, !0),
            S.addEventListener("contextmenu", E, !0);
          var k = Hd(n);
          return (
            k &&
              (k.addEventListener("mousedown", C, !0),
              k.addEventListener("click", y, !0),
              k.addEventListener("contextmenu", y, !0)),
            function () {
              S.removeEventListener("mousedown", b, !0),
                S.removeEventListener("click", E, !0),
                S.removeEventListener("contextmenu", E, !0),
                k &&
                  (k.removeEventListener("mousedown", C, !0),
                  k.removeEventListener("click", y, !0),
                  k.removeEventListener("contextmenu", y, !0));
            }
          );
        }
      },
      [t, n, r, i, a]
    );
}
var pD = [
  "prefixCls",
  "children",
  "action",
  "showAction",
  "hideAction",
  "popupVisible",
  "defaultPopupVisible",
  "onPopupVisibleChange",
  "afterPopupVisibleChange",
  "mouseEnterDelay",
  "mouseLeaveDelay",
  "focusDelay",
  "blurDelay",
  "mask",
  "maskClosable",
  "getPopupContainer",
  "forceRender",
  "autoDestroy",
  "destroyPopupOnHide",
  "popup",
  "popupClassName",
  "popupStyle",
  "popupPlacement",
  "builtinPlacements",
  "popupAlign",
  "zIndex",
  "stretch",
  "getPopupClassNameFromAlign",
  "fresh",
  "alignPoint",
  "onPopupClick",
  "onPopupAlign",
  "arrow",
  "popupMotion",
  "maskMotion",
  "popupTransitionName",
  "popupAnimation",
  "maskTransitionName",
  "maskAnimation",
  "className",
  "getTriggerDOMNode",
];
function hD() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : kO,
    t = x.forwardRef(function (n, r) {
      var i = n.prefixCls,
        a = i === void 0 ? "rc-trigger-popup" : i,
        u = n.children,
        c = n.action,
        f = c === void 0 ? "hover" : c,
        d = n.showAction,
        h = n.hideAction,
        v = n.popupVisible,
        g = n.defaultPopupVisible,
        b = n.onPopupVisibleChange,
        E = n.afterPopupVisibleChange,
        O = n.mouseEnterDelay,
        T = n.mouseLeaveDelay,
        C = T === void 0 ? 0.1 : T,
        y = n.focusDelay,
        S = n.blurDelay,
        k = n.mask,
        $ = n.maskClosable,
        L = $ === void 0 ? !0 : $,
        A = n.getPopupContainer,
        U = n.forceRender,
        G = n.autoDestroy,
        D = n.destroyPopupOnHide,
        J = n.popup,
        le = n.popupClassName,
        ne = n.popupStyle,
        se = n.popupPlacement,
        q = n.builtinPlacements,
        j = q === void 0 ? {} : q,
        z = n.popupAlign,
        R = n.zIndex,
        B = n.stretch,
        W = n.getPopupClassNameFromAlign,
        H = n.fresh,
        Q = n.alignPoint,
        de = n.onPopupClick,
        Se = n.onPopupAlign,
        xe = n.arrow,
        Oe = n.popupMotion,
        ze = n.maskMotion,
        Fe = n.popupTransitionName,
        Ke = n.popupAnimation,
        ft = n.maskTransitionName,
        Ue = n.maskAnimation,
        Lt = n.className,
        Kt = n.getTriggerDOMNode,
        Ie = Ga(n, pD),
        Ze = G || D || !1,
        Yt = x.useState(!1),
        De = me(Yt, 2),
        bt = De[0],
        ve = De[1];
      On(function () {
        ve(tD());
      }, []);
      var Ce = x.useRef({}),
        pe = x.useContext(Px),
        Ae = x.useMemo(
          function () {
            return {
              registerSubPopup: function (we, pt) {
                (Ce.current[we] = pt),
                  pe == null || pe.registerSubPopup(we, pt);
              },
            };
          },
          [pe]
        ),
        Je = Lj(),
        Xt = x.useState(null),
        ur = me(Xt, 2),
        Sn = ur[0],
        $r = ur[1],
        Fn = di(function (ae) {
          Ud(ae) && Sn !== ae && $r(ae),
            pe == null || pe.registerSubPopup(Je, ae);
        }),
        tn = x.useState(null),
        Qt = me(tn, 2),
        cn = Qt[0],
        qr = Qt[1],
        Zr = x.useRef(null),
        wi = di(function (ae) {
          Ud(ae) && cn !== ae && (qr(ae), (Zr.current = ae));
        }),
        fn = x.Children.only(u),
        wt = (fn == null ? void 0 : fn.props) || {},
        dn = {},
        Si = di(function (ae) {
          var we,
            pt,
            St = cn;
          return (
            (St == null ? void 0 : St.contains(ae)) ||
            ((we = Hd(St)) === null || we === void 0 ? void 0 : we.host) ===
              ae ||
            ae === St ||
            (Sn == null ? void 0 : Sn.contains(ae)) ||
            ((pt = Hd(Sn)) === null || pt === void 0 ? void 0 : pt.host) ===
              ae ||
            ae === Sn ||
            Object.values(Ce.current).some(function (ht) {
              return (ht == null ? void 0 : ht.contains(ae)) || ae === ht;
            })
          );
        }),
        pn = Ax(a, Oe, Ke, Fe),
        Ot = Ax(a, ze, Ue, ft),
        xi = x.useState(g || !1),
        nt = me(xi, 2),
        Bn = nt[0],
        ot = nt[1],
        he = v ?? Bn,
        Ve = di(function (ae) {
          v === void 0 && ot(ae);
        });
      On(
        function () {
          ot(v || !1);
        },
        [v]
      );
      var dt = x.useRef(he);
      dt.current = he;
      var Nt = x.useRef([]);
      Nt.current = [];
      var sr = di(function (ae) {
          var we;
          Ve(ae),
            ((we = Nt.current[Nt.current.length - 1]) !== null && we !== void 0
              ? we
              : he) !== ae && (Nt.current.push(ae), b == null || b(ae));
        }),
        Jr = x.useRef(),
        Wn = function () {
          clearTimeout(Jr.current);
        },
        Dt = function (we) {
          var pt =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          Wn(),
            pt === 0
              ? sr(we)
              : (Jr.current = setTimeout(function () {
                  sr(we);
                }, pt * 1e3));
        };
      x.useEffect(function () {
        return Wn;
      }, []);
      var Ci = x.useState(!1),
        lo = me(Ci, 2),
        ei = lo[0],
        nn = lo[1];
      On(
        function (ae) {
          (!ae || he) && nn(!0);
        },
        [he]
      );
      var nl = x.useState(null),
        ti = me(nl, 2),
        ni = ti[0],
        ri = ti[1],
        uo = x.useState([0, 0]),
        so = me(uo, 2),
        la = so[0],
        _i = so[1],
        Ei = function (we) {
          _i([we.clientX, we.clientY]);
        },
        Pu = cD(he, Sn, Q ? la : cn, se, j, z, Se),
        Ft = me(Pu, 11),
        rl = Ft[0],
        co = Ft[1],
        il = Ft[2],
        Oi = Ft[3],
        ki = Ft[4],
        ol = Ft[5],
        Tu = Ft[6],
        ii = Ft[7],
        ua = Ft[8],
        Pi = Ft[9],
        Mr = Ft[10],
        Ti = lD(bt, f, d, h),
        fo = me(Ti, 2),
        po = fo[0],
        cr = fo[1],
        sa = po.has("click"),
        oi = cr.has("click") || cr.has("contextMenu"),
        fr = di(function () {
          ei || Mr();
        }),
        al = function () {
          dt.current && Q && oi && Dt(!1);
        };
      fD(he, cn, Sn, fr, al),
        On(
          function () {
            fr();
          },
          [la, se]
        ),
        On(
          function () {
            he && !(j != null && j[se]) && fr();
          },
          [JSON.stringify(z)]
        );
      var ll = x.useMemo(
        function () {
          var ae = sD(j, a, Pi, Q);
          return At(ae, W == null ? void 0 : W(Pi));
        },
        [Pi, W, j, a, Q]
      );
      x.useImperativeHandle(r, function () {
        return { nativeElement: Zr.current, forceAlign: fr };
      });
      var ho = x.useState(0),
        ca = me(ho, 2),
        Au = ca[0],
        ul = ca[1],
        sl = x.useState(0),
        vo = me(sl, 2),
        Ru = vo[0],
        cl = vo[1],
        mo = function () {
          if (B && cn) {
            var we = cn.getBoundingClientRect();
            ul(we.width), cl(we.height);
          }
        },
        fa = function () {
          mo(), fr();
        },
        Ai = function (we) {
          nn(!1), Mr(), E == null || E(we);
        },
        Iu = function () {
          return new Promise(function (we) {
            mo(),
              ri(function () {
                return we;
              });
          });
        };
      On(
        function () {
          ni && (Mr(), ni(), ri(null));
        },
        [ni]
      );
      function Rt(ae, we, pt, St) {
        dn[ae] = function (ht) {
          var dl;
          St == null || St(ht), Dt(we, pt);
          for (
            var Nu = arguments.length,
              Ec = new Array(Nu > 1 ? Nu - 1 : 0),
              pl = 1;
            pl < Nu;
            pl++
          )
            Ec[pl - 1] = arguments[pl];
          (dl = wt[ae]) === null ||
            dl === void 0 ||
            dl.call.apply(dl, [wt, ht].concat(Ec));
        };
      }
      (sa || oi) &&
        (dn.onClick = function (ae) {
          var we;
          dt.current && oi ? Dt(!1) : !dt.current && sa && (Ei(ae), Dt(!0));
          for (
            var pt = arguments.length,
              St = new Array(pt > 1 ? pt - 1 : 0),
              ht = 1;
            ht < pt;
            ht++
          )
            St[ht - 1] = arguments[ht];
          (we = wt.onClick) === null ||
            we === void 0 ||
            we.call.apply(we, [wt, ae].concat(St));
        }),
        dD(he, oi, cn, Sn, k, L, Si, Dt);
      var da = po.has("hover"),
        pa = cr.has("hover"),
        dr,
        ai;
      da &&
        (Rt("onMouseEnter", !0, O, function (ae) {
          Ei(ae);
        }),
        Rt("onPointerEnter", !0, O, function (ae) {
          Ei(ae);
        }),
        (dr = function () {
          (he || ei) && Dt(!0, O);
        }),
        Q &&
          (dn.onMouseMove = function (ae) {
            var we;
            (we = wt.onMouseMove) === null || we === void 0 || we.call(wt, ae);
          })),
        pa &&
          (Rt("onMouseLeave", !1, C),
          Rt("onPointerLeave", !1, C),
          (ai = function () {
            Dt(!1, C);
          })),
        po.has("focus") && Rt("onFocus", !0, y),
        cr.has("focus") && Rt("onBlur", !1, S),
        po.has("contextMenu") &&
          (dn.onContextMenu = function (ae) {
            var we;
            dt.current && cr.has("contextMenu") ? Dt(!1) : (Ei(ae), Dt(!0)),
              ae.preventDefault();
            for (
              var pt = arguments.length,
                St = new Array(pt > 1 ? pt - 1 : 0),
                ht = 1;
              ht < pt;
              ht++
            )
              St[ht - 1] = arguments[ht];
            (we = wt.onContextMenu) === null ||
              we === void 0 ||
              we.call.apply(we, [wt, ae].concat(St));
          }),
        Lt && (dn.className = At(wt.className, Lt));
      var Ri = ue(ue({}, wt), dn),
        ha = {},
        $u = [
          "onContextMenu",
          "onClick",
          "onMouseDown",
          "onTouchStart",
          "onMouseEnter",
          "onMouseLeave",
          "onFocus",
          "onBlur",
        ];
      $u.forEach(function (ae) {
        Ie[ae] &&
          (ha[ae] = function () {
            for (
              var we, pt = arguments.length, St = new Array(pt), ht = 0;
              ht < pt;
              ht++
            )
              St[ht] = arguments[ht];
            (we = Ri[ae]) === null ||
              we === void 0 ||
              we.call.apply(we, [Ri].concat(St)),
              Ie[ae].apply(Ie, St);
          });
      });
      var Mu = x.cloneElement(fn, ue(ue({}, Ri), ha)),
        fl = { x: ol, y: Tu },
        Lu = xe ? ue({}, xe !== !0 ? xe : {}) : null;
      return x.createElement(
        x.Fragment,
        null,
        x.createElement(
          $y,
          { disabled: !he, ref: wi, onResize: fa },
          x.createElement(aD, { getTriggerDOMNode: Kt }, Mu)
        ),
        x.createElement(
          Px.Provider,
          { value: Ae },
          x.createElement(oD, {
            portal: e,
            ref: Fn,
            prefixCls: a,
            popup: J,
            className: At(le, ll),
            style: ne,
            target: cn,
            onMouseEnter: dr,
            onMouseLeave: ai,
            onPointerEnter: dr,
            zIndex: R,
            open: he,
            keepDom: ei,
            fresh: H,
            onClick: de,
            mask: k,
            motion: pn,
            maskMotion: Ot,
            onVisibleChanged: Ai,
            onPrepare: Iu,
            forceRender: U,
            autoDestroy: Ze,
            getPopupContainer: A,
            align: Pi,
            arrow: Lu,
            arrowPos: fl,
            ready: rl,
            offsetX: co,
            offsetY: il,
            offsetR: Oi,
            offsetB: ki,
            onAlign: fr,
            stretch: B,
            targetWidth: Au / ii,
            targetHeight: Ru / ua,
          })
        )
      );
    });
  return t;
}
const vD = hD(kO);
function AO(e) {
  var t = e.children,
    n = e.prefixCls,
    r = e.id,
    i = e.overlayInnerStyle,
    a = e.className,
    u = e.style;
  return x.createElement(
    "div",
    { className: At("".concat(n, "-content"), a), style: u },
    x.createElement(
      "div",
      { className: "".concat(n, "-inner"), id: r, role: "tooltip", style: i },
      typeof t == "function" ? t() : t
    )
  );
}
var Al = { shiftX: 64, adjustY: 1 },
  Rl = { adjustX: 1, shiftY: !0 },
  Sr = [0, 0],
  mD = {
    left: {
      points: ["cr", "cl"],
      overflow: Rl,
      offset: [-4, 0],
      targetOffset: Sr,
    },
    right: {
      points: ["cl", "cr"],
      overflow: Rl,
      offset: [4, 0],
      targetOffset: Sr,
    },
    top: {
      points: ["bc", "tc"],
      overflow: Al,
      offset: [0, -4],
      targetOffset: Sr,
    },
    bottom: {
      points: ["tc", "bc"],
      overflow: Al,
      offset: [0, 4],
      targetOffset: Sr,
    },
    topLeft: {
      points: ["bl", "tl"],
      overflow: Al,
      offset: [0, -4],
      targetOffset: Sr,
    },
    leftTop: {
      points: ["tr", "tl"],
      overflow: Rl,
      offset: [-4, 0],
      targetOffset: Sr,
    },
    topRight: {
      points: ["br", "tr"],
      overflow: Al,
      offset: [0, -4],
      targetOffset: Sr,
    },
    rightTop: {
      points: ["tl", "tr"],
      overflow: Rl,
      offset: [4, 0],
      targetOffset: Sr,
    },
    bottomRight: {
      points: ["tr", "br"],
      overflow: Al,
      offset: [0, 4],
      targetOffset: Sr,
    },
    rightBottom: {
      points: ["bl", "br"],
      overflow: Rl,
      offset: [4, 0],
      targetOffset: Sr,
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: Al,
      offset: [0, 4],
      targetOffset: Sr,
    },
    leftBottom: {
      points: ["br", "bl"],
      overflow: Rl,
      offset: [-4, 0],
      targetOffset: Sr,
    },
  },
  gD = [
    "overlayClassName",
    "trigger",
    "mouseEnterDelay",
    "mouseLeaveDelay",
    "overlayStyle",
    "prefixCls",
    "children",
    "onVisibleChange",
    "afterVisibleChange",
    "transitionName",
    "animation",
    "motion",
    "placement",
    "align",
    "destroyTooltipOnHide",
    "defaultVisible",
    "getTooltipContainer",
    "overlayInnerStyle",
    "arrowContent",
    "overlay",
    "id",
    "showArrow",
  ],
  yD = function (t, n) {
    var r = t.overlayClassName,
      i = t.trigger,
      a = i === void 0 ? ["hover"] : i,
      u = t.mouseEnterDelay,
      c = u === void 0 ? 0 : u,
      f = t.mouseLeaveDelay,
      d = f === void 0 ? 0.1 : f,
      h = t.overlayStyle,
      v = t.prefixCls,
      g = v === void 0 ? "rc-tooltip" : v,
      b = t.children,
      E = t.onVisibleChange,
      O = t.afterVisibleChange,
      T = t.transitionName,
      C = t.animation,
      y = t.motion,
      S = t.placement,
      k = S === void 0 ? "right" : S,
      $ = t.align,
      L = $ === void 0 ? {} : $,
      A = t.destroyTooltipOnHide,
      U = A === void 0 ? !1 : A,
      G = t.defaultVisible,
      D = t.getTooltipContainer,
      J = t.overlayInnerStyle;
    t.arrowContent;
    var le = t.overlay,
      ne = t.id,
      se = t.showArrow,
      q = se === void 0 ? !0 : se,
      j = Ga(t, gD),
      z = x.useRef(null);
    x.useImperativeHandle(n, function () {
      return z.current;
    });
    var R = ue({}, j);
    "visible" in t && (R.popupVisible = t.visible);
    var B = function () {
      return x.createElement(
        AO,
        { key: "content", prefixCls: g, id: ne, overlayInnerStyle: J },
        le
      );
    };
    return x.createElement(
      vD,
      Vt(
        {
          popupClassName: r,
          prefixCls: g,
          popup: B,
          action: a,
          builtinPlacements: mD,
          popupPlacement: k,
          ref: z,
          popupAlign: L,
          getPopupContainer: D,
          onPopupVisibleChange: E,
          afterPopupVisibleChange: O,
          popupTransitionName: T,
          popupAnimation: C,
          popupMotion: y,
          defaultPopupVisible: G,
          autoDestroy: U,
          mouseLeaveDelay: d,
          popupStyle: h,
          mouseEnterDelay: c,
          arrow: q,
        },
        R
      ),
      b
    );
  };
const bD = x.forwardRef(yD),
  RO = 8;
function IO(e) {
  const t = RO,
    { contentRadius: n, limitVerticalRadius: r } = e,
    i = n > 12 ? n + 2 : 12;
  return { dropdownArrowOffset: i, dropdownArrowOffsetVertical: r ? t : i };
}
function Df(e, t) {
  return e ? t : {};
}
function wD(e, t) {
  const {
      componentCls: n,
      sizePopupArrow: r,
      borderRadiusXS: i,
      borderRadiusOuter: a,
      boxShadowPopoverArrow: u,
    } = e,
    {
      colorBg: c,
      contentRadius: f = e.borderRadiusLG,
      limitVerticalRadius: d,
      arrowDistance: h = 0,
      arrowPlacement: v = { left: !0, right: !0, top: !0, bottom: !0 },
    } = t,
    { dropdownArrowOffsetVertical: g, dropdownArrowOffset: b } = IO({
      contentRadius: f,
      limitVerticalRadius: d,
    });
  return {
    [n]: Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {
              [`${n}-arrow`]: [
                Object.assign(
                  Object.assign(
                    { position: "absolute", zIndex: 1, display: "block" },
                    IN(r, i, a, c, u)
                  ),
                  { "&:before": { background: c } }
                ),
              ],
            },
            Df(!!v.top, {
              [[
                `&-placement-top ${n}-arrow`,
                `&-placement-topLeft ${n}-arrow`,
                `&-placement-topRight ${n}-arrow`,
              ].join(",")]: {
                bottom: h,
                transform: "translateY(100%) rotate(180deg)",
              },
              [`&-placement-top ${n}-arrow`]: {
                left: { _skip_check_: !0, value: "50%" },
                transform: "translateX(-50%) translateY(100%) rotate(180deg)",
              },
              [`&-placement-topLeft ${n}-arrow`]: {
                left: { _skip_check_: !0, value: b },
              },
              [`&-placement-topRight ${n}-arrow`]: {
                right: { _skip_check_: !0, value: b },
              },
            })
          ),
          Df(!!v.bottom, {
            [[
              `&-placement-bottom ${n}-arrow`,
              `&-placement-bottomLeft ${n}-arrow`,
              `&-placement-bottomRight ${n}-arrow`,
            ].join(",")]: { top: h, transform: "translateY(-100%)" },
            [`&-placement-bottom ${n}-arrow`]: {
              left: { _skip_check_: !0, value: "50%" },
              transform: "translateX(-50%) translateY(-100%)",
            },
            [`&-placement-bottomLeft ${n}-arrow`]: {
              left: { _skip_check_: !0, value: b },
            },
            [`&-placement-bottomRight ${n}-arrow`]: {
              right: { _skip_check_: !0, value: b },
            },
          })
        ),
        Df(!!v.left, {
          [[
            `&-placement-left ${n}-arrow`,
            `&-placement-leftTop ${n}-arrow`,
            `&-placement-leftBottom ${n}-arrow`,
          ].join(",")]: {
            right: { _skip_check_: !0, value: h },
            transform: "translateX(100%) rotate(90deg)",
          },
          [`&-placement-left ${n}-arrow`]: {
            top: { _skip_check_: !0, value: "50%" },
            transform: "translateY(-50%) translateX(100%) rotate(90deg)",
          },
          [`&-placement-leftTop ${n}-arrow`]: { top: g },
          [`&-placement-leftBottom ${n}-arrow`]: { bottom: g },
        })
      ),
      Df(!!v.right, {
        [[
          `&-placement-right ${n}-arrow`,
          `&-placement-rightTop ${n}-arrow`,
          `&-placement-rightBottom ${n}-arrow`,
        ].join(",")]: {
          left: { _skip_check_: !0, value: h },
          transform: "translateX(-100%) rotate(-90deg)",
        },
        [`&-placement-right ${n}-arrow`]: {
          top: { _skip_check_: !0, value: "50%" },
          transform: "translateY(-50%) translateX(-100%) rotate(-90deg)",
        },
        [`&-placement-rightTop ${n}-arrow`]: { top: g },
        [`&-placement-rightBottom ${n}-arrow`]: { bottom: g },
      })
    ),
  };
}
function SD(e, t, n, r) {
  if (r === !1) return { adjustX: !1, adjustY: !1 };
  const i = r && typeof r == "object" ? r : {},
    a = {};
  switch (e) {
    case "top":
    case "bottom":
      (a.shiftX = t.dropdownArrowOffset * 2 + n),
        (a.shiftY = !0),
        (a.adjustY = !0);
      break;
    case "left":
    case "right":
      (a.shiftY = t.dropdownArrowOffsetVertical * 2 + n),
        (a.shiftX = !0),
        (a.adjustX = !0);
      break;
  }
  const u = Object.assign(Object.assign({}, a), i);
  return u.shiftX || (u.adjustX = !0), u.shiftY || (u.adjustY = !0), u;
}
const Lx = {
    left: { points: ["cr", "cl"] },
    right: { points: ["cl", "cr"] },
    top: { points: ["bc", "tc"] },
    bottom: { points: ["tc", "bc"] },
    topLeft: { points: ["bl", "tl"] },
    leftTop: { points: ["tr", "tl"] },
    topRight: { points: ["br", "tr"] },
    rightTop: { points: ["tl", "tr"] },
    bottomRight: { points: ["tr", "br"] },
    rightBottom: { points: ["bl", "br"] },
    bottomLeft: { points: ["tl", "bl"] },
    leftBottom: { points: ["br", "bl"] },
  },
  xD = {
    topLeft: { points: ["bl", "tc"] },
    leftTop: { points: ["tr", "cl"] },
    topRight: { points: ["br", "tc"] },
    rightTop: { points: ["tl", "cr"] },
    bottomRight: { points: ["tr", "bc"] },
    rightBottom: { points: ["bl", "cr"] },
    bottomLeft: { points: ["tl", "bc"] },
    leftBottom: { points: ["br", "cl"] },
  },
  CD = new Set([
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight",
    "leftTop",
    "leftBottom",
    "rightTop",
    "rightBottom",
  ]);
function _D(e) {
  const {
      arrowWidth: t,
      autoAdjustOverflow: n,
      arrowPointAtCenter: r,
      offset: i,
      borderRadius: a,
      visibleFirst: u,
    } = e,
    c = t / 2,
    f = {};
  return (
    Object.keys(Lx).forEach((d) => {
      const h = (r && xD[d]) || Lx[d],
        v = Object.assign(Object.assign({}, h), {
          offset: [0, 0],
          dynamicInset: !0,
        });
      switch (((f[d] = v), CD.has(d) && (v.autoArrow = !1), d)) {
        case "top":
        case "topLeft":
        case "topRight":
          v.offset[1] = -c - i;
          break;
        case "bottom":
        case "bottomLeft":
        case "bottomRight":
          v.offset[1] = c + i;
          break;
        case "left":
        case "leftTop":
        case "leftBottom":
          v.offset[0] = -c - i;
          break;
        case "right":
        case "rightTop":
        case "rightBottom":
          v.offset[0] = c + i;
          break;
      }
      const g = IO({ contentRadius: a, limitVerticalRadius: !0 });
      if (r)
        switch (d) {
          case "topLeft":
          case "bottomLeft":
            v.offset[0] = -g.dropdownArrowOffset - c;
            break;
          case "topRight":
          case "bottomRight":
            v.offset[0] = g.dropdownArrowOffset + c;
            break;
          case "leftTop":
          case "rightTop":
            v.offset[1] = -g.dropdownArrowOffset - c;
            break;
          case "leftBottom":
          case "rightBottom":
            v.offset[1] = g.dropdownArrowOffset + c;
            break;
        }
      (v.overflow = SD(d, g, t, n)), u && (v.htmlRegion = "visibleFirst");
    }),
    f
  );
}
const ED = (e) => {
    const {
      componentCls: t,
      tooltipMaxWidth: n,
      tooltipColor: r,
      tooltipBg: i,
      tooltipBorderRadius: a,
      zIndexPopup: u,
      controlHeight: c,
      boxShadowSecondary: f,
      paddingSM: d,
      paddingXS: h,
      tooltipRadiusOuter: v,
    } = e;
    return [
      {
        [t]: Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, $N(e)), {
              position: "absolute",
              zIndex: u,
              display: "block",
              width: "max-content",
              maxWidth: n,
              visibility: "visible",
              transformOrigin: "var(--arrow-x, 50%) var(--arrow-y, 50%)",
              "&-hidden": { display: "none" },
              "--antd-arrow-background-color": i,
              [`${t}-inner`]: {
                minWidth: c,
                minHeight: c,
                padding: `${d / 2}px ${h}px`,
                color: r,
                textAlign: "start",
                textDecoration: "none",
                wordWrap: "break-word",
                backgroundColor: i,
                borderRadius: a,
                boxShadow: f,
                boxSizing: "border-box",
              },
              [[
                "&-placement-left",
                "&-placement-leftTop",
                "&-placement-leftBottom",
                "&-placement-right",
                "&-placement-rightTop",
                "&-placement-rightBottom",
              ].join(",")]: {
                [`${t}-inner`]: { borderRadius: Math.min(a, RO) },
              },
              [`${t}-content`]: { position: "relative" },
            }),
            HN(e, (g, b) => {
              let { darkColor: E } = b;
              return {
                [`&${t}-${g}`]: {
                  [`${t}-inner`]: { backgroundColor: E },
                  [`${t}-arrow`]: { "--antd-arrow-background-color": E },
                },
              };
            })
          ),
          { "&-rtl": { direction: "rtl" } }
        ),
      },
      wD(Jo(e, { borderRadiusOuter: v }), {
        colorBg: "var(--antd-arrow-background-color)",
        contentRadius: a,
        limitVerticalRadius: !0,
      }),
      {
        [`${t}-pure`]: {
          position: "relative",
          maxWidth: "none",
          margin: e.sizePopupArrow,
        },
      },
    ];
  },
  $O = (e, t) =>
    ph(
      "Tooltip",
      (r) => {
        if (t === !1) return [];
        const {
            borderRadius: i,
            colorTextLightSolid: a,
            colorBgDefault: u,
            borderRadiusOuter: c,
          } = r,
          f = Jo(r, {
            tooltipMaxWidth: 250,
            tooltipColor: a,
            tooltipBorderRadius: i,
            tooltipBg: u,
            tooltipRadiusOuter: c > 4 ? 4 : c,
          });
        return [ED(f), qj(r, "zoom-big-fast")];
      },
      (r) => {
        let { zIndexPopupBase: i, colorBgSpotlight: a } = r;
        return { zIndexPopup: i + 70, colorBgDefault: a };
      },
      { resetStyle: !1 }
    )(e),
  OD = Xd.map((e) => `${e}-inverse`);
function kD(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0)
    ? [].concat(Pr(OD), Pr(Xd)).includes(e)
    : Xd.includes(e);
}
function MO(e, t) {
  const n = kD(t),
    r = At({ [`${e}-${t}`]: t && n }),
    i = {},
    a = {};
  return (
    t && !n && ((i.background = t), (a["--antd-arrow-background-color"] = t)),
    { className: r, overlayStyle: i, arrowStyle: a }
  );
}
const PD = (e) => {
    const {
        prefixCls: t,
        className: n,
        placement: r = "top",
        title: i,
        color: a,
        overlayInnerStyle: u,
      } = e,
      { getPrefixCls: c } = x.useContext(bi),
      f = c("tooltip", t),
      [d, h] = $O(f, !0),
      v = MO(f, a),
      g = v.arrowStyle,
      b = Object.assign(Object.assign({}, u), v.overlayStyle),
      E = At(h, f, `${f}-pure`, `${f}-placement-${r}`, n, v.className);
    return d(
      x.createElement(
        "div",
        { className: E, style: g },
        x.createElement("div", { className: `${f}-arrow` }),
        x.createElement(
          AO,
          Object.assign({}, e, {
            className: h,
            prefixCls: f,
            overlayInnerStyle: b,
          }),
          i
        )
      )
    );
  },
  TD = PD;
var AD =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
const LO = x.forwardRef((e, t) => {
  var n, r;
  const {
      prefixCls: i,
      openClassName: a,
      getTooltipContainer: u,
      overlayClassName: c,
      color: f,
      overlayInnerStyle: d,
      children: h,
      afterOpenChange: v,
      afterVisibleChange: g,
      destroyTooltipOnHide: b,
      arrow: E = !0,
      title: O,
      overlay: T,
      builtinPlacements: C,
      arrowPointAtCenter: y = !1,
      autoAdjustOverflow: S = !0,
    } = e,
    k = !!E,
    [, $] = tl(),
    { getPopupContainer: L, getPrefixCls: A, direction: U } = x.useContext(bi),
    G = Q8(),
    D = x.useRef(null),
    J = () => {
      var Ae;
      (Ae = D.current) === null || Ae === void 0 || Ae.forceAlign();
    };
  x.useImperativeHandle(t, () => ({
    forceAlign: J,
    forcePopupAlign: () => {
      G.deprecated(!1, "forcePopupAlign", "forceAlign"), J();
    },
  }));
  const [le, ne] = RN(!1, {
      value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
      defaultValue:
        (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible,
    }),
    se = !O && !T && O !== 0,
    q = (Ae) => {
      var Je, Xt;
      ne(se ? !1 : Ae),
        se ||
          ((Je = e.onOpenChange) === null || Je === void 0 || Je.call(e, Ae),
          (Xt = e.onVisibleChange) === null || Xt === void 0 || Xt.call(e, Ae));
    },
    j = x.useMemo(() => {
      var Ae, Je;
      let Xt = y;
      return (
        typeof E == "object" &&
          (Xt =
            (Je =
              (Ae = E.pointAtCenter) !== null && Ae !== void 0
                ? Ae
                : E.arrowPointAtCenter) !== null && Je !== void 0
              ? Je
              : y),
        C ||
          _D({
            arrowPointAtCenter: Xt,
            autoAdjustOverflow: S,
            arrowWidth: k ? $.sizePopupArrow : 0,
            borderRadius: $.borderRadius,
            offset: $.marginXXS,
            visibleFirst: !0,
          })
      );
    }, [y, E, C, $]),
    z = x.useMemo(() => (O === 0 ? O : T || O || ""), [T, O]),
    R = x.createElement(Vz, null, typeof z == "function" ? z() : z),
    {
      getPopupContainer: B,
      placement: W = "top",
      mouseEnterDelay: H = 0.1,
      mouseLeaveDelay: Q = 0.1,
      overlayStyle: de,
      rootClassName: Se,
    } = e,
    xe = AD(e, [
      "getPopupContainer",
      "placement",
      "mouseEnterDelay",
      "mouseLeaveDelay",
      "overlayStyle",
      "rootClassName",
    ]),
    Oe = A("tooltip", i),
    ze = A(),
    Fe = e["data-popover-inject"];
  let Ke = le;
  !("open" in e) && !("visible" in e) && se && (Ke = !1);
  const ft = By(h) && !vO(h) ? h : x.createElement("span", null, h),
    Ue = ft.props,
    Lt =
      !Ue.className || typeof Ue.className == "string"
        ? At(Ue.className, a || `${Oe}-open`)
        : Ue.className,
    [Kt, Ie] = $O(Oe, !Fe),
    Ze = MO(Oe, f),
    Yt = Ze.arrowStyle,
    De = Object.assign(Object.assign({}, d), Ze.overlayStyle),
    bt = At(c, { [`${Oe}-rtl`]: U === "rtl" }, Ze.className, Se, Ie),
    [ve, Ce] = eD("Tooltip", xe.zIndex),
    pe = x.createElement(
      bD,
      Object.assign({}, xe, {
        zIndex: Fe ? xe.zIndex : ve,
        showArrow: k,
        placement: W,
        mouseEnterDelay: H,
        mouseLeaveDelay: Q,
        prefixCls: Oe,
        overlayClassName: bt,
        overlayStyle: Object.assign(Object.assign({}, Yt), de),
        getTooltipContainer: B || u || L,
        ref: D,
        builtinPlacements: j,
        overlay: R,
        visible: Ke,
        onVisibleChange: q,
        afterVisibleChange: v ?? g,
        overlayInnerStyle: De,
        arrowContent: x.createElement("span", {
          className: `${Oe}-arrow-content`,
        }),
        motion: {
          motionName: Rz(ze, "zoom-big-fast", e.transitionName),
          motionDeadline: 1e3,
        },
        destroyTooltipOnHide: !!b,
      }),
      Ke ? Wy(ft, { className: Lt }) : ft
    );
  return Kt(x.createElement(PO.Provider, { value: Ce }, pe));
});
LO._InternalPanelDoNotUseOrYouWillBeFired = TD;
const $a = LO;
function RD(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Nx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function zx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nx(Object(n), !0).forEach(function (r) {
          RD(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Nx(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ID(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function $D(e, t) {
  if (e == null) return {};
  var n = ID(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function MD(e, t) {
  return LD(e) || ND(e, t) || zD(e, t) || jD();
}
function LD(e) {
  if (Array.isArray(e)) return e;
}
function ND(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var n = [],
      r = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var u = e[Symbol.iterator](), c;
        !(r = (c = u.next()).done) && (n.push(c.value), !(t && n.length === t));
        r = !0
      );
    } catch (f) {
      (i = !0), (a = f);
    } finally {
      try {
        !r && u.return != null && u.return();
      } finally {
        if (i) throw a;
      }
    }
    return n;
  }
}
function zD(e, t) {
  if (e) {
    if (typeof e == "string") return jx(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return jx(e, t);
  }
}
function jx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function jD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DD(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Dx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Fx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dx(Object(n), !0).forEach(function (r) {
          DD(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Dx(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function FD() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return t.reduceRight(function (i, a) {
      return a(i);
    }, r);
  };
}
function ps(e) {
  return function t() {
    for (
      var n = this, r = arguments.length, i = new Array(r), a = 0;
      a < r;
      a++
    )
      i[a] = arguments[a];
    return i.length >= e.length
      ? e.apply(this, i)
      : function () {
          for (var u = arguments.length, c = new Array(u), f = 0; f < u; f++)
            c[f] = arguments[f];
          return t.apply(n, [].concat(i, c));
        };
  };
}
function Zd(e) {
  return {}.toString.call(e).includes("Object");
}
function BD(e) {
  return !Object.keys(e).length;
}
function ec(e) {
  return typeof e == "function";
}
function WD(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function HD(e, t) {
  return (
    Zd(t) || Ko("changeType"),
    Object.keys(t).some(function (n) {
      return !WD(e, n);
    }) && Ko("changeField"),
    t
  );
}
function UD(e) {
  ec(e) || Ko("selectorType");
}
function VD(e) {
  ec(e) || Zd(e) || Ko("handlerType"),
    Zd(e) &&
      Object.values(e).some(function (t) {
        return !ec(t);
      }) &&
      Ko("handlersType");
}
function GD(e) {
  e || Ko("initialIsRequired"),
    Zd(e) || Ko("initialType"),
    BD(e) && Ko("initialContent");
}
function KD(e, t) {
  throw new Error(e[t] || e.default);
}
var YD = {
    initialIsRequired: "initial state is required",
    initialType: "initial state should be an object",
    initialContent: "initial state shouldn't be an empty object",
    handlerType: "handler should be an object or a function",
    handlersType: "all handlers should be a functions",
    selectorType: "selector should be a function",
    changeType: "provided value of changes should be an object",
    changeField:
      'it seams you want to change a field in the state which is not specified in the "initial" state',
    default: "an unknown error accured in `state-local` package",
  },
  Ko = ps(KD)(YD),
  Ff = { changes: HD, selector: UD, handler: VD, initial: GD };
function XD(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Ff.initial(e), Ff.handler(t);
  var n = { current: e },
    r = ps(ZD)(n, t),
    i = ps(qD)(n),
    a = ps(Ff.changes)(e),
    u = ps(QD)(n);
  function c() {
    var d =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : function (h) {
            return h;
          };
    return Ff.selector(d), d(n.current);
  }
  function f(d) {
    FD(r, i, a, u)(d);
  }
  return [c, f];
}
function QD(e, t) {
  return ec(t) ? t(e.current) : t;
}
function qD(e, t) {
  return (e.current = Fx(Fx({}, e.current), t)), t;
}
function ZD(e, t, n) {
  return (
    ec(t)
      ? t(e.current)
      : Object.keys(n).forEach(function (r) {
          var i;
          return (i = t[r]) === null || i === void 0
            ? void 0
            : i.call(t, e.current[r]);
        }),
    n
  );
}
var JD = { create: XD },
  e7 = {
    paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs" },
  };
function t7(e) {
  return function t() {
    for (
      var n = this, r = arguments.length, i = new Array(r), a = 0;
      a < r;
      a++
    )
      i[a] = arguments[a];
    return i.length >= e.length
      ? e.apply(this, i)
      : function () {
          for (var u = arguments.length, c = new Array(u), f = 0; f < u; f++)
            c[f] = arguments[f];
          return t.apply(n, [].concat(i, c));
        };
  };
}
function n7(e) {
  return {}.toString.call(e).includes("Object");
}
function r7(e) {
  return (
    e || Bx("configIsRequired"),
    n7(e) || Bx("configType"),
    e.urls ? (i7(), { paths: { vs: e.urls.monacoBase } }) : e
  );
}
function i7() {
  console.warn(NO.deprecation);
}
function o7(e, t) {
  throw new Error(e[t] || e.default);
}
var NO = {
    configIsRequired: "the configuration object is required",
    configType: "the configuration object should be an object",
    default: "an unknown error accured in `@monaco-editor/loader` package",
    deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `,
  },
  Bx = t7(o7)(NO),
  a7 = { config: r7 },
  l7 = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return function (i) {
      return n.reduceRight(function (a, u) {
        return u(a);
      }, i);
    };
  };
function zO(e, t) {
  return (
    Object.keys(t).forEach(function (n) {
      t[n] instanceof Object && e[n] && Object.assign(t[n], zO(e[n], t[n]));
    }),
    zx(zx({}, e), t)
  );
}
var u7 = { type: "cancelation", msg: "operation is manually canceled" };
function ym(e) {
  var t = !1,
    n = new Promise(function (r, i) {
      e.then(function (a) {
        return t ? i(u7) : r(a);
      }),
        e.catch(i);
    });
  return (
    (n.cancel = function () {
      return (t = !0);
    }),
    n
  );
}
var s7 = JD.create({
    config: e7,
    isInitialized: !1,
    resolve: null,
    reject: null,
    monaco: null,
  }),
  jO = MD(s7, 2),
  Sc = jO[0],
  vh = jO[1];
function c7(e) {
  var t = a7.config(e),
    n = t.monaco,
    r = $D(t, ["monaco"]);
  vh(function (i) {
    return { config: zO(i.config, r), monaco: n };
  });
}
function f7() {
  var e = Sc(function (t) {
    var n = t.monaco,
      r = t.isInitialized,
      i = t.resolve;
    return { monaco: n, isInitialized: r, resolve: i };
  });
  if (!e.isInitialized) {
    if ((vh({ isInitialized: !0 }), e.monaco))
      return e.resolve(e.monaco), ym(bm);
    if (window.monaco && window.monaco.editor)
      return DO(window.monaco), e.resolve(window.monaco), ym(bm);
    l7(d7, h7)(v7);
  }
  return ym(bm);
}
function d7(e) {
  return document.body.appendChild(e);
}
function p7(e) {
  var t = document.createElement("script");
  return e && (t.src = e), t;
}
function h7(e) {
  var t = Sc(function (r) {
      var i = r.config,
        a = r.reject;
      return { config: i, reject: a };
    }),
    n = p7("".concat(t.config.paths.vs, "/loader.js"));
  return (
    (n.onload = function () {
      return e();
    }),
    (n.onerror = t.reject),
    n
  );
}
function v7() {
  var e = Sc(function (n) {
      var r = n.config,
        i = n.resolve,
        a = n.reject;
      return { config: r, resolve: i, reject: a };
    }),
    t = window.require;
  t.config(e.config),
    t(
      ["vs/editor/editor.main"],
      function (n) {
        DO(n), e.resolve(n);
      },
      function (n) {
        e.reject(n);
      }
    );
}
function DO(e) {
  Sc().monaco || vh({ monaco: e });
}
function m7() {
  return Sc(function (e) {
    var t = e.monaco;
    return t;
  });
}
var bm = new Promise(function (e, t) {
    return vh({ resolve: e, reject: t });
  }),
  FO = { config: c7, init: f7, __getMonacoInstance: m7 },
  g7 = {
    wrapper: { display: "flex", position: "relative", textAlign: "initial" },
    fullWidth: { width: "100%" },
    hide: { display: "none" },
  },
  wm = g7,
  y7 = {
    container: {
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  b7 = y7;
function w7({ children: e }) {
  return Te.createElement("div", { style: b7.container }, e);
}
var S7 = w7,
  x7 = S7;
function C7({
  width: e,
  height: t,
  isEditorReady: n,
  loading: r,
  _ref: i,
  className: a,
  wrapperProps: u,
}) {
  return Te.createElement(
    "section",
    { style: { ...wm.wrapper, width: e, height: t }, ...u },
    !n && Te.createElement(x7, null, r),
    Te.createElement("div", {
      ref: i,
      style: { ...wm.fullWidth, ...(!n && wm.hide) },
      className: a,
    })
  );
}
var _7 = C7,
  BO = x.memo(_7);
function E7(e) {
  x.useEffect(e, []);
}
var WO = E7;
function O7(e, t, n = !0) {
  let r = x.useRef(!0);
  x.useEffect(
    r.current || !n
      ? () => {
          r.current = !1;
        }
      : e,
    t
  );
}
var Zn = O7;
function ks() {}
function Xl(e, t, n, r) {
  return k7(e, r) || P7(e, t, n, r);
}
function k7(e, t) {
  return e.editor.getModel(HO(e, t));
}
function P7(e, t, n, r) {
  return e.editor.createModel(t, n, r ? HO(e, r) : void 0);
}
function HO(e, t) {
  return e.Uri.parse(t);
}
function T7({
  original: e,
  modified: t,
  language: n,
  originalLanguage: r,
  modifiedLanguage: i,
  originalModelPath: a,
  modifiedModelPath: u,
  keepCurrentOriginalModel: c = !1,
  keepCurrentModifiedModel: f = !1,
  theme: d = "light",
  loading: h = "Loading...",
  options: v = {},
  height: g = "100%",
  width: b = "100%",
  className: E,
  wrapperProps: O = {},
  beforeMount: T = ks,
  onMount: C = ks,
}) {
  let [y, S] = x.useState(!1),
    [k, $] = x.useState(!0),
    L = x.useRef(null),
    A = x.useRef(null),
    U = x.useRef(null),
    G = x.useRef(C),
    D = x.useRef(T),
    J = x.useRef(!1);
  WO(() => {
    let q = FO.init();
    return (
      q
        .then((j) => (A.current = j) && $(!1))
        .catch(
          (j) =>
            (j == null ? void 0 : j.type) !== "cancelation" &&
            console.error("Monaco initialization: error:", j)
        ),
      () => (L.current ? se() : q.cancel())
    );
  }),
    Zn(
      () => {
        if (L.current && A.current) {
          let q = L.current.getOriginalEditor(),
            j = Xl(A.current, e || "", r || n || "text", a || "");
          j !== q.getModel() && q.setModel(j);
        }
      },
      [a],
      y
    ),
    Zn(
      () => {
        if (L.current && A.current) {
          let q = L.current.getModifiedEditor(),
            j = Xl(A.current, t || "", i || n || "text", u || "");
          j !== q.getModel() && q.setModel(j);
        }
      },
      [u],
      y
    ),
    Zn(
      () => {
        let q = L.current.getModifiedEditor();
        q.getOption(A.current.editor.EditorOption.readOnly)
          ? q.setValue(t || "")
          : t !== q.getValue() &&
            (q.executeEdits("", [
              {
                range: q.getModel().getFullModelRange(),
                text: t || "",
                forceMoveMarkers: !0,
              },
            ]),
            q.pushUndoStop());
      },
      [t],
      y
    ),
    Zn(
      () => {
        var q, j;
        (j = (q = L.current) == null ? void 0 : q.getModel()) == null ||
          j.original.setValue(e || "");
      },
      [e],
      y
    ),
    Zn(
      () => {
        let { original: q, modified: j } = L.current.getModel();
        A.current.editor.setModelLanguage(q, r || n || "text"),
          A.current.editor.setModelLanguage(j, i || n || "text");
      },
      [n, r, i],
      y
    ),
    Zn(
      () => {
        var q;
        (q = A.current) == null || q.editor.setTheme(d);
      },
      [d],
      y
    ),
    Zn(
      () => {
        var q;
        (q = L.current) == null || q.updateOptions(v);
      },
      [v],
      y
    );
  let le = x.useCallback(() => {
      var z;
      if (!A.current) return;
      D.current(A.current);
      let q = Xl(A.current, e || "", r || n || "text", a || ""),
        j = Xl(A.current, t || "", i || n || "text", u || "");
      (z = L.current) == null || z.setModel({ original: q, modified: j });
    }, [n, t, i, e, r, a, u]),
    ne = x.useCallback(() => {
      var q;
      !J.current &&
        U.current &&
        ((L.current = A.current.editor.createDiffEditor(U.current, {
          automaticLayout: !0,
          ...v,
        })),
        le(),
        (q = A.current) == null || q.editor.setTheme(d),
        S(!0),
        (J.current = !0));
    }, [v, d, le]);
  x.useEffect(() => {
    y && G.current(L.current, A.current);
  }, [y]),
    x.useEffect(() => {
      !k && !y && ne();
    }, [k, y, ne]);
  function se() {
    var j, z, R, B;
    let q = (j = L.current) == null ? void 0 : j.getModel();
    c || (z = q == null ? void 0 : q.original) == null || z.dispose(),
      f || (R = q == null ? void 0 : q.modified) == null || R.dispose(),
      (B = L.current) == null || B.dispose();
  }
  return Te.createElement(BO, {
    width: b,
    height: g,
    isEditorReady: y,
    loading: h,
    _ref: U,
    className: E,
    wrapperProps: O,
  });
}
var A7 = T7;
x.memo(A7);
function R7(e) {
  let t = x.useRef();
  return (
    x.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
var I7 = R7,
  Bf = new Map();
function $7({
  defaultValue: e,
  defaultLanguage: t,
  defaultPath: n,
  value: r,
  language: i,
  path: a,
  theme: u = "light",
  line: c,
  loading: f = "Loading...",
  options: d = {},
  overrideServices: h = {},
  saveViewState: v = !0,
  keepCurrentModel: g = !1,
  width: b = "100%",
  height: E = "100%",
  className: O,
  wrapperProps: T = {},
  beforeMount: C = ks,
  onMount: y = ks,
  onChange: S,
  onValidate: k = ks,
}) {
  let [$, L] = x.useState(!1),
    [A, U] = x.useState(!0),
    G = x.useRef(null),
    D = x.useRef(null),
    J = x.useRef(null),
    le = x.useRef(y),
    ne = x.useRef(C),
    se = x.useRef(),
    q = x.useRef(r),
    j = I7(a),
    z = x.useRef(!1),
    R = x.useRef(!1);
  WO(() => {
    let H = FO.init();
    return (
      H.then((Q) => (G.current = Q) && U(!1)).catch(
        (Q) =>
          (Q == null ? void 0 : Q.type) !== "cancelation" &&
          console.error("Monaco initialization: error:", Q)
      ),
      () => (D.current ? W() : H.cancel())
    );
  }),
    Zn(
      () => {
        var Q, de, Se, xe;
        let H = Xl(G.current, e || r || "", t || i || "", a || n || "");
        H !== ((Q = D.current) == null ? void 0 : Q.getModel()) &&
          (v &&
            Bf.set(j, (de = D.current) == null ? void 0 : de.saveViewState()),
          (Se = D.current) == null || Se.setModel(H),
          v && ((xe = D.current) == null || xe.restoreViewState(Bf.get(a))));
      },
      [a],
      $
    ),
    Zn(
      () => {
        var H;
        (H = D.current) == null || H.updateOptions(d);
      },
      [d],
      $
    ),
    Zn(
      () => {
        !D.current ||
          r === void 0 ||
          (D.current.getOption(G.current.editor.EditorOption.readOnly)
            ? D.current.setValue(r)
            : r !== D.current.getValue() &&
              ((R.current = !0),
              D.current.executeEdits("", [
                {
                  range: D.current.getModel().getFullModelRange(),
                  text: r,
                  forceMoveMarkers: !0,
                },
              ]),
              D.current.pushUndoStop(),
              (R.current = !1)));
      },
      [r],
      $
    ),
    Zn(
      () => {
        var Q, de;
        let H = (Q = D.current) == null ? void 0 : Q.getModel();
        H &&
          i &&
          ((de = G.current) == null || de.editor.setModelLanguage(H, i));
      },
      [i],
      $
    ),
    Zn(
      () => {
        var H;
        c !== void 0 && ((H = D.current) == null || H.revealLine(c));
      },
      [c],
      $
    ),
    Zn(
      () => {
        var H;
        (H = G.current) == null || H.editor.setTheme(u);
      },
      [u],
      $
    );
  let B = x.useCallback(() => {
    var H;
    if (!(!J.current || !G.current) && !z.current) {
      ne.current(G.current);
      let Q = a || n,
        de = Xl(G.current, r || e || "", t || i || "", Q || "");
      (D.current =
        (H = G.current) == null
          ? void 0
          : H.editor.create(
              J.current,
              { model: de, automaticLayout: !0, ...d },
              h
            )),
        v && D.current.restoreViewState(Bf.get(Q)),
        G.current.editor.setTheme(u),
        c !== void 0 && D.current.revealLine(c),
        L(!0),
        (z.current = !0);
    }
  }, [e, t, n, r, i, a, d, h, v, u, c]);
  x.useEffect(() => {
    $ && le.current(D.current, G.current);
  }, [$]),
    x.useEffect(() => {
      !A && !$ && B();
    }, [A, $, B]),
    (q.current = r),
    x.useEffect(() => {
      var H, Q;
      $ &&
        S &&
        ((H = se.current) == null || H.dispose(),
        (se.current =
          (Q = D.current) == null
            ? void 0
            : Q.onDidChangeModelContent((de) => {
                R.current || S(D.current.getValue(), de);
              })));
    }, [$, S]),
    x.useEffect(() => {
      if ($) {
        let H = G.current.editor.onDidChangeMarkers((Q) => {
          var Se;
          let de = (Se = D.current.getModel()) == null ? void 0 : Se.uri;
          if (de && Q.find((xe) => xe.path === de.path)) {
            let xe = G.current.editor.getModelMarkers({ resource: de });
            k == null || k(xe);
          }
        });
        return () => {
          H == null || H.dispose();
        };
      }
      return () => {};
    }, [$, k]);
  function W() {
    var H, Q;
    (H = se.current) == null || H.dispose(),
      g
        ? v && Bf.set(a, D.current.saveViewState())
        : (Q = D.current.getModel()) == null || Q.dispose(),
      D.current.dispose();
  }
  return Te.createElement(BO, {
    width: b,
    height: E,
    isEditorReady: $,
    loading: f,
    _ref: J,
    className: O,
    wrapperProps: T,
  });
}
var M7 = $7,
  L7 = x.memo(M7),
  N7 = L7;
function Vr(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (i) {
              return "'" + i + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function ea(e) {
  return !!e && !!e[mt];
}
function to(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != "object") return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var i = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
      return (
        i === Object ||
        (typeof i == "function" && Function.toString.call(i) === V7)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[Yx] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[Yx]) ||
      Gy(e) ||
      Ky(e))
  );
}
function Ya(e, t, n) {
  n === void 0 && (n = !1),
    Ou(e) === 0
      ? (n ? Object.keys : lu)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, i) {
          return t(i, r, e);
        });
}
function Ou(e) {
  var t = e[mt];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Gy(e)
    ? 2
    : Ky(e)
    ? 3
    : 0;
}
function au(e, t) {
  return Ou(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function z7(e, t) {
  return Ou(e) === 2 ? e.get(t) : e[t];
}
function UO(e, t, n) {
  var r = Ou(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function VO(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Gy(e) {
  return H7 && e instanceof Map;
}
function Ky(e) {
  return U7 && e instanceof Set;
}
function ka(e) {
  return e.o || e.t;
}
function Yy(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = KO(e);
  delete t[mt];
  for (var n = lu(t), r = 0; r < n.length; r++) {
    var i = n[r],
      a = t[i];
    a.writable === !1 && ((a.writable = !0), (a.configurable = !0)),
      (a.get || a.set) &&
        (t[i] = {
          configurable: !0,
          writable: !0,
          enumerable: a.enumerable,
          value: e[i],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Xy(e, t) {
  return (
    t === void 0 && (t = !1),
    Qy(e) ||
      ea(e) ||
      !to(e) ||
      (Ou(e) > 1 && (e.set = e.add = e.clear = e.delete = j7),
      Object.freeze(e),
      t &&
        Ya(
          e,
          function (n, r) {
            return Xy(r, !0);
          },
          !0
        )),
    e
  );
}
function j7() {
  Vr(2);
}
function Qy(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function gi(e) {
  var t = l0[e];
  return t || Vr(18, e), t;
}
function D7(e, t) {
  l0[e] || (l0[e] = t);
}
function i0() {
  return tc;
}
function Sm(e, t) {
  t && (gi("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function Jd(e) {
  o0(e), e.p.forEach(F7), (e.p = null);
}
function o0(e) {
  e === tc && (tc = e.l);
}
function Wx(e) {
  return (tc = { p: [], l: tc, h: e, m: !0, _: 0 });
}
function F7(e) {
  var t = e[mt];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function xm(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.O || gi("ES5").S(t, e, r),
    r
      ? (n[mt].P && (Jd(t), Vr(4)),
        to(e) && ((e = ep(t, e)), t.l || tp(t, e)),
        t.u && gi("Patches").M(n[mt].t, e, t.u, t.s))
      : (e = ep(t, n, [])),
    Jd(t),
    t.u && t.v(t.u, t.s),
    e !== GO ? e : void 0
  );
}
function ep(e, t, n) {
  if (Qy(t)) return t;
  var r = t[mt];
  if (!r)
    return (
      Ya(
        t,
        function (c, f) {
          return Hx(e, r, t, c, f, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return tp(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var i = r.i === 4 || r.i === 5 ? (r.o = Yy(r.k)) : r.o,
      a = i,
      u = !1;
    r.i === 3 && ((a = new Set(i)), i.clear(), (u = !0)),
      Ya(a, function (c, f) {
        return Hx(e, r, i, c, f, n, u);
      }),
      tp(e, i, !1),
      n && e.u && gi("Patches").N(r, n, e.u, e.s);
  }
  return r.o;
}
function Hx(e, t, n, r, i, a, u) {
  if (ea(i)) {
    var c = ep(e, i, a && t && t.i !== 3 && !au(t.R, r) ? a.concat(r) : void 0);
    if ((UO(n, r, c), !ea(c))) return;
    e.m = !1;
  } else u && n.add(i);
  if (to(i) && !Qy(i)) {
    if (!e.h.D && e._ < 1) return;
    ep(e, i), (t && t.A.l) || tp(e, i);
  }
}
function tp(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && Xy(t, n);
}
function Cm(e, t) {
  var n = e[mt];
  return (n ? ka(n) : e)[t];
}
function Ux(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function $o(e) {
  e.P || ((e.P = !0), e.l && $o(e.l));
}
function _m(e) {
  e.o || (e.o = Yy(e.t));
}
function a0(e, t, n) {
  var r = Gy(t)
    ? gi("MapSet").F(t, n)
    : Ky(t)
    ? gi("MapSet").T(t, n)
    : e.O
    ? (function (i, a) {
        var u = Array.isArray(i),
          c = {
            i: u ? 1 : 0,
            A: a ? a.A : i0(),
            P: !1,
            I: !1,
            R: {},
            l: a,
            t: i,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          f = c,
          d = nc;
        u && ((f = [c]), (d = hs));
        var h = Proxy.revocable(f, d),
          v = h.revoke,
          g = h.proxy;
        return (c.k = g), (c.j = v), g;
      })(t, n)
    : gi("ES5").J(t, n);
  return (n ? n.A : i0()).p.push(r), r;
}
function B7(e) {
  return (
    ea(e) || Vr(22, e),
    (function t(n) {
      if (!to(n)) return n;
      var r,
        i = n[mt],
        a = Ou(n);
      if (i) {
        if (!i.P && (i.i < 4 || !gi("ES5").K(i))) return i.t;
        (i.I = !0), (r = Vx(n, a)), (i.I = !1);
      } else r = Vx(n, a);
      return (
        Ya(r, function (u, c) {
          (i && z7(i.t, u) === c) || UO(r, u, t(c));
        }),
        a === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function Vx(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Yy(e);
}
function W7() {
  function e(a, u) {
    var c = i[a];
    return (
      c
        ? (c.enumerable = u)
        : (i[a] = c =
            {
              configurable: !0,
              enumerable: u,
              get: function () {
                var f = this[mt];
                return nc.get(f, a);
              },
              set: function (f) {
                var d = this[mt];
                nc.set(d, a, f);
              },
            }),
      c
    );
  }
  function t(a) {
    for (var u = a.length - 1; u >= 0; u--) {
      var c = a[u][mt];
      if (!c.P)
        switch (c.i) {
          case 5:
            r(c) && $o(c);
            break;
          case 4:
            n(c) && $o(c);
        }
    }
  }
  function n(a) {
    for (var u = a.t, c = a.k, f = lu(c), d = f.length - 1; d >= 0; d--) {
      var h = f[d];
      if (h !== mt) {
        var v = u[h];
        if (v === void 0 && !au(u, h)) return !0;
        var g = c[h],
          b = g && g[mt];
        if (b ? b.t !== v : !VO(g, v)) return !0;
      }
    }
    var E = !!u[mt];
    return f.length !== lu(u).length + (E ? 0 : 1);
  }
  function r(a) {
    var u = a.k;
    if (u.length !== a.t.length) return !0;
    var c = Object.getOwnPropertyDescriptor(u, u.length - 1);
    if (c && !c.get) return !0;
    for (var f = 0; f < u.length; f++) if (!u.hasOwnProperty(f)) return !0;
    return !1;
  }
  var i = {};
  D7("ES5", {
    J: function (a, u) {
      var c = Array.isArray(a),
        f = (function (h, v) {
          if (h) {
            for (var g = Array(v.length), b = 0; b < v.length; b++)
              Object.defineProperty(g, "" + b, e(b, !0));
            return g;
          }
          var E = KO(v);
          delete E[mt];
          for (var O = lu(E), T = 0; T < O.length; T++) {
            var C = O[T];
            E[C] = e(C, h || !!E[C].enumerable);
          }
          return Object.create(Object.getPrototypeOf(v), E);
        })(c, a),
        d = {
          i: c ? 5 : 4,
          A: u ? u.A : i0(),
          P: !1,
          I: !1,
          R: {},
          l: u,
          t: a,
          k: f,
          o: null,
          g: !1,
          C: !1,
        };
      return Object.defineProperty(f, mt, { value: d, writable: !0 }), f;
    },
    S: function (a, u, c) {
      c
        ? ea(u) && u[mt].A === a && t(a.p)
        : (a.u &&
            (function f(d) {
              if (d && typeof d == "object") {
                var h = d[mt];
                if (h) {
                  var v = h.t,
                    g = h.k,
                    b = h.R,
                    E = h.i;
                  if (E === 4)
                    Ya(g, function (S) {
                      S !== mt &&
                        (v[S] !== void 0 || au(v, S)
                          ? b[S] || f(g[S])
                          : ((b[S] = !0), $o(h)));
                    }),
                      Ya(v, function (S) {
                        g[S] !== void 0 || au(g, S) || ((b[S] = !1), $o(h));
                      });
                  else if (E === 5) {
                    if ((r(h) && ($o(h), (b.length = !0)), g.length < v.length))
                      for (var O = g.length; O < v.length; O++) b[O] = !1;
                    else for (var T = v.length; T < g.length; T++) b[T] = !0;
                    for (
                      var C = Math.min(g.length, v.length), y = 0;
                      y < C;
                      y++
                    )
                      g.hasOwnProperty(y) || (b[y] = !0),
                        b[y] === void 0 && f(g[y]);
                  }
                }
              }
            })(a.p[0]),
          t(a.p));
    },
    K: function (a) {
      return a.i === 4 ? n(a) : r(a);
    },
  });
}
var Gx,
  tc,
  qy = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  H7 = typeof Map < "u",
  U7 = typeof Set < "u",
  Kx = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  GO = qy
    ? Symbol.for("immer-nothing")
    : (((Gx = {})["immer-nothing"] = !0), Gx),
  Yx = qy ? Symbol.for("immer-draftable") : "__$immer_draftable",
  mt = qy ? Symbol.for("immer-state") : "__$immer_state",
  V7 = "" + Object.prototype.constructor,
  lu =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  KO =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        lu(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  l0 = {},
  nc = {
    get: function (e, t) {
      if (t === mt) return e;
      var n = ka(e);
      if (!au(n, t))
        return (function (i, a, u) {
          var c,
            f = Ux(a, u);
          return f
            ? "value" in f
              ? f.value
              : (c = f.get) === null || c === void 0
              ? void 0
              : c.call(i.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !to(r)
        ? r
        : r === Cm(e.t, t)
        ? (_m(e), (e.o[t] = a0(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in ka(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(ka(e));
    },
    set: function (e, t, n) {
      var r = Ux(ka(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var i = Cm(ka(e), t),
          a = i == null ? void 0 : i[mt];
        if (a && a.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if (VO(n, i) && (n !== void 0 || au(e.t, t))) return !0;
        _m(e), $o(e);
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        Cm(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), _m(e), $o(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = ka(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      Vr(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Vr(12);
    },
  },
  hs = {};
Ya(nc, function (e, t) {
  hs[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (hs.deleteProperty = function (e, t) {
    return hs.set.call(this, e, t, void 0);
  }),
  (hs.set = function (e, t, n) {
    return nc.set.call(this, e[0], t, n, e[0]);
  });
var G7 = (function () {
    function e(n) {
      var r = this;
      (this.O = Kx),
        (this.D = !0),
        (this.produce = function (i, a, u) {
          if (typeof i == "function" && typeof a != "function") {
            var c = a;
            a = i;
            var f = r;
            return function (O) {
              var T = this;
              O === void 0 && (O = c);
              for (
                var C = arguments.length, y = Array(C > 1 ? C - 1 : 0), S = 1;
                S < C;
                S++
              )
                y[S - 1] = arguments[S];
              return f.produce(O, function (k) {
                var $;
                return ($ = a).call.apply($, [T, k].concat(y));
              });
            };
          }
          var d;
          if (
            (typeof a != "function" && Vr(6),
            u !== void 0 && typeof u != "function" && Vr(7),
            to(i))
          ) {
            var h = Wx(r),
              v = a0(r, i, void 0),
              g = !0;
            try {
              (d = a(v)), (g = !1);
            } finally {
              g ? Jd(h) : o0(h);
            }
            return typeof Promise < "u" && d instanceof Promise
              ? d.then(
                  function (O) {
                    return Sm(h, u), xm(O, h);
                  },
                  function (O) {
                    throw (Jd(h), O);
                  }
                )
              : (Sm(h, u), xm(d, h));
          }
          if (!i || typeof i != "object") {
            if (
              ((d = a(i)) === void 0 && (d = i),
              d === GO && (d = void 0),
              r.D && Xy(d, !0),
              u)
            ) {
              var b = [],
                E = [];
              gi("Patches").M(i, d, b, E), u(b, E);
            }
            return d;
          }
          Vr(21, i);
        }),
        (this.produceWithPatches = function (i, a) {
          if (typeof i == "function")
            return function (d) {
              for (
                var h = arguments.length, v = Array(h > 1 ? h - 1 : 0), g = 1;
                g < h;
                g++
              )
                v[g - 1] = arguments[g];
              return r.produceWithPatches(d, function (b) {
                return i.apply(void 0, [b].concat(v));
              });
            };
          var u,
            c,
            f = r.produce(i, a, function (d, h) {
              (u = d), (c = h);
            });
          return typeof Promise < "u" && f instanceof Promise
            ? f.then(function (d) {
                return [d, u, c];
              })
            : [f, u, c];
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        to(n) || Vr(8), ea(n) && (n = B7(n));
        var r = Wx(this),
          i = a0(this, n, void 0);
        return (i[mt].C = !0), o0(r), i;
      }),
      (t.finishDraft = function (n, r) {
        var i = n && n[mt],
          a = i.A;
        return Sm(a, r), xm(void 0, a);
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        n && !Kx && Vr(20), (this.O = n);
      }),
      (t.applyPatches = function (n, r) {
        var i;
        for (i = r.length - 1; i >= 0; i--) {
          var a = r[i];
          if (a.path.length === 0 && a.op === "replace") {
            n = a.value;
            break;
          }
        }
        i > -1 && (r = r.slice(i + 1));
        var u = gi("Patches").$;
        return ea(n)
          ? u(n, r)
          : this.produce(n, function (c) {
              return u(c, r);
            });
      }),
      e
    );
  })(),
  rr = new G7(),
  YO = rr.produce;
rr.produceWithPatches.bind(rr);
rr.setAutoFreeze.bind(rr);
rr.setUseProxies.bind(rr);
rr.applyPatches.bind(rr);
rr.createDraft.bind(rr);
rr.finishDraft.bind(rr);
function yn(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var Xx = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Em = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  np = {
    INIT: "@@redux/INIT" + Em(),
    REPLACE: "@@redux/REPLACE" + Em(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Em();
    },
  };
function K7(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function XO(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(yn(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(yn(1));
    return n(XO)(e, t);
  }
  if (typeof e != "function") throw new Error(yn(2));
  var i = e,
    a = t,
    u = [],
    c = u,
    f = !1;
  function d() {
    c === u && (c = u.slice());
  }
  function h() {
    if (f) throw new Error(yn(3));
    return a;
  }
  function v(O) {
    if (typeof O != "function") throw new Error(yn(4));
    if (f) throw new Error(yn(5));
    var T = !0;
    return (
      d(),
      c.push(O),
      function () {
        if (T) {
          if (f) throw new Error(yn(6));
          (T = !1), d();
          var y = c.indexOf(O);
          c.splice(y, 1), (u = null);
        }
      }
    );
  }
  function g(O) {
    if (!K7(O)) throw new Error(yn(7));
    if (typeof O.type > "u") throw new Error(yn(8));
    if (f) throw new Error(yn(9));
    try {
      (f = !0), (a = i(a, O));
    } finally {
      f = !1;
    }
    for (var T = (u = c), C = 0; C < T.length; C++) {
      var y = T[C];
      y();
    }
    return O;
  }
  function b(O) {
    if (typeof O != "function") throw new Error(yn(10));
    (i = O), g({ type: np.REPLACE });
  }
  function E() {
    var O,
      T = v;
    return (
      (O = {
        subscribe: function (y) {
          if (typeof y != "object" || y === null) throw new Error(yn(11));
          function S() {
            y.next && y.next(h());
          }
          S();
          var k = T(S);
          return { unsubscribe: k };
        },
      }),
      (O[Xx] = function () {
        return this;
      }),
      O
    );
  }
  return (
    g({ type: np.INIT }),
    (r = { dispatch: g, subscribe: v, getState: h, replaceReducer: b }),
    (r[Xx] = E),
    r
  );
}
function Y7(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: np.INIT });
    if (typeof r > "u") throw new Error(yn(12));
    if (typeof n(void 0, { type: np.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(yn(13));
  });
}
function X7(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  var a = Object.keys(n),
    u;
  try {
    Y7(n);
  } catch (c) {
    u = c;
  }
  return function (f, d) {
    if ((f === void 0 && (f = {}), u)) throw u;
    for (var h = !1, v = {}, g = 0; g < a.length; g++) {
      var b = a[g],
        E = n[b],
        O = f[b],
        T = E(O, d);
      if (typeof T > "u") throw (d && d.type, new Error(yn(14)));
      (v[b] = T), (h = h || T !== O);
    }
    return (h = h || a.length !== Object.keys(f).length), h ? v : f;
  };
}
function rp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, i) {
        return function () {
          return r(i.apply(void 0, arguments));
        };
      });
}
function Q7() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var i = r.apply(void 0, arguments),
        a = function () {
          throw new Error(yn(15));
        },
        u = {
          getState: i.getState,
          dispatch: function () {
            return a.apply(void 0, arguments);
          },
        },
        c = t.map(function (f) {
          return f(u);
        });
      return (
        (a = rp.apply(void 0, c)(i.dispatch)),
        ue(ue({}, i), {}, { dispatch: a })
      );
    };
  };
}
function QO(e) {
  var t = function (r) {
    var i = r.dispatch,
      a = r.getState;
    return function (u) {
      return function (c) {
        return typeof c == "function" ? c(i, a, e) : u(c);
      };
    };
  };
  return t;
}
var qO = QO();
qO.withExtraArgument = QO;
const Qx = qO;
var ZO =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i;
              }) ||
            function (r, i) {
              for (var a in i)
                Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  q7 =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (a[0] & 1) throw a[1];
            return a[1];
          },
          trys: [],
          ops: [],
        },
        r,
        i,
        a,
        u;
      return (
        (u = { next: c(0), throw: c(1), return: c(2) }),
        typeof Symbol == "function" &&
          (u[Symbol.iterator] = function () {
            return this;
          }),
        u
      );
      function c(d) {
        return function (h) {
          return f([d, h]);
        };
      }
      function f(d) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (a =
                  d[0] & 2
                    ? i.return
                    : d[0]
                    ? i.throw || ((a = i.return) && a.call(i), 0)
                    : i.next) &&
                !(a = a.call(i, d[1])).done)
            )
              return a;
            switch (((i = 0), a && (d = [d[0] & 2, a.value]), d[0])) {
              case 0:
              case 1:
                a = d;
                break;
              case 4:
                return n.label++, { value: d[1], done: !1 };
              case 5:
                n.label++, (i = d[1]), (d = [0]);
                continue;
              case 7:
                (d = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((a = n.trys),
                  !(a = a.length > 0 && a[a.length - 1]) &&
                    (d[0] === 6 || d[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (d[0] === 3 && (!a || (d[1] > a[0] && d[1] < a[3]))) {
                  n.label = d[1];
                  break;
                }
                if (d[0] === 6 && n.label < a[1]) {
                  (n.label = a[1]), (a = d);
                  break;
                }
                if (a && n.label < a[2]) {
                  (n.label = a[2]), n.ops.push(d);
                  break;
                }
                a[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            d = t.call(e, n);
          } catch (h) {
            (d = [6, h]), (i = 0);
          } finally {
            r = a = 0;
          }
        if (d[0] & 5) throw d[1];
        return { value: d[0] ? d[1] : void 0, done: !0 };
      }
    },
  wu =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  Z7 = Object.defineProperty,
  J7 = Object.defineProperties,
  e9 = Object.getOwnPropertyDescriptors,
  qx = Object.getOwnPropertySymbols,
  t9 = Object.prototype.hasOwnProperty,
  n9 = Object.prototype.propertyIsEnumerable,
  Zx = function (e, t, n) {
    return t in e
      ? Z7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Yo = function (e, t) {
    for (var n in t || (t = {})) t9.call(t, n) && Zx(e, n, t[n]);
    if (qx)
      for (var r = 0, i = qx(t); r < i.length; r++) {
        var n = i[r];
        n9.call(t, n) && Zx(e, n, t[n]);
      }
    return e;
  },
  Om = function (e, t) {
    return J7(e, e9(t));
  },
  r9 = function (e, t, n) {
    return new Promise(function (r, i) {
      var a = function (f) {
          try {
            c(n.next(f));
          } catch (d) {
            i(d);
          }
        },
        u = function (f) {
          try {
            c(n.throw(f));
          } catch (d) {
            i(d);
          }
        },
        c = function (f) {
          return f.done ? r(f.value) : Promise.resolve(f.value).then(a, u);
        };
      c((n = n.apply(e, t)).next());
    });
  },
  i9 =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? rp
              : rp.apply(null, arguments);
        };
function o9(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function Xo(e, t) {
  function n() {
    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
    if (t) {
      var a = t.apply(void 0, r);
      if (!a) throw new Error("prepareAction did not return an object");
      return Yo(
        Yo({ type: e, payload: a.payload }, "meta" in a && { meta: a.meta }),
        "error" in a && { error: a.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
var a9 = (function (e) {
    ZO(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var i = e.apply(this, n) || this;
      return Object.setPrototypeOf(i, t.prototype), i;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, wu([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, wu([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array),
  l9 = (function (e) {
    ZO(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var i = e.apply(this, n) || this;
      return Object.setPrototypeOf(i, t.prototype), i;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, wu([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, wu([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array);
function u0(e) {
  return to(e) ? YO(e, function () {}) : e;
}
function u9(e) {
  return typeof e == "boolean";
}
function s9() {
  return function (t) {
    return c9(t);
  };
}
function c9(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck, e.actionCreatorCheck;
  var r = new a9();
  return (
    n && (u9(n) ? r.push(Qx) : r.push(Qx.withExtraArgument(n.extraArgument))), r
  );
}
var f9 = !0;
function d9(e) {
  var t = s9(),
    n = e || {},
    r = n.reducer,
    i = r === void 0 ? void 0 : r,
    a = n.middleware,
    u = a === void 0 ? t() : a,
    c = n.devTools,
    f = c === void 0 ? !0 : c,
    d = n.preloadedState,
    h = d === void 0 ? void 0 : d,
    v = n.enhancers,
    g = v === void 0 ? void 0 : v,
    b;
  if (typeof i == "function") b = i;
  else if (o9(i)) b = X7(i);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var E = u;
  typeof E == "function" && (E = E(t));
  var O = Q7.apply(void 0, E),
    T = rp;
  f && (T = i9(Yo({ trace: !f9 }, typeof f == "object" && f)));
  var C = new l9(O),
    y = C;
  Array.isArray(g) ? (y = wu([O], g)) : typeof g == "function" && (y = g(C));
  var S = T.apply(void 0, y);
  return XO(b, h, S);
}
function JO(e) {
  var t = {},
    n = [],
    r,
    i = {
      addCase: function (a, u) {
        var c = typeof a == "string" ? a : a.type;
        if (!c)
          throw new Error(
            "`builder.addCase` cannot be called with an empty action type"
          );
        if (c in t)
          throw new Error(
            "`builder.addCase` cannot be called with two reducers for the same action type"
          );
        return (t[c] = u), i;
      },
      addMatcher: function (a, u) {
        return n.push({ matcher: a, reducer: u }), i;
      },
      addDefaultCase: function (a) {
        return (r = a), i;
      },
    };
  return e(i), [t, n, r];
}
function p9(e) {
  return typeof e == "function";
}
function h9(e, t, n, r) {
  n === void 0 && (n = []);
  var i = typeof t == "function" ? JO(t) : [t, n, r],
    a = i[0],
    u = i[1],
    c = i[2],
    f;
  if (p9(e))
    f = function () {
      return u0(e());
    };
  else {
    var d = u0(e);
    f = function () {
      return d;
    };
  }
  function h(v, g) {
    v === void 0 && (v = f());
    var b = wu(
      [a[g.type]],
      u
        .filter(function (E) {
          var O = E.matcher;
          return O(g);
        })
        .map(function (E) {
          var O = E.reducer;
          return O;
        })
    );
    return (
      b.filter(function (E) {
        return !!E;
      }).length === 0 && (b = [c]),
      b.reduce(function (E, O) {
        if (O)
          if (ea(E)) {
            var T = E,
              C = O(T, g);
            return C === void 0 ? E : C;
          } else {
            if (to(E))
              return YO(E, function (y) {
                return O(y, g);
              });
            var C = O(E, g);
            if (C === void 0) {
              if (E === null) return E;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return C;
          }
        return E;
      }, v)
    );
  }
  return (h.getInitialState = f), h;
}
function v9(e, t) {
  return e + "/" + t;
}
function ek(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var n =
      typeof e.initialState == "function" ? e.initialState : u0(e.initialState),
    r = e.reducers || {},
    i = Object.keys(r),
    a = {},
    u = {},
    c = {};
  i.forEach(function (h) {
    var v = r[h],
      g = v9(t, h),
      b,
      E;
    "reducer" in v ? ((b = v.reducer), (E = v.prepare)) : (b = v),
      (a[h] = b),
      (u[g] = b),
      (c[h] = E ? Xo(g, E) : Xo(g));
  });
  function f() {
    var h =
        typeof e.extraReducers == "function"
          ? JO(e.extraReducers)
          : [e.extraReducers],
      v = h[0],
      g = v === void 0 ? {} : v,
      b = h[1],
      E = b === void 0 ? [] : b,
      O = h[2],
      T = O === void 0 ? void 0 : O,
      C = Yo(Yo({}, g), u);
    return h9(n, function (y) {
      for (var S in C) y.addCase(S, C[S]);
      for (var k = 0, $ = E; k < $.length; k++) {
        var L = $[k];
        y.addMatcher(L.matcher, L.reducer);
      }
      T && y.addDefaultCase(T);
    });
  }
  var d;
  return {
    name: t,
    reducer: function (h, v) {
      return d || (d = f()), d(h, v);
    },
    actions: c,
    caseReducers: a,
    getInitialState: function () {
      return d || (d = f()), d.getInitialState();
    },
  };
}
var m9 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  g9 = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", n = e; n--; ) t += m9[(Math.random() * 64) | 0];
    return t;
  },
  y9 = ["name", "message", "stack", "code"],
  km = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  Jx = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  b9 = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, n = 0, r = y9; n < r.length; n++) {
        var i = r[n];
        typeof e[i] == "string" && (t[i] = e[i]);
      }
      return t;
    }
    return { message: String(e) };
  };
(function () {
  function e(t, n, r) {
    var i = Xo(t + "/fulfilled", function (d, h, v, g) {
        return {
          payload: d,
          meta: Om(Yo({}, g || {}), {
            arg: v,
            requestId: h,
            requestStatus: "fulfilled",
          }),
        };
      }),
      a = Xo(t + "/pending", function (d, h, v) {
        return {
          payload: void 0,
          meta: Om(Yo({}, v || {}), {
            arg: h,
            requestId: d,
            requestStatus: "pending",
          }),
        };
      }),
      u = Xo(t + "/rejected", function (d, h, v, g, b) {
        return {
          payload: g,
          error: ((r && r.serializeError) || b9)(d || "Rejected"),
          meta: Om(Yo({}, b || {}), {
            arg: v,
            requestId: h,
            rejectedWithValue: !!g,
            requestStatus: "rejected",
            aborted: (d == null ? void 0 : d.name) === "AbortError",
            condition: (d == null ? void 0 : d.name) === "ConditionError",
          }),
        };
      }),
      c =
        typeof AbortController < "u"
          ? AbortController
          : (function () {
              function d() {
                this.signal = {
                  aborted: !1,
                  addEventListener: function () {},
                  dispatchEvent: function () {
                    return !1;
                  },
                  onabort: function () {},
                  removeEventListener: function () {},
                  reason: void 0,
                  throwIfAborted: function () {},
                };
              }
              return (d.prototype.abort = function () {}), d;
            })();
    function f(d) {
      return function (h, v, g) {
        var b = r != null && r.idGenerator ? r.idGenerator(d) : g9(),
          E = new c(),
          O;
        function T(y) {
          (O = y), E.abort();
        }
        var C = (function () {
          return r9(this, null, function () {
            var y, S, k, $, L, A, U;
            return q7(this, function (G) {
              switch (G.label) {
                case 0:
                  return (
                    G.trys.push([0, 4, , 5]),
                    ($ =
                      (y = r == null ? void 0 : r.condition) == null
                        ? void 0
                        : y.call(r, d, { getState: v, extra: g })),
                    S9($) ? [4, $] : [3, 2]
                  );
                case 1:
                  ($ = G.sent()), (G.label = 2);
                case 2:
                  if ($ === !1 || E.signal.aborted)
                    throw {
                      name: "ConditionError",
                      message:
                        "Aborted due to condition callback returning false.",
                    };
                  return (
                    (L = new Promise(function (D, J) {
                      return E.signal.addEventListener("abort", function () {
                        return J({
                          name: "AbortError",
                          message: O || "Aborted",
                        });
                      });
                    })),
                    h(
                      a(
                        b,
                        d,
                        (S = r == null ? void 0 : r.getPendingMeta) == null
                          ? void 0
                          : S.call(
                              r,
                              { requestId: b, arg: d },
                              { getState: v, extra: g }
                            )
                      )
                    ),
                    [
                      4,
                      Promise.race([
                        L,
                        Promise.resolve(
                          n(d, {
                            dispatch: h,
                            getState: v,
                            extra: g,
                            requestId: b,
                            signal: E.signal,
                            abort: T,
                            rejectWithValue: function (D, J) {
                              return new km(D, J);
                            },
                            fulfillWithValue: function (D, J) {
                              return new Jx(D, J);
                            },
                          })
                        ).then(function (D) {
                          if (D instanceof km) throw D;
                          return D instanceof Jx
                            ? i(D.payload, b, d, D.meta)
                            : i(D, b, d);
                        }),
                      ]),
                    ]
                  );
                case 3:
                  return (k = G.sent()), [3, 5];
                case 4:
                  return (
                    (A = G.sent()),
                    (k =
                      A instanceof km
                        ? u(null, b, d, A.payload, A.meta)
                        : u(A, b, d)),
                    [3, 5]
                  );
                case 5:
                  return (
                    (U =
                      r &&
                      !r.dispatchConditionRejection &&
                      u.match(k) &&
                      k.meta.condition),
                    U || h(k),
                    [2, k]
                  );
              }
            });
          });
        })();
        return Object.assign(C, {
          abort: T,
          requestId: b,
          arg: d,
          unwrap: function () {
            return C.then(w9);
          },
        });
      };
    }
    return Object.assign(f, {
      pending: a,
      rejected: u,
      fulfilled: i,
      typePrefix: t,
    });
  }
  return (
    (e.withTypes = function () {
      return e;
    }),
    e
  );
})();
function w9(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function S9(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Zy = "listenerMiddleware";
Xo(Zy + "/add");
Xo(Zy + "/removeAll");
Xo(Zy + "/remove");
var e2;
typeof queueMicrotask == "function" &&
  queueMicrotask.bind(
    typeof window < "u" ? window : typeof global < "u" ? global : globalThis
  );
W7();
const x9 = {
    showConsole: !1,
    activeFile: null,
    fileClicked: !1,
    editorContent: {},
  },
  tk = ek({
    name: "console",
    initialState: x9,
    reducers: {
      updateShowConsole: (e, t) => {
        e.showConsole = t.payload;
      },
      updateActiveFile: (e, t) => {
        e.activeFile = t.payload;
      },
      updateFileClicked: (e, t) => {
        e.fileClicked = t.payload;
      },
      uploadEditorContent: (e, t) => {
        e.editorContent = t.payload;
      },
    },
  }),
  {
    updateShowConsole: t2,
    updateActiveFile: nk,
    uploadEditorContent: Wf,
    updateFileClicked: UB,
  } = tk.actions,
  C9 = tk.reducer,
  rk = "images/solidity.png",
  _9 = {
    navType: "file",
    showSideNav: !0,
    fileName: "",
    structure: [{ key: 1, lable: "Contracts", childs: [] }],
    fileNameArray: [],
    methodDemo: "",
    showCodeEditor: !0,
  },
  ik = ek({
    name: "explorer",
    initialState: _9,
    reducers: {
      updateNavType: (e, t) => {
        e.navType = t.payload;
      },
      updateSideNavDrawer: (e, t) => {
        e.showSideNav = t.payload;
      },
      updateStructure: (e, t) => {
        e.structure.map((n) => {
          n.childs = t.payload;
        });
      },
      updateFileName: (e, t) => {
        e.fileName = t.payload;
      },
      updateFileNameArray: (e, t) => {
        e.fileNameArray = t.payload;
      },
      updateMethodDemo: (e, t) => {
        e.methodDemo = t.payload;
      },
      UpdateshowCodeEdtior: (e, t) => {
        e.showCodeEditor = t.payload;
      },
    },
  }),
  {
    updateNavType: E9,
    updateSideNavDrawer: O9,
    updateStructure: Pm,
    updateFileName: n2,
    updateFileNameArray: k9,
    updateMethodDemo: P9,
    UpdateshowCodeEdtior: ok,
  } = ik.actions,
  T9 = ik.reducer,
  A9 = () => {
    const e = Kp(),
      t = (n) => {
        e(P9(n)), e(ok(!1));
      };
    return ee.jsx("div", {
      style: {
        flex: 0.8,
        height: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      children: ee.jsxs("div", {
        style: { width: 500, height: 300, background: "transparent" },
        children: [
          ee.jsx("div", {
            children: ee.jsx("p", {
              style: { textAlign: "center", color: "white" },
              children: "Select the Tutorial",
            }),
          }),
          ee.jsx("div", {
            style: {
              display: "flex",
              height: "150px",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            },
            children: ["If Else", "Loop", "Classes"].map((n, r) =>
              ee.jsx(
                "div",
                {
                  style: { marginInline: "5px" },
                  children: ee.jsx(Oj, {
                    style: { width: 200, height: 50 },
                    onClick: () => t(n),
                    children: n,
                  }),
                },
                r
              )
            ),
          }),
        ],
      }),
    });
  },
  R9 = (e) => `// SPDX-License-Identifier: MIT 
  pragma solidity ^0.8.0;
  
    // In Solidity, the if-else statement is used for conditional execution of code. It allows you to control 
      the flow of your smart contract based on certain conditions.
      Here's a simple example demonstrating the use of if-else in Solidity:
  
  contract ${e} {
    
      // Define a state variable
      uint public myNumber;
  
      // Function to set the value of myNumber based on a condition
      function setNumber(uint _input) external {
          // If-else statement
          if (_input > 10) {
              myNumber = _input;
          } else {
              myNumber = 10; // Set a default value if the condition is not met
          }
      }
  }
  `,
  I9 = (e) => `// SPDX-License-Identifier: MIT 
  pragma solidity ^0.8.0;
     
       //Loops in Solidity serve similar purposes as loops in other programming languages – they allow you to repeat a certain block of code multiple times. 
         Solidity supports different types of loops, including for, while, and do-while loops. 
         Here are examples of each:
  
    contract ${e} {
  
        function forLoopExample() public pure returns (uint) {
            uint sum = 0;
  
            //For Loop Example
  
            for (uint i = 1; i <= 10; i++) {
                sum += i;
            }
            return sum;
        }
  
  
        function whileLoopExample() public pure returns (uint) {
            uint sum = 0;
            uint i = 1;
  
         //While Loop Example
  
            while (i <= 10) {
                sum += i;
                i++;
            }
            return sum;
        }
  
    
        function doWhileLoopExample() public pure returns (uint) {
            uint sum = 0;
            uint i = 1;
  
        //Do While Loop Example
  
            do {
                sum += i;
                i++;
            } while (i <= 10);
            return sum;
        }
    }
    
  `,
  $9 = (e) => `// SPDX-License-Identifier: MIT 
   pragma solidity ^0.8.0;
  
    contract ${e} {

    //Person is similar to a class with fields name and age.

      struct Person {
          string name;
          uint age;
      }
  
  
      //people is an array of Person structs, akin to an array of objects.
  
      Person[] public people;
  
      // Constructor to initialize the contract
  
      constructor() {
          // You can perform initialization here if needed
      }
  
     // Function to add a person to the array
  
      function addPerson(string memory _name, uint _age) public {
          Person memory newPerson = Person(_name, _age);
          people.push(newPerson);
      }
  
      // Function to get details of a person at a specific index
      
      function getPerson(uint index) public view returns (string memory, uint) {
          require(index < people.length, "Index out of bounds");
          return (people[index].name, people[index].age);
      }
  }
  `,
  M9 = () => {
    const e = Kp(),
      {
        showConsole: t,
        activeFile: n,
        editorContent: r,
      } = Ks((O) => O.consoleReducer),
      {
        showSideNav: i,
        fileNameArray: a,
        showCodeEditor: u,
        methodDemo: c,
      } = Ks((O) => O.fileExpoReducer),
      [f, d] = x.useState("vs-dark");
    Te.useEffect(() => {
      const O = (T) => {
        (T.ctrlKey || T.metaKey) && T.key.toLowerCase() === "c" && e(t2(!t));
      };
      return (
        window.addEventListener("keydown", O),
        () => {
          window.removeEventListener("keydown", O);
        }
      );
    });
    const h = () => {
        e(t2(!t));
      },
      v = (O) => {
        e(nk(O));
      },
      g = () => {
        d(f === "light" ? "vs-dark" : "light");
      },
      b = (O) => {
        O.ctrlKey && O.keyCode === 83 && O.preventDefault();
      };
    x.useEffect(
      () => (
        document.addEventListener("keydown", b),
        () => {
          document.addEventListener("keydown", b);
        }
      ),
      [a]
    );
    const E = (O) => {
      const T = (C) => C.trim().replace(/^ {4}/gm, "");
      console.log(n), e(Wf({ ...r, [n]: T(O) }));
    };
    return (
      x.useEffect(() => {
        c === "If Else"
          ? (console.log("hello"),
            e(Wf({ ...r, [n]: R9(a[n].slice(0, a[n].lastIndexOf(".sol"))) })))
          : c === "Loop"
          ? (console.log("hello"),
            e(Wf({ ...r, [n]: I9(a[n].slice(0, a[n].lastIndexOf(".sol"))) })))
          : c === "Classes" &&
            (console.log("hello"),
            e(Wf({ ...r, [n]: $9(a[n].slice(0, a[n].lastIndexOf(".sol"))) })));
      }, [c]),
      console.log(c),
      ee.jsxs("div", {
        style: {
          flex: i ? 0.8 : 0.95,
          position: "relative",
          height: "100%",
          width: "100%",
        },
        children: [
          a.length > 0 &&
            ee.jsxs("div", {
              style: {
                height: 40,
                background: f === "vs-dark" ? "#1e1e1e" : "white",
                display: "flex",
                alignItems: "center",
              },
              children: [
                ee.jsx("div", {
                  style: { flex: 0.9, marginLeft: 15, display: "flex" },
                  children: a.map((O, T) =>
                    ee.jsxs(
                      "div",
                      {
                        style: {
                          width: 100,
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "2px 10px",
                          border: 0.5,
                          borderStyle: "solid",
                          borderColor: T === n ? "yellow" : "transparent",
                          cursor: "pointer",
                          boxShadow:
                            f === "vs-dark"
                              ? "green 0px 0px 8px"
                              : "grey 0px 0px 8px",
                          borderRadius: 20,
                          marginInline: 10,
                        },
                        children: [
                          ee.jsx("div", {
                            onClick: () => v(T),
                            style: { flex: 0.95 },
                            children: ee.jsx("span", {
                              style: {
                                fontSize: 12,
                                color: f === "vs-dark" ? "white" : "black",
                              },
                              children: O,
                            }),
                          }),
                          ee.jsx(DM, {
                            style: {
                              fontSize: 12,
                              color: f === "vs-dark" ? "white" : "black",
                            },
                          }),
                        ],
                      },
                      T
                    )
                  ),
                }),
                ee.jsx("div", {
                  style: {
                    flex: 0.1,
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: 15,
                    alignItems: "center",
                  },
                  children: ee.jsx(PM, {
                    onClick: g,
                    style: { color: f === "light" ? "black" : "white" },
                  }),
                }),
              ],
            }),
          a.length === 0 &&
            ee.jsx("div", {
              style: {
                height: t ? "60%" : "calc(100% - 50px)",
                background: "#191d1f",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              children: ee.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: "10%",
                },
                children: [
                  ee.jsx("img", {
                    src: rk,
                    alt: "solidity",
                    style: { width: 124, height: 124 },
                  }),
                  ee.jsx("p", {
                    style: { color: "white" },
                    children: "Learn Solidity",
                  }),
                  ee.jsxs("div", {
                    style: { width: "500px", marginTop: 25 },
                    children: [
                      ee.jsxs("div", {
                        style: { display: "flex" },
                        children: [
                          ee.jsx(wE, { style: { color: "white" } }),
                          ee.jsx("p", {
                            style: { color: "white", marginInline: "10px" },
                            children: ": ---> New File",
                          }),
                        ],
                      }),
                      ee.jsxs("div", {
                        style: { display: "flex" },
                        children: [
                          ee.jsx("p", {
                            style: { color: "white" },
                            children: "Ctrl + Enter file",
                          }),
                          ee.jsx("p", {
                            style: { color: "white", marginInline: "10px" },
                            children: ": ---> Create a file",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          a.length > 0 &&
            n !== null &&
            !u &&
            ee.jsx(N7, {
              height: t ? "60%)" : "calc(100% - 49px)",
              theme: f,
              language: "solidity",
              value: r[n],
              onChange: E,
              options: {
                suggestOnTriggerCharacters: !0,
                copyWithSyntaxHighlighting: !0,
              },
            }),
          a.length > 0 && u && ee.jsx(A9, {}),
          ee.jsx("div", {
            style: {
              background: "#30322f",
              width: "100%",
              height: t ? "40%" : "20px",
              position: "absolute",
              bottom: 5,
            },
            children: ee.jsxs("div", {
              style: { width: "100%", padding: 0, height: 20 },
              children: [
                t &&
                  ee.jsx($a, {
                    title: "Hide Terminal",
                    children: ee.jsx(Mg, {
                      onClick: h,
                      style: { marginInline: 10, color: "yellow" },
                      size: 10,
                      color: "red",
                    }),
                  }),
                !t &&
                  ee.jsx($a, {
                    title: "Show Terminal",
                    children: ee.jsx(Mg, {
                      onClick: h,
                      style: { marginInline: 10, color: "yellow" },
                      size: 10,
                      color: "red",
                    }),
                  }),
              ],
            }),
          }),
        ],
      })
    );
  };
function r2(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? r2(Object(n), !0).forEach(function (r) {
          Gt(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : r2(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ip(e) {
  "@babel/helpers - typeof";
  return (
    (ip =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ip(e)
  );
}
function L9(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function i2(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function N9(e, t, n) {
  return (
    t && i2(e.prototype, t),
    n && i2(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Gt(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Jy(e, t) {
  return j9(e) || F9(e, t) || ak(e, t) || W9();
}
function xc(e) {
  return z9(e) || D9(e) || ak(e) || B9();
}
function z9(e) {
  if (Array.isArray(e)) return s0(e);
}
function j9(e) {
  if (Array.isArray(e)) return e;
}
function D9(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function F9(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      a = !1,
      u,
      c;
    try {
      for (
        n = n.call(e);
        !(i = (u = n.next()).done) && (r.push(u.value), !(t && r.length === t));
        i = !0
      );
    } catch (f) {
      (a = !0), (c = f);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a) throw c;
      }
    }
    return r;
  }
}
function ak(e, t) {
  if (e) {
    if (typeof e == "string") return s0(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return s0(e, t);
  }
}
function s0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function B9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function W9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var o2 = function () {},
  e1 = {},
  lk = {},
  uk = null,
  sk = { mark: o2, measure: o2 };
try {
  typeof window < "u" && (e1 = window),
    typeof document < "u" && (lk = document),
    typeof MutationObserver < "u" && (uk = MutationObserver),
    typeof performance < "u" && (sk = performance);
} catch {}
var H9 = e1.navigator || {},
  a2 = H9.userAgent,
  l2 = a2 === void 0 ? "" : a2,
  ta = e1,
  ct = lk,
  u2 = uk,
  Hf = sk;
ta.document;
var ao =
    !!ct.documentElement &&
    !!ct.head &&
    typeof ct.addEventListener == "function" &&
    typeof ct.createElement == "function",
  ck = ~l2.indexOf("MSIE") || ~l2.indexOf("Trident/"),
  Uf,
  Vf,
  Gf,
  Kf,
  Yf,
  no = "___FONT_AWESOME___",
  c0 = 16,
  fk = "fa",
  dk = "svg-inline--fa",
  Xa = "data-fa-i2svg",
  f0 = "data-fa-pseudo-element",
  U9 = "data-fa-pseudo-element-pending",
  t1 = "data-prefix",
  n1 = "data-icon",
  s2 = "fontawesome-i2svg",
  V9 = "async",
  G9 = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  pk = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  ut = "classic",
  Tt = "sharp",
  r1 = [ut, Tt];
function Cc(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[ut];
    },
  });
}
var rc = Cc(
    ((Uf = {}),
    Gt(Uf, ut, {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      "fa-kit": "kit",
    }),
    Gt(Uf, Tt, {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
    }),
    Uf)
  ),
  ic = Cc(
    ((Vf = {}),
    Gt(Vf, ut, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak",
    }),
    Gt(Vf, Tt, { solid: "fass", regular: "fasr", light: "fasl" }),
    Vf)
  ),
  oc = Cc(
    ((Gf = {}),
    Gt(Gf, ut, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    }),
    Gt(Gf, Tt, { fass: "fa-solid", fasr: "fa-regular", fasl: "fa-light" }),
    Gf)
  ),
  K9 = Cc(
    ((Kf = {}),
    Gt(Kf, ut, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    }),
    Gt(Kf, Tt, {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
    }),
    Kf)
  ),
  Y9 = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,
  hk = "fa-layers-text",
  X9 =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  Q9 = Cc(
    ((Yf = {}),
    Gt(Yf, ut, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    }),
    Gt(Yf, Tt, { 900: "fass", 400: "fasr", 300: "fasl" }),
    Yf)
  ),
  vk = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  q9 = vk.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  Z9 = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  Ma = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  ac = new Set();
Object.keys(ic[ut]).map(ac.add.bind(ac));
Object.keys(ic[Tt]).map(ac.add.bind(ac));
var J9 = []
    .concat(r1, xc(ac), [
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "beat",
      "border",
      "fade",
      "beat-fade",
      "bounce",
      "flip-both",
      "flip-horizontal",
      "flip-vertical",
      "flip",
      "fw",
      "inverse",
      "layers-counter",
      "layers-text",
      "layers",
      "li",
      "pull-left",
      "pull-right",
      "pulse",
      "rotate-180",
      "rotate-270",
      "rotate-90",
      "rotate-by",
      "shake",
      "spin-pulse",
      "spin-reverse",
      "spin",
      "stack-1x",
      "stack-2x",
      "stack",
      "ul",
      Ma.GROUP,
      Ma.SWAP_OPACITY,
      Ma.PRIMARY,
      Ma.SECONDARY,
    ])
    .concat(
      vk.map(function (e) {
        return "".concat(e, "x");
      })
    )
    .concat(
      q9.map(function (e) {
        return "w-".concat(e);
      })
    ),
  Ps = ta.FontAwesomeConfig || {};
function eF(e) {
  var t = ct.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function tF(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (ct && typeof ct.querySelector == "function") {
  var nF = [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ];
  nF.forEach(function (e) {
    var t = Jy(e, 2),
      n = t[0],
      r = t[1],
      i = tF(eF(n));
    i != null && (Ps[r] = i);
  });
}
var mk = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: fk,
  replacementClass: dk,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
Ps.familyPrefix && (Ps.cssPrefix = Ps.familyPrefix);
var Su = ie(ie({}, mk), Ps);
Su.autoReplaceSvg || (Su.observeMutations = !1);
var fe = {};
Object.keys(mk).forEach(function (e) {
  Object.defineProperty(fe, e, {
    enumerable: !0,
    set: function (n) {
      (Su[e] = n),
        Ts.forEach(function (r) {
          return r(fe);
        });
    },
    get: function () {
      return Su[e];
    },
  });
});
Object.defineProperty(fe, "familyPrefix", {
  enumerable: !0,
  set: function (t) {
    (Su.cssPrefix = t),
      Ts.forEach(function (n) {
        return n(fe);
      });
  },
  get: function () {
    return Su.cssPrefix;
  },
});
ta.FontAwesomeConfig = fe;
var Ts = [];
function rF(e) {
  return (
    Ts.push(e),
    function () {
      Ts.splice(Ts.indexOf(e), 1);
    }
  );
}
var Po = c0,
  hi = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function iF(e) {
  if (!(!e || !ao)) {
    var t = ct.createElement("style");
    t.setAttribute("type", "text/css"), (t.innerHTML = e);
    for (var n = ct.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var a = n[i],
        u = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(u) > -1 && (r = a);
    }
    return ct.head.insertBefore(t, r), e;
  }
}
var oF = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function lc() {
  for (var e = 12, t = ""; e-- > 0; ) t += oF[(Math.random() * 62) | 0];
  return t;
}
function ku(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function i1(e) {
  return e.classList
    ? ku(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter(function (t) {
        return t;
      });
}
function gk(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function aF(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + "".concat(n, '="').concat(gk(e[n]), '" ');
    }, "")
    .trim();
}
function mh(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function o1(e) {
  return (
    e.size !== hi.size ||
    e.x !== hi.x ||
    e.y !== hi.y ||
    e.rotate !== hi.rotate ||
    e.flipX ||
    e.flipY
  );
}
function lF(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    i = { transform: "translate(".concat(n / 2, " 256)") },
    a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    u = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    c = "rotate(".concat(t.rotate, " 0 0)"),
    f = { transform: "".concat(a, " ").concat(u, " ").concat(c) },
    d = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: i, inner: f, path: d };
}
function uF(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? c0 : n,
    i = e.height,
    a = i === void 0 ? c0 : i,
    u = e.startCentered,
    c = u === void 0 ? !1 : u,
    f = "";
  return (
    c && ck
      ? (f += "translate("
          .concat(t.x / Po - r / 2, "em, ")
          .concat(t.y / Po - a / 2, "em) "))
      : c
      ? (f += "translate(calc(-50% + "
          .concat(t.x / Po, "em), calc(-50% + ")
          .concat(t.y / Po, "em)) "))
      : (f += "translate(".concat(t.x / Po, "em, ").concat(t.y / Po, "em) ")),
    (f += "scale("
      .concat((t.size / Po) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / Po) * (t.flipY ? -1 : 1), ") ")),
    (f += "rotate(".concat(t.rotate, "deg) ")),
    f
  );
}
var sF = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function yk() {
  var e = fk,
    t = dk,
    n = fe.cssPrefix,
    r = fe.replacementClass,
    i = sF;
  if (n !== e || r !== t) {
    var a = new RegExp("\\.".concat(e, "\\-"), "g"),
      u = new RegExp("\\--".concat(e, "\\-"), "g"),
      c = new RegExp("\\.".concat(t), "g");
    i = i
      .replace(a, ".".concat(n, "-"))
      .replace(u, "--".concat(n, "-"))
      .replace(c, ".".concat(r));
  }
  return i;
}
var c2 = !1;
function Tm() {
  fe.autoAddCss && !c2 && (iF(yk()), (c2 = !0));
}
var cF = {
    mixout: function () {
      return { dom: { css: yk, insertCss: Tm } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          Tm();
        },
        beforeI2svg: function () {
          Tm();
        },
      };
    },
  },
  ro = ta || {};
ro[no] || (ro[no] = {});
ro[no].styles || (ro[no].styles = {});
ro[no].hooks || (ro[no].hooks = {});
ro[no].shims || (ro[no].shims = []);
var Gr = ro[no],
  bk = [],
  fF = function e() {
    ct.removeEventListener("DOMContentLoaded", e),
      (op = 1),
      bk.map(function (t) {
        return t();
      });
  },
  op = !1;
ao &&
  ((op = (ct.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    ct.readyState
  )),
  op || ct.addEventListener("DOMContentLoaded", fF));
function dF(e) {
  ao && (op ? setTimeout(e, 0) : bk.push(e));
}
function _c(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    i = e.children,
    a = i === void 0 ? [] : i;
  return typeof e == "string"
    ? gk(e)
    : "<"
        .concat(t, " ")
        .concat(aF(r), ">")
        .concat(a.map(_c).join(""), "</")
        .concat(t, ">");
}
function f2(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var pF = function (t, n) {
    return function (r, i, a, u) {
      return t.call(n, r, i, a, u);
    };
  },
  Am = function (t, n, r, i) {
    var a = Object.keys(t),
      u = a.length,
      c = i !== void 0 ? pF(n, i) : n,
      f,
      d,
      h;
    for (
      r === void 0 ? ((f = 1), (h = t[a[0]])) : ((f = 0), (h = r));
      f < u;
      f++
    )
      (d = a[f]), (h = c(h, t[d], d, t));
    return h;
  };
function hF(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      var a = e.charCodeAt(n++);
      (a & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (a & 1023) + 65536)
        : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
function d0(e) {
  var t = hF(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function vF(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    i;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function d2(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      i = !!r.icon;
    return i ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function p0(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    i = r === void 0 ? !1 : r,
    a = d2(t);
  typeof Gr.hooks.addPack == "function" && !i
    ? Gr.hooks.addPack(e, d2(t))
    : (Gr.styles[e] = ie(ie({}, Gr.styles[e] || {}), a)),
    e === "fas" && p0("fa", t);
}
var Xf,
  Qf,
  qf,
  Ql = Gr.styles,
  mF = Gr.shims,
  gF =
    ((Xf = {}),
    Gt(Xf, ut, Object.values(oc[ut])),
    Gt(Xf, Tt, Object.values(oc[Tt])),
    Xf),
  a1 = null,
  wk = {},
  Sk = {},
  xk = {},
  Ck = {},
  _k = {},
  yF =
    ((Qf = {}),
    Gt(Qf, ut, Object.keys(rc[ut])),
    Gt(Qf, Tt, Object.keys(rc[Tt])),
    Qf);
function bF(e) {
  return ~J9.indexOf(e);
}
function wF(e, t) {
  var n = t.split("-"),
    r = n[0],
    i = n.slice(1).join("-");
  return r === e && i !== "" && !bF(i) ? i : null;
}
var Ek = function () {
  var t = function (a) {
    return Am(
      Ql,
      function (u, c, f) {
        return (u[f] = Am(c, a, {})), u;
      },
      {}
    );
  };
  (wk = t(function (i, a, u) {
    if ((a[3] && (i[a[3]] = u), a[2])) {
      var c = a[2].filter(function (f) {
        return typeof f == "number";
      });
      c.forEach(function (f) {
        i[f.toString(16)] = u;
      });
    }
    return i;
  })),
    (Sk = t(function (i, a, u) {
      if (((i[u] = u), a[2])) {
        var c = a[2].filter(function (f) {
          return typeof f == "string";
        });
        c.forEach(function (f) {
          i[f] = u;
        });
      }
      return i;
    })),
    (_k = t(function (i, a, u) {
      var c = a[2];
      return (
        (i[u] = u),
        c.forEach(function (f) {
          i[f] = u;
        }),
        i
      );
    }));
  var n = "far" in Ql || fe.autoFetchSvg,
    r = Am(
      mF,
      function (i, a) {
        var u = a[0],
          c = a[1],
          f = a[2];
        return (
          c === "far" && !n && (c = "fas"),
          typeof u == "string" && (i.names[u] = { prefix: c, iconName: f }),
          typeof u == "number" &&
            (i.unicodes[u.toString(16)] = { prefix: c, iconName: f }),
          i
        );
      },
      { names: {}, unicodes: {} }
    );
  (xk = r.names),
    (Ck = r.unicodes),
    (a1 = gh(fe.styleDefault, { family: fe.familyDefault }));
};
rF(function (e) {
  a1 = gh(e.styleDefault, { family: fe.familyDefault });
});
Ek();
function l1(e, t) {
  return (wk[e] || {})[t];
}
function SF(e, t) {
  return (Sk[e] || {})[t];
}
function La(e, t) {
  return (_k[e] || {})[t];
}
function Ok(e) {
  return xk[e] || { prefix: null, iconName: null };
}
function xF(e) {
  var t = Ck[e],
    n = l1("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function na() {
  return a1;
}
var u1 = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function gh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? ut : n,
    i = rc[r][e],
    a = ic[r][e] || ic[r][i],
    u = e in Gr.styles ? e : null;
  return a || u || null;
}
var p2 =
  ((qf = {}),
  Gt(qf, ut, Object.keys(oc[ut])),
  Gt(qf, Tt, Object.keys(oc[Tt])),
  qf);
function yh(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    i = r === void 0 ? !1 : r,
    a =
      ((t = {}),
      Gt(t, ut, "".concat(fe.cssPrefix, "-").concat(ut)),
      Gt(t, Tt, "".concat(fe.cssPrefix, "-").concat(Tt)),
      t),
    u = null,
    c = ut;
  (e.includes(a[ut]) ||
    e.some(function (d) {
      return p2[ut].includes(d);
    })) &&
    (c = ut),
    (e.includes(a[Tt]) ||
      e.some(function (d) {
        return p2[Tt].includes(d);
      })) &&
      (c = Tt);
  var f = e.reduce(function (d, h) {
    var v = wF(fe.cssPrefix, h);
    if (
      (Ql[h]
        ? ((h = gF[c].includes(h) ? K9[c][h] : h), (u = h), (d.prefix = h))
        : yF[c].indexOf(h) > -1
        ? ((u = h), (d.prefix = gh(h, { family: c })))
        : v
        ? (d.iconName = v)
        : h !== fe.replacementClass &&
          h !== a[ut] &&
          h !== a[Tt] &&
          d.rest.push(h),
      !i && d.prefix && d.iconName)
    ) {
      var g = u === "fa" ? Ok(d.iconName) : {},
        b = La(d.prefix, d.iconName);
      g.prefix && (u = null),
        (d.iconName = g.iconName || b || d.iconName),
        (d.prefix = g.prefix || d.prefix),
        d.prefix === "far" &&
          !Ql.far &&
          Ql.fas &&
          !fe.autoFetchSvg &&
          (d.prefix = "fas");
    }
    return d;
  }, u1());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (f.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (f.prefix = "fad"),
    !f.prefix &&
      c === Tt &&
      (Ql.fass || fe.autoFetchSvg) &&
      ((f.prefix = "fass"),
      (f.iconName = La(f.prefix, f.iconName) || f.iconName)),
    (f.prefix === "fa" || u === "fa") && (f.prefix = na() || "fas"),
    f
  );
}
var CF = (function () {
    function e() {
      L9(this, e), (this.definitions = {});
    }
    return (
      N9(e, [
        {
          key: "add",
          value: function () {
            for (
              var n = this, r = arguments.length, i = new Array(r), a = 0;
              a < r;
              a++
            )
              i[a] = arguments[a];
            var u = i.reduce(this._pullDefinitions, {});
            Object.keys(u).forEach(function (c) {
              (n.definitions[c] = ie(ie({}, n.definitions[c] || {}), u[c])),
                p0(c, u[c]);
              var f = oc[ut][c];
              f && p0(f, u[c]), Ek();
            });
          },
        },
        {
          key: "reset",
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: "_pullDefinitions",
          value: function (n, r) {
            var i = r.prefix && r.iconName && r.icon ? { 0: r } : r;
            return (
              Object.keys(i).map(function (a) {
                var u = i[a],
                  c = u.prefix,
                  f = u.iconName,
                  d = u.icon,
                  h = d[2];
                n[c] || (n[c] = {}),
                  h.length > 0 &&
                    h.forEach(function (v) {
                      typeof v == "string" && (n[c][v] = d);
                    }),
                  (n[c][f] = d);
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  h2 = [],
  ql = {},
  uu = {},
  _F = Object.keys(uu);
function EF(e, t) {
  var n = t.mixoutsTo;
  return (
    (h2 = e),
    (ql = {}),
    Object.keys(uu).forEach(function (r) {
      _F.indexOf(r) === -1 && delete uu[r];
    }),
    h2.forEach(function (r) {
      var i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach(function (u) {
          typeof i[u] == "function" && (n[u] = i[u]),
            ip(i[u]) === "object" &&
              Object.keys(i[u]).forEach(function (c) {
                n[u] || (n[u] = {}), (n[u][c] = i[u][c]);
              });
        }),
        r.hooks)
      ) {
        var a = r.hooks();
        Object.keys(a).forEach(function (u) {
          ql[u] || (ql[u] = []), ql[u].push(a[u]);
        });
      }
      r.provides && r.provides(uu);
    }),
    n
  );
}
function h0(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
    i < n;
    i++
  )
    r[i - 2] = arguments[i];
  var a = ql[e] || [];
  return (
    a.forEach(function (u) {
      t = u.apply(null, [t].concat(r));
    }),
    t
  );
}
function Qa(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = ql[e] || [];
  i.forEach(function (a) {
    a.apply(null, n);
  });
}
function io() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return uu[e] ? uu[e].apply(null, t) : void 0;
}
function v0(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName,
    n = e.prefix || na();
  if (t)
    return (t = La(n, t) || t), f2(kk.definitions, n, t) || f2(Gr.styles, n, t);
}
var kk = new CF(),
  OF = function () {
    (fe.autoReplaceSvg = !1), (fe.observeMutations = !1), Qa("noAuto");
  },
  kF = {
    i2svg: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return ao
        ? (Qa("beforeI2svg", t), io("pseudoElements2svg", t), io("i2svg", t))
        : Promise.reject("Operation requires a DOM of some kind.");
    },
    watch: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      fe.autoReplaceSvg === !1 && (fe.autoReplaceSvg = !0),
        (fe.observeMutations = !0),
        dF(function () {
          TF({ autoReplaceSvgRoot: n }), Qa("watch", t);
        });
    },
  },
  PF = {
    icon: function (t) {
      if (t === null) return null;
      if (ip(t) === "object" && t.prefix && t.iconName)
        return {
          prefix: t.prefix,
          iconName: La(t.prefix, t.iconName) || t.iconName,
        };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1],
          r = gh(t[0]);
        return { prefix: r, iconName: La(r, n) || n };
      }
      if (
        typeof t == "string" &&
        (t.indexOf("".concat(fe.cssPrefix, "-")) > -1 || t.match(Y9))
      ) {
        var i = yh(t.split(" "), { skipLookups: !0 });
        return {
          prefix: i.prefix || na(),
          iconName: La(i.prefix, i.iconName) || i.iconName,
        };
      }
      if (typeof t == "string") {
        var a = na();
        return { prefix: a, iconName: La(a, t) || t };
      }
    },
  },
  lr = {
    noAuto: OF,
    config: fe,
    dom: kF,
    parse: PF,
    library: kk,
    findIconDefinition: v0,
    toHtml: _c,
  },
  TF = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? ct : n;
    (Object.keys(Gr.styles).length > 0 || fe.autoFetchSvg) &&
      ao &&
      fe.autoReplaceSvg &&
      lr.dom.i2svg({ node: r });
  };
function bh(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map(function (r) {
          return _c(r);
        });
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (ao) {
          var r = ct.createElement("div");
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function AF(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    i = e.attributes,
    a = e.styles,
    u = e.transform;
  if (o1(u) && n.found && !r.found) {
    var c = n.width,
      f = n.height,
      d = { x: c / f / 2, y: 0.5 };
    i.style = mh(
      ie(
        ie({}, a),
        {},
        {
          "transform-origin": ""
            .concat(d.x + u.x / 16, "em ")
            .concat(d.y + u.y / 16, "em"),
        }
      )
    );
  }
  return [{ tag: "svg", attributes: i, children: t }];
}
function RF(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    i = e.attributes,
    a = e.symbol,
    u = a === !0 ? "".concat(t, "-").concat(fe.cssPrefix, "-").concat(n) : a;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        {
          tag: "symbol",
          attributes: ie(ie({}, i), {}, { id: u }),
          children: r,
        },
      ],
    },
  ];
}
function s1(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    i = e.prefix,
    a = e.iconName,
    u = e.transform,
    c = e.symbol,
    f = e.title,
    d = e.maskId,
    h = e.titleId,
    v = e.extra,
    g = e.watchable,
    b = g === void 0 ? !1 : g,
    E = r.found ? r : n,
    O = E.width,
    T = E.height,
    C = i === "fak",
    y = [fe.replacementClass, a ? "".concat(fe.cssPrefix, "-").concat(a) : ""]
      .filter(function (G) {
        return v.classes.indexOf(G) === -1;
      })
      .filter(function (G) {
        return G !== "" || !!G;
      })
      .concat(v.classes)
      .join(" "),
    S = {
      children: [],
      attributes: ie(
        ie({}, v.attributes),
        {},
        {
          "data-prefix": i,
          "data-icon": a,
          class: y,
          role: v.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(O, " ").concat(T),
        }
      ),
    },
    k =
      C && !~v.classes.indexOf("fa-fw")
        ? { width: "".concat((O / T) * 16 * 0.0625, "em") }
        : {};
  b && (S.attributes[Xa] = ""),
    f &&
      (S.children.push({
        tag: "title",
        attributes: {
          id: S.attributes["aria-labelledby"] || "title-".concat(h || lc()),
        },
        children: [f],
      }),
      delete S.attributes.title);
  var $ = ie(
      ie({}, S),
      {},
      {
        prefix: i,
        iconName: a,
        main: n,
        mask: r,
        maskId: d,
        transform: u,
        symbol: c,
        styles: ie(ie({}, k), v.styles),
      }
    ),
    L =
      r.found && n.found
        ? io("generateAbstractMask", $) || { children: [], attributes: {} }
        : io("generateAbstractIcon", $) || { children: [], attributes: {} },
    A = L.children,
    U = L.attributes;
  return ($.children = A), ($.attributes = U), c ? RF($) : AF($);
}
function v2(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    i = e.transform,
    a = e.title,
    u = e.extra,
    c = e.watchable,
    f = c === void 0 ? !1 : c,
    d = ie(
      ie(ie({}, u.attributes), a ? { title: a } : {}),
      {},
      { class: u.classes.join(" ") }
    );
  f && (d[Xa] = "");
  var h = ie({}, u.styles);
  o1(i) &&
    ((h.transform = uF({
      transform: i,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (h["-webkit-transform"] = h.transform));
  var v = mh(h);
  v.length > 0 && (d.style = v);
  var g = [];
  return (
    g.push({ tag: "span", attributes: d, children: [t] }),
    a &&
      g.push({ tag: "span", attributes: { class: "sr-only" }, children: [a] }),
    g
  );
}
function IF(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    i = ie(
      ie(ie({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(" ") }
    ),
    a = mh(r.styles);
  a.length > 0 && (i.style = a);
  var u = [];
  return (
    u.push({ tag: "span", attributes: i, children: [t] }),
    n &&
      u.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    u
  );
}
var Rm = Gr.styles;
function m0(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    i = Jy(r, 1),
    a = i[0],
    u = null;
  return (
    Array.isArray(a)
      ? (u = {
          tag: "g",
          attributes: { class: "".concat(fe.cssPrefix, "-").concat(Ma.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(fe.cssPrefix, "-").concat(Ma.SECONDARY),
                fill: "currentColor",
                d: a[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(fe.cssPrefix, "-").concat(Ma.PRIMARY),
                fill: "currentColor",
                d: a[1],
              },
            },
          ],
        })
      : (u = { tag: "path", attributes: { fill: "currentColor", d: a } }),
    { found: !0, width: t, height: n, icon: u }
  );
}
var $F = { found: !1, width: 512, height: 512 };
function MF(e, t) {
  !pk &&
    !fe.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function g0(e, t) {
  var n = t;
  return (
    t === "fa" && fe.styleDefault !== null && (t = na()),
    new Promise(function (r, i) {
      if ((io("missingIconAbstract"), n === "fa")) {
        var a = Ok(e) || {};
        (e = a.iconName || e), (t = a.prefix || t);
      }
      if (e && t && Rm[t] && Rm[t][e]) {
        var u = Rm[t][e];
        return r(m0(u));
      }
      MF(e, t),
        r(
          ie(
            ie({}, $F),
            {},
            {
              icon:
                fe.showMissingIcons && e ? io("missingIconAbstract") || {} : {},
            }
          )
        );
    })
  );
}
var m2 = function () {},
  y0 =
    fe.measurePerformance && Hf && Hf.mark && Hf.measure
      ? Hf
      : { mark: m2, measure: m2 },
  vs = 'FA "6.4.2"',
  LF = function (t) {
    return (
      y0.mark("".concat(vs, " ").concat(t, " begins")),
      function () {
        return Pk(t);
      }
    );
  },
  Pk = function (t) {
    y0.mark("".concat(vs, " ").concat(t, " ends")),
      y0.measure(
        "".concat(vs, " ").concat(t),
        "".concat(vs, " ").concat(t, " begins"),
        "".concat(vs, " ").concat(t, " ends")
      );
  },
  c1 = { begin: LF, end: Pk },
  md = function () {};
function g2(e) {
  var t = e.getAttribute ? e.getAttribute(Xa) : null;
  return typeof t == "string";
}
function NF(e) {
  var t = e.getAttribute ? e.getAttribute(t1) : null,
    n = e.getAttribute ? e.getAttribute(n1) : null;
  return t && n;
}
function zF(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(fe.replacementClass)
  );
}
function jF() {
  if (fe.autoReplaceSvg === !0) return gd.replace;
  var e = gd[fe.autoReplaceSvg];
  return e || gd.replace;
}
function DF(e) {
  return ct.createElementNS("http://www.w3.org/2000/svg", e);
}
function FF(e) {
  return ct.createElement(e);
}
function Tk(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === "svg" ? DF : FF) : n;
  if (typeof e == "string") return ct.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (u) {
    i.setAttribute(u, e.attributes[u]);
  });
  var a = e.children || [];
  return (
    a.forEach(function (u) {
      i.appendChild(Tk(u, { ceFn: r }));
    }),
    i
  );
}
function BF(e) {
  var t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
var gd = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (i) {
          n.parentNode.insertBefore(Tk(i), n);
        }),
        n.getAttribute(Xa) === null && fe.keepOriginalSource)
      ) {
        var r = ct.createComment(BF(n));
        n.parentNode.replaceChild(r, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      r = t[1];
    if (~i1(n).indexOf(fe.replacementClass)) return gd.replace(t);
    var i = new RegExp("".concat(fe.cssPrefix, "-.*"));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var a = r[0].attributes.class.split(" ").reduce(
        function (c, f) {
          return (
            f === fe.replacementClass || f.match(i)
              ? c.toSvg.push(f)
              : c.toNode.push(f),
            c
          );
        },
        { toNode: [], toSvg: [] }
      );
      (r[0].attributes.class = a.toSvg.join(" ")),
        a.toNode.length === 0
          ? n.removeAttribute("class")
          : n.setAttribute("class", a.toNode.join(" "));
    }
    var u = r.map(function (c) {
      return _c(c);
    }).join(`
`);
    n.setAttribute(Xa, ""), (n.innerHTML = u);
  },
};
function y2(e) {
  e();
}
function Ak(e, t) {
  var n = typeof t == "function" ? t : md;
  if (e.length === 0) n();
  else {
    var r = y2;
    fe.mutateApproach === V9 && (r = ta.requestAnimationFrame || y2),
      r(function () {
        var i = jF(),
          a = c1.begin("mutate");
        e.map(i), a(), n();
      });
  }
}
var f1 = !1;
function Rk() {
  f1 = !0;
}
function b0() {
  f1 = !1;
}
var ap = null;
function b2(e) {
  if (u2 && fe.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? md : t,
      r = e.nodeCallback,
      i = r === void 0 ? md : r,
      a = e.pseudoElementsCallback,
      u = a === void 0 ? md : a,
      c = e.observeMutationsRoot,
      f = c === void 0 ? ct : c;
    (ap = new u2(function (d) {
      if (!f1) {
        var h = na();
        ku(d).forEach(function (v) {
          if (
            (v.type === "childList" &&
              v.addedNodes.length > 0 &&
              !g2(v.addedNodes[0]) &&
              (fe.searchPseudoElements && u(v.target), n(v.target)),
            v.type === "attributes" &&
              v.target.parentNode &&
              fe.searchPseudoElements &&
              u(v.target.parentNode),
            v.type === "attributes" &&
              g2(v.target) &&
              ~Z9.indexOf(v.attributeName))
          )
            if (v.attributeName === "class" && NF(v.target)) {
              var g = yh(i1(v.target)),
                b = g.prefix,
                E = g.iconName;
              v.target.setAttribute(t1, b || h),
                E && v.target.setAttribute(n1, E);
            } else zF(v.target) && i(v.target);
        });
      }
    })),
      ao &&
        ap.observe(f, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function WF() {
  ap && ap.disconnect();
}
function HF(e) {
  var t = e.getAttribute("style"),
    n = [];
  return (
    t &&
      (n = t.split(";").reduce(function (r, i) {
        var a = i.split(":"),
          u = a[0],
          c = a.slice(1);
        return u && c.length > 0 && (r[u] = c.join(":").trim()), r;
      }, {})),
    n
  );
}
function UF(e) {
  var t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "",
    i = yh(i1(e));
  return (
    i.prefix || (i.prefix = na()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName =
          SF(i.prefix, e.innerText) || l1(i.prefix, d0(e.innerText))),
      !i.iconName &&
        fe.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function VF(e) {
  var t = ku(e.attributes).reduce(function (i, a) {
      return (
        i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i
      );
    }, {}),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return (
    fe.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(fe.replacementClass, "-title-")
            .concat(r || lc()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function GF() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: hi,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function w2(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = UF(e),
    r = n.iconName,
    i = n.prefix,
    a = n.rest,
    u = VF(e),
    c = h0("parseNodeAttributes", {}, e),
    f = t.styleParser ? HF(e) : [];
  return ie(
    {
      iconName: r,
      title: e.getAttribute("title"),
      titleId: e.getAttribute("data-fa-title-id"),
      prefix: i,
      transform: hi,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: a, styles: f, attributes: u },
    },
    c
  );
}
var KF = Gr.styles;
function Ik(e) {
  var t = fe.autoReplaceSvg === "nest" ? w2(e, { styleParser: !1 }) : w2(e);
  return ~t.extra.classes.indexOf(hk)
    ? io("generateLayersText", e, t)
    : io("generateSvgReplacementMutation", e, t);
}
var ra = new Set();
r1.map(function (e) {
  ra.add("fa-".concat(e));
});
Object.keys(rc[ut]).map(ra.add.bind(ra));
Object.keys(rc[Tt]).map(ra.add.bind(ra));
ra = xc(ra);
function S2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ao) return Promise.resolve();
  var n = ct.documentElement.classList,
    r = function (v) {
      return n.add("".concat(s2, "-").concat(v));
    },
    i = function (v) {
      return n.remove("".concat(s2, "-").concat(v));
    },
    a = fe.autoFetchSvg
      ? ra
      : r1
          .map(function (h) {
            return "fa-".concat(h);
          })
          .concat(Object.keys(KF));
  a.includes("fa") || a.push("fa");
  var u = [".".concat(hk, ":not([").concat(Xa, "])")]
    .concat(
      a.map(function (h) {
        return ".".concat(h, ":not([").concat(Xa, "])");
      })
    )
    .join(", ");
  if (u.length === 0) return Promise.resolve();
  var c = [];
  try {
    c = ku(e.querySelectorAll(u));
  } catch {}
  if (c.length > 0) r("pending"), i("complete");
  else return Promise.resolve();
  var f = c1.begin("onTree"),
    d = c.reduce(function (h, v) {
      try {
        var g = Ik(v);
        g && h.push(g);
      } catch (b) {
        pk || (b.name === "MissingIcon" && console.error(b));
      }
      return h;
    }, []);
  return new Promise(function (h, v) {
    Promise.all(d)
      .then(function (g) {
        Ak(g, function () {
          r("active"),
            r("complete"),
            i("pending"),
            typeof t == "function" && t(),
            f(),
            h();
        });
      })
      .catch(function (g) {
        f(), v(g);
      });
  });
}
function YF(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Ik(e).then(function (n) {
    n && Ak([n], t);
  });
}
function XF(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : v0(t || {}),
      i = n.mask;
    return (
      i && (i = (i || {}).icon ? i : v0(i || {})),
      e(r, ie(ie({}, n), {}, { mask: i }))
    );
  };
}
var QF = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      i = r === void 0 ? hi : r,
      a = n.symbol,
      u = a === void 0 ? !1 : a,
      c = n.mask,
      f = c === void 0 ? null : c,
      d = n.maskId,
      h = d === void 0 ? null : d,
      v = n.title,
      g = v === void 0 ? null : v,
      b = n.titleId,
      E = b === void 0 ? null : b,
      O = n.classes,
      T = O === void 0 ? [] : O,
      C = n.attributes,
      y = C === void 0 ? {} : C,
      S = n.styles,
      k = S === void 0 ? {} : S;
    if (t) {
      var $ = t.prefix,
        L = t.iconName,
        A = t.icon;
      return bh(ie({ type: "icon" }, t), function () {
        return (
          Qa("beforeDOMElementCreation", { iconDefinition: t, params: n }),
          fe.autoA11y &&
            (g
              ? (y["aria-labelledby"] = ""
                  .concat(fe.replacementClass, "-title-")
                  .concat(E || lc()))
              : ((y["aria-hidden"] = "true"), (y.focusable = "false"))),
          s1({
            icons: {
              main: m0(A),
              mask: f
                ? m0(f.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: $,
            iconName: L,
            transform: ie(ie({}, hi), i),
            symbol: u,
            title: g,
            maskId: h,
            titleId: E,
            extra: { attributes: y, styles: k, classes: T },
          })
        );
      });
    }
  },
  qF = {
    mixout: function () {
      return { icon: XF(QF) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = S2), (n.nodeCallback = YF), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? ct : r,
          a = n.callback,
          u = a === void 0 ? function () {} : a;
        return S2(i, u);
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var i = r.iconName,
            a = r.title,
            u = r.titleId,
            c = r.prefix,
            f = r.transform,
            d = r.symbol,
            h = r.mask,
            v = r.maskId,
            g = r.extra;
          return new Promise(function (b, E) {
            Promise.all([
              g0(i, c),
              h.iconName
                ? g0(h.iconName, h.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (O) {
                var T = Jy(O, 2),
                  C = T[0],
                  y = T[1];
                b([
                  n,
                  s1({
                    icons: { main: C, mask: y },
                    prefix: c,
                    iconName: i,
                    transform: f,
                    symbol: d,
                    maskId: v,
                    title: a,
                    titleId: u,
                    extra: g,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(E);
          });
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            i = n.attributes,
            a = n.main,
            u = n.transform,
            c = n.styles,
            f = mh(c);
          f.length > 0 && (i.style = f);
          var d;
          return (
            o1(u) &&
              (d = io("generateAbstractTransformGrouping", {
                main: a,
                transform: u,
                containerWidth: a.width,
                iconWidth: a.width,
              })),
            r.push(d || a.icon),
            { children: r, attributes: i }
          );
        });
    },
  },
  ZF = {
    mixout: function () {
      return {
        layer: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.classes,
            a = i === void 0 ? [] : i;
          return bh({ type: "layer" }, function () {
            Qa("beforeDOMElementCreation", { assembler: n, params: r });
            var u = [];
            return (
              n(function (c) {
                Array.isArray(c)
                  ? c.map(function (f) {
                      u = u.concat(f.abstract);
                    })
                  : (u = u.concat(c.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(fe.cssPrefix, "-layers")]
                      .concat(xc(a))
                      .join(" "),
                  },
                  children: u,
                },
              ]
            );
          });
        },
      };
    },
  },
  JF = {
    mixout: function () {
      return {
        counter: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.title,
            a = i === void 0 ? null : i,
            u = r.classes,
            c = u === void 0 ? [] : u,
            f = r.attributes,
            d = f === void 0 ? {} : f,
            h = r.styles,
            v = h === void 0 ? {} : h;
          return bh({ type: "counter", content: n }, function () {
            return (
              Qa("beforeDOMElementCreation", { content: n, params: r }),
              IF({
                content: n.toString(),
                title: a,
                extra: {
                  attributes: d,
                  styles: v,
                  classes: ["".concat(fe.cssPrefix, "-layers-counter")].concat(
                    xc(c)
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  eB = {
    mixout: function () {
      return {
        text: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.transform,
            a = i === void 0 ? hi : i,
            u = r.title,
            c = u === void 0 ? null : u,
            f = r.classes,
            d = f === void 0 ? [] : f,
            h = r.attributes,
            v = h === void 0 ? {} : h,
            g = r.styles,
            b = g === void 0 ? {} : g;
          return bh({ type: "text", content: n }, function () {
            return (
              Qa("beforeDOMElementCreation", { content: n, params: r }),
              v2({
                content: n,
                transform: ie(ie({}, hi), a),
                title: c,
                extra: {
                  attributes: v,
                  styles: b,
                  classes: ["".concat(fe.cssPrefix, "-layers-text")].concat(
                    xc(d)
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var i = r.title,
          a = r.transform,
          u = r.extra,
          c = null,
          f = null;
        if (ck) {
          var d = parseInt(getComputedStyle(n).fontSize, 10),
            h = n.getBoundingClientRect();
          (c = h.width / d), (f = h.height / d);
        }
        return (
          fe.autoA11y && !i && (u.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            n,
            v2({
              content: n.innerHTML,
              width: c,
              height: f,
              transform: a,
              title: i,
              extra: u,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  tB = new RegExp('"', "ug"),
  x2 = [1105920, 1112319];
function nB(e) {
  var t = e.replace(tB, ""),
    n = vF(t, 0),
    r = n >= x2[0] && n <= x2[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: d0(i ? t[0] : t), isSecondary: r || i };
}
function C2(e, t) {
  var n = "".concat(U9).concat(t.replace(":", "-"));
  return new Promise(function (r, i) {
    if (e.getAttribute(n) !== null) return r();
    var a = ku(e.children),
      u = a.filter(function (A) {
        return A.getAttribute(f0) === t;
      })[0],
      c = ta.getComputedStyle(e, t),
      f = c.getPropertyValue("font-family").match(X9),
      d = c.getPropertyValue("font-weight"),
      h = c.getPropertyValue("content");
    if (u && !f) return e.removeChild(u), r();
    if (f && h !== "none" && h !== "") {
      var v = c.getPropertyValue("content"),
        g = ~["Sharp"].indexOf(f[2]) ? Tt : ut,
        b = ~[
          "Solid",
          "Regular",
          "Light",
          "Thin",
          "Duotone",
          "Brands",
          "Kit",
        ].indexOf(f[2])
          ? ic[g][f[2].toLowerCase()]
          : Q9[g][d],
        E = nB(v),
        O = E.value,
        T = E.isSecondary,
        C = f[0].startsWith("FontAwesome"),
        y = l1(b, O),
        S = y;
      if (C) {
        var k = xF(O);
        k.iconName && k.prefix && ((y = k.iconName), (b = k.prefix));
      }
      if (
        y &&
        !T &&
        (!u || u.getAttribute(t1) !== b || u.getAttribute(n1) !== S)
      ) {
        e.setAttribute(n, S), u && e.removeChild(u);
        var $ = GF(),
          L = $.extra;
        (L.attributes[f0] = t),
          g0(y, b)
            .then(function (A) {
              var U = s1(
                  ie(
                    ie({}, $),
                    {},
                    {
                      icons: { main: A, mask: u1() },
                      prefix: b,
                      iconName: S,
                      extra: L,
                      watchable: !0,
                    }
                  )
                ),
                G = ct.createElementNS("http://www.w3.org/2000/svg", "svg");
              t === "::before"
                ? e.insertBefore(G, e.firstChild)
                : e.appendChild(G),
                (G.outerHTML = U.map(function (D) {
                  return _c(D);
                }).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(i);
      } else r();
    } else r();
  });
}
function rB(e) {
  return Promise.all([C2(e, "::before"), C2(e, "::after")]);
}
function iB(e) {
  return (
    e.parentNode !== document.head &&
    !~G9.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(f0) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function _2(e) {
  if (ao)
    return new Promise(function (t, n) {
      var r = ku(e.querySelectorAll("*")).filter(iB).map(rB),
        i = c1.begin("searchPseudoElements");
      Rk(),
        Promise.all(r)
          .then(function () {
            i(), b0(), t();
          })
          .catch(function () {
            i(), b0(), n();
          });
    });
}
var oB = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = _2), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? ct : r;
        fe.searchPseudoElements && _2(i);
      };
    },
  },
  E2 = !1,
  aB = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            Rk(), (E2 = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          b2(h0("mutationObserverCallbacks", {}));
        },
        noAuto: function () {
          WF();
        },
        watch: function (n) {
          var r = n.observeMutationsRoot;
          E2
            ? b0()
            : b2(h0("mutationObserverCallbacks", { observeMutationsRoot: r }));
        },
      };
    },
  },
  O2 = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return t
      .toLowerCase()
      .split(" ")
      .reduce(function (r, i) {
        var a = i.toLowerCase().split("-"),
          u = a[0],
          c = a.slice(1).join("-");
        if (u && c === "h") return (r.flipX = !0), r;
        if (u && c === "v") return (r.flipY = !0), r;
        if (((c = parseFloat(c)), isNaN(c))) return r;
        switch (u) {
          case "grow":
            r.size = r.size + c;
            break;
          case "shrink":
            r.size = r.size - c;
            break;
          case "left":
            r.x = r.x - c;
            break;
          case "right":
            r.x = r.x + c;
            break;
          case "up":
            r.y = r.y - c;
            break;
          case "down":
            r.y = r.y + c;
            break;
          case "rotate":
            r.rotate = r.rotate + c;
            break;
        }
        return r;
      }, n);
  },
  lB = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return O2(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-transform");
          return i && (n.transform = O2(i)), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          i = n.transform,
          a = n.containerWidth,
          u = n.iconWidth,
          c = { transform: "translate(".concat(a / 2, " 256)") },
          f = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "),
          d = "scale("
            .concat((i.size / 16) * (i.flipX ? -1 : 1), ", ")
            .concat((i.size / 16) * (i.flipY ? -1 : 1), ") "),
          h = "rotate(".concat(i.rotate, " 0 0)"),
          v = { transform: "".concat(f, " ").concat(d, " ").concat(h) },
          g = { transform: "translate(".concat((u / 2) * -1, " -256)") },
          b = { outer: c, inner: v, path: g };
        return {
          tag: "g",
          attributes: ie({}, b.outer),
          children: [
            {
              tag: "g",
              attributes: ie({}, b.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: ie(ie({}, r.icon.attributes), b.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  Im = { x: 0, y: 0, width: "100%", height: "100%" };
function k2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function uB(e) {
  return e.tag === "g" ? e.children : [e];
}
var sB = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-mask"),
            a = i
              ? yh(
                  i.split(" ").map(function (u) {
                    return u.trim();
                  })
                )
              : u1();
          return (
            a.prefix || (a.prefix = na()),
            (n.mask = a),
            (n.maskId = r.getAttribute("data-fa-mask-id")),
            n
          );
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          i = n.attributes,
          a = n.main,
          u = n.mask,
          c = n.maskId,
          f = n.transform,
          d = a.width,
          h = a.icon,
          v = u.width,
          g = u.icon,
          b = lF({ transform: f, containerWidth: v, iconWidth: d }),
          E = {
            tag: "rect",
            attributes: ie(ie({}, Im), {}, { fill: "white" }),
          },
          O = h.children ? { children: h.children.map(k2) } : {},
          T = {
            tag: "g",
            attributes: ie({}, b.inner),
            children: [
              k2(
                ie(
                  { tag: h.tag, attributes: ie(ie({}, h.attributes), b.path) },
                  O
                )
              ),
            ],
          },
          C = { tag: "g", attributes: ie({}, b.outer), children: [T] },
          y = "mask-".concat(c || lc()),
          S = "clip-".concat(c || lc()),
          k = {
            tag: "mask",
            attributes: ie(
              ie({}, Im),
              {},
              {
                id: y,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              }
            ),
            children: [E, C],
          },
          $ = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: S }, children: uB(g) },
              k,
            ],
          };
        return (
          r.push($, {
            tag: "rect",
            attributes: ie(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(S, ")"),
                mask: "url(#".concat(y, ")"),
              },
              Im
            ),
          }),
          { children: r, attributes: i }
        );
      };
    },
  },
  cB = {
    provides: function (t) {
      var n = !1;
      ta.matchMedia &&
        (n = ta.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (t.missingIconAbstract = function () {
          var r = [],
            i = { fill: "currentColor" },
            a = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          r.push({
            tag: "path",
            attributes: ie(
              ie({}, i),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              }
            ),
          });
          var u = ie(ie({}, a), {}, { attributeName: "opacity" }),
            c = {
              tag: "circle",
              attributes: ie(ie({}, i), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            n ||
              c.children.push(
                {
                  tag: "animate",
                  attributes: ie(
                    ie({}, a),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" }
                  ),
                },
                {
                  tag: "animate",
                  attributes: ie(ie({}, u), {}, { values: "1;0;1;1;0;1;" }),
                }
              ),
            r.push(c),
            r.push({
              tag: "path",
              attributes: ie(
                ie({}, i),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                }
              ),
              children: n
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: ie(ie({}, u), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            n ||
              r.push({
                tag: "path",
                attributes: ie(
                  ie({}, i),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  }
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: ie(ie({}, u), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: r }
          );
        });
    },
  },
  fB = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-symbol"),
            a = i === null ? !1 : i === "" ? !0 : i;
          return (n.symbol = a), n;
        },
      };
    },
  },
  dB = [cF, qF, ZF, JF, eB, oB, aB, lB, sB, cB, fB];
EF(dB, { mixoutsTo: lr });
lr.noAuto;
lr.config;
var pB = lr.library;
lr.dom;
var w0 = lr.parse;
lr.findIconDefinition;
lr.toHtml;
var hB = lr.icon;
lr.layer;
lr.text;
lr.counter;
var $k = { exports: {} },
  vB = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  mB = vB,
  gB = mB;
function Mk() {}
function Lk() {}
Lk.resetWarningCache = Mk;
var yB = function () {
  function e(r, i, a, u, c, f) {
    if (f !== gB) {
      var d = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((d.name = "Invariant Violation"), d);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Lk,
    resetWarningCache: Mk,
  };
  return (n.PropTypes = n), n;
};
$k.exports = yB();
var bB = $k.exports;
const Me = uc(bB);
function P2(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function jo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? P2(Object(n), !0).forEach(function (r) {
          Zl(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : P2(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function lp(e) {
  "@babel/helpers - typeof";
  return (
    (lp =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    lp(e)
  );
}
function Zl(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function wB(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function SB(e, t) {
  if (e == null) return {};
  var n = wB(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function S0(e) {
  return xB(e) || CB(e) || _B(e) || EB();
}
function xB(e) {
  if (Array.isArray(e)) return x0(e);
}
function CB(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function _B(e, t) {
  if (e) {
    if (typeof e == "string") return x0(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return x0(e, t);
  }
}
function x0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function EB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OB(e) {
  var t,
    n = e.beat,
    r = e.fade,
    i = e.beatFade,
    a = e.bounce,
    u = e.shake,
    c = e.flash,
    f = e.spin,
    d = e.spinPulse,
    h = e.spinReverse,
    v = e.pulse,
    g = e.fixedWidth,
    b = e.inverse,
    E = e.border,
    O = e.listItem,
    T = e.flip,
    C = e.size,
    y = e.rotation,
    S = e.pull,
    k =
      ((t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": i,
        "fa-bounce": a,
        "fa-shake": u,
        "fa-flash": c,
        "fa-spin": f,
        "fa-spin-reverse": h,
        "fa-spin-pulse": d,
        "fa-pulse": v,
        "fa-fw": g,
        "fa-inverse": b,
        "fa-border": E,
        "fa-li": O,
        "fa-flip": T === !0,
        "fa-flip-horizontal": T === "horizontal" || T === "both",
        "fa-flip-vertical": T === "vertical" || T === "both",
      }),
      Zl(t, "fa-".concat(C), typeof C < "u" && C !== null),
      Zl(t, "fa-rotate-".concat(y), typeof y < "u" && y !== null && y !== 0),
      Zl(t, "fa-pull-".concat(S), typeof S < "u" && S !== null),
      Zl(t, "fa-swap-opacity", e.swapOpacity),
      t);
  return Object.keys(k)
    .map(function ($) {
      return k[$] ? $ : null;
    })
    .filter(function ($) {
      return $;
    });
}
function kB(e) {
  return (e = e - 0), e === e;
}
function Nk(e) {
  return kB(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : "";
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var PB = ["style"];
function TB(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function AB(e) {
  return e
    .split(";")
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(":"),
        i = Nk(n.slice(0, r)),
        a = n.slice(r + 1).trim();
      return i.startsWith("webkit") ? (t[TB(i)] = a) : (t[i] = a), t;
    }, {});
}
function zk(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string") return t;
  var r = (t.children || []).map(function (f) {
      return zk(e, f);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (f, d) {
        var h = t.attributes[d];
        switch (d) {
          case "class":
            (f.attrs.className = h), delete t.attributes.class;
            break;
          case "style":
            f.attrs.style = AB(h);
            break;
          default:
            d.indexOf("aria-") === 0 || d.indexOf("data-") === 0
              ? (f.attrs[d.toLowerCase()] = h)
              : (f.attrs[Nk(d)] = h);
        }
        return f;
      },
      { attrs: {} }
    ),
    a = n.style,
    u = a === void 0 ? {} : a,
    c = SB(n, PB);
  return (
    (i.attrs.style = jo(jo({}, i.attrs.style), u)),
    e.apply(void 0, [t.tag, jo(jo({}, i.attrs), c)].concat(S0(r)))
  );
}
var jk = !1;
try {
  jk = !0;
} catch {}
function RB() {
  if (!jk && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function T2(e) {
  if (e && lp(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (w0.icon) return w0.icon(e);
  if (e === null) return null;
  if (e && lp(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == "string") return { prefix: "fas", iconName: e };
}
function $m(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? Zl({}, e, t)
    : {};
}
var wh = Te.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    i = e.symbol,
    a = e.className,
    u = e.title,
    c = e.titleId,
    f = e.maskId,
    d = T2(n),
    h = $m("classes", [].concat(S0(OB(e)), S0(a.split(" ")))),
    v = $m(
      "transform",
      typeof e.transform == "string" ? w0.transform(e.transform) : e.transform
    ),
    g = $m("mask", T2(r)),
    b = hB(
      d,
      jo(
        jo(jo(jo({}, h), v), g),
        {},
        { symbol: i, title: u, titleId: c, maskId: f }
      )
    );
  if (!b) return RB("Could not find icon", d), null;
  var E = b.abstract,
    O = { ref: t };
  return (
    Object.keys(e).forEach(function (T) {
      wh.defaultProps.hasOwnProperty(T) || (O[T] = e[T]);
    }),
    IB(E[0], O)
  );
});
wh.displayName = "FontAwesomeIcon";
wh.propTypes = {
  beat: Me.bool,
  border: Me.bool,
  beatFade: Me.bool,
  bounce: Me.bool,
  className: Me.string,
  fade: Me.bool,
  flash: Me.bool,
  mask: Me.oneOfType([Me.object, Me.array, Me.string]),
  maskId: Me.string,
  fixedWidth: Me.bool,
  inverse: Me.bool,
  flip: Me.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: Me.oneOfType([Me.object, Me.array, Me.string]),
  listItem: Me.bool,
  pull: Me.oneOf(["right", "left"]),
  pulse: Me.bool,
  rotation: Me.oneOf([0, 90, 180, 270]),
  shake: Me.bool,
  size: Me.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: Me.bool,
  spinPulse: Me.bool,
  spinReverse: Me.bool,
  symbol: Me.oneOfType([Me.bool, Me.string]),
  title: Me.string,
  titleId: Me.string,
  transform: Me.oneOfType([Me.string, Me.object]),
  swapOpacity: Me.bool,
};
wh.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1,
};
var IB = zk.bind(null, Te.createElement),
  $B = {
    prefix: "fas",
    iconName: "folder",
    icon: [
      512,
      512,
      [128193, 128447, 61716, "folder-blank"],
      "f07b",
      "M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z",
    ],
  },
  MB = {
    prefix: "fas",
    iconName: "file",
    icon: [
      384,
      512,
      [128196, 128459, 61462],
      "f15b",
      "M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z",
    ],
  };
var up = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ up.exports;
(function (e, t) {
  (function () {
    var n,
      r = "4.17.21",
      i = 200,
      a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      u = "Expected a function",
      c = "Invalid `variable` option passed into `_.template`",
      f = "__lodash_hash_undefined__",
      d = 500,
      h = "__lodash_placeholder__",
      v = 1,
      g = 2,
      b = 4,
      E = 1,
      O = 2,
      T = 1,
      C = 2,
      y = 4,
      S = 8,
      k = 16,
      $ = 32,
      L = 64,
      A = 128,
      U = 256,
      G = 512,
      D = 30,
      J = "...",
      le = 800,
      ne = 16,
      se = 1,
      q = 2,
      j = 3,
      z = 1 / 0,
      R = 9007199254740991,
      B = 17976931348623157e292,
      W = 0 / 0,
      H = 4294967295,
      Q = H - 1,
      de = H >>> 1,
      Se = [
        ["ary", A],
        ["bind", T],
        ["bindKey", C],
        ["curry", S],
        ["curryRight", k],
        ["flip", G],
        ["partial", $],
        ["partialRight", L],
        ["rearg", U],
      ],
      xe = "[object Arguments]",
      Oe = "[object Array]",
      ze = "[object AsyncFunction]",
      Fe = "[object Boolean]",
      Ke = "[object Date]",
      ft = "[object DOMException]",
      Ue = "[object Error]",
      Lt = "[object Function]",
      Kt = "[object GeneratorFunction]",
      Ie = "[object Map]",
      Ze = "[object Number]",
      Yt = "[object Null]",
      De = "[object Object]",
      bt = "[object Promise]",
      ve = "[object Proxy]",
      Ce = "[object RegExp]",
      pe = "[object Set]",
      Ae = "[object String]",
      Je = "[object Symbol]",
      Xt = "[object Undefined]",
      ur = "[object WeakMap]",
      Sn = "[object WeakSet]",
      $r = "[object ArrayBuffer]",
      Fn = "[object DataView]",
      tn = "[object Float32Array]",
      Qt = "[object Float64Array]",
      cn = "[object Int8Array]",
      qr = "[object Int16Array]",
      Zr = "[object Int32Array]",
      wi = "[object Uint8Array]",
      fn = "[object Uint8ClampedArray]",
      wt = "[object Uint16Array]",
      dn = "[object Uint32Array]",
      Si = /\b__p \+= '';/g,
      pn = /\b(__p \+=) '' \+/g,
      Ot = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      xi = /&(?:amp|lt|gt|quot|#39);/g,
      nt = /[&<>"']/g,
      Bn = RegExp(xi.source),
      ot = RegExp(nt.source),
      he = /<%-([\s\S]+?)%>/g,
      Ve = /<%([\s\S]+?)%>/g,
      dt = /<%=([\s\S]+?)%>/g,
      Nt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      sr = /^\w*$/,
      Jr =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Wn = /[\\^$.*+?()[\]{}|]/g,
      Dt = RegExp(Wn.source),
      Ci = /^\s+/,
      lo = /\s/,
      ei = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      nn = /\{\n\/\* \[wrapped with (.+)\] \*/,
      nl = /,? & /,
      ti = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      ni = /[()=,{}\[\]\/\s]/,
      ri = /\\(\\)?/g,
      uo = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      so = /\w*$/,
      la = /^[-+]0x[0-9a-f]+$/i,
      _i = /^0b[01]+$/i,
      Ei = /^\[object .+?Constructor\]$/,
      Pu = /^0o[0-7]+$/i,
      Ft = /^(?:0|[1-9]\d*)$/,
      rl = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      co = /($^)/,
      il = /['\n\r\u2028\u2029\\]/g,
      Oi = "\\ud800-\\udfff",
      ki = "\\u0300-\\u036f",
      ol = "\\ufe20-\\ufe2f",
      Tu = "\\u20d0-\\u20ff",
      ii = ki + ol + Tu,
      ua = "\\u2700-\\u27bf",
      Pi = "a-z\\xdf-\\xf6\\xf8-\\xff",
      Mr = "\\xac\\xb1\\xd7\\xf7",
      Ti = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      fo = "\\u2000-\\u206f",
      po =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      cr = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      sa = "\\ufe0e\\ufe0f",
      oi = Mr + Ti + fo + po,
      fr = "['’]",
      al = "[" + Oi + "]",
      ll = "[" + oi + "]",
      ho = "[" + ii + "]",
      ca = "\\d+",
      Au = "[" + ua + "]",
      ul = "[" + Pi + "]",
      sl = "[^" + Oi + oi + ca + ua + Pi + cr + "]",
      vo = "\\ud83c[\\udffb-\\udfff]",
      Ru = "(?:" + ho + "|" + vo + ")",
      cl = "[^" + Oi + "]",
      mo = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      fa = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      Ai = "[" + cr + "]",
      Iu = "\\u200d",
      Rt = "(?:" + ul + "|" + sl + ")",
      da = "(?:" + Ai + "|" + sl + ")",
      pa = "(?:" + fr + "(?:d|ll|m|re|s|t|ve))?",
      dr = "(?:" + fr + "(?:D|LL|M|RE|S|T|VE))?",
      ai = Ru + "?",
      Ri = "[" + sa + "]?",
      ha = "(?:" + Iu + "(?:" + [cl, mo, fa].join("|") + ")" + Ri + ai + ")*",
      $u = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      Mu = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      fl = Ri + ai + ha,
      Lu = "(?:" + [Au, mo, fa].join("|") + ")" + fl,
      ae = "(?:" + [cl + ho + "?", ho, mo, fa, al].join("|") + ")",
      we = RegExp(fr, "g"),
      pt = RegExp(ho, "g"),
      St = RegExp(vo + "(?=" + vo + ")|" + ae + fl, "g"),
      ht = RegExp(
        [
          Ai + "?" + ul + "+" + pa + "(?=" + [ll, Ai, "$"].join("|") + ")",
          da + "+" + dr + "(?=" + [ll, Ai + Rt, "$"].join("|") + ")",
          Ai + "?" + Rt + "+" + pa,
          Ai + "+" + dr,
          Mu,
          $u,
          ca,
          Lu,
        ].join("|"),
        "g"
      ),
      dl = RegExp("[" + Iu + Oi + ii + sa + "]"),
      Nu = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Ec = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      pl = -1,
      at = {};
    (at[tn] =
      at[Qt] =
      at[cn] =
      at[qr] =
      at[Zr] =
      at[wi] =
      at[fn] =
      at[wt] =
      at[dn] =
        !0),
      (at[xe] =
        at[Oe] =
        at[$r] =
        at[Fe] =
        at[Fn] =
        at[Ke] =
        at[Ue] =
        at[Lt] =
        at[Ie] =
        at[Ze] =
        at[De] =
        at[Ce] =
        at[pe] =
        at[Ae] =
        at[ur] =
          !1);
    var rt = {};
    (rt[xe] =
      rt[Oe] =
      rt[$r] =
      rt[Fn] =
      rt[Fe] =
      rt[Ke] =
      rt[tn] =
      rt[Qt] =
      rt[cn] =
      rt[qr] =
      rt[Zr] =
      rt[Ie] =
      rt[Ze] =
      rt[De] =
      rt[Ce] =
      rt[pe] =
      rt[Ae] =
      rt[Je] =
      rt[wi] =
      rt[fn] =
      rt[wt] =
      rt[dn] =
        !0),
      (rt[Ue] = rt[Lt] = rt[ur] = !1);
    var Dk = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      Fk = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      Bk = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      Wk = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      Hk = parseFloat,
      Uk = parseInt,
      d1 = typeof Zu == "object" && Zu && Zu.Object === Object && Zu,
      Vk = typeof self == "object" && self && self.Object === Object && self,
      rn = d1 || Vk || Function("return this")(),
      Sh = t && !t.nodeType && t,
      va = Sh && !0 && e && !e.nodeType && e,
      p1 = va && va.exports === Sh,
      xh = p1 && d1.process,
      pr = (function () {
        try {
          var M = va && va.require && va.require("util").types;
          return M || (xh && xh.binding && xh.binding("util"));
        } catch {}
      })(),
      h1 = pr && pr.isArrayBuffer,
      v1 = pr && pr.isDate,
      m1 = pr && pr.isMap,
      g1 = pr && pr.isRegExp,
      y1 = pr && pr.isSet,
      b1 = pr && pr.isTypedArray;
    function Hn(M, V, F) {
      switch (F.length) {
        case 0:
          return M.call(V);
        case 1:
          return M.call(V, F[0]);
        case 2:
          return M.call(V, F[0], F[1]);
        case 3:
          return M.call(V, F[0], F[1], F[2]);
      }
      return M.apply(V, F);
    }
    function Gk(M, V, F, re) {
      for (var _e = -1, We = M == null ? 0 : M.length; ++_e < We; ) {
        var Bt = M[_e];
        V(re, Bt, F(Bt), M);
      }
      return re;
    }
    function hr(M, V) {
      for (
        var F = -1, re = M == null ? 0 : M.length;
        ++F < re && V(M[F], F, M) !== !1;

      );
      return M;
    }
    function Kk(M, V) {
      for (var F = M == null ? 0 : M.length; F-- && V(M[F], F, M) !== !1; );
      return M;
    }
    function w1(M, V) {
      for (var F = -1, re = M == null ? 0 : M.length; ++F < re; )
        if (!V(M[F], F, M)) return !1;
      return !0;
    }
    function go(M, V) {
      for (
        var F = -1, re = M == null ? 0 : M.length, _e = 0, We = [];
        ++F < re;

      ) {
        var Bt = M[F];
        V(Bt, F, M) && (We[_e++] = Bt);
      }
      return We;
    }
    function Oc(M, V) {
      var F = M == null ? 0 : M.length;
      return !!F && hl(M, V, 0) > -1;
    }
    function Ch(M, V, F) {
      for (var re = -1, _e = M == null ? 0 : M.length; ++re < _e; )
        if (F(V, M[re])) return !0;
      return !1;
    }
    function vt(M, V) {
      for (
        var F = -1, re = M == null ? 0 : M.length, _e = Array(re);
        ++F < re;

      )
        _e[F] = V(M[F], F, M);
      return _e;
    }
    function yo(M, V) {
      for (var F = -1, re = V.length, _e = M.length; ++F < re; )
        M[_e + F] = V[F];
      return M;
    }
    function _h(M, V, F, re) {
      var _e = -1,
        We = M == null ? 0 : M.length;
      for (re && We && (F = M[++_e]); ++_e < We; ) F = V(F, M[_e], _e, M);
      return F;
    }
    function Yk(M, V, F, re) {
      var _e = M == null ? 0 : M.length;
      for (re && _e && (F = M[--_e]); _e--; ) F = V(F, M[_e], _e, M);
      return F;
    }
    function Eh(M, V) {
      for (var F = -1, re = M == null ? 0 : M.length; ++F < re; )
        if (V(M[F], F, M)) return !0;
      return !1;
    }
    var Xk = Oh("length");
    function Qk(M) {
      return M.split("");
    }
    function qk(M) {
      return M.match(ti) || [];
    }
    function S1(M, V, F) {
      var re;
      return (
        F(M, function (_e, We, Bt) {
          if (V(_e, We, Bt)) return (re = We), !1;
        }),
        re
      );
    }
    function kc(M, V, F, re) {
      for (var _e = M.length, We = F + (re ? 1 : -1); re ? We-- : ++We < _e; )
        if (V(M[We], We, M)) return We;
      return -1;
    }
    function hl(M, V, F) {
      return V === V ? sP(M, V, F) : kc(M, x1, F);
    }
    function Zk(M, V, F, re) {
      for (var _e = F - 1, We = M.length; ++_e < We; )
        if (re(M[_e], V)) return _e;
      return -1;
    }
    function x1(M) {
      return M !== M;
    }
    function C1(M, V) {
      var F = M == null ? 0 : M.length;
      return F ? Ph(M, V) / F : W;
    }
    function Oh(M) {
      return function (V) {
        return V == null ? n : V[M];
      };
    }
    function kh(M) {
      return function (V) {
        return M == null ? n : M[V];
      };
    }
    function _1(M, V, F, re, _e) {
      return (
        _e(M, function (We, Bt, tt) {
          F = re ? ((re = !1), We) : V(F, We, Bt, tt);
        }),
        F
      );
    }
    function Jk(M, V) {
      var F = M.length;
      for (M.sort(V); F--; ) M[F] = M[F].value;
      return M;
    }
    function Ph(M, V) {
      for (var F, re = -1, _e = M.length; ++re < _e; ) {
        var We = V(M[re]);
        We !== n && (F = F === n ? We : F + We);
      }
      return F;
    }
    function Th(M, V) {
      for (var F = -1, re = Array(M); ++F < M; ) re[F] = V(F);
      return re;
    }
    function eP(M, V) {
      return vt(V, function (F) {
        return [F, M[F]];
      });
    }
    function E1(M) {
      return M && M.slice(0, T1(M) + 1).replace(Ci, "");
    }
    function Un(M) {
      return function (V) {
        return M(V);
      };
    }
    function Ah(M, V) {
      return vt(V, function (F) {
        return M[F];
      });
    }
    function zu(M, V) {
      return M.has(V);
    }
    function O1(M, V) {
      for (var F = -1, re = M.length; ++F < re && hl(V, M[F], 0) > -1; );
      return F;
    }
    function k1(M, V) {
      for (var F = M.length; F-- && hl(V, M[F], 0) > -1; );
      return F;
    }
    function tP(M, V) {
      for (var F = M.length, re = 0; F--; ) M[F] === V && ++re;
      return re;
    }
    var nP = kh(Dk),
      rP = kh(Fk);
    function iP(M) {
      return "\\" + Wk[M];
    }
    function oP(M, V) {
      return M == null ? n : M[V];
    }
    function vl(M) {
      return dl.test(M);
    }
    function aP(M) {
      return Nu.test(M);
    }
    function lP(M) {
      for (var V, F = []; !(V = M.next()).done; ) F.push(V.value);
      return F;
    }
    function Rh(M) {
      var V = -1,
        F = Array(M.size);
      return (
        M.forEach(function (re, _e) {
          F[++V] = [_e, re];
        }),
        F
      );
    }
    function P1(M, V) {
      return function (F) {
        return M(V(F));
      };
    }
    function bo(M, V) {
      for (var F = -1, re = M.length, _e = 0, We = []; ++F < re; ) {
        var Bt = M[F];
        (Bt === V || Bt === h) && ((M[F] = h), (We[_e++] = F));
      }
      return We;
    }
    function Pc(M) {
      var V = -1,
        F = Array(M.size);
      return (
        M.forEach(function (re) {
          F[++V] = re;
        }),
        F
      );
    }
    function uP(M) {
      var V = -1,
        F = Array(M.size);
      return (
        M.forEach(function (re) {
          F[++V] = [re, re];
        }),
        F
      );
    }
    function sP(M, V, F) {
      for (var re = F - 1, _e = M.length; ++re < _e; )
        if (M[re] === V) return re;
      return -1;
    }
    function cP(M, V, F) {
      for (var re = F + 1; re--; ) if (M[re] === V) return re;
      return re;
    }
    function ml(M) {
      return vl(M) ? dP(M) : Xk(M);
    }
    function Lr(M) {
      return vl(M) ? pP(M) : Qk(M);
    }
    function T1(M) {
      for (var V = M.length; V-- && lo.test(M.charAt(V)); );
      return V;
    }
    var fP = kh(Bk);
    function dP(M) {
      for (var V = (St.lastIndex = 0); St.test(M); ) ++V;
      return V;
    }
    function pP(M) {
      return M.match(St) || [];
    }
    function hP(M) {
      return M.match(ht) || [];
    }
    var vP = function M(V) {
        V = V == null ? rn : gl.defaults(rn.Object(), V, gl.pick(rn, Ec));
        var F = V.Array,
          re = V.Date,
          _e = V.Error,
          We = V.Function,
          Bt = V.Math,
          tt = V.Object,
          Ih = V.RegExp,
          mP = V.String,
          vr = V.TypeError,
          Tc = F.prototype,
          gP = We.prototype,
          yl = tt.prototype,
          Ac = V["__core-js_shared__"],
          Rc = gP.toString,
          Ye = yl.hasOwnProperty,
          yP = 0,
          A1 = (function () {
            var o = /[^.]+$/.exec((Ac && Ac.keys && Ac.keys.IE_PROTO) || "");
            return o ? "Symbol(src)_1." + o : "";
          })(),
          Ic = yl.toString,
          bP = Rc.call(tt),
          wP = rn._,
          SP = Ih(
            "^" +
              Rc.call(Ye)
                .replace(Wn, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          $c = p1 ? V.Buffer : n,
          wo = V.Symbol,
          Mc = V.Uint8Array,
          R1 = $c ? $c.allocUnsafe : n,
          Lc = P1(tt.getPrototypeOf, tt),
          I1 = tt.create,
          $1 = yl.propertyIsEnumerable,
          Nc = Tc.splice,
          M1 = wo ? wo.isConcatSpreadable : n,
          ju = wo ? wo.iterator : n,
          ma = wo ? wo.toStringTag : n,
          zc = (function () {
            try {
              var o = Sa(tt, "defineProperty");
              return o({}, "", {}), o;
            } catch {}
          })(),
          xP = V.clearTimeout !== rn.clearTimeout && V.clearTimeout,
          CP = re && re.now !== rn.Date.now && re.now,
          _P = V.setTimeout !== rn.setTimeout && V.setTimeout,
          jc = Bt.ceil,
          Dc = Bt.floor,
          $h = tt.getOwnPropertySymbols,
          EP = $c ? $c.isBuffer : n,
          L1 = V.isFinite,
          OP = Tc.join,
          kP = P1(tt.keys, tt),
          Wt = Bt.max,
          hn = Bt.min,
          PP = re.now,
          TP = V.parseInt,
          N1 = Bt.random,
          AP = Tc.reverse,
          Mh = Sa(V, "DataView"),
          Du = Sa(V, "Map"),
          Lh = Sa(V, "Promise"),
          bl = Sa(V, "Set"),
          Fu = Sa(V, "WeakMap"),
          Bu = Sa(tt, "create"),
          Fc = Fu && new Fu(),
          wl = {},
          RP = xa(Mh),
          IP = xa(Du),
          $P = xa(Lh),
          MP = xa(bl),
          LP = xa(Fu),
          Bc = wo ? wo.prototype : n,
          Wu = Bc ? Bc.valueOf : n,
          z1 = Bc ? Bc.toString : n;
        function w(o) {
          if (kt(o) && !Ee(o) && !(o instanceof Le)) {
            if (o instanceof mr) return o;
            if (Ye.call(o, "__wrapped__")) return jb(o);
          }
          return new mr(o);
        }
        var Sl = (function () {
          function o() {}
          return function (l) {
            if (!xt(l)) return {};
            if (I1) return I1(l);
            o.prototype = l;
            var s = new o();
            return (o.prototype = n), s;
          };
        })();
        function Wc() {}
        function mr(o, l) {
          (this.__wrapped__ = o),
            (this.__actions__ = []),
            (this.__chain__ = !!l),
            (this.__index__ = 0),
            (this.__values__ = n);
        }
        (w.templateSettings = {
          escape: he,
          evaluate: Ve,
          interpolate: dt,
          variable: "",
          imports: { _: w },
        }),
          (w.prototype = Wc.prototype),
          (w.prototype.constructor = w),
          (mr.prototype = Sl(Wc.prototype)),
          (mr.prototype.constructor = mr);
        function Le(o) {
          (this.__wrapped__ = o),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = H),
            (this.__views__ = []);
        }
        function NP() {
          var o = new Le(this.__wrapped__);
          return (
            (o.__actions__ = An(this.__actions__)),
            (o.__dir__ = this.__dir__),
            (o.__filtered__ = this.__filtered__),
            (o.__iteratees__ = An(this.__iteratees__)),
            (o.__takeCount__ = this.__takeCount__),
            (o.__views__ = An(this.__views__)),
            o
          );
        }
        function zP() {
          if (this.__filtered__) {
            var o = new Le(this);
            (o.__dir__ = -1), (o.__filtered__ = !0);
          } else (o = this.clone()), (o.__dir__ *= -1);
          return o;
        }
        function jP() {
          var o = this.__wrapped__.value(),
            l = this.__dir__,
            s = Ee(o),
            p = l < 0,
            m = s ? o.length : 0,
            _ = QT(0, m, this.__views__),
            P = _.start,
            I = _.end,
            N = I - P,
            K = p ? I : P - 1,
            Y = this.__iteratees__,
            X = Y.length,
            te = 0,
            ce = hn(N, this.__takeCount__);
          if (!s || (!p && m == N && ce == N)) return lb(o, this.__actions__);
          var ye = [];
          e: for (; N-- && te < ce; ) {
            K += l;
            for (var Pe = -1, be = o[K]; ++Pe < X; ) {
              var $e = Y[Pe],
                je = $e.iteratee,
                Kn = $e.type,
                _n = je(be);
              if (Kn == q) be = _n;
              else if (!_n) {
                if (Kn == se) continue e;
                break e;
              }
            }
            ye[te++] = be;
          }
          return ye;
        }
        (Le.prototype = Sl(Wc.prototype)), (Le.prototype.constructor = Le);
        function ga(o) {
          var l = -1,
            s = o == null ? 0 : o.length;
          for (this.clear(); ++l < s; ) {
            var p = o[l];
            this.set(p[0], p[1]);
          }
        }
        function DP() {
          (this.__data__ = Bu ? Bu(null) : {}), (this.size = 0);
        }
        function FP(o) {
          var l = this.has(o) && delete this.__data__[o];
          return (this.size -= l ? 1 : 0), l;
        }
        function BP(o) {
          var l = this.__data__;
          if (Bu) {
            var s = l[o];
            return s === f ? n : s;
          }
          return Ye.call(l, o) ? l[o] : n;
        }
        function WP(o) {
          var l = this.__data__;
          return Bu ? l[o] !== n : Ye.call(l, o);
        }
        function HP(o, l) {
          var s = this.__data__;
          return (
            (this.size += this.has(o) ? 0 : 1),
            (s[o] = Bu && l === n ? f : l),
            this
          );
        }
        (ga.prototype.clear = DP),
          (ga.prototype.delete = FP),
          (ga.prototype.get = BP),
          (ga.prototype.has = WP),
          (ga.prototype.set = HP);
        function Ii(o) {
          var l = -1,
            s = o == null ? 0 : o.length;
          for (this.clear(); ++l < s; ) {
            var p = o[l];
            this.set(p[0], p[1]);
          }
        }
        function UP() {
          (this.__data__ = []), (this.size = 0);
        }
        function VP(o) {
          var l = this.__data__,
            s = Hc(l, o);
          if (s < 0) return !1;
          var p = l.length - 1;
          return s == p ? l.pop() : Nc.call(l, s, 1), --this.size, !0;
        }
        function GP(o) {
          var l = this.__data__,
            s = Hc(l, o);
          return s < 0 ? n : l[s][1];
        }
        function KP(o) {
          return Hc(this.__data__, o) > -1;
        }
        function YP(o, l) {
          var s = this.__data__,
            p = Hc(s, o);
          return p < 0 ? (++this.size, s.push([o, l])) : (s[p][1] = l), this;
        }
        (Ii.prototype.clear = UP),
          (Ii.prototype.delete = VP),
          (Ii.prototype.get = GP),
          (Ii.prototype.has = KP),
          (Ii.prototype.set = YP);
        function $i(o) {
          var l = -1,
            s = o == null ? 0 : o.length;
          for (this.clear(); ++l < s; ) {
            var p = o[l];
            this.set(p[0], p[1]);
          }
        }
        function XP() {
          (this.size = 0),
            (this.__data__ = {
              hash: new ga(),
              map: new (Du || Ii)(),
              string: new ga(),
            });
        }
        function QP(o) {
          var l = tf(this, o).delete(o);
          return (this.size -= l ? 1 : 0), l;
        }
        function qP(o) {
          return tf(this, o).get(o);
        }
        function ZP(o) {
          return tf(this, o).has(o);
        }
        function JP(o, l) {
          var s = tf(this, o),
            p = s.size;
          return s.set(o, l), (this.size += s.size == p ? 0 : 1), this;
        }
        ($i.prototype.clear = XP),
          ($i.prototype.delete = QP),
          ($i.prototype.get = qP),
          ($i.prototype.has = ZP),
          ($i.prototype.set = JP);
        function ya(o) {
          var l = -1,
            s = o == null ? 0 : o.length;
          for (this.__data__ = new $i(); ++l < s; ) this.add(o[l]);
        }
        function eT(o) {
          return this.__data__.set(o, f), this;
        }
        function tT(o) {
          return this.__data__.has(o);
        }
        (ya.prototype.add = ya.prototype.push = eT), (ya.prototype.has = tT);
        function Nr(o) {
          var l = (this.__data__ = new Ii(o));
          this.size = l.size;
        }
        function nT() {
          (this.__data__ = new Ii()), (this.size = 0);
        }
        function rT(o) {
          var l = this.__data__,
            s = l.delete(o);
          return (this.size = l.size), s;
        }
        function iT(o) {
          return this.__data__.get(o);
        }
        function oT(o) {
          return this.__data__.has(o);
        }
        function aT(o, l) {
          var s = this.__data__;
          if (s instanceof Ii) {
            var p = s.__data__;
            if (!Du || p.length < i - 1)
              return p.push([o, l]), (this.size = ++s.size), this;
            s = this.__data__ = new $i(p);
          }
          return s.set(o, l), (this.size = s.size), this;
        }
        (Nr.prototype.clear = nT),
          (Nr.prototype.delete = rT),
          (Nr.prototype.get = iT),
          (Nr.prototype.has = oT),
          (Nr.prototype.set = aT);
        function j1(o, l) {
          var s = Ee(o),
            p = !s && Ca(o),
            m = !s && !p && Eo(o),
            _ = !s && !p && !m && El(o),
            P = s || p || m || _,
            I = P ? Th(o.length, mP) : [],
            N = I.length;
          for (var K in o)
            (l || Ye.call(o, K)) &&
              !(
                P &&
                (K == "length" ||
                  (m && (K == "offset" || K == "parent")) ||
                  (_ &&
                    (K == "buffer" ||
                      K == "byteLength" ||
                      K == "byteOffset")) ||
                  zi(K, N))
              ) &&
              I.push(K);
          return I;
        }
        function D1(o) {
          var l = o.length;
          return l ? o[Gh(0, l - 1)] : n;
        }
        function lT(o, l) {
          return nf(An(o), ba(l, 0, o.length));
        }
        function uT(o) {
          return nf(An(o));
        }
        function Nh(o, l, s) {
          ((s !== n && !zr(o[l], s)) || (s === n && !(l in o))) && Mi(o, l, s);
        }
        function Hu(o, l, s) {
          var p = o[l];
          (!(Ye.call(o, l) && zr(p, s)) || (s === n && !(l in o))) &&
            Mi(o, l, s);
        }
        function Hc(o, l) {
          for (var s = o.length; s--; ) if (zr(o[s][0], l)) return s;
          return -1;
        }
        function sT(o, l, s, p) {
          return (
            So(o, function (m, _, P) {
              l(p, m, s(m), P);
            }),
            p
          );
        }
        function F1(o, l) {
          return o && ui(l, qt(l), o);
        }
        function cT(o, l) {
          return o && ui(l, In(l), o);
        }
        function Mi(o, l, s) {
          l == "__proto__" && zc
            ? zc(o, l, {
                configurable: !0,
                enumerable: !0,
                value: s,
                writable: !0,
              })
            : (o[l] = s);
        }
        function zh(o, l) {
          for (var s = -1, p = l.length, m = F(p), _ = o == null; ++s < p; )
            m[s] = _ ? n : gv(o, l[s]);
          return m;
        }
        function ba(o, l, s) {
          return (
            o === o &&
              (s !== n && (o = o <= s ? o : s),
              l !== n && (o = o >= l ? o : l)),
            o
          );
        }
        function gr(o, l, s, p, m, _) {
          var P,
            I = l & v,
            N = l & g,
            K = l & b;
          if ((s && (P = m ? s(o, p, m, _) : s(o)), P !== n)) return P;
          if (!xt(o)) return o;
          var Y = Ee(o);
          if (Y) {
            if (((P = ZT(o)), !I)) return An(o, P);
          } else {
            var X = vn(o),
              te = X == Lt || X == Kt;
            if (Eo(o)) return cb(o, I);
            if (X == De || X == xe || (te && !m)) {
              if (((P = N || te ? {} : Tb(o)), !I))
                return N ? BT(o, cT(P, o)) : FT(o, F1(P, o));
            } else {
              if (!rt[X]) return m ? o : {};
              P = JT(o, X, I);
            }
          }
          _ || (_ = new Nr());
          var ce = _.get(o);
          if (ce) return ce;
          _.set(o, P),
            iw(o)
              ? o.forEach(function (be) {
                  P.add(gr(be, l, s, be, o, _));
                })
              : nw(o) &&
                o.forEach(function (be, $e) {
                  P.set($e, gr(be, l, s, $e, o, _));
                });
          var ye = K ? (N ? rv : nv) : N ? In : qt,
            Pe = Y ? n : ye(o);
          return (
            hr(Pe || o, function (be, $e) {
              Pe && (($e = be), (be = o[$e])),
                Hu(P, $e, gr(be, l, s, $e, o, _));
            }),
            P
          );
        }
        function fT(o) {
          var l = qt(o);
          return function (s) {
            return B1(s, o, l);
          };
        }
        function B1(o, l, s) {
          var p = s.length;
          if (o == null) return !p;
          for (o = tt(o); p--; ) {
            var m = s[p],
              _ = l[m],
              P = o[m];
            if ((P === n && !(m in o)) || !_(P)) return !1;
          }
          return !0;
        }
        function W1(o, l, s) {
          if (typeof o != "function") throw new vr(u);
          return Qu(function () {
            o.apply(n, s);
          }, l);
        }
        function Uu(o, l, s, p) {
          var m = -1,
            _ = Oc,
            P = !0,
            I = o.length,
            N = [],
            K = l.length;
          if (!I) return N;
          s && (l = vt(l, Un(s))),
            p
              ? ((_ = Ch), (P = !1))
              : l.length >= i && ((_ = zu), (P = !1), (l = new ya(l)));
          e: for (; ++m < I; ) {
            var Y = o[m],
              X = s == null ? Y : s(Y);
            if (((Y = p || Y !== 0 ? Y : 0), P && X === X)) {
              for (var te = K; te--; ) if (l[te] === X) continue e;
              N.push(Y);
            } else _(l, X, p) || N.push(Y);
          }
          return N;
        }
        var So = vb(li),
          H1 = vb(Dh, !0);
        function dT(o, l) {
          var s = !0;
          return (
            So(o, function (p, m, _) {
              return (s = !!l(p, m, _)), s;
            }),
            s
          );
        }
        function Uc(o, l, s) {
          for (var p = -1, m = o.length; ++p < m; ) {
            var _ = o[p],
              P = l(_);
            if (P != null && (I === n ? P === P && !Gn(P) : s(P, I)))
              var I = P,
                N = _;
          }
          return N;
        }
        function pT(o, l, s, p) {
          var m = o.length;
          for (
            s = ke(s),
              s < 0 && (s = -s > m ? 0 : m + s),
              p = p === n || p > m ? m : ke(p),
              p < 0 && (p += m),
              p = s > p ? 0 : aw(p);
            s < p;

          )
            o[s++] = l;
          return o;
        }
        function U1(o, l) {
          var s = [];
          return (
            So(o, function (p, m, _) {
              l(p, m, _) && s.push(p);
            }),
            s
          );
        }
        function on(o, l, s, p, m) {
          var _ = -1,
            P = o.length;
          for (s || (s = t3), m || (m = []); ++_ < P; ) {
            var I = o[_];
            l > 0 && s(I)
              ? l > 1
                ? on(I, l - 1, s, p, m)
                : yo(m, I)
              : p || (m[m.length] = I);
          }
          return m;
        }
        var jh = mb(),
          V1 = mb(!0);
        function li(o, l) {
          return o && jh(o, l, qt);
        }
        function Dh(o, l) {
          return o && V1(o, l, qt);
        }
        function Vc(o, l) {
          return go(l, function (s) {
            return ji(o[s]);
          });
        }
        function wa(o, l) {
          l = Co(l, o);
          for (var s = 0, p = l.length; o != null && s < p; ) o = o[si(l[s++])];
          return s && s == p ? o : n;
        }
        function G1(o, l, s) {
          var p = l(o);
          return Ee(o) ? p : yo(p, s(o));
        }
        function xn(o) {
          return o == null
            ? o === n
              ? Xt
              : Yt
            : ma && ma in tt(o)
            ? XT(o)
            : u3(o);
        }
        function Fh(o, l) {
          return o > l;
        }
        function hT(o, l) {
          return o != null && Ye.call(o, l);
        }
        function vT(o, l) {
          return o != null && l in tt(o);
        }
        function mT(o, l, s) {
          return o >= hn(l, s) && o < Wt(l, s);
        }
        function Bh(o, l, s) {
          for (
            var p = s ? Ch : Oc,
              m = o[0].length,
              _ = o.length,
              P = _,
              I = F(_),
              N = 1 / 0,
              K = [];
            P--;

          ) {
            var Y = o[P];
            P && l && (Y = vt(Y, Un(l))),
              (N = hn(Y.length, N)),
              (I[P] =
                !s && (l || (m >= 120 && Y.length >= 120))
                  ? new ya(P && Y)
                  : n);
          }
          Y = o[0];
          var X = -1,
            te = I[0];
          e: for (; ++X < m && K.length < N; ) {
            var ce = Y[X],
              ye = l ? l(ce) : ce;
            if (
              ((ce = s || ce !== 0 ? ce : 0), !(te ? zu(te, ye) : p(K, ye, s)))
            ) {
              for (P = _; --P; ) {
                var Pe = I[P];
                if (!(Pe ? zu(Pe, ye) : p(o[P], ye, s))) continue e;
              }
              te && te.push(ye), K.push(ce);
            }
          }
          return K;
        }
        function gT(o, l, s, p) {
          return (
            li(o, function (m, _, P) {
              l(p, s(m), _, P);
            }),
            p
          );
        }
        function Vu(o, l, s) {
          (l = Co(l, o)), (o = $b(o, l));
          var p = o == null ? o : o[si(br(l))];
          return p == null ? n : Hn(p, o, s);
        }
        function K1(o) {
          return kt(o) && xn(o) == xe;
        }
        function yT(o) {
          return kt(o) && xn(o) == $r;
        }
        function bT(o) {
          return kt(o) && xn(o) == Ke;
        }
        function Gu(o, l, s, p, m) {
          return o === l
            ? !0
            : o == null || l == null || (!kt(o) && !kt(l))
            ? o !== o && l !== l
            : wT(o, l, s, p, Gu, m);
        }
        function wT(o, l, s, p, m, _) {
          var P = Ee(o),
            I = Ee(l),
            N = P ? Oe : vn(o),
            K = I ? Oe : vn(l);
          (N = N == xe ? De : N), (K = K == xe ? De : K);
          var Y = N == De,
            X = K == De,
            te = N == K;
          if (te && Eo(o)) {
            if (!Eo(l)) return !1;
            (P = !0), (Y = !1);
          }
          if (te && !Y)
            return (
              _ || (_ = new Nr()),
              P || El(o) ? Ob(o, l, s, p, m, _) : KT(o, l, N, s, p, m, _)
            );
          if (!(s & E)) {
            var ce = Y && Ye.call(o, "__wrapped__"),
              ye = X && Ye.call(l, "__wrapped__");
            if (ce || ye) {
              var Pe = ce ? o.value() : o,
                be = ye ? l.value() : l;
              return _ || (_ = new Nr()), m(Pe, be, s, p, _);
            }
          }
          return te ? (_ || (_ = new Nr()), YT(o, l, s, p, m, _)) : !1;
        }
        function ST(o) {
          return kt(o) && vn(o) == Ie;
        }
        function Wh(o, l, s, p) {
          var m = s.length,
            _ = m,
            P = !p;
          if (o == null) return !_;
          for (o = tt(o); m--; ) {
            var I = s[m];
            if (P && I[2] ? I[1] !== o[I[0]] : !(I[0] in o)) return !1;
          }
          for (; ++m < _; ) {
            I = s[m];
            var N = I[0],
              K = o[N],
              Y = I[1];
            if (P && I[2]) {
              if (K === n && !(N in o)) return !1;
            } else {
              var X = new Nr();
              if (p) var te = p(K, Y, N, o, l, X);
              if (!(te === n ? Gu(Y, K, E | O, p, X) : te)) return !1;
            }
          }
          return !0;
        }
        function Y1(o) {
          if (!xt(o) || r3(o)) return !1;
          var l = ji(o) ? SP : Ei;
          return l.test(xa(o));
        }
        function xT(o) {
          return kt(o) && xn(o) == Ce;
        }
        function CT(o) {
          return kt(o) && vn(o) == pe;
        }
        function _T(o) {
          return kt(o) && sf(o.length) && !!at[xn(o)];
        }
        function X1(o) {
          return typeof o == "function"
            ? o
            : o == null
            ? $n
            : typeof o == "object"
            ? Ee(o)
              ? Z1(o[0], o[1])
              : q1(o)
            : gw(o);
        }
        function Hh(o) {
          if (!Xu(o)) return kP(o);
          var l = [];
          for (var s in tt(o)) Ye.call(o, s) && s != "constructor" && l.push(s);
          return l;
        }
        function ET(o) {
          if (!xt(o)) return l3(o);
          var l = Xu(o),
            s = [];
          for (var p in o)
            (p == "constructor" && (l || !Ye.call(o, p))) || s.push(p);
          return s;
        }
        function Uh(o, l) {
          return o < l;
        }
        function Q1(o, l) {
          var s = -1,
            p = Rn(o) ? F(o.length) : [];
          return (
            So(o, function (m, _, P) {
              p[++s] = l(m, _, P);
            }),
            p
          );
        }
        function q1(o) {
          var l = ov(o);
          return l.length == 1 && l[0][2]
            ? Rb(l[0][0], l[0][1])
            : function (s) {
                return s === o || Wh(s, o, l);
              };
        }
        function Z1(o, l) {
          return lv(o) && Ab(l)
            ? Rb(si(o), l)
            : function (s) {
                var p = gv(s, o);
                return p === n && p === l ? yv(s, o) : Gu(l, p, E | O);
              };
        }
        function Gc(o, l, s, p, m) {
          o !== l &&
            jh(
              l,
              function (_, P) {
                if ((m || (m = new Nr()), xt(_))) OT(o, l, P, s, Gc, p, m);
                else {
                  var I = p ? p(sv(o, P), _, P + "", o, l, m) : n;
                  I === n && (I = _), Nh(o, P, I);
                }
              },
              In
            );
        }
        function OT(o, l, s, p, m, _, P) {
          var I = sv(o, s),
            N = sv(l, s),
            K = P.get(N);
          if (K) {
            Nh(o, s, K);
            return;
          }
          var Y = _ ? _(I, N, s + "", o, l, P) : n,
            X = Y === n;
          if (X) {
            var te = Ee(N),
              ce = !te && Eo(N),
              ye = !te && !ce && El(N);
            (Y = N),
              te || ce || ye
                ? Ee(I)
                  ? (Y = I)
                  : It(I)
                  ? (Y = An(I))
                  : ce
                  ? ((X = !1), (Y = cb(N, !0)))
                  : ye
                  ? ((X = !1), (Y = fb(N, !0)))
                  : (Y = [])
                : qu(N) || Ca(N)
                ? ((Y = I),
                  Ca(I) ? (Y = lw(I)) : (!xt(I) || ji(I)) && (Y = Tb(N)))
                : (X = !1);
          }
          X && (P.set(N, Y), m(Y, N, p, _, P), P.delete(N)), Nh(o, s, Y);
        }
        function J1(o, l) {
          var s = o.length;
          if (s) return (l += l < 0 ? s : 0), zi(l, s) ? o[l] : n;
        }
        function eb(o, l, s) {
          l.length
            ? (l = vt(l, function (_) {
                return Ee(_)
                  ? function (P) {
                      return wa(P, _.length === 1 ? _[0] : _);
                    }
                  : _;
              }))
            : (l = [$n]);
          var p = -1;
          l = vt(l, Un(ge()));
          var m = Q1(o, function (_, P, I) {
            var N = vt(l, function (K) {
              return K(_);
            });
            return { criteria: N, index: ++p, value: _ };
          });
          return Jk(m, function (_, P) {
            return DT(_, P, s);
          });
        }
        function kT(o, l) {
          return tb(o, l, function (s, p) {
            return yv(o, p);
          });
        }
        function tb(o, l, s) {
          for (var p = -1, m = l.length, _ = {}; ++p < m; ) {
            var P = l[p],
              I = wa(o, P);
            s(I, P) && Ku(_, Co(P, o), I);
          }
          return _;
        }
        function PT(o) {
          return function (l) {
            return wa(l, o);
          };
        }
        function Vh(o, l, s, p) {
          var m = p ? Zk : hl,
            _ = -1,
            P = l.length,
            I = o;
          for (o === l && (l = An(l)), s && (I = vt(o, Un(s))); ++_ < P; )
            for (
              var N = 0, K = l[_], Y = s ? s(K) : K;
              (N = m(I, Y, N, p)) > -1;

            )
              I !== o && Nc.call(I, N, 1), Nc.call(o, N, 1);
          return o;
        }
        function nb(o, l) {
          for (var s = o ? l.length : 0, p = s - 1; s--; ) {
            var m = l[s];
            if (s == p || m !== _) {
              var _ = m;
              zi(m) ? Nc.call(o, m, 1) : Xh(o, m);
            }
          }
          return o;
        }
        function Gh(o, l) {
          return o + Dc(N1() * (l - o + 1));
        }
        function TT(o, l, s, p) {
          for (var m = -1, _ = Wt(jc((l - o) / (s || 1)), 0), P = F(_); _--; )
            (P[p ? _ : ++m] = o), (o += s);
          return P;
        }
        function Kh(o, l) {
          var s = "";
          if (!o || l < 1 || l > R) return s;
          do l % 2 && (s += o), (l = Dc(l / 2)), l && (o += o);
          while (l);
          return s;
        }
        function Re(o, l) {
          return cv(Ib(o, l, $n), o + "");
        }
        function AT(o) {
          return D1(Ol(o));
        }
        function RT(o, l) {
          var s = Ol(o);
          return nf(s, ba(l, 0, s.length));
        }
        function Ku(o, l, s, p) {
          if (!xt(o)) return o;
          l = Co(l, o);
          for (
            var m = -1, _ = l.length, P = _ - 1, I = o;
            I != null && ++m < _;

          ) {
            var N = si(l[m]),
              K = s;
            if (N === "__proto__" || N === "constructor" || N === "prototype")
              return o;
            if (m != P) {
              var Y = I[N];
              (K = p ? p(Y, N, I) : n),
                K === n && (K = xt(Y) ? Y : zi(l[m + 1]) ? [] : {});
            }
            Hu(I, N, K), (I = I[N]);
          }
          return o;
        }
        var rb = Fc
            ? function (o, l) {
                return Fc.set(o, l), o;
              }
            : $n,
          IT = zc
            ? function (o, l) {
                return zc(o, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: wv(l),
                  writable: !0,
                });
              }
            : $n;
        function $T(o) {
          return nf(Ol(o));
        }
        function yr(o, l, s) {
          var p = -1,
            m = o.length;
          l < 0 && (l = -l > m ? 0 : m + l),
            (s = s > m ? m : s),
            s < 0 && (s += m),
            (m = l > s ? 0 : (s - l) >>> 0),
            (l >>>= 0);
          for (var _ = F(m); ++p < m; ) _[p] = o[p + l];
          return _;
        }
        function MT(o, l) {
          var s;
          return (
            So(o, function (p, m, _) {
              return (s = l(p, m, _)), !s;
            }),
            !!s
          );
        }
        function Kc(o, l, s) {
          var p = 0,
            m = o == null ? p : o.length;
          if (typeof l == "number" && l === l && m <= de) {
            for (; p < m; ) {
              var _ = (p + m) >>> 1,
                P = o[_];
              P !== null && !Gn(P) && (s ? P <= l : P < l)
                ? (p = _ + 1)
                : (m = _);
            }
            return m;
          }
          return Yh(o, l, $n, s);
        }
        function Yh(o, l, s, p) {
          var m = 0,
            _ = o == null ? 0 : o.length;
          if (_ === 0) return 0;
          l = s(l);
          for (
            var P = l !== l, I = l === null, N = Gn(l), K = l === n;
            m < _;

          ) {
            var Y = Dc((m + _) / 2),
              X = s(o[Y]),
              te = X !== n,
              ce = X === null,
              ye = X === X,
              Pe = Gn(X);
            if (P) var be = p || ye;
            else
              K
                ? (be = ye && (p || te))
                : I
                ? (be = ye && te && (p || !ce))
                : N
                ? (be = ye && te && !ce && (p || !Pe))
                : ce || Pe
                ? (be = !1)
                : (be = p ? X <= l : X < l);
            be ? (m = Y + 1) : (_ = Y);
          }
          return hn(_, Q);
        }
        function ib(o, l) {
          for (var s = -1, p = o.length, m = 0, _ = []; ++s < p; ) {
            var P = o[s],
              I = l ? l(P) : P;
            if (!s || !zr(I, N)) {
              var N = I;
              _[m++] = P === 0 ? 0 : P;
            }
          }
          return _;
        }
        function ob(o) {
          return typeof o == "number" ? o : Gn(o) ? W : +o;
        }
        function Vn(o) {
          if (typeof o == "string") return o;
          if (Ee(o)) return vt(o, Vn) + "";
          if (Gn(o)) return z1 ? z1.call(o) : "";
          var l = o + "";
          return l == "0" && 1 / o == -z ? "-0" : l;
        }
        function xo(o, l, s) {
          var p = -1,
            m = Oc,
            _ = o.length,
            P = !0,
            I = [],
            N = I;
          if (s) (P = !1), (m = Ch);
          else if (_ >= i) {
            var K = l ? null : VT(o);
            if (K) return Pc(K);
            (P = !1), (m = zu), (N = new ya());
          } else N = l ? [] : I;
          e: for (; ++p < _; ) {
            var Y = o[p],
              X = l ? l(Y) : Y;
            if (((Y = s || Y !== 0 ? Y : 0), P && X === X)) {
              for (var te = N.length; te--; ) if (N[te] === X) continue e;
              l && N.push(X), I.push(Y);
            } else m(N, X, s) || (N !== I && N.push(X), I.push(Y));
          }
          return I;
        }
        function Xh(o, l) {
          return (
            (l = Co(l, o)), (o = $b(o, l)), o == null || delete o[si(br(l))]
          );
        }
        function ab(o, l, s, p) {
          return Ku(o, l, s(wa(o, l)), p);
        }
        function Yc(o, l, s, p) {
          for (
            var m = o.length, _ = p ? m : -1;
            (p ? _-- : ++_ < m) && l(o[_], _, o);

          );
          return s
            ? yr(o, p ? 0 : _, p ? _ + 1 : m)
            : yr(o, p ? _ + 1 : 0, p ? m : _);
        }
        function lb(o, l) {
          var s = o;
          return (
            s instanceof Le && (s = s.value()),
            _h(
              l,
              function (p, m) {
                return m.func.apply(m.thisArg, yo([p], m.args));
              },
              s
            )
          );
        }
        function Qh(o, l, s) {
          var p = o.length;
          if (p < 2) return p ? xo(o[0]) : [];
          for (var m = -1, _ = F(p); ++m < p; )
            for (var P = o[m], I = -1; ++I < p; )
              I != m && (_[m] = Uu(_[m] || P, o[I], l, s));
          return xo(on(_, 1), l, s);
        }
        function ub(o, l, s) {
          for (var p = -1, m = o.length, _ = l.length, P = {}; ++p < m; ) {
            var I = p < _ ? l[p] : n;
            s(P, o[p], I);
          }
          return P;
        }
        function qh(o) {
          return It(o) ? o : [];
        }
        function Zh(o) {
          return typeof o == "function" ? o : $n;
        }
        function Co(o, l) {
          return Ee(o) ? o : lv(o, l) ? [o] : zb(Ge(o));
        }
        var LT = Re;
        function _o(o, l, s) {
          var p = o.length;
          return (s = s === n ? p : s), !l && s >= p ? o : yr(o, l, s);
        }
        var sb =
          xP ||
          function (o) {
            return rn.clearTimeout(o);
          };
        function cb(o, l) {
          if (l) return o.slice();
          var s = o.length,
            p = R1 ? R1(s) : new o.constructor(s);
          return o.copy(p), p;
        }
        function Jh(o) {
          var l = new o.constructor(o.byteLength);
          return new Mc(l).set(new Mc(o)), l;
        }
        function NT(o, l) {
          var s = l ? Jh(o.buffer) : o.buffer;
          return new o.constructor(s, o.byteOffset, o.byteLength);
        }
        function zT(o) {
          var l = new o.constructor(o.source, so.exec(o));
          return (l.lastIndex = o.lastIndex), l;
        }
        function jT(o) {
          return Wu ? tt(Wu.call(o)) : {};
        }
        function fb(o, l) {
          var s = l ? Jh(o.buffer) : o.buffer;
          return new o.constructor(s, o.byteOffset, o.length);
        }
        function db(o, l) {
          if (o !== l) {
            var s = o !== n,
              p = o === null,
              m = o === o,
              _ = Gn(o),
              P = l !== n,
              I = l === null,
              N = l === l,
              K = Gn(l);
            if (
              (!I && !K && !_ && o > l) ||
              (_ && P && N && !I && !K) ||
              (p && P && N) ||
              (!s && N) ||
              !m
            )
              return 1;
            if (
              (!p && !_ && !K && o < l) ||
              (K && s && m && !p && !_) ||
              (I && s && m) ||
              (!P && m) ||
              !N
            )
              return -1;
          }
          return 0;
        }
        function DT(o, l, s) {
          for (
            var p = -1,
              m = o.criteria,
              _ = l.criteria,
              P = m.length,
              I = s.length;
            ++p < P;

          ) {
            var N = db(m[p], _[p]);
            if (N) {
              if (p >= I) return N;
              var K = s[p];
              return N * (K == "desc" ? -1 : 1);
            }
          }
          return o.index - l.index;
        }
        function pb(o, l, s, p) {
          for (
            var m = -1,
              _ = o.length,
              P = s.length,
              I = -1,
              N = l.length,
              K = Wt(_ - P, 0),
              Y = F(N + K),
              X = !p;
            ++I < N;

          )
            Y[I] = l[I];
          for (; ++m < P; ) (X || m < _) && (Y[s[m]] = o[m]);
          for (; K--; ) Y[I++] = o[m++];
          return Y;
        }
        function hb(o, l, s, p) {
          for (
            var m = -1,
              _ = o.length,
              P = -1,
              I = s.length,
              N = -1,
              K = l.length,
              Y = Wt(_ - I, 0),
              X = F(Y + K),
              te = !p;
            ++m < Y;

          )
            X[m] = o[m];
          for (var ce = m; ++N < K; ) X[ce + N] = l[N];
          for (; ++P < I; ) (te || m < _) && (X[ce + s[P]] = o[m++]);
          return X;
        }
        function An(o, l) {
          var s = -1,
            p = o.length;
          for (l || (l = F(p)); ++s < p; ) l[s] = o[s];
          return l;
        }
        function ui(o, l, s, p) {
          var m = !s;
          s || (s = {});
          for (var _ = -1, P = l.length; ++_ < P; ) {
            var I = l[_],
              N = p ? p(s[I], o[I], I, s, o) : n;
            N === n && (N = o[I]), m ? Mi(s, I, N) : Hu(s, I, N);
          }
          return s;
        }
        function FT(o, l) {
          return ui(o, av(o), l);
        }
        function BT(o, l) {
          return ui(o, kb(o), l);
        }
        function Xc(o, l) {
          return function (s, p) {
            var m = Ee(s) ? Gk : sT,
              _ = l ? l() : {};
            return m(s, o, ge(p, 2), _);
          };
        }
        function xl(o) {
          return Re(function (l, s) {
            var p = -1,
              m = s.length,
              _ = m > 1 ? s[m - 1] : n,
              P = m > 2 ? s[2] : n;
            for (
              _ = o.length > 3 && typeof _ == "function" ? (m--, _) : n,
                P && Cn(s[0], s[1], P) && ((_ = m < 3 ? n : _), (m = 1)),
                l = tt(l);
              ++p < m;

            ) {
              var I = s[p];
              I && o(l, I, p, _);
            }
            return l;
          });
        }
        function vb(o, l) {
          return function (s, p) {
            if (s == null) return s;
            if (!Rn(s)) return o(s, p);
            for (
              var m = s.length, _ = l ? m : -1, P = tt(s);
              (l ? _-- : ++_ < m) && p(P[_], _, P) !== !1;

            );
            return s;
          };
        }
        function mb(o) {
          return function (l, s, p) {
            for (var m = -1, _ = tt(l), P = p(l), I = P.length; I--; ) {
              var N = P[o ? I : ++m];
              if (s(_[N], N, _) === !1) break;
            }
            return l;
          };
        }
        function WT(o, l, s) {
          var p = l & T,
            m = Yu(o);
          function _() {
            var P = this && this !== rn && this instanceof _ ? m : o;
            return P.apply(p ? s : this, arguments);
          }
          return _;
        }
        function gb(o) {
          return function (l) {
            l = Ge(l);
            var s = vl(l) ? Lr(l) : n,
              p = s ? s[0] : l.charAt(0),
              m = s ? _o(s, 1).join("") : l.slice(1);
            return p[o]() + m;
          };
        }
        function Cl(o) {
          return function (l) {
            return _h(vw(hw(l).replace(we, "")), o, "");
          };
        }
        function Yu(o) {
          return function () {
            var l = arguments;
            switch (l.length) {
              case 0:
                return new o();
              case 1:
                return new o(l[0]);
              case 2:
                return new o(l[0], l[1]);
              case 3:
                return new o(l[0], l[1], l[2]);
              case 4:
                return new o(l[0], l[1], l[2], l[3]);
              case 5:
                return new o(l[0], l[1], l[2], l[3], l[4]);
              case 6:
                return new o(l[0], l[1], l[2], l[3], l[4], l[5]);
              case 7:
                return new o(l[0], l[1], l[2], l[3], l[4], l[5], l[6]);
            }
            var s = Sl(o.prototype),
              p = o.apply(s, l);
            return xt(p) ? p : s;
          };
        }
        function HT(o, l, s) {
          var p = Yu(o);
          function m() {
            for (var _ = arguments.length, P = F(_), I = _, N = _l(m); I--; )
              P[I] = arguments[I];
            var K = _ < 3 && P[0] !== N && P[_ - 1] !== N ? [] : bo(P, N);
            if (((_ -= K.length), _ < s))
              return xb(o, l, Qc, m.placeholder, n, P, K, n, n, s - _);
            var Y = this && this !== rn && this instanceof m ? p : o;
            return Hn(Y, this, P);
          }
          return m;
        }
        function yb(o) {
          return function (l, s, p) {
            var m = tt(l);
            if (!Rn(l)) {
              var _ = ge(s, 3);
              (l = qt(l)),
                (s = function (I) {
                  return _(m[I], I, m);
                });
            }
            var P = o(l, s, p);
            return P > -1 ? m[_ ? l[P] : P] : n;
          };
        }
        function bb(o) {
          return Ni(function (l) {
            var s = l.length,
              p = s,
              m = mr.prototype.thru;
            for (o && l.reverse(); p--; ) {
              var _ = l[p];
              if (typeof _ != "function") throw new vr(u);
              if (m && !P && ef(_) == "wrapper") var P = new mr([], !0);
            }
            for (p = P ? p : s; ++p < s; ) {
              _ = l[p];
              var I = ef(_),
                N = I == "wrapper" ? iv(_) : n;
              N &&
              uv(N[0]) &&
              N[1] == (A | S | $ | U) &&
              !N[4].length &&
              N[9] == 1
                ? (P = P[ef(N[0])].apply(P, N[3]))
                : (P = _.length == 1 && uv(_) ? P[I]() : P.thru(_));
            }
            return function () {
              var K = arguments,
                Y = K[0];
              if (P && K.length == 1 && Ee(Y)) return P.plant(Y).value();
              for (var X = 0, te = s ? l[X].apply(this, K) : Y; ++X < s; )
                te = l[X].call(this, te);
              return te;
            };
          });
        }
        function Qc(o, l, s, p, m, _, P, I, N, K) {
          var Y = l & A,
            X = l & T,
            te = l & C,
            ce = l & (S | k),
            ye = l & G,
            Pe = te ? n : Yu(o);
          function be() {
            for (var $e = arguments.length, je = F($e), Kn = $e; Kn--; )
              je[Kn] = arguments[Kn];
            if (ce)
              var _n = _l(be),
                Yn = tP(je, _n);
            if (
              (p && (je = pb(je, p, m, ce)),
              _ && (je = hb(je, _, P, ce)),
              ($e -= Yn),
              ce && $e < K)
            ) {
              var $t = bo(je, _n);
              return xb(o, l, Qc, be.placeholder, s, je, $t, I, N, K - $e);
            }
            var jr = X ? s : this,
              Fi = te ? jr[o] : o;
            return (
              ($e = je.length),
              I ? (je = s3(je, I)) : ye && $e > 1 && je.reverse(),
              Y && N < $e && (je.length = N),
              this && this !== rn && this instanceof be && (Fi = Pe || Yu(Fi)),
              Fi.apply(jr, je)
            );
          }
          return be;
        }
        function wb(o, l) {
          return function (s, p) {
            return gT(s, o, l(p), {});
          };
        }
        function qc(o, l) {
          return function (s, p) {
            var m;
            if (s === n && p === n) return l;
            if ((s !== n && (m = s), p !== n)) {
              if (m === n) return p;
              typeof s == "string" || typeof p == "string"
                ? ((s = Vn(s)), (p = Vn(p)))
                : ((s = ob(s)), (p = ob(p))),
                (m = o(s, p));
            }
            return m;
          };
        }
        function ev(o) {
          return Ni(function (l) {
            return (
              (l = vt(l, Un(ge()))),
              Re(function (s) {
                var p = this;
                return o(l, function (m) {
                  return Hn(m, p, s);
                });
              })
            );
          });
        }
        function Zc(o, l) {
          l = l === n ? " " : Vn(l);
          var s = l.length;
          if (s < 2) return s ? Kh(l, o) : l;
          var p = Kh(l, jc(o / ml(l)));
          return vl(l) ? _o(Lr(p), 0, o).join("") : p.slice(0, o);
        }
        function UT(o, l, s, p) {
          var m = l & T,
            _ = Yu(o);
          function P() {
            for (
              var I = -1,
                N = arguments.length,
                K = -1,
                Y = p.length,
                X = F(Y + N),
                te = this && this !== rn && this instanceof P ? _ : o;
              ++K < Y;

            )
              X[K] = p[K];
            for (; N--; ) X[K++] = arguments[++I];
            return Hn(te, m ? s : this, X);
          }
          return P;
        }
        function Sb(o) {
          return function (l, s, p) {
            return (
              p && typeof p != "number" && Cn(l, s, p) && (s = p = n),
              (l = Di(l)),
              s === n ? ((s = l), (l = 0)) : (s = Di(s)),
              (p = p === n ? (l < s ? 1 : -1) : Di(p)),
              TT(l, s, p, o)
            );
          };
        }
        function Jc(o) {
          return function (l, s) {
            return (
              (typeof l == "string" && typeof s == "string") ||
                ((l = wr(l)), (s = wr(s))),
              o(l, s)
            );
          };
        }
        function xb(o, l, s, p, m, _, P, I, N, K) {
          var Y = l & S,
            X = Y ? P : n,
            te = Y ? n : P,
            ce = Y ? _ : n,
            ye = Y ? n : _;
          (l |= Y ? $ : L), (l &= ~(Y ? L : $)), l & y || (l &= ~(T | C));
          var Pe = [o, l, m, ce, X, ye, te, I, N, K],
            be = s.apply(n, Pe);
          return uv(o) && Mb(be, Pe), (be.placeholder = p), Lb(be, o, l);
        }
        function tv(o) {
          var l = Bt[o];
          return function (s, p) {
            if (
              ((s = wr(s)), (p = p == null ? 0 : hn(ke(p), 292)), p && L1(s))
            ) {
              var m = (Ge(s) + "e").split("e"),
                _ = l(m[0] + "e" + (+m[1] + p));
              return (
                (m = (Ge(_) + "e").split("e")), +(m[0] + "e" + (+m[1] - p))
              );
            }
            return l(s);
          };
        }
        var VT =
          bl && 1 / Pc(new bl([, -0]))[1] == z
            ? function (o) {
                return new bl(o);
              }
            : Cv;
        function Cb(o) {
          return function (l) {
            var s = vn(l);
            return s == Ie ? Rh(l) : s == pe ? uP(l) : eP(l, o(l));
          };
        }
        function Li(o, l, s, p, m, _, P, I) {
          var N = l & C;
          if (!N && typeof o != "function") throw new vr(u);
          var K = p ? p.length : 0;
          if (
            (K || ((l &= ~($ | L)), (p = m = n)),
            (P = P === n ? P : Wt(ke(P), 0)),
            (I = I === n ? I : ke(I)),
            (K -= m ? m.length : 0),
            l & L)
          ) {
            var Y = p,
              X = m;
            p = m = n;
          }
          var te = N ? n : iv(o),
            ce = [o, l, s, p, m, Y, X, _, P, I];
          if (
            (te && a3(ce, te),
            (o = ce[0]),
            (l = ce[1]),
            (s = ce[2]),
            (p = ce[3]),
            (m = ce[4]),
            (I = ce[9] = ce[9] === n ? (N ? 0 : o.length) : Wt(ce[9] - K, 0)),
            !I && l & (S | k) && (l &= ~(S | k)),
            !l || l == T)
          )
            var ye = WT(o, l, s);
          else
            l == S || l == k
              ? (ye = HT(o, l, I))
              : (l == $ || l == (T | $)) && !m.length
              ? (ye = UT(o, l, s, p))
              : (ye = Qc.apply(n, ce));
          var Pe = te ? rb : Mb;
          return Lb(Pe(ye, ce), o, l);
        }
        function _b(o, l, s, p) {
          return o === n || (zr(o, yl[s]) && !Ye.call(p, s)) ? l : o;
        }
        function Eb(o, l, s, p, m, _) {
          return (
            xt(o) && xt(l) && (_.set(l, o), Gc(o, l, n, Eb, _), _.delete(l)), o
          );
        }
        function GT(o) {
          return qu(o) ? n : o;
        }
        function Ob(o, l, s, p, m, _) {
          var P = s & E,
            I = o.length,
            N = l.length;
          if (I != N && !(P && N > I)) return !1;
          var K = _.get(o),
            Y = _.get(l);
          if (K && Y) return K == l && Y == o;
          var X = -1,
            te = !0,
            ce = s & O ? new ya() : n;
          for (_.set(o, l), _.set(l, o); ++X < I; ) {
            var ye = o[X],
              Pe = l[X];
            if (p) var be = P ? p(Pe, ye, X, l, o, _) : p(ye, Pe, X, o, l, _);
            if (be !== n) {
              if (be) continue;
              te = !1;
              break;
            }
            if (ce) {
              if (
                !Eh(l, function ($e, je) {
                  if (!zu(ce, je) && (ye === $e || m(ye, $e, s, p, _)))
                    return ce.push(je);
                })
              ) {
                te = !1;
                break;
              }
            } else if (!(ye === Pe || m(ye, Pe, s, p, _))) {
              te = !1;
              break;
            }
          }
          return _.delete(o), _.delete(l), te;
        }
        function KT(o, l, s, p, m, _, P) {
          switch (s) {
            case Fn:
              if (o.byteLength != l.byteLength || o.byteOffset != l.byteOffset)
                return !1;
              (o = o.buffer), (l = l.buffer);
            case $r:
              return !(
                o.byteLength != l.byteLength || !_(new Mc(o), new Mc(l))
              );
            case Fe:
            case Ke:
            case Ze:
              return zr(+o, +l);
            case Ue:
              return o.name == l.name && o.message == l.message;
            case Ce:
            case Ae:
              return o == l + "";
            case Ie:
              var I = Rh;
            case pe:
              var N = p & E;
              if ((I || (I = Pc), o.size != l.size && !N)) return !1;
              var K = P.get(o);
              if (K) return K == l;
              (p |= O), P.set(o, l);
              var Y = Ob(I(o), I(l), p, m, _, P);
              return P.delete(o), Y;
            case Je:
              if (Wu) return Wu.call(o) == Wu.call(l);
          }
          return !1;
        }
        function YT(o, l, s, p, m, _) {
          var P = s & E,
            I = nv(o),
            N = I.length,
            K = nv(l),
            Y = K.length;
          if (N != Y && !P) return !1;
          for (var X = N; X--; ) {
            var te = I[X];
            if (!(P ? te in l : Ye.call(l, te))) return !1;
          }
          var ce = _.get(o),
            ye = _.get(l);
          if (ce && ye) return ce == l && ye == o;
          var Pe = !0;
          _.set(o, l), _.set(l, o);
          for (var be = P; ++X < N; ) {
            te = I[X];
            var $e = o[te],
              je = l[te];
            if (p) var Kn = P ? p(je, $e, te, l, o, _) : p($e, je, te, o, l, _);
            if (!(Kn === n ? $e === je || m($e, je, s, p, _) : Kn)) {
              Pe = !1;
              break;
            }
            be || (be = te == "constructor");
          }
          if (Pe && !be) {
            var _n = o.constructor,
              Yn = l.constructor;
            _n != Yn &&
              "constructor" in o &&
              "constructor" in l &&
              !(
                typeof _n == "function" &&
                _n instanceof _n &&
                typeof Yn == "function" &&
                Yn instanceof Yn
              ) &&
              (Pe = !1);
          }
          return _.delete(o), _.delete(l), Pe;
        }
        function Ni(o) {
          return cv(Ib(o, n, Bb), o + "");
        }
        function nv(o) {
          return G1(o, qt, av);
        }
        function rv(o) {
          return G1(o, In, kb);
        }
        var iv = Fc
          ? function (o) {
              return Fc.get(o);
            }
          : Cv;
        function ef(o) {
          for (
            var l = o.name + "", s = wl[l], p = Ye.call(wl, l) ? s.length : 0;
            p--;

          ) {
            var m = s[p],
              _ = m.func;
            if (_ == null || _ == o) return m.name;
          }
          return l;
        }
        function _l(o) {
          var l = Ye.call(w, "placeholder") ? w : o;
          return l.placeholder;
        }
        function ge() {
          var o = w.iteratee || Sv;
          return (
            (o = o === Sv ? X1 : o),
            arguments.length ? o(arguments[0], arguments[1]) : o
          );
        }
        function tf(o, l) {
          var s = o.__data__;
          return n3(l) ? s[typeof l == "string" ? "string" : "hash"] : s.map;
        }
        function ov(o) {
          for (var l = qt(o), s = l.length; s--; ) {
            var p = l[s],
              m = o[p];
            l[s] = [p, m, Ab(m)];
          }
          return l;
        }
        function Sa(o, l) {
          var s = oP(o, l);
          return Y1(s) ? s : n;
        }
        function XT(o) {
          var l = Ye.call(o, ma),
            s = o[ma];
          try {
            o[ma] = n;
            var p = !0;
          } catch {}
          var m = Ic.call(o);
          return p && (l ? (o[ma] = s) : delete o[ma]), m;
        }
        var av = $h
            ? function (o) {
                return o == null
                  ? []
                  : ((o = tt(o)),
                    go($h(o), function (l) {
                      return $1.call(o, l);
                    }));
              }
            : _v,
          kb = $h
            ? function (o) {
                for (var l = []; o; ) yo(l, av(o)), (o = Lc(o));
                return l;
              }
            : _v,
          vn = xn;
        ((Mh && vn(new Mh(new ArrayBuffer(1))) != Fn) ||
          (Du && vn(new Du()) != Ie) ||
          (Lh && vn(Lh.resolve()) != bt) ||
          (bl && vn(new bl()) != pe) ||
          (Fu && vn(new Fu()) != ur)) &&
          (vn = function (o) {
            var l = xn(o),
              s = l == De ? o.constructor : n,
              p = s ? xa(s) : "";
            if (p)
              switch (p) {
                case RP:
                  return Fn;
                case IP:
                  return Ie;
                case $P:
                  return bt;
                case MP:
                  return pe;
                case LP:
                  return ur;
              }
            return l;
          });
        function QT(o, l, s) {
          for (var p = -1, m = s.length; ++p < m; ) {
            var _ = s[p],
              P = _.size;
            switch (_.type) {
              case "drop":
                o += P;
                break;
              case "dropRight":
                l -= P;
                break;
              case "take":
                l = hn(l, o + P);
                break;
              case "takeRight":
                o = Wt(o, l - P);
                break;
            }
          }
          return { start: o, end: l };
        }
        function qT(o) {
          var l = o.match(nn);
          return l ? l[1].split(nl) : [];
        }
        function Pb(o, l, s) {
          l = Co(l, o);
          for (var p = -1, m = l.length, _ = !1; ++p < m; ) {
            var P = si(l[p]);
            if (!(_ = o != null && s(o, P))) break;
            o = o[P];
          }
          return _ || ++p != m
            ? _
            : ((m = o == null ? 0 : o.length),
              !!m && sf(m) && zi(P, m) && (Ee(o) || Ca(o)));
        }
        function ZT(o) {
          var l = o.length,
            s = new o.constructor(l);
          return (
            l &&
              typeof o[0] == "string" &&
              Ye.call(o, "index") &&
              ((s.index = o.index), (s.input = o.input)),
            s
          );
        }
        function Tb(o) {
          return typeof o.constructor == "function" && !Xu(o) ? Sl(Lc(o)) : {};
        }
        function JT(o, l, s) {
          var p = o.constructor;
          switch (l) {
            case $r:
              return Jh(o);
            case Fe:
            case Ke:
              return new p(+o);
            case Fn:
              return NT(o, s);
            case tn:
            case Qt:
            case cn:
            case qr:
            case Zr:
            case wi:
            case fn:
            case wt:
            case dn:
              return fb(o, s);
            case Ie:
              return new p();
            case Ze:
            case Ae:
              return new p(o);
            case Ce:
              return zT(o);
            case pe:
              return new p();
            case Je:
              return jT(o);
          }
        }
        function e3(o, l) {
          var s = l.length;
          if (!s) return o;
          var p = s - 1;
          return (
            (l[p] = (s > 1 ? "& " : "") + l[p]),
            (l = l.join(s > 2 ? ", " : " ")),
            o.replace(
              ei,
              `{
/* [wrapped with ` +
                l +
                `] */
`
            )
          );
        }
        function t3(o) {
          return Ee(o) || Ca(o) || !!(M1 && o && o[M1]);
        }
        function zi(o, l) {
          var s = typeof o;
          return (
            (l = l ?? R),
            !!l &&
              (s == "number" || (s != "symbol" && Ft.test(o))) &&
              o > -1 &&
              o % 1 == 0 &&
              o < l
          );
        }
        function Cn(o, l, s) {
          if (!xt(s)) return !1;
          var p = typeof l;
          return (
            p == "number" ? Rn(s) && zi(l, s.length) : p == "string" && l in s
          )
            ? zr(s[l], o)
            : !1;
        }
        function lv(o, l) {
          if (Ee(o)) return !1;
          var s = typeof o;
          return s == "number" ||
            s == "symbol" ||
            s == "boolean" ||
            o == null ||
            Gn(o)
            ? !0
            : sr.test(o) || !Nt.test(o) || (l != null && o in tt(l));
        }
        function n3(o) {
          var l = typeof o;
          return l == "string" ||
            l == "number" ||
            l == "symbol" ||
            l == "boolean"
            ? o !== "__proto__"
            : o === null;
        }
        function uv(o) {
          var l = ef(o),
            s = w[l];
          if (typeof s != "function" || !(l in Le.prototype)) return !1;
          if (o === s) return !0;
          var p = iv(s);
          return !!p && o === p[0];
        }
        function r3(o) {
          return !!A1 && A1 in o;
        }
        var i3 = Ac ? ji : Ev;
        function Xu(o) {
          var l = o && o.constructor,
            s = (typeof l == "function" && l.prototype) || yl;
          return o === s;
        }
        function Ab(o) {
          return o === o && !xt(o);
        }
        function Rb(o, l) {
          return function (s) {
            return s == null ? !1 : s[o] === l && (l !== n || o in tt(s));
          };
        }
        function o3(o) {
          var l = lf(o, function (p) {
              return s.size === d && s.clear(), p;
            }),
            s = l.cache;
          return l;
        }
        function a3(o, l) {
          var s = o[1],
            p = l[1],
            m = s | p,
            _ = m < (T | C | A),
            P =
              (p == A && s == S) ||
              (p == A && s == U && o[7].length <= l[8]) ||
              (p == (A | U) && l[7].length <= l[8] && s == S);
          if (!(_ || P)) return o;
          p & T && ((o[2] = l[2]), (m |= s & T ? 0 : y));
          var I = l[3];
          if (I) {
            var N = o[3];
            (o[3] = N ? pb(N, I, l[4]) : I), (o[4] = N ? bo(o[3], h) : l[4]);
          }
          return (
            (I = l[5]),
            I &&
              ((N = o[5]),
              (o[5] = N ? hb(N, I, l[6]) : I),
              (o[6] = N ? bo(o[5], h) : l[6])),
            (I = l[7]),
            I && (o[7] = I),
            p & A && (o[8] = o[8] == null ? l[8] : hn(o[8], l[8])),
            o[9] == null && (o[9] = l[9]),
            (o[0] = l[0]),
            (o[1] = m),
            o
          );
        }
        function l3(o) {
          var l = [];
          if (o != null) for (var s in tt(o)) l.push(s);
          return l;
        }
        function u3(o) {
          return Ic.call(o);
        }
        function Ib(o, l, s) {
          return (
            (l = Wt(l === n ? o.length - 1 : l, 0)),
            function () {
              for (
                var p = arguments, m = -1, _ = Wt(p.length - l, 0), P = F(_);
                ++m < _;

              )
                P[m] = p[l + m];
              m = -1;
              for (var I = F(l + 1); ++m < l; ) I[m] = p[m];
              return (I[l] = s(P)), Hn(o, this, I);
            }
          );
        }
        function $b(o, l) {
          return l.length < 2 ? o : wa(o, yr(l, 0, -1));
        }
        function s3(o, l) {
          for (var s = o.length, p = hn(l.length, s), m = An(o); p--; ) {
            var _ = l[p];
            o[p] = zi(_, s) ? m[_] : n;
          }
          return o;
        }
        function sv(o, l) {
          if (
            !(l === "constructor" && typeof o[l] == "function") &&
            l != "__proto__"
          )
            return o[l];
        }
        var Mb = Nb(rb),
          Qu =
            _P ||
            function (o, l) {
              return rn.setTimeout(o, l);
            },
          cv = Nb(IT);
        function Lb(o, l, s) {
          var p = l + "";
          return cv(o, e3(p, c3(qT(p), s)));
        }
        function Nb(o) {
          var l = 0,
            s = 0;
          return function () {
            var p = PP(),
              m = ne - (p - s);
            if (((s = p), m > 0)) {
              if (++l >= le) return arguments[0];
            } else l = 0;
            return o.apply(n, arguments);
          };
        }
        function nf(o, l) {
          var s = -1,
            p = o.length,
            m = p - 1;
          for (l = l === n ? p : l; ++s < l; ) {
            var _ = Gh(s, m),
              P = o[_];
            (o[_] = o[s]), (o[s] = P);
          }
          return (o.length = l), o;
        }
        var zb = o3(function (o) {
          var l = [];
          return (
            o.charCodeAt(0) === 46 && l.push(""),
            o.replace(Jr, function (s, p, m, _) {
              l.push(m ? _.replace(ri, "$1") : p || s);
            }),
            l
          );
        });
        function si(o) {
          if (typeof o == "string" || Gn(o)) return o;
          var l = o + "";
          return l == "0" && 1 / o == -z ? "-0" : l;
        }
        function xa(o) {
          if (o != null) {
            try {
              return Rc.call(o);
            } catch {}
            try {
              return o + "";
            } catch {}
          }
          return "";
        }
        function c3(o, l) {
          return (
            hr(Se, function (s) {
              var p = "_." + s[0];
              l & s[1] && !Oc(o, p) && o.push(p);
            }),
            o.sort()
          );
        }
        function jb(o) {
          if (o instanceof Le) return o.clone();
          var l = new mr(o.__wrapped__, o.__chain__);
          return (
            (l.__actions__ = An(o.__actions__)),
            (l.__index__ = o.__index__),
            (l.__values__ = o.__values__),
            l
          );
        }
        function f3(o, l, s) {
          (s ? Cn(o, l, s) : l === n) ? (l = 1) : (l = Wt(ke(l), 0));
          var p = o == null ? 0 : o.length;
          if (!p || l < 1) return [];
          for (var m = 0, _ = 0, P = F(jc(p / l)); m < p; )
            P[_++] = yr(o, m, (m += l));
          return P;
        }
        function d3(o) {
          for (
            var l = -1, s = o == null ? 0 : o.length, p = 0, m = [];
            ++l < s;

          ) {
            var _ = o[l];
            _ && (m[p++] = _);
          }
          return m;
        }
        function p3() {
          var o = arguments.length;
          if (!o) return [];
          for (var l = F(o - 1), s = arguments[0], p = o; p--; )
            l[p - 1] = arguments[p];
          return yo(Ee(s) ? An(s) : [s], on(l, 1));
        }
        var h3 = Re(function (o, l) {
            return It(o) ? Uu(o, on(l, 1, It, !0)) : [];
          }),
          v3 = Re(function (o, l) {
            var s = br(l);
            return (
              It(s) && (s = n), It(o) ? Uu(o, on(l, 1, It, !0), ge(s, 2)) : []
            );
          }),
          m3 = Re(function (o, l) {
            var s = br(l);
            return It(s) && (s = n), It(o) ? Uu(o, on(l, 1, It, !0), n, s) : [];
          });
        function g3(o, l, s) {
          var p = o == null ? 0 : o.length;
          return p
            ? ((l = s || l === n ? 1 : ke(l)), yr(o, l < 0 ? 0 : l, p))
            : [];
        }
        function y3(o, l, s) {
          var p = o == null ? 0 : o.length;
          return p
            ? ((l = s || l === n ? 1 : ke(l)),
              (l = p - l),
              yr(o, 0, l < 0 ? 0 : l))
            : [];
        }
        function b3(o, l) {
          return o && o.length ? Yc(o, ge(l, 3), !0, !0) : [];
        }
        function w3(o, l) {
          return o && o.length ? Yc(o, ge(l, 3), !0) : [];
        }
        function S3(o, l, s, p) {
          var m = o == null ? 0 : o.length;
          return m
            ? (s && typeof s != "number" && Cn(o, l, s) && ((s = 0), (p = m)),
              pT(o, l, s, p))
            : [];
        }
        function Db(o, l, s) {
          var p = o == null ? 0 : o.length;
          if (!p) return -1;
          var m = s == null ? 0 : ke(s);
          return m < 0 && (m = Wt(p + m, 0)), kc(o, ge(l, 3), m);
        }
        function Fb(o, l, s) {
          var p = o == null ? 0 : o.length;
          if (!p) return -1;
          var m = p - 1;
          return (
            s !== n && ((m = ke(s)), (m = s < 0 ? Wt(p + m, 0) : hn(m, p - 1))),
            kc(o, ge(l, 3), m, !0)
          );
        }
        function Bb(o) {
          var l = o == null ? 0 : o.length;
          return l ? on(o, 1) : [];
        }
        function x3(o) {
          var l = o == null ? 0 : o.length;
          return l ? on(o, z) : [];
        }
        function C3(o, l) {
          var s = o == null ? 0 : o.length;
          return s ? ((l = l === n ? 1 : ke(l)), on(o, l)) : [];
        }
        function _3(o) {
          for (var l = -1, s = o == null ? 0 : o.length, p = {}; ++l < s; ) {
            var m = o[l];
            p[m[0]] = m[1];
          }
          return p;
        }
        function Wb(o) {
          return o && o.length ? o[0] : n;
        }
        function E3(o, l, s) {
          var p = o == null ? 0 : o.length;
          if (!p) return -1;
          var m = s == null ? 0 : ke(s);
          return m < 0 && (m = Wt(p + m, 0)), hl(o, l, m);
        }
        function O3(o) {
          var l = o == null ? 0 : o.length;
          return l ? yr(o, 0, -1) : [];
        }
        var k3 = Re(function (o) {
            var l = vt(o, qh);
            return l.length && l[0] === o[0] ? Bh(l) : [];
          }),
          P3 = Re(function (o) {
            var l = br(o),
              s = vt(o, qh);
            return (
              l === br(s) ? (l = n) : s.pop(),
              s.length && s[0] === o[0] ? Bh(s, ge(l, 2)) : []
            );
          }),
          T3 = Re(function (o) {
            var l = br(o),
              s = vt(o, qh);
            return (
              (l = typeof l == "function" ? l : n),
              l && s.pop(),
              s.length && s[0] === o[0] ? Bh(s, n, l) : []
            );
          });
        function A3(o, l) {
          return o == null ? "" : OP.call(o, l);
        }
        function br(o) {
          var l = o == null ? 0 : o.length;
          return l ? o[l - 1] : n;
        }
        function R3(o, l, s) {
          var p = o == null ? 0 : o.length;
          if (!p) return -1;
          var m = p;
          return (
            s !== n && ((m = ke(s)), (m = m < 0 ? Wt(p + m, 0) : hn(m, p - 1))),
            l === l ? cP(o, l, m) : kc(o, x1, m, !0)
          );
        }
        function I3(o, l) {
          return o && o.length ? J1(o, ke(l)) : n;
        }
        var $3 = Re(Hb);
        function Hb(o, l) {
          return o && o.length && l && l.length ? Vh(o, l) : o;
        }
        function M3(o, l, s) {
          return o && o.length && l && l.length ? Vh(o, l, ge(s, 2)) : o;
        }
        function L3(o, l, s) {
          return o && o.length && l && l.length ? Vh(o, l, n, s) : o;
        }
        var N3 = Ni(function (o, l) {
          var s = o == null ? 0 : o.length,
            p = zh(o, l);
          return (
            nb(
              o,
              vt(l, function (m) {
                return zi(m, s) ? +m : m;
              }).sort(db)
            ),
            p
          );
        });
        function z3(o, l) {
          var s = [];
          if (!(o && o.length)) return s;
          var p = -1,
            m = [],
            _ = o.length;
          for (l = ge(l, 3); ++p < _; ) {
            var P = o[p];
            l(P, p, o) && (s.push(P), m.push(p));
          }
          return nb(o, m), s;
        }
        function fv(o) {
          return o == null ? o : AP.call(o);
        }
        function j3(o, l, s) {
          var p = o == null ? 0 : o.length;
          return p
            ? (s && typeof s != "number" && Cn(o, l, s)
                ? ((l = 0), (s = p))
                : ((l = l == null ? 0 : ke(l)), (s = s === n ? p : ke(s))),
              yr(o, l, s))
            : [];
        }
        function D3(o, l) {
          return Kc(o, l);
        }
        function F3(o, l, s) {
          return Yh(o, l, ge(s, 2));
        }
        function B3(o, l) {
          var s = o == null ? 0 : o.length;
          if (s) {
            var p = Kc(o, l);
            if (p < s && zr(o[p], l)) return p;
          }
          return -1;
        }
        function W3(o, l) {
          return Kc(o, l, !0);
        }
        function H3(o, l, s) {
          return Yh(o, l, ge(s, 2), !0);
        }
        function U3(o, l) {
          var s = o == null ? 0 : o.length;
          if (s) {
            var p = Kc(o, l, !0) - 1;
            if (zr(o[p], l)) return p;
          }
          return -1;
        }
        function V3(o) {
          return o && o.length ? ib(o) : [];
        }
        function G3(o, l) {
          return o && o.length ? ib(o, ge(l, 2)) : [];
        }
        function K3(o) {
          var l = o == null ? 0 : o.length;
          return l ? yr(o, 1, l) : [];
        }
        function Y3(o, l, s) {
          return o && o.length
            ? ((l = s || l === n ? 1 : ke(l)), yr(o, 0, l < 0 ? 0 : l))
            : [];
        }
        function X3(o, l, s) {
          var p = o == null ? 0 : o.length;
          return p
            ? ((l = s || l === n ? 1 : ke(l)),
              (l = p - l),
              yr(o, l < 0 ? 0 : l, p))
            : [];
        }
        function Q3(o, l) {
          return o && o.length ? Yc(o, ge(l, 3), !1, !0) : [];
        }
        function q3(o, l) {
          return o && o.length ? Yc(o, ge(l, 3)) : [];
        }
        var Z3 = Re(function (o) {
            return xo(on(o, 1, It, !0));
          }),
          J3 = Re(function (o) {
            var l = br(o);
            return It(l) && (l = n), xo(on(o, 1, It, !0), ge(l, 2));
          }),
          e4 = Re(function (o) {
            var l = br(o);
            return (
              (l = typeof l == "function" ? l : n), xo(on(o, 1, It, !0), n, l)
            );
          });
        function t4(o) {
          return o && o.length ? xo(o) : [];
        }
        function n4(o, l) {
          return o && o.length ? xo(o, ge(l, 2)) : [];
        }
        function r4(o, l) {
          return (
            (l = typeof l == "function" ? l : n),
            o && o.length ? xo(o, n, l) : []
          );
        }
        function dv(o) {
          if (!(o && o.length)) return [];
          var l = 0;
          return (
            (o = go(o, function (s) {
              if (It(s)) return (l = Wt(s.length, l)), !0;
            })),
            Th(l, function (s) {
              return vt(o, Oh(s));
            })
          );
        }
        function Ub(o, l) {
          if (!(o && o.length)) return [];
          var s = dv(o);
          return l == null
            ? s
            : vt(s, function (p) {
                return Hn(l, n, p);
              });
        }
        var i4 = Re(function (o, l) {
            return It(o) ? Uu(o, l) : [];
          }),
          o4 = Re(function (o) {
            return Qh(go(o, It));
          }),
          a4 = Re(function (o) {
            var l = br(o);
            return It(l) && (l = n), Qh(go(o, It), ge(l, 2));
          }),
          l4 = Re(function (o) {
            var l = br(o);
            return (l = typeof l == "function" ? l : n), Qh(go(o, It), n, l);
          }),
          u4 = Re(dv);
        function s4(o, l) {
          return ub(o || [], l || [], Hu);
        }
        function c4(o, l) {
          return ub(o || [], l || [], Ku);
        }
        var f4 = Re(function (o) {
          var l = o.length,
            s = l > 1 ? o[l - 1] : n;
          return (s = typeof s == "function" ? (o.pop(), s) : n), Ub(o, s);
        });
        function Vb(o) {
          var l = w(o);
          return (l.__chain__ = !0), l;
        }
        function d4(o, l) {
          return l(o), o;
        }
        function rf(o, l) {
          return l(o);
        }
        var p4 = Ni(function (o) {
          var l = o.length,
            s = l ? o[0] : 0,
            p = this.__wrapped__,
            m = function (_) {
              return zh(_, o);
            };
          return l > 1 ||
            this.__actions__.length ||
            !(p instanceof Le) ||
            !zi(s)
            ? this.thru(m)
            : ((p = p.slice(s, +s + (l ? 1 : 0))),
              p.__actions__.push({ func: rf, args: [m], thisArg: n }),
              new mr(p, this.__chain__).thru(function (_) {
                return l && !_.length && _.push(n), _;
              }));
        });
        function h4() {
          return Vb(this);
        }
        function v4() {
          return new mr(this.value(), this.__chain__);
        }
        function m4() {
          this.__values__ === n && (this.__values__ = ow(this.value()));
          var o = this.__index__ >= this.__values__.length,
            l = o ? n : this.__values__[this.__index__++];
          return { done: o, value: l };
        }
        function g4() {
          return this;
        }
        function y4(o) {
          for (var l, s = this; s instanceof Wc; ) {
            var p = jb(s);
            (p.__index__ = 0),
              (p.__values__ = n),
              l ? (m.__wrapped__ = p) : (l = p);
            var m = p;
            s = s.__wrapped__;
          }
          return (m.__wrapped__ = o), l;
        }
        function b4() {
          var o = this.__wrapped__;
          if (o instanceof Le) {
            var l = o;
            return (
              this.__actions__.length && (l = new Le(this)),
              (l = l.reverse()),
              l.__actions__.push({ func: rf, args: [fv], thisArg: n }),
              new mr(l, this.__chain__)
            );
          }
          return this.thru(fv);
        }
        function w4() {
          return lb(this.__wrapped__, this.__actions__);
        }
        var S4 = Xc(function (o, l, s) {
          Ye.call(o, s) ? ++o[s] : Mi(o, s, 1);
        });
        function x4(o, l, s) {
          var p = Ee(o) ? w1 : dT;
          return s && Cn(o, l, s) && (l = n), p(o, ge(l, 3));
        }
        function C4(o, l) {
          var s = Ee(o) ? go : U1;
          return s(o, ge(l, 3));
        }
        var _4 = yb(Db),
          E4 = yb(Fb);
        function O4(o, l) {
          return on(of(o, l), 1);
        }
        function k4(o, l) {
          return on(of(o, l), z);
        }
        function P4(o, l, s) {
          return (s = s === n ? 1 : ke(s)), on(of(o, l), s);
        }
        function Gb(o, l) {
          var s = Ee(o) ? hr : So;
          return s(o, ge(l, 3));
        }
        function Kb(o, l) {
          var s = Ee(o) ? Kk : H1;
          return s(o, ge(l, 3));
        }
        var T4 = Xc(function (o, l, s) {
          Ye.call(o, s) ? o[s].push(l) : Mi(o, s, [l]);
        });
        function A4(o, l, s, p) {
          (o = Rn(o) ? o : Ol(o)), (s = s && !p ? ke(s) : 0);
          var m = o.length;
          return (
            s < 0 && (s = Wt(m + s, 0)),
            cf(o) ? s <= m && o.indexOf(l, s) > -1 : !!m && hl(o, l, s) > -1
          );
        }
        var R4 = Re(function (o, l, s) {
            var p = -1,
              m = typeof l == "function",
              _ = Rn(o) ? F(o.length) : [];
            return (
              So(o, function (P) {
                _[++p] = m ? Hn(l, P, s) : Vu(P, l, s);
              }),
              _
            );
          }),
          I4 = Xc(function (o, l, s) {
            Mi(o, s, l);
          });
        function of(o, l) {
          var s = Ee(o) ? vt : Q1;
          return s(o, ge(l, 3));
        }
        function $4(o, l, s, p) {
          return o == null
            ? []
            : (Ee(l) || (l = l == null ? [] : [l]),
              (s = p ? n : s),
              Ee(s) || (s = s == null ? [] : [s]),
              eb(o, l, s));
        }
        var M4 = Xc(
          function (o, l, s) {
            o[s ? 0 : 1].push(l);
          },
          function () {
            return [[], []];
          }
        );
        function L4(o, l, s) {
          var p = Ee(o) ? _h : _1,
            m = arguments.length < 3;
          return p(o, ge(l, 4), s, m, So);
        }
        function N4(o, l, s) {
          var p = Ee(o) ? Yk : _1,
            m = arguments.length < 3;
          return p(o, ge(l, 4), s, m, H1);
        }
        function z4(o, l) {
          var s = Ee(o) ? go : U1;
          return s(o, uf(ge(l, 3)));
        }
        function j4(o) {
          var l = Ee(o) ? D1 : AT;
          return l(o);
        }
        function D4(o, l, s) {
          (s ? Cn(o, l, s) : l === n) ? (l = 1) : (l = ke(l));
          var p = Ee(o) ? lT : RT;
          return p(o, l);
        }
        function F4(o) {
          var l = Ee(o) ? uT : $T;
          return l(o);
        }
        function B4(o) {
          if (o == null) return 0;
          if (Rn(o)) return cf(o) ? ml(o) : o.length;
          var l = vn(o);
          return l == Ie || l == pe ? o.size : Hh(o).length;
        }
        function W4(o, l, s) {
          var p = Ee(o) ? Eh : MT;
          return s && Cn(o, l, s) && (l = n), p(o, ge(l, 3));
        }
        var H4 = Re(function (o, l) {
            if (o == null) return [];
            var s = l.length;
            return (
              s > 1 && Cn(o, l[0], l[1])
                ? (l = [])
                : s > 2 && Cn(l[0], l[1], l[2]) && (l = [l[0]]),
              eb(o, on(l, 1), [])
            );
          }),
          af =
            CP ||
            function () {
              return rn.Date.now();
            };
        function U4(o, l) {
          if (typeof l != "function") throw new vr(u);
          return (
            (o = ke(o)),
            function () {
              if (--o < 1) return l.apply(this, arguments);
            }
          );
        }
        function Yb(o, l, s) {
          return (
            (l = s ? n : l),
            (l = o && l == null ? o.length : l),
            Li(o, A, n, n, n, n, l)
          );
        }
        function Xb(o, l) {
          var s;
          if (typeof l != "function") throw new vr(u);
          return (
            (o = ke(o)),
            function () {
              return (
                --o > 0 && (s = l.apply(this, arguments)), o <= 1 && (l = n), s
              );
            }
          );
        }
        var pv = Re(function (o, l, s) {
            var p = T;
            if (s.length) {
              var m = bo(s, _l(pv));
              p |= $;
            }
            return Li(o, p, l, s, m);
          }),
          Qb = Re(function (o, l, s) {
            var p = T | C;
            if (s.length) {
              var m = bo(s, _l(Qb));
              p |= $;
            }
            return Li(l, p, o, s, m);
          });
        function qb(o, l, s) {
          l = s ? n : l;
          var p = Li(o, S, n, n, n, n, n, l);
          return (p.placeholder = qb.placeholder), p;
        }
        function Zb(o, l, s) {
          l = s ? n : l;
          var p = Li(o, k, n, n, n, n, n, l);
          return (p.placeholder = Zb.placeholder), p;
        }
        function Jb(o, l, s) {
          var p,
            m,
            _,
            P,
            I,
            N,
            K = 0,
            Y = !1,
            X = !1,
            te = !0;
          if (typeof o != "function") throw new vr(u);
          (l = wr(l) || 0),
            xt(s) &&
              ((Y = !!s.leading),
              (X = "maxWait" in s),
              (_ = X ? Wt(wr(s.maxWait) || 0, l) : _),
              (te = "trailing" in s ? !!s.trailing : te));
          function ce($t) {
            var jr = p,
              Fi = m;
            return (p = m = n), (K = $t), (P = o.apply(Fi, jr)), P;
          }
          function ye($t) {
            return (K = $t), (I = Qu($e, l)), Y ? ce($t) : P;
          }
          function Pe($t) {
            var jr = $t - N,
              Fi = $t - K,
              yw = l - jr;
            return X ? hn(yw, _ - Fi) : yw;
          }
          function be($t) {
            var jr = $t - N,
              Fi = $t - K;
            return N === n || jr >= l || jr < 0 || (X && Fi >= _);
          }
          function $e() {
            var $t = af();
            if (be($t)) return je($t);
            I = Qu($e, Pe($t));
          }
          function je($t) {
            return (I = n), te && p ? ce($t) : ((p = m = n), P);
          }
          function Kn() {
            I !== n && sb(I), (K = 0), (p = N = m = I = n);
          }
          function _n() {
            return I === n ? P : je(af());
          }
          function Yn() {
            var $t = af(),
              jr = be($t);
            if (((p = arguments), (m = this), (N = $t), jr)) {
              if (I === n) return ye(N);
              if (X) return sb(I), (I = Qu($e, l)), ce(N);
            }
            return I === n && (I = Qu($e, l)), P;
          }
          return (Yn.cancel = Kn), (Yn.flush = _n), Yn;
        }
        var V4 = Re(function (o, l) {
            return W1(o, 1, l);
          }),
          G4 = Re(function (o, l, s) {
            return W1(o, wr(l) || 0, s);
          });
        function K4(o) {
          return Li(o, G);
        }
        function lf(o, l) {
          if (typeof o != "function" || (l != null && typeof l != "function"))
            throw new vr(u);
          var s = function () {
            var p = arguments,
              m = l ? l.apply(this, p) : p[0],
              _ = s.cache;
            if (_.has(m)) return _.get(m);
            var P = o.apply(this, p);
            return (s.cache = _.set(m, P) || _), P;
          };
          return (s.cache = new (lf.Cache || $i)()), s;
        }
        lf.Cache = $i;
        function uf(o) {
          if (typeof o != "function") throw new vr(u);
          return function () {
            var l = arguments;
            switch (l.length) {
              case 0:
                return !o.call(this);
              case 1:
                return !o.call(this, l[0]);
              case 2:
                return !o.call(this, l[0], l[1]);
              case 3:
                return !o.call(this, l[0], l[1], l[2]);
            }
            return !o.apply(this, l);
          };
        }
        function Y4(o) {
          return Xb(2, o);
        }
        var X4 = LT(function (o, l) {
            l =
              l.length == 1 && Ee(l[0])
                ? vt(l[0], Un(ge()))
                : vt(on(l, 1), Un(ge()));
            var s = l.length;
            return Re(function (p) {
              for (var m = -1, _ = hn(p.length, s); ++m < _; )
                p[m] = l[m].call(this, p[m]);
              return Hn(o, this, p);
            });
          }),
          hv = Re(function (o, l) {
            var s = bo(l, _l(hv));
            return Li(o, $, n, l, s);
          }),
          ew = Re(function (o, l) {
            var s = bo(l, _l(ew));
            return Li(o, L, n, l, s);
          }),
          Q4 = Ni(function (o, l) {
            return Li(o, U, n, n, n, l);
          });
        function q4(o, l) {
          if (typeof o != "function") throw new vr(u);
          return (l = l === n ? l : ke(l)), Re(o, l);
        }
        function Z4(o, l) {
          if (typeof o != "function") throw new vr(u);
          return (
            (l = l == null ? 0 : Wt(ke(l), 0)),
            Re(function (s) {
              var p = s[l],
                m = _o(s, 0, l);
              return p && yo(m, p), Hn(o, this, m);
            })
          );
        }
        function J4(o, l, s) {
          var p = !0,
            m = !0;
          if (typeof o != "function") throw new vr(u);
          return (
            xt(s) &&
              ((p = "leading" in s ? !!s.leading : p),
              (m = "trailing" in s ? !!s.trailing : m)),
            Jb(o, l, { leading: p, maxWait: l, trailing: m })
          );
        }
        function eA(o) {
          return Yb(o, 1);
        }
        function tA(o, l) {
          return hv(Zh(l), o);
        }
        function nA() {
          if (!arguments.length) return [];
          var o = arguments[0];
          return Ee(o) ? o : [o];
        }
        function rA(o) {
          return gr(o, b);
        }
        function iA(o, l) {
          return (l = typeof l == "function" ? l : n), gr(o, b, l);
        }
        function oA(o) {
          return gr(o, v | b);
        }
        function aA(o, l) {
          return (l = typeof l == "function" ? l : n), gr(o, v | b, l);
        }
        function lA(o, l) {
          return l == null || B1(o, l, qt(l));
        }
        function zr(o, l) {
          return o === l || (o !== o && l !== l);
        }
        var uA = Jc(Fh),
          sA = Jc(function (o, l) {
            return o >= l;
          }),
          Ca = K1(
            (function () {
              return arguments;
            })()
          )
            ? K1
            : function (o) {
                return kt(o) && Ye.call(o, "callee") && !$1.call(o, "callee");
              },
          Ee = F.isArray,
          cA = h1 ? Un(h1) : yT;
        function Rn(o) {
          return o != null && sf(o.length) && !ji(o);
        }
        function It(o) {
          return kt(o) && Rn(o);
        }
        function fA(o) {
          return o === !0 || o === !1 || (kt(o) && xn(o) == Fe);
        }
        var Eo = EP || Ev,
          dA = v1 ? Un(v1) : bT;
        function pA(o) {
          return kt(o) && o.nodeType === 1 && !qu(o);
        }
        function hA(o) {
          if (o == null) return !0;
          if (
            Rn(o) &&
            (Ee(o) ||
              typeof o == "string" ||
              typeof o.splice == "function" ||
              Eo(o) ||
              El(o) ||
              Ca(o))
          )
            return !o.length;
          var l = vn(o);
          if (l == Ie || l == pe) return !o.size;
          if (Xu(o)) return !Hh(o).length;
          for (var s in o) if (Ye.call(o, s)) return !1;
          return !0;
        }
        function vA(o, l) {
          return Gu(o, l);
        }
        function mA(o, l, s) {
          s = typeof s == "function" ? s : n;
          var p = s ? s(o, l) : n;
          return p === n ? Gu(o, l, n, s) : !!p;
        }
        function vv(o) {
          if (!kt(o)) return !1;
          var l = xn(o);
          return (
            l == Ue ||
            l == ft ||
            (typeof o.message == "string" &&
              typeof o.name == "string" &&
              !qu(o))
          );
        }
        function gA(o) {
          return typeof o == "number" && L1(o);
        }
        function ji(o) {
          if (!xt(o)) return !1;
          var l = xn(o);
          return l == Lt || l == Kt || l == ze || l == ve;
        }
        function tw(o) {
          return typeof o == "number" && o == ke(o);
        }
        function sf(o) {
          return typeof o == "number" && o > -1 && o % 1 == 0 && o <= R;
        }
        function xt(o) {
          var l = typeof o;
          return o != null && (l == "object" || l == "function");
        }
        function kt(o) {
          return o != null && typeof o == "object";
        }
        var nw = m1 ? Un(m1) : ST;
        function yA(o, l) {
          return o === l || Wh(o, l, ov(l));
        }
        function bA(o, l, s) {
          return (s = typeof s == "function" ? s : n), Wh(o, l, ov(l), s);
        }
        function wA(o) {
          return rw(o) && o != +o;
        }
        function SA(o) {
          if (i3(o)) throw new _e(a);
          return Y1(o);
        }
        function xA(o) {
          return o === null;
        }
        function CA(o) {
          return o == null;
        }
        function rw(o) {
          return typeof o == "number" || (kt(o) && xn(o) == Ze);
        }
        function qu(o) {
          if (!kt(o) || xn(o) != De) return !1;
          var l = Lc(o);
          if (l === null) return !0;
          var s = Ye.call(l, "constructor") && l.constructor;
          return typeof s == "function" && s instanceof s && Rc.call(s) == bP;
        }
        var mv = g1 ? Un(g1) : xT;
        function _A(o) {
          return tw(o) && o >= -R && o <= R;
        }
        var iw = y1 ? Un(y1) : CT;
        function cf(o) {
          return typeof o == "string" || (!Ee(o) && kt(o) && xn(o) == Ae);
        }
        function Gn(o) {
          return typeof o == "symbol" || (kt(o) && xn(o) == Je);
        }
        var El = b1 ? Un(b1) : _T;
        function EA(o) {
          return o === n;
        }
        function OA(o) {
          return kt(o) && vn(o) == ur;
        }
        function kA(o) {
          return kt(o) && xn(o) == Sn;
        }
        var PA = Jc(Uh),
          TA = Jc(function (o, l) {
            return o <= l;
          });
        function ow(o) {
          if (!o) return [];
          if (Rn(o)) return cf(o) ? Lr(o) : An(o);
          if (ju && o[ju]) return lP(o[ju]());
          var l = vn(o),
            s = l == Ie ? Rh : l == pe ? Pc : Ol;
          return s(o);
        }
        function Di(o) {
          if (!o) return o === 0 ? o : 0;
          if (((o = wr(o)), o === z || o === -z)) {
            var l = o < 0 ? -1 : 1;
            return l * B;
          }
          return o === o ? o : 0;
        }
        function ke(o) {
          var l = Di(o),
            s = l % 1;
          return l === l ? (s ? l - s : l) : 0;
        }
        function aw(o) {
          return o ? ba(ke(o), 0, H) : 0;
        }
        function wr(o) {
          if (typeof o == "number") return o;
          if (Gn(o)) return W;
          if (xt(o)) {
            var l = typeof o.valueOf == "function" ? o.valueOf() : o;
            o = xt(l) ? l + "" : l;
          }
          if (typeof o != "string") return o === 0 ? o : +o;
          o = E1(o);
          var s = _i.test(o);
          return s || Pu.test(o)
            ? Uk(o.slice(2), s ? 2 : 8)
            : la.test(o)
            ? W
            : +o;
        }
        function lw(o) {
          return ui(o, In(o));
        }
        function AA(o) {
          return o ? ba(ke(o), -R, R) : o === 0 ? o : 0;
        }
        function Ge(o) {
          return o == null ? "" : Vn(o);
        }
        var RA = xl(function (o, l) {
            if (Xu(l) || Rn(l)) {
              ui(l, qt(l), o);
              return;
            }
            for (var s in l) Ye.call(l, s) && Hu(o, s, l[s]);
          }),
          uw = xl(function (o, l) {
            ui(l, In(l), o);
          }),
          ff = xl(function (o, l, s, p) {
            ui(l, In(l), o, p);
          }),
          IA = xl(function (o, l, s, p) {
            ui(l, qt(l), o, p);
          }),
          $A = Ni(zh);
        function MA(o, l) {
          var s = Sl(o);
          return l == null ? s : F1(s, l);
        }
        var LA = Re(function (o, l) {
            o = tt(o);
            var s = -1,
              p = l.length,
              m = p > 2 ? l[2] : n;
            for (m && Cn(l[0], l[1], m) && (p = 1); ++s < p; )
              for (var _ = l[s], P = In(_), I = -1, N = P.length; ++I < N; ) {
                var K = P[I],
                  Y = o[K];
                (Y === n || (zr(Y, yl[K]) && !Ye.call(o, K))) && (o[K] = _[K]);
              }
            return o;
          }),
          NA = Re(function (o) {
            return o.push(n, Eb), Hn(sw, n, o);
          });
        function zA(o, l) {
          return S1(o, ge(l, 3), li);
        }
        function jA(o, l) {
          return S1(o, ge(l, 3), Dh);
        }
        function DA(o, l) {
          return o == null ? o : jh(o, ge(l, 3), In);
        }
        function FA(o, l) {
          return o == null ? o : V1(o, ge(l, 3), In);
        }
        function BA(o, l) {
          return o && li(o, ge(l, 3));
        }
        function WA(o, l) {
          return o && Dh(o, ge(l, 3));
        }
        function HA(o) {
          return o == null ? [] : Vc(o, qt(o));
        }
        function UA(o) {
          return o == null ? [] : Vc(o, In(o));
        }
        function gv(o, l, s) {
          var p = o == null ? n : wa(o, l);
          return p === n ? s : p;
        }
        function VA(o, l) {
          return o != null && Pb(o, l, hT);
        }
        function yv(o, l) {
          return o != null && Pb(o, l, vT);
        }
        var GA = wb(function (o, l, s) {
            l != null && typeof l.toString != "function" && (l = Ic.call(l)),
              (o[l] = s);
          }, wv($n)),
          KA = wb(function (o, l, s) {
            l != null && typeof l.toString != "function" && (l = Ic.call(l)),
              Ye.call(o, l) ? o[l].push(s) : (o[l] = [s]);
          }, ge),
          YA = Re(Vu);
        function qt(o) {
          return Rn(o) ? j1(o) : Hh(o);
        }
        function In(o) {
          return Rn(o) ? j1(o, !0) : ET(o);
        }
        function XA(o, l) {
          var s = {};
          return (
            (l = ge(l, 3)),
            li(o, function (p, m, _) {
              Mi(s, l(p, m, _), p);
            }),
            s
          );
        }
        function QA(o, l) {
          var s = {};
          return (
            (l = ge(l, 3)),
            li(o, function (p, m, _) {
              Mi(s, m, l(p, m, _));
            }),
            s
          );
        }
        var qA = xl(function (o, l, s) {
            Gc(o, l, s);
          }),
          sw = xl(function (o, l, s, p) {
            Gc(o, l, s, p);
          }),
          ZA = Ni(function (o, l) {
            var s = {};
            if (o == null) return s;
            var p = !1;
            (l = vt(l, function (_) {
              return (_ = Co(_, o)), p || (p = _.length > 1), _;
            })),
              ui(o, rv(o), s),
              p && (s = gr(s, v | g | b, GT));
            for (var m = l.length; m--; ) Xh(s, l[m]);
            return s;
          });
        function JA(o, l) {
          return cw(o, uf(ge(l)));
        }
        var eR = Ni(function (o, l) {
          return o == null ? {} : kT(o, l);
        });
        function cw(o, l) {
          if (o == null) return {};
          var s = vt(rv(o), function (p) {
            return [p];
          });
          return (
            (l = ge(l)),
            tb(o, s, function (p, m) {
              return l(p, m[0]);
            })
          );
        }
        function tR(o, l, s) {
          l = Co(l, o);
          var p = -1,
            m = l.length;
          for (m || ((m = 1), (o = n)); ++p < m; ) {
            var _ = o == null ? n : o[si(l[p])];
            _ === n && ((p = m), (_ = s)), (o = ji(_) ? _.call(o) : _);
          }
          return o;
        }
        function nR(o, l, s) {
          return o == null ? o : Ku(o, l, s);
        }
        function rR(o, l, s, p) {
          return (
            (p = typeof p == "function" ? p : n), o == null ? o : Ku(o, l, s, p)
          );
        }
        var fw = Cb(qt),
          dw = Cb(In);
        function iR(o, l, s) {
          var p = Ee(o),
            m = p || Eo(o) || El(o);
          if (((l = ge(l, 4)), s == null)) {
            var _ = o && o.constructor;
            m
              ? (s = p ? new _() : [])
              : xt(o)
              ? (s = ji(_) ? Sl(Lc(o)) : {})
              : (s = {});
          }
          return (
            (m ? hr : li)(o, function (P, I, N) {
              return l(s, P, I, N);
            }),
            s
          );
        }
        function oR(o, l) {
          return o == null ? !0 : Xh(o, l);
        }
        function aR(o, l, s) {
          return o == null ? o : ab(o, l, Zh(s));
        }
        function lR(o, l, s, p) {
          return (
            (p = typeof p == "function" ? p : n),
            o == null ? o : ab(o, l, Zh(s), p)
          );
        }
        function Ol(o) {
          return o == null ? [] : Ah(o, qt(o));
        }
        function uR(o) {
          return o == null ? [] : Ah(o, In(o));
        }
        function sR(o, l, s) {
          return (
            s === n && ((s = l), (l = n)),
            s !== n && ((s = wr(s)), (s = s === s ? s : 0)),
            l !== n && ((l = wr(l)), (l = l === l ? l : 0)),
            ba(wr(o), l, s)
          );
        }
        function cR(o, l, s) {
          return (
            (l = Di(l)),
            s === n ? ((s = l), (l = 0)) : (s = Di(s)),
            (o = wr(o)),
            mT(o, l, s)
          );
        }
        function fR(o, l, s) {
          if (
            (s && typeof s != "boolean" && Cn(o, l, s) && (l = s = n),
            s === n &&
              (typeof l == "boolean"
                ? ((s = l), (l = n))
                : typeof o == "boolean" && ((s = o), (o = n))),
            o === n && l === n
              ? ((o = 0), (l = 1))
              : ((o = Di(o)), l === n ? ((l = o), (o = 0)) : (l = Di(l))),
            o > l)
          ) {
            var p = o;
            (o = l), (l = p);
          }
          if (s || o % 1 || l % 1) {
            var m = N1();
            return hn(o + m * (l - o + Hk("1e-" + ((m + "").length - 1))), l);
          }
          return Gh(o, l);
        }
        var dR = Cl(function (o, l, s) {
          return (l = l.toLowerCase()), o + (s ? pw(l) : l);
        });
        function pw(o) {
          return bv(Ge(o).toLowerCase());
        }
        function hw(o) {
          return (o = Ge(o)), o && o.replace(rl, nP).replace(pt, "");
        }
        function pR(o, l, s) {
          (o = Ge(o)), (l = Vn(l));
          var p = o.length;
          s = s === n ? p : ba(ke(s), 0, p);
          var m = s;
          return (s -= l.length), s >= 0 && o.slice(s, m) == l;
        }
        function hR(o) {
          return (o = Ge(o)), o && ot.test(o) ? o.replace(nt, rP) : o;
        }
        function vR(o) {
          return (o = Ge(o)), o && Dt.test(o) ? o.replace(Wn, "\\$&") : o;
        }
        var mR = Cl(function (o, l, s) {
            return o + (s ? "-" : "") + l.toLowerCase();
          }),
          gR = Cl(function (o, l, s) {
            return o + (s ? " " : "") + l.toLowerCase();
          }),
          yR = gb("toLowerCase");
        function bR(o, l, s) {
          (o = Ge(o)), (l = ke(l));
          var p = l ? ml(o) : 0;
          if (!l || p >= l) return o;
          var m = (l - p) / 2;
          return Zc(Dc(m), s) + o + Zc(jc(m), s);
        }
        function wR(o, l, s) {
          (o = Ge(o)), (l = ke(l));
          var p = l ? ml(o) : 0;
          return l && p < l ? o + Zc(l - p, s) : o;
        }
        function SR(o, l, s) {
          (o = Ge(o)), (l = ke(l));
          var p = l ? ml(o) : 0;
          return l && p < l ? Zc(l - p, s) + o : o;
        }
        function xR(o, l, s) {
          return (
            s || l == null ? (l = 0) : l && (l = +l),
            TP(Ge(o).replace(Ci, ""), l || 0)
          );
        }
        function CR(o, l, s) {
          return (
            (s ? Cn(o, l, s) : l === n) ? (l = 1) : (l = ke(l)), Kh(Ge(o), l)
          );
        }
        function _R() {
          var o = arguments,
            l = Ge(o[0]);
          return o.length < 3 ? l : l.replace(o[1], o[2]);
        }
        var ER = Cl(function (o, l, s) {
          return o + (s ? "_" : "") + l.toLowerCase();
        });
        function OR(o, l, s) {
          return (
            s && typeof s != "number" && Cn(o, l, s) && (l = s = n),
            (s = s === n ? H : s >>> 0),
            s
              ? ((o = Ge(o)),
                o &&
                (typeof l == "string" || (l != null && !mv(l))) &&
                ((l = Vn(l)), !l && vl(o))
                  ? _o(Lr(o), 0, s)
                  : o.split(l, s))
              : []
          );
        }
        var kR = Cl(function (o, l, s) {
          return o + (s ? " " : "") + bv(l);
        });
        function PR(o, l, s) {
          return (
            (o = Ge(o)),
            (s = s == null ? 0 : ba(ke(s), 0, o.length)),
            (l = Vn(l)),
            o.slice(s, s + l.length) == l
          );
        }
        function TR(o, l, s) {
          var p = w.templateSettings;
          s && Cn(o, l, s) && (l = n), (o = Ge(o)), (l = ff({}, l, p, _b));
          var m = ff({}, l.imports, p.imports, _b),
            _ = qt(m),
            P = Ah(m, _),
            I,
            N,
            K = 0,
            Y = l.interpolate || co,
            X = "__p += '",
            te = Ih(
              (l.escape || co).source +
                "|" +
                Y.source +
                "|" +
                (Y === dt ? uo : co).source +
                "|" +
                (l.evaluate || co).source +
                "|$",
              "g"
            ),
            ce =
              "//# sourceURL=" +
              (Ye.call(l, "sourceURL")
                ? (l.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++pl + "]") +
              `
`;
          o.replace(te, function (be, $e, je, Kn, _n, Yn) {
            return (
              je || (je = Kn),
              (X += o.slice(K, Yn).replace(il, iP)),
              $e &&
                ((I = !0),
                (X +=
                  `' +
__e(` +
                  $e +
                  `) +
'`)),
              _n &&
                ((N = !0),
                (X +=
                  `';
` +
                  _n +
                  `;
__p += '`)),
              je &&
                (X +=
                  `' +
((__t = (` +
                  je +
                  `)) == null ? '' : __t) +
'`),
              (K = Yn + be.length),
              be
            );
          }),
            (X += `';
`);
          var ye = Ye.call(l, "variable") && l.variable;
          if (!ye)
            X =
              `with (obj) {
` +
              X +
              `
}
`;
          else if (ni.test(ye)) throw new _e(c);
          (X = (N ? X.replace(Si, "") : X)
            .replace(pn, "$1")
            .replace(Ot, "$1;")),
            (X =
              "function(" +
              (ye || "obj") +
              `) {
` +
              (ye
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (I ? ", __e = _.escape" : "") +
              (N
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              X +
              `return __p
}`);
          var Pe = mw(function () {
            return We(_, ce + "return " + X).apply(n, P);
          });
          if (((Pe.source = X), vv(Pe))) throw Pe;
          return Pe;
        }
        function AR(o) {
          return Ge(o).toLowerCase();
        }
        function RR(o) {
          return Ge(o).toUpperCase();
        }
        function IR(o, l, s) {
          if (((o = Ge(o)), o && (s || l === n))) return E1(o);
          if (!o || !(l = Vn(l))) return o;
          var p = Lr(o),
            m = Lr(l),
            _ = O1(p, m),
            P = k1(p, m) + 1;
          return _o(p, _, P).join("");
        }
        function $R(o, l, s) {
          if (((o = Ge(o)), o && (s || l === n))) return o.slice(0, T1(o) + 1);
          if (!o || !(l = Vn(l))) return o;
          var p = Lr(o),
            m = k1(p, Lr(l)) + 1;
          return _o(p, 0, m).join("");
        }
        function MR(o, l, s) {
          if (((o = Ge(o)), o && (s || l === n))) return o.replace(Ci, "");
          if (!o || !(l = Vn(l))) return o;
          var p = Lr(o),
            m = O1(p, Lr(l));
          return _o(p, m).join("");
        }
        function LR(o, l) {
          var s = D,
            p = J;
          if (xt(l)) {
            var m = "separator" in l ? l.separator : m;
            (s = "length" in l ? ke(l.length) : s),
              (p = "omission" in l ? Vn(l.omission) : p);
          }
          o = Ge(o);
          var _ = o.length;
          if (vl(o)) {
            var P = Lr(o);
            _ = P.length;
          }
          if (s >= _) return o;
          var I = s - ml(p);
          if (I < 1) return p;
          var N = P ? _o(P, 0, I).join("") : o.slice(0, I);
          if (m === n) return N + p;
          if ((P && (I += N.length - I), mv(m))) {
            if (o.slice(I).search(m)) {
              var K,
                Y = N;
              for (
                m.global || (m = Ih(m.source, Ge(so.exec(m)) + "g")),
                  m.lastIndex = 0;
                (K = m.exec(Y));

              )
                var X = K.index;
              N = N.slice(0, X === n ? I : X);
            }
          } else if (o.indexOf(Vn(m), I) != I) {
            var te = N.lastIndexOf(m);
            te > -1 && (N = N.slice(0, te));
          }
          return N + p;
        }
        function NR(o) {
          return (o = Ge(o)), o && Bn.test(o) ? o.replace(xi, fP) : o;
        }
        var zR = Cl(function (o, l, s) {
            return o + (s ? " " : "") + l.toUpperCase();
          }),
          bv = gb("toUpperCase");
        function vw(o, l, s) {
          return (
            (o = Ge(o)),
            (l = s ? n : l),
            l === n ? (aP(o) ? hP(o) : qk(o)) : o.match(l) || []
          );
        }
        var mw = Re(function (o, l) {
            try {
              return Hn(o, n, l);
            } catch (s) {
              return vv(s) ? s : new _e(s);
            }
          }),
          jR = Ni(function (o, l) {
            return (
              hr(l, function (s) {
                (s = si(s)), Mi(o, s, pv(o[s], o));
              }),
              o
            );
          });
        function DR(o) {
          var l = o == null ? 0 : o.length,
            s = ge();
          return (
            (o = l
              ? vt(o, function (p) {
                  if (typeof p[1] != "function") throw new vr(u);
                  return [s(p[0]), p[1]];
                })
              : []),
            Re(function (p) {
              for (var m = -1; ++m < l; ) {
                var _ = o[m];
                if (Hn(_[0], this, p)) return Hn(_[1], this, p);
              }
            })
          );
        }
        function FR(o) {
          return fT(gr(o, v));
        }
        function wv(o) {
          return function () {
            return o;
          };
        }
        function BR(o, l) {
          return o == null || o !== o ? l : o;
        }
        var WR = bb(),
          HR = bb(!0);
        function $n(o) {
          return o;
        }
        function Sv(o) {
          return X1(typeof o == "function" ? o : gr(o, v));
        }
        function UR(o) {
          return q1(gr(o, v));
        }
        function VR(o, l) {
          return Z1(o, gr(l, v));
        }
        var GR = Re(function (o, l) {
            return function (s) {
              return Vu(s, o, l);
            };
          }),
          KR = Re(function (o, l) {
            return function (s) {
              return Vu(o, s, l);
            };
          });
        function xv(o, l, s) {
          var p = qt(l),
            m = Vc(l, p);
          s == null &&
            !(xt(l) && (m.length || !p.length)) &&
            ((s = l), (l = o), (o = this), (m = Vc(l, qt(l))));
          var _ = !(xt(s) && "chain" in s) || !!s.chain,
            P = ji(o);
          return (
            hr(m, function (I) {
              var N = l[I];
              (o[I] = N),
                P &&
                  (o.prototype[I] = function () {
                    var K = this.__chain__;
                    if (_ || K) {
                      var Y = o(this.__wrapped__),
                        X = (Y.__actions__ = An(this.__actions__));
                      return (
                        X.push({ func: N, args: arguments, thisArg: o }),
                        (Y.__chain__ = K),
                        Y
                      );
                    }
                    return N.apply(o, yo([this.value()], arguments));
                  });
            }),
            o
          );
        }
        function YR() {
          return rn._ === this && (rn._ = wP), this;
        }
        function Cv() {}
        function XR(o) {
          return (
            (o = ke(o)),
            Re(function (l) {
              return J1(l, o);
            })
          );
        }
        var QR = ev(vt),
          qR = ev(w1),
          ZR = ev(Eh);
        function gw(o) {
          return lv(o) ? Oh(si(o)) : PT(o);
        }
        function JR(o) {
          return function (l) {
            return o == null ? n : wa(o, l);
          };
        }
        var e5 = Sb(),
          t5 = Sb(!0);
        function _v() {
          return [];
        }
        function Ev() {
          return !1;
        }
        function n5() {
          return {};
        }
        function r5() {
          return "";
        }
        function i5() {
          return !0;
        }
        function o5(o, l) {
          if (((o = ke(o)), o < 1 || o > R)) return [];
          var s = H,
            p = hn(o, H);
          (l = ge(l)), (o -= H);
          for (var m = Th(p, l); ++s < o; ) l(s);
          return m;
        }
        function a5(o) {
          return Ee(o) ? vt(o, si) : Gn(o) ? [o] : An(zb(Ge(o)));
        }
        function l5(o) {
          var l = ++yP;
          return Ge(o) + l;
        }
        var u5 = qc(function (o, l) {
            return o + l;
          }, 0),
          s5 = tv("ceil"),
          c5 = qc(function (o, l) {
            return o / l;
          }, 1),
          f5 = tv("floor");
        function d5(o) {
          return o && o.length ? Uc(o, $n, Fh) : n;
        }
        function p5(o, l) {
          return o && o.length ? Uc(o, ge(l, 2), Fh) : n;
        }
        function h5(o) {
          return C1(o, $n);
        }
        function v5(o, l) {
          return C1(o, ge(l, 2));
        }
        function m5(o) {
          return o && o.length ? Uc(o, $n, Uh) : n;
        }
        function g5(o, l) {
          return o && o.length ? Uc(o, ge(l, 2), Uh) : n;
        }
        var y5 = qc(function (o, l) {
            return o * l;
          }, 1),
          b5 = tv("round"),
          w5 = qc(function (o, l) {
            return o - l;
          }, 0);
        function S5(o) {
          return o && o.length ? Ph(o, $n) : 0;
        }
        function x5(o, l) {
          return o && o.length ? Ph(o, ge(l, 2)) : 0;
        }
        return (
          (w.after = U4),
          (w.ary = Yb),
          (w.assign = RA),
          (w.assignIn = uw),
          (w.assignInWith = ff),
          (w.assignWith = IA),
          (w.at = $A),
          (w.before = Xb),
          (w.bind = pv),
          (w.bindAll = jR),
          (w.bindKey = Qb),
          (w.castArray = nA),
          (w.chain = Vb),
          (w.chunk = f3),
          (w.compact = d3),
          (w.concat = p3),
          (w.cond = DR),
          (w.conforms = FR),
          (w.constant = wv),
          (w.countBy = S4),
          (w.create = MA),
          (w.curry = qb),
          (w.curryRight = Zb),
          (w.debounce = Jb),
          (w.defaults = LA),
          (w.defaultsDeep = NA),
          (w.defer = V4),
          (w.delay = G4),
          (w.difference = h3),
          (w.differenceBy = v3),
          (w.differenceWith = m3),
          (w.drop = g3),
          (w.dropRight = y3),
          (w.dropRightWhile = b3),
          (w.dropWhile = w3),
          (w.fill = S3),
          (w.filter = C4),
          (w.flatMap = O4),
          (w.flatMapDeep = k4),
          (w.flatMapDepth = P4),
          (w.flatten = Bb),
          (w.flattenDeep = x3),
          (w.flattenDepth = C3),
          (w.flip = K4),
          (w.flow = WR),
          (w.flowRight = HR),
          (w.fromPairs = _3),
          (w.functions = HA),
          (w.functionsIn = UA),
          (w.groupBy = T4),
          (w.initial = O3),
          (w.intersection = k3),
          (w.intersectionBy = P3),
          (w.intersectionWith = T3),
          (w.invert = GA),
          (w.invertBy = KA),
          (w.invokeMap = R4),
          (w.iteratee = Sv),
          (w.keyBy = I4),
          (w.keys = qt),
          (w.keysIn = In),
          (w.map = of),
          (w.mapKeys = XA),
          (w.mapValues = QA),
          (w.matches = UR),
          (w.matchesProperty = VR),
          (w.memoize = lf),
          (w.merge = qA),
          (w.mergeWith = sw),
          (w.method = GR),
          (w.methodOf = KR),
          (w.mixin = xv),
          (w.negate = uf),
          (w.nthArg = XR),
          (w.omit = ZA),
          (w.omitBy = JA),
          (w.once = Y4),
          (w.orderBy = $4),
          (w.over = QR),
          (w.overArgs = X4),
          (w.overEvery = qR),
          (w.overSome = ZR),
          (w.partial = hv),
          (w.partialRight = ew),
          (w.partition = M4),
          (w.pick = eR),
          (w.pickBy = cw),
          (w.property = gw),
          (w.propertyOf = JR),
          (w.pull = $3),
          (w.pullAll = Hb),
          (w.pullAllBy = M3),
          (w.pullAllWith = L3),
          (w.pullAt = N3),
          (w.range = e5),
          (w.rangeRight = t5),
          (w.rearg = Q4),
          (w.reject = z4),
          (w.remove = z3),
          (w.rest = q4),
          (w.reverse = fv),
          (w.sampleSize = D4),
          (w.set = nR),
          (w.setWith = rR),
          (w.shuffle = F4),
          (w.slice = j3),
          (w.sortBy = H4),
          (w.sortedUniq = V3),
          (w.sortedUniqBy = G3),
          (w.split = OR),
          (w.spread = Z4),
          (w.tail = K3),
          (w.take = Y3),
          (w.takeRight = X3),
          (w.takeRightWhile = Q3),
          (w.takeWhile = q3),
          (w.tap = d4),
          (w.throttle = J4),
          (w.thru = rf),
          (w.toArray = ow),
          (w.toPairs = fw),
          (w.toPairsIn = dw),
          (w.toPath = a5),
          (w.toPlainObject = lw),
          (w.transform = iR),
          (w.unary = eA),
          (w.union = Z3),
          (w.unionBy = J3),
          (w.unionWith = e4),
          (w.uniq = t4),
          (w.uniqBy = n4),
          (w.uniqWith = r4),
          (w.unset = oR),
          (w.unzip = dv),
          (w.unzipWith = Ub),
          (w.update = aR),
          (w.updateWith = lR),
          (w.values = Ol),
          (w.valuesIn = uR),
          (w.without = i4),
          (w.words = vw),
          (w.wrap = tA),
          (w.xor = o4),
          (w.xorBy = a4),
          (w.xorWith = l4),
          (w.zip = u4),
          (w.zipObject = s4),
          (w.zipObjectDeep = c4),
          (w.zipWith = f4),
          (w.entries = fw),
          (w.entriesIn = dw),
          (w.extend = uw),
          (w.extendWith = ff),
          xv(w, w),
          (w.add = u5),
          (w.attempt = mw),
          (w.camelCase = dR),
          (w.capitalize = pw),
          (w.ceil = s5),
          (w.clamp = sR),
          (w.clone = rA),
          (w.cloneDeep = oA),
          (w.cloneDeepWith = aA),
          (w.cloneWith = iA),
          (w.conformsTo = lA),
          (w.deburr = hw),
          (w.defaultTo = BR),
          (w.divide = c5),
          (w.endsWith = pR),
          (w.eq = zr),
          (w.escape = hR),
          (w.escapeRegExp = vR),
          (w.every = x4),
          (w.find = _4),
          (w.findIndex = Db),
          (w.findKey = zA),
          (w.findLast = E4),
          (w.findLastIndex = Fb),
          (w.findLastKey = jA),
          (w.floor = f5),
          (w.forEach = Gb),
          (w.forEachRight = Kb),
          (w.forIn = DA),
          (w.forInRight = FA),
          (w.forOwn = BA),
          (w.forOwnRight = WA),
          (w.get = gv),
          (w.gt = uA),
          (w.gte = sA),
          (w.has = VA),
          (w.hasIn = yv),
          (w.head = Wb),
          (w.identity = $n),
          (w.includes = A4),
          (w.indexOf = E3),
          (w.inRange = cR),
          (w.invoke = YA),
          (w.isArguments = Ca),
          (w.isArray = Ee),
          (w.isArrayBuffer = cA),
          (w.isArrayLike = Rn),
          (w.isArrayLikeObject = It),
          (w.isBoolean = fA),
          (w.isBuffer = Eo),
          (w.isDate = dA),
          (w.isElement = pA),
          (w.isEmpty = hA),
          (w.isEqual = vA),
          (w.isEqualWith = mA),
          (w.isError = vv),
          (w.isFinite = gA),
          (w.isFunction = ji),
          (w.isInteger = tw),
          (w.isLength = sf),
          (w.isMap = nw),
          (w.isMatch = yA),
          (w.isMatchWith = bA),
          (w.isNaN = wA),
          (w.isNative = SA),
          (w.isNil = CA),
          (w.isNull = xA),
          (w.isNumber = rw),
          (w.isObject = xt),
          (w.isObjectLike = kt),
          (w.isPlainObject = qu),
          (w.isRegExp = mv),
          (w.isSafeInteger = _A),
          (w.isSet = iw),
          (w.isString = cf),
          (w.isSymbol = Gn),
          (w.isTypedArray = El),
          (w.isUndefined = EA),
          (w.isWeakMap = OA),
          (w.isWeakSet = kA),
          (w.join = A3),
          (w.kebabCase = mR),
          (w.last = br),
          (w.lastIndexOf = R3),
          (w.lowerCase = gR),
          (w.lowerFirst = yR),
          (w.lt = PA),
          (w.lte = TA),
          (w.max = d5),
          (w.maxBy = p5),
          (w.mean = h5),
          (w.meanBy = v5),
          (w.min = m5),
          (w.minBy = g5),
          (w.stubArray = _v),
          (w.stubFalse = Ev),
          (w.stubObject = n5),
          (w.stubString = r5),
          (w.stubTrue = i5),
          (w.multiply = y5),
          (w.nth = I3),
          (w.noConflict = YR),
          (w.noop = Cv),
          (w.now = af),
          (w.pad = bR),
          (w.padEnd = wR),
          (w.padStart = SR),
          (w.parseInt = xR),
          (w.random = fR),
          (w.reduce = L4),
          (w.reduceRight = N4),
          (w.repeat = CR),
          (w.replace = _R),
          (w.result = tR),
          (w.round = b5),
          (w.runInContext = M),
          (w.sample = j4),
          (w.size = B4),
          (w.snakeCase = ER),
          (w.some = W4),
          (w.sortedIndex = D3),
          (w.sortedIndexBy = F3),
          (w.sortedIndexOf = B3),
          (w.sortedLastIndex = W3),
          (w.sortedLastIndexBy = H3),
          (w.sortedLastIndexOf = U3),
          (w.startCase = kR),
          (w.startsWith = PR),
          (w.subtract = w5),
          (w.sum = S5),
          (w.sumBy = x5),
          (w.template = TR),
          (w.times = o5),
          (w.toFinite = Di),
          (w.toInteger = ke),
          (w.toLength = aw),
          (w.toLower = AR),
          (w.toNumber = wr),
          (w.toSafeInteger = AA),
          (w.toString = Ge),
          (w.toUpper = RR),
          (w.trim = IR),
          (w.trimEnd = $R),
          (w.trimStart = MR),
          (w.truncate = LR),
          (w.unescape = NR),
          (w.uniqueId = l5),
          (w.upperCase = zR),
          (w.upperFirst = bv),
          (w.each = Gb),
          (w.eachRight = Kb),
          (w.first = Wb),
          xv(
            w,
            (function () {
              var o = {};
              return (
                li(w, function (l, s) {
                  Ye.call(w.prototype, s) || (o[s] = l);
                }),
                o
              );
            })(),
            { chain: !1 }
          ),
          (w.VERSION = r),
          hr(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (o) {
              w[o].placeholder = w;
            }
          ),
          hr(["drop", "take"], function (o, l) {
            (Le.prototype[o] = function (s) {
              s = s === n ? 1 : Wt(ke(s), 0);
              var p = this.__filtered__ && !l ? new Le(this) : this.clone();
              return (
                p.__filtered__
                  ? (p.__takeCount__ = hn(s, p.__takeCount__))
                  : p.__views__.push({
                      size: hn(s, H),
                      type: o + (p.__dir__ < 0 ? "Right" : ""),
                    }),
                p
              );
            }),
              (Le.prototype[o + "Right"] = function (s) {
                return this.reverse()[o](s).reverse();
              });
          }),
          hr(["filter", "map", "takeWhile"], function (o, l) {
            var s = l + 1,
              p = s == se || s == j;
            Le.prototype[o] = function (m) {
              var _ = this.clone();
              return (
                _.__iteratees__.push({ iteratee: ge(m, 3), type: s }),
                (_.__filtered__ = _.__filtered__ || p),
                _
              );
            };
          }),
          hr(["head", "last"], function (o, l) {
            var s = "take" + (l ? "Right" : "");
            Le.prototype[o] = function () {
              return this[s](1).value()[0];
            };
          }),
          hr(["initial", "tail"], function (o, l) {
            var s = "drop" + (l ? "" : "Right");
            Le.prototype[o] = function () {
              return this.__filtered__ ? new Le(this) : this[s](1);
            };
          }),
          (Le.prototype.compact = function () {
            return this.filter($n);
          }),
          (Le.prototype.find = function (o) {
            return this.filter(o).head();
          }),
          (Le.prototype.findLast = function (o) {
            return this.reverse().find(o);
          }),
          (Le.prototype.invokeMap = Re(function (o, l) {
            return typeof o == "function"
              ? new Le(this)
              : this.map(function (s) {
                  return Vu(s, o, l);
                });
          })),
          (Le.prototype.reject = function (o) {
            return this.filter(uf(ge(o)));
          }),
          (Le.prototype.slice = function (o, l) {
            o = ke(o);
            var s = this;
            return s.__filtered__ && (o > 0 || l < 0)
              ? new Le(s)
              : (o < 0 ? (s = s.takeRight(-o)) : o && (s = s.drop(o)),
                l !== n &&
                  ((l = ke(l)), (s = l < 0 ? s.dropRight(-l) : s.take(l - o))),
                s);
          }),
          (Le.prototype.takeRightWhile = function (o) {
            return this.reverse().takeWhile(o).reverse();
          }),
          (Le.prototype.toArray = function () {
            return this.take(H);
          }),
          li(Le.prototype, function (o, l) {
            var s = /^(?:filter|find|map|reject)|While$/.test(l),
              p = /^(?:head|last)$/.test(l),
              m = w[p ? "take" + (l == "last" ? "Right" : "") : l],
              _ = p || /^find/.test(l);
            m &&
              (w.prototype[l] = function () {
                var P = this.__wrapped__,
                  I = p ? [1] : arguments,
                  N = P instanceof Le,
                  K = I[0],
                  Y = N || Ee(P),
                  X = function ($e) {
                    var je = m.apply(w, yo([$e], I));
                    return p && te ? je[0] : je;
                  };
                Y &&
                  s &&
                  typeof K == "function" &&
                  K.length != 1 &&
                  (N = Y = !1);
                var te = this.__chain__,
                  ce = !!this.__actions__.length,
                  ye = _ && !te,
                  Pe = N && !ce;
                if (!_ && Y) {
                  P = Pe ? P : new Le(this);
                  var be = o.apply(P, I);
                  return (
                    be.__actions__.push({ func: rf, args: [X], thisArg: n }),
                    new mr(be, te)
                  );
                }
                return ye && Pe
                  ? o.apply(this, I)
                  : ((be = this.thru(X)),
                    ye ? (p ? be.value()[0] : be.value()) : be);
              });
          }),
          hr(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (o) {
              var l = Tc[o],
                s = /^(?:push|sort|unshift)$/.test(o) ? "tap" : "thru",
                p = /^(?:pop|shift)$/.test(o);
              w.prototype[o] = function () {
                var m = arguments;
                if (p && !this.__chain__) {
                  var _ = this.value();
                  return l.apply(Ee(_) ? _ : [], m);
                }
                return this[s](function (P) {
                  return l.apply(Ee(P) ? P : [], m);
                });
              };
            }
          ),
          li(Le.prototype, function (o, l) {
            var s = w[l];
            if (s) {
              var p = s.name + "";
              Ye.call(wl, p) || (wl[p] = []), wl[p].push({ name: l, func: s });
            }
          }),
          (wl[Qc(n, C).name] = [{ name: "wrapper", func: n }]),
          (Le.prototype.clone = NP),
          (Le.prototype.reverse = zP),
          (Le.prototype.value = jP),
          (w.prototype.at = p4),
          (w.prototype.chain = h4),
          (w.prototype.commit = v4),
          (w.prototype.next = m4),
          (w.prototype.plant = y4),
          (w.prototype.reverse = b4),
          (w.prototype.toJSON = w.prototype.valueOf = w.prototype.value = w4),
          (w.prototype.first = w.prototype.head),
          ju && (w.prototype[ju] = g4),
          w
        );
      },
      gl = vP();
    va ? (((va.exports = gl)._ = gl), (Sh._ = gl)) : (rn._ = gl);
  }).call(Zu);
})(up, up.exports);
var LB = up.exports;
const Il = uc(LB),
  NB = "images/folder.png",
  zB = ({ children: e, defaultExpanded: t }) => {
    const [n, r] = x.useState(t),
      i = () => {
        r(!n);
      };
    return ee.jsxs("div", {
      children: [
        ee.jsx("div", {
          onClick: i,
          style: { cursor: "pointer", paddingLeft: 5 },
          children: ee.jsxs("div", {
            style: { backgroundColor: "transparent", display: "flex" },
            children: [
              n ? ee.jsx(Mg, {}) : ee.jsx(LM, {}),
              ee.jsx("img", {
                src: NB,
                alt: "folder",
                style: { width: 22, height: 22 },
              }),
              ee.jsx("span", {
                style: { color: "white", marginInline: 5 },
                children: "Contracts",
              }),
            ],
          }),
        }),
        n && ee.jsx("div", { children: e }),
      ],
    });
  },
  jB = () => {
    const e = Kp(),
      {
        structure: t,
        fileName: n,
        fileNameArray: r,
        methodDemo: i,
      } = Ks((b) => b.fileExpoReducer);
    Ks((b) => b.consoleReducer);
    const [a, u] = x.useState(0),
      [c, f] = x.useState(!1),
      [d, h] = x.useState(!1),
      v = () => {
        if (!c) {
          const b = Il.flatMap(t, "childs");
          u(a + 1), f(!0), h(!0), e(Pm([...b, { id: a + 1, lable: "" }]));
        }
      },
      g = (b, E) => {
        const { value: O } = b.target;
        e(n2(O));
      };
    return (
      x.useEffect(() => {
        const b = (E) => {
          if (E.key === "Enter" && c) {
            const O = Il.flatMap(t, "childs");
            if (n === "") {
              const T = Il.filter(
                Il.flatMap(t, "childs"),
                (C) => C.lable !== ""
              );
              e(Pm(T)), f(!1);
            } else if (n.endsWith(".sol")) {
              const T = Il.flatMap([O[O.length - 1]], (S) => ({
                  ...S,
                  lable: n,
                })),
                C = [...O, ...T],
                y = Il.filter(C, (S) => S.lable !== "");
              f(!1),
                e(ok(!0)),
                e(k9([...r, n])),
                e(Pm(y)),
                e(nk(a - 1)),
                e(n2(""));
            } else h(!1), alert("ends with .sol");
          }
        };
        return (
          window.addEventListener("keydown", b),
          () => {
            window.removeEventListener("keydown", b);
          }
        );
      }, [c, t, n]),
      ee.jsxs("div", {
        children: [
          ee.jsx("div", {
            style: {
              height: 30,
              width: "100%",
              display: "flex",
              marginRight: 5,
              marginTop: 2,
              justifyContent: "flex-end",
            },
            children: ee.jsx("div", {
              style: { display: "flex", alignItems: "center" },
              children: ee.jsx($a, {
                title: "file",
                children: ee.jsx(wE, {
                  onClick: v,
                  style: { color: "#ffffff70", marginLeft: 5 },
                }),
              }),
            }),
          }),
          ee.jsx(zB, {
            defaultExpanded: !0,
            children: t.map(
              (b) =>
                b.childs.length > 0 &&
                b.childs.map((E, O) =>
                  ee.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        marginLeft: 20,
                      },
                      children: [
                        ee.jsx("img", {
                          src: rk,
                          alt: "file",
                          style: { width: 18, height: 18 },
                        }),
                        ee.jsx("input", {
                          style: {
                            background: "none",
                            outline: "none",
                            color: "white",
                            border: "none",
                            marginBlock: 10,
                          },
                          onChange: (T) => g(T, E.id),
                          autoFocus: d && !n.endsWith(".sol"),
                        }),
                      ],
                    },
                    O
                  )
                )
            ),
          }),
        ],
      })
    );
  },
  DB = () => ee.jsx("div", { children: ee.jsx("div", {}) }),
  FB = () => {
    const e = Kp(),
      { showSideNav: t, navType: n } = Ks((a) => a.fileExpoReducer),
      r = (a) => {
        e(E9(a));
      },
      i = () => {
        e(O9(!t));
      };
    return ee.jsxs("div", {
      style: {
        flex: t ? 0.2 : 0.04,
        border: 2,
        borderStyle: "solid",
        borderColor: "black",
        background: "#1e1e1e",
        display: "flex",
      },
      children: [
        ee.jsxs("div", {
          style: { height: "100%", width: 50, background: "#30322f40" },
          children: [
            ee.jsx("div", {
              style: {
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }),
            ee.jsx("div", {
              style: {
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: n === "file" && "green 1px 1px 8px",
              },
              onClick: () => r("file"),
              children: ee.jsx($a, {
                placement: "rightBottom",
                title: "File",
                children: ee.jsx(GM, {
                  style: { fontSize: 25, color: "white" },
                }),
              }),
            }),
            ee.jsx("div", {
              style: {
                height: 50,
                display: "flex",
                boxShadow: n === "deploy" && "green 1px 1px 8px",
                justifyContent: "center",
                alignItems: "center",
              },
              onClick: () => r("deploy"),
              children: ee.jsx($a, {
                placement: "rightBottom",
                title: "Deploy",
                children: ee.jsx(uL, {
                  style: { fontSize: 25, color: "white" },
                }),
              }),
            }),
          ],
        }),
        ee.jsxs("div", {
          style: { width: t ? "100%" : "30px", paddingInline: 10 },
          children: [
            ee.jsx("div", {
              style: {
                display: "flex",
                width: "100%",
                height: "40px",
                background: "#ffffff01",
              },
              children: ee.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                },
                children: [
                  t &&
                    ee.jsx("h4", {
                      style: { color: "white", marginLeft: 25 },
                      children: n === "file" ? "Files" : "Deploy",
                    }),
                  ee.jsxs("div", {
                    children: [
                      t &&
                        ee.jsx($a, {
                          placement: "rightBottom",
                          title: "Hide",
                          children: ee.jsx(QM, {
                            onClick: i,
                            style: { color: "white", fontSize: 15 },
                          }),
                        }),
                      !t &&
                        ee.jsx($a, {
                          placement: "rightBottom",
                          title: "Show",
                          children: ee.jsx(iL, {
                            onClick: i,
                            style: {
                              color: "white",
                              fontSize: 15,
                              marginLeft: 10,
                            },
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            }),
            n === "file" && t && ee.jsx(jB, {}),
            n === "deploy" && ee.jsx(DB, {}),
          ],
        }),
      ],
    });
  },
  BB = () =>
    ee.jsxs("div", {
      style: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#1e1e1e",
        display: "flex",
        paddingBlock: 0,
      },
      children: [ee.jsx(FB, {}), ee.jsx(M9, {})],
    }),
  WB = d9({ reducer: { consoleReducer: C9, fileExpoReducer: T9 } });
function HB() {
  return ee.jsx(ee.Fragment, {
    children: ee.jsx(N6, { store: WB, children: ee.jsx(BB, {}) }),
  });
}
pB.add($B, MB);
Mm.createRoot(document.getElementById("root")).render(
  ee.jsx(Te.StrictMode, { children: ee.jsx(HB, {}) })
);
