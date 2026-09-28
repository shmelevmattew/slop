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
  S as b,
  Tt as x,
  V as S,
  gt as C,
  lt as w,
  o as T,
  q as E,
  u as D,
} from "./framer.yAIV6S8_.mjs";
import { a as O, c as k, o as A, s as j } from "./shared-lib.D6-R8ZSj.mjs";
function M(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var N, P, F, I, L, R, z, B, V, H, U, W, G, K;
e(() => {
  (l(),
    E(),
    m(),
    n(),
    k(),
    (N = { e69Kzr3Yj: { hover: !0 } }),
    (P = [`tdzCmh1tz`, `e69Kzr3Yj`, `IUiN5fSpU`, `r0UhlOcpa`, `YSkgDFsNg`]),
    (F = `framer-MtdBb`),
    (I = {
      e69Kzr3Yj: `framer-v-tjhvk9`,
      IUiN5fSpU: `framer-v-qhurvz`,
      r0UhlOcpa: `framer-v-1ja5xst`,
      tdzCmh1tz: `framer-v-10t3fjl`,
      YSkgDFsNg: `framer-v-zbs4s9`,
    }),
    (L = { bounce: 0, delay: 0, duration: 0.7, type: `spring` }),
    (R = (e, t) => {
      if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
      if (typeof e != `string` || typeof t != `number`) return;
      let n = e.split(` `);
      return n[t] || n[t - 2] || n[0];
    }),
    (z = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (B = ({ value: e, children: n }) => {
      let r = s(f),
        i = e ?? r.transition,
        o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
      return a(f.Provider, { value: o, children: n });
    }),
    (V = {
      "16:9": `r0UhlOcpa`,
      "4:3": `IUiN5fSpU`,
      "9:16": `YSkgDFsNg`,
      "Fit the height": `tdzCmh1tz`,
      Lightbox: `e69Kzr3Yj`,
    }),
    (H = d.create(i)),
    (U = ({
      backgroundColor: e,
      caption: t,
      height: n,
      id: r,
      image: i,
      radius: a,
      showBackground: o,
      showCaption: s,
      width: c,
      ...l
    }) => ({
      ...l,
      anZoJEIFY: i ??
        l.anZoJEIFY ?? {
          pixelHeight: 1299,
          pixelWidth: 2319,
          src: `https://framerusercontent.com/images/vQyAaT5SbfXcd5KccCY81APK3Y.png?width=2319&height=1299`,
          srcSet: `https://framerusercontent.com/images/vQyAaT5SbfXcd5KccCY81APK3Y.png?scale-down-to=512&width=2319&height=1299 512w,https://framerusercontent.com/images/vQyAaT5SbfXcd5KccCY81APK3Y.png?scale-down-to=1024&width=2319&height=1299 1024w,https://framerusercontent.com/images/vQyAaT5SbfXcd5KccCY81APK3Y.png?scale-down-to=2048&width=2319&height=1299 2048w,https://framerusercontent.com/images/vQyAaT5SbfXcd5KccCY81APK3Y.png?width=2319&height=1299 2319w`,
        },
      fKub8Am_x: o ?? l.fKub8Am_x ?? !0,
      G7yt3I0Bf: t ?? l.G7yt3I0Bf ?? `Drawing different concepts`,
      rHHfCo80M: a ?? l.rHHfCo80M ?? `20px`,
      TJ59E3smx:
        e ?? l.TJ59E3smx ?? `var(--token-a28f7f0c-c9e5-4bf0-b0db-e724b985a12f, rgb(240, 241, 243))`,
      variant: V[l.variant] ?? l.variant ?? `tdzCmh1tz`,
      xad4Xjhor: s ?? l.xad4Xjhor,
    })),
    (W = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
    (G = y(
      o(function (e, t) {
        let n = r(null),
          o = t ?? n,
          s = u(),
          { activeLocale: l, setLocale: f } = C(),
          m = w(),
          {
            style: g,
            className: _,
            layoutId: v,
            variant: y,
            anZoJEIFY: T,
            rHHfCo80M: E,
            xad4Xjhor: k,
            G7yt3I0Bf: A,
            fKub8Am_x: j,
            TJ59E3smx: V,
            ...G
          } = U(e),
          {
            baseVariant: K,
            classNames: q,
            clearLoadingGesture: ee,
            gestureHandlers: J,
            gestureVariant: Y,
            isLoading: te,
            setGestureState: ne,
            setVariant: re,
            variants: X,
          } = x({
            cycleOrder: P,
            defaultVariant: `tdzCmh1tz`,
            enabledGestures: N,
            ref: o,
            variant: y,
            variantClassNames: I,
          }),
          Z = W(e, X),
          Q = h(F, O),
          $ = () => Y === `e69Kzr3Yj-hover` || K === `e69Kzr3Yj`,
          ie = () => !(Y === `e69Kzr3Yj-hover` || K === `e69Kzr3Yj`);
        return a(p, {
          id: v ?? s,
          children: a(H, {
            animate: X,
            initial: !1,
            children: a(B, {
              value: L,
              children: c(d.div, {
                ...G,
                ...J,
                className: h(Q, `framer-10t3fjl`, _, q),
                "data-framer-name": `Fit the height`,
                layoutDependency: Z,
                layoutId: `tdzCmh1tz`,
                ref: o,
                style: { opacity: 1, ...g },
                variants: { "e69Kzr3Yj-hover": { opacity: 0.8 } },
                ...M(
                  {
                    "e69Kzr3Yj-hover": { "data-framer-name": void 0 },
                    e69Kzr3Yj: { "data-framer-name": `Lightbox` },
                    IUiN5fSpU: { "data-framer-name": `4:3` },
                    r0UhlOcpa: { "data-framer-name": `16:9` },
                    YSkgDFsNg: { "data-framer-name": `9:16` },
                  },
                  K,
                  Y
                ),
                children: [
                  c(d.div, {
                    className: `framer-abtifh`,
                    "data-framer-name": `Image Container`,
                    layoutDependency: Z,
                    layoutId: `wuCNee97I`,
                    style: {
                      borderBottomLeftRadius: R(E, 3),
                      borderBottomRightRadius: R(E, 2),
                      borderTopLeftRadius: R(E, 0),
                      borderTopRightRadius: R(E, 1),
                    },
                    children: [
                      j !== !1 &&
                        a(d.div, {
                          className: `framer-1mum4dc`,
                          "data-framer-name": `Background`,
                          layoutDependency: Z,
                          layoutId: `SQIS4ggFU`,
                          style: {
                            backgroundColor: V,
                            borderBottomLeftRadius: R(E, 3),
                            borderBottomRightRadius: R(E, 2),
                            borderTopLeftRadius: R(E, 0),
                            borderTopRightRadius: R(E, 1),
                          },
                        }),
                      $() &&
                        a(D, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            pixelHeight: 1299,
                            pixelWidth: 2319,
                            ...z(T),
                            positionX: `center`,
                            positionY: `center`,
                          },
                          className: `framer-1lwqo2n`,
                          "data-framer-name": `Lightbox`,
                          fitImageDimension: `height`,
                          id: `${v}-1lwqo2n`,
                          layoutDependency: Z,
                          layoutId: `r0BQTC_Hj`,
                          lightbox: {
                            backdrop: `rgba(0, 0, 0, 0.8)`,
                            maxWidth: 1800,
                            padding: 20,
                            transition: L,
                            zIndex: 10,
                          },
                          lightboxClassName: Q,
                          style: {
                            borderBottomLeftRadius: R(E, 3),
                            borderBottomRightRadius: R(E, 2),
                            borderTopLeftRadius: R(E, 0),
                            borderTopRightRadius: R(E, 1),
                            scale: 1,
                          },
                          variants: { "e69Kzr3Yj-hover": { scale: 1.02 } },
                          ...M(
                            {
                              e69Kzr3Yj: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: S(
                                    (m?.y || 0) +
                                      0 +
                                      (((m?.height || 386.5) - 0 - 387) / 2 + 0 + 0) +
                                      0 +
                                      0
                                  ),
                                  pixelHeight: 1299,
                                  pixelWidth: 2319,
                                  sizes: m?.width || `100vw`,
                                  ...z(T),
                                  positionX: `center`,
                                  positionY: `center`,
                                },
                              },
                            },
                            K,
                            Y
                          ),
                        }),
                      ie() &&
                        a(D, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: S(
                              (m?.y || 0) +
                                0 +
                                (((m?.height || 386.5) - 0 - 387) / 2 + 0 + 0) +
                                0 +
                                0
                            ),
                            pixelHeight: 1299,
                            pixelWidth: 2319,
                            sizes: m?.width || `100vw`,
                            ...z(T),
                            positionX: `center`,
                            positionY: `center`,
                          },
                          className: `framer-1aznymf`,
                          "data-framer-name": `Image`,
                          fitImageDimension: `height`,
                          layoutDependency: Z,
                          layoutId: `ySDtmCk4L`,
                          style: {
                            borderBottomLeftRadius: R(E, 3),
                            borderBottomRightRadius: R(E, 2),
                            borderTopLeftRadius: R(E, 0),
                            borderTopRightRadius: R(E, 1),
                          },
                          ...M(
                            {
                              IUiN5fSpU: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: S(
                                    (m?.y || 0) +
                                      0 +
                                      (((m?.height || 516) - 0 - 516) / 2 + 0 + 0) +
                                      0 +
                                      0
                                  ),
                                  pixelHeight: 1299,
                                  pixelWidth: 2319,
                                  sizes: m?.width || `100vw`,
                                  ...z(T),
                                  positionX: `center`,
                                  positionY: `center`,
                                },
                                fitImageDimension: void 0,
                              },
                              r0UhlOcpa: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: S(
                                    (m?.y || 0) +
                                      0 +
                                      (((m?.height || 396) - 0 - 396) / 2 + 0 + 0) +
                                      0 +
                                      0
                                  ),
                                  pixelHeight: 1299,
                                  pixelWidth: 2319,
                                  sizes: m?.width || `100vw`,
                                  ...z(T),
                                  positionX: `center`,
                                  positionY: `center`,
                                },
                                fitImageDimension: void 0,
                              },
                              YSkgDFsNg: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: S(
                                    (m?.y || 0) +
                                      0 +
                                      (((m?.height || 1232) - 0 - 1232) / 2 + 0 + 0) +
                                      0 +
                                      0
                                  ),
                                  pixelHeight: 1299,
                                  pixelWidth: 2319,
                                  sizes: m?.width || `100vw`,
                                  ...z(T),
                                  positionX: `center`,
                                  positionY: `center`,
                                },
                                fitImageDimension: void 0,
                              },
                            },
                            K,
                            Y
                          ),
                        }),
                    ],
                  }),
                  k !== !1 &&
                    a(b, {
                      __fromCanvasComponent: !0,
                      children: a(i, {
                        children: a(d.p, {
                          className: `framer-styles-preset-29mx3t`,
                          "data-styles-preset": `KSv8TCPWH`,
                          dir: `auto`,
                          style: { "--framer-text-alignment": `left` },
                          children: `Drawing different concepts`,
                        }),
                      }),
                      className: `framer-11a6p17`,
                      "data-framer-name": `Caption`,
                      fonts: [`Inter`],
                      layoutDependency: Z,
                      layoutId: `AR51V4vnk`,
                      style: {
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: A,
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
        `.framer-MtdBb.framer-132k5bi, .framer-MtdBb .framer-132k5bi { display: block; }`,
        `.framer-MtdBb.framer-10t3fjl { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 690px; }`,
        `.framer-MtdBb .framer-abtifh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-MtdBb .framer-1mum4dc { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
        `.framer-MtdBb .framer-1lwqo2n, .framer-MtdBb .framer-1aznymf { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-MtdBb .framer-11a6p17 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-MtdBb.framer-v-tjhvk9.framer-10t3fjl { cursor: pointer; }`,
        `.framer-MtdBb.framer-v-qhurvz.framer-10t3fjl { width: 688px; }`,
        `.framer-MtdBb.framer-v-qhurvz .framer-1aznymf { aspect-ratio: 1.3333333333333333 / 1; height: var(--framer-aspect-ratio-supported, 516px); }`,
        `.framer-MtdBb.framer-v-1ja5xst.framer-10t3fjl { width: 704px; }`,
        `.framer-MtdBb.framer-v-1ja5xst .framer-1aznymf { aspect-ratio: 1.7777777777777777 / 1; height: var(--framer-aspect-ratio-supported, 396px); }`,
        `.framer-MtdBb.framer-v-zbs4s9.framer-10t3fjl { width: 693px; }`,
        `.framer-MtdBb.framer-v-zbs4s9 .framer-1aznymf { aspect-ratio: 0.5625 / 1; height: var(--framer-aspect-ratio-supported, 1232px); }`,
        ...A,
      ],
      `framer-MtdBb`
    )),
    (G.displayName = `Image Card`),
    (G.defaultProps = { height: 386.5, width: 690 }),
    _(G, {
      variant: {
        options: [`tdzCmh1tz`, `e69Kzr3Yj`, `IUiN5fSpU`, `r0UhlOcpa`, `YSkgDFsNg`],
        optionTitles: [`Fit the height`, `Lightbox`, `4:3`, `16:9`, `9:16`],
        title: `Variant`,
        type: T.Enum,
      },
      anZoJEIFY: {
        __defaultAssetReference: `data:framer/asset-reference,vQyAaT5SbfXcd5KccCY81APK3Y.png?originalFilename=lofi.png&width=2319&height=1299`,
        description: ``,
        title: `Image`,
        type: T.ResponsiveImage,
      },
      rHHfCo80M: { defaultValue: `20px`, description: ``, title: `Radius`, type: T.BorderRadius },
      xad4Xjhor: { defaultValue: !1, title: `Show caption`, type: T.Boolean },
      onxad4XjhorChange: { changes: `xad4Xjhor`, type: T.ChangeHandler },
      G7yt3I0Bf: {
        defaultValue: `Drawing different concepts`,
        displayTextArea: !0,
        title: `Caption`,
        type: T.String,
      },
      onG7yt3I0BfChange: { changes: `G7yt3I0Bf`, type: T.ChangeHandler },
      fKub8Am_x: { defaultValue: !0, title: `Show Background`, type: T.Boolean },
      onfKub8Am_xChange: { changes: `fKub8Am_x`, type: T.ChangeHandler },
      TJ59E3smx: {
        defaultValue: `var(--token-a28f7f0c-c9e5-4bf0-b0db-e724b985a12f, rgb(240, 241, 243)) /* {"name":"Grey"} */`,
        title: `Background Color`,
        type: T.Color,
      },
    }),
    v(
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
        ...g(j),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (K = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerPHEQ_zui5`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `386.5`,
            framerContractVersion: `1`,
            framerVariables: `{"anZoJEIFY":"image","rHHfCo80M":"radius","xad4Xjhor":"showCaption","G7yt3I0Bf":"caption","fKub8Am_x":"showBackground","TJ59E3smx":"backgroundColor"}`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"e69Kzr3Yj":{"layout":["fixed","auto"]},"IUiN5fSpU":{"layout":["fixed","auto"]},"r0UhlOcpa":{"layout":["fixed","auto"]},"YSkgDFsNg":{"layout":["fixed","auto"]},"CQMgG2tXu":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `690`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { K as __FramerMetadata__, G as default };
//# sourceMappingURL=PHEQ_zui5.K8H22VMU.mjs.map
