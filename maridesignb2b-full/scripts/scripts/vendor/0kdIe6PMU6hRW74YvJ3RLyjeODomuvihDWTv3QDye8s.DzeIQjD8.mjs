import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  N as i,
  P as a,
  c as o,
  g as s,
  k as c,
  l,
  o as u,
  s as d,
  v as ee,
} from "./react.D20wc1Tc.mjs";
import { C as f, a as p, r as te, t as m } from "./motion.CkcImXlK.mjs";
import {
  A as h,
  B as g,
  C as _,
  D as v,
  E as y,
  Et as b,
  M as ne,
  N as x,
  Nt as re,
  S,
  St as C,
  T as w,
  Tt as T,
  U as ie,
  _ as ae,
  a as E,
  bt as D,
  c as oe,
  et as O,
  ft as se,
  gt as ce,
  ht as le,
  i as k,
  jt as A,
  kt as ue,
  lt as de,
  m as j,
  n as fe,
  nt as pe,
  o as M,
  p as N,
  pt as me,
  q as P,
  rt as F,
  ut as he,
  v as I,
  vt as ge,
  x as L,
  xt as R,
  z,
} from "./framer.yAIV6S8_.mjs";
import { i as _e, n as ve, r as ye, t as be } from "./aWuz3iYI_.DEIS9tXR.mjs";
import { i as xe, n as Se, r as Ce, t as we } from "./QesmqopY4.kXLSfQ0p.mjs";
import { n as Te, t as Ee } from "./O7WRG9NIo.DQFX-uT2.mjs";
import { a as De, c as Oe, i as ke, o as Ae, r as je, s as Me } from "./shared-lib.D6-R8ZSj.mjs";
import { a as Ne, i as Pe, n as Fe, o as Ie, r as Le, t as Re } from "./WqNZwSSw1.BxeBD53p.mjs";
import { n as ze, t as Be } from "./JrboWEA6q.BzEVjYMw.mjs";
import { n as Ve, t as He } from "./W_jPIyvpm.DzDEjYgv.mjs";
import { i as Ue, n as We } from "./tzJhfwJaL.BK0yVW5k.mjs";
import { i as Ge, n as Ke, r as qe, t as Je } from "./UN67IVlmf.QEFGp4eo.mjs";
import {
  a as Ye,
  c as Xe,
  i as Ze,
  n as Qe,
  o as $e,
  r as et,
  s as tt,
  t as nt,
} from "./LByYrvxAb.u-jDh2iK.mjs";
import rt, { t as it } from "./n476wkOjWELP3Q76_SQ5TB84bZQ6raZCDEAi4WQL5FE.Lmu8zNi6.mjs";
function B(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var at,
  ot,
  st,
  ct,
  lt,
  ut,
  V,
  H,
  U,
  W,
  G,
  K = e(() => {
    (u(),
      P(),
      m(),
      n(),
      Oe(),
      (at = { sPa59xvnI: { pressed: !0 }, U88ZBHbBg: { hover: !0 } }),
      (ot = [`U88ZBHbBg`, `sPa59xvnI`]),
      (st = `framer-okIvp`),
      (ct = { sPa59xvnI: `framer-v-1le78nt`, U88ZBHbBg: `framer-v-8wte9e` }),
      (lt = { bounce: 0.2, delay: 0, duration: 0.3, type: `spring` }),
      (ut = ({ value: e, children: n }) => {
        let r = c(p),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(p.Provider, { value: a, children: n });
      }),
      (V = { Desktop: `U88ZBHbBg`, Mobile: `sPa59xvnI` }),
      (H = f.create(i)),
      (U = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        kkbpC09Zr: n ?? i.kkbpC09Zr,
        variant: V[i.variant] ?? i.variant ?? `U88ZBHbBg`,
      })),
      (W = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = b(
        s(function (e, t) {
          let n = r(null),
            a = t ?? n,
            s = ee(),
            { activeLocale: c, setLocale: u } = ce();
          de();
          let { style: d, className: p, layoutId: m, variant: g, kkbpC09Zr: v, ...y } = U(e),
            {
              baseVariant: b,
              classNames: ne,
              clearLoadingGesture: x,
              gestureHandlers: re,
              gestureVariant: C,
              isLoading: w,
              setGestureState: ie,
              setVariant: ae,
              variants: E,
            } = T({
              cycleOrder: ot,
              defaultVariant: `U88ZBHbBg`,
              enabledGestures: at,
              ref: a,
              variant: g,
              variantClassNames: ct,
            }),
            D = W(e, E),
            oe = h(st, De),
            O = () => !(C === `sPa59xvnI-pressed` || b === `sPa59xvnI`);
          return o(te, {
            id: m ?? s,
            children: o(H, {
              animate: E,
              initial: !1,
              children: o(ut, {
                value: lt,
                children: o(N, {
                  href: v,
                  motionChild: !0,
                  nodeId: `U88ZBHbBg`,
                  openInNewTab: !1,
                  scopeId: `v5NzQnv4U`,
                  children: l(f.a, {
                    ...y,
                    ...re,
                    "aria-label": `button back`,
                    className: `${h(oe, `framer-8wte9e`, p, ne)} framer-11xr7e9`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: D,
                    layoutId: `U88ZBHbBg`,
                    ref: a,
                    style: { ...d },
                    ...B(
                      {
                        "sPa59xvnI-pressed": { "data-framer-name": void 0 },
                        "U88ZBHbBg-hover": { "data-framer-name": void 0 },
                        sPa59xvnI: { "data-framer-name": `Mobile` },
                      },
                      b,
                      C
                    ),
                    children: [
                      o(_, {
                        className: `framer-1jqa1eb`,
                        "data-framer-name": `Icon`,
                        fill: `var(--token-c0bda9fa-b03d-46d8-a14f-e38c505de169, rgb(91, 95, 99))`,
                        intrinsicHeight: 32,
                        intrinsicWidth: 32,
                        layoutDependency: D,
                        layoutId: `E2xxuyhA1`,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M228 128a12 12 0 0 1-12 12H69l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L69 116h147a12 12 0 0 1 12 12Z"/></svg>`,
                        withExternalLayout: !0,
                      }),
                      O() &&
                        o(S, {
                          __fromCanvasComponent: !0,
                          children: o(i, {
                            children: o(f.p, {
                              className: `framer-styles-preset-29mx3t`,
                              "data-styles-preset": `KSv8TCPWH`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31)))`,
                              },
                              children: `Projects`,
                            }),
                          }),
                          className: `framer-442bqe`,
                          fonts: [`Inter`],
                          layoutDependency: D,
                          layoutId: `pKV7uTmF3`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                          },
                          variants: {
                            "U88ZBHbBg-hover": {
                              "--extracted-r6o4lv": `var(--token-c0bda9fa-b03d-46d8-a14f-e38c505de169, rgb(91, 95, 99))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...B(
                            {
                              "U88ZBHbBg-hover": {
                                children: o(i, {
                                  children: o(f.p, {
                                    className: `framer-styles-preset-29mx3t`,
                                    "data-styles-preset": `KSv8TCPWH`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c0bda9fa-b03d-46d8-a14f-e38c505de169, rgb(91, 95, 99)))`,
                                    },
                                    children: `Projects`,
                                  }),
                                }),
                              },
                            },
                            b,
                            C
                          ),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-okIvp.framer-11xr7e9, .framer-okIvp .framer-11xr7e9 { display: block; }`,
          `.framer-okIvp.framer-8wte9e { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 4px 0px 4px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-okIvp .framer-1jqa1eb { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 13px); position: relative; width: 13px; }`,
          `.framer-okIvp .framer-442bqe { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-okIvp.framer-v-1le78nt.framer-8wte9e { padding: 12px; }`,
          `.framer-okIvp.framer-v-1le78nt .framer-1jqa1eb { height: var(--framer-aspect-ratio-supported, 16px); width: 16px; }`,
          `.framer-okIvp.framer-v-8wte9e.hover.framer-8wte9e { gap: 8px; padding: 0px 4px 0px 0px; }`,
          `.framer-okIvp.framer-v-1le78nt.pressed.framer-8wte9e { gap: 10px; }`,
          ...Ae,
        ],
        `framer-okIvp`
      )),
      (G.displayName = `Back Button`),
      (G.defaultProps = { height: 19.5, width: 81 }),
      v(G, {
        variant: {
          options: [`U88ZBHbBg`, `sPa59xvnI`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: M.Enum,
        },
        kkbpC09Zr: { title: `Link`, type: M.Link },
      }),
      y(
        G,
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
          ...g(Me),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  dt,
  ft,
  pt,
  q,
  mt = e(() => {
    (u(),
      P(),
      n(),
      (dt = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 4 4" xmlns="http://www.w3.org/2000/svg"><path d="M 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 C 0 0.895 0.895 0 2 0 Z" fill="var(--cd5j9v, var(--token-9fda5cf7-d60d-4aa3-a75a-b26e46e9be82, rgb(120, 120, 120)))" height="4px" id="ls6qfbgYP" width="4px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (ft = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? o(f.div, { ...a, layoutId: r, ref: t }) : o(`div`, { ...a, ref: t });
      })),
      (pt = ({ fill: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        iqVWwk0Wm:
          e ??
          i.iqVWwk0Wm ??
          `var(--token-9fda5cf7-d60d-4aa3-a75a-b26e46e9be82, rgb(120, 120, 120))`,
      })),
      (q = b(
        s(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, iqVWwk0Wm: s, ...c } = pt(e);
          return o(ft, {
            ...c,
            className: h(`framer-QHfMB`, r),
            layoutId: i,
            ref: t,
            style: { "--cd5j9v": s, ...n },
          });
        }),
        [
          `.framer-QHfMB { -webkit-mask: ${dt}; aspect-ratio: 1; background-color: var(--cd5j9v); mask: ${dt}; width: 4px; }`,
        ],
        `framer-QHfMB`
      )),
      (q.displayName = `Vector`),
      v(q, {
        iqVWwk0Wm: {
          defaultValue: `var(--token-9fda5cf7-d60d-4aa3-a75a-b26e46e9be82, rgb(120, 120, 120)) /* {"name":"Text light"} */`,
          hidden: !1,
          title: `Fill`,
          type: M.Color,
        },
      }));
  });
function ht(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  J,
  Et = e(() => {
    (u(),
      P(),
      m(),
      n(),
      mt(),
      _e(),
      (gt = z(q)),
      (_t = [`hbDITOrAT`, `sFDVoOfT2`]),
      (vt = `framer-eVS4t`),
      (yt = { hbDITOrAT: `framer-v-1cm6ava`, sFDVoOfT2: `framer-v-n4nsvi` }),
      (bt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (xt = ({ value: e, children: n }) => {
        let r = c(p),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(p.Provider, { value: a, children: n });
      }),
      (St = { "With Bullet Point": `hbDITOrAT`, "Without Bullet Point": `sFDVoOfT2` }),
      (Ct = f.create(i)),
      (wt = ({ height: e, id: t, text: n, width: r, ...i }) => ({
        ...i,
        cWjfs3gLT: n ?? i.cWjfs3gLT ?? `10% Increase in user engagement`,
        variant: St[i.variant] ?? i.variant ?? `hbDITOrAT`,
      })),
      (Tt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = b(
        s(function (e, t) {
          let n = r(null),
            a = t ?? n,
            s = ee(),
            { activeLocale: c, setLocale: u } = ce();
          de();
          let { style: d, className: p, layoutId: m, variant: g, cWjfs3gLT: _, ...v } = wt(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: ne,
              gestureHandlers: x,
              gestureVariant: re,
              isLoading: C,
              setGestureState: w,
              setVariant: ie,
              variants: ae,
            } = T({
              cycleOrder: _t,
              defaultVariant: `hbDITOrAT`,
              ref: a,
              variant: g,
              variantClassNames: yt,
            }),
            E = Tt(e, ae),
            D = h(vt, be),
            oe = () => y !== `sFDVoOfT2`;
          return o(te, {
            id: m ?? s,
            children: o(Ct, {
              animate: ae,
              initial: !1,
              children: o(xt, {
                value: bt,
                children: l(f.div, {
                  ...v,
                  ...x,
                  className: h(D, `framer-1cm6ava`, p, b),
                  "data-framer-name": `With Bullet Point`,
                  layoutDependency: E,
                  layoutId: `hbDITOrAT`,
                  ref: a,
                  style: { ...d },
                  ...ht({ sFDVoOfT2: { "data-framer-name": `Without Bullet Point` } }, y, re),
                  children: [
                    oe() &&
                      o(f.div, {
                        className: `framer-fcu9n9`,
                        "data-framer-name": `Container`,
                        layoutDependency: E,
                        layoutId: `WXlRbOCIC`,
                        children: o(q, {
                          animated: !0,
                          className: `framer-17tl886`,
                          layoutDependency: E,
                          layoutId: `WvTqZK5jZ`,
                          style: {
                            "--cd5j9v": `var(--token-9fda5cf7-d60d-4aa3-a75a-b26e46e9be82, rgb(120, 120, 120))`,
                          },
                        }),
                      }),
                    o(S, {
                      __fromCanvasComponent: !0,
                      children: o(i, {
                        children: o(f.p, {
                          className: `framer-styles-preset-1smn5pm`,
                          "data-styles-preset": `aWuz3iYI_`,
                          dir: `auto`,
                          children: `10% Increase in user engagement`,
                        }),
                      }),
                      className: `framer-1s79a19`,
                      fonts: [`Inter`],
                      layoutDependency: E,
                      layoutId: `AmMn5Wad4`,
                      style: {
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: _,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-eVS4t.framer-1hj1d2v, .framer-eVS4t .framer-1hj1d2v { display: block; }`,
          `.framer-eVS4t.framer-1cm6ava { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 258px; }`,
          `.framer-eVS4t .framer-fcu9n9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 8px 8px 0px; position: relative; width: min-content; }`,
          `.framer-eVS4t .framer-17tl886 { flex: none; height: var(--framer-aspect-ratio-supported, 4px); position: relative; width: 4px; }`,
          `.framer-eVS4t .framer-1s79a19 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          ...ve,
        ],
        `framer-eVS4t`
      )),
      (J.displayName = `Bullet Point`),
      (J.defaultProps = { height: 46.5, width: 257.5 }),
      v(J, {
        variant: {
          options: [`hbDITOrAT`, `sFDVoOfT2`],
          optionTitles: [`With Bullet Point`, `Without Bullet Point`],
          title: `Variant`,
          type: M.Enum,
        },
        cWjfs3gLT: {
          defaultValue: `10% Increase in user engagement`,
          displayTextArea: !1,
          title: `Text`,
          type: M.String,
        },
        oncWjfs3gLTChange: { changes: `cWjfs3gLT`, type: M.ChangeHandler },
      }),
      y(
        J,
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
          ...gt,
          ...g(ye),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Dt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Y,
  Vt = e(() => {
    (u(),
      P(),
      m(),
      n(),
      Ze(),
      Et(),
      (Ot = z(J)),
      (kt = [`D0eLJX5gB`, `tVKz0YB6C`]),
      (At = `framer-MKsdT`),
      (jt = { D0eLJX5gB: `framer-v-8qrre8`, tVKz0YB6C: `framer-v-12a1iv0` }),
      (Mt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Nt = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Pt = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (Ft = ({ value: e, children: n }) => {
        let r = c(p),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(p.Provider, { value: a, children: n });
      }),
      (It = { Desktop: `D0eLJX5gB`, Phone: `tVKz0YB6C` }),
      (Lt = f.create(i)),
      (Rt = (e, t) => {
        let [n, r] = a(e),
          [i, o] = a(e);
        return t ? [e, t] : (e !== i && (r(e), o(e)), [n, r]);
      }),
      (zt = ({ height: e, id: t, platform: n, role: r, team: i, timeline: a, width: o, ...s }) => ({
        ...s,
        cW1cohlEu: r ?? s.cW1cohlEu ?? `Product Designer`,
        RU1j9wb9P: n ?? s.RU1j9wb9P ?? `Web app`,
        variant: It[s.variant] ?? s.variant ?? `D0eLJX5gB`,
        x8ehWliOF: i ?? s.x8ehWliOF ?? `3 Designers`,
        xE4v4szed: a ?? s.xE4v4szed ?? `May 2026`,
      })),
      (Bt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = b(
        s(function (e, t) {
          let n = r(null),
            a = t ?? n,
            s = ee(),
            { activeLocale: c, setLocale: u } = ce(),
            d = de(),
            {
              style: p,
              className: m,
              layoutId: g,
              variant: _,
              cW1cohlEu: v,
              oncW1cohlEuChange: y,
              x8ehWliOF: b,
              onx8ehWliOFChange: ne,
              xE4v4szed: x,
              onxE4v4szedChange: re,
              RU1j9wb9P: C,
              onRU1j9wb9PChange: ie,
              ...ae
            } = zt(e),
            [E, D] = Rt(v, y),
            [oe, O] = Rt(b, ne),
            [se, le] = Rt(x, re),
            [A, ue] = Rt(C, ie),
            {
              baseVariant: j,
              classNames: fe,
              clearLoadingGesture: pe,
              gestureHandlers: M,
              gestureVariant: N,
              isLoading: me,
              setGestureState: P,
              setVariant: F,
              variants: he,
            } = T({
              cycleOrder: kt,
              defaultVariant: `D0eLJX5gB`,
              ref: a,
              variant: _,
              variantClassNames: jt,
            }),
            I = Bt(e, he),
            ge = h(At, nt),
            L = Pt(E);
          return o(te, {
            id: g ?? s,
            children: o(Lt, {
              animate: he,
              initial: !1,
              children: o(Ft, {
                value: Mt,
                children: l(f.div, {
                  ...ae,
                  ...M,
                  className: h(ge, `framer-8qrre8`, m, fe),
                  "data-framer-name": `Desktop`,
                  layoutDependency: I,
                  layoutId: `D0eLJX5gB`,
                  ref: a,
                  style: { ...p },
                  ...Dt({ tVKz0YB6C: { "data-framer-name": `Phone` } }, j, N),
                  children: [
                    l(f.div, {
                      className: `framer-1d0jr2k`,
                      "data-framer-name": `Impact`,
                      layoutDependency: I,
                      layoutId: `kTPD2caGr`,
                      children: [
                        o(S, {
                          __fromCanvasComponent: !0,
                          children: o(i, {
                            children: o(f.h4, {
                              className: `framer-styles-preset-oj7faz`,
                              "data-styles-preset": `LByYrvxAb`,
                              dir: `auto`,
                              children: `Роль`,
                            }),
                          }),
                          className: `framer-xih1ut`,
                          fonts: [`Inter`],
                          layoutDependency: I,
                          layoutId: `tES_vIcpk`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        o(f.div, {
                          className: `framer-i1460v`,
                          "data-framer-name": `Content`,
                          layoutDependency: I,
                          layoutId: `whdL8JUeF`,
                          children: o(k, {
                            height: 46,
                            width: `max((${d?.width || `100vw`} - 60px) / 4, 126px)`,
                            y: (d?.y || 0) + 0 + 0 + 0 + 28.4 + 0 + 0,
                            ...Dt(
                              { tVKz0YB6C: { width: `max(${d?.width || `100vw`} / 2, 126px)` } },
                              j,
                              N
                            ),
                            children: o(w, {
                              className: `framer-f387zl-container`,
                              layoutDependency: I,
                              layoutId: `iwTqHkReD-container`,
                              nodeId: `iwTqHkReD`,
                              rendersWithMotion: !0,
                              scopeId: `vo6BAL54p`,
                              children: o(J, {
                                cWjfs3gLT: E,
                                height: `100%`,
                                id: `iwTqHkReD`,
                                layoutId: `iwTqHkReD`,
                                oncWjfs3gLTChange: D,
                                style: { width: `100%` },
                                variant: Nt(`sFDVoOfT2`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    l(f.div, {
                      className: `framer-jij8zm`,
                      "data-framer-name": `Team`,
                      layoutDependency: I,
                      layoutId: `IETstXuFa`,
                      children: [
                        o(S, {
                          __fromCanvasComponent: !0,
                          children: o(i, {
                            children: o(f.h4, {
                              className: `framer-styles-preset-oj7faz`,
                              "data-styles-preset": `LByYrvxAb`,
                              dir: `auto`,
                              children: `Таймлайн`,
                            }),
                          }),
                          className: `framer-133abbe`,
                          fonts: [`Inter`],
                          layoutDependency: I,
                          layoutId: `j4KXsV9nd`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        o(f.div, {
                          className: `framer-p0fnd8`,
                          "data-framer-name": `Content`,
                          layoutDependency: I,
                          layoutId: `eyQFeA5oQ`,
                          children: o(k, {
                            height: 46,
                            width: `max((${d?.width || `100vw`} - 60px) / 4, 126px)`,
                            y: (d?.y || 0) + 0 + 0 + 0 + 28.4 + 0 + 0,
                            ...Dt(
                              { tVKz0YB6C: { width: `max(${d?.width || `100vw`} / 2, 126px)` } },
                              j,
                              N
                            ),
                            children: o(w, {
                              className: `framer-56a03-container`,
                              layoutDependency: I,
                              layoutId: `H4p3hGlHA-container`,
                              nodeId: `H4p3hGlHA`,
                              rendersWithMotion: !0,
                              scopeId: `vo6BAL54p`,
                              children: o(J, {
                                cWjfs3gLT: se,
                                height: `100%`,
                                id: `H4p3hGlHA`,
                                layoutId: `H4p3hGlHA`,
                                oncWjfs3gLTChange: le,
                                style: { width: `100%` },
                                variant: Nt(`sFDVoOfT2`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    l(f.div, {
                      className: `framer-1fyyxae`,
                      "data-framer-name": `Role`,
                      layoutDependency: I,
                      layoutId: `x8putZhTe`,
                      children: [
                        o(S, {
                          __fromCanvasComponent: !0,
                          children: o(i, {
                            children: o(f.h4, {
                              className: `framer-styles-preset-oj7faz`,
                              "data-styles-preset": `LByYrvxAb`,
                              dir: `auto`,
                              children: `Команда`,
                            }),
                          }),
                          className: `framer-1q05aac`,
                          fonts: [`Inter`],
                          layoutDependency: I,
                          layoutId: `WVUW2Hic1`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        o(f.div, {
                          className: `framer-yk9nnj`,
                          "data-framer-name": `Content`,
                          layoutDependency: I,
                          layoutId: `QjVoGrbYl`,
                          children: o(k, {
                            height: 46,
                            width: `max((${d?.width || `100vw`} - 60px) / 4, 126px)`,
                            y: (d?.y || 0) + 0 + 0 + 0 + 28.4 + 0 + 0,
                            ...Dt(
                              {
                                tVKz0YB6C: {
                                  width: `max(${d?.width || `100vw`} / 2, 126px)`,
                                  y: (d?.y || 0) + 0 + 94.4 + 0 + 28.4 + 0 + 0,
                                },
                              },
                              j,
                              N
                            ),
                            children: o(w, {
                              className: `framer-opoe5k-container`,
                              layoutDependency: I,
                              layoutId: `mL5ZcFVUk-container`,
                              nodeId: `mL5ZcFVUk`,
                              rendersWithMotion: !0,
                              scopeId: `vo6BAL54p`,
                              children: o(J, {
                                cWjfs3gLT: oe,
                                height: `100%`,
                                id: `mL5ZcFVUk`,
                                layoutId: `mL5ZcFVUk`,
                                oncWjfs3gLTChange: O,
                                style: { width: `100%` },
                                variant: Nt(`sFDVoOfT2`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    l(f.div, {
                      className: `framer-1mk6ggf`,
                      "data-framer-name": `Role`,
                      layoutDependency: I,
                      layoutId: `YlSdAWGep`,
                      children: [
                        o(S, {
                          __fromCanvasComponent: !0,
                          children: o(i, {
                            children: o(f.h4, {
                              className: `framer-styles-preset-oj7faz`,
                              "data-styles-preset": `LByYrvxAb`,
                              dir: `auto`,
                              children: `Платформа`,
                            }),
                          }),
                          className: `framer-gvrgx6`,
                          fonts: [`Inter`],
                          layoutDependency: I,
                          layoutId: `EmNlxAQ5_`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        o(f.div, {
                          className: `framer-sc4zrx`,
                          "data-framer-name": `Content`,
                          layoutDependency: I,
                          layoutId: `JbrYD5kZg`,
                          children:
                            L !== !1 &&
                            o(k, {
                              height: 46,
                              width: `max((${d?.width || `100vw`} - 60px) / 4, 126px)`,
                              y: (d?.y || 0) + 0 + 0 + 0 + 28.4 + 0 + 25,
                              ...Dt(
                                {
                                  tVKz0YB6C: {
                                    width: `max(${d?.width || `100vw`} / 2, 126px)`,
                                    y: (d?.y || 0) + 0 + 94.4 + 0 + 28.4 + 0 + 25,
                                  },
                                },
                                j,
                                N
                              ),
                              children: o(w, {
                                className: `framer-1o7jwb6-container`,
                                layoutDependency: I,
                                layoutId: `MbiOp2byb-container`,
                                nodeId: `MbiOp2byb`,
                                rendersWithMotion: !0,
                                scopeId: `vo6BAL54p`,
                                children: o(J, {
                                  cWjfs3gLT: A,
                                  height: `100%`,
                                  id: `MbiOp2byb`,
                                  layoutId: `MbiOp2byb`,
                                  oncWjfs3gLTChange: ue,
                                  style: { width: `100%` },
                                  variant: Nt(`sFDVoOfT2`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-MKsdT.framer-1jehbxz, .framer-MKsdT .framer-1jehbxz { display: block; }`,
          `.framer-MKsdT.framer-8qrre8 { display: grid; gap: 20px 20px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(126px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; max-width: 1140px; overflow: visible; padding: 0px; position: relative; width: 840px; }`,
          `.framer-MKsdT .framer-1d0jr2k, .framer-MKsdT .framer-jij8zm, .framer-MKsdT .framer-1fyyxae, .framer-MKsdT .framer-1mk6ggf { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-MKsdT .framer-xih1ut, .framer-MKsdT .framer-133abbe, .framer-MKsdT .framer-1q05aac, .framer-MKsdT .framer-gvrgx6 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-MKsdT .framer-i1460v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-MKsdT .framer-f387zl-container, .framer-MKsdT .framer-56a03-container, .framer-MKsdT .framer-opoe5k-container, .framer-MKsdT .framer-1o7jwb6-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-MKsdT .framer-p0fnd8, .framer-MKsdT .framer-yk9nnj, .framer-MKsdT .framer-sc4zrx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-MKsdT.framer-v-12a1iv0.framer-8qrre8 { gap: 20px 0px; grid-template-columns: repeat(2, minmax(126px, 1fr)); grid-template-rows: repeat(3, min-content); width: 350px; }`,
          ...Qe,
        ],
        `framer-MKsdT`
      )),
      (Y.displayName = `Overview Card`),
      (Y.defaultProps = { height: 52, width: 840 }),
      v(Y, {
        variant: {
          options: [`D0eLJX5gB`, `tVKz0YB6C`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: M.Enum,
        },
        cW1cohlEu: {
          defaultValue: `Product Designer`,
          displayTextArea: !1,
          title: `Role`,
          type: M.String,
        },
        oncW1cohlEuChange: { changes: `cW1cohlEu`, type: M.ChangeHandler },
        x8ehWliOF: {
          defaultValue: `3 Designers`,
          displayTextArea: !1,
          title: `Team`,
          type: M.String,
        },
        onx8ehWliOFChange: { changes: `x8ehWliOF`, type: M.ChangeHandler },
        xE4v4szed: {
          defaultValue: `May 2026`,
          displayTextArea: !1,
          title: `Timeline`,
          type: M.String,
        },
        onxE4v4szedChange: { changes: `xE4v4szed`, type: M.ChangeHandler },
        RU1j9wb9P: {
          defaultValue: `Web app`,
          displayTextArea: !1,
          title: `Platform`,
          type: M.String,
        },
        onRU1j9wb9PChange: { changes: `RU1j9wb9P`, type: M.ChangeHandler },
      }),
      y(
        Y,
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
          ...Ot,
          ...g(et),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Y.loader = { load: (e, t) => pe([() => x(J, {}, t)], t) }));
  }),
  Ht,
  Ut,
  Wt,
  Gt = e(() => {
    (P(),
      ne.loadFonts([`FS;Manrope-semibold`, `FS;Manrope-bold`]),
      (Ht = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/JNU3GNMUBPWW6V6JTED3S27XL5HN7NM5.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Ut = [
        `.framer-7G3zV .framer-styles-preset-ng3td7:not(.rich-text-wrapper), .framer-7G3zV .framer-styles-preset-ng3td7.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, #04111f); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Wt = `framer-7G3zV`));
  }),
  Kt,
  qt,
  Jt,
  Yt = e(() => {
    (P(),
      ne.loadFonts([]),
      (Kt = [{ explicitInter: !0, fonts: [] }]),
      (qt = [
        `.framer-xBwNV .framer-styles-preset-513yjj:not(.rich-text-wrapper), .framer-xBwNV .framer-styles-preset-513yjj.rich-text-wrapper a { --framer-link-text-color: var(--token-51d11642-d88a-481a-9928-4807c91d56bc, #717880); }`,
      ]),
      (Jt = `framer-xBwNV`));
  }),
  Xt,
  Zt,
  X,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  Z,
  Q,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  $,
  Vn;
e(() => {
  (u(),
    P(),
    m(),
    n(),
    ke(),
    ze(),
    Te(),
    K(),
    Vt(),
    Ie(),
    Ve(),
    Ue(),
    _e(),
    Xe(),
    Ze(),
    xe(),
    Ge(),
    Pe(),
    Gt(),
    Yt(),
    it(),
    (Xt = z(G)),
    (Zt = z(Ne)),
    (X = re(Ne)),
    (Qt = A(f.nav)),
    ($t = A(f.div)),
    (en = A(S)),
    (tn = z(Be)),
    (nn = A(E)),
    (rn = z(Y)),
    (an = z(Ee)),
    (on = A(f.section)),
    (sn = z(He)),
    (cn = A(ue(E))),
    (ln = z(je)),
    (un = {
      n8f6YaKM3: `(max-width: 809.98px)`,
      rtSUEPJr9: `(min-width: 810px) and (max-width: 1279.98px)`,
      YkHjEhBZd: `(min-width: 1280px)`,
    }),
    (dn = []),
    (fn = `framer-iD016`),
    (pn = {
      n8f6YaKM3: `framer-v-k8kmwx`,
      rtSUEPJr9: `framer-v-1myucei`,
      YkHjEhBZd: `framer-v-bv24gb`,
    }),
    (mn = (e, t, n) => (e && t ? `position` : n)),
    (hn = (e, t) => `translateX(-50%) ${t}`),
    (gn = { bounce: 0, delay: 0, duration: 1.1, type: `spring` }),
    (_n = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: gn,
      x: 0,
      y: 0,
    }),
    (vn = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: -86,
    }),
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Q = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 20,
    }),
    (yn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.1, duration: 1.1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (bn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.2, duration: 1.1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (xn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.3, duration: 1.1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Sn = (e, t) => {
      switch (e) {
        case `Dtkdk_rN7`:
          return `SMpBiPeS1`;
        case `UbHlI6bSe`:
          return `aHFIrjR_v`;
        default:
          return `SMpBiPeS1`;
      }
    }),
    (Cn = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (wn = (e, t) => {
      switch (e) {
        case `FKda01Vna`:
          return `Upload`;
        case `eUSj4yj5q`:
          return `URL`;
        default:
          return `Upload`;
      }
    }),
    (Tn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.4, duration: 1.1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (En = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.5, duration: 1.1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Dn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 10,
    }),
    (On = (e, t) => ({ ...e, delay: (e.delay ?? 0) + t })),
    (kn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: gn,
      x: 0,
      y: 10,
    }),
    (An = (e, t) => {
      switch (e) {
        case `Dtkdk_rN7`:
          return `gA3EhiVzV`;
        case `UbHlI6bSe`:
          return `ZH3MCZaaW`;
        default:
          return `gA3EhiVzV`;
      }
    }),
    (jn = (e, t) => {
      switch (e) {
        case `eUSj4yj5q`:
          return `URL`;
        case `FKda01Vna`:
          return `Upload`;
        default:
          return `Upload`;
      }
    }),
    (Mn = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 10,
    }),
    (Nn = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (Pn = (e) => ({
      from: { alias: `WGXriBHEM`, data: We, type: `Collection` },
      limit: { type: `LiteralValue`, value: 3 },
      select: [
        { collection: `WGXriBHEM`, name: `wQJV2FDxC`, type: `Identifier` },
        { collection: `WGXriBHEM`, name: `cCwylbwLp`, type: `Identifier` },
        { collection: `WGXriBHEM`, name: `yfOBdZpe5`, type: `Identifier` },
        { collection: `WGXriBHEM`, name: `aL4Wth1f7`, type: `Identifier` },
        { collection: `WGXriBHEM`, name: `wGmP6opvl`, type: `Identifier` },
        { collection: `WGXriBHEM`, name: `UChNSq1Q_`, type: `Identifier` },
        { collection: `WGXriBHEM`, name: `k4oLSKb7X`, type: `Identifier` },
        { collection: `WGXriBHEM`, name: `prRfGy3rq`, type: `Identifier` },
        { collection: `WGXriBHEM`, name: `id`, type: `Identifier` },
      ],
      where: {
        operator: `not`,
        type: `UnaryOperation`,
        value: {
          left: { collection: `WGXriBHEM`, name: `wGmP6opvl`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
      },
    })),
    (Fn = (e) => ({
      from: { alias: `WGXriBHEM`, data: We, type: `Collection` },
      select: [
        { collection: `WGXriBHEM`, name: `wQJV2FDxC`, type: `Identifier` },
        { collection: `WGXriBHEM`, name: `cCwylbwLp`, type: `Identifier` },
        { collection: `WGXriBHEM`, name: `yfOBdZpe5`, type: `Identifier` },
        { collection: `WGXriBHEM`, name: `aL4Wth1f7`, type: `Identifier` },
        { collection: `WGXriBHEM`, name: `wGmP6opvl`, type: `Identifier` },
        { collection: `WGXriBHEM`, name: `UChNSq1Q_`, type: `Identifier` },
        { collection: `WGXriBHEM`, name: `k4oLSKb7X`, type: `Identifier` },
        { collection: `WGXriBHEM`, name: `prRfGy3rq`, type: `Identifier` },
        { collection: `WGXriBHEM`, name: `id`, type: `Identifier` },
      ],
      where: {
        operator: `not`,
        type: `UnaryOperation`,
        value: {
          left: { collection: `WGXriBHEM`, name: `wGmP6opvl`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
      },
    })),
    (In = ({ query: e, pageSize: t, children: n }) => n(D(e))),
    (Ln = { Desktop: `YkHjEhBZd`, Phone: `n8f6YaKM3`, Tablet: `rtSUEPJr9` }),
    (Rn = ({ value: e }) =>
      le()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (zn = (e) => ({
      from: { alias: `xYCOw7mrL`, data: We, type: `Collection` },
      select: [
        { collection: `xYCOw7mrL`, name: `wGmP6opvl`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `UChNSq1Q_`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `VLnZ4w5Mq`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `gKAeE6He4`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `enb_IUJvR`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `wQJV2FDxC`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `cCwylbwLp`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `yfOBdZpe5`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `SaywN999j`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `QHYONdQ55`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `iKxJMOz9b`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `xfESysqZB`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `ZKxSAzHNf`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `NsQ0viaaT`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `Yc46Q2PBQ`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `D5staE15L`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `aAVS0yPhT`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `D5tP4yAdv`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `Nr0_8ishT`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `pG1j07DsE`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `hyqTm7AVS`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `CBi5KRF1g`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `GpN8XGVm9`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `HX7E82dj3`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `MvjXBVwYi`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `NY1WKHUXO`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `WIPmxBPUt`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `AGpgE3XB0`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `F5CDs2C9J`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `atsSlGLdR`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `IC84bxSxd`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `vGhV2IPkf`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `FVUPfYq02`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `zjWZfdnKB`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `y4IxDV55i`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `sYwjXYBve`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `GPgRf1ixy`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `JAAYEQbcn`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `bWsdTb1zV`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `uC2tcn2oQ`, type: `Identifier` },
        { collection: `xYCOw7mrL`, name: `djxq8gHin`, type: `Identifier` },
      ],
      where: e,
    })),
    (Bn = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Ln[r.variant] ?? r.variant ?? `YkHjEhBZd`,
    })),
    ($ = b(
      s(function (e, n) {
        let a = r(null),
          s = n ?? a,
          u = ee(),
          { activeLocale: m, setLocale: g } = ce(),
          _ = de(),
          v = he(),
          [y] = D(zn(ie(v, `xYCOw7mrL`))),
          b = (e) => {
            if (!y) throw new j(`No data matches path variables: ${JSON.stringify(v)}`);
            return y[e];
          },
          {
            style: ne,
            className: x,
            layoutId: re,
            variant: w,
            wGmP6opvl: T = b(`wGmP6opvl`) ?? ``,
            UChNSq1Q_: O = b(`UChNSq1Q_`) ?? ``,
            VLnZ4w5Mq: le = b(`VLnZ4w5Mq`) ?? ``,
            gKAeE6He4: A = b(`gKAeE6He4`) ?? ``,
            enb_IUJvR: ue = b(`enb_IUJvR`) ?? ``,
            wQJV2FDxC: pe = b(`wQJV2FDxC`),
            cCwylbwLp: M = b(`cCwylbwLp`),
            yfOBdZpe5: N = b(`yfOBdZpe5`),
            SaywN999j: P = b(`SaywN999j`) ?? `#09F`,
            QHYONdQ55: F = b(`QHYONdQ55`) ?? !0,
            iKxJMOz9b: z = b(`iKxJMOz9b`) ?? ``,
            xfESysqZB: _e = b(`xfESysqZB`) ?? ``,
            ZKxSAzHNf: ve = b(`ZKxSAzHNf`) ?? ``,
            NsQ0viaaT: ye = b(`NsQ0viaaT`) ?? ``,
            Yc46Q2PBQ: xe = b(`Yc46Q2PBQ`) ?? !0,
            D5staE15L: Se = b(`D5staE15L`) ?? ``,
            aAVS0yPhT: Ce = b(`aAVS0yPhT`) ?? ``,
            D5tP4yAdv: Te = b(`D5tP4yAdv`) ?? !0,
            Nr0_8ishT: De = b(`Nr0_8ishT`) ?? ``,
            pG1j07DsE: Oe = b(`pG1j07DsE`) ?? ``,
            hyqTm7AVS: ke = b(`hyqTm7AVS`) ?? ``,
            CBi5KRF1g: Ae = b(`CBi5KRF1g`) ?? !0,
            GpN8XGVm9: Me = b(`GpN8XGVm9`) ?? ``,
            HX7E82dj3: Ne = b(`HX7E82dj3`) ?? ``,
            MvjXBVwYi: Pe = b(`MvjXBVwYi`) ?? ``,
            NY1WKHUXO: Fe = b(`NY1WKHUXO`) ?? !0,
            WIPmxBPUt: Ie = b(`WIPmxBPUt`) ?? ``,
            AGpgE3XB0: Le = b(`AGpgE3XB0`) ?? ``,
            F5CDs2C9J: ze = b(`F5CDs2C9J`) ?? ``,
            atsSlGLdR: Ve = b(`atsSlGLdR`) ?? !0,
            IC84bxSxd: Ue = b(`IC84bxSxd`) ?? ``,
            vGhV2IPkf: We = b(`vGhV2IPkf`) ?? ``,
            FVUPfYq02: Ge = b(`FVUPfYq02`) ?? ``,
            zjWZfdnKB: Ke = b(`zjWZfdnKB`) ?? !0,
            y4IxDV55i: qe = b(`y4IxDV55i`) ?? ``,
            sYwjXYBve: Xe = b(`sYwjXYBve`) ?? ``,
            GPgRf1ixy: Ze = b(`GPgRf1ixy`) ?? ``,
            JAAYEQbcn: Qe = b(`JAAYEQbcn`) ?? !0,
            bWsdTb1zV: $e = b(`bWsdTb1zV`) ?? ``,
            uC2tcn2oQ: et = b(`uC2tcn2oQ`) ?? ``,
            djxq8gHin: tt = b(`djxq8gHin`) ?? ``,
            ...it
          } = Bn(e);
        ge(t(() => rt({ wGmP6opvl: T }, m), [T, m]));
        let [B, at] = me(w, un, !1),
          ot = h(fn, Ye, Re, be, Wt, Je, we, nt, Jt),
          st = c(oe)?.isLayoutTemplate,
          ct = !!c(p)?.transition?.layout,
          lt = mn(st, ct);
        C();
        let ut = r(null),
          V = r(null),
          H = r(null),
          U = r(null),
          W = r(null),
          K = r(null),
          dt = R(`IFUYWcQbh`),
          ft = r(null),
          pt = R(`PxgoJZBCV`),
          q = R(`PkmMH3HIg`),
          mt = R(`tvUan5Wi2`),
          ht = R(`wwOoxBDVX`),
          gt = R(`tNFuzW41X`),
          _t = R(`t5J31CYjK`);
        return (
          se({}),
          o(oe.Provider, {
            value: {
              activeVariantId: B,
              humanReadableVariantMap: Ln,
              primaryVariantId: `YkHjEhBZd`,
              variantClassNames: pn,
            },
            children: l(te, {
              id: re ?? u,
              children: [
                o(Rn, {
                  value: `html body { background: var(--token-f7afab8f-991d-426d-a212-51d8456d5a36, rgb(252, 252, 252)); }`,
                }),
                l(f.div, {
                  ...it,
                  className: h(ot, `framer-bv24gb`, x),
                  ref: s,
                  style: { ...ne },
                  children: [
                    o(I, {
                      breakpoint: B,
                      overrides: { n8f6YaKM3: { transformTemplate: void 0 } },
                      children: l(Qt, {
                        animate: _n,
                        className: `framer-yg3n5y`,
                        "data-framer-appear-id": `yg3n5y`,
                        "data-framer-name": `Navbar`,
                        initial: vn,
                        layout: lt,
                        optimized: !0,
                        transformTemplate: hn,
                        children: [
                          o(L, {
                            links: [
                              { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(I, {
                                breakpoint: B,
                                overrides: { n8f6YaKM3: { y: 21.5 } },
                                children: o(k, {
                                  height: 19,
                                  y: 53,
                                  children: o(E, {
                                    className: `framer-1spbstq-container`,
                                    nodeId: `Tyi_epJiO`,
                                    scopeId: `xYCOw7mrL`,
                                    children: o(I, {
                                      breakpoint: B,
                                      overrides: {
                                        n8f6YaKM3: { kkbpC09Zr: e[2], variant: Z(`sPa59xvnI`) },
                                        rtSUEPJr9: { kkbpC09Zr: e[1] },
                                      },
                                      children: o(G, {
                                        height: `100%`,
                                        id: `Tyi_epJiO`,
                                        kkbpC09Zr: e[0],
                                        layoutId: `Tyi_epJiO`,
                                        variant: Z(`U88ZBHbBg`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                          o(`div`, {
                            className: `framer-1a16a4w`,
                            "data-framer-name": `Divider`,
                            children: o(`div`, { className: `framer-1vq6d43` }),
                          }),
                          l(`div`, {
                            className: `framer-1nt2bcr`,
                            "data-framer-name": `Links`,
                            "data-hide-scrollbars": !0,
                            children: [
                              Te !== !1 &&
                                o(L, {
                                  links: [
                                    {
                                      href: {
                                        hash: `:PxgoJZBCV`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        hash: `:PxgoJZBCV`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        hash: `:PxgoJZBCV`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    o(I, {
                                      breakpoint: B,
                                      overrides: { n8f6YaKM3: { y: 12.5 } },
                                      children: o(k, {
                                        height: 37,
                                        y: 44,
                                        children: o(E, {
                                          className: `framer-a9hq9g-container`,
                                          nodeId: `LF6Dz1kSc`,
                                          rendersWithMotion: !0,
                                          scopeId: `xYCOw7mrL`,
                                          children: o(I, {
                                            breakpoint: B,
                                            overrides: {
                                              n8f6YaKM3: {
                                                __framer__targets: [
                                                  { offset: 0, ref: ut, target: `J0yslnWSa` },
                                                  { offset: 0, ref: V, target: `IPOuxALsQ` },
                                                  { offset: 0, ref: H, target: `IPOuxALsQ` },
                                                  { offset: 0, ref: U, target: `IPOuxALsQ` },
                                                  { offset: 0, ref: W, target: `IPOuxALsQ` },
                                                  { offset: 0, ref: K, target: `IPOuxALsQ` },
                                                ],
                                                HjqUgo94t: e[2],
                                              },
                                              rtSUEPJr9: { HjqUgo94t: e[1], TGelW1oY8: `Section` },
                                            },
                                            children: o(X, {
                                              __framer__animateOnce: !1,
                                              __framer__targets: [
                                                { offset: 0, ref: ut, target: `J0yslnWSa` },
                                                { offset: 0, ref: V, target: `V_jbR9haf` },
                                                { offset: 0, ref: H, target: `V_jbR9haf` },
                                                { offset: 0, ref: U, target: `V_jbR9haf` },
                                                { offset: 0, ref: W, target: `V_jbR9haf` },
                                                { offset: 0, ref: K, target: `V_jbR9haf` },
                                              ],
                                              __framer__threshold: 0,
                                              __framer__variantAppearEffectEnabled: !0,
                                              height: `100%`,
                                              HjqUgo94t: e[0],
                                              id: `LF6Dz1kSc`,
                                              layoutId: `LF6Dz1kSc`,
                                              TGelW1oY8: De,
                                              variant: Z(`J0yslnWSa`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              Ae !== !1 &&
                                o(L, {
                                  links: [
                                    {
                                      href: {
                                        hash: `:PkmMH3HIg`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        hash: `:PkmMH3HIg`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        hash: `:PkmMH3HIg`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    o(I, {
                                      breakpoint: B,
                                      overrides: { n8f6YaKM3: { y: 12.5 } },
                                      children: o(k, {
                                        height: 37,
                                        y: 44,
                                        children: o(E, {
                                          className: `framer-rtqxfr-container`,
                                          nodeId: `xQdizXT_p`,
                                          rendersWithMotion: !0,
                                          scopeId: `xYCOw7mrL`,
                                          children: o(I, {
                                            breakpoint: B,
                                            overrides: {
                                              n8f6YaKM3: {
                                                __framer__targets: [
                                                  { offset: 0, ref: V, target: `J0yslnWSa` },
                                                  { offset: 0, ref: H, target: `IPOuxALsQ` },
                                                  { offset: 0, ref: U, target: `IPOuxALsQ` },
                                                  { offset: 0, ref: W, target: `IPOuxALsQ` },
                                                  { offset: 0, ref: K, target: `IPOuxALsQ` },
                                                ],
                                                HjqUgo94t: e[2],
                                                variant: Z(`IPOuxALsQ`),
                                              },
                                              rtSUEPJr9: { HjqUgo94t: e[1] },
                                            },
                                            children: o(X, {
                                              __framer__animateOnce: !1,
                                              __framer__targets: [
                                                { offset: 0, ref: V, target: `J0yslnWSa` },
                                                { offset: 0, ref: H, target: `V_jbR9haf` },
                                                { offset: 0, ref: U, target: `V_jbR9haf` },
                                                { offset: 0, ref: W, target: `V_jbR9haf` },
                                                { offset: 0, ref: K, target: `V_jbR9haf` },
                                              ],
                                              __framer__threshold: 0,
                                              __framer__variantAppearEffectEnabled: !0,
                                              height: `100%`,
                                              HjqUgo94t: e[0],
                                              id: `xQdizXT_p`,
                                              layoutId: `xQdizXT_p`,
                                              TGelW1oY8: Me,
                                              variant: Z(`V_jbR9haf`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              Fe !== !1 &&
                                o(L, {
                                  links: [
                                    {
                                      href: {
                                        hash: `:tvUan5Wi2`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        hash: `:tvUan5Wi2`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        hash: `:tvUan5Wi2`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    o(I, {
                                      breakpoint: B,
                                      overrides: { n8f6YaKM3: { y: 12.5 } },
                                      children: o(k, {
                                        height: 37,
                                        y: 44,
                                        children: o(E, {
                                          className: `framer-rq2m9n-container`,
                                          nodeId: `CGC9DPWA1`,
                                          rendersWithMotion: !0,
                                          scopeId: `xYCOw7mrL`,
                                          children: o(I, {
                                            breakpoint: B,
                                            overrides: {
                                              n8f6YaKM3: {
                                                __framer__targets: [
                                                  { offset: 0, ref: H, target: `J0yslnWSa` },
                                                  { offset: 0, ref: U, target: `IPOuxALsQ` },
                                                  { offset: 0, ref: W, target: `IPOuxALsQ` },
                                                  { offset: 0, ref: K, target: `IPOuxALsQ` },
                                                ],
                                                HjqUgo94t: e[2],
                                                variant: Z(`IPOuxALsQ`),
                                              },
                                              rtSUEPJr9: { HjqUgo94t: e[1] },
                                            },
                                            children: o(X, {
                                              __framer__animateOnce: !1,
                                              __framer__targets: [
                                                { offset: 0, ref: H, target: `J0yslnWSa` },
                                                { offset: 0, ref: U, target: `V_jbR9haf` },
                                                { offset: 0, ref: W, target: `V_jbR9haf` },
                                                { offset: 0, ref: K, target: `V_jbR9haf` },
                                              ],
                                              __framer__threshold: 0,
                                              __framer__variantAppearEffectEnabled: !0,
                                              height: `100%`,
                                              HjqUgo94t: e[0],
                                              id: `CGC9DPWA1`,
                                              layoutId: `CGC9DPWA1`,
                                              TGelW1oY8: Ie,
                                              variant: Z(`V_jbR9haf`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              Ve !== !1 &&
                                o(L, {
                                  links: [
                                    {
                                      href: {
                                        hash: `:wwOoxBDVX`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        hash: `:wwOoxBDVX`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        hash: `:wwOoxBDVX`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    o(I, {
                                      breakpoint: B,
                                      overrides: { n8f6YaKM3: { y: 12.5 } },
                                      children: o(k, {
                                        height: 37,
                                        y: 44,
                                        children: o(E, {
                                          className: `framer-oy6ugq-container`,
                                          nodeId: `X87CcM8cd`,
                                          rendersWithMotion: !0,
                                          scopeId: `xYCOw7mrL`,
                                          children: o(I, {
                                            breakpoint: B,
                                            overrides: {
                                              n8f6YaKM3: {
                                                __framer__targets: [
                                                  { offset: 0, ref: U, target: `J0yslnWSa` },
                                                  { offset: 0, ref: W, target: `IPOuxALsQ` },
                                                  { offset: 0, ref: K, target: `IPOuxALsQ` },
                                                ],
                                                HjqUgo94t: e[2],
                                                variant: Z(`IPOuxALsQ`),
                                              },
                                              rtSUEPJr9: { HjqUgo94t: e[1] },
                                            },
                                            children: o(X, {
                                              __framer__animateOnce: !1,
                                              __framer__targets: [
                                                { offset: 0, ref: U, target: `J0yslnWSa` },
                                                { offset: 0, ref: W, target: `V_jbR9haf` },
                                                { offset: 0, ref: K, target: `V_jbR9haf` },
                                              ],
                                              __framer__threshold: 0,
                                              __framer__variantAppearEffectEnabled: !0,
                                              height: `100%`,
                                              HjqUgo94t: e[0],
                                              id: `X87CcM8cd`,
                                              layoutId: `X87CcM8cd`,
                                              TGelW1oY8: Ue,
                                              variant: Z(`V_jbR9haf`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              Ke !== !1 &&
                                o(L, {
                                  links: [
                                    {
                                      href: {
                                        hash: `:tNFuzW41X`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        hash: `:tNFuzW41X`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        hash: `:tNFuzW41X`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    o(I, {
                                      breakpoint: B,
                                      overrides: { n8f6YaKM3: { y: 12.5 } },
                                      children: o(k, {
                                        height: 37,
                                        y: 44,
                                        children: o(E, {
                                          className: `framer-1u1froz-container`,
                                          nodeId: `B54b2D1vi`,
                                          rendersWithMotion: !0,
                                          scopeId: `xYCOw7mrL`,
                                          children: o(I, {
                                            breakpoint: B,
                                            overrides: {
                                              n8f6YaKM3: {
                                                __framer__targets: [
                                                  { offset: 0, ref: W, target: `J0yslnWSa` },
                                                  { offset: 0, ref: K, target: `IPOuxALsQ` },
                                                ],
                                                HjqUgo94t: e[2],
                                                variant: Z(`IPOuxALsQ`),
                                              },
                                              rtSUEPJr9: { HjqUgo94t: e[1] },
                                            },
                                            children: o(X, {
                                              __framer__animateOnce: !1,
                                              __framer__targets: [
                                                { offset: 0, ref: W, target: `J0yslnWSa` },
                                                { offset: 0, ref: K, target: `V_jbR9haf` },
                                              ],
                                              __framer__threshold: 0,
                                              __framer__variantAppearEffectEnabled: !0,
                                              height: `100%`,
                                              HjqUgo94t: e[0],
                                              id: `B54b2D1vi`,
                                              layoutId: `B54b2D1vi`,
                                              TGelW1oY8: qe,
                                              variant: Z(`V_jbR9haf`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              Qe !== !1 &&
                                o(L, {
                                  links: [
                                    {
                                      href: {
                                        hash: `:t5J31CYjK`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        hash: `:t5J31CYjK`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: {
                                        hash: `:t5J31CYjK`,
                                        pathVariables: { UChNSq1Q_: O },
                                        webPageId: `xYCOw7mrL`,
                                      },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    o(I, {
                                      breakpoint: B,
                                      overrides: { n8f6YaKM3: { y: 12.5 } },
                                      children: o(k, {
                                        height: 37,
                                        y: 44,
                                        children: o(E, {
                                          className: `framer-1h4sq13-container`,
                                          nodeId: `TIP_soD1I`,
                                          rendersWithMotion: !0,
                                          scopeId: `xYCOw7mrL`,
                                          children: o(I, {
                                            breakpoint: B,
                                            overrides: {
                                              n8f6YaKM3: {
                                                HjqUgo94t: e[2],
                                                variant: Z(`IPOuxALsQ`),
                                              },
                                              rtSUEPJr9: { HjqUgo94t: e[1] },
                                            },
                                            children: o(X, {
                                              __framer__animateOnce: !1,
                                              __framer__targets: [
                                                { offset: 0, ref: K, target: `J0yslnWSa` },
                                              ],
                                              __framer__threshold: 0,
                                              __framer__variantAppearEffectEnabled: !0,
                                              height: `100%`,
                                              HjqUgo94t: e[0],
                                              id: `TIP_soD1I`,
                                              layoutId: `TIP_soD1I`,
                                              TGelW1oY8: $e,
                                              variant: Z(`V_jbR9haf`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    o(f.div, {
                      className: `framer-1j98txc`,
                      "data-framer-name": `Main`,
                      layout: lt,
                      children: l(`div`, {
                        className: `framer-1dhzkzw`,
                        "data-framer-name": `Case Study`,
                        children: [
                          o(`section`, {
                            className: `framer-16gug95`,
                            "data-border": !0,
                            "data-framer-name": `Hero`,
                            id: dt,
                            ref: ft,
                            children: l(`div`, {
                              className: `framer-bbgxwk`,
                              "data-framer-name": `Container`,
                              children: [
                                l(`div`, {
                                  className: `framer-j4q9bw`,
                                  "data-framer-name": `Heading`,
                                  children: [
                                    l(`div`, {
                                      className: `framer-1fauskl`,
                                      "data-framer-name": `Top`,
                                      children: [
                                        l($t, {
                                          animate: _n,
                                          className: `framer-qw9b6l`,
                                          "data-framer-appear-id": `qw9b6l`,
                                          "data-framer-name": `Tags`,
                                          initial: Q,
                                          optimized: !0,
                                          children: [
                                            o(S, {
                                              __fromCanvasComponent: !0,
                                              children: o(i, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-fg4d6j`,
                                                  "data-styles-preset": `hzPF7HBpL`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                                                  },
                                                  children: `Aviera`,
                                                }),
                                              }),
                                              className: `framer-uuerq6`,
                                              fonts: [`Inter`],
                                              text: le,
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            o(`div`, {
                                              className: `framer-1p9tn3p`,
                                              "data-framer-name": `Divider`,
                                            }),
                                            o(S, {
                                              __fromCanvasComponent: !0,
                                              children: o(i, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-fg4d6j`,
                                                  "data-styles-preset": `hzPF7HBpL`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                                                  },
                                                  children: `2024`,
                                                }),
                                              }),
                                              className: `framer-1gqij2r`,
                                              fonts: [`Inter`],
                                              text: A,
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        o(en, {
                                          __fromCanvasComponent: !0,
                                          animate: yn,
                                          children: o(i, {
                                            children: o(`h1`, {
                                              className: `framer-styles-preset-13gzcji`,
                                              "data-styles-preset": `WqNZwSSw1`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `left` },
                                              children: `Making financial data easier to understand`,
                                            }),
                                          }),
                                          className: `framer-3j488d`,
                                          "data-framer-appear-id": `3j488d`,
                                          "data-framer-name": `Heading`,
                                          fonts: [`Inter`],
                                          initial: Q,
                                          optimized: !0,
                                          text: T,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o(en, {
                                      __fromCanvasComponent: !0,
                                      animate: bn,
                                      children: o(i, {
                                        children: o(`p`, {
                                          className: `framer-styles-preset-1smn5pm`,
                                          "data-styles-preset": `aWuz3iYI_`,
                                          dir: `auto`,
                                          children: `I redesigned key parts of a financial dashboard to improve transaction visibility, simplify navigation, and help users understand their finances faster during everyday workflows.`,
                                        }),
                                      }),
                                      className: `framer-1o4idxi`,
                                      "data-framer-appear-id": `1o4idxi`,
                                      fonts: [`Inter`],
                                      initial: Q,
                                      optimized: !0,
                                      text: ue,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                o(`div`, {
                                  className: `framer-okzzr9`,
                                  "data-framer-name": `Image Container`,
                                  children: o(I, {
                                    breakpoint: B,
                                    overrides: {
                                      n8f6YaKM3: {
                                        y:
                                          (_?.y || 0) +
                                          140 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          1364.5 +
                                          120 +
                                          0 +
                                          0 +
                                          240.5 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: o(k, {
                                      height: 518,
                                      width: `min(${_?.width || `100vw`} - 80px, 900px)`,
                                      y:
                                        (_?.y || 0) +
                                        140 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        1464.5 +
                                        160 +
                                        0 +
                                        0 +
                                        252.5 +
                                        0 +
                                        0,
                                      children: o(nn, {
                                        animate: xn,
                                        className: `framer-15bjnu2-container`,
                                        "data-framer-appear-id": `15bjnu2`,
                                        initial: Q,
                                        nodeId: `btfH0xdOC`,
                                        optimized: !0,
                                        rendersWithMotion: !0,
                                        scopeId: `xYCOw7mrL`,
                                        children: o(Be, {
                                          anZoJEIFY: Cn(M),
                                          BCTDRzOub: ``,
                                          fKub8Am_x: !0,
                                          FKuzhyxj7: !1,
                                          G7yt3I0Bf: `Drawing different concepts`,
                                          height: `100%`,
                                          id: `btfH0xdOC`,
                                          ivVZuJJNC: `flex-start`,
                                          layoutId: `btfH0xdOC`,
                                          mED8caIc3: Cn(M),
                                          Pcq4pcgxq: wn(N, m),
                                          rHHfCo80M: `20px`,
                                          style: { width: `100%` },
                                          TJ59E3smx: `var(--token-a28f7f0c-c9e5-4bf0-b0db-e724b985a12f, rgb(240, 241, 243))`,
                                          variant: Z(`NGgdKHwEV`),
                                          width: `100%`,
                                          xad4Xjhor: !1,
                                          ZM3o8At_q: !1,
                                          zPsZKOrt6: Sn(pe, m),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                l(`div`, {
                                  className: `framer-177389l`,
                                  "data-framer-name": `Overview`,
                                  children: [
                                    o(I, {
                                      breakpoint: B,
                                      overrides: {
                                        n8f6YaKM3: {
                                          y:
                                            (_?.y || 0) +
                                            140 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            1364.5 +
                                            120 +
                                            0 +
                                            0 +
                                            786.5 +
                                            0 +
                                            0,
                                        },
                                      },
                                      children: o(k, {
                                        height: 52,
                                        width: `min(${_?.width || `100vw`} - 80px, 900px)`,
                                        y:
                                          (_?.y || 0) +
                                          140 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          1464.5 +
                                          160 +
                                          0 +
                                          0 +
                                          810.5 +
                                          0 +
                                          0,
                                        children: o(nn, {
                                          animate: Tn,
                                          className: `framer-eace7g-container`,
                                          "data-framer-appear-id": `eace7g`,
                                          initial: Q,
                                          nodeId: `QG_x9Wr7y`,
                                          optimized: !0,
                                          rendersWithMotion: !0,
                                          scopeId: `xYCOw7mrL`,
                                          children: o(I, {
                                            breakpoint: B,
                                            overrides: { n8f6YaKM3: { variant: Z(`tVKz0YB6C`) } },
                                            children: o(Y, {
                                              cW1cohlEu: z,
                                              height: `100%`,
                                              id: `QG_x9Wr7y`,
                                              layoutId: `QG_x9Wr7y`,
                                              RU1j9wb9P: ye,
                                              style: { width: `100%` },
                                              variant: Z(`D0eLJX5gB`),
                                              width: `100%`,
                                              x8ehWliOF: ve,
                                              xE4v4szed: _e,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    xe !== !1 &&
                                      o(L, {
                                        links: [
                                          { href: Ce, implicitPathVariables: void 0 },
                                          { href: Ce, implicitPathVariables: void 0 },
                                          { href: Ce, implicitPathVariables: void 0 },
                                        ],
                                        children: (e) =>
                                          o(I, {
                                            breakpoint: B,
                                            overrides: {
                                              n8f6YaKM3: {
                                                y:
                                                  (_?.y || 0) +
                                                  140 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1364.5 +
                                                  120 +
                                                  0 +
                                                  0 +
                                                  786.5 +
                                                  0 +
                                                  72,
                                              },
                                            },
                                            children: o(k, {
                                              height: 44,
                                              y:
                                                (_?.y || 0) +
                                                140 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                1464.5 +
                                                160 +
                                                0 +
                                                0 +
                                                810.5 +
                                                0 +
                                                92,
                                              children: o(E, {
                                                className: `framer-1scrhu2-container`,
                                                nodeId: `N4WKr75Kn`,
                                                scopeId: `xYCOw7mrL`,
                                                children: o(I, {
                                                  breakpoint: B,
                                                  overrides: {
                                                    n8f6YaKM3: {
                                                      bYMrbF3CO: e[2],
                                                      variant: Z(`hV0mKfVQK`),
                                                    },
                                                    rtSUEPJr9: { bYMrbF3CO: e[1] },
                                                  },
                                                  children: o(Ee, {
                                                    bYMrbF3CO: e[0],
                                                    height: `100%`,
                                                    id: `N4WKr75Kn`,
                                                    Iw3bv_gkH: !0,
                                                    layoutId: `N4WKr75Kn`,
                                                    Og1_ZrdX2: !0,
                                                    rzEJyeGCD: !0,
                                                    style: { height: `100%` },
                                                    variant: Z(`z878UxfRD`),
                                                    width: `100%`,
                                                    XQBi6J5Qe: Se,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          Te !== !1 &&
                            o(on, {
                              animate: En,
                              className: `framer-12qggnn`,
                              "data-framer-appear-id": `12qggnn`,
                              "data-framer-name": `Section 1`,
                              id: pt,
                              initial: Q,
                              optimized: !0,
                              ref: ut,
                              children: l(`div`, {
                                className: `framer-1e7cs7h`,
                                "data-framer-name": `Container`,
                                children: [
                                  l(`div`, {
                                    className: `framer-4448ls`,
                                    "data-framer-name": `Top`,
                                    children: [
                                      o(S, {
                                        __fromCanvasComponent: !0,
                                        children: o(i, {
                                          children: o(`p`, {
                                            className: `framer-styles-preset-ng3td7`,
                                            "data-styles-preset": `XCY59VlVO`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--variable-reference-SaywN999j-xYCOw7mrL)`,
                                            },
                                            children: `Overview`,
                                          }),
                                        }),
                                        className: `framer-1qjwz2z`,
                                        "data-framer-name": `Overline`,
                                        fonts: [`Inter`],
                                        style: { "--variable-reference-SaywN999j-xYCOw7mrL": P },
                                        text: De,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(S, {
                                        __fromCanvasComponent: !0,
                                        children: o(i, {
                                          children: o(`h2`, {
                                            className: `framer-styles-preset-q0odjm`,
                                            "data-styles-preset": `UN67IVlmf`,
                                            dir: `auto`,
                                            children: `Making financial data easier to understand`,
                                          }),
                                        }),
                                        className: `framer-1p3dsfl`,
                                        "data-framer-name": `Heading`,
                                        fonts: [`Inter`],
                                        text: Oe,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  o(`div`, {
                                    className: `framer-dj6gfl`,
                                    "data-framer-name": `Content`,
                                    children: o(S, {
                                      __fromCanvasComponent: !0,
                                      children: ke,
                                      className: `framer-h9pgri`,
                                      "data-framer-name": `text`,
                                      fonts: [`Inter`],
                                      stylesPresetsClassNames: {
                                        a: `framer-styles-preset-513yjj`,
                                        h3: `framer-styles-preset-wn04p3`,
                                        h4: `framer-styles-preset-oj7faz`,
                                        p: `framer-styles-preset-1smn5pm`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          F !== !1 &&
                            o(`div`, { className: `framer-91z1du`, "data-framer-name": `Divider` }),
                          Ae !== !1 &&
                            o(`section`, {
                              className: `framer-1y6cpw5`,
                              "data-framer-name": `Section 2`,
                              id: q,
                              ref: V,
                              children: l(`div`, {
                                className: `framer-gbcs1d`,
                                "data-framer-name": `Container`,
                                children: [
                                  l(`div`, {
                                    className: `framer-atw170`,
                                    "data-framer-name": `Top`,
                                    children: [
                                      o(S, {
                                        __fromCanvasComponent: !0,
                                        children: o(i, {
                                          children: o(`p`, {
                                            className: `framer-styles-preset-ng3td7`,
                                            "data-styles-preset": `XCY59VlVO`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--variable-reference-SaywN999j-xYCOw7mrL)`,
                                            },
                                            children: `Overview`,
                                          }),
                                        }),
                                        className: `framer-16wtina`,
                                        "data-framer-name": `Overline`,
                                        fonts: [`Inter`],
                                        style: { "--variable-reference-SaywN999j-xYCOw7mrL": P },
                                        text: Me,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(S, {
                                        __fromCanvasComponent: !0,
                                        children: o(i, {
                                          children: o(`h2`, {
                                            className: `framer-styles-preset-q0odjm`,
                                            "data-styles-preset": `UN67IVlmf`,
                                            dir: `auto`,
                                            children: `Making financial data easier to understand`,
                                          }),
                                        }),
                                        className: `framer-5axkgf`,
                                        "data-framer-name": `Heading`,
                                        fonts: [`Inter`],
                                        text: Ne,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  o(`div`, {
                                    className: `framer-zupzeg`,
                                    "data-framer-name": `Content`,
                                    children: o(S, {
                                      __fromCanvasComponent: !0,
                                      children: Pe,
                                      className: `framer-1klir4y`,
                                      "data-framer-name": `text`,
                                      fonts: [`Inter`],
                                      stylesPresetsClassNames: {
                                        a: `framer-styles-preset-513yjj`,
                                        h3: `framer-styles-preset-wn04p3`,
                                        h4: `framer-styles-preset-oj7faz`,
                                        p: `framer-styles-preset-1smn5pm`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          F !== !1 &&
                            o(`div`, {
                              className: `framer-1adzo54`,
                              "data-framer-name": `Divider`,
                            }),
                          Fe !== !1 &&
                            o(`section`, {
                              className: `framer-18osrfn`,
                              "data-framer-name": `Section 3`,
                              id: mt,
                              ref: H,
                              children: l(`div`, {
                                className: `framer-iu02y5`,
                                "data-framer-name": `Container`,
                                children: [
                                  l(`div`, {
                                    className: `framer-1j97vis`,
                                    "data-framer-name": `Top`,
                                    children: [
                                      o(S, {
                                        __fromCanvasComponent: !0,
                                        children: o(i, {
                                          children: o(`p`, {
                                            className: `framer-styles-preset-ng3td7`,
                                            "data-styles-preset": `XCY59VlVO`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--variable-reference-SaywN999j-xYCOw7mrL)`,
                                            },
                                            children: `Overview`,
                                          }),
                                        }),
                                        className: `framer-xwcgbk`,
                                        "data-framer-name": `Overline`,
                                        fonts: [`Inter`],
                                        style: { "--variable-reference-SaywN999j-xYCOw7mrL": P },
                                        text: Ie,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(S, {
                                        __fromCanvasComponent: !0,
                                        children: o(i, {
                                          children: o(`h2`, {
                                            className: `framer-styles-preset-q0odjm`,
                                            "data-styles-preset": `UN67IVlmf`,
                                            dir: `auto`,
                                            children: `Making financial data easier to understand`,
                                          }),
                                        }),
                                        className: `framer-cbdauk`,
                                        "data-framer-name": `Heading`,
                                        fonts: [`Inter`],
                                        text: Le,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  o(`div`, {
                                    className: `framer-1trgkgm`,
                                    "data-framer-name": `Content`,
                                    children: o(S, {
                                      __fromCanvasComponent: !0,
                                      children: ze,
                                      className: `framer-1jz1vdu`,
                                      "data-framer-name": `text`,
                                      fonts: [`Inter`],
                                      stylesPresetsClassNames: {
                                        a: `framer-styles-preset-513yjj`,
                                        h3: `framer-styles-preset-wn04p3`,
                                        h4: `framer-styles-preset-oj7faz`,
                                        p: `framer-styles-preset-1smn5pm`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          F !== !1 &&
                            o(`div`, {
                              className: `framer-16i52mj`,
                              "data-framer-name": `Divider`,
                            }),
                          Ve !== !1 &&
                            o(`section`, {
                              className: `framer-1nmakgo`,
                              "data-framer-name": `Section 4`,
                              id: ht,
                              ref: U,
                              children: l(`div`, {
                                className: `framer-4omi88`,
                                "data-framer-name": `Container`,
                                children: [
                                  l(`div`, {
                                    className: `framer-wgh34n`,
                                    "data-framer-name": `Top`,
                                    children: [
                                      o(S, {
                                        __fromCanvasComponent: !0,
                                        children: o(i, {
                                          children: o(`p`, {
                                            className: `framer-styles-preset-ng3td7`,
                                            "data-styles-preset": `XCY59VlVO`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--variable-reference-SaywN999j-xYCOw7mrL)`,
                                            },
                                            children: `Overview`,
                                          }),
                                        }),
                                        className: `framer-5l3qq7`,
                                        "data-framer-name": `Overline`,
                                        fonts: [`Inter`],
                                        style: { "--variable-reference-SaywN999j-xYCOw7mrL": P },
                                        text: Ue,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(S, {
                                        __fromCanvasComponent: !0,
                                        children: o(i, {
                                          children: o(`h2`, {
                                            className: `framer-styles-preset-q0odjm`,
                                            "data-styles-preset": `UN67IVlmf`,
                                            dir: `auto`,
                                            children: `Making financial data easier to understand`,
                                          }),
                                        }),
                                        className: `framer-xpmcs1`,
                                        "data-framer-name": `Heading`,
                                        fonts: [`Inter`],
                                        text: We,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  o(`div`, {
                                    className: `framer-fdrmwf`,
                                    "data-framer-name": `Content`,
                                    children: o(S, {
                                      __fromCanvasComponent: !0,
                                      children: Ge,
                                      className: `framer-1nb3ufo`,
                                      "data-framer-name": `text`,
                                      fonts: [`Inter`],
                                      stylesPresetsClassNames: {
                                        a: `framer-styles-preset-513yjj`,
                                        h3: `framer-styles-preset-wn04p3`,
                                        h4: `framer-styles-preset-oj7faz`,
                                        p: `framer-styles-preset-1smn5pm`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          F !== !1 &&
                            o(`div`, { className: `framer-tk4eu5`, "data-framer-name": `Divider` }),
                          Ke !== !1 &&
                            o(`section`, {
                              className: `framer-ozbbnh`,
                              "data-framer-name": `Section 5`,
                              id: gt,
                              ref: W,
                              children: l(`div`, {
                                className: `framer-egfqa8`,
                                "data-framer-name": `Container`,
                                children: [
                                  l(`div`, {
                                    className: `framer-1v5mxh7`,
                                    "data-framer-name": `Top`,
                                    children: [
                                      o(S, {
                                        __fromCanvasComponent: !0,
                                        children: o(i, {
                                          children: o(`p`, {
                                            className: `framer-styles-preset-ng3td7`,
                                            "data-styles-preset": `XCY59VlVO`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--variable-reference-SaywN999j-xYCOw7mrL)`,
                                            },
                                            children: `Overview`,
                                          }),
                                        }),
                                        className: `framer-mgi35c`,
                                        "data-framer-name": `Overline`,
                                        fonts: [`Inter`],
                                        style: { "--variable-reference-SaywN999j-xYCOw7mrL": P },
                                        text: qe,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(S, {
                                        __fromCanvasComponent: !0,
                                        children: o(i, {
                                          children: o(`h2`, {
                                            className: `framer-styles-preset-q0odjm`,
                                            "data-styles-preset": `UN67IVlmf`,
                                            dir: `auto`,
                                            children: `Making financial data easier to understand`,
                                          }),
                                        }),
                                        className: `framer-rzwjh5`,
                                        "data-framer-name": `Heading`,
                                        fonts: [`Inter`],
                                        text: Xe,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  o(`div`, {
                                    className: `framer-1531d7p`,
                                    "data-framer-name": `Content`,
                                    children: o(S, {
                                      __fromCanvasComponent: !0,
                                      children: Ze,
                                      className: `framer-k8h7vj`,
                                      "data-framer-name": `text`,
                                      fonts: [`Inter`],
                                      stylesPresetsClassNames: {
                                        a: `framer-styles-preset-513yjj`,
                                        h3: `framer-styles-preset-wn04p3`,
                                        h4: `framer-styles-preset-oj7faz`,
                                        p: `framer-styles-preset-1smn5pm`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          F !== !1 &&
                            o(`div`, { className: `framer-7n86oa`, "data-framer-name": `Divider` }),
                          Qe !== !1 &&
                            o(`section`, {
                              className: `framer-1fwjj8u`,
                              "data-border": !0,
                              "data-framer-name": `Section 6`,
                              id: _t,
                              ref: K,
                              children: l(`div`, {
                                className: `framer-1l2ehuo`,
                                "data-framer-name": `Container`,
                                children: [
                                  l(`div`, {
                                    className: `framer-12oq940`,
                                    "data-framer-name": `Top`,
                                    children: [
                                      o(S, {
                                        __fromCanvasComponent: !0,
                                        children: o(i, {
                                          children: o(`p`, {
                                            className: `framer-styles-preset-ng3td7`,
                                            "data-styles-preset": `XCY59VlVO`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--variable-reference-SaywN999j-xYCOw7mrL)`,
                                            },
                                            children: `Overview`,
                                          }),
                                        }),
                                        className: `framer-fkkjo2`,
                                        "data-framer-name": `Overline`,
                                        fonts: [`Inter`],
                                        style: { "--variable-reference-SaywN999j-xYCOw7mrL": P },
                                        text: $e,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(S, {
                                        __fromCanvasComponent: !0,
                                        children: o(i, {
                                          children: o(`h2`, {
                                            className: `framer-styles-preset-q0odjm`,
                                            "data-styles-preset": `UN67IVlmf`,
                                            dir: `auto`,
                                            children: `Making financial data easier to understand`,
                                          }),
                                        }),
                                        className: `framer-kdgrxd`,
                                        "data-framer-name": `Heading`,
                                        fonts: [`Inter`],
                                        text: et,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  o(`div`, {
                                    className: `framer-2nxpqn`,
                                    "data-framer-name": `Content`,
                                    children: o(S, {
                                      __fromCanvasComponent: !0,
                                      children: tt,
                                      className: `framer-1c026d`,
                                      "data-framer-name": `text`,
                                      fonts: [`Inter`],
                                      stylesPresetsClassNames: {
                                        a: `framer-styles-preset-513yjj`,
                                        h3: `framer-styles-preset-wn04p3`,
                                        h4: `framer-styles-preset-oj7faz`,
                                        p: `framer-styles-preset-1smn5pm`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          o(`section`, {
                            className: `framer-yafs6o`,
                            "data-border": !0,
                            "data-framer-name": `Next`,
                            children: l(`div`, {
                              className: `framer-2kqioj`,
                              "data-framer-name": `Container`,
                              children: [
                                o(`div`, {
                                  className: `framer-1gd5pxk`,
                                  "data-framer-name": `Wireframes`,
                                  children: o(`div`, {
                                    className: `framer-x5ofyc`,
                                    "data-framer-name": `Heading`,
                                    children: o(S, {
                                      __fromCanvasComponent: !0,
                                      children: o(i, {
                                        children: o(`h3`, {
                                          className: `framer-styles-preset-wn04p3`,
                                          "data-styles-preset": `QesmqopY4`,
                                          dir: `auto`,
                                          children: `Другие проекты`,
                                        }),
                                      }),
                                      className: `framer-4j5xb6`,
                                      "data-framer-name": `heading`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                o(`div`, {
                                  className: `framer-am957d`,
                                  children: o(fe, {
                                    children: o(I, {
                                      breakpoint: B,
                                      overrides: { rtSUEPJr9: { query: Fn(T) } },
                                      children: o(In, {
                                        query: Pn(T),
                                        children: (e, t, n) => {
                                          let r = e?.length ?? 0,
                                            a = Nn(r, 0);
                                          return l(d, {
                                            children: [
                                              e?.map(
                                                (
                                                  {
                                                    aL4Wth1f7: e,
                                                    cCwylbwLp: t,
                                                    id: n,
                                                    k4oLSKb7X: r,
                                                    prRfGy3rq: i,
                                                    UChNSq1Q_: a,
                                                    wGmP6opvl: s,
                                                    wQJV2FDxC: c,
                                                    yfOBdZpe5: l,
                                                  },
                                                  u
                                                ) => (
                                                  (e ??= ``),
                                                  (s ??= ``),
                                                  (a ??= ``),
                                                  (r ??= !0),
                                                  o(
                                                    te,
                                                    {
                                                      id: `WGXriBHEM-${n}`,
                                                      children: o(ae.Provider, {
                                                        value: { UChNSq1Q_: a },
                                                        children: o(`div`, {
                                                          className: `framer-1n62jmi`,
                                                          children: o(L, {
                                                            links: [
                                                              {
                                                                href: {
                                                                  pathVariables: { UChNSq1Q_: a },
                                                                  webPageId: `xYCOw7mrL`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                              {
                                                                href: {
                                                                  pathVariables: { UChNSq1Q_: a },
                                                                  webPageId: `xYCOw7mrL`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                              {
                                                                href: {
                                                                  pathVariables: { UChNSq1Q_: a },
                                                                  webPageId: `xYCOw7mrL`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                            ],
                                                            children: (n) =>
                                                              o(I, {
                                                                breakpoint: B,
                                                                overrides: {
                                                                  n8f6YaKM3: {
                                                                    width: `max(max((min(${_?.width || `100vw`} - 80px, 900px) - 16px) / 2, 50px), 1px)`,
                                                                    y:
                                                                      (_?.y || 0) +
                                                                      140 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      2383 +
                                                                      60 +
                                                                      0 +
                                                                      0 +
                                                                      52 +
                                                                      0 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                },
                                                                children: o(k, {
                                                                  height: 523,
                                                                  width: `max(max((min(${_?.width || `100vw`} - 80px, 900px) - 32px) / 3, 50px), 1px)`,
                                                                  y:
                                                                    (_?.y || 0) +
                                                                    140 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    2567 +
                                                                    60 +
                                                                    0 +
                                                                    0 +
                                                                    44 +
                                                                    0 +
                                                                    0 +
                                                                    0,
                                                                  children: o(I, {
                                                                    breakpoint: B,
                                                                    overrides: {
                                                                      n8f6YaKM3: {
                                                                        __framer__styleAppearEffectEnabled:
                                                                          void 0,
                                                                        animate: {
                                                                          opacity: 1,
                                                                          rotate: 0,
                                                                          rotateX: 0,
                                                                          rotateY: 0,
                                                                          scale: 1,
                                                                          skewX: 0,
                                                                          skewY: 0,
                                                                          transition: On(
                                                                            gn,
                                                                            u * 0.1
                                                                          ),
                                                                          x: 0,
                                                                          y: 0,
                                                                        },
                                                                        initial: Mn,
                                                                        optimized: !0,
                                                                      },
                                                                    },
                                                                    children: o(cn, {
                                                                      __framer__animate: {
                                                                        transition: On(gn, u * 0.1),
                                                                      },
                                                                      __framer__animateOnce: !0,
                                                                      __framer__enter: Dn,
                                                                      __framer__exit: kn,
                                                                      __framer__styleAppearEffectEnabled:
                                                                        !0,
                                                                      __framer__threshold: 0.5,
                                                                      __perspectiveFX: !1,
                                                                      __targetOpacity: 1,
                                                                      className: `framer-1bv2az3-container`,
                                                                      "data-framer-appear-id": `1bv2az3-${u}`,
                                                                      nodeId: `E3Jz5DQX3`,
                                                                      rendersWithMotion: !0,
                                                                      scopeId: `xYCOw7mrL`,
                                                                      children: o(I, {
                                                                        breakpoint: B,
                                                                        overrides: {
                                                                          n8f6YaKM3: {
                                                                            variant: Z(`XSXNvVxYG`),
                                                                            z_qPDXah7: n[2],
                                                                          },
                                                                          rtSUEPJr9: {
                                                                            z_qPDXah7: n[1],
                                                                          },
                                                                        },
                                                                        children: o(He, {
                                                                          BO2ml1MO7: s,
                                                                          EM503Yyv8: jn(l, m),
                                                                          FMKdf5_kR: An(c, m),
                                                                          height: `100%`,
                                                                          HIBDyQS9z: Cn(t),
                                                                          i5krWJACu: `dSWTlqu_k`,
                                                                          id: `E3Jz5DQX3`,
                                                                          layoutId: `E3Jz5DQX3`,
                                                                          style: { width: `100%` },
                                                                          tWDXQOFMp: e,
                                                                          u4PXkUzEY: i,
                                                                          variant: Z(`Pd8lfntvN`),
                                                                          width: `100%`,
                                                                          Xtp3eZS3y: r,
                                                                          z_qPDXah7: n[0],
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                          }),
                                                        }),
                                                      }),
                                                    },
                                                    n
                                                  )
                                                )
                                              ),
                                              a !== !1 &&
                                                o(`div`, {
                                                  className: `framer-ynljyj`,
                                                  "data-border": !0,
                                                  "data-framer-name": `Empty State`,
                                                  children: o(S, {
                                                    __fromCanvasComponent: !0,
                                                    children: o(i, {
                                                      children: o(`p`, {
                                                        className: `framer-styles-preset-1smn5pm`,
                                                        "data-styles-preset": `aWuz3iYI_`,
                                                        dir: `auto`,
                                                        children: `No items`,
                                                      }),
                                                    }),
                                                    className: `framer-1srrph0`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                            ],
                                          });
                                        },
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    o(k, {
                      children: o(E, {
                        className: `framer-pxejb8-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: lt,
                        nodeId: `B_dzgp2u_`,
                        scopeId: `xYCOw7mrL`,
                        children: o(je, {
                          height: `100%`,
                          id: `B_dzgp2u_`,
                          intensity: 6,
                          layoutId: `B_dzgp2u_`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-iD016.framer-1hgz5s5, .framer-iD016 .framer-1hgz5s5 { display: block; }`,
        `.framer-iD016.framer-bv24gb { align-content: center; align-items: center; background-color: var(--token-f7afab8f-991d-426d-a212-51d8456d5a36, #fcfcfc); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 140px 20px 140px 20px; position: relative; width: 1280px; }`,
        `.framer-iD016 .framer-yg3n5y { -webkit-backdrop-filter: blur(20px); align-content: center; align-items: center; backdrop-filter: blur(20px); background-color: var(--token-57ba8170-867f-4c2d-9ec7-5e518ba3de02, rgba(218, 218, 230, 0.5)); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 4px 4px 4px 20px; position: fixed; top: 40px; transform: translateX(-50%); width: min-content; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-iD016 .framer-1spbstq-container, .framer-iD016 .framer-a9hq9g-container, .framer-iD016 .framer-rtqxfr-container, .framer-iD016 .framer-rq2m9n-container, .framer-iD016 .framer-oy6ugq-container, .framer-iD016 .framer-1u1froz-container, .framer-iD016 .framer-1h4sq13-container, .framer-iD016 .framer-pxejb8-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-iD016 .framer-1a16a4w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 6px; position: relative; width: min-content; }`,
        `.framer-iD016 .framer-1vq6d43 { background-color: #cfd1d4; flex: none; height: 22px; overflow: visible; position: relative; width: 1px; }`,
        `.framer-iD016 .framer-1nt2bcr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-iD016 .framer-1j98txc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-1dhzkzw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 900px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-16gug95 { --border-bottom-width: 1px; --border-color: var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, #e8eaed); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 160px 0px 80px 0px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-bbgxwk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-j4q9bw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-1fauskl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-qw9b6l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-iD016 .framer-uuerq6, .framer-iD016 .framer-1gqij2r { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
        `.framer-iD016 .framer-1p9tn3p { background-color: var(--token-c0bda9fa-b03d-46d8-a14f-e38c505de169, #5b5f63); border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; flex: none; height: 3px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 3px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-iD016 .framer-3j488d { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-iD016 .framer-1o4idxi { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: none; flex: none; height: auto; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-iD016 .framer-okzzr9 { align-content: center; align-items: center; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-15bjnu2-container, .framer-iD016 .framer-eace7g-container { flex: none; height: auto; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-iD016 .framer-177389l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-1scrhu2-container { flex: none; height: 44px; position: relative; width: auto; }`,
        `.framer-iD016 .framer-12qggnn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 80px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-iD016 .framer-1e7cs7h, .framer-iD016 .framer-gbcs1d, .framer-iD016 .framer-iu02y5, .framer-iD016 .framer-4omi88, .framer-iD016 .framer-egfqa8, .framer-iD016 .framer-1l2ehuo, .framer-iD016 .framer-2kqioj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-4448ls, .framer-iD016 .framer-atw170, .framer-iD016 .framer-1j97vis, .framer-iD016 .framer-wgh34n, .framer-iD016 .framer-1v5mxh7, .framer-iD016 .framer-12oq940, .framer-iD016 .framer-x5ofyc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-1qjwz2z, .framer-iD016 .framer-16wtina, .framer-iD016 .framer-xwcgbk, .framer-iD016 .framer-5l3qq7, .framer-iD016 .framer-mgi35c, .framer-iD016 .framer-fkkjo2 { --variable-reference-SaywN999j-xYCOw7mrL: var(--ool8o8); -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-iD016 .framer-1p3dsfl, .framer-iD016 .framer-5axkgf, .framer-iD016 .framer-cbdauk, .framer-iD016 .framer-xpmcs1, .framer-iD016 .framer-rzwjh5, .framer-iD016 .framer-kdgrxd, .framer-iD016 .framer-4j5xb6 { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-iD016 .framer-dj6gfl, .framer-iD016 .framer-zupzeg, .framer-iD016 .framer-1trgkgm, .framer-iD016 .framer-fdrmwf, .framer-iD016 .framer-1531d7p, .framer-iD016 .framer-2nxpqn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-h9pgri, .framer-iD016 .framer-1klir4y, .framer-iD016 .framer-1jz1vdu, .framer-iD016 .framer-1nb3ufo, .framer-iD016 .framer-k8h7vj, .framer-iD016 .framer-1c026d { --framer-paragraph-spacing: 40px; -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-iD016 .framer-91z1du, .framer-iD016 .framer-1adzo54, .framer-iD016 .framer-16i52mj, .framer-iD016 .framer-tk4eu5, .framer-iD016 .framer-7n86oa { background-color: var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, #e8eaed); flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-iD016 .framer-1y6cpw5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: 887px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 80px 0px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-18osrfn, .framer-iD016 .framer-1nmakgo, .framer-iD016 .framer-ozbbnh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 80px 0px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-1fwjj8u { --border-bottom-width: 1px; --border-color: var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, #e8eaed); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 80px 0px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-yafs6o { --border-bottom-width: 1px; --border-color: var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, #e8eaed); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 60px 0px 60px 0px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-1gd5pxk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-am957d { display: grid; flex: none; gap: 40px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-1n62jmi { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-iD016 .framer-1bv2az3-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-iD016 .framer-ynljyj { --border-bottom-width: 1px; --border-color: var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, #e8eaed); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; align-self: start; background-color: var(--token-91bb6ca9-22d2-4ec9-8b33-ef70d28dd5e7, rgba(255, 255, 255, 0.2)); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; justify-self: start; min-height: 100%; min-width: 100%; padding: 10px; position: relative; width: min-content; }`,
        `.framer-iD016 .framer-1srrph0 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ...$e,
        ...Fe,
        ...ve,
        ...Ut,
        ...Ke,
        ...Se,
        ...Qe,
        ...qt,
        `.framer-iD016[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-iD016 [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
        `.framer-iD016[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-iD016 [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
        `.framer-iD016[data-hide-scrollbars="true"], .framer-iD016 [data-hide-scrollbars="true"] { scrollbar-width: none; }`,
        `.framer-iD016[data-border="true"]::after, .framer-iD016 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-iD016.framer-bv24gb { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-iD016.framer-bv24gb { width: 390px; } .framer-iD016 .framer-yg3n5y { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; gap: 0px; height: 60px; left: 0px; padding: 8px 8px 6px 8px; right: 0px; top: 0px; transform: unset; width: unset; } .framer-iD016 .framer-1a16a4w { padding: 0px 12px 0px 0px; } .framer-iD016 .framer-1nt2bcr { flex: 1 0 0px; justify-content: flex-start; overflow: auto; width: 1px; } .framer-iD016 .framer-16gug95 { padding: 120px 0px 60px 0px; } .framer-iD016 .framer-bbgxwk, .framer-iD016 .framer-2kqioj { gap: 28px; } .framer-iD016 .framer-177389l { gap: 20px; } .framer-iD016 .framer-12qggnn, .framer-iD016 .framer-1y6cpw5, .framer-iD016 .framer-18osrfn, .framer-iD016 .framer-1nmakgo, .framer-iD016 .framer-ozbbnh, .framer-iD016 .framer-1fwjj8u { padding: 60px 0px 60px 0px; } .framer-iD016 .framer-am957d { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-iD016 .framer-1bv2az3-container { will-change: var(--framer-will-change-effect-override, transform); } .framer-iD016 .framer-ynljyj { width: 100%; }}`,
      ],
      `framer-iD016`
    )),
    ($.displayName = `Collection`),
    ($.defaultProps = { height: 7467, width: 1280 }),
    y(
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
        ...Xt,
        ...Zt,
        ...tn,
        ...rn,
        ...an,
        ...sn,
        ...ln,
        ...g(tt),
        ...g(Le),
        ...g(ye),
        ...g(Ht),
        ...g(qe),
        ...g(Ce),
        ...g(et),
        ...g(Kt),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = F(() => O.get(zn(ie(t.pathVariables, `xYCOw7mrL`)), n, r).readMaybeAsync(), t);
        return pe(
          [
            async () => {
              let [e] = (await i) ?? [];
              return pe(
                [
                  () => O.get(Pn(e?.wGmP6opvl), n, r).preload(),
                  () => O.get(Fn(e?.wGmP6opvl), n, r).preload(),
                ],
                t
              );
            },
            () => x(G, {}, t),
            () => x(Ne, {}, t),
            () => x(Be, {}, t),
            () => x(Y, {}, t),
            () => x(Ee, {}, t),
            async () => {
              let [e] = (await i) ?? [];
              return pe(
                ((await F(() => O.get(Pn(e?.wGmP6opvl), n, r).readMaybeAsync(), t)) ?? []).flatMap(
                  (e) => () => x(He, {}, t)
                ),
                t
              );
            },
          ],
          t
        );
      },
    }),
    (Vn = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerxYCOw7mrL`,
          slots: [],
          annotations: {
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1280`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `{"IFUYWcQbh":{"pattern":":IFUYWcQbh","name":"hero"},"PxgoJZBCV":{"pattern":":PxgoJZBCV","name":"1"},"PkmMH3HIg":{"pattern":":PkmMH3HIg","name":"2"},"tvUan5Wi2":{"pattern":":tvUan5Wi2","name":"3"},"wwOoxBDVX":{"pattern":":wwOoxBDVX","name":"4"},"tNFuzW41X":{"pattern":":tNFuzW41X","name":"5"},"t5J31CYjK":{"pattern":":t5J31CYjK","name":"6"}}`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"rtSUEPJr9":{"layout":["fixed","auto"]},"n8f6YaKM3":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `7467`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Vn as __FramerMetadata__, $ as default, dn as queryParamNames };
//# sourceMappingURL=0kdIe6PMU6hRW74YvJ3RLyjeODomuvihDWTv3QDye8s.DzeIQjD8.mjs.map
