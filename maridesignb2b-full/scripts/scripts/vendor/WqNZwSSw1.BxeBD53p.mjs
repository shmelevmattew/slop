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
import { C as d, a as f, r as p, t as m } from "./motion.CkcImXlK.mjs";
import {
  A as h,
  B as g,
  D as _,
  E as v,
  Et as y,
  M as b,
  S as x,
  Tt as S,
  gt as C,
  jt as w,
  kt as T,
  lt as E,
  o as D,
  p as O,
  q as k,
} from "./framer.yAIV6S8_.mjs";
import { a as A, c as j, o as M, s as N } from "./shared-lib.D6-R8ZSj.mjs";
function P(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var F,
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
  X = e(() => {
    (l(),
      k(),
      m(),
      n(),
      j(),
      (F = w(T(d.div))),
      (I = { V_jbR9haf: { hover: !0 } }),
      (L = [`J0yslnWSa`, `V_jbR9haf`, `IPOuxALsQ`]),
      (R = `framer-7ZQWj`),
      (z = {
        IPOuxALsQ: `framer-v-1ctx0h1`,
        J0yslnWSa: `framer-v-hhjkou`,
        V_jbR9haf: `framer-v-qelk1w`,
      }),
      (B = { bounce: 0.3, delay: 0, duration: 0.5, type: `spring` }),
      (V = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (H = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: V,
        x: 0,
        y: 0,
      }),
      (U = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.6,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (W = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (G = { "Inactive - mobile": `IPOuxALsQ`, Active: `J0yslnWSa`, Inactive: `V_jbR9haf` }),
      (K = d.create(i)),
      (q = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        HjqUgo94t: n ?? a.HjqUgo94t,
        TGelW1oY8: r ?? a.TGelW1oY8 ?? `Work`,
        variant: G[a.variant] ?? a.variant ?? `J0yslnWSa`,
      })),
      (J = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = y(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = C();
          E();
          let {
              style: m,
              className: g,
              layoutId: _,
              variant: v,
              TGelW1oY8: y,
              HjqUgo94t: b,
              ...w
            } = q(e),
            {
              baseVariant: T,
              classNames: D,
              clearLoadingGesture: k,
              gestureHandlers: j,
              gestureVariant: M,
              isLoading: N,
              setGestureState: G,
              setVariant: Y,
              variants: X,
            } = S({
              cycleOrder: L,
              defaultVariant: `J0yslnWSa`,
              enabledGestures: I,
              ref: o,
              variant: v,
              variantClassNames: z,
            }),
            Z = J(e, X),
            Q = h(R, A),
            $ = () => !(M === `V_jbR9haf-hover` || [`V_jbR9haf`, `IPOuxALsQ`].includes(T));
          return a(p, {
            id: _ ?? s,
            children: a(K, {
              animate: X,
              initial: !1,
              children: a(W, {
                value: B,
                children: a(O, {
                  href: b,
                  motionChild: !0,
                  nodeId: `J0yslnWSa`,
                  openInNewTab: !1,
                  scopeId: `Voc3OSfW8`,
                  smoothScroll: !0,
                  children: c(d.a, {
                    ...w,
                    ...j,
                    className: `${h(Q, `framer-hhjkou`, g, D)} framer-1lum07a`,
                    "data-framer-name": `Active`,
                    layoutDependency: Z,
                    layoutId: `J0yslnWSa`,
                    ref: o,
                    style: { ...m },
                    ...P(
                      {
                        "V_jbR9haf-hover": { "data-framer-name": void 0 },
                        IPOuxALsQ: { "data-framer-name": `Inactive - mobile` },
                        V_jbR9haf: { "data-framer-name": `Inactive` },
                      },
                      T,
                      M
                    ),
                    children: [
                      $() &&
                        a(W, {
                          value: V,
                          children: a(F, {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: H,
                            className: `framer-1eelhx5`,
                            "data-framer-appear-id": `1eelhx5`,
                            "data-framer-name": `Tab BG`,
                            initial: U,
                            layoutDependency: Z,
                            layoutId: `YwPjFsJvm`,
                            optimized: !0,
                            style: {
                              backdropFilter: `blur(10px)`,
                              backgroundColor: `var(--token-f7afab8f-991d-426d-a212-51d8456d5a36, rgb(252, 252, 252))`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              WebkitBackdropFilter: `blur(10px)`,
                            },
                          }),
                        }),
                      a(x, {
                        __fromCanvasComponent: !0,
                        children: a(i, {
                          children: a(d.p, {
                            className: `framer-styles-preset-29mx3t`,
                            "data-styles-preset": `KSv8TCPWH`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31)))`,
                            },
                            children: `Work`,
                          }),
                        }),
                        className: `framer-63kunw`,
                        draggable: `false`,
                        fonts: [`Inter`],
                        layoutDependency: Z,
                        layoutId: `Sa2OGUQCc`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                        },
                        text: y,
                        variants: {
                          "V_jbR9haf-hover": {
                            "--extracted-r6o4lv": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                          },
                          IPOuxALsQ: {
                            "--extracted-r6o4lv": `var(--token-c0bda9fa-b03d-46d8-a14f-e38c505de169, rgb(91, 95, 99))`,
                          },
                          V_jbR9haf: {
                            "--extracted-r6o4lv": `var(--token-c0bda9fa-b03d-46d8-a14f-e38c505de169, rgb(91, 95, 99))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...P(
                          {
                            "V_jbR9haf-hover": {
                              children: a(i, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-29mx3t`,
                                  "data-styles-preset": `KSv8TCPWH`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31)))`,
                                  },
                                  children: `Work`,
                                }),
                              }),
                            },
                            IPOuxALsQ: {
                              children: a(i, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-29mx3t`,
                                  "data-styles-preset": `KSv8TCPWH`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c0bda9fa-b03d-46d8-a14f-e38c505de169, rgb(91, 95, 99)))`,
                                  },
                                  children: `Work`,
                                }),
                              }),
                            },
                            V_jbR9haf: {
                              children: a(i, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-29mx3t`,
                                  "data-styles-preset": `KSv8TCPWH`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c0bda9fa-b03d-46d8-a14f-e38c505de169, rgb(91, 95, 99)))`,
                                  },
                                  children: `Work`,
                                }),
                              }),
                            },
                          },
                          T,
                          M
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
          `.framer-7ZQWj.framer-1lum07a, .framer-7ZQWj .framer-1lum07a { display: block; }`,
          `.framer-7ZQWj.framer-hhjkou { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 12px 8px 12px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-7ZQWj .framer-1eelhx5 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: visible; padding: 8px 14px 8px 14px; position: absolute; right: 0px; top: 0px; }`,
          `.framer-7ZQWj .framer-63kunw { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-7ZQWj.framer-v-qelk1w.framer-hhjkou { cursor: pointer; }`,
          ...M,
        ],
        `framer-7ZQWj`
      )),
      (Y.displayName = `Tab - button`),
      (Y.defaultProps = { height: 37, width: 58 }),
      _(Y, {
        variant: {
          options: [`J0yslnWSa`, `V_jbR9haf`, `IPOuxALsQ`],
          optionTitles: [`Active`, `Inactive`, `Inactive - mobile`],
          title: `Variant`,
          type: D.Enum,
        },
        TGelW1oY8: { defaultValue: `Work`, displayTextArea: !1, title: `Title`, type: D.String },
        onTGelW1oY8Change: { changes: `TGelW1oY8`, type: D.ChangeHandler },
        HjqUgo94t: { title: `Link`, type: D.Link },
      }),
      v(
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
          ...g(N),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Z,
  Q,
  $,
  ee = e(() => {
    (k(),
      b.loadFonts([`FS;Manrope-medium`, `FS;Manrope-bold`]),
      (Z = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/CIM4KQCLZSMMLWPVH25IDDSTY4ENPHEY.woff2`,
              weight: `500`,
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
      (Q = [
        `.framer-BN5Le .framer-styles-preset-13gzcji:not(.rich-text-wrapper), .framer-BN5Le .framer-styles-preset-13gzcji.rich-text-wrapper h1 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, #04111f); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1279px) and (min-width: 810px) { .framer-BN5Le .framer-styles-preset-13gzcji:not(.rich-text-wrapper), .framer-BN5Le .framer-styles-preset-13gzcji.rich-text-wrapper h1 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, #04111f); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-BN5Le .framer-styles-preset-13gzcji:not(.rich-text-wrapper), .framer-BN5Le .framer-styles-preset-13gzcji.rich-text-wrapper h1 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 34px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, #04111f); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      ($ = `framer-BN5Le`));
  });
export { Y as a, ee as i, Q as n, X as o, Z as r, $ as t };
//# sourceMappingURL=WqNZwSSw1.BxeBD53p.mjs.map
