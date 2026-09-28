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
  s as u,
  v as ee,
} from "./react.D20wc1Tc.mjs";
import { C as d, a as te, r as f, t as p } from "./motion.CkcImXlK.mjs";
import {
  A as ne,
  B as m,
  E as re,
  Et as h,
  N as g,
  S as ie,
  St as ae,
  _ as oe,
  a as _,
  bt as v,
  c as y,
  et as b,
  ft as se,
  gt as ce,
  ht as x,
  i as S,
  jt as C,
  lt as le,
  n as ue,
  nt as w,
  pt as de,
  q as fe,
  rt as T,
  v as E,
  vt as pe,
  x as me,
  xt as he,
  z as D,
} from "./framer.yAIV6S8_.mjs";
import { i as O, n as k, r as A, t as ge } from "./aWuz3iYI_.DEIS9tXR.mjs";
import { i as j, r as M } from "./shared-lib.D6-R8ZSj.mjs";
import { n as _e, t as N } from "./W_jPIyvpm.DzDEjYgv.mjs";
import { i as ve, n as ye } from "./tzJhfwJaL.BK0yVW5k.mjs";
import be, { t as xe } from "./nRHf4hu0Ao0hVnLibEtB7-So-v1rYWDQ5EgansE_Tt4.Ca3Vv8ei.mjs";
var P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, Se, Ce, $, we;
e(() => {
  (l(),
    fe(),
    p(),
    n(),
    j(),
    _e(),
    ve(),
    O(),
    xe(),
    (P = D(N)),
    (F = C(_)),
    (I = D(M)),
    (L = {
      HZltlPpYB: `(max-width: 809.98px)`,
      roeXNCXW5: `(min-width: 810px) and (max-width: 1279.98px)`,
      WQLkyLRf1: `(min-width: 1280px)`,
    }),
    (R = []),
    (z = `framer-C4Z31`),
    (B = {
      HZltlPpYB: `framer-v-nt0uom`,
      roeXNCXW5: `framer-v-1k6v4i9`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (V = (e, t, n) => (e && t ? `position` : n)),
    (H = { bounce: 0, delay: 0, duration: 0.7, type: `spring` }),
    (U = (e, t) => ({ ...e, delay: (e.delay ?? 0) + t })),
    (W = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.9,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 10,
    }),
    (G = (e, t) => {
      switch (e) {
        case `Dtkdk_rN7`:
          return `gA3EhiVzV`;
        case `UbHlI6bSe`:
          return `ZH3MCZaaW`;
        default:
          return `gA3EhiVzV`;
      }
    }),
    (K = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (q = (e, t) => {
      switch (e) {
        case `eUSj4yj5q`:
          return `URL`;
        case `FKda01Vna`:
          return `Upload`;
        default:
          return `URL`;
      }
    }),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (X = () => ({
      from: { alias: `fdZh6BN1B`, data: ye, type: `Collection` },
      select: [
        { collection: `fdZh6BN1B`, name: `wQJV2FDxC`, type: `Identifier` },
        { collection: `fdZh6BN1B`, name: `cCwylbwLp`, type: `Identifier` },
        { collection: `fdZh6BN1B`, name: `yfOBdZpe5`, type: `Identifier` },
        { collection: `fdZh6BN1B`, name: `aL4Wth1f7`, type: `Identifier` },
        { collection: `fdZh6BN1B`, name: `wGmP6opvl`, type: `Identifier` },
        { collection: `fdZh6BN1B`, name: `UChNSq1Q_`, type: `Identifier` },
        { collection: `fdZh6BN1B`, name: `k4oLSKb7X`, type: `Identifier` },
        { collection: `fdZh6BN1B`, name: `prRfGy3rq`, type: `Identifier` },
        { collection: `fdZh6BN1B`, name: `id`, type: `Identifier` },
      ],
    })),
    (Z = ({ query: e, pageSize: t, children: n }) => n(v(e))),
    (Q = { Desktop: `WQLkyLRf1`, Phone: `HZltlPpYB`, Tablet: `roeXNCXW5` }),
    (Se = ({ value: e }) =>
      x()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ce = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    ($ = h(
      o(function (e, n) {
        let o = r(null),
          l = n ?? o,
          p = ee(),
          { activeLocale: m, setLocale: re } = ce(),
          h = le(),
          { style: g, className: v, layoutId: b, variant: x, ...C } = Ce(e);
        pe(t(() => be({}, m), [m]));
        let [w, fe] = de(x, L, !1),
          T = ne(z, ge),
          D = s(y)?.isLayoutTemplate,
          O = !!s(te)?.transition?.layout,
          k = V(D, O),
          A = he(`uuUc75v5B`),
          j = r(null);
        return (
          ae(),
          se({}),
          a(y.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: Q,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: B,
            },
            children: c(f, {
              id: b ?? p,
              children: [
                a(Se, {
                  value: `html body { background: var(--token-f7afab8f-991d-426d-a212-51d8456d5a36, rgb(252, 252, 252)); }`,
                }),
                c(d.div, {
                  ...C,
                  className: ne(T, `framer-72rtr7`, v),
                  ref: l,
                  style: { ...g },
                  children: [
                    a(d.div, {
                      className: `framer-1bxfqfz`,
                      "data-framer-name": `Main`,
                      layout: k,
                      children: a(`section`, {
                        className: `framer-11hkorx`,
                        "data-framer-name": `Case Studies`,
                        id: A,
                        ref: j,
                        children: c(`div`, {
                          className: `framer-88ljfy`,
                          "data-framer-name": `Container`,
                          children: [
                            a(`div`, {
                              className: `framer-q9qzis`,
                              children: a(ue, {
                                children: a(Z, {
                                  query: X(),
                                  children: (e, t, n) => {
                                    let r = e?.length ?? 0,
                                      o = Y(r, 0);
                                    return c(u, {
                                      children: [
                                        e?.map(
                                          (
                                            {
                                              aL4Wth1f7: e,
                                              cCwylbwLp: t,
                                              id: n,
                                              k4oLSKb7X: r,
                                              prRfGy3rq: i,
                                              UChNSq1Q_: o,
                                              wGmP6opvl: s,
                                              wQJV2FDxC: c,
                                              yfOBdZpe5: l,
                                            },
                                            u
                                          ) => (
                                            (e ??= ``),
                                            (s ??= ``),
                                            (o ??= ``),
                                            (r ??= !0),
                                            a(
                                              f,
                                              {
                                                id: `fdZh6BN1B-${n}`,
                                                children: a(oe.Provider, {
                                                  value: { UChNSq1Q_: o },
                                                  children: a(`div`, {
                                                    className: `framer-1ujhrxs`,
                                                    children: a(me, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { UChNSq1Q_: o },
                                                            webPageId: `xYCOw7mrL`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { UChNSq1Q_: o },
                                                            webPageId: `xYCOw7mrL`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { UChNSq1Q_: o },
                                                            webPageId: `xYCOw7mrL`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (n) =>
                                                        a(E, {
                                                          breakpoint: w,
                                                          overrides: {
                                                            HZltlPpYB: {
                                                              width: `max(max(min(max(${h?.width || `100vw`}, 1px), 1280px) - 40px, 50px), 1px)`,
                                                            },
                                                            roeXNCXW5: {
                                                              width: `max(max((min(max(${h?.width || `100vw`}, 1px), 1280px) - 104px) / 2, 50px), 1px)`,
                                                            },
                                                          },
                                                          children: a(S, {
                                                            height: 523,
                                                            width: `max(max((min(max(${h?.width || `100vw`}, 1px), 1280px) - 152px) / 2, 50px), 1px)`,
                                                            y:
                                                              (h?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0,
                                                            children: a(F, {
                                                              animate: {
                                                                opacity: 1,
                                                                rotate: 0,
                                                                rotateX: 0,
                                                                rotateY: 0,
                                                                scale: 1,
                                                                skewX: 0,
                                                                skewY: 0,
                                                                transition: U(H, u * 0.1),
                                                                x: 0,
                                                                y: 0,
                                                              },
                                                              className: `framer-1eabirs-container`,
                                                              "data-framer-appear-id": `1eabirs-${u}`,
                                                              initial: W,
                                                              nodeId: `unDalol8I`,
                                                              optimized: !0,
                                                              rendersWithMotion: !0,
                                                              scopeId: `augiA20Il`,
                                                              children: a(E, {
                                                                breakpoint: w,
                                                                overrides: {
                                                                  HZltlPpYB: {
                                                                    variant: J(`XSXNvVxYG`),
                                                                    z_qPDXah7: n[2],
                                                                  },
                                                                  roeXNCXW5: { z_qPDXah7: n[1] },
                                                                },
                                                                children: a(N, {
                                                                  BO2ml1MO7: s,
                                                                  EM503Yyv8: q(l, m),
                                                                  FMKdf5_kR: G(c, m),
                                                                  height: `100%`,
                                                                  HIBDyQS9z: K(t),
                                                                  i5krWJACu: `dSWTlqu_k`,
                                                                  id: `unDalol8I`,
                                                                  layoutId: `unDalol8I`,
                                                                  srWwkEYZP: K(t),
                                                                  style: { width: `100%` },
                                                                  tWDXQOFMp: e,
                                                                  u4PXkUzEY: i,
                                                                  variant: J(`jv_VwLTRK`),
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
                                              },
                                              n
                                            )
                                          )
                                        ),
                                        o !== !1 &&
                                          a(`div`, {
                                            className: `framer-1qq06kq`,
                                            "data-border": !0,
                                            "data-framer-name": `Empty State`,
                                            children: a(ie, {
                                              __fromCanvasComponent: !0,
                                              children: a(i, {
                                                children: a(`p`, {
                                                  className: `framer-styles-preset-1smn5pm`,
                                                  "data-styles-preset": `aWuz3iYI_`,
                                                  dir: `auto`,
                                                  children: `No items`,
                                                }),
                                              }),
                                              className: `framer-jv8xtj`,
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
                            a(`div`, { className: `framer-7psd7g`, "data-framer-name": `Divider` }),
                          ],
                        }),
                      }),
                    }),
                    a(S, {
                      children: a(_, {
                        className: `framer-1kkohps-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: k,
                        nodeId: `UkJgFcdtY`,
                        scopeId: `augiA20Il`,
                        children: a(M, {
                          height: `100%`,
                          id: `UkJgFcdtY`,
                          intensity: 6,
                          layoutId: `UkJgFcdtY`,
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
        `.framer-C4Z31.framer-lux5qc, .framer-C4Z31 .framer-lux5qc { display: block; }`,
        `.framer-C4Z31.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-f7afab8f-991d-426d-a212-51d8456d5a36, #fcfcfc); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
        `.framer-C4Z31 .framer-1bxfqfz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 27px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-C4Z31 .framer-11hkorx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-C4Z31 .framer-88ljfy { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1280px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 64px 0px 64px; position: relative; width: 1px; }`,
        `.framer-C4Z31 .framer-q9qzis { display: grid; flex: none; gap: 24px 24px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C4Z31 .framer-1ujhrxs { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C4Z31 .framer-1eabirs-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-C4Z31 .framer-1qq06kq { --border-bottom-width: 1px; --border-color: var(--token-91bb6ca9-22d2-4ec9-8b33-ef70d28dd5e7, rgba(255, 255, 255, 0.2)); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; align-self: start; background-color: var(--token-91bb6ca9-22d2-4ec9-8b33-ef70d28dd5e7, rgba(255, 255, 255, 0.2)); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: 100px; justify-content: center; justify-self: start; min-height: 100%; min-width: 100%; padding: 10px; position: relative; width: min-content; }`,
        `.framer-C4Z31 .framer-jv8xtj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-C4Z31 .framer-7psd7g { background-color: var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, #e8eaed); flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-C4Z31 .framer-1kkohps-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...k,
        `.framer-C4Z31[data-border="true"]::after, .framer-C4Z31 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-C4Z31.framer-72rtr7 { width: 810px; } .framer-C4Z31 .framer-88ljfy { padding: 0px 40px 0px 40px; }}`,
        `@media (max-width: 809.98px) { .framer-C4Z31.framer-72rtr7 { width: 390px; } .framer-C4Z31 .framer-88ljfy { gap: 60px; padding: 0px 20px 0px 20px; } .framer-C4Z31 .framer-q9qzis { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-C4Z31 .framer-1qq06kq { grid-column: span 1; }}`,
      ],
      `framer-C4Z31`
    )),
    ($.displayName = `Home`),
    ($.defaultProps = { height: 1738, width: 1280 }),
    re(
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
        ...P,
        ...I,
        ...m(A),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = b.get(X(), n, r);
        return w(
          [
            () => i.preload(),
            async () =>
              w(
                ((await T(() => i.readMaybeAsync(), t)) ?? []).flatMap((e) => () => g(N, {}, t)),
                t
              ),
          ],
          t
        );
      },
    }),
    (we = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerScrollSections: `{"uuUc75v5B":{"pattern":":uuUc75v5B","name":"case-studies"}}`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicHeight: `1738`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1280`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"roeXNCXW5":{"layout":["fixed","auto"]},"HZltlPpYB":{"layout":["fixed","auto"]}}}`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { we as __FramerMetadata__, $ as default, R as queryParamNames };
//# sourceMappingURL=-OlgI-j9hUSGfLIY8I8eQ03fJhiELicOX0g_pky_l7M.BEjUX3UR.mjs.map
