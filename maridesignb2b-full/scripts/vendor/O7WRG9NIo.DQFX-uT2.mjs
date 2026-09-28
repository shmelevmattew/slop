import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  N as i,
  c as a,
  g as o,
  k as s,
  l as c,
  o as l,
  v as u,
} from "./react.D20wc1Tc.mjs";
import { C as d, a as ee, r as te, t as f } from "./motion.CkcImXlK.mjs";
import {
  A as p,
  B as m,
  Ct as h,
  D as g,
  E as _,
  Et as v,
  Q as y,
  S as ne,
  Tt as re,
  d as ie,
  gt as ae,
  jt as b,
  kt as x,
  lt as oe,
  o as S,
  p as se,
  q as C,
} from "./framer.yAIV6S8_.mjs";
import { a as ce, c as le, o as ue, s as w } from "./shared-lib.D6-R8ZSj.mjs";
var T,
  de,
  fe,
  E,
  D,
  O,
  k,
  A = e(() => {
    (l(),
      C(),
      n(),
      (T = `var(--framer-icon-mask)`),
      (de = o(function (e, t) {
        return a(`svg`, { ...e, ref: t, children: e.children });
      })),
      (fe = d.create(de)),
      (E = o((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n
          ? a(fe, { ...o, layoutId: r, ref: t, children: i })
          : a(`svg`, { ...o, ref: t, children: i });
      })),
      (D = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 19.472 0.953 C 19.545 0.692 19.472 0.412 19.28 0.22 C 19.088 0.028 18.808 -0.045 18.546 0.028 L 0.546 5.486 C 0.245 5.571 0.029 5.834 0.003 6.145 C -0.023 6.457 0.147 6.752 0.429 6.886 L 8.626 10.874 L 12.614 19.07 C 12.748 19.352 13.043 19.522 13.354 19.496 C 13.666 19.47 13.929 19.253 14.013 18.953 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="19.498812438350562px" id="VRZKpSmTT" transform="translate(1.499 3.001)" width="19.49974993835056px"/><path d="M 0 4.875 L 4.875 0" fill="transparent" height="4.875px" id="QRgHy819f" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(10.125 9)" width="4.875px"/><path d="M 19.472 0.953 C 19.545 0.692 19.472 0.412 19.28 0.22 C 19.088 0.028 18.808 -0.045 18.546 0.028 L 0.546 5.486 C 0.245 5.571 0.029 5.834 0.003 6.145 C -0.023 6.457 0.147 6.752 0.429 6.886 L 8.626 10.874 L 12.614 19.07 C 12.748 19.352 13.043 19.522 13.354 19.496 C 13.666 19.47 13.929 19.253 14.013 18.953 Z" fill="transparent" height="19.498812438350562px" id="e4MqjlSIZ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(1.499 3.001)" width="19.49974993835056px"/></svg>`),
      (O = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (k = v(
        o(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: o,
              ezTt3ayMo: s,
              lschgej4H: c,
              qxTvv_EBh: l,
              ...u
            } = O(e),
            d = h(`777087443`, D);
          return a(E, {
            ...u,
            className: p(`framer-XkeER`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": l, "--21h8s6": s, "--pgex8v": c, ...n },
            viewBox: `0 0 24 24`,
            children: a(`use`, { href: d }),
          });
        }),
        [
          `.framer-XkeER { -webkit-mask: ${T}; aspect-ratio: 1; display: block; mask: ${T}; width: 24px; }`,
        ],
        `framer-XkeER`
      )),
      (k.displayName = `Paper Plane Tilt`),
      g(k, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: S.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: S.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: S.Number,
        },
      }));
  }),
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  pe = e(() => {
    (l(),
      C(),
      n(),
      (j = `var(--framer-icon-mask)`),
      (M = o(function (e, t) {
        return a(`svg`, { ...e, ref: t, children: e.children });
      })),
      (N = d.create(M)),
      (P = o((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n
          ? a(N, { ...o, layoutId: r, ref: t, children: i })
          : a(`svg`, { ...o, ref: t, children: i });
      })),
      (F = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 9.749 15.477 L 14.879 18.632 C 15.151 18.797 15.496 18.782 15.753 18.594 C 16.01 18.406 16.128 18.082 16.053 17.772 L 14.658 11.886 L 19.223 7.948 C 19.461 7.739 19.552 7.409 19.455 7.108 C 19.357 6.806 19.09 6.592 18.774 6.563 L 12.783 6.075 L 10.475 0.488 C 10.354 0.193 10.068 0 9.749 0 C 9.431 0 9.144 0.193 9.023 0.488 L 6.715 6.075 L 0.724 6.563 C 0.406 6.59 0.136 6.806 0.038 7.109 C -0.06 7.412 0.034 7.745 0.275 7.953 L 4.84 11.89 L 3.445 17.772 C 3.37 18.082 3.488 18.406 3.745 18.594 C 4.002 18.782 4.347 18.797 4.619 18.632 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="18.746261605760054px" id="t6hF1mhP1" transform="translate(2.251 2.25)" width="19.49332240036336px"/><path d="M 9.749 15.477 L 14.879 18.632 C 15.151 18.797 15.496 18.782 15.753 18.594 C 16.01 18.406 16.128 18.082 16.053 17.772 L 14.658 11.886 L 19.223 7.948 C 19.461 7.739 19.552 7.409 19.455 7.108 C 19.357 6.806 19.09 6.592 18.774 6.563 L 12.783 6.075 L 10.475 0.488 C 10.354 0.193 10.068 0 9.749 0 C 9.431 0 9.144 0.193 9.023 0.488 L 6.715 6.075 L 0.724 6.563 C 0.406 6.59 0.136 6.806 0.038 7.109 C -0.06 7.412 0.034 7.745 0.275 7.953 L 4.84 11.89 L 3.445 17.772 C 3.37 18.082 3.488 18.406 3.745 18.594 C 4.002 18.782 4.347 18.797 4.619 18.632 Z" fill="transparent" height="18.746261605760054px" id="b0GcHZb5O" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.251 2.25)" width="19.49332240036336px"/></svg>`),
      (I = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (L = v(
        o(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: o,
              ezTt3ayMo: s,
              lschgej4H: c,
              qxTvv_EBh: l,
              ...u
            } = I(e),
            d = h(`2930526878`, F);
          return a(P, {
            ...u,
            className: p(`framer-YnhV6`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": l, "--21h8s6": s, "--pgex8v": c, ...n },
            viewBox: `0 0 24 24`,
            children: a(`use`, { href: d }),
          });
        }),
        [
          `.framer-YnhV6 { -webkit-mask: ${j}; aspect-ratio: 1; display: block; mask: ${j}; width: 24px; }`,
        ],
        `framer-YnhV6`
      )),
      (L.displayName = `Star`),
      g(L, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: S.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: S.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: S.Number,
        },
      }));
  }),
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  me = e(() => {
    (l(),
      C(),
      n(),
      (R = `var(--framer-icon-mask)`),
      (z = o(function (e, t) {
        return a(`svg`, { ...e, ref: t, children: e.children });
      })),
      (B = d.create(z)),
      (V = o((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n
          ? a(B, { ...o, layoutId: r, ref: t, children: i })
          : a(`svg`, { ...o, ref: t, children: i });
      })),
      (H = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0.75 13.5 C 0.336 13.5 0 13.164 0 12.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 12.75 0 C 13.164 0 13.5 0.336 13.5 0.75 L 13.5 12.75 C 13.5 13.164 13.164 13.5 12.75 13.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.5px" id="SRQXRVw3u" transform="translate(3.75 6.75)" width="13.5px"/><path d="M 0 7.5 L 7.5 0" fill="transparent" height="7.5px" id="zMMAVtUS6" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12.75 3.75)" width="7.5px"/><path d="M 6 6 L 5.999 0.001 L 0 0" fill="transparent" height="6px" id="B0SIDzn4O" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(14.25 3.75)" width="6px"/><path d="M 13.5 6 L 13.5 12.75 C 13.5 13.164 13.164 13.5 12.75 13.5 L 0.75 13.5 C 0.336 13.5 0 13.164 0 12.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 7.5 0" fill="transparent" height="13.5px" id="c_iuoOSc_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 6.75)" width="13.5px"/></svg>`),
      (U = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (W = v(
        o(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: o,
              ezTt3ayMo: s,
              lschgej4H: c,
              qxTvv_EBh: l,
              ...u
            } = U(e),
            d = h(`3214076557`, H);
          return a(V, {
            ...u,
            className: p(`framer-oPPWI`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": l, "--21h8s6": s, "--pgex8v": c, ...n },
            viewBox: `0 0 24 24`,
            children: a(`use`, { href: d }),
          });
        }),
        [
          `.framer-oPPWI { -webkit-mask: ${R}; aspect-ratio: 1; display: block; mask: ${R}; width: 24px; }`,
        ],
        `framer-oPPWI`
      )),
      (W.displayName = `Arrow Square Out`),
      g(W, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: S.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: S.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: S.Number,
        },
      }));
  }),
  G,
  he,
  ge,
  _e,
  ve,
  ye,
  K,
  be = e(() => {
    (l(),
      C(),
      n(),
      (G = `var(--framer-icon-mask)`),
      (he = o(function (e, t) {
        return a(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ge = d.create(he)),
      (_e = o((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n
          ? a(ge, { ...o, layoutId: r, ref: t, children: i })
          : a(`svg`, { ...o, ref: t, children: i });
      })),
      (ve = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 12.731 12.731 L 10.449 19.007 C 10.34 19.3 10.059 19.496 9.746 19.496 C 9.432 19.496 9.152 19.3 9.043 19.007 L 6.765 12.731 L 0.489 10.449 C 0.195 10.34 0 10.059 0 9.746 C 0 9.432 0.195 9.152 0.489 9.043 L 6.765 6.765 L 9.047 0.489 C 9.156 0.195 9.436 0 9.75 0 C 10.063 0 10.344 0.195 10.453 0.489 L 12.735 6.765 L 19.01 9.047 C 19.304 9.156 19.499 9.436 19.499 9.75 C 19.499 10.063 19.304 10.344 19.01 10.453 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="19.495522090984686px" id="XWY4XiNtR" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.252 2.252)" width="19.499272090984686px"/></svg>`),
      (ye = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (K = v(
        o(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: o,
              ezTt3ayMo: s,
              lschgej4H: c,
              qxTvv_EBh: l,
              ...u
            } = ye(e),
            d = h(`2663420067`, ve);
          return a(_e, {
            ...u,
            className: p(`framer-yInj6`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": l, "--21h8s6": s, "--pgex8v": c, ...n },
            viewBox: `0 0 24 24`,
            children: a(`use`, { href: d }),
          });
        }),
        [
          `.framer-yInj6 { -webkit-mask: ${G}; aspect-ratio: 1; display: block; mask: ${G}; width: 24px; }`,
        ],
        `framer-yInj6`
      )),
      (K.displayName = `Star Four`),
      g(K, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: S.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: S.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: S.Number,
        },
      }));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  J,
  Y,
  X,
  Z,
  De,
  Oe,
  Q,
  ke,
  Ae,
  je,
  Me,
  Ne,
  $,
  Pe = e(() => {
    (l(),
      C(),
      f(),
      n(),
      A(),
      pe(),
      me(),
      be(),
      le(),
      (xe = b(x(ie))),
      (Se = b(x(d.div))),
      (Ce = {
        H_aBgTDEh: { pressed: !0 },
        hV0mKfVQK: { pressed: !0 },
        pCaysOqVK: { pressed: !0 },
        r_ypCUA4W: { hover: !0, pressed: !0 },
        z878UxfRD: { hover: !0, pressed: !0 },
        ZQ13jNOYy: { hover: !0, pressed: !0 },
      }),
      (we = [`ZQ13jNOYy`, `r_ypCUA4W`, `z878UxfRD`, `H_aBgTDEh`, `pCaysOqVK`, `hV0mKfVQK`]),
      (Te = `framer-JILbr`),
      (Ee = {
        H_aBgTDEh: `framer-v-1nxnfxk`,
        hV0mKfVQK: `framer-v-ashwvn`,
        pCaysOqVK: `framer-v-pleg7i`,
        r_ypCUA4W: `framer-v-3og9q0`,
        z878UxfRD: `framer-v-1a14s4t`,
        ZQ13jNOYy: `framer-v-1njonpw`,
      }),
      y(),
      (J = { bounce: 0.3, delay: 0, duration: 0.5, type: `spring` }),
      (Y = { bounce: 0, delay: 0, duration: 0.5, type: `spring` }),
      (X = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: J,
        x: 0,
        y: 0,
      }),
      (Z = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (De = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Oe = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.2,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Q = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.3, delay: 0.1, duration: 0.5, type: `spring` },
        x: 0,
        y: 0,
      }),
      (ke = ({ value: e, children: n }) => {
        let r = s(ee),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(ee.Provider, { value: o, children: n });
      }),
      (Ae = {
        "Primary Mobile": `H_aBgTDEh`,
        "Primary star": `ZQ13jNOYy`,
        "Secondary Call": `r_ypCUA4W`,
        "Secondary link mobile": `hV0mKfVQK`,
        "Secondary link": `z878UxfRD`,
        "Secondary Mobile": `pCaysOqVK`,
      }),
      (je = d.create(i)),
      (Me = ({
        height: e,
        id: t,
        link: n,
        newTab: r,
        showIcon: i,
        smoothScroll: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        bYMrbF3CO: n ?? c.bYMrbF3CO,
        Iw3bv_gkH: a ?? c.Iw3bv_gkH ?? !0,
        Og1_ZrdX2: i ?? c.Og1_ZrdX2 ?? !0,
        rzEJyeGCD: r ?? c.rzEJyeGCD ?? !1,
        variant: Ae[c.variant] ?? c.variant ?? `ZQ13jNOYy`,
        XQBi6J5Qe: o ?? c.XQBi6J5Qe ?? `Book a class`,
      })),
      (Ne = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = v(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: ee } = ae();
          oe();
          let {
              style: f,
              className: m,
              layoutId: h,
              variant: g,
              XQBi6J5Qe: _,
              bYMrbF3CO: v,
              rzEJyeGCD: y,
              Iw3bv_gkH: ie,
              Og1_ZrdX2: b,
              ...x
            } = Me(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: le,
              gestureHandlers: ue,
              gestureVariant: w,
              isLoading: T,
              setGestureState: de,
              setVariant: fe,
              variants: E,
            } = re({
              cycleOrder: we,
              defaultVariant: `ZQ13jNOYy`,
              enabledGestures: Ce,
              ref: o,
              variant: g,
              variantClassNames: Ee,
            }),
            D = Ne(e, E),
            O = p(Te, ce),
            A = (e) =>
              [
                `ZQ13jNOYy-hover`,
                `ZQ13jNOYy-pressed`,
                `r_ypCUA4W-hover`,
                `r_ypCUA4W-pressed`,
                `z878UxfRD-hover`,
                `z878UxfRD-pressed`,
              ].includes(w)
                ? e
                : w === `hV0mKfVQK-pressed` || S === `hV0mKfVQK`;
          return a(te, {
            id: h ?? s,
            children: a(je, {
              animate: E,
              initial: !1,
              children: a(ke, {
                value: J,
                ...q(
                  {
                    hV0mKfVQK: { value: Y },
                    pCaysOqVK: { value: Y },
                    r_ypCUA4W: { value: Y },
                    z878UxfRD: { value: Y },
                  },
                  S,
                  w
                ),
                children: a(se, {
                  href: v,
                  motionChild: !0,
                  nodeId: `ZQ13jNOYy`,
                  openInNewTab: y,
                  scopeId: `O7WRG9NIo`,
                  smoothScroll: ie,
                  children: c(d.a, {
                    ...x,
                    ...ue,
                    className: `${p(O, `framer-1njonpw`, m, C)} framer-sjyp0w`,
                    "data-framer-name": `Primary star`,
                    layoutDependency: D,
                    layoutId: `ZQ13jNOYy`,
                    ref: o,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      "--corner-shape-fallback": 0.843,
                      backgroundColor: `var(--token-b154a72e-860a-4a47-bda7-177605c8df0c, rgb(4, 17, 31))`,
                      borderBottomLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderBottomRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderTopLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderTopRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      cornerShape: `superellipse(1.3)`,
                      ...f,
                    },
                    variants: {
                      "H_aBgTDEh-pressed": {
                        backgroundColor: `var(--token-c999bed9-5533-4449-abb7-99ecc56b075f, rgba(4, 17, 31, 0.87))`,
                      },
                      "hV0mKfVQK-pressed": {
                        backgroundColor: `var(--token-35f44890-fd51-4c4a-91e2-cccfb7387019, rgb(232, 234, 237))`,
                      },
                      "pCaysOqVK-pressed": {
                        backgroundColor: `var(--token-35f44890-fd51-4c4a-91e2-cccfb7387019, rgb(232, 234, 237))`,
                      },
                      "r_ypCUA4W-hover": {
                        backgroundColor: `var(--token-35f44890-fd51-4c4a-91e2-cccfb7387019, rgb(232, 234, 237))`,
                      },
                      "z878UxfRD-hover": {
                        backgroundColor: `var(--token-35f44890-fd51-4c4a-91e2-cccfb7387019, rgb(232, 234, 237))`,
                      },
                      "ZQ13jNOYy-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `var(--token-c999bed9-5533-4449-abb7-99ecc56b075f, rgba(4, 17, 31, 0.87))`,
                      },
                      "ZQ13jNOYy-pressed": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                      },
                      H_aBgTDEh: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                      },
                      hV0mKfVQK: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, rgb(232, 234, 237))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-048c6eab-54bc-412c-9612-b27a36668a5b, rgb(240, 241, 243))`,
                      },
                      pCaysOqVK: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, rgb(232, 234, 237))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-048c6eab-54bc-412c-9612-b27a36668a5b, rgb(240, 241, 243))`,
                      },
                      r_ypCUA4W: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, rgb(232, 234, 237))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-048c6eab-54bc-412c-9612-b27a36668a5b, rgb(240, 241, 243))`,
                      },
                      z878UxfRD: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, rgb(232, 234, 237))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-048c6eab-54bc-412c-9612-b27a36668a5b, rgb(240, 241, 243))`,
                      },
                    },
                    ...q(
                      {
                        "H_aBgTDEh-pressed": { "data-framer-name": void 0 },
                        "hV0mKfVQK-pressed": { "data-framer-name": void 0 },
                        "pCaysOqVK-pressed": { "data-framer-name": void 0 },
                        "r_ypCUA4W-hover": { "data-framer-name": void 0 },
                        "r_ypCUA4W-pressed": { "data-framer-name": void 0 },
                        "z878UxfRD-hover": { "data-framer-name": void 0 },
                        "z878UxfRD-pressed": { "data-framer-name": void 0 },
                        "ZQ13jNOYy-hover": { "data-framer-name": void 0 },
                        "ZQ13jNOYy-pressed": { "data-framer-name": void 0 },
                        H_aBgTDEh: { "data-framer-name": `Primary Mobile` },
                        hV0mKfVQK: {
                          "data-border": !0,
                          "data-framer-name": `Secondary link mobile`,
                        },
                        pCaysOqVK: { "data-border": !0, "data-framer-name": `Secondary Mobile` },
                        r_ypCUA4W: { "data-border": !0, "data-framer-name": `Secondary Call` },
                        z878UxfRD: { "data-border": !0, "data-framer-name": `Secondary link` },
                      },
                      S,
                      w
                    ),
                    children: [
                      a(d.div, {
                        className: `framer-8bdnlb`,
                        "data-framer-name": `BG`,
                        layoutDependency: D,
                        layoutId: `tjITblf3M`,
                        style: {
                          background: `linear-gradient(112deg, rgba(255, 255, 255, 0.4) -21%, rgba(255, 255, 255, 0) 100%)`,
                          opacity: 0,
                        },
                      }),
                      a(ne, {
                        __fromCanvasComponent: !0,
                        children: a(i, {
                          children: a(d.p, {
                            className: `framer-styles-preset-29mx3t`,
                            "data-styles-preset": `KSv8TCPWH`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f7afab8f-991d-426d-a212-51d8456d5a36, rgb(252, 252, 252)))`,
                            },
                            children: `Book a class`,
                          }),
                        }),
                        className: `framer-1f2xesy`,
                        fonts: [`Inter`],
                        layoutDependency: D,
                        layoutId: `VLu9UAh8k`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-f7afab8f-991d-426d-a212-51d8456d5a36, rgb(252, 252, 252))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: _,
                        variants: {
                          hV0mKfVQK: {
                            "--extracted-r6o4lv": `var(--token-b154a72e-860a-4a47-bda7-177605c8df0c, rgb(4, 17, 31))`,
                          },
                          pCaysOqVK: {
                            "--extracted-r6o4lv": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                          },
                          r_ypCUA4W: {
                            "--extracted-r6o4lv": `var(--token-b154a72e-860a-4a47-bda7-177605c8df0c, rgb(4, 17, 31))`,
                          },
                          z878UxfRD: {
                            "--extracted-r6o4lv": `var(--token-b154a72e-860a-4a47-bda7-177605c8df0c, rgb(4, 17, 31))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...q(
                          {
                            hV0mKfVQK: {
                              children: a(i, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-29mx3t`,
                                  "data-styles-preset": `KSv8TCPWH`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b154a72e-860a-4a47-bda7-177605c8df0c, rgb(4, 17, 31)))`,
                                  },
                                  children: `Book a class`,
                                }),
                              }),
                            },
                            pCaysOqVK: {
                              children: a(i, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-29mx3t`,
                                  "data-styles-preset": `KSv8TCPWH`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31)))`,
                                  },
                                  children: `Book a class`,
                                }),
                              }),
                            },
                            r_ypCUA4W: {
                              children: a(i, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-29mx3t`,
                                  "data-styles-preset": `KSv8TCPWH`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b154a72e-860a-4a47-bda7-177605c8df0c, rgb(4, 17, 31)))`,
                                  },
                                  children: `Book a class`,
                                }),
                              }),
                            },
                            z878UxfRD: {
                              children: a(i, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-29mx3t`,
                                  "data-styles-preset": `KSv8TCPWH`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b154a72e-860a-4a47-bda7-177605c8df0c, rgb(4, 17, 31)))`,
                                  },
                                  children: `Book a class`,
                                }),
                              }),
                            },
                          },
                          S,
                          w
                        ),
                      }),
                      A(b !== !1) &&
                        a(Se, {
                          className: `framer-18o0sji`,
                          "data-framer-appear-id": `18o0sji`,
                          "data-framer-name": `Icon`,
                          layoutDependency: D,
                          layoutId: `KRX2BsNaM`,
                          style: {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            rotate: 0,
                          },
                          variants: {
                            "hV0mKfVQK-pressed": {
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              borderBottomLeftRadius: 0,
                              borderBottomRightRadius: 0,
                              borderTopLeftRadius: 0,
                              borderTopRightRadius: 0,
                              rotate: 0,
                            },
                            "r_ypCUA4W-hover": {
                              backgroundColor: `rgb(232, 234, 237)`,
                              borderBottomLeftRadius: 6,
                              borderBottomRightRadius: 6,
                              borderTopLeftRadius: 6,
                              borderTopRightRadius: 6,
                              rotate: 0,
                            },
                            "r_ypCUA4W-pressed": {
                              backgroundColor: `rgb(240, 241, 243)`,
                              borderBottomLeftRadius: 6,
                              borderBottomRightRadius: 6,
                              borderTopLeftRadius: 6,
                              borderTopRightRadius: 6,
                              rotate: 0,
                            },
                            "z878UxfRD-hover": {
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              borderBottomLeftRadius: 0,
                              borderBottomRightRadius: 0,
                              borderTopLeftRadius: 0,
                              borderTopRightRadius: 0,
                              rotate: 0,
                            },
                            "z878UxfRD-pressed": {
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              borderBottomLeftRadius: 0,
                              borderBottomRightRadius: 0,
                              borderTopLeftRadius: 0,
                              borderTopRightRadius: 0,
                              rotate: 0,
                            },
                            "ZQ13jNOYy-hover": { rotate: 360 },
                            "ZQ13jNOYy-pressed": { rotate: 360 },
                          },
                          ...q(
                            {
                              "r_ypCUA4W-hover": {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: X,
                                initial: Z,
                                optimized: !0,
                              },
                              "r_ypCUA4W-pressed": {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: X,
                                initial: Z,
                                optimized: !0,
                              },
                              "z878UxfRD-hover": {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: X,
                                initial: Z,
                                optimized: !0,
                              },
                              "z878UxfRD-pressed": {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: X,
                                initial: Z,
                                optimized: !0,
                              },
                              hV0mKfVQK: {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: X,
                                initial: Z,
                                optimized: !0,
                              },
                            },
                            S,
                            w
                          ),
                          children: a(xe, {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: De,
                            animated: !0,
                            className: `framer-ded71y`,
                            Component: K,
                            "data-framer-appear-id": `ded71y`,
                            initial: Oe,
                            layoutDependency: D,
                            layoutId: `xz500HYvp`,
                            optimized: !0,
                            style: {
                              "--1m6trwb": 1,
                              "--21h8s6": `var(--token-f7afab8f-991d-426d-a212-51d8456d5a36, rgb(252, 252, 252))`,
                              "--pgex8v": 1.5,
                            },
                            variants: {
                              "r_ypCUA4W-hover": {
                                "--1m6trwb": 0,
                                "--21h8s6": `rgb(0, 0, 0)`,
                                "--pgex8v": 2.5,
                              },
                              "r_ypCUA4W-pressed": {
                                "--1m6trwb": 0,
                                "--21h8s6": `rgb(4, 17, 31)`,
                                "--pgex8v": 2.5,
                              },
                              "z878UxfRD-hover": {
                                "--1m6trwb": 0,
                                "--21h8s6": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                                "--pgex8v": 2,
                              },
                              "z878UxfRD-pressed": {
                                "--1m6trwb": 0,
                                "--21h8s6": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                                "--pgex8v": 2,
                              },
                              hV0mKfVQK: {
                                "--1m6trwb": 0,
                                "--21h8s6": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                                "--pgex8v": 2,
                              },
                            },
                            ...q(
                              {
                                "r_ypCUA4W-hover": { animate: Q, Component: k },
                                "r_ypCUA4W-pressed": { animate: Q, Component: k },
                                "z878UxfRD-hover": { animate: Q, Component: W },
                                "z878UxfRD-pressed": { animate: Q, Component: W },
                                "ZQ13jNOYy-hover": { Component: L },
                                "ZQ13jNOYy-pressed": { Component: L },
                                hV0mKfVQK: { animate: Q, Component: W },
                              },
                              S,
                              w
                            ),
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-JILbr.framer-sjyp0w, .framer-JILbr .framer-sjyp0w { display: block; }`,
          `.framer-JILbr.framer-1njonpw { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 44px; justify-content: center; overflow: hidden; padding: 8px 12px 8px 12px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-JILbr .framer-8bdnlb { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; z-index: 0; }`,
          `.framer-JILbr .framer-1f2xesy { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }`,
          `.framer-JILbr .framer-18o0sji { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-JILbr .framer-ded71y { flex: none; height: auto; position: relative; width: 18px; }`,
          `.framer-JILbr.framer-v-3og9q0 .framer-8bdnlb, .framer-JILbr.framer-v-1a14s4t .framer-8bdnlb, .framer-JILbr.framer-v-ashwvn .framer-8bdnlb { order: 0; }`,
          `.framer-JILbr.framer-v-3og9q0 .framer-1f2xesy, .framer-JILbr.framer-v-1a14s4t .framer-1f2xesy, .framer-JILbr.framer-v-ashwvn .framer-1f2xesy { order: 1; }`,
          `.framer-JILbr.framer-v-ashwvn .framer-18o0sji, .framer-JILbr.framer-v-1a14s4t.hover .framer-18o0sji, .framer-JILbr.framer-v-1a14s4t.pressed .framer-18o0sji { order: 2; }`,
          `.framer-JILbr.framer-v-ashwvn .framer-ded71y, .framer-JILbr.framer-v-3og9q0.hover .framer-ded71y, .framer-JILbr.framer-v-3og9q0.pressed .framer-ded71y, .framer-JILbr.framer-v-1a14s4t.hover .framer-ded71y, .framer-JILbr.framer-v-1a14s4t.pressed .framer-ded71y { width: 14px; z-index: 1; }`,
          `.framer-JILbr.framer-v-3og9q0.hover.framer-1njonpw, .framer-JILbr.framer-v-3og9q0.pressed.framer-1njonpw { padding: 8px 6px 8px 12px; }`,
          `.framer-JILbr.framer-v-3og9q0.hover .framer-18o0sji, .framer-JILbr.framer-v-3og9q0.pressed .framer-18o0sji { order: 2; padding: 6px; }`,
          ...ue,
          `.framer-JILbr[data-border="true"]::after, .framer-JILbr [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-JILbr`
      )),
      ($.displayName = `Button`),
      ($.defaultProps = { height: 44, width: 105 }),
      g($, {
        variant: {
          options: [`ZQ13jNOYy`, `r_ypCUA4W`, `z878UxfRD`, `H_aBgTDEh`, `pCaysOqVK`, `hV0mKfVQK`],
          optionTitles: [
            `Primary star`,
            `Secondary Call`,
            `Secondary link`,
            `Primary Mobile`,
            `Secondary Mobile`,
            `Secondary link mobile`,
          ],
          title: `Variant`,
          type: S.Enum,
        },
        XQBi6J5Qe: {
          defaultValue: `Book a class`,
          displayTextArea: !1,
          title: `Title`,
          type: S.String,
        },
        onXQBi6J5QeChange: { changes: `XQBi6J5Qe`, type: S.ChangeHandler },
        bYMrbF3CO: { title: `Link`, type: S.Link },
        rzEJyeGCD: { defaultValue: !1, title: `New Tab`, type: S.Boolean },
        onrzEJyeGCDChange: { changes: `rzEJyeGCD`, type: S.ChangeHandler },
        Iw3bv_gkH: { defaultValue: !0, title: `Smooth Scroll`, type: S.Boolean },
        onIw3bv_gkHChange: { changes: `Iw3bv_gkH`, type: S.ChangeHandler },
        Og1_ZrdX2: { defaultValue: !0, title: `Show icon`, type: S.Boolean },
        onOg1_ZrdX2Change: { changes: `Og1_ZrdX2`, type: S.ChangeHandler },
      }),
      _(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...m(w),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { Pe as n, $ as t };
//# sourceMappingURL=O7WRG9NIo.DQFX-uT2.mjs.map
