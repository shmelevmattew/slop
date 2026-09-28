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
  v as ee,
} from "./react.D20wc1Tc.mjs";
import { C as u, a as te, r as ne, t as d } from "./motion.CkcImXlK.mjs";
import {
  A as f,
  B as p,
  E as re,
  Et as m,
  N as h,
  S as g,
  St as ie,
  a as ae,
  c as _,
  f as v,
  ft as oe,
  gt as se,
  ht as y,
  i as b,
  jt as x,
  lt as ce,
  nt as S,
  pt as le,
  q as C,
  v as w,
  vt as ue,
  x as de,
  xt as fe,
  z as T,
} from "./framer.yAIV6S8_.mjs";
import { n as E, t as D } from "./O7WRG9NIo.DQFX-uT2.mjs";
import { i as O, r as k } from "./shared-lib.D6-R8ZSj.mjs";
import { i as A, n as j, r as M, t as pe } from "./oELRBbrwg.Cj1IsSem.mjs";
import { i as me, n as he, r as ge, t as _e } from "./UN67IVlmf.QEFGp4eo.mjs";
import ve, { t as ye } from "./raboIbxhc-fMDSVgxfrTJi25M4lZpMh6QwSwFAFcFzk.B2oKkxMj.mjs";
function N(e, t) {
  for (; t; ) {
    let n = P[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function be(e) {
  let t = [];
  for (; e; ) {
    let n = P[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function xe(e) {
  let t = be(e);
  if (t) throw t;
}
var P,
  Se = e(() => {
    (C(), (P = { NQfeamgS2: new v(() => import("./JVCxCHV5N-0.CWgXhM-S.mjs")) }));
  }),
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $;
e(() => {
  (l(),
    C(),
    d(),
    n(),
    O(),
    E(),
    A(),
    me(),
    Se(),
    ye(),
    (F = x(g)),
    (I = T(D)),
    (L = x(u.div)),
    (R = T(k)),
    (z = {
      Do1sgfgx7: `(min-width: 1280px)`,
      ezdx9Ge6a: `(max-width: 809.98px)`,
      PysB3iyUP: `(min-width: 810px) and (max-width: 1279.98px)`,
    }),
    (B = []),
    (V = `framer-C4peQ`),
    (H = {
      Do1sgfgx7: `framer-v-bsvug2`,
      ezdx9Ge6a: `framer-v-19i323m`,
      PysB3iyUP: `framer-v-ypde51`,
    }),
    (U = (e, t, n) => (e && t ? `position` : n)),
    (W = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0, duration: 0.7, type: `spring` },
      x: 0,
      y: 0,
    }),
    (G = {
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
    (K = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.1, duration: 0.7, type: `spring` },
      x: 0,
      y: 0,
    }),
    (q = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.2, duration: 0.7, type: `spring` },
      x: 0,
      y: 0,
    }),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `Do1sgfgx7`, Phone: `ezdx9Ge6a`, Tablet: `PysB3iyUP` }),
    (X = ({ value: e }) =>
      y()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `Do1sgfgx7`,
    })),
    (Q = m(
      o(function (e, n) {
        let o = r(null),
          l = n ?? o,
          d = ee(),
          { activeLocale: p, setLocale: re } = se(),
          m = ce(),
          { style: h, className: g, layoutId: v, variant: y, ...x } = Z(e);
        ue(t(() => ve({}, p), [p]));
        let [S, C] = le(y, z, !1),
          T = f(V, _e, pe),
          E = s(_)?.isLayoutTemplate,
          O = !!s(te)?.transition?.layout,
          A = U(E, O),
          j = fe(`KJ8hnm2uf`),
          M = r(null);
        return (
          xe(p),
          ie(),
          oe({}),
          a(_.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Y,
              primaryVariantId: `Do1sgfgx7`,
              variantClassNames: H,
            },
            children: c(ne, {
              id: v ?? d,
              children: [
                a(X, {
                  value: `html body { background: var(--token-f1adf1d0-324b-4e36-a3bc-ee5f43cc8b70, rgb(240, 242, 245)); }`,
                }),
                c(u.div, {
                  ...x,
                  className: f(T, `framer-bsvug2`, g),
                  ref: l,
                  style: { ...h },
                  children: [
                    a(u.div, {
                      className: `framer-15xkl6o`,
                      "data-framer-name": `Main`,
                      layout: A,
                      children: a(`section`, {
                        className: `framer-17xipsc`,
                        "data-border": !0,
                        "data-framer-name": `Experience`,
                        id: j,
                        ref: M,
                        children: c(`div`, {
                          className: `framer-1gnub7r`,
                          "data-framer-name": `Container`,
                          children: [
                            c(`div`, {
                              className: `framer-m8k8fz`,
                              "data-framer-name": `Heading`,
                              children: [
                                a(F, {
                                  __fromCanvasComponent: !0,
                                  animate: W,
                                  children:
                                    N(`v0`, p) ??
                                    a(i, {
                                      children: c(`h2`, {
                                        className: `framer-styles-preset-q0odjm`,
                                        "data-styles-preset": `UN67IVlmf`,
                                        dir: `auto`,
                                        children: [
                                          `Ой, `,
                                          a(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-c0bda9fa-b03d-46d8-a14f-e38c505de169, rgb(91, 95, 99))`,
                                            },
                                            children: `эта страничка потерялась.`,
                                          }),
                                        ],
                                      }),
                                    }),
                                  className: `framer-mkwyso`,
                                  "data-framer-appear-id": `mkwyso`,
                                  fonts: [`Inter`],
                                  initial: G,
                                  optimized: !0,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(F, {
                                  __fromCanvasComponent: !0,
                                  animate: K,
                                  children:
                                    N(`v1`, p) ??
                                    a(i, {
                                      children: a(`p`, {
                                        className: `framer-styles-preset-1rps2lr`,
                                        "data-styles-preset": `oELRBbrwg`,
                                        dir: `auto`,
                                        children: `Страница, которую вы\xA0ищете, не\xA0существует, была перемещена или всё ещё находится в\xA0разработке.`,
                                      }),
                                    }),
                                  className: `framer-135h5vk`,
                                  "data-framer-appear-id": `135h5vk`,
                                  fonts: [`Inter`],
                                  initial: G,
                                  optimized: !0,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(L, {
                              animate: q,
                              className: `framer-2ewhe9`,
                              "data-framer-appear-id": `2ewhe9`,
                              "data-framer-name": `Buttons`,
                              initial: G,
                              optimized: !0,
                              children: a(de, {
                                links: [
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  a(w, {
                                    breakpoint: S,
                                    overrides: {
                                      ezdx9Ge6a: {
                                        y: (m?.y || 0) + 0 + 0 + 0 + 0 + 40 + 0 + 192.4 + 0,
                                      },
                                    },
                                    children: a(b, {
                                      height: 44,
                                      y: (m?.y || 0) + 0 + 0 + 0 + 0 + 60 + 0 + 188.4 + 0,
                                      children: a(ae, {
                                        className: `framer-1e62tsi-container`,
                                        nodeId: `EU9xQGmRN`,
                                        scopeId: `JVCxCHV5N`,
                                        children: a(w, {
                                          breakpoint: S,
                                          overrides: {
                                            ezdx9Ge6a: { bYMrbF3CO: e[2], variant: J(`H_aBgTDEh`) },
                                            PysB3iyUP: { bYMrbF3CO: e[1] },
                                          },
                                          children: a(D, {
                                            bYMrbF3CO: e[0],
                                            height: `100%`,
                                            id: `EU9xQGmRN`,
                                            Iw3bv_gkH: !0,
                                            layoutId: `EU9xQGmRN`,
                                            Og1_ZrdX2: !1,
                                            rzEJyeGCD: !1,
                                            variant: J(`ZQ13jNOYy`),
                                            width: `100%`,
                                            XQBi6J5Qe: N(`v2`, p) ?? `На главную`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    a(b, {
                      children: a(ae, {
                        className: `framer-z4ekae-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: A,
                        nodeId: `toBJqKzDL`,
                        scopeId: `JVCxCHV5N`,
                        children: a(k, {
                          height: `100%`,
                          id: `toBJqKzDL`,
                          intensity: 6,
                          layoutId: `toBJqKzDL`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-C4peQ.framer-1epzxgj, .framer-C4peQ .framer-1epzxgj { display: block; }`,
        `.framer-C4peQ.framer-bsvug2 { align-content: center; align-items: center; background-color: var(--token-f1adf1d0-324b-4e36-a3bc-ee5f43cc8b70, #f0f2f5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
        `.framer-C4peQ .framer-15xkl6o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 64px 0px 64px; position: relative; width: 100%; }`,
        `.framer-C4peQ .framer-17xipsc { --border-bottom-width: 0px; --border-color: var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, #e8eaed); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 60px 0px 60px 0px; position: relative; width: 100%; }`,
        `.framer-C4peQ .framer-1gnub7r { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-C4peQ .framer-m8k8fz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C4peQ .framer-mkwyso { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-C4peQ .framer-135h5vk { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 336px; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-C4peQ .framer-2ewhe9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-C4peQ .framer-1e62tsi-container, .framer-C4peQ .framer-z4ekae-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...he,
        ...j,
        `.framer-C4peQ[data-border="true"]::after, .framer-C4peQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-C4peQ.framer-bsvug2 { width: 810px; } .framer-C4peQ .framer-15xkl6o { padding: 0px 40px 0px 40px; }}`,
        `@media (max-width: 809.98px) { .framer-C4peQ.framer-bsvug2 { width: 390px; } .framer-C4peQ .framer-15xkl6o { padding: 0px 20px 0px 20px; } .framer-C4peQ .framer-17xipsc { padding: 40px 0px 40px 0px; } .framer-C4peQ .framer-1gnub7r { gap: 28px; }}`,
      ],
      `framer-C4peQ`
    )),
    (Q.displayName = `Resume`),
    (Q.defaultProps = { height: 1e3, width: 1280 }),
    re(
      Q,
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
        ...I,
        ...R,
        ...p(ge),
        ...p(M),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => S([() => h(D, {}, t)], t) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerJVCxCHV5N`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1280`,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerScrollSections: `{"KJ8hnm2uf":{"pattern":":KJ8hnm2uf","name":"experience"}}`,
            framerAutoSizeImages: `true`,
            framerIntrinsicHeight: `1000`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"PysB3iyUP":{"layout":["fixed","auto"]},"ezdx9Ge6a":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerContractVersion: `1`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, B as queryParamNames };
//# sourceMappingURL=9UKKrHiKQY1ztSS9Mb-O5qLGvKZZWB3vNzjzn4rzEOs.QGLP2G2w.mjs.map
