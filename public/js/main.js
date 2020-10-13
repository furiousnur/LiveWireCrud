function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";

  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      y = function e(t) {
    return null != t && t === t.window;
  },
      v = {
    type: !0,
    src: !0,
    noModule: !0
  };

  function m(e, t, n) {
    var i,
        o = (t = t || r).createElement("script");
    if (o.text = e, n) for (i in v) {
      n[i] && (o[i] = n[i]);
    }
    t.head.appendChild(o).parentNode.removeChild(o);
  }

  function x(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? l[c.call(e)] || "object" : _typeof(e);
  }

  var b = "3.3.1",
      w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  w.fn = w.prototype = {
    jquery: "3.3.1",
    constructor: w,
    length: 0,
    toArray: function toArray() {
      return o.call(this);
    },
    get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return w.each(this, e);
    },
    map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: n.sort,
    splice: n.splice
  }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, w.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e) {
      m(e);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (C(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(T, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
        (r = !t(e[o], o)) !== s && i.push(e[o]);
      }

      return i;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          s = [];
      if (C(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && s.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && s.push(i);
      }
      return a.apply([], s);
    },
    guid: 1,
    support: h
  }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });

  function C(e) {
    var t = !!e && "length" in e && e.length,
        n = x(e);
    return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }

  var E = function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y,
        v,
        m,
        x,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        T = 0,
        C = 0,
        E = ae(),
        k = ae(),
        S = ae(),
        D = function D(e, t) {
      return e === t && (f = !0), 0;
    },
        N = {}.hasOwnProperty,
        A = [],
        j = A.pop,
        q = A.push,
        L = A.push,
        H = A.slice,
        O = function O(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        F = new RegExp("^" + M + "*," + M + "*"),
        _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        X = new RegExp(W),
        U = new RegExp("^" + R + "$"),
        V = {
      ID: new RegExp("^#(" + R + ")"),
      CLASS: new RegExp("^\\.(" + R + ")"),
      TAG: new RegExp("^(" + R + "|[*])"),
      ATTR: new RegExp("^" + I),
      PSEUDO: new RegExp("^" + W),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + P + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        G = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var r = "0x" + t - 65536;
      return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        re = function re() {
      p();
    },
        ie = me(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: A.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function oe(e, t, r, i) {
      var o,
          s,
          l,
          c,
          f,
          h,
          v,
          m = t && t.ownerDocument,
          T = t ? t.nodeType : 9;
      if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;

      if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
        if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
          if (9 === T) {
            if (!(l = t.getElementById(o))) return r;
            if (l.id === o) return r.push(l), r;
          } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
          if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }

        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;

            while (s--) {
              h[s] = "#" + c + " " + ve(h[s]);
            }

            v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
          }
          if (v) try {
            return L.apply(r, m.querySelectorAll(v)), r;
          } catch (e) {} finally {
            c === b && t.removeAttribute("id");
          }
        }
      }

      return u(e.replace(B, "$1"), t, r, i);
    }

    function ae() {
      var e = [];

      function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }

      return t;
    }

    function se(e) {
      return e[b] = !0, e;
    }

    function ue(e) {
      var t = d.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function le(e, t) {
      var n = e.split("|"),
          i = n.length;

      while (i--) {
        r.attrHandle[n[i]] = t;
      }
    }

    function ce(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }

    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }

    function de(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }

    function he(e) {
      return se(function (t) {
        return t = +t, se(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;

          while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }

    function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }, p = oe.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;
      return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ue(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
      }), ue(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = d.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
      })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
      }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;
        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
        if (i === o) return ce(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, d) : d;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
        var r = m.call(e, t);
        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}
      return oe(t, d, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);
      var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
      return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;

      if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
        while (t = e[o++]) {
          t === e[o] && (i = r.push(o));
        }

        while (i--) {
          e.splice(r[i], 1);
        }
      }

      return c = null, e;
    }, i = oe.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;

      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) {
        n += i(t);
      }

      return n;
    }, (r = oe.selectors = {
      cacheLength: 50,
      createPseudo: se,
      match: V,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = E[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);
            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        },
        CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                y = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                m = !u && !s,
                x = !1;

            if (y) {
              if (o) {
                while (g) {
                  p = t;

                  while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  }

                  h = g = "only" === e && !h && "nextSibling";
                }

                return !0;
              }

              if (h = [a ? y.firstChild : y.lastChild], a && m) {
                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];

                while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [T, d, x];
                    break;
                  }
                }
              } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
              }

              return (x -= i) === r || x % r == 0 && x / r >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
          return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            var r,
                o = i(e, t),
                a = o.length;

            while (a--) {
              e[r = O(e, o[a])] = !(n[r] = o[a]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        }
      },
      pseudos: {
        not: se(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(B, "$1"));
          return r[b] ? se(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;

            while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }),
        has: se(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }),
        contains: se(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }),
        lang: se(function (e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;

            do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);

            return !1;
          };
        }),
        target: function target(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function root(e) {
          return e === h;
        },
        focus: function focus(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: de(!1),
        disabled: de(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !r.pseudos.empty(e);
        },
        header: function header(e) {
          return Y.test(e.nodeName);
        },
        input: function input(e) {
          return G.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: he(function () {
          return [0];
        }),
        last: he(function (e, t) {
          return [t - 1];
        }),
        eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) {
            e.push(r);
          }

          return e;
        }),
        gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = r.pseudos.eq;

    for (t in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      r.pseudos[t] = fe(t);
    }

    for (t in {
      submit: !0,
      reset: !0
    }) {
      r.pseudos[t] = pe(t);
    }

    function ye() {}

    ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          s,
          u,
          l,
          c = k[e + " "];
      if (c) return t ? 0 : c.slice(0);
      s = e, u = [], l = r.preFilter;

      while (s) {
        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
          value: n,
          type: i[0].replace(B, " ")
        }), s = s.slice(n.length));

        for (a in r.filter) {
          !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
            value: n,
            type: a,
            matches: i
          }), s = s.slice(n.length));
        }

        if (!n) break;
      }

      return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    };

    function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function me(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = C++;
      return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || a) return e(t, n, i);
        }

        return !1;
      } : function (t, n, u) {
        var l,
            c,
            f,
            p = [T, s];

        if (u) {
          while (t = t[r]) {
            if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
            if (c[o] = p, p[2] = e(t, n, u)) return !0;
          }
        }

        return !1;
      };
    }

    function xe(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;

        while (i--) {
          if (!e[i](t, n, r)) return !1;
        }

        return !0;
      } : e[0];
    }

    function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) {
        oe(e, t[r], n);
      }

      return n;
    }

    function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Te(e, t, n, r, i, o) {
      return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
        var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !o && t ? g : we(g, p, e, s, u),
            v = n ? i || (o ? e : h || r) ? [] : a : y;

        if (n && n(y, v, s, u), r) {
          l = we(v, d), r(l, [], s, u), c = l.length;

          while (c--) {
            (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
        }

        if (o) {
          if (i || e) {
            if (i) {
              l = [], c = v.length;

              while (c--) {
                (f = v[c]) && l.push(y[c] = f);
              }

              i(null, v = [], l, u);
            }

            c = v.length;

            while (c--) {
              (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
            }
          }
        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
      });
    }

    function Ce(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
        return e === t;
      }, s, !0), f = me(function (e) {
        return O(t, e) > -1;
      }, s, !0), p = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
        return t = null, i;
      }]; u < o; u++) {
        if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) {
              if (r.relative[e[i].type]) break;
            }

            return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
              value: " " === e[u - 2].type ? "*" : ""
            })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
          }

          p.push(n);
        }
      }

      return xe(p);
    }

    function Ee(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function o(_o, a, s, u, c) {
        var f,
            h,
            y,
            v = 0,
            m = "0",
            x = _o && [],
            b = [],
            w = l,
            C = _o || i && r.find.TAG("*", c),
            E = T += null == w ? 1 : Math.random() || .1,
            k = C.length;

        for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
          if (i && f) {
            h = 0, a || f.ownerDocument === d || (p(f), s = !g);

            while (y = e[h++]) {
              if (y(f, a || d, s)) {
                u.push(f);
                break;
              }
            }

            c && (T = E);
          }

          n && ((f = !y && f) && v--, _o && x.push(f));
        }

        if (v += m, n && m !== v) {
          h = 0;

          while (y = t[h++]) {
            y(x, b, a, s);
          }

          if (_o) {
            if (v > 0) while (m--) {
              x[m] || b[m] || (b[m] = j.call(u));
            }
            b = we(b);
          }

          L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
        }

        return c && (T = E, l = w), x;
      };

      return n ? se(o) : o;
    }

    return s = oe.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = S[e + " "];

      if (!o) {
        t || (t = a(e)), n = t.length;

        while (n--) {
          (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
        }

        (o = S(e, Ee(i, r))).selector = e;
      }

      return o;
    }, u = oe.select = function (e, t, n, i) {
      var o,
          u,
          l,
          c,
          f,
          p = "function" == typeof e && e,
          d = !i && a(e = p.selector || e);

      if (n = n || [], 1 === d.length) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
          p && (t = t.parentNode), e = e.slice(u.shift().value.length);
        }

        o = V.needsContext.test(e) ? 0 : u.length;

        while (o--) {
          if (l = u[o], r.relative[c = l.type]) break;

          if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
            if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
            break;
          }
        }
      }

      return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    }), ue(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ue(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ue(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(P, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), oe;
  }(e);

  w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;

  var k = function k(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && w(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      D = w.expr.match.needsContext;

  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, t, n) {
    return g(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return u.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }

  w.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (w.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        w.find(e, i[t], n);
      }

      return r > 1 ? w.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
    }
  });
  var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (w.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;

    if (n = n || q, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (i[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) {
          g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }
        return this;
      }

      return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, q = w(r);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  w.fn.extend({
    has: function has(e) {
      var t = w(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && w(e);
      if (!D.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  w.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return k(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return k(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return k(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return k(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return k(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return k(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return S(e.firstChild);
    },
    contents: function contents(e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    }
  }, function (e, t) {
    w.fn[e] = function (n, r) {
      var i = w.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
    };
  });
  var M = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    var t = {};
    return w.each(e.match(M) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }

  w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);

    var t,
        n,
        r,
        i,
        o = [],
        a = [],
        s = -1,
        u = function u() {
      for (i = i || e.once, r = t = !0; a.length; s = -1) {
        n = a.shift();

        while (++s < o.length) {
          !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
        }
      }

      e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        l = {
      add: function add() {
        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
          w.each(n, function (n, r) {
            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
          });
        }(arguments), n && !t && u()), this;
      },
      remove: function remove() {
        return w.each(arguments, function (e, t) {
          var n;

          while ((n = w.inArray(t, o, n)) > -1) {
            o.splice(n, 1), n <= s && s--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      },
      empty: function empty() {
        return o && (o = []), this;
      },
      disable: function disable() {
        return i = a = [], o = n = "", this;
      },
      disabled: function disabled() {
        return !o;
      },
      lock: function lock() {
        return i = a = [], n || t || (o = n = ""), this;
      },
      locked: function locked() {
        return !!i;
      },
      fireWith: function fireWith(e, n) {
        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
      },
      fire: function fire() {
        return l.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!r;
      }
    };

    return l;
  };

  function I(e) {
    return e;
  }

  function W(e) {
    throw e;
  }

  function $(e, t, n, r) {
    var i;

    try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  w.extend({
    Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = {
        state: function state() {
          return r;
        },
        always: function always() {
          return o.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return i.then(null, e);
        },
        pipe: function pipe() {
          var e = arguments;
          return w.Deferred(function (t) {
            w.each(n, function (n, r) {
              var i = g(e[r[4]]) && e[r[4]];
              o[r[1]](function () {
                var e = i && i.apply(this, arguments);
                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        then: function then(t, r, i) {
          var o = 0;

          function a(t, n, r, i) {
            return function () {
              var s = this,
                  u = arguments,
                  l = function l() {
                var e, l;

                if (!(t < o)) {
                  if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                  l = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                }
              },
                  c = i ? l : function () {
                try {
                  l();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                }
              };

              t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }

          return w.Deferred(function (e) {
            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? w.extend(e, i) : i;
        }
      },
          o = {};
      return w.each(n, function (e, t) {
        var a = t[2],
            s = t[5];
        i[t[1]] = a.add, s && a.add(function () {
          r = s;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    },
    when: function when(e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          s = function s(e) {
        return function (n) {
          r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
        };
      };

      if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();

      while (n--) {
        $(i[n], s(n), a.reject);
      }

      return a.promise();
    }
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };
  var F = w.Deferred();
  w.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
    }
  }), w.ready.then = F.then;

  function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }

  "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));

  var z = function z(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;

    if ("object" === x(n)) {
      i = !0;

      for (s in n) {
        z(e, t, s, n[s], !0, o, a);
      }
    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(w(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }

    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      X = /^-ms-/,
      U = /-([a-z])/g;

  function V(e, t) {
    return t.toUpperCase();
  }

  function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }

  var Y = function Y(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function Q() {
    this.expando = w.expando + Q.uid++;
  }

  Q.uid = 1, Q.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
        i[G(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !w.isEmptyObject(t);
    }
  };
  var J = new Q(),
      K = new Q(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;

  function te(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
  }

  function ne(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = te(n);
      } catch (e) {}

      K.set(e, t, n);
    } else n = void 0;
    return n;
  }

  w.extend({
    hasData: function hasData(e) {
      return K.hasData(e) || J.hasData(e);
    },
    data: function data(e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      K.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return J.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      J.remove(e, t);
    }
  }), w.fn.extend({
    data: function data(e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === e) {
        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
          n = a.length;

          while (n--) {
            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
          }

          J.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(e) ? this.each(function () {
        K.set(this, e);
      }) : z(this, function (t) {
        var n;

        if (o && void 0 === t) {
          if (void 0 !== (n = K.get(o, e))) return n;
          if (void 0 !== (n = ne(o, e))) return n;
        } else this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        K.remove(this, e);
      });
    }
  }), w.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function a() {
        w.dequeue(e, t);
      };

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return J.get(e, n) || J.access(e, n, {
        empty: w.Callbacks("once memory").add(function () {
          J.remove(e, [t + "queue", n]);
        })
      });
    }
  }), w.fn.extend({
    queue: function queue(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);
        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      se = function se(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    i = n.apply(e, r || []);

    for (o in t) {
      e.style[o] = a[o];
    }

    return i;
  };

  function ue(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return w.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, w.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var le = {};

  function ce(e) {
    var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];
    return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
  }

  function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
      (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
    }

    for (o = 0; o < a; o++) {
      null != i[o] && (e[o].style.display = i[o]);
    }

    return e;
  }

  w.fn.extend({
    show: function show() {
      return fe(this, !0);
    },
    hide: function hide() {
      return fe(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

  function ye(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
  }

  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
  }

  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  !function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
        t = r.createElement("input");
    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();
  var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;

  function Ee() {
    return !0;
  }

  function ke() {
    return !1;
  }

  function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }

  function De(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      "string" != typeof n && (r = r || n, n = void 0);

      for (s in t) {
        De(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return w().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }

  w.event = {
    global: {},
    add: function add(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.get(e);

      if (y) {
        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(M) || [""]).length;

        while (l--) {
          d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && w.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.hasData(e) && J.get(e);

      if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;

        while (l--) {
          if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
          } else for (d in u) {
            w.event.remove(e, d + t[l], n, r, !0);
          }
        }

        w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t = w.event.fix(e),
          n,
          r,
          i,
          o,
          a,
          s,
          u = new Array(arguments.length),
          l = (J.get(this, "events") || {})[t.type] || [],
          c = w.event.special[t.type] || {};

      for (u[0] = t, n = 1; n < arguments.length; n++) {
        u[n] = arguments[n];
      }

      if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        s = w.event.handlers.call(this, t, l), n = 0;

        while ((o = s[n++]) && !t.isPropagationStopped()) {
          t.currentTarget = o.elem, r = 0;

          while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
            t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        },
        set: function set(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== Se() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === Se() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
        },
        _default: function _default(e) {
          return N(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = {
    constructor: w.Event,
    isDefaultPrevented: ke,
    isPropagationStopped: ke,
    isImmediatePropagationStopped: ke,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, w.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, w.event.addProp), w.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    w.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;
        return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), w.fn.extend({
    on: function on(e, t, n, r) {
      return De(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return De(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }

  function He(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Pe(e, t) {
    var n, r, i, o, a, s, u, l;

    if (1 === t.nodeType) {
      if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};

        for (i in l) {
          for (n = 0, r = l[i].length; n < r; n++) {
            w.event.add(t, i, l[i][n]);
          }
        }
      }

      K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
    }
  }

  function Me(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }

  function Re(e, t, n, r) {
    t = a.apply([], t);
    var i,
        o,
        s,
        u,
        l,
        c,
        f = 0,
        p = e.length,
        d = p - 1,
        y = t[0],
        v = g(y);
    if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
      var o = e.eq(i);
      v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
    });

    if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) {
        l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
      }

      if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) {
        l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
      }
    }

    return e;
  }

  function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  w.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Ne, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          u = w.contains(e.ownerDocument, e);
      if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) {
        Me(o[r], a[r]);
      }
      if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) {
        Pe(o[r], a[r]);
      } else Pe(e, s);
      return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (Y(n)) {
          if (t = n[J.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            }
            n[J.expando] = void 0;
          }

          n[K.expando] && (n[K.expando] = void 0);
        }
      }
    }
  }), w.fn.extend({
    detach: function detach(e) {
      return Ie(this, e, !0);
    },
    remove: function remove(e) {
      return Ie(this, e);
    },
    text: function text(e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    },
    html: function html(e) {
      return z(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var e = [];
      return Re(this, arguments, function (t) {
        var n = this.parentNode;
        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), w.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
        n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
      }

      return this.pushStack(r);
    };
  });

  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function $e(t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Be = new RegExp(oe.join("|"), "i");

  !function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
      }
    }

    function n(e) {
      return Math.round(parseFloat(e));
    }

    var i,
        o,
        a,
        s,
        u,
        l = r.createElement("div"),
        c = r.createElement("div");
    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
      boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return t(), s;
      },
      pixelPosition: function pixelPosition() {
        return t(), i;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return t(), u;
      },
      scrollboxSize: function scrollboxSize() {
        return t(), a;
      }
    }));
  }();

  function Fe(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function _e(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ve = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;

  function Qe(e) {
    if (e in Ye) return e;
    var t = e[0].toUpperCase() + e.slice(1),
        n = Ge.length;

    while (n--) {
      if ((e = Ge[n] + t) in Ye) return e;
    }
  }

  function Je(e) {
    var t = w.cssProps[e];
    return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }

  function Ke(e, t, n) {
    var r = ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
    }

    return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
  }

  function et(e, t, n) {
    var r = $e(e),
        i = Fe(e, t, r),
        o = "border-box" === w.css(e, "boxSizing", !1, r),
        a = o;

    if (We.test(i)) {
      if (!n) return i;
      i = "auto";
    }

    return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
  }

  w.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = G(t),
            u = Xe.test(t),
            l = e.style;
        if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" == (o = _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = G(t);
      return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = {
      get: function get(e, n, r) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
          return et(e, t, r);
        });
      },
      set: function set(e, n, r) {
        var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);
        return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
      }
    };
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    w.cssHooks[e + t] = {
      expand: function expand(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
          i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
        }

        return i;
      }
    }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
  }), w.fn.extend({
    css: function css(e, t) {
      return z(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = $e(e), i = t.length; a < i; a++) {
            o[t[a]] = w.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    }
  });

  function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }

  w.Tween = tt, tt.prototype = {
    constructor: tt,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = tt.propHooks[this.prop];
      return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = tt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
    }
  }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, w.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, w.fx = tt.prototype.init, w.fx.step = {};
  var nt,
      rt,
      it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;

  function at() {
    rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }

  function st() {
    return e.setTimeout(function () {
      nt = void 0;
    }), nt = Date.now();
  }

  function ut(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function lt(e, t, n) {
    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function ct(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        y = J.get(e, "fxshow");
    n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s();
    }), a.unqueued++, p.always(function () {
      p.always(function () {
        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
      });
    }));

    for (r in t) {
      if (i = t[r], it.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !y || void 0 === y[r]) continue;
          g = !0;
        }

        d[r] = y && y[r] || w.style(e, r);
      }
    }

    if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1;

      for (r in d) {
        u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
          display: l
        }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
          g || fe([e]), J.remove(e, "fxshow");

          for (r in d) {
            w.style(e, r, d[r]);
          }
        })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }
  }

  function ft(e, t) {
    var n, r, i, o, a;

    for (n in e) {
      if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
        o = a.expand(o), delete e[r];

        for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }

  function pt(e, t, n) {
    var r,
        i,
        o = 0,
        a = pt.prefilters.length,
        s = w.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;

      for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
        l.tweens[o].run(r);
      }

      return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
    },
        l = s.promise({
      elem: e,
      props: w.extend({}, t),
      opts: w.extend(!0, {
        specialEasing: {},
        easing: w.easing._default
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: nt || st(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(t, n) {
        var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        return l.tweens.push(r), r;
      },
      stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;
        if (i) return this;

        for (i = !0; n < r; n++) {
          l.tweens[n].run(1);
        }

        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
      }
    }),
        c = l.props;

    for (ft(c, l.opts.specialEasing); o < a; o++) {
      if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
    }

    return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  w.Animation = w.extend(pt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return ue(n.elem, e, ie.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      g(e) ? (t = e, e = ["*"]) : e = e.match(M);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
      }
    },
    prefilters: [ct],
    prefilter: function prefilter(e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    }
  }), w.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? w.extend({}, e) : {
      complete: n || !n && t || g(e) && e,
      duration: e,
      easing: n && t || t && !g(t) && t
    };
    return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, r;
  }, w.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(e, t, n, r) {
      var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function a() {
        var t = pt(this, w.extend({}, e), o);
        (i || J.get(this, "finish")) && t.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(e, t, n) {
      var r = function r(e) {
        var t = e.stop;
        delete e.stop, t(n);
      };

      return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = w.timers,
            a = J.get(this);
        if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
          a[i] && a[i].stop && ot.test(i) && r(a[i]);
        }

        for (i = o.length; i--;) {
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        }

        !t && n || w.dequeue(this, e);
      });
    },
    finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = J.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = w.timers,
            a = r ? r.length : 0;

        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }

        for (t = 0; t < a; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }

        delete n.finish;
      });
    }
  }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];

    w.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
    };
  }), w.each({
    slideDown: ut("show"),
    slideUp: ut("hide"),
    slideToggle: ut("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    w.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;

    for (nt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || w.fx.stop(), nt = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    rt || (rt = !0, at());
  }, w.fx.stop = function () {
    rt = null;
  }, w.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, w.fn.delay = function (t, n) {
    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);

      r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));
    e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
  }();
  var dt,
      ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function attr(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    }
  }), w.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!h.radioValue && "radio" === t && N(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(M);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), dt = {
    set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ht[t] || w.find.attr;

    ht[t] = function (e, t, r) {
      var i,
          o,
          a = t.toLowerCase();
      return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
    };
  });
  var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;
  w.fn.extend({
    prop: function prop(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    }
  }), w.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = w.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), h.optSelected || (w.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  });

  function vt(e) {
    return (e.match(M) || []).join(" ");
  }

  function mt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }

  w.fn.extend({
    addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (g(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, mt(this)));
      });
      if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = t[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (g(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, mt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = t[a++]) {
            while (r.indexOf(" " + o + " ") > -1) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(e, t) {
      var n = _typeof(e),
          r = "string" === n || Array.isArray(e);

      return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;

        if (r) {
          i = 0, o = w(this), a = xt(e);

          while (t = a[i++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
      }

      return !1;
    }
  });
  var bt = /\r/g;
  w.fn.extend({
    val: function val(e) {
      var t,
          n,
          r,
          i = this[0];
      {
        if (arguments.length) return r = g(e), this.each(function (n) {
          var i;
          1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });
        if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
      }
    }
  }), w.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = w.find.attr(e, "value");
          return null != t ? t : vt(w.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      }
    }, h.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), h.focusin = "onfocusin" in e;

  var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function Tt(e) {
    e.stopPropagation();
  };

  w.extend(w.event, {
    trigger: function trigger(t, n, i, o) {
      var a,
          s,
          u,
          l,
          c,
          p,
          d,
          h,
          v = [i || r],
          m = f.call(t, "type") ? t.type : t,
          x = f.call(t, "namespace") ? t.namespace.split(".") : [];

      if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == _typeof(t) && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
            v.push(s), u = s;
          }

          u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }

        a = 0;

        while ((s = v[a++]) && !t.isPropagationStopped()) {
          h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
        }

        return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = w.extend(new w.Event(), n, {
        type: e,
        isSimulated: !0
      });
      w.event.trigger(r, null, t);
    }
  }), w.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return w.event.trigger(e, t, n, !0);
    }
  }), h.focusin || w.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };

    w.event.special[t] = {
      setup: function setup() {
        var r = this.ownerDocument || this,
            i = J.access(r, t);
        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
      },
      teardown: function teardown() {
        var r = this.ownerDocument || this,
            i = J.access(r, t) - 1;
        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
      }
    };
  });
  var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;

  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;

    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }

    return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };

  var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;

  function jt(e, t, n, r) {
    var i;
    if (Array.isArray(t)) w.each(t, function (t, i) {
      n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == _typeof(i) && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x(t)) r(e, t);else for (i in t) {
      jt(e + "[" + i + "]", t[i], n, r);
    }
  }

  w.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = g(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      jt(n, e[n], t, i);
    }
    return r.join("&");
  }, w.fn.extend({
    serialize: function serialize() {
      return w.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");
        return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = w(this).val();
        return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Dt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Dt, "\r\n")
        };
      }).get();
    }
  });
  var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");
  Bt.href = Ct.href;

  function Ft(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r,
          i = 0,
          o = t.toLowerCase().match(M) || [];
      if (g(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }

  function _t(e, t, n, r) {
    var i = {},
        o = e === Wt;

    function a(s) {
      var u;
      return i[s] = !0, w.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);
        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }

    return a(t.dataTypes[0]) || !i["*"] && a("*");
  }

  function zt(e, t) {
    var n,
        r,
        i = w.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && w.extend(!0, e, r), e;
  }

  function Xt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.contents,
        u = e.dataTypes;

    while ("*" === u[0]) {
      u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    }

    if (r) for (i in s) {
      if (s[i] && s[i].test(r)) {
        u.unshift(i);
        break;
      }
    }
    if (u[0] in n) o = u[0];else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }

        a || (a = i);
      }

      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }

  function Ut(e, t, n, r) {
    var i,
        o,
        a,
        s,
        u,
        l = {},
        c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) {
      l[a.toLowerCase()] = e.converters[a];
    }
    o = c.shift();

    while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
          if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
            break;
          }
        }
        if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (e) {
          return {
            state: "parsererror",
            error: a ? e : "No conversion from " + u + " to " + o
          };
        }
      }
    }

    return {
      state: "success",
      data: t
    };
  }

  w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: "GET",
      isLocal: Pt.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": w.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(It),
    ajaxTransport: Ft(Wt),
    ajax: function ajax(t, n) {
      "object" == _typeof(t) && (n = t, t = void 0), n = n || {};
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          m = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          T = {},
          C = "canceled",
          E = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (c) {
            if (!s) {
              s = {};

              while (t = Ot.exec(a)) {
                s[t[1].toLowerCase()] = t[2];
              }
            }

            t = s[e.toLowerCase()];
          }

          return null == t ? null : t;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? a : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == c && (h.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (c) E.always(e[E.status]);else for (t in e) {
            x[t] = [x[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || C;
          return i && i.abort(t), k(0, t), this;
        }
      };

      if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
        l = r.createElement("a");

        try {
          l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }

      if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
      (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);

      for (p in h.headers) {
        E.setRequestHeader(p, h.headers[p]);
      }

      if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();

      if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
        if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
        h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          E.abort("timeout");
        }, h.timeout));

        try {
          c = !1, i.send(b, k);
        } catch (e) {
          if (c) throw e;
          k(-1, e);
        }
      } else k(-1, "No Transport");

      function k(t, n, r, s) {
        var l,
            p,
            d,
            b,
            T,
            C = n;
        c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
      }

      return E;
    },
    getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    }
  }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, r, i) {
      return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    });
  }, w.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(e) {
      return g(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function wrap(e) {
      var t = g(e);
      return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    }
  }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };
  var Vt = {
    0: 200,
    1223: 204
  },
      Gt = w.ajaxSettings.xhr();
  h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
    var _n2, r;

    if (h.cors || Gt && !t.crossDomain) return {
      send: function send(i, o) {
        var a,
            s = t.xhr();
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
          s[a] = t.xhrFields[a];
        }
        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");

        for (a in i) {
          s.setRequestHeader(a, i[a]);
        }

        _n2 = function n(e) {
          return function () {
            _n2 && (_n2 = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: s.response
            } : {
              text: s.responseText
            }, s.getAllResponseHeaders()));
          };
        }, s.onload = _n2(), r = s.onerror = s.ontimeout = _n2("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            _n2 && r();
          });
        }, _n2 = _n2("abort");

        try {
          s.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n2) throw e;
        }
      },
      abort: function abort() {
        _n2 && _n2();
      }
    };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return w.globalEval(e), e;
      }
    }
  }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n3;

      return {
        send: function send(i, o) {
          t = w("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _n3 = function n(e) {
            t.remove(), _n3 = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), r.head.appendChild(t[0]);
        },
        abort: function abort() {
          _n3 && _n3();
        }
      };
    }
  });
  var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Yt.pop() || w.expando + "_" + Et++;
      return this[e] = !0, e;
    }
  }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || w.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
    }), "script";
  }), h.createHTMLDocument = function () {
    var e = r.implementation.createHTMLDocument("").body;
    return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), w.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];
    "boolean" == typeof t && (n = t, t = !1);
    var i, o, a;
    return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
  }, w.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), a.length > 0 && w.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};
      "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
    }
  }, w.fn.extend({
    offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });
      var t,
          n,
          r = this[0];
      if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: t.top + n.pageYOffset,
        left: t.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      };
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - w.css(r, "marginTop", !0),
          left: t.left - i.left - w.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === w.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || be;
      });
    }
  }), w.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, t) {
    var n = "pageYOffset" === t;

    w.fn[e] = function (r) {
      return z(this, function (e, r, i) {
        var o;
        if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({
    Height: "height",
    Width: "width"
  }, function (e, t) {
    w.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function (n, r) {
      w.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");
        return z(this, function (t, n, i) {
          var o;
          return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), w.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), w.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
      return e.apply(t || this, r.concat(o.call(arguments)));
    }, i.guid = e.guid = e.guid || w.guid++, i;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });
  var Jt = e.jQuery,
      Kt = e.$;
  return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
  }, t || (e.jQuery = e.$ = w), w;
});
/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */

(function (e, t) {
  'object' == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t();
})(this, function () {
  'use strict';

  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }

  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = e.ownerDocument.defaultView,
        n = o.getComputedStyle(e, null);
    return t ? n[t] : n;
  }

  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }

  function n(e) {
    if (!e) return document.body;

    switch (e.nodeName) {
      case 'HTML':
      case 'BODY':
        return e.ownerDocument.body;

      case '#document':
        return e.body;
    }

    var i = t(e),
        r = i.overflow,
        p = i.overflowX,
        s = i.overflowY;
    return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
  }

  function r(e) {
    return 11 === e ? pe : 10 === e ? se : pe || se;
  }

  function p(e) {
    if (!e) return document.documentElement;

    for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;) {
      n = (e = e.nextElementSibling).offsetParent;
    }

    var i = n && n.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
  }

  function s(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e);
  }

  function d(e) {
    return null === e.parentNode ? e : d(e.parentNode);
  }

  function a(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        n = o ? e : t,
        i = o ? t : e,
        r = document.createRange();
    r.setStart(n, 0), r.setEnd(i, 0);
    var l = r.commonAncestorContainer;
    if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
    var f = d(e);
    return f.host ? a(f.host, t) : a(e, d(t).host);
  }

  function l(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
        o = 'top' === t ? 'scrollTop' : 'scrollLeft',
        n = e.nodeName;

    if ('BODY' === n || 'HTML' === n) {
      var i = e.ownerDocument.documentElement,
          r = e.ownerDocument.scrollingElement || i;
      return r[o];
    }

    return e[o];
  }

  function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        n = l(t, 'top'),
        i = l(t, 'left'),
        r = o ? -1 : 1;
    return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e;
  }

  function m(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
        n = 'Left' == o ? 'Right' : 'Bottom';
    return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10);
  }

  function h(e, t, o, n) {
    return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0);
  }

  function c(e) {
    var t = e.body,
        o = e.documentElement,
        n = r(10) && getComputedStyle(o);
    return {
      height: h('Height', t, o, n),
      width: h('Width', t, o, n)
    };
  }

  function g(e) {
    return fe({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    });
  }

  function u(e) {
    var o = {};

    try {
      if (r(10)) {
        o = e.getBoundingClientRect();
        var n = l(e, 'top'),
            i = l(e, 'left');
        o.top += n, o.left += i, o.bottom += n, o.right += i;
      } else o = e.getBoundingClientRect();
    } catch (t) {}

    var p = {
      left: o.left,
      top: o.top,
      width: o.right - o.left,
      height: o.bottom - o.top
    },
        s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {},
        d = s.width || e.clientWidth || p.right - p.left,
        a = s.height || e.clientHeight || p.bottom - p.top,
        f = e.offsetWidth - d,
        h = e.offsetHeight - a;

    if (f || h) {
      var u = t(e);
      f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h;
    }

    return g(p);
  }

  function b(e, o) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        p = r(10),
        s = 'HTML' === o.nodeName,
        d = u(e),
        a = u(o),
        l = n(e),
        m = t(o),
        h = parseFloat(m.borderTopWidth, 10),
        c = parseFloat(m.borderLeftWidth, 10);
    i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0));
    var b = g({
      top: d.top - a.top - h,
      left: d.left - a.left - c,
      width: d.width,
      height: d.height
    });

    if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
      var w = parseFloat(m.marginTop, 10),
          y = parseFloat(m.marginLeft, 10);
      b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y;
    }

    return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b;
  }

  function w(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = e.ownerDocument.documentElement,
        n = b(e, o),
        i = ee(o.clientWidth, window.innerWidth || 0),
        r = ee(o.clientHeight, window.innerHeight || 0),
        p = t ? 0 : l(o),
        s = t ? 0 : l(o, 'left'),
        d = {
      top: p - n.top + n.marginTop,
      left: s - n.left + n.marginLeft,
      width: i,
      height: r
    };
    return g(d);
  }

  function y(e) {
    var n = e.nodeName;
    return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || y(o(e));
  }

  function E(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;

    for (var o = e.parentElement; o && 'none' === t(o, 'transform');) {
      o = o.parentElement;
    }

    return o || document.documentElement;
  }

  function v(e, t, i, r) {
    var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        s = {
      top: 0,
      left: 0
    },
        d = p ? E(e) : a(e, t);
    if ('viewport' === r) s = w(d, p);else {
      var l;
      'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
      var f = b(l, d, p);

      if ('HTML' === l.nodeName && !y(d)) {
        var m = c(e.ownerDocument),
            h = m.height,
            g = m.width;
        s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left;
      } else s = f;
    }
    i = i || 0;
    var u = 'number' == typeof i;
    return s.left += u ? i : i.left || 0, s.top += u ? i : i.top || 0, s.right -= u ? i : i.right || 0, s.bottom -= u ? i : i.bottom || 0, s;
  }

  function x(e) {
    var t = e.width,
        o = e.height;
    return t * o;
  }

  function O(e, t, o, n, i) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var p = v(o, n, r, i),
        s = {
      top: {
        width: p.width,
        height: t.top - p.top
      },
      right: {
        width: p.right - t.right,
        height: p.height
      },
      bottom: {
        width: p.width,
        height: p.bottom - t.bottom
      },
      left: {
        width: t.left - p.left,
        height: p.height
      }
    },
        d = Object.keys(s).map(function (e) {
      return fe({
        key: e
      }, s[e], {
        area: x(s[e])
      });
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        a = d.filter(function (e) {
      var t = e.width,
          n = e.height;
      return t >= o.clientWidth && n >= o.clientHeight;
    }),
        l = 0 < a.length ? a[0].key : d[0].key,
        f = e.split('-')[1];
    return l + (f ? '-' + f : '');
  }

  function L(e, t, o) {
    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
        i = n ? E(t) : a(t, o);
    return b(o, i, n);
  }

  function S(e) {
    var t = e.ownerDocument.defaultView,
        o = t.getComputedStyle(e),
        n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
        i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
        r = {
      width: e.offsetWidth + i,
      height: e.offsetHeight + n
    };
    return r;
  }

  function T(e) {
    var t = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }

  function D(e, t, o) {
    o = o.split('-')[0];
    var n = S(e),
        i = {
      width: n.width,
      height: n.height
    },
        r = -1 !== ['right', 'left'].indexOf(o),
        p = r ? 'top' : 'left',
        s = r ? 'left' : 'top',
        d = r ? 'height' : 'width',
        a = r ? 'width' : 'height';
    return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i;
  }

  function C(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }

  function N(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o;
    });
    var n = C(e, function (e) {
      return e[t] === o;
    });
    return e.indexOf(n);
  }

  function P(t, o, n) {
    var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
    return i.forEach(function (t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      var n = t['function'] || t.fn;
      t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t));
    }), o;
  }

  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = D(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
    }
  }

  function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
          n = e.enabled;
      return n && o === t;
    });
  }

  function H(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
      var i = t[n],
          r = i ? '' + i + o : e;
      if ('undefined' != typeof document.body.style[r]) return r;
    }

    return null;
  }

  function B() {
    return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[H('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }

  function A(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }

  function M(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
        p = r ? e.ownerDocument.defaultView : e;
    p.addEventListener(t, o, {
      passive: !0
    }), r || M(n(p.parentNode), t, o, i), i.push(p);
  }

  function F(e, t, o, i) {
    o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {
      passive: !0
    });
    var r = n(e);
    return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
  }

  function I() {
    this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
  }

  function R(e, t) {
    return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
  }

  function U() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state));
  }

  function Y(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }

  function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = '';
      -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n;
    });
  }

  function V(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = t[o];
      !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }

  function q(e, t) {
    var o = e.offsets,
        n = o.popper,
        i = o.reference,
        r = -1 !== ['left', 'right'].indexOf(e.placement),
        p = -1 !== e.placement.indexOf('-'),
        s = i.width % 2 == n.width % 2,
        d = 1 == i.width % 2 && 1 == n.width % 2,
        a = function a(e) {
      return e;
    },
        l = t ? r || p || s ? $ : Z : a,
        f = t ? $ : a;

    return {
      left: l(d && !p && t ? n.left - 1 : n.left),
      top: f(n.top),
      bottom: f(n.bottom),
      right: l(n.right)
    };
  }

  function K(e, t, o) {
    var n = C(e, function (e) {
      var o = e.name;
      return o === t;
    }),
        i = !!n && e.some(function (e) {
      return e.name === o && e.enabled && e.order < n.order;
    });

    if (!i) {
      var r = '`' + t + '`';
      console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
    }

    return i;
  }

  function z(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }

  function G(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = ce.indexOf(e),
        n = ce.slice(o + 1).concat(ce.slice(0, o));
    return t ? n.reverse() : n;
  }

  function _(e, t, o, n) {
    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        r = +i[1],
        p = i[2];
    if (!r) return e;

    if (0 === p.indexOf('%')) {
      var s;

      switch (p) {
        case '%p':
          s = o;
          break;

        case '%':
        case '%r':
        default:
          s = n;
      }

      var d = g(s);
      return d[t] / 100 * r;
    }

    if ('vh' === p || 'vw' === p) {
      var a;
      return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
    }

    return r;
  }

  function X(e, t, o, n) {
    var i = [0, 0],
        r = -1 !== ['right', 'left'].indexOf(n),
        p = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        s = p.indexOf(C(p, function (e) {
      return -1 !== e.search(/,|\s/);
    }));
    p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
        a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
    return a = a.map(function (e, n) {
      var i = (1 === n ? !r : r) ? 'height' : 'width',
          p = !1;
      return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return _(e, i, t, o);
      });
    }), a.forEach(function (e, t) {
      e.forEach(function (o, n) {
        Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1));
      });
    }), i;
  }

  function J(e, t) {
    var o,
        n = t.offset,
        i = e.placement,
        r = e.offsets,
        p = r.popper,
        s = r.reference,
        d = i.split('-')[0];
    return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
  }

  for (var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = 'undefined' != typeof window && 'undefined' != typeof document, oe = ['Edge', 'Trident', 'Firefox'], ne = 0, ie = 0; ie < oe.length; ie += 1) {
    if (te && 0 <= navigator.userAgent.indexOf(oe[ie])) {
      ne = 1;
      break;
    }
  }

  var i = te && window.Promise,
      re = i ? function (e) {
    var t = !1;
    return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;
    return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, ne));
    };
  },
      pe = te && !!(window.MSInputMethodContext && document.documentMode),
      se = te && /MSIE 10/.test(navigator.userAgent),
      de = function de(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  },
      ae = function () {
    function e(e, t) {
      for (var o, n = 0; n < t.length; n++) {
        o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    return function (t, o, n) {
      return o && e(t.prototype, o), n && e(t, n), t;
    };
  }(),
      le = function le(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
      value: o,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = o, e;
  },
      fe = Object.assign || function (e) {
    for (var t, o = 1; o < arguments.length; o++) {
      for (var n in t = arguments[o], t) {
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
    }

    return e;
  },
      me = te && /Firefox/i.test(navigator.userAgent),
      he = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
      ce = he.slice(3),
      ge = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  },
      ue = function () {
    function t(o, n) {
      var i = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      de(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }, this.update = re(this.update.bind(this)), this.options = fe({}, t.Defaults, r), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(fe({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
        i.options.modifiers[e] = fe({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return fe({
          name: e
        }, i.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
      }), this.update();
      var p = this.options.eventsEnabled;
      p && this.enableEventListeners(), this.state.eventsEnabled = p;
    }

    return ae(t, [{
      key: 'update',
      value: function value() {
        return k.call(this);
      }
    }, {
      key: 'destroy',
      value: function value() {
        return B.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function value() {
        return I.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function value() {
        return U.call(this);
      }
    }]), t;
  }();

  return ue.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ue.placements = he, ue.Defaults = {
    placement: 'bottom',
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              n = t.split('-')[1];

          if (n) {
            var i = e.offsets,
                r = i.reference,
                p = i.popper,
                s = -1 !== ['bottom', 'top'].indexOf(o),
                d = s ? 'left' : 'top',
                a = s ? 'width' : 'height',
                l = {
              start: le({}, d, r[d]),
              end: le({}, d, r[d] + r[a] - p[a])
            };
            e.offsets.popper = fe({}, p, l[n]);
          }

          return e;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: J,
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.boundariesElement || p(e.instance.popper);
          e.instance.reference === o && (o = p(o));
          var n = H('transform'),
              i = e.instance.popper.style,
              r = i.top,
              s = i.left,
              d = i[n];
          i.top = '', i.left = '', i[n] = '';
          var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
          i.top = r, i.left = s, i[n] = d, t.boundaries = a;
          var l = t.priority,
              f = e.offsets.popper,
              m = {
            primary: function primary(e) {
              var o = f[e];
              return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), le({}, e, o);
            },
            secondary: function secondary(e) {
              var o = 'right' === e ? 'left' : 'top',
                  n = f[o];
              return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))), le({}, o, n);
            }
          };
          return l.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
            f = fe({}, f, m[t](e));
          }), e.offsets.popper = f, e;
        },
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(e) {
          var t = e.offsets,
              o = t.popper,
              n = t.reference,
              i = e.placement.split('-')[0],
              r = Z,
              p = -1 !== ['top', 'bottom'].indexOf(i),
              s = p ? 'right' : 'bottom',
              d = p ? 'left' : 'top',
              a = p ? 'width' : 'height';
          return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(e, o) {
          var n;
          if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
          var i = o.element;

          if ('string' == typeof i) {
            if (i = e.instance.popper.querySelector(i), !i) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;

          var r = e.placement.split('-')[0],
              p = e.offsets,
              s = p.popper,
              d = p.reference,
              a = -1 !== ['left', 'right'].indexOf(r),
              l = a ? 'height' : 'width',
              f = a ? 'Top' : 'Left',
              m = f.toLowerCase(),
              h = a ? 'left' : 'top',
              c = a ? 'bottom' : 'right',
              u = S(i)[l];
          d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
          var b = d[m] + d[l] / 2 - u / 2,
              w = t(e.instance.popper),
              y = parseFloat(w['margin' + f], 10),
              E = parseFloat(w['border' + f + 'Width'], 10),
              v = b - e.offsets.popper[m] - y - E;
          return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, le(n, m, $(v)), le(n, h, ''), n), e;
        },
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(e, t) {
          if (W(e.instance.modifiers, 'inner')) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
              n = e.placement.split('-')[0],
              i = T(n),
              r = e.placement.split('-')[1] || '',
              p = [];

          switch (t.behavior) {
            case ge.FLIP:
              p = [n, i];
              break;

            case ge.CLOCKWISE:
              p = G(n);
              break;

            case ge.COUNTERCLOCKWISE:
              p = G(n, !0);
              break;

            default:
              p = t.behavior;
          }

          return p.forEach(function (s, d) {
            if (n !== s || p.length === d + 1) return e;
            n = e.placement.split('-')[0], i = T(n);
            var a = e.offsets.popper,
                l = e.offsets.reference,
                f = Z,
                m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                h = f(a.left) < f(o.left),
                c = f(a.right) > f(o.right),
                g = f(a.top) < f(o.top),
                u = f(a.bottom) > f(o.bottom),
                b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                w = -1 !== ['top', 'bottom'].indexOf(n),
                y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u);
            (m || b || y) && (e.flipped = !0, (m || b) && (n = p[d + 1]), y && (r = z(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = fe({}, e.offsets.popper, D(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'));
          }), e;
        },
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport'
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              n = e.offsets,
              i = n.popper,
              r = n.reference,
              p = -1 !== ['left', 'right'].indexOf(o),
              s = -1 === ['top', 'left'].indexOf(o);
          return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(e) {
          if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
          var t = e.offsets.reference,
              o = C(e.instance.modifiers, function (e) {
            return 'preventOverflow' === e.name;
          }).boundaries;

          if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
          }

          return e;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.x,
              n = t.y,
              i = e.offsets.popper,
              r = C(e.instance.modifiers, function (e) {
            return 'applyStyle' === e.name;
          }).gpuAcceleration;
          void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
          var s,
              d,
              a = void 0 === r ? t.gpuAcceleration : r,
              l = p(e.instance.popper),
              f = u(l),
              m = {
            position: i.position
          },
              h = q(e, 2 > window.devicePixelRatio || !me),
              c = 'bottom' === o ? 'top' : 'bottom',
              g = 'right' === n ? 'left' : 'right',
              b = H('transform');
          if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';else {
            var w = 'bottom' == c ? -1 : 1,
                y = 'right' == g ? -1 : 1;
            m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g;
          }
          var E = {
            "x-placement": e.placement
          };
          return e.attributes = fe({}, E, e.attributes), e.styles = fe({}, m, e.styles), e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles), e;
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(e) {
          return j(e.instance.popper, e.styles), V(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e;
        },
        onLoad: function onLoad(e, t, o, n, i) {
          var r = L(i, t, e, o.positionFixed),
              p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
          return t.setAttribute('x-placement', p), j(t, {
            position: o.positionFixed ? 'fixed' : 'absolute'
          }), o;
        },
        gpuAcceleration: void 0
      }
    }
  }, ue;
});
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */


!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper);
}(this, function (t, g, u) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function l(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
          e = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable;
      }))), e.forEach(function (t) {
        var e, n, i;
        e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = i;
      });
    }

    return o;
  }

  g = g && g.hasOwnProperty("default") ? g["default"] : g, u = u && u.hasOwnProperty("default") ? u["default"] : u;
  var e = "transitionend";

  function n(t) {
    var e = this,
        n = !1;
    return g(this).one(_.TRANSITION_END, function () {
      n = !0;
    }), setTimeout(function () {
      n || _.triggerTransitionEnd(e);
    }, t), this;
  }

  var _ = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function getUID(t) {
      for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {
        ;
      }

      return t;
    },
    getSelectorFromElement: function getSelectorFromElement(t) {
      var e = t.getAttribute("data-target");

      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }

      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
      if (!t) return 0;
      var e = g(t).css("transition-duration"),
          n = g(t).css("transition-delay"),
          i = parseFloat(e),
          o = parseFloat(n);
      return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
    },
    reflow: function reflow(t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(t) {
      g(t).trigger(e);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(e);
    },
    isElement: function isElement(t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(t, e, n) {
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              r = e[i],
              s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
          if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
        }
      }

      var a;
    },
    findShadowRoot: function findShadowRoot(t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }
  };
  g.fn.emulateTransitionEnd = n, g.event.special[_.TRANSITION_END] = {
    bindType: e,
    delegateType: e,
    handle: function handle(t) {
      if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
    }
  };

  var o = "alert",
      r = "bs.alert",
      a = "." + r,
      c = g.fn[o],
      h = {
    CLOSE: "close" + a,
    CLOSED: "closed" + a,
    CLICK_DATA_API: "click" + a + ".data-api"
  },
      f = "alert",
      d = "fade",
      m = "show",
      p = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.close = function (t) {
      var e = this._element;
      t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      g.removeData(this._element, r), this._element = null;
    }, t._getRootElement = function (t) {
      var e = _.getSelectorFromElement(t),
          n = !1;

      return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n;
    }, t._triggerCloseEvent = function (t) {
      var e = g.Event(h.CLOSE);
      return g(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;

      if (g(e).removeClass(m), g(e).hasClass(d)) {
        var t = _.getTransitionDurationFromElement(e);

        g(e).one(_.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      g(t).detach().trigger(h.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(r);
        e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), i;
  }();

  g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())), g.fn[o] = p._jQueryInterface, g.fn[o].Constructor = p, g.fn[o].noConflict = function () {
    return g.fn[o] = c, p._jQueryInterface;
  };

  var v = "button",
      y = "bs.button",
      E = "." + y,
      C = ".data-api",
      T = g.fn[v],
      S = "active",
      b = "btn",
      I = "focus",
      D = '[data-toggle^="button"]',
      w = '[data-toggle="buttons"]',
      A = 'input:not([type="hidden"])',
      N = ".active",
      O = ".btn",
      k = {
    CLICK_DATA_API: "click" + E + C,
    FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C
  },
      P = function () {
    function n(t) {
      this._element = t;
    }

    var t = n.prototype;
    return t.toggle = function () {
      var t = !0,
          e = !0,
          n = g(this._element).closest(w)[0];

      if (n) {
        var i = this._element.querySelector(A);

        if (i) {
          if ("radio" === i.type) if (i.checked && this._element.classList.contains(S)) t = !1;else {
            var o = n.querySelector(N);
            o && g(o).removeClass(S);
          }

          if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !this._element.classList.contains(S), g(i).trigger("change");
          }

          i.focus(), e = !1;
        }
      }

      e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S);
    }, t.dispose = function () {
      g.removeData(this._element, y), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(y);
        t || (t = new n(this), g(this).data(y, t)), "toggle" === e && t[e]();
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), n;
  }();

  g(document).on(k.CLICK_DATA_API, D, function (t) {
    t.preventDefault();
    var e = t.target;
    g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle");
  }).on(k.FOCUS_BLUR_DATA_API, D, function (t) {
    var e = g(t.target).closest(O)[0];
    g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
  }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function () {
    return g.fn[v] = T, P._jQueryInterface;
  };

  var L = "carousel",
      j = "bs.carousel",
      H = "." + j,
      R = ".data-api",
      x = g.fn[L],
      F = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      U = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      W = "next",
      q = "prev",
      M = "left",
      K = "right",
      Q = {
    SLIDE: "slide" + H,
    SLID: "slid" + H,
    KEYDOWN: "keydown" + H,
    MOUSEENTER: "mouseenter" + H,
    MOUSELEAVE: "mouseleave" + H,
    TOUCHSTART: "touchstart" + H,
    TOUCHMOVE: "touchmove" + H,
    TOUCHEND: "touchend" + H,
    POINTERDOWN: "pointerdown" + H,
    POINTERUP: "pointerup" + H,
    DRAG_START: "dragstart" + H,
    LOAD_DATA_API: "load" + H + R,
    CLICK_DATA_API: "click" + H + R
  },
      B = "carousel",
      V = "active",
      Y = "slide",
      z = "carousel-item-right",
      X = "carousel-item-left",
      $ = "carousel-item-next",
      G = "carousel-item-prev",
      J = "pointer-event",
      Z = ".active",
      tt = ".active.carousel-item",
      et = ".carousel-item",
      nt = ".carousel-item img",
      it = ".carousel-item-next, .carousel-item-prev",
      ot = ".carousel-indicators",
      rt = "[data-slide], [data-slide-to]",
      st = '[data-ride="carousel"]',
      at = {
    TOUCH: "touch",
    PEN: "pen"
  },
      lt = function () {
    function r(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(ot), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }

    var t = r.prototype;
    return t.next = function () {
      this._isSliding || this._slide(W);
    }, t.nextWhenVisible = function () {
      !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(q);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;
      this._activeElement = this._element.querySelector(tt);

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) g(this._element).one(Q.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = n < t ? W : q;

        this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      g(this._element).off(H), g.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = l({}, F, t), _.typeCheckConfig(L, t, U), t;
    }, t._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);

      if (!(t <= 40)) {
        var e = t / this.touchDeltaX;
        0 < e && this.prev(), e < 0 && this.next();
      }
    }, t._addEventListeners = function () {
      var e = this;
      this._config.keyboard && g(this._element).on(Q.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(Q.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), this._config.touch && this._addTouchEventListeners();
    }, t._addTouchEventListeners = function () {
      var n = this;

      if (this._touchSupported) {
        var e = function e(t) {
          n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX);
        },
            i = function i(t) {
          n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) {
            return n.cycle(t);
          }, 500 + n._config.interval));
        };

        g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function (t) {
          return t.preventDefault();
        }), this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function (t) {
          return e(t);
        }), g(this._element).on(Q.POINTERUP, function (t) {
          return i(t);
        }), this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function (t) {
          return e(t);
        }), g(this._element).on(Q.TOUCHMOVE, function (t) {
          var e;
          (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX;
        }), g(this._element).on(Q.TOUCHEND, function (t) {
          return i(t);
        }));
      }
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;

        case 39:
          t.preventDefault(), this.next();
      }
    }, t._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [], this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === W,
          i = t === q,
          o = this._getItemIndex(e),
          r = this._items.length - 1;

      if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
      var s = (o + (t === q ? -1 : 1)) % this._items.length;
      return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(this._element.querySelector(tt)),
          o = g.Event(Q.SLIDE, {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });

      return g(this._element).trigger(o), o;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
        g(e).removeClass(V);

        var n = this._indicatorsElement.children[this._getItemIndex(t)];

        n && g(n).addClass(V);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          o,
          r = this,
          s = this._element.querySelector(tt),
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);

      if (o = t === W ? (n = X, i = $, M) : (n = z, i = G, K), l && g(l).hasClass(V)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
        var u = g.Event(Q.SLID, {
          relatedTarget: l,
          direction: o,
          from: a,
          to: c
        });

        if (g(this._element).hasClass(Y)) {
          g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
          var f = parseInt(l.getAttribute("data-interval"), 10);
          this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;

          var d = _.getTransitionDurationFromElement(s);

          g(s).one(_.TRANSITION_END, function () {
            g(l).removeClass(n + " " + i).addClass(V), g(s).removeClass(V + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
              return g(r._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(d);
        } else g(s).removeClass(V), g(l).addClass(V), this._isSliding = !1, g(this._element).trigger(u);

        h && this.cycle();
      }
    }, r._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this).data(j),
            e = l({}, F, g(this).data());
        "object" == _typeof(i) && (e = l({}, e, i));
        var n = "string" == typeof i ? i : e.slide;
        if (t || (t = new r(this, e), g(this).data(j, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        } else e.interval && e.ride && (t.pause(), t.cycle());
      });
    }, r._dataApiClickHandler = function (t) {
      var e = _.getSelectorFromElement(this);

      if (e) {
        var n = g(e)[0];

        if (n && g(n).hasClass(B)) {
          var i = l({}, g(n).data(), g(this).data()),
              o = this.getAttribute("data-slide-to");
          o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault();
        }
      }
    }, s(r, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return F;
      }
    }]), r;
  }();

  g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler), g(window).on(Q.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
      var i = g(t[e]);

      lt._jQueryInterface.call(i, i.data());
    }
  }), g.fn[L] = lt._jQueryInterface, g.fn[L].Constructor = lt, g.fn[L].noConflict = function () {
    return g.fn[L] = x, lt._jQueryInterface;
  };

  var ct = "collapse",
      ht = "bs.collapse",
      ut = "." + ht,
      ft = g.fn[ct],
      dt = {
    toggle: !0,
    parent: ""
  },
      gt = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      _t = {
    SHOW: "show" + ut,
    SHOWN: "shown" + ut,
    HIDE: "hide" + ut,
    HIDDEN: "hidden" + ut,
    CLICK_DATA_API: "click" + ut + ".data-api"
  },
      mt = "show",
      pt = "collapse",
      vt = "collapsing",
      yt = "collapsed",
      Et = "width",
      Ct = "height",
      Tt = ".show, .collapsing",
      St = '[data-toggle="collapse"]',
      bt = function () {
    function a(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));

      for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            s = _.getSelectorFromElement(r),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
          return t === e;
        });

        null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var t = a.prototype;
    return t.toggle = function () {
      g(this._element).hasClass(mt) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;

      if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function (t) {
        return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt);
      })).length && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
        var i = g.Event(_t.SHOW);

        if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
          t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null));

          var o = this._getDimension();

          g(this._element).removeClass(pt).addClass(vt), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0), this.setTransitioning(!0);

          var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
              s = _.getTransitionDurationFromElement(this._element);

          g(this._element).one(_.TRANSITION_END, function () {
            g(n._element).removeClass(vt).addClass(pt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN);
          }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;

      if (!this._isTransitioning && g(this._element).hasClass(mt)) {
        var e = g.Event(_t.HIDE);

        if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();

          this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
          var i = this._triggerArray.length;
          if (0 < i) for (var o = 0; o < i; o++) {
            var r = this._triggerArray[o],
                s = _.getSelectorFromElement(r);

            if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);
          this._element.style[n] = "";

          var a = _.getTransitionDurationFromElement(this._element);

          g(this._element).one(_.TRANSITION_END, function () {
            t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN);
          }).emulateTransitionEnd(a);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      g.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = l({}, dt, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ct, t, gt), t;
    }, t._getDimension = function () {
      return g(this._element).hasClass(Et) ? Et : Ct;
    }, t._getParent = function () {
      var t,
          n = this;
      _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
      var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          i = [].slice.call(t.querySelectorAll(e));
      return g(i).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      var n = g(t).hasClass(mt);
      e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n);
    }, a._getTargetFromElement = function (t) {
      var e = _.getSelectorFromElement(t);

      return e ? document.querySelector(e) : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this),
            e = t.data(ht),
            n = l({}, dt, t.data(), "object" == _typeof(i) && i ? i : {});

        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ht, e)), "string" == typeof i) {
          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
          e[i]();
        }
      });
    }, s(a, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return dt;
      }
    }]), a;
  }();

  g(document).on(_t.CLICK_DATA_API, St, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();

    var n = g(this),
        e = _.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(e));

    g(i).each(function () {
      var t = g(this),
          e = t.data(ht) ? "toggle" : n.data();

      bt._jQueryInterface.call(t, e);
    });
  }), g.fn[ct] = bt._jQueryInterface, g.fn[ct].Constructor = bt, g.fn[ct].noConflict = function () {
    return g.fn[ct] = ft, bt._jQueryInterface;
  };

  var It = "dropdown",
      Dt = "bs.dropdown",
      wt = "." + Dt,
      At = ".data-api",
      Nt = g.fn[It],
      Ot = new RegExp("38|40|27"),
      kt = {
    HIDE: "hide" + wt,
    HIDDEN: "hidden" + wt,
    SHOW: "show" + wt,
    SHOWN: "shown" + wt,
    CLICK: "click" + wt,
    CLICK_DATA_API: "click" + wt + At,
    KEYDOWN_DATA_API: "keydown" + wt + At,
    KEYUP_DATA_API: "keyup" + wt + At
  },
      Pt = "disabled",
      Lt = "show",
      jt = "dropup",
      Ht = "dropright",
      Rt = "dropleft",
      xt = "dropdown-menu-right",
      Ft = "position-static",
      Ut = '[data-toggle="dropdown"]',
      Wt = ".dropdown form",
      qt = ".dropdown-menu",
      Mt = ".navbar-nav",
      Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Qt = "top-start",
      Bt = "top-end",
      Vt = "bottom-start",
      Yt = "bottom-end",
      zt = "right-start",
      Xt = "left-start",
      $t = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic"
  },
      Gt = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string"
  },
      Jt = function () {
    function c(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var t = c.prototype;
    return t.toggle = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
        var t = c._getParentFromElement(this._element),
            e = g(this._menu).hasClass(Lt);

        if (c._clearMenus(), !e) {
          var n = {
            relatedTarget: this._element
          },
              i = g.Event(kt.SHOW, n);

          if (g(t).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
              var o = this._element;
              "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(t).addClass(Ft), this._popper = new u(o, this._menu, this._getPopperConfig());
            }

            "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Lt), g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n));
          }
        }
      }
    }, t.show = function () {
      if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
        var t = {
          relatedTarget: this._element
        },
            e = g.Event(kt.SHOW, t),
            n = c._getParentFromElement(this._element);

        g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)));
      }
    }, t.hide = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
        var t = {
          relatedTarget: this._element
        },
            e = g.Event(kt.HIDE, t),
            n = c._getParentFromElement(this._element);

        g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)));
      }
    }, t.dispose = function () {
      g.removeData(this._element, Dt), g(this._element).off(wt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;
      g(this._element).on(kt.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = l({}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(It, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = c._getParentFromElement(this._element);

        t && (this._menu = t.querySelector(qt));
      }

      return this._menu;
    }, t._getPlacement = function () {
      var t = g(this._element.parentNode),
          e = Vt;
      return t.hasClass(jt) ? (e = Qt, g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt), e;
    }, t._detectNavbar = function () {
      return 0 < g(this._element).closest(".navbar").length;
    }, t._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t;
      } : t.offset = this._config.offset, t;
    }, t._getPopperConfig = function () {
      var t = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (t.modifiers.applyStyle = {
        enabled: !1
      }), t;
    }, c._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(Dt);

        if (t || (t = new c(this, "object" == _typeof(e) ? e : null), g(this).data(Dt, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, c._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
        var o = c._getParentFromElement(e[n]),
            r = g(e[n]).data(Dt),
            s = {
          relatedTarget: e[n]
        };

        if (t && "click" === t.type && (s.clickEvent = t), r) {
          var a = r._menu;

          if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
            var l = g.Event(kt.HIDE, s);
            g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), g(a).removeClass(Lt), g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)));
          }
        }
      }
    }, c._getParentFromElement = function (t) {
      var e,
          n = _.getSelectorFromElement(t);

      return n && (e = document.querySelector(n)), e || t.parentNode;
    }, c._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) {
        var e = c._getParentFromElement(this),
            n = g(e).hasClass(Lt);

        if (n && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = [].slice.call(e.querySelectorAll(Kt));

          if (0 !== i.length) {
            var o = i.indexOf(t.target);
            38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus();
          }
        } else {
          if (27 === t.which) {
            var r = e.querySelector(Ut);
            g(r).trigger("focus");
          }

          g(this).trigger("click");
        }
      }
    }, s(c, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return $t;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Gt;
      }
    }]), c;
  }();

  g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function (t) {
    t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), "toggle");
  }).on(kt.CLICK_DATA_API, Wt, function (t) {
    t.stopPropagation();
  }), g.fn[It] = Jt._jQueryInterface, g.fn[It].Constructor = Jt, g.fn[It].noConflict = function () {
    return g.fn[It] = Nt, Jt._jQueryInterface;
  };

  var Zt = "modal",
      te = "bs.modal",
      ee = "." + te,
      ne = g.fn[Zt],
      ie = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  },
      oe = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  },
      re = {
    HIDE: "hide" + ee,
    HIDDEN: "hidden" + ee,
    SHOW: "show" + ee,
    SHOWN: "shown" + ee,
    FOCUSIN: "focusin" + ee,
    RESIZE: "resize" + ee,
    CLICK_DISMISS: "click.dismiss" + ee,
    KEYDOWN_DISMISS: "keydown.dismiss" + ee,
    MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
    CLICK_DATA_API: "click" + ee + ".data-api"
  },
      se = "modal-dialog-scrollable",
      ae = "modal-scrollbar-measure",
      le = "modal-backdrop",
      ce = "modal-open",
      he = "fade",
      ue = "show",
      fe = ".modal-dialog",
      de = ".modal-body",
      ge = '[data-toggle="modal"]',
      _e = '[data-dismiss="modal"]',
      me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      pe = ".sticky-top",
      ve = function () {
    function o(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(fe), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }

    var t = o.prototype;
    return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;

      if (!this._isShown && !this._isTransitioning) {
        g(this._element).hasClass(he) && (this._isTransitioning = !0);
        var n = g.Event(re.SHOW, {
          relatedTarget: t
        });
        g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(re.CLICK_DISMISS, _e, function (t) {
          return e.hide(t);
        }), g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () {
          g(e._element).one(re.MOUSEUP_DISMISS, function (t) {
            g(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;

      if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
        var n = g.Event(re.HIDE);

        if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = g(this._element).hasClass(he);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(re.FOCUSIN), g(this._element).removeClass(ue), g(this._element).off(re.CLICK_DISMISS), g(this._dialog).off(re.MOUSEDOWN_DISMISS), i) {
            var o = _.getTransitionDurationFromElement(this._element);

            g(this._element).one(_.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(o);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return g(t).off(ee);
      }), g(document).off(re.FOCUSIN), g.removeData(this._element, te), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = l({}, ie, t), _.typeCheckConfig(Zt, t, oe), t;
    }, t._showElement = function (t) {
      var e = this,
          n = g(this._element).hasClass(he);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ue), this._config.focus && this._enforceFocus();

      var i = g.Event(re.SHOWN, {
        relatedTarget: t
      }),
          o = function o() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(i);
      };

      if (n) {
        var r = _.getTransitionDurationFromElement(this._dialog);

        g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
      } else o();
    }, t._enforceFocus = function () {
      var e = this;
      g(document).off(re.FOCUSIN).on(re.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;
      this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) {
        27 === t.which && (t.preventDefault(), e.hide());
      }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;
      this._isShown ? g(window).on(re.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : g(window).off(re.RESIZE);
    }, t._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
        g(document.body).removeClass(ce), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (g(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = g(this._element).hasClass(he) ? he : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = le, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(re.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ue), !t) return;
        if (!n) return void t();

        var i = _.getTransitionDurationFromElement(this._backdrop);

        g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        g(this._backdrop).removeClass(ue);

        var o = function o() {
          e._removeBackdrop(), t && t();
        };

        if (g(this._element).hasClass(he)) {
          var r = _.getTransitionDurationFromElement(this._backdrop);

          g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var o = this;

      if (this._isBodyOverflowing) {
        var t = [].slice.call(document.querySelectorAll(me)),
            e = [].slice.call(document.querySelectorAll(pe));
        g(t).each(function (t, e) {
          var n = e.style.paddingRight,
              i = g(e).css("padding-right");
          g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
        }), g(e).each(function (t, e) {
          var n = e.style.marginRight,
              i = g(e).css("margin-right");
          g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
        });
        var n = document.body.style.paddingRight,
            i = g(document.body).css("padding-right");
        g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
      }

      g(document.body).addClass(ce);
    }, t._resetScrollbar = function () {
      var t = [].slice.call(document.querySelectorAll(me));
      g(t).each(function (t, e) {
        var n = g(e).data("padding-right");
        g(e).removeData("padding-right"), e.style.paddingRight = n || "";
      });
      var e = [].slice.call(document.querySelectorAll("" + pe));
      g(e).each(function (t, e) {
        var n = g(e).data("margin-right");
        "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right");
      });
      var n = g(document.body).data("padding-right");
      g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = ae, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, o._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = g(this).data(te),
            e = l({}, ie, g(this).data(), "object" == _typeof(n) && n ? n : {});

        if (t || (t = new o(this, e), g(this).data(te, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n](i);
        } else e.show && t.show(i);
      });
    }, s(o, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return ie;
      }
    }]), o;
  }();

  g(document).on(re.CLICK_DATA_API, ge, function (t) {
    var e,
        n = this,
        i = _.getSelectorFromElement(this);

    i && (e = document.querySelector(i));
    var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var r = g(e).one(re.SHOW, function (t) {
      t.isDefaultPrevented() || r.one(re.HIDDEN, function () {
        g(n).is(":visible") && n.focus();
      });
    });

    ve._jQueryInterface.call(g(e), o, this);
  }), g.fn[Zt] = ve._jQueryInterface, g.fn[Zt].Constructor = ve, g.fn[Zt].noConflict = function () {
    return g.fn[Zt] = ne, ve._jQueryInterface;
  };
  var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Ee = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  },
      Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function Se(t, s, e) {
    if (0 === t.length) return t;
    if (e && "function" == typeof e) return e(t);

    for (var n = new window.DOMParser().parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function i(t, e) {
      var n = l[t],
          i = n.nodeName.toLowerCase();
      if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
      var o = [].slice.call(n.attributes),
          r = [].concat(s["*"] || [], s[i] || []);
      o.forEach(function (t) {
        (function (t, e) {
          var n = t.nodeName.toLowerCase();
          if (-1 !== e.indexOf(n)) return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));

          for (var i = e.filter(function (t) {
            return t instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) {
            if (n.match(i[o])) return !0;
          }

          return !1;
        })(t, r) || n.removeAttribute(t.nodeName);
      });
    }, o = 0, r = l.length; o < r; o++) {
      i(o);
    }

    return n.body.innerHTML;
  }

  var be = "tooltip",
      Ie = "bs.tooltip",
      De = "." + Ie,
      we = g.fn[be],
      Ae = "bs-tooltip",
      Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g"),
      Oe = ["sanitize", "whiteList", "sanitizeFn"],
      ke = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(number|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacement: "(string|array)",
    boundary: "(string|element)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    whiteList: "object"
  },
      Pe = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  },
      Le = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent",
    sanitize: !0,
    sanitizeFn: null,
    whiteList: Ee
  },
      je = "show",
      He = "out",
      Re = {
    HIDE: "hide" + De,
    HIDDEN: "hidden" + De,
    SHOW: "show" + De,
    SHOWN: "shown" + De,
    INSERTED: "inserted" + De,
    CLICK: "click" + De,
    FOCUSIN: "focusin" + De,
    FOCUSOUT: "focusout" + De,
    MOUSEENTER: "mouseenter" + De,
    MOUSELEAVE: "mouseleave" + De
  },
      xe = "fade",
      Fe = "show",
      Ue = ".tooltip-inner",
      We = ".arrow",
      qe = "hover",
      Me = "focus",
      Ke = "click",
      Qe = "manual",
      Be = function () {
    function i(t, e) {
      if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    var t = i.prototype;
    return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = g(t.currentTarget).data(e);
        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal"), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;
      if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
      var t = g.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        g(this.element).trigger(t);

        var n = _.findShadowRoot(this.element),
            i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);

        if (t.isDefaultPrevented() || !i) return;

        var o = this.getTipElement(),
            r = _.getUID(this.constructor.NAME);

        o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(xe);

        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
            a = this._getAttachment(s);

        this.addAttachmentClass(a);

        var l = this._getContainer();

        g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, {
          placement: a,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: We
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          },
          onUpdate: function onUpdate(t) {
            return e._handlePopperPlacementChange(t);
          }
        }), g(o).addClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);

        var c = function c() {
          e.config.animation && e._fixTransition();
          var t = e._hoverState;
          e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === He && e._leave(null, e);
        };

        if (g(this.tip).hasClass(xe)) {
          var h = _.getTransitionDurationFromElement(this.tip);

          g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h);
        } else c();
      }
    }, t.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = g.Event(this.constructor.Event.HIDE),
          o = function o() {
        e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), g(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };

      if (g(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (g(n).removeClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ke] = !1, this._activeTrigger[Me] = !1, this._activeTrigger[qe] = !1, g(this.tip).hasClass(xe)) {
          var r = _.getTransitionDurationFromElement(n);

          g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();

        this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass(Ae + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()), g(t).removeClass(xe + " " + Fe);
    }, t.setElementContent = function (t, e) {
      "object" != _typeof(e) || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text());
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, t._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this.config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t;
      } : t.offset = this.config.offset, t;
    }, t._getContainer = function () {
      return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container);
    }, t._getAttachment = function (t) {
      return Pe[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;
      this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== Qe) {
          var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          g(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }
      }), g(this.element).closest(".modal").on("hide.bs.modal", function () {
        i.element && i.hide();
      }), this.config.selector ? this.config = l({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));

      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0), g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout), e._hoverState = je, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === je && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = He, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === He && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, t._getConfig = function (t) {
      var e = g(this.element).data();
      return Object.keys(e).forEach(function (t) {
        -1 !== Oe.indexOf(t) && delete e[t];
      }), "number" == typeof (t = l({}, this.constructor.Default, e, "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(be, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)), t;
    }, t._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, t._cleanTipClass = function () {
      var t = g(this.getTipElement()),
          e = t.attr("class").match(Ne);
      null !== e && e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      var e = t.instance;
      this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;
      null === t.getAttribute("x-placement") && (g(t).removeClass(xe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ie),
            e = "object" == _typeof(n) && n;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ie, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Le;
      }
    }, {
      key: "NAME",
      get: function get() {
        return be;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Ie;
      }
    }, {
      key: "Event",
      get: function get() {
        return Re;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return De;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ke;
      }
    }]), i;
  }();

  g.fn[be] = Be._jQueryInterface, g.fn[be].Constructor = Be, g.fn[be].noConflict = function () {
    return g.fn[be] = we, Be._jQueryInterface;
  };

  var Ve = "popover",
      Ye = "bs.popover",
      ze = "." + Ye,
      Xe = g.fn[Ve],
      $e = "bs-popover",
      Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g"),
      Je = l({}, Be.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Ze = l({}, Be.DefaultType, {
    content: "(string|element|function)"
  }),
      tn = "fade",
      en = "show",
      nn = ".popover-header",
      on = ".popover-body",
      rn = {
    HIDE: "hide" + ze,
    HIDDEN: "hidden" + ze,
    SHOW: "show" + ze,
    SHOWN: "shown" + ze,
    INSERTED: "inserted" + ze,
    CLICK: "click" + ze,
    FOCUSIN: "focusin" + ze,
    FOCUSOUT: "focusout" + ze,
    MOUSEENTER: "mouseenter" + ze,
    MOUSELEAVE: "mouseleave" + ze
  },
      sn = function (t) {
    var e, n;

    function i() {
      return t.apply(this, arguments) || this;
    }

    n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
    var o = i.prototype;
    return o.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, o.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass($e + "-" + t);
    }, o.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip;
    }, o.setContent = function () {
      var t = g(this.getTipElement());
      this.setElementContent(t.find(nn), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(on), e), t.removeClass(tn + " " + en);
    }, o._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, o._cleanTipClass = function () {
      var t = g(this.getTipElement()),
          e = t.attr("class").match(Ge);
      null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ye),
            e = "object" == _typeof(n) ? n : null;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ye, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Je;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Ve;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Ye;
      }
    }, {
      key: "Event",
      get: function get() {
        return rn;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ze;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ze;
      }
    }]), i;
  }(Be);

  g.fn[Ve] = sn._jQueryInterface, g.fn[Ve].Constructor = sn, g.fn[Ve].noConflict = function () {
    return g.fn[Ve] = Xe, sn._jQueryInterface;
  };

  var an = "scrollspy",
      ln = "bs.scrollspy",
      cn = "." + ln,
      hn = g.fn[an],
      un = {
    offset: 10,
    method: "auto",
    target: ""
  },
      fn = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      dn = {
    ACTIVATE: "activate" + cn,
    SCROLL: "scroll" + cn,
    LOAD_DATA_API: "load" + cn + ".data-api"
  },
      gn = "dropdown-item",
      _n = "active",
      mn = '[data-spy="scroll"]',
      pn = ".nav, .list-group",
      vn = ".nav-link",
      yn = ".nav-item",
      En = ".list-group-item",
      Cn = ".dropdown",
      Tn = ".dropdown-item",
      Sn = ".dropdown-toggle",
      bn = "offset",
      In = "position",
      Dn = function () {
    function n(t, e) {
      var n = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(dn.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }

    var t = n.prototype;
    return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? bn : In,
          o = "auto" === this._config.method ? t : this._config.method,
          r = o === In ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
        var e,
            n = _.getSelectorFromElement(t);

        if (n && (e = document.querySelector(n)), e) {
          var i = e.getBoundingClientRect();
          if (i.width || i.height) return [g(e)[o]().top + r, n];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      g.removeData(this._element, ln), g(this._scrollElement).off(cn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = l({}, un, "object" == _typeof(t) && t ? t : {})).target) {
        var e = g(t.target).attr("id");
        e || (e = _.getUID(an), g(t.target).attr("id", e)), t.target = "#" + e;
      }

      return _.typeCheckConfig(an, t, fn), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();

      var t = this._selector.split(",").map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      }),
          n = g([].slice.call(document.querySelectorAll(t.join(","))));

      n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n)) : (n.addClass(_n), n.parents(pn).prev(vn + ", " + En).addClass(_n), n.parents(pn).prev(yn).children(vn).addClass(_n)), g(this._scrollElement).trigger(dn.ACTIVATE, {
        relatedTarget: e
      });
    }, t._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
        return t.classList.contains(_n);
      }).forEach(function (t) {
        return t.classList.remove(_n);
      });
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(ln);

        if (t || (t = new n(this, "object" == _typeof(e) && e), g(this).data(ln, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return un;
      }
    }]), n;
  }();

  g(window).on(dn.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--;) {
      var n = g(t[e]);

      Dn._jQueryInterface.call(n, n.data());
    }
  }), g.fn[an] = Dn._jQueryInterface, g.fn[an].Constructor = Dn, g.fn[an].noConflict = function () {
    return g.fn[an] = hn, Dn._jQueryInterface;
  };

  var wn = "bs.tab",
      An = "." + wn,
      Nn = g.fn.tab,
      On = {
    HIDE: "hide" + An,
    HIDDEN: "hidden" + An,
    SHOW: "show" + An,
    SHOWN: "shown" + An,
    CLICK_DATA_API: "click" + An + ".data-api"
  },
      kn = "dropdown-menu",
      Pn = "active",
      Ln = "disabled",
      jn = "fade",
      Hn = "show",
      Rn = ".dropdown",
      xn = ".nav, .list-group",
      Fn = ".active",
      Un = "> li > .active",
      Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      qn = ".dropdown-toggle",
      Mn = "> .dropdown-menu .active",
      Kn = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.show = function () {
      var n = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) {
        var t,
            i,
            e = g(this._element).closest(xn)[0],
            o = _.getSelectorFromElement(this._element);

        if (e) {
          var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;
          i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
        }

        var s = g.Event(On.HIDE, {
          relatedTarget: this._element
        }),
            a = g.Event(On.SHOW, {
          relatedTarget: i
        });

        if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          o && (t = document.querySelector(o)), this._activate(this._element, e);

          var l = function l() {
            var t = g.Event(On.HIDDEN, {
              relatedTarget: n._element
            }),
                e = g.Event(On.SHOWN, {
              relatedTarget: i
            });
            g(i).trigger(t), g(n._element).trigger(e);
          };

          t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      g.removeData(this._element, wn), this._element = null;
    }, t._activate = function (t, e, n) {
      var i = this,
          o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0],
          r = n && o && g(o).hasClass(jn),
          s = function s() {
        return i._transitionComplete(t, o, n);
      };

      if (o && r) {
        var a = _.getTransitionDurationFromElement(o);

        g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a);
      } else s();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        g(e).removeClass(Pn);
        var i = g(e.parentNode).find(Mn)[0];
        i && g(i).removeClass(Pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      if (g(t).addClass(Pn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(jn) && t.classList.add(Hn), t.parentNode && g(t.parentNode).hasClass(kn)) {
        var o = g(t).closest(Rn)[0];

        if (o) {
          var r = [].slice.call(o.querySelectorAll(qn));
          g(r).addClass(Pn);
        }

        t.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(wn);

        if (e || (e = new i(this), t.data(wn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), i;
  }();

  g(document).on(On.CLICK_DATA_API, Wn, function (t) {
    t.preventDefault(), Kn._jQueryInterface.call(g(this), "show");
  }), g.fn.tab = Kn._jQueryInterface, g.fn.tab.Constructor = Kn, g.fn.tab.noConflict = function () {
    return g.fn.tab = Nn, Kn._jQueryInterface;
  };

  var Qn = "toast",
      Bn = "bs.toast",
      Vn = "." + Bn,
      Yn = g.fn[Qn],
      zn = {
    CLICK_DISMISS: "click.dismiss" + Vn,
    HIDE: "hide" + Vn,
    HIDDEN: "hidden" + Vn,
    SHOW: "show" + Vn,
    SHOWN: "shown" + Vn
  },
      Xn = "fade",
      $n = "hide",
      Gn = "show",
      Jn = "showing",
      Zn = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      ti = {
    animation: !0,
    autohide: !0,
    delay: 500
  },
      ei = '[data-dismiss="toast"]',
      ni = function () {
    function i(t, e) {
      this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
    }

    var t = i.prototype;
    return t.show = function () {
      var t = this;
      g(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Xn);

      var e = function e() {
        t._element.classList.remove(Jn), t._element.classList.add(Gn), g(t._element).trigger(zn.SHOWN), t._config.autohide && t.hide();
      };

      if (this._element.classList.remove($n), this._element.classList.add(Jn), this._config.animation) {
        var n = _.getTransitionDurationFromElement(this._element);

        g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
      } else e();
    }, t.hide = function (t) {
      var e = this;
      this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE), t ? this._close() : this._timeout = setTimeout(function () {
        e._close();
      }, this._config.delay));
    }, t.dispose = function () {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Gn) && this._element.classList.remove(Gn), g(this._element).off(zn.CLICK_DISMISS), g.removeData(this._element, Bn), this._element = null, this._config = null;
    }, t._getConfig = function (t) {
      return t = l({}, ti, g(this._element).data(), "object" == _typeof(t) && t ? t : {}), _.typeCheckConfig(Qn, t, this.constructor.DefaultType), t;
    }, t._setListeners = function () {
      var t = this;
      g(this._element).on(zn.CLICK_DISMISS, ei, function () {
        return t.hide(!0);
      });
    }, t._close = function () {
      var t = this,
          e = function e() {
        t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN);
      };

      if (this._element.classList.remove(Gn), this._config.animation) {
        var n = _.getTransitionDurationFromElement(this._element);

        g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
      } else e();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(Bn);

        if (e || (e = new i(this, "object" == _typeof(n) && n), t.data(Bn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n](this);
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Zn;
      }
    }, {
      key: "Default",
      get: function get() {
        return ti;
      }
    }]), i;
  }();

  g.fn[Qn] = ni._jQueryInterface, g.fn[Qn].Constructor = ni, g.fn[Qn].noConflict = function () {
    return g.fn[Qn] = Yn, ni._jQueryInterface;
  }, function () {
    if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var t = g.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(), t.Util = _, t.Alert = p, t.Button = P, t.Carousel = lt, t.Collapse = bt, t.Dropdown = Jt, t.Modal = ve, t.Popover = sn, t.Scrollspy = Dn, t.Tab = Kn, t.Toast = ni, t.Tooltip = Be, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
/*! pace 1.0.2 */

(function () {
  var a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      _v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      P,
      Q,
      R,
      S,
      T,
      U,
      V,
      W,
      X = [].slice,
      Y = {}.hasOwnProperty,
      Z = function Z(a, b) {
    function c() {
      this.constructor = a;
    }

    for (var d in b) {
      Y.call(b, d) && (a[d] = b[d]);
    }

    return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
  },
      $ = [].indexOf || function (a) {
    for (var b = 0, c = this.length; c > b; b++) {
      if (b in this && this[b] === a) return b;
    }

    return -1;
  };

  for (u = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: !0,
    restartOnPushState: !0,
    restartOnRequestAfter: 500,
    target: "body",
    elements: {
      checkInterval: 100,
      selectors: ["body"]
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ["GET"],
      trackWebSockets: !0,
      ignoreURLs: []
    }
  }, C = function C() {
    var a;
    return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date();
  }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function E(a) {
    return setTimeout(a, 50);
  }, t = function t(a) {
    return clearTimeout(a);
  }), G = function G(a) {
    var b, _c;

    return b = C(), (_c = function c() {
      var d;
      return d = C() - b, d >= 33 ? (b = C(), a(d, function () {
        return E(_c);
      })) : setTimeout(_c, 33 - d);
    })();
  }, F = function F() {
    var a, b, c;
    return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b];
  }, _v = function v() {
    var a, b, c, d, e, f, g;

    for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++) {
      if (c = d[f]) for (a in c) {
        Y.call(c, a) && (e = c[a], null != b[a] && "object" == _typeof(b[a]) && null != e && "object" == _typeof(e) ? _v(b[a], e) : b[a] = e);
      }
    }

    return b;
  }, q = function q(a) {
    var b, c, d, e, f;

    for (c = b = 0, e = 0, f = a.length; f > e; e++) {
      d = a[e], c += Math.abs(d), b++;
    }

    return c / b;
  }, x = function x(a, b) {
    var c, d, e;

    if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
      if (c = e.getAttribute("data-pace-" + a), !b) return c;

      try {
        return JSON.parse(c);
      } catch (f) {
        return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0;
      }
    }
  }, g = function () {
    function a() {}

    return a.prototype.on = function (a, b, c, d) {
      var e;
      return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
        handler: b,
        ctx: c,
        once: d
      });
    }, a.prototype.once = function (a, b, c) {
      return this.on(a, b, c, !0);
    }, a.prototype.off = function (a, b) {
      var c, d, e;

      if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
        if (null == b) return delete this.bindings[a];

        for (c = 0, e = []; c < this.bindings[a].length;) {
          this.bindings[a][c].handler === b ? e.push(this.bindings[a].splice(c, 1)) : e.push(c++);
        }

        return e;
      }
    }, a.prototype.trigger = function () {
      var a, b, c, d, e, f, g, h, i;

      if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
        for (e = 0, i = []; e < this.bindings[c].length;) {
          h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), f ? i.push(this.bindings[c].splice(e, 1)) : i.push(e++);
        }

        return i;
      }
    }, a;
  }(), j = window.Pace || {}, window.Pace = j, _v(j, g.prototype), D = j.options = _v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) {
    K = U[Q], D[K] === !0 && (D[K] = u[K]);
  }

  i = function (a) {
    function b() {
      return V = b.__super__.constructor.apply(this, arguments);
    }

    return Z(b, a), b;
  }(Error), b = function () {
    function a() {
      this.progress = 0;
    }

    return a.prototype.getElement = function () {
      var a;

      if (null == this.el) {
        if (a = document.querySelector(D.target), !a) throw new i();
        this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el);
      }

      return this.el;
    }, a.prototype.finish = function () {
      var a;
      return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done";
    }, a.prototype.update = function (a) {
      return this.progress = a, this.render();
    }, a.prototype.destroy = function () {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (a) {
        i = a;
      }

      return this.el = void 0;
    }, a.prototype.render = function () {
      var a, b, c, d, e, f, g;
      if (null == document.querySelector(D.target)) return !1;

      for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) {
        b = g[e], a.children[0].style[b] = d;
      }

      return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress;
    }, a.prototype.done = function () {
      return this.progress >= 100;
    }, a;
  }(), h = function () {
    function a() {
      this.bindings = {};
    }

    return a.prototype.trigger = function (a, b) {
      var c, d, e, f, g;

      if (null != this.bindings[a]) {
        for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) {
          c = f[d], g.push(c.call(this, b));
        }

        return g;
      }
    }, a.prototype.on = function (a, b) {
      var c;
      return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b);
    }, a;
  }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function w(a, b) {
    var c, d, e;
    e = [];

    for (d in b.prototype) {
      try {
        null == a[d] && "function" != typeof b[d] ? "function" == typeof Object.defineProperty ? e.push(Object.defineProperty(a, d, {
          get: function get() {
            return b.prototype[d];
          },
          configurable: !0,
          enumerable: !0
        })) : e.push(a[d] = b.prototype[d]) : e.push(void 0);
      } catch (f) {
        c = f;
      }
    }

    return e;
  }, A = [], j.ignore = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c;
  }, j.track = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c;
  }, J = function J(a) {
    var b;
    if (null == a && (a = "GET"), "track" === A[0]) return "force";

    if (!A.length && D.ajax) {
      if ("socket" === a && D.ajax.trackWebSockets) return !0;
      if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0;
    }

    return !1;
  }, k = function (a) {
    function b() {
      var a,
          c = this;
      b.__super__.constructor.apply(this, arguments), a = function a(_a) {
        var b;
        return b = _a.open, _a.open = function (d, e, f) {
          return J(d) && c.trigger("request", {
            type: d,
            url: e,
            request: _a
          }), b.apply(_a, arguments);
        };
      }, window.XMLHttpRequest = function (b) {
        var c;
        return c = new P(b), a(c), c;
      };

      try {
        w(window.XMLHttpRequest, P);
      } catch (d) {}

      if (null != O) {
        window.XDomainRequest = function () {
          var b;
          return b = new O(), a(b), b;
        };

        try {
          w(window.XDomainRequest, O);
        } catch (d) {}
      }

      if (null != N && D.ajax.trackWebSockets) {
        window.WebSocket = function (a, b) {
          var d;
          return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
            type: "socket",
            url: a,
            protocols: b,
            request: d
          }), d;
        };

        try {
          w(window.WebSocket, N);
        } catch (d) {}
      }
    }

    return Z(b, a), b;
  }(h), R = null, y = function y() {
    return null == R && (R = new k()), R;
  }, I = function I(a) {
    var b, c, d, e;

    for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++) {
      if (b = e[c], "string" == typeof b) {
        if (-1 !== a.indexOf(b)) return !0;
      } else if (b.test(a)) return !0;
    }

    return !1;
  }, y().on("request", function (b) {
    var c, d, e, f, g;
    return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function () {
      var b, c, g, h, i, k;

      if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
        for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
          if (K = i[c], K instanceof a) {
            K.watch.apply(K, d);
            break;
          }

          k.push(void 0);
        }

        return k;
      }
    }, c));
  }), a = function () {
    function a() {
      var a = this;
      this.elements = [], y().on("request", function () {
        return a.watch.apply(a, arguments);
      });
    }

    return a.prototype.watch = function (a) {
      var b, c, d, e;
      return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c));
    }, a;
  }(), o = function () {
    function a(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = this;
      if (this.progress = 0, null != window.ProgressEvent) for (c = null, a.addEventListener("progress", function (a) {
        return a.lengthComputable ? h.progress = 100 * a.loaded / a.total : h.progress = h.progress + (100 - h.progress) / 2;
      }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) {
        b = g[d], a.addEventListener(b, function () {
          return h.progress = 100;
        }, !1);
      } else f = a.onreadystatechange, a.onreadystatechange = function () {
        var b;
        return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0;
      };
    }

    return a;
  }(), n = function () {
    function a(a) {
      var b,
          c,
          d,
          e,
          f = this;

      for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) {
        b = e[c], a.addEventListener(b, function () {
          return f.progress = 100;
        }, !1);
      }
    }

    return a;
  }(), d = function () {
    function a(a) {
      var b, c, d, f;

      for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) {
        b = f[c], this.elements.push(new e(b));
      }
    }

    return a;
  }(), e = function () {
    function a(a) {
      this.selector = a, this.progress = 0, this.check();
    }

    return a.prototype.check = function () {
      var a = this;
      return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
        return a.check();
      }, D.elements.checkInterval);
    }, a.prototype.done = function () {
      return this.progress = 100;
    }, a;
  }(), c = function () {
    function a() {
      var a,
          b,
          c = this;
      this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () {
        return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0;
      };
    }

    return a.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    }, a;
  }(), f = function () {
    function a() {
      var a,
          b,
          c,
          d,
          e,
          f = this;
      this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function () {
        var g;
        return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3));
      }, 50);
    }

    return a;
  }(), m = function () {
    function a(a) {
      this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"));
    }

    return a.prototype.tick = function (a, b) {
      var c;
      return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress;
    }, a;
  }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function z() {
    return D.restartOnPushState ? j.restart() : void 0;
  }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function () {
    return z(), T.apply(window.history, arguments);
  }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function () {
    return z(), W.apply(window.history, arguments);
  }), l = {
    ajax: a,
    elements: d,
    document: c,
    eventLag: f
  }, (B = function B() {
    var a, c, d, e, f, g, h, i;

    for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) {
      a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
    }

    for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) {
      K = i[d], L.push(new K(D));
    }

    return j.bar = r = new b(), H = [], M = new m();
  })(), j.stop = function () {
    return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B();
  }, j.restart = function () {
    return j.trigger("restart"), j.stop(), j.start();
  }, j.go = function () {
    var a;
    return j.running = !0, r.render(), a = C(), s = !1, p = G(function (b, c) {
      var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;

      for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q) {
        for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) {
          g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
        }
      }

      return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function () {
        return r.finish(), j.running = !1, j.trigger("hide");
      }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c();
    });
  }, j.start = function (a) {
    _v(D, a), j.running = !0;

    try {
      r.render();
    } catch (b) {
      i = b;
    }

    return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50);
  }, "function" == typeof define && define.amd ? define(["pace"], function () {
    return j;
  }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = j : D.startOnPageLoad && j.start();
}).call(this);
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.1
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */

(function () {
  "use strict"; //Declare root variable - window in the browser, global on the server

  var root = this,
      previous = root.Chart; //Occupy the global variable of Chart, and create a simple base class

  var Chart = function Chart(context) {
    var chart = this;
    this.canvas = context.canvas;
    this.ctx = context; //Variables global to the chart

    var computeDimension = function computeDimension(element, dimension) {
      if (element['offset' + dimension]) {
        return element['offset' + dimension];
      } else {
        return document.defaultView.getComputedStyle(element).getPropertyValue(dimension);
      }
    };

    var width = this.width = computeDimension(context.canvas, 'Width');
    var height = this.height = computeDimension(context.canvas, 'Height'); // Firefox requires this to work correctly

    context.canvas.width = width;
    context.canvas.height = height;
    var width = this.width = context.canvas.width;
    var height = this.height = context.canvas.height;
    this.aspectRatio = this.width / this.height; //High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.

    helpers.retinaScale(this);
    return this;
  }; //Globally expose the defaults to allow for user updating/changing


  Chart.defaults = {
    global: {
      // Boolean - Whether to animate the chart
      animation: true,
      // Number - Number of animation steps
      animationSteps: 60,
      // String - Animation easing effect
      animationEasing: "easeOutQuart",
      // Boolean - If we should show the scale at all
      showScale: true,
      // Boolean - If we want to override with a hard coded scale
      scaleOverride: false,
      // ** Required if scaleOverride is true **
      // Number - The number of steps in a hard coded scale
      scaleSteps: null,
      // Number - The value jump in the hard coded scale
      scaleStepWidth: null,
      // Number - The scale starting value
      scaleStartValue: null,
      // String - Colour of the scale line
      scaleLineColor: "rgba(0,0,0,.1)",
      // Number - Pixel width of the scale line
      scaleLineWidth: 1,
      // Boolean - Whether to show labels on the scale
      scaleShowLabels: true,
      // Interpolated JS string - can access value
      scaleLabel: "<%=value%>",
      // Boolean - Whether the scale should stick to integers, and not show any floats even if drawing space is there
      scaleIntegersOnly: true,
      // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero: false,
      // String - Scale label font declaration for the scale label
      scaleFontFamily: "inherit",
      // Number - Scale label font size in pixels
      scaleFontSize: 12,
      // String - Scale label font weight style
      scaleFontStyle: "normal",
      // String - Scale label font colour
      scaleFontColor: "#666",
      // Boolean - whether or not the chart should be responsive and resize when the browser does.
      responsive: true,
      // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
      maintainAspectRatio: true,
      // Boolean - Determines whether to draw tooltips on the canvas or not - attaches events to touchmove & mousemove
      showTooltips: true,
      // Boolean - Determines whether to draw built-in tooltip or call custom tooltip function
      customTooltips: false,
      // Array - Array of string names to attach tooltip events
      tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
      // String - Tooltip background colour
      tooltipFillColor: "rgba(0,0,0,0.8)",
      // String - Tooltip label font declaration for the scale label
      tooltipFontFamily: "inherit",
      // Number - Tooltip label font size in pixels
      tooltipFontSize: 14,
      // String - Tooltip font weight style
      tooltipFontStyle: "normal",
      // String - Tooltip label font colour
      tooltipFontColor: "#fff",
      // String - Tooltip title font declaration for the scale label
      tooltipTitleFontFamily: "inherit",
      // Number - Tooltip title font size in pixels
      tooltipTitleFontSize: 14,
      // String - Tooltip title font weight style
      tooltipTitleFontStyle: "bold",
      // String - Tooltip title font colour
      tooltipTitleFontColor: "#fff",
      // Number - pixel width of padding around tooltip text
      tooltipYPadding: 6,
      // Number - pixel width of padding around tooltip text
      tooltipXPadding: 6,
      // Number - Size of the caret on the tooltip
      tooltipCaretSize: 8,
      // Number - Pixel radius of the tooltip border
      tooltipCornerRadius: 6,
      // Number - Pixel offset from point x to tooltip edge
      tooltipXOffset: 10,
      // String - Template string for single tooltips
      tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
      // String - Template string for single tooltips
      multiTooltipTemplate: "<%= value %>",
      // String - Colour behind the legend colour block
      multiTooltipKeyBackground: '#fff',
      // Function - Will fire on animation progression.
      onAnimationProgress: function onAnimationProgress() {},
      // Function - Will fire on animation completion.
      onAnimationComplete: function onAnimationComplete() {}
    }
  }; //Create a dictionary of chart types, to allow for extension of existing types

  Chart.types = {}; //Global Chart helpers object for utility methods and classes

  var helpers = Chart.helpers = {}; //-- Basic js utility methods

  var each = helpers.each = function (loopable, callback, self) {
    var additionalArgs = Array.prototype.slice.call(arguments, 3); // Check to see if null or undefined firstly.

    if (loopable) {
      if (loopable.length === +loopable.length) {
        var i;

        for (i = 0; i < loopable.length; i++) {
          callback.apply(self, [loopable[i], i].concat(additionalArgs));
        }
      } else {
        for (var item in loopable) {
          callback.apply(self, [loopable[item], item].concat(additionalArgs));
        }
      }
    }
  },
      clone = helpers.clone = function (obj) {
    var objClone = {};
    each(obj, function (value, key) {
      if (obj.hasOwnProperty(key)) objClone[key] = value;
    });
    return objClone;
  },
      extend = helpers.extend = function (base) {
    each(Array.prototype.slice.call(arguments, 1), function (extensionObject) {
      each(extensionObject, function (value, key) {
        if (extensionObject.hasOwnProperty(key)) base[key] = value;
      });
    });
    return base;
  },
      merge = helpers.merge = function (base, master) {
    //Merge properties in left object over to a shallow clone of object right.
    var args = Array.prototype.slice.call(arguments, 0);
    args.unshift({});
    return extend.apply(null, args);
  },
      indexOf = helpers.indexOf = function (arrayToSearch, item) {
    if (Array.prototype.indexOf) {
      return arrayToSearch.indexOf(item);
    } else {
      for (var i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i] === item) return i;
      }

      return -1;
    }
  },
      where = helpers.where = function (collection, filterCallback) {
    var filtered = [];
    helpers.each(collection, function (item) {
      if (filterCallback(item)) {
        filtered.push(item);
      }
    });
    return filtered;
  },
      findNextWhere = helpers.findNextWhere = function (arrayToSearch, filterCallback, startIndex) {
    // Default to start of the array
    if (!startIndex) {
      startIndex = -1;
    }

    for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
      var currentItem = arrayToSearch[i];

      if (filterCallback(currentItem)) {
        return currentItem;
      }
    }
  },
      findPreviousWhere = helpers.findPreviousWhere = function (arrayToSearch, filterCallback, startIndex) {
    // Default to end of the array
    if (!startIndex) {
      startIndex = arrayToSearch.length;
    }

    for (var i = startIndex - 1; i >= 0; i--) {
      var currentItem = arrayToSearch[i];

      if (filterCallback(currentItem)) {
        return currentItem;
      }
    }
  },
      inherits = helpers.inherits = function (extensions) {
    //Basic javascript inheritance based on the model created in Backbone.js
    var parent = this;
    var ChartElement = extensions && extensions.hasOwnProperty("constructor") ? extensions.constructor : function () {
      return parent.apply(this, arguments);
    };

    var Surrogate = function Surrogate() {
      this.constructor = ChartElement;
    };

    Surrogate.prototype = parent.prototype;
    ChartElement.prototype = new Surrogate();
    ChartElement.extend = inherits;
    if (extensions) extend(ChartElement.prototype, extensions);
    ChartElement.__super__ = parent.prototype;
    return ChartElement;
  },
      noop = helpers.noop = function () {},
      uid = helpers.uid = function () {
    var id = 0;
    return function () {
      return "chart-" + id++;
    };
  }(),
      warn = helpers.warn = function (str) {
    //Method for warning of errors
    if (window.console && typeof window.console.warn == "function") console.warn(str);
  },
      amd = helpers.amd = typeof define == 'function' && define.amd,
      //-- Math methods
  isNumber = helpers.isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },
      max = helpers.max = function (array) {
    return Math.max.apply(Math, array);
  },
      min = helpers.min = function (array) {
    return Math.min.apply(Math, array);
  },
      cap = helpers.cap = function (valueToCap, maxValue, minValue) {
    if (isNumber(maxValue)) {
      if (valueToCap > maxValue) {
        return maxValue;
      }
    } else if (isNumber(minValue)) {
      if (valueToCap < minValue) {
        return minValue;
      }
    }

    return valueToCap;
  },
      getDecimalPlaces = helpers.getDecimalPlaces = function (num) {
    if (num % 1 !== 0 && isNumber(num)) {
      return num.toString().split(".")[1].length;
    } else {
      return 0;
    }
  },
      toRadians = helpers.radians = function (degrees) {
    return degrees * (Math.PI / 180);
  },
      // Gets the angle from vertical upright to the point about a centre.
  getAngleFromPoint = helpers.getAngleFromPoint = function (centrePoint, anglePoint) {
    var distanceFromXCenter = anglePoint.x - centrePoint.x,
        distanceFromYCenter = anglePoint.y - centrePoint.y,
        radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
    var angle = Math.PI * 2 + Math.atan2(distanceFromYCenter, distanceFromXCenter); //If the segment is in the top left quadrant, we need to add another rotation to the angle

    if (distanceFromXCenter < 0 && distanceFromYCenter < 0) {
      angle += Math.PI * 2;
    }

    return {
      angle: angle,
      distance: radialDistanceFromCenter
    };
  },
      aliasPixel = helpers.aliasPixel = function (pixelWidth) {
    return pixelWidth % 2 === 0 ? 0 : 0.5;
  },
      splineCurve = helpers.splineCurve = function (FirstPoint, MiddlePoint, AfterPoint, t) {
    //Props to Rob Spencer at scaled innovation for his post on splining between points
    //http://scaledinnovation.com/analytics/splines/aboutSplines.html
    var d01 = Math.sqrt(Math.pow(MiddlePoint.x - FirstPoint.x, 2) + Math.pow(MiddlePoint.y - FirstPoint.y, 2)),
        d12 = Math.sqrt(Math.pow(AfterPoint.x - MiddlePoint.x, 2) + Math.pow(AfterPoint.y - MiddlePoint.y, 2)),
        fa = t * d01 / (d01 + d12),
        // scaling factor for triangle Ta
    fb = t * d12 / (d01 + d12);
    return {
      inner: {
        x: MiddlePoint.x - fa * (AfterPoint.x - FirstPoint.x),
        y: MiddlePoint.y - fa * (AfterPoint.y - FirstPoint.y)
      },
      outer: {
        x: MiddlePoint.x + fb * (AfterPoint.x - FirstPoint.x),
        y: MiddlePoint.y + fb * (AfterPoint.y - FirstPoint.y)
      }
    };
  },
      calculateOrderOfMagnitude = helpers.calculateOrderOfMagnitude = function (val) {
    return Math.floor(Math.log(val) / Math.LN10);
  },
      calculateScaleRange = helpers.calculateScaleRange = function (valuesArray, drawingSize, textSize, startFromZero, integersOnly) {
    //Set a minimum step of two - a point at the top of the graph, and a point at the base
    var minSteps = 2,
        maxSteps = Math.floor(drawingSize / (textSize * 1.5)),
        skipFitting = minSteps >= maxSteps;
    var maxValue = max(valuesArray),
        minValue = min(valuesArray); // We need some degree of seperation here to calculate the scales if all the values are the same
    // Adding/minusing 0.5 will give us a range of 1.

    if (maxValue === minValue) {
      maxValue += 0.5; // So we don't end up with a graph with a negative start value if we've said always start from zero

      if (minValue >= 0.5 && !startFromZero) {
        minValue -= 0.5;
      } else {
        // Make up a whole number above the values
        maxValue += 0.5;
      }
    }

    var valueRange = Math.abs(maxValue - minValue),
        rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange),
        graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
        graphMin = startFromZero ? 0 : Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
        graphRange = graphMax - graphMin,
        stepValue = Math.pow(10, rangeOrderOfMagnitude),
        numberOfSteps = Math.round(graphRange / stepValue); //If we have more space on the graph we'll use it to give more definition to the data

    while ((numberOfSteps > maxSteps || numberOfSteps * 2 < maxSteps) && !skipFitting) {
      if (numberOfSteps > maxSteps) {
        stepValue *= 2;
        numberOfSteps = Math.round(graphRange / stepValue); // Don't ever deal with a decimal number of steps - cancel fitting and just use the minimum number of steps.

        if (numberOfSteps % 1 !== 0) {
          skipFitting = true;
        }
      } //We can fit in double the amount of scale points on the scale
      else {
          //If user has declared ints only, and the step value isn't a decimal
          if (integersOnly && rangeOrderOfMagnitude >= 0) {
            //If the user has said integers only, we need to check that making the scale more granular wouldn't make it a float
            if (stepValue / 2 % 1 === 0) {
              stepValue /= 2;
              numberOfSteps = Math.round(graphRange / stepValue);
            } //If it would make it a float break out of the loop
            else {
                break;
              }
          } //If the scale doesn't have to be an int, make the scale more granular anyway.
          else {
              stepValue /= 2;
              numberOfSteps = Math.round(graphRange / stepValue);
            }
        }
    }

    if (skipFitting) {
      numberOfSteps = minSteps;
      stepValue = graphRange / numberOfSteps;
    }

    return {
      steps: numberOfSteps,
      stepValue: stepValue,
      min: graphMin,
      max: graphMin + numberOfSteps * stepValue
    };
  },

  /* jshint ignore:start */
  // Blows up jshint errors based on the new Function constructor
  //Templating methods
  //Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/
  template = helpers.template = function (templateString, valuesObject) {
    // If templateString is function rather than string-template - call the function for valuesObject
    if (templateString instanceof Function) {
      return templateString(valuesObject);
    }

    var cache = {};

    function tmpl(str, data) {
      // Figure out if we're getting a template, or if we need to
      // load the template - and be sure to cache the result.
      var fn = !/\W/.test(str) ? cache[str] = cache[str] : // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" + // Introduce the data as local variables using with(){}
      "with(obj){p.push('" + // Convert the template into pure JavaScript
      str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');"); // Provide some basic currying to the user

      return data ? fn(data) : fn;
    }

    return tmpl(templateString, valuesObject);
  },

  /* jshint ignore:end */
  generateLabels = helpers.generateLabels = function (templateString, numberOfSteps, graphMin, stepValue) {
    var labelsArray = new Array(numberOfSteps);

    if (labelTemplateString) {
      each(labelsArray, function (val, index) {
        labelsArray[index] = template(templateString, {
          value: graphMin + stepValue * (index + 1)
        });
      });
    }

    return labelsArray;
  },
      //--Animation methods
  //Easing functions adapted from Robert Penner's easing equations
  //http://www.robertpenner.com/easing/
  easingEffects = helpers.easingEffects = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return -1 * t * (t - 2);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      if ((t /= 1 / 2) < 1) return 1 / 2 * t * t;
      return -1 / 2 * (--t * (t - 2) - 1);
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return 1 * ((t = t / 1 - 1) * t * t + 1);
    },
    easeInOutCubic: function easeInOutCubic(t) {
      if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t;
      return 1 / 2 * ((t -= 2) * t * t + 2);
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return -1 * ((t = t / 1 - 1) * t * t * t - 1);
    },
    easeInOutQuart: function easeInOutQuart(t) {
      if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t;
      return -1 / 2 * ((t -= 2) * t * t * t - 2);
    },
    easeInQuint: function easeInQuint(t) {
      return 1 * (t /= 1) * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
    },
    easeInOutQuint: function easeInOutQuint(t) {
      if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t * t;
      return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
    },
    easeInSine: function easeInSine(t) {
      return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
    },
    easeOutSine: function easeOutSine(t) {
      return 1 * Math.sin(t / 1 * (Math.PI / 2));
    },
    easeInOutSine: function easeInOutSine(t) {
      return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
    },
    easeInExpo: function easeInExpo(t) {
      return t === 0 ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
    },
    easeOutExpo: function easeOutExpo(t) {
      return t === 1 ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
    },
    easeInOutExpo: function easeInOutExpo(t) {
      if (t === 0) return 0;
      if (t === 1) return 1;
      if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));
      return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
    },
    easeInCirc: function easeInCirc(t) {
      if (t >= 1) return t;
      return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
    },
    easeOutCirc: function easeOutCirc(t) {
      return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
    },
    easeInOutCirc: function easeInOutCirc(t) {
      if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
      return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    easeInElastic: function easeInElastic(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t === 0) return 0;
      if ((t /= 1) == 1) return 1;
      if (!p) p = 1 * 0.3;

      if (a < Math.abs(1)) {
        a = 1;
        s = p / 4;
      } else s = p / (2 * Math.PI) * Math.asin(1 / a);

      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
    },
    easeOutElastic: function easeOutElastic(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t === 0) return 0;
      if ((t /= 1) == 1) return 1;
      if (!p) p = 1 * 0.3;

      if (a < Math.abs(1)) {
        a = 1;
        s = p / 4;
      } else s = p / (2 * Math.PI) * Math.asin(1 / a);

      return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
    },
    easeInOutElastic: function easeInOutElastic(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t === 0) return 0;
      if ((t /= 1 / 2) == 2) return 1;
      if (!p) p = 1 * (0.3 * 1.5);

      if (a < Math.abs(1)) {
        a = 1;
        s = p / 4;
      } else s = p / (2 * Math.PI) * Math.asin(1 / a);

      if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
    },
    easeInBack: function easeInBack(t) {
      var s = 1.70158;
      return 1 * (t /= 1) * t * ((s + 1) * t - s);
    },
    easeOutBack: function easeOutBack(t) {
      var s = 1.70158;
      return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
    },
    easeInOutBack: function easeInOutBack(t) {
      var s = 1.70158;
      if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= 1.525) + 1) * t - s));
      return 1 / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    easeInBounce: function easeInBounce(t) {
      return 1 - easingEffects.easeOutBounce(1 - t);
    },
    easeOutBounce: function easeOutBounce(t) {
      if ((t /= 1) < 1 / 2.75) {
        return 1 * (7.5625 * t * t);
      } else if (t < 2 / 2.75) {
        return 1 * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75);
      } else if (t < 2.5 / 2.75) {
        return 1 * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375);
      } else {
        return 1 * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
      }
    },
    easeInOutBounce: function easeInOutBounce(t) {
      if (t < 1 / 2) return easingEffects.easeInBounce(t * 2) * 0.5;
      return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
    }
  },
      //Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
  requestAnimFrame = helpers.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }(),
      cancelAnimFrame = helpers.cancelAnimFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (callback) {
      return window.clearTimeout(callback, 1000 / 60);
    };
  }(),
      animationLoop = helpers.animationLoop = function (callback, totalSteps, easingString, onProgress, onComplete, chartInstance) {
    var currentStep = 0,
        easingFunction = easingEffects[easingString] || easingEffects.linear;

    var animationFrame = function animationFrame() {
      currentStep++;
      var stepDecimal = currentStep / totalSteps;
      var easeDecimal = easingFunction(stepDecimal);
      callback.call(chartInstance, easeDecimal, stepDecimal, currentStep);
      onProgress.call(chartInstance, easeDecimal, stepDecimal);

      if (currentStep < totalSteps) {
        chartInstance.animationFrame = requestAnimFrame(animationFrame);
      } else {
        onComplete.apply(chartInstance);
      }
    };

    requestAnimFrame(animationFrame);
  },
      //-- DOM methods
  getRelativePosition = helpers.getRelativePosition = function (evt) {
    var mouseX, mouseY;
    var e = evt.originalEvent || evt,
        canvas = evt.currentTarget || evt.srcElement,
        boundingRect = canvas.getBoundingClientRect();

    if (e.touches) {
      mouseX = e.touches[0].clientX - boundingRect.left;
      mouseY = e.touches[0].clientY - boundingRect.top;
    } else {
      mouseX = e.clientX - boundingRect.left;
      mouseY = e.clientY - boundingRect.top;
    }

    return {
      x: mouseX,
      y: mouseY
    };
  },
      addEvent = helpers.addEvent = function (node, eventType, method) {
    if (node.addEventListener) {
      node.addEventListener(eventType, method);
    } else if (node.attachEvent) {
      node.attachEvent("on" + eventType, method);
    } else {
      node["on" + eventType] = method;
    }
  },
      removeEvent = helpers.removeEvent = function (node, eventType, handler) {
    if (node.removeEventListener) {
      node.removeEventListener(eventType, handler, false);
    } else if (node.detachEvent) {
      node.detachEvent("on" + eventType, handler);
    } else {
      node["on" + eventType] = noop;
    }
  },
      bindEvents = helpers.bindEvents = function (chartInstance, arrayOfEvents, handler) {
    // Create the events object if it's not already present
    if (!chartInstance.events) chartInstance.events = {};
    each(arrayOfEvents, function (eventName) {
      chartInstance.events[eventName] = function () {
        handler.apply(chartInstance, arguments);
      };

      addEvent(chartInstance.chart.canvas, eventName, chartInstance.events[eventName]);
    });
  },
      unbindEvents = helpers.unbindEvents = function (chartInstance, arrayOfEvents) {
    each(arrayOfEvents, function (handler, eventName) {
      removeEvent(chartInstance.chart.canvas, eventName, handler);
    });
  },
      getMaximumWidth = helpers.getMaximumWidth = function (domNode) {
    var container = domNode.parentNode; // TODO = check cross browser stuff with this.

    return container.clientWidth;
  },
      getMaximumHeight = helpers.getMaximumHeight = function (domNode) {
    var container = domNode.parentNode; // TODO = check cross browser stuff with this.

    return container.clientHeight;
  },
      getMaximumSize = helpers.getMaximumSize = helpers.getMaximumWidth,
      // legacy support
  retinaScale = helpers.retinaScale = function (chart) {
    var ctx = chart.ctx,
        width = chart.canvas.width,
        height = chart.canvas.height;

    if (window.devicePixelRatio) {
      ctx.canvas.style.width = width + "px";
      ctx.canvas.style.height = height + "px";
      ctx.canvas.height = height * window.devicePixelRatio;
      ctx.canvas.width = width * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
  },
      //-- Canvas methods
  _clear = helpers.clear = function (chart) {
    chart.ctx.clearRect(0, 0, chart.width, chart.height);
  },
      fontString = helpers.fontString = function (pixelSize, fontStyle, fontFamily) {
    return fontStyle + " " + pixelSize + "px " + fontFamily;
  },
      longestText = helpers.longestText = function (ctx, font, arrayOfStrings) {
    ctx.font = font;
    var longest = 0;
    each(arrayOfStrings, function (string) {
      var textWidth = ctx.measureText(string).width;
      longest = textWidth > longest ? textWidth : longest;
    });
    return longest;
  },
      drawRoundedRectangle = helpers.drawRoundedRectangle = function (ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }; //Store a reference to each instance - allowing us to globally resize chart instances on window resize.
  //Destroy method on the chart will remove the instance of the chart from this reference.


  Chart.instances = {};

  Chart.Type = function (data, options, chart) {
    this.options = options;
    this.chart = chart;
    this.id = uid(); //Add the chart instance to the global namespace

    Chart.instances[this.id] = this; // Initialize is always called when a chart type is created
    // By default it is a no op, but it should be extended

    if (options.responsive) {
      this.resize();
    }

    this.initialize.call(this, data);
  }; //Core methods that'll be a part of every chart type


  extend(Chart.Type.prototype, {
    initialize: function initialize() {
      return this;
    },
    clear: function clear() {
      _clear(this.chart);

      return this;
    },
    stop: function stop() {
      // Stops any current animation loop occuring
      cancelAnimFrame(this.animationFrame);
      return this;
    },
    resize: function resize(callback) {
      this.stop();
      var canvas = this.chart.canvas,
          newWidth = getMaximumWidth(this.chart.canvas),
          newHeight = this.options.maintainAspectRatio ? newWidth / this.chart.aspectRatio : getMaximumHeight(this.chart.canvas);
      canvas.width = this.chart.width = newWidth;
      canvas.height = this.chart.height = newHeight;
      retinaScale(this.chart);

      if (typeof callback === "function") {
        callback.apply(this, Array.prototype.slice.call(arguments, 1));
      }

      return this;
    },
    reflow: noop,
    render: function render(reflow) {
      if (reflow) {
        this.reflow();
      }

      if (this.options.animation && !reflow) {
        helpers.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this);
      } else {
        this.draw();
        this.options.onAnimationComplete.call(this);
      }

      return this;
    },
    generateLegend: function generateLegend() {
      return template(this.options.legendTemplate, this);
    },
    destroy: function destroy() {
      this.clear();
      unbindEvents(this, this.events);
      var canvas = this.chart.canvas; // Reset canvas height/width attributes starts a fresh with the canvas context

      canvas.width = this.chart.width;
      canvas.height = this.chart.height; // < IE9 doesn't support removeProperty

      if (canvas.style.removeProperty) {
        canvas.style.removeProperty('width');
        canvas.style.removeProperty('height');
      } else {
        canvas.style.removeAttribute('width');
        canvas.style.removeAttribute('height');
      }

      delete Chart.instances[this.id];
    },
    showTooltip: function showTooltip(ChartElements, forceRedraw) {
      // Only redraw the chart if we've actually changed what we're hovering on.
      if (typeof this.activeElements === 'undefined') this.activeElements = [];

      var isChanged = function (Elements) {
        var changed = false;

        if (Elements.length !== this.activeElements.length) {
          changed = true;
          return changed;
        }

        each(Elements, function (element, index) {
          if (element !== this.activeElements[index]) {
            changed = true;
          }
        }, this);
        return changed;
      }.call(this, ChartElements);

      if (!isChanged && !forceRedraw) {
        return;
      } else {
        this.activeElements = ChartElements;
      }

      this.draw();

      if (this.options.customTooltips) {
        this.options.customTooltips(false);
      }

      if (ChartElements.length > 0) {
        // If we have multiple datasets, show a MultiTooltip for all of the data points at that index
        if (this.datasets && this.datasets.length > 1) {
          var dataArray, dataIndex;

          for (var i = this.datasets.length - 1; i >= 0; i--) {
            dataArray = this.datasets[i].points || this.datasets[i].bars || this.datasets[i].segments;
            dataIndex = indexOf(dataArray, ChartElements[0]);

            if (dataIndex !== -1) {
              break;
            }
          }

          var tooltipLabels = [],
              tooltipColors = [],
              medianPosition = function (index) {
            // Get all the points at that particular index
            var Elements = [],
                dataCollection,
                xPositions = [],
                yPositions = [],
                xMax,
                yMax,
                xMin,
                yMin;
            helpers.each(this.datasets, function (dataset) {
              dataCollection = dataset.points || dataset.bars || dataset.segments;

              if (dataCollection[dataIndex] && dataCollection[dataIndex].hasValue()) {
                Elements.push(dataCollection[dataIndex]);
              }
            });
            helpers.each(Elements, function (element) {
              xPositions.push(element.x);
              yPositions.push(element.y); //Include any colour information about the element

              tooltipLabels.push(helpers.template(this.options.multiTooltipTemplate, element));
              tooltipColors.push({
                fill: element._saved.fillColor || element.fillColor,
                stroke: element._saved.strokeColor || element.strokeColor
              });
            }, this);
            yMin = min(yPositions);
            yMax = max(yPositions);
            xMin = min(xPositions);
            xMax = max(xPositions);
            return {
              x: xMin > this.chart.width / 2 ? xMin : xMax,
              y: (yMin + yMax) / 2
            };
          }.call(this, dataIndex);

          new Chart.MultiTooltip({
            x: medianPosition.x,
            y: medianPosition.y,
            xPadding: this.options.tooltipXPadding,
            yPadding: this.options.tooltipYPadding,
            xOffset: this.options.tooltipXOffset,
            fillColor: this.options.tooltipFillColor,
            textColor: this.options.tooltipFontColor,
            fontFamily: this.options.tooltipFontFamily,
            fontStyle: this.options.tooltipFontStyle,
            fontSize: this.options.tooltipFontSize,
            titleTextColor: this.options.tooltipTitleFontColor,
            titleFontFamily: this.options.tooltipTitleFontFamily,
            titleFontStyle: this.options.tooltipTitleFontStyle,
            titleFontSize: this.options.tooltipTitleFontSize,
            cornerRadius: this.options.tooltipCornerRadius,
            labels: tooltipLabels,
            legendColors: tooltipColors,
            legendColorBackground: this.options.multiTooltipKeyBackground,
            title: ChartElements[0].label,
            chart: this.chart,
            ctx: this.chart.ctx,
            custom: this.options.customTooltips
          }).draw();
        } else {
          each(ChartElements, function (Element) {
            var tooltipPosition = Element.tooltipPosition();
            new Chart.Tooltip({
              x: Math.round(tooltipPosition.x),
              y: Math.round(tooltipPosition.y),
              xPadding: this.options.tooltipXPadding,
              yPadding: this.options.tooltipYPadding,
              fillColor: this.options.tooltipFillColor,
              textColor: this.options.tooltipFontColor,
              fontFamily: this.options.tooltipFontFamily,
              fontStyle: this.options.tooltipFontStyle,
              fontSize: this.options.tooltipFontSize,
              caretHeight: this.options.tooltipCaretSize,
              cornerRadius: this.options.tooltipCornerRadius,
              text: template(this.options.tooltipTemplate, Element),
              chart: this.chart,
              custom: this.options.customTooltips
            }).draw();
          }, this);
        }
      }

      return this;
    },
    toBase64Image: function toBase64Image() {
      return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
    }
  });

  Chart.Type.extend = function (extensions) {
    var parent = this;

    var ChartType = function ChartType() {
      return parent.apply(this, arguments);
    }; //Copy the prototype object of the this class


    ChartType.prototype = clone(parent.prototype); //Now overwrite some of the properties in the base class with the new extensions

    extend(ChartType.prototype, extensions);
    ChartType.extend = Chart.Type.extend;

    if (extensions.name || parent.prototype.name) {
      var chartName = extensions.name || parent.prototype.name; //Assign any potential default values of the new chart type
      //If none are defined, we'll use a clone of the chart type this is being extended from.
      //I.e. if we extend a line chart, we'll use the defaults from the line chart if our new chart
      //doesn't define some defaults of their own.

      var baseDefaults = Chart.defaults[parent.prototype.name] ? clone(Chart.defaults[parent.prototype.name]) : {};
      Chart.defaults[chartName] = extend(baseDefaults, extensions.defaults);
      Chart.types[chartName] = ChartType; //Register this new chart type in the Chart prototype

      Chart.prototype[chartName] = function (data, options) {
        var config = merge(Chart.defaults.global, Chart.defaults[chartName], options || {});
        return new ChartType(data, config, this);
      };
    } else {
      warn("Name not provided for this chart, so it hasn't been registered");
    }

    return parent;
  };

  Chart.Element = function (configuration) {
    extend(this, configuration);
    this.initialize.apply(this, arguments);
    this.save();
  };

  extend(Chart.Element.prototype, {
    initialize: function initialize() {},
    restore: function restore(props) {
      if (!props) {
        extend(this, this._saved);
      } else {
        each(props, function (key) {
          this[key] = this._saved[key];
        }, this);
      }

      return this;
    },
    save: function save() {
      this._saved = clone(this);
      delete this._saved._saved;
      return this;
    },
    update: function update(newProps) {
      each(newProps, function (value, key) {
        this._saved[key] = this[key];
        this[key] = value;
      }, this);
      return this;
    },
    transition: function transition(props, ease) {
      each(props, function (value, key) {
        this[key] = (value - this._saved[key]) * ease + this._saved[key];
      }, this);
      return this;
    },
    tooltipPosition: function tooltipPosition() {
      return {
        x: this.x,
        y: this.y
      };
    },
    hasValue: function hasValue() {
      return isNumber(this.value);
    }
  });
  Chart.Element.extend = inherits;
  Chart.Point = Chart.Element.extend({
    display: true,
    inRange: function inRange(chartX, chartY) {
      var hitDetectionRange = this.hitDetectionRadius + this.radius;
      return Math.pow(chartX - this.x, 2) + Math.pow(chartY - this.y, 2) < Math.pow(hitDetectionRange, 2);
    },
    draw: function draw() {
      if (this.display) {
        var ctx = this.ctx;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.strokeStyle = this.strokeColor;
        ctx.lineWidth = this.strokeWidth;
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.stroke();
      } //Quick debug for bezier curve splining
      //Highlights control points and the line between them.
      //Handy for dev - stripped in the min version.
      // ctx.save();
      // ctx.fillStyle = "black";
      // ctx.strokeStyle = "black"
      // ctx.beginPath();
      // ctx.arc(this.controlPoints.inner.x,this.controlPoints.inner.y, 2, 0, Math.PI*2);
      // ctx.fill();
      // ctx.beginPath();
      // ctx.arc(this.controlPoints.outer.x,this.controlPoints.outer.y, 2, 0, Math.PI*2);
      // ctx.fill();
      // ctx.moveTo(this.controlPoints.inner.x,this.controlPoints.inner.y);
      // ctx.lineTo(this.x, this.y);
      // ctx.lineTo(this.controlPoints.outer.x,this.controlPoints.outer.y);
      // ctx.stroke();
      // ctx.restore();

    }
  });
  Chart.Arc = Chart.Element.extend({
    inRange: function inRange(chartX, chartY) {
      var pointRelativePosition = helpers.getAngleFromPoint(this, {
        x: chartX,
        y: chartY
      }); //Check if within the range of the open/close angle

      var betweenAngles = pointRelativePosition.angle >= this.startAngle && pointRelativePosition.angle <= this.endAngle,
          withinRadius = pointRelativePosition.distance >= this.innerRadius && pointRelativePosition.distance <= this.outerRadius;
      return betweenAngles && withinRadius; //Ensure within the outside of the arc centre, but inside arc outer
    },
    tooltipPosition: function tooltipPosition() {
      var centreAngle = this.startAngle + (this.endAngle - this.startAngle) / 2,
          rangeFromCentre = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
      return {
        x: this.x + Math.cos(centreAngle) * rangeFromCentre,
        y: this.y + Math.sin(centreAngle) * rangeFromCentre
      };
    },
    draw: function draw(animationPercent) {
      var easingDecimal = animationPercent || 1;
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle);
      ctx.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, true);
      ctx.closePath();
      ctx.strokeStyle = this.strokeColor;
      ctx.lineWidth = this.strokeWidth;
      ctx.fillStyle = this.fillColor;
      ctx.fill();
      ctx.lineJoin = 'bevel';

      if (this.showStroke) {
        ctx.stroke();
      }
    }
  });
  Chart.Rectangle = Chart.Element.extend({
    draw: function draw() {
      var ctx = this.ctx,
          halfWidth = this.width / 2,
          leftX = this.x - halfWidth,
          rightX = this.x + halfWidth,
          top = this.base - (this.base - this.y),
          halfStroke = this.strokeWidth / 2; // Canvas doesn't allow us to stroke inside the width so we can
      // adjust the sizes to fit if we're setting a stroke on the line

      if (this.showStroke) {
        leftX += halfStroke;
        rightX -= halfStroke;
        top += halfStroke;
      }

      ctx.beginPath();
      ctx.fillStyle = this.fillColor;
      ctx.strokeStyle = this.strokeColor;
      ctx.lineWidth = this.strokeWidth; // It'd be nice to keep this class totally generic to any rectangle
      // and simply specify which border to miss out.

      ctx.moveTo(leftX, this.base);
      ctx.lineTo(leftX, top);
      ctx.lineTo(rightX, top);
      ctx.lineTo(rightX, this.base);
      ctx.fill();

      if (this.showStroke) {
        ctx.stroke();
      }
    },
    height: function height() {
      return this.base - this.y;
    },
    inRange: function inRange(chartX, chartY) {
      return chartX >= this.x - this.width / 2 && chartX <= this.x + this.width / 2 && chartY >= this.y && chartY <= this.base;
    }
  });
  Chart.Tooltip = Chart.Element.extend({
    draw: function draw() {
      var ctx = this.chart.ctx;
      ctx.font = fontString(this.fontSize, this.fontStyle, this.fontFamily);
      this.xAlign = "center";
      this.yAlign = "above"; //Distance between the actual element.y position and the start of the tooltip caret

      var caretPadding = this.caretPadding = 2;
      var tooltipWidth = ctx.measureText(this.text).width + 2 * this.xPadding,
          tooltipRectHeight = this.fontSize + 2 * this.yPadding,
          tooltipHeight = tooltipRectHeight + this.caretHeight + caretPadding;

      if (this.x + tooltipWidth / 2 > this.chart.width) {
        this.xAlign = "left";
      } else if (this.x - tooltipWidth / 2 < 0) {
        this.xAlign = "right";
      }

      if (this.y - tooltipHeight < 0) {
        this.yAlign = "below";
      }

      var tooltipX = this.x - tooltipWidth / 2,
          tooltipY = this.y - tooltipHeight;
      ctx.fillStyle = this.fillColor; // Custom Tooltips

      if (this.custom) {
        this.custom(this);
      } else {
        switch (this.yAlign) {
          case "above":
            //Draw a caret above the x/y
            ctx.beginPath();
            ctx.moveTo(this.x, this.y - caretPadding);
            ctx.lineTo(this.x + this.caretHeight, this.y - (caretPadding + this.caretHeight));
            ctx.lineTo(this.x - this.caretHeight, this.y - (caretPadding + this.caretHeight));
            ctx.closePath();
            ctx.fill();
            break;

          case "below":
            tooltipY = this.y + caretPadding + this.caretHeight; //Draw a caret below the x/y

            ctx.beginPath();
            ctx.moveTo(this.x, this.y + caretPadding);
            ctx.lineTo(this.x + this.caretHeight, this.y + caretPadding + this.caretHeight);
            ctx.lineTo(this.x - this.caretHeight, this.y + caretPadding + this.caretHeight);
            ctx.closePath();
            ctx.fill();
            break;
        }

        switch (this.xAlign) {
          case "left":
            tooltipX = this.x - tooltipWidth + (this.cornerRadius + this.caretHeight);
            break;

          case "right":
            tooltipX = this.x - (this.cornerRadius + this.caretHeight);
            break;
        }

        drawRoundedRectangle(ctx, tooltipX, tooltipY, tooltipWidth, tooltipRectHeight, this.cornerRadius);
        ctx.fill();
        ctx.fillStyle = this.textColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.text, tooltipX + tooltipWidth / 2, tooltipY + tooltipRectHeight / 2);
      }
    }
  });
  Chart.MultiTooltip = Chart.Element.extend({
    initialize: function initialize() {
      this.font = fontString(this.fontSize, this.fontStyle, this.fontFamily);
      this.titleFont = fontString(this.titleFontSize, this.titleFontStyle, this.titleFontFamily);
      this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + this.yPadding * 2 + this.titleFontSize * 1.5;
      this.ctx.font = this.titleFont;
      var titleWidth = this.ctx.measureText(this.title).width,
          //Label has a legend square as well so account for this.
      labelWidth = longestText(this.ctx, this.font, this.labels) + this.fontSize + 3,
          longestTextWidth = max([labelWidth, titleWidth]);
      this.width = longestTextWidth + this.xPadding * 2;
      var halfHeight = this.height / 2; //Check to ensure the height will fit on the canvas

      if (this.y - halfHeight < 0) {
        this.y = halfHeight;
      } else if (this.y + halfHeight > this.chart.height) {
        this.y = this.chart.height - halfHeight;
      } //Decide whether to align left or right based on position on canvas


      if (this.x > this.chart.width / 2) {
        this.x -= this.xOffset + this.width;
      } else {
        this.x += this.xOffset;
      }
    },
    getLineHeight: function getLineHeight(index) {
      var baseLineHeight = this.y - this.height / 2 + this.yPadding,
          afterTitleIndex = index - 1; //If the index is zero, we're getting the title

      if (index === 0) {
        return baseLineHeight + this.titleFontSize / 2;
      } else {
        return baseLineHeight + (this.fontSize * 1.5 * afterTitleIndex + this.fontSize / 2) + this.titleFontSize * 1.5;
      }
    },
    draw: function draw() {
      // Custom Tooltips
      if (this.custom) {
        this.custom(this);
      } else {
        drawRoundedRectangle(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
        var ctx = this.ctx;
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.closePath();
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillStyle = this.titleTextColor;
        ctx.font = this.titleFont;
        ctx.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0));
        ctx.font = this.font;
        helpers.each(this.labels, function (label, index) {
          ctx.fillStyle = this.textColor;
          ctx.fillText(label, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(index + 1)); //A bit gnarly, but clearing this rectangle breaks when using explorercanvas (clears whole canvas)
          //ctx.clearRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);
          //Instead we'll make a white filled block to put the legendColour palette over.

          ctx.fillStyle = this.legendColorBackground;
          ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize / 2, this.fontSize, this.fontSize);
          ctx.fillStyle = this.legendColors[index].fill;
          ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize / 2, this.fontSize, this.fontSize);
        }, this);
      }
    }
  });
  Chart.Scale = Chart.Element.extend({
    initialize: function initialize() {
      this.fit();
    },
    buildYLabels: function buildYLabels() {
      this.yLabels = [];
      var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

      for (var i = 0; i <= this.steps; i++) {
        this.yLabels.push(template(this.templateString, {
          value: (this.min + i * this.stepValue).toFixed(stepDecimalPlaces)
        }));
      }

      this.yLabelWidth = this.display && this.showLabels ? longestText(this.ctx, this.font, this.yLabels) : 0;
    },
    addXLabel: function addXLabel(label) {
      this.xLabels.push(label);
      this.valuesCount++;
      this.fit();
    },
    removeXLabel: function removeXLabel() {
      this.xLabels.shift();
      this.valuesCount--;
      this.fit();
    },
    // Fitting loop to rotate x Labels and figure out what fits there, and also calculate how many Y steps to use
    fit: function fit() {
      // First we need the width of the yLabels, assuming the xLabels aren't rotated
      // To do that we need the base line at the top and base of the chart, assuming there is no x label rotation
      this.startPoint = this.display ? this.fontSize : 0;
      this.endPoint = this.display ? this.height - this.fontSize * 1.5 - 5 : this.height; // -5 to pad labels
      // Apply padding settings to the start and end point.

      this.startPoint += this.padding;
      this.endPoint -= this.padding; // Cache the starting height, so can determine if we need to recalculate the scale yAxis

      var cachedHeight = this.endPoint - this.startPoint,
          cachedYLabelWidth; // Build the current yLabels so we have an idea of what size they'll be to start

      /*
       *	This sets what is returned from calculateScaleRange as static properties of this class:
       *
      	this.steps;
      	this.stepValue;
      	this.min;
      	this.max;
       *
       */

      this.calculateYRange(cachedHeight); // With these properties set we can now build the array of yLabels
      // and also the width of the largest yLabel

      this.buildYLabels();
      this.calculateXLabelRotation();

      while (cachedHeight > this.endPoint - this.startPoint) {
        cachedHeight = this.endPoint - this.startPoint;
        cachedYLabelWidth = this.yLabelWidth;
        this.calculateYRange(cachedHeight);
        this.buildYLabels(); // Only go through the xLabel loop again if the yLabel width has changed

        if (cachedYLabelWidth < this.yLabelWidth) {
          this.calculateXLabelRotation();
        }
      }
    },
    calculateXLabelRotation: function calculateXLabelRotation() {
      //Get the width of each grid by calculating the difference
      //between x offsets between 0 and 1.
      this.ctx.font = this.font;
      var firstWidth = this.ctx.measureText(this.xLabels[0]).width,
          lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width,
          firstRotated,
          lastRotated;
      this.xScalePaddingRight = lastWidth / 2 + 3;
      this.xScalePaddingLeft = firstWidth / 2 > this.yLabelWidth + 10 ? firstWidth / 2 : this.yLabelWidth + 10;
      this.xLabelRotation = 0;

      if (this.display) {
        var originalLabelWidth = longestText(this.ctx, this.font, this.xLabels),
            cosRotation,
            firstRotatedWidth;
        this.xLabelWidth = originalLabelWidth; //Allow 3 pixels x2 padding either side for label readability

        var xGridWidth = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; //Max label rotate should be 90 - also act as a loop counter

        while (this.xLabelWidth > xGridWidth && this.xLabelRotation === 0 || this.xLabelWidth > xGridWidth && this.xLabelRotation <= 90 && this.xLabelRotation > 0) {
          cosRotation = Math.cos(toRadians(this.xLabelRotation));
          firstRotated = cosRotation * firstWidth;
          lastRotated = cosRotation * lastWidth; // We're right aligning the text now.

          if (firstRotated + this.fontSize / 2 > this.yLabelWidth + 8) {
            this.xScalePaddingLeft = firstRotated + this.fontSize / 2;
          }

          this.xScalePaddingRight = this.fontSize / 2;
          this.xLabelRotation++;
          this.xLabelWidth = cosRotation * originalLabelWidth;
        }

        if (this.xLabelRotation > 0) {
          this.endPoint -= Math.sin(toRadians(this.xLabelRotation)) * originalLabelWidth + 3;
        }
      } else {
        this.xLabelWidth = 0;
        this.xScalePaddingRight = this.padding;
        this.xScalePaddingLeft = this.padding;
      }
    },
    // Needs to be overidden in each Chart type
    // Otherwise we need to pass all the data into the scale class
    calculateYRange: noop,
    drawingArea: function drawingArea() {
      return this.startPoint - this.endPoint;
    },
    calculateY: function calculateY(value) {
      var scalingFactor = this.drawingArea() / (this.min - this.max);
      return this.endPoint - scalingFactor * (value - this.min);
    },
    calculateX: function calculateX(index) {
      var isRotated = this.xLabelRotation > 0,
          // innerWidth = (this.offsetGridLines) ? this.width - offsetLeft - this.padding : this.width - (offsetLeft + halfLabelWidth * 2) - this.padding,
      innerWidth = this.width - (this.xScalePaddingLeft + this.xScalePaddingRight),
          valueWidth = innerWidth / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
          valueOffset = valueWidth * index + this.xScalePaddingLeft;

      if (this.offsetGridLines) {
        valueOffset += valueWidth / 2;
      }

      return Math.round(valueOffset);
    },
    update: function update(newProps) {
      helpers.extend(this, newProps);
      this.fit();
    },
    draw: function draw() {
      var ctx = this.ctx,
          yLabelGap = (this.endPoint - this.startPoint) / this.steps,
          xStart = Math.round(this.xScalePaddingLeft);

      if (this.display) {
        ctx.fillStyle = this.textColor;
        ctx.font = this.font;
        each(this.yLabels, function (labelString, index) {
          var yLabelCenter = this.endPoint - yLabelGap * index,
              linePositionY = Math.round(yLabelCenter),
              drawHorizontalLine = this.showHorizontalLines;
          ctx.textAlign = "right";
          ctx.textBaseline = "middle";

          if (this.showLabels) {
            ctx.fillText(labelString, xStart - 10, yLabelCenter);
          } // This is X axis, so draw it


          if (index === 0 && !drawHorizontalLine) {
            drawHorizontalLine = true;
          }

          if (drawHorizontalLine) {
            ctx.beginPath();
          }

          if (index > 0) {
            // This is a grid line in the centre, so drop that
            ctx.lineWidth = this.gridLineWidth;
            ctx.strokeStyle = this.gridLineColor;
          } else {
            // This is the first line on the scale
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = this.lineColor;
          }

          linePositionY += helpers.aliasPixel(ctx.lineWidth);

          if (drawHorizontalLine) {
            ctx.moveTo(xStart, linePositionY);
            ctx.lineTo(this.width, linePositionY);
            ctx.stroke();
            ctx.closePath();
          }

          ctx.lineWidth = this.lineWidth;
          ctx.strokeStyle = this.lineColor;
          ctx.beginPath();
          ctx.moveTo(xStart - 5, linePositionY);
          ctx.lineTo(xStart, linePositionY);
          ctx.stroke();
          ctx.closePath();
        }, this);
        each(this.xLabels, function (label, index) {
          var xPos = this.calculateX(index) + aliasPixel(this.lineWidth),
              // Check to see if line/bar here and decide where to place the line
          linePos = this.calculateX(index - (this.offsetGridLines ? 0.5 : 0)) + aliasPixel(this.lineWidth),
              isRotated = this.xLabelRotation > 0,
              drawVerticalLine = this.showVerticalLines; // This is Y axis, so draw it

          if (index === 0 && !drawVerticalLine) {
            drawVerticalLine = true;
          }

          if (drawVerticalLine) {
            ctx.beginPath();
          }

          if (index > 0) {
            // This is a grid line in the centre, so drop that
            ctx.lineWidth = this.gridLineWidth;
            ctx.strokeStyle = this.gridLineColor;
          } else {
            // This is the first line on the scale
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = this.lineColor;
          }

          if (drawVerticalLine) {
            ctx.moveTo(linePos, this.endPoint);
            ctx.lineTo(linePos, this.startPoint - 3);
            ctx.stroke();
            ctx.closePath();
          }

          ctx.lineWidth = this.lineWidth;
          ctx.strokeStyle = this.lineColor; // Small lines at the bottom of the base grid line

          ctx.beginPath();
          ctx.moveTo(linePos, this.endPoint);
          ctx.lineTo(linePos, this.endPoint + 5);
          ctx.stroke();
          ctx.closePath();
          ctx.save();
          ctx.translate(xPos, isRotated ? this.endPoint + 12 : this.endPoint + 8);
          ctx.rotate(toRadians(this.xLabelRotation) * -1);
          ctx.font = this.font;
          ctx.textAlign = isRotated ? "right" : "center";
          ctx.textBaseline = isRotated ? "middle" : "top";
          ctx.fillText(label, 0, 0);
          ctx.restore();
        }, this);
      }
    }
  });
  Chart.RadialScale = Chart.Element.extend({
    initialize: function initialize() {
      this.size = min([this.height, this.width]);
      this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2;
    },
    calculateCenterOffset: function calculateCenterOffset(value) {
      // Take into account half font size + the yPadding of the top value
      var scalingFactor = this.drawingArea / (this.max - this.min);
      return (value - this.min) * scalingFactor;
    },
    update: function update() {
      if (!this.lineArc) {
        this.setScaleSize();
      } else {
        this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2;
      }

      this.buildYLabels();
    },
    buildYLabels: function buildYLabels() {
      this.yLabels = [];
      var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

      for (var i = 0; i <= this.steps; i++) {
        this.yLabels.push(template(this.templateString, {
          value: (this.min + i * this.stepValue).toFixed(stepDecimalPlaces)
        }));
      }
    },
    getCircumference: function getCircumference() {
      return Math.PI * 2 / this.valuesCount;
    },
    setScaleSize: function setScaleSize() {
      /*
       * Right, this is really confusing and there is a lot of maths going on here
       * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
       *
       * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
       *
       * Solution:
       *
       * We assume the radius of the polygon is half the size of the canvas at first
       * at each index we check if the text overlaps.
       *
       * Where it does, we store that angle and that index.
       *
       * After finding the largest index and angle we calculate how much we need to remove
       * from the shape radius to move the point inwards by that x.
       *
       * We average the left and right distances to get the maximum shape radius that can fit in the box
       * along with labels.
       *
       * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
       * on each side, removing that from the size, halving it and adding the left x protrusion width.
       *
       * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
       * and position it in the most space efficient manner
       *
       * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
       */
      // Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
      // Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
      var largestPossibleRadius = min([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
          pointPosition,
          i,
          textWidth,
          halfTextWidth,
          furthestRight = this.width,
          furthestRightIndex,
          furthestRightAngle,
          furthestLeft = 0,
          furthestLeftIndex,
          furthestLeftAngle,
          xProtrusionLeft,
          xProtrusionRight,
          radiusReductionRight,
          radiusReductionLeft,
          maxWidthRadius;
      this.ctx.font = fontString(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily);

      for (i = 0; i < this.valuesCount; i++) {
        // 5px to space the text slightly out - similar to what we do in the draw function.
        pointPosition = this.getPointPosition(i, largestPossibleRadius);
        textWidth = this.ctx.measureText(template(this.templateString, {
          value: this.labels[i]
        })).width + 5;

        if (i === 0 || i === this.valuesCount / 2) {
          // If we're at index zero, or exactly the middle, we're at exactly the top/bottom
          // of the radar chart, so text will be aligned centrally, so we'll half it and compare
          // w/left and right text sizes
          halfTextWidth = textWidth / 2;

          if (pointPosition.x + halfTextWidth > furthestRight) {
            furthestRight = pointPosition.x + halfTextWidth;
            furthestRightIndex = i;
          }

          if (pointPosition.x - halfTextWidth < furthestLeft) {
            furthestLeft = pointPosition.x - halfTextWidth;
            furthestLeftIndex = i;
          }
        } else if (i < this.valuesCount / 2) {
          // Less than half the values means we'll left align the text
          if (pointPosition.x + textWidth > furthestRight) {
            furthestRight = pointPosition.x + textWidth;
            furthestRightIndex = i;
          }
        } else if (i > this.valuesCount / 2) {
          // More than half the values means we'll right align the text
          if (pointPosition.x - textWidth < furthestLeft) {
            furthestLeft = pointPosition.x - textWidth;
            furthestLeftIndex = i;
          }
        }
      }

      xProtrusionLeft = furthestLeft;
      xProtrusionRight = Math.ceil(furthestRight - this.width);
      furthestRightAngle = this.getIndexAngle(furthestRightIndex);
      furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);
      radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI / 2);
      radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI / 2); // Ensure we actually need to reduce the size of the chart

      radiusReductionRight = isNumber(radiusReductionRight) ? radiusReductionRight : 0;
      radiusReductionLeft = isNumber(radiusReductionLeft) ? radiusReductionLeft : 0;
      this.drawingArea = largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2; //this.drawingArea = min([maxWidthRadius, (this.height - (2 * (this.pointLabelFontSize + 5)))/2])

      this.setCenterPoint(radiusReductionLeft, radiusReductionRight);
    },
    setCenterPoint: function setCenterPoint(leftMovement, rightMovement) {
      var maxRight = this.width - rightMovement - this.drawingArea,
          maxLeft = leftMovement + this.drawingArea;
      this.xCenter = (maxLeft + maxRight) / 2; // Always vertically in the centre as the text height doesn't change

      this.yCenter = this.height / 2;
    },
    getIndexAngle: function getIndexAngle(index) {
      var angleMultiplier = Math.PI * 2 / this.valuesCount; // Start from the top instead of right, so remove a quarter of the circle

      return index * angleMultiplier - Math.PI / 2;
    },
    getPointPosition: function getPointPosition(index, distanceFromCenter) {
      var thisAngle = this.getIndexAngle(index);
      return {
        x: Math.cos(thisAngle) * distanceFromCenter + this.xCenter,
        y: Math.sin(thisAngle) * distanceFromCenter + this.yCenter
      };
    },
    draw: function draw() {
      if (this.display) {
        var ctx = this.ctx;
        each(this.yLabels, function (label, index) {
          // Don't draw a centre value
          if (index > 0) {
            var yCenterOffset = index * (this.drawingArea / this.steps),
                yHeight = this.yCenter - yCenterOffset,
                pointPosition; // Draw circular lines around the scale

            if (this.lineWidth > 0) {
              ctx.strokeStyle = this.lineColor;
              ctx.lineWidth = this.lineWidth;

              if (this.lineArc) {
                ctx.beginPath();
                ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, Math.PI * 2);
                ctx.closePath();
                ctx.stroke();
              } else {
                ctx.beginPath();

                for (var i = 0; i < this.valuesCount; i++) {
                  pointPosition = this.getPointPosition(i, this.calculateCenterOffset(this.min + index * this.stepValue));

                  if (i === 0) {
                    ctx.moveTo(pointPosition.x, pointPosition.y);
                  } else {
                    ctx.lineTo(pointPosition.x, pointPosition.y);
                  }
                }

                ctx.closePath();
                ctx.stroke();
              }
            }

            if (this.showLabels) {
              ctx.font = fontString(this.fontSize, this.fontStyle, this.fontFamily);

              if (this.showLabelBackdrop) {
                var labelWidth = ctx.measureText(label).width;
                ctx.fillStyle = this.backdropColor;
                ctx.fillRect(this.xCenter - labelWidth / 2 - this.backdropPaddingX, yHeight - this.fontSize / 2 - this.backdropPaddingY, labelWidth + this.backdropPaddingX * 2, this.fontSize + this.backdropPaddingY * 2);
              }

              ctx.textAlign = 'center';
              ctx.textBaseline = "middle";
              ctx.fillStyle = this.fontColor;
              ctx.fillText(label, this.xCenter, yHeight);
            }
          }
        }, this);

        if (!this.lineArc) {
          ctx.lineWidth = this.angleLineWidth;
          ctx.strokeStyle = this.angleLineColor;

          for (var i = this.valuesCount - 1; i >= 0; i--) {
            if (this.angleLineWidth > 0) {
              var outerPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max));
              ctx.beginPath();
              ctx.moveTo(this.xCenter, this.yCenter);
              ctx.lineTo(outerPosition.x, outerPosition.y);
              ctx.stroke();
              ctx.closePath();
            } // Extra 3px out for some label spacing


            var pointLabelPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
            ctx.font = fontString(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily);
            ctx.fillStyle = this.pointLabelFontColor;
            var labelsCount = this.labels.length,
                halfLabelsCount = this.labels.length / 2,
                quarterLabelsCount = halfLabelsCount / 2,
                upperHalf = i < quarterLabelsCount || i > labelsCount - quarterLabelsCount,
                exactQuarter = i === quarterLabelsCount || i === labelsCount - quarterLabelsCount;

            if (i === 0) {
              ctx.textAlign = 'center';
            } else if (i === halfLabelsCount) {
              ctx.textAlign = 'center';
            } else if (i < halfLabelsCount) {
              ctx.textAlign = 'left';
            } else {
              ctx.textAlign = 'right';
            } // Set the correct text baseline based on outer positioning


            if (exactQuarter) {
              ctx.textBaseline = 'middle';
            } else if (upperHalf) {
              ctx.textBaseline = 'bottom';
            } else {
              ctx.textBaseline = 'top';
            }

            ctx.fillText(this.labels[i], pointLabelPosition.x, pointLabelPosition.y);
          }
        }
      }
    }
  }); // Attach global event to resize each chart instance when the browser resizes

  helpers.addEvent(window, "resize", function () {
    // Basic debounce of resize function so it doesn't hurt performance when resizing browser.
    var timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        each(Chart.instances, function (instance) {
          // If the responsive flag is set in the chart instance config
          // Cascade the resize event down to the chart.
          if (instance.options.responsive) {
            instance.resize(instance.render, true);
          }
        });
      }, 50);
    };
  }());

  if (amd) {
    define(function () {
      return Chart;
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    module.exports = Chart;
  }

  root.Chart = Chart;

  Chart.noConflict = function () {
    root.Chart = previous;
    return Chart;
  };
}).call(this);
(function () {
  "use strict";

  var root = this,
      Chart = root.Chart,
      helpers = Chart.helpers;
  var defaultConfig = {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero: true,
    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: true,
    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",
    //Number - Width of the grid lines
    scaleGridLineWidth: 1,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
    //Boolean - If there is a stroke on each bar
    barShowStroke: true,
    //Number - Pixel width of the bar stroke
    barStrokeWidth: 2,
    //Number - Spacing between each of the X value sets
    barValueSpacing: 5,
    //Number - Spacing between data sets within X values
    barDatasetSpacing: 1,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
  };
  Chart.Type.extend({
    name: "Bar",
    defaults: defaultConfig,
    initialize: function initialize(data) {
      //Expose options as a scope variable here so we can access it in the ScaleClass
      var options = this.options;
      this.ScaleClass = Chart.Scale.extend({
        offsetGridLines: true,
        calculateBarX: function calculateBarX(datasetCount, datasetIndex, barIndex) {
          //Reusable method for calculating the xPosition of a given bar based on datasetIndex & width of the bar
          var xWidth = this.calculateBaseWidth(),
              xAbsolute = this.calculateX(barIndex) - xWidth / 2,
              barWidth = this.calculateBarWidth(datasetCount);
          return xAbsolute + barWidth * datasetIndex + datasetIndex * options.barDatasetSpacing + barWidth / 2;
        },
        calculateBaseWidth: function calculateBaseWidth() {
          return this.calculateX(1) - this.calculateX(0) - 2 * options.barValueSpacing;
        },
        calculateBarWidth: function calculateBarWidth(datasetCount) {
          //The padding between datasets is to the right of each bar, providing that there are more than 1 dataset
          var baseWidth = this.calculateBaseWidth() - (datasetCount - 1) * options.barDatasetSpacing;
          return baseWidth / datasetCount;
        }
      });
      this.datasets = []; //Set up tooltip events on the chart

      if (this.options.showTooltips) {
        helpers.bindEvents(this, this.options.tooltipEvents, function (evt) {
          var activeBars = evt.type !== 'mouseout' ? this.getBarsAtEvent(evt) : [];
          this.eachBars(function (bar) {
            bar.restore(['fillColor', 'strokeColor']);
          });
          helpers.each(activeBars, function (activeBar) {
            activeBar.fillColor = activeBar.highlightFill;
            activeBar.strokeColor = activeBar.highlightStroke;
          });
          this.showTooltip(activeBars);
        });
      } //Declare the extension of the default point, to cater for the options passed in to the constructor


      this.BarClass = Chart.Rectangle.extend({
        strokeWidth: this.options.barStrokeWidth,
        showStroke: this.options.barShowStroke,
        ctx: this.chart.ctx
      }); //Iterate through each of the datasets, and build this into a property of the chart

      helpers.each(data.datasets, function (dataset, datasetIndex) {
        var datasetObject = {
          label: dataset.label || null,
          fillColor: dataset.fillColor,
          strokeColor: dataset.strokeColor,
          bars: []
        };
        this.datasets.push(datasetObject);
        helpers.each(dataset.data, function (dataPoint, index) {
          //Add a new point for each piece of data, passing any required data to draw.
          datasetObject.bars.push(new this.BarClass({
            value: dataPoint,
            label: data.labels[index],
            datasetLabel: dataset.label,
            strokeColor: dataset.strokeColor,
            fillColor: dataset.fillColor,
            highlightFill: dataset.highlightFill || dataset.fillColor,
            highlightStroke: dataset.highlightStroke || dataset.strokeColor
          }));
        }, this);
      }, this);
      this.buildScale(data.labels);
      this.BarClass.prototype.base = this.scale.endPoint;
      this.eachBars(function (bar, index, datasetIndex) {
        helpers.extend(bar, {
          width: this.scale.calculateBarWidth(this.datasets.length),
          x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
          y: this.scale.endPoint
        });
        bar.save();
      }, this);
      this.render();
    },
    update: function update() {
      this.scale.update(); // Reset any highlight colours before updating.

      helpers.each(this.activeElements, function (activeElement) {
        activeElement.restore(['fillColor', 'strokeColor']);
      });
      this.eachBars(function (bar) {
        bar.save();
      });
      this.render();
    },
    eachBars: function eachBars(callback) {
      helpers.each(this.datasets, function (dataset, datasetIndex) {
        helpers.each(dataset.bars, callback, this, datasetIndex);
      }, this);
    },
    getBarsAtEvent: function getBarsAtEvent(e) {
      var barsArray = [],
          eventPosition = helpers.getRelativePosition(e),
          datasetIterator = function datasetIterator(dataset) {
        barsArray.push(dataset.bars[barIndex]);
      },
          barIndex;

      for (var datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++) {
        for (barIndex = 0; barIndex < this.datasets[datasetIndex].bars.length; barIndex++) {
          if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x, eventPosition.y)) {
            helpers.each(this.datasets, datasetIterator);
            return barsArray;
          }
        }
      }

      return barsArray;
    },
    buildScale: function buildScale(labels) {
      var self = this;

      var dataTotal = function dataTotal() {
        var values = [];
        self.eachBars(function (bar) {
          values.push(bar.value);
        });
        return values;
      };

      var scaleOptions = {
        templateString: this.options.scaleLabel,
        height: this.chart.height,
        width: this.chart.width,
        ctx: this.chart.ctx,
        textColor: this.options.scaleFontColor,
        fontSize: this.options.scaleFontSize,
        fontStyle: this.options.scaleFontStyle,
        fontFamily: this.options.scaleFontFamily,
        valuesCount: labels.length,
        beginAtZero: this.options.scaleBeginAtZero,
        integersOnly: this.options.scaleIntegersOnly,
        calculateYRange: function calculateYRange(currentHeight) {
          var updatedRanges = helpers.calculateScaleRange(dataTotal(), currentHeight, this.fontSize, this.beginAtZero, this.integersOnly);
          helpers.extend(this, updatedRanges);
        },
        xLabels: labels,
        font: helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
        lineWidth: this.options.scaleLineWidth,
        lineColor: this.options.scaleLineColor,
        showHorizontalLines: this.options.scaleShowHorizontalLines,
        showVerticalLines: this.options.scaleShowVerticalLines,
        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
        padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
        showLabels: this.options.scaleShowLabels,
        display: this.options.showScale
      };

      if (this.options.scaleOverride) {
        helpers.extend(scaleOptions, {
          calculateYRange: helpers.noop,
          steps: this.options.scaleSteps,
          stepValue: this.options.scaleStepWidth,
          min: this.options.scaleStartValue,
          max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
        });
      }

      this.scale = new this.ScaleClass(scaleOptions);
    },
    addData: function addData(valuesArray, label) {
      //Map the values array for each of the datasets
      helpers.each(valuesArray, function (value, datasetIndex) {
        //Add a new point for each piece of data, passing any required data to draw.
        this.datasets[datasetIndex].bars.push(new this.BarClass({
          value: value,
          label: label,
          x: this.scale.calculateBarX(this.datasets.length, datasetIndex, this.scale.valuesCount + 1),
          y: this.scale.endPoint,
          width: this.scale.calculateBarWidth(this.datasets.length),
          base: this.scale.endPoint,
          strokeColor: this.datasets[datasetIndex].strokeColor,
          fillColor: this.datasets[datasetIndex].fillColor
        }));
      }, this);
      this.scale.addXLabel(label); //Then re-render the chart.

      this.update();
    },
    removeData: function removeData() {
      this.scale.removeXLabel(); //Then re-render the chart.

      helpers.each(this.datasets, function (dataset) {
        dataset.bars.shift();
      }, this);
      this.update();
    },
    reflow: function reflow() {
      helpers.extend(this.BarClass.prototype, {
        y: this.scale.endPoint,
        base: this.scale.endPoint
      });
      var newScaleProps = helpers.extend({
        height: this.chart.height,
        width: this.chart.width
      });
      this.scale.update(newScaleProps);
    },
    draw: function draw(ease) {
      var easingDecimal = ease || 1;
      this.clear();
      var ctx = this.chart.ctx;
      this.scale.draw(easingDecimal); //Draw all the bars for each dataset

      helpers.each(this.datasets, function (dataset, datasetIndex) {
        helpers.each(dataset.bars, function (bar, index) {
          if (bar.hasValue()) {
            bar.base = this.scale.endPoint; //Transition then draw

            bar.transition({
              x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
              y: this.scale.calculateY(bar.value),
              width: this.scale.calculateBarWidth(this.datasets.length)
            }, easingDecimal).draw();
          }
        }, this);
      }, this);
    }
  });
}).call(this);
(function () {
  "use strict";

  var root = this,
      Chart = root.Chart,
      //Cache a local reference to Chart.helpers
  helpers = Chart.helpers;
  var defaultConfig = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,
    //String - The colour of each segment stroke
    segmentStrokeColor: "#fff",
    //Number - The width of each segment stroke
    segmentStrokeWidth: 2,
    //The percentage of the chart that we cut out of the middle.
    percentageInnerCutout: 50,
    //Number - Amount of animation steps
    animationSteps: 100,
    //String - Animation easing effect
    animationEasing: "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
  };
  Chart.Type.extend({
    //Passing in a name registers this chart in the Chart namespace
    name: "Doughnut",
    //Providing a defaults will also register the deafults in the chart namespace
    defaults: defaultConfig,
    //Initialize is fired when the chart is initialized - Data is passed in as a parameter
    //Config is automatically merged by the core of Chart.js, and is available at this.options
    initialize: function initialize(data) {
      //Declare segments as a static property to prevent inheriting across the Chart type prototype
      this.segments = [];
      this.outerRadius = (helpers.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2;
      this.SegmentArc = Chart.Arc.extend({
        ctx: this.chart.ctx,
        x: this.chart.width / 2,
        y: this.chart.height / 2
      }); //Set up tooltip events on the chart

      if (this.options.showTooltips) {
        helpers.bindEvents(this, this.options.tooltipEvents, function (evt) {
          var activeSegments = evt.type !== 'mouseout' ? this.getSegmentsAtEvent(evt) : [];
          helpers.each(this.segments, function (segment) {
            segment.restore(["fillColor"]);
          });
          helpers.each(activeSegments, function (activeSegment) {
            activeSegment.fillColor = activeSegment.highlightColor;
          });
          this.showTooltip(activeSegments);
        });
      }

      this.calculateTotal(data);
      helpers.each(data, function (datapoint, index) {
        this.addData(datapoint, index, true);
      }, this);
      this.render();
    },
    getSegmentsAtEvent: function getSegmentsAtEvent(e) {
      var segmentsArray = [];
      var location = helpers.getRelativePosition(e);
      helpers.each(this.segments, function (segment) {
        if (segment.inRange(location.x, location.y)) segmentsArray.push(segment);
      }, this);
      return segmentsArray;
    },
    addData: function addData(segment, atIndex, silent) {
      var index = atIndex || this.segments.length;
      this.segments.splice(index, 0, new this.SegmentArc({
        value: segment.value,
        outerRadius: this.options.animateScale ? 0 : this.outerRadius,
        innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
        fillColor: segment.color,
        highlightColor: segment.highlight || segment.color,
        showStroke: this.options.segmentShowStroke,
        strokeWidth: this.options.segmentStrokeWidth,
        strokeColor: this.options.segmentStrokeColor,
        startAngle: Math.PI * 1.5,
        circumference: this.options.animateRotate ? 0 : this.calculateCircumference(segment.value),
        label: segment.label
      }));

      if (!silent) {
        this.reflow();
        this.update();
      }
    },
    calculateCircumference: function calculateCircumference(value) {
      return Math.PI * 2 * (Math.abs(value) / this.total);
    },
    calculateTotal: function calculateTotal(data) {
      this.total = 0;
      helpers.each(data, function (segment) {
        this.total += Math.abs(segment.value);
      }, this);
    },
    update: function update() {
      this.calculateTotal(this.segments); // Reset any highlight colours before updating.

      helpers.each(this.activeElements, function (activeElement) {
        activeElement.restore(['fillColor']);
      });
      helpers.each(this.segments, function (segment) {
        segment.save();
      });
      this.render();
    },
    removeData: function removeData(atIndex) {
      var indexToDelete = helpers.isNumber(atIndex) ? atIndex : this.segments.length - 1;
      this.segments.splice(indexToDelete, 1);
      this.reflow();
      this.update();
    },
    reflow: function reflow() {
      helpers.extend(this.SegmentArc.prototype, {
        x: this.chart.width / 2,
        y: this.chart.height / 2
      });
      this.outerRadius = (helpers.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2;
      helpers.each(this.segments, function (segment) {
        segment.update({
          outerRadius: this.outerRadius,
          innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
        });
      }, this);
    },
    draw: function draw(easeDecimal) {
      var animDecimal = easeDecimal ? easeDecimal : 1;
      this.clear();
      helpers.each(this.segments, function (segment, index) {
        segment.transition({
          circumference: this.calculateCircumference(segment.value),
          outerRadius: this.outerRadius,
          innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
        }, animDecimal);
        segment.endAngle = segment.startAngle + segment.circumference;
        segment.draw();

        if (index === 0) {
          segment.startAngle = Math.PI * 1.5;
        } //Check to see if it's the last segment, if not get the next and update the start angle


        if (index < this.segments.length - 1) {
          this.segments[index + 1].startAngle = segment.endAngle;
        }
      }, this);
    }
  });
  Chart.types.Doughnut.extend({
    name: "Pie",
    defaults: helpers.merge(defaultConfig, {
      percentageInnerCutout: 0
    })
  });
}).call(this);
(function () {
  "use strict";

  var root = this,
      Chart = root.Chart,
      helpers = Chart.helpers;
  var defaultConfig = {
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: true,
    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",
    //Number - Width of the grid lines
    scaleGridLineWidth: 1,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
    //Boolean - Whether the line is curved between points
    bezierCurve: true,
    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0.4,
    //Boolean - Whether to show a dot for each point
    pointDot: true,
    //Number - Radius of each point dot in pixels
    pointDotRadius: 4,
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,
    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,
    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,
    //Boolean - Whether to fill the dataset with a colour
    datasetFill: true,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
  };
  Chart.Type.extend({
    name: "Line",
    defaults: defaultConfig,
    initialize: function initialize(data) {
      //Declare the extension of the default point, to cater for the options passed in to the constructor
      this.PointClass = Chart.Point.extend({
        strokeWidth: this.options.pointDotStrokeWidth,
        radius: this.options.pointDotRadius,
        display: this.options.pointDot,
        hitDetectionRadius: this.options.pointHitDetectionRadius,
        ctx: this.chart.ctx,
        inRange: function inRange(mouseX) {
          return Math.pow(mouseX - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2);
        }
      });
      this.datasets = []; //Set up tooltip events on the chart

      if (this.options.showTooltips) {
        helpers.bindEvents(this, this.options.tooltipEvents, function (evt) {
          var activePoints = evt.type !== 'mouseout' ? this.getPointsAtEvent(evt) : [];
          this.eachPoints(function (point) {
            point.restore(['fillColor', 'strokeColor']);
          });
          helpers.each(activePoints, function (activePoint) {
            activePoint.fillColor = activePoint.highlightFill;
            activePoint.strokeColor = activePoint.highlightStroke;
          });
          this.showTooltip(activePoints);
        });
      } //Iterate through each of the datasets, and build this into a property of the chart


      helpers.each(data.datasets, function (dataset) {
        var datasetObject = {
          label: dataset.label || null,
          fillColor: dataset.fillColor,
          strokeColor: dataset.strokeColor,
          pointColor: dataset.pointColor,
          pointStrokeColor: dataset.pointStrokeColor,
          points: []
        };
        this.datasets.push(datasetObject);
        helpers.each(dataset.data, function (dataPoint, index) {
          //Add a new point for each piece of data, passing any required data to draw.
          datasetObject.points.push(new this.PointClass({
            value: dataPoint,
            label: data.labels[index],
            datasetLabel: dataset.label,
            strokeColor: dataset.pointStrokeColor,
            fillColor: dataset.pointColor,
            highlightFill: dataset.pointHighlightFill || dataset.pointColor,
            highlightStroke: dataset.pointHighlightStroke || dataset.pointStrokeColor
          }));
        }, this);
        this.buildScale(data.labels);
        this.eachPoints(function (point, index) {
          helpers.extend(point, {
            x: this.scale.calculateX(index),
            y: this.scale.endPoint
          });
          point.save();
        }, this);
      }, this);
      this.render();
    },
    update: function update() {
      this.scale.update(); // Reset any highlight colours before updating.

      helpers.each(this.activeElements, function (activeElement) {
        activeElement.restore(['fillColor', 'strokeColor']);
      });
      this.eachPoints(function (point) {
        point.save();
      });
      this.render();
    },
    eachPoints: function eachPoints(callback) {
      helpers.each(this.datasets, function (dataset) {
        helpers.each(dataset.points, callback, this);
      }, this);
    },
    getPointsAtEvent: function getPointsAtEvent(e) {
      var pointsArray = [],
          eventPosition = helpers.getRelativePosition(e);
      helpers.each(this.datasets, function (dataset) {
        helpers.each(dataset.points, function (point) {
          if (point.inRange(eventPosition.x, eventPosition.y)) pointsArray.push(point);
        });
      }, this);
      return pointsArray;
    },
    buildScale: function buildScale(labels) {
      var self = this;

      var dataTotal = function dataTotal() {
        var values = [];
        self.eachPoints(function (point) {
          values.push(point.value);
        });
        return values;
      };

      var scaleOptions = {
        templateString: this.options.scaleLabel,
        height: this.chart.height,
        width: this.chart.width,
        ctx: this.chart.ctx,
        textColor: this.options.scaleFontColor,
        fontSize: this.options.scaleFontSize,
        fontStyle: this.options.scaleFontStyle,
        fontFamily: this.options.scaleFontFamily,
        valuesCount: labels.length,
        beginAtZero: this.options.scaleBeginAtZero,
        integersOnly: this.options.scaleIntegersOnly,
        calculateYRange: function calculateYRange(currentHeight) {
          var updatedRanges = helpers.calculateScaleRange(dataTotal(), currentHeight, this.fontSize, this.beginAtZero, this.integersOnly);
          helpers.extend(this, updatedRanges);
        },
        xLabels: labels,
        font: helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
        lineWidth: this.options.scaleLineWidth,
        lineColor: this.options.scaleLineColor,
        showHorizontalLines: this.options.scaleShowHorizontalLines,
        showVerticalLines: this.options.scaleShowVerticalLines,
        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
        padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
        showLabels: this.options.scaleShowLabels,
        display: this.options.showScale
      };

      if (this.options.scaleOverride) {
        helpers.extend(scaleOptions, {
          calculateYRange: helpers.noop,
          steps: this.options.scaleSteps,
          stepValue: this.options.scaleStepWidth,
          min: this.options.scaleStartValue,
          max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
        });
      }

      this.scale = new Chart.Scale(scaleOptions);
    },
    addData: function addData(valuesArray, label) {
      //Map the values array for each of the datasets
      helpers.each(valuesArray, function (value, datasetIndex) {
        //Add a new point for each piece of data, passing any required data to draw.
        this.datasets[datasetIndex].points.push(new this.PointClass({
          value: value,
          label: label,
          x: this.scale.calculateX(this.scale.valuesCount + 1),
          y: this.scale.endPoint,
          strokeColor: this.datasets[datasetIndex].pointStrokeColor,
          fillColor: this.datasets[datasetIndex].pointColor
        }));
      }, this);
      this.scale.addXLabel(label); //Then re-render the chart.

      this.update();
    },
    removeData: function removeData() {
      this.scale.removeXLabel(); //Then re-render the chart.

      helpers.each(this.datasets, function (dataset) {
        dataset.points.shift();
      }, this);
      this.update();
    },
    reflow: function reflow() {
      var newScaleProps = helpers.extend({
        height: this.chart.height,
        width: this.chart.width
      });
      this.scale.update(newScaleProps);
    },
    draw: function draw(ease) {
      var easingDecimal = ease || 1;
      this.clear();
      var ctx = this.chart.ctx; // Some helper methods for getting the next/prev points

      var hasValue = function hasValue(item) {
        return item.value !== null;
      },
          nextPoint = function nextPoint(point, collection, index) {
        return helpers.findNextWhere(collection, hasValue, index) || point;
      },
          previousPoint = function previousPoint(point, collection, index) {
        return helpers.findPreviousWhere(collection, hasValue, index) || point;
      };

      this.scale.draw(easingDecimal);
      helpers.each(this.datasets, function (dataset) {
        var pointsWithValues = helpers.where(dataset.points, hasValue); //Transition each point first so that the line and point drawing isn't out of sync
        //We can use this extra loop to calculate the control points of this dataset also in this loop

        helpers.each(dataset.points, function (point, index) {
          if (point.hasValue()) {
            point.transition({
              y: this.scale.calculateY(point.value),
              x: this.scale.calculateX(index)
            }, easingDecimal);
          }
        }, this); // Control points need to be calculated in a seperate loop, because we need to know the current x/y of the point
        // This would cause issues when there is no animation, because the y of the next point would be 0, so beziers would be skewed

        if (this.options.bezierCurve) {
          helpers.each(pointsWithValues, function (point, index) {
            var tension = index > 0 && index < pointsWithValues.length - 1 ? this.options.bezierCurveTension : 0;
            point.controlPoints = helpers.splineCurve(previousPoint(point, pointsWithValues, index), point, nextPoint(point, pointsWithValues, index), tension); // Prevent the bezier going outside of the bounds of the graph
            // Cap puter bezier handles to the upper/lower scale bounds

            if (point.controlPoints.outer.y > this.scale.endPoint) {
              point.controlPoints.outer.y = this.scale.endPoint;
            } else if (point.controlPoints.outer.y < this.scale.startPoint) {
              point.controlPoints.outer.y = this.scale.startPoint;
            } // Cap inner bezier handles to the upper/lower scale bounds


            if (point.controlPoints.inner.y > this.scale.endPoint) {
              point.controlPoints.inner.y = this.scale.endPoint;
            } else if (point.controlPoints.inner.y < this.scale.startPoint) {
              point.controlPoints.inner.y = this.scale.startPoint;
            }
          }, this);
        } //Draw the line between all the points


        ctx.lineWidth = this.options.datasetStrokeWidth;
        ctx.strokeStyle = dataset.strokeColor;
        ctx.beginPath();
        helpers.each(pointsWithValues, function (point, index) {
          if (index === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            if (this.options.bezierCurve) {
              var previous = previousPoint(point, pointsWithValues, index);
              ctx.bezierCurveTo(previous.controlPoints.outer.x, previous.controlPoints.outer.y, point.controlPoints.inner.x, point.controlPoints.inner.y, point.x, point.y);
            } else {
              ctx.lineTo(point.x, point.y);
            }
          }
        }, this);
        ctx.stroke();

        if (this.options.datasetFill && pointsWithValues.length > 0) {
          //Round off the line by going to the base of the chart, back to the start, then fill.
          ctx.lineTo(pointsWithValues[pointsWithValues.length - 1].x, this.scale.endPoint);
          ctx.lineTo(pointsWithValues[0].x, this.scale.endPoint);
          ctx.fillStyle = dataset.fillColor;
          ctx.closePath();
          ctx.fill();
        } //Now draw the points over the line
        //A little inefficient double looping, but better than the line
        //lagging behind the point positions


        helpers.each(pointsWithValues, function (point) {
          point.draw();
        });
      }, this);
    }
  });
}).call(this);
(function () {
  "use strict";

  var root = this,
      Chart = root.Chart,
      //Cache a local reference to Chart.helpers
  helpers = Chart.helpers;
  var defaultConfig = {
    //Boolean - Show a backdrop to the scale label
    scaleShowLabelBackdrop: true,
    //String - The colour of the label backdrop
    scaleBackdropColor: "rgba(255,255,255,0.75)",
    // Boolean - Whether the scale should begin at zero
    scaleBeginAtZero: true,
    //Number - The backdrop padding above & below the label in pixels
    scaleBackdropPaddingY: 2,
    //Number - The backdrop padding to the side of the label in pixels
    scaleBackdropPaddingX: 2,
    //Boolean - Show line for each value in the scale
    scaleShowLine: true,
    //Boolean - Stroke a line around each segment in the chart
    segmentShowStroke: true,
    //String - The colour of the stroke on each segement.
    segmentStrokeColor: "#fff",
    //Number - The width of the stroke value in pixels
    segmentStrokeWidth: 2,
    //Number - Amount of animation steps
    animationSteps: 100,
    //String - Animation easing effect.
    animationEasing: "easeOutBounce",
    //Boolean - Whether to animate the rotation of the chart
    animateRotate: true,
    //Boolean - Whether to animate scaling the chart from the centre
    animateScale: false,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
  };
  Chart.Type.extend({
    //Passing in a name registers this chart in the Chart namespace
    name: "PolarArea",
    //Providing a defaults will also register the deafults in the chart namespace
    defaults: defaultConfig,
    //Initialize is fired when the chart is initialized - Data is passed in as a parameter
    //Config is automatically merged by the core of Chart.js, and is available at this.options
    initialize: function initialize(data) {
      this.segments = []; //Declare segment class as a chart instance specific class, so it can share props for this instance

      this.SegmentArc = Chart.Arc.extend({
        showStroke: this.options.segmentShowStroke,
        strokeWidth: this.options.segmentStrokeWidth,
        strokeColor: this.options.segmentStrokeColor,
        ctx: this.chart.ctx,
        innerRadius: 0,
        x: this.chart.width / 2,
        y: this.chart.height / 2
      });
      this.scale = new Chart.RadialScale({
        display: this.options.showScale,
        fontStyle: this.options.scaleFontStyle,
        fontSize: this.options.scaleFontSize,
        fontFamily: this.options.scaleFontFamily,
        fontColor: this.options.scaleFontColor,
        showLabels: this.options.scaleShowLabels,
        showLabelBackdrop: this.options.scaleShowLabelBackdrop,
        backdropColor: this.options.scaleBackdropColor,
        backdropPaddingY: this.options.scaleBackdropPaddingY,
        backdropPaddingX: this.options.scaleBackdropPaddingX,
        lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
        lineColor: this.options.scaleLineColor,
        lineArc: true,
        width: this.chart.width,
        height: this.chart.height,
        xCenter: this.chart.width / 2,
        yCenter: this.chart.height / 2,
        ctx: this.chart.ctx,
        templateString: this.options.scaleLabel,
        valuesCount: data.length
      });
      this.updateScaleRange(data);
      this.scale.update();
      helpers.each(data, function (segment, index) {
        this.addData(segment, index, true);
      }, this); //Set up tooltip events on the chart

      if (this.options.showTooltips) {
        helpers.bindEvents(this, this.options.tooltipEvents, function (evt) {
          var activeSegments = evt.type !== 'mouseout' ? this.getSegmentsAtEvent(evt) : [];
          helpers.each(this.segments, function (segment) {
            segment.restore(["fillColor"]);
          });
          helpers.each(activeSegments, function (activeSegment) {
            activeSegment.fillColor = activeSegment.highlightColor;
          });
          this.showTooltip(activeSegments);
        });
      }

      this.render();
    },
    getSegmentsAtEvent: function getSegmentsAtEvent(e) {
      var segmentsArray = [];
      var location = helpers.getRelativePosition(e);
      helpers.each(this.segments, function (segment) {
        if (segment.inRange(location.x, location.y)) segmentsArray.push(segment);
      }, this);
      return segmentsArray;
    },
    addData: function addData(segment, atIndex, silent) {
      var index = atIndex || this.segments.length;
      this.segments.splice(index, 0, new this.SegmentArc({
        fillColor: segment.color,
        highlightColor: segment.highlight || segment.color,
        label: segment.label,
        value: segment.value,
        outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(segment.value),
        circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
        startAngle: Math.PI * 1.5
      }));

      if (!silent) {
        this.reflow();
        this.update();
      }
    },
    removeData: function removeData(atIndex) {
      var indexToDelete = helpers.isNumber(atIndex) ? atIndex : this.segments.length - 1;
      this.segments.splice(indexToDelete, 1);
      this.reflow();
      this.update();
    },
    calculateTotal: function calculateTotal(data) {
      this.total = 0;
      helpers.each(data, function (segment) {
        this.total += segment.value;
      }, this);
      this.scale.valuesCount = this.segments.length;
    },
    updateScaleRange: function updateScaleRange(datapoints) {
      var valuesArray = [];
      helpers.each(datapoints, function (segment) {
        valuesArray.push(segment.value);
      });
      var scaleSizes = this.options.scaleOverride ? {
        steps: this.options.scaleSteps,
        stepValue: this.options.scaleStepWidth,
        min: this.options.scaleStartValue,
        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
      } : helpers.calculateScaleRange(valuesArray, helpers.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
      helpers.extend(this.scale, scaleSizes, {
        size: helpers.min([this.chart.width, this.chart.height]),
        xCenter: this.chart.width / 2,
        yCenter: this.chart.height / 2
      });
    },
    update: function update() {
      this.calculateTotal(this.segments);
      helpers.each(this.segments, function (segment) {
        segment.save();
      });
      this.reflow();
      this.render();
    },
    reflow: function reflow() {
      helpers.extend(this.SegmentArc.prototype, {
        x: this.chart.width / 2,
        y: this.chart.height / 2
      });
      this.updateScaleRange(this.segments);
      this.scale.update();
      helpers.extend(this.scale, {
        xCenter: this.chart.width / 2,
        yCenter: this.chart.height / 2
      });
      helpers.each(this.segments, function (segment) {
        segment.update({
          outerRadius: this.scale.calculateCenterOffset(segment.value)
        });
      }, this);
    },
    draw: function draw(ease) {
      var easingDecimal = ease || 1; //Clear & draw the canvas

      this.clear();
      helpers.each(this.segments, function (segment, index) {
        segment.transition({
          circumference: this.scale.getCircumference(),
          outerRadius: this.scale.calculateCenterOffset(segment.value)
        }, easingDecimal);
        segment.endAngle = segment.startAngle + segment.circumference; // If we've removed the first segment we need to set the first one to
        // start at the top.

        if (index === 0) {
          segment.startAngle = Math.PI * 1.5;
        } //Check to see if it's the last segment, if not get the next and update the start angle


        if (index < this.segments.length - 1) {
          this.segments[index + 1].startAngle = segment.endAngle;
        }

        segment.draw();
      }, this);
      this.scale.draw();
    }
  });
}).call(this);
(function () {
  "use strict";

  var root = this,
      Chart = root.Chart,
      helpers = Chart.helpers;
  Chart.Type.extend({
    name: "Radar",
    defaults: {
      //Boolean - Whether to show lines for each scale point
      scaleShowLine: true,
      //Boolean - Whether we show the angle lines out of the radar
      angleShowLineOut: true,
      //Boolean - Whether to show labels on the scale
      scaleShowLabels: false,
      // Boolean - Whether the scale should begin at zero
      scaleBeginAtZero: true,
      //String - Colour of the angle line
      angleLineColor: "rgba(0,0,0,.1)",
      //Number - Pixel width of the angle line
      angleLineWidth: 1,
      //String - Point label font declaration
      pointLabelFontFamily: "'Arial'",
      //String - Point label font weight
      pointLabelFontStyle: "normal",
      //Number - Point label font size in pixels
      pointLabelFontSize: 10,
      //String - Point label font colour
      pointLabelFontColor: "#666",
      //Boolean - Whether to show a dot for each point
      pointDot: true,
      //Number - Radius of each point dot in pixels
      pointDotRadius: 3,
      //Number - Pixel width of point dot stroke
      pointDotStrokeWidth: 1,
      //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius: 20,
      //Boolean - Whether to show a stroke for datasets
      datasetStroke: true,
      //Number - Pixel width of dataset stroke
      datasetStrokeWidth: 2,
      //Boolean - Whether to fill the dataset with a colour
      datasetFill: true,
      //String - A legend template
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    },
    initialize: function initialize(data) {
      this.PointClass = Chart.Point.extend({
        strokeWidth: this.options.pointDotStrokeWidth,
        radius: this.options.pointDotRadius,
        display: this.options.pointDot,
        hitDetectionRadius: this.options.pointHitDetectionRadius,
        ctx: this.chart.ctx
      });
      this.datasets = [];
      this.buildScale(data); //Set up tooltip events on the chart

      if (this.options.showTooltips) {
        helpers.bindEvents(this, this.options.tooltipEvents, function (evt) {
          var activePointsCollection = evt.type !== 'mouseout' ? this.getPointsAtEvent(evt) : [];
          this.eachPoints(function (point) {
            point.restore(['fillColor', 'strokeColor']);
          });
          helpers.each(activePointsCollection, function (activePoint) {
            activePoint.fillColor = activePoint.highlightFill;
            activePoint.strokeColor = activePoint.highlightStroke;
          });
          this.showTooltip(activePointsCollection);
        });
      } //Iterate through each of the datasets, and build this into a property of the chart


      helpers.each(data.datasets, function (dataset) {
        var datasetObject = {
          label: dataset.label || null,
          fillColor: dataset.fillColor,
          strokeColor: dataset.strokeColor,
          pointColor: dataset.pointColor,
          pointStrokeColor: dataset.pointStrokeColor,
          points: []
        };
        this.datasets.push(datasetObject);
        helpers.each(dataset.data, function (dataPoint, index) {
          //Add a new point for each piece of data, passing any required data to draw.
          var pointPosition;

          if (!this.scale.animation) {
            pointPosition = this.scale.getPointPosition(index, this.scale.calculateCenterOffset(dataPoint));
          }

          datasetObject.points.push(new this.PointClass({
            value: dataPoint,
            label: data.labels[index],
            datasetLabel: dataset.label,
            x: this.options.animation ? this.scale.xCenter : pointPosition.x,
            y: this.options.animation ? this.scale.yCenter : pointPosition.y,
            strokeColor: dataset.pointStrokeColor,
            fillColor: dataset.pointColor,
            highlightFill: dataset.pointHighlightFill || dataset.pointColor,
            highlightStroke: dataset.pointHighlightStroke || dataset.pointStrokeColor
          }));
        }, this);
      }, this);
      this.render();
    },
    eachPoints: function eachPoints(callback) {
      helpers.each(this.datasets, function (dataset) {
        helpers.each(dataset.points, callback, this);
      }, this);
    },
    getPointsAtEvent: function getPointsAtEvent(evt) {
      var mousePosition = helpers.getRelativePosition(evt),
          fromCenter = helpers.getAngleFromPoint({
        x: this.scale.xCenter,
        y: this.scale.yCenter
      }, mousePosition);
      var anglePerIndex = Math.PI * 2 / this.scale.valuesCount,
          pointIndex = Math.round((fromCenter.angle - Math.PI * 1.5) / anglePerIndex),
          activePointsCollection = []; // If we're at the top, make the pointIndex 0 to get the first of the array.

      if (pointIndex >= this.scale.valuesCount || pointIndex < 0) {
        pointIndex = 0;
      }

      if (fromCenter.distance <= this.scale.drawingArea) {
        helpers.each(this.datasets, function (dataset) {
          activePointsCollection.push(dataset.points[pointIndex]);
        });
      }

      return activePointsCollection;
    },
    buildScale: function buildScale(data) {
      this.scale = new Chart.RadialScale({
        display: this.options.showScale,
        fontStyle: this.options.scaleFontStyle,
        fontSize: this.options.scaleFontSize,
        fontFamily: this.options.scaleFontFamily,
        fontColor: this.options.scaleFontColor,
        showLabels: this.options.scaleShowLabels,
        showLabelBackdrop: this.options.scaleShowLabelBackdrop,
        backdropColor: this.options.scaleBackdropColor,
        backdropPaddingY: this.options.scaleBackdropPaddingY,
        backdropPaddingX: this.options.scaleBackdropPaddingX,
        lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
        lineColor: this.options.scaleLineColor,
        angleLineColor: this.options.angleLineColor,
        angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
        // Point labels at the edge of each line
        pointLabelFontColor: this.options.pointLabelFontColor,
        pointLabelFontSize: this.options.pointLabelFontSize,
        pointLabelFontFamily: this.options.pointLabelFontFamily,
        pointLabelFontStyle: this.options.pointLabelFontStyle,
        height: this.chart.height,
        width: this.chart.width,
        xCenter: this.chart.width / 2,
        yCenter: this.chart.height / 2,
        ctx: this.chart.ctx,
        templateString: this.options.scaleLabel,
        labels: data.labels,
        valuesCount: data.datasets[0].data.length
      });
      this.scale.setScaleSize();
      this.updateScaleRange(data.datasets);
      this.scale.buildYLabels();
    },
    updateScaleRange: function updateScaleRange(datasets) {
      var valuesArray = function () {
        var totalDataArray = [];
        helpers.each(datasets, function (dataset) {
          if (dataset.data) {
            totalDataArray = totalDataArray.concat(dataset.data);
          } else {
            helpers.each(dataset.points, function (point) {
              totalDataArray.push(point.value);
            });
          }
        });
        return totalDataArray;
      }();

      var scaleSizes = this.options.scaleOverride ? {
        steps: this.options.scaleSteps,
        stepValue: this.options.scaleStepWidth,
        min: this.options.scaleStartValue,
        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
      } : helpers.calculateScaleRange(valuesArray, helpers.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
      helpers.extend(this.scale, scaleSizes);
    },
    addData: function addData(valuesArray, label) {
      //Map the values array for each of the datasets
      this.scale.valuesCount++;
      helpers.each(valuesArray, function (value, datasetIndex) {
        var pointPosition = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(value));
        this.datasets[datasetIndex].points.push(new this.PointClass({
          value: value,
          label: label,
          x: pointPosition.x,
          y: pointPosition.y,
          strokeColor: this.datasets[datasetIndex].pointStrokeColor,
          fillColor: this.datasets[datasetIndex].pointColor
        }));
      }, this);
      this.scale.labels.push(label);
      this.reflow();
      this.update();
    },
    removeData: function removeData() {
      this.scale.valuesCount--;
      this.scale.labels.shift();
      helpers.each(this.datasets, function (dataset) {
        dataset.points.shift();
      }, this);
      this.reflow();
      this.update();
    },
    update: function update() {
      this.eachPoints(function (point) {
        point.save();
      });
      this.reflow();
      this.render();
    },
    reflow: function reflow() {
      helpers.extend(this.scale, {
        width: this.chart.width,
        height: this.chart.height,
        size: helpers.min([this.chart.width, this.chart.height]),
        xCenter: this.chart.width / 2,
        yCenter: this.chart.height / 2
      });
      this.updateScaleRange(this.datasets);
      this.scale.setScaleSize();
      this.scale.buildYLabels();
    },
    draw: function draw(ease) {
      var easeDecimal = ease || 1,
          ctx = this.chart.ctx;
      this.clear();
      this.scale.draw();
      helpers.each(this.datasets, function (dataset) {
        //Transition each point first so that the line and point drawing isn't out of sync
        helpers.each(dataset.points, function (point, index) {
          if (point.hasValue()) {
            point.transition(this.scale.getPointPosition(index, this.scale.calculateCenterOffset(point.value)), easeDecimal);
          }
        }, this); //Draw the line between all the points

        ctx.lineWidth = this.options.datasetStrokeWidth;
        ctx.strokeStyle = dataset.strokeColor;
        ctx.beginPath();
        helpers.each(dataset.points, function (point, index) {
          if (index === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        }, this);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = dataset.fillColor;
        ctx.fill(); //Now draw the points over the line
        //A little inefficient double looping, but better than the line
        //lagging behind the point positions

        helpers.each(dataset.points, function (point) {
          if (point.hasValue()) {
            point.draw();
          }
        });
      }, this);
    }
  });
}).call(this);
/*!
 DataTables 1.10.16
 ©2008-2017 SpryMedia Ltd - datatables.net/license
*/

(function (h) {
  "function" === typeof define && define.amd ? define(["jquery"], function (E) {
    return h(E, window, document);
  }) : "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = function (E, G) {
    E || (E = window);
    G || (G = "undefined" !== typeof window ? require("jquery") : require("jquery")(E));
    return h(G, E, E.document);
  } : h(jQuery, window, document);
})(function (h, E, G, k) {
  function X(a) {
    var b,
        c,
        d = {};
    h.each(a, function (e) {
      if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()), d[c] = e, "o" === b[1] && X(a[e]);
    });
    a._hungarianMap = d;
  }

  function I(a, b, c) {
    a._hungarianMap || X(a);
    var d;
    h.each(b, function (e) {
      d = a._hungarianMap[e];
      if (d !== k && (c || b[d] === k)) "o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), I(a[d], b[d], c)) : b[d] = b[e];
    });
  }

  function Ca(a) {
    var b = m.defaults.oLanguage,
        c = a.sZeroRecords;
    !a.sEmptyTable && c && "No data available in table" === b.sEmptyTable && F(a, a, "sZeroRecords", "sEmptyTable");
    !a.sLoadingRecords && c && "Loading..." === b.sLoadingRecords && F(a, a, "sZeroRecords", "sLoadingRecords");
    a.sInfoThousands && (a.sThousands = a.sInfoThousands);
    (a = a.sDecimal) && cb(a);
  }

  function db(a) {
    A(a, "ordering", "bSort");
    A(a, "orderMulti", "bSortMulti");
    A(a, "orderClasses", "bSortClasses");
    A(a, "orderCellsTop", "bSortCellsTop");
    A(a, "order", "aaSorting");
    A(a, "orderFixed", "aaSortingFixed");
    A(a, "paging", "bPaginate");
    A(a, "pagingType", "sPaginationType");
    A(a, "pageLength", "iDisplayLength");
    A(a, "searching", "bFilter");
    "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
    "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
    if (a = a.aoSearchCols) for (var b = 0, c = a.length; b < c; b++) {
      a[b] && I(m.models.oSearch, a[b]);
    }
  }

  function eb(a) {
    A(a, "orderable", "bSortable");
    A(a, "orderData", "aDataSort");
    A(a, "orderSequence", "asSorting");
    A(a, "orderDataType", "sortDataType");
    var b = a.aDataSort;
    "number" === typeof b && !h.isArray(b) && (a.aDataSort = [b]);
  }

  function fb(a) {
    if (!m.__browser) {
      var b = {};
      m.__browser = b;
      var c = h("<div/>").css({
        position: "fixed",
        top: 0,
        left: -1 * h(E).scrollLeft(),
        height: 1,
        width: 1,
        overflow: "hidden"
      }).append(h("<div/>").css({
        position: "absolute",
        top: 1,
        left: 1,
        width: 100,
        overflow: "scroll"
      }).append(h("<div/>").css({
        width: "100%",
        height: 10
      }))).appendTo("body"),
          d = c.children(),
          e = d.children();
      b.barWidth = d[0].offsetWidth - d[0].clientWidth;
      b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
      b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
      b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
      c.remove();
    }

    h.extend(a.oBrowser, m.__browser);
    a.oScroll.iBarWidth = m.__browser.barWidth;
  }

  function gb(a, b, c, d, e, f) {
    var g,
        j = !1;
    c !== k && (g = c, j = !0);

    for (; d !== e;) {
      a.hasOwnProperty(d) && (g = j ? b(g, a[d], d, a) : a[d], j = !0, d += f);
    }

    return g;
  }

  function Da(a, b) {
    var c = m.defaults.column,
        d = a.aoColumns.length,
        c = h.extend({}, m.models.oColumn, c, {
      nTh: b ? b : G.createElement("th"),
      sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
      aDataSort: c.aDataSort ? c.aDataSort : [d],
      mData: c.mData ? c.mData : d,
      idx: d
    });
    a.aoColumns.push(c);
    c = a.aoPreSearchCols;
    c[d] = h.extend({}, m.models.oSearch, c[d]);
    ja(a, d, h(b).data());
  }

  function ja(a, b, c) {
    var b = a.aoColumns[b],
        d = a.oClasses,
        e = h(b.nTh);

    if (!b.sWidthOrig) {
      b.sWidthOrig = e.attr("width") || null;
      var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
      f && (b.sWidthOrig = f[1]);
    }

    c !== k && null !== c && (eb(c), I(m.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), c.sClass && e.addClass(c.sClass), h.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort"));

    var g = b.mData,
        j = Q(g),
        i = b.mRender ? Q(b.mRender) : null,
        c = function c(a) {
      return "string" === typeof a && -1 !== a.indexOf("@");
    };

    b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
    b._setter = null;

    b.fnGetData = function (a, b, c) {
      var d = j(a, b, k, c);
      return i && b ? i(d, b, a, c) : d;
    };

    b.fnSetData = function (a, b, c) {
      return R(g)(a, b, c);
    };

    "number" !== typeof g && (a._rowReadObject = !0);
    a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
    a = -1 !== h.inArray("asc", b.asSorting);
    c = -1 !== h.inArray("desc", b.asSorting);
    !b.bSortable || !a && !c ? (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI);
  }

  function Y(a) {
    if (!1 !== a.oFeatures.bAutoWidth) {
      var b = a.aoColumns;
      Ea(a);

      for (var c = 0, d = b.length; c < d; c++) {
        b[c].nTh.style.width = b[c].sWidth;
      }
    }

    b = a.oScroll;
    ("" !== b.sY || "" !== b.sX) && ka(a);
    r(a, null, "column-sizing", [a]);
  }

  function Z(a, b) {
    var c = la(a, "bVisible");
    return "number" === typeof c[b] ? c[b] : null;
  }

  function $(a, b) {
    var c = la(a, "bVisible"),
        c = h.inArray(b, c);
    return -1 !== c ? c : null;
  }

  function aa(a) {
    var b = 0;
    h.each(a.aoColumns, function (a, d) {
      d.bVisible && "none" !== h(d.nTh).css("display") && b++;
    });
    return b;
  }

  function la(a, b) {
    var c = [];
    h.map(a.aoColumns, function (a, e) {
      a[b] && c.push(e);
    });
    return c;
  }

  function Fa(a) {
    var b = a.aoColumns,
        c = a.aoData,
        d = m.ext.type.detect,
        e,
        f,
        g,
        j,
        i,
        h,
        l,
        q,
        t;
    e = 0;

    for (f = b.length; e < f; e++) {
      if (l = b[e], t = [], !l.sType && l._sManualType) l.sType = l._sManualType;else if (!l.sType) {
        g = 0;

        for (j = d.length; g < j; g++) {
          i = 0;

          for (h = c.length; i < h; i++) {
            t[i] === k && (t[i] = B(a, i, e, "type"));
            q = d[g](t[i], a);
            if (!q && g !== d.length - 1) break;
            if ("html" === q) break;
          }

          if (q) {
            l.sType = q;
            break;
          }
        }

        l.sType || (l.sType = "string");
      }
    }
  }

  function hb(a, b, c, d) {
    var e,
        f,
        g,
        j,
        i,
        n,
        l = a.aoColumns;
    if (b) for (e = b.length - 1; 0 <= e; e--) {
      n = b[e];
      var q = n.targets !== k ? n.targets : n.aTargets;
      h.isArray(q) || (q = [q]);
      f = 0;

      for (g = q.length; f < g; f++) {
        if ("number" === typeof q[f] && 0 <= q[f]) {
          for (; l.length <= q[f];) {
            Da(a);
          }

          d(q[f], n);
        } else if ("number" === typeof q[f] && 0 > q[f]) d(l.length + q[f], n);else if ("string" === typeof q[f]) {
          j = 0;

          for (i = l.length; j < i; j++) {
            ("_all" == q[f] || h(l[j].nTh).hasClass(q[f])) && d(j, n);
          }
        }
      }
    }

    if (c) {
      e = 0;

      for (a = c.length; e < a; e++) {
        d(e, c[e]);
      }
    }
  }

  function M(a, b, c, d) {
    var e = a.aoData.length,
        f = h.extend(!0, {}, m.models.oRow, {
      src: c ? "dom" : "data",
      idx: e
    });
    f._aData = b;
    a.aoData.push(f);

    for (var g = a.aoColumns, j = 0, i = g.length; j < i; j++) {
      g[j].sType = null;
    }

    a.aiDisplayMaster.push(e);
    b = a.rowIdFn(b);
    b !== k && (a.aIds[b] = f);
    (c || !a.oFeatures.bDeferRender) && Ga(a, e, c, d);
    return e;
  }

  function ma(a, b) {
    var c;
    b instanceof h || (b = h(b));
    return b.map(function (b, e) {
      c = Ha(a, e);
      return M(a, c.data, e, c.cells);
    });
  }

  function B(a, b, c, d) {
    var e = a.iDraw,
        f = a.aoColumns[c],
        g = a.aoData[b]._aData,
        j = f.sDefaultContent,
        i = f.fnGetData(g, d, {
      settings: a,
      row: b,
      col: c
    });
    if (i === k) return a.iDrawError != e && null === j && (J(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), j;
    if ((i === g || null === i) && null !== j && d !== k) i = j;else if ("function" === typeof i) return i.call(g);
    return null === i && "display" == d ? "" : i;
  }

  function ib(a, b, c, d) {
    a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
      settings: a,
      row: b,
      col: c
    });
  }

  function Ia(a) {
    return h.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) {
      return a.replace(/\\\./g, ".");
    });
  }

  function Q(a) {
    if (h.isPlainObject(a)) {
      var b = {};
      h.each(a, function (a, c) {
        c && (b[a] = Q(c));
      });
      return function (a, c, f, g) {
        var j = b[c] || b._;
        return j !== k ? j(a, c, f, g) : a;
      };
    }

    if (null === a) return function (a) {
      return a;
    };
    if ("function" === typeof a) return function (b, c, f, g) {
      return a(b, c, f, g);
    };

    if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
      var c = function c(a, b, f) {
        var g, j;

        if ("" !== f) {
          j = Ia(f);

          for (var i = 0, n = j.length; i < n; i++) {
            f = j[i].match(ba);
            g = j[i].match(U);

            if (f) {
              j[i] = j[i].replace(ba, "");
              "" !== j[i] && (a = a[j[i]]);
              g = [];
              j.splice(0, i + 1);
              j = j.join(".");

              if (h.isArray(a)) {
                i = 0;

                for (n = a.length; i < n; i++) {
                  g.push(c(a[i], b, j));
                }
              }

              a = f[0].substring(1, f[0].length - 1);
              a = "" === a ? g : g.join(a);
              break;
            } else if (g) {
              j[i] = j[i].replace(U, "");
              a = a[j[i]]();
              continue;
            }

            if (null === a || a[j[i]] === k) return k;
            a = a[j[i]];
          }
        }

        return a;
      };

      return function (b, e) {
        return c(b, e, a);
      };
    }

    return function (b) {
      return b[a];
    };
  }

  function R(a) {
    if (h.isPlainObject(a)) return R(a._);
    if (null === a) return function () {};
    if ("function" === typeof a) return function (b, d, e) {
      a(b, "set", d, e);
    };

    if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
      var b = function b(a, d, e) {
        var e = Ia(e),
            f;
        f = e[e.length - 1];

        for (var g, j, i = 0, n = e.length - 1; i < n; i++) {
          g = e[i].match(ba);
          j = e[i].match(U);

          if (g) {
            e[i] = e[i].replace(ba, "");
            a[e[i]] = [];
            f = e.slice();
            f.splice(0, i + 1);
            g = f.join(".");

            if (h.isArray(d)) {
              j = 0;

              for (n = d.length; j < n; j++) {
                f = {}, b(f, d[j], g), a[e[i]].push(f);
              }
            } else a[e[i]] = d;

            return;
          }

          j && (e[i] = e[i].replace(U, ""), a = a[e[i]](d));
          if (null === a[e[i]] || a[e[i]] === k) a[e[i]] = {};
          a = a[e[i]];
        }

        if (f.match(U)) a[f.replace(U, "")](d);else a[f.replace(ba, "")] = d;
      };

      return function (c, d) {
        return b(c, d, a);
      };
    }

    return function (b, d) {
      b[a] = d;
    };
  }

  function Ja(a) {
    return D(a.aoData, "_aData");
  }

  function na(a) {
    a.aoData.length = 0;
    a.aiDisplayMaster.length = 0;
    a.aiDisplay.length = 0;
    a.aIds = {};
  }

  function oa(a, b, c) {
    for (var d = -1, e = 0, f = a.length; e < f; e++) {
      a[e] == b ? d = e : a[e] > b && a[e]--;
    }

    -1 != d && c === k && a.splice(d, 1);
  }

  function ca(a, b, c, d) {
    var e = a.aoData[b],
        f,
        g = function g(c, d) {
      for (; c.childNodes.length;) {
        c.removeChild(c.firstChild);
      }

      c.innerHTML = B(a, b, d, "display");
    };

    if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = Ha(a, e, d, d === k ? k : e._aData).data;else {
      var j = e.anCells;
      if (j) if (d !== k) g(j[d], d);else {
        c = 0;

        for (f = j.length; c < f; c++) {
          g(j[c], c);
        }
      }
    }
    e._aSortData = null;
    e._aFilterData = null;
    g = a.aoColumns;
    if (d !== k) g[d].sType = null;else {
      c = 0;

      for (f = g.length; c < f; c++) {
        g[c].sType = null;
      }

      Ka(a, e);
    }
  }

  function Ha(a, b, c, d) {
    var e = [],
        f = b.firstChild,
        g,
        j,
        i = 0,
        n,
        l = a.aoColumns,
        q = a._rowReadObject,
        d = d !== k ? d : q ? {} : [],
        t = function t(a, b) {
      if ("string" === typeof a) {
        var c = a.indexOf("@");
        -1 !== c && (c = a.substring(c + 1), R(a)(d, b.getAttribute(c)));
      }
    },
        m = function m(a) {
      if (c === k || c === i) j = l[i], n = h.trim(a.innerHTML), j && j._bAttrSrc ? (R(j.mData._)(d, n), t(j.mData.sort, a), t(j.mData.type, a), t(j.mData.filter, a)) : q ? (j._setter || (j._setter = R(j.mData)), j._setter(d, n)) : d[i] = n;
      i++;
    };

    if (f) for (; f;) {
      g = f.nodeName.toUpperCase();
      if ("TD" == g || "TH" == g) m(f), e.push(f);
      f = f.nextSibling;
    } else {
      e = b.anCells;
      f = 0;

      for (g = e.length; f < g; f++) {
        m(e[f]);
      }
    }
    if (b = b.firstChild ? b : b.nTr) (b = b.getAttribute("id")) && R(a.rowId)(d, b);
    return {
      data: d,
      cells: e
    };
  }

  function Ga(a, b, c, d) {
    var e = a.aoData[b],
        f = e._aData,
        g = [],
        j,
        i,
        n,
        l,
        q;

    if (null === e.nTr) {
      j = c || G.createElement("tr");
      e.nTr = j;
      e.anCells = g;
      j._DT_RowIndex = b;
      Ka(a, e);
      l = 0;

      for (q = a.aoColumns.length; l < q; l++) {
        n = a.aoColumns[l];
        i = c ? d[l] : G.createElement(n.sCellType);
        i._DT_CellIndex = {
          row: b,
          column: l
        };
        g.push(i);
        if ((!c || n.mRender || n.mData !== l) && (!h.isPlainObject(n.mData) || n.mData._ !== l + ".display")) i.innerHTML = B(a, b, l, "display");
        n.sClass && (i.className += " " + n.sClass);
        n.bVisible && !c ? j.appendChild(i) : !n.bVisible && c && i.parentNode.removeChild(i);
        n.fnCreatedCell && n.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l);
      }

      r(a, "aoRowCreatedCallback", null, [j, f, b]);
    }

    e.nTr.setAttribute("role", "row");
  }

  function Ka(a, b) {
    var c = b.nTr,
        d = b._aData;

    if (c) {
      var e = a.rowIdFn(d);
      e && (c.id = e);
      d.DT_RowClass && (e = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? qa(b.__rowc.concat(e)) : e, h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
      d.DT_RowAttr && h(c).attr(d.DT_RowAttr);
      d.DT_RowData && h(c).data(d.DT_RowData);
    }
  }

  function jb(a) {
    var b,
        c,
        d,
        e,
        f,
        g = a.nTHead,
        j = a.nTFoot,
        i = 0 === h("th, td", g).length,
        n = a.oClasses,
        l = a.aoColumns;
    i && (e = h("<tr/>").appendTo(g));
    b = 0;

    for (c = l.length; b < c; b++) {
      f = l[b], d = h(f.nTh).addClass(f.sClass), i && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), La(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Ma(a, "header")(a, d, f, n);
    }

    i && da(a.aoHeader, g);
    h(g).find(">tr").attr("role", "row");
    h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);
    h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);

    if (null !== j) {
      a = a.aoFooter[0];
      b = 0;

      for (c = a.length; b < c; b++) {
        f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass);
      }
    }
  }

  function ea(a, b, c) {
    var d,
        e,
        f,
        g = [],
        j = [],
        i = a.aoColumns.length,
        n;

    if (b) {
      c === k && (c = !1);
      d = 0;

      for (e = b.length; d < e; d++) {
        g[d] = b[d].slice();
        g[d].nTr = b[d].nTr;

        for (f = i - 1; 0 <= f; f--) {
          !a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
        }

        j.push([]);
      }

      d = 0;

      for (e = g.length; d < e; d++) {
        if (a = g[d].nTr) for (; f = a.firstChild;) {
          a.removeChild(f);
        }
        f = 0;

        for (b = g[d].length; f < b; f++) {
          if (n = i = 1, j[d][f] === k) {
            a.appendChild(g[d][f].cell);

            for (j[d][f] = 1; g[d + i] !== k && g[d][f].cell == g[d + i][f].cell;) {
              j[d + i][f] = 1, i++;
            }

            for (; g[d][f + n] !== k && g[d][f].cell == g[d][f + n].cell;) {
              for (c = 0; c < i; c++) {
                j[d + c][f + n] = 1;
              }

              n++;
            }

            h(g[d][f].cell).attr("rowspan", i).attr("colspan", n);
          }
        }
      }
    }
  }

  function N(a) {
    var b = r(a, "aoPreDrawCallback", "preDraw", [a]);
    if (-1 !== h.inArray(!1, b)) C(a, !1);else {
      var b = [],
          c = 0,
          d = a.asStripeClasses,
          e = d.length,
          f = a.oLanguage,
          g = a.iInitDisplayStart,
          j = "ssp" == y(a),
          i = a.aiDisplay;
      a.bDrawing = !0;
      g !== k && -1 !== g && (a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
      var g = a._iDisplayStart,
          n = a.fnDisplayEnd();
      if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, C(a, !1);else if (j) {
        if (!a.bDestroying && !kb(a)) return;
      } else a.iDraw++;

      if (0 !== i.length) {
        f = j ? a.aoData.length : n;

        for (j = j ? 0 : g; j < f; j++) {
          var l = i[j],
              q = a.aoData[l];
          null === q.nTr && Ga(a, l);
          l = q.nTr;

          if (0 !== e) {
            var t = d[c % e];
            q._sRowStripe != t && (h(l).removeClass(q._sRowStripe).addClass(t), q._sRowStripe = t);
          }

          r(a, "aoRowCallback", null, [l, q._aData, c, j]);
          b.push(l);
          c++;
        }
      } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = h("<tr/>", {
        "class": e ? d[0] : ""
      }).append(h("<td />", {
        valign: "top",
        colSpan: aa(a),
        "class": a.oClasses.sRowEmpty
      }).html(c))[0];

      r(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Ja(a), g, n, i]);
      r(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], Ja(a), g, n, i]);
      d = h(a.nTBody);
      d.children().detach();
      d.append(h(b));
      r(a, "aoDrawCallback", "draw", [a]);
      a.bSorted = !1;
      a.bFiltered = !1;
      a.bDrawing = !1;
    }
  }

  function S(a, b) {
    var c = a.oFeatures,
        d = c.bFilter;
    c.bSort && lb(a);
    d ? fa(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
    !0 !== b && (a._iDisplayStart = 0);
    a._drawHold = b;
    N(a);
    a._drawHold = !1;
  }

  function mb(a) {
    var b = a.oClasses,
        c = h(a.nTable),
        c = h("<div/>").insertBefore(c),
        d = a.oFeatures,
        e = h("<div/>", {
      id: a.sTableId + "_wrapper",
      "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
    });
    a.nHolding = c[0];
    a.nTableWrapper = e[0];
    a.nTableReinsertBefore = a.nTable.nextSibling;

    for (var f = a.sDom.split(""), g, j, i, n, l, q, k = 0; k < f.length; k++) {
      g = null;
      j = f[k];

      if ("<" == j) {
        i = h("<div/>")[0];
        n = f[k + 1];

        if ("'" == n || '"' == n) {
          l = "";

          for (q = 2; f[k + q] != n;) {
            l += f[k + q], q++;
          }

          "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter);
          -1 != l.indexOf(".") ? (n = l.split("."), i.id = n[0].substr(1, n[0].length - 1), i.className = n[1]) : "#" == l.charAt(0) ? i.id = l.substr(1, l.length - 1) : i.className = l;
          k += q;
        }

        e.append(i);
        e = h(i);
      } else if (">" == j) e = e.parent();else if ("l" == j && d.bPaginate && d.bLengthChange) g = nb(a);else if ("f" == j && d.bFilter) g = ob(a);else if ("r" == j && d.bProcessing) g = pb(a);else if ("t" == j) g = qb(a);else if ("i" == j && d.bInfo) g = rb(a);else if ("p" == j && d.bPaginate) g = sb(a);else if (0 !== m.ext.feature.length) {
        i = m.ext.feature;
        q = 0;

        for (n = i.length; q < n; q++) {
          if (j == i[q].cFeature) {
            g = i[q].fnInit(a);
            break;
          }
        }
      }

      g && (i = a.aanFeatures, i[j] || (i[j] = []), i[j].push(g), e.append(g));
    }

    c.replaceWith(e);
    a.nHolding = null;
  }

  function da(a, b) {
    var c = h(b).children("tr"),
        d,
        e,
        f,
        g,
        j,
        i,
        n,
        l,
        q,
        k;
    a.splice(0, a.length);
    f = 0;

    for (i = c.length; f < i; f++) {
      a.push([]);
    }

    f = 0;

    for (i = c.length; f < i; f++) {
      d = c[f];

      for (e = d.firstChild; e;) {
        if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
          l = 1 * e.getAttribute("colspan");
          q = 1 * e.getAttribute("rowspan");
          l = !l || 0 === l || 1 === l ? 1 : l;
          q = !q || 0 === q || 1 === q ? 1 : q;
          g = 0;

          for (j = a[f]; j[g];) {
            g++;
          }

          n = g;
          k = 1 === l ? !0 : !1;

          for (j = 0; j < l; j++) {
            for (g = 0; g < q; g++) {
              a[f + g][n + j] = {
                cell: e,
                unique: k
              }, a[f + g].nTr = d;
            }
          }
        }

        e = e.nextSibling;
      }
    }
  }

  function ra(a, b, c) {
    var d = [];
    c || (c = a.aoHeader, b && (c = [], da(c, b)));

    for (var b = 0, e = c.length; b < e; b++) {
      for (var f = 0, g = c[b].length; f < g; f++) {
        if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell;
      }
    }

    return d;
  }

  function sa(a, b, c) {
    r(a, "aoServerParams", "serverParams", [b]);

    if (b && h.isArray(b)) {
      var d = {},
          e = /(.*?)\[\]$/;
      h.each(b, function (a, b) {
        var c = b.name.match(e);
        c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value;
      });
      b = d;
    }

    var f,
        g = a.ajax,
        j = a.oInstance,
        i = function i(b) {
      r(a, null, "xhr", [a, b, a.jqXHR]);
      c(b);
    };

    if (h.isPlainObject(g) && g.data) {
      f = g.data;
      var n = h.isFunction(f) ? f(b, a) : f,
          b = h.isFunction(f) && n ? n : h.extend(!0, b, n);
      delete g.data;
    }

    n = {
      data: b,
      success: function success(b) {
        var c = b.error || b.sError;
        c && J(a, 0, c);
        a.json = b;
        i(b);
      },
      dataType: "json",
      cache: !1,
      type: a.sServerMethod,
      error: function error(b, c) {
        var d = r(a, null, "xhr", [a, null, a.jqXHR]);
        -1 === h.inArray(!0, d) && ("parsererror" == c ? J(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && J(a, 0, "Ajax error", 7));
        C(a, !1);
      }
    };
    a.oAjaxData = b;
    r(a, null, "preXhr", [a, b]);
    a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, function (a, b) {
      return {
        name: b,
        value: a
      };
    }), i, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(n, {
      url: g || a.sAjaxSource
    })) : h.isFunction(g) ? a.jqXHR = g.call(j, b, i, a) : (a.jqXHR = h.ajax(h.extend(n, g)), g.data = f);
  }

  function kb(a) {
    return a.bAjaxDataGet ? (a.iDraw++, C(a, !0), sa(a, tb(a), function (b) {
      ub(a, b);
    }), !1) : !0;
  }

  function tb(a) {
    var b = a.aoColumns,
        c = b.length,
        d = a.oFeatures,
        e = a.oPreviousSearch,
        f = a.aoPreSearchCols,
        g,
        j = [],
        i,
        n,
        l,
        k = V(a);
    g = a._iDisplayStart;
    i = !1 !== d.bPaginate ? a._iDisplayLength : -1;

    var t = function t(a, b) {
      j.push({
        name: a,
        value: b
      });
    };

    t("sEcho", a.iDraw);
    t("iColumns", c);
    t("sColumns", D(b, "sName").join(","));
    t("iDisplayStart", g);
    t("iDisplayLength", i);
    var pa = {
      draw: a.iDraw,
      columns: [],
      order: [],
      start: g,
      length: i,
      search: {
        value: e.sSearch,
        regex: e.bRegex
      }
    };

    for (g = 0; g < c; g++) {
      n = b[g], l = f[g], i = "function" == typeof n.mData ? "function" : n.mData, pa.columns.push({
        data: i,
        name: n.sName,
        searchable: n.bSearchable,
        orderable: n.bSortable,
        search: {
          value: l.sSearch,
          regex: l.bRegex
        }
      }), t("mDataProp_" + g, i), d.bFilter && (t("sSearch_" + g, l.sSearch), t("bRegex_" + g, l.bRegex), t("bSearchable_" + g, n.bSearchable)), d.bSort && t("bSortable_" + g, n.bSortable);
    }

    d.bFilter && (t("sSearch", e.sSearch), t("bRegex", e.bRegex));
    d.bSort && (h.each(k, function (a, b) {
      pa.order.push({
        column: b.col,
        dir: b.dir
      });
      t("iSortCol_" + a, b.col);
      t("sSortDir_" + a, b.dir);
    }), t("iSortingCols", k.length));
    b = m.ext.legacy.ajax;
    return null === b ? a.sAjaxSource ? j : pa : b ? j : pa;
  }

  function ub(a, b) {
    var c = ta(a, b),
        d = b.sEcho !== k ? b.sEcho : b.draw,
        e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal,
        f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered;

    if (d) {
      if (1 * d < a.iDraw) return;
      a.iDraw = 1 * d;
    }

    na(a);
    a._iRecordsTotal = parseInt(e, 10);
    a._iRecordsDisplay = parseInt(f, 10);
    d = 0;

    for (e = c.length; d < e; d++) {
      M(a, c[d]);
    }

    a.aiDisplay = a.aiDisplayMaster.slice();
    a.bAjaxDataGet = !1;
    N(a);
    a._bInitComplete || ua(a, b);
    a.bAjaxDataGet = !0;
    C(a, !1);
  }

  function ta(a, b) {
    var c = h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp;
    return "data" === c ? b.aaData || b[c] : "" !== c ? Q(c)(b) : b;
  }

  function ob(a) {
    var b = a.oClasses,
        c = a.sTableId,
        d = a.oLanguage,
        e = a.oPreviousSearch,
        f = a.aanFeatures,
        g = '<input type="search" class="' + b.sFilterInput + '"/>',
        j = d.sSearch,
        j = j.match(/_INPUT_/) ? j.replace("_INPUT_", g) : j + g,
        b = h("<div/>", {
      id: !f.f ? c + "_filter" : null,
      "class": b.sFilter
    }).append(h("<label/>").append(j)),
        f = function f() {
      var b = !this.value ? "" : this.value;
      b != e.sSearch && (fa(a, {
        sSearch: b,
        bRegex: e.bRegex,
        bSmart: e.bSmart,
        bCaseInsensitive: e.bCaseInsensitive
      }), a._iDisplayStart = 0, N(a));
    },
        g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0,
        i = h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Na(f, g) : f).on("keypress.DT", function (a) {
      if (13 == a.keyCode) return !1;
    }).attr("aria-controls", c);

    h(a.nTable).on("search.dt.DT", function (b, c) {
      if (a === c) try {
        i[0] !== G.activeElement && i.val(e.sSearch);
      } catch (d) {}
    });
    return b[0];
  }

  function fa(a, b, c) {
    var d = a.oPreviousSearch,
        e = a.aoPreSearchCols,
        f = function f(a) {
      d.sSearch = a.sSearch;
      d.bRegex = a.bRegex;
      d.bSmart = a.bSmart;
      d.bCaseInsensitive = a.bCaseInsensitive;
    };

    Fa(a);

    if ("ssp" != y(a)) {
      vb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);
      f(b);

      for (b = 0; b < e.length; b++) {
        wb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
      }

      xb(a);
    } else f(b);

    a.bFiltered = !0;
    r(a, null, "search", [a]);
  }

  function xb(a) {
    for (var b = m.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f < g; f++) {
      for (var j = [], i = 0, n = c.length; i < n; i++) {
        e = c[i], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, i) && j.push(e);
      }

      c.length = 0;
      h.merge(c, j);
    }
  }

  function wb(a, b, c, d, e, f) {
    if ("" !== b) {
      for (var g = [], j = a.aiDisplay, d = Oa(b, d, e, f), e = 0; e < j.length; e++) {
        b = a.aoData[j[e]]._aFilterData[c], d.test(b) && g.push(j[e]);
      }

      a.aiDisplay = g;
    }
  }

  function vb(a, b, c, d, e, f) {
    var d = Oa(b, d, e, f),
        f = a.oPreviousSearch.sSearch,
        g = a.aiDisplayMaster,
        j,
        e = [];
    0 !== m.ext.search.length && (c = !0);
    j = yb(a);
    if (0 >= b.length) a.aiDisplay = g.slice();else {
      if (j || c || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted) a.aiDisplay = g.slice();
      b = a.aiDisplay;

      for (c = 0; c < b.length; c++) {
        d.test(a.aoData[b[c]]._sFilterRow) && e.push(b[c]);
      }

      a.aiDisplay = e;
    }
  }

  function Oa(a, b, c, d) {
    a = b ? a : Pa(a);
    c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) {
      if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/),
          a = b ? b[1] : a;
      return a.replace('"', "");
    }).join(")(?=.*?") + ").*$");
    return RegExp(a, d ? "i" : "");
  }

  function yb(a) {
    var b = a.aoColumns,
        c,
        d,
        e,
        f,
        g,
        j,
        i,
        h,
        l = m.ext.type.search;
    c = !1;
    d = 0;

    for (f = a.aoData.length; d < f; d++) {
      if (h = a.aoData[d], !h._aFilterData) {
        j = [];
        e = 0;

        for (g = b.length; e < g; e++) {
          c = b[e], c.bSearchable ? (i = B(a, d, e, "filter"), l[c.sType] && (i = l[c.sType](i)), null === i && (i = ""), "string" !== typeof i && i.toString && (i = i.toString())) : i = "", i.indexOf && -1 !== i.indexOf("&") && (va.innerHTML = i, i = Wb ? va.textContent : va.innerText), i.replace && (i = i.replace(/[\r\n]/g, "")), j.push(i);
        }

        h._aFilterData = j;
        h._sFilterRow = j.join("  ");
        c = !0;
      }
    }

    return c;
  }

  function zb(a) {
    return {
      search: a.sSearch,
      smart: a.bSmart,
      regex: a.bRegex,
      caseInsensitive: a.bCaseInsensitive
    };
  }

  function Ab(a) {
    return {
      sSearch: a.search,
      bSmart: a.smart,
      bRegex: a.regex,
      bCaseInsensitive: a.caseInsensitive
    };
  }

  function rb(a) {
    var b = a.sTableId,
        c = a.aanFeatures.i,
        d = h("<div/>", {
      "class": a.oClasses.sInfo,
      id: !c ? b + "_info" : null
    });
    c || (a.aoDrawCallback.push({
      fn: Bb,
      sName: "information"
    }), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby", b + "_info"));
    return d[0];
  }

  function Bb(a) {
    var b = a.aanFeatures.i;

    if (0 !== b.length) {
      var c = a.oLanguage,
          d = a._iDisplayStart + 1,
          e = a.fnDisplayEnd(),
          f = a.fnRecordsTotal(),
          g = a.fnRecordsDisplay(),
          j = g ? c.sInfo : c.sInfoEmpty;
      g !== f && (j += " " + c.sInfoFiltered);
      j += c.sInfoPostFix;
      j = Cb(a, j);
      c = c.fnInfoCallback;
      null !== c && (j = c.call(a.oInstance, a, d, e, f, g, j));
      h(b).html(j);
    }
  }

  function Cb(a, b) {
    var c = a.fnFormatNumber,
        d = a._iDisplayStart + 1,
        e = a._iDisplayLength,
        f = a.fnRecordsDisplay(),
        g = -1 === e;
    return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)));
  }

  function ga(a) {
    var b,
        c,
        d = a.iInitDisplayStart,
        e = a.aoColumns,
        f;
    c = a.oFeatures;
    var g = a.bDeferLoading;

    if (a.bInitialised) {
      mb(a);
      jb(a);
      ea(a, a.aoHeader);
      ea(a, a.aoFooter);
      C(a, !0);
      c.bAutoWidth && Ea(a);
      b = 0;

      for (c = e.length; b < c; b++) {
        f = e[b], f.sWidth && (f.nTh.style.width = v(f.sWidth));
      }

      r(a, null, "preInit", [a]);
      S(a);
      e = y(a);
      if ("ssp" != e || g) "ajax" == e ? sa(a, [], function (c) {
        var f = ta(a, c);

        for (b = 0; b < f.length; b++) {
          M(a, f[b]);
        }

        a.iInitDisplayStart = d;
        S(a);
        C(a, !1);
        ua(a, c);
      }, a) : (C(a, !1), ua(a));
    } else setTimeout(function () {
      ga(a);
    }, 200);
  }

  function ua(a, b) {
    a._bInitComplete = !0;
    (b || a.oInit.aaData) && Y(a);
    r(a, null, "plugin-init", [a, b]);
    r(a, "aoInitComplete", "init", [a, b]);
  }

  function Qa(a, b) {
    var c = parseInt(b, 10);
    a._iDisplayLength = c;
    Ra(a);
    r(a, null, "length", [a, c]);
  }

  function nb(a) {
    for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = h.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = h("<select/>", {
      name: c + "_length",
      "aria-controls": c,
      "class": b.sLengthSelect
    }), g = 0, j = f.length; g < j; g++) {
      e[0][g] = new Option("number" === typeof d[g] ? a.fnFormatNumber(d[g]) : d[g], f[g]);
    }

    var i = h("<div><label/></div>").addClass(b.sLength);
    a.aanFeatures.l || (i[0].id = c + "_length");
    i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
    h("select", i).val(a._iDisplayLength).on("change.DT", function () {
      Qa(a, h(this).val());
      N(a);
    });
    h(a.nTable).on("length.dt.DT", function (b, c, d) {
      a === c && h("select", i).val(d);
    });
    return i[0];
  }

  function sb(a) {
    var b = a.sPaginationType,
        c = m.ext.pager[b],
        d = "function" === typeof c,
        e = function e(a) {
      N(a);
    },
        b = h("<div/>").addClass(a.oClasses.sPaging + b)[0],
        f = a.aanFeatures;

    d || c.fnInit(a, b, e);
    f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
      fn: function fn(a) {
        if (d) {
          var b = a._iDisplayStart,
              i = a._iDisplayLength,
              h = a.fnRecordsDisplay(),
              l = -1 === i,
              b = l ? 0 : Math.ceil(b / i),
              i = l ? 1 : Math.ceil(h / i),
              h = c(b, i),
              k,
              l = 0;

          for (k = f.p.length; l < k; l++) {
            Ma(a, "pageButton")(a, f.p[l], l, h, b, i);
          }
        } else c.fnUpdate(a, e);
      },
      sName: "pagination"
    }));
    return b;
  }

  function Sa(a, b, c) {
    var d = a._iDisplayStart,
        e = a._iDisplayLength,
        f = a.fnRecordsDisplay();
    0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : J(a, 0, "Unknown paging action: " + b, 5);
    b = a._iDisplayStart !== d;
    a._iDisplayStart = d;
    b && (r(a, null, "page", [a]), c && N(a));
    return b;
  }

  function pb(a) {
    return h("<div/>", {
      id: !a.aanFeatures.r ? a.sTableId + "_processing" : null,
      "class": a.oClasses.sProcessing
    }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0];
  }

  function C(a, b) {
    a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none");
    r(a, null, "processing", [a, b]);
  }

  function qb(a) {
    var b = h(a.nTable);
    b.attr("role", "grid");
    var c = a.oScroll;
    if ("" === c.sX && "" === c.sY) return a.nTable;
    var d = c.sX,
        e = c.sY,
        f = a.oClasses,
        g = b.children("caption"),
        j = g.length ? g[0]._captionSide : null,
        i = h(b[0].cloneNode(!1)),
        n = h(b[0].cloneNode(!1)),
        l = b.children("tfoot");
    l.length || (l = null);
    i = h("<div/>", {
      "class": f.sScrollWrapper
    }).append(h("<div/>", {
      "class": f.sScrollHead
    }).css({
      overflow: "hidden",
      position: "relative",
      border: 0,
      width: d ? !d ? null : v(d) : "100%"
    }).append(h("<div/>", {
      "class": f.sScrollHeadInner
    }).css({
      "box-sizing": "content-box",
      width: c.sXInner || "100%"
    }).append(i.removeAttr("id").css("margin-left", 0).append("top" === j ? g : null).append(b.children("thead"))))).append(h("<div/>", {
      "class": f.sScrollBody
    }).css({
      position: "relative",
      overflow: "auto",
      width: !d ? null : v(d)
    }).append(b));
    l && i.append(h("<div/>", {
      "class": f.sScrollFoot
    }).css({
      overflow: "hidden",
      border: 0,
      width: d ? !d ? null : v(d) : "100%"
    }).append(h("<div/>", {
      "class": f.sScrollFootInner
    }).append(n.removeAttr("id").css("margin-left", 0).append("bottom" === j ? g : null).append(b.children("tfoot")))));
    var b = i.children(),
        k = b[0],
        f = b[1],
        t = l ? b[2] : null;
    if (d) h(f).on("scroll.DT", function () {
      var a = this.scrollLeft;
      k.scrollLeft = a;
      l && (t.scrollLeft = a);
    });
    h(f).css(e && c.bCollapse ? "max-height" : "height", e);
    a.nScrollHead = k;
    a.nScrollBody = f;
    a.nScrollFoot = t;
    a.aoDrawCallback.push({
      fn: ka,
      sName: "scrolling"
    });
    return i[0];
  }

  function ka(a) {
    var b = a.oScroll,
        c = b.sX,
        d = b.sXInner,
        e = b.sY,
        b = b.iBarWidth,
        f = h(a.nScrollHead),
        g = f[0].style,
        j = f.children("div"),
        i = j[0].style,
        n = j.children("table"),
        j = a.nScrollBody,
        l = h(j),
        q = j.style,
        t = h(a.nScrollFoot).children("div"),
        m = t.children("table"),
        o = h(a.nTHead),
        p = h(a.nTable),
        s = p[0],
        r = s.style,
        u = a.nTFoot ? h(a.nTFoot) : null,
        x = a.oBrowser,
        T = x.bScrollOversize,
        Xb = D(a.aoColumns, "nTh"),
        O,
        K,
        P,
        w,
        Ta = [],
        y = [],
        z = [],
        A = [],
        B,
        C = function C(a) {
      a = a.style;
      a.paddingTop = "0";
      a.paddingBottom = "0";
      a.borderTopWidth = "0";
      a.borderBottomWidth = "0";
      a.height = 0;
    };

    K = j.scrollHeight > j.clientHeight;
    if (a.scrollBarVis !== K && a.scrollBarVis !== k) a.scrollBarVis = K, Y(a);else {
      a.scrollBarVis = K;
      p.children("thead, tfoot").remove();
      u && (P = u.clone().prependTo(p), O = u.find("tr"), P = P.find("tr"));
      w = o.clone().prependTo(p);
      o = o.find("tr");
      K = w.find("tr");
      w.find("th, td").removeAttr("tabindex");
      c || (q.width = "100%", f[0].style.width = "100%");
      h.each(ra(a, w), function (b, c) {
        B = Z(a, b);
        c.style.width = a.aoColumns[B].sWidth;
      });
      u && H(function (a) {
        a.style.width = "";
      }, P);
      f = p.outerWidth();

      if ("" === c) {
        r.width = "100%";
        if (T && (p.find("tbody").height() > j.offsetHeight || "scroll" == l.css("overflow-y"))) r.width = v(p.outerWidth() - b);
        f = p.outerWidth();
      } else "" !== d && (r.width = v(d), f = p.outerWidth());

      H(C, K);
      H(function (a) {
        z.push(a.innerHTML);
        Ta.push(v(h(a).css("width")));
      }, K);
      H(function (a, b) {
        if (h.inArray(a, Xb) !== -1) a.style.width = Ta[b];
      }, o);
      h(K).height(0);
      u && (H(C, P), H(function (a) {
        A.push(a.innerHTML);
        y.push(v(h(a).css("width")));
      }, P), H(function (a, b) {
        a.style.width = y[b];
      }, O), h(P).height(0));
      H(function (a, b) {
        a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + z[b] + "</div>";
        a.style.width = Ta[b];
      }, K);
      u && H(function (a, b) {
        a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + A[b] + "</div>";
        a.style.width = y[b];
      }, P);

      if (p.outerWidth() < f) {
        O = j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f;
        if (T && (j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y"))) r.width = v(O - b);
        ("" === c || "" !== d) && J(a, 1, "Possible column misalignment", 6);
      } else O = "100%";

      q.width = v(O);
      g.width = v(O);
      u && (a.nScrollFoot.style.width = v(O));
      !e && T && (q.height = v(s.offsetHeight + b));
      c = p.outerWidth();
      n[0].style.width = v(c);
      i.width = v(c);
      d = p.height() > j.clientHeight || "scroll" == l.css("overflow-y");
      e = "padding" + (x.bScrollbarLeft ? "Left" : "Right");
      i[e] = d ? b + "px" : "0px";
      u && (m[0].style.width = v(c), t[0].style.width = v(c), t[0].style[e] = d ? b + "px" : "0px");
      p.children("colgroup").insertBefore(p.children("thead"));
      l.scroll();
      if ((a.bSorted || a.bFiltered) && !a._drawHold) j.scrollTop = 0;
    }
  }

  function H(a, b, c) {
    for (var d = 0, e = 0, f = b.length, g, j; e < f;) {
      g = b[e].firstChild;

      for (j = c ? c[e].firstChild : null; g;) {
        1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++), g = g.nextSibling, j = c ? j.nextSibling : null;
      }

      e++;
    }
  }

  function Ea(a) {
    var b = a.nTable,
        c = a.aoColumns,
        d = a.oScroll,
        e = d.sY,
        f = d.sX,
        g = d.sXInner,
        j = c.length,
        i = la(a, "bVisible"),
        n = h("th", a.nTHead),
        l = b.getAttribute("width"),
        k = b.parentNode,
        t = !1,
        m,
        o,
        p = a.oBrowser,
        d = p.bScrollOversize;
    (m = b.style.width) && -1 !== m.indexOf("%") && (l = m);

    for (m = 0; m < i.length; m++) {
      o = c[i[m]], null !== o.sWidth && (o.sWidth = Db(o.sWidthOrig, k), t = !0);
    }

    if (d || !t && !f && !e && j == aa(a) && j == n.length) for (m = 0; m < j; m++) {
      i = Z(a, m), null !== i && (c[i].sWidth = v(n.eq(m).width()));
    } else {
      j = h(b).clone().css("visibility", "hidden").removeAttr("id");
      j.find("tbody tr").remove();
      var s = h("<tr/>").appendTo(j.find("tbody"));
      j.find("thead, tfoot").remove();
      j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());
      j.find("tfoot th, tfoot td").css("width", "");
      n = ra(a, j.find("thead")[0]);

      for (m = 0; m < i.length; m++) {
        o = c[i[m]], n[m].style.width = null !== o.sWidthOrig && "" !== o.sWidthOrig ? v(o.sWidthOrig) : "", o.sWidthOrig && f && h(n[m]).append(h("<div/>").css({
          width: o.sWidthOrig,
          margin: 0,
          padding: 0,
          border: 0,
          height: 1
        }));
      }

      if (a.aoData.length) for (m = 0; m < i.length; m++) {
        t = i[m], o = c[t], h(Eb(a, t)).clone(!1).append(o.sContentPadding).appendTo(s);
      }
      h("[name]", j).removeAttr("name");
      o = h("<div/>").css(f || e ? {
        position: "absolute",
        top: 0,
        left: 0,
        height: 1,
        right: 0,
        overflow: "hidden"
      } : {}).append(j).appendTo(k);
      f && g ? j.width(g) : f ? (j.css("width", "auto"), j.removeAttr("width"), j.width() < k.clientWidth && l && j.width(k.clientWidth)) : e ? j.width(k.clientWidth) : l && j.width(l);

      for (m = e = 0; m < i.length; m++) {
        k = h(n[m]), g = k.outerWidth() - k.width(), k = p.bBounding ? Math.ceil(n[m].getBoundingClientRect().width) : k.outerWidth(), e += k, c[i[m]].sWidth = v(k - g);
      }

      b.style.width = v(e);
      o.remove();
    }
    l && (b.style.width = v(l));
    if ((l || f) && !a._reszEvt) b = function b() {
      h(E).on("resize.DT-" + a.sInstance, Na(function () {
        Y(a);
      }));
    }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0;
  }

  function Db(a, b) {
    if (!a) return 0;
    var c = h("<div/>").css("width", v(a)).appendTo(b || G.body),
        d = c[0].offsetWidth;
    c.remove();
    return d;
  }

  function Eb(a, b) {
    var c = Fb(a, b);
    if (0 > c) return null;
    var d = a.aoData[c];
    return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b];
  }

  function Fb(a, b) {
    for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++) {
      c = B(a, f, b, "display") + "", c = c.replace(Yb, ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = f);
    }

    return e;
  }

  function v(a) {
    return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a;
  }

  function V(a) {
    var b,
        c,
        d = [],
        e = a.aoColumns,
        f,
        g,
        j,
        i;
    b = a.aaSortingFixed;
    c = h.isPlainObject(b);
    var n = [];

    f = function f(a) {
      a.length && !h.isArray(a[0]) ? n.push(a) : h.merge(n, a);
    };

    h.isArray(b) && f(b);
    c && b.pre && f(b.pre);
    f(a.aaSorting);
    c && b.post && f(b.post);

    for (a = 0; a < n.length; a++) {
      i = n[a][0];
      f = e[i].aDataSort;
      b = 0;

      for (c = f.length; b < c; b++) {
        g = f[b], j = e[g].sType || "string", n[a]._idx === k && (n[a]._idx = h.inArray(n[a][1], e[g].asSorting)), d.push({
          src: i,
          col: g,
          dir: n[a][1],
          index: n[a]._idx,
          type: j,
          formatter: m.ext.type.order[j + "-pre"]
        });
      }
    }

    return d;
  }

  function lb(a) {
    var b,
        c,
        d = [],
        e = m.ext.type.order,
        f = a.aoData,
        g = 0,
        j,
        i = a.aiDisplayMaster,
        h;
    Fa(a);
    h = V(a);
    b = 0;

    for (c = h.length; b < c; b++) {
      j = h[b], j.formatter && g++, Gb(a, j.col);
    }

    if ("ssp" != y(a) && 0 !== h.length) {
      b = 0;

      for (c = i.length; b < c; b++) {
        d[i[b]] = b;
      }

      g === h.length ? i.sort(function (a, b) {
        var c,
            e,
            g,
            j,
            i = h.length,
            k = f[a]._aSortData,
            m = f[b]._aSortData;

        for (g = 0; g < i; g++) {
          if (j = h[g], c = k[j.col], e = m[j.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c) return "asc" === j.dir ? c : -c;
        }

        c = d[a];
        e = d[b];
        return c < e ? -1 : c > e ? 1 : 0;
      }) : i.sort(function (a, b) {
        var c,
            g,
            j,
            i,
            k = h.length,
            m = f[a]._aSortData,
            o = f[b]._aSortData;

        for (j = 0; j < k; j++) {
          if (i = h[j], c = m[i.col], g = o[i.col], i = e[i.type + "-" + i.dir] || e["string-" + i.dir], c = i(c, g), 0 !== c) return c;
        }

        c = d[a];
        g = d[b];
        return c < g ? -1 : c > g ? 1 : 0;
      });
    }

    a.bSorted = !0;
  }

  function Hb(a) {
    for (var b, c, d = a.aoColumns, e = V(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < g; f++) {
      c = d[f];
      var j = c.asSorting;
      b = c.sTitle.replace(/<.*?>/g, "");
      var i = c.nTh;
      i.removeAttribute("aria-sort");
      c.bSortable && (0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = j[e[0].index + 1] || j[0]) : c = j[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending);
      i.setAttribute("aria-label", b);
    }
  }

  function Ua(a, b, c, d) {
    var e = a.aaSorting,
        f = a.aoColumns[b].asSorting,
        g = function g(a, b) {
      var c = a._idx;
      c === k && (c = h.inArray(a[1], f));
      return c + 1 < f.length ? c + 1 : b ? null : 0;
    };

    "number" === typeof e[0] && (e = a.aaSorting = [e]);
    c && a.oFeatures.bSortMulti ? (c = h.inArray(b, D(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0);
    S(a);
    "function" == typeof d && d(a);
  }

  function La(a, b, c, d) {
    var e = a.aoColumns[c];
    Va(b, {}, function (b) {
      !1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function () {
        Ua(a, c, b.shiftKey, d);
        "ssp" !== y(a) && C(a, !1);
      }, 0)) : Ua(a, c, b.shiftKey, d));
    });
  }

  function wa(a) {
    var b = a.aLastSort,
        c = a.oClasses.sSortColumn,
        d = V(a),
        e = a.oFeatures,
        f,
        g;

    if (e.bSort && e.bSortClasses) {
      e = 0;

      for (f = b.length; e < f; e++) {
        g = b[e].src, h(D(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
      }

      e = 0;

      for (f = d.length; e < f; e++) {
        g = d[e].src, h(D(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3));
      }
    }

    a.aLastSort = d;
  }

  function Gb(a, b) {
    var c = a.aoColumns[b],
        d = m.ext.order[c.sSortDataType],
        e;
    d && (e = d.call(a.oInstance, a, b, $(a, b)));

    for (var f, g = m.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length; j < i; j++) {
      if (c = a.aoData[j], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[j] : B(a, j, b, "sort"), c._aSortData[b] = g ? g(f) : f;
    }
  }

  function xa(a) {
    if (a.oFeatures.bStateSave && !a.bDestroying) {
      var b = {
        time: +new Date(),
        start: a._iDisplayStart,
        length: a._iDisplayLength,
        order: h.extend(!0, [], a.aaSorting),
        search: zb(a.oPreviousSearch),
        columns: h.map(a.aoColumns, function (b, d) {
          return {
            visible: b.bVisible,
            search: zb(a.aoPreSearchCols[d])
          };
        })
      };
      r(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
      a.oSavedState = b;
      a.fnStateSaveCallback.call(a.oInstance, a, b);
    }
  }

  function Ib(a, b, c) {
    var d,
        e,
        f = a.aoColumns,
        b = function b(_b) {
      if (_b && _b.time) {
        var g = r(a, "aoStateLoadParams", "stateLoadParams", [a, _b]);

        if (-1 === h.inArray(!1, g) && (g = a.iStateDuration, !(0 < g && _b.time < +new Date() - 1E3 * g) && !(_b.columns && f.length !== _b.columns.length))) {
          a.oLoadedState = h.extend(!0, {}, _b);
          _b.start !== k && (a._iDisplayStart = _b.start, a.iInitDisplayStart = _b.start);
          _b.length !== k && (a._iDisplayLength = _b.length);
          _b.order !== k && (a.aaSorting = [], h.each(_b.order, function (b, c) {
            a.aaSorting.push(c[0] >= f.length ? [0, c[1]] : c);
          }));
          _b.search !== k && h.extend(a.oPreviousSearch, Ab(_b.search));

          if (_b.columns) {
            d = 0;

            for (e = _b.columns.length; d < e; d++) {
              g = _b.columns[d], g.visible !== k && (f[d].bVisible = g.visible), g.search !== k && h.extend(a.aoPreSearchCols[d], Ab(g.search));
            }
          }

          r(a, "aoStateLoaded", "stateLoaded", [a, _b]);
        }
      }

      c();
    };

    if (a.oFeatures.bStateSave) {
      var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
      g !== k && b(g);
    } else c();
  }

  function ya(a) {
    var b = m.settings,
        a = h.inArray(a, D(b, "nTable"));
    return -1 !== a ? b[a] : null;
  }

  function J(a, b, c, d) {
    c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
    d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
    if (b) E.console && console.log && console.log(c);else if (b = m.ext, b = b.sErrMode || b.errMode, a && r(a, null, "error", [a, d, c]), "alert" == b) alert(c);else {
      if ("throw" == b) throw Error(c);
      "function" == typeof b && b(a, d, c);
    }
  }

  function F(a, b, c, d) {
    h.isArray(c) ? h.each(c, function (c, d) {
      h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d);
    }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c]));
  }

  function Jb(a, b, c) {
    var d, e;

    for (e in b) {
      b.hasOwnProperty(e) && (d = b[e], h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && h.isArray(d) ? d.slice() : d);
    }

    return a;
  }

  function Va(a, b, c) {
    h(a).on("click.DT", b, function (b) {
      a.blur();
      c(b);
    }).on("keypress.DT", b, function (a) {
      13 === a.which && (a.preventDefault(), c(a));
    }).on("selectstart.DT", function () {
      return !1;
    });
  }

  function z(a, b, c, d) {
    c && a[b].push({
      fn: c,
      sName: d
    });
  }

  function r(a, b, c, d) {
    var e = [];
    b && (e = h.map(a[b].slice().reverse(), function (b) {
      return b.fn.apply(a.oInstance, d);
    }));
    null !== c && (b = h.Event(c + ".dt"), h(a.nTable).trigger(b, d), e.push(b.result));
    return e;
  }

  function Ra(a) {
    var b = a._iDisplayStart,
        c = a.fnDisplayEnd(),
        d = a._iDisplayLength;
    b >= c && (b = c - d);
    b -= b % d;
    if (-1 === d || 0 > b) b = 0;
    a._iDisplayStart = b;
  }

  function Ma(a, b) {
    var c = a.renderer,
        d = m.ext.renderer[b];
    return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" === typeof c ? d[c] || d._ : d._;
  }

  function y(a) {
    return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom";
  }

  function ha(a, b) {
    var c = [],
        c = Kb.numbers_length,
        d = Math.floor(c / 2);
    b <= c ? c = W(0, b) : a <= d ? (c = W(0, c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = W(b - (c - 2), b) : (c = W(a - d + 2, a + d - 1), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));
    c.DT_el = "span";
    return c;
  }

  function cb(a) {
    h.each({
      num: function num(b) {
        return za(b, a);
      },
      "num-fmt": function numFmt(b) {
        return za(b, a, Wa);
      },
      "html-num": function htmlNum(b) {
        return za(b, a, Aa);
      },
      "html-num-fmt": function htmlNumFmt(b) {
        return za(b, a, Aa, Wa);
      }
    }, function (b, c) {
      x.type.order[b + a + "-pre"] = c;
      b.match(/^html\-/) && (x.type.search[b + a] = x.type.search.html);
    });
  }

  function Lb(a) {
    return function () {
      var b = [ya(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
      return m.ext.internal[a].apply(this, b);
    };
  }

  var m = function m(a) {
    this.$ = function (a, b) {
      return this.api(!0).$(a, b);
    };

    this._ = function (a, b) {
      return this.api(!0).rows(a, b).data();
    };

    this.api = function (a) {
      return a ? new _s(ya(this[x.iApiIndex])) : new _s(this);
    };

    this.fnAddData = function (a, b) {
      var c = this.api(!0),
          d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
      (b === k || b) && c.draw();
      return d.flatten().toArray();
    };

    this.fnAdjustColumnSizing = function (a) {
      var b = this.api(!0).columns.adjust(),
          c = b.settings()[0],
          d = c.oScroll;
      a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && ka(c);
    };

    this.fnClearTable = function (a) {
      var b = this.api(!0).clear();
      (a === k || a) && b.draw();
    };

    this.fnClose = function (a) {
      this.api(!0).row(a).child.hide();
    };

    this.fnDeleteRow = function (a, b, c) {
      var d = this.api(!0),
          a = d.rows(a),
          e = a.settings()[0],
          h = e.aoData[a[0][0]];
      a.remove();
      b && b.call(this, e, h);
      (c === k || c) && d.draw();
      return h;
    };

    this.fnDestroy = function (a) {
      this.api(!0).destroy(a);
    };

    this.fnDraw = function (a) {
      this.api(!0).draw(a);
    };

    this.fnFilter = function (a, b, c, d, e, h) {
      e = this.api(!0);
      null === b || b === k ? e.search(a, c, d, h) : e.column(b).search(a, c, d, h);
      e.draw();
    };

    this.fnGetData = function (a, b) {
      var c = this.api(!0);

      if (a !== k) {
        var d = a.nodeName ? a.nodeName.toLowerCase() : "";
        return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null;
      }

      return c.data().toArray();
    };

    this.fnGetNodes = function (a) {
      var b = this.api(!0);
      return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray();
    };

    this.fnGetPosition = function (a) {
      var b = this.api(!0),
          c = a.nodeName.toUpperCase();
      return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null;
    };

    this.fnIsOpen = function (a) {
      return this.api(!0).row(a).child.isShown();
    };

    this.fnOpen = function (a, b, c) {
      return this.api(!0).row(a).child(b, c).show().child()[0];
    };

    this.fnPageChange = function (a, b) {
      var c = this.api(!0).page(a);
      (b === k || b) && c.draw(!1);
    };

    this.fnSetColumnVis = function (a, b, c) {
      a = this.api(!0).column(a).visible(b);
      (c === k || c) && a.columns.adjust().draw();
    };

    this.fnSettings = function () {
      return ya(this[x.iApiIndex]);
    };

    this.fnSort = function (a) {
      this.api(!0).order(a).draw();
    };

    this.fnSortListener = function (a, b, c) {
      this.api(!0).order.listener(a, b, c);
    };

    this.fnUpdate = function (a, b, c, d, e) {
      var h = this.api(!0);
      c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
      (e === k || e) && h.columns.adjust();
      (d === k || d) && h.draw();
      return 0;
    };

    this.fnVersionCheck = x.fnVersionCheck;
    var b = this,
        c = a === k,
        d = this.length;
    c && (a = {});
    this.oApi = this.internal = x.internal;

    for (var e in m.ext.internal) {
      e && (this[e] = Lb(e));
    }

    this.each(function () {
      var e = {},
          g = 1 < d ? Jb(e, a, !0) : a,
          j = 0,
          i,
          e = this.getAttribute("id"),
          n = !1,
          l = m.defaults,
          q = h(this);
      if ("table" != this.nodeName.toLowerCase()) J(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);else {
        db(l);
        eb(l.column);
        I(l, l, !0);
        I(l.column, l.column, !0);
        I(l, h.extend(g, q.data()));
        var t = m.settings,
            j = 0;

        for (i = t.length; j < i; j++) {
          var o = t[j];

          if (o.nTable == this || o.nTHead.parentNode == this || o.nTFoot && o.nTFoot.parentNode == this) {
            var s = g.bRetrieve !== k ? g.bRetrieve : l.bRetrieve;
            if (c || s) return o.oInstance;

            if (g.bDestroy !== k ? g.bDestroy : l.bDestroy) {
              o.oInstance.fnDestroy();
              break;
            } else {
              J(o, 0, "Cannot reinitialise DataTable", 3);
              return;
            }
          }

          if (o.sTableId == this.id) {
            t.splice(j, 1);
            break;
          }
        }

        if (null === e || "" === e) this.id = e = "DataTables_Table_" + m.ext._unique++;
        var p = h.extend(!0, {}, m.models.oSettings, {
          sDestroyWidth: q[0].style.width,
          sInstance: e,
          sTableId: e
        });
        p.nTable = this;
        p.oApi = b.internal;
        p.oInit = g;
        t.push(p);
        p.oInstance = 1 === b.length ? b : q.dataTable();
        db(g);
        g.oLanguage && Ca(g.oLanguage);
        g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = h.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
        g = Jb(h.extend(!0, {}, l), g);
        F(p.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
        F(p, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"]]);
        F(p.oScroll, g, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]);
        F(p.oLanguage, g, "fnInfoCallback");
        z(p, "aoDrawCallback", g.fnDrawCallback, "user");
        z(p, "aoServerParams", g.fnServerParams, "user");
        z(p, "aoStateSaveParams", g.fnStateSaveParams, "user");
        z(p, "aoStateLoadParams", g.fnStateLoadParams, "user");
        z(p, "aoStateLoaded", g.fnStateLoaded, "user");
        z(p, "aoRowCallback", g.fnRowCallback, "user");
        z(p, "aoRowCreatedCallback", g.fnCreatedRow, "user");
        z(p, "aoHeaderCallback", g.fnHeaderCallback, "user");
        z(p, "aoFooterCallback", g.fnFooterCallback, "user");
        z(p, "aoInitComplete", g.fnInitComplete, "user");
        z(p, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
        p.rowIdFn = Q(g.rowId);
        fb(p);
        var u = p.oClasses;
        h.extend(u, m.ext.classes, g.oClasses);
        q.addClass(u.sTable);
        p.iInitDisplayStart === k && (p.iInitDisplayStart = g.iDisplayStart, p._iDisplayStart = g.iDisplayStart);
        null !== g.iDeferLoading && (p.bDeferLoading = !0, e = h.isArray(g.iDeferLoading), p._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, p._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading);
        var v = p.oLanguage;
        h.extend(!0, v, g.oLanguage);
        v.sUrl && (h.ajax({
          dataType: "json",
          url: v.sUrl,
          success: function success(a) {
            Ca(a);
            I(l.oLanguage, a);
            h.extend(true, v, a);
            ga(p);
          },
          error: function error() {
            ga(p);
          }
        }), n = !0);
        null === g.asStripeClasses && (p.asStripeClasses = [u.sStripeOdd, u.sStripeEven]);
        var e = p.asStripeClasses,
            x = q.children("tbody").find("tr").eq(0);
        -1 !== h.inArray(!0, h.map(e, function (a) {
          return x.hasClass(a);
        })) && (h("tbody tr", this).removeClass(e.join(" ")), p.asDestroyStripes = e.slice());
        e = [];
        t = this.getElementsByTagName("thead");
        0 !== t.length && (da(p.aoHeader, t[0]), e = ra(p));

        if (null === g.aoColumns) {
          t = [];
          j = 0;

          for (i = e.length; j < i; j++) {
            t.push(null);
          }
        } else t = g.aoColumns;

        j = 0;

        for (i = t.length; j < i; j++) {
          Da(p, e ? e[j] : null);
        }

        hb(p, g.aoColumnDefs, t, function (a, b) {
          ja(p, a, b);
        });

        if (x.length) {
          var w = function w(a, b) {
            return a.getAttribute("data-" + b) !== null ? b : null;
          };

          h(x[0]).children("th, td").each(function (a, b) {
            var c = p.aoColumns[a];

            if (c.mData === a) {
              var d = w(b, "sort") || w(b, "order"),
                  e = w(b, "filter") || w(b, "search");

              if (d !== null || e !== null) {
                c.mData = {
                  _: a + ".display",
                  sort: d !== null ? a + ".@data-" + d : k,
                  type: d !== null ? a + ".@data-" + d : k,
                  filter: e !== null ? a + ".@data-" + e : k
                };
                ja(p, a);
              }
            }
          });
        }

        var T = p.oFeatures,
            e = function e() {
          if (g.aaSorting === k) {
            var a = p.aaSorting;
            j = 0;

            for (i = a.length; j < i; j++) {
              a[j][1] = p.aoColumns[j].asSorting[0];
            }
          }

          wa(p);
          T.bSort && z(p, "aoDrawCallback", function () {
            if (p.bSorted) {
              var a = V(p),
                  b = {};
              h.each(a, function (a, c) {
                b[c.src] = c.dir;
              });
              r(p, null, "order", [p, a, b]);
              Hb(p);
            }
          });
          z(p, "aoDrawCallback", function () {
            (p.bSorted || y(p) === "ssp" || T.bDeferRender) && wa(p);
          }, "sc");
          var a = q.children("caption").each(function () {
            this._captionSide = h(this).css("caption-side");
          }),
              b = q.children("thead");
          b.length === 0 && (b = h("<thead/>").appendTo(q));
          p.nTHead = b[0];
          b = q.children("tbody");
          b.length === 0 && (b = h("<tbody/>").appendTo(q));
          p.nTBody = b[0];
          b = q.children("tfoot");
          if (b.length === 0 && a.length > 0 && (p.oScroll.sX !== "" || p.oScroll.sY !== "")) b = h("<tfoot/>").appendTo(q);
          if (b.length === 0 || b.children().length === 0) q.addClass(u.sNoFooter);else if (b.length > 0) {
            p.nTFoot = b[0];
            da(p.aoFooter, p.nTFoot);
          }
          if (g.aaData) for (j = 0; j < g.aaData.length; j++) {
            M(p, g.aaData[j]);
          } else (p.bDeferLoading || y(p) == "dom") && ma(p, h(p.nTBody).children("tr"));
          p.aiDisplay = p.aiDisplayMaster.slice();
          p.bInitialised = true;
          n === false && ga(p);
        };

        g.bStateSave ? (T.bStateSave = !0, z(p, "aoDrawCallback", xa, "state_save"), Ib(p, g, e)) : e();
      }
    });
    b = null;
    return this;
  },
      x,
      _s,
      o,
      u,
      Xa = {},
      Mb = /[\r\n]/g,
      Aa = /<.*?>/g,
      Zb = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
      $b = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
      Wa = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
      L = function L(a) {
    return !a || !0 === a || "-" === a ? !0 : !1;
  },
      Nb = function Nb(a) {
    var b = parseInt(a, 10);
    return !isNaN(b) && isFinite(a) ? b : null;
  },
      Ob = function Ob(a, b) {
    Xa[b] || (Xa[b] = RegExp(Pa(b), "g"));
    return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(Xa[b], ".") : a;
  },
      Ya = function Ya(a, b, c) {
    var d = "string" === typeof a;
    if (L(a)) return !0;
    b && d && (a = Ob(a, b));
    c && d && (a = a.replace(Wa, ""));
    return !isNaN(parseFloat(a)) && isFinite(a);
  },
      Pb = function Pb(a, b, c) {
    return L(a) ? !0 : !(L(a) || "string" === typeof a) ? null : Ya(a.replace(Aa, ""), b, c) ? !0 : null;
  },
      D = function D(a, b, c) {
    var d = [],
        e = 0,
        f = a.length;
    if (c !== k) for (; e < f; e++) {
      a[e] && a[e][b] && d.push(a[e][b][c]);
    } else for (; e < f; e++) {
      a[e] && d.push(a[e][b]);
    }
    return d;
  },
      ia = function ia(a, b, c, d) {
    var e = [],
        f = 0,
        g = b.length;
    if (d !== k) for (; f < g; f++) {
      a[b[f]][c] && e.push(a[b[f]][c][d]);
    } else for (; f < g; f++) {
      e.push(a[b[f]][c]);
    }
    return e;
  },
      W = function W(a, b) {
    var c = [],
        d;
    b === k ? (b = 0, d = a) : (d = b, b = a);

    for (var e = b; e < d; e++) {
      c.push(e);
    }

    return c;
  },
      Qb = function Qb(a) {
    for (var b = [], c = 0, d = a.length; c < d; c++) {
      a[c] && b.push(a[c]);
    }

    return b;
  },
      qa = function qa(a) {
    var b;

    a: {
      if (!(2 > a.length)) {
        b = a.slice().sort();

        for (var c = b[0], d = 1, e = b.length; d < e; d++) {
          if (b[d] === c) {
            b = !1;
            break a;
          }

          c = b[d];
        }
      }

      b = !0;
    }

    if (b) return a.slice();
    b = [];
    var e = a.length,
        f,
        g = 0,
        d = 0;

    a: for (; d < e; d++) {
      c = a[d];

      for (f = 0; f < g; f++) {
        if (b[f] === c) continue a;
      }

      b.push(c);
      g++;
    }

    return b;
  };

  m.util = {
    throttle: function throttle(a, b) {
      var c = b !== k ? b : 200,
          d,
          e;
      return function () {
        var b = this,
            g = +new Date(),
            j = arguments;
        d && g < d + c ? (clearTimeout(e), e = setTimeout(function () {
          d = k;
          a.apply(b, j);
        }, c)) : (d = g, a.apply(b, j));
      };
    },
    escapeRegex: function escapeRegex(a) {
      return a.replace($b, "\\$1");
    }
  };

  var A = function A(a, b, c) {
    a[b] !== k && (a[c] = a[b]);
  },
      ba = /\[.*?\]$/,
      U = /\(\)$/,
      Pa = m.util.escapeRegex,
      va = h("<div>")[0],
      Wb = va.textContent !== k,
      Yb = /<.*?>/g,
      Na = m.util.throttle,
      Rb = [],
      w = Array.prototype,
      ac = function ac(a) {
    var b,
        c,
        d = m.settings,
        e = h.map(d, function (a) {
      return a.nTable;
    });

    if (a) {
      if (a.nTable && a.oApi) return [a];
      if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = h.inArray(a, e), -1 !== b ? [d[b]] : null;
      if (a && "function" === typeof a.settings) return a.settings().toArray();
      "string" === typeof a ? c = h(a) : a instanceof h && (c = a);
    } else return [];

    if (c) return c.map(function () {
      b = h.inArray(this, e);
      return -1 !== b ? d[b] : null;
    }).toArray();
  };

  _s = function s(a, b) {
    if (!(this instanceof _s)) return new _s(a, b);

    var c = [],
        d = function d(a) {
      (a = ac(a)) && (c = c.concat(a));
    };

    if (h.isArray(a)) for (var e = 0, f = a.length; e < f; e++) {
      d(a[e]);
    } else d(a);
    this.context = qa(c);
    b && h.merge(this, b);
    this.selector = {
      rows: null,
      cols: null,
      opts: null
    };

    _s.extend(this, this, Rb);
  };

  m.Api = _s;
  h.extend(_s.prototype, {
    any: function any() {
      return 0 !== this.count();
    },
    concat: w.concat,
    context: [],
    count: function count() {
      return this.flatten().length;
    },
    each: function each(a) {
      for (var b = 0, c = this.length; b < c; b++) {
        a.call(this, this[b], b, this);
      }

      return this;
    },
    eq: function eq(a) {
      var b = this.context;
      return b.length > a ? new _s(b[a], this[a]) : null;
    },
    filter: function filter(a) {
      var b = [];
      if (w.filter) b = w.filter.call(this, a, this);else for (var c = 0, d = this.length; c < d; c++) {
        a.call(this, this[c], c, this) && b.push(this[c]);
      }
      return new _s(this.context, b);
    },
    flatten: function flatten() {
      var a = [];
      return new _s(this.context, a.concat.apply(a, this.toArray()));
    },
    join: w.join,
    indexOf: w.indexOf || function (a, b) {
      for (var c = b || 0, d = this.length; c < d; c++) {
        if (this[c] === a) return c;
      }

      return -1;
    },
    iterator: function iterator(a, b, c, d) {
      var e = [],
          f,
          g,
          j,
          h,
          n,
          l = this.context,
          m,
          o,
          u = this.selector;
      "string" === typeof a && (d = c, c = b, b = a, a = !1);
      g = 0;

      for (j = l.length; g < j; g++) {
        var r = new _s(l[g]);
        if ("table" === b) f = c.call(r, l[g], g), f !== k && e.push(f);else if ("columns" === b || "rows" === b) f = c.call(r, l[g], this[g], g), f !== k && e.push(f);else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
          o = this[g];
          "column-rows" === b && (m = Ba(l[g], u.opts));
          h = 0;

          for (n = o.length; h < n; h++) {
            f = o[h], f = "cell" === b ? c.call(r, l[g], f.row, f.column, g, h) : c.call(r, l[g], f, g, h, m), f !== k && e.push(f);
          }
        }
      }

      return e.length || d ? (a = new _s(l, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = u.rows, b.cols = u.cols, b.opts = u.opts, a) : this;
    },
    lastIndexOf: w.lastIndexOf || function (a, b) {
      return this.indexOf.apply(this.toArray.reverse(), arguments);
    },
    length: 0,
    map: function map(a) {
      var b = [];
      if (w.map) b = w.map.call(this, a, this);else for (var c = 0, d = this.length; c < d; c++) {
        b.push(a.call(this, this[c], c));
      }
      return new _s(this.context, b);
    },
    pluck: function pluck(a) {
      return this.map(function (b) {
        return b[a];
      });
    },
    pop: w.pop,
    push: w.push,
    reduce: w.reduce || function (a, b) {
      return gb(this, a, b, 0, this.length, 1);
    },
    reduceRight: w.reduceRight || function (a, b) {
      return gb(this, a, b, this.length - 1, -1, -1);
    },
    reverse: w.reverse,
    selector: null,
    shift: w.shift,
    slice: function slice() {
      return new _s(this.context, this);
    },
    sort: w.sort,
    splice: w.splice,
    toArray: function toArray() {
      return w.slice.call(this);
    },
    to$: function to$() {
      return h(this);
    },
    toJQuery: function toJQuery() {
      return h(this);
    },
    unique: function unique() {
      return new _s(this.context, qa(this));
    },
    unshift: w.unshift
  });

  _s.extend = function (a, b, c) {
    if (c.length && b && (b instanceof _s || b.__dt_wrapper)) {
      var d,
          e,
          f,
          g = function g(a, b, c) {
        return function () {
          var d = b.apply(a, arguments);

          _s.extend(d, d, c.methodExt);

          return d;
        };
      };

      d = 0;

      for (e = c.length; d < e; d++) {
        f = c[d], b[f.name] = "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, _s.extend(a, b[f.name], f.propExt);
      }
    }
  };

  _s.register = o = function o(a, b) {
    if (h.isArray(a)) for (var c = 0, d = a.length; c < d; c++) {
      _s.register(a[c], b);
    } else for (var e = a.split("."), f = Rb, g, j, c = 0, d = e.length; c < d; c++) {
      g = (j = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];
      var i;

      a: {
        i = 0;

        for (var n = f.length; i < n; i++) {
          if (f[i].name === g) {
            i = f[i];
            break a;
          }
        }

        i = null;
      }

      i || (i = {
        name: g,
        val: {},
        methodExt: [],
        propExt: []
      }, f.push(i));
      c === d - 1 ? i.val = b : f = j ? i.methodExt : i.propExt;
    }
  };

  _s.registerPlural = u = function u(a, b, c) {
    _s.register(a, c);

    _s.register(b, function () {
      var a = c.apply(this, arguments);
      return a === this ? this : a instanceof _s ? a.length ? h.isArray(a[0]) ? new _s(a.context, a[0]) : a[0] : k : a;
    });
  };

  o("tables()", function (a) {
    var b;

    if (a) {
      b = _s;
      var c = this.context;
      if ("number" === typeof a) a = [c[a]];else var d = h.map(c, function (a) {
        return a.nTable;
      }),
          a = h(d).filter(a).map(function () {
        var a = h.inArray(this, d);
        return c[a];
      }).toArray();
      b = new b(a);
    } else b = this;

    return b;
  });
  o("table()", function (a) {
    var a = this.tables(a),
        b = a.context;
    return b.length ? new _s(b[0]) : a;
  });
  u("tables().nodes()", "table().node()", function () {
    return this.iterator("table", function (a) {
      return a.nTable;
    }, 1);
  });
  u("tables().body()", "table().body()", function () {
    return this.iterator("table", function (a) {
      return a.nTBody;
    }, 1);
  });
  u("tables().header()", "table().header()", function () {
    return this.iterator("table", function (a) {
      return a.nTHead;
    }, 1);
  });
  u("tables().footer()", "table().footer()", function () {
    return this.iterator("table", function (a) {
      return a.nTFoot;
    }, 1);
  });
  u("tables().containers()", "table().container()", function () {
    return this.iterator("table", function (a) {
      return a.nTableWrapper;
    }, 1);
  });
  o("draw()", function (a) {
    return this.iterator("table", function (b) {
      "page" === a ? N(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), S(b, !1 === a));
    });
  });
  o("page()", function (a) {
    return a === k ? this.page.info().page : this.iterator("table", function (b) {
      Sa(b, a);
    });
  });
  o("page.info()", function () {
    if (0 === this.context.length) return k;
    var a = this.context[0],
        b = a._iDisplayStart,
        c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
        d = a.fnRecordsDisplay(),
        e = -1 === c;
    return {
      page: e ? 0 : Math.floor(b / c),
      pages: e ? 1 : Math.ceil(d / c),
      start: b,
      end: a.fnDisplayEnd(),
      length: c,
      recordsTotal: a.fnRecordsTotal(),
      recordsDisplay: d,
      serverSide: "ssp" === y(a)
    };
  });
  o("page.len()", function (a) {
    return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength : k : this.iterator("table", function (b) {
      Qa(b, a);
    });
  });

  var Sb = function Sb(a, b, c) {
    if (c) {
      var d = new _s(a);
      d.one("draw", function () {
        c(d.ajax.json());
      });
    }

    if ("ssp" == y(a)) S(a, b);else {
      C(a, !0);
      var e = a.jqXHR;
      e && 4 !== e.readyState && e.abort();
      sa(a, [], function (c) {
        na(a);

        for (var c = ta(a, c), d = 0, e = c.length; d < e; d++) {
          M(a, c[d]);
        }

        S(a, b);
        C(a, !1);
      });
    }
  };

  o("ajax.json()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].json;
  });
  o("ajax.params()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].oAjaxData;
  });
  o("ajax.reload()", function (a, b) {
    return this.iterator("table", function (c) {
      Sb(c, !1 === b, a);
    });
  });
  o("ajax.url()", function (a) {
    var b = this.context;

    if (a === k) {
      if (0 === b.length) return k;
      b = b[0];
      return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource;
    }

    return this.iterator("table", function (b) {
      h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a;
    });
  });
  o("ajax.url().load()", function (a, b) {
    return this.iterator("table", function (c) {
      Sb(c, !1 === b, a);
    });
  });

  var Za = function Za(a, b, c, d, e) {
    var f = [],
        g,
        j,
        i,
        n,
        l,
        m;
    i = _typeof(b);
    if (!b || "string" === i || "function" === i || b.length === k) b = [b];
    i = 0;

    for (n = b.length; i < n; i++) {
      j = b[i] && b[i].split && !b[i].match(/[\[\(:]/) ? b[i].split(",") : [b[i]];
      l = 0;

      for (m = j.length; l < m; l++) {
        (g = c("string" === typeof j[l] ? h.trim(j[l]) : j[l])) && g.length && (f = f.concat(g));
      }
    }

    a = x.selector[a];

    if (a.length) {
      i = 0;

      for (n = a.length; i < n; i++) {
        f = a[i](d, e, f);
      }
    }

    return qa(f);
  },
      $a = function $a(a) {
    a || (a = {});
    a.filter && a.search === k && (a.search = a.filter);
    return h.extend({
      search: "none",
      order: "current",
      page: "all"
    }, a);
  },
      ab = function ab(a) {
    for (var b = 0, c = a.length; b < c; b++) {
      if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
    }

    a.length = 0;
    return a;
  },
      Ba = function Ba(a, b) {
    var c,
        d,
        e,
        f = [],
        g = a.aiDisplay;
    c = a.aiDisplayMaster;
    var j = b.search;
    d = b.order;
    e = b.page;
    if ("ssp" == y(a)) return "removed" === j ? [] : W(0, c.length);

    if ("current" == e) {
      c = a._iDisplayStart;

      for (d = a.fnDisplayEnd(); c < d; c++) {
        f.push(g[c]);
      }
    } else if ("current" == d || "applied" == d) f = "none" == j ? c.slice() : "applied" == j ? g.slice() : h.map(c, function (a) {
      return -1 === h.inArray(a, g) ? a : null;
    });else if ("index" == d || "original" == d) {
      c = 0;

      for (d = a.aoData.length; c < d; c++) {
        "none" == j ? f.push(c) : (e = h.inArray(c, g), (-1 === e && "removed" == j || 0 <= e && "applied" == j) && f.push(c));
      }
    }

    return f;
  };

  o("rows()", function (a, b) {
    a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
    var b = $a(b),
        c = this.iterator("table", function (c) {
      var e = b,
          f;
      return Za("row", a, function (a) {
        var b = Nb(a);
        if (b !== null && !e) return [b];
        f || (f = Ba(c, e));
        if (b !== null && h.inArray(b, f) !== -1) return [b];
        if (a === null || a === k || a === "") return f;
        if (typeof a === "function") return h.map(f, function (b) {
          var e = c.aoData[b];
          return a(b, e._aData, e.nTr) ? b : null;
        });
        b = Qb(ia(c.aoData, f, "nTr"));

        if (a.nodeName) {
          if (a._DT_RowIndex !== k) return [a._DT_RowIndex];
          if (a._DT_CellIndex) return [a._DT_CellIndex.row];
          b = h(a).closest("*[data-dt-row]");
          return b.length ? [b.data("dt-row")] : [];
        }

        if (typeof a === "string" && a.charAt(0) === "#") {
          var i = c.aIds[a.replace(/^#/, "")];
          if (i !== k) return [i.idx];
        }

        return h(b).filter(a).map(function () {
          return this._DT_RowIndex;
        }).toArray();
      }, c, e);
    }, 1);
    c.selector.rows = a;
    c.selector.opts = b;
    return c;
  });
  o("rows().nodes()", function () {
    return this.iterator("row", function (a, b) {
      return a.aoData[b].nTr || k;
    }, 1);
  });
  o("rows().data()", function () {
    return this.iterator(!0, "rows", function (a, b) {
      return ia(a.aoData, b, "_aData");
    }, 1);
  });
  u("rows().cache()", "row().cache()", function (a) {
    return this.iterator("row", function (b, c) {
      var d = b.aoData[c];
      return "search" === a ? d._aFilterData : d._aSortData;
    }, 1);
  });
  u("rows().invalidate()", "row().invalidate()", function (a) {
    return this.iterator("row", function (b, c) {
      ca(b, c, a);
    });
  });
  u("rows().indexes()", "row().index()", function () {
    return this.iterator("row", function (a, b) {
      return b;
    }, 1);
  });
  u("rows().ids()", "row().id()", function (a) {
    for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++) {
      for (var f = 0, g = this[d].length; f < g; f++) {
        var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
        b.push((!0 === a ? "#" : "") + h);
      }
    }

    return new _s(c, b);
  });
  u("rows().remove()", "row().remove()", function () {
    var a = this;
    this.iterator("row", function (b, c, d) {
      var e = b.aoData,
          f = e[c],
          g,
          h,
          i,
          n,
          l;
      e.splice(c, 1);
      g = 0;

      for (h = e.length; g < h; g++) {
        if (i = e[g], l = i.anCells, null !== i.nTr && (i.nTr._DT_RowIndex = g), null !== l) {
          i = 0;

          for (n = l.length; i < n; i++) {
            l[i]._DT_CellIndex.row = g;
          }
        }
      }

      oa(b.aiDisplayMaster, c);
      oa(b.aiDisplay, c);
      oa(a[d], c, !1);
      0 < b._iRecordsDisplay && b._iRecordsDisplay--;
      Ra(b);
      c = b.rowIdFn(f._aData);
      c !== k && delete b.aIds[c];
    });
    this.iterator("table", function (a) {
      for (var c = 0, d = a.aoData.length; c < d; c++) {
        a.aoData[c].idx = c;
      }
    });
    return this;
  });
  o("rows.add()", function (a) {
    var b = this.iterator("table", function (b) {
      var c,
          f,
          g,
          h = [];
      f = 0;

      for (g = a.length; f < g; f++) {
        c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? h.push(ma(b, c)[0]) : h.push(M(b, c));
      }

      return h;
    }, 1),
        c = this.rows(-1);
    c.pop();
    h.merge(c, b);
    return c;
  });
  o("row()", function (a, b) {
    return ab(this.rows(a, b));
  });
  o("row().data()", function (a) {
    var b = this.context;
    if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData : k;
    b[0].aoData[this[0]]._aData = a;
    ca(b[0], this[0], "data");
    return this;
  });
  o("row().node()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null;
  });
  o("row.add()", function (a) {
    a instanceof h && a.length && (a = a[0]);
    var b = this.iterator("table", function (b) {
      return a.nodeName && "TR" === a.nodeName.toUpperCase() ? ma(b, a)[0] : M(b, a);
    });
    return this.row(b[0]);
  });

  var bb = function bb(a, b) {
    var c = a.context;
    if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details) c._details.remove(), c._detailsShow = k, c._details = k;
  },
      Tb = function Tb(a, b) {
    var c = a.context;

    if (c.length && a.length) {
      var d = c[0].aoData[a[0]];

      if (d._details) {
        (d._detailsShow = b) ? d._details.insertAfter(d.nTr) : d._details.detach();
        var e = c[0],
            f = new _s(e),
            g = e.aoData;
        f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
        0 < D(g, "_details").length && (f.on("draw.dt.DT_details", function (a, b) {
          e === b && f.rows({
            page: "current"
          }).eq(0).each(function (a) {
            a = g[a];
            a._detailsShow && a._details.insertAfter(a.nTr);
          });
        }), f.on("column-visibility.dt.DT_details", function (a, b) {
          if (e === b) for (var c, d = aa(b), f = 0, h = g.length; f < h; f++) {
            c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d);
          }
        }), f.on("destroy.dt.DT_details", function (a, b) {
          if (e === b) for (var c = 0, d = g.length; c < d; c++) {
            g[c]._details && bb(f, c);
          }
        }));
      }
    }
  };

  o("row().child()", function (a, b) {
    var c = this.context;
    if (a === k) return c.length && this.length ? c[0].aoData[this[0]]._details : k;
    if (!0 === a) this.child.show();else if (!1 === a) bb(this);else if (c.length && this.length) {
      var d = c[0],
          c = c[0].aoData[this[0]],
          e = [],
          f = function f(a, b) {
        if (h.isArray(a) || a instanceof h) for (var c = 0, k = a.length; c < k; c++) {
          f(a[c], b);
        } else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = h("<tr><td/></tr>").addClass(b), h("td", c).addClass(b).html(a)[0].colSpan = aa(d), e.push(c[0]));
      };

      f(a, b);
      c._details && c._details.detach();
      c._details = h(e);
      c._detailsShow && c._details.insertAfter(c.nTr);
    }
    return this;
  });
  o(["row().child.show()", "row().child().show()"], function () {
    Tb(this, !0);
    return this;
  });
  o(["row().child.hide()", "row().child().hide()"], function () {
    Tb(this, !1);
    return this;
  });
  o(["row().child.remove()", "row().child().remove()"], function () {
    bb(this);
    return this;
  });
  o("row().child.isShown()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1;
  });

  var bc = /^([^:]+):(name|visIdx|visible)$/,
      Ub = function Ub(a, b, c, d, e) {
    for (var c = [], d = 0, f = e.length; d < f; d++) {
      c.push(B(a, e[d], b));
    }

    return c;
  };

  o("columns()", function (a, b) {
    a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
    var b = $a(b),
        c = this.iterator("table", function (c) {
      var e = a,
          f = b,
          g = c.aoColumns,
          j = D(g, "sName"),
          i = D(g, "nTh");
      return Za("column", e, function (a) {
        var b = Nb(a);
        if (a === "") return W(g.length);
        if (b !== null) return [b >= 0 ? b : g.length + b];

        if (typeof a === "function") {
          var e = Ba(c, f);
          return h.map(g, function (b, f) {
            return a(f, Ub(c, f, 0, 0, e), i[f]) ? f : null;
          });
        }

        var k = typeof a === "string" ? a.match(bc) : "";
        if (k) switch (k[2]) {
          case "visIdx":
          case "visible":
            b = parseInt(k[1], 10);

            if (b < 0) {
              var m = h.map(g, function (a, b) {
                return a.bVisible ? b : null;
              });
              return [m[m.length + b]];
            }

            return [Z(c, b)];

          case "name":
            return h.map(j, function (a, b) {
              return a === k[1] ? b : null;
            });

          default:
            return [];
        }
        if (a.nodeName && a._DT_CellIndex) return [a._DT_CellIndex.column];
        b = h(i).filter(a).map(function () {
          return h.inArray(this, i);
        }).toArray();
        if (b.length || !a.nodeName) return b;
        b = h(a).closest("*[data-dt-column]");
        return b.length ? [b.data("dt-column")] : [];
      }, c, f);
    }, 1);
    c.selector.cols = a;
    c.selector.opts = b;
    return c;
  });
  u("columns().header()", "column().header()", function () {
    return this.iterator("column", function (a, b) {
      return a.aoColumns[b].nTh;
    }, 1);
  });
  u("columns().footer()", "column().footer()", function () {
    return this.iterator("column", function (a, b) {
      return a.aoColumns[b].nTf;
    }, 1);
  });
  u("columns().data()", "column().data()", function () {
    return this.iterator("column-rows", Ub, 1);
  });
  u("columns().dataSrc()", "column().dataSrc()", function () {
    return this.iterator("column", function (a, b) {
      return a.aoColumns[b].mData;
    }, 1);
  });
  u("columns().cache()", "column().cache()", function (a) {
    return this.iterator("column-rows", function (b, c, d, e, f) {
      return ia(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c);
    }, 1);
  });
  u("columns().nodes()", "column().nodes()", function () {
    return this.iterator("column-rows", function (a, b, c, d, e) {
      return ia(a.aoData, e, "anCells", b);
    }, 1);
  });
  u("columns().visible()", "column().visible()", function (a, b) {
    var c = this.iterator("column", function (b, c) {
      if (a === k) return b.aoColumns[c].bVisible;
      var f = b.aoColumns,
          g = f[c],
          j = b.aoData,
          i,
          n,
          l;

      if (a !== k && g.bVisible !== a) {
        if (a) {
          var m = h.inArray(!0, D(f, "bVisible"), c + 1);
          i = 0;

          for (n = j.length; i < n; i++) {
            l = j[i].nTr, f = j[i].anCells, l && l.insertBefore(f[c], f[m] || null);
          }
        } else h(D(b.aoData, "anCells", c)).detach();

        g.bVisible = a;
        ea(b, b.aoHeader);
        ea(b, b.aoFooter);
        xa(b);
      }
    });
    a !== k && (this.iterator("column", function (c, e) {
      r(c, null, "column-visibility", [c, e, a, b]);
    }), (b === k || b) && this.columns.adjust());
    return c;
  });
  u("columns().indexes()", "column().index()", function (a) {
    return this.iterator("column", function (b, c) {
      return "visible" === a ? $(b, c) : c;
    }, 1);
  });
  o("columns.adjust()", function () {
    return this.iterator("table", function (a) {
      Y(a);
    }, 1);
  });
  o("column.index()", function (a, b) {
    if (0 !== this.context.length) {
      var c = this.context[0];
      if ("fromVisible" === a || "toData" === a) return Z(c, b);
      if ("fromData" === a || "toVisible" === a) return $(c, b);
    }
  });
  o("column()", function (a, b) {
    return ab(this.columns(a, b));
  });
  o("cells()", function (a, b, c) {
    h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null));
    h.isPlainObject(b) && (c = b, b = null);
    if (null === b || b === k) return this.iterator("table", function (b) {
      var d = a,
          e = $a(c),
          f = b.aoData,
          g = Ba(b, e),
          j = Qb(ia(f, g, "anCells")),
          i = h([].concat.apply([], j)),
          l,
          n = b.aoColumns.length,
          m,
          o,
          u,
          s,
          r,
          v;
      return Za("cell", d, function (a) {
        var c = typeof a === "function";

        if (a === null || a === k || c) {
          m = [];
          o = 0;

          for (u = g.length; o < u; o++) {
            l = g[o];

            for (s = 0; s < n; s++) {
              r = {
                row: l,
                column: s
              };

              if (c) {
                v = f[l];
                a(r, B(b, l, s), v.anCells ? v.anCells[s] : null) && m.push(r);
              } else m.push(r);
            }
          }

          return m;
        }

        if (h.isPlainObject(a)) return [a];
        c = i.filter(a).map(function (a, b) {
          return {
            row: b._DT_CellIndex.row,
            column: b._DT_CellIndex.column
          };
        }).toArray();
        if (c.length || !a.nodeName) return c;
        v = h(a).closest("*[data-dt-row]");
        return v.length ? [{
          row: v.data("dt-row"),
          column: v.data("dt-column")
        }] : [];
      }, b, e);
    });
    var d = this.columns(b, c),
        e = this.rows(a, c),
        f,
        g,
        j,
        i,
        n,
        l = this.iterator("table", function (a, b) {
      f = [];
      g = 0;

      for (j = e[b].length; g < j; g++) {
        i = 0;

        for (n = d[b].length; i < n; i++) {
          f.push({
            row: e[b][g],
            column: d[b][i]
          });
        }
      }

      return f;
    }, 1);
    h.extend(l.selector, {
      cols: b,
      rows: a,
      opts: c
    });
    return l;
  });
  u("cells().nodes()", "cell().node()", function () {
    return this.iterator("cell", function (a, b, c) {
      return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : k;
    }, 1);
  });
  o("cells().data()", function () {
    return this.iterator("cell", function (a, b, c) {
      return B(a, b, c);
    }, 1);
  });
  u("cells().cache()", "cell().cache()", function (a) {
    a = "search" === a ? "_aFilterData" : "_aSortData";
    return this.iterator("cell", function (b, c, d) {
      return b.aoData[c][a][d];
    }, 1);
  });
  u("cells().render()", "cell().render()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      return B(b, c, d, a);
    }, 1);
  });
  u("cells().indexes()", "cell().index()", function () {
    return this.iterator("cell", function (a, b, c) {
      return {
        row: b,
        column: c,
        columnVisible: $(a, c)
      };
    }, 1);
  });
  u("cells().invalidate()", "cell().invalidate()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      ca(b, c, a, d);
    });
  });
  o("cell()", function (a, b, c) {
    return ab(this.cells(a, b, c));
  });
  o("cell().data()", function (a) {
    var b = this.context,
        c = this[0];
    if (a === k) return b.length && c.length ? B(b[0], c[0].row, c[0].column) : k;
    ib(b[0], c[0].row, c[0].column, a);
    ca(b[0], c[0].row, "data", c[0].column);
    return this;
  });
  o("order()", function (a, b) {
    var c = this.context;
    if (a === k) return 0 !== c.length ? c[0].aaSorting : k;
    "number" === typeof a ? a = [[a, b]] : a.length && !h.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
    return this.iterator("table", function (b) {
      b.aaSorting = a.slice();
    });
  });
  o("order.listener()", function (a, b, c) {
    return this.iterator("table", function (d) {
      La(d, a, b, c);
    });
  });
  o("order.fixed()", function (a) {
    if (!a) {
      var b = this.context,
          b = b.length ? b[0].aaSortingFixed : k;
      return h.isArray(b) ? {
        pre: b
      } : b;
    }

    return this.iterator("table", function (b) {
      b.aaSortingFixed = h.extend(!0, {}, a);
    });
  });
  o(["columns().order()", "column().order()"], function (a) {
    var b = this;
    return this.iterator("table", function (c, d) {
      var e = [];
      h.each(b[d], function (b, c) {
        e.push([c, a]);
      });
      c.aaSorting = e;
    });
  });
  o("search()", function (a, b, c, d) {
    var e = this.context;
    return a === k ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : k : this.iterator("table", function (e) {
      e.oFeatures.bFilter && fa(e, h.extend({}, e.oPreviousSearch, {
        sSearch: a + "",
        bRegex: null === b ? !1 : b,
        bSmart: null === c ? !0 : c,
        bCaseInsensitive: null === d ? !0 : d
      }), 1);
    });
  });
  u("columns().search()", "column().search()", function (a, b, c, d) {
    return this.iterator("column", function (e, f) {
      var g = e.aoPreSearchCols;
      if (a === k) return g[f].sSearch;
      e.oFeatures.bFilter && (h.extend(g[f], {
        sSearch: a + "",
        bRegex: null === b ? !1 : b,
        bSmart: null === c ? !0 : c,
        bCaseInsensitive: null === d ? !0 : d
      }), fa(e, e.oPreviousSearch, 1));
    });
  });
  o("state()", function () {
    return this.context.length ? this.context[0].oSavedState : null;
  });
  o("state.clear()", function () {
    return this.iterator("table", function (a) {
      a.fnStateSaveCallback.call(a.oInstance, a, {});
    });
  });
  o("state.loaded()", function () {
    return this.context.length ? this.context[0].oLoadedState : null;
  });
  o("state.save()", function () {
    return this.iterator("table", function (a) {
      xa(a);
    });
  });

  m.versionCheck = m.fnVersionCheck = function (a) {
    for (var b = m.version.split("."), a = a.split("."), c, d, e = 0, f = a.length; e < f; e++) {
      if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
    }

    return !0;
  };

  m.isDataTable = m.fnIsDataTable = function (a) {
    var b = h(a).get(0),
        c = !1;
    if (a instanceof m.Api) return !0;
    h.each(m.settings, function (a, e) {
      var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null,
          g = e.nScrollFoot ? h("table", e.nScrollFoot)[0] : null;
      if (e.nTable === b || f === b || g === b) c = !0;
    });
    return c;
  };

  m.tables = m.fnTables = function (a) {
    var b = !1;
    h.isPlainObject(a) && (b = a.api, a = a.visible);
    var c = h.map(m.settings, function (b) {
      if (!a || a && h(b.nTable).is(":visible")) return b.nTable;
    });
    return b ? new _s(c) : c;
  };

  m.camelToHungarian = I;
  o("$()", function (a, b) {
    var c = this.rows(b).nodes(),
        c = h(c);
    return h([].concat(c.filter(a).toArray(), c.find(a).toArray()));
  });
  h.each(["on", "one", "off"], function (a, b) {
    o(b + "()", function () {
      var a = Array.prototype.slice.call(arguments);
      a[0] = h.map(a[0].split(/\s/), function (a) {
        return !a.match(/\.dt\b/) ? a + ".dt" : a;
      }).join(" ");
      var d = h(this.tables().nodes());
      d[b].apply(d, a);
      return this;
    });
  });
  o("clear()", function () {
    return this.iterator("table", function (a) {
      na(a);
    });
  });
  o("settings()", function () {
    return new _s(this.context, this.context);
  });
  o("init()", function () {
    var a = this.context;
    return a.length ? a[0].oInit : null;
  });
  o("data()", function () {
    return this.iterator("table", function (a) {
      return D(a.aoData, "_aData");
    }).flatten();
  });
  o("destroy()", function (a) {
    a = a || !1;
    return this.iterator("table", function (b) {
      var c = b.nTableWrapper.parentNode,
          d = b.oClasses,
          e = b.nTable,
          f = b.nTBody,
          g = b.nTHead,
          j = b.nTFoot,
          i = h(e),
          f = h(f),
          k = h(b.nTableWrapper),
          l = h.map(b.aoData, function (a) {
        return a.nTr;
      }),
          o;
      b.bDestroying = !0;
      r(b, "aoDestroyCallback", "destroy", [b]);
      a || new _s(b).columns().visible(!0);
      k.off(".DT").find(":not(tbody *)").off(".DT");
      h(E).off(".DT-" + b.sInstance);
      e != g.parentNode && (i.children("thead").detach(), i.append(g));
      j && e != j.parentNode && (i.children("tfoot").detach(), i.append(j));
      b.aaSorting = [];
      b.aaSortingFixed = [];
      wa(b);
      h(l).removeClass(b.asStripeClasses.join(" "));
      h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
      f.children().detach();
      f.append(l);
      g = a ? "remove" : "detach";
      i[g]();
      k[g]();
      !a && c && (c.insertBefore(e, b.nTableReinsertBefore), i.css("width", b.sDestroyWidth).removeClass(d.sTable), (o = b.asDestroyStripes.length) && f.children().each(function (a) {
        h(this).addClass(b.asDestroyStripes[a % o]);
      }));
      c = h.inArray(b, m.settings);
      -1 !== c && m.settings.splice(c, 1);
    });
  });
  h.each(["column", "row", "cell"], function (a, b) {
    o(b + "s().every()", function (a) {
      var d = this.selector.opts,
          e = this;
      return this.iterator(b, function (f, g, h, i, n) {
        a.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : k), g, h, i, n);
      });
    });
  });
  o("i18n()", function (a, b, c) {
    var d = this.context[0],
        a = Q(a)(d.oLanguage);
    a === k && (a = b);
    c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._);
    return a.replace("%d", c);
  });
  m.version = "1.10.16";
  m.settings = [];
  m.models = {};
  m.models.oSearch = {
    bCaseInsensitive: !0,
    sSearch: "",
    bRegex: !1,
    bSmart: !0
  };
  m.models.oRow = {
    nTr: null,
    anCells: null,
    _aData: [],
    _aSortData: null,
    _aFilterData: null,
    _sFilterRow: null,
    _sRowStripe: "",
    src: null,
    idx: -1
  };
  m.models.oColumn = {
    idx: null,
    aDataSort: null,
    asSorting: null,
    bSearchable: null,
    bSortable: null,
    bVisible: null,
    _sManualType: null,
    _bAttrSrc: !1,
    fnCreatedCell: null,
    fnGetData: null,
    fnSetData: null,
    mData: null,
    mRender: null,
    nTh: null,
    nTf: null,
    sClass: null,
    sContentPadding: null,
    sDefaultContent: null,
    sName: null,
    sSortDataType: "std",
    sSortingClass: null,
    sSortingClassJUI: null,
    sTitle: null,
    sType: null,
    sWidth: null,
    sWidthOrig: null
  };
  m.defaults = {
    aaData: null,
    aaSorting: [[0, "asc"]],
    aaSortingFixed: [],
    ajax: null,
    aLengthMenu: [10, 25, 50, 100],
    aoColumns: null,
    aoColumnDefs: null,
    aoSearchCols: [],
    asStripeClasses: null,
    bAutoWidth: !0,
    bDeferRender: !1,
    bDestroy: !1,
    bFilter: !0,
    bInfo: !0,
    bLengthChange: !0,
    bPaginate: !0,
    bProcessing: !1,
    bRetrieve: !1,
    bScrollCollapse: !1,
    bServerSide: !1,
    bSort: !0,
    bSortMulti: !0,
    bSortCellsTop: !1,
    bSortClasses: !0,
    bStateSave: !1,
    fnCreatedRow: null,
    fnDrawCallback: null,
    fnFooterCallback: null,
    fnFormatNumber: function fnFormatNumber(a) {
      return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
    },
    fnHeaderCallback: null,
    fnInfoCallback: null,
    fnInitComplete: null,
    fnPreDrawCallback: null,
    fnRowCallback: null,
    fnServerData: null,
    fnServerParams: null,
    fnStateLoadCallback: function fnStateLoadCallback(a) {
      try {
        return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname));
      } catch (b) {}
    },
    fnStateLoadParams: null,
    fnStateLoaded: null,
    fnStateSaveCallback: function fnStateSaveCallback(a, b) {
      try {
        (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b));
      } catch (c) {}
    },
    fnStateSaveParams: null,
    iStateDuration: 7200,
    iDeferLoading: null,
    iDisplayLength: 10,
    iDisplayStart: 0,
    iTabIndex: 0,
    oClasses: {},
    oLanguage: {
      oAria: {
        sSortAscending: ": activate to sort column ascending",
        sSortDescending: ": activate to sort column descending"
      },
      oPaginate: {
        sFirst: "First",
        sLast: "Last",
        sNext: "Next",
        sPrevious: "Previous"
      },
      sEmptyTable: "No data available in table",
      sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
      sInfoEmpty: "Showing 0 to 0 of 0 entries",
      sInfoFiltered: "(filtered from _MAX_ total entries)",
      sInfoPostFix: "",
      sDecimal: "",
      sThousands: ",",
      sLengthMenu: "Show _MENU_ entries",
      sLoadingRecords: "Loading...",
      sProcessing: "Processing...",
      sSearch: "Search:",
      sSearchPlaceholder: "",
      sUrl: "",
      sZeroRecords: "No matching records found"
    },
    oSearch: h.extend({}, m.models.oSearch),
    sAjaxDataProp: "data",
    sAjaxSource: null,
    sDom: "lfrtip",
    searchDelay: null,
    sPaginationType: "simple_numbers",
    sScrollX: "",
    sScrollXInner: "",
    sScrollY: "",
    sServerMethod: "GET",
    renderer: null,
    rowId: "DT_RowId"
  };
  X(m.defaults);
  m.defaults.column = {
    aDataSort: null,
    iDataSort: -1,
    asSorting: ["asc", "desc"],
    bSearchable: !0,
    bSortable: !0,
    bVisible: !0,
    fnCreatedCell: null,
    mData: null,
    mRender: null,
    sCellType: "td",
    sClass: "",
    sContentPadding: "",
    sDefaultContent: null,
    sName: "",
    sSortDataType: "std",
    sTitle: null,
    sType: null,
    sWidth: null
  };
  X(m.defaults.column);
  m.models.oSettings = {
    oFeatures: {
      bAutoWidth: null,
      bDeferRender: null,
      bFilter: null,
      bInfo: null,
      bLengthChange: null,
      bPaginate: null,
      bProcessing: null,
      bServerSide: null,
      bSort: null,
      bSortMulti: null,
      bSortClasses: null,
      bStateSave: null
    },
    oScroll: {
      bCollapse: null,
      iBarWidth: 0,
      sX: null,
      sXInner: null,
      sY: null
    },
    oLanguage: {
      fnInfoCallback: null
    },
    oBrowser: {
      bScrollOversize: !1,
      bScrollbarLeft: !1,
      bBounding: !1,
      barWidth: 0
    },
    ajax: null,
    aanFeatures: [],
    aoData: [],
    aiDisplay: [],
    aiDisplayMaster: [],
    aIds: {},
    aoColumns: [],
    aoHeader: [],
    aoFooter: [],
    oPreviousSearch: {},
    aoPreSearchCols: [],
    aaSorting: null,
    aaSortingFixed: [],
    asStripeClasses: null,
    asDestroyStripes: [],
    sDestroyWidth: 0,
    aoRowCallback: [],
    aoHeaderCallback: [],
    aoFooterCallback: [],
    aoDrawCallback: [],
    aoRowCreatedCallback: [],
    aoPreDrawCallback: [],
    aoInitComplete: [],
    aoStateSaveParams: [],
    aoStateLoadParams: [],
    aoStateLoaded: [],
    sTableId: "",
    nTable: null,
    nTHead: null,
    nTFoot: null,
    nTBody: null,
    nTableWrapper: null,
    bDeferLoading: !1,
    bInitialised: !1,
    aoOpenRows: [],
    sDom: null,
    searchDelay: null,
    sPaginationType: "two_button",
    iStateDuration: 0,
    aoStateSave: [],
    aoStateLoad: [],
    oSavedState: null,
    oLoadedState: null,
    sAjaxSource: null,
    sAjaxDataProp: null,
    bAjaxDataGet: !0,
    jqXHR: null,
    json: k,
    oAjaxData: k,
    fnServerData: null,
    aoServerParams: [],
    sServerMethod: null,
    fnFormatNumber: null,
    aLengthMenu: null,
    iDraw: 0,
    bDrawing: !1,
    iDrawError: -1,
    _iDisplayLength: 10,
    _iDisplayStart: 0,
    _iRecordsTotal: 0,
    _iRecordsDisplay: 0,
    oClasses: {},
    bFiltered: !1,
    bSorted: !1,
    bSortCellsTop: null,
    oInit: null,
    aoDestroyCallback: [],
    fnRecordsTotal: function fnRecordsTotal() {
      return "ssp" == y(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length;
    },
    fnRecordsDisplay: function fnRecordsDisplay() {
      return "ssp" == y(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length;
    },
    fnDisplayEnd: function fnDisplayEnd() {
      var a = this._iDisplayLength,
          b = this._iDisplayStart,
          c = b + a,
          d = this.aiDisplay.length,
          e = this.oFeatures,
          f = e.bPaginate;
      return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c;
    },
    oInstance: null,
    sInstance: null,
    iTabIndex: 0,
    nScrollHead: null,
    nScrollFoot: null,
    aLastSort: [],
    oPlugins: {},
    rowIdFn: null,
    rowId: null
  };
  m.ext = x = {
    buttons: {},
    classes: {},
    builder: "-source-",
    errMode: "alert",
    feature: [],
    search: [],
    selector: {
      cell: [],
      column: [],
      row: []
    },
    internal: {},
    legacy: {
      ajax: null
    },
    pager: {},
    renderer: {
      pageButton: {},
      header: {}
    },
    order: {},
    type: {
      detect: [],
      search: {},
      order: {}
    },
    _unique: 0,
    fnVersionCheck: m.fnVersionCheck,
    iApiIndex: 0,
    oJUIClasses: {},
    sVersion: m.version
  };
  h.extend(x, {
    afnFiltering: x.search,
    aTypes: x.type.detect,
    ofnSearch: x.type.search,
    oSort: x.type.order,
    afnSortData: x.order,
    aoFeatures: x.feature,
    oApi: x.internal,
    oStdClasses: x.classes,
    oPagination: x.pager
  });
  h.extend(m.ext.classes, {
    sTable: "dataTable",
    sNoFooter: "no-footer",
    sPageButton: "paginate_button",
    sPageButtonActive: "current",
    sPageButtonDisabled: "disabled",
    sStripeOdd: "odd",
    sStripeEven: "even",
    sRowEmpty: "dataTables_empty",
    sWrapper: "dataTables_wrapper",
    sFilter: "dataTables_filter",
    sInfo: "dataTables_info",
    sPaging: "dataTables_paginate paging_",
    sLength: "dataTables_length",
    sProcessing: "dataTables_processing",
    sSortAsc: "sorting_asc",
    sSortDesc: "sorting_desc",
    sSortable: "sorting",
    sSortableAsc: "sorting_asc_disabled",
    sSortableDesc: "sorting_desc_disabled",
    sSortableNone: "sorting_disabled",
    sSortColumn: "sorting_",
    sFilterInput: "",
    sLengthSelect: "",
    sScrollWrapper: "dataTables_scroll",
    sScrollHead: "dataTables_scrollHead",
    sScrollHeadInner: "dataTables_scrollHeadInner",
    sScrollBody: "dataTables_scrollBody",
    sScrollFoot: "dataTables_scrollFoot",
    sScrollFootInner: "dataTables_scrollFootInner",
    sHeaderTH: "",
    sFooterTH: "",
    sSortJUIAsc: "",
    sSortJUIDesc: "",
    sSortJUI: "",
    sSortJUIAscAllowed: "",
    sSortJUIDescAllowed: "",
    sSortJUIWrapper: "",
    sSortIcon: "",
    sJUIHeader: "",
    sJUIFooter: ""
  });
  var Kb = m.ext.pager;
  h.extend(Kb, {
    simple: function simple() {
      return ["previous", "next"];
    },
    full: function full() {
      return ["first", "previous", "next", "last"];
    },
    numbers: function numbers(a, b) {
      return [ha(a, b)];
    },
    simple_numbers: function simple_numbers(a, b) {
      return ["previous", ha(a, b), "next"];
    },
    full_numbers: function full_numbers(a, b) {
      return ["first", "previous", ha(a, b), "next", "last"];
    },
    first_last_numbers: function first_last_numbers(a, b) {
      return ["first", ha(a, b), "last"];
    },
    _numbers: ha,
    numbers_length: 7
  });
  h.extend(!0, m.ext.renderer, {
    pageButton: {
      _: function _(a, b, c, d, e, f) {
        var g = a.oClasses,
            j = a.oLanguage.oPaginate,
            i = a.oLanguage.oAria.paginate || {},
            n,
            l,
            m = 0,
            o = function o(b, d) {
          var k,
              s,
              u,
              r,
              v = function v(b) {
            Sa(a, b.data.action, true);
          };

          k = 0;

          for (s = d.length; k < s; k++) {
            r = d[k];

            if (h.isArray(r)) {
              u = h("<" + (r.DT_el || "div") + "/>").appendTo(b);
              o(u, r);
            } else {
              n = null;
              l = "";

              switch (r) {
                case "ellipsis":
                  b.append('<span class="ellipsis">&#x2026;</span>');
                  break;

                case "first":
                  n = j.sFirst;
                  l = r + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                  break;

                case "previous":
                  n = j.sPrevious;
                  l = r + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                  break;

                case "next":
                  n = j.sNext;
                  l = r + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                  break;

                case "last":
                  n = j.sLast;
                  l = r + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                  break;

                default:
                  n = r + 1;
                  l = e === r ? g.sPageButtonActive : "";
              }

              if (n !== null) {
                u = h("<a>", {
                  "class": g.sPageButton + " " + l,
                  "aria-controls": a.sTableId,
                  "aria-label": i[r],
                  "data-dt-idx": m,
                  tabindex: a.iTabIndex,
                  id: c === 0 && typeof r === "string" ? a.sTableId + "_" + r : null
                }).html(n).appendTo(b);
                Va(u, {
                  action: r
                }, v);
                m++;
              }
            }
          }
        },
            s;

        try {
          s = h(b).find(G.activeElement).data("dt-idx");
        } catch (u) {}

        o(h(b).empty(), d);
        s !== k && h(b).find("[data-dt-idx=" + s + "]").focus();
      }
    }
  });
  h.extend(m.ext.type.detect, [function (a, b) {
    var c = b.oLanguage.sDecimal;
    return Ya(a, c) ? "num" + c : null;
  }, function (a) {
    if (a && !(a instanceof Date) && !Zb.test(a)) return null;
    var b = Date.parse(a);
    return null !== b && !isNaN(b) || L(a) ? "date" : null;
  }, function (a, b) {
    var c = b.oLanguage.sDecimal;
    return Ya(a, c, !0) ? "num-fmt" + c : null;
  }, function (a, b) {
    var c = b.oLanguage.sDecimal;
    return Pb(a, c) ? "html-num" + c : null;
  }, function (a, b) {
    var c = b.oLanguage.sDecimal;
    return Pb(a, c, !0) ? "html-num-fmt" + c : null;
  }, function (a) {
    return L(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null;
  }]);
  h.extend(m.ext.type.search, {
    html: function html(a) {
      return L(a) ? a : "string" === typeof a ? a.replace(Mb, " ").replace(Aa, "") : "";
    },
    string: function string(a) {
      return L(a) ? a : "string" === typeof a ? a.replace(Mb, " ") : a;
    }
  });

  var za = function za(a, b, c, d) {
    if (0 !== a && (!a || "-" === a)) return -Infinity;
    b && (a = Ob(a, b));
    a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
    return 1 * a;
  };

  h.extend(x.type.order, {
    "date-pre": function datePre(a) {
      return Date.parse(a) || -Infinity;
    },
    "html-pre": function htmlPre(a) {
      return L(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "";
    },
    "string-pre": function stringPre(a) {
      return L(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString();
    },
    "string-asc": function stringAsc(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    },
    "string-desc": function stringDesc(a, b) {
      return a < b ? 1 : a > b ? -1 : 0;
    }
  });
  cb("");
  h.extend(!0, m.ext.renderer, {
    header: {
      _: function _(a, b, c, d) {
        h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          if (a === f) {
            e = c.idx;
            b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass);
          }
        });
      },
      jqueryui: function jqueryui(a, b, c, d) {
        h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
        h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          if (a === f) {
            e = c.idx;
            b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass);
            b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(h[e] == "asc" ? d.sSortJUIAsc : h[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI);
          }
        });
      }
    }
  });

  var Vb = function Vb(a) {
    return "string" === typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a;
  };

  m.render = {
    number: function number(a, b, c, d, e) {
      return {
        display: function display(f) {
          if ("number" !== typeof f && "string" !== typeof f) return f;
          var g = 0 > f ? "-" : "",
              h = parseFloat(f);
          if (isNaN(h)) return Vb(f);
          h = h.toFixed(c);
          f = Math.abs(h);
          h = parseInt(f, 10);
          f = c ? b + (f - h).toFixed(c).substring(2) : "";
          return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "");
        }
      };
    },
    text: function text() {
      return {
        display: Vb
      };
    }
  };
  h.extend(m.ext.internal, {
    _fnExternApiFunc: Lb,
    _fnBuildAjax: sa,
    _fnAjaxUpdate: kb,
    _fnAjaxParameters: tb,
    _fnAjaxUpdateDraw: ub,
    _fnAjaxDataSrc: ta,
    _fnAddColumn: Da,
    _fnColumnOptions: ja,
    _fnAdjustColumnSizing: Y,
    _fnVisibleToColumnIndex: Z,
    _fnColumnIndexToVisible: $,
    _fnVisbleColumns: aa,
    _fnGetColumns: la,
    _fnColumnTypes: Fa,
    _fnApplyColumnDefs: hb,
    _fnHungarianMap: X,
    _fnCamelToHungarian: I,
    _fnLanguageCompat: Ca,
    _fnBrowserDetect: fb,
    _fnAddData: M,
    _fnAddTr: ma,
    _fnNodeToDataIndex: function _fnNodeToDataIndex(a, b) {
      return b._DT_RowIndex !== k ? b._DT_RowIndex : null;
    },
    _fnNodeToColumnIndex: function _fnNodeToColumnIndex(a, b, c) {
      return h.inArray(c, a.aoData[b].anCells);
    },
    _fnGetCellData: B,
    _fnSetCellData: ib,
    _fnSplitObjNotation: Ia,
    _fnGetObjectDataFn: Q,
    _fnSetObjectDataFn: R,
    _fnGetDataMaster: Ja,
    _fnClearTable: na,
    _fnDeleteIndex: oa,
    _fnInvalidate: ca,
    _fnGetRowElements: Ha,
    _fnCreateTr: Ga,
    _fnBuildHead: jb,
    _fnDrawHead: ea,
    _fnDraw: N,
    _fnReDraw: S,
    _fnAddOptionsHtml: mb,
    _fnDetectHeader: da,
    _fnGetUniqueThs: ra,
    _fnFeatureHtmlFilter: ob,
    _fnFilterComplete: fa,
    _fnFilterCustom: xb,
    _fnFilterColumn: wb,
    _fnFilter: vb,
    _fnFilterCreateSearch: Oa,
    _fnEscapeRegex: Pa,
    _fnFilterData: yb,
    _fnFeatureHtmlInfo: rb,
    _fnUpdateInfo: Bb,
    _fnInfoMacros: Cb,
    _fnInitialise: ga,
    _fnInitComplete: ua,
    _fnLengthChange: Qa,
    _fnFeatureHtmlLength: nb,
    _fnFeatureHtmlPaginate: sb,
    _fnPageChange: Sa,
    _fnFeatureHtmlProcessing: pb,
    _fnProcessingDisplay: C,
    _fnFeatureHtmlTable: qb,
    _fnScrollDraw: ka,
    _fnApplyToChildren: H,
    _fnCalculateColumnWidths: Ea,
    _fnThrottle: Na,
    _fnConvertToWidth: Db,
    _fnGetWidestNode: Eb,
    _fnGetMaxLenString: Fb,
    _fnStringToCss: v,
    _fnSortFlatten: V,
    _fnSort: lb,
    _fnSortAria: Hb,
    _fnSortListener: Ua,
    _fnSortAttachListener: La,
    _fnSortingClasses: wa,
    _fnSortData: Gb,
    _fnSaveState: xa,
    _fnLoadState: Ib,
    _fnSettingsFromNode: ya,
    _fnLog: J,
    _fnMap: F,
    _fnBindAction: Va,
    _fnCallbackReg: z,
    _fnCallbackFire: r,
    _fnLengthOverflow: Ra,
    _fnRenderer: Ma,
    _fnDataSource: y,
    _fnRowAttributes: Ka,
    _fnCalculateEnd: function _fnCalculateEnd() {}
  });
  h.fn.dataTable = m;
  m.$ = h;
  h.fn.dataTableSettings = m.settings;
  h.fn.dataTableExt = m.ext;

  h.fn.DataTable = function (a) {
    return h(this).dataTable(a).api();
  };

  h.each(m, function (a, b) {
    h.fn.DataTable[a] = b;
  });
  return h.fn.dataTable;
});
/*!
 DataTables Bootstrap 3 integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/


(function (b) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (a) {
    return b(a, window, document);
  }) : "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = function (a, d) {
    a || (a = window);
    if (!d || !d.fn.dataTable) d = require("datatables.net")(a, d).$;
    return b(d, a, a.document);
  } : b(jQuery, window, document);
})(function (b, a, d, m) {
  var f = b.fn.dataTable;
  b.extend(!0, f.defaults, {
    dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    renderer: "bootstrap"
  });
  b.extend(f.ext.classes, {
    sWrapper: "dataTables_wrapper container-fluid dt-bootstrap4",
    sFilterInput: "form-control form-control-sm",
    sLengthSelect: "form-control form-control-sm",
    sProcessing: "dataTables_processing card",
    sPageButton: "paginate_button page-item"
  });

  f.ext.renderer.pageButton.bootstrap = function (a, h, r, s, j, n) {
    var o = new f.Api(a),
        t = a.oClasses,
        k = a.oLanguage.oPaginate,
        u = a.oLanguage.oAria.paginate || {},
        e,
        g,
        p = 0,
        q = function q(d, f) {
      var l,
          h,
          i,
          c,
          m = function m(a) {
        a.preventDefault();
        !b(a.currentTarget).hasClass("disabled") && o.page() != a.data.action && o.page(a.data.action).draw("page");
      };

      l = 0;

      for (h = f.length; l < h; l++) {
        if (c = f[l], b.isArray(c)) q(d, c);else {
          g = e = "";

          switch (c) {
            case "ellipsis":
              e = "&#x2026;";
              g = "disabled";
              break;

            case "first":
              e = k.sFirst;
              g = c + (0 < j ? "" : " disabled");
              break;

            case "previous":
              e = k.sPrevious;
              g = c + (0 < j ? "" : " disabled");
              break;

            case "next":
              e = k.sNext;
              g = c + (j < n - 1 ? "" : " disabled");
              break;

            case "last":
              e = k.sLast;
              g = c + (j < n - 1 ? "" : " disabled");
              break;

            default:
              e = c + 1, g = j === c ? "active" : "";
          }

          e && (i = b("<li>", {
            "class": t.sPageButton + " " + g,
            id: 0 === r && "string" === typeof c ? a.sTableId + "_" + c : null
          }).append(b("<a>", {
            href: "#",
            "aria-controls": a.sTableId,
            "aria-label": u[c],
            "data-dt-idx": p,
            tabindex: a.iTabIndex,
            "class": "page-link"
          }).html(e)).appendTo(d), a.oApi._fnBindAction(i, {
            action: c
          }, m), p++);
        }
      }
    },
        i;

    try {
      i = b(h).find(d.activeElement).data("dt-idx");
    } catch (v) {}

    q(b(h).empty().html('<ul class="pagination"/>').children("ul"), s);
    i !== m && b(h).find("[data-dt-idx=" + i + "]").focus();
  };

  return f;
});
/*
 * Note that this is toastr v2.1.3, the "latest" version in url has no more maintenance,
 * please go to https://cdnjs.com/libraries/toastr.js and pick a certain version you want to use,
 * make sure you copy the url from the website since the url may change between versions.
 * */


!function (e) {
  e(["jquery"], function (e) {
    return function () {
      function t(e, t, n) {
        return g({
          type: O.error,
          iconClass: m().iconClasses.error,
          message: e,
          optionsOverride: n,
          title: t
        });
      }

      function n(t, n) {
        return t || (t = m()), v = e("#" + t.containerId), v.length ? v : (n && (v = d(t)), v);
      }

      function o(e, t, n) {
        return g({
          type: O.info,
          iconClass: m().iconClasses.info,
          message: e,
          optionsOverride: n,
          title: t
        });
      }

      function s(e) {
        C = e;
      }

      function i(e, t, n) {
        return g({
          type: O.success,
          iconClass: m().iconClasses.success,
          message: e,
          optionsOverride: n,
          title: t
        });
      }

      function a(e, t, n) {
        return g({
          type: O.warning,
          iconClass: m().iconClasses.warning,
          message: e,
          optionsOverride: n,
          title: t
        });
      }

      function r(e, t) {
        var o = m();
        v || n(o), u(e, o, t) || l(o);
      }

      function c(t) {
        var o = m();
        return v || n(o), t && 0 === e(":focus", t).length ? void h(t) : void (v.children().length && v.remove());
      }

      function l(t) {
        for (var n = v.children(), o = n.length - 1; o >= 0; o--) {
          u(e(n[o]), t);
        }
      }

      function u(t, n, o) {
        var s = !(!o || !o.force) && o.force;
        return !(!t || !s && 0 !== e(":focus", t).length) && (t[n.hideMethod]({
          duration: n.hideDuration,
          easing: n.hideEasing,
          complete: function complete() {
            h(t);
          }
        }), !0);
      }

      function d(t) {
        return v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass), v.appendTo(e(t.target)), v;
      }

      function p() {
        return {
          tapToDismiss: !0,
          toastClass: "toast",
          containerId: "toast-container",
          debug: !1,
          showMethod: "fadeIn",
          showDuration: 300,
          showEasing: "swing",
          onShown: void 0,
          hideMethod: "fadeOut",
          hideDuration: 1e3,
          hideEasing: "swing",
          onHidden: void 0,
          closeMethod: !1,
          closeDuration: !1,
          closeEasing: !1,
          closeOnHover: !0,
          extendedTimeOut: 1e3,
          iconClasses: {
            error: "toast-error",
            info: "toast-info",
            success: "toast-success",
            warning: "toast-warning"
          },
          iconClass: "toast-info",
          positionClass: "toast-top-right",
          timeOut: 5e3,
          titleClass: "toast-title",
          messageClass: "toast-message",
          escapeHtml: !1,
          target: "body",
          closeHtml: '<button type="button">&times;</button>',
          closeClass: "toast-close-button",
          newestOnTop: !0,
          preventDuplicates: !1,
          progressBar: !1,
          progressClass: "toast-progress",
          rtl: !1
        };
      }

      function f(e) {
        C && C(e);
      }

      function g(t) {
        function o(e) {
          return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }

        function s() {
          c(), u(), d(), p(), g(), C(), l(), i();
        }

        function i() {
          var e = "";

          switch (t.iconClass) {
            case "toast-success":
            case "toast-info":
              e = "polite";
              break;

            default:
              e = "assertive";
          }

          I.attr("aria-live", e);
        }

        function a() {
          E.closeOnHover && I.hover(H, D), !E.onclick && E.tapToDismiss && I.click(b), E.closeButton && j && j.click(function (e) {
            e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0), E.onCloseClick && E.onCloseClick(e), b(!0);
          }), E.onclick && I.click(function (e) {
            E.onclick(e), b();
          });
        }

        function r() {
          I.hide(), I[E.showMethod]({
            duration: E.showDuration,
            easing: E.showEasing,
            complete: E.onShown
          }), E.timeOut > 0 && (k = setTimeout(b, E.timeOut), F.maxHideTime = parseFloat(E.timeOut), F.hideEta = new Date().getTime() + F.maxHideTime, E.progressBar && (F.intervalId = setInterval(x, 10)));
        }

        function c() {
          t.iconClass && I.addClass(E.toastClass).addClass(y);
        }

        function l() {
          E.newestOnTop ? v.prepend(I) : v.append(I);
        }

        function u() {
          if (t.title) {
            var e = t.title;
            E.escapeHtml && (e = o(t.title)), M.append(e).addClass(E.titleClass), I.append(M);
          }
        }

        function d() {
          if (t.message) {
            var e = t.message;
            E.escapeHtml && (e = o(t.message)), B.append(e).addClass(E.messageClass), I.append(B);
          }
        }

        function p() {
          E.closeButton && (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j));
        }

        function g() {
          E.progressBar && (q.addClass(E.progressClass), I.prepend(q));
        }

        function C() {
          E.rtl && I.addClass("rtl");
        }

        function O(e, t) {
          if (e.preventDuplicates) {
            if (t.message === w) return !0;
            w = t.message;
          }

          return !1;
        }

        function b(t) {
          var n = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod,
              o = t && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration,
              s = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;
          if (!e(":focus", I).length || t) return clearTimeout(F.intervalId), I[n]({
            duration: o,
            easing: s,
            complete: function complete() {
              h(I), clearTimeout(k), E.onHidden && "hidden" !== P.state && E.onHidden(), P.state = "hidden", P.endTime = new Date(), f(P);
            }
          });
        }

        function D() {
          (E.timeOut > 0 || E.extendedTimeOut > 0) && (k = setTimeout(b, E.extendedTimeOut), F.maxHideTime = parseFloat(E.extendedTimeOut), F.hideEta = new Date().getTime() + F.maxHideTime);
        }

        function H() {
          clearTimeout(k), F.hideEta = 0, I.stop(!0, !0)[E.showMethod]({
            duration: E.showDuration,
            easing: E.showEasing
          });
        }

        function x() {
          var e = (F.hideEta - new Date().getTime()) / F.maxHideTime * 100;
          q.width(e + "%");
        }

        var E = m(),
            y = t.iconClass || E.iconClass;

        if ("undefined" != typeof t.optionsOverride && (E = e.extend(E, t.optionsOverride), y = t.optionsOverride.iconClass || y), !O(E, t)) {
          T++, v = n(E, !0);
          var k = null,
              I = e("<div/>"),
              M = e("<div/>"),
              B = e("<div/>"),
              q = e("<div/>"),
              j = e(E.closeHtml),
              F = {
            intervalId: null,
            hideEta: null,
            maxHideTime: null
          },
              P = {
            toastId: T,
            state: "visible",
            startTime: new Date(),
            options: E,
            map: t
          };
          return s(), r(), a(), f(P), E.debug && console && console.log(P), I;
        }
      }

      function m() {
        return e.extend({}, p(), b.options);
      }

      function h(e) {
        v || (v = n()), e.is(":visible") || (e.remove(), e = null, 0 === v.children().length && (v.remove(), w = void 0));
      }

      var v,
          C,
          w,
          T = 0,
          O = {
        error: "error",
        info: "info",
        success: "success",
        warning: "warning"
      },
          b = {
        clear: r,
        remove: c,
        error: t,
        getContainer: n,
        info: o,
        options: {},
        subscribe: s,
        success: i,
        version: "2.1.3",
        warning: a
      };
      return b;
    }();
  });
}("function" == typeof define && define.amd ? define : function (e, t) {
  "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery);
});
