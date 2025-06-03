/**
 * xe-utils.js v3.7.2
 * MIT License.
 * @preserve
 */
!(function (n, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define(t)
      : (n.XEUtils = t());
})(this, function () {
  "use strict";
  function r() {}
  var y = {
    cookies: { path: "/" },
    treeOptions: { parentKey: "parentId", key: "id", children: "children" },
    parseDateFormat: "yyyy-MM-dd HH:mm:ss",
    firstDayOfWeek: 1,
  };
  function $(n) {
    return "__proto__" !== n && "constructor" !== n;
  }
  (r.VERSION = "3.7.2"),
    (r.mixin = function () {
      O(arguments, function (n) {
        A(n, function (t, n) {
          r[n] = M(t)
            ? function () {
                var n = t.apply(r.$context, arguments);
                return (r.$context = null), n;
              }
            : t;
        });
      });
    }),
    (r.setup = function (n) {
      return S(y, n);
    });
  var H = d(It(0, 7), function (n) {
    return [(n + 1) % 7, (n + 2) % 7, (n + 3) % 7];
  });
  function Z(n, t) {
    n = new Date(n).getDay();
    return $n(H[t], n);
  }
  function n(s, h) {
    return function (n, t) {
      var r = N(t) ? t : y.firstDayOfWeek,
        t = T(n);
      if (I(t)) {
        var e,
          n = gr(t, 0, r, r),
          t = s(n),
          u = p(t),
          i = p(n),
          o = i + 6 * g,
          a = new Date(o),
          t = gr(t, 0, r, r),
          c = p(t);
        if (i === c) return 1;
        if (h(n, a)) for (e = p(s(a)); e < o; e += g) if (Z(e, r)) return 1;
        var f = c + 6 * g,
          n = new Date(o),
          l = 1;
        if (h(t, n))
          for (l = 0, e = u; e < f; e += g)
            if (Z(e, r)) {
              l++;
              break;
            }
        return Math.floor((i - c) / vn) + l;
      }
      return NaN;
    };
  }
  function t(n, e) {
    var u = Object[n];
    return function (t) {
      var r = [];
      if (t) {
        if (u) return u(t);
        A(
          t,
          1 < e
            ? function (n) {
                r.push(["" + n, t[n]]);
              }
            : function () {
                r.push(arguments[e]);
              },
        );
      }
      return r;
    };
  }
  function C(e, u) {
    return function (n, t) {
      if (n) {
        if (n[e]) return n[e](t);
        if (w(n) || D(n)) return u(n, t);
        for (var r in n) if (m(n, r) && t === n[r]) return r;
      }
      return -1;
    };
  }
  function Y(t) {
    return function (n) {
      return "[object " + t + "]" === Dn.call(n);
    };
  }
  function L(t) {
    return function (n) {
      return typeof n === t;
    };
  }
  function P(o, a, c, f, l) {
    return function (n, t, r) {
      if (n && t) {
        if (o && n[o]) return n[o](t, r);
        if (a && D(n)) {
          for (var e = 0, u = n.length; e < u; e++)
            if (!!t.call(r, n[e], e, n) === f) return [!0, !1, e, n[e]][c];
        } else
          for (var i in n)
            if (m(n, i) && !!t.call(r, n[i], i, n) === f)
              return [!0, !1, i, n[i]][c];
      }
      return l;
    };
  }
  function U(u) {
    return function (n, t, r) {
      if (n && M(t)) {
        if (D(n) || w(n)) return u(n, t, r);
        for (var e in n) if (m(n, e) && t.call(r, n[e], e, n)) return e;
      }
      return -1;
    };
  }
  function q(o) {
    return function (n, t) {
      var n = F(n),
        r = n;
      if (n) {
        t >>= 0;
        var e = W(n).split("."),
          u = e[0],
          e = e[1] || "",
          i = e.substring(0, t + 1),
          u = u + (i ? "." + i : "");
        if (t >= e.length) return F(u);
        (u = n),
          (r =
            0 < t
              ? ((i = Math.pow(10, t)), Math[o](cn(u, i)) / i)
              : Math[o](u));
      }
      return r;
    };
  }
  function B(o) {
    return function (r, e) {
      var u, i;
      return r && r.length
        ? (O(r, function (n, t) {
            b((n = e ? (M(e) ? e(n, t, r) : Ot(n, e)) : n)) ||
              (!b(u) && !o(u, n)) ||
              ((i = t), (u = n));
          }),
          r[i])
        : u;
    };
  }
  function J(f, l) {
    return function (r, e) {
      var n,
        t,
        u = {},
        i = [],
        o = this,
        a = arguments,
        c = a.length;
      if (!M(e)) {
        for (t = 1; t < c; t++) i.push.apply(i, D((n = a[t])) ? n : [n]);
        e = 0;
      }
      return (
        A(r, function (n, t) {
          ((
            e
              ? e.call(o, n, t, r)
              : -1 <
                dt(i, function (n) {
                  return n === t;
                })
          )
            ? f
            : l) && (u[t] = n);
        }),
        u
      );
    };
  }
  function K(t) {
    return function (n) {
      if (n) {
        n = t(n && n.replace ? n.replace(/,/g, "") : n);
        if (!isNaN(n)) return n;
      }
      return 0;
    };
  }
  function Q(i) {
    return function (n, t, r, e) {
      var r = r || {},
        u = r.children || "children";
      return i(null, n, t, e, [], [], u, r);
    };
  }
  function V(n, t) {
    return n === t;
  }
  function X(t, r) {
    try {
      delete t[r];
    } catch (n) {
      t[r] = void 0;
    }
  }
  function G(r, e, u, i, n, t, o) {
    if (r === e) return !0;
    if (r && e && !N(r) && !N(e) && !w(r) && !w(e)) {
      if (Xn(r)) return u("" + r, "" + e, n, t, o);
      if (E(r) || Vn(r)) return u(+r, +e, n, t, o);
      var a,
        c,
        f,
        l = D(r),
        s = D(e);
      if (l || s ? l && s : r.constructor === e.constructor)
        return (
          (c = j(r)),
          (f = j(e)),
          i && (a = i(r, e, n)),
          c.length === f.length &&
            (h(a)
              ? _n(c, function (n, t) {
                  return (
                    n === f[t] && G(r[n], e[f[t]], u, i, l || s ? t : n, r, e)
                  );
                })
              : !!a)
        );
    }
    return u(r, e, n, t, o);
  }
  function nn(t) {
    var r = new RegExp("(?:" + j(t).join("|") + ")", "g");
    return function (n) {
      return R(n).replace(r, function (n) {
        return t[n];
      });
    };
  }
  function tn(n) {
    return n.getFullYear();
  }
  function rn(n) {
    return n.getMonth();
  }
  function p(n) {
    return n.getTime();
  }
  function en(n) {
    return n
      ? n.splice && n.join
        ? n
        : ("" + n)
            .replace(/(\[\d+\])\.?/g, "$1.")
            .replace(/\.$/, "")
            .split(".")
      : [];
  }
  function un() {
    return f ? f.origin || f.protocol + "//" + f.host : "";
  }
  function on(n) {
    return Date.UTC(
      n.y,
      n.M || 0,
      n.d || 1,
      n.H || 0,
      n.m || 0,
      n.s || 0,
      n.S || 0,
    );
  }
  function an(n) {
    return p(((n = n), new Date(tn(n), rn(n), n.getDate())));
  }
  function cn(n, t) {
    (n = W(n)), (t = W(t));
    return (
      (parseInt(n.replace(".", "")) * parseInt(t.replace(".", ""))) /
      Math.pow(10, i(n) + i(t))
    );
  }
  function fn() {
    return new Date();
  }
  function ln(n, t) {
    var r = W(n),
      e = W(t),
      r = Math.pow(10, Math.max(i(r), i(e)));
    return (Yt(n, r) + Yt(t, r)) / r;
  }
  function i(n) {
    return (n.split(".")[1] || "").length;
  }
  function sn(n, t) {
    var n = W(n),
      t = W(t),
      r = i(n),
      r = i(t) - r,
      e = r < 0,
      r = Math.pow(10, e ? Math.abs(r) : r);
    return Yt(n.replace(".", "") / t.replace(".", ""), e ? 1 / r : r);
  }
  function hn(n, t) {
    return n.substring(0, t) + "." + n.substring(t, n.length);
  }
  function o(n) {
    return n.toLowerCase();
  }
  function l(n, t) {
    return n.repeat
      ? n.repeat(t)
      : (t = isNaN(t) ? [] : new Array(v(t))).join(n) + (0 < t.length ? n : "");
  }
  function a(n, t, r) {
    return n.substring(t, r);
  }
  function pn(n) {
    return n.toUpperCase();
  }
  var c = "undefined",
    gn = "last",
    e = "first",
    g = 864e5,
    vn = 7 * g,
    f = typeof location == c ? 0 : location,
    dn = typeof window == c ? 0 : window,
    yn = typeof document == c ? 0 : document,
    mn = encodeURIComponent,
    bn = decodeURIComponent,
    Dn = Object.prototype.toString,
    v = parseInt,
    Mn = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;",
    },
    Sn = /(.+)?\[(\d+)\]$/,
    On = Object.assign;
  function wn(t, n, r) {
    for (var e, u = n.length, i = 1; i < u; i++)
      (e = n[i]),
        O(
          j(n[i]),
          r
            ? function (n) {
                t[n] = At(e[n], r);
              }
            : function (n) {
                t[n] = e[n];
              },
        );
    return t;
  }
  var S = function (n) {
    if (n) {
      var t = arguments;
      if (!0 !== n) return On ? On.apply(Object, t) : wn(n, t);
      if (1 < t.length) return wn((n = D(n[1]) ? [] : {}), t, !0);
    }
    return n;
  };
  function Nn(n, t, r) {
    if (n) for (var e in n) m(n, e) && t.call(r, n[e], e, n);
  }
  function xn(t, r, e) {
    Un(j(t), function (n) {
      r.call(e, t[n], n, t);
    });
  }
  function En(r, e, u) {
    var i,
      o,
      a = [];
    return (
      e
        ? (M(e) || (e = xr(e)),
          (o = {}),
          A(r, function (n, t) {
            (i = e.call(u, n, t, r)), o[i] || ((o[i] = 1), a.push(n));
          }))
        : A(r, function (n) {
            $n(a, n) || a.push(n);
          }),
      a
    );
  }
  var kn = Wn,
    jn = "asc",
    An = "desc";
  function Fn(n, t) {
    return h(n)
      ? 1
      : k(n)
        ? h(t)
          ? -1
          : 1
        : n && n.localeCompare
          ? n.localeCompare(t)
          : t < n
            ? 1
            : -1;
  }
  function Wn(n, t, r) {
    if (n) {
      if (b(t)) return Yn(n).sort(Fn);
      for (
        var e,
          u = d(n, function (n) {
            return { data: n };
          }),
          i =
            ((a = n),
            (c = u),
            (f = r),
            (l = []),
            O((n = D((n = t)) ? n : [n]), function (n, r) {
              var e, t;
              n &&
                (D((e = n))
                  ? ((e = n[0]), (t = n[1]))
                  : x(n) && ((e = n.field), (t = n.order)),
                l.push({ field: e, order: t || jn }),
                O(
                  c,
                  M(e)
                    ? function (n, t) {
                        n[r] = e.call(f, n.data, t, a);
                      }
                    : function (n) {
                        n[r] = e ? Ot(n.data, e) : n.data;
                      },
                ));
            }),
            l),
          o = i.length - 1;
        0 <= o;

      )
        (e = (function (u, i, o) {
          return function (n, t) {
            var r = n[u],
              e = t[u];
            return r === e
              ? o
                ? o(n, t)
                : 0
              : i.order === An
                ? Fn(e, r)
                : Fn(r, e);
          };
        })(o, i[o], e)),
          o--;
      return d((u = e ? u.sort(e) : u), xr("data"));
    }
    var a, c, f, l;
    return [];
  }
  function In(n) {
    for (var t, r = [], e = mt(n), u = e.length - 1; 0 <= u; u--)
      (t = 0 < u ? Tt(0, u) : 0), r.push(e[t]), e.splice(t, 1);
    return r;
  }
  var Tn = P("some", 1, 0, !0, !1),
    _n = P("every", 1, 1, !1, !0);
  function s(n, t, r) {
    var e = [],
      u = arguments.length;
    if (n) {
      if (((t = 2 <= u ? F(t) : 0), (r = 3 <= u ? F(r) : n.length), n.slice))
        return n.slice(t, r);
      for (; t < r; t++) e.push(n[t]);
    }
    return e;
  }
  var zn = P("find", 1, 3, !0);
  var Rn = P("", 0, 2, !0);
  function $n(n, t) {
    if (n) {
      if (n.includes) return n.includes(t);
      for (var r in n) if (m(n, r) && t === n[r]) return !0;
    }
    return !1;
  }
  function Hn(n, t) {
    if (n.indexOf) return n.indexOf(t);
    for (var r = 0, e = n.length; r < e; r++) if (t === n[r]) return r;
  }
  function Zn(n, t) {
    if (n.lastIndexOf) return n.lastIndexOf(t);
    for (var r = n.length - 1; 0 <= r; r--) if (t === n[r]) return r;
    return -1;
  }
  function d(n, t, r) {
    var e = [];
    if (n && 1 < arguments.length) {
      if (n.map) return n.map(t, r);
      A(n, function () {
        e.push(t.apply(r, arguments));
      });
    }
    return e;
  }
  function Cn(n) {
    var t,
      r,
      e,
      u = [];
    if (n && n.length)
      for (
        t = 0,
          e = (r = zt(n, function (n) {
            return n ? n.length : 0;
          }))
            ? r.length
            : 0;
        t < e;
        t++
      )
        u.push(Pn(n, t));
    return u;
  }
  function Yn(n) {
    return d(n, function (n) {
      return n;
    });
  }
  function Ln(n, t) {
    var r,
      e = 0;
    if (D(n) && D(t)) {
      for (r = t.length; e < r; e++) if (!$n(n, t[e])) return !1;
      return !0;
    }
    return $n(n, t);
  }
  function Pn(n, t) {
    return d(n, xr(t));
  }
  function O(n, t, r) {
    if (n)
      if (n.forEach) n.forEach(t, r);
      else for (var e = 0, u = n.length; e < u; e++) t.call(r, n[e], e, n);
  }
  function Un(n, t, r) {
    for (var e = n.length - 1; 0 <= e; e--) t.call(r, n[e], e, n);
  }
  var qn = Q(function n(t, r, e, u, i, o, a, c) {
    if (r)
      for (var f, l, s, h = 0, p = r.length; h < p; h++) {
        if (
          ((s = r[h]),
          (f = i.concat(["" + h])),
          (l = o.concat([s])),
          e.call(u, s, h, r, f, t, l))
        )
          return { index: h, item: s, path: f, items: r, parent: t, nodes: l };
        if (a && (s = s && n(s, s[a], e, u, f.concat([a]), l, a, c))) return s;
      }
  });
  var Bn = Q(function r(e, u, i, o, a, c, f, l) {
    var s, h;
    A(u, function (n, t) {
      (s = a.concat(["" + t])),
        (h = c.concat([n])),
        i.call(o, n, t, u, s, e, h),
        n && f && (s.push(f), r(n, n[f], i, o, s, h, f, l));
    });
  });
  var Jn = Q(function r(e, u, i, o, a, c, f, l) {
    var s,
      h,
      p,
      g = l.mapChildren || f;
    return d(u, function (n, t) {
      return (
        (s = a.concat(["" + t])),
        (h = c.concat([n])),
        (p = i.call(o, n, t, u, s, e, h)) &&
          n &&
          f &&
          n[f] &&
          (p[g] = r(n, n[f], i, o, s, h, f, l)),
        p
      );
    });
  });
  var Kn = Q(function (n, t, r, e, u, i, o, a) {
    return (function r(e, u, i, o, a, c, f, l, s) {
      var h,
        p,
        g,
        v,
        d,
        y = [],
        m = s.original,
        b = s.data,
        D = s.mapChildren || l,
        M = s.isEvery;
      return (
        O(i, function (n, t) {
          (h = c.concat(["" + t])),
            (p = f.concat([n])),
            (v = (e && !M) || o.call(a, n, t, i, h, u, p)),
            (d = l && n[l]),
            v || d
              ? (m ? (g = n) : ((g = S({}, n)), b && (g[b] = n)),
                (g[D] = r(v, n, n[l], o, a, h, p, l, s)),
                (v || g[D].length) && y.push(g))
              : v && y.push(g);
        }),
        y
      );
    })(0, n, t, r, e, u, i, o, a);
  });
  function m(n, t) {
    return !(!n || !n.hasOwnProperty) && n.hasOwnProperty(t);
  }
  function b(n) {
    return k(n) || h(n);
  }
  var h = L(c),
    D = Array.isArray || Y("Array");
  function Qn(n) {
    return !k(n) && !isNaN(n) && !D(n) && n % 1 == 0;
  }
  var M = L("function"),
    Vn = L("boolean"),
    w = L("string"),
    N = L("number"),
    Xn = Y("RegExp"),
    Gn = L("object");
  function x(n) {
    return !!n && n.constructor === Object;
  }
  var E = Y("Date"),
    nt = Y("Error");
  function tt(n) {
    for (var t in n) return !1;
    return !0;
  }
  function k(n) {
    return null === n;
  }
  var rt = typeof Symbol != c;
  function et(n) {
    return rt && Symbol.isSymbol ? Symbol.isSymbol(n) : "symbol" == typeof n;
  }
  var ut = Y("Arguments");
  var it = typeof FormData != c;
  var ot = typeof Map != c;
  var at = typeof WeakMap != c;
  var ct = typeof Set != c;
  var ft = typeof WeakSet != c;
  function lt(n) {
    var n = n ? T(n) : fn();
    return (
      !!E(n) && (n = n.getFullYear()) % 4 == 0 && (n % 100 != 0 || n % 400 == 0)
    );
  }
  function st(n, t) {
    return G(n, t, V);
  }
  var ht = 0;
  function pt(n) {
    var t = 0;
    return w(n) || D(n)
      ? n.length
      : (A(n, function () {
          t++;
        }),
        t);
  }
  var gt = C("indexOf", Hn),
    vt = C("lastIndexOf", Zn),
    dt = U(function (n, t, r) {
      for (var e = 0, u = n.length; e < u; e++)
        if (t.call(r, n[e], e, n)) return e;
      return -1;
    }),
    yt = U(function (n, t, r) {
      for (var e = n.length - 1; 0 <= e; e--)
        if (t.call(r, n[e], e, n)) return e;
      return -1;
    });
  var j = t("keys", 1),
    mt = t("values", 0),
    bt = t("entries", 2),
    Dt = J(1, 0),
    Mt = J(0, 1);
  function A(n, t, r) {
    return n && (D(n) ? O : Nn)(n, t, r);
  }
  function St(n, t, r) {
    return n && (D(n) ? Un : xn)(n, t, r);
  }
  function Ot(n, t, r) {
    return b(n) ||
      ((n = (function (n, t) {
        if (n) {
          var r,
            e,
            u,
            i = 0;
          if (n[t] || m(n, t)) return n[t];
          if (((e = en(t)), (u = e.length)))
            for (r = n; i < u; i++)
              if (
                b(
                  (r = (function (n, t) {
                    var r = t ? t.match(Sn) : "";
                    return r
                      ? r[1]
                        ? n[r[1]]
                          ? n[r[1]][r[2]]
                          : void 0
                        : n[r[2]]
                      : n[t];
                  })(r, e[i])),
                )
              )
                return i === u - 1 ? r : void 0;
          return r;
        }
      })(n, t)),
      h(n))
      ? r
      : n;
  }
  var wt = /(.+)?\[(\d+)\]$/;
  function Nt(n) {
    return "__proto__" === n || "constructor" === n || "prototype" === n;
  }
  function xt(r, e, u) {
    var i,
      n,
      o = {};
    return (
      r &&
        (e && Gn(e)
          ? ((n = e),
            (e = function () {
              return tt(n);
            }))
          : M(e) || (e = xr(e)),
        A(r, function (n, t) {
          (i = e ? e.call(u, n, t, r) : n), o[i] ? o[i].push(n) : (o[i] = [n]);
        })),
      o
    );
  }
  function Et(n, t) {
    n = n.__proto__.constructor;
    return t ? new n(t) : new n();
  }
  function kt(n, t) {
    return t ? jt(n, t) : n;
  }
  function jt(n, r) {
    if (n)
      switch (Dn.call(n)) {
        case "[object Object]":
          var e = Object.create(Object.getPrototypeOf(n));
          return (
            Nn(n, function (n, t) {
              e[t] = kt(n, r);
            }),
            e
          );
        case "[object Date]":
        case "[object RegExp]":
          return Et(n, n.valueOf());
        case "[object Array]":
        case "[object Arguments]":
          var t = [];
          return (
            O(n, function (n) {
              t.push(kt(n, r));
            }),
            t
          );
        case "[object Set]":
          var u = Et(n);
          return (
            u.forEach(function (n) {
              u.add(kt(n, r));
            }),
            u
          );
        case "[object Map]":
          var i = Et(n);
          return (
            i.forEach(function (n, t) {
              i.set(t, kt(n, r));
            }),
            i
          );
      }
    return n;
  }
  function At(n, t) {
    return n && jt(n, t);
  }
  function Ft(r, e, n) {
    if (r) {
      var t,
        u = 1 < arguments.length && (k(e) || !Gn(e)),
        n = u ? n : e;
      if (x(r))
        Nn(
          r,
          u
            ? function (n, t) {
                r[t] = e;
              }
            : function (n, t) {
                X(r, t);
              },
        ),
          n && S(r, n);
      else if (D(r)) {
        if (u) for (t = r.length; 0 < t; ) r[--t] = e;
        else r.length = 0;
        n && r.push.apply(r, n);
      }
    }
    return r;
  }
  function Wt(r, e, u) {
    var i, o, a;
    return (
      r &&
      (b(e)
        ? Ft(r)
        : ((i = []),
          (o = []),
          M(e) ||
            ((a = e),
            (e = function (n, t) {
              return t === a;
            })),
          A(r, function (n, t, r) {
            e.call(u, n, t, r) && i.push(t);
          }),
          D(r)
            ? St(i, function (n, t) {
                o.push(r[n]), r.splice(n, 1);
              })
            : ((o = {}),
              O(i, function (n) {
                (o[n] = r[n]), X(r, n);
              })),
          o))
    );
  }
  function It(n, t, r) {
    var e,
      u,
      i = [],
      o = arguments;
    if ((o.length < 2 && ((t = o[0]), (n = 0)), (u = t >> 0), (e = n >> 0) < t))
      for (r = r >> 0 || 1; e < u; e += r) i.push(e);
    return i;
  }
  function Tt(n, t) {
    return t <= n ? n : (n >>= 0) + Math.round(Math.random() * ((t || 9) - n));
  }
  var _t = B(function (n, t) {
      return t < n;
    }),
    zt = B(function (n, t) {
      return n < t;
    });
  var Rt = q("round"),
    $t = q("ceil"),
    Ht = q("floor");
  function Zt(n, t) {
    var n = R(Rt(n, (t >>= 0))).split("."),
      r = n[0],
      n = n[1] || "",
      e = t - n.length;
    return t ? (0 < e ? r + "." + n + l("0", e) : r + hn(n, Math.abs(e))) : r;
  }
  var F = K(parseFloat);
  function W(n) {
    var t,
      r,
      e,
      u,
      i,
      o,
      a,
      c = "" + n,
      f = c.match(/^([-+]?)((\d+)|((\d+)?[.](\d+)?))e([-+]{1})([0-9]+)$/);
    return f
      ? ((n = n < 0 ? "-" : ""),
        (t = f[3] || ""),
        (r = f[5] || ""),
        (e = f[6] || ""),
        (u = f[7]),
        (i = (f = f[8]) - e.length),
        (o = f - t.length),
        (a = f - r.length),
        "+" === u
          ? t
            ? n + t + l("0", f)
            : 0 < i
              ? n + r + e + l("0", i)
              : n + r + hn(e, f)
          : t
            ? 0 < o
              ? n + "0." + l("0", Math.abs(o)) + t
              : n + hn(t, o)
            : 0 < a
              ? n + "0." + l("0", Math.abs(a)) + r + e
              : n + hn(r, a) + e)
      : c;
  }
  var Ct = K(v);
  function Yt(n, t) {
    return cn(F(n), F(t));
  }
  function Lt(n, t, r) {
    var e = 0;
    return (
      A(
        n && 2 < n.length && D(n) ? n.sort() : n,
        t
          ? M(t)
            ? function () {
                e = ln(e, t.apply(r, arguments));
              }
            : function (n) {
                e = ln(e, Ot(n, t));
              }
          : function (n) {
              e = ln(e, n);
            },
      ),
      e
    );
  }
  var Pt =
    Date.now ||
    function () {
      return p(fn());
    };
  function I(n) {
    return E(n) && !isNaN(p(n));
  }
  function Ut(n) {
    return "(\\d{" + n + "})";
  }
  function qt(n) {
    return isNaN(n) ? n : v(n);
  }
  for (
    var Bt = Ut(2),
      Jt = Ut("1,2"),
      Kt = Ut("1,7"),
      Qt = Ut("3,4"),
      Vt = ".{1}" + Jt,
      Xt = "(([zZ])|([-+]\\d{2}:?\\d{2}))",
      Gt = [Qt, Vt, Vt, Vt, Vt, Vt, ".{1}" + Kt, Xt],
      nr = [],
      tr = Gt.length - 1;
    0 <= tr;
    tr--
  ) {
    for (var rr = "", er = 0; er < tr + 1; er++) rr += Gt[er];
    nr.push(new RegExp("^" + rr + "$"));
  }
  for (
    var ur = [
        ["yyyy", Qt],
        ["yy", Bt],
        ["MM", Bt],
        ["M", Jt],
        ["dd", Bt],
        ["d", Jt],
        ["HH", Bt],
        ["H", Jt],
        ["mm", Bt],
        ["m", Jt],
        ["ss", Bt],
        ["s", Jt],
        ["SSS", Ut(3)],
        ["S", Kt],
        ["Z", Xt],
      ],
      ir = {},
      or = ["\\[([^\\]]+)\\]"],
      er = 0;
    er < ur.length;
    er++
  ) {
    var ar = ur[er];
    (ir[ar[0]] = ar[1] + "?"), or.push(ar[0]);
  }
  var cr = new RegExp(or.join("|"), "g"),
    fr = {};
  function T(n, t) {
    if (n) {
      var r = E(n);
      if (r || (!t && /^[0-9]{11,15}$/.test(n)))
        return new Date((r ? p : v)(n));
      if (w(n)) {
        r = t
          ? (function (n, t) {
              var e,
                r,
                u = fr[t],
                i =
                  (u ||
                    ((e = []),
                    (r = t
                      .replace(/([$(){}*+.?\\^|])/g, "\\$1")
                      .replace(cr, function (n, t) {
                        var r = n.charAt(0);
                        return "[" === r ? t : (e.push(r), ir[n]);
                      })),
                    (u = fr[t] = { _i: e, _r: new RegExp(r) })),
                  {}),
                o = n.match(u._r);
              if (o)
                for (var a = u._i, c = 1, f = o.length; c < f; c++)
                  i[a[c - 1]] = o[c];
              return i;
            })(n, t)
          : (function (n) {
              for (var t, r = {}, e = 0, u = nr.length; e < u; e++)
                if ((t = n.match(nr[e]))) {
                  (r.y = t[1]),
                    (r.M = t[2]),
                    (r.d = t[3]),
                    (r.H = t[4]),
                    (r.m = t[5]),
                    (r.s = t[6]),
                    (r.S = t[7]),
                    (r.Z = t[8]);
                  break;
                }
              return r;
            })(n);
        if (r.y)
          return (
            r.M && (r.M = qt(r.M) - 1),
            r.S &&
              (r.S =
                (t = qt(r.S.substring(0, 3))) < 10
                  ? 100 * t
                  : t < 100
                    ? 10 * t
                    : t),
            r.Z
              ? /^[zZ]/.test((n = r).Z)
                ? new Date(on(n))
                : (t = n.Z.match(/([-+])(\d{2}):?(\d{2})/))
                  ? new Date(
                      on(n) -
                        ("-" === t[1] ? -1 : 1) * v(t[2]) * 36e5 +
                        6e4 * v(t[3]),
                    )
                  : new Date("")
              : new Date(
                  r.y,
                  r.M || 0,
                  r.d || 1,
                  r.H || 0,
                  r.m || 0,
                  r.s || 0,
                  r.S || 0,
                )
          );
      }
    }
    return new Date("");
  }
  function _(n, t, r, e) {
    t = t[r];
    return t ? (M(t) ? t(e, r, n) : t[e]) : e;
  }
  var lr =
    /\[([^\]]+)]|y{2,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|S{1,3}|Z{1,2}|W{1,2}|D{1,3}|[aAeEq]/g;
  function sr(e, n, r) {
    var u, t, i, o, a;
    return e
      ? I((e = T(e)))
        ? ((n = n || y.parseDateFormat || y.formatString),
          (u = e.getHours()),
          (t = u < 12 ? "am" : "pm"),
          (i = S(
            {},
            y.parseDateRules || y.formatStringMatchs,
            r ? r.formats : null,
          )),
          (a = {
            yyyy: (o = function (n, t) {
              return ("" + tn(e)).substr(4 - t);
            }),
            yy: o,
            MM: (o = function (n, t) {
              return z(rn(e) + 1, t, "0");
            }),
            M: o,
            dd: (o = function (n, t) {
              return z(e.getDate(), t, "0");
            }),
            d: o,
            HH: (o = function (n, t) {
              return z(u, t, "0");
            }),
            H: o,
            hh: (o = function (n, t) {
              return z(u <= 12 ? u : u - 12, t, "0");
            }),
            h: o,
            mm: (o = function (n, t) {
              return z(e.getMinutes(), t, "0");
            }),
            m: o,
            ss: (o = function (n, t) {
              return z(e.getSeconds(), t, "0");
            }),
            s: o,
            SSS: (o = function (n, t) {
              return z(e.getMilliseconds(), t, "0");
            }),
            S: o,
            ZZ: (o = function (n, t) {
              var r = (e.getTimezoneOffset() / 60) * -1;
              return _(
                e,
                i,
                n,
                (0 <= r ? "+" : "-") +
                  z(r, 2, "0") +
                  (1 === t ? ":" : "") +
                  "00",
              );
            }),
            Z: o,
            WW: (o = function (n, t) {
              return z(
                _(e, i, n, yr(e, (r ? r.firstDay : null) || y.firstDayOfWeek)),
                t,
                "0",
              );
            }),
            W: o,
            DDD: (o = function (n, t) {
              return z(_(e, i, n, dr(e)), t, "0");
            }),
            D: o,
            a: function (n) {
              return _(e, i, n, t);
            },
            A: function (n) {
              return _(e, i, n, pn(t));
            },
            e: function (n) {
              return _(e, i, n, e.getDay());
            },
            E: function (n) {
              return _(e, i, n, e.getDay());
            },
            q: function (n) {
              return _(e, i, n, Math.floor((rn(e) + 3) / 3));
            },
          }),
          n.replace(lr, function (n, t) {
            return t || (a[n] ? a[n](n, n.length) : n);
          }))
        : "Invalid Date"
      : "";
  }
  function hr(n, t, r) {
    if (
      I((n = T(n))) &&
      (t && ((t = t && !isNaN(t) ? t : 0), n.setFullYear(tn(n) + t)),
      r || !isNaN(r))
    ) {
      if (r === e) return new Date(tn(n), 0, 1);
      if (r === gn) return n.setMonth(11), pr(n, 0, gn);
      n.setMonth(r);
    }
    return n;
  }
  function pr(n, t, r) {
    t = t && !isNaN(t) ? t : 0;
    if (I((n = T(n)))) {
      if (r === e) return new Date(tn(n), rn(n) + t, 1);
      if (r === gn) return new Date(p(pr(n, t + 1, e)) - 1);
      if ((N(r) && n.setDate(r), t)) {
        r = n.getDate();
        if ((n.setMonth(rn(n) + t), r !== n.getDate()))
          return n.setDate(1), new Date(p(n) - g);
      }
    }
    return n;
  }
  function gr(n, t, r, e) {
    var u, i, o;
    return I((n = T(n)))
      ? ((o = N(r)),
        (i = N(e)),
        (u = p(n)),
        (o || i) &&
          ((i = i ? e : y.firstDayOfWeek),
          (e = n.getDay()) !== (o = o ? r : e)) &&
          ((r = 0),
          e < i ? (r = -(7 - i + e)) : i < e && (r = i - e),
          (u +=
            i < o
              ? ((0 === o ? 7 : o) - i + r) * g
              : o < i
                ? (7 - i + o + r) * g
                : r * g)),
        t && !isNaN(t) && (u += t * vn),
        new Date(u))
      : n;
  }
  function vr(n, t, r) {
    if (I((n = T(n))) && !isNaN(t)) {
      if ((n.setDate(n.getDate() + v(t)), r === e))
        return new Date(tn(n), rn(n), n.getDate());
      if (r === gn) return new Date(p(vr(n, 1, e)) - 1);
    }
    return n;
  }
  function dr(n) {
    return I((n = T(n))) ? Math.floor((an(n) - an(hr(n, 0, e))) / g) + 1 : NaN;
  }
  var yr = n(
      function (n) {
        return new Date(n.getFullYear(), 0, 1);
      },
      function (n, t) {
        return n.getFullYear() !== t.getFullYear();
      },
    ),
    Vt = n(
      function (n) {
        return new Date(n.getFullYear(), n.getMonth(), 1);
      },
      function (n, t) {
        return n.getMonth() !== t.getMonth();
      },
    );
  var mr = [
    ["yyyy", 31536e6],
    ["MM", 2592e6],
    ["dd", 864e5],
    ["HH", 36e5],
    ["mm", 6e4],
    ["ss", 1e3],
    ["S", 0],
  ];
  function br(n) {
    return n && n.trim ? n.trim() : Mr(Dr(n));
  }
  function Dr(n) {
    return n && n.trimLeft
      ? n.trimLeft()
      : R(n).replace(/^[\s\uFEFF\xA0]+/g, "");
  }
  function Mr(n) {
    return n && n.trimRight
      ? n.trimRight()
      : R(n).replace(/[\s\uFEFF\xA0]+$/g, "");
  }
  var Qt = nn(Mn),
    Sr = {},
    Bt =
      (A(Mn, function (n, t) {
        Sr[Mn[t]] = t;
      }),
      nn(Sr)),
    Or = {};
  var wr = {};
  function z(n, t, r) {
    n = R(n);
    return (
      (t >>= 0),
      (r = h(r) ? " " : "" + r),
      n.padStart
        ? n.padStart(t, r)
        : t > n.length
          ? ((t -= n.length) > r.length && (r += l(r, t / r.length)),
            r.slice(0, t) + n)
          : n
    );
  }
  function Nr(n, r, t) {
    return R(n).replace(
      (t || y).tmplRE || /\{{2}([.\w[\]\s]+)\}{2}/g,
      function (n, t) {
        return Ot(r, br(t));
      },
    );
  }
  function R(n) {
    return N(n) ? W(n) : "" + (b(n) ? "" : n);
  }
  function xr(t, r) {
    return function (n) {
      return k(n) ? r : n[t];
    };
  }
  function Er(n) {
    return jr(n.split("?")[1] || "");
  }
  function kr(n) {
    var e,
      t,
      u,
      n = "" + n;
    return (
      0 === n.indexOf("//")
        ? (n = (f ? f.protocol : "") + n)
        : 0 === n.indexOf("/") && (n = un() + n),
      (t = n.replace(/#.*/, "").match(/(\?.*)/)),
      ((u = {
        href: n,
        hash: "",
        host: "",
        hostname: "",
        protocol: "",
        port: "",
        search: t && t[1] && 1 < t[1].length ? t[1] : "",
      }).path = n
        .replace(/^([a-z0-9.+-]*:)\/\//, function (n, t) {
          return (u.protocol = t), "";
        })
        .replace(/^([a-z0-9.+-]*)(:\d+)?\/?/, function (n, t, r) {
          return (
            (e = r || ""),
            (u.port = e.replace(":", "")),
            (u.hostname = t),
            (u.host = t + e),
            "/"
          );
        })
        .replace(/(#.*)/, function (n, t) {
          return (u.hash = 1 < t.length ? t : ""), "";
        })),
      (t = u.hash.match(/#((.*)\?|(.*))/)),
      (u.pathname = u.path.replace(/(\?|#.*).*/, "")),
      (u.origin = u.protocol + "//" + u.host),
      (u.hashKey = (t && (t[2] || t[1])) || ""),
      (u.hashQuery = Er(u.hash)),
      (u.searchQuery = Er(u.search)),
      u
    );
  }
  function jr(n) {
    var t,
      r = {};
    return (
      n &&
        w(n) &&
        O(n.split("&"), function (n) {
          (t = n.split("=")), (r[bn(t[0])] = bn(t[1] || ""));
        }),
      r
    );
  }
  function Ar(n) {
    try {
      return n.setItem("__xe_t", 1), n.removeItem("__xe_t"), !0;
    } catch (n) {
      return !1;
    }
  }
  function Fr(n) {
    return -1 < navigator.userAgent.indexOf(n);
  }
  function Wr(n, t) {
    var r = parseFloat(t),
      e = fn(),
      u = p(e);
    switch (n) {
      case "y":
        return p(hr(e, r));
      case "M":
        return p(pr(e, r));
      case "d":
        return p(vr(e, r));
      case "h":
      case "H":
        return u + 60 * r * 60 * 1e3;
      case "m":
        return u + 60 * r * 1e3;
      case "s":
        return u + 1e3 * r;
    }
    return u;
  }
  function Ir(n) {
    return (E(n) ? n : new Date(n)).toUTCString();
  }
  function u(n, t, r) {
    var e, u, i, o, a, c, f;
    return (
      !!yn &&
      ((c = []),
      (f = arguments),
      D(n)
        ? (c = n)
        : 1 < f.length
          ? (c = [S({ name: n, value: t }, r)])
          : Gn(n) && (c = [n]),
      0 < c.length
        ? (O(c, function (n) {
            (e = S({}, y.cookies, n)),
              (i = []),
              e.name &&
                ((u = e.expires),
                i.push(
                  mn(e.name) +
                    "=" +
                    mn(Gn(e.value) ? JSON.stringify(e.value) : e.value),
                ),
                u &&
                  ((u = isNaN(u)
                    ? u.replace(
                        /^([0-9]+)(y|M|d|H|h|m|s)$/,
                        function (n, t, r) {
                          return Ir(Wr(r, t));
                        },
                      )
                    : /^[0-9]{11,13}$/.test(u) || E(u)
                      ? Ir(u)
                      : Ir(Wr("d", u))),
                  (e.expires = u)),
                O(["expires", "path", "domain", "secure"], function (n) {
                  h(e[n]) ||
                    i.push(e[n] && "secure" === n ? n : n + "=" + e[n]);
                })),
              (yn.cookie = i.join("; "));
          }),
          !0)
        : ((o = {}),
          (t = yn.cookie) &&
            O(t.split("; "), function (n) {
              (a = n.indexOf("=")),
                (o[bn(n.substring(0, a))] = bn(n.substring(a + 1) || ""));
            }),
          1 === f.length ? o[n] : o))
    );
  }
  function Tr(n) {
    return u(n);
  }
  function _r(n, t, r) {
    return u(n, t, r), u;
  }
  function zr(n, t) {
    u(n, "", S({ expires: -1 }, y.cookies, t));
  }
  function Rr() {
    return j(u());
  }
  return (
    S(u, {
      has: function (n) {
        return $n(Rr(), n);
      },
      set: _r,
      setItem: _r,
      get: Tr,
      getItem: Tr,
      remove: zr,
      removeItem: zr,
      keys: Rr,
      getJSON: function () {
        return u();
      },
    }),
    S(r, {
      assign: S,
      objectEach: Nn,
      lastObjectEach: xn,
      objectMap: function (r, e, u) {
        var i = {};
        if (r) {
          if (!e) return r;
          M(e) || (e = xr(e)),
            A(r, function (n, t) {
              i[t] = e.call(u, n, t, r);
            });
        }
        return i;
      },
      merge: function (n) {
        n = n || {};
        for (var t, r = arguments, e = r.length, u = 1; u < e; u++)
          (t = r[u]) &&
            !(function r(e, u) {
              return (x(e) && x(u)) || (D(e) && D(u))
                ? (A(u, function (n, t) {
                    $(t) && (e[t] = M(u) ? n : r(e[t], n));
                  }),
                  e)
                : u;
            })(n, t);
        return n;
      },
      uniq: En,
      union: function () {
        for (var n = arguments, t = [], r = 0, e = n.length; r < e; r++)
          t = t.concat(Yn(n[r]));
        return En(t);
      },
      sortBy: kn,
      orderBy: Wn,
      shuffle: In,
      sample: function (n, t) {
        return (
          (n = In(n)),
          arguments.length <= 1
            ? n[0]
            : (t < n.length && (n.length = t || 0), n)
        );
      },
      some: Tn,
      every: _n,
      slice: s,
      filter: function (r, e, u) {
        var i = [];
        if (r && e) {
          if (r.filter) return r.filter(e, u);
          A(r, function (n, t) {
            e.call(u, n, t, r) && i.push(n);
          });
        }
        return i;
      },
      find: zn,
      findLast: function (n, t, r) {
        if (n)
          for (var e = (n = D(n) ? n : mt(n)).length - 1; 0 <= e; e--)
            if (t.call(r, n[e], e, n)) return n[e];
      },
      findKey: Rn,
      includes: $n,
      arrayIndexOf: Hn,
      arrayLastIndexOf: Zn,
      map: d,
      reduce: function (n, t, r) {
        if (n) {
          var e,
            u,
            i = 0,
            o = r,
            r = 2 < arguments.length,
            a = j(n);
          if (n.length && n.reduce)
            return (
              (u = function () {
                return t.apply(null, arguments);
              }),
              r ? n.reduce(u, o) : n.reduce(u)
            );
          for (r && ((i = 1), (o = n[a[0]])), e = a.length; i < e; i++)
            o = t.call(null, o, n[a[i]], i, n);
          return o;
        }
      },
      copyWithin: function (n, t, r, e) {
        if (D(n) && n.copyWithin) return n.copyWithin(t, r, e);
        var u,
          i,
          o = t >> 0,
          t = r >> 0,
          a = n.length,
          r = 3 < arguments.length ? e >> 0 : a;
        if (
          o < a &&
          0 <= (o = 0 <= o ? o : a + o) &&
          (t = 0 <= t ? t : a + t) < (r = 0 <= r ? r : a + r)
        )
          for (u = 0, i = n.slice(t, r); o < a && !(i.length <= u); o++)
            n[o] = i[u++];
        return n;
      },
      chunk: function (n, t) {
        var r,
          e = [],
          u = t >> 0 || 1;
        if (D(n))
          if (0 <= u && n.length > u)
            for (r = 0; r < n.length; ) e.push(n.slice(r, r + u)), (r += u);
          else e = n.length ? [n] : n;
        return e;
      },
      zip: function () {
        return Cn(arguments);
      },
      unzip: Cn,
      zipObject: function (n, r) {
        var e = {};
        return (
          (r = r || []),
          A(mt(n), function (n, t) {
            e[n] = r[t];
          }),
          e
        );
      },
      flatten: function (n, t) {
        return D(n)
          ? (function t(n, r) {
              var e = [];
              return (
                O(n, function (n) {
                  e = e.concat(D(n) ? (r ? t(n, r) : n) : [n]);
                }),
                e
              );
            })(n, t)
          : [];
      },
      toArray: Yn,
      includeArrays: Ln,
      pluck: Pn,
      invoke: function (n, t) {
        for (
          var r, e = arguments, u = [], i = [], o = 2, a = e.length;
          o < a;
          o++
        )
          u.push(e[o]);
        if (D(t)) {
          for (a = t.length - 1, o = 0; o < a; o++) i.push(t[o]);
          t = t[a];
        }
        return d(n, function (n) {
          if (
            (i.length &&
              (n = (function (n, t) {
                for (var r = 0, e = t.length; n && r < e; ) n = n[t[r++]];
                return e && n ? n : 0;
              })(n, i)),
            (r = n[t] || t) && r.apply)
          )
            return r.apply(n, u);
        });
      },
      arrayEach: O,
      lastArrayEach: Un,
      toArrayTree: function (n, t) {
        var r,
          e,
          u,
          i,
          o = (t = S({}, y.treeOptions, t)).strict,
          a = t.key,
          c = t.parentKey,
          f = t.children,
          l = t.mapChildren,
          s = t.sortKey,
          h = t.reverse,
          p = t.data,
          g = [],
          v = {},
          d = {};
        return (
          A((n = s && ((n = Wn(At(n), s)), h) ? n.reverse() : n), function (n) {
            (r = n[a]), (d[r] = !0);
          }),
          A(n, function (n) {
            (r = n[a]),
              p ? ((e = {})[p] = n) : (e = n),
              (u = n[c]),
              (v[r] = v[r] || []),
              (e[a] = r),
              (e[c] = u),
              r === u && ((u = null), console.log("Fix infinite Loop.", n)),
              (v[u] = v[u] || []),
              v[u].push(e),
              (e[f] = v[r]),
              l && (e[l] = v[r]),
              (o && !b(u)) || d[u] || g.push(e);
          }),
          o &&
            ((i = f),
            A(n, function (n) {
              n[i] && !n[i].length && Wt(n, i);
            })),
          g
        );
      },
      toTreeArray: function (n, t) {
        return (function r(e, u, n, i) {
          var o = i.key,
            a = i.parentKey,
            c = i.children,
            f = i.data,
            l = i.updated,
            s = i.clear;
          return (
            O(n, function (n) {
              var t = n[c];
              f && (n = n[f]),
                !1 !== l && (n[a] = u ? u[o] : null),
                e.push(n),
                t && t.length && r(e, n, t, i),
                s && delete n[c];
            }),
            e
          );
        })([], null, n, S({}, y.treeOptions, t));
      },
      findTree: qn,
      eachTree: Bn,
      mapTree: Jn,
      filterTree: function (n, o, t, a) {
        var c = [];
        return (
          n &&
            o &&
            Bn(
              n,
              function (n, t, r, e, u, i) {
                o.call(a, n, t, r, e, u, i) && c.push(n);
              },
              t,
            ),
          c
        );
      },
      searchTree: Kn,
      hasOwnProp: m,
      eqNull: b,
      isNaN: function (n) {
        return N(n) && isNaN(n);
      },
      isFinite: function (n) {
        return N(n) && isFinite(n);
      },
      isUndefined: h,
      isArray: D,
      isFloat: function (n) {
        return !(k(n) || isNaN(n) || D(n) || Qn(n));
      },
      isInteger: Qn,
      isFunction: M,
      isBoolean: Vn,
      isString: w,
      isNumber: N,
      isRegExp: Xn,
      isObject: Gn,
      isPlainObject: x,
      isDate: E,
      isError: nt,
      isTypeError: function (n) {
        return !!n && n.constructor === TypeError;
      },
      isEmpty: tt,
      isNull: k,
      isSymbol: et,
      isArguments: ut,
      isElement: function (n) {
        return !!(n && w(n.nodeName) && N(n.nodeType));
      },
      isDocument: function (n) {
        return !(!n || !yn || 9 !== n.nodeType);
      },
      isWindow: function (n) {
        return !(!dn || !n || n !== n.window);
      },
      isFormData: function (n) {
        return it && n instanceof FormData;
      },
      isMap: function (n) {
        return ot && n instanceof Map;
      },
      isWeakMap: function (n) {
        return at && n instanceof WeakMap;
      },
      isSet: function (n) {
        return ct && n instanceof Set;
      },
      isWeakSet: function (n) {
        return ft && n instanceof WeakSet;
      },
      isLeapYear: lt,
      isMatch: function (r, e) {
        var n = j(r),
          t = j(e);
        return (
          !t.length ||
          (Ln(n, t)
            ? Tn(t, function (t) {
                return (
                  -1 <
                  dt(n, function (n) {
                    return n === t && st(r[n], e[t]);
                  })
                );
              })
            : st(r, e))
        );
      },
      isEqual: st,
      isEqualWith: function (n, t, i) {
        return M(i)
          ? G(
              n,
              t,
              function (n, t, r, e, u) {
                r = i(n, t, r, e, u);
                return h(r) ? n === t : !!r;
              },
              i,
            )
          : G(n, t, V);
      },
      getType: function (n) {
        return k(n)
          ? "null"
          : et(n)
            ? "symbol"
            : E(n)
              ? "date"
              : D(n)
                ? "array"
                : Xn(n)
                  ? "regexp"
                  : nt(n)
                    ? "error"
                    : typeof n;
      },
      uniqueId: function (n) {
        return [n, ++ht].join("");
      },
      getSize: pt,
      indexOf: gt,
      lastIndexOf: vt,
      findIndexOf: dt,
      findLastIndexOf: yt,
      toStringJSON: function (n) {
        if (x(n)) return n;
        if (w(n))
          try {
            return JSON.parse(n);
          } catch (n) {}
        return {};
      },
      toJSONString: function (n) {
        return b(n) ? "" : JSON.stringify(n);
      },
      keys: j,
      values: mt,
      entries: bt,
      pick: Dt,
      omit: Mt,
      first: function (n) {
        return mt(n)[0];
      },
      last: function (n) {
        return (n = mt(n))[n.length - 1];
      },
      each: A,
      forOf: function (n, t, r) {
        if (n)
          if (D(n))
            for (
              var e = 0, u = n.length;
              e < u && !1 !== t.call(r, n[e], e, n);
              e++
            );
          else
            for (var i in n) if (m(n, i) && !1 === t.call(r, n[i], i, n)) break;
      },
      lastForOf: function (n, t, r) {
        var e, u;
        if (n)
          if (D(n))
            for (e = n.length - 1; 0 <= e && !1 !== t.call(r, n[e], e, n); e--);
          else
            for (
              e = (u = j(n)).length - 1;
              0 <= e && !1 !== t.call(r, n[u[e]], u[e], n);
              e--
            );
      },
      lastEach: St,
      has: function (n, t) {
        if (n) {
          if (m(n, t)) return !0;
          for (
            var r, e, u, i, o = en(t), a = 0, c = o.length, f = n;
            a < c &&
            ((i = !1),
            (u = (r = o[a]) ? r.match(Sn) : "")
              ? ((e = u[1]),
                (u = u[2]),
                e
                  ? f[e] && m(f[e], u) && ((i = !0), (f = f[e][u]))
                  : m(f, u) && ((i = !0), (f = f[u])))
              : m(f, r) && ((i = !0), (f = f[r])),
            i);
            a++
          )
            if (a === c - 1) return !0;
        }
        return !1;
      },
      get: Ot,
      set: function (n, t, r) {
        if (n && $(t))
          if ((!n[t] && !m(n, t)) || Nt(t))
            for (var e = n, u = en(t), i = u.length, o = 0; o < i; o++)
              Nt(u[o]) ||
                ((a = e),
                (c = u[o]),
                (l = (f = o === i - 1) ? null : u[o + 1]),
                (s = r),
                (h = void 0),
                (e = a[c]
                  ? (f && (a[c] = s), a[c])
                  : ((h = c ? c.match(wt) : null),
                    (l = f
                      ? s
                      : (s = l ? l.match(wt) : null) && !s[1]
                        ? new Array(v(s[2]) + 1)
                        : {}),
                    h
                      ? h[1]
                        ? ((s = v(h[2])),
                          a[h[1]]
                            ? !f && a[h[1]][s]
                              ? (l = a[h[1]][s])
                              : (a[h[1]][s] = l)
                            : ((a[h[1]] = new Array(s + 1)), (a[h[1]][s] = l)))
                        : (a[h[2]] = l)
                      : (a[c] = l),
                    l)));
          else n[t] = r;
        var a, c, f, l, s, h;
        return n;
      },
      groupBy: xt,
      countBy: function (n, t, r) {
        var e = xt(n, t, r || this);
        return (
          Nn(e, function (n, t) {
            e[t] = n.length;
          }),
          e
        );
      },
      clone: At,
      clear: Ft,
      remove: Wt,
      range: It,
      destructuring: function (t, n) {
        var r, e;
        return (
          t &&
            n &&
            ((r = S.apply(this, [{}].concat(s(arguments, 1)))),
            (e = j(r)),
            O(j(t), function (n) {
              $n(e, n) && (t[n] = r[n]);
            })),
          t
        );
      },
      random: Tt,
      min: _t,
      max: zt,
      commafy: function (n, t) {
        var r,
          e,
          u,
          i,
          o,
          a = (t = S({}, y.commafyOptions, t)).digits;
        return (
          N(n)
            ? ((r = (t.ceil ? $t : t.floor ? Ht : Rt)(n, a)),
              (i = (e = W(a ? Zt(r, a) : r).split("."))[0]),
              (o = e[1]),
              (u = i && r < 0) && (i = i.substring(1, i.length)))
            : (i = (e = (r = R(n).replace(/,/g, "")) ? [r] : [])[0]),
          e.length
            ? (u ? "-" : "") +
              i.replace(
                new RegExp(
                  "(?=(?!(\\b))(.{" + (t.spaceNumber || 3) + "})+$)",
                  "g",
                ),
                t.separator || ",",
              ) +
              (o ? "." + o : "")
            : r
        );
      },
      round: Rt,
      ceil: $t,
      floor: Ht,
      toFixed: Zt,
      toNumber: F,
      toNumberString: W,
      toInteger: Ct,
      add: function (n, t) {
        return ln(F(n), F(t));
      },
      subtract: function (n, t) {
        var n = F(n),
          t = F(t),
          r = W(n),
          e = W(t),
          r = i(r),
          e = i(e),
          u = Math.pow(10, Math.max(r, e));
        return parseFloat(Zt((n * u - t * u) / u, e <= r ? r : e));
      },
      multiply: Yt,
      divide: function (n, t) {
        return sn(F(n), F(t));
      },
      sum: Lt,
      mean: function (n, t, r) {
        return sn(Lt(n, t, r), pt(n));
      },
      now: Pt,
      timestamp: function (n, t) {
        return n ? ((n = T(n, t)), E(n) ? p(n) : n) : Pt();
      },
      isValidDate: I,
      isDateSame: function (n, t, r) {
        return (
          !(!n || !t) && "Invalid Date" !== (n = sr(n, r)) && n === sr(t, r)
        );
      },
      toStringDate: T,
      toDateString: sr,
      getWhatYear: hr,
      getWhatQuarter: function (n, t, r) {
        var e,
          t = t && !isNaN(t) ? 3 * t : 0;
        return I((n = T(n)))
          ? ((e =
              3 *
              (((e = (e = n).getMonth()) < 3 ? 1 : e < 6 ? 2 : e < 9 ? 3 : 4) -
                1)),
            n.setMonth(e),
            pr(n, t, r))
          : n;
      },
      getWhatMonth: pr,
      getWhatWeek: gr,
      getWhatDay: vr,
      getYearDay: dr,
      getYearWeek: yr,
      getMonthWeek: Vt,
      getDayOfYear: function (n, t) {
        return I((n = T(n))) ? (lt(hr(n, t)) ? 366 : 365) : NaN;
      },
      getDayOfMonth: function (n, t) {
        return I((n = T(n)))
          ? Math.floor((p(pr(n, t, gn)) - p(pr(n, t, e))) / g) + 1
          : NaN;
      },
      getDateDiff: function (n, t) {
        var r,
          e,
          u,
          i,
          o,
          a,
          c = { done: !1, time: 0 };
        if (
          ((n = T(n)),
          (t = t ? T(t) : fn()),
          I(n) && I(t) && (r = p(n)) < (e = p(t)))
        )
          for (
            i = c.time = e - r, c.done = !0, a = 0, o = mr.length;
            a < o;
            a++
          )
            i >= (u = mr[a])[1]
              ? a === o - 1
                ? (c[u[0]] = i || 0)
                : ((c[u[0]] = Math.floor(i / u[1])), (i -= c[u[0]] * u[1]))
              : (c[u[0]] = 0);
        return c;
      },
      trim: br,
      trimLeft: Dr,
      trimRight: Mr,
      escape: Qt,
      unescape: Bt,
      camelCase: function (n) {
        var u, t;
        return (
          (n = R(n)),
          Or[n] ||
            ((u = n.length),
            (u = (t = n.replace(/([-]+)/g, function (n, t, r) {
              return r && r + t.length < u ? "-" : "";
            })).length),
            (t = t
              .replace(/([A-Z]+)/g, function (n, t, r) {
                var e = t.length;
                return (
                  (t = o(t)),
                  r
                    ? 2 < e && r + e < u
                      ? pn(a(t, 0, 1)) + a(t, 1, e - 1) + pn(a(t, e - 1, e))
                      : pn(a(t, 0, 1)) + a(t, 1, e)
                    : 1 < e && r + e < u
                      ? a(t, 0, e - 1) + pn(a(t, e - 1, e))
                      : t
                );
              })
              .replace(/(-[a-zA-Z])/g, function (n, t) {
                return pn(a(t, 1, t.length));
              })),
            (Or[n] = t))
        );
      },
      kebabCase: function (n) {
        var e;
        return (
          (n = R(n)),
          wr[n] ||
            (/^[A-Z]+$/.test(n)
              ? o(n)
              : ((e = (e = n
                  .replace(/^([a-z])([A-Z]+)([a-z]+)$/, function (n, t, r, e) {
                    var u = r.length;
                    return 1 < u
                      ? t +
                          "-" +
                          o(a(r, 0, u - 1)) +
                          "-" +
                          o(a(r, u - 1, u)) +
                          e
                      : o(t + "-" + r + e);
                  })
                  .replace(/^([A-Z]+)([a-z]+)?$/, function (n, t, r) {
                    var e = t.length;
                    return o(a(t, 0, e - 1) + "-" + a(t, e - 1, e) + (r || ""));
                  })
                  .replace(
                    /([a-z]?)([A-Z]+)([a-z]?)/g,
                    function (n, t, r, e, u) {
                      var i = r.length;
                      return 1 < i && (t && (t += "-"), e)
                        ? (t || "") +
                            o(a(r, 0, i - 1)) +
                            "-" +
                            o(a(r, i - 1, i)) +
                            e
                        : (t || "") + (u ? "-" : "") + o(r) + (e || "");
                    },
                  )).replace(/([-]+)/g, function (n, t, r) {
                  return r && r + t.length < e.length ? "-" : "";
                })),
                (wr[n] = e)))
        );
      },
      repeat: function (n, t) {
        return l(R(n), t);
      },
      padStart: z,
      padEnd: function (n, t, r) {
        return (
          (n = R(n)),
          (t >>= 0),
          (r = h(r) ? " " : "" + r),
          n.padEnd
            ? n.padEnd(t, r)
            : t > n.length
              ? ((t -= n.length) > r.length && (r += l(r, t / r.length)),
                n + r.slice(0, t))
              : n
        );
      },
      startsWith: function (n, t, r) {
        return (
          (n = R(n)),
          0 === (1 === arguments.length ? n : n.substring(r)).indexOf(t)
        );
      },
      endsWith: function (n, t, r) {
        var n = R(n),
          e = arguments.length;
        return (
          1 < e &&
          (2 < e
            ? n.substring(0, r).indexOf(t) === r - 1
            : n.indexOf(t) === n.length - 1)
        );
      },
      template: Nr,
      toFormatString: function (n, t) {
        return Nr(n, t, { tmplRE: /\{([.\w[\]\s]+)\}/g });
      },
      toString: R,
      toValueString: R,
      noop: function () {},
      property: xr,
      bind: function (n, t) {
        var r = s(arguments, 2);
        return function () {
          return n.apply(t, s(arguments).concat(r));
        };
      },
      once: function (n, t) {
        var r = !1,
          e = null,
          u = s(arguments, 2);
        return function () {
          return r || ((e = n.apply(t, s(arguments).concat(u))), (r = !0)), e;
        };
      },
      after: function (t, r, e) {
        var u = 0,
          i = [];
        return function () {
          var n = arguments;
          ++u <= t && i.push(n[0]), t <= u && r.apply(e, [i].concat(s(n)));
        };
      },
      before: function (t, r, e) {
        var u = 0,
          i = [];
        return (
          (e = e || this),
          function () {
            var n = arguments;
            ++u < t && (i.push(n[0]), r.apply(e, [i].concat(s(n))));
          }
        );
      },
      throttle: function (n, t, r) {
        function e() {
          (u = arguments),
            (i = this),
            (o = !1),
            null === a && (!0 === c ? s() : !0 === f && (a = setTimeout(h, t)));
        }
        var u = null,
          i = null,
          o = !1,
          a = null,
          c = !("leading" in (r = r || {})) || r.leading,
          f = "trailing" in r && r.trailing,
          l = function () {
            i = u = null;
          },
          s = function () {
            (o = !0), n.apply(i, u), (a = setTimeout(h, t)), l();
          },
          h = function () {
            (a = null), o || !0 !== f || s();
          };
        return (
          (e.cancel = function () {
            var n = null !== a;
            return n && clearTimeout(a), l(), (a = null), (o = !1), n;
          }),
          e
        );
      },
      debounce: function (n, t, r) {
        function e() {
          !0 === l && (f = null), c || !0 !== s || p();
        }
        function u() {
          (c = !1),
            (i = arguments),
            (o = this),
            null === f ? !0 === l && p() : clearTimeout(f),
            (f = setTimeout(e, t));
        }
        var i = null,
          o = null,
          a = r || {},
          c = !1,
          f = null,
          r = "boolean" == typeof r,
          l = "leading" in a ? a.leading : r,
          s = "trailing" in a ? a.trailing : !r,
          h = function () {
            o = i = null;
          },
          p = function () {
            (c = !0), n.apply(o, i), h();
          };
        return (
          (u.cancel = function () {
            var n = null !== f;
            return n && clearTimeout(f), h(), (f = null), (c = !1), n;
          }),
          u
        );
      },
      delay: function (n, t) {
        var r = s(arguments, 2),
          e = this;
        return setTimeout(function () {
          n.apply(e, r);
        }, t);
      },
      unserialize: jr,
      serialize: function (n) {
        var r,
          e = [];
        return (
          A(n, function (n, t) {
            h(n) ||
              ((r = D(n)),
              x(n) || r
                ? (e = e.concat(
                    (function r(n, e, u) {
                      var i,
                        o = [];
                      return (
                        A(n, function (n, t) {
                          (i = D(n)),
                            x(n) || i
                              ? (o = o.concat(r(n, e + "[" + t + "]", i)))
                              : o.push(
                                  mn(e + "[" + (u ? "" : t) + "]") +
                                    "=" +
                                    mn(k(n) ? "" : n),
                                );
                        }),
                        o
                      );
                    })(n, t, r),
                  ))
                : e.push(mn(t) + "=" + mn(k(n) ? "" : n)));
          }),
          e.join("&").replace(/%20/g, "+")
        );
      },
      parseUrl: kr,
      getBaseURL: function () {
        var n, t;
        return f
          ? ((n = f.pathname),
            (t = vt(n, "/") + 1),
            un() + (t === n.length ? n : n.substring(0, t)))
          : "";
      },
      locat: function () {
        return f ? kr(f.href) : {};
      },
      browse: function () {
        var t,
          n,
          r,
          e,
          u = !1,
          i = !1,
          o = { isNode: !1, isMobile: !1, isPC: !1, isDoc: !!yn };
        if (dn || typeof process == c) {
          (r = Fr("Edge")),
            (n = Fr("Chrome")),
            (e =
              /(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone)/.test(
                navigator.userAgent,
              )),
            o.isDoc &&
              ((t = yn.body || yn.documentElement),
              O(["webkit", "khtml", "moz", "ms", "o"], function (n) {
                o["-" + n] = !!t[n + "MatchesSelector"];
              }));
          try {
            u = Ar(dn.localStorage);
          } catch (n) {}
          try {
            i = Ar(dn.sessionStorage);
          } catch (n) {}
          S(o, {
            edge: r,
            firefox: Fr("Firefox"),
            msie: !r && o["-ms"],
            safari: !n && !r && Fr("Safari"),
            isMobile: e,
            isPC: !e,
            isLocalStorage: u,
            isSessionStorage: i,
          });
        } else o.isNode = !0;
        return o;
      },
      cookie: u,
    }),
    r
  );
});
