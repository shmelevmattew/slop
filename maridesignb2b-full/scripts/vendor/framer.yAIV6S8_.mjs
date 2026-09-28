import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  E as i,
  F as a,
  I as o,
  L as s,
  M as c,
  N as l,
  O as u,
  P as d,
  R as f,
  S as p,
  _ as m,
  a as h,
  b as g,
  c as _,
  d as v,
  f as y,
  g as b,
  h as x,
  i as S,
  j as C,
  k as w,
  l as T,
  m as E,
  o as D,
  s as O,
  u as k,
  v as A,
  w as j,
  x as M,
  y as N,
} from "./react.D20wc1Tc.mjs";
import {
  $ as ee,
  A as P,
  B as F,
  C as I,
  D as te,
  E as ne,
  F as re,
  G as L,
  H as ie,
  I as ae,
  J as oe,
  K as se,
  M as ce,
  N as le,
  O as ue,
  P as de,
  Q as fe,
  R as pe,
  S as R,
  T as me,
  U as he,
  V as ge,
  W as _e,
  X as ve,
  Y as z,
  Z as ye,
  _ as be,
  a as xe,
  b as Se,
  c as Ce,
  d as we,
  et as Te,
  f as Ee,
  g as De,
  h as Oe,
  i as ke,
  it as Ae,
  j as je,
  k as Me,
  l as Ne,
  m as Pe,
  n as Fe,
  nt as Ie,
  o as Le,
  p as Re,
  q as ze,
  r as Be,
  rt as Ve,
  s as He,
  tt as Ue,
  u as We,
  v as Ge,
  w as Ke,
  x as qe,
  y as Je,
  z as Ye,
} from "./motion.CkcImXlK.mjs";
function Xe(e) {
  return typeof e == `function`;
}
function Ze(e) {
  return typeof e == `boolean`;
}
function B(e) {
  return typeof e == `string`;
}
function V(e) {
  return Number.isFinite(e);
}
function Qe(e) {
  return Array.isArray(e);
}
function H(e) {
  return typeof e == `object` && !!e && !Qe(e);
}
function $e(e) {
  for (let t in e) return !1;
  return !0;
}
function et(e) {
  return e === void 0;
}
function tt(e) {
  return e === null;
}
function nt(e) {
  return e == null;
}
function rt(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function it(e) {
  return H(e) && Xe(e.return);
}
function at(e) {
  return H(e) && Xe(e.then);
}
function ot(e) {
  return e instanceof Promise;
}
function st(e) {
  return `url('${ct(e)}')`;
}
function ct(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function lt(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function ut(e, t, n) {
  if (Wv.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (Wv.set(e, t), t))
    .catch((t) => {
      throw (Wv.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(Iv), Wv.set(e, r));
}
function dt(e, t) {
  Lv && (Gv.set(e, t), Kv.has(e) && ut(e, t, `registered loader ${e}`));
}
function ft() {
  if (!Lv) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(qv),
      i = r ? e.slice(qv.length) : e;
    if (!i) continue;
    Kv.add(i);
    let a = Gv.get(i);
    a ? ut(i, a, `registered loader ${i}`) : r && ut(i, () => import(n), n);
  }
}
function pt(e) {
  return typeof e == `object` && !!e && !y(e) && Yv in e;
}
function mt(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function ht(e, t = `default`, n) {
  n && dt(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !Wv.has(n)) return;
      let e = Wv.get(n);
      ot(e) ? s(() => e) : (i = mt(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = mt(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    l = !1,
    u = b(function (t, r) {
      if (
        (c(() => {
          l = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && Jv !== void 0 && Jv.add(n), !i)) throw s(e);
      return _(i, { ref: r, ...t });
    });
  return (
    (u.preload = () => (o(), s(e))),
    (u.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: l })),
    u
  );
}
function gt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function _t(e) {
  return e === null || !(Zv in e) ? !1 : typeof e.equals == `function`;
}
function vt(e, t) {
  return e === t || (e !== e && t !== t);
}
function yt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!vt(e[r], t[r])) return !1;
  return !0;
}
function bt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Et(e[r], t[r], !0)) return !1;
  return !0;
}
function xt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!vt(r, t.get(n))) return !1;
  return !0;
}
function St(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Et(r, t.get(n), !0)) return !1;
  return !0;
}
function Ct(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function wt(e, t) {
  let n = Xv(e);
  if (n.length !== Xv(t).length) return !1;
  for (let r of n)
    if (!gt(t, r) || (!(r === `_owner` && gt(e, `$$typeof`) && e.$$typeof) && !vt(e[r], t[r])))
      return !1;
  return !0;
}
function Tt(e, t) {
  let n = Xv(e);
  if (n.length !== Xv(t).length) return !1;
  for (let r of n)
    if (!gt(t, r) || (!(r === `_owner` && gt(e, `$$typeof`) && e.$$typeof) && !Et(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Et(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? bt(e, t) : yt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? St(e, t) : xt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return Ct(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? _t(e) && _t(t)
        ? e.equals(t)
        : n
          ? Tt(e, t)
          : wt(e, t)
      : !1;
}
function Dt(e, t, n = !0) {
  try {
    return Et(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function Ot(e) {
  return g.useCallback((t) => e[t], [e]);
}
function kt({ api: e, children: t }) {
  return _(Qv.Provider, { value: e, children: t });
}
function At() {
  return g.useContext(Qv);
}
function jt({ routes: e, children: n }) {
  let r = Ot(e),
    i = t(() => ({ getRoute: r }), [r]);
  return _(Qv.Provider, { value: i, children: n });
}
function Mt() {
  let e = At(),
    n = w($v),
    r = n?.routeId ?? e.currentRouteId,
    i = n?.routeId ? n.pathVariables : e.currentPathVariables,
    a = n?.routeId ? void 0 : e.currentCanonicalPathVariables,
    o = r ? e.getRoute?.(r) : void 0;
  return t(() => {
    if (!(!r || !o)) return { ...o, id: r, pathVariables: i, canonicalPathVariables: a };
  }, [a, r, i, o]);
}
function Nt() {
  let e = Mt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Pt(e) {
  let t = Mt(),
    n = g.useRef(t);
  Dt(n.current, t) || !t || ((n.current = t), e(t));
}
function Ft(e) {
  let t = At();
  if (e) return t.getRoute?.(e);
}
function It(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Lt(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Rt(e, t) {
  let n = Mt(),
    r = Ft(t) ?? n;
  return g.useMemo(() => (r ? It(r, e) : e), [e, r]);
}
function zt() {
  return Mt()?.pathVariables;
}
function U(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function W(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function Bt(e) {
  return e === null || (typeof e != `object` && typeof e != `function`);
}
function Vt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === my
  );
}
function Ht(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Ut(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function Wt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Ut(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Gt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Kt(e) {
  return hy.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function qt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > fy);
}
function Jt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > dy);
}
function Yt(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return qt(+e);
}
function Xt(e) {
  let t = Object.keys(e);
  for (var n = t.length - 1; n >= 0 && !Yt(t[n]); n--);
  return ((t.length = n + 1), t);
}
function Zt(e) {
  return new Uint8Array(e).toBase64();
}
function Qt(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function $t(e) {
  return Buffer.from(e).toString(`base64`);
}
function en(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function tn(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function nn(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function rn(e, t) {
  return an(JSON.parse(e), t);
}
function an(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === iy) return;
    if (e === oy) return NaN;
    if (e === sy) return 1 / 0;
    if (e === cy) return -1 / 0;
    if (e === ly) return -0;
    if (o || typeof e != `number`) throw Error(`Invalid input`);
    if (e in r) return r[e];
    let s = n[e];
    if (!s || typeof s != `object`) r[e] = s;
    else if (Array.isArray(s))
      if (typeof s[0] == `string`) {
        let o = s[0],
          c = t && Object.hasOwn(t, o) ? t[o] : void 0;
        if (c) {
          let t = s[1];
          if ((typeof t != `number` && (t = n.push(s[1]) - 1), (i ??= new Set()), i.has(t)))
            throw Error(`Invalid circular reference`);
          return (i.add(t), (r[e] = c(a(t))), i.delete(t), r[e]);
        }
        switch (o) {
          case `Date`:
            r[e] = new Date(s[1]);
            break;
          case `Set`:
            let t = new Set();
            r[e] = t;
            for (let e = 1; e < s.length; e += 1) t.add(a(s[e]));
            break;
          case `Map`:
            let i = new Map();
            r[e] = i;
            for (let e = 1; e < s.length; e += 2) i.set(a(s[e]), a(s[e + 1]));
            break;
          case `RegExp`:
            r[e] = new RegExp(s[1], s[2]);
            break;
          case `Object`: {
            let t = s[1];
            if (typeof n[t] == `object` && n[t][0] !== `BigInt`) throw Error(`Invalid input`);
            r[e] = Object(a(t));
            break;
          }
          case `BigInt`:
            r[e] = BigInt(s[1]);
            break;
          case `null`:
            let c = Object.create(null);
            r[e] = c;
            for (let e = 1; e < s.length; e += 2) {
              if (s[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              c[s[e]] = a(s[e + 1]);
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (n[s[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = globalThis[o],
              i = a(s[1]);
            r[e] = s[2] === void 0 ? new t(i) : new t(i, s[2], s[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = s[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            let n = yy(t);
            r[e] = n;
            break;
          }
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`: {
            let t = o.slice(9);
            r[e] = Temporal[t].from(s[1]);
            break;
          }
          case `URL`: {
            let t = new URL(s[1]);
            r[e] = t;
            break;
          }
          case `URLSearchParams`: {
            let t = new URLSearchParams(s[1]);
            r[e] = t;
            break;
          }
          default:
            throw Error(`Unknown type ${o}`);
        }
      } else if (s[0] === uy) {
        let t = s[1];
        if (!Jt(t)) throw Error(`Invalid input`);
        let n = [];
        ((r[e] = n), (n[fy] = void 0), delete n[fy]);
        for (let e = 2; e < s.length; e += 2) {
          let r = s[e];
          if (!qt(r) || r >= t) throw Error(`Invalid input`);
          n[r] = a(s[e + 1]);
        }
        n.length = t;
      } else {
        let t = Array(s.length);
        r[e] = t;
        for (let e = 0; e < s.length; e += 1) {
          let n = s[e];
          n !== ay && (t[e] = a(n));
        }
      }
    else {
      let t = {};
      r[e] = t;
      for (let e of Object.keys(s)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        let n = s[e];
        t[e] = a(n);
      }
    }
    return r[e];
  }
  return a(0);
}
function on(e, t) {
  let n = sn(!1, e, t);
  return typeof n == `string` ? n : `[${n.join(`,`)}]`;
}
function sn(e, t, n) {
  let r = [],
    i = new Map(),
    a = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) a.push({ key: e, fn: n[e] });
  let o = [],
    s = 0;
  function c(n, l) {
    if (n === void 0) return iy;
    if (Number.isNaN(n)) return oy;
    if (n === 1 / 0) return sy;
    if (n === -1 / 0) return cy;
    if (n === 0 && 1 / n < 0) return ly;
    if (i.has(n)) return i.get(n);
    ((l ??= s++), i.set(n, l));
    for (let { key: e, fn: t } of a) {
      let i = t(n);
      if (i) return ((r[l] = `["${e}",${c(i)}]`), l);
    }
    if (typeof n == `function`) throw new py(`Cannot stringify a function`, o, n, t);
    if (typeof n == `symbol`) throw new py(`Cannot stringify a Symbol primitive`, o, n, t);
    let u = ``;
    if (Bt(n)) u = cn(n);
    else if (typeof n.then == `function`) {
      if (!e)
        throw new py(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          o,
          n,
          t
        );
      u = Promise.resolve(n).then((e) => {
        let t = c(e, l);
        t < 0 && (r[l] = t);
      });
    } else {
      let e = Ht(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          u = `["Object",${c(n.valueOf())}]`;
          break;
        case `Date`:
          u = `["Date","${isNaN(n.getDate()) ? `` : n.toISOString()}"]`;
          break;
        case `URL`:
          u = `["URL",${Wt(n.toString())}]`;
          break;
        case `URLSearchParams`:
          u = `["URLSearchParams",${Wt(n.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = n;
          u = i ? `["RegExp",${Wt(r)},"${i}"]` : `["RegExp",${Wt(r)}]`;
          break;
        case `Array`: {
          let e = !1;
          u = `[`;
          for (let t = 0; t < n.length; t += 1)
            if ((t > 0 && (u += `,`), Object.hasOwn(n, t)))
              (o.push(`[${t}]`), (u += c(n[t])), o.pop());
            else if (e) u += ay;
            else {
              let t = Xt(n),
                r = t.length,
                i = String(n.length).length;
              if ((n.length - r) * 3 > 4 + i + r * (i + 1)) {
                u = `[` + uy + `,` + n.length;
                for (let e = 0; e < t.length; e++) {
                  let r = t[e];
                  (o.push(`[${r}]`), (u += `,` + r + `,` + c(n[r])), o.pop());
                }
                break;
              } else ((e = !0), (u += ay));
            }
          u += `]`;
          break;
        }
        case `Set`:
          u = `["Set"`;
          for (let e of n) u += `,${c(e)}`;
          u += `]`;
          break;
        case `Map`:
          u = `["Map"`;
          for (let [e, t] of n)
            (o.push(`.get(${Bt(e) ? cn(e) : `...`})`), (u += `,${c(e)},${c(t)}`), o.pop());
          u += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`:
        case `DataView`: {
          let t = n;
          ((u = `["` + e + `",` + c(t.buffer)),
            t.byteLength !== t.buffer.byteLength && (u += `,${t.byteOffset},${t.length}`),
            (u += `]`));
          break;
        }
        case `ArrayBuffer`:
          u = `["ArrayBuffer","${vy(n)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          u = `["${e}",${Wt(n.toString())}]`;
          break;
        default:
          if (!Vt(n)) throw new py(`Cannot stringify arbitrary non-POJOs`, o, n, t);
          if (Gt(n).length > 0) throw new py(`Cannot stringify POJOs with symbolic keys`, o, n, t);
          if (Object.getPrototypeOf(n) === null) {
            u = `["null"`;
            for (let e of Object.keys(n)) {
              if (e === `__proto__`)
                throw new py(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (o.push(Kt(e)), (u += `,${Wt(e)},${c(n[e])}`), o.pop());
            }
            u += `]`;
          } else {
            u = `{`;
            let e = !1;
            for (let r of Object.keys(n)) {
              if (r === `__proto__`)
                throw new py(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (e && (u += `,`), (e = !0), o.push(Kt(r)), (u += `${Wt(r)}:${c(n[r])}`), o.pop());
            }
            u += `}`;
          }
      }
    }
    return ((r[l] = u), l);
  }
  let l = c(t);
  return l < 0 ? `${l}` : r;
}
function cn(e) {
  let t = typeof e;
  return t === `string`
    ? Wt(e)
    : e === void 0
      ? iy.toString()
      : e === 0 && 1 / e < 0
        ? ly.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function ln(e, t, n = `lazy`) {
  switch ((by.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function un(e) {
  return B(e) && (e === `` || Sy.test(e));
}
function dn() {
  return { [Cy.QueryCache]: new Map(), [Cy.CollectionUtilsCache]: new Map() };
}
function fn() {
  if (!Lv) return;
  if (wy !== void 0) return wy;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      wy = rn(e.text) ?? dn();
    } catch (e) {
      ((wy = dn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      Bv(() => {
        (e?.remove(), (e = null));
      }),
      wy
    );
  }
}
function pn(e, t) {
  if (
    (console.warn(
      lt(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    ln(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function mn(e, t) {
  let n = fn();
  return n ? n[e].has(t) : !1;
}
function hn(e, t) {
  let n = fn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function gn(e) {
  return e?.id ?? ty;
}
function _n(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function vn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (Oy.has(n)) return Oy.get(n);
    let r = new Ay(n, t);
    return (Oy.set(n, r), r);
  };
}
function yn({ children: e, collectionUtils: n }) {
  let r = t(() => ({ get: vn(n) }), [n]);
  return _(ky.Provider, { value: r, children: e });
}
function bn() {
  return w(ky);
}
function xn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Sn() {
  return s === void 0 ? void 0 : s;
}
function Cn() {
  let e = Sn();
  return e ? jy.test(e.platform) : !1;
}
function wn() {
  let e = Sn();
  return e
    ? My.test(e.platform)
      ? !0
      : Ny.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function Tn() {
  return Cn() || wn();
}
function En() {
  let e = Sn();
  return e ? Py.test(e.userAgent) : !1;
}
function Dn() {
  let e = Sn();
  return e ? Fy.test(e.userAgent) && Iy.test(e.vendor) && !En() : !1;
}
function On() {
  let e = Sn();
  return e ? Ly.test(e.userAgent) && Ry.test(e.vendor) : !1;
}
function kn() {
  let e = Sn();
  return e ? zy.test(e.userAgent) : !1;
}
function An() {
  return typeof document == `object`;
}
function jn() {
  let e = Sn();
  if (!e) return -1;
  let t = By.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function Mn() {
  let e = Sn();
  return e ? Vy.test(e.userAgent) : !1;
}
function Nn() {
  return !1;
}
function Pn() {
  let e = Sn();
  return e && Hy.test(e.userAgent) ? `tablet` : e && Uy.test(e.userAgent) ? `phone` : `desktop`;
}
function Fn() {
  return Pn() === `desktop`;
}
function In(e) {
  return Tn() ? e.metaKey : e.ctrlKey;
}
function Ln() {}
async function Rn() {}
function zn(e) {
  return typeof e == `function` ? e() : e;
}
function Bn(e, t) {
  return qy[e] > qy[t];
}
function Vn() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function Hn(e, t) {
  let n = e?.priority,
    r = Vn();
  return n === `background`
    ? (t?.() ?? xn(1))
    : r?.yield
      ? r.yield(e).catch(Ln)
      : r?.postTask
        ? r.postTask(Ln, e).catch(Ln)
        : t
          ? t()
          : n === `user-blocking`
            ? Jy
            : xn(0);
}
function Un(e, t, n) {
  let r = -1 / 0,
    i,
    a = new Set();
  function o() {
    for (let e of a) e();
    a.clear();
  }
  function s() {
    return document.hidden ? (o(), !0) : !1;
  }
  function c() {
    An() && (document.addEventListener(`visibilitychange`, s), f.addEventListener(`pagehide`, o));
  }
  function l(n) {
    return new Promise((r) => {
      (setTimeout(r, Yy),
        e(() => {
          Hn(n, t).then(r);
        }));
    });
  }
  function u(e) {
    return An()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), a.delete(r), t());
            };
          (a.add(r), s() || c(), e.then(r, r));
        })
      : e;
  }
  function d(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? l(a) : Hn(a, t);
    return i ? u(o) : o;
  }
  function p(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let a = d(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (r = performance.now()),
          n && e.pendingPaintYieldCount--,
          i === e && e.pendingPaintYieldCount === 0 && (i = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      a.then(
        () => c(!0),
        () => c(!0)
      ),
      a
    );
  }
  function m(e, t) {
    let a = i;
    if (!a) {
      let n = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? Wy : Gy),
        s = An() && document.hidden ? Ky : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return p(a, e, o);
  }
  function h(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !An() && !t ? (n ? void 0 : Jy) : n ? m(i, r) : d(i);
  }
  return h;
}
function Wn(e, t = !1) {
  let n = ``;
  if (f !== void 0)
    if (t) n = f.location.search;
    else {
      let e = f.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? f.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? Gn(n, e) : e;
}
function Gn(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== Qy && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Kn(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll($y)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !B(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = ot(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = ot(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = ot(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function qn(e, t) {
  return t ? `/${t}${e}` : e;
}
async function Jn({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await Kn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = qn(u.path, t.slug)),
    o && u.path && (u.path = Wn(u.path, !0)),
    u
  );
}
async function Yn({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll($y)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (B(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function Xn({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  if (!e || e.id === ty) return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await Yn({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function Zn({
  activeLocale: e,
  defaultLocale: t,
  collectionUtilsCache: n,
  locales: r,
  pathVariables: i,
  route: a,
  routeId: o,
}) {
  if (!e || !a) return {};
  let s =
      (await Xn({ activeLocale: e, collectionUtils: n, currentRoute: a, pathVariables: i })) ??
      a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await Jn({
    currentLocale: e,
    nextLocale: c,
    defaultLocale: t,
    route: a,
    routeId: o,
    pathVariables: i,
    collectionUtils: n,
    preserveQueryParams: !1,
  });
  return Dt(l ?? {}, i ?? {}, !1)
    ? { contentLocaleId: s }
    : { contentLocaleId: s, canonicalPathVariables: l };
}
async function Qn(e, t, n, r, i) {
  if (!n) return t;
  let a = await $n(e, t, n, r, i),
    o = n.includedLocales,
    s = [];
  for (let e of t) (o && !o.includes(e.id)) || (a && !a.has(e.id)) || s.push(e);
  return s;
}
async function $n(e, t, n, r, i) {
  let { collectionId: a } = n;
  if (!a || !e || !r) return null;
  let { path: o } = n;
  if (!o) return null;
  let s = Array.from(o.matchAll($y)).pop();
  if (!s) return null;
  let c = s?.[0],
    l = s?.[1];
  if (!c || !l) throw Error(`Failed to replace path variables: unexpected regex match group`);
  let u = r[l];
  if (!u || !B(u)) throw Error(`No slug found for path variable ${l}`);
  let d = i?.get(a);
  if (!d) return null;
  let f = d.getRecordIdBySlug(u, e),
    p = ot(f) ? await f : f;
  if (!p) return null;
  let m = new Map();
  return (
    await Promise.all(
      t.map(async (e) => {
        let t = d.getSlugByRecordId(p, e),
          n = ot(t) ? await t : t;
        n && m.set(e.id, n);
      })
    ),
    m
  );
}
function er() {
  return g.useContext(nb);
}
function tr() {
  let { currentRouteId: e, routes: t, currentPathVariables: n } = At(),
    { activeLocale: r, locales: i } = er(),
    [a, o] = g.useState(() => (r ? [r] : [])),
    s = e ? t?.[e] : void 0,
    c = bn();
  return (
    g.useEffect(() => {
      let e = !0;
      return (
        Qn(r, i, s, n, c)
          .then((t) => {
            e &&
              g.startTransition(() => {
                o(t || (r ? [r] : []));
              });
          })
          .catch(() => {}),
        () => {
          e = !1;
        }
      );
    }, [r, i, c, s, n]),
    a
  );
}
function nr() {
  let e = bn(),
    { getRoute: t } = At(),
    { activeLocale: n, locales: r } = er();
  return C(
    (i, a, o) => {
      if (!i || !t) return;
      let s = t(i),
        { pathVariables: c } = a;
      return ir(
        s,
        {
          routeId: i,
          pathVariables: c,
          locale: a.locale ?? n ?? void 0,
          locales: r,
          collectionUtils: e,
        },
        o
      );
    },
    [t, e, n, r]
  );
}
function rr(e, t = !0) {
  let n = nr();
  c(() => {
    if (!(!t || !ib)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function ir(e, t, n = {}) {
  if (!ib || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!o || !pt(o)) return;
  let s = a && !!t;
  if (!(o.getStatus().hasLoaded && !s)) {
    i && (await Zy({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await ar(n, e, t, r));
    } catch {}
  }
}
async function ar(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await Zn({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === ty),
      collectionUtilsCache: n.collectionUtils,
      locales: n.locales ?? [],
      pathVariables: n.pathVariables,
      route: t,
      routeId: n.routeId,
    }),
    o = {
      signal: n.signal ?? new AbortController().signal,
      pathVariables: n.pathVariables ?? {},
      canonicalPathVariables: a,
      routeId: n.routeId,
      locale: n.locale,
      priority: r,
      collectionUtils: n.collectionUtils,
    };
  try {
    await i.load({}, o);
  } catch {}
}
function or(e, t) {
  return e.replace($y, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function sr() {
  if (ab) return;
  ab = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (f.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((f.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), ln(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function cr({ children: e, value: t }) {
  return _(ob.Provider, { value: t, children: e });
}
function lr() {
  return g.useContext(ob);
}
function ur(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function dr(e) {
  let t = sb,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < cb; ) ((n = e.next(t)), r.push(n.value), (t += sb));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - sb }
  );
}
function fr(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function pr(e) {
  let { innerWidth: t, innerHeight: n } = f,
    [r, i] = fr(e.x),
    [a, o] = fr(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function mr(e) {
  let [t, n] = fr(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function hr(e) {
  let { x: t, y: n } = pr(e);
  return Math.hypot(Math.max(t, f.innerWidth - t), Math.max(n, f.innerHeight - n));
}
function gr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function _r(e) {
  return e ? db[e] : void 0;
}
function vr(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (yr(t)) {
    let { easing: e, duration: n } = dr(
      je({ keyframes: [0, 1], ...br(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = _r(n?.mask?.type),
    o = gr(n, `start`, e, a),
    s = gr({ ...fb, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function yr(e) {
  return e.type === `spring`;
}
function br(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function xr({ exit: e = mb, enter: t }) {
  let n = document.createElement(`style`);
  n.id = pb;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += vr(`exit`, e)),
    (r += vr(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function Sr() {
  Bv(() => {
    Oe.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(pb);
      e && document.head.removeChild(e);
    });
  });
}
function Cr() {
  return !!document.startViewTransition;
}
function wr(e) {
  return new Promise((t) => {
    Oe.render(() => {
      (performance.mark(`framer-vt-style`), xr(e), t());
    });
  });
}
async function Tr(e, t, n) {
  if (!Cr()) {
    e();
    return;
  }
  if ((await wr(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(hb),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), Sr());
      })
      .catch(hb),
    r
  );
}
function Er() {
  let e = lr(),
    t = r(void 0);
  return (
    c(() => {
      t.current &&= (t.current(), void 0);
    }),
    C(
      (n, r, i, a) => {
        let o = ur(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return Tr(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function Dr(e, t) {
  Bv(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function Or(e, t) {
  Bv(() => {
    let n = document.querySelector(`link[rel='canonical'][data-framer-generated-canonical]`);
    if (
      !e ||
      document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)
    ) {
      n?.remove();
      return;
    }
    let r = new URL(e, t ?? document.baseURI);
    ((r.search = ``), (r.hash = ``));
    let i = n ?? document.createElement(`link`);
    (i.setAttribute(`rel`, `canonical`),
      i.setAttribute(`data-framer-generated-canonical`, ``),
      i.setAttribute(`href`, r.toString()),
      document.head.append(i));
  });
}
function kr(e) {
  Bv(() => {
    let t = Array.from(
      document.querySelectorAll(`link[rel='alternate'][hreflang][data-framer-generated-hreflang]`)
    );
    if (document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)) {
      for (let e of t) e.remove();
      return;
    }
    let n = new Map();
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      t && n.set(t, e);
    }
    let r = new Set();
    for (let { href: t, hrefLang: i } of e) {
      r.add(i);
      let e = n.get(i) ?? document.createElement(`link`);
      (e.setAttribute(`rel`, `alternate`),
        e.setAttribute(`data-framer-generated-hreflang`, ``),
        e.setAttribute(`href`, t),
        e.setAttribute(`hreflang`, i),
        document.head.append(e));
    }
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      (!t || !r.has(t)) && e.remove();
    }
  });
}
function Ar(e, t, n, r = M) {
  r(() => {
    let t = async (e) => (await Zy({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function jr(e) {
  let t = r(new Set());
  return (
    Ar(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    C(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function Mr(e) {
  return H(e) && `routeId` in e;
}
function Nr(e = f.history.state) {
  return Mr(e) ? e : void 0;
}
function Pr(e) {
  return e?.entryId;
}
function Fr(e) {
  vb = e;
}
function Ir() {
  return vb;
}
function Lr() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function Rr(e, t) {
  return zr(e, Pr(e) ?? Pr(t));
}
function zr(e, t = Lr()) {
  return { ...e, entryId: t };
}
function Br(e, t) {
  (performance.mark(`framer-history-replace`), Fr(Rr(e, Nr())), t && Dr(t, f.location.href));
  let n =
    !t || t === f.location.href
      ? f.History.prototype.replaceState.bind(f.history)
      : f.history.replaceState.bind(f.history);
  try {
    n(vb, ``, t);
  } catch {}
}
function Vr(e) {
  (performance.mark(`framer-history-replace`),
    Fr(zr(e)),
    History.prototype.replaceState.call(f.history, vb, ``, void 0));
}
function Hr(e, t) {
  (performance.mark(`framer-history-push`), Fr(zr(e)), Dr(t, f.location.href), sr());
  try {
    f.history.pushState(vb, ``, t);
  } catch {}
}
function Ur({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
  initialContentLocaleId: i,
  initialCanonicalPathVariables: a,
}) {
  M(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let o = f.location.hash ? f.location.hash.slice(1) : void 0;
    Br({
      ...Nr(),
      routeId: t,
      hash: o,
      pathVariables: n,
      localeId: r,
      contentLocaleId: i,
      canonicalPathVariables: a,
    });
  }, []);
}
function Wr(e, t, n) {
  let i = Er(),
    a = jr(`framer-route-change`),
    { onHistoryTraversal: o, usesCustomScrollRestoration: s } = e,
    l = s ? `manual` : `after-transition`,
    u = r(void 0),
    d = C(() => {
      (u.current?.resolve(), (u.current = void 0));
    }, []),
    p = C(
      async ({ state: e }) => {
        if (!Mr(e)) return;
        let r = a({ popstate: !0 }),
          s = Lt();
        (r.promise.finally(s), Pr(Ir()) !== (Pr(e) ?? Pr(Nr())) && o(), Fr(e));
        let {
            routeId: c,
            hash: u,
            pathVariables: p,
            localeId: m,
            contentLocaleId: h,
            canonicalPathVariables: g,
          } = e,
          _ = B(u) ? u : f.location.hash ? f.location.hash.slice(1) : void 0,
          v = !1,
          y = () => {
            v ||=
              (n(
                c,
                B(m) ? m : void 0,
                _,
                f.location.pathname + f.location.search + f.location.hash,
                H(p) ? p : void 0,
                h,
                g,
                !0,
                r,
                !1
              ),
              !0);
          },
          b = l === `after-transition`;
        (await Promise.resolve(i(t.current, c, y))
          .then((e) => e?.updateCallbackDone)
          .catch(y)
          .finally(() => {
            b || d();
          }),
          await r.promise,
          b && d(),
          await f.navigation?.transition?.finished.catch(Iv),
          _b(),
          Dr(f.location.href));
      },
      [t, a, o, d, n, i, l]
    ),
    m = C(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        Mr(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                u.current = { resolve: e, reject: t };
              }),
                (u.current = void 0));
            },
            scroll: l,
          });
      },
      [l]
    );
  c(
    () => (
      f.addEventListener(`popstate`, p),
      yb && f.navigation.addEventListener(`navigate`, m),
      () => {
        (f.removeEventListener(`popstate`, p),
          yb && f.navigation.removeEventListener(`navigate`, m));
      }
    ),
    [p, m]
  );
}
async function Gr(e, t, n, r) {
  if (!e.path || !t) return !1;
  let i = r + qn(or(e.path, t), n.slug);
  return (await fetch(i, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((f.location.href = f.location.origin + i), !0)
    : !1;
}
function Kr() {
  let e = bn();
  return C((t) => qr({ ...t, collectionUtils: e }), [e]);
}
async function qr({ sitePrefix: e, ...t }) {
  let n = await Jn(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!B(n.path)) throw Error(`Expected result.path to be a string`);
      if (n.isMissingInLocale && (await Gr(t.route, n.pathVariables, t.nextLocale, e))) return;
    } catch {}
    return n;
  }
}
function Jr(e) {
  let t = r(Promise.resolve()),
    n = r(),
    i = C(
      (r) => {
        if (r.navigationType === `traverse` || !r.canIntercept) return;
        let i = n.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          r.intercept({ handler: () => t.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return C(
    (e, r, a) => {
      if (!yb) {
        a?.();
        return;
      }
      ((t.current = e),
        (n.current = r),
        f.navigation.addEventListener(`navigate`, i),
        a?.(),
        e.finally(() => {
          t.current === e &&
            ((n.current = void 0), f.navigation.removeEventListener(`navigate`, i));
        }));
    },
    [i]
  );
}
function Yr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`; ) t++;
  for (; n > t && e[n - 1] === `-`; ) n--;
  return e.slice(t, n);
}
function Xr(e) {
  return Yr(e.trim().toLowerCase().replace(bb, `-`));
}
function Zr() {
  let e = At(),
    t = w(xb);
  return C(
    (n) => {
      if (e.pageviewEventData?.current) {
        if (!un(n)) throw Error(`Invalid tracking ID: ${n}`);
        e.pageviewEventData.current instanceof Promise
          ? e.pageviewEventData.current.then((e) => Qr(e, t, n))
          : Qr(e.pageviewEventData.current, t, n);
      }
    },
    [e, t]
  );
}
function Qr(e, t, n) {
  ln(`published_site_custom_event`, { ...e, nodeId: t, trackingId: n || null }, `eager`);
}
function $r({ children: e, value: t }) {
  return _(Sb.Provider, { value: t, children: e });
}
function ei() {
  return w(Sb);
}
function ti(e, t) {
  let n = d(() => ({ inputs: t, result: e() }))[0],
    i = r(!0),
    a = r(n),
    o =
      i.current || (t && a.current.inputs && Dt(t, a.current.inputs, !1))
        ? a.current
        : { inputs: t, result: e() };
  return (
    c(() => {
      ((i.current = !1), (a.current = o));
    }, [o]),
    o.result
  );
}
function ni(e, t) {
  return ti(() => e, t);
}
function ri() {
  return f.location.search;
}
function ii() {
  return ``;
}
function ai(e) {
  return (
    wb.add(e),
    f.addEventListener(`popstate`, e),
    () => {
      (wb.delete(e), f.removeEventListener(`popstate`, e));
    }
  );
}
function oi() {
  for (let e of wb) e();
}
function si({ children: e, routerRenderKey: t, isNavigationCommitPending: n }) {
  let a = ei() === `preview`,
    [o, s] = d(``),
    c = r(t);
  Cb(() => {
    c.current = t;
  }, [t]);
  let l = N(ai, ri, ii),
    u = i(l),
    p = t !== i(t),
    h = a ? o : p ? l : u,
    g = C(
      async (e) => {
        if (a) {
          m(() => {
            s((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let r = n(),
          i = t;
        if ((await Zy({ continueAfter: `paint` }), r || n() || c.current !== i)) return;
        let o = Nr();
        if (!o) return;
        let l = new URL(f.location.href),
          u = e(l.searchParams).toString();
        l.search = u;
        let d = o.queryParamBackAnchorSearch,
          p = f.location.search.slice(1),
          h = d === void 0 && u !== p,
          g = d !== void 0 && u === d,
          _ = { ...o, queryParamBackAnchorSearch: g ? void 0 : (d ?? (h ? p : void 0)) },
          v = l.toString();
        (h || g ? Hr(_, v) : Br(_, v), oi());
      },
      [n, a, t]
    ),
    v = ti(() => ({ urlSearchParams: new URLSearchParams(h), replaceSearchParams: g }), [h, g]);
  return _(Tb.Provider, { value: v, children: e });
}
function ci(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = li(e),
    [r, i] = li(t),
    a = ui(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function li(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function ui(e, t) {
  if (e === t || ((e = `/` + di(e)), (t = `/` + di(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Ob(e, 1 + s);
    if (n !== Ob(t, 1 + s)) break;
    n === Db && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Ob(t, 1 + s) === Db) return Ab(t, 1 + s + 1);
      if (s === 0) return Ab(t, 1 + s);
    } else r > a && (Ob(e, 1 + s) === Db ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Ob(e, s) === Db) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${Ab(t, 1 + o)}`;
}
function di(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Ob(e, o);
    else if (Nb(a)) break;
    else a = Db;
    if (Nb(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Ob(t, t.length - 1) !== Eb || Ob(t, t.length - 2) !== Eb) {
            if (t.length > 2) {
              let e = kb(t, Mb);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = Ab(t, 0, e)), (n = t.length - 1 - kb(t, Mb))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          jb && ((t += t.length > 0 ? `${Mb}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${Mb}${Ab(e, r + 1, o)}`) : (t = Ab(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === Eb && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function fi(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || f.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function pi(e, t) {
  let n = e.replace($y, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function mi(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return pi(i, r);
  }
  if (e.includes(`:`)) return pi(e, r);
  let i = t.elements?.[e];
  return i ? pi(i, r) : e;
}
function hi(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
    localeSlug: p,
  }
) {
  let m;
  if ((i && e && (m = mi(i, e, o)), l)) return m ?? ``;
  let h = t ?? `/`;
  (n && d && (h = n[d] ?? h), r && (h = h.replace($y, (e, t) => String(r[t] || e))));
  let g = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (g = g.replace($y, (e, t) => String(a[t] || e)));
  let _ = !!(h === g && m),
    v = !_ && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && h !== g;
  if (s)
    if (Pb.has(h) && f !== void 0) {
      let e = fi(u);
      g = ci(f.location.pathname, e + g);
    } else g = ci(h, g);
  else g = qn(g, p);
  let y = _ || v;
  return ((c || y) && (g = Wn(g, y)), m && (g = `${g}#${m}`), g);
}
function gi(e) {
  return Fb in e && e[Fb] === 1;
}
function _i() {
  if (!Ib) return;
  ((Rb = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  Ib.forEach((n) => t.addEventListener(n, Lb, e));
}
function vi() {
  return (
    c(() => {
      if (!Rb || !Ib) return;
      let e = { capture: !0 },
        t = document.body;
      (Ib.forEach((n) => t.removeEventListener(n, Lb, e)),
        (Ib = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function yi(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function bi(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function xi() {
  ((ix = new rx()), ix.render.markStart());
}
function Si() {
  (p(() => {
    ix?.useInsertionEffects.markRouterStart();
  }, []),
    M(() => {
      ix?.useLayoutEffects.markRouterStart();
    }, []),
    c(() => {
      ix?.useEffects.markRouterStart();
    }, []));
}
function Ci() {
  (p(() => {
    (ix?.render.markEnd(), ix?.useInsertionEffects.markStart());
  }, []),
    M(() => {
      if ((ix?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        ax = !0;
        return;
      }
      Oe.read(() => {
        (ix?.browserRendering.requestAnimationFrame.markStart(),
          ix?.unattributedHydrationOverhead.measure());
      });
    }, []),
    c(() => {
      (ix?.useEffects.markStart(),
        ix?.browserRendering.hasStarted ||
          (ix?.mutationEffects.measure(), ix?.useEffects.markAreSynchronous()));
    }, []));
}
function wi() {
  (p(() => {
    ix?.useInsertionEffects.markEnd();
  }, []),
    M(() => {
      (ix?.useLayoutEffects.markEnd(),
        !(ax || document.visibilityState !== `visible`) &&
          Oe.read(() => {
            (ix?.browserRendering.requestAnimationFrame.markEnd(),
              Zy().then(() => {
                ix?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    c(() => {
      ix?.useEffects.markEnd();
    }, []));
}
function Ti() {
  return (Ci(), null);
}
function Ei() {
  return (wi(), null);
}
function Di(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return g.isValidElement(e) ? g.cloneElement(e, n) : _(e, { ...n });
}
function Oi() {
  return lx;
}
function ki(e) {
  if (ux?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      U(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: Mi(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          U(t, `localizedPath must be defined`);
          let i = Mi(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    ux = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: ux.pathRoutes,
    paths: ux.paths,
    pathRoutesLocalized: ux.pathRoutesLocalized,
    pathsLocalized: ux.pathsLocalized,
  };
}
function Ai(e, t, n = !0, r = Oi()) {
  return ji(e, t, r, n);
}
function ji(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = ki(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = Ni(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = Ni(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Ni(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Ni(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function Mi(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Ni(e, t) {
  let n = [],
    r = Pi(t).replace($y, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function Pi(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Fi(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function Ii(e) {
  let t = new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 && e.slice(0, t).trim().toLowerCase() === `desc` && (a = Fi(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function Li(e, t) {
  let n = e.toLowerCase(),
    r = Ii(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function Ri(e) {
  if (f === void 0 || typeof performance > `u` || !(`PerformanceServerTiming` in f)) return;
  let t = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!t || t.length === 0) return;
  let n = t.find((t) => t.name === e);
  if (n) return { name: n.name, description: n.description };
}
function zi() {
  let e = Ri(`abtests`);
  return new URLSearchParams(e?.description);
}
function Bi(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function Vi(e, t) {
  for (let [n, r] of t) Bi(e, n, r);
}
function Hi(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Ui(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function Wi(e, t) {
  if (f === void 0) return t;
  let n = t;
  if (t) {
    Ui(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Vi(e, zi()), Hi(e), n);
}
function Gi(e) {
  (c(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    p(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Ki(e, ...t) {
  dx.has(e) || (dx.add(e), console.warn(e, ...t));
}
function qi(e, t, n) {
  Ki(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Ji(e) {
  return (
    typeof e == `object` &&
    !!e &&
    mx in e &&
    e[mx] instanceof Function &&
    hx in e &&
    e[hx] instanceof Function
  );
}
function Yi(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = px(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function Xi(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Zi(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Qi(e) {
  return Math.round(e * 2) / 2;
}
function $i(e, t) {
  return { x: e, y: t };
}
function ea(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function ta(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function na(e) {
  let t = ra(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function ra(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function ia(e, t, n) {
  return (
    (yx.rgb_r = e / 255),
    (yx.rgb_g = t / 255),
    (yx.rgb_b = n / 255),
    yx.rgbToHsluv(),
    { h: yx.hsluv_h, s: yx.hsluv_s, l: yx.hsluv_l }
  );
}
function aa(e, t, n, r = 1) {
  return (
    (yx.hsluv_h = e),
    (yx.hsluv_s = t),
    (yx.hsluv_l = n),
    yx.hsluvToRgb(),
    { r: yx.rgb_r * 255, g: yx.rgb_g * 255, b: yx.rgb_b * 255, a: r }
  );
}
function oa(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function sa(e, t, n) {
  return {
    r: ta(e) ? ma(e, 255) * 255 : 0,
    g: ta(t) ? ma(t, 255) * 255 : 0,
    b: ta(n) ? ma(n, 255) * 255 : 0,
  };
}
function ca(e, t, n, r) {
  let i = [
    _a(Math.round(e).toString(16)),
    _a(Math.round(t).toString(16)),
    _a(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function la(e, t, n) {
  let r,
    i,
    a = ma(e, 255),
    o = ma(t, 255),
    s = ma(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function ua(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function da(e, t, n) {
  let r, i, a;
  if (((e = ma(e, 360)), (t = ma(t * 100, 100)), (n = ma(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = ua(s, o, e + 1 / 3)), (i = ua(s, o, e)), (a = ua(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function fa(e, t, n) {
  ((e = ma(e, 255)), (t = ma(t, 255)), (n = ma(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function pa(e, t, n) {
  ((e = ma(e, 360) * 6), (t = ma(t * 100, 100)), (n = ma(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function ma(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    ha(e) && (e = `100%`);
    let t = ga(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function ha(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function ga(e) {
  return typeof e == `string` && e.includes(`%`);
}
function _a(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function va(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = _x[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = bx.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = bx.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = bx.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: na(r[2] ?? ``), l: na(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = bx.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: na(r[2] ?? ``),
              l: na(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = bx.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: na(r[2] ?? ``), v: na(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = bx.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: na(r[2] ?? ``),
                  v: na(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = bx.hex8.exec(t))
                ? {
                    r: ya(r[1] ?? ``),
                    g: ya(r[2] ?? ``),
                    b: ya(r[3] ?? ``),
                    a: ba(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = bx.hex6.exec(t))
                  ? {
                      r: ya(r[1] ?? ``),
                      g: ya(r[2] ?? ``),
                      b: ya(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = bx.hex4.exec(t))
                    ? {
                        r: ya(`${r[1]}${r[1]}`),
                        g: ya(`${r[2]}${r[2]}`),
                        b: ya(`${r[3]}${r[3]}`),
                        a: ba(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = bx.hex3.exec(t))
                      ? {
                          r: ya(`${r[1]}${r[1]}`),
                          g: ya(`${r[2]}${r[2]}`),
                          b: ya(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function ya(e) {
  return parseInt(e, 16);
}
function ba(e) {
  return ya(e) / 255;
}
function xa(e) {
  let t = xx.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function Sa(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function Ca({ r: e, g: t, b: n, a: r }) {
  return { r: Sa(e), g: Sa(t), b: Sa(n), a: r };
}
function wa(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function Ta({ r: e, g: t, b: n, a: r }) {
  return { r: wa(e), g: wa(t), b: wa(n), a: r };
}
function Ea({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function Da(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Oa({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Da(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function ka(e) {
  return Tx(wx(e));
}
function Aa(e) {
  return Cx(Sx(e));
}
function ja(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Pa({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = Ma(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Pa(e)
              : Fa(e)),
    i
  );
}
function Ma(e) {
  let t = va(e);
  if (t) return t.format === `hsl` ? Fa(t) : t.format === `hsv` ? Na(t) : Pa(t);
}
function Na(e) {
  let t = pa(e.h, e.s, e.v);
  return { ...la(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Ia(e.a) };
}
function Pa(e) {
  let t = sa(e.r, e.g, e.b);
  return { ...la(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Ia(e.a) };
}
function Fa(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = ta(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = ta(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = ra(e.s)),
    (r = ta(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = ra(e.l)),
    (i = da(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function Ia(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function La() {
  return by.location.origin === `https://screenshot.framer.invalid`;
}
function Ra() {
  zx || ((zx = !0), we(Ux));
}
function za(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
function Ba(e, t) {
  return `${Bx}${e}%${Vx}${t.join(Vx)}`;
}
function Va({ children: e }) {
  if (w(Wx).top) return _(O, { children: e });
  let t = r({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    n = r({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = r(new Set()).current,
    a = r({
      getLayoutId: C(({ id: e, name: r, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = r ? `byName` : `byId`,
          s = t.current[o][e];
        if (s) return s;
        let c = r || e;
        if (!a && !i.has(c) && (!t.current.byLayoutId[c] || t.current.byLayoutId[c] === c))
          return (
            t.current.count[o][c] === void 0 &&
              ((t.current.count[o][c] = 0), (t.current.byLayoutId[c] = c), (n.current[o][e] = c)),
            i.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            U(!!c, `duplicatedId must be defined`);
            let u = t.current[o][c],
              d = t.current.byLastId[c];
            if (d && !l) {
              let e = t.current.byLayoutId[d],
                n = !e || e === r;
              d && !i.has(d) && (!r || n) && (l = [d, c]);
            }
            let f = u ? t.current.byLayoutId[u] : void 0,
              p = !f || f === r;
            if (u && !i.has(u) && (!r || p))
              return ((n.current[o][e] = u), (n.current.byLastId[c] = u), i.add(u), u);
          }
        let u = t.current.byLastId[e];
        if (u && !i.has(u)) return (i.add(u), (n.current.byId[e] = u), u);
        if (l) {
          let [t, r] = l;
          return ((n.current[o][e] = t), (n.current.byLastId[r] = t), i.add(t), t);
        }
        let d = t.current.byPossibleId[e];
        if (d && !i.has(d)) return (i.add(d), (n.current.byId[e] = d), d);
        let f = a?.[0],
          p = r || f || e,
          { layoutId: m, value: h } = Ha(p, (t.current.count[o][p] ?? -1) + 1, i);
        if (((t.current.count[o][p] = h), (n.current[o][e] = m), a?.length && !r)) {
          let e = a[a.length - 1];
          if ((e && (n.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (n.current.byPossibleId[t] || (n.current.byPossibleId[t] = m));
            }
        }
        return ((n.current.byLayoutId[m] = c), i.add(m), m);
      }, []),
      persistLayoutIdCache: C(() => {
        ((t.current = {
          byId: { ...t.current.byId, ...n.current.byId },
          byLastId: { ...t.current.byLastId, ...n.current.byLastId },
          byPossibleId: { ...t.current.byPossibleId, ...n.current.byPossibleId },
          byName: { ...t.current.byName, ...n.current.byName },
          byLastName: { ...t.current.byLastName, ...n.current.byLastName },
          byLayoutId: { ...t.current.byLayoutId, ...n.current.byLayoutId },
          count: { ...t.current.count, byName: {} },
        }),
          (n.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          i.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return _(Wx.Provider, { value: a, children: e });
}
function Ha(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Ua({ enabled: e = !0, ...n }) {
  let r = w(Wx),
    i = t(() => ({ ...r, enabled: e }), [e]);
  return _(Wx.Provider, { ...n, value: i });
}
function Wa(e) {
  let t = r(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Ga(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Ka(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return T(`div`, {
    style: Kx,
    children: [
      _(`div`, { className: `text`, style: Jx, children: r }),
      i && _(`div`, { className: `text`, style: Yx, children: i }),
    ],
  });
}
function Ka(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function qa() {
  let e = Y.current();
  return e === Y.canvas || e === Y.export;
}
function Ja() {
  let [e] = d(() => qa());
  return e;
}
function Ya(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Xa(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of oS) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function Za(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function Qa(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < sS) continue;
    let n = Za(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${Za(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function $a(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of aS) {
    let n = Za(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function eo(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = $a(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: Qa(n, t, Xa(t.pixelWidth, t.pixelHeight)) };
}
function to() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: st(rS.imagePlaceholderSvg),
  };
}
function no(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function ro(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function io(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...iS,
    objectPosition: ro(e.positionX, e.positionY),
    objectFit: no(e.fit),
  };
}
function ao(e) {
  let t = g.useRef(e ? `auto` : `async`),
    n = C((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = C(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = C(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function oo({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = rS.useImageSource(e, t, n),
    s = io(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = ao(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : eo(e.nodeFixedSize, e, o);
  return _(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function so({ image: e, containerSize: t, nodeId: n }) {
  let r = g.useRef(null),
    i = rS.useImageElement(e, t, n),
    a = io(e);
  return (
    g.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    _(`div`, { ref: r, style: { display: `contents`, ...iS } })
  );
}
function co({ nodeId: e, image: t, containerSize: n }) {
  let r = g.useRef(null),
    i = rS.useImageSource(t, n, e);
  return (
    g.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = io(t);
      rS.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    _(`div`, { ref: r, style: { display: `contents`, ...iS } })
  );
}
function lo({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (B(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = V(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Qi(e * (t.pixelWidth / 2)),
        s = rS.useImageSource(t, n);
      ((r = {
        ...cS,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: ro(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        Y.current() === Y.canvas
          ? rS.canRenderOptimizedCanvasImage(rS.useImageSource(t))
            ? _(co, { image: t, ...n })
            : _(so, { image: t, ...n })
          : _(oo, { image: t, avoidAsyncDecoding: Y.current() === Y.export, ...n });
  let o = a ? cS : (r ?? { ...cS, ...to() });
  return i
    ? _(I.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : _(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function uo(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function fo(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...iS,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), _(I.div, { style: n }))
    : (uo(e, n, !1), _(I.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function po(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function mo(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !uS.isImageObject(t)) return;
  let r = null;
  if (((r = B(n) ? { alt: ``, src: n } : px.get(t, null)), uS.isImageObject(r))) return po(r, e);
}
function ho(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function go(e) {
  return typeof e != `string` && typeof e != `number`;
}
function _o(e) {
  return e != null && typeof e != `boolean` && !ho(e);
}
function G(e) {
  return Number.isFinite(e);
}
function vo(e) {
  return (Math.PI / 180) * e;
}
function yo(e) {
  return et(e) ? !1 : e === 2 || e === 5;
}
function bo(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function xo(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return So(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function So(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      W(e, `unknown constraint key`);
  }
}
function Co(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(xo(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(xo(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function wo(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(xo(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(xo(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function To(e, t, n, r, i) {
  let a = wo(G(e) ? e : hS, n, r, i),
    o = Co(G(t) ? t : gS, n, r, i);
  return (
    G(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (G(n.left) && G(n.right)
        ? (o = a / n.aspectRatio)
        : (G(n.top) && G(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function Eo(e, t) {
  return !G(e) || !G(t) ? null : e + t;
}
function Do(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Oo(e) {
  return !e._constraints || Do(e) ? !1 : e._constraints.enabled;
}
function ko(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    G(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    G(n) && G(r) ? { width: n, height: r } : null
  );
}
function Ao(e) {
  let t = ko(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return G(n) && G(r) ? { x: n, y: r, ...t } : null;
}
function jo(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Oo(e) || r) return Ao(e);
  let i = Mo(e),
    a = No(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return mS.toRect(i, o, null, n, null);
}
function Mo(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = pS.quickfix({
      left: G(t),
      right: G(n),
      top: G(r),
      bottom: G(i),
      widthType: bo(c),
      heightType: bo(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function No(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Po() {
  return g.useContext(_S).parentSize;
}
function Fo(e) {
  return typeof e == `object`;
}
function Io(e) {
  return Fo(e) ? e.width : e;
}
function Lo(e) {
  return Fo(e) ? e.height : e;
}
function Ro(e, t) {
  return _(vS, { parentSize: t, children: e });
}
function zo(e) {
  return jo(e, Po(), !0);
}
function Bo({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function Vo(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Ho(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? I[e] : I.div;
}
function Uo(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function Wo(e, t, n = bS) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!xS) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) xS = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = xS;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function Go() {
  return La() ? Y.preview : Y.current();
}
function Ko(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? jS.variable(e) : e === `` ? `""` : e;
}
function qo(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return Jo(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return Yo(r);
    case `lower-roman`:
    case `upper-roman`:
      return Zo(r);
    default:
      return Jo(r);
  }
}
function Jo(e) {
  return String(e).length;
}
function Yo(e) {
  let t = 1;
  for (; Xo(t) < e; ) t++;
  return t;
}
function Xo(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function Zo(e) {
  let t = 0;
  for (let n of PS) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function Qo(e, t) {
  return jS.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function $o(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function es() {
  return Y.current() === Y.preview ? $S.value : QS.value;
}
function ts(e) {
  return TS(e, es, `framer-lib-combinedCSSRules`);
}
function ns(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0));
}
function rs(e) {
  let t = {};
  return (!e || !eC || Y.current() !== Y.canvas || ns(t, e), t);
}
function is(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function as(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = g.Children.map(t, (e) =>
        g.isValidElement(e) ? g.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function os(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function ss(e, { specificLayoutId: n, postfix: r } = {}) {
  let { name: i, layoutIdKey: a, duplicatedFrom: o, __fromCodeComponentNode: s = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = w(Wx);
  return t(() => {
    if (!u) return e.layoutId;
    let t = n || e.layoutId;
    if (!t && (c || !a || s)) return;
    let d = t || l({ id: a, name: i, duplicatedFrom: o });
    if (d) return r ? `${d}-${r}` : d;
  }, [u]);
}
function cs() {
  let [e, t] = g.useState(0);
  return g.useCallback(() => t((e) => e + 1), []);
}
function ls(e) {
  let t = cs();
  c(() => {
    let n = e?.current;
    if (n)
      return (
        rC?.observeElementWithCallback(e.current, t),
        () => {
          rC?.unobserve(n);
        }
      );
  }, [e, t]);
}
function us(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(iC)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(ds)
    .map(fs);
}
function ds(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function fs(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(ds);
  return t ? fs(t) : e;
}
function ps(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = w(tC),
    l = Y.current() === Y.canvas;
  Cb(() => {
    !l ||
      c ||
      s ||
      (t.current && i && a && o && rS.queueMeasureRequest(is(i), t.current, n(t.current)));
  });
}
function ms(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && rS.queueMeasureRequest(is(t.id), t, us(t));
}
function hs(e) {
  e.willChange = `transform`;
  let t = Y.current() === Y.canvas;
  sC && t && (e.translateZ = aC);
}
function gs(e) {
  ((e.willChange = `transform`), _s(e, !0));
}
function _s(e, t) {
  let n = Y.current() === Y.canvas;
  if (!sC || !n) return;
  let r = (B(e.transform) && e.transform) || ``;
  t ? r.includes(oC) || (e.transform = r + oC) : (e.transform = r.replace(oC, ``));
}
function vs(e, t, n, r = !0) {
  if (!e) return;
  let i = Xx(e.style),
    a = n || i[t],
    o = () => {
      ys(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function ys(e) {
  return B(e) || V(e) || tt(e);
}
function bs(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function xs(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  bs(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function Ss(e, t) {
  let n = [e, t];
  return dC.test(e) ? e : xs(1e3, fC, n, () => uC.multiplyAlpha(e, t));
}
function Cs(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: Ss(e.value, t) }))
  );
}
function ws(e, t) {
  let n = 0;
  return (
    Cs(e, t).forEach((e) => {
      n ^= lC(e.value) ^ e.position;
    }),
    n
  );
}
function Ts(e) {
  return e && pC.every((t) => t in e);
}
function Es(e) {
  return e && mC.every((t) => t in e);
}
function Ds({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || Ox(t)
      ? (n.backgroundColor = t)
      : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e))
    : e &&
      ((e = px.get(e, null)),
      typeof e == `string` || Ox(e)
        ? (n.background = e)
        : gC.isLinearGradient(e)
          ? (n.background = gC.toCSS(e))
          : vC.isRadialGradient(e)
            ? (n.background = vC.toCSS(e))
            : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e)));
}
function K(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function Os(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function ks(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function As(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    qe(n)
      ? (t.cornerShape = de(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    K(e, `size`, t),
    K(e, `width`, t),
    K(e, `height`, t),
    K(e, `minWidth`, t),
    K(e, `minHeight`, t),
    K(e, `top`, t),
    K(e, `right`, t),
    K(e, `bottom`, t),
    K(e, `left`, t),
    K(e, `position`, t),
    K(e, `overflow`, t),
    K(e, `opacity`, t),
    e._border?.borderWidth || K(e, `border`, t),
    K(e, `borderRadius`, t),
    K(e, `radius`, t, `borderRadius`),
    K(e, `color`, t),
    K(e, `shadow`, t, `boxShadow`),
    K(e, `x`, t),
    K(e, `y`, t),
    K(e, `z`, t),
    K(e, `rotate`, t),
    K(e, `rotateX`, t),
    K(e, `rotateY`, t),
    K(e, `rotateZ`, t),
    K(e, `scale`, t),
    K(e, `scaleX`, t),
    K(e, `scaleY`, t),
    K(e, `skew`, t),
    K(e, `skewX`, t),
    K(e, `skewY`, t),
    K(e, `originX`, t),
    K(e, `originY`, t),
    K(e, `originZ`, t),
    Ds(e, t),
    t
  );
}
function js(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof Xx(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function Ms(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (bC.has(t)) return `pointer`;
}
function Ns(e) {
  return Ps(e) ? !0 : e.style ? !!Ps(e.style) : !1;
}
function Ps(e) {
  return xC in e && (e[xC] === `scroll` || e[xC] === `auto`);
}
function Fs(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = Me(e.minWidth),
    h = Me(e.minHeight),
    g = Me(e.maxWidth),
    _ = Me(e.maxHeight);
  return {
    top: Me(n),
    left: Me(t),
    bottom: Me(r),
    right: Me(i),
    width: Me(a),
    height: Me(o),
    size: Me(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function Is(e) {
  let t = w(tC),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = Fs(e),
    s = zo(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: Y.current() === Y.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let l = !js(e) && !e.__fromCanvasComponent && !Ns(e),
    u = !e.style || !(`pointerEvents` in e.style);
  l && u && (c.pointerEvents = `none`);
  let d = g.Children.count(e.children) > 0 &&
      g.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    f = As(e);
  (a === void 0 && !i && (Os(f) || (c.width = SC.width), ks(f) || (c.height = SC.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let p = {};
  (Oo(o) &&
    s &&
    !Bo(e) &&
    (p = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(c, d, r, f, p, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    cC.applyWillChange(e, c, !0));
  let m = c;
  c.transform || (m = { x: 0, y: 0, ...c });
  let h = qa();
  return (
    e.positionSticky
      ? (!h || rS.isOnPageCanvas || t) &&
        ((m.position = `sticky`),
        (m.willChange = `transform`),
        (m.top = e.positionStickyTop),
        (m.right = e.positionStickyRight),
        (m.bottom = e.positionStickyBottom),
        (m.left = e.positionStickyLeft))
      : h &&
        (e.positionFixed
          ? (m.position = rS.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (m.position = `absolute`)),
    `rotate` in m && m.rotate === void 0 && delete m.rotate,
    [m, s]
  );
}
function Ls(e) {
  let t = {};
  for (let n in e)
    (R(n) || Qx(n)) && !CC.has(n)
      ? (t[n] = Xx(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof Xx(e)[n] != `boolean` && !e.transition && (t.transition = Xx(e)[n]));
  return t;
}
function Rs(e) {
  return `data-framer-name` in e;
}
function zs(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function Bs(e) {
  return _(I.div, { layoutId: EC, style: kC, children: e.children });
}
function Vs(e, t) {
  Xe(e) ? e(t) : Hs(e) && (e.current = t);
}
function Hs(e) {
  return H(e) && `current` in e;
}
function Us() {
  let e = Wa(() => new Set()),
    t = Wa(() => new Map());
  return Wa(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function Ws(e) {
  let t = r(null),
    n = Us();
  return Wa(() => (Hs(e) ? n(e) : Xe(e) ? n(t, e) : n(t)));
}
function Gs(e, t, n) {
  let i = r(),
    a = r();
  (ti(
    () => {
      a.current !== void 0 && (a.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      a.current !== !1 &&
      ((a.current = !1), e.unobserve(i.current), e.observe(t), (i.current = t)));
}
function Ks(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new AC({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function qs(e, t, n) {
  let r = Wa(() => `${n.rootMargin}`),
    i = w(jC),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  Gs(
    e,
    (e) => {
      if (a && e !== null) return Ks(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function Js(e, t, n) {
  let r = g.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  MC(
    e,
    g.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Xs(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t]
    ),
    { threshold: NC, rootMargin: s, enabled: i ?? !0 }
  );
}
function Ys(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, by.innerHeight);
}
function Xs({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && Ys(t, e) >= r;
}
function Zs() {
  return w(LC);
}
function Qs() {
  return new Map();
}
function $s() {
  return Wa(Qs);
}
function ec(e, t = []) {
  let { register: n, deregister: r } = w(RC);
  c(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function tc(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function nc(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (G(t.originX) && (r.originX = t.originX),
      G(t.originY) && (r.originY = t.originY),
      G(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (G(n.originX) && (r.originX = n.originX),
      G(n.originY) && (r.originY = n.originY),
      G(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function rc(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function ic(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return WC.PushLeft;
    case `left`:
      return WC.PushRight;
    case `bottom`:
      return WC.PushUp;
    case `top`:
      return WC.PushDown;
  }
}
function ac(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return WC.OverlayLeft;
    case `left`:
      return WC.OverlayRight;
    case `bottom`:
      return WC.OverlayUp;
    case `top`:
      return WC.OverlayDown;
  }
}
function oc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return WC.FlipLeft;
    case `left`:
      return WC.FlipRight;
    case `bottom`:
      return WC.FlipUp;
    case `top`:
      return WC.FlipDown;
  }
}
function sc(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return lc(e, t.transition, t.component);
    case `removeOverlay`:
      return uc(e);
    case `add`:
      return dc(e, t.key, t.transition, t.component);
    case `remove`:
      return mc(e);
    case `update`:
      return cc(e, t.key, t.component);
    case `back`:
      return fc(e);
    case `forward`:
      return pc(e);
    default:
      return;
  }
}
function cc(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function lc(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function uc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function dc(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i?.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? yc(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = _c(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = hc(e, t, c),
    p = vc(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function fc(e) {
  let t = { ...e.containers },
    n = mc(e);
  if (n) return ((n.containers = t), n);
}
function pc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = dc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function mc(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (U(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = gc(e, r, n),
    u = vc(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function hc(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function gc(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function _c(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function vc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = bc(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function yc(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function bc(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return xc(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return xc(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return xc(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return xc(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function xc(e, t, n) {
  let r = {},
    i = {};
  return (
    KC.forEach((e) => {
      ((r[e] = VC[e]), (i[e] = { ...n, from: VC[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${Xx(VC)[a]}%` : Xx(VC)[a];
        ((Xx(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function Sc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Cc({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function wc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : XC;
}
function Tc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function Ec(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function Dc(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  } else if (e < n) {
    let t = r[e + 1];
    return !t?.transition || t.transition.backfaceVisible;
  } else {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
}
function Oc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function kc(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function Ac(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t?.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t?.transition) return t.transition.enter;
    }
}
function jc(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t?.transition?.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t?.transition?.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return XC;
}
function Mc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Nc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Pc(e) {
  return g.Children.map(e.component, (t) => {
    if (!_o(t) || !go(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? H(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      g.cloneElement(t, n)
    );
  });
}
function Fc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function Ic(e, t) {
  let n = he(),
    r = pe();
  return _(YC, {
    ref: (e) => {
      if (t) {
        if (typeof t == `function`) {
          t(e);
          return;
        }
        t.current = e;
      }
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
function Lc(e) {
  return H(e) || Xe(e);
}
function Rc(e) {
  return !!e && $C in e && e[$C] === !0;
}
function zc(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return Ze(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return et(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return Qe(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return Qe(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = H(e.defaultValue) ? e.defaultValue : {};
        return (H(e.controls) && Bc(t, e.controls), t);
      }
      case `array`:
        return Qe(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function Bc(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!et(i) || Rc(r)) continue;
    let a = zc(r);
    et(a) || (e[n] = a);
  }
}
function Vc(e) {
  if (H(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Hc(e, t) {
  Lc(e) && Bc(Vc(e), t);
}
function Uc(e, t) {
  (Object.assign(e, { propertyControls: t }), Hc(e, t));
}
function Wc(e) {
  return e.propertyControls;
}
function Gc(e) {
  return aw in e;
}
function Kc(e, t) {
  if (!Gc(e)) return;
  let n = px.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function qc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Jc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function Yc(e, t) {
  let n = [];
  (G(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    G(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    G(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    G(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    G(e.invert) && n.push(`invert(${e.invert / 100})`),
    G(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    G(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    G(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...qc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Xc(e, t) {
  G(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Zc(e, t) {
  (Xc(e, t), Yc(e, t));
}
function Qc(e, t) {
  let n,
    r = (...r) => {
      (by.clearTimeout(n), (n = by.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      by.clearTimeout(n);
    }),
    r
  );
}
function $c(...e) {
  return e.filter(Boolean).join(` `);
}
function el(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let a = tl(i);
    if (a && t.has(a)) {
      n[a] = e[i];
      continue;
    }
    r[i] = e[i];
  }
  return [n, r];
}
function tl(e) {
  if (e.startsWith(uw)) return e.substr(dw);
}
function nl(e, t, n) {
  let r = j.map(e, (e) => (y(e) ? u(e, t) : e));
  return n ? r : _(O, { children: r });
}
function rl(e) {
  let t = Wa(() => il(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function il(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = al(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = al(t)));
    },
    r = !1;
  function i(i, a) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      j.count(i) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      j.map(i, (e) => {
        if (y(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = Xe(a) ? a(e.props) : a;
          return u(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let a = function (e, t) {
    return _(O, { children: i(e, t) });
  };
  return (
    (a.cloneAsArray = i),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: a,
    }
  );
}
function al(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Vs(n, e), Vs(t, e));
  };
}
function ol(e, t, n, r, i, a, o, s) {
  let c = g.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !g.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !ul(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = ll([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = ll([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let p = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = _(
        pw.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = cl(e, a, r);
    (f.length
      ? (U(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = _(
          `div`,
          { className: `${mw} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : U(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    U(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, _(`div`, { className: hw }, `property-overrides-separator`)]
  );
}
function sl(e) {
  return e.split(`-`)[2];
}
function cl(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${sl(a)}`);
  }
  return r;
}
function ll(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function ul(e, t) {
  for (let n of Object.keys(t)) if (!Dt(e[n], t[n], !0)) return !0;
  return !1;
}
function dl(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function fl(e) {
  return g.forwardRef(({ optimized: t, ...n }, r) => {
    let i = g.useContext(fw),
      a = g.useContext(pw)?.variants,
      o = n[Cw];
    o && !An() && xw.setAll(o, a, t ? n : null, i);
    let s = Tw(n);
    return _(e, { ref: r, ...n, ...s });
  });
}
function pl(e) {
  return B(e) || Array.isArray(e);
}
function ml(e) {
  return e in Ow;
}
function hl(e, t) {
  let n = Wa(() => ({ values: Dw(t ? e : void 0) }));
  return (
    g.useEffect(() => {
      if (!t)
        for (let e of Ew) {
          let t = Ow[e];
          et(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function gl(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: n,
    loopTransition: i,
    loopRepeatType: a,
    loop: o,
    loopPauseOffscreen: s,
  },
  l
) {
  let u = ie(),
    f = Wa(Dw),
    p = r(!1),
    h = Mw(),
    g = r(null),
    _ = C(async () => {
      if (!o) return;
      let e = i || void 0,
        t = p.current && a === `mirror`,
        n = t ? Ow : o,
        r = t ? o : Ow;
      return (
        (p.current = !p.current),
        (g.current = Promise.all(
          Ew.map((t) => {
            if (!(u && t !== `opacity`))
              return (
                f[t].jump(r[t] ?? Ow[t]),
                new Promise((i) => {
                  let a = { ...e, onComplete: () => i() },
                    o = n[t] ?? r[t];
                  typeof o == `number` && Ee(f[t], o, a);
                })
              );
          })
        )),
        g.current
      );
    }, [o, a, i, u]),
    [v, y] = d(!1),
    b = r(!1),
    x = C(async () => {
      !e || !b.current || (await _(), await h(n ?? 0), x());
    }, [_, h, e, n]),
    S = C(() => {
      b.current || ((b.current = !0), m(() => y(!0)), x());
    }, [x]),
    w = C((e = !0) => {
      (Ew.forEach((e) => {
        f[e].stop();
      }),
        Ew.forEach((e) => {
          f[e].set(Ow[e]);
        }),
        (p.current = !1),
        e && ((b.current = !1), m(() => y(!1))));
    }, []),
    T = e && o,
    E = C(() => {
      document.hidden ? w(!1) : b.current && ((b.current = !1), S());
    }, [S, w]);
  (c(() => {
    if (T)
      return (
        document.addEventListener(`visibilitychange`, E),
        () => {
          document.removeEventListener(`visibilitychange`, E);
        }
      );
  }, [T, E]),
    c(() => {
      (T && s) || (T ? S() : w());
    }, [S, w, s, T]),
    c(() => () => w(), [w]));
  let D = r(!1),
    O = C(async () => {
      g.current && (await g.current, !D.current && w());
    }, [w]);
  MC(
    l,
    C(
      (e) => {
        e.isIntersecting ? ((D.current = !0), S()) : ((D.current = !1), O());
      },
      [S, O]
    ),
    { enabled: T && s }
  );
  let k = v || !s;
  return t(() => ({ values: f, style: T && k ? kw : Aw }), [T, k]);
}
function _l(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function vl(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = g.useRef(null),
    c = ie(),
    l = g.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : _l(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: u } = _e(),
    d = se(u, l),
    f = F(a && s.current === null ? `hidden` : n),
    p = F(0),
    m = w(jC);
  return (
    Gs(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = Ks(m, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            Oe.update(() => {
              (d.set(l(u.get())), a && f.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o]
    ),
    Pt(() => {
      o && d.set(0);
    }),
    { values: { y: c || !o ? p : d }, style: o ? { ...kw, visibility: f } : Aw }
  );
}
function yl(e) {
  return typeof e == `object` && !!e;
}
function bl(e) {
  if (yl(e)) return e?.transition;
}
function xl(e, t, n, r, i, a) {
  let o = bl(e);
  return Promise.all(
    Ew.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = yl(e) ? (e?.[s] ?? Ow[s]) : Ow[s];
          if ((qe(u) && (u = u.get()), !V(u))) return c();
          let d = oe.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (B(i) && !l?.hasAnimated && by.MotionHandoffAnimation) {
            let e = by.MotionHandoffAnimation(i, s, Oe);
            e && (f = e);
          }
          a ? l.set(u) : Ee(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function Sl(
  { initial: e, animate: n, exit: i, presenceInitial: a, presenceAnimate: o, presenceExit: s },
  c,
  l,
  u,
  d
) {
  let f = a ?? e,
    p = o ?? n,
    m = s ?? i,
    [h, g] = ge(),
    _ = r({ lastPresence: !1, lastAnimate: p, hasMounted: !1, running: !1 }),
    v = Wa(() => {
      let e = f ?? u;
      if (!H(e)) return { values: Dw() };
      let t = {};
      for (let n in e) {
        let r = H(e) ? e[n] : void 0;
        V(r) && (t[n] = r);
      }
      return { values: Dw(t) };
    });
  Gs(
    c,
    (e) => {
      let { hasMounted: t } = _.current;
      if (t && p) return;
      let n = oe.get(e);
      if (n) {
        Object.assign(_.current, { hasMounted: !0 });
        for (let e in v.values) {
          if (!ml(e)) continue;
          let t = u?.[e];
          n.setBaseTarget(e, V(t) ? t : Ow[e]);
        }
      }
    },
    [p]
  );
  let y = ie();
  Gs(c, (e) => {
    if (!l) {
      g?.();
      return;
    }
    if (e === null) return;
    if (h !== _.current.lastPresence) {
      (Object.assign(_.current, { lastPresence: h }),
        h
          ? f &&
            p &&
            (Object.assign(_.current, { running: !0 }),
            xl(p, v, y, c, d).then(() => Object.assign(_.current, { running: !1 })))
          : m
            ? (Object.assign(_.current, { running: !0 }),
              xl(m, v, y, c, d)
                .then(() => Object.assign(_.current, { running: !1 }))
                .then(() => g()))
            : g());
      return;
    }
    let { lastAnimate: t, running: n } = _.current;
    Dt(p, t) ||
      !p ||
      (Object.assign(_.current, { lastAnimate: p }),
      xl(p, v, y, c, d, !n).then(() => Object.assign(_.current, { running: !1 })));
  });
  let b = l && p;
  return t(() => ({ values: v.values, style: b ? kw : Aw }), [b]);
}
function Cl(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; ) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function wl(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = Cl(o.current, document.documentElement) - Fw - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function Tl(e, t = 0) {
  return e < t ? `up` : `down`;
}
function El(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Nt();
  g.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return P((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = Tl(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < Iw) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function Dl(e, t, n) {
  let r = wl(e, t),
    i = [...Rw],
    a = r[0];
  if (!V(a)) return zw;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!V(e)) return zw;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function Ol(e) {
  return {
    x: e?.x ?? Ow.x,
    y: e?.y ?? Ow.y,
    scale: e?.scale ?? Ow.scale,
    opacity: e?.opacity ?? Ow.opacity,
    transformPerspective: e?.transformPerspective ?? Ow.transformPerspective,
    rotate: e?.rotate ?? Ow.rotate,
    rotateX: e?.rotateX ?? Ow.rotateX,
    rotateY: e?.rotateY ?? Ow.rotateY,
    skewX: e?.skewX ?? Ow.skewX,
    skewY: e?.skewY ?? Ow.skewY,
    transition: e?.transition ?? void 0,
  };
}
function kl({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return g.useMemo(
    () => ({
      initial: r ?? Ol({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? Ol({ opacity: t }),
      exit: i ?? Ol(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function Al(e, n) {
  let r = ie(),
    i = kl(e),
    a = e.styleAppearEffectEnabled,
    o = hl(a ? i.initial : i.animate, a),
    s = g.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    c = Nt(),
    l = g.useRef(),
    u = g.useCallback(async ({ transition: t, ...a }, s) => {
      let c = t ?? i.animate.transition ?? e.transition;
      await l.current;
      let u = oe.get(n.current);
      l.current = Promise.all(
        Ew.map((e) => {
          s && o.values[e].set(i.initial[e] ?? Ow[e]);
          let t = a[e] ?? Ow[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((n) => {
              if (r && e !== `opacity`) (V(t) && o.values[e].set(t), n());
              else {
                let r = { restDelta: e === `scale` ? 0.001 : void 0, ...c, onComplete: () => n() };
                typeof t == `number` && Ee(o.values[e], t, r);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && s.current.lastAppearState === !0;
  Js(
    n,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = s.current;
      if (t) {
        s.current.scheduledAppearState = e;
        return;
      }
      ((s.current.scheduledAppearState = void 0),
        (s.current.lastAppearState = e),
        n !== e && u(e ? i.animate : i.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !d,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let f = e.targets && a && !e.scrollDirection;
  return (
    g.useEffect(() => {
      if (!f) return;
      let t = { initial: !0 },
        n = `initial`;
      return P((r, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = Dl(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = le(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = Xx(i)[l];
        d && u(d);
      });
    }, [c, f]),
    El(e.scrollDirection, (e) => void u(e ?? i.animate), { enabled: a, repeat: !e.animateOnce }),
    Pt(() => {
      if (a && !(!e.targets && !e.scrollDirection))
        for (let e of Ew) o.values[e].set(i.initial?.[e] ?? Ow[e]);
    }),
    t(() => ({ values: o.values, style: a ? kw : Aw }), [a])
  );
}
function jl(e, t) {
  let n = g.useRef({});
  g.useEffect(() => {
    if (t !== void 0)
      for (let r of Xv(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = Re({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), Oe.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function Ml(e, t) {
  let n = Hw();
  return {
    inputRange: wl(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of Ew) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function Nl(e) {
  let t = Hw();
  for (let { target: n } of e) for (let e of Ew) t[e]?.push(n[e]);
  return t;
}
function Pl(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  a
) {
  let o = ie(),
    s = hl(Vw(n, o), t),
    c = !t || !n,
    l = e === `onScrollTarget`,
    u = Nt();
  return (
    M(() => {
      if (!(c || !l))
        return P((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: a } = Ml(n, i * t.containerLength);
          if (r.length !== 0)
            for (let e of Ew)
              (o && e !== `opacity`) ||
                (r.length === a[e].length &&
                  a[e][0] !== void 0 &&
                  s.values[e].set(le(t.current, r, a[e])));
        });
    }, [o, l, i, n, c]),
    Gs(
      a,
      (t) => {
        if (c || l || t === null) return;
        let r = Nl(n);
        return P(
          (e, { y: t }) => {
            for (let e of Ew)
              (o && e !== `opacity`) ||
                (Uw.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  s.values[e].set(le(t.progress, Uw, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [u, o, e, l, n, c]
    ),
    jl(s.values, r),
    Pt(() => {
      if (c) return;
      let e = Vw(n, o);
      for (let t of Ew) s.values[t].set(e?.[t] ?? Ow[t]);
    }),
    g.useMemo(() => ({ values: s.values, style: t ? kw : Aw }), [t])
  );
}
function Fl(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Il(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = tl(n);
    if (r) {
      for (let i of Gw)
        if (Ww[i]?.has(r)) {
          t[i][r] = Xx(e)[n];
          break;
        }
    } else t.forwardedProps[n] = Xx(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = Fl(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = Fl(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Ll(e) {
  return H(e) && Jw in e;
}
function Rl(e, t) {
  if (!e || !H(e)) return t;
  for (let n in e) {
    let r = e[n];
    !qe(r) || !ml(n) || (V(r.get()) && t[n].push(r));
  }
}
function zl(e) {
  return B(e) || Array.isArray(e);
}
function Bl({ componentIdentifier: e, children: t }) {
  return t(w(Xw)[e] ?? {});
}
function Vl() {
  return g.useContext(Zw);
}
function Hl(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Ul() {
  if (f === void 0 || rT)
    return _(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw aT;
}
function Wl({ children: e }) {
  return w(sT) ? _(O, { children: e }) : _(E, { fallback: oT, children: e });
}
function Gl() {
  return _(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Kl(e, t) {
  if (!Lv || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  ln(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function ql(...e) {
  console.error(...e);
}
function Jl() {
  return Y.current() !== Y.canvas;
}
function Yl({ getErrorMessage: e, fallback: t, children: n }) {
  return Jl()
    ? _(Xl, { fallback: t, children: _(lT, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function Xl({ children: e, fallback: t = cT }) {
  return f === void 0 ? _(E, { fallback: t, children: e }) : _(Wl, { children: e });
}
function Zl() {
  return g.useContext(dT);
}
function Ql() {
  let e = Zl();
  return g.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0; ) t = t.parent;
    return t;
  }, [e]);
}
function $l({ children: e, scopeId: t, nodeId: n }) {
  let r = Zl(),
    i = g.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return _(dT.Provider, { value: i, children: e });
}
function eu(e, t) {
  return `${fT}${e}:${t}`;
}
function tu(e, t) {
  return ru(`component`, e, t);
}
function nu(e, t) {
  return ru(`override`, e, t);
}
function ru(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${eu(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function iu(e, t, n, r, i, a) {
  let o = ou(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function au(e, t, n, r) {
  return ou(e, t, n, r);
}
function ou(e, t, n, r) {
  return !!(et(n) || (n === 1 && r && e === t));
}
function su(e, t, n, r, i, a) {
  let o = Zl();
  if (et(t) || et(n)) return _(uT, { children: e });
  let { disableCustomCode: s } = tT();
  return s && r
    ? _(`div`, {
        style: {
          padding: `12px 16px`,
          borderWidth: 1,
          borderRadius: 6,
          borderStyle: `solid`,
          borderColor: `rgba(149, 149, 149, 0.15)`,
          backgroundColor: `rgba(149, 149, 149, 0.1)`,
          fontSize: 12,
          color: `#a5a5a5`,
        },
        children: `Code component disabled`,
      })
    : (iu(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = _(Yl, { getErrorMessage: tu.bind(null, t, n), fallback: null, children: e })),
      i && (e = _($l, { scopeId: t, nodeId: n, children: e })),
      e);
}
function cu(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function lu(e) {
  return !(!e || e.placement || e.alignment);
}
function uu(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      W(e);
  }
}
function du(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${uu(t)}, -100%`;
    case `right`:
      return `0%, ${uu(t)}`;
    case `bottom`:
      return `${uu(t)}, 0%`;
    case `left`:
      return `-100%, ${uu(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function fu(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(xT)) {
      let e = n.getAttribute(xT);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function pu(e) {
  let { registerCursors: t } = w(hT),
    n = Wa(() => e),
    r = A();
  M(() => t(n, r), [t, r]);
}
function mu(e) {
  return !!(e && typeof e == `object` && CT in e);
}
function hu(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function gu() {
  return Y.current() === Y.canvas;
}
function _u(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function vu(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function yu(e, t, n, r) {
  if (B(e)) {
    let i = _u(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = Ai(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function bu(e) {
  return B(e) && e.startsWith(`data:${AT}`);
}
function xu(e) {
  if (bu(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(AT.length),
        r = t.searchParams,
        i = r.has(ET) ? r.get(ET) : void 0,
        a,
        o = r.get(DT),
        s = r.get(OT),
        c = r.get(kT);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function Su(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = xu(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function Cu(e) {
  if (!bu(e)) return e;
  let t = xu(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: wu(i) };
}
function wu(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Tu(e, n, r, i, a, o) {
  let s = w(jT),
    c = Ql(),
    l = t(() => ({ scopeId: n, nodeId: r, furthestExternalComponent: c }), [n, r, c]),
    u = At(),
    d = Mt(),
    { locales: f } = er(),
    p = t(() => {
      let e = mu(i) ? i : Cu(i);
      if (e) return yu(e, u, d, f);
    }, [d, i, u, f]),
    m = !!(!gu() && s?.nodeId && l.nodeId),
    h = C(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), In(e))) {
            Ou(a.href, ``, `_blank`);
            return;
          }
          p ? a.navigate?.() : Ou(a.href, a.rel, a.target);
        }
      },
      [a, p]
    ),
    g = C(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), Ou(a.href, ``, `_blank`));
      },
      [a]
    ),
    v = C(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          p ? a.navigate?.() : Ou(a.href, a.rel, a.target));
      },
      [a, p]
    );
  Gs(
    o,
    (e) => {
      e !== null && m && (e.dataset.hydrated = `true`);
    },
    [m]
  );
  let y = e;
  return (
    m &&
      (j.forEach(e, (e) => {
        Du(e) &&
          (U(
            Eu(s),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          U(
            Eu(l),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          TT.collectNestedLink(s, l));
      }),
      (y = j.map(e, (e) => {
        if (!Du(e)) return e;
        let t = ku(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: h,
            onAuxClick: g,
            onKeyDown: v,
            as: r.as && ku(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return k(t, { ...i, ref: a }, n);
      }))),
    _(jT.Provider, { value: l, children: y })
  );
}
function Eu(e) {
  return !et(e?.nodeId);
}
function Du(e) {
  return y(e) && (ku(e.type) !== e.type || ku(e.props.as) !== e.props.as);
}
function Ou(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function ku(e) {
  return e === `a` ? `span` : Se(e) && re(e) === `a` ? I.span : e;
}
function Au({ component: e, props: t }) {
  let n = w(fw),
    r = k(e, t);
  if ((`variant` in t && t.variant != null) || !n) return r;
  let { activeVariantId: i, humanReadableVariantMap: a } = n;
  if (!i || !a) return r;
  let o = {};
  for (let [e, t] of Object.entries(a)) o[t] = { variant: e };
  return _(_w, { overrides: o, breakpoint: i, children: r });
}
function ju(e) {
  IT = e;
}
function Mu() {
  return IT;
}
function Nu(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Nu(e.parentElement, t)
      : null;
}
function Pu({ children: e }) {
  return _(Wl, { children: e });
}
function Fu(e) {
  return b(function (t, n) {
    return _(Pu, { children: _(e, { ...t, ref: n }) });
  });
}
function Iu(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Ru(e, t, o, s, a, c, l, i, r);
}
function Lu(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && _u(t))
    try {
      let [i, a] = t.split(`#`, 2);
      U(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      U(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = Ai(e.routes, o, s, r),
        d = e.getRoute(c);
      if (d)
        return {
          routeId: c,
          route: d,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, l),
          locale: u ? r?.find(({ id: e }) => e === u) : void 0,
        };
    } catch {}
}
function Ru(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = hi(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function zu() {
  let e = w(RT),
    t = Mt()?.pathVariables;
  return e || t;
}
function Bu(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(LT)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Vu() {
  return !!Ri(`ss-only-routes`);
}
function Hu(e) {
  if (f === void 0) return;
  let t = f.location.href,
    n;
  try {
    n = new URL(e, t);
  } catch {
    return;
  }
  return ((n.hash = ``), n);
}
function Uu(e) {
  return Li(`rewrite`, e)?.description === `external`;
}
function Wu() {
  if (!tT().checkServerSideRouter) return !1;
  if (HT === void 0) {
    let e = Vu();
    ((UT = !e && On() && jn() < 16.4), (HT = e || UT));
  }
  return HT;
}
function Gu(e, t) {
  if (e.type === `opaqueredirect` || !e.ok) return { decision: `server` };
  let n = e.headers.get(`Framer-Location`);
  if (n)
    try {
      return { decision: `server`, redirectUrl: new URL(n, t).href };
    } catch {
      return { decision: `server` };
    }
  let r = e.headers.get(`Framer-Site-Id`);
  return r === null
    ? { decision: Uu(e.headers.get(`server-timing`)) ? `server` : `client` }
    : { decision: r === Mu() ? `client` : `server` };
}
async function Ku(e) {
  let t = await fetch(e, {
    method: `HEAD`,
    redirect: `manual`,
    credentials: `same-origin`,
    headers: { "Framer-Navigation": `true` },
  });
  if (
    (UT &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      ((UT = !1), Li(`ss-only-routes`, t.headers.get(`server-timing`)) || (HT = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return Gu(t, e);
}
function qu(e, t) {
  zT.has(e) && zT.set(e, t);
}
async function Ju(e) {
  await xn(BT);
  try {
    qu(e, await Ku(e));
  } catch {
    zT.delete(e);
  }
}
async function Yu(e) {
  try {
    let t = await Ku(e);
    return (qu(e, t), t);
  } catch {
    return (Ju(e), { decision: `server` });
  }
}
function Xu(e) {
  if (!Wu()) return;
  let t = Hu(e);
  if (!t || t.origin !== f.location.origin) return;
  let n = t.href;
  zT.has(n) || zT.set(n, Yu(n));
}
function Zu(e) {
  let t = Hu(e);
  if (!t) return;
  let n = zT.get(t.href);
  return n && !ot(n) ? n : void 0;
}
async function Qu(e) {
  let t = Hu(e);
  if (!t) return;
  let n = zT.get(t.href);
  if (n) return ot(n) ? Promise.race([n, xn(VT).then(() => void 0)]) : n;
}
function $u(e) {
  !(e instanceof HTMLAnchorElement) || !e.href || Xu(e.href);
}
function ed() {
  let e = s.connection || s.mozConnection || s.webkitConnection || {},
    t = s.deviceMemory && s.deviceMemory > KT,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? qT : JT));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(u, { threshold: GT }),
    c = 0;
  async function l(e, t) {
    if (r) return;
    $u(t);
    let { id: n, preload: i } = e,
      a = ZT.get(n);
    if (!a?.size || XT.has(n)) return;
    (++c, XT.add(n));
    let s = i()?.catch(() => {});
    (o.unobserve(t), YT.delete(t));
    for (let e of a) (o.unobserve(e), YT.delete(e));
    (a.clear(), ZT.delete(n), await s, --c);
  }
  function u(e) {
    for (let t of e) {
      let e = t.target,
        n = YT.get(e);
      if (!n || XT.has(n.id)) {
        (o.unobserve(e), YT.delete(e));
        continue;
      }
      let r = n.id,
        a = ZT.get(r),
        s = ZT.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (c >= i) continue;
        (a ? a.add(e) : ZT.set(r, new Set([e])), setTimeout(l, WT, n, e));
      } else (a && a.delete(e), s <= 1 && ZT.delete(r));
    }
  }
  return (e, t, n) => {
    if (!XT.has(n))
      return (
        YT.set(e, { id: n, preload: t }),
        o.observe(e),
        () => {
          (YT.delete(e), o.unobserve(e));
        }
      );
  };
}
function td(e, t) {
  let n = _u(e),
    r = {
      href: e === `` || vu(e, n) ? e : `https://${e}`,
      target: nd(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = Wn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function nd(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function rd(e, t) {
  console.warn(
    lt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function id(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return rd(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return ot(i) ? i.catch(rd) : i;
  } catch (e) {
    rd(e);
  }
}
function ad(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = id(o, r, n);
      ot(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function od() {
  let e = bn();
  return C((t, n, r, i = []) => ad(t, n, r, e, i), [e]);
}
function sd({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = bn();
  return C(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = mu(r) ? r : Cu(r);
      if (!mu(c))
        return ln(
          `published_site_click`,
          {
            ...s,
            href: o ? cd(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (B(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (ot(n) ? await n : n) ?? null;
        }
      }
      return ln(
        `published_site_click`,
        {
          ...s,
          href: o ? cd(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function cd(e) {
  try {
    let t = new URL(e, by.document.baseURI);
    return t.origin === by.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function ld(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function ud(e, t, n) {
  return async (r) => {
    let i = In(r),
      a = Nu(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await Zy({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function dd(e, t, n) {
  return async (r) => {
    let i = await fd(t);
    if (i.decision === `client`) {
      n(r);
      return;
    }
    pd(e, r, i.redirectUrl);
  };
}
async function fd(e) {
  return !e || !Wu()
    ? { decision: `client` }
    : Zu(e) || (Xu(e), (await Qu(e)) ?? { decision: `server` });
}
async function pd(e, t, n) {
  (await Zy({ priority: `user-blocking`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
    t?.(),
    f.location.assign(md(e, n)));
}
function md(e, t) {
  if (!t) return e;
  try {
    let n = new URL(e, f.location.href),
      r = new URL(t);
    return (n.hash && !r.hash && (r.hash = n.hash), r.href);
  } catch {
    return t;
  }
}
function hd(e, t) {
  if (t || f === void 0) return;
  let n = f.location.href,
    r;
  try {
    r = new URL(e, n);
  } catch {
    return;
  }
  let i = new URL(n);
  if (r.origin === i.origin && !(r.pathname === i.pathname && r.search === i.search)) return r.href;
}
function gd(e, t, n, r, i, a, o, s) {
  if (!n) return td(e, r);
  let c = Lu(t, e, s, o);
  if (!c) return td(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return td(e, r);
  let m = hi(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !Rv,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = nd(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = hd(m, g),
    v = { pathVariables: f, locale: p },
    y = dd(m, _, (e) =>
      ld(
        t,
        l,
        () =>
          i(l, v, { priority: `user-blocking`, yieldBeforePreload: !1, shouldLoadRouteData: !g }),
        d,
        f,
        r.smoothScroll,
        e
      )
    );
  return {
    href: m,
    target: h,
    onClick: ud(m, r.trackLinkClick, y),
    navigate: y,
    "data-framer-page-link-current":
      (n && Bu(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, v, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
    _navigationUrl: _,
  };
}
function _d(e, t, n) {
  let r = vd(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (Xe(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (Xe(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function vd(e, t) {
  let n = H(e) ? e : void 0,
    r = n && !$e(n),
    i = t && !$e(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function yd(e, t, n) {
  if (!(t && wn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: bd } : { ...i, onTap: r }) : e;
}
function bd(e) {
  let t = Nu(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function xd(e, t, n, r, i, a) {
  let o = mu(e) ? e : Cu(e);
  if (!mu(o)) return B(e) ? td(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (ot(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return hi(m, {
    currentRoutePath: s?.path,
    currentRoutePathLocalized: s?.pathLocalized,
    currentPathVariables: t.currentPathVariables,
    hash: l,
    pathVariables: g,
    hashVariables: _,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: i?.id,
    localeSlug: i?.slug,
  });
}
function Sd({ EditorBar: e, fast: n = !1 }) {
  let r = w(eE),
    i = N(Vv, n ? rE : iE, Uv),
    a = tT(),
    o = t(() => {
      let e = {},
        t;
      for (t in a)
        a.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = a[t]);
      return e;
    }, [a]);
  return !e || !r || !i
    ? null
    : _(nE, { children: _(E, { children: _(e, { framerSiteId: r, features: o }) }) });
}
function Cd({ currentRoutePath: e, routerAPI: t, children: n }) {
  let i = r(),
    a = r(),
    o = r(t),
    s = r(null);
  ((o.current = t),
    c(() => {
      e && ((i.current ??= new Set()), i.current.add(e), a.current?.(e));
    }, [e]));
  let [l] = d(() => ({
    getInitialState: () => ({
      visitedPages: i.current ?? new Set(),
      getCurrentRoutePath: () =>
        o.current ? Td(o.current, o.current.currentRouteId, o.current.currentPathVariables) : ``,
      resolveRoute: (e) => (o.current ? Td(o.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        a.current = e;
      },
      sendTrackingEvent: async (e) => {
        o.current && wd(o.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: s,
  }));
  return _(aE.Provider, { value: l, children: n });
}
async function wd(e, t) {
  if (!un(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    ln(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Td(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? or(r.path, n) : r.path) : ``;
}
function Ed(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function Dd() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((oE = e.timeZone), (sE = e.locale));
}
function Od({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  Hr(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: Nr()?.paginationInfo,
      contentLocaleId: i,
      canonicalPathVariables: a,
    },
    t
  );
}
function kd(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let {
      historyPath: i,
      hash: a,
      pathVariables: o,
      localeId: s,
      currentRoutePath: c,
      contentLocaleId: l,
      canonicalPathVariables: u,
    } = n,
    d = c !== void 0 && c === r,
    f = Nr();
  Hr(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      contentLocaleId: l,
      canonicalPathVariables: u,
      localeId: s,
      queryParamBackAnchorSearch: d ? f?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function Ad(e, t, n, r) {
  let i = Nr();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Hr(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
        contentLocaleId: i?.contentLocaleId,
        canonicalPathVariables: i?.canonicalPathVariables,
      },
      hi(t, n)
    ));
}
function jd() {
  return jn() >= 17 ? dE : uE;
}
function Md(e = Rd) {
  let t = (e) => {
    e.persisted && Vd();
  };
  On() && (f.addEventListener(`pageshow`, t), (lE = Date.now() - jd()));
  let n = Nd(),
    r = zd(e);
  return function () {
    (f.removeEventListener(`pageshow`, t), n(), r());
  };
}
function Nd() {
  let e = f.history.scrollRestoration;
  return (
    (f.history.scrollRestoration = `manual`),
    function () {
      f.history.scrollRestoration = e;
    }
  );
}
function Pd(e) {
  return H(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function Fd() {
  return { x: f.scrollX, y: f.scrollY };
}
function Id() {
  let e = Nr();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (Pd(t)) return t;
}
function Ld(e) {
  let t = Nr();
  t && (Br({ ...t, scrollPosition: e }), On() && (lE = Date.now()));
}
function Rd(e, t = !1) {
  let n = Id();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (On() && !t) {
      let e = jd();
      if (Date.now() - lE < e) return;
    }
    Ld(e);
  }
}
function zd(e) {
  let t = () => {
      e(Fd());
    },
    n = () => {
      e(Fd(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), f.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), f.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in f)) {
    let e = Bd(t);
    return function () {
      (i(), e());
    };
  }
  return (
    f.addEventListener(`scrollend`, t),
    function () {
      (i(), f.removeEventListener(`scrollend`, t));
    }
  );
}
function Bd(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), !(t === void 0 || Pr(Nr()) !== t) && e());
    },
    a = () => {
      let e = Pr(Nr());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = On() ? jd() : 100;
      t = f.setTimeout(i, a);
    };
  return (
    f.addEventListener(`scroll`, a),
    function () {
      (f.removeEventListener(`scroll`, a), r());
    }
  );
}
function Vd() {
  let e = Id();
  return e ? (f.scrollTo(e.x, e.y), !0) : !1;
}
function Hd(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function Ud(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (Hd(n, t), !0);
}
function Wd(e, t, n) {
  n !== `preserve-scroll-position` &&
    Oe.render(
      () => {
        (n === `restore-scroll-position` && Vd()) || Ud(e, t) || f.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function Gd(e, t) {
  Oe.read(() => {
    f.scrollY !== 0 ||
      f.scrollX !== 0 ||
      Oe.render(
        () => {
          Vd() || Ud(e, t);
        },
        !1,
        !0
      );
  });
}
function Kd(e) {
  let t = tT().scrollRestoration,
    n = r(void 0),
    i = r(!1),
    a = !!(t && !e),
    o = C(
      (e) => {
        ((n.current = e), a && (i.current = !0));
      },
      [a]
    ),
    s = C((e, t = !1) => {
      i.current || Rd(e, t);
    }, []),
    c = C(() => {
      a && (i.current = !0);
    }, [a]),
    l = C(() => n.current !== void 0 || i.current, []),
    u = C((e, t) => {
      let r = n.current;
      !r ||
        r.routeId !== e ||
        r.remountKey !== t ||
        ((n.current = void 0), (i.current = !1), Wd(r.hash, r.shouldSmoothScroll, r.behavior));
    }, []);
  return (
    M(() => {
      if (a) return Md(s);
    }, [a, s]),
    {
      usesCustomScrollRestoration: a,
      isNavigationCommitPending: l,
      onHistoryTraversal: c,
      scheduleScroll: o,
      commitNavigationScroll: u,
    }
  );
}
function qd({ currentRouteId: e, remountKey: t, scrollRestoration: n }) {
  let { commitNavigationScroll: r, usesCustomScrollRestoration: i } = n;
  return (
    M(() => {
      r(e, t);
    }),
    c(() => {
      i && Gd(f.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function Jd() {
  let [e, t] = g.useState(0);
  return [e, g.useCallback(() => t((e) => e + 1), [])];
}
function Yd({ children: e, loadSnippetsModule: t }) {
  return _(SE.Provider, { value: t, children: e });
}
function Xd() {
  return g.useContext(SE);
}
function Zd(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Qd(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (U(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (U(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      W(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await $d(a.createContextualFragment(e), r, i));
}
async function $d(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = ef(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await $d(r, e, null)));
  }
}
function ef(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return tf(r, t, n);
}
function tf(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function nf(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = vE), (n = yE));
      break;
    case `bodyEnd`:
      ((t = bE), (n = xE));
      break;
    case `headStart`:
      ((t = mE), (n = hE));
      break;
    case `headEnd`:
      ((t = gE), (n = _E));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function rf(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Zd(e),
    s = t.nextSibling;
  for (; s && s !== n; ) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function af(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = nf(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = rf(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((of(t, o), s)) {
      await Qd(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Zd(e.id),
      u = `${c}
${e.code}
${l}`,
      d = cf(e.id, n, r, i);
    d ? await Qd(u, d, `afterend`) : await Qd(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function of(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t; ) {
    let e = n.nextSibling;
    (sf(n) && n.remove(), (n = e));
  }
}
function sf(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function cf(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = rf(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function lf() {
  let e = Xd();
  return C(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(fE)?.dataset[pE] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await af(t, n, r);
      }
    },
    [e]
  );
}
function uf(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function df({
  siteCanonicalURL: e,
  activeLocale: t,
  contentLocale: n,
  currentRoute: r,
  currentRouteId: i,
  currentPathVariables: a,
  locales: o,
  collectionUtils: s,
}) {
  if (!e || !t || !n || !r) return;
  let c,
    l = [],
    u = o.find((e) => e.id === ty),
    { path: d } = await Jn({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
  d && (c = uf(d, e));
  let p;
  for (let n of o) {
    if (r.includedLocales && !r.includedLocales.includes(n.id)) continue;
    let { path: o } = await Jn({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
    if (!o) continue;
    let c = uf(o, e);
    (l.push({ href: c, hrefLang: n.code }), n.id === ty && (p = c));
  }
  return (
    p && l.push({ href: p, hrefLang: `x-default` }),
    () => {
      (Or(c, f.location.href), kr(l));
    }
  );
}
function ff({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let l = bn(),
    u = lf();
  c(() => {
    let c = !0,
      d = () => void (c = !1);
    return !e || !t
      ? (u(i, n ?? {}, e, a).catch((e) => {
          c && Kl(e);
        }),
        d)
      : ((e.id === t.id
          ? Rn()
          : Jn({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: o.find(({ id: e }) => e === ty),
              route: r,
              routeId: i,
              pathVariables: n,
              collectionUtils: l,
              preserveQueryParams: !1,
            })
        )
          .then(async (d) => {
            if (!c) return;
            let f = d ? d.pathVariables : n;
            if ((await u(i, f ?? {}, t, a), !c)) return;
            let p = await df({
              siteCanonicalURL: s,
              activeLocale: e,
              contentLocale: t,
              currentRoute: r,
              currentRouteId: i,
              currentPathVariables: n,
              locales: o,
              collectionUtils: l,
            });
            c && p?.();
          })
          .catch((e) => {
            c && Kl(e);
          }),
        d);
  }, [e, l, t, n, r, i, a, u, o, s]);
}
function pf(e) {
  if (!e) return Iv;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function mf(e) {
  let t = Jr(e),
    n = r(void 0),
    i = C(() => {
      (n.current?.abort(), (n.current = void 0));
    }, []);
  return {
    startNavigation: C(
      async (e, r, a, o = !0) => {
        i();
        let s = o ? new AbortController() : void 0;
        n.current = s;
        let c = s?.signal,
          l = Lt(c);
        if ((r.promise.finally(l), a === void 0)) return (e(c), r.promise);
        let u,
          d = new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(Iv);
        if ((t(d, s, a), e(c), await r.promise, c?.aborted)) return;
        let p = f.navigation?.transition;
        u();
        try {
          await p?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        c?.aborted || _b();
      },
      [i, t]
    ),
    cancelPendingNavigation: i,
  };
}
function hf({
  defaultPageStyle: e,
  disableHistory: n,
  initialPathVariables: i,
  initialRoute: a,
  notFoundPage: o,
  collectionUtils: s,
  routes: u,
  initialLocaleId: d,
  initialCollectionItemId: p,
  initialContentLocaleIdOverride: h,
  locales: g = ey,
  initialCanonicalPathVariables: v,
  preserveQueryParams: y = !1,
  LayoutTemplate: b,
  EditorBar: x,
  siteCanonicalURL: S,
  adaptLayoutToTextDirection: w,
}) {
  (Si(),
    Ur({
      disabled: n,
      routeId: a,
      initialPathVariables: i,
      initialLocaleId: d,
      initialContentLocaleId: h,
      initialCanonicalPathVariables: v,
    }));
  let E = Er(),
    [D, O] = Jd(),
    k = jr(`framer-route-change`),
    A = t(() => (!tT().synchronousNavigationOnDesktop || !Fn() ? m : (e) => e()), []),
    j = r(!0),
    N = r(),
    ee = r(0),
    P = r(a),
    F = r(i),
    I = r(),
    te = r(d),
    ne = Kd(n),
    { isNavigationCommitPending: re, usesCustomScrollRestoration: L } = ne,
    { startNavigation: ie, cancelPendingNavigation: ae } = mf(L),
    oe = bn(),
    se = ne.scheduleScroll,
    ce = te.current,
    le = P.current,
    ue = F.current,
    de = u[le],
    fe = de?.path;
  if (!de) throw Error(`Router cannot find route for ${le}`);
  let pe = t(() => g.find(({ id: e }) => e === ty), [g]),
    R = t(() => g.find(({ id: e }) => (ce ? e === ce : e === ty)) ?? null, [ce, g]),
    {
      contentLocale: me,
      currentCanonicalPathVariables: he,
      pageExistsInCurrentLocale: ge,
      setRouteContentState: _e,
    } = _f({
      activeLocale: R,
      currentRoute: de,
      initialCanonicalPathVariables: v,
      initialContentLocaleIdOverride: h,
      locales: g,
      routes: u,
    }),
    ve = R?.textDirection ?? `ltr`,
    z = w ? ve : `ltr`;
  M(() => {
    w && document.documentElement.setAttribute(`dir`, ve);
  }, [ve, w]);
  let ye = Kr(),
    be = t(
      () => ({
        activeLocale: R,
        contentLocale: me,
        locales: g,
        setLocale: async (e) => {
          let t = ++ee.current,
            r = k({ localized: !0 });
          if ((await Zy({ priority: `user-blocking`, continueAfter: `paint` }), t !== ee.current)) {
            r.ignore?.();
            return;
          }
          let i;
          B(e) ? (i = e) : H(e) && (i = e.id);
          let a = g.find(({ id: e }) => e === i);
          if (!a) {
            r.ignore?.();
            return;
          }
          let o = P.current,
            s = u[o];
          if (!s) {
            r.ignore?.();
            return;
          }
          let c = fi(S);
          try {
            let e = await ye({
              currentLocale: R,
              nextLocale: a,
              route: s,
              routeId: o,
              defaultLocale: pe,
              pathVariables: F.current,
              preserveQueryParams: y,
              sitePrefix: c,
            });
            if (!e || t !== ee.current) {
              r.ignore?.();
              return;
            }
            let i = e.path && c + e.path,
              { contentLocaleId: l, canonicalPathVariables: u } = await Zn({
                activeLocale: a,
                defaultLocale: pe,
                collectionUtilsCache: oe,
                locales: g,
                pathVariables: e.pathVariables,
                route: s,
                routeId: o,
              });
            if (t !== ee.current) {
              r.ignore?.();
              return;
            }
            ((j.current = !1),
              (te.current = a.id),
              (N.current = i),
              (F.current = e.pathVariables),
              _e(l, u));
            let d = s.path && e.pathVariables ? or(s.path, e.pathVariables) : s.path;
            (se({
              routeId: o,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              ie(
                () => {
                  E(o, o, () => A(O));
                },
                r,
                n
                  ? void 0
                  : i
                    ? () => {
                        Od({
                          routeId: o,
                          url: i,
                          pathVariables: e.pathVariables,
                          localeId: a.id,
                          contentLocaleId: l,
                          canonicalPathVariables: u,
                        });
                      }
                    : void 0,
                !1
              ));
          } catch {
            r.ignore?.();
          }
        },
      }),
      [R, pe, me, n, O, g, y, _e, u, se, ie, E, k, A, ye, oe, S]
    ),
    xe = C(
      (e, t, n, r, i, a, o, s, c, l, d) => {
        j.current = !1;
        let f = P.current,
          p = u[e],
          m = It(p, n),
          h = p?.path && i ? or(p.path, i) : p?.path;
        if (
          ((P.current = e),
          (te.current = t),
          (F.current = i),
          (I.current = void 0),
          _e(a, o),
          (N.current = r),
          se({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: l ?? !1,
            behavior: s
              ? L
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          s)
        ) {
          (ae(), A(O));
          return;
        }
        ie(
          (t) => {
            E(f, e, () => A(O), t);
          },
          c,
          d,
          !0
        );
      },
      [O, _e, u, L, se, ie, E, A, ae]
    );
  (Wr(ne, P, xe),
    c(() => {
      if (n) return;
      let e = () => {
        let e = Nr(),
          t = f.location.hash === `` ? void 0 : f.location.hash.slice(1);
        (e && It(u[e.routeId], e.hash) === t) ||
          Vr({
            ...(e ||
              (Ir() ?? { routeId: P.current, pathVariables: F.current, localeId: te.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (f.addEventListener(`hashchange`, e), () => f.removeEventListener(`hashchange`, e));
    }, [n, u]));
  let Se = C(
      async (e, t, r, i, a) => {
        let o = u[e],
          s = pt(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          l = k({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          d = pf(a);
        if (
          (Zy({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await Zy({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll($y)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = It(o, t),
          p = F.current,
          m = te.current;
        if (
          I.current === void 0 &&
          Ed({ routeId: P.current, pathVariables: p }, { routeId: e, pathVariables: r })
        ) {
          let a = re();
          if (a) {
            let t = o?.path && r ? or(o.path, r) : o?.path;
            se({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else ae();
          (l.ignore?.(), !a && L && Wd(f, i, `scroll-to-hash-or-top`));
          let s = u[e];
          (!n &&
            s &&
            Ad(
              e,
              s,
              {
                currentRoutePath: s.path,
                currentRoutePathLocalized: s.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: t,
                localeId: m,
                preserveQueryParams: y,
                siteCanonicalURL: S,
              },
              d
            ),
            !a && !L && Wd(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let h = u[P.current],
          _ =
            fi(S) +
            hi(o, {
              currentRoutePath: h?.path,
              currentRoutePathLocalized: h?.pathLocalized,
              currentPathVariables: p,
              hash: t,
              pathVariables: r,
              localeId: m,
              localeSlug: g.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: y,
              relative: !1,
              siteCanonicalURL: S,
            }),
          v = {};
        I.current = v;
        let { contentLocaleId: b, canonicalPathVariables: x } = await Zn({
          activeLocale: R,
          defaultLocale: pe,
          collectionUtilsCache: oe,
          locales: g,
          pathVariables: r,
          route: o,
          routeId: e,
        });
        I.current === v &&
          xe(
            e,
            m,
            t,
            _,
            r,
            b,
            x,
            !1,
            l,
            i,
            n
              ? void 0
              : () => {
                  (d(),
                    kd(e, o, {
                      historyPath: _,
                      currentRoutePath: h?.path,
                      hash: t,
                      pathVariables: r,
                      contentLocaleId: b,
                      canonicalPathVariables: x,
                      localeId: m,
                    }));
                }
          );
      },
      [ae, u, g, xe, n, y, S, k, L, re, se, oe, pe, R]
    ),
    Ce = Ot(u),
    we = N.current,
    Te = cE(de, le, we, ue, R, p),
    Ee = j.current;
  ff({
    activeLocale: R,
    contentLocale: me,
    currentPathVariables: ue,
    currentRoute: de,
    currentRouteId: le,
    isInitialNavigation: Ee,
    locales: g,
    siteCanonicalURL: S,
  });
  let De = t(
      () => ({
        navigate: Se,
        getRoute: Ce,
        currentRouteId: le,
        currentPathVariables: ue,
        currentCanonicalPathVariables: he,
        routes: u,
        collectionUtils: s,
        preserveQueryParams: y,
        pageviewEventData: Te,
        siteCanonicalURL: S,
        isInitialNavigation: Ee,
      }),
      [Se, Ce, le, ue, he, u, s, y, S, Te, Ee]
    ),
    Oe = fe && ue ? or(fe, ue) : fe,
    ke = `${ce}${Oe}`,
    Ae = Wa(() => ({ ...e, display: `contents` }));
  return _(kt, {
    api: De,
    children: _(nb.Provider, {
      value: be,
      children: _(rb.Provider, {
        value: z,
        children: _(yT, {
          children: _(si, {
            routerRenderKey: D,
            isNavigationCommitPending: ne.isNavigationCommitPending,
            children: T(Cd, {
              currentRoutePath: Oe,
              routerAPI: De,
              children: [
                x && _(Sd, { EditorBar: x, fast: !0 }),
                _(iT, {
                  children: T(Wl, {
                    children: [
                      _(ox.Start, {}),
                      _(qd, { currentRouteId: le, remountKey: ke, scrollRestoration: ne }),
                      _(cx, {
                        notFoundPage: o,
                        defaultPageStyle: e,
                        routerRenderKey: D,
                        children: _(gf, {
                          LayoutTemplate: b,
                          webPageId: de?.abTestingVariantId ?? le,
                          style: e,
                          children: (t) =>
                            _(l, { children: ge ? Di(de.page, t ? Ae : e) : o && Di(o, e) }, ke),
                        }),
                      }),
                      x && _(Sd, { EditorBar: x }),
                      _(vi, {}),
                      _(ox.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function gf({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? _(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function _f({
  activeLocale: e,
  currentRoute: n,
  initialCanonicalPathVariables: i,
  initialContentLocaleIdOverride: a,
  locales: o,
  routes: s,
}) {
  let c = r(i),
    l = r(a),
    u = l.current,
    d = !e || !n.includedLocales || n.includedLocales.includes(e.id),
    f = t(() => {
      if (!e) return null;
      let t;
      return (
        (t = d
          ? (u ?? n?.canonicalLocaleIdByLocaleId?.[e.id])
          : Object.values(s).find((e) => e.path && Pb.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              e.id
            ]),
        t ? (o.find(({ id: e }) => e === t) ?? e) : e
      );
    }, [e, n, o, u, d, s]),
    p = C((e, t) => {
      ((l.current = e), (c.current = t));
    }, []);
  return {
    contentLocale: f,
    currentCanonicalPathVariables: c.current,
    pageExistsInCurrentLocale: d,
    setRouteContentState: p,
  };
}
function vf(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function yf(e) {
  return typeof e == `object` && !!e;
}
function bf(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!yf(r)) return;
    r = r[e];
  }
  return r;
}
function xf(e) {
  return `${e.credentials}:${e.url}`;
}
function Sf(e) {
  return B(e) && !Number.isNaN(Number(e));
}
function Cf(e, t) {
  switch (e) {
    case `string`:
      return B(t) || V(t);
    case `color`:
      return B(t);
    case `boolean`:
      return Ze(t);
    case `number`:
      return V(t) || Sf(t);
    case `link`:
    case `image`:
      return B(t) && vu(t, !1);
    default:
      return !1;
  }
}
function wf(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = bf(e.data, t.resultKeyPath);
  if (et(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!Cf(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Tf(e, t) {
  if (Y.current() === Y.canvas) return !1;
  let n = Math.max(t * 1e3, wE);
  return Date.now() >= e + n;
}
function Ef({ client: e, children: t }) {
  return _(AE.Provider, { value: e, children: t });
}
function Df(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    canonicalPathVariables: s,
    routes: c,
    collectionUtils: l,
    serverDatabaseClient: u,
    notFoundPage: d,
    isReducedMotion: f = !1,
    skipAnimations: p = !1,
    includeDataObserver: m = !1,
    localeId: h,
    locales: v,
    preserveQueryParams: y,
    EditorBar: b,
    defaultPageStyle: x,
    disableHistory: S,
    LayoutTemplate: C,
    siteCanonicalURL: w,
    adaptLayoutToTextDirection: T,
    loadSnippetsModule: E,
    initialCollectionItemId: D,
    initialContentLocaleIdOverride: O,
  } = e;
  return (
    g.useEffect(() => {
      n || Ix.start();
    }, []),
    n
      ? _($r, {
          value: r ?? `preview`,
          children: _(ke, {
            reducedMotion: p ? `always` : f ? `user` : `never`,
            skipAnimations: p,
            children: _(yn, {
              collectionUtils: l,
              children: _(Ef, {
                client: u,
                children: _(kE, {
                  children: _(eE.Provider, {
                    value: a,
                    children: _(Yd, {
                      loadSnippetsModule: E,
                      children: _(hf, {
                        initialRoute: i,
                        initialPathVariables: o,
                        initialCanonicalPathVariables: s,
                        initialLocaleId: h,
                        initialCollectionItemId: D,
                        initialContentLocaleIdOverride: O,
                        routes: c,
                        collectionUtils: l,
                        notFoundPage: d,
                        locales: v,
                        defaultPageStyle: x ?? { minHeight: `100vh`, width: `auto` },
                        preserveQueryParams: y,
                        EditorBar: b,
                        disableHistory: S,
                        LayoutTemplate: C,
                        siteCanonicalURL: w,
                        adaptLayoutToTextDirection: T,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : _(m ? lw : g.Fragment, {
          children: _(jt, {
            routes: c,
            children: _(ZC, { children: g.isValidElement(t) ? t : g.createElement(t, { key: i }) }),
          }),
        })
  );
}
function Of(e, t) {
  let n = At(),
    { activeLocale: r } = er(),
    i = od();
  return ti(() => {
    let t = [],
      a = (e) => {
        if (e)
          return B(e) || mu(e)
            ? xd(e, n, void 0, void 0, r, o)
            : xd(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function kf(e) {
  return {
    trace(...t) {
      return rS.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return rS.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return rS.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return rS.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return rS.getLogger(e)?.error(...t);
    },
    get enabled() {
      return rS.getLogger(e) !== void 0;
    },
  };
}
function Af() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function jf() {
  return ME.priority;
}
function Mf(e) {
  let t = ME;
  return (
    (ME = e),
    {
      [Af()]() {
        ME = t;
      },
    }
  );
}
function Nf(e = ME.priority, t = ME.canYield) {
  if (!(!t || e === void 0)) return Zy({ batch: !0, priority: zn(e) });
}
function Pf(e) {
  var t = [];
  try {
    Ve(t, Mf({ priority: ME.priority, canYield: !1 }));
    let n = e.next();
    return (U(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    z(t, n, r);
  }
}
async function Ff(e, t, n = ME.priority, r = ME.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (Ve(o, Mf(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      z(o, s, c);
    }
  }
  for (; !a.done; ) {
    var l = [];
    try {
      let t = await a.value,
        o = Nf(n, r);
      (o && (await o), Ve(l, Mf(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      z(l, u, d);
    }
  }
  return a.value;
}
function If(e, t = ME.priority, n = ME.canYield) {
  var r = [];
  try {
    Ve(r, Mf({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : Ff(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    z(r, i, a);
  }
}
function* Lf(e, t = ME.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (it(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Ff(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* Rf(e, t = ME.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = Nf(t);
    r && (yield r);
    let o = e[a];
    if (it(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Ff(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function zf(e) {
  return Hf(e) || Gf(e);
}
function Bf(e) {
  return Qe(e) && e.every(H);
}
function Vf(e) {
  return H(e) && Xe(e.read) && Xe(e.preload);
}
function Hf(e) {
  return Bf(e) || Vf(e);
}
function Uf(e) {
  return H(e) && H(e.schema);
}
function Wf(e) {
  return H(e) && H(e.collectionByLocaleId);
}
function Gf(e) {
  return Uf(e) || Wf(e);
}
function Kf(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = xp(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function qf(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => NE.cast(e, t.definition)) };
  }
  return null;
}
function Jf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Yf(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Xf(e) {
  return Yf(e)?.value ?? !1;
}
function Zf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Qf(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function $f(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function ep(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return rt(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function tp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function np(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function rp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ip(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function ap(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function op(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function sp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function cp(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function lp(e) {
  return cp(e)?.value ?? null;
}
function up(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = xp(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function dp(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = NE.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function fp(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function pp(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function mp(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function hp(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function gp(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function _p(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function vp(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function yp(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function bp(e) {
  return yp(e)?.value ?? null;
}
function xp(e, t, n) {
  if (tt(e) || tt(t)) return (U(e === t), 0);
  switch (e.type) {
    case `array`:
      return (U(e.type === t.type), Kf(e, t, n));
    case `boolean`:
      return (U(e.type === t.type), Jf(e, t));
    case `color`:
      return (U(e.type === t.type), Zf(e, t));
    case `date`:
      return (U(e.type === t.type), $f(e, t));
    case `enum`:
      return (U(e.type === t.type), tp(e, t));
    case `file`:
      return (U(e.type === t.type), rp(e, t));
    case `link`:
      return (U(e.type === t.type), ap(e, t));
    case `number`:
      return (U(e.type === t.type), sp(e, t));
    case `object`:
      return (U(e.type === t.type), up(e, t, n));
    case `responsiveimage`:
      return (U(e.type === t.type), fp(e, t));
    case `richtext`:
      return (U(e.type === t.type), mp(e, t));
    case `vectorsetitem`:
      return (U(e.type === t.type), gp(e, t));
    case `string`:
      return (U(e.type === t.type), vp(e, t, n));
    default:
      W(e);
  }
}
async function Sp(e, t) {
  return Vf(e) ? (await e.preload(t), e.read(t)) : e;
}
function Cp(e) {
  return e.includes(RE);
}
function wp(e) {
  if (!Gf(e) || !e.id) return;
  let t = IE.get(e.id);
  if (!t) return (IE.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function Tp(e) {
  let t = wp(e);
  if (t) return t;
  let n = LE.get(e);
  if (n) return n;
  let r = `${RE}${Math.random().toString(16).slice(2)}`;
  return (LE.set(e, r), r);
}
function Ep(e, t) {
  if (Hf(e)) {
    let n = Tp(e) + (t?.id ?? ty),
      r = zE.get(n);
    if (r) return r;
    let i = new FE(e, t);
    return (zE.set(n, i), i);
  }
  if (Uf(e)) return e;
  if (Wf(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  W(e, `Unsupported collection type`);
}
function Dp(e) {
  return e;
}
function Op(e) {
  return Xe(e.getHash);
}
function q(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (H(r) && Op(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return Dp(`${n})`);
}
function kp(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function Ap(e) {
  if (e !== void 0) return zn(e);
}
function jp(e, t) {
  return { collectionId: Tp(e), pointer: t };
}
function Mp(e) {
  return H(e) && B(e.collectionId);
}
function Np(e, t) {
  return { collectionId: Tp(e), pointer: t };
}
function Pp(e) {
  return H(e) && B(e.collectionId);
}
function Fp(e, t) {
  let n = new Map();
  function r(e) {
    if (H(e))
      if (e.type === `Collection` && zf(e.data)) {
        let r = Ep(e.data, t),
          i = Tp(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (Qe(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function Ip(e) {
  return e;
}
function Lp(e) {
  return e;
}
function Rp(e) {
  return e;
}
function zp() {
  return 25;
}
function Bp() {
  return 12500;
}
function Vp(e) {
  return Array(e).fill({ type: `All` });
}
function Hp(e) {
  return e;
}
function Up(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new KD(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function Wp(e) {
  let t = new Set();
  if (!e) return t;
  Up(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (Up(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function Gp(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) Gp(n, t);
      return;
    case `object`:
      for (let n in e.value) Gp(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function Kp(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function qp(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Jp(e) {
  return `${e.functionName}(${e.arguments.map((e) => $p(e)).join(`, `)})`;
}
function Yp(e) {
  let t = `CASE`;
  e.value && (t += ` ${$p(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${$p(n.when)} THEN ${$p(n.then)}`;
  return (e.else && (t += ` ELSE ${$p(e.else)}`), (t += ` END`), t);
}
function Xp(e) {
  let t = $p(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function Zp(e) {
  let t = $p(e.left),
    n = $p(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function Qp(e) {
  return `CAST(${$p(e.value)} as ${e.dataType})`;
}
function $p(e) {
  switch (e.type) {
    case `Identifier`:
      return Kp(e);
    case `LiteralValue`:
      return qp(e);
    case `FunctionCall`:
      return Jp(e);
    case `Case`:
      return Yp(e);
    case `UnaryOperation`:
      return Xp(e);
    case `BinaryOperation`:
      return Zp(e);
    case `TypeCast`:
      return Qp(e);
    case `Select`:
      return `${im(e)}`;
    default:
      W(e);
  }
}
function em(e) {
  return Uf(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function tm(e) {
  let t = `${nm(e.left)} LEFT JOIN ${nm(e.right)}`;
  return (e.constraint && (t += ` ON ${$p(e.constraint)}`), t);
}
function nm(e) {
  switch (e.type) {
    case `Collection`:
      return em(e);
    case `LeftJoin`:
      return tm(e);
    default:
      W(e);
  }
}
function rm(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function im(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = $p(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${nm(e.from)}`),
    e.where && (t += ` WHERE ${$p(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${$p(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${$p(e.limit)}`),
    e.offset && (t += ` OFFSET ${$p(e.offset)}`),
    rm(t)
  );
}
function am(e) {
  return H(e) && e.type === `Collection`;
}
function om(e, t) {
  return am(t) && zf(t.data) ? Tp(t.data) : t;
}
function sm(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, om) + n;
}
function cm(e) {
  let { activeLocale: t } = er();
  return lO.get(e, t).use();
}
function lm(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(et(e) || H(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function um(e) {
  let t = r(e);
  return (
    p(() => {
      t.current = e;
    }, [e]),
    ni((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function dm(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function fm() {
  return new Set();
}
function pm(e) {
  let t = Wa(fm),
    n = Wa(fm);
  return (
    ec(() => () => dm(n, t)),
    c(() => () => dm(n, t), []),
    c(() => {
      dm(n, t);
    }, [e]),
    r({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function mm(e, t, n) {
  return g.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function hm(e) {
  for (let [t, n] of Object.entries(e)) if (by.matchMedia(n).matches) return t;
}
function gm(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && by.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function _m(e, t, n = !0) {
  let i = w(JC),
    a = Ja(),
    o = La(),
    s = An() && (!a || o),
    l = r(s ? (hm(t) ?? e) : e),
    u = r(n && i ? e : l.current),
    d = cs(),
    f = Ye(),
    p = C(
      (e) => {
        if (e !== l.current || e !== u.current) {
          let t = function () {
            ((l.current = u.current = e),
              m(() => {
                d();
              }));
          };
          a
            ? t()
            : f(() => {
                t();
              });
        }
      },
      [f, d, a]
    );
  return (
    Cb(() => {
      if (a) {
        if (o) {
          p(hm(t) ?? e);
          return;
        }
        p(e);
      }
    }, [e, o, a, t, p]),
    Cb(() => {
      !n || i !== !0 || p(l.current);
    }, []),
    c(() => {
      if (!s || o) return;
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = by.matchMedia(r),
          i = (e) => {
            e.matches && p(n);
          };
        (vm(t, i), e.push([t, i]));
      }
      return () => e.forEach(([e, t]) => ym(e, t));
    }, [o, t, p, s]),
    [l.current, u.current]
  );
}
function vm(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function ym(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function bm(e) {
  setTimeout(e, 1);
}
function xm(e) {
  let t = new Set(),
    n = gm(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Sm(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (zv ? by.requestIdleCallback : bm)(() => {
    document.querySelector(uO)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Sm(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Cm(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Sm(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Cm(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function wm(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function Tm(e, t) {
  if (qa()) return;
  let n = g.useRef(!0),
    r = g.useRef(t);
  (ec((t, i) => {
    let a = t && !i;
    if (!n.current && a) {
      let t = wm(r.current, e);
      t && t();
    }
    n.current = a;
  }, []),
    g.useEffect(() => {
      if (n.current) {
        let t = wm(r.current, e);
        t && t();
      }
    }, [e]));
}
function Em(e) {
  return H(e) && dO in e && e.page !== void 0;
}
function Dm(e, t) {
  return `${e}-${t}`;
}
function Om(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (U(r !== void 0, `nextVariant should be defined`), r);
}
function km(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Am(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function jm(e, t) {
  return t[e] || `framer-v-${e}`;
}
function Mm(e, t, n) {
  return e && n.has(e) ? e : t;
}
function Nm() {
  let e = r(),
    t = r(),
    n = C(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    c(
      () => () => {
        n();
      },
      [n]
    ),
    C(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function Pm() {
  let e = r(),
    t = r(!1),
    n = r(),
    i = w(jC);
  return (
    c(
      () => () => {
        (e.current?.(), (n.current = void 0), (e.current = void 0));
      },
      []
    ),
    C(
      (r, a) => {
        if (!a?.current || t.current) {
          r();
          return;
        }
        if (((n.current = r), e.current)) return;
        let o = !1;
        e.current = Ks(i, `undefined`, a.current, null, (e) => {
          ((t.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), t.current && n.current?.());
              })));
        });
      },
      [i]
    )
  );
}
function Fm(e) {
  let t = Nm(),
    n = Pm();
  return C(
    (r, i = !1) => {
      if (Rv) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function Im() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (mO = () => {
        (e(), (t = void 0));
      }));
  });
}
function Lm(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (pO = Im()));
}
function Rm() {
  (performance.mark(`click-received-listener`), (pO = void 0), mO?.(), (mO = void 0));
}
function zm(e = !1) {
  c(() => {
    e &&
      (document.addEventListener(`pointerup`, Lm, !0),
      document.__proto__.addEventListener.call(document, `click`, Rm, !0));
  }, [e]);
}
function Bm({
  variant: e,
  defaultVariant: n,
  transitions: i,
  enabledGestures: a,
  cycleOrder: o = [],
  variantProps: s = {},
  variantClassNames: c = {},
  ref: l,
}) {
  let u = cs(),
    d = gu(),
    f = Wa(() => new Set(o));
  zm(tT().yieldOnTap);
  let p = Fm(l),
    h = r({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: Mm(e, n, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: n,
      enabledGestures: a,
      cycleOrder: o,
      transitions: i,
    }),
    g = C((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = h.current,
        o = Mm(e, a, f),
        s = Am(i?.[o], t, n, !1, r);
      return [o, s ? Dm(o, s) : void 0];
    }, []),
    _ = C(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = g(r);
        if (o === e && s === t) return;
        (a && (h.current.isError = !1),
          (h.current.baseVariant = o || n),
          (h.current.gestureVariant = s));
        let c = tT().yieldOnTap && h.current.isPressedHasUpdated;
        (c &&
          pO &&
          (performance.mark(`wait-for-tap-start`),
          await pO,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await Zy({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: l,
          isPressed: d,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: _,
        } = h.current;
        if (l || f || d || _) {
          m(u);
          return;
        }
        p(() => m(u), i);
      },
      [g, u, p]
    ),
    v = C(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        let r = t !== h.current.isPressed,
          i = e !== h.current.isHovered;
        (e !== void 0 && (h.current.isHovered = e),
          t !== void 0 && (h.current.isPressed = t),
          n !== void 0 && (h.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = h.current;
        ((h.current.isPressedHasUpdated = r),
          (h.current.isHoveredHasUpdated = i),
          _(a, o, s, a, !1));
      },
      [_]
    ),
    y = C(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = h.current,
          o = e === fO ? Om(r || [], i || n) : e;
        _(i, a, n, o, t, !0);
      },
      [_]
    ),
    b = C(() => {
      let { baseVariant: e } = h.current;
      ((h.current.loadedBaseVariant[e] = !0), p(() => m(u), !0));
    }, [u, p]);
  if (e !== h.current.lastVariant) {
    let [t, n] = g(e);
    ((h.current.lastVariant = t),
      (t !== h.current.baseVariant || n !== h.current.gestureVariant) &&
        ((h.current.baseVariant = t), (h.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: S,
      defaultVariant: w,
      enabledGestures: T,
      isHovered: E,
      isPressed: D,
      isError: O,
      loadedBaseVariant: k,
    } = h.current,
    A = mm(h.current.baseVariant, h.current.gestureVariant, s);
  return t(() => {
    let e = [];
    x !== w && e.push(x);
    let t = T?.[x]?.loading,
      n = !O && !d && !!t && !k[x],
      r = n ? Dm(x, `loading`) : S;
    r && e.push(r);
    let i = T?.[x],
      a = { onMouseEnter: () => v({ isHovered: !0 }), onMouseLeave: () => v({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: km(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: A,
        gestureHandlers: a,
        classNames: $c(jm(x, c), Am(i, E, D, n, O)),
      }
    );
  }, [x, S, E, D, k, A, y, w, T, v, b, c]);
}
function Vm(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!Jl()) return r(e);
  let a = Hm(e, r),
    o = !1;
  function s(r, s) {
    let c = Zl(),
      { disableCustomCode: l } = tT();
    if (l) return _(e, { ...r, ref: s });
    if (au(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? _(xb.Provider, {
            value: n,
            children: _(Yl, {
              getErrorMessage: nu.bind(null, t, n),
              fallback: _(e, { ...r, ref: s }),
              children: _(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (ql(a.error), ql(nu(t, n)), Kl(a.error), !0)), _(e, { ...r, ref: s }));
    if (a.status === `success`)
      return _(xb.Provider, { value: n, children: _(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return g.forwardRef(s);
}
function Hm(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function Um(e) {
  return typeof HTMLVideoElement < `u` && e instanceof HTMLVideoElement;
}
function Wm(e) {
  if (typeof ImageBitmap < `u` && e instanceof ImageBitmap) {
    e.close();
    return;
  }
  Um(e) && (e.pause(), e.removeAttribute(`src`), e.load());
}
function Gm(e) {
  for (let t of Object.values(e)) t.type === `sampler2D` && Wm(t.value);
}
function Km(e, t) {
  return new Promise((n, r) => {
    let i = document.createElement(`video`);
    ((i.crossOrigin = `anonymous`),
      (i.muted = !0),
      (i.loop = !0),
      i.setAttribute(`playsinline`, ``),
      (i.preload = `auto`));
    let a = `Video texture load aborted`;
    if (t?.aborted) {
      (Wm(i), r(Error(a)));
      return;
    }
    let o = () => u(a),
      s = () => u(`Failed to load video texture from "${e}"`),
      c = f.setTimeout(() => u(`Timed out loading video texture from "${e}"`), _O);
    function l() {
      (f.clearTimeout(c), t?.removeEventListener(`abort`, o), i.removeEventListener(`error`, s));
    }
    function u(e) {
      (l(), Wm(i), r(Error(e)));
    }
    (t?.addEventListener(`abort`, o, { once: !0 }),
      i.addEventListener(
        `loadeddata`,
        () => {
          (l(), n(i));
        },
        { once: !0 }
      ),
      i.addEventListener(`error`, s, { once: !0 }),
      (i.src = e));
  });
}
function qm(e, t) {
  let n = e.createBuffer();
  if (!n) throw Error(`Failed to create buffer`);
  return (e.bindBuffer(e.ARRAY_BUFFER, n), e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), n);
}
function Jm(e, t, n, r) {
  let i = e.getAttribLocation(t, `a_position`);
  i >= 0 &&
    (e.bindBuffer(e.ARRAY_BUFFER, n),
    e.enableVertexAttribArray(i),
    e.vertexAttribPointer(i, 2, e.FLOAT, !1, 0, 0));
  let a = e.getAttribLocation(t, `a_texCoord`);
  a >= 0 &&
    (e.bindBuffer(e.ARRAY_BUFFER, r),
    e.enableVertexAttribArray(a),
    e.vertexAttribPointer(a, 2, e.FLOAT, !1, 0, 0));
}
function Ym(e, t) {
  return {
    [$.time.name]: e.getUniformLocation(t, $.time.name),
    [$.resolution.name]: e.getUniformLocation(t, $.resolution.name),
    [$.deltaTime.name]: e.getUniformLocation(t, $.deltaTime.name),
    [$.pixelRatio.name]: e.getUniformLocation(t, $.pixelRatio.name),
    [$.mousePosition.name]: e.getUniformLocation(t, $.mousePosition.name),
    [$.mousePointerDown.name]: e.getUniformLocation(t, $.mousePointerDown.name),
    [$.mouseHover.name]: e.getUniformLocation(t, $.mouseHover.name),
  };
}
function Xm(e, t) {
  let n = e.createTexture();
  if (!n) throw Error(`Failed to create buffer texture`);
  return (
    e.bindTexture(e.TEXTURE_2D, n),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
    n
  );
}
function Zm(e, t) {
  let n = e.createFramebuffer();
  if (!n) throw Error(`Failed to create buffer framebuffer`);
  return (
    e.bindFramebuffer(e.FRAMEBUFFER, n),
    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0),
    n
  );
}
function Qm(e, t, n) {
  let r = e.checkFramebufferStatus(e.FRAMEBUFFER);
  if (r !== e.FRAMEBUFFER_COMPLETE)
    throw Error(
      `Shader buffer "${t}" framebuffer is incomplete (format: "${n}", status: 0x${r.toString(16)}).`
    );
}
function $m(e, t) {
  switch (t) {
    case `rgba8`:
      return { internalFormat: e.RGBA8, uploadFormat: e.RGBA, pixelType: e.UNSIGNED_BYTE };
    case `r8`:
      return { internalFormat: e.R8, uploadFormat: e.RED, pixelType: e.UNSIGNED_BYTE };
    case `rg16f`:
      return { internalFormat: e.RG16F, uploadFormat: e.RG, pixelType: e.HALF_FLOAT };
    case `rgba16f`:
      return { internalFormat: e.RGBA16F, uploadFormat: e.RGBA, pixelType: e.HALF_FLOAT };
    case `rgba32f`:
      return { internalFormat: e.RGBA32F, uploadFormat: e.RGBA, pixelType: e.FLOAT };
  }
}
function eh(e) {
  return e === `rg16f` || e === `rgba16f` || e === `rgba32f`;
}
function th(e) {
  return e.startsWith(vO) && e.length > vO.length;
}
function nh(e) {
  return th(e) && e.endsWith(CO);
}
function rh(e) {
  return th(e) && e.endsWith(wO);
}
function ih(e) {
  return th(e) && e.endsWith(TO);
}
function ah(e) {
  return e.replace(EO, `_`);
}
function oh(e) {
  return `${vO}${ah(e)}`;
}
function sh(e) {
  return `${e}${wO}`;
}
function ch(e) {
  return `${vO}${ah(e)}${CO}`;
}
function lh(e) {
  return `${vO}${ah(e)}${TO}`;
}
function uh(e) {
  return `NUM_${ah(e)
    .replace(/[a-z0-9](?=[A-Z])/gu, `$&_`)
    .toUpperCase()}`;
}
function dh(e) {
  switch (e) {
    case `number`:
    case `enum`:
      return `float`;
    case `boolean`:
      return `float`;
    case `color`:
      return `vec4`;
    case `responsiveimage`:
    case `file`:
      return `sampler2D`;
    default:
      W(e);
  }
}
function fh(e = {}) {
  let { propertyControls: t, heightmapSource: n, bufferNames: r } = e,
    i = [DO, OO, ``, kO, AO],
    a = t ? Object.values(t) : [];
  if (a.length > 0) {
    if (a.some((e) => e?.type === `array`)) {
      i.push(``);
      for (let e in t) {
        let n = t[e];
        if (!(!n || n.type !== `array`)) {
          if (n.control?.type !== `color`)
            throw Error(
              `Shader array control "${e}" is not supported. Only color arrays may be defined.`
            );
          if (!V(n.maxCount)) throw Error(`Shader array control "${e}" must have a maxCount.`);
          i.push(`#define ${uh(e)} ${n.maxCount}`);
        }
      }
    }
    i.push(``);
    for (let e in t) {
      let n = t[e];
      if (n)
        if (n.type === `array`) {
          let t = oh(e);
          (i.push(`uniform vec4 ${t}[${uh(e)}];`), i.push(`uniform int ${sh(t)};`));
        } else {
          let t = dh(n.type);
          i.push(`uniform ${t} ${oh(e)};`);
        }
    }
  }
  if ((n && i.push(`uniform sampler2D ${ch(n)};`), r && r.length > 0)) {
    i.push(``);
    for (let e of r) i.push(`uniform sampler2D ${lh(e)};`);
  }
  i.push(``);
  for (let e of Object.values($)) i.push(`uniform ${e.glslType} ${e.name};`);
  return (
    i.push(``),
    i.join(`
`)
  );
}
function ph(e, t, n = {}) {
  let r = fh(n);
  return t
    ? `${r}${t}
${e}`
    : r + e;
}
function mh(e, t, n) {
  if (e)
    return e.map((e) => ({
      uniformName: lh(e.name),
      fragment: ph(e.fragment, t, n),
      resolutionScale: e.resolutionScale ?? jO,
      format: e.format ?? MO,
    }));
}
function hh(e) {
  gh(e);
  let t = e.buffers ? e.buffers.map((e) => e.name) : void 0,
    n = ph(e.fragment, e.common, {
      propertyControls: e.propertyControls,
      heightmapSource: e.heightmapSource,
      bufferNames: t,
    }),
    r = mh(e.buffers, e.common, {
      propertyControls: e.propertyControls,
      heightmapSource: e.heightmapSource,
      bufferNames: t,
    });
  return { ...e, fragment: n, buffers: r, [NO]: !0 };
}
function gh(e) {
  let t = new Map();
  if (e.propertyControls)
    for (let n in e.propertyControls) {
      if (th(n) || n === vO)
        throw Error(`Property control key "${n}" must not start with "${vO}".`);
      let e = oh(n);
      if (nh(e)) throw Error(`Property control key "${n}" must not end with "_heightmap".`);
      if (rh(e)) throw Error(`Property control key "${n}" must not end with "_length".`);
      if (ih(e)) throw Error(`Property control key "${n}" must not end with "_buffer".`);
      let r = t.get(e);
      if (r !== void 0)
        throw Error(
          `Property control keys "${r}" and "${n}" both resolve to the same uniform "${e}".`
        );
      t.set(e, n);
    }
  if (e.heightmapSource) {
    let t = e.propertyControls?.[e.heightmapSource];
    if (!t || t.type !== `responsiveimage`)
      throw Error(
        `heightmapSource "${e.heightmapSource}" must reference a ResponsiveImage property control.`
      );
  }
  if (e.buffers)
    for (let n of e.buffers) {
      if (th(n.name)) throw Error(`Shader buffer name "${n.name}" must not start with "${vO}".`);
      let e = lh(n.name),
        r = t.get(e);
      if (r !== void 0)
        throw Error(
          r === n.name
            ? `Duplicate shader buffer name "${n.name}".`
            : `Shader buffer names "${r}" and "${n.name}" both resolve to the same uniform "${e}".`
        );
      if (
        (t.set(e, n.name),
        n.resolutionScale !== void 0 &&
          (!V(n.resolutionScale) || n.resolutionScale <= 0 || n.resolutionScale > 1))
      )
        throw Error(
          `Shader buffer "${n.name}" has invalid resolutionScale ${n.resolutionScale}. Must be in the range (0, 1].`
        );
      if (n.format !== void 0 && !yO.has(n.format))
        throw Error(
          `Shader buffer "${n.name}" has invalid format "${n.format}". Must be one of: ${[...yO].join(`, `)}.`
        );
    }
}
function _h(e, t = 0) {
  let n = e.indexOf(`var(`, t);
  if (n === -1) return null;
  let r = n + 4,
    i = 1,
    a;
  for (let t = r; t < e.length; t++)
    if (e[t] === `(`) i++;
    else if (e[t] === `)`) {
      if ((i--, i === 0)) return { start: n, end: t + 1, commaIndex: a };
    } else a === void 0 && e[t] === `,` && (a = t);
  return null;
}
function vh(e, t) {
  if (!t) return {};
  let { start: n, end: r, commaIndex: i } = t,
    a = e.substring(r).trim();
  return i
    ? {
        customProperty: e.substring(n + 4, i),
        fallback: e.substring(i + 1, r - 1).trim(),
        metadata: a,
      }
    : { customProperty: e.substring(n + 4, r - 1), metadata: a };
}
function yh(e) {
  return vh(e, _h(e));
}
function bh(e, t) {
  if (e.size < t) return;
  let n = e.keys().next().value;
  n !== void 0 && e.delete(n);
}
function xh(e, t) {
  if (!Eh(e)) return;
  let n = t?.();
  if (!n) return Sh(e);
  let r = RO.generate(n, () => Sh(e));
  if (r instanceof HTMLCanvasElement) return r;
}
function Sh(e) {
  let t = Th(e);
  if (!t) return;
  let n = zO / Math.min(t.width, t.height),
    r = zO * zO,
    i = t.width * n * (t.height * n);
  i > r && (n *= Math.sqrt(r / i));
  let a = Math.max(1, Math.round(t.width * n)),
    o = Math.max(1, Math.round(t.height * n)),
    s = document.createElement(`canvas`);
  ((s.width = a), (s.height = o));
  let c = s.getContext(`2d`);
  if (!c) return;
  c.drawImage(t.source, 0, 0, a, o);
  let l = c.getImageData(0, 0, a, o).data,
    u = a * o,
    d = new Uint8Array(u);
  for (let e = 0; e < u; e++) d[e] = +((l[e * 4 + 3] ?? 0) > 0);
  let f = new Uint8Array(u);
  for (let e = 0; e < u; e++) {
    if (d[e] === 0) continue;
    let t = e % a,
      n = Math.floor(e / a);
    if (t === 0 || t === a - 1 || n === 0 || n === o - 1) continue;
    let r = !1;
    for (let e = -1; e <= 1 && !r; e++)
      for (let i = -1; i <= 1 && !r; i++)
        (i === 0 && e === 0) || (d[(n + e) * a + (t + i)] === 0 && (r = !0));
    r || (f[e] = 1);
  }
  let p = Ch(f, a, o),
    m = 0;
  for (let e = 0; e < u; e++) {
    let t = p[e] ?? 0;
    t > m && (m = t);
  }
  let h = document.createElement(`canvas`);
  ((h.width = a), (h.height = o));
  let g = h.getContext(`2d`);
  if (!g) return;
  let _ = g.createImageData(a, o);
  for (let e = 0; e < u; e++) {
    let t = m > 0 ? (p[e] ?? 0) / m : 0;
    ((_.data[e * 4] = Math.round(t * 255)),
      (_.data[e * 4 + 1] = 255 - (l[e * 4 + 3] ?? 0)),
      (_.data[e * 4 + 2] = d[e] ? 255 : 0),
      (_.data[e * 4 + 3] = 255));
  }
  g.putImageData(_, 0, 0);
  let v = document.createElement(`canvas`);
  ((v.width = t.width), (v.height = t.height));
  let y = v.getContext(`2d`);
  if (y) return ((y.imageSmoothingEnabled = !0), y.drawImage(h, 0, 0, t.width, t.height), v);
}
function Ch(e, t, n) {
  let r = t * n,
    i = new Float32Array(r),
    a = 1.95,
    o = 0.01,
    s = [],
    c = [];
  for (let i = 0; i < r; i++) {
    if (e[i] === 0) continue;
    let r = i % t,
      a = Math.floor(i / t);
    ((r + a) % 2 == 0 ? s : c).push(
      i,
      a > 0 ? i - t : -1,
      a < n - 1 ? i + t : -1,
      r > 0 ? i - 1 : -1,
      r < t - 1 ? i + 1 : -1
    );
  }
  let l = new Int32Array(s),
    u = new Int32Array(c),
    d = 1 - a,
    f = a / 4;
  for (let e = 0; e < 50; e++) (wh(l, i, d, f, o), wh(u, i, d, f, o));
  return i;
}
function wh(e, t, n, r, i) {
  for (let a = 0; a < e.length; a += 5) {
    let o = e[a] ?? 0,
      s = e[a + 1] ?? -1,
      c = e[a + 2] ?? -1,
      l = e[a + 3] ?? -1,
      u = e[a + 4] ?? -1,
      d = s >= 0 ? (t[s] ?? 0) : 0,
      f = c >= 0 ? (t[c] ?? 0) : 0,
      p = l >= 0 ? (t[l] ?? 0) : 0,
      m = u >= 0 ? (t[u] ?? 0) : 0;
    t[o] = n * (t[o] ?? 0) + r * (i + d + f + p + m);
  }
}
function Th(e) {
  if (e instanceof HTMLImageElement) {
    let t = e.naturalWidth,
      n = e.naturalHeight;
    return t > 0 && n > 0 ? { source: e, width: t, height: n } : void 0;
  }
  if (e instanceof HTMLCanvasElement)
    return e.width > 0 && e.height > 0 ? { source: e, width: e.width, height: e.height } : void 0;
}
function Eh(e) {
  return e instanceof HTMLImageElement || e instanceof HTMLCanvasElement;
}
function Dh(e) {
  (e.controller.abort(), e.promise.then(Wm, () => {}));
}
function Oh(e, t) {
  let n = yh(e);
  if (!n.customProperty) return e;
  if (t) {
    let e = getComputedStyle(t).getPropertyValue(n.customProperty).trim();
    if (e) return Ex.srgbFromValue(e);
  }
  return Ex.srgbFromValue(n.fallback ?? e);
}
function kh(e, t) {
  let n = Oh(e, t),
    r = J.toRgb(J(n));
  return [r.r / 255, r.g / 255, r.b / 255, r.a];
}
function Ah(e, t, n) {
  return Mh(e)
    ? n
      ? t?.aborted
        ? Promise.reject(Error(`Texture load aborted`))
        : jh(HO.acquire(n, e), t)
      : Km(e, t)
    : jh(
        RO.load(e, () => Fh(e)),
        t
      );
}
function jh(e, t) {
  return t
    ? new Promise((n, r) => {
        let i = () => r(Error(`Texture load aborted`));
        if (t.aborted) {
          i();
          return;
        }
        (t.addEventListener(`abort`, i, { once: !0 }),
          e.then(
            (e) => {
              (t.removeEventListener(`abort`, i), n(e));
            },
            (e) => {
              (t.removeEventListener(`abort`, i), r(e));
            }
          ));
      })
    : e;
}
function Mh(e) {
  return Rh(e, qO);
}
function Nh(e) {
  let { value: t } = e;
  if (B(t)) return t;
  if (H(t) && `src` in t) return t.src;
}
function Ph(e) {
  let t = new Set();
  for (let n of Object.values(e)) n.type === `file` && Mh(n.value) && t.add(n.value);
  return t;
}
function Fh(e) {
  return new Promise((t, n) => {
    let r = new Image();
    ((r.crossOrigin = `anonymous`),
      (r.onload = () => t(Lh(r) ?? r)),
      (r.onerror = (t) => {
        let r =
          t instanceof ErrorEvent && t.message
            ? `Failed to load texture from "${e}": ${t.message}`
            : `Failed to load texture from "${e}"`;
        n(Error(r));
      }),
      (r.src = e));
  });
}
function Ih(e) {
  if (e instanceof HTMLImageElement) return e.src || void 0;
  if (e instanceof HTMLCanvasElement) return e.dataset.src || void 0;
}
function Lh(e) {
  if (!zh(e.src)) return;
  let t = e.naturalWidth,
    n = e.naturalHeight;
  if (t <= 0 || n <= 0) return;
  let r = YO / Math.max(t, n),
    i = Math.max(1, Math.round(t * r)),
    a = Math.max(1, Math.round(n * r)),
    o = document.createElement(`canvas`);
  ((o.width = i), (o.height = a));
  let s = o.getContext(`2d`);
  if (s) return (s.drawImage(e, 0, 0, i, a), (o.dataset.src = e.src), o);
}
function Rh(e, t) {
  try {
    let n = new URL(e, `https://placeholder`).pathname.toLowerCase();
    return t.some((e) => n.endsWith(e));
  } catch {
    let n = e.toLowerCase();
    return t.some((e) => n.includes(e));
  }
}
function zh(e) {
  return Rh(e, [JO]);
}
async function Bh(e, t, n, r) {
  switch (e.type) {
    case `number`:
    case `enum`:
      return { type: `float`, value: e.value };
    case `boolean`:
      return { type: `boolean`, value: e.value };
    case `color`:
      return { type: `vec4`, value: kh(e.value, t) };
    case `responsiveimage`:
    case `file`: {
      let t = Nh(e);
      return t ? { type: `sampler2D`, value: await Ah(t, n, r) } : void 0;
    }
    case `array`:
      return { type: `vec4[]`, value: e.value.map((e) => kh(e, t)) };
    default:
      W(e);
  }
}
async function Vh(e, t, n, r) {
  let i = {},
    a = n ? oh(n) : void 0,
    o = t?.current ?? null;
  try {
    for (let [s, c] of Object.entries(e)) {
      let e = await Bh(c, o, r, t);
      if (
        e &&
        ((i[s] = e),
        c.type === `array` && (i[sh(s)] = { type: `int`, value: c.value.length }),
        n && a && s === a && e.type === `sampler2D`)
      ) {
        let t = xh(e.value, () => Ih(e.value));
        t && (i[ch(n)] = { type: `sampler2D`, value: t });
      }
    }
  } catch (e) {
    throw (t || Gm(i), e);
  }
  return i;
}
function Hh(e) {
  return typeof e == `number` ? e : e === `performance` ? 0.75 : e === `consistent` ? 0 : 1;
}
function Uh(e, t, n) {
  let r = e * WO;
  return { currentTime: r, elapsedTime: r - t, deltaTime: n === t ? 1 / 60 : r - n };
}
function Wh() {
  return w(nk);
}
function Gh(e) {
  let t = r(e);
  return (Dt(t.current, e) || (t.current = e), t.current);
}
function Kh(e, t, n, r, i) {
  let [a, o] = d({}),
    [s, l] = d(e === void 0),
    u = Gh(e);
  return (
    c(() => () => HO.releaseAll(t), [t]),
    c(() => {
      if (!u) {
        (HO.releaseAll(t),
          m(() => {
            (o({}), l(!0));
          }));
        return;
      }
      let e = new AbortController();
      return (
        Vh(u, t, n, e.signal)
          .then((n) => {
            e.signal.aborted ||
              (HO.keepOnly(t, Ph(u)),
              m(() => {
                (o(n), l(!0));
              }),
              r?.());
          })
          .catch(() => {
            e.signal.aborted || (HO.releaseAll(t), i?.());
          }),
        () => e.abort()
      );
    }, [u, t, n, r, i]),
    { resolvedUniforms: a, haveUniformsResolved: s }
  );
}
function qh(e, t) {
  (c(() => {
    let n = e.current;
    if (!n) return;
    let r = new ResizeObserver(t);
    return (
      r.observe(n),
      () => {
        r.disconnect();
      }
    );
  }, [e, t]),
    Jh(t));
}
function Jh(e) {
  c(() => {
    let t = matchMedia(`(resolution: ${f.devicePixelRatio}dppx)`),
      n = () => {
        (e(),
          t.removeEventListener(`change`, n),
          (t = matchMedia(`(resolution: ${f.devicePixelRatio}dppx)`)),
          t.addEventListener(`change`, n));
      };
    return (
      t.addEventListener(`change`, n),
      () => {
        t.removeEventListener(`change`, n);
      }
    );
  }, [e]);
}
function Yh(e, t, n, i, a, o, s, c) {
  let l = ie() === !0 || Y.current() === Y.export,
    u = s || l,
    f,
    p,
    h,
    g;
  if (e !== null) {
    let r = e !== tk.noSlot;
    ((f = !r), (p = (o ?? !0) && t && !n && !l && !c), (h = r && !p), (g = `instant`));
  } else ((f = a === `fallback` || !i), (p = (o ?? !0) && !l && !c), (h = !p), (g = a));
  let [_, v] = d(!1),
    y = C(() => {
      m(() => v(!0));
    }, []);
  (M(() => {
    _ && t && m(() => v(!1));
  }, [_, t]),
    _ && (f = !0));
  let [b, x] = d(!1),
    S = C(() => {
      m(() => x(!0));
    }, []),
    w = C(() => {
      m(() => x(!1));
    }, []),
    T = r(t);
  return (
    M(() => {
      let e = !T.current && t;
      ((T.current = t), e && b && w());
    }, [b, t, w]),
    b && (f = !0),
    a !== `fallback` && s && !_ && !b && i && e !== tk.noSlot && (f = !1),
    {
      isFallbackOnly: f,
      effectiveAnimated: p,
      effectiveSingleFrame: h,
      effectiveMode: g,
      shouldSkipFallbackOverlay: u,
      onContextLost: y,
      onUniformResolutionSucceeded: w,
      onUniformResolutionFailed: S,
    }
  );
}
function Xh(e = !0) {
  let [t, n] = d(!e);
  return (
    Cb(() => {
      if (!e) {
        m(() => n(!0));
        return;
      }
      m(() => n(!1));
      let t = f.setTimeout(() => {
        m(() => n(!0));
      }, rk);
      return () => {
        clearTimeout(t);
      };
    }, [e]),
    t
  );
}
function Zh(e, t) {
  for (let n of Object.values(e)) n.type === `sampler2D` && Um(n.value) && t(n.value);
}
function Qh(e, t, n) {
  let i = r(!1);
  M(() => {
    let r = t && !i.current;
    i.current = t;
    let a = !1;
    (Zh(e, (e) => {
      if (t) {
        (r && (e.currentTime = 0), e.play().catch(() => {}));
        return;
      }
      (e.pause(),
        e.currentTime !== 0 &&
          (e.addEventListener(`seeked`, () => n(), { once: !0 }), (e.currentTime = 0), (a = !0)));
    }),
      a && n());
  }, [e, t, n]);
}
function $h({
  vertexShader: e = $O,
  fragmentShader: t = ek,
  animated: n = !0,
  resolutionScale: i,
  uniforms: a,
  onError: o,
  onReady: s,
  onContextLost: l,
  onUniformResolutionSucceeded: u,
  onUniformResolutionFailed: p,
  singleFrame: h = !1,
  heightmapSource: g,
  mouseDataRef: v,
  buffers: y,
}) {
  let b = r(null),
    x = r(null),
    S = r(0),
    w = r(0),
    T = r(0),
    E = r(null),
    [D, O] = d(!1),
    k = r(s);
  M(() => {
    k.current = s;
  }, [s]);
  let A = r(l);
  M(() => {
    A.current = l;
  }, [l]);
  let { resolvedUniforms: j, haveUniformsResolved: N } = Kh(a, b, g, u, p),
    ee = r(j),
    P = r(n);
  M(() => {
    P.current = n;
  }, [n]);
  let F = r(h);
  M(() => {
    F.current = h;
  }, [h]);
  let I = r(!1),
    te = C(() => {
      I.current ||
        !N ||
        ((I.current = !0),
        k.current?.(),
        (E.current = requestAnimationFrame(() => {
          ((E.current = null), performance.mark?.(`shader_rendered`));
        })));
    }, [N]),
    ne = r({ width: 0, height: 0, dpr: 0 }),
    re = r({ width: 0, height: 0, dpr: 0 }),
    L = C(() => {
      let e = b.current;
      e && (ne.current = { width: e.offsetWidth, height: e.offsetHeight, dpr: f.devicePixelRatio });
    }, []),
    ie = C(() => {
      let e = x.current;
      if (!e) return;
      let t = ne.current,
        n = re.current;
      (t.width === n.width && t.height === n.height && t.dpr === n.dpr) ||
        (e.resize(), (re.current = { ...t }));
    }, []),
    ae = C(
      (e) => {
        let t = x.current;
        if (!t) return;
        if (F.current) {
          if (!N) return;
          (ie(), t.render(0, 0, ee.current, v?.current ?? KO), te());
          return;
        }
        if (!N) {
          S.current = requestAnimationFrame(ae);
          return;
        }
        (I.current || ((w.current = e * WO), (T.current = w.current)), ie());
        let { currentTime: n, elapsedTime: r, deltaTime: i } = Uh(e, w.current, T.current);
        ((T.current = n),
          t.render(r, i, ee.current, v?.current ?? KO),
          te(),
          !F.current && P.current && (S.current = requestAnimationFrame(ae)));
      },
      [N, te, v, ie]
    ),
    oe = C(() => {
      let e = x.current;
      !e || !N || (ie(), e.render(0, 0, ee.current, v?.current ?? KO), te());
    }, [N, v, te, ie]);
  (M(() => {
    ((ee.current = j), F.current && x.current && oe());
  }, [j, oe]),
    Qh(j, n && !h && N && D, oe),
    c(() => {
      let n = b.current;
      if (!(!n || !N)) {
        I.current = !1;
        try {
          let r = new SO(n, e, t, Hh(i), A.current, y);
          ((x.current = r),
            (re.current = { width: 0, height: 0, dpr: 0 }),
            L(),
            ie(),
            (w.current = performance.now() * WO),
            (T.current = w.current),
            F.current ? oe() : (S.current = requestAnimationFrame(ae)),
            m(() => O(!0)));
        } catch (e) {
          (m(() => O(!1)), o && e instanceof Error && o(e));
        }
        return () => {
          (cancelAnimationFrame(S.current),
            E.current !== null && cancelAnimationFrame(E.current),
            x.current?.dispose(),
            (x.current = null));
        };
      }
    }, [e, t, i, ae, oe, o, y, N, L, ie]));
  let se = r(n),
    ce = r(h);
  return (
    c(() => {
      let e = n && !se.current,
        t = !h && ce.current;
      ((e || t) &&
        x.current &&
        ((w.current = performance.now() * WO),
        (T.current = w.current),
        (S.current = requestAnimationFrame(ae))),
        (se.current = n),
        (ce.current = h));
    }, [n, h, ae]),
    qh(
      b,
      C(() => {
        let e = x.current;
        if (!e || !N) return;
        if ((L(), F.current)) {
          oe();
          return;
        }
        ie();
        let {
          currentTime: t,
          elapsedTime: n,
          deltaTime: r,
        } = Uh(performance.now(), w.current, T.current);
        ((T.current = t), e.render(n, r, ee.current, v?.current ?? KO));
      }, [N, v, oe, L, ie])
    ),
    _(`canvas`, { ref: b, style: ik, draggable: !1 })
  );
}
function eg() {
  ((sk = Ke(0)), (ck = Ke(0)));
  let e = 0,
    t = 0;
  function n() {
    !sk || !ck || (sk.set(e), ck.set(t));
  }
  f !== void 0 &&
    (f.addEventListener(
      `pointermove`,
      ng((r) => {
        ((e = r.clientX), (t = r.clientY), Oe.update(n));
      })
    ),
    f.addEventListener(`dragover`, (r) => {
      ((e = r.clientX), (t = r.clientY), Oe.update(n));
    }));
}
function tg(e = !0) {
  return (e && !sk && eg(), { x: sk, y: ck });
}
function ng(e) {
  return (t) => {
    t.pointerType === `mouse` && e(t);
  };
}
function rg(e) {
  let t = e ?? lk;
  return t.duration === void 0 ? t : { ...t, duration: t.duration * 1e3 };
}
function ig(e, t, n) {
  return !e || e.width <= 0 || e.height <= 0
    ? [GO, GO]
    : [(t - e.left) / e.width, 1 - (n - e.top) / e.height];
}
function ag(e, t) {
  let n = r(KO),
    i = t?.enabled ?? !1,
    a = rg(t?.springOptions),
    o = r(null),
    s = C(() => {
      let t = e.current;
      t && (o.current = t.getBoundingClientRect());
    }, [e]),
    { x: l, y: u } = tg(i),
    d = F(0),
    p = F(0),
    m = l ?? d,
    h = u ?? p,
    g = se(m, (e) => ig(o.current, e, h.get())[0]),
    _ = se(h, (e) => ig(o.current, m.get(), e)[1]),
    v = F(0),
    y = F(0),
    b = L(g, a),
    x = L(_, a),
    S = L(v, a),
    w = L(y, a),
    T = ze(b),
    E = ze(x);
  return (
    c(() => {
      if (!i) return;
      let t = e.current;
      if (!t) return;
      s();
      let r = !1;
      f.addEventListener(`scroll`, s, { passive: !0, capture: !0 });
      let a = ue(s),
        o = ue(t, s),
        c = De(
          t,
          () => (
            s(),
            r || ((r = !0), b.jump(g.get()), x.jump(_.get())),
            Oe.update(() => y.set(1)),
            () => Oe.update(() => y.set(0))
          )
        ),
        l = ne(t, () => (Oe.update(() => v.set(1)), () => Oe.update(() => v.set(0))));
      return () => {
        (f.removeEventListener(`scroll`, s, { capture: !0 }), a(), o(), c(), l(), (n.current = KO));
      };
    }, [i, e, g, _, v, y, b, x, s]),
    og(
      i,
      C(() => {
        n.current = {
          position: [b.get(), x.get(), T.get(), E.get()],
          pointerDown: S.get(),
          hover: w.get(),
        };
      }, [b, x, S, w, T, E])
    ),
    n
  );
}
function og(e, t) {
  c(() => {
    if (!e) return;
    let n = 0,
      r = performance.now();
    function i(e) {
      (t(e, e - r), (r = e), (n = requestAnimationFrame(i)));
    }
    return ((n = requestAnimationFrame(i)), () => cancelAnimationFrame(n));
  }, [e, t]);
}
function sg(e, t, n) {
  let r = Wh(),
    [i, a] = d(tk.noSlot);
  return (
    c(() => {
      if (!r || !e) return;
      (r.register(e, t, n), m(() => a(r.getSlotStatus(e))));
      let i = r.subscribe(e, () => {
        m(() => a(r.getSlotStatus(e)));
      });
      return () => {
        i();
      };
    }, [r, e, t, n]),
    c(() => {
      if (!(!r || !e))
        return () => {
          r.deregister(e);
        };
    }, [r, e]),
    r ? i : null
  );
}
function cg(e, t, n) {
  let r = [],
    i = wl(e, t, (e) => r.unshift(e, e));
  if (n) {
    let e = i[i.length - 1];
    if (!V(e)) return pk;
    (i.push(e + 1), r.push(-1));
  }
  let a = i[0];
  return V(a)
    ? a <= 1
      ? { inputRange: i, outputRange: r }
      : { inputRange: [0, Math.max(a - 1, 0), ...i], outputRange: [-1, -1, ...r] }
    : pk;
}
function lg(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function ug(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${Sk[e]}` : `${Sk[e]} ${n}`;
}
function dg() {
  return f === void 0 ? (wk ?? {}) : wk || ((wk = fg()), wk);
}
function fg() {
  let e = f.location,
    t = f?.bootstrap?.services;
  if (t) return t;
  let n;
  try {
    if (((n = f.top.location.origin), (t = f.top?.bootstrap?.services), t)) return t;
  } catch {}
  if (n && n !== e.origin) throw Error(`Unexpectedly embedded by ${n} (expected ${e.origin})`);
  if (e.origin.endsWith(`framer.com`) || e.origin.endsWith(`framer.dev`))
    throw Error(`ServiceMap data was not provided in document`);
  try {
    let n =
      new URLSearchParams(e.search).get(`services`) ||
      new URLSearchParams(e.hash.substring(1)).get(`services`);
    n && (t = JSON.parse(n));
  } catch {}
  if (t && typeof t == `object` && t.api) return t;
  throw Error(`ServiceMap requested but not available`);
}
function pg(e) {
  return e.key + e.extension;
}
function mg(e) {
  return `${dg().userContent}/assets/${e}`;
}
function hg(e) {
  return mg(pg(e));
}
function gg(e, t) {
  return t ? `${e} ${Tk}` : e;
}
function _g(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return gg(e.name, e.isVariable);
  }
}
function vg(e) {
  return !!(e && Array.isArray(e));
}
function yg(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    xg(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function bg(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function xg(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`name` in e && typeof e.name != `string`) ||
    !(`minValue` in e) ||
    typeof e.minValue != `number` ||
    !(`maxValue` in e) ||
    typeof e.maxValue != `number` ||
    !(`defaultValue` in e) ||
    typeof e.defaultValue != `number`
  );
}
function Sg(e) {
  return Ok[wg(e)];
}
function Cg(e, t) {
  let n = e?.find((e) => e.tag === `wght`)?.defaultValue;
  return n !== void 0 && n >= 1 && n <= 1e3 ? n : (t ?? Sg(`variable`) ?? 500);
}
function wg(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function Tg(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function Eg(e, t) {
  return { ...Dg(e, t), ...Og(e, t) };
}
function Dg(e, t) {
  if (t.length === 0)
    return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: n, style: r } = e,
    i = new Map(),
    a = new Map();
  for (let r of t)
    r.isVariable === e.isVariable &&
      (i.set(`${r.weight}-${r.style}`, r),
      !(r.weight <= n) && (a.has(r.style) || a.set(r.style, r)));
  let o = a.get(r),
    s = a.get(`italic`),
    c = e.weight;
  c <= 300
    ? ((o = i.get(`400-${r}`) ?? o), (s = i.get(`400-italic`) ?? s))
    : c <= 500
      ? ((o = i.get(`700-${r}`) ?? o), (s = i.get(`700-italic`) ?? s))
      : ((o = i.get(`900-${r}`) ?? o), (s = i.get(`900-italic`) ?? s));
  let l = i.get(`${n}-italic`);
  return { variantBold: o, variantItalic: l, variantBoldItalic: s };
}
function Og(e, t) {
  if (t.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n, r, i, a;
  for (let o of t) {
    if (!o.isVariable) continue;
    let t = o.weight === e.weight,
      s = o.weight === 400;
    o.style === `normal`
      ? t
        ? (n = o)
        : s
          ? (i = o)
          : (i ||= o)
      : o.style === `italic` && (t ? (r = o) : s ? (a = o) : (a ||= o));
  }
  return { variantVariable: n ?? i, variantVariableItalic: r ?? a };
}
function kg(e) {
  return !!e.variationAxes;
}
function Ag(e) {
  return jg(e) || Mg(e);
}
function jg(e) {
  return e.startsWith(jk);
}
function Mg(e) {
  return e.startsWith(Ak);
}
function Ng(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r) {
      if (r.owner !== t.owner && r.file === t.file)
        return { existingFont: r, index: n, projectDuplicate: !0 };
      if (r && r.selector === t.selector)
        return { existingFont: r, index: n, projectDuplicate: !1 };
    }
  }
}
function Pg(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? Tk : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function Fg({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = yg(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function Ig(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: kg(e), selector: e.selector };
}
function Lg(e) {
  let t = e.fonts.map((e) => Ig(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = Ig(n);
    if (!e) continue;
    let r = Eg(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function Rg(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
function zg(e, t, n) {
  let r = e.get(t);
  r || ((r = new Map()), e.set(t, r));
  let i = r.get(n);
  return (i || ((i = { fonts: [] }), r.set(n, i)), i);
}
function Bg(e, t) {
  return Array.from(e.entries())
    .sort(([e], [t]) => e.localeCompare(t))
    .map(([e, n]) => ({
      family: e,
      variants: Array.from(n.entries())
        .sort(([e], [t]) => e.localeCompare(t))
        .map(([, e]) => ({
          fonts: e.fonts.map((e) => ({
            ...e,
            selected:
              e.font.assetKey && e.font.owner ? t.has(`${e.font.assetKey}:${e.font.owner}`) : !1,
          })),
        })),
    }));
}
async function Vg(e) {
  switch (e) {
    case `google`:
      return (await import("./google-YSYBFRE6.BZ57zP5h.mjs")).default;
    case `fontshare`:
      return (await import("./fontshare-TIA7QUPT.CjCmvCKY.mjs")).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function Hg(e) {
  switch (e) {
    case `google`:
      return (await import("./google-H6SFY4F5.5HW9yzMR.mjs")).default;
    case `fontshare`:
      return (await import("./fontshare-PZLWRK4B.CuFl42Lb.mjs")).default;
    case `framer`:
      return (await import("./framer-font-RD2SUPQH.BV4yRwNx.mjs")).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function Ug(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(Wg);
}
function Wg(e) {
  return Nk.includes(e);
}
function Gg(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = Ug(e)[0];
  return n && t[n];
}
function Kg(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function qg(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
function Jg(e, t, n, r) {
  return `${e}-${t}-${n}-${r}`;
}
function Yg(e, t, n) {
  return `${e}-${t}-${n}`;
}
async function Xg(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = Jg(r, c, s, i);
  if (!Yk.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: B(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), Zk.set(l, { fontFace: u, doc: t }), Zg(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < qk) return Xg(e, t, n + 1);
          throw new Jk(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`
          );
        });
    Yk.set(l, d);
  }
  await Yk.get(l);
}
async function Zg(e, t, n) {
  let r = Yg(e, t, n);
  if (!Xk.has(r)) {
    let i = new Gk.default(e, { style: t, weight: n }).load(null, Kk);
    Xk.set(r, i);
  }
  try {
    await Xk.get(r);
  } catch {
    throw new Jk(
      `Failed to check if font is ready (${Kk}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`
    );
  }
}
function Qg(e) {
  let t = e.style || `normal`,
    { family: n, url: r, weight: i } = e,
    a = Jg(n, t, i, r),
    o = Zk.get(a);
  (o && (o.doc.fonts.delete(o.fontFace), Zk.delete(a)), Yk.delete(a), Xk.delete(Yg(n, t, i)));
}
function $g(e) {
  try {
    if (e === `framer`) return e_($k) ? $k : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import("./google-EGNT223R.4Zga1324.mjs")).default;
          case `fontshare`:
            return (await import("./fontshare-SXU5BGFE.DwUZJPwH.mjs")).default;
          default:
            W(e);
        }
      })();
      return e_(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function e_(e) {
  return H(e) && Object.values(e).every(n_);
}
function t_(e) {
  return H(e) && B(e.tag);
}
function n_(e) {
  return Array.isArray(e) && e.every(t_);
}
function r_(e, t) {
  c(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (f.addEventListener(`keyup`, n), () => f.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function i_(e, t, n, r) {
  let i = f.innerHeight - r,
    a = Math.min(f.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function a_(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new f.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function o_() {
  return document.getElementById(NT) ?? document.getElementById(MT) ?? document.body;
}
function s_(e, t) {
  return V(e) ? e : (t ?? 0);
}
function c_(e) {
  return s_(e?.paddingTop, e?.padding) + s_(e?.paddingBottom, e?.padding);
}
function l_(e) {
  return s_(e?.paddingLeft, e?.padding) + s_(e?.paddingRight, e?.padding);
}
function u_(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - l_(e)}px)`,
      srcSet: eo(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function d_(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in nA)) continue;
    let n = nA[t],
      r = e[t];
    if (!(!V(n) || !V(r)) && n !== r) return !0;
  }
  return !1;
}
function f_(e) {
  let t = oe.get(e.current);
  if (!t) return !1;
  if (d_(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (d_(e.latestValues)) return !0;
  return !1;
}
function p_(e) {
  return b(function ({ lightbox: n, lightboxClassName: i, onClick: a, ...o }, s) {
    let u = w(xe),
      f = w(hO),
      p = !!f,
      h = r(null),
      g = s ?? h,
      v = r(),
      y = t(() => u_(n, o.background), [n, o.background]),
      [b, x] = d(!1),
      [E, D] = d(),
      k = C(() => {
        if (n) {
          if (b) {
            m(() => {
              x(!0);
            });
            return;
          }
          Oe.read(() => {
            if (!g.current) return;
            let e = getComputedStyle(g.current),
              t =
                g.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(g.current, `::after`)
                  : void 0,
              r = g.current.offsetWidth ?? 1,
              i = g.current.offsetHeight ?? 1,
              a = f_(g) || p ? { duration: 0 } : n.transition;
            m(() => {
              (D({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: t?.borderTopWidth,
                borderRight: t?.borderRightWidth,
                borderBottom: t?.borderBottomWidth,
                borderLeft: t?.borderLeftWidth,
                borderStyle: t?.borderStyle,
                borderColor: t?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                x(!0),
                f?.stop());
            });
          });
        }
      }, [n, b, g, f?.stop, p]),
      j = E?.aspectRatio ?? 1,
      M = um(() => {
        if (!n || !y?.src) return;
        let e = v.current?.[y.src];
        if (e) return e;
        let t = i_(j, n.maxWidth, l_(n), c_(n)),
          r = a_(y, { width: t, height: t * j });
        return ((v.current = { [y.src]: r }), r);
      }),
      N = C(
        async (e) => {
          (a?.(e), !(b || !n || !y) && (await M(), k()));
        },
        [a, k, b, y, n, M]
      ),
      ee = C((e) => {
        (e?.stopPropagation(),
          m(() => {
            x(!1);
          }));
      }, []);
    (r_(b, ee),
      c(() => {
        if (!n) return;
        let e;
        function t() {
          e = setTimeout(() => {
            M();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = g.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, M),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, M));
          }
        );
      }, [M, g, n]));
    let P = A(),
      F = E?.transition ?? o.transition ?? u.transition,
      te = E?.borderRadius,
      ne = E?.imageRendering,
      re = E?.filter,
      L = E?.borderTop,
      ie = E?.borderRight,
      ae = E?.borderBottom,
      oe = E?.borderLeft,
      se = E?.borderStyle,
      ce = E?.borderColor,
      le = !!(L || ie || ae || oe || se || ce),
      ue = le
        ? {
            "--border-top-width": L,
            "--border-right-width": ie,
            "--border-bottom-width": ae,
            "--border-left-width": oe,
            "--border-style": se,
            "--border-color": ce,
          }
        : void 0,
      de = { [xT]: o.id },
      fe = s_(n?.paddingTop, n?.padding),
      pe = s_(n?.paddingBottom, n?.padding),
      R = s_(n?.paddingLeft, n?.padding),
      me = s_(n?.paddingRight, n?.padding),
      he = E?.borderRadius ? { ...o.style, borderRadius: E.borderRadius } : o.style,
      ge = b ? (o.layoutDependency ? `${o.layoutDependency}-open` : `open`) : o.layoutDependency,
      _e = p && b ? void 0 : (o.layoutId ?? (n ? P : void 0));
    return T(O, {
      children: [
        _(e, {
          ...o,
          style: he,
          onClick: N,
          layoutId: _e,
          ref: g,
          layoutDependency: ge,
          transition: F,
        }),
        _(Fe, {
          onExitComplete: () => {
            m(() => {
              (D(void 0), f?.start());
            });
          },
          children:
            b &&
            n &&
            y &&
            _(
              l,
              {
                children: S(
                  T(O, {
                    children: [
                      _(I.div, {
                        ...de,
                        className: i,
                        onClick: ee,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: n.zIndex,
                          backgroundColor: n.backdrop ?? `transparent`,
                        },
                        transition: F,
                        initial: rA,
                        animate: iA,
                        exit: rA,
                      }),
                      _(I.div, {
                        ...de,
                        className: i,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${fe}px ${me}px ${pe}px ${R}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: n.zIndex,
                        },
                        children: _(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: j,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: n.maxWidth,
                          },
                          children: _(I.div, {
                            layoutId: _e,
                            transition: F,
                            onClick: k,
                            className: `framer-lightbox-container`,
                            "data-border": le,
                            style: {
                              aspectRatio: j,
                              borderRadius: te,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: ne,
                              filter: re,
                              ...ue,
                            },
                            children: _(lo, { image: y, alt: y.alt, draggable: o.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  o_()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function m_(e) {
  return g.isValidElement(e) ? e.props[`data-framer-order-id`] : void 0;
}
function h_(e, t) {
  let n = new Map(),
    r = [],
    i = new Set(t);
  for (let t of e) {
    let e = m_(t);
    e && i.has(e) ? n.set(e, t) : r.push(t);
  }
  let a = [];
  for (let e of t) {
    let t = n.get(e);
    t && a.push(t);
  }
  return [...a, ...r];
}
function g_(e, t) {
  let n = g.Children.toArray(e);
  return t
    ? n.flatMap((e) =>
        g.isValidElement(e) && e.type === g.Fragment ? g.Children.toArray(e.props.children) : e
      )
    : n;
}
function __(e, t) {
  let n = Array.from({ length: e }, () => []);
  return (
    t.forEach((t, r) => {
      let i = b_(e, r);
      n[i]?.push(t);
    }),
    n
  );
}
function v_(e) {
  return { display: `flex`, flexDirection: `column`, rowGap: e, width: `100%` };
}
function y_(e) {
  return `masonry-stack-${e}`;
}
function b_(e, t) {
  return e <= 0 ? 0 : t % e;
}
function x_(e, t) {
  return lA && !t
    ? Document.parseHTMLUnsafe(e)
    : ((cA ??= new DOMParser()), cA.parseFromString(e, t ?? `text/html`));
}
function S_(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function C_(e, t, n, r) {
  return e.replace(uA, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = xu(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!Em(f) || !Em(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = It(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = Cu(u);
    if (!_ || B(_)) return e;
    Bu(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(LT, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = ci(m, v)), i + o + `"${S_(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function w_(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function T_(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function E_(e, t, n) {
  let i = r([]);
  w_(i.current, e) ||
    ((i.current = e),
    tA.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || Y.current() !== Y.canvas || (e > 0 && ms(n.current));
    }));
}
function D_() {
  return { current: null };
}
async function O_(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function k_(e) {
  return e in mA;
}
function A_(e, t) {
  let n = {};
  for (let r in e) {
    if (!k_(r)) continue;
    let i = e[r],
      a = mA[r];
    et(i) || et(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function j_(e, t = `character`, n, r, i) {
  if (r) {
    let t = D_();
    return (n.add(t), _(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return T(
          l,
          {
            children: [
              _(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(hA)?.map((e, t) => {
                  let r = D_();
                  return (n.add(r), _(`span`, { ref: r, style: i, children: e }, e + t));
                }),
              }),
              a ? null : ` `,
            ],
          },
          e + t + a
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = D_();
        return (
          n.add(o),
          T(
            l,
            { children: [_(`span`, { ref: o, style: i, children: e }), a ? null : ` `] },
            e + t + a
          )
        );
      });
    }
    default:
      return e;
  }
}
function M_(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      W(t);
  }
}
function N_(e) {
  let t = [];
  return (
    V(e.x) && t.push(`translateX(${e.x}px)`),
    V(e.y) && t.push(`translateY(${e.y}px)`),
    V(e.scale) && t.push(`scale(${e.scale})`),
    V(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    V(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    V(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    V(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    V(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function P_(e, t, n, r) {
  if (!n?.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : N_(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : N_(n.effect),
              };
      }
    default:
      W(i);
  }
}
function F_(e, n, i) {
  let a = Wa(() => new Set()),
    o = qa(),
    s = i || !o,
    l = ie(),
    u = r({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  u.current.effect = e;
  let d = e?.trigger ?? `onMount`,
    f = e?.target,
    p = e?.threshold;
  c(() => {
    if (!s || i) return;
    u.current.hasMounted = !0;
    function e() {
      let { effect: e } = u.current;
      if (
        !s ||
        !e ||
        (e?.repeat !== !0 && u.current.hasAnimatedOnce) ||
        (e?.type === `appear` && u.current.isAnimating)
      )
        return;
      Object.assign(u.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: r, tokenization: i } = e,
            o = { current: void 0 };
          return (
            L_(
              i,
              e.effect,
              a,
              t,
              n,
              r,
              l,
              () => {
                Object.assign(u.current, { isAnimating: !1 });
              },
              o
            ),
            () => o.current?.()
          );
        }
        default:
          W(t);
      }
    }
    switch (d) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let t = n?.current;
        return t ? be(t, e, { amount: p ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = f?.ref?.current;
        return t
          ? be(t, e, {
              amount: p ?? 0,
              root: document,
              margin: f?.offset ? `${f.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        W(d);
    }
  }, [s, a, i, n, f, p, d]);
  let m = !!e,
    h = e ? M_(e) : void 0;
  return t(
    () => ({
      getTokenizer: () => {
        if ((a.clear(), !m)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: n } = u.current,
          r = P_(s, i || I_(e, t, n), u.current.effect, l);
        return {
          text: (e) => j_(e, h, a, l, r),
          props: (e) => {
            if (n?.tokenization !== `element`) return;
            let t = D_();
            return (a.add(t), { ref: t, style: { ...e, ...r } });
          },
        };
      },
      play: () => {
        let { effect: e } = u.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            L_(h, e.effect, a, t, n, !1, l);
            break;
          }
          default:
            W(t);
        }
      },
    }),
    [s, m, a, i, h]
  );
}
function I_(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function L_(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = A_(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await R_(n, u);
      if (
        e === null ||
        (Ee(e, l, { ...r, restDelta: 0.001, delay: ce(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Ee(e, n, { ...r, restDelta: 0.001, delay: ce(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await O_(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (Oe.read(() => {
          ((e = z_(n)),
            e.length !== 0 &&
              Oe.update(() => {
                let t = e.map((e, t) =>
                  Ee(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Ee(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      W(e);
  }
}
async function R_(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await O_(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function z_(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function B_(e) {
  let t = {};
  for (let n in e) (R(n) || Qx(n)) && (t[n] = e[n]);
  return t;
}
function V_(e) {
  return e.type === l;
}
function H_(e) {
  return e.type === `br`;
}
function U_(e, t, n, r, i = {}, a, o = V_(e) ? -1 : 0) {
  let s = j.toArray(e.props.children);
  et(n) || (s = s.slice(0, 1));
  let c = !0;
  s = s.map((e) => {
    if (((!y(e) || !H_(e)) && (c = !1), y(e))) return U_(e, t, n, r, i, a, o + 1);
    let s = et(n) ? e : n;
    return B(s) && a ? a.text(s) : s;
  });
  let { "data-preset-tag": l, ...d } = e.props;
  if (B(e.type) || Se(e.type)) {
    let n = re(e.type) || e.type,
      u = l || n,
      f = B(u) ? t?.[u] : void 0;
    ((d.className = $c(`framer-text`, d.className, f)),
      a && o === 0 && !c && Object.assign(d, a.props(d.style)));
    let p = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      m = t?.anchor;
    if (p && m) {
      let e = W_(s, i);
      d.id = e;
      let t = $c(`framer-text`, m),
        n = _(`a`, { href: `#${e}`, className: t, children: s });
      ((d.style = { ...d.style, scrollMarginTop: r }), (s = [n]));
    }
    u === `ol` &&
      (d.style = { ...d.style, [NS]: K_(d.start ?? 1, j.count(d.children), d.style?.[MS] ?? ``) });
  }
  return u(e, d, ...s);
}
function W_(e, t) {
  let n = Xr(e.map(G_).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function G_(e) {
  return B(e) || V(e)
    ? e.toString()
    : y(e)
      ? G_(e.props.children)
      : Array.isArray(e)
        ? e.map(G_).join(``)
        : ``;
}
function K_(e, t, n) {
  return qo(Number(e) || 1, t, n);
}
function q_(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = $i(n.x, n.y),
    i = dS($i(0.5, 0.5), r),
    a = X.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: $i.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  U(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !$i.isEqual(e, s) && !$i.isEqual(e, c));
  U(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = dS.intersection(i, dS(s, c)),
    f = dS.intersection(i, dS(l, u));
  return (U(d && f, `linearGradientLine: Must have a start and end point.`), dS(d, f));
}
function J_(e, t) {
  let n = q_(e.angle),
    r = Cs(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = dS.pointAtPercentDistance(n, i),
    s = dS.pointAtPercentDistance(n, a),
    c = Je([i, a], [0, 1]);
  return {
    id: `id${t}g${gC.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: uC.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function Y_(e, t) {
  return {
    id: `id${t}g${vC.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Cs(e).map((t) => ({
      color: t.value,
      alpha: uC.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function X_(e) {
  if (!B(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return V(parseFloat(t));
}
function Z_(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return V(n) ? n : 50;
}
function Q_(e) {
  return X_(e) ? Z_(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function $_(e) {
  return X_(e) ? Z_(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function ev(e, t, n, r) {
  if (((e = px.get(e, `#09F`)), !uS.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * Q_(e.positionX) + f),
        (d = (t.height - l) * $_(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * $_(e.positionY)))
        : ((n = g), (u = (1 - g) * Q_(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function tv(e) {
  return e.startsWith(`data:${CA}`);
}
function nv(e, t) {
  if (/^\w+:/u.test(e) && !tv(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = Y.current() === Y.export;
  return rS.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function rv(e, t) {
  return (c(() => kA.subscribeToTemplate(e), [e]), kA.template(e, t));
}
function iv(e) {
  try {
    let t = x_(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function av(e, t) {
  sv(e, ov(t));
}
function ov(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function sv(e, t) {
  (cv(e, t),
    Array.from(e.children).forEach((e) => {
      sv(e, t);
    }));
}
function cv(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function lv(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (AA[t[2]] || 1));
}
function uv(e) {
  let t = lv(e.getAttribute(`width`)),
    n = lv(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function dv(e) {
  return e.indexOf(`image`) >= 0;
}
function fv(e) {
  return e.indexOf(`var(--`) >= 0;
}
function pv(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function mv(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? by,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = kA.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && Oo(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    G(s) &&
    G(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l?.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function hv(e) {
  return e > FA ? `lazy` : void 0;
}
function gv(e, t, n) {
  let r = yv(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function _v(e) {
  return e ? (e.fonts ?? Oi()) : Oi();
}
function vv(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : yv(e);
}
function yv(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    bv(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(xv) })
      : t.fonts.push(xv(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function bv(e) {
  return IA in e;
}
function xv(e) {
  let t = Sv(e) || Cv(e) ? e : wv(e);
  return Cv(t) ? t : Tv(t);
}
function Sv(e) {
  return `source` in e;
}
function Cv(e) {
  return `cssFamilyName` in e;
}
function wv(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function Tv(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${Tk}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function Ev(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function Dv(e, t) {
  let n = Zy({ batch: !0, priority: t.priority, signal: t.signal });
  return n ? n.then(e) : e();
}
async function Ov(e, t) {
  let n = [],
    r = !0;
  for (let i of e) {
    if (!r) {
      let e = Zy({ batch: !0, priority: t.priority, signal: t.signal });
      e && (await e);
    }
    r = !1;
    try {
      let e = i();
      n.push(
        Promise.resolve(e).then(
          (e) => ({ status: `fulfilled`, value: e }),
          (e) => ({ status: `rejected`, reason: e })
        )
      );
    } catch (e) {
      n.push(Promise.resolve({ status: `rejected`, reason: e }));
    }
  }
  return Promise.all(n);
}
function kv(e) {
  return e.loader;
}
function Av(e, t, n) {
  let r = kv(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  J,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Y,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  X,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  Z,
  qE,
  JE,
  YE,
  XE,
  ZE,
  Q,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  pD,
  mD,
  hD,
  gD,
  _D,
  vD,
  yD,
  bD,
  xD,
  SD,
  CD,
  wD,
  TD,
  ED,
  DD,
  OD,
  kD,
  AD,
  jD,
  MD,
  ND,
  PD,
  FD,
  ID,
  LD,
  RD,
  zD,
  BD,
  VD,
  HD,
  UD,
  WD,
  GD,
  KD,
  qD,
  JD,
  YD,
  XD,
  ZD,
  QD,
  $D,
  eO,
  tO,
  nO,
  rO,
  iO,
  aO,
  oO,
  sO,
  cO,
  lO,
  uO,
  dO,
  fO,
  pO,
  mO,
  hO,
  gO,
  _O,
  vO,
  yO,
  $,
  bO,
  xO,
  SO,
  CO,
  wO,
  TO,
  EO,
  DO,
  OO,
  kO,
  AO,
  jO,
  MO,
  NO,
  PO,
  FO,
  IO,
  LO,
  RO,
  zO,
  BO,
  VO,
  HO,
  UO,
  WO,
  GO,
  KO,
  qO,
  JO,
  YO,
  XO,
  ZO,
  QO,
  $O,
  ek,
  tk,
  nk,
  rk,
  ik,
  ak,
  ok,
  sk,
  ck,
  lk,
  uk,
  dk,
  fk,
  pk,
  mk,
  hk,
  gk,
  _k,
  vk,
  yk,
  bk,
  xk,
  Sk,
  Ck,
  wk,
  Tk,
  Ek,
  Dk,
  Ok,
  kk,
  Ak,
  jk,
  Mk,
  Nk,
  Pk,
  Fk,
  Ik,
  Lk,
  Rk,
  zk,
  Bk,
  Vk,
  Hk,
  Uk,
  Wk,
  Gk,
  Kk,
  qk,
  Jk,
  Yk,
  Xk,
  Zk,
  Qk,
  $k,
  eA,
  tA,
  nA,
  rA,
  iA,
  aA,
  oA,
  sA,
  cA,
  lA,
  uA,
  dA,
  fA,
  pA,
  mA,
  hA,
  gA,
  _A,
  vA,
  yA,
  bA,
  xA,
  SA,
  CA,
  wA,
  TA,
  EA,
  DA,
  OA,
  kA,
  AA,
  jA,
  MA,
  NA,
  PA,
  FA,
  IA,
  LA = e(() => {
    (o(),
      Ge(),
      Ae(),
      n(),
      D(),
      h(),
      (jv = ve({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`) throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
                l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (Mv = ve({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      (Nv = ve({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = Mv();
        },
      })),
      (Pv = ve({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = Nv(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (Fv = ve({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function n(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t), e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` || document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function r(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function i(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function a(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function o(t, n) {
              function r() {
                var e = i;
                a(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), a(t));
            }
            function s(e, t, n) {
              ((t ||= {}),
                (n ||= f),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var c = null,
              l = null,
              u = null,
              d = null;
            function p(e) {
              return (
                l === null &&
                  (m(e) && /Apple/.test(f.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        f.navigator.userAgent
                      )),
                      (l = !!e && 603 > parseInt(e[1], 10)))
                    : (l = !1)),
                l
              );
            }
            function m(e) {
              return (d === null && (d = !!e.document.fonts), d);
            }
            function h(e, t) {
              var n = e.style,
                r = e.weight;
              if (u === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                u = i.style.font !== ``;
              }
              return [n, r, u ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((s.prototype.load = function (e, t) {
              var a = this,
                s = e || `BESbswy`,
                l = 0,
                u = t || 3e3,
                d = new Date().getTime();
              return new Promise(function (e, t) {
                if (m(a.context) && !p(a.context)) {
                  var g = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - d >= u
                          ? t(Error(`` + u + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(h(a, `"` + a.family + `"`), s)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    _ = new Promise(function (e, t) {
                      l = setTimeout(function () {
                        t(Error(`` + u + `ms timeout exceeded`));
                      }, u);
                    });
                  Promise.race([_, g]).then(function () {
                    (clearTimeout(l), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (v != -1 && y != -1) || (v != -1 && b != -1) || (y != -1 && b != -1)) &&
                        ((t = v != y && v != b && y != b) ||
                          (c === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              f.navigator.userAgent
                            )),
                            (c =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            c &&
                            ((v == x && y == x && b == x) ||
                              (v == S && y == S && b == S) ||
                              (v == C && y == C && b == C)))),
                        (t = !t)),
                        t &&
                          (w.parentNode !== null && w.parentNode.removeChild(w),
                          clearTimeout(l),
                          e(a)));
                    }
                    function p() {
                      if (new Date().getTime() - d >= u)
                        (w.parentNode !== null && w.parentNode.removeChild(w),
                          t(Error(`` + u + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((v = m.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          (b = _.g.offsetWidth),
                          n()),
                          (l = setTimeout(p, 50)));
                      }
                    }
                    var m = new r(s),
                      g = new r(s),
                      _ = new r(s),
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = -1,
                      w = document.createElement(`div`);
                    ((w.dir = `ltr`),
                      i(m, h(a, `sans-serif`)),
                      i(g, h(a, `serif`)),
                      i(_, h(a, `monospace`)),
                      w.appendChild(m.g),
                      w.appendChild(g.g),
                      w.appendChild(_.g),
                      a.context.document.body.appendChild(w),
                      (x = m.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      (C = _.g.offsetWidth),
                      p(),
                      o(m, function (e) {
                        ((v = e), n());
                      }),
                      i(m, h(a, `"` + a.family + `",sans-serif`)),
                      o(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, h(a, `"` + a.family + `",serif`)),
                      o(_, function (e) {
                        ((b = e), n());
                      }),
                      i(_, h(a, `"` + a.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = s)
                : ((f.FontFaceObserver = s),
                  (f.FontFaceObserver.prototype.load = s.prototype.load)));
          })();
        },
      })),
      (Iv = () => {}),
      (Lv = f !== void 0),
      (Rv =
        Lv &&
        (s.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(s.userAgent))),
      (zv = Lv && typeof f.requestIdleCallback == `function`),
      (Bv = zv ? f.requestIdleCallback : setTimeout),
      (Vv = () => Iv),
      (Hv = () => !0),
      (Uv = () => !1),
      (Wv = new Map()),
      (Gv = new Map()),
      (Kv = new Set()),
      (qv = `:`),
      (Jv = Lv ? void 0 : new Set()),
      (Yv = `preload`),
      (Xv = Object.keys),
      (Zv = `equals`),
      (Qv = g.createContext({})),
      ($v = g.createContext({})),
      (ey = []),
      (ty = `default`),
      (ny = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (ry = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && dt(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = ny.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === ny.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === ny.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== ny.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && Jv !== void 0 && Jv.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = ny.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = ny.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && Wv.has(this.cacheHash) ? Wv.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!ot(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === ny.Fulfilled) return this.value;
          throw this.promiseState === ny.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (iy = -1),
      (ay = -2),
      (oy = -3),
      (sy = -4),
      (cy = -5),
      (ly = -6),
      (uy = -7),
      (dy = 2 ** 32 - 1),
      (fy = dy - 1),
      (py = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (my = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (hy = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (gy = typeof Uint8Array.fromBase64 == `function`),
      (_y = typeof process == `object` && process.versions?.node !== void 0),
      (vy = gy ? Zt : _y ? $t : tn),
      (yy = gy ? Qt : _y ? en : nn),
      (by = Lv
        ? f
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (xy = 2),
      (Sy = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (Cy = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (Ty = class {
        payload = dn();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return on(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (Ey = Lv ? void 0 : new Ty()),
      (Dy = Cy.CollectionUtilsCache),
      (Oy = new WeakMap()),
      (ky = a(void 0)),
      (Ay = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new ry(async () => {
              try {
                let t = await e();
                return (U(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(lt(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = gn(n),
            i = _n(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (Ey !== void 0) {
              if (ot(e)) return e.then((e) => (Ey.set(Dy, i, e), e));
              Ey.set(Dy, i, e);
            }
            return e;
          }
          if (mn(Dy, i)) {
            let e = hn(Dy, i);
            return (this.cacheMap.set(i, new ry(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = ot(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e]?.(t, n)) : a?.[e]?.(t, n);
          } catch (e) {
            (console.error(lt(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (Ey !== void 0 && Ey.set(Dy, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new ry(async () => {
            try {
              let e = ot(s) ? await s : s;
              return (Ey !== void 0 && Ey.set(Dy, i, e), e);
            } catch (e) {
              console.error(lt(`Failed to call CollectionUtils method.`, e));
              return;
            }
          });
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
        getContentLocaleIdByRecordId(e, t) {
          return this.callUtilsMethod(`getContentLocaleIdByRecordId`, e, t);
        }
      }),
      (jy = /Mac/u),
      (My = /iPhone|iPod|iPad/iu),
      (Ny = /MacIntel/iu),
      (Py = /Edg\//u),
      (Fy = /Chrome/u),
      (Iy = /Google Inc/u),
      (Ly = /Safari/u),
      (Ry = /Apple Computer/u),
      (zy = /Firefox\/\d+\.\d+$/u),
      (By = /Version\/([\d.]+)/u),
      (Vy = /FramerX/u),
      (Hy = /tablet|iPad|Nexus 9/iu),
      (Uy = /mobi/iu),
      (Wy = 1e3 / 60),
      (Gy = 1e3 / 25),
      (Ky = 500),
      (qy = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (Jy = Promise.resolve()),
      (Yy = 100),
      (Xy = (e) => {
        Oe.read(e, !1, !0);
      }),
      (Zy = Un(Xy)),
      (Qy = `framer_variant`),
      ($y = RegExp(`:([a-z]\\w*)`, `gi`)),
      (eb = async () => {}),
      (tb = { contentLocale: null, activeLocale: null, locales: [], setLocale: eb }),
      (nb = (() => {
        let e = g.createContext(tb);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (rb = (() => {
        let e = g.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (ib = !Rv),
      (ab = !1),
      (ob = g.createContext({ global: void 0, routes: {} })),
      (sb = 10),
      (cb = 1e4),
      (lb = (e) => `--view-transition-${e}`),
      (ub = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${lb(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${lb(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${lb(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (db = {
        circle: {
          makeKeyframe: (e, t) => `${lb(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${lb(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${hr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${lb(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: ub,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${mr(e.x)} ${mr(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = fr(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${lb(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${lb(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${lb(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${lb(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${lb(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${lb(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (fb = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (pb = `view-transition-styles`),
      (mb = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (hb = () => {}),
      (_b = () => {
        let e = document.title;
        if (e) {
          if (document.ariaNotify) {
            document.ariaNotify(e, { priority: `high` });
            return;
          }
          (gb ||
            ((gb = document.createElement(`div`)),
            gb.setAttribute(`aria-live`, `assertive`),
            gb.setAttribute(`aria-atomic`, `true`),
            (gb.style.position = `absolute`),
            (gb.style.transform = `scale(0)`),
            document.body.append(gb)),
            setTimeout(() => {
              gb.textContent = e;
            }, 60));
        }
      }),
      (yb =
        Lv &&
        typeof f.navigation?.back == `function` &&
        !(() => {
          if (s === void 0) return !1;
          let e = s.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !On()),
      (bb = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (xb = g.createContext(null)),
      (Sb = (() => {
        let e = a(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (Cb = typeof document < `u` ? M : c),
      (wb = new Set()),
      (Tb = (() => {
        let e = a({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Eb = 46),
      (Db = 47),
      (Ob = (e, t) => e.charCodeAt(t)),
      (kb = (e, t) => e.lastIndexOf(t)),
      (Ab = (e, t, n) => e.slice(t, n)),
      (jb = !1),
      (Mb = `/`),
      (Nb = (e) => e === Db),
      (Pb = new Set([`/404.html`, `/404`, `/404/`])),
      (Fb = `__f_replay`),
      (Ib =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (Lb = (e) => {
        e.target?.closest?.(`#main`) &&
          (gi(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (Rb = !1),
      (tx = [yi]),
      (ex = [yi]),
      ($b = [yi]),
      (Qb = [yi]),
      (Zb = [yi]),
      (Xb = [yi]),
      (Yb = [yi]),
      (Jb = [yi]),
      (qb = [yi]),
      (Kb = [yi]),
      (Gb = [yi]),
      (Wb = [yi]),
      (Ub = [yi]),
      (Hb = [yi]),
      (Vb = [yi]),
      (Bb = [yi]),
      (zb = [yi]),
      (rx = class {
        constructor() {
          (Ue(nx, 5, this),
            Te(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            Te(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            Te(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            Te(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            Te(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            Te(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            Te(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            bi(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            bi(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        }
        markUseLayoutEffectsStart() {
          performance.mark(`framer-hydration-layout-effects-start`);
        }
        markRouterUseLayoutEffectStart() {
          performance.mark(`framer-hydration-router-layout-effect`);
        }
        markUseLayoutEffectsEnd() {
          (performance.mark(`framer-hydration-layout-effects-end`),
            bi(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        }
        markUseEffectsStart() {
          performance.mark(`framer-hydration-effects-start`);
        }
        markUseEffectsRouterStart() {
          performance.mark(`framer-hydration-router-effect`);
        }
        markUseEffectsAreSynchronous() {
          performance.mark(`framer-hydration-effects-sync`);
        }
        markUseEffectsEnd() {
          (performance.mark(`framer-hydration-effects-end`),
            bi(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        }
        markRafStart() {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        }
        markRafEnd() {
          (performance.mark(`framer-hydration-browser-raf-end`),
            bi(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            bi(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            bi(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          bi(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          bi(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (nx = ee(null)),
      ye(nx, 1, `markRenderStart`, tx, rx),
      ye(nx, 1, `markRenderEnd`, ex, rx),
      ye(nx, 1, `markUseInsertionEffectsStart`, $b, rx),
      ye(nx, 1, `markUseInsertionEffectRouterStart`, Qb, rx),
      ye(nx, 1, `markUseInsertionEffectsEnd`, Zb, rx),
      ye(nx, 1, `markUseLayoutEffectsStart`, Xb, rx),
      ye(nx, 1, `markRouterUseLayoutEffectStart`, Yb, rx),
      ye(nx, 1, `markUseLayoutEffectsEnd`, Jb, rx),
      ye(nx, 1, `markUseEffectsStart`, qb, rx),
      ye(nx, 1, `markUseEffectsRouterStart`, Kb, rx),
      ye(nx, 1, `markUseEffectsAreSynchronous`, Gb, rx),
      ye(nx, 1, `markUseEffectsEnd`, Wb, rx),
      ye(nx, 1, `markRafStart`, Ub, rx),
      ye(nx, 1, `markRafEnd`, Hb, rx),
      ye(nx, 1, `markLayoutStylePaintEnd`, Vb, rx),
      ye(nx, 1, `measureMutationEffects`, Bb, rx),
      ye(nx, 1, `measureUnattributedHydrationOverhead`, zb, rx),
      fe(nx, rx),
      (ax = !1),
      (ox = { Start: Ti, End: Ei }),
      (sx = class extends Error {}),
      (cx = class extends v {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof sx)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Di(e, t);
        }
      }),
      (lx = Object.freeze([])),
      (dx = new Set()),
      (fx = class {
        observers = new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (px = (() => {
        function e(e) {
          return (
            qi(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Ji(e) ? e : new gx(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : Ji(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              Ji(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (mx = `onUpdate`),
      (hx = `finishTransaction`),
      (gx = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new fx();
        static interpolationFor(e, t) {
          if (Ji(e)) return Yi(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Ji(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Zi(e.x, t.x), y: Zi(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })(($i ||= {})),
      (_x = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (vx = class e {
        constructor() {
          ((this.hex = `#000000`),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0));
        }
        static fromLinear(e) {
          return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
        }
        static toLinear(e) {
          return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
        }
        static yToL(t) {
          return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
        }
        static lToY(t) {
          return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
        }
        static rgbChannelToHex(t) {
          let n = Math.round(t * 255),
            r = n % 16,
            i = ((n - r) / 16) | 0;
          return e.hexChars.charAt(i) + e.hexChars.charAt(r);
        }
        static hexToRgbChannel(t, n) {
          let r = e.hexChars.indexOf(t.charAt(n)),
            i = e.hexChars.indexOf(t.charAt(n + 1));
          return (r * 16 + i) / 255;
        }
        static distanceFromOriginAngle(e, t, n) {
          let r = t / (Math.sin(n) - e * Math.cos(n));
          return r < 0 ? 1 / 0 : r;
        }
        static distanceFromOrigin(e, t) {
          return Math.abs(t) / Math.sqrt(e ** 2 + 1);
        }
        static min6(e, t, n, r, i, a) {
          return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
        }
        rgbToHex() {
          ((this.hex = `#`),
            (this.hex += e.rgbChannelToHex(this.rgb_r)),
            (this.hex += e.rgbChannelToHex(this.rgb_g)),
            (this.hex += e.rgbChannelToHex(this.rgb_b)));
        }
        hexToRgb() {
          ((this.hex = this.hex.toLowerCase()),
            (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
        }
        xyzToRgb() {
          ((this.rgb_r = e.fromLinear(
            e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
          )),
            (this.rgb_g = e.fromLinear(
              e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
            )),
            (this.rgb_b = e.fromLinear(
              e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
            )));
        }
        rgbToXyz() {
          let t = e.toLinear(this.rgb_r),
            n = e.toLinear(this.rgb_g),
            r = e.toLinear(this.rgb_b);
          ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
            (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
            (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
        }
        xyzToLuv() {
          let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            n = 4 * this.xyz_x,
            r = 9 * this.xyz_y;
          (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
            (this.luv_l = e.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                (this.luv_v = 13 * this.luv_l * (r - e.refV))));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
            return;
          }
          let t = this.luv_u / (13 * this.luv_l) + e.refU,
            n = this.luv_v / (13 * this.luv_l) + e.refV;
          ((this.xyz_y = e.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
            (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let e = Math.atan2(this.luv_v, this.luv_u);
            ((this.lch_h = (e * 180) / Math.PI), this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
          }
        }
        lchToLuv() {
          let e = (this.lch_h / 180) * Math.PI;
          ((this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(e) * this.lch_c),
            (this.luv_v = Math.sin(e) * this.lch_c));
        }
        calculateBoundingLines(t) {
          let n = (t + 16) ** 3 / 1560896,
            r = n > e.epsilon ? n : t / e.kappa,
            i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
            a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
            o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
            s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
            c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
            l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
            u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
            d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
            f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
          ((this.r0s = i / o),
            (this.r0i = (a * t) / o),
            (this.r1s = i / (o + 126452)),
            (this.r1i = ((a - 769860) * t) / (o + 126452)),
            (this.g0s = s / l),
            (this.g0i = (c * t) / l),
            (this.g1s = s / (l + 126452)),
            (this.g1i = ((c - 769860) * t) / (l + 126452)),
            (this.b0s = u / f),
            (this.b0i = (d * t) / f),
            (this.b1s = u / (f + 126452)),
            (this.b1i = ((d - 769860) * t) / (f + 126452)));
        }
        calcMaxChromaHpluv() {
          let t = e.distanceFromOrigin(this.r0s, this.r0i),
            n = e.distanceFromOrigin(this.r1s, this.r1i),
            r = e.distanceFromOrigin(this.g0s, this.g0i),
            i = e.distanceFromOrigin(this.g1s, this.g1i),
            a = e.distanceFromOrigin(this.b0s, this.b0i),
            o = e.distanceFromOrigin(this.b1s, this.b1i);
          return e.min6(t, n, r, i, a, o);
        }
        calcMaxChromaHsluv(t) {
          let n = (t / 360) * Math.PI * 2,
            r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
            i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
            a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
            o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
            s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
            c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
          return e.min6(r, i, a, o, s, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
            let e = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (e / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHsluv(this.lch_h);
            ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
            let e = this.calcMaxChromaHpluv();
            this.lch_c = (e / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHpluv();
            ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hpluvToRgb() {
          (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hsluvToHex() {
          (this.hsluvToRgb(), this.rgbToHex());
        }
        hpluvToHex() {
          (this.hpluvToRgb(), this.rgbToHex());
        }
        rgbToHsluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv());
        }
        rgbToHpluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv());
        }
        hexToHsluv() {
          (this.hexToRgb(), this.rgbToHsluv());
        }
        hexToHpluv() {
          (this.hexToRgb(), this.rgbToHpluv());
        }
      }),
      (vx.hexChars = `0123456789abcdef`),
      (vx.refY = 1),
      (vx.refU = 0.19783000664283),
      (vx.refV = 0.46831999493879),
      (vx.kappa = 903.2962962),
      (vx.epsilon = 0.0088564516),
      (vx.m_r0 = 3.240969941904521),
      (vx.m_r1 = -1.537383177570093),
      (vx.m_r2 = -0.498610760293),
      (vx.m_g0 = -0.96924363628087),
      (vx.m_g1 = 1.87596750150772),
      (vx.m_g2 = 0.041555057407175),
      (vx.m_b0 = 0.055630079696993),
      (vx.m_b1 = -0.20397695888897),
      (vx.m_b2 = 1.056971514242878),
      (yx = new vx()),
      (bx = {
        rgb: RegExp(
          `rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        rgba: RegExp(
          `rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsl: RegExp(
          `hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsla: RegExp(
          `hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsv: RegExp(
          `hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsva: RegExp(
          `hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
      }),
      (xx =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (Sx = (e) => {
        let { r: t, g: n, b: r, a: i } = Ca(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (Cx = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Ta({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (wx = (e) => {
        let { r: t, g: n, b: r, a: i } = Ca(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (Tx = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Ta({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (Ex = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return Ea(this);
        }
        rgb() {
          return Aa(this);
        }
        hsl() {
          return la(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(Oa(t));
            case `srgb`:
              return new e(ka(Oa(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            ka({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = J(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = xa(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!B(t) || !J.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Dx = new Map()),
      (J = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Dx.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (Dx.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = ja(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && va(e) !== !1),
          (e.isColorObject = (e) =>
            H(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => ca(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && Ex.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...ia(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = fa(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = fa(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = ca(e.r, e.g, e.b, !0);
            for (let e of Object.keys(_x)) if (_x[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: ea(i, [0, 1], [t.r, r.r], a),
                g: ea(i, [0, 1], [t.g, r.g], a),
                b: ea(i, [0, 1], [t.b, r.b], a),
                a: ea(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: ea(i, [0, 1], [u, u + f], a),
                s: ea(i, [0, 1], [c.s, l.s], a),
                l: ea(i, [0, 1], [c.l, l.l], a),
                a: ea(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(aa(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => la(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (Ox = (e) => e instanceof He),
      (kx = jv().EventEmitter),
      (Ax = class {
        _emitter = new kx();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (jx = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (Mx = by.requestAnimationFrame || jx),
      (Nx = (e) => Mx(e)),
      (Px = 1 / 60),
      (Fx = class extends Ax {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          Px = e;
        }
        static get TimeStep() {
          return Px;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), Nx(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * Px;
        }
        tick = () => {
          this._started &&
            (Nx(this.tick),
            this.emit(`update`, this._frame, Px),
            this.emit(`render`, this._frame, Px),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (Ix = new Fx()),
      (Lx = { target: La() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (Y = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Lx.target,
        hasRestrictions: () => {
          let e = Lx.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (Rx = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      we({
        borderTopWidth: Rx(`y`),
        borderLeftWidth: Rx(`x`),
        borderRightWidth: Rx(`x`),
        borderBottomWidth: Rx(`y`),
      }),
      (zx = !1),
      (Bx = `calc(`),
      (Vx = `*`),
      (Hx = {
        correct: (e, t) => {
          if (!t.target) return e;
          if (typeof e == `string`) {
            if (e.startsWith(Bx)) {
              let [n, ...r] = e.slice(Bx.length).split(Vx);
              if (et(n) || !te.test(n.trim())) return e;
              let i = parseFloat(n),
                a = za(i, t.target.x),
                o = za(i, t.target.y);
              return `${Ba(a, r)} ${Ba(o, r)}`;
            }
            if (te.test(e)) e = parseFloat(e);
            else return e;
          }
          return `${za(e, t.target.x)}% ${za(e, t.target.y)}%`;
        },
      }),
      (Ux = {
        borderRadius: {
          ...Hx,
          applyTo: [
            `borderTopLeftRadius`,
            `borderTopRightRadius`,
            `borderBottomLeftRadius`,
            `borderBottomRightRadius`,
          ],
        },
        borderTopLeftRadius: Hx,
        borderTopRightRadius: Hx,
        borderBottomLeftRadius: Hx,
        borderBottomRightRadius: Hx,
      }),
      (Wx = g.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (Gx = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (Kx = {
        ...Gx,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (qx = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (Jx = { ...qx, fontWeight: 500 }),
      (Yx = {
        ...qx,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (Xx = (e) => e),
      (Zx =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (Qx = Ya(
        (e) =>
          Zx.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      ($x = (e) => () => {
        Ki(e);
      }),
      (eS = () => () => {}),
      (tS = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, n, r) {
          let i = rS.useImageSource(e, n, r);
          return t(() => {
            let t = new Image();
            return ((t.src = i), e.srcSet && (t.srcset = e.srcSet), t);
          }, [i, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      (nS = !1),
      (rS = new Proxy(tS, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? eS()
              : $x(
                  nS
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (iS = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (aS = [1, 2, 2.2]),
      (oS = [512, 1024, 2048, 4096]),
      (sS = 512),
      (cS = { position: `absolute`, ...iS, top: 0, right: 0, bottom: 0, left: 0 }),
      (lS = `src`),
      (uS = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && lS in e;
        },
      }),
      (dS = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = vo($i.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e($i(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => $i.distance(e.a, e.b)),
          e
        );
      })()),
      (X = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => X.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: Xi(e.x, t),
          y: Xi(e.y, t),
          width: Xi(e.width, t),
          height: Xi(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: X.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: X.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: $i.distance(t, n), height: $i.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(X.minX)), y: Math.min(...e.map(X.minY)) },
            n = { x: Math.max(...e.map(X.maxX)), y: Math.max(...e.map(X.maxY)) };
          return X.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: X.minX(e), y: X.minY(e) },
          { x: X.minX(e), y: X.maxY(e) },
          { x: X.maxX(e), y: X.minY(e) },
          { x: X.maxX(e), y: X.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < X.minX(e) ||
            t.x > X.maxX(e) ||
            t.y < X.minY(e) ||
            t.y > X.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of X.points(t)) if (!X.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= X.maxX(e) || X.maxX(t) <= e.x || t.y >= X.maxY(e) || X.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = X.maxX(e),
            r = X.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = X.maxY(e),
            r = X.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => X.intersects(t, e)) === void 0,
        isEqual: (e, t) => X.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > X.maxX(e) && (n = t.x - X.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > X.maxY(e) && (r = t.y - X.maxY(e)),
            $i.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: X.minX(e), y: X.minY(e) },
            r = { x: X.minX(t), y: X.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = X.minX(e),
            r = X.minY(e),
            i = X.maxX(e),
            a = X.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = X.cornerPoints(e);
          return [dS(t, n), dS(n, r), dS(r, i), dS(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  W(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              W(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  W(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              W(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = dS(t, X.center(e)),
            r = X.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && dS.intersection(n, t, !0)) {
              let n = fS[e];
              return (U(n, () => `Invalid edge name: ${JSON.stringify(fS)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          U(r, `Rect array is empty`);
          let i = X.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            U(o);
            let s = X.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (fS = [`top`, `right`, `bottom`, `left`]),
      (pS = {
        quickfix: (e) => (
          (yo(e.widthType) || yo(e.heightType)) && (e.aspectRatio = null),
          G(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || yo(e.widthType) || G(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || yo(e.heightType) || G(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (mS = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = pS.quickfix({
              left: G(t) || Ji(t),
              right: G(n) || Ji(n),
              top: G(r) || Ji(r),
              bottom: G(i) || Ji(i),
              widthType: bo(a),
              heightType: bo(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = px.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = px.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? px.getNumber(t) : null,
              right: d.right ? px.getNumber(n) : null,
              top: d.top ? px.getNumber(r) : null,
              bottom: d.bottom ? px.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? px.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? px.getNumber(t?.sizing.height) : null,
            c = Eo(e.left, e.right);
          if (o && G(c)) i = o - c;
          else if (n && yo(e.widthType)) i = n.width;
          else if (G(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                W(e.widthType);
            }
          let l = Eo(e.top, e.bottom);
          if (s && G(l)) a = s - l;
          else if (n && yo(e.heightType)) a = n.height;
          else if (G(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                W(e.heightType);
            }
          return To(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = mS.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? px.getNumber(l.width) : null,
            d = l ? px.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? X.pixelAligned(f) : f;
        },
      }),
      (hS = 200),
      (gS = 200),
      (_S = g.createContext({ parentSize: 0 })),
      (vS = (e) => {
        let t = Po(),
          { parentSize: n, children: r } = e,
          i = g.useMemo(() => ({ parentSize: n }), [Io(n), Lo(n)]);
        return t === 1
          ? r
            ? _(O, { children: r })
            : null
          : _(_S.Provider, { value: i, children: r });
      }),
      (yS = g.createContext(void 0)),
      (bS = new Set()),
      (SS = `style[data-framer-css-ssr-minified]`),
      (CS = (() => {
        if (!An()) return new Set();
        let e = document.querySelector(SS)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (wS = `data-framer-css-ssr`),
      (TS = (e, t, n) =>
        g.forwardRef((r, i) => {
          let { sheet: a, cache: o } = g.useContext(yS) ?? {},
            s = n;
          if (!An()) {
            Xe(t) && (t = t(Go(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            DS.add(e, s);
          }
          return (
            p(() => {
              (s && CS.has(s)) ||
                (Xe(t)
                  ? t(Go(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && Wo(e, a, o));
            }, []),
            _(e, { ...r, ref: i })
          );
        })),
      (ES = class {
        styles = new Set();
        componentIds = new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (DS = new ES()),
      (OS = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (kS = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(kS || {})),
      (AS = kS),
      (jS = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (U(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Ko(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            U(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      `${AS.BorderTopWidth}${AS.BorderRightWidth}${AS.BorderBottomWidth}${AS.BorderLeftWidth}`,
      (MS = `--list-style-type`),
      (NS = `--max-list-digits`),
      (PS = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (FS = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (IS = { display: `inline-block` }),
      (LS = { display: `block` }),
      (RS = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${FS.display};
            flex-direction: ${FS.flexDirection};
            justify-content: ${FS.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${Qo([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Qo([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Qo([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${IS.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${Qo([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${Qo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Qo([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Qo([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${Qo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${Qo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Qo([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Qo([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${Qo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${Qo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Qo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Qo([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${Qo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Qo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${Qo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Qo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Qo([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${Qo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Qo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${LS.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${NS}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${$o(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (zS = `--text-truncation-display-inline-for-safari-16`),
      (BS = `--text-truncation-display-none-for-safari-16`),
      (VS = `--text-truncation-line-break-for-safari-16`),
      (HS = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (US = `(background: -webkit-named-image(i))`),
      (WS = `(contain-intrinsic-size: inherit)`),
      (GS = [
        `@supports ${US} and (not ${WS}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${HS.join(`, `)} { display: var(${zS}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${HS.map((e) => `${e}::after`).join(`, `)} { content: var(${VS}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${BS}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${zS}, ${IS.display}) }
    }`,
      ]),
      (KS = `--framer-will-change-override`),
      (qS = `--framer-will-change-effect-override`),
      (JS = `--framer-will-change-filter-override`),
      (YS = `--overflow-clip-fallback`),
      (XS = `--one-if-corner-shape-supported`),
      (ZS = (e) => {
        let t = [
            `[data-framer-component-type="Text"] { cursor: inherit; }`,
            `[data-framer-component-text-autosized] * { white-space: pre; }`,
            `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
            `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
            `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
            `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
            `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
            `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
          ],
          n = [
            `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
            `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
          ],
          r = [
            `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
            `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
            `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
          ],
          i = [
            `[data-framer-cursor="pointer"] { cursor: pointer; }`,
            `[data-framer-cursor="grab"] { cursor: grab; }`,
            `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
          ],
          a = [
            `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
            `[data-framer-generated] * { pointer-events: unset }`,
          ],
          o = [
            `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
            `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
            `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          ],
          s = `(background: -webkit-named-image(i))`,
          c = (e) =>
            e
              ? [
                  `body { ${KS}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${KS}: transform; } }`,
                ]
              : [`body { ${KS}: none; ${qS}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${JS}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${JS}: filter; } }`,
                ]
              : [`body { ${JS}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${YS}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${XS}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...RS,
          ...OS,
          `
[data-framer-component-type="Stack"]:not([data-framer-generated]) > *,
[data-framer-component-type="Stack"]:not([data-framer-generated]) > [data-framer-component-type] {
    position: relative;
}`,
          `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
          ...n,
          ...r,
          `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
          `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
          `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
          ...i,
          ...u(e),
          `.svgContainer svg { display: block; }`,
          `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
          ...o,
          d,
          `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
          ...GS,
          f,
        ];
      }),
      (QS = Uo(() => ZS(!1))),
      ($S = Uo(() => ZS(!0))),
      (eC = Dn()),
      (tC = g.createContext(!1)),
      (nC = class {
        sharedResizeObserver;
        callbacks = new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (rC = An() ? new nC() : void 0),
      (iC = `data-framer-size-compatibility-wrapper`),
      (aC = `0.000001px`),
      (oC = ` translateZ(${aC})`),
      (sC = Mn() || On() || Nn()),
      (cC = (() => {
        class e extends v {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? hs(t) : gs(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Dt(this.props, e);
          }
          componentDidUpdate(e) {
            Xx(this.props).clip &&
              Xx(this.props).radius === 0 &&
              Xx(e).radius !== 0 &&
              vs(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (lC = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (uC = {
        hueRotate: (e, t) => J.toHslString(J.hueRotate(J(e), t)),
        setAlpha: (e, t) => J.toRgbString(J.alpha(J(e), t)),
        getAlpha: (e) => {
          let t = va(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => J.toRgbString(J.multiplyAlpha(J(e), t)),
        toHexValue: (e) => J.toHex(J(e)).toUpperCase(),
        toHex: (e) => J.toHexString(J(e)).toUpperCase(),
        toRgb: (e) => J.toRgb(J(e)),
        toRgbString: (e) => J.toRgbString(J(e)),
        toHSV: (e) => J.toHsv(J(e)),
        toHSL: (e) => J.toHsl(J(e)),
        toHslString: (e) => J.toHslString(J(e)),
        toHsvString: (e) => J.toHsvString(J(e)),
        hsvToHSLString: (e) => J.toHslString(J(oa(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => J.toHex(J(oa(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => J.toHexString(J(oa(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => J.toRgbString(J(oa(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => oa(e.h, e.s, e.v),
        rgbaToString: (e) => J.toRgbString(J(e)),
        rgbToHexValue: (e) => J.toHex(J(e)),
        rgbToHexString: (e) => J.toHexString(J(e)),
        hslToString: (e) => J.toHslString(J(e)),
        hslToRgbString: (e) => J.toRgbString(J(e)),
        toColorPickerSquare: (e) => J.toRgbString(J({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => J(e).isValid !== !1,
        equals: (e, t) =>
          J.isP3String(e) || J.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = J(e)),
              typeof t == `string` && (t = J(t)),
              J.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = J(e);
          return t.a === 1 ? J.toHexString(t) : J.toRgbString(t);
        },
        toFormatString: (e) => (J.isP3String(e) ? e : J.toRgbString(J(e))),
      }),
      (dC = /var\(.+\)/u),
      (fC = new Map()),
      (pC = [`stops`]),
      (mC = [`start`, `end`]),
      (hC = [`angle`, `alpha`]),
      (gC = {
        isLinearGradient: (e) => H(e) && hC.every((t) => t in e) && (Es(e) || Ts(e)),
        hash: (e) => e.angle ^ ws(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Cs(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (_C = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (vC = {
        isRadialGradient: (e) => H(e) && _C.every((t) => t in e) && (Es(e) || Ts(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ ws(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = Cs(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (yC = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (bC = new Set([...yC, ...yC.map((e) => `${e}Capture`)])),
      (xC = `overflow`),
      (SC = { x: 0, y: 0, width: 200, height: 200 }),
      (CC = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (wC = b(function (e, t) {
        let { name: n, center: i, border: a, _border: o, __portal: s } = e,
          { props: c, children: l } = as(e),
          u = Ls(c),
          d = ss(e),
          f = Ms(e),
          p = r(null),
          m = t ?? p,
          h = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": f,
            "data-framer-highlight": f === `pointer` || void 0,
            "data-layoutid": d,
            "data-framer-offset-parent-id": Xx(e)[`data-framer-offset-parent-id`],
          };
        !Rs(e) && n && (Xx(h)[`data-framer-name`] = n);
        let [g, v] = Is(c),
          y = Fs(c),
          b = Bo(y);
        (i && !(v && !b && Oo(y))
          ? ((u.transformTemplate ||= os(i)), Object.assign(h, rs(i)))
          : (u.transformTemplate ||= void 0),
          ps(e, m));
        let x = mo(e),
          S = zs(c, y, v, w(tC)),
          C = Ro(
            T(O, {
              children: [
                x
                  ? _(lo, {
                      alt: e.alt ?? ``,
                      image: x,
                      containerSize: v ?? void 0,
                      nodeId: e.id && is(e.id),
                      layoutId: d,
                    })
                  : null,
                l,
                _(fo, { ...o, border: a, layoutId: d }),
              ],
            }),
            S
          ),
          E = Ho(e.as),
          D = Vo(x);
        return (
          e.fitImageDimension &&
            D &&
            ((g[e.fitImageDimension] = `auto`), (g.aspectRatio = D.width / D.height)),
          T(E, { ...h, ...u, layoutId: d, style: g, ref: m, children: [C, s] })
        );
      })),
      (TC = ts(
        b(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? _(wC, { ...e, ref: t }) : null;
        })
      )),
      (EC = `__LAYOUT_TREE_ROOT`),
      (DC = g.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (OC = class extends v {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === EC && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return _(DC.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (kC = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (AC = class {
        sharedIntersectionObserver;
        callbacks = new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (jC = a(new Map())),
      (MC = typeof IntersectionObserver > `u` ? Iv : qs),
      (NC = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (PC = g.createContext(null)),
      (FC = class extends v {
        layoutMaybeMutated = !1;
        projectionNodes = new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === EC && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return _(Ne.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (IC = (e) => {
        let t = g.useContext(DC);
        return _(FC, { ...e, sharedLayoutContext: t });
      }),
      (LC = g.createContext(!0)),
      (RC = a({ register: () => {}, deregister: () => {} })),
      (zC = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let i = $s(),
          a = r({
            register: C(
              (e) => {
                if (i.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                i.set(e, void 0);
              },
              [i]
            ),
            deregister: C(
              (e) => {
                (i.get(e)?.(), i.delete(e));
              },
              [i]
            ),
          }).current;
        return (
          c(
            () => (
              i.forEach((n, r) => {
                let a = r(e, t);
                i.set(r, Xe(a) ? a : void 0);
              }),
              () => {
                i.forEach((e, t) => {
                  e && (e(), i.set(t, void 0));
                });
              }
            ),
            [e, t, i]
          ),
          _(RC.Provider, { value: a, children: n })
        );
      }),
      (BC = g.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: i = !1,
        visible: a,
        transitionProps: o,
        children: s,
        backdropColor: l,
        onTapBackdrop: u,
        backfaceVisible: d,
        exitBackfaceVisible: f,
        animation: p,
        exitAnimation: m,
        instant: h,
        initialProps: g,
        exitProps: v,
        position: y = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: b,
        index: x,
        areMagicMotionLayersPresent: S,
        id: C,
        isInitial: E,
      }) {
        let D = ae(),
          O = w(Ce),
          { persistLayoutIdCache: k } = w(Wx),
          A = r({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: nc({}, g, o),
          }),
          j = r(null),
          M = O !== null && !O.isPresent;
        (t && A.current.wasCurrent === void 0 && k(),
          c(() => {
            if (e || !D) return;
            if (M) {
              A.current = { ...A.current, wasBeingRemoved: M };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = A.current,
              a = (t && !i) || (!M && A.current.wasBeingRemoved && t),
              s = n && !r,
              c = nc(A.current.origins, g, o),
              l = A.current.wasReset;
            (a || s
              ? (D.stop(), D.start({ zIndex: x, ...c, ...o }), (l = !1))
              : l === !1 && (D.stop(), D.set({ zIndex: x, ...VC, opacity: 0 }), (l = !0)),
              (A.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, M]));
        let N = h ? { type: !1 } : `velocity` in p ? { ...p, velocity: 0 } : p,
          ee = h ? { type: !1 } : m || p,
          P = { ...y };
        ((P.left === void 0 || P.right === void 0) && (P.width = `auto`),
          (P.top === void 0 || P.bottom === void 0) && (P.height = `auto`));
        let F = (rc(o) || rc(g)) && (e || t || n) ? 1200 : void 0,
          I = { ...VC, ...A.current.origins },
          te = e
            ? {
                initial: { ...I, ...g },
                animate: { ...I, ...o, transition: N },
                exit: { ...I, ...v, transition: p },
              }
            : { animate: D, exit: { ...I, ...v, transition: ee } },
          ne = !(M || S === !1),
          re = !!t && ne,
          L = t && E;
        return T(TC, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || M || (t && b) ? x : void 0,
            pointerEvents: void 0,
            visibility: a ? `visible` : `hidden`,
            perspective: F,
          },
          children: [
            e &&
              _(TC, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: p,
                initial: { opacity: h && a ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: l || `transparent`,
                onTap: M ? void 0 : u,
              }),
            _(TC, {
              ...P,
              ...te,
              transition: {
                default: N,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: M ? f : d,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: { pointerEvents: void 0, opacity: L || e || (t && b) ? 1 : 0 },
              "data-is-present": ne ? void 0 : !1,
              ref: j,
              children: _(PC.Provider, {
                value: j,
                children: _(LC.Provider, {
                  value: re,
                  children: _(zC, {
                    isCurrent: re,
                    isOverlayed: i,
                    children: _(IC, {
                      isLead: t,
                      animatesLayout: !!b,
                      transition: N,
                      isExiting: !ne,
                      isOverlayed: i,
                      id: C,
                      children: s,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, tc)),
      (VC = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (HC = class {
        warning = () => {
          Ki(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (UC = a(new HC())),
      (WC = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (GC = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (KC = Xv(VC)),
      (qC = g.createContext(void 0)),
      (JC = g.createContext(void 0)),
      (YC = (() => {
        class e extends v {
          #e = null;
          state = GC();
          static defaultProps = { enabled: !0 };
          static contextType = qC;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !_o(t) || !go(t)) return;
            let n = { ...WC.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = sc(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!_o(t) || !go(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, WC.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = sc(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !_o(e) || !go(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, WC.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, WC.Fade, t);
          }
          push(e, t) {
            this.#i(e, ic(t), t);
          }
          modal(e, t) {
            this.#i(e, WC.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, ac(t), t);
          }
          flip(e, t) {
            this.#i(e, oc(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, WC.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = Sc(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              U(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              U(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                _(
                  BC,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: Mc(o, e),
                    transitionProps: u,
                    animation: jc(o, e),
                    backfaceVisible: kc(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: _(Bs, { children: Pc({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              _(
                BC,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: Oc(n, t),
                  transitionProps: Ac(n, t),
                  instant: Mc(n, t, !0),
                  animation: jc(n, t),
                  exitProps: e.transition.enter,
                  visible: Nc(n, t),
                  backdropColor: Ec(e.transition),
                  backfaceVisible: Dc(n, t),
                  onTapBackdrop: Fc(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: Pc({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return _(TC, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: _(UC.Provider, {
                value: this,
                children: T(JC.Provider, {
                  value: i,
                  children: [
                    _(BC, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: Cc(n),
                      animation: wc(n),
                      backfaceVisible: Tc(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: _(Va, {
                        children: _(OC, {
                          children: _(Fe, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    _(Fe, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (XC = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (ZC = ts(g.forwardRef(Ic))),
      Ie(Pv(), 1),
      (QC = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(QC || {})),
      ($C = `optional`),
      Ie(Pv(), 1),
      Ie(Pv(), 1),
      (ew = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (tw = Symbol(`private`)),
      (nw = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [tw]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new fx(),
                reset() {
                  for (let t in i)
                    if (ew(i, t)) {
                      let n = ew(e, t) ? Xx(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, iw);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[tw].reset()),
          (e.addObserver = (e, t) => e[tw].observers.add(t)),
          e
        );
      })()),
      (rw = class {
        set = (e, t, n, r) => {
          if (t === tw) return !1;
          let i = e[tw],
            a,
            o;
          if (
            (Ji(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = px(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = Xx(e)[t];
          if (l !== void 0) {
            Ji(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (Xx(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === tw) return Xx(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[tw].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(tw);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== tw) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (iw = new rw()),
      (aw = `opacity`),
      (ow = (() => {
        function e(t = {}) {
          let n = nw(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => nw.resetObject(e));
          }),
          (e.addObserver = (e, t) => nw.addObserver(e, t)),
          e
        );
      })()),
      (sw = { update: 0 }),
      (cw = g.createContext({ update: NaN })),
      (lw = class extends v {
        observers = [];
        state = sw;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), Ix.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), ow.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            ow._stores.forEach((e) => {
              let t = ow.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            _(cw.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      Ie(Pv(), 1),
      (uw = `__framer__`),
      (dw = uw.length),
      (fw = g.createContext(void 0)),
      (pw = g.createContext(void 0)),
      (mw = `ssr-variant`),
      (hw = `ssr-variant-group-separator`),
      (gw = g.forwardRef(function (e, t) {
        let n = rl(t),
          r = g.useContext(pw),
          i = g.useSyncExternalStore(Vv, Uv, Hv),
          a = Wa(() => (i ? (An() ? 1 : 2) : 0)),
          o = g.useContext(fw);
        return ti(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, dl(t, c, i));
            case 1:
              return ol(i, s, c, u, l, d, n, t);
            case 2:
              return ol(i, s, c, u, l, d, nl, void 0);
            default:
              W(a);
          }
        }, [o, r, n, e]);
      })),
      (_w = TS(gw, `.${mw} { display: contents }`, `PropertyOverrides`)),
      (vw = `default`),
      (yw = new Set([vw])),
      (bw = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (U(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (U(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = vw, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return vw;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = sl(r)) : vw;
        }
        setAll(e, t = yw, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Xe(n.transformTemplate) ? n.transformTemplate?.({}, Sw) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: H(a) ? a : void 0,
              animate: H(o) ? o : void 0,
              transformTemplate: B(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (xw = new bw()),
      (Sw = `__Appear_Animation_Transform__`),
      (Cw = `data-framer-appear-id`),
      (ww = `data-framer-appear-animation`),
      (Tw = (e) => {
        if (qa())
          return {
            animate: pl(e.animate) ? e.animate : void 0,
            initial: pl(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (Ew = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (Dw = (e) => ({
        x: Ke(e?.x ?? 0),
        y: Ke(e?.y ?? 0),
        opacity: Ke(e?.opacity ?? 1),
        scale: Ke(e?.scale ?? 1),
        rotate: Ke(e?.rotate ?? 0),
        rotateX: Ke(e?.rotateX ?? 0),
        rotateY: Ke(e?.rotateY ?? 0),
        skewX: Ke(e?.skewX ?? 0),
        skewY: Ke(e?.skewY ?? 0),
        transformPerspective: Ke(e?.transformPerspective ?? 0),
      })),
      (Ow = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (kw = { willChange: `transform` }),
      Object.freeze(kw),
      (Aw = {}),
      Object.freeze(Aw),
      (jw = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (Mw = () => {
        let e = r();
        return (
          c(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (Nw = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (Pw = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (Fw = 1),
      (Iw = 4),
      (Lw = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (Rw = [`animate`, `animate`]),
      (zw = { inputRange: [], outputRange: [] }),
      (Bw = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (Vw = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (Hw = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (Uw = [0, 1]),
      (Ww = { parallax: Nw, styleAppear: Lw, styleTransform: Bw, loop: jw, presence: Pw }),
      (Gw = Xv(Ww)),
      (Kw = (e) => e.reduce((e, t) => (e += t), 0)),
      (qw = (e) => e.reduce((e, t) => (e *= t), 1)),
      (Jw = `current`),
      (Yw = (e) =>
        g.forwardRef((t, n) => {
          if (t.__withFX)
            return _(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = Tw(t);
          if (r) return _(e, { ...t, ...r, ref: n });
          let {
              parallax: i = {},
              styleAppear: a = {},
              styleTransform: o = {},
              presence: s = {},
              loop: c = {},
              forwardedProps: l,
              targetOpacityValue: u,
              withPerspective: d,
              inSmartComponent: f = !1,
            } = Il(t),
            p = Ws(n),
            { values: m, style: h } = Sl(s, p, f, t.style, t[me]),
            { values: v, style: y } = vl(i, p, t.style?.visibility),
            { values: b, style: x } = Pl(o, p),
            { values: S, style: C } = Al(a, p),
            { values: w, style: T } = gl(c, p),
            E = g.useMemo(() => {
              let e = new He(u ?? 1);
              return {
                scale: [S.scale, w.scale, m.scale, b.scale],
                opacity: [S.opacity, w.opacity, m.opacity, e, b.opacity],
                x: [S.x, w.x, m.x, b.x],
                y: [S.y, w.y, v.y, m.y, b.y],
                rotate: [S.rotate, w.rotate, m.rotate, b.rotate],
                rotateX: [S.rotateX, w.rotateX, m.rotateX, b.rotateX],
                rotateY: [S.rotateY, w.rotateY, m.rotateY, b.rotateY],
                skewX: [S.skewX, w.skewX, m.skewX, b.skewX],
                skewY: [S.skewY, w.skewY, m.skewY, b.skewY],
                transformPerspective: [b.transformPerspective, S.transformPerspective],
              };
            }, [u, b, v, S, w, m]);
          Rl(t.style, E);
          let D = se(E.scale, qw),
            O = se(E.opacity, qw),
            k = se(E.x, Kw),
            A = se(E.y, Kw),
            j = se(E.rotate, Kw),
            M = se(E.rotateX, Kw),
            N = se(E.rotateY, Kw),
            ee = se(E.skewX, Kw),
            P = se(E.skewY, Kw),
            F = se(E.transformPerspective, Kw),
            { drag: I, dragConstraints: te } = l;
          ls(I && Ll(te) ? te : void 0);
          let ne = {
            opacity: O,
            scale: D,
            x: k,
            y: A,
            rotate: j,
            rotateX: M,
            rotateY: N,
            skewX: ee,
            skewY: P,
          };
          et(d) && (ne.transformPerspective = F);
          let re = zl(t.animate) ? t.animate : void 0,
            L = zl(t.initial) ? t.initial : void 0,
            ie = zl(t.exit) ? t.exit : void 0,
            ae = f && !s.presenceInitial ? { initial: L, animate: re, exit: ie } : {};
          return _(e, {
            ...l,
            ...ae,
            __withFX: !0,
            style: { ...t.style, ...y, ...x, ...T, ...ne, ...C, ...h },
            values: m,
            ref: p,
          });
        })),
      (Xw = a({})),
      (Zw = g.createContext({})),
      (Qw = g.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = g.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = rl(a);
        return _(Zw.Provider, { value: o, children: s(r, i) });
      })),
      ($w = (e) =>
        g.forwardRef((t, n) =>
          _(e, { layoutId: ss(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (eT = {}),
      (tT = () => eT),
      (nT = (e) => {
        eT = e;
      }),
      (rT = !1),
      (iT = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Hl(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              lt(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          ln(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Hl(e)) throw e;
          return ((rT = !0), this.props.children);
        }
      }),
      (aT = f === void 0 ? null : new Promise(() => {})),
      (oT = _(Ul, {})),
      (sT = a(!1)),
      (sT.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (cT = _(Gl, {})),
      (lT = class extends v {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (ql(this.props.getErrorMessage(), t?.componentStack), Kl(e, t));
        }
        render() {
          let { children: e, fallback: t = cT } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (uT = class extends v {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Kl(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (dT = g.createContext(void 0)),
      (fT = `code-crash:`),
      (pT = $w(
        g.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l
        ) {
          let u = Wa(() => (t ? `${t}-container` : void 0)),
            d = Ho(n),
            f = su(
              g.Children.map(e, (e) =>
                g.isValidElement(e) ? g.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return _(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: _(tC.Provider, {
              value: !0,
              children: _(xb.Provider, {
                value: i ?? null,
                children: _(Ua, {
                  enabled: !1,
                  children: _(Be, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        })
      )),
      (mT = g.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = su(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Ho(f);
          return _(xb.Provider, {
            value: a ?? null,
            children: _(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return _(xb.Provider, {
            value: a ?? null,
            children: _(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (hT = a({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (gT = `framer-cursor-none`),
      (_T = `framer-pointer-events-none`),
      (vT = x(function ({ children: e }) {
        let t = Wa(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = cu(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = ie();
        return T(hT.Provider, { value: t, children: [e, !n && _(ST, {})] });
      })),
      (yT = TS(
        vT,
        [
          `.${gT}, .${gT} * { cursor: none !important; }`,
          `.${_T}, .${_T} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (bT = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (xT = `data-framer-portal-id`),
      (ST = x(function () {
        let { onRegisterCursors: e } = w(hT),
          [t, n] = d(!1),
          i = F(0),
          a = F(0),
          o = F(0),
          s = r(null),
          l = r({ cursors: {}, cursorHash: void 0 }),
          u = cs();
        (M(() => {
          let e = by.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? m(() => n(!1)) : n(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || n(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          c(() => {
            if (!t) return;
            let e = 0,
              n = 0;
            function r() {
              (i.set(e), a.set(n), Ee(o, 1, { type: `tween`, duration: 0.2 }));
            }
            let c = () => {
              if ($e(l.current.cursors)) return;
              let t = fu(e, n);
              t !== l.current.cursorHash && ((l.current.cursorHash = t), Oe.update(() => u()));
            };
            function d(t) {
              if (t.pointerType === `touch`) {
                Pe(c);
                return;
              }
              (Oe.read(c, !0), (e = t.clientX), (n = t.clientY), Oe.update(r));
            }
            function f(e) {
              if (e.target === s.current || !s.current) return;
              let t = new PointerEvent(e.type, {
                bubbles: !0,
                cancelable: e.cancelable,
                pointerType: e.pointerType,
                pointerId: e.pointerId,
                composed: e.composed,
                isPrimary: e.isPrimary,
                buttons: e.buttons,
                button: e.button,
              });
              Oe.update(() => {
                s.current?.dispatchEvent(t);
              });
            }
            return (
              by.addEventListener(`pointermove`, d),
              document.addEventListener(`pointerdown`, f),
              document.addEventListener(`pointerup`, f),
              Oe.read(c, !0),
              () => {
                (by.removeEventListener(`pointermove`, d),
                  document.removeEventListener(`pointerdown`, f),
                  document.removeEventListener(`pointerup`, f),
                  Pe(c));
              }
            );
          }, [o, i, a, u, t]),
          c(() => {
            if (!t) return;
            function e() {
              Ee(o, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              by.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), by.removeEventListener(`blur`, e));
              }
            );
          }, [o, t]),
          M(() => {
            function t(e) {
              ((l.current.cursors = e),
                (l.current.cursorHash = $e(e) ? null : fu(i.get(), a.get())),
                u());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(gT, !1));
            };
          }, [i, a, e, u]));
        let { cursors: f, cursorHash: p } = l.current,
          h = p ? f[p] : null,
          g = lu(h);
        M(() => {
          t && document.body.classList.toggle(gT, g);
        }, [g, t]);
        let v = h?.component,
          y = h?.transition ?? { duration: 0 },
          b = y.duration === void 0 ? y : { ...y, duration: y.duration * 1e3 },
          x = L(i, b),
          S = L(a, b),
          T = se(() => x.get() + (h?.offset?.x ?? 0)),
          D = se(() => S.get() + (h?.offset?.y ?? 0)),
          O = h?.alignment,
          k = h?.placement,
          A = C((e, t) => `translate(${du(k, O)}) ${t}`, [O, k]);
        return !t || !h || !v
          ? null
          : _(E, {
              children: _(v, {
                transformTemplate: A,
                style: { ...bT, x: T, y: D, opacity: o },
                globalTapTarget: !0,
                variant: h?.variant,
                ref: s,
                className: _T,
              }),
            });
      })),
      (CT = `webPageId`),
      (wT = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            U(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (U(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((Lv && !Nn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(hu(e), e), this.collectedLinks.set(hu(t), t));
          let n = this.nestingInfo.get(hu(e)) ?? new Set();
          (n.add(hu(t)), this.nestingInfo.set(hu(e), n));
        }
      }),
      (TT = new wT()),
      (ET = `element`),
      (DT = `collection`),
      (OT = `collectionItemId`),
      (kT = `pathVariables`),
      (AT = `framer/page-link,`),
      (jT = a(void 0)),
      (MT = `overlay`),
      (NT = `template-overlay`),
      (PT = g.forwardRef(function ({ Component: e, ...t }, n) {
        return e ? _(e, { ...t, ref: n }) : null;
      })),
      (FT = class extends v {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((f.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(lt(Rv ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          ln(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (Rv && document.getElementById(`main`)?.innerHTML) || ``;
          return _(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${lt()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (LT = /:([a-z]\w*)/gi),
      (RT = a(void 0)),
      (zT = new Map()),
      (BT = 500),
      (VT = 500),
      (UT = !1),
      (WT = 500),
      (GT = 0.9),
      (KT = 1.7),
      (qT = 4),
      (JT = 1 / 0),
      (YT = new WeakMap()),
      (XT = new Set()),
      (ZT = new Map()),
      (QT = !ib || typeof IntersectionObserver > `u` ? null : ed()),
      ($T = Fu(
        b(function (
          {
            children: e,
            href: n,
            openInNewTab: r,
            smoothScroll: i,
            clickTrackingId: a,
            relValues: o,
            preserveParams: s,
            nodeId: c,
            scopeId: l,
            motionChild: u,
            ...d
          },
          f
        ) {
          let p = At(),
            m = Mt(),
            h = zu(),
            { activeLocale: g, locales: _ } = er(),
            v = od(),
            b = nr(),
            x = gu(),
            S = sd({ nodeId: c, clickTrackingId: a, router: p, href: n, activeLocale: g }),
            C = t(() => {
              if (!n) return {};
              let e = mu(n) ? n : Cu(n);
              if (!e) return {};
              if (B(e))
                return gd(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: r,
                    trackLinkClick: S,
                    rel: o?.join(` `),
                    preserveParams: s,
                    smoothScroll: i,
                  },
                  b,
                  g?.id,
                  _,
                  h
                );
              let { unresolvedPathSlugs: t, unresolvedHashSlugs: a } = e,
                c = v(t, a, g);
              if (ot(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: y,
                } = Iu(p, m, e, g, c, h),
                x = nd(r, !0),
                C = x === `_blank`,
                w = hd(u, C),
                T = { pathVariables: f, locale: y },
                E = dd(u, w, (e) =>
                  ld(
                    p,
                    l,
                    () =>
                      b(l, T, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    f,
                    i,
                    e
                  )
                );
              return {
                href: u,
                target: x,
                onClick: ud(u, S, E),
                "data-framer-page-link-current": (m && Bu(m, e, h)) || void 0,
                navigate: E,
                preload: () =>
                  b(l, T, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: f,
                _locale: y,
                _navigationUrl: w,
              };
            }, [n, p, g, h, r, m, i, S, o, _, s, v, b]),
            w = Ws(y(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: T,
              preload: E,
              _routeId: D,
              _pathVariables: O,
              _locale: k,
              _navigationUrl: A,
              ...j
            } = C;
          Gs(
            w,
            (e) => {
              if (!(e === null || !D || !E || !A || x))
                return QT?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`);
            },
            [E, D, O, k, A, x]
          );
          let M = !!T;
          return Tu(
            rl(f).cloneAsArray(e, (e) => _d(e, { ...d, ...yd(j, u, M) }, w)),
            l,
            c,
            n,
            C,
            w
          );
        })
      )),
      (eE = g.createContext(void 0)),
      (tE = `__framer_force_showing_editorbar_since`),
      (nE = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (rE = () => {
        try {
          return !!localStorage[tE];
        } catch {
          return !1;
        }
      }),
      (iE = () => !rE()),
      (aE = (() => {
        let e = a(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (oE = null),
      (sE = null),
      Bv(Dd),
      (cE = (e, t, n, i, a, o) => {
        let s = w(eE),
          l = r(),
          u = bn(),
          d = r(!0);
        return (
          c(() => {
            function r() {
              (!oE || !sE) && Dd();
              let r = n ? new URL(n, by.location.href) : by.location,
                c = {
                  version: xy,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: r.href,
                  hostname: r.hostname,
                  pathname: r.pathname,
                  search: r.search || null,
                  hash: r.hash || null,
                  timezone: oE,
                  locale: sE,
                },
                l = d.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = l ?? null;
                    if (l === void 0) {
                      let n = e.collectionId && u?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && B(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = (ot(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (l.current = r()),
                t = e instanceof Promise ? await e : e;
              ((l.current = t),
                d.current ? (d.current = !1) : ln(`published_site_pageview`, t, `eager`));
            })();
            let c = async (e) => {
              if (e.persisted) {
                let e = (l.current = r()),
                  t = e instanceof Promise ? await e : e;
                ((l.current = t), ln(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              f.addEventListener(`pageshow`, c),
              () => {
                f.removeEventListener(`pageshow`, c);
              }
            );
          }, [e, t, n, i, a, s, u, o]),
          l
        );
      }),
      (lE = 0),
      (uE = 500),
      (dE = 200),
      (fE = `main`),
      (pE = `framerGeneratedPage`),
      (mE = `<!-- Start of headStart -->`),
      (hE = `<!-- End of headStart -->`),
      (gE = `<!-- Start of headEnd -->`),
      (_E = `<!-- End of headEnd -->`),
      (vE = `<!-- Start of bodyStart -->`),
      (yE = `<!-- End of bodyStart -->`),
      (bE = `<!-- Start of bodyEnd -->`),
      (xE = `<!-- End of bodyEnd -->`),
      (SE = g.createContext(void 0)),
      (CE = { status: `loading`, data: void 0 }),
      (wE = 5e3),
      (TE = () => {}),
      (EE = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = new Map();
        #e = new Map();
        #t = new Set();
        #n = new Map();
        #r = new Map();
        #i = new Map();
        #a = new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = xf(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = xf(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = by.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = this.#r.get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          this.#a.set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              Tf(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = Qc(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && Tf(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!An() || !vu(e.url, !1)) return;
          let t = xf(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = wf(n, e);
          return (e.resultOutputType === `image` && B(i) && (await vf(i).catch(TE)), i);
        }
        async fetchWithCache(e) {
          if (!An()) return;
          let t = xf(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && Tf(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, CE);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !this.#t.has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!vu(r, !1)) return TE;
          let a = xf(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n &&
                (n.delete(t),
                n.size === 0 && this.#e.delete(a),
                this.#e.size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (DE = a(void 0)),
      (OE = a(!0)),
      (kE = ({ children: e, client: t }) => {
        let [n] = d(() => t ?? new EE()),
          [r, i] = d(!0);
        return (
          c(
            () => (
              n.hydrateCache(),
              m(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          _(OE.Provider, { value: r, children: _(DE.Provider, { value: n, children: e }) })
        );
      }),
      (AE = (() => {
        let e = a(void 0);
        return ((e.displayName = `ServerDatabaseClientContext`), e);
      })()),
      (Le.WillChange = We),
      (jE = Fu(
        b(function ({ links: e, children: t, ...n }, r) {
          return rl(r)(t(Of((t) => e.map(t), [e])), n);
        })
      )),
      (ME = { priority: void 0, canYield: !0 }),
      (NE = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return qf(e, t);
            case `boolean`:
              return Yf(e);
            case `color`:
              return Qf(e);
            case `date`:
              return ep(e);
            case `enum`:
              return np(e);
            case `file`:
              return ip(e);
            case `link`:
              return op(e);
            case `number`:
              return cp(e);
            case `object`:
              return dp(e, t);
            case `responsiveimage`:
              return pp(e);
            case `richtext`:
              return hp(e);
            case `string`:
              return yp(e);
            case `vectorsetitem`:
              return _p(e);
            case `unknown`:
              return e;
            default:
              W(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Ze(e)
            ? { type: `boolean`, value: e }
            : rt(e)
              ? { type: `date`, value: e.toISOString() }
              : V(e)
                ? { type: `number`, value: e }
                : B(e)
                  ? { type: `string`, value: e }
                  : Qe(e)
                    ? { type: `array`, value: e.map(NE.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && xp(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && xp(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && xp(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && xp(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && xp(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => NE.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => NE.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = bp(e),
            i = bp(t);
          return tt(r) || tt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = bp(e),
            i = bp(t);
          return tt(r) || tt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = bp(e),
            i = bp(t);
          return tt(r) || tt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(NE.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return B(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              W(e);
          }
        },
      }),
      (PE = { type: `unknown`, isNullable: !0 }),
      (FE = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = Wc(e);
          U(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (U(n !== `array`, `Array properties are not supported`),
              U(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        collection;
        locale;
        schema;
        indexes = [];
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (nt(i)) continue;
            let a = this.schema[t];
            if (!et(a)) {
              if ((U(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await Sp(this.collection, this.locale))[t]?.[n];
          return ry.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await Sp(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = Nf(e);
            i && (await i);
            let a = t[r];
            U(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await Sp(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = Nf(t);
            e && (await e);
            let a = n[Number(i)];
            (U(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (IE = new Map()),
      (LE = new WeakMap()),
      (RE = `$r_`),
      (zE = new Map()),
      (BE = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = Fp(e, t)), (this.priority = kp(n)));
        }
        *resolveArrayValue(e) {
          return yield* Rf(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* Lf(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          U(Mp(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          U(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return at(t) ? yield t : t;
        }
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          U(Pp(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (U(n, `Can't find collection for vector set item pointer`),
            U(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return at(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (VE = `index`),
      (HE = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), q(this.name, ...e));
        }
      }),
      (UE = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new GE();
        fields = new Z();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (WE = class {
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Z();
      }),
      (GE = class extends HE {
        name = `Indexes`;
      }),
      (KE = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          U(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                U(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: jp(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                U(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: Np(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Z = class extends HE {
        name = `Fields`;
      }),
      (qE = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return q(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (JE = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return q(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== VE) return !1;
          return !0;
        }
      }),
      (YE = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return q(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (XE = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (U(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (U(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = new Map();
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new JE();
        }
        getRequiredResolvedFields() {
          let e = new Z();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new YE(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          U(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (U(e, `Field must exist`), e.field);
        }
      }),
      (ZE = 1e3),
      (Q = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = zp(),
            i = Bp(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (QE = class {
        pointers = new Map();
        values = new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      ($E = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        fields;
        tuples;
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Z();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Z();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (eD = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (tD = class extends eD {
        group;
        getGroup() {
          return (U(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (U(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return Pf(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return Ff(this.evaluate(void 0), void 0, e);
        }
      }),
      (nD = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return q(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (rD = class e extends tD {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        projections;
        passthrough;
        inputGroup;
        getHash() {
          return q(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Z();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Z();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new YE(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new Q(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = Q.max(i, n);
          }
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new nD(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Rf(
              n.tuples.map((t) =>
                Rf(
                  this.projections.map((n) => Lf({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new QE();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            U(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (iD = { type: 0 }),
      (aD = class extends eD {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        evaluateSync() {
          return Pf(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Ff(this.evaluate(void 0, void 0));
        }
      }),
      (oD = { type: 0 }),
      (sD = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return q(`CaseCondition`, this.when, this.then);
        }
      }),
      (cD = class e extends aD {
        constructor(e, t, n) {
          let r = new Z(),
            i = new Z(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        getHash() {
          return q(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new Q(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new sD(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* Lf({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Rf(
              this.conditions.map((n) =>
                Lf({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (NE.equal(n, e, oD)) return t;
          } else for (let { when: e, then: t } of r) if (Xf(e)) return t;
          return i;
        }
      }),
      (lD = class {
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        build() {
          let e = new XE();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Z(),
            o;
          if (t.orderBy) {
            o = new JE();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (et(t)) continue;
                a.add(t.field);
                let r = new qE(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new KE(Rp(this.fieldId++), void 0, t.definition, void 0),
                  a = new nD(t, r);
                i.push(a);
                let s = new qE(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Z(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (et(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              U(n.alias, `Subqueries should have an alias`);
              let r = Rp(this.fieldId++),
                a = n.alias,
                s = new KE(r, a, t.definition, void 0),
                c = new nD(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              W(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = Ep(t.data, this.locale),
            i = t.alias,
            a = new UE(Ip(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new KE(Rp(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new KE(Rp(this.fieldId++), VE, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: VE, collectionName: i });
            let t = new JE(),
              r = new qE(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new JE(),
              o = new WE(Lp(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new JE(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              W(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              W(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(PE, null);
        }
        buildLiteralValue(e) {
          let t = NE.parse(e.value);
          return this.normalizer.newScalarConstant(PE, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (U(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                U(n, `Missing argument`),
                U(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                U(n, `Missing argument`),
                U(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              W(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new uD(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new uD(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new sD(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              W(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              W(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (uD = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Z();
        referencedOuterFields = new Z();
      }),
      (dD = class e extends tD {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        predicate;
        inputGroup;
        getHash() {
          return q(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new YE(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Rf(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Xf(n[t] ?? null));
        }
      }),
      (fD = class e extends tD {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return q(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return Q.estimate(1, e ? 100 * ZE : 50 * ZE);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, jf()),
            i = jf(),
            a = [];
          for (let n of r) {
            let r = Nf(i);
            r && (yield r);
            let o = new QE();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new $E(n, a);
        }
      }),
      (pD = class e extends tD {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return q(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Z(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new YE(new JE(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Lf({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (mD = class e extends tD {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return q(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return Q.estimate(1, 200 * ZE);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(jf()),
            r = jf(),
            i = [];
          for (let a of n) {
            let n = Nf(r);
            n && (yield n);
            let o = new QE();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new $E(t, i);
        }
      }),
      (hD = class e extends tD {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return q(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Z(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new YE(new JE(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Lf({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (gD = class e extends aD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Lf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Xf(n) && Xf(r) };
        }
      }),
      (_D = class extends aD {
        constructor(e, t) {
          let n = new Z(),
            r = new Z();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return q(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (vD = { type: 0 }),
      (yD = class e extends aD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Lf({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: NE.contains(n, r, vD) };
        }
      }),
      (bD = { type: 0 }),
      (xD = class e extends aD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Lf({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: NE.endsWith(n, r, bD) };
        }
      }),
      (SD = class e extends aD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Lf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: NE.equal(n, r, iD) };
        }
      }),
      (CD = class e extends aD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Lf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: NE.greaterThan(n, r, iD) };
        }
      }),
      (wD = class e extends aD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Lf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: NE.greaterThanOrEqual(n, r, iD) };
        }
      }),
      (TD = class e extends aD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Lf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: NE.lessThan(n, r, iD) };
        }
      }),
      (ED = class e extends aD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Lf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: NE.lessThanOrEqual(n, r, iD) };
        }
      }),
      (DD = class e extends aD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Lf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !NE.equal(n, r, iD) };
        }
      }),
      (OD = class e extends aD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Lf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Xf(n) || Xf(r) };
        }
      }),
      (kD = { type: 0 }),
      (AD = class e extends aD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Lf({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: NE.startsWith(n, r, kD) };
        }
      }),
      (jD = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof dD) {
            if (e.predicate instanceof gD) {
              let n = new pD(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof OD) {
              let n = new hD(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof mD)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new fD(n, Vp(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof dD) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof mD)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof SD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof _D &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = Vp(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new fD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof DD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof _D &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = Vp(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new fD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof TD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof _D &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Vp(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new fD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ED &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof _D &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Vp(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new fD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof CD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof _D &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Vp(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new fD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof wD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof _D &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Vp(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new fD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof yD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof _D &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = Vp(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new fD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof AD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof _D &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = Vp(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new fD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof xD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof _D &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = Vp(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new fD(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (MD = class {
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        id;
        relational;
        nodes = [];
        winners = new Map();
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new ND();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          U(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (ND = class {
        node;
        cost = new Q(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (PD = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (FD = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new MD(Hp(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new PD(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            U(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (ID = class e extends tD {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        getHash() {
          return q(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Z();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Z(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new YE(new JE(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return Q.max(Q.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new $E(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new QE();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Lf({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof SD) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new $E(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new QE();
              (n.merge(i),
                n.merge(a),
                Xf(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (LD = class e extends tD {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        limit;
        ordering;
        inputGroup;
        getHash() {
          return q(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new YE(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* Lf({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = lp(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (RD = class e extends tD {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        offset;
        ordering;
        inputGroup;
        getHash() {
          return q(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new YE(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* Lf({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = lp(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (zD = class e extends aD {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return q(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Z(),
            t = Object.values(this.namedFields);
          for (let n of t) et(n.collection) || e.add(n);
          return new YE(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new QE();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (BD = class e extends aD {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            U(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return q(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return NE.cast(n, this.definition);
        }
      }),
      (VD = class e extends aD {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          return q(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Z();
          return (et(this.field.collection) || e.add(this.field), new YE(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new QE();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (HD = { type: 0 }),
      (UD = class e extends aD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Lf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: NE.in(n, r, HD) };
        }
      }),
      (WD = { type: 1 }),
      (GD = class e extends aD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return q(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Lf({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: NE.indexOf(n, r, WD) };
        }
      }),
      (KD = class extends Error {}),
      (qD = class e extends aD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        getHash() {
          return q(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Lf({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = Wp(n),
            a = Wp(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (JD = class e extends aD {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return q(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: NE.length(n) };
        }
      }),
      (YD = class e extends aD {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !Xf(yield* this.input.evaluate(e, t)) };
        }
      }),
      (XD = { type: 0 }),
      (ZD = class e extends aD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Lf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !NE.in(n, r, XD) };
        }
      }),
      (QD = class extends aD {
        constructor(e, t) {
          U(e.name !== VE, `Invalid field name`);
          let n = new Z(),
            r = new Z();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        field;
        isOuterField;
        definition;
        getHash() {
          return q(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (U(e, `Context must exist`), e.getValue(this.field))
            : (U(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      ($D = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new mD(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new fD(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new ID(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof _D && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof ID && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new dD(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new rD(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof rD &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new LD(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new RD(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof _D) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new QD(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new _D(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof YD)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof SD) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof DD) return this.newScalarEquals(e.left, e.right);
          if (e instanceof TD) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof ED) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof CD) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof wD) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof gD) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof OD) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new YD(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof _D && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof _D && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof _D && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof _D && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new gD(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof _D && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof _D && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof _D && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof _D && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new OD(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof QD;
          if (t instanceof QD && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new SD(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof QD;
          if (t instanceof QD && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new DD(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof QD;
          if (t instanceof QD && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new TD(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof QD;
          if (t instanceof QD && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new ED(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof QD;
          if (t instanceof QD && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new CD(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof QD;
          if (t instanceof QD && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new wD(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new UD(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new ZD(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new sD(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new cD(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new yD(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new AD(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new xD(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new JD(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new GD(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new zD(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new VD(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new qD(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new BD(e, t);
          return this.finishScalar(n);
        }
      }),
      (eO = class extends tD {}),
      (tO = class e extends eO {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        fields;
        resolver;
        inputGroup;
        getHash() {
          return q(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Z();
          return new YE(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * ZE).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          U(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            U(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Z()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) Gp(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                U(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new QE();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (U(s, `Item not found`), U(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (nO = { type: 0 }),
      (rO = class e extends eO {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        ordering;
        inputGroup;
        getHash() {
          return q(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== VE && (et(e.collection) || t.add(e));
          return new YE(new JE(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new Q(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === VE) {
                let r = n.collection;
                U(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                U(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                U(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!NE.equal(a, o, nO)) {
                if (tt(a) || NE.lessThan(a, o, nO)) return i ? -1 : 1;
                if (tt(o) || NE.greaterThan(a, o, nO)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (iO = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new FD();
        normalizer = new $D(this.memo);
        explorer = new jD(this.normalizer);
        optimize(e) {
          let t = new lD(this.normalizer, this.query, this.locale).build(),
            n = Nf(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (U(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new tO(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new rO(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (aO = kf(`query-engine`)),
      (oO = class {
        async evalQuery(e, t, n, r) {
          aO.enabled &&
            aO.debug(`Query:
${im(e)}`);
          let i = new BE(e, t, r),
            a = new iO(e, t, i),
            o = Nf(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = ot(s) ? await s : s,
            u = Nf(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = Nf(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(Lf(a, r)));
          }
          let h = If(Rf(m, r), r);
          return n ? [ot(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new BE(t, n, r);
          return If(
            Rf(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return Lf(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (sO = Cy.QueryCache),
      (cO = class {
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e), (this.maxSize = t));
        }
        queryEngine;
        maxSize;
        cache = new Map();
        serializedCache = Ey === void 0 ? void 0 : new Map();
        clear() {
          (this.cache.clear(), this.serializedCache?.clear());
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.value.state !== `pending` &&
                (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t, n) {
          let r = sm(e, t),
            i = this.cache.get(r);
          if (i) {
            let a = Ap(n) ?? `user-visible`,
              o = Ap(i.priority);
            if (o === void 0 && n !== void 0 && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, n));
            if (o !== void 0 && Bn(a, o) && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, a));
            if (
              (this.cache.delete(r),
              this.cache.set(r, i),
              Ey !== void 0 &&
                this.serializedCache !== void 0 &&
                !Cp(r) &&
                i.value.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(r);
              e !== void 0 && Ey.set(sO, r, e);
            }
            return i.value;
          }
          let a = new ry(() => {
            let i = Cp(r),
              a = i ? void 0 : hn(sO, r);
            if (a)
              try {
                return this.queryEngine.resolveSerializableQueryResult(a, e, t);
              } catch (e) {
                pn(e, r);
              }
            return Ey !== void 0 && !i
              ? this.queryEngine
                  .serializeableQuery(e, t, n)
                  .then(([e, t]) => (this.serializedCache?.set(r, t), Ey.set(sO, r, t), e))
              : this.queryEngine.query(e, t, n);
          });
          return (this.cache.set(r, { value: a, priority: n }), this.prune(), a);
        }
      }),
      (lO = new cO(new oO())),
      (uO = `style[data-framer-breakpoint-css]`),
      (dO = `page`),
      (fO = Symbol(`cycle`)),
      (hO = (() => {
        let e = a(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (gO = (e) =>
        g.forwardRef((n, r) => {
          let {
              flowEffectEnabled: i,
              flowEffectTransition: a,
              isNestedFlowEffect: o,
              transition: s,
              ...c
            } = n,
            l = t(() => (a ? { default: s, layout: a } : s), [s, a]);
          if (!i) return _(e, { ...c, ref: r, transition: s });
          let u = _(e, { ...c, ref: r });
          return (
            a && (u = _(ke, { transition: l, children: u })),
            o || (u = _(Be, { children: u })),
            u
          );
        })),
      (_O = 1e4),
      (vO = `u_`),
      (yO = new Set([`rgba8`, `r8`, `rg16f`, `rgba16f`, `rgba32f`])),
      ($ = {
        time: { name: `u_time`, glslType: `float` },
        resolution: { name: `u_resolution`, glslType: `vec2` },
        deltaTime: { name: `u_deltaTime`, glslType: `float` },
        pixelRatio: { name: `u_pixelRatio`, glslType: `float` },
        mousePosition: { name: `u_mousePosition`, glslType: `vec4` },
        mousePointerDown: { name: `u_mousePointerDown`, glslType: `float` },
        mouseHover: { name: `u_mouseHover`, glslType: `float` },
      }),
      (bO = `webglcontextlost`),
      (xO = () => {}),
      (SO = class {
        gl;
        canvas;
        contextLostHandler;
        disposed = !1;
        pixelRatio = f === void 0 ? 1 : f.devicePixelRatio;
        resolutionScale;
        lastBufferWidth = 0;
        lastBufferHeight = 0;
        onContextLost;
        resources;
        textures = new Map();
        get customTextureUnitBase() {
          return this.resources.bufferPasses.length;
        }
        constructor(e, t, n, r, i = xO, a = []) {
          ((this.resolutionScale = r), (this.canvas = e), (this.onContextLost = i));
          let o = e.getContext(`webgl2`, {
            alpha: !0,
            premultipliedAlpha: !1,
            antialias: !1,
            powerPreference: `default`,
            preserveDrawingBuffer: e instanceof OffscreenCanvas,
          });
          if (!o) throw Error(`WebGL2 not supported`);
          ((this.gl = o),
            (this.contextLostHandler = (e) => {
              (e.preventDefault(), this.dispose(), this.onContextLost?.());
            }),
            e.addEventListener(bO, this.contextLostHandler));
          try {
            this.resources = this.buildResources(t, n, a);
          } catch (t) {
            throw (e.removeEventListener(bO, this.contextLostHandler), t);
          }
          let { mainPass: s, bufferPasses: c } = this.resources;
          (o.clearColor(0, 0, 0, 0),
            c.length === 0 && (o.useProgram(s.program), o.bindVertexArray(s.vao)));
        }
        buildResources(e, t, n) {
          let { gl: r, canvas: i } = this,
            a = n.find((e) => eh(e.format));
          if (a && !r.getExtension(`EXT_color_buffer_float`))
            throw Error(
              `Shader buffer "${a.uniformName}" requested format "${a.format}" but the EXT_color_buffer_float extension is not available.`
            );
          let o = !a || !!r.getExtension(`OES_texture_float_linear`),
            s = this.compileShader(r.VERTEX_SHADER, e),
            c,
            l = [],
            u,
            d,
            f,
            p = [];
          try {
            c = this.linkFragmentProgram(s, t);
            for (let e of n) l.push([this.linkFragmentProgram(s, e.fragment), e]);
            ((u = qm(r, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]))),
              (d = qm(r, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]))),
              (f = this.buildPassState(c, n, u, d)));
            for (let e = 0; e < l.length; e++) {
              let t = l[e];
              if (!t) continue;
              let [r, i] = t;
              p.push(this.buildBufferPass(r, i, n, o, e, u, d));
            }
            return (
              this.allocateBufferPassStorages(p, i.width, i.height),
              this.bindStaticSamplerUnits(f, p),
              { positionBuffer: u, texCoordBuffer: d, mainPass: f, bufferPasses: p }
            );
          } catch (e) {
            for (let e of p) this.disposeBufferPass(e);
            for (let e = p.length; e < l.length; e++) {
              let t = l[e];
              t && r.deleteProgram(t[0]);
            }
            throw (
              f ? this.disposePass(f) : c && r.deleteProgram(c),
              d && r.deleteBuffer(d),
              u && r.deleteBuffer(u),
              e
            );
          } finally {
            r.deleteShader(s);
          }
        }
        render(e, t, n, r) {
          if (!this.disposed) {
            if (this.resources.bufferPasses.length === 0) {
              this.renderSinglePass(e, t, n, r);
              return;
            }
            this.renderMultiPass(e, t, n, r);
          }
        }
        renderSinglePass(e, t, n, r) {
          let {
            gl: i,
            canvas: a,
            resources: { mainPass: o },
          } = this;
          (this.updatePassBuiltIns(o, e, t, r, a.width, a.height),
            this.applyCustomUniforms(o, n, this.customTextureUnitBase),
            i.clear(i.COLOR_BUFFER_BIT),
            i.drawArrays(i.TRIANGLES, 0, 6));
        }
        renderMultiPass(e, t, n, r) {
          let {
            gl: i,
            canvas: a,
            resources: { mainPass: o, bufferPasses: s },
            customTextureUnitBase: c,
          } = this;
          for (let e of s)
            (i.activeTexture(i.TEXTURE0 + e.textureUnit),
              i.bindTexture(i.TEXTURE_2D, e.textures[+(e.writeIdx === 0)]));
          for (let a of s)
            (i.useProgram(a.program),
              i.bindVertexArray(a.vao),
              this.updatePassBuiltIns(a, e, t, r, a.width, a.height),
              this.applyCustomUniforms(a, n, c),
              i.bindFramebuffer(i.FRAMEBUFFER, a.fbos[a.writeIdx]),
              i.viewport(0, 0, a.width, a.height),
              i.clear(i.COLOR_BUFFER_BIT),
              i.drawArrays(i.TRIANGLES, 0, 6),
              i.activeTexture(i.TEXTURE0 + a.textureUnit),
              i.bindTexture(i.TEXTURE_2D, a.textures[a.writeIdx]),
              (a.writeIdx = +(a.writeIdx === 0)));
          (i.useProgram(o.program),
            i.bindVertexArray(o.vao),
            this.updatePassBuiltIns(o, e, t, r, a.width, a.height),
            this.applyCustomUniforms(o, n, c),
            i.bindFramebuffer(i.FRAMEBUFFER, null),
            i.viewport(0, 0, a.width, a.height),
            i.clear(i.COLOR_BUFFER_BIT),
            i.drawArrays(i.TRIANGLES, 0, 6));
        }
        resize() {
          if (this.disposed) return;
          let { canvas: e } = this;
          if (e instanceof OffscreenCanvas)
            throw Error(`resize() is not supported for OffscreenCanvas.`);
          let t = e.offsetWidth,
            n = e.offsetHeight,
            r = f.devicePixelRatio,
            i = Math.max(r * this.resolutionScale, 1);
          this.pixelRatio = i;
          let a = t * i,
            o = n * i;
          if (!(a === this.lastBufferWidth && o === this.lastBufferHeight)) {
            ((this.lastBufferWidth = a),
              (this.lastBufferHeight = o),
              (e.width = a),
              (e.height = o),
              this.gl.viewport(0, 0, a, o));
            try {
              this.allocateBufferPassStorages(this.resources.bufferPasses, a, o);
            } catch (e) {
              throw (this.dispose(), e);
            }
          }
        }
        resizeOffscreenCanvas(e, t, n) {
          if (!this.disposed) {
            (n !== void 0 && (this.pixelRatio = n), this.gl.viewport(0, 0, e, t));
            try {
              this.allocateBufferPassStorages(this.resources.bufferPasses, e, t);
            } catch (e) {
              throw (this.dispose(), e);
            }
          }
        }
        finish() {
          this.disposed || this.gl.finish();
        }
        dispose() {
          if (this.disposed) return;
          ((this.disposed = !0), this.canvas.removeEventListener(bO, this.contextLostHandler));
          for (let [, e] of this.textures) e.source && !Um(e.source) && Wm(e.source);
          if (this.gl.isContextLost()) return;
          let { gl: e, resources: t } = this;
          for (let e of t.bufferPasses) this.disposeBufferPass(e);
          (this.disposePass(t.mainPass),
            e.deleteBuffer(t.positionBuffer),
            e.deleteBuffer(t.texCoordBuffer));
          for (let [, t] of this.textures) e.deleteTexture(t.texture);
          this.textures.clear();
        }
        disposePass(e) {
          let { gl: t } = this;
          (t.deleteVertexArray(e.vao), t.deleteProgram(e.program));
        }
        disposeBufferPass(e) {
          let { gl: t } = this;
          this.disposePass(e);
          for (let n of e.textures) t.deleteTexture(n);
          for (let n of e.fbos) t.deleteFramebuffer(n);
        }
        buildPassState(e, t, n, r) {
          let { gl: i } = this,
            a = i.createVertexArray();
          if (!a) throw Error(`Failed to create vertex array object`);
          (i.bindVertexArray(a), Jm(i, e, n, r), i.bindVertexArray(null));
          let o = Ym(i, e),
            s = new Map();
          for (let n of t) s.set(n.uniformName, i.getUniformLocation(e, n.uniformName));
          return {
            program: e,
            vao: a,
            builtInLocations: o,
            customLocations: new Map(),
            bufferSamplerLocations: s,
          };
        }
        buildBufferPass(e, t, n, r, i, a, o) {
          let s = this.buildPassState(e, n, a, o),
            { gl: c } = this,
            l = $m(c, t.format),
            u = eh(t.format) && !r ? c.NEAREST : c.LINEAR,
            d = Xm(c, u),
            f = Xm(c, u),
            p = Zm(c, d),
            m = Zm(c, f);
          return (
            c.bindFramebuffer(c.FRAMEBUFFER, null),
            c.bindTexture(c.TEXTURE_2D, null),
            {
              ...s,
              uniformName: t.uniformName,
              resolutionScale: t.resolutionScale,
              format: t.format,
              internalFormat: l.internalFormat,
              uploadFormat: l.uploadFormat,
              pixelType: l.pixelType,
              width: 0,
              height: 0,
              textures: [d, f],
              fbos: [p, m],
              writeIdx: 0,
              textureUnit: i,
            }
          );
        }
        bindStaticSamplerUnits(e, t) {
          let { gl: n } = this,
            r = [e, ...t];
          for (let e of r) {
            n.useProgram(e.program);
            for (let r of t) {
              let t = e.bufferSamplerLocations.get(r.uniformName);
              t && n.uniform1i(t, r.textureUnit);
            }
          }
        }
        allocateBufferPassStorages(e, t, n) {
          for (let r of e) this.allocateBufferPassStorage(r, t, n);
        }
        allocateBufferPassStorage(e, t, n) {
          let { gl: r } = this,
            i = Math.max(1, Math.floor(t * e.resolutionScale)),
            a = Math.max(1, Math.floor(n * e.resolutionScale));
          if (i === e.width && a === e.height) return;
          ((e.width = i), (e.height = a));
          for (let t of e.textures)
            (r.bindTexture(r.TEXTURE_2D, t),
              r.texImage2D(
                r.TEXTURE_2D,
                0,
                e.internalFormat,
                i,
                a,
                0,
                e.uploadFormat,
                e.pixelType,
                null
              ));
          r.bindTexture(r.TEXTURE_2D, null);
          let [o, s, c, l] = r.getParameter(r.VIEWPORT);
          for (let t of e.fbos)
            (r.bindFramebuffer(r.FRAMEBUFFER, t),
              Qm(r, e.uniformName, e.format),
              r.viewport(0, 0, i, a),
              r.clear(r.COLOR_BUFFER_BIT));
          (r.bindFramebuffer(r.FRAMEBUFFER, null), r.viewport(o, s, c, l));
        }
        compileShader(e, t) {
          let { gl: n } = this,
            r = n.createShader(e);
          if (!r) throw Error(`Failed to create shader`);
          if (
            (n.shaderSource(r, t), n.compileShader(r), !n.getShaderParameter(r, n.COMPILE_STATUS))
          ) {
            let t = n.getShaderInfoLog(r);
            n.deleteShader(r);
            let i = e === n.VERTEX_SHADER ? `Vertex` : `Fragment`;
            throw Error(`${i} shader compilation failed: ${t}`);
          }
          return r;
        }
        linkFragmentProgram(e, t) {
          let { gl: n } = this,
            r = this.compileShader(n.FRAGMENT_SHADER, t);
          try {
            let t = n.createProgram();
            if (!t) throw Error(`Failed to create program`);
            if (
              (n.attachShader(t, e),
              n.attachShader(t, r),
              n.linkProgram(t),
              !n.getProgramParameter(t, n.LINK_STATUS))
            ) {
              let e = n.getProgramInfoLog(t);
              throw (n.deleteProgram(t), Error(`Program linking failed: ${e}`));
            }
            return t;
          } finally {
            n.deleteShader(r);
          }
        }
        setUniform(e, t) {
          if (e !== null)
            switch (t.type) {
              case `boolean`:
                this.gl.uniform1f(e, +!!t.value);
                break;
              case `float`:
                this.gl.uniform1f(e, t.value);
                break;
              case `int`:
                this.gl.uniform1i(e, t.value);
                break;
              case `vec2`:
                this.gl.uniform2fv(e, t.value);
                break;
              case `vec4`:
                this.gl.uniform4fv(e, t.value);
                break;
              case `vec4[]`:
                this.gl.uniform4fv(e, t.value.flat());
                break;
            }
        }
        bindTexture(e, t, n) {
          let { gl: r, textures: i } = this,
            a = i.get(e),
            o = !a;
          if (o) {
            let t = r.createTexture();
            if (!t) return;
            ((a = { texture: t, source: null }), i.set(e, a));
          }
          if (a) {
            if ((r.activeTexture(r.TEXTURE0 + n), r.bindTexture(r.TEXTURE_2D, a.texture), Um(t))) {
              this.uploadVideoFrame(a, t, o);
              return;
            }
            (o || a.source !== t) &&
              (a.source && !Um(a.source) && Wm(a.source),
              (a.source = t),
              r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
              r.generateMipmap(r.TEXTURE_2D),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_LINEAR),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR));
          }
        }
        uploadVideoFrame(e, t, n) {
          let { gl: r } = this;
          if (t.readyState < t.HAVE_CURRENT_DATA || t.seeking) return;
          let { videoWidth: i, videoHeight: a, currentTime: o } = t;
          if (!(i === 0 || a === 0)) {
            if (
              (e.source && e.source !== t && !Um(e.source) && Wm(e.source),
              n || e.source !== t || e.videoWidth !== i || e.videoHeight !== a)
            ) {
              (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR),
                r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t),
                (e.source = t),
                (e.videoWidth = i),
                (e.videoHeight = a),
                (e.videoTime = o));
              return;
            }
            e.videoTime !== o &&
              (r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, r.RGBA, r.UNSIGNED_BYTE, t),
              (e.videoTime = o));
          }
        }
        applyCustomUniforms(e, t, n) {
          if (!t) return;
          let { gl: r } = this,
            i = n;
          for (let n in t) {
            let a = t[n];
            if (!a) continue;
            let o = e.customLocations.get(n);
            (o === void 0 &&
              ((o = r.getUniformLocation(e.program, n)), e.customLocations.set(n, o)),
              a.type === `sampler2D`
                ? (this.bindTexture(n, a.value, i), o !== null && r.uniform1i(o, i), i++)
                : this.setUniform(o, a));
          }
        }
        updatePassBuiltIns(e, t, n, r, i, a) {
          let { gl: o, pixelRatio: s } = this,
            c = e.builtInLocations;
          (c[$.time.name] !== null && o.uniform1f(c[$.time.name], t),
            c[$.resolution.name] !== null && o.uniform2f(c[$.resolution.name], i, a),
            c[$.deltaTime.name] !== null && o.uniform1f(c[$.deltaTime.name], n),
            c[$.pixelRatio.name] !== null && o.uniform1f(c[$.pixelRatio.name], s),
            c[$.mousePosition.name] !== null && o.uniform4fv(c[$.mousePosition.name], r.position),
            c[$.mousePointerDown.name] !== null &&
              o.uniform1f(c[$.mousePointerDown.name], r.pointerDown),
            c[$.mouseHover.name] !== null && o.uniform1f(c[$.mouseHover.name], r.hover));
        }
      }),
      (CO = `_heightmap`),
      (wO = `_length`),
      (TO = `_buffer`),
      (EO = /\W/gu),
      (DO = `#version 300 es`),
      (OO = `precision highp float;`),
      (kO = `in vec2 v_uv;`),
      (AO = `out vec4 fragColor;`),
      (jO = 0.5),
      (MO = `rgba8`),
      (NO = `__framer_shaderConfig__`),
      (PO = x(function ({ src: e }) {
        return e
          ? _(lo, { image: { src: e, fit: `fill`, loading: `lazy` }, draggable: !1, alt: `` })
          : null;
      })),
      (FO = 30),
      (IO = 20),
      (LO = class {
        loaders = new Map();
        generated = new Map();
        load(e, t) {
          let n = this.loaders.get(e);
          if (n) return n;
          let r = t();
          return (
            r.catch(() => {
              this.loaders.get(e) === r && this.loaders.delete(e);
            }),
            bh(this.loaders, FO),
            this.loaders.set(e, r),
            r
          );
        }
        generate(e, t) {
          let n = this.generated.get(e);
          if (n) return n;
          let r = t();
          if (r) return (bh(this.generated, IO), this.generated.set(e, r), r);
        }
        clear() {
          (this.loaders.clear(), this.generated.clear());
        }
        get loadedSize() {
          return this.loaders.size;
        }
        get generatedSize() {
          return this.generated.size;
        }
      }),
      (RO = new LO()),
      (zO = 1024),
      (BO = 24),
      (VO = class {
        byOwner = new Map();
        acquire(e, t) {
          let n = this.byOwner.get(e);
          n || ((n = new Map()), this.byOwner.set(e, n));
          let r = n.get(t);
          if (r) return r.promise;
          if (this.size >= BO)
            return Promise.reject(
              Error(`Video decoder pool is full (max ${BO}); "${t}" falls back.`)
            );
          let i = new AbortController(),
            a = Km(t, i.signal);
          return (
            a.catch(() => {
              n.get(t)?.promise === a && n.delete(t);
            }),
            n.set(t, { promise: a, controller: i }),
            a
          );
        }
        keepOnly(e, t) {
          let n = this.byOwner.get(e);
          if (n) {
            for (let [e, r] of n) t.has(e) || (n.delete(e), Dh(r));
            n.size === 0 && this.byOwner.delete(e);
          }
        }
        releaseAll(e) {
          let t = this.byOwner.get(e);
          if (t) {
            for (let e of t.values()) Dh(e);
            this.byOwner.delete(e);
          }
        }
        get size() {
          let e = 0;
          for (let t of this.byOwner.values()) e += t.size;
          return e;
        }
      }),
      (HO = new VO()),
      (UO = { position: `absolute`, inset: 0, width: `100%`, height: `100%` }),
      (WO = 0.001),
      (GO = -999),
      (KO = { position: [GO, GO, 0, 0], pointerDown: 0, hover: 0 }),
      (qO = [`.mp4`, `.m4v`]),
      (JO = `.svg`),
      (YO = 4096),
      (XO = {
        display: `block`,
        width: `100%`,
        height: `100%`,
        objectFit: `cover`,
        position: `absolute`,
        inset: 0,
      }),
      (ZO = { position: `absolute`, inset: 0 }),
      (QO = x(function ({ src: e, hidden: t = !1, onDisplaySrcChange: n }) {
        let [i, a] = d(e),
          [o, s] = d(void 0),
          [l, u] = d(i),
          f = r(null);
        i !== l && (s(l), u(i));
        let p = r(n);
        M(() => {
          p.current = n;
        }, [n]);
        let h = r(!0);
        return (
          M(() => {
            if (h.current) {
              h.current = !1;
              return;
            }
            o || p.current?.();
          }, [i]),
          c(() => {
            if (e === i) return;
            let t = !0;
            if (e) {
              let n = new Image();
              n.src = e;
              let r = () => (t ? m(() => a(e)) : void 0);
              typeof n.decode == `function` ? n.decode().then(r).catch(r) : (n.onload = r);
            } else m(() => a(void 0));
            return () => {
              t = !1;
            };
          }, [e, i]),
          c(() => {
            let e = f.current;
            if (!e || !o) return;
            let t = !1,
              n = e.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 300,
                easing: `ease-in-out`,
                fill: `forwards`,
              });
            return (
              (n.onfinish = () => {
                t || (m(() => s(void 0)), p.current?.());
              }),
              () => {
                ((t = !0), n.cancel());
              }
            );
          }, [o]),
          i
            ? T(`div`, {
                style: { ...UO, opacity: +!t, pointerEvents: t ? `none` : void 0 },
                children: [
                  o &&
                    _(
                      `img`,
                      { src: o, decoding: `async`, style: XO, draggable: !1, alt: `` },
                      `prev-${o}`
                    ),
                  _(
                    `div`,
                    {
                      ref: o ? f : void 0,
                      style: ZO,
                      children: _(`img`, {
                        src: i,
                        style: XO,
                        decoding: `async`,
                        draggable: !1,
                        alt: ``,
                      }),
                    },
                    i
                  ),
                ],
              })
            : null
        );
      })),
      ($O = `#version 300 es
precision highp float;

in vec2 a_position;
in vec2 a_texCoord;

out vec2 v_uv;

void main() {
    v_uv = a_texCoord;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`),
      (ek = `#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 fragColor;

void main() {
    fragColor = vec4(0.0);
}
`),
      (tk = { noSlot: 0, singleFrame: 1, animate: 2 }),
      (nk = a(null)),
      (rk = 300),
      (ik = { display: `block`, width: `100%`, height: `100%` }),
      (ak = 250),
      (ok = x(function ({
        mode: e,
        fallbackImage: t,
        skipInitialFallback: n,
        vertexShader: i,
        fragmentShader: a,
        animated: o,
        resolutionScale: s,
        uniforms: l,
        onError: u,
        onReady: p,
        singleFrame: h,
        onContextLost: g,
        onUniformResolutionSucceeded: v,
        onUniformResolutionFailed: y,
        heightmapSource: b,
        mouseDataRef: x,
        buffers: S,
      }) {
        let [w, E] = d(!1),
          [D, k] = d(!1),
          A = e === `progressive`,
          j = !!t,
          N = !!(n && j),
          ee = A && j && !N,
          P = Xh(ee),
          F = r(p);
        M(() => {
          F.current = p;
        }, [p]);
        let I = C(() => {
          (m(() => E(!0)), F.current?.());
        }, []);
        c(() => {
          if (!A || !w || !P) return;
          let e = f.setTimeout(() => {
            m(() => k(!0));
          }, ak);
          return () => {
            clearTimeout(e);
          };
        }, [A, P, w]);
        let te = ee && !P,
          ne = h || te || (A && !N && !D),
          re = j && !N && (!P || !w);
        return T(O, {
          children: [
            _(`div`, {
              style: { ...UO, opacity: +!te },
              children: _($h, {
                vertexShader: i,
                fragmentShader: a,
                animated: o,
                resolutionScale: s,
                singleFrame: ne,
                uniforms: l,
                onError: u,
                onReady: I,
                onContextLost: g,
                onUniformResolutionSucceeded: v,
                onUniformResolutionFailed: y,
                heightmapSource: b,
                mouseDataRef: x,
                buffers: S,
              }),
            }),
            t &&
              !N &&
              _(`div`, {
                style: {
                  ...UO,
                  opacity: +!!re,
                  transition: `opacity 200ms ease-in-out`,
                  pointerEvents: `none`,
                },
                children: _(PO, { src: t }),
              }),
          ],
        });
      })),
      (lk = { duration: 0 }),
      (uk = b(function (
        {
          mode: e = `instant`,
          fallbackImage: t,
          skipInitialFallback: n,
          placeholder: r,
          style: i,
          width: a,
          height: o,
          vertexShader: s,
          fragmentShader: l,
          animated: u,
          uniforms: f,
          onError: p,
          onReady: h,
          resolutionScale: g,
          poolId: v,
          isSelected: y = !1,
          isMultiSelected: b = !1,
          isPreviewActive: x = !1,
          heightmapSource: S,
          mouse: w,
          buffers: E,
          ...D
        },
        O
      ) {
        let k = Ws(O),
          j = ei(),
          N = Y.current() === Y.preview && j === `preview`,
          ee = !!(t && (n || N)),
          P = gu(),
          F = ag(k, P ? void 0 : w),
          [I, te] = d(ee);
        MC(
          k,
          C((e) => {
            m(() => te(e.isIntersecting));
          }, []),
          { threshold: 0, enabled: !0 }
        );
        let ne = A(),
          re = sg(v ?? ne, y, I);
        c(() => {
          performance.mark?.(`shader_register`);
        }, []);
        let {
            isFallbackOnly: L,
            effectiveAnimated: ie,
            effectiveSingleFrame: ae,
            effectiveMode: oe,
            shouldSkipFallbackOverlay: se,
            onContextLost: ce,
            onUniformResolutionSucceeded: le,
            onUniformResolutionFailed: ue,
          } = Yh(re, y, b, I, e, u, ee, x),
          [de, fe] = d(!1);
        M(() => {
          L && m(() => fe(!1));
        }, [L]);
        let pe = C(() => {
            (m(() => fe(!0)), h?.());
          }, [h]),
          R = {
            vertexShader: s,
            fragmentShader: l,
            uniforms: f,
            resolutionScale: g,
            onError: p,
            onContextLost: ce,
            onUniformResolutionSucceeded: le,
            onUniformResolutionFailed: ue,
            heightmapSource: S,
            buffers: E,
          },
          me = { style: i, width: a, height: o, ...D };
        if (P) {
          let e = !L && (ee || de);
          return T(dk, {
            ref: k,
            ...me,
            children: [
              !L &&
                _(ok, {
                  mode: oe,
                  skipInitialFallback: se,
                  onReady: pe,
                  ...R,
                  animated: ie,
                  singleFrame: ae,
                  mouseDataRef: F,
                }),
              _(QO, { src: t, hidden: e }),
              L && !t && r,
            ],
          });
        }
        return L
          ? _(dk, { ref: k, ...me, children: se && !I ? null : _(PO, { src: t }) })
          : _(dk, {
              ref: k,
              ...me,
              children: _(ok, {
                mode: oe,
                fallbackImage: t,
                skipInitialFallback: se,
                onReady: h,
                ...R,
                animated: ie,
                singleFrame: ae,
                mouseDataRef: F,
              }),
            });
      })),
      (dk = b(function ({ children: e, style: t, ...n }, r) {
        return _(TC, {
          ref: r,
          __fromCanvasComponent: !0,
          style: { borderRadius: `inherit`, cornerShape: `inherit`, ...t, overflow: `hidden` },
          ...n,
          componentType: `Shader`,
          children: e,
        });
      })),
      (fk = new Set([
        `visibleVariantId`,
        `obscuredVariantId`,
        `threshold`,
        `animateOnce`,
        `variantAppearEffectEnabled`,
        `targets`,
        `exitTarget`,
        `scrollDirection`,
      ])),
      (pk = { inputRange: [], outputRange: [] }),
      (mk = (e) =>
        g.forwardRef((t, n) => {
          if (Y.current() === Y.canvas) return _(e, { ...t, ref: n });
          let [r, i] = el(t, fk),
            {
              visibleVariantId: a,
              obscuredVariantId: o,
              animateOnce: s,
              threshold: c,
              variantAppearEffectEnabled: l,
              targets: u,
              exitTarget: d,
              scrollDirection: f,
            } = r,
            [p, m] = g.useState(o),
            h = g.useRef(!1),
            v = Ws(n);
          Js(
            v,
            (e) => {
              r.targets ||
                r.scrollDirection ||
                (s && h.current === !0) ||
                (h.current !== e &&
                  ((h.current = e),
                  g.startTransition(() => {
                    m(e ? a : o);
                  })));
            },
            { enabled: l, animateOnce: s, threshold: { y: c } }
          );
          let y = Nt(),
            b = g.useRef(y);
          return (
            g.useEffect(() => {
              if (f || !u) return;
              b.current !== y && ((b.current = y), g.startTransition(() => m(o)));
              let e = {},
                t;
              return P((n, { y: r }) => {
                if (!u[0] || (u[0].ref && !u[0].ref.current)) return;
                let { inputRange: i, outputRange: a } = cg(u, (c ?? 0) * r.containerLength, d);
                if (i.length === 0 || i.length !== a.length) return;
                let o = Math.floor(le(r.current, i, a));
                if (s && e[o]) return;
                e[o] = !0;
                let l = u[o]?.target ?? void 0;
                l !== t &&
                  ((t = l),
                  g.startTransition(() => {
                    m(l);
                  }));
              });
            }, [y, s, c, u, t.variant, f, d]),
            El(f, (e) => g.startTransition(() => m(e)), { enabled: l, repeat: !s }),
            Pt(() => {
              if (!l) return;
              let e = !r.targets && !r.scrollDirection ? r.obscuredVariantId : void 0;
              g.startTransition(() => m(e));
            }),
            !(`variantAppearEffectEnabled` in r) || l === !0
              ? _(e, { ...i, variant: p ?? t.variant, ref: v })
              : _(e, { ...i })
          );
        })),
      (hk = g.createContext(void 0)),
      (gk = () => g.useContext(hk)),
      (_k = {
        Arial: {
          Regular: { selector: `Arial`, weight: void 0 },
          Black: { selector: `Arial-Black`, weight: void 0 },
          Narrow: { selector: `Arial Narrow`, weight: void 0 },
          "Rounded Bold": { selector: `Arial Rounded MT Bold`, weight: void 0 },
        },
        Avenir: {
          Book: { selector: `Avenir`, weight: void 0 },
          Light: { selector: `Avenir-Light`, weight: void 0 },
          Medium: { selector: `Avenir-Medium`, weight: void 0 },
          Heavy: { selector: `Avenir-Heavy`, weight: void 0 },
          Black: { selector: `Avenir-Black`, weight: void 0 },
        },
        "Avenir Next": {
          Regular: { selector: `Avenir Next`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNext-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNext-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNext-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 },
        },
        "Avenir Next Condensed": {
          Regular: { selector: `Avenir Next Condensed`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNextCondensed-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNextCondensed-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNextCondensed-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNextCondensed-Heavy`, weight: void 0 },
        },
        Baskerville: {
          Regular: { selector: `Baskerville`, weight: void 0 },
          "Semi Bold": { selector: `Baskerville-SemiBold`, weight: void 0 },
        },
        "Bodoni 72": {
          Book: { selector: `Bodoni 72`, weight: void 0 },
          Oldstyle: { selector: `Bodoni 72 Oldstyle`, weight: void 0 },
          Smallcaps: { selector: `Bodoni 72 Smallcaps`, weight: void 0 },
        },
        Courier: { Regular: { selector: `Courier`, weight: void 0 } },
        "Courier New": { Regular: { selector: `Courier New`, weight: void 0 } },
        Futura: {
          Medium: { selector: `Futura`, weight: void 0 },
          Condensed: { selector: `Futura-CondensedMedium`, weight: void 0 },
          "Condensed ExtraBold": { selector: `Futura-CondensedExtraBold`, weight: void 0 },
        },
        Georgia: { Regular: { selector: `Georgia`, weight: void 0 } },
        "Gill Sans": {
          Regular: { selector: `Gill Sans`, weight: void 0 },
          Light: { selector: `GillSans-Light`, weight: void 0 },
          SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 },
          UltraBold: { selector: `GillSans-UltraBold`, weight: void 0 },
        },
        Helvetica: {
          Regular: { selector: `Helvetica`, weight: void 0 },
          Light: { selector: `Helvetica-Light`, weight: void 0 },
          Bold: { selector: `Helvetica-Bold`, weight: void 0 },
          Oblique: { selector: `Helvetica-Oblique`, weight: void 0 },
          "Light Oblique": { selector: `Helvetica-LightOblique`, weight: void 0 },
          "Bold Oblique": { selector: `Helvetica-BoldOblique`, weight: void 0 },
        },
        "Helvetica Neue": {
          Regular: { selector: `Helvetica Neue`, weight: void 0 },
          UltraLight: { selector: `HelveticaNeue-UltraLight`, weight: void 0 },
          Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 },
          Light: { selector: `HelveticaNeue-Light`, weight: void 0 },
          Medium: { selector: `HelveticaNeue-Medium`, weight: void 0 },
          Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 },
          Italic: { selector: `HelveticaNeue-Italic`, weight: void 0 },
          "UltraLight Italic": { selector: `HelveticaNeue-UltraLightItalic`, weight: void 0 },
          "Thin Italic": { selector: `HelveticaNeue-ThinItalic`, weight: void 0 },
          "Light Italic": { selector: `HelveticaNeue-LightItalic`, weight: void 0 },
          "Medium Italic": { selector: `HelveticaNeue-MediumItalic`, weight: void 0 },
          "Bold Italic": { selector: `HelveticaNeue-BoldItalic`, weight: void 0 },
          "Condensed Bold": { selector: `HelveticaNeue-CondensedBold`, weight: void 0 },
          "Condensed Black": { selector: `HelveticaNeue-CondensedBlack`, weight: void 0 },
        },
        "Hoefler Text": { Regular: { selector: `Hoefler Text`, weight: void 0 } },
        Impact: { Regular: { selector: `Impact`, weight: void 0 } },
        "Lucida Grande": { Regular: { selector: `Lucida Grande`, weight: void 0 } },
        Menlo: { Regular: { selector: `Menlo`, weight: void 0 } },
        Monaco: { Regular: { selector: `Monaco`, weight: void 0 } },
        Optima: {
          Regular: { selector: `Optima`, weight: void 0 },
          ExtraBlack: { selector: `Optima-ExtraBlack`, weight: void 0 },
        },
        Palatino: { Regular: { selector: `Palatino`, weight: void 0 } },
        "SF Pro Display": {
          Regular: { selector: `__SF-UI-Display-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Black__`, weight: 900 },
          Italic: { selector: `__SF-UI-Display-Italic__`, weight: 400 },
          "Ultralight Italic": { selector: `__SF-UI-Display-Ultralight-Italic__`, weight: 100 },
          "Thin Italic": { selector: `__SF-UI-Display-Thin-Italic__`, weight: 200 },
          "Light Italic": { selector: `__SF-UI-Display-Light-Italic__`, weight: 300 },
          "Medium Italic": { selector: `__SF-UI-Display-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Display-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Display-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Display-Heavy-Italic__`, weight: 800 },
          "Black Italic": { selector: `__SF-UI-Display-Black-Italic__`, weight: 900 },
        },
        "SF Pro Display Condensed": {
          Regular: { selector: `__SF-UI-Display-Condensed-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Condensed-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Condensed-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Condensed-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Condensed-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Condensed-Black__`, weight: 900 },
        },
        "SF Pro Text": {
          Regular: { selector: `__SF-UI-Text-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 },
          Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 },
          "Light Italic": { selector: `__SF-UI-Text-Light-Italic__`, weight: 200 },
          "Medium Italic": { selector: `__SF-UI-Text-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Text-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Text-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Text-Heavy-Italic__`, weight: 800 },
        },
        "SF Pro Text Condensed": {
          Regular: { selector: `__SF-UI-Text-Condensed-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Condensed-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Condensed-Heavy__`, weight: 800 },
        },
        Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } },
        Times: { Regular: { selector: `Times`, weight: void 0 } },
        "Times New Roman": { Regular: { selector: `Times New Roman`, weight: void 0 } },
        Trebuchet: { Regular: { selector: `Trebuchet MS`, weight: void 0 } },
        Verdana: { Regular: { selector: `Verdana`, weight: void 0 } },
      }),
      (vk = {
        "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
        "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
        "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
        "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
        "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
        "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
        "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
        "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
        "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`,
      }),
      (yk = _k),
      (bk = `System Default`),
      (xk = class {
        name = `local`;
        fontFamilies = [];
        byFamilyName = new Map();
        fontAliasBySelector = new Map();
        fontAliases = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.addFontFamily(t), t);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        importFonts() {
          let e = [];
          for (let t of Object.keys(yk)) {
            let n = yk[t];
            if (!n) continue;
            let r = this.createFontFamily(t);
            for (let e of Object.keys(n)) {
              let t = n[e];
              if (!t) continue;
              let { selector: i, weight: a } = t,
                o = { variant: e, selector: i, weight: a, family: r, cssFamilyName: r.name };
              r.fonts.push(o);
            }
            e.push(...r.fonts);
          }
          for (let [e, t] of Object.entries(vk)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: bk, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = ug(i, r),
                a = `__SystemDefault-${i}-${r}__`,
                o = {
                  variant: n,
                  selector: a,
                  style: r,
                  weight: i,
                  family: e,
                  cssFamilyName: e.name,
                };
              (e.fonts.push(o),
                t.set(
                  a,
                  `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`
                ));
            }
          return { fontFamily: e, aliases: t };
        }
        getFontAliasBySelector(e) {
          return this.fontAliasBySelector.get(e) || null;
        }
        getFontSelectorByAlias(e) {
          return this.fontAliases.get(e) || null;
        }
        isFontFamilyAlias(e) {
          return !!(e && /^__.*__$/u.exec(e));
        }
      }),
      (Sk = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`,
      }),
      (Ck = class extends Map {
        _hash = 0;
        get hash() {
          return this._hash;
        }
        set(e, t) {
          return (this._hash++, super.set(e, t));
        }
        delete(e) {
          return (this._hash++, super.delete(e));
        }
        clear() {
          return (this._hash++, super.clear());
        }
      }),
      (Tk = `Variable`),
      (Ek = `BI;`),
      (Dk = class {
        name = `builtIn`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetByKey = new Map();
        importFonts(e) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetByKey.clear());
          let t = [];
          for (let n of e) {
            if (!this.isValidBuiltInFont(n)) continue;
            let { properties: e } = n,
              r = e.font.fontFamily,
              i = this.createFontFamily(r, e.font.foundryName, e.font.fontVersion),
              a = e.font.openTypeData,
              o = e.font.variationAxes,
              s = Array.isArray(o),
              c = s ? `variable` : e.font.fontSubFamily || `regular`,
              l = hg(n),
              u = yg(o),
              d = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: vg(a),
                variationAxes: u,
                category: e.font.fontCategory,
                weight: s ? Cg(u, e.font.faceDescriptors?.weight) : Sg(c),
                style: Tg(c),
                cssFamilyName: gg(r, s),
              };
            (i.fonts.push(d), this.assetByKey.set(n.key, n), t.push(d));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = Sg(e.variant),
                r = Sg(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          let t = wg(e);
          return {
            weight: t === `variable` || t === `variable-italic` ? 400 : Ok[t],
            style: Tg(e),
          };
        }
        getFontBySelector(e) {
          let t = this.parseSelector(e);
          if (!t) return;
          let n = this.getFontFamilyByName(t.name);
          if (n) return n.fonts.find((t) => t.selector === e);
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e, t, n) {
          let r = this.byFamilyName.get(e);
          if (r && r.version === n) return r;
          let i = { source: this.name, name: e, fonts: [], foundryName: t, version: n };
          return (this.addFontFamily(i), i);
        }
        getOpenTypeFeatures(e) {
          U(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return vg(t)
            ? t?.map((e) => {
                if (bg(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        isValidBuiltInFont(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font ||
            !e.properties.font.fontVersion ||
            !e.properties.font.fontFamily
            ? !1
            : `fontFamily` in e.properties.font;
        }
        createSelector(e, t, n) {
          return `${Ek}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(Ek)) return null;
          let [t, n] = e.split(Ek);
          if (n === void 0) return null;
          let [r, i, a] = n.split(`/`);
          return !r || !i || !a
            ? null
            : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`),
              };
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
      }),
      (Ok = {
        ultralight: 100,
        "ultralight-italic": 100,
        thin: 200,
        "thin-italic": 200,
        demi: 200,
        light: 300,
        "light-italic": 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        "regular-slanted": 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        "book-italic": 400,
        text: 400,
        "text-italic": 400,
        medium: 500,
        solid: 500,
        "medium-oblique": 500,
        "medium-italic": 500,
        mittel: 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        "bold-oblique": 700,
        fett: 700,
        ultrabold: 800,
        "ultrabold-italic": 800,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        extralight: 100,
        "extralight-italic": 100,
        "black-italic": 900,
        "extra-italic": 900,
        "extra-italic-bold": 900,
        satt: 900,
        heavy: 900,
        "heavy-italic": 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        "dense-light": 200,
        "dense-regular": 300,
        "dense-medium": 400,
        "dense-bold": 500,
        "solid-light": 600,
        "solid-regular": 700,
        "solid-medium": 800,
        "solid-bold": 900,
        53: 400,
        55: 600,
        "narrow-regular": 350,
        "narrow-black": 850,
        variable: 1e3,
        "variable-italic": 1e3,
      }),
      (kk = kf(`custom-font-source`)),
      (Ak = `CUSTOM;`),
      (jk = `CUSTOMV2;`),
      (Mk = class e {
        name = `custom`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetsByKey = new Map();
        debugByFamily = new Map();
        debugFamilies;
        importFonts(t) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let n = {},
            r = new Map();
          for (let i of t) {
            if (!this.isValidCustomFontAsset(i)) continue;
            let { family: t, variant: a, weight: o, style: s } = Fg(i.properties.font),
              c = i.properties.font.variationAxes,
              l = Array.isArray(c),
              u = i.properties.font.openTypeData,
              d = hg(i),
              f = Rg(i),
              p = Pg(i.properties),
              m = e.createLegacySelector(p),
              h = this.createFontFamily(t),
              g = e.createSelector(h.name, a),
              _ = {
                assetKey: i.key,
                family: h,
                selector: g,
                variant: a,
                weight: o,
                style: s,
                file: d,
                hasOpenTypeFeatures: vg(u),
                variationAxes: yg(c),
                owner: f,
                alternativeSelectors: {
                  [m]: {
                    variant: l ? `variable` : this.inferVariantName(p),
                    cssFamilyName: e.cssFontFamilyFromSelector(m),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(g),
              },
              v = Ng(h.fonts, _);
            if (v?.projectDuplicate) _.owner === `team` && ((h.fonts[v.index] = _), (n[g] = _));
            else if (v) {
              kk.debug(`Duplicate font found for:`, _, `with existing font:`, v.existingFont);
              let e = v.existingFont,
                t = _.file?.endsWith(`.woff2`) ?? !1,
                r = e.file?.endsWith(`.woff2`) ?? !1,
                i = t && !r,
                a = t === r,
                o = _.owner === `team` || e.owner !== `team`;
              (i || (a && o)) && ((h.fonts[v.index] = _), (n[g] = _));
            } else (h.fonts.push(_), (n[g] = _));
            (this.assetsByKey.set(i.key, i),
              zg(r, t, a).fonts.push({ font: _, asset: i, selected: !1 }));
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && Lg(e);
          return ((this.debugByFamily = r), (this.debugFamilies = void 0), Object.values(n));
        }
        getDebugFamilies() {
          if (this.debugFamilies) return this.debugFamilies;
          let e = new Set();
          for (let t of this.fontFamilies)
            for (let n of t.fonts) n.assetKey && n.owner && e.add(`${n.assetKey}:${n.owner}`);
          return ((this.debugFamilies = Bg(this.debugByFamily, e)), this.debugFamilies);
        }
        static createSelector(e, t) {
          return `${jk}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${Ak}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            U(Ag(e), `Selector must be a custom font selector`),
            Mg(e) ? e.slice(Ak.length) : e.slice(jk.length)
          );
        }
        isValidCustomFontAsset(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font
            ? !1
            : `fontFamily` in e.properties.font;
        }
        getOpenTypeFeatures(e) {
          U(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return vg(t)
            ? t?.map((e) => {
                if (bg(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        inferVariantName(e) {
          let t = [
              `thin`,
              `ultra light`,
              `extra light`,
              `light`,
              `normal`,
              `medium`,
              `semi bold`,
              `bold`,
              `extra bold`,
              `black`,
            ],
            n = [...t.map((e) => `${e} italic`), ...t],
            r = e.toLowerCase(),
            i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)],
            a = n.find((e) => i.includes(e) || i.includes(e.replace(/\s+/gu, ``)));
          return a ? a.replace(/^\w|\s\w/gu, (e) => e.toUpperCase()) : `Regular`;
        }
        createFontFamily(e) {
          let t = this.byFamilyName.get(e);
          if (t) return t;
          let n = { source: this.name, name: e, fonts: [] };
          return (this.addFontFamily(n), n);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) || null;
        }
      }),
      (Nk = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (Pk = `FS;`),
      (Fk = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900,
      }),
      (Ik = Object.keys(Fk)),
      (Lk = RegExp(`^(?:${[...Ik, `italic`, `variable`].join(`|`)})`, `u`)),
      (Rk = class e {
        name = `fontshare`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = Ik.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && Fk[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(Pk)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(Pk, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${Pk}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${Pk}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await Vg(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!Lk.exec(t) || t.split(` `).includes(`wide`));
                })
                .map((t) => ({
                  ...e.parseVariant(t.name),
                  selector: e.createSelector(a.name, t.name),
                  isVariable: t.is_variable,
                  fontshareVariantName: t.name,
                  file: t.file,
                })),
              o = e.createMetadataSelector(a.name),
              s = n?.[o],
              c = a.name,
              l = this.getFontFamilyByName(c);
            l || ((l = { name: c, fonts: [], source: this.name }), this.addFontFamily(l));
            let u = r[e.createMetadataSelector(a.name)];
            for (let e of t) {
              let {
                  variantBold: n,
                  variantBoldItalic: r,
                  variantItalic: o,
                  variantVariable: c,
                  variantVariableItalic: d,
                } = Eg(e, t),
                f = {
                  family: l,
                  variant: e.fontshareVariantName.toLowerCase(),
                  selector: e.selector,
                  selectorBold: n?.selector,
                  selectorBoldItalic: r?.selector,
                  selectorItalic: o?.selector,
                  selectorVariable: c?.selector,
                  selectorVariableItalic: d?.selector,
                  weight: e.weight,
                  style: e.style,
                  file: e.file,
                  category: Gg(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: gg(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await Hg(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (zk = `Inter`),
      (Bk = `FR;`),
      (Vk = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        "": 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
      }),
      (Hk = class e {
        name = `framer`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(Bk) && !e.startsWith(zk)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && Vk[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${Bk}${e}`;
        }
        importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = [];
          return (
            t.forEach((t) => {
              let { uiFamilyName: i, ...a } = t,
                o = e.createMetadataSelector(t.uiFamilyName),
                s = n?.[o],
                c = this.getFontFamilyByName(i);
              c ||= this.addFontFamily(i);
              let l = t.selector === t.selectorVariable || t.selector === t.selectorVariableItalic,
                u = { ...a, family: c, variationAxes: l ? s : void 0 };
              (c.fonts.push(u), r.push(u));
            }),
            r
          );
        }
        async getOpenTypeFeatures(t) {
          return (await Hg(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (Uk = `GF;`),
      (Wk = class e {
        name = `google`;
        fontFamilies = [];
        byFamilyName = new Map();
        supportedSubsetsByFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        getSupportedSubsetsByFamilyName(e) {
          return this.supportedSubsetsByFamilyName.get(e) ?? [];
        }
        static parseVariant(e) {
          if (e === `regular`) return { style: `normal`, weight: 400 };
          let t = /(\d*)(normal|italic)?/u.exec(e);
          return t
            ? { weight: parseInt(t[1] || `400`), style: t[2] === `italic` ? `italic` : `normal` }
            : {};
        }
        parseSelector(e) {
          if (!e.startsWith(Uk)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(Uk, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${Uk}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${Uk}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0),
            this.byFamilyName.clear(),
            this.supportedSubsetsByFamilyName.clear());
          let i = await Vg(`google`),
            a = [],
            o = qg(t, (e) => e.family),
            s = qg(n, (e) => e.family);
          for (let t in o) {
            let n = o[t];
            if (!n) continue;
            this.supportedSubsetsByFamilyName.set(n.family, n.subsets ?? []);
            let c = this.getFontFamilyByName(n.family);
            c ||= this.addFontFamily(n.family);
            let l = n.variants.map((r) => ({
                ...e.parseVariant(r),
                googleFontsVariantName: r,
                selector: e.createSelector(t, r, !1),
                isVariable: !1,
                file: n.files[r],
              })),
              u = s[t],
              d = u?.axes
                ? u.variants.map((n) => ({
                    ...e.parseVariant(n),
                    googleFontsVariantName: n,
                    selector: e.createSelector(t, n, !0),
                    isVariable: !0,
                    file: u.files[n],
                  }))
                : [],
              f = e.createMetadataSelector(n.family),
              p = r?.[f],
              m = [...l, ...d],
              h = m.filter(lg),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (lg(e) ? Eg(e, h) : void 0) ?? {},
                m = {
                  family: c,
                  variant: o,
                  selector: i,
                  selectorBold: s?.selector,
                  selectorBoldItalic: u?.selector,
                  selectorItalic: l?.selector,
                  selectorVariable: d?.selector,
                  selectorVariableItalic: f?.selector,
                  weight: t,
                  style: r,
                  category: Kg(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: gg(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await Hg(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (Gk = Ie(Fv(), 1)),
      (Kk = 5e3),
      (qk = 3),
      (Jk = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (Yk = new Map()),
      (Xk = new Map()),
      (Zk = new Map()),
      (Qk = (e, t) => Xg(e, t)),
      ($k = {
        "FR;Inter": [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (eA = class {
        enabled = !1;
        bySelector = new Ck();
        loadedSelectors = new Set();
        getGoogleFontsListPromise;
        getFontshareFontsListPromise;
        getBuiltInFontsListPromise;
        customFontsImportPromise = new Promise((e) => {
          this.resolveCustomFontsImportPromise = e;
        });
        constructor() {
          ((this.local = new xk()),
            (this.google = new Wk()),
            (this.fontshare = new Rk()),
            (this.framer = new Hk()),
            (this.custom = new Mk()),
            (this.builtIn = new Dk()),
            this.importLocalFonts());
        }
        local;
        google;
        fontshare;
        builtIn;
        framer;
        custom;
        get hash() {
          return this.bySelector.hash;
        }
        addFont(e) {
          if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
            for (let t of Object.keys(e.alternativeSelectors)) this.bySelector.set(t, e);
        }
        bySelectorValuesCache;
        getAvailableFonts() {
          if (
            !this.bySelectorValuesCache ||
            this.bySelectorValuesCache.hash !== this.bySelector.hash
          ) {
            let e = new Map();
            for (let t of this.bySelector.values()) e.set(t, !0);
            this.bySelectorValuesCache = {
              result: Array.from(e.keys()),
              hash: this.bySelector.hash,
            };
          }
          return this.bySelectorValuesCache.result;
        }
        importLocalFonts() {
          for (let e of this.local.importFonts()) (this.addFont(e), this.loadFont(e.selector));
        }
        async importGoogleFonts() {
          return (
            (this.getGoogleFontsListPromise ||= Promise.resolve().then(async () => {
              let { staticFonts: e, variableFonts: t } = await rS.fetchGoogleFontsList(),
                n = await $g(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = rS.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await $g(`fontshare`);
            for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n);
          }
          return this.getFontshareFontsListPromise;
        }
        async importAllWebFonts() {
          await Promise.all([
            this.importGoogleFonts(),
            this.importFontshareFonts(),
            this.importBuiltInFonts(),
          ]);
        }
        async importBuiltInFonts() {
          if (!this.getBuiltInFontsListPromise) {
            this.getBuiltInFontsListPromise = rS.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = $g(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e) {
          let t = new Map();
          for (let e of this.loadedSelectors) {
            if (!Ag(e)) continue;
            let n = this.getFontBySelector(e);
            n && t.set(e, n);
          }
          this.bySelector.forEach((e, t) => {
            Ag(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e);
          for (let e of n) this.addFont(e);
          for (let [e, n] of t) {
            let t = this.getFontBySelector(e);
            (t && t.file === n.file) ||
              (this.loadedSelectors.delete(e),
              n.file &&
                Qg({ family: n.cssFamilyName, url: n.file, weight: n.weight, style: n.style }));
          }
          this.resolveCustomFontsImportPromise();
        }
        getCustomFontsImportPromise() {
          return this.customFontsImportPromise;
        }
        getCustomFontDebugFamilies() {
          return this.custom.getDebugFamilies();
        }
        getFontFamily(e) {
          return this[e.source].getFontFamilyByName(e.name);
        }
        getFontBySelector(e) {
          if (!e) return;
          let t;
          if (((t = this.bySelector.get(e)), t))
            return t.alternativeSelectors && e in t.alternativeSelectors
              ? { ...t, ...t.alternativeSelectors[e] }
              : t;
        }
        getDraftPropertiesBySelector(e) {
          let t = this.getFontBySelector(e);
          if (t)
            return {
              style: t.style,
              weight: t.weight,
              variant: t.variant,
              cssFamilyName: t.cssFamilyName,
              source: t.family.source,
              category: t.category,
            };
          let n = this.google.parseSelector(e);
          if (n) {
            let e = Wk.parseVariant(n.variant);
            if (lg(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: _g(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = Rk.parseVariant(r.variant);
            if (lg(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: _g(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = Dk.parseVariant(i.variant);
            if (lg(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: _g(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return Hk.getDraftFontPropertiesBySelector(e) || null;
        }
        isSelectorLoaded(e) {
          return this.loadedSelectors.has(e);
        }
        async loadFont(e) {
          let t = this.getFontBySelector(e);
          if (!t) return 2;
          if (this.loadedSelectors.has(e)) return 0;
          let n = t.cssFamilyName,
            r = t.family.source,
            i = kg(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((Nn() || (await Zg(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await Qk({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`: {
              if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
              let r = t.file;
              await Qk({ family: n, url: r, weight: t.weight, style: t.style }, document);
              let i = this.getFontBySelector(e);
              return !i || i.file !== r
                ? (Qg({ family: n, url: r, weight: t.weight, style: t.style }), 2)
                : (this.loadedSelectors.add(e), 1);
            }
            default:
              W(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(Pk)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                Ki(`Failed to load Fontshare fonts:`, e);
              })
            ),
            e.some((e) => e.startsWith(Uk)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  Ki(`Failed to load Google fonts:`, e);
                })
              ),
            e.some((e) => e.startsWith(Ek)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  Ki(`Failed to load built-in fonts:`, e);
                })
              ),
            e.some(Ag) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  Ki(`Failed to load custom fonts:`, e);
                })
              ),
            t.length > 0 && (await Promise.all(t)));
          let n = [];
          for (let t of e) n.push(this.loadFont(t));
          return Promise.allSettled(n);
        }
        async loadFonts(e) {
          return {
            newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
              (e) => e.status === `fulfilled` && e.value === 1
            ).length,
          };
        }
        async loadMissingFonts(e, t) {
          let n = e.filter((e) => !tA.loadedSelectors.has(e));
          n.length !== 0 &&
            (await tA.loadWebFontsFromSelectors(n),
            n.every((e) => tA.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (U(e, `Can’t find Inter font`), e);
        }
        testing = { addFont: this.addFont.bind(this) };
      }),
      (tA = new eA()),
      (nA = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (rA = { opacity: 0 }),
      (iA = { opacity: 1 }),
      (aA = p_(
        g.forwardRef(function (e, n) {
          let {
              background: r,
              children: i,
              alt: a,
              draggable: o,
              fitImageDimension: s,
              style: c,
              ...l
            } = e,
            u = { ...c },
            f = t(() => Vo(r), [r]),
            [p, h] = d();
          g.useEffect(() => {
            if (!r?.src || !s || f) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                m(() => h({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = r.src));
          }, [r?.src, s, f]);
          let v = f ?? p;
          return (
            s && v && ((u[s] = `auto`), (u.aspectRatio = v.width / v.height)),
            r && delete u.background,
            T(Ho(e.as), {
              ...l,
              style: u,
              ref: n,
              draggable: o,
              children: [r && _(lo, { image: r, alt: a, draggable: o }), i],
            })
          );
        })
      )),
      (oA = g.memo(function ({
        trackCount: e,
        rowGap: t,
        parentIsDataRepeater: n = !1,
        itemsOrder: r,
        children: i,
      }) {
        let a = g_(i, n);
        r?.length && (a = h_(a, r));
        let o = __(e, a),
          s = v_(t);
        return o.map((e, t) => _(`div`, { style: s, children: e }, y_(t)));
      })),
      (sA = (e) =>
        b(function (
          {
            columnMasonryLayoutEnabled: t,
            trackCount: n = 1,
            rowGap: r,
            parentIsDataRepeater: i,
            itemsOrder: a,
            children: o,
            style: s,
            ...c
          },
          l
        ) {
          return t
            ? _(e, {
                ref: l,
                style: { ...s, gridTemplateColumns: `repeat(${n}, 1fr)` },
                ...c,
                children: _(oA, {
                  trackCount: n,
                  rowGap: r,
                  parentIsDataRepeater: i,
                  itemsOrder: a,
                  children: o,
                }),
              })
            : _(e, { ref: l, style: s, ...c, children: o });
        })),
      (lA = !kn() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (uA =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (dA = `{{ text-placeholder }}`),
      (fA = `rich-text-wrapper`),
      (pA = ts(
        b(function (e, n) {
          let {
              id: i,
              name: a,
              html: o,
              htmlFromDesign: s,
              text: l,
              textFromDesign: u,
              fonts: d = [],
              width: f,
              height: p,
              left: m,
              right: h,
              top: g,
              bottom: v,
              center: y,
              className: b,
              stylesPresetsClassName: x,
              visible: S = !0,
              opacity: C,
              rotation: T = 0,
              verticalAlignment: E = `top`,
              isEditable: D = !1,
              environment: O = Y.current,
              withExternalLayout: k = !1,
              positionSticky: A,
              positionStickyTop: j,
              positionStickyRight: M,
              positionStickyBottom: N,
              positionStickyLeft: ee,
              __htmlStructure: P,
              __fromCanvasComponent: F = !1,
              _forwardedOverrideId: te,
              _forwardedOverrides: ne,
              _usesDOMRect: re,
              children: L,
              ...ie
            } = e,
            ae = Po(),
            oe = ss(e),
            se = r(null),
            ce = n ?? se,
            { navigate: le, getRoute: ue } = At(),
            de = Mt();
          (rr(e.preload ?? []), ps(e, ce));
          let fe = w(tC),
            pe = gu(),
            R = l,
            me = te ?? i;
          if (me && ne) {
            let e = ne[me];
            typeof e == `string` && (R = e);
          }
          let he = ``;
          if (R) {
            let e = S_(R);
            he = P ? P.replace(dA, e) : `<p>${e}</p>`;
          } else if (o) he = o;
          else if (u) {
            let e = S_(u);
            he = P ? P.replace(dA, e) : `<p>${e}</p>`;
          } else s && (he = s);
          let ge = zu(),
            _e = t(() => (pe || !ue || !de ? he : C_(he, ue, de, ge)), [he, ue, de, ge]);
          if (
            (c(() => {
              let e = ce.current;
              if (e === null) return;
              function t(e) {
                let t = Nu(e.target, ce.current);
                In(e) ||
                  !le ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (Su(le, t, ge) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [le, ge]),
            E_(d, F, ce),
            !S)
          )
            return null;
          let ve = D && O() === Y.canvas,
            z = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: T_(E),
              opacity: ve ? 0 : C,
              flexShrink: 0,
            },
            ye = Y.hasRestrictions(),
            be = jo(e, ae || 0, !1),
            xe = re && (f === `auto` || p === `auto`),
            Se =
              e.transformTemplate || !be || !ye || F || xe
                ? (e.transformTemplate ?? os(y))
                : void 0;
          if (!k) {
            if (be && ye && !xe) {
              let e = px.getNumber(T).toFixed(4);
              ((z.transform = `translate(${be.x}px, ${be.y}px) rotate(${e}deg)`),
                (z.width = be.width),
                (z.minWidth = be.width),
                (z.height = be.height));
            } else
              ((z.left = m),
                (z.right = h),
                (z.top = g),
                (z.bottom = v),
                (z.width = f),
                (z.height = p),
                (z.rotate = T));
            A
              ? (!pe || fe) &&
                ((z.position = `sticky`),
                (z.willChange = `transform`),
                (z.top = j),
                (z.right = M),
                (z.bottom = N),
                (z.left = ee))
              : pe && (e.positionFixed || e.positionAbsolute) && (z.position = `absolute`);
          }
          return (
            Zc(e, z),
            Jc(e, z),
            Object.assign(z, e.style),
            _(I.div, {
              id: i,
              ref: ce,
              ...ie,
              style: z,
              layoutId: oe,
              "data-framer-name": a,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": y,
              className: $c(b, x, fA),
              transformTemplate: Se,
              dangerouslySetInnerHTML: { __html: _e },
            })
          );
        })
      )),
      (mA = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (hA = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (gA = b(function (e, t) {
        return _(`svg`, { ...e, ref: t, children: e.children });
      })),
      (_A = I.create(gA)),
      (vA = b(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return _(_A, {
          ...r,
          ref: i,
          viewBox: t,
          children: _(I.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (yA = []),
      (bA = `RichTextContainer`),
      (xA = b(function (e, n) {
        let {
            __fromCanvasComponent: i = !1,
            _forwardedOverrideId: a,
            _forwardedOverrides: o,
            _usesDOMRect: s,
            anchorLinkOffsetY: c,
            as: l,
            bottom: u,
            center: d,
            children: f,
            environment: p = Y.current,
            fonts: m = yA,
            height: h,
            isEditable: g = !1,
            left: v,
            name: y,
            opacity: b,
            positionSticky: x,
            positionStickyBottom: S,
            positionStickyLeft: C,
            positionStickyRight: T,
            positionStickyTop: E,
            right: D,
            rotation: O = 0,
            style: k,
            _initialStyle: A,
            stylesPresetsClassNames: j,
            text: M,
            top: N,
            verticalAlignment: ee = `top`,
            visible: P = !0,
            width: F,
            withExternalLayout: I = !1,
            viewBox: te,
            viewBoxScale: ne = 1,
            effect: re,
            ...L
          } = e,
          ie = Po(),
          ae = p(),
          oe = ae === Y.canvas,
          se = oe || ae === Y.export,
          ce = w(tC),
          le = ss(e),
          ue = r(null),
          de = n ?? ue;
        (ps(e, de), E_(m, i, de));
        let fe = F_(re, de),
          pe = t(() => {
            if (f) return U_(f, j, M, c, void 0, fe.getTokenizer());
          }, [f, j, M, c, fe]);
        if (!P) return null;
        let R = { opacity: g && oe ? 0 : b },
          me = T_(ee);
        me !== FS.justifyContent && (R.justifyContent = me);
        let he = {},
          ge = Y.hasRestrictions(),
          _e = jo(e, ie || 0, !1),
          ve = s && (F === `auto` || h === `auto`),
          z =
            e.transformTemplate || !_e || !ge || i || ve ? (e.transformTemplate ?? os(d)) : void 0;
        (I ||
          (_e && ge && !ve
            ? ((he.x = _e.x + (V(k?.x) ? k.x : 0)),
              (he.y = _e.y + (V(k?.y) ? k.y : 0)),
              (he.left = 0),
              (he.top = 0),
              (R.rotate = px.getNumber(O)),
              (R.width = _e.width),
              (R.minWidth = _e.width),
              (R.height = _e.height))
            : ((R.left = v),
              (R.right = D),
              (R.top = N),
              (R.bottom = u),
              (R.width = F),
              (R.height = h),
              (R.rotate = O)),
          x
            ? (!se || ce) &&
              ((R.position = `sticky`),
              (R.willChange = `transform`),
              (R.top = E),
              (R.right = T),
              (R.bottom = S),
              (R.left = C))
            : oe && (e.positionFixed || e.positionAbsolute) && (R.position = `absolute`)),
          Zc(e, R),
          Jc(e, R),
          Object.assign(R, A, k, he),
          le && (L.layout = `preserve-aspect`));
        let ye = Ho(e.as),
          be = L[`data-framer-name`] ?? y,
          xe = oe ? B_(Xx(L)) : L;
        return B(e.viewBox)
          ? e.as === void 0
            ? _(vA, {
                ...xe,
                ref: de,
                style: R,
                layoutId: le,
                viewBox: te,
                viewBoxScale: ne,
                transformTemplate: z,
                "data-framer-name": be,
                "data-framer-component-type": bA,
                children: pe,
              })
            : _(ye, {
                ...xe,
                ref: de,
                style: R,
                layoutId: le,
                transformTemplate: z,
                "data-framer-name": be,
                "data-framer-component-type": bA,
                children: _(vA, {
                  viewBox: te,
                  viewBoxScale: ne,
                  style: { width: `100%`, height: `100%` },
                  children: pe,
                }),
              })
          : _(ye, {
              ...xe,
              ref: de,
              style: R,
              layoutId: le,
              transformTemplate: z,
              "data-framer-name": be,
              "data-framer-component-type": bA,
              children: pe,
            });
      })),
      (SA = ts(
        b(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (B(a)) {
            !r.stylesPresetsClassName &&
              H(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [B(t) ? `html` : `htmlFromDesign`]: a };
            return _(pA, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && B(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return _(xA, { ...r, ref: i, children: y(a) ? a : void 0 });
        })
      )),
      (CA = `framer/asset-reference,`),
      (wA = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = nv(t);
        return _(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: _(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c
          ),
        });
      }),
      (TA = An()),
      (EA = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
        id;
        svg;
        innerHTML;
        viewBox;
        count;
      }),
      (DA = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (OA = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(lC(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = iv(e);
            (s &&
              (t && av(s, n),
              (s.id = n),
              (o = uv(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          TA && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = DA),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          TA && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new EA(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !TA) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        TA && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${DA}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/u, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (kA = new OA()),
      (AA = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (jA = b(function (e, t) {
        let n = Po(),
          r = ss(e),
          i = g.useRef(null),
          a = t ?? i,
          o = gk();
        return (
          ps(e, i),
          _(NA, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (MA = 5e4),
      (NA = class e extends cC {
        static supportsConstraints = !0;
        static defaultSVGProps = {
          left: void 0,
          right: void 0,
          top: void 0,
          bottom: void 0,
          style: void 0,
          _constraints: { enabled: !0, aspectRatio: null },
          parentSize: 0,
          rotation: 0,
          visible: !0,
          svg: ``,
          shadows: [],
        };
        static defaultProps = { ...cC.defaultProps, ...e.defaultSVGProps };
        static frame(e) {
          return jo(e, e.parentSize || 0);
        }
        container = g.createRef();
        svgElement = null;
        setSVGElement = (e) => {
          ((this.svgElement = e), this.setLayerElement(e));
        };
        previouslyRenderedSVG = ``;
        get frame() {
          return jo(this.props, this.props.parentSize || 0);
        }
        unmountedSVG = ``;
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: e } = this.props,
              t = e ? `svg${e}` : null;
            (kA.subscribe(this.unmountedSVG, !e, t),
              (this.previouslyRenderedSVG = this.unmountedSVG));
          }
          this.props.svgContentId || mv(this.container, this.props);
        }
        componentWillUnmount() {
          (kA.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ``));
        }
        componentDidUpdate(e) {
          if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
          let { fill: t } = this.props;
          (uS.isImageObject(t) &&
            uS.isImageObject(e.fill) &&
            t.src !== e.fill.src &&
            vs(this.svgElement, `fill`, null, !1),
            mv(this.container, this.props));
        }
        collectLayout(e, t) {
          if (this.props.withExternalLayout) {
            ((t.width = `100%`), (t.height = `100%`), (t.aspectRatio = `inherit`));
            return;
          }
          let n = this.frame,
            {
              rotation: r,
              intrinsicWidth: i,
              intrinsicHeight: a,
              width: o,
              height: s,
            } = this.props,
            c = px.getNumber(r);
          if (
            ((e.opacity = G(this.props.opacity) ? this.props.opacity : 1), Y.hasRestrictions() && n)
          ) {
            (Object.assign(e, {
              transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
              width: `${n.width}px`,
              height: `${n.height}px`,
            }),
              Oo(this.props) && (e.position = `absolute`));
            let r = n.width / (i || 1),
              o = n.height / (a || 1);
            t.transformOrigin = `top left`;
            let { zoom: s, target: l } = Lx;
            if (l === Y.export) {
              let e = s > 1 ? s : 1;
              ((t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e));
            } else t.transform = `scale(${r}, ${o})`;
            i && a && ((t.width = i), (t.height = a));
            return;
          }
          let { left: l, right: u, top: d, bottom: f } = this.props;
          (Object.assign(e, {
            left: l,
            right: u,
            top: d,
            bottom: f,
            width: o,
            height: s,
            rotate: c,
          }),
            Object.assign(t, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` }));
        }
        render() {
          let {
            id: e,
            visible: t,
            style: n,
            fill: r,
            svg: i,
            intrinsicHeight: a,
            intrinsicWidth: o,
            title: s,
            description: c,
            layoutId: l,
            className: u,
            variants: d,
            withExternalLayout: f,
            innerRef: p,
            svgContentId: m,
            height: h,
            opacity: g,
            width: v,
            requiresOverflowVisible: y,
            ...b
          } = this.props;
          if (!f && (!t || !e)) return null;
          let x = e ?? l ?? `svg`,
            S = this.frame,
            C = S || { width: o || 100, height: a || 100 },
            w = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
            E = {};
          (this.collectLayout(w, E),
            Kc(this.props, w),
            Zc(this.props, w),
            cC.applyWillChange(this.props, w, !1));
          let D = null;
          if (typeof r == `string` || J.isColorObject(r)) {
            let e = J.isColorObject(r) ? r.initialValue || J.toRgbString(r) : r;
            ((w.fill = e), (w.color = e));
          } else if (gC.isLinearGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${gC.hash(t)}`;
            w.fill = `url(#${n})`;
            let { stops: i, x1: a, x2: o, y1: s, y2: c } = J_(t, x);
            D = _(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: _(`linearGradient`, {
                id: n,
                x1: a,
                x2: o,
                y1: s,
                y2: c,
                children: i.map((e, t) =>
                  _(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (vC.isRadialGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${vC.hash(t)}`;
            w.fill = `url(#${n})`;
            let i = Y_(t, x);
            D = _(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: _(`radialGradient`, {
                id: n,
                cy: t.centerAnchorY,
                cx: t.centerAnchorX,
                r: t.widthFactor,
                children: i.stops.map((e, t) =>
                  _(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (uS.isImageObject(r)) {
            let e = ev(r, C, x);
            e &&
              ((w.fill = `url(#${e.id})`),
              (D = _(`svg`, {
                ref: this.setSVGElement,
                width: `100%`,
                height: `100%`,
                style: { position: `absolute` },
                role: `presentation`,
                children: _(`defs`, { children: _(wA, { ...e }) }),
              })));
          }
          let k = { "data-framer-component-type": `SVG` },
            A = !S;
          A && Object.assign(k, rs(this.props.center));
          let j =
              !y &&
              !D &&
              !w.fill &&
              !w.background &&
              !w.backgroundImage &&
              i.length < MA &&
              !dv(i) &&
              !fv(i),
            M = null;
          if (j)
            ((w.backgroundSize = `100% 100%`),
              (w.backgroundImage = st(i)),
              kA.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = ``));
          else {
            let e = m ? `svg${m}` : null,
              t = kA.subscribe(i, !m, e, y);
            (kA.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = i),
              pv(w) && (w.overflow = `hidden`),
              (M = T(O, {
                children: [
                  D,
                  _(
                    `div`,
                    {
                      className: `svgContainer`,
                      style: E,
                      ref: this.container,
                      dangerouslySetInnerHTML: { __html: t },
                    },
                    uS.isImageObject(r) ? r.src : ``
                  ),
                ],
              })));
          }
          let N = Ho(this.props.as),
            { href: ee, target: P, rel: F, onClick: I, onTap: te } = this.props,
            ne = s || c;
          return _(N, {
            ...k,
            ...b,
            layoutId: l,
            transformTemplate: A ? os(this.props.center) : void 0,
            id: e,
            ref: p,
            style: w,
            className: u,
            variants: d,
            tabIndex: this.props.tabIndex,
            role: ne ? `img` : void 0,
            "aria-label": s,
            "aria-description": c,
            "aria-hidden": ne ? void 0 : `true`,
            onTap: te,
            onClick: I,
            href: ee,
            target: P,
            rel: F,
            children: M,
          });
        }
      }),
      (PA = ts(jA)),
      (FA = 1e3),
      (IA = `explicitInter`),
      (He.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = Ke(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
//! Credit to Astro | MIT License
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
export {
  Wi as $,
  $c as A,
  gO as At,
  vv as B,
  PA as C,
  rv as Ct,
  Uc as D,
  Vm as Dt,
  gv as E,
  TS as Et,
  xw as F,
  Ai as G,
  Wc as H,
  Cw as I,
  ht as J,
  ft as K,
  Sw as L,
  tA as M,
  Ev as Mt,
  Av as N,
  mk as Nt,
  $S as O,
  sA as Ot,
  ww as P,
  Zy as Pt,
  Ra as Q,
  wS as R,
  SA as S,
  At as St,
  mT as T,
  Bm as Tt,
  lm as U,
  hv as V,
  Ey as W,
  xi as X,
  Jv as Y,
  TT as Z,
  RT as _,
  tr as _t,
  pT as a,
  nT as at,
  Y as b,
  cm as bt,
  fw as c,
  pm as ct,
  PT as d,
  Mt as dt,
  lO as et,
  ry as f,
  pu as ft,
  Df as g,
  er as gt,
  cr as h,
  gu as ht,
  Qw as i,
  ju as it,
  hh as j,
  fl as jt,
  DS as k,
  Yw as kt,
  FT as l,
  Vl as lt,
  sx as m,
  Zs as mt,
  Pu as n,
  Ov as nt,
  QC as o,
  kA as ot,
  $T as p,
  _m as pt,
  LA as q,
  Bl as r,
  Dv as rt,
  Ga as s,
  _i as st,
  Au as t,
  xm as tt,
  aA as u,
  zt as ut,
  _w as v,
  Gi as vt,
  uk as w,
  Zr as wt,
  jE as x,
  Rt as xt,
  oO as y,
  Tm as yt,
  _v as z,
};
//# sourceMappingURL=framer.yAIV6S8_.mjs.map
