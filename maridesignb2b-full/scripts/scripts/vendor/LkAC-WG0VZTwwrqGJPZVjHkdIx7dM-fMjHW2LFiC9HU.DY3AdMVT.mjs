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
  N as x,
  S,
  T as ee,
  Tt as C,
  V as w,
  a as T,
  c as E,
  f as D,
  ft as te,
  gt as O,
  ht as k,
  i as A,
  jt as j,
  kt as M,
  lt as N,
  nt as ne,
  o as P,
  p as F,
  pt as I,
  q as L,
  u as re,
  v as R,
  vt as ie,
  xt as z,
  z as B,
} from "./framer.yAIV6S8_.mjs";
import { i as ae, n as oe, r as se, t as ce } from "./aWuz3iYI_.DEIS9tXR.mjs";
import { i as le, n as ue, r as de, t as fe } from "./QesmqopY4.kXLSfQ0p.mjs";
import { i as pe, n as me, r as he, t as ge } from "./UHueIzRog.0H0OD-Uz.mjs";
import { i as _e, r as ve } from "./shared-lib.D6-R8ZSj.mjs";
import { i as ye, n as be, r as xe, t as Se } from "./oELRBbrwg.Cj1IsSem.mjs";
import {
  a as Ce,
  c as we,
  i as Te,
  n as Ee,
  o as De,
  r as Oe,
  s as ke,
  t as Ae,
} from "./LByYrvxAb.u-jDh2iK.mjs";
import je, { t as Me } from "./jbnN2sTGD2sTjT-P7z-ShRVE3IkHMeETNe1ErbIP52w.9zM4rr2l.mjs";
var Ne,
  Pe,
  Fe,
  V,
  Ie = e(() => {
    (l(),
      L(),
      n(),
      (Ne = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 7 L 1.41 8.41 L 6 3.83 L 6 20 L 8 20 L 8 3.83 L 12.59 8.42 L 14 7 L 7 0 Z" fill="var(--esondr, rgb(0,0,0))" height="20px" id="PABPwQhyw" transform="translate(5 2)" width="14px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Pe = o((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n ? a(d.div, { ...o, layoutId: r, ref: t }) : a(`div`, { ...o, ref: t });
      })),
      (Fe = ({ fill: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        K5AAorpEW: e ?? i.K5AAorpEW ?? `rgb(0, 0, 0)`,
      })),
      (V = y(
        o(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: o, K5AAorpEW: s, ...c } = Fe(e);
          return a(Pe, {
            ...c,
            className: h(`framer-HONEI`, r),
            layoutId: i,
            ref: t,
            style: { "--esondr": s, ...n },
          });
        }),
        [
          `.framer-HONEI { -webkit-mask: ${Ne}; aspect-ratio: 1; background-color: var(--esondr); mask: ${Ne}; width: 24px; }`,
        ],
        `framer-HONEI`
      )),
      (V.displayName = `North`),
      _(V, {
        K5AAorpEW: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: P.Color },
      }));
  });
function Le(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  H,
  Xe = e(() => {
    (l(),
      L(),
      m(),
      n(),
      Ie(),
      we(),
      Te(),
      (Re = B(V)),
      (ze = { fh3teguHQ: { hover: !0 } }),
      (Be = [`fh3teguHQ`, `CkSEWsLWL`]),
      (Ve = `framer-gGB7Q`),
      (He = { CkSEWsLWL: `framer-v-1i7r7d7`, fh3teguHQ: `framer-v-aw7kin` }),
      (Ue = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (We = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ge = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (Ke = { Default: `fh3teguHQ`, Mobile: `CkSEWsLWL` }),
      (qe = d.create(i)),
      (Je = ({ category: e, height: t, id: n, image: r, link: i, title: a, width: o, ...s }) => ({
        ...s,
        dGE_WpKg5: e ?? s.dGE_WpKg5 ?? `Product Design`,
        kLBMqr2fA: i ?? s.kLBMqr2fA,
        mNIKSAj3F: a ?? s.mNIKSAj3F ?? `Framer`,
        Nimi83OIo: r ??
          s.Nimi83OIo ?? {
            pixelHeight: 2736,
            pixelWidth: 4104,
            src: `https://framerusercontent.com/images/MnlGjZKCGMtiHb6bDhwXFHTBRc.jpg?width=4104&height=2736`,
            srcSet: `https://framerusercontent.com/images/MnlGjZKCGMtiHb6bDhwXFHTBRc.jpg?scale-down-to=512&width=4104&height=2736 512w,https://framerusercontent.com/images/MnlGjZKCGMtiHb6bDhwXFHTBRc.jpg?scale-down-to=1024&width=4104&height=2736 1024w,https://framerusercontent.com/images/MnlGjZKCGMtiHb6bDhwXFHTBRc.jpg?scale-down-to=2048&width=4104&height=2736 2048w,https://framerusercontent.com/images/MnlGjZKCGMtiHb6bDhwXFHTBRc.jpg?scale-down-to=4096&width=4104&height=2736 4096w,https://framerusercontent.com/images/MnlGjZKCGMtiHb6bDhwXFHTBRc.jpg?width=4104&height=2736 4104w`,
          },
        variant: Ke[s.variant] ?? s.variant ?? `fh3teguHQ`,
      })),
      (Ye = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = y(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = O(),
            m = N(),
            {
              style: g,
              className: _,
              layoutId: v,
              variant: y,
              mNIKSAj3F: b,
              dGE_WpKg5: x,
              Nimi83OIo: ee,
              kLBMqr2fA: T,
              ...E
            } = Je(e),
            {
              baseVariant: D,
              classNames: te,
              clearLoadingGesture: k,
              gestureHandlers: A,
              gestureVariant: j,
              isLoading: M,
              setGestureState: ne,
              setVariant: P,
              variants: I,
            } = C({
              cycleOrder: Be,
              defaultVariant: `fh3teguHQ`,
              enabledGestures: ze,
              ref: o,
              variant: y,
              variantClassNames: He,
            }),
            L = Ye(e, I),
            R = h(Ve, Ae, Ce);
          return a(p, {
            id: v ?? s,
            children: a(qe, {
              animate: I,
              initial: !1,
              children: a(Ge, {
                value: Ue,
                children: a(F, {
                  href: T,
                  motionChild: !0,
                  nodeId: `fh3teguHQ`,
                  openInNewTab: !0,
                  scopeId: `Bggt0fy3C`,
                  children: a(d.a, {
                    ...E,
                    ...A,
                    className: `${h(R, `framer-aw7kin`, _, te)} framer-1a0o1gg`,
                    "data-framer-name": `Default`,
                    layoutDependency: L,
                    layoutId: `fh3teguHQ`,
                    ref: o,
                    style: {
                      backgroundColor: `var(--token-a28f7f0c-c9e5-4bf0-b0db-e724b985a12f, rgb(240, 241, 243))`,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      ...g,
                    },
                    ...Le(
                      {
                        "fh3teguHQ-hover": { "data-framer-name": void 0 },
                        CkSEWsLWL: { "data-framer-name": `Mobile` },
                      },
                      D,
                      j
                    ),
                    children: c(d.div, {
                      className: `framer-1bowzkf`,
                      "data-framer-name": `Content`,
                      layoutDependency: L,
                      layoutId: `nKbSX6rUK`,
                      children: [
                        c(d.div, {
                          className: `framer-1tplzep`,
                          "data-framer-name": `Container`,
                          layoutDependency: L,
                          layoutId: `FwNlCfG2P`,
                          children: [
                            a(d.div, {
                              className: `framer-oc04cn`,
                              "data-framer-name": `Image Container`,
                              layoutDependency: L,
                              layoutId: `bRxXchzhM`,
                              style: {
                                borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                              },
                              children: a(re, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: w(
                                    (m?.y || 0) +
                                      (10 + ((m?.height || 66) - 20 - 135.9) / 2) +
                                      0 +
                                      45.95 +
                                      0
                                  ),
                                  sizes: `45px`,
                                  ...We(ee),
                                },
                                className: `framer-kvp5e3`,
                                layoutDependency: L,
                                layoutId: `NZfKDGctf`,
                                style: {
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                },
                              }),
                            }),
                            c(d.div, {
                              className: `framer-ce7o33`,
                              "data-framer-name": `Text`,
                              layoutDependency: L,
                              layoutId: `MWgh_HGpl`,
                              children: [
                                a(S, {
                                  __fromCanvasComponent: !0,
                                  children: a(i, {
                                    children: a(d.h4, {
                                      className: `framer-styles-preset-oj7faz`,
                                      "data-styles-preset": `LByYrvxAb`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-1eung3n, var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31)))`,
                                      },
                                      children: `Framer`,
                                    }),
                                  }),
                                  className: `framer-vwiwna`,
                                  fonts: [`Inter`],
                                  layoutDependency: L,
                                  layoutId: `Kre8lHLyP`,
                                  style: {
                                    "--extracted-1eung3n": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                                    "--framer-paragraph-spacing": `0px`,
                                  },
                                  text: b,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(S, {
                                  __fromCanvasComponent: !0,
                                  children: a(i, {
                                    children: a(d.p, {
                                      className: `framer-styles-preset-fg4d6j`,
                                      "data-styles-preset": `hzPF7HBpL`,
                                      dir: `auto`,
                                      children: `Product Design`,
                                    }),
                                  }),
                                  className: `framer-p3u5p5`,
                                  fonts: [`Inter`],
                                  layoutDependency: L,
                                  layoutId: `g9qIwyalS`,
                                  style: { "--framer-paragraph-spacing": `0px` },
                                  text: x,
                                  variants: {
                                    "fh3teguHQ-hover": {
                                      "--extracted-r6o4lv": `var(--token-51d11642-d88a-481a-9928-4807c91d56bc, rgb(124, 130, 138))`,
                                    },
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Le(
                                    {
                                      "fh3teguHQ-hover": {
                                        children: a(i, {
                                          children: a(d.p, {
                                            className: `framer-styles-preset-fg4d6j`,
                                            "data-styles-preset": `hzPF7HBpL`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-51d11642-d88a-481a-9928-4807c91d56bc, rgb(124, 130, 138)))`,
                                            },
                                            children: `Product Design`,
                                          }),
                                        }),
                                      },
                                    },
                                    D,
                                    j
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        a(d.div, {
                          className: `framer-y67t85`,
                          "data-framer-name": `Arrow Container`,
                          layoutDependency: L,
                          layoutId: `JGCtWBX79`,
                          children: a(V, {
                            animated: !0,
                            className: `framer-1692p11`,
                            layoutDependency: L,
                            layoutId: `P4qHa01ne`,
                            style: {
                              "--esondr": `var(--token-51d11642-d88a-481a-9928-4807c91d56bc, rgb(113, 120, 128))`,
                              opacity: 0,
                              rotate: 50,
                            },
                            variants: {
                              "fh3teguHQ-hover": {
                                "--esondr": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                                opacity: 1,
                              },
                              CkSEWsLWL: {
                                "--esondr": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                                opacity: 1,
                              },
                            },
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-gGB7Q.framer-1a0o1gg, .framer-gGB7Q .framer-1a0o1gg { display: block; }`,
          `.framer-gGB7Q.framer-aw7kin { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 10px 12px 10px 10px; position: relative; text-decoration: none; width: 293px; }`,
          `.framer-gGB7Q .framer-1bowzkf { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-gGB7Q .framer-1tplzep { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-gGB7Q .framer-oc04cn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-gGB7Q .framer-kvp5e3 { flex: none; height: 44px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 45px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-gGB7Q .framer-ce7o33 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-gGB7Q .framer-vwiwna { flex: none; height: auto; max-width: 400px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-gGB7Q .framer-p3u5p5 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-gGB7Q .framer-y67t85 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 12px 10px 8px 10px; position: relative; width: min-content; }`,
          `.framer-gGB7Q .framer-1692p11 { flex: none; height: var(--framer-aspect-ratio-supported, 15px); position: relative; width: 15px; }`,
          `.framer-gGB7Q.framer-v-1i7r7d7.framer-aw7kin { cursor: unset; }`,
          `.framer-gGB7Q.framer-v-aw7kin.hover .framer-y67t85 { padding: 12px 8px 10px 12px; }`,
          ...Ee,
          ...De,
        ],
        `framer-gGB7Q`
      )),
      (H.displayName = `Card | Bookmark`),
      (H.defaultProps = { height: 66, width: 293 }),
      _(H, {
        variant: {
          options: [`fh3teguHQ`, `CkSEWsLWL`],
          optionTitles: [`Default`, `Mobile`],
          title: `Variant`,
          type: P.Enum,
        },
        mNIKSAj3F: { defaultValue: `Framer`, displayTextArea: !1, title: `Title`, type: P.String },
        onmNIKSAj3FChange: { changes: `mNIKSAj3F`, type: P.ChangeHandler },
        dGE_WpKg5: {
          defaultValue: `Product Design`,
          displayTextArea: !1,
          title: `Category`,
          type: P.String,
        },
        ondGE_WpKg5Change: { changes: `dGE_WpKg5`, type: P.ChangeHandler },
        Nimi83OIo: {
          __defaultAssetReference: `data:framer/asset-reference,MnlGjZKCGMtiHb6bDhwXFHTBRc.jpg?originalFilename=photo-1585241936939-be4099591252%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHw1fHxhcnRpY2xlfGVufDB8fHx8MTcyNTQ3OTAzNXww%26ixlib%3Drb-4.0.jpg&preferredSize=auto`,
          title: `Image`,
          type: P.ResponsiveImage,
        },
        kLBMqr2fA: { title: `Link`, type: P.Link },
      }),
      v(
        H,
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
          ...Re,
          ...g(Oe),
          ...g(ke),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Ze(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  U,
  st = e(() => {
    (l(),
      L(),
      m(),
      n(),
      (Qe = [`aPQTfHuDY`, `aSkDa49ZG`, `yi7CpC96c`]),
      ($e = `framer-2bc1f`),
      (et = {
        aPQTfHuDY: `framer-v-1yx3zsa`,
        aSkDa49ZG: `framer-v-1auvv74`,
        yi7CpC96c: `framer-v-xhvpai`,
      }),
      (tt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (nt = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (rt = { Dashed: `aSkDa49ZG`, Dotted: `yi7CpC96c`, Fill: `aPQTfHuDY` }),
      (it = d.create(i)),
      (at = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: rt[r.variant] ?? r.variant ?? `aPQTfHuDY`,
      })),
      (ot = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (U = y(
        o(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = u(),
            { activeLocale: s, setLocale: c } = O();
          N();
          let { style: l, className: f, layoutId: m, variant: g, ..._ } = at(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = C({
              cycleOrder: Qe,
              defaultVariant: `aPQTfHuDY`,
              ref: i,
              variant: g,
              variantClassNames: et,
            }),
            D = ot(e, E),
            te = h($e);
          return a(p, {
            id: m ?? o,
            children: a(it, {
              animate: E,
              initial: !1,
              children: a(nt, {
                value: tt,
                children: a(d.div, {
                  ..._,
                  ...x,
                  className: h(te, `framer-1yx3zsa`, f, y),
                  "data-border": !0,
                  "data-framer-name": `Fill`,
                  layoutDependency: D,
                  layoutId: `aPQTfHuDY`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, rgb(232, 234, 237))`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    ...l,
                  },
                  variants: {
                    aSkDa49ZG: { "--border-style": `dashed` },
                    yi7CpC96c: { "--border-style": `dotted` },
                  },
                  ...Ze(
                    {
                      aSkDa49ZG: { "data-framer-name": `Dashed` },
                      yi7CpC96c: { "data-framer-name": `Dotted` },
                    },
                    v,
                    S
                  ),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-2bc1f.framer-1w3g8lo, .framer-2bc1f .framer-1w3g8lo { display: block; }`,
          `.framer-2bc1f.framer-1yx3zsa { height: 1px; overflow: visible; position: relative; width: 1152px; }`,
          `.framer-2bc1f[data-border="true"]::after, .framer-2bc1f [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-2bc1f`
      )),
      (U.displayName = `Divider`),
      (U.defaultProps = { height: 1, width: 1152 }),
      _(U, {
        variant: {
          options: [`aPQTfHuDY`, `aSkDa49ZG`, `yi7CpC96c`],
          optionTitles: [`Fill`, `Dashed`, `Dotted`],
          title: `Variant`,
          type: P.Enum,
        },
      }),
      v(U, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function ct(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  W,
  bt = e(() => {
    (l(),
      L(),
      m(),
      n(),
      we(),
      Te(),
      ye(),
      le(),
      st(),
      (lt = B(U)),
      (ut = [`E6hGr1C1K`, `KoUWbHhpK`]),
      (dt = `framer-d68xK`),
      (ft = { E6hGr1C1K: `framer-v-sirfuf`, KoUWbHhpK: `framer-v-xvscbd` }),
      (pt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (mt = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ht = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (gt = { Card: `E6hGr1C1K`, Horizontal: `KoUWbHhpK` }),
      (_t = d.create(i)),
      (vt = ({ date: e, height: t, id: n, showLine: r, title: i, width: a, ...o }) => ({
        ...o,
        variant: gt[o.variant] ?? o.variant ?? `E6hGr1C1K`,
        XxSfmpXR1: e ?? o.XxSfmpXR1 ?? `May 2021 - Aug 2023`,
        Yib3v8NxN: i ?? o.Yib3v8NxN ?? `Product Designer`,
        zQgy_tvwg: r ?? o.zQgy_tvwg ?? !0,
      })),
      (yt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = y(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = O(),
            m = N(),
            {
              style: g,
              className: _,
              layoutId: v,
              variant: y,
              Yib3v8NxN: b,
              XxSfmpXR1: x,
              zQgy_tvwg: w,
              ...T
            } = vt(e),
            {
              baseVariant: E,
              classNames: D,
              clearLoadingGesture: te,
              gestureHandlers: k,
              gestureVariant: j,
              isLoading: M,
              setGestureState: ne,
              setVariant: P,
              variants: F,
            } = C({
              cycleOrder: ut,
              defaultVariant: `E6hGr1C1K`,
              ref: o,
              variant: y,
              variantClassNames: ft,
            }),
            I = yt(e, F),
            L = h(dt, fe, Ae, Se, Ce),
            re = (e) => E === `KoUWbHhpK` && e;
          return a(p, {
            id: v ?? s,
            children: a(_t, {
              animate: F,
              initial: !1,
              children: a(ht, {
                value: pt,
                children: c(d.div, {
                  ...T,
                  ...k,
                  className: h(L, `framer-sirfuf`, _, D),
                  "data-border": !0,
                  "data-framer-name": `Card`,
                  layoutDependency: I,
                  layoutId: `E6hGr1C1K`,
                  ref: o,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, rgb(232, 234, 237))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    ...g,
                  },
                  variants: {
                    KoUWbHhpK: {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                  },
                  ...ct({ KoUWbHhpK: { "data-framer-name": `Horizontal` } }, E, j),
                  children: [
                    a(d.div, {
                      className: `framer-1xnsni0`,
                      "data-framer-name": `Container`,
                      layoutDependency: I,
                      layoutId: `q5_lMROo2`,
                      children: a(d.div, {
                        className: `framer-1z0zin0`,
                        "data-framer-name": `Desc`,
                        layoutDependency: I,
                        layoutId: `fNzBN_Zw6`,
                        children: c(d.div, {
                          className: `framer-17aohsh`,
                          layoutDependency: I,
                          layoutId: `fITuQ7fwc`,
                          children: [
                            a(d.div, {
                              className: `framer-1pkqzyh`,
                              "data-framer-name": `Heading`,
                              layoutDependency: I,
                              layoutId: `gj1DaKa4o`,
                              children: a(S, {
                                __fromCanvasComponent: !0,
                                children: a(i, {
                                  children: a(d.h3, {
                                    className: `framer-styles-preset-wn04p3`,
                                    "data-styles-preset": `QesmqopY4`,
                                    dir: `auto`,
                                    children: `Product Designer`,
                                  }),
                                }),
                                className: `framer-bck15e`,
                                "data-framer-name": `Title`,
                                fonts: [`Inter`],
                                layoutDependency: I,
                                layoutId: `iJTKvWhhq`,
                                style: {
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: b,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...ct(
                                  {
                                    KoUWbHhpK: {
                                      children: a(i, {
                                        children: a(d.h4, {
                                          className: `framer-styles-preset-oj7faz`,
                                          "data-styles-preset": `LByYrvxAb`,
                                          dir: `auto`,
                                          children: `Product Designer`,
                                        }),
                                      }),
                                    },
                                  },
                                  E,
                                  j
                                ),
                              }),
                            }),
                            a(d.div, {
                              className: `framer-1vn1i7t`,
                              "data-framer-name": `Details`,
                              layoutDependency: I,
                              layoutId: `RoLCE6oOn`,
                              children: a(S, {
                                __fromCanvasComponent: !0,
                                children: a(i, {
                                  children: a(d.p, {
                                    className: `framer-styles-preset-1rps2lr`,
                                    "data-styles-preset": `oELRBbrwg`,
                                    dir: `auto`,
                                    children: `May 2021 - Aug 2023`,
                                  }),
                                }),
                                className: `framer-jhjwvl`,
                                "data-framer-name": `Yeard`,
                                fonts: [`Inter`],
                                layoutDependency: I,
                                layoutId: `O6HPH7oYN`,
                                style: {
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: x,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...ct(
                                  {
                                    KoUWbHhpK: {
                                      children: a(i, {
                                        children: a(d.p, {
                                          className: `framer-styles-preset-fg4d6j`,
                                          "data-styles-preset": `hzPF7HBpL`,
                                          dir: `auto`,
                                          children: `May 2021 - Aug 2023`,
                                        }),
                                      }),
                                    },
                                  },
                                  E,
                                  j
                                ),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    re(w !== !1) &&
                      a(A, {
                        ...ct(
                          {
                            KoUWbHhpK: {
                              height: 1,
                              width: m?.width || `100vw`,
                              y: (m?.y || 0) + 0 + 70.9,
                            },
                          },
                          E,
                          j
                        ),
                        children: a(ee, {
                          className: `framer-11qjvtb-container`,
                          layoutDependency: I,
                          layoutId: `ZLup6aYz0-container`,
                          nodeId: `ZLup6aYz0`,
                          rendersWithMotion: !0,
                          scopeId: `eKg3zmPbi`,
                          children: a(U, {
                            height: `100%`,
                            id: `ZLup6aYz0`,
                            layoutId: `ZLup6aYz0`,
                            style: { height: `100%`, width: `100%` },
                            variant: mt(`aSkDa49ZG`),
                            width: `100%`,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-d68xK.framer-1sn1egx, .framer-d68xK .framer-1sn1egx { display: block; }`,
          `.framer-d68xK.framer-sirfuf { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 20px; position: relative; width: 887px; }`,
          `.framer-d68xK .framer-1xnsni0 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-d68xK .framer-1z0zin0 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-d68xK .framer-17aohsh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-d68xK .framer-1pkqzyh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-d68xK .framer-bck15e, .framer-d68xK .framer-jhjwvl { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-d68xK .framer-1vn1i7t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-d68xK .framer-11qjvtb-container { flex: 1 0 0px; height: 1px; position: relative; width: 1px; }`,
          `.framer-d68xK.framer-v-xvscbd.framer-sirfuf { flex-direction: column; justify-content: flex-start; padding: 0px; }`,
          `.framer-d68xK.framer-v-xvscbd .framer-1xnsni0, .framer-d68xK.framer-v-xvscbd .framer-11qjvtb-container { flex: none; width: 100%; }`,
          ...ue,
          ...Ee,
          ...be,
          ...De,
          `.framer-d68xK[data-border="true"]::after, .framer-d68xK [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-d68xK`
      )),
      (W.displayName = `Education Card`),
      (W.defaultProps = { height: 95, width: 887 }),
      _(W, {
        variant: {
          options: [`E6hGr1C1K`, `KoUWbHhpK`],
          optionTitles: [`Card`, `Horizontal`],
          title: `Variant`,
          type: P.Enum,
        },
        Yib3v8NxN: {
          defaultValue: `Product Designer`,
          displayTextArea: !0,
          title: `Title`,
          type: P.String,
        },
        onYib3v8NxNChange: { changes: `Yib3v8NxN`, type: P.ChangeHandler },
        XxSfmpXR1: {
          defaultValue: `May 2021 - Aug 2023`,
          displayTextArea: !1,
          title: `Date`,
          type: P.String,
        },
        onXxSfmpXR1Change: { changes: `XxSfmpXR1`, type: P.ChangeHandler },
        zQgy_tvwg: { defaultValue: !0, title: `Show line`, type: P.Boolean },
        onzQgy_tvwgChange: { changes: `zQgy_tvwg`, type: P.ChangeHandler },
      }),
      v(
        W,
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
          ...lt,
          ...g(de),
          ...g(Oe),
          ...g(xe),
          ...g(ke),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (W.loader = { load: (e, t) => (t.locale, Promise.allSettled([x(U, {}, t)])) }));
  });
function xt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  G,
  Pt = e(() => {
    (l(),
      L(),
      m(),
      n(),
      ae(),
      we(),
      Te(),
      ye(),
      st(),
      (St = B(U)),
      (Ct = [`W_kmdwff1`, `rZDBiSTf2`, `EKLFtrIdW`]),
      (wt = `framer-9sIMC`),
      (Tt = {
        EKLFtrIdW: `framer-v-1ikd6rw`,
        rZDBiSTf2: `framer-v-1idhh4i`,
        W_kmdwff1: `framer-v-1rhg9ai`,
      }),
      (Et = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Dt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ot = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (kt = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (At = { Card: `W_kmdwff1`, Horizontal: `rZDBiSTf2`, Vertical: `EKLFtrIdW` }),
      (jt = d.create(i)),
      (Mt = ({
        company: e,
        date: t,
        description: n,
        height: r,
        id: o,
        location: s,
        logo: c,
        showLine: l,
        title: u,
        width: f,
        ...p
      }) => ({
        ...p,
        DLjzdHyyR: e ?? p.DLjzdHyyR ?? `Apple`,
        eSAM2bD6x: s ?? p.eSAM2bD6x ?? `Torronto`,
        IqOdwsrTX: c ??
          p.IqOdwsrTX ?? {
            alt: ``,
            pixelHeight: 225,
            pixelWidth: 225,
            src: `https://framerusercontent.com/images/6orcCWcm1teOtKLo6uqpwM0ekfg.png?width=225&height=225`,
          },
        rWN14CJiV:
          n ??
          p.rWN14CJiV ??
          a(i, {
            children: a(d.p, {
              children: `Redesigned and rebuilt internal terminal systems by applying deep domain knowledge and user research, optimizing core workflows for 50000 employees.`,
            }),
          }),
        variant: At[p.variant] ?? p.variant ?? `W_kmdwff1`,
        XxSfmpXR1: t ?? p.XxSfmpXR1 ?? `May 2021 - Aug 2023`,
        Yib3v8NxN: u ?? p.Yib3v8NxN ?? `Product Designer`,
        zQgy_tvwg: l ?? p.zQgy_tvwg ?? !0,
      })),
      (Nt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = y(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = O(),
            m = N(),
            {
              style: g,
              className: _,
              layoutId: v,
              variant: y,
              IqOdwsrTX: b,
              Yib3v8NxN: x,
              DLjzdHyyR: T,
              XxSfmpXR1: E,
              eSAM2bD6x: D,
              rWN14CJiV: te,
              zQgy_tvwg: k,
              ...j
            } = Mt(e),
            {
              baseVariant: M,
              classNames: ne,
              clearLoadingGesture: P,
              gestureHandlers: F,
              gestureVariant: I,
              isLoading: L,
              setGestureState: R,
              setVariant: ie,
              variants: z,
            } = C({
              cycleOrder: Ct,
              defaultVariant: `W_kmdwff1`,
              ref: o,
              variant: y,
              variantClassNames: Tt,
            }),
            B = Nt(e, z),
            ae = h(wt, Ae, Se, Ce, ce),
            oe = () => M !== `rZDBiSTf2`,
            se = (e) => ([`rZDBiSTf2`, `EKLFtrIdW`].includes(M) ? e : !1);
          return a(p, {
            id: v ?? s,
            children: a(jt, {
              animate: z,
              initial: !1,
              children: a(kt, {
                value: Et,
                children: c(d.div, {
                  ...j,
                  ...F,
                  className: h(ae, `framer-1rhg9ai`, _, ne),
                  "data-border": !0,
                  "data-framer-name": `Card`,
                  layoutDependency: B,
                  layoutId: `W_kmdwff1`,
                  ref: o,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, rgb(232, 234, 237))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    ...g,
                  },
                  variants: {
                    EKLFtrIdW: {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                    rZDBiSTf2: {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                  },
                  ...xt(
                    {
                      EKLFtrIdW: { "data-framer-name": `Vertical` },
                      rZDBiSTf2: { "data-framer-name": `Horizontal` },
                    },
                    M,
                    I
                  ),
                  children: [
                    c(d.div, {
                      className: `framer-a1pobb`,
                      "data-framer-name": `Container`,
                      layoutDependency: B,
                      layoutId: `qT2owGqWW`,
                      children: [
                        a(re, {
                          background: {
                            alt: ``,
                            fit: `fit`,
                            intrinsicHeight: 112.5,
                            intrinsicWidth: 112.5,
                            loading: w((m?.y || 0) + 20 + 0),
                            pixelHeight: 225,
                            pixelWidth: 225,
                            sizes: `33px`,
                            ...Dt(b),
                            positionX: `center`,
                            positionY: `center`,
                          },
                          className: `framer-hr3q3e`,
                          "data-framer-name": `Logo`,
                          fitImageDimension: `height`,
                          layoutDependency: B,
                          layoutId: `uAKyfJgxF`,
                          ...xt(
                            {
                              EKLFtrIdW: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  intrinsicHeight: 112.5,
                                  intrinsicWidth: 112.5,
                                  loading: w(
                                    (m?.y || 0) +
                                      0 +
                                      (((m?.height || 182) - 0 - 210.6) / 2 + 0 + 0) +
                                      0 +
                                      0
                                  ),
                                  pixelHeight: 225,
                                  pixelWidth: 225,
                                  sizes: `33px`,
                                  ...Dt(b),
                                  positionX: `center`,
                                  positionY: `center`,
                                },
                              },
                              rZDBiSTf2: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  intrinsicHeight: 112.5,
                                  intrinsicWidth: 112.5,
                                  loading: w((m?.y || 0) + 0 + 0 + 0),
                                  pixelHeight: 225,
                                  pixelWidth: 225,
                                  sizes: `33px`,
                                  ...Dt(b),
                                  positionX: `center`,
                                  positionY: `center`,
                                },
                              },
                            },
                            M,
                            I
                          ),
                        }),
                        c(d.div, {
                          className: `framer-1on1vb5`,
                          "data-framer-name": `Desc`,
                          layoutDependency: B,
                          layoutId: `oV0hp7rjj`,
                          children: [
                            c(d.div, {
                              className: `framer-29cuq1`,
                              layoutDependency: B,
                              layoutId: `FeDAFD7Cg`,
                              children: [
                                c(d.div, {
                                  className: `framer-wsygur`,
                                  "data-framer-name": `Heading`,
                                  layoutDependency: B,
                                  layoutId: `N078r5ZH4`,
                                  children: [
                                    a(S, {
                                      __fromCanvasComponent: !0,
                                      children: a(i, {
                                        children: a(d.h4, {
                                          className: `framer-styles-preset-oj7faz`,
                                          "data-styles-preset": `LByYrvxAb`,
                                          dir: `auto`,
                                          children: `Product Designer`,
                                        }),
                                      }),
                                      className: `framer-18pykzz`,
                                      "data-framer-name": `Title`,
                                      fonts: [`Inter`],
                                      layoutDependency: B,
                                      layoutId: `oBCEMAkSp`,
                                      style: {
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      text: x,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(S, {
                                      __fromCanvasComponent: !0,
                                      children: a(i, {
                                        children: a(d.h4, {
                                          className: `framer-styles-preset-oj7faz`,
                                          "data-styles-preset": `LByYrvxAb`,
                                          dir: `auto`,
                                          children: `@`,
                                        }),
                                      }),
                                      className: `framer-gsi43r`,
                                      "data-framer-name": `@`,
                                      fonts: [`Inter`],
                                      layoutDependency: B,
                                      layoutId: `jlJ8Nm5Sb`,
                                      style: {
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(S, {
                                      __fromCanvasComponent: !0,
                                      children: a(i, {
                                        children: a(d.h4, {
                                          className: `framer-styles-preset-oj7faz`,
                                          "data-styles-preset": `LByYrvxAb`,
                                          dir: `auto`,
                                          children: `Apple`,
                                        }),
                                      }),
                                      className: `framer-1bp1qg`,
                                      "data-framer-name": `Company`,
                                      fonts: [`Inter`],
                                      layoutDependency: B,
                                      layoutId: `TSDYPZYpa`,
                                      style: {
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      text: T,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                c(d.div, {
                                  className: `framer-1cb43ac`,
                                  "data-framer-name": `Details`,
                                  layoutDependency: B,
                                  layoutId: `EaKrjNVbU`,
                                  children: [
                                    a(S, {
                                      __fromCanvasComponent: !0,
                                      children: a(i, {
                                        children: a(d.p, {
                                          className: `framer-styles-preset-1rps2lr`,
                                          "data-styles-preset": `oELRBbrwg`,
                                          dir: `auto`,
                                          children: `May 2021 - Aug 2023`,
                                        }),
                                      }),
                                      className: `framer-z3dvtk`,
                                      "data-framer-name": `Yeard`,
                                      fonts: [`Inter`],
                                      layoutDependency: B,
                                      layoutId: `Lw7_srtTO`,
                                      style: {
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      text: E,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...xt(
                                        {
                                          rZDBiSTf2: {
                                            children: a(i, {
                                              children: a(d.p, {
                                                className: `framer-styles-preset-fg4d6j`,
                                                "data-styles-preset": `hzPF7HBpL`,
                                                dir: `auto`,
                                                children: `May 2021 - Aug 2023`,
                                              }),
                                            }),
                                          },
                                        },
                                        M,
                                        I
                                      ),
                                    }),
                                    a(d.div, {
                                      className: `framer-1vyug9b`,
                                      "data-framer-name": `Divider`,
                                      layoutDependency: B,
                                      layoutId: `yBOLNC0sb`,
                                      style: {
                                        backgroundColor: `var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, rgb(232, 234, 237))`,
                                        borderBottomLeftRadius: 14,
                                        borderBottomRightRadius: 14,
                                        borderTopLeftRadius: 14,
                                        borderTopRightRadius: 14,
                                      },
                                    }),
                                    oe() &&
                                      a(S, {
                                        __fromCanvasComponent: !0,
                                        children: a(i, {
                                          children: a(d.p, {
                                            className: `framer-styles-preset-1rps2lr`,
                                            "data-styles-preset": `oELRBbrwg`,
                                            dir: `auto`,
                                            children: `Torronto`,
                                          }),
                                        }),
                                        className: `framer-mnte07`,
                                        "data-framer-name": `Location`,
                                        fonts: [`Inter`],
                                        layoutDependency: B,
                                        layoutId: `m9c8MG4lG`,
                                        style: {
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        text: D,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            a(S, {
                              __fromCanvasComponent: !0,
                              children: te,
                              className: `framer-eyco8e`,
                              "data-framer-name": `Text`,
                              fonts: [`Inter`],
                              layoutDependency: B,
                              layoutId: `iGo02unw1`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                                "--framer-paragraph-spacing": `20px`,
                              },
                              stylesPresetsClassNames: { p: `framer-styles-preset-1smn5pm` },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    se(k !== !1) &&
                      a(A, {
                        ...xt(
                          {
                            EKLFtrIdW: {
                              height: 1,
                              width: m?.width || `100vw`,
                              y:
                                (m?.y || 0) +
                                0 +
                                (((m?.height || 182) - 0 - 210.6) / 2 + 210.6 + 20),
                            },
                            rZDBiSTf2: {
                              height: 1,
                              width: m?.width || `100vw`,
                              y: (m?.y || 0) + 0 + 176.9,
                            },
                          },
                          M,
                          I
                        ),
                        children: a(ee, {
                          className: `framer-1ordgpu-container`,
                          layoutDependency: B,
                          layoutId: `ljg9lWOYn-container`,
                          nodeId: `ljg9lWOYn`,
                          rendersWithMotion: !0,
                          scopeId: `LLRS4P8MS`,
                          children: a(U, {
                            height: `100%`,
                            id: `ljg9lWOYn`,
                            layoutId: `ljg9lWOYn`,
                            style: { height: `100%`, width: `100%` },
                            variant: Ot(`aSkDa49ZG`),
                            width: `100%`,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-9sIMC.framer-12432ou, .framer-9sIMC .framer-12432ou { display: block; }`,
          `.framer-9sIMC.framer-1rhg9ai { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 20px; position: relative; width: 887px; }`,
          `.framer-9sIMC .framer-a1pobb { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-9sIMC .framer-hr3q3e { flex: none; height: auto; overflow: visible; position: relative; width: 33px; }`,
          `.framer-9sIMC .framer-1on1vb5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-9sIMC .framer-29cuq1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-9sIMC .framer-wsygur { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-9sIMC .framer-18pykzz, .framer-9sIMC .framer-gsi43r, .framer-9sIMC .framer-1bp1qg, .framer-9sIMC .framer-z3dvtk, .framer-9sIMC .framer-mnte07 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-9sIMC .framer-1cb43ac { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-9sIMC .framer-1vyug9b { aspect-ratio: 0.42857142857142855 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 3px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-9sIMC .framer-eyco8e { flex: none; height: auto; max-width: 960px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-9sIMC .framer-1ordgpu-container { flex: 1 0 0px; height: 1px; position: relative; width: 1px; }`,
          `.framer-9sIMC.framer-v-1idhh4i.framer-1rhg9ai { flex-direction: column; justify-content: flex-start; padding: 0px; }`,
          `.framer-9sIMC.framer-v-1idhh4i .framer-a1pobb, .framer-9sIMC.framer-v-1idhh4i .framer-1ordgpu-container, .framer-9sIMC.framer-v-1ikd6rw .framer-1on1vb5, .framer-9sIMC.framer-v-1ikd6rw .framer-1ordgpu-container { flex: none; width: 100%; }`,
          `.framer-9sIMC.framer-v-1ikd6rw.framer-1rhg9ai { flex-direction: column; padding: 0px; }`,
          `.framer-9sIMC.framer-v-1ikd6rw .framer-a1pobb { flex: none; flex-direction: column; width: 100%; }`,
          ...Ee,
          ...be,
          ...De,
          ...oe,
          `.framer-9sIMC[data-border="true"]::after, .framer-9sIMC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-9sIMC`
      )),
      (G.displayName = `Job Card`),
      (G.defaultProps = { height: 148, width: 887 }),
      _(G, {
        variant: {
          options: [`W_kmdwff1`, `rZDBiSTf2`, `EKLFtrIdW`],
          optionTitles: [`Card`, `Horizontal`, `Vertical`],
          title: `Variant`,
          type: P.Enum,
        },
        IqOdwsrTX: {
          __defaultAssetReference: `data:framer/asset-reference,6orcCWcm1teOtKLo6uqpwM0ekfg.png?originalFilename=image.png&width=225&height=225`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,6orcCWcm1teOtKLo6uqpwM0ekfg.png?originalFilename=image.png&width=225&height=225`,
          },
          title: `Logo`,
          type: P.ResponsiveImage,
        },
        Yib3v8NxN: {
          defaultValue: `Product Designer`,
          displayTextArea: !1,
          title: `Title`,
          type: P.String,
        },
        onYib3v8NxNChange: { changes: `Yib3v8NxN`, type: P.ChangeHandler },
        DLjzdHyyR: { defaultValue: `Apple`, displayTextArea: !1, title: `Company`, type: P.String },
        onDLjzdHyyRChange: { changes: `DLjzdHyyR`, type: P.ChangeHandler },
        XxSfmpXR1: {
          defaultValue: `May 2021 - Aug 2023`,
          displayTextArea: !1,
          title: `Date`,
          type: P.String,
        },
        onXxSfmpXR1Change: { changes: `XxSfmpXR1`, type: P.ChangeHandler },
        eSAM2bD6x: {
          defaultValue: `Torronto`,
          displayTextArea: !1,
          title: `Location`,
          type: P.String,
        },
        oneSAM2bD6xChange: { changes: `eSAM2bD6x`, type: P.ChangeHandler },
        rWN14CJiV: {
          defaultValue: `<p>Redesigned and rebuilt internal terminal systems by applying deep domain knowledge and user research, optimizing core workflows for 50000 employees.</p>`,
          title: `Description`,
          type: P.RichText,
        },
        zQgy_tvwg: { defaultValue: !0, title: `Show line`, type: P.Boolean },
        onzQgy_tvwgChange: { changes: `zQgy_tvwg`, type: P.ChangeHandler },
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
          ...St,
          ...g(Oe),
          ...g(xe),
          ...g(ke),
          ...g(se),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (G.loader = { load: (e, t) => ne([() => x(U, {}, t)], t) }));
  }),
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  K,
  Ht = e(() => {
    (l(),
      L(),
      m(),
      n(),
      pe(),
      (Ft = `framer-LCYnv`),
      (It = { Vq9d1tCPh: `framer-v-4xfphk` }),
      (Lt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Rt = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (zt = d.create(i)),
      (Bt = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        NGfkOqjTQ: n ?? i.NGfkOqjTQ ?? `Product design`,
      })),
      (Vt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = y(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: c, setLocale: l } = O();
          N();
          let { style: f, className: m, layoutId: g, variant: _, NGfkOqjTQ: v, ...y } = Bt(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: ee,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: te,
              variants: k,
            } = C({ defaultVariant: `Vq9d1tCPh`, ref: o, variant: _, variantClassNames: It }),
            A = Vt(e, k),
            j = h(Ft, ge);
          return a(p, {
            id: g ?? s,
            children: a(zt, {
              animate: k,
              initial: !1,
              children: a(Rt, {
                value: Lt,
                children: a(d.div, {
                  ...y,
                  ...w,
                  className: h(j, `framer-4xfphk`, m, x),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: A,
                  layoutId: `Vq9d1tCPh`,
                  ref: o,
                  style: {
                    backgroundColor: `var(--token-f1adf1d0-324b-4e36-a3bc-ee5f43cc8b70, rgb(247, 248, 250))`,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    ...f,
                  },
                  children: a(S, {
                    __fromCanvasComponent: !0,
                    children: a(i, {
                      children: a(d.p, {
                        className: `framer-styles-preset-1wjc5v6`,
                        "data-styles-preset": `UHueIzRog`,
                        dir: `auto`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31)))`,
                        },
                        children: `Product design`,
                      }),
                    }),
                    className: `framer-p7p9ry`,
                    fonts: [`Inter`],
                    layoutDependency: A,
                    layoutId: `aYkccDwLF`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                      "--framer-paragraph-spacing": `0px`,
                    },
                    text: v,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-LCYnv.framer-17bw4j4, .framer-LCYnv .framer-17bw4j4 { display: block; }`,
          `.framer-LCYnv.framer-4xfphk { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 12px 16px 12px 16px; position: relative; width: min-content; }`,
          `.framer-LCYnv .framer-p7p9ry { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...me,
        ],
        `framer-LCYnv`
      )),
      (K.displayName = `Chip - skill`),
      (K.defaultProps = { height: 38, width: 132 }),
      _(K, {
        NGfkOqjTQ: {
          defaultValue: `Product design`,
          displayTextArea: !0,
          title: `Title`,
          type: P.String,
        },
        onNGfkOqjTQChange: { changes: `NGfkOqjTQ`, type: P.ChangeHandler },
      }),
      v(
        K,
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
          ...g(he),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ut,
  Wt,
  Gt,
  Kt = e(() => {
    (L(),
      b.loadFonts([`FS;Manrope-medium`, `Inter-Black`, `Inter-BlackItalic`, `Inter-BoldItalic`]),
      (Ut = [
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
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/X5hj6qzcHUYv7h1390c8Rhm6550.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/cugnVhSraaRyANCaUtI5FV17wk.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/5HcVoGak8k5agFJSaKa4floXVu0.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/rZ5DdENNqIdFTIyQQiP5isO7M.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/P2Bw01CtL0b9wqygO0sSVogWbo.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/3ZmXbBKToJifDV9gwcifVd1tEY.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/gcnfba68tfm7qAyrWRCf9r34jg.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Wt = [
        `.framer-YGW7t .framer-styles-preset-1jn8g55:not(.rich-text-wrapper), .framer-YGW7t .framer-styles-preset-1jn8g55.rich-text-wrapper h2 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, #04111f); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1279px) and (min-width: 810px) { .framer-YGW7t .framer-styles-preset-1jn8g55:not(.rich-text-wrapper), .framer-YGW7t .framer-styles-preset-1jn8g55.rich-text-wrapper h2 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, #04111f); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-YGW7t .framer-styles-preset-1jn8g55:not(.rich-text-wrapper), .framer-YGW7t .framer-styles-preset-1jn8g55.rich-text-wrapper h2 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, #04111f); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Gt = `framer-YGW7t`));
  });
function qt(e, t) {
  for (; t; ) {
    let n = Xt[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function Jt(e) {
  let t = [];
  for (; e; ) {
    let n = Xt[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function Yt(e) {
  let t = Jt(e);
  if (t) throw t;
}
var Xt,
  Zt = e(() => {
    (L(), (Xt = { NQfeamgS2: new D(() => import("./Kg8hjQiJF-0.BaUF3lHn.mjs")) }));
  }),
  Qt,
  $t,
  en,
  tn,
  q,
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
  J,
  Y,
  pn,
  X,
  Z,
  Q,
  mn,
  hn,
  gn,
  $,
  _n;
e(() => {
  (l(),
    L(),
    m(),
    n(),
    _e(),
    Xe(),
    bt(),
    Pt(),
    Ht(),
    Kt(),
    Zt(),
    Me(),
    (Qt = B(G)),
    ($t = j(T)),
    (en = M(S)),
    (tn = B(H)),
    (q = M(T)),
    (nn = B(K)),
    (rn = B(W)),
    (an = B(ve)),
    (on = {
      Tso8tApwX: `(max-width: 809.98px)`,
      tyfgCN33l: `(min-width: 810px) and (max-width: 1279.98px)`,
      x1q8yLfgk: `(min-width: 1280px)`,
    }),
    (sn = []),
    (cn = `framer-Cj4Y8`),
    (ln = {
      Tso8tApwX: `framer-v-1r705h2`,
      tyfgCN33l: `framer-v-1rldj1l`,
      x1q8yLfgk: `framer-v-1cnwng4`,
    }),
    (un = (e, t, n) => (e && t ? `position` : n)),
    (dn = {
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
    (fn = {
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
    (J = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Y = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (pn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.3, duration: 0.7, type: `spring` },
      x: 0,
      y: 0,
    }),
    (X = {
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
    (Z = { bounce: 0, delay: 0, duration: 1.1, type: `spring` }),
    (Q = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Z,
      x: 0,
      y: 10,
    }),
    (mn = { Desktop: `x1q8yLfgk`, Phone: `Tso8tApwX`, Tablet: `tyfgCN33l` }),
    (hn = ({ value: e }) =>
      k()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (gn = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: mn[r.variant] ?? r.variant ?? `x1q8yLfgk`,
    })),
    ($ = y(
      o(function (e, n) {
        let o = r(null),
          l = n ?? o,
          m = u(),
          { activeLocale: g, setLocale: _ } = O(),
          v = N(),
          { style: y, className: b, layoutId: x, variant: S, ...ee } = gn(e);
        ie(t(() => je({}, g), [g]));
        let [C, w] = I(S, on, !1),
          D = h(cn, Gt),
          k = s(E)?.isLayoutTemplate,
          j = !!s(f)?.transition?.layout,
          M = un(k, j),
          ne = z(`qsgnbgHMw`),
          P = r(null),
          F = z(`xF4t9uhPf`),
          L = r(null),
          re = z(`ia0GR15Vd`),
          B = r(null);
        Yt(g);
        let ae = z(`LoB7OkfIo`),
          oe = r(null);
        return (
          te({}),
          a(E.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: mn,
              primaryVariantId: `x1q8yLfgk`,
              variantClassNames: ln,
            },
            children: c(p, {
              id: x ?? m,
              children: [
                a(hn, {
                  value: `html body { background: var(--token-f1adf1d0-324b-4e36-a3bc-ee5f43cc8b70, rgb(240, 242, 245)); }`,
                }),
                c(d.div, {
                  ...ee,
                  className: h(D, `framer-1cnwng4`, b),
                  ref: l,
                  style: { ...y },
                  children: [
                    c(d.div, {
                      className: `framer-1mroyfy`,
                      "data-framer-name": `Main`,
                      layout: M,
                      children: [
                        a(`section`, {
                          className: `framer-mrazec`,
                          "data-border": !0,
                          "data-framer-name": `Experience`,
                          id: ne,
                          ref: P,
                          children: a(`div`, {
                            className: `framer-19bn3uh`,
                            "data-framer-name": `Container`,
                            children: c(`div`, {
                              className: `framer-4ytnbu`,
                              "data-framer-name": `Roles`,
                              children: [
                                a(R, {
                                  breakpoint: C,
                                  overrides: {
                                    Tso8tApwX: {
                                      width: `min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px)`,
                                    },
                                    tyfgCN33l: {
                                      width: `min(max(min(${v?.width || `100vw`}, 1280px) - 80px, 1px), 1280px)`,
                                    },
                                  },
                                  children: a(A, {
                                    height: 148,
                                    width: `min(max(min(${v?.width || `100vw`}, 1280px) - 128px, 1px), 1280px)`,
                                    children: a($t, {
                                      animate: dn,
                                      className: `framer-1pcpb2-container`,
                                      "data-framer-appear-id": `1pcpb2`,
                                      initial: fn,
                                      nodeId: `Ryq5idWOO`,
                                      optimized: !0,
                                      rendersWithMotion: !0,
                                      scopeId: `Kg8hjQiJF`,
                                      children: a(R, {
                                        breakpoint: C,
                                        overrides: {
                                          Tso8tApwX: { DLjzdHyyR: `ММК`, variant: Y(`EKLFtrIdW`) },
                                        },
                                        children: a(G, {
                                          DLjzdHyyR: `Магнитогорский Металлургический Комбинат`,
                                          eSAM2bD6x: `Магнитогорск`,
                                          height: `100%`,
                                          id: `Ryq5idWOO`,
                                          IqOdwsrTX: J(
                                            {
                                              pixelHeight: 45,
                                              pixelWidth: 56,
                                              src: `../../assets/images/oi2wN10UQOvWcti0L08AhHe8bs.png`,
                                            },
                                            ``
                                          ),
                                          layoutId: `Ryq5idWOO`,
                                          rWN14CJiV: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              children: `Проектировала интерфейсы для внутренних и B2B-продуктов компании: корпоративный маркетплейс (система закупок), СЭД «Атач» (веб и мобильная версия), административные и мониторинговые системы, портал для руководства. Занималась полным циклом  от исследований и прототипов до дизайн-систем и передачи в разработку.`,
                                            }),
                                          }),
                                          style: { width: `100%` },
                                          variant: Y(`rZDBiSTf2`),
                                          width: `100%`,
                                          XxSfmpXR1: `Март 2024 - Август 2026`,
                                          Yib3v8NxN: `Продуктовый дизайнер`,
                                          zQgy_tvwg: !0,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                a(R, {
                                  breakpoint: C,
                                  overrides: {
                                    Tso8tApwX: {
                                      width: `min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px)`,
                                    },
                                    tyfgCN33l: {
                                      width: `min(max(min(${v?.width || `100vw`}, 1280px) - 80px, 1px), 1280px)`,
                                    },
                                  },
                                  children: a(A, {
                                    height: 148,
                                    width: `min(max(min(${v?.width || `100vw`}, 1280px) - 128px, 1px), 1280px)`,
                                    children: a($t, {
                                      animate: pn,
                                      className: `framer-1voyedk-container`,
                                      "data-framer-appear-id": `1voyedk`,
                                      initial: fn,
                                      nodeId: `CMWXKesHT`,
                                      optimized: !0,
                                      rendersWithMotion: !0,
                                      scopeId: `Kg8hjQiJF`,
                                      children: a(R, {
                                        breakpoint: C,
                                        overrides: { Tso8tApwX: { variant: Y(`EKLFtrIdW`) } },
                                        children: a(G, {
                                          DLjzdHyyR: `Фриланс`,
                                          eSAM2bD6x: `Удаленно`,
                                          height: `100%`,
                                          id: `CMWXKesHT`,
                                          IqOdwsrTX: J(
                                            {
                                              pixelHeight: 200,
                                              pixelWidth: 200,
                                              src: `../../assets/images/oqWtJ0RPukX710W3FI5R0zyik4Y.jpg`,
                                            },
                                            ``
                                          ),
                                          layoutId: `CMWXKesHT`,
                                          rWN14CJiV: a(i, {
                                            children: a(`p`, {
                                              dir: `auto`,
                                              children: `Работала над проектами для частных и коммерческих заказчиков: разрабатывала сайты, лендинги, интернет-магазины, адаптивные макеты и графические материалы для бизнеса.`,
                                            }),
                                          }),
                                          style: { width: `100%` },
                                          variant: Y(`rZDBiSTf2`),
                                          width: `100%`,
                                          XxSfmpXR1: `Январь 2022 – Март 2024`,
                                          Yib3v8NxN: `Веб-дизайнер`,
                                          zQgy_tvwg: !1,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        a(`section`, {
                          className: `framer-up4ouz`,
                          "data-border": !0,
                          "data-framer-name": `Tools`,
                          id: F,
                          ref: L,
                          children: c(`div`, {
                            className: `framer-gnqfp7`,
                            "data-framer-name": `Container`,
                            children: [
                              a(`div`, {
                                className: `framer-1tc9421`,
                                "data-framer-name": `Heading`,
                                children: a(en, {
                                  __framer__animate: { transition: Z },
                                  __framer__animateOnce: !0,
                                  __framer__enter: X,
                                  __framer__exit: Q,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: a(i, {
                                    children: a(`h2`, {
                                      className: `framer-styles-preset-1jn8g55`,
                                      "data-styles-preset": `P0m9GBGFu`,
                                      dir: `auto`,
                                      children: `Инструменты которые я использую в работе`,
                                    }),
                                  }),
                                  className: `framer-1qg5uvu`,
                                  "data-framer-name": `Heading`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              a(`div`, {
                                className: `framer-12nstls`,
                                "data-framer-name": `Tools Container`,
                                children: c(`div`, {
                                  className: `framer-1a2deob`,
                                  "data-framer-name": `Tools Grid`,
                                  children: [
                                    a(R, {
                                      breakpoint: C,
                                      overrides: {
                                        Tso8tApwX: {
                                          width: `max(min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px), 50px)`,
                                        },
                                        tyfgCN33l: {
                                          width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 80px, 1px), 1280px) - 16px) / 2, 50px)`,
                                        },
                                      },
                                      children: a(A, {
                                        height: 66,
                                        width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 128px, 1px), 1280px) - 32px) / 3, 50px)`,
                                        children: a(q, {
                                          __framer__animate: { transition: Z },
                                          __framer__animateOnce: !0,
                                          __framer__enter: X,
                                          __framer__exit: Q,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-vfxjf-container`,
                                          "data-framer-name": `Tool 01`,
                                          name: `Tool 01`,
                                          nodeId: `xLHVnif4K`,
                                          rendersWithMotion: !0,
                                          scopeId: `Kg8hjQiJF`,
                                          children: a(R, {
                                            breakpoint: C,
                                            overrides: { Tso8tApwX: { variant: Y(`CkSEWsLWL`) } },
                                            children: a(H, {
                                              dGE_WpKg5: `Веб-дизайн, шаблоны`,
                                              height: `100%`,
                                              id: `xLHVnif4K`,
                                              kLBMqr2fA: `https://framer.link/framewave`,
                                              layoutId: `xLHVnif4K`,
                                              mNIKSAj3F: `Framer`,
                                              name: `Tool 01`,
                                              Nimi83OIo: J(
                                                {
                                                  pixelHeight: 824,
                                                  pixelWidth: 826,
                                                  src: `https://framerusercontent.com/images/hG1oJqOodJWyvzGD4YEPg0aHUnY.jpeg?width=826&height=824`,
                                                  srcSet: `../../assets/images/hG1oJqOodJWyvzGD4YEPg0aHUnY.jpeg 512w,https://framerusercontent.com/images/hG1oJqOodJWyvzGD4YEPg0aHUnY.jpeg?width=826&height=824 826w`,
                                                },
                                                ``
                                              ),
                                              style: { width: `100%` },
                                              variant: Y(`fh3teguHQ`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(R, {
                                      breakpoint: C,
                                      overrides: {
                                        Tso8tApwX: {
                                          width: `max(min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px), 50px)`,
                                        },
                                        tyfgCN33l: {
                                          width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 80px, 1px), 1280px) - 16px) / 2, 50px)`,
                                        },
                                      },
                                      children: a(A, {
                                        height: 66,
                                        width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 128px, 1px), 1280px) - 32px) / 3, 50px)`,
                                        children: a(q, {
                                          __framer__animate: { transition: Z },
                                          __framer__animateOnce: !0,
                                          __framer__enter: X,
                                          __framer__exit: Q,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1ynij5e-container`,
                                          "data-framer-name": `Tool 01`,
                                          name: `Tool 01`,
                                          nodeId: `O92AJFpyx`,
                                          rendersWithMotion: !0,
                                          scopeId: `Kg8hjQiJF`,
                                          children: a(R, {
                                            breakpoint: C,
                                            overrides: { Tso8tApwX: { variant: Y(`CkSEWsLWL`) } },
                                            children: a(H, {
                                              dGE_WpKg5: `Идеи, прототипирование`,
                                              height: `100%`,
                                              id: `O92AJFpyx`,
                                              kLBMqr2fA: `https://claude.ai/new`,
                                              layoutId: `O92AJFpyx`,
                                              mNIKSAj3F: `Claude`,
                                              name: `Tool 01`,
                                              Nimi83OIo: J(
                                                {
                                                  pixelHeight: 226,
                                                  pixelWidth: 223,
                                                  src: `../../assets/images/mYUwKfxqULeXKyfQeOHQfgoH0c.png`,
                                                },
                                                ``
                                              ),
                                              style: { width: `100%` },
                                              variant: Y(`fh3teguHQ`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(R, {
                                      breakpoint: C,
                                      overrides: {
                                        Tso8tApwX: {
                                          width: `max(min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px), 50px)`,
                                        },
                                        tyfgCN33l: {
                                          width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 80px, 1px), 1280px) - 16px) / 2, 50px)`,
                                        },
                                      },
                                      children: a(A, {
                                        height: 66,
                                        width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 128px, 1px), 1280px) - 32px) / 3, 50px)`,
                                        children: a(q, {
                                          __framer__animate: { transition: Z },
                                          __framer__animateOnce: !0,
                                          __framer__enter: X,
                                          __framer__exit: Q,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-14scpj0-container`,
                                          "data-framer-name": `Tool 01`,
                                          name: `Tool 01`,
                                          nodeId: `pWQAZIZlU`,
                                          rendersWithMotion: !0,
                                          scopeId: `Kg8hjQiJF`,
                                          children: a(R, {
                                            breakpoint: C,
                                            overrides: { Tso8tApwX: { variant: Y(`CkSEWsLWL`) } },
                                            children: a(H, {
                                              dGE_WpKg5: `Брейншторм, воркшопы`,
                                              height: `100%`,
                                              id: `pWQAZIZlU`,
                                              kLBMqr2fA: `https://miro.com/`,
                                              layoutId: `pWQAZIZlU`,
                                              mNIKSAj3F: `Miro`,
                                              name: `Tool 01`,
                                              Nimi83OIo: J(
                                                {
                                                  pixelHeight: 400,
                                                  pixelWidth: 400,
                                                  src: `../../assets/images/bmf0MouyreGYHHCiMDQqT5Ik7qQ.jpg`,
                                                },
                                                ``
                                              ),
                                              style: { width: `100%` },
                                              variant: Y(`fh3teguHQ`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(R, {
                                      breakpoint: C,
                                      overrides: {
                                        Tso8tApwX: {
                                          width: `max(min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px), 50px)`,
                                        },
                                        tyfgCN33l: {
                                          width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 80px, 1px), 1280px) - 16px) / 2, 50px)`,
                                        },
                                      },
                                      children: a(A, {
                                        height: 66,
                                        width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 128px, 1px), 1280px) - 32px) / 3, 50px)`,
                                        children: a(q, {
                                          __framer__animate: { transition: Z },
                                          __framer__animateOnce: !0,
                                          __framer__enter: X,
                                          __framer__exit: Q,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-6ij3vx-container`,
                                          "data-framer-name": `Tool 01`,
                                          name: `Tool 01`,
                                          nodeId: `i2AHZbrk8`,
                                          rendersWithMotion: !0,
                                          scopeId: `Kg8hjQiJF`,
                                          children: a(R, {
                                            breakpoint: C,
                                            overrides: { Tso8tApwX: { variant: Y(`CkSEWsLWL`) } },
                                            children: a(H, {
                                              dGE_WpKg5: `UI Дизайн`,
                                              height: `100%`,
                                              id: `i2AHZbrk8`,
                                              kLBMqr2fA: `https://www.figma.com/`,
                                              layoutId: `i2AHZbrk8`,
                                              mNIKSAj3F: `Figma`,
                                              name: `Tool 01`,
                                              Nimi83OIo: J(
                                                {
                                                  pixelHeight: 225,
                                                  pixelWidth: 225,
                                                  src: `../../assets/images/6OOzy60z43y4b4GnlJuUA02PaA.png`,
                                                },
                                                ``
                                              ),
                                              style: { width: `100%` },
                                              variant: Y(`fh3teguHQ`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(R, {
                                      breakpoint: C,
                                      overrides: {
                                        Tso8tApwX: {
                                          width: `max(min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px), 50px)`,
                                        },
                                        tyfgCN33l: {
                                          width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 80px, 1px), 1280px) - 16px) / 2, 50px)`,
                                        },
                                      },
                                      children: a(A, {
                                        height: 66,
                                        width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 128px, 1px), 1280px) - 32px) / 3, 50px)`,
                                        children: a(q, {
                                          __framer__animate: { transition: Z },
                                          __framer__animateOnce: !0,
                                          __framer__enter: X,
                                          __framer__exit: Q,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-jkhaxm-container`,
                                          "data-framer-name": `Tool 01`,
                                          name: `Tool 01`,
                                          nodeId: `kzUFfb71K`,
                                          rendersWithMotion: !0,
                                          scopeId: `Kg8hjQiJF`,
                                          children: a(R, {
                                            breakpoint: C,
                                            overrides: { Tso8tApwX: { variant: Y(`CkSEWsLWL`) } },
                                            children: a(H, {
                                              dGE_WpKg5: `Ресерч`,
                                              height: `100%`,
                                              id: `kzUFfb71K`,
                                              kLBMqr2fA: `https://www.perplexity.ai/`,
                                              layoutId: `kzUFfb71K`,
                                              mNIKSAj3F: `Perplexity`,
                                              name: `Tool 01`,
                                              Nimi83OIo: J(
                                                {
                                                  pixelHeight: 225,
                                                  pixelWidth: 225,
                                                  src: `../../assets/images/5EbZ3GnCf9iSrbsaEFZw7KtlAXw.png`,
                                                },
                                                ``
                                              ),
                                              style: { width: `100%` },
                                              variant: Y(`fh3teguHQ`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(R, {
                                      breakpoint: C,
                                      overrides: {
                                        Tso8tApwX: {
                                          width: `max(min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px), 50px)`,
                                        },
                                        tyfgCN33l: {
                                          width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 80px, 1px), 1280px) - 16px) / 2, 50px)`,
                                        },
                                      },
                                      children: a(A, {
                                        height: 66,
                                        width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 128px, 1px), 1280px) - 32px) / 3, 50px)`,
                                        children: a(q, {
                                          __framer__animate: { transition: Z },
                                          __framer__animateOnce: !0,
                                          __framer__enter: X,
                                          __framer__exit: Q,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-hl9oz-container`,
                                          "data-framer-name": `Tool 01`,
                                          name: `Tool 01`,
                                          nodeId: `cIC9IX5wx`,
                                          rendersWithMotion: !0,
                                          scopeId: `Kg8hjQiJF`,
                                          children: a(R, {
                                            breakpoint: C,
                                            overrides: { Tso8tApwX: { variant: Y(`CkSEWsLWL`) } },
                                            children: a(H, {
                                              dGE_WpKg5: `Организация работы`,
                                              height: `100%`,
                                              id: `cIC9IX5wx`,
                                              kLBMqr2fA: `https://www.craft.do/`,
                                              layoutId: `cIC9IX5wx`,
                                              mNIKSAj3F: `Craft`,
                                              name: `Tool 01`,
                                              Nimi83OIo: J(
                                                {
                                                  pixelHeight: 225,
                                                  pixelWidth: 225,
                                                  src: `../../assets/images/mLWTbqFKgeE2yO8rpFrT4YwyoVA.png`,
                                                },
                                                ``
                                              ),
                                              style: { width: `100%` },
                                              variant: Y(`fh3teguHQ`),
                                              width: `100%`,
                                            }),
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
                        a(`section`, {
                          className: `framer-krvxtq`,
                          "data-border": !0,
                          "data-framer-name": `Skills`,
                          id: re,
                          ref: B,
                          children: c(`div`, {
                            className: `framer-maz9ba`,
                            "data-framer-name": `Container`,
                            children: [
                              a(`div`, {
                                className: `framer-1oqbjdy`,
                                "data-framer-name": `Heading`,
                                children: a(en, {
                                  __framer__animate: { transition: Z },
                                  __framer__animateOnce: !0,
                                  __framer__enter: X,
                                  __framer__exit: Q,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: a(i, {
                                    children: a(`h2`, {
                                      className: `framer-styles-preset-1jn8g55`,
                                      "data-styles-preset": `P0m9GBGFu`,
                                      dir: `auto`,
                                      children: `Навыки`,
                                    }),
                                  }),
                                  className: `framer-11jtlx7`,
                                  "data-framer-name": `Heading`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              a(`div`, {
                                className: `framer-19477lz`,
                                "data-framer-name": `Tools Container`,
                                children: c(`div`, {
                                  className: `framer-1210nne`,
                                  "data-framer-name": `Tools Grid`,
                                  children: [
                                    a(A, {
                                      height: 38,
                                      children: a(q, {
                                        __framer__animate: { transition: Z },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__exit: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-xvgc42-container`,
                                        nodeId: `DrsKkVdK7`,
                                        rendersWithMotion: !0,
                                        scopeId: `Kg8hjQiJF`,
                                        children: a(K, {
                                          height: `100%`,
                                          id: `DrsKkVdK7`,
                                          layoutId: `DrsKkVdK7`,
                                          NGfkOqjTQ: `Продуктовый дизайн`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    a(A, {
                                      height: 38,
                                      children: a(q, {
                                        __framer__animate: { transition: Z },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__exit: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-nxf8hz-container`,
                                        nodeId: `FpmlWDwxZ`,
                                        rendersWithMotion: !0,
                                        scopeId: `Kg8hjQiJF`,
                                        children: a(K, {
                                          height: `100%`,
                                          id: `FpmlWDwxZ`,
                                          layoutId: `FpmlWDwxZ`,
                                          NGfkOqjTQ: `UX ресерч`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    a(A, {
                                      height: 38,
                                      children: a(q, {
                                        __framer__animate: { transition: Z },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__exit: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1s78lnd-container`,
                                        nodeId: `EW2jn7raD`,
                                        rendersWithMotion: !0,
                                        scopeId: `Kg8hjQiJF`,
                                        children: a(K, {
                                          height: `100%`,
                                          id: `EW2jn7raD`,
                                          layoutId: `EW2jn7raD`,
                                          NGfkOqjTQ: `Интерактивный дизайн`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    a(A, {
                                      height: 38,
                                      children: a(q, {
                                        __framer__animate: { transition: Z },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__exit: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1kfwkas-container`,
                                        nodeId: `NKgx5kiKb`,
                                        rendersWithMotion: !0,
                                        scopeId: `Kg8hjQiJF`,
                                        children: a(K, {
                                          height: `100%`,
                                          id: `NKgx5kiKb`,
                                          layoutId: `NKgx5kiKb`,
                                          NGfkOqjTQ: qt(`v0`, g) ?? `Дизайн системы`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    a(A, {
                                      height: 38,
                                      children: a(q, {
                                        __framer__animate: { transition: Z },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__exit: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1v6tr2y-container`,
                                        nodeId: `z0NgqyOFN`,
                                        rendersWithMotion: !0,
                                        scopeId: `Kg8hjQiJF`,
                                        children: a(K, {
                                          height: `100%`,
                                          id: `z0NgqyOFN`,
                                          layoutId: `z0NgqyOFN`,
                                          NGfkOqjTQ: `Прототипирование`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    a(A, {
                                      height: 38,
                                      children: a(q, {
                                        __framer__animate: { transition: Z },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__exit: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1u8gzqw-container`,
                                        nodeId: `xE_YfyqL6`,
                                        rendersWithMotion: !0,
                                        scopeId: `Kg8hjQiJF`,
                                        children: a(K, {
                                          height: `100%`,
                                          id: `xE_YfyqL6`,
                                          layoutId: `xE_YfyqL6`,
                                          NGfkOqjTQ: `User flows`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    a(A, {
                                      height: 38,
                                      children: a(q, {
                                        __framer__animate: { transition: Z },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__exit: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-84d5v0-container`,
                                        nodeId: `FSxjYiSPl`,
                                        rendersWithMotion: !0,
                                        scopeId: `Kg8hjQiJF`,
                                        children: a(K, {
                                          height: `100%`,
                                          id: `FSxjYiSPl`,
                                          layoutId: `FSxjYiSPl`,
                                          NGfkOqjTQ: `Usability тестирование`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    a(A, {
                                      height: 38,
                                      children: a(q, {
                                        __framer__animate: { transition: Z },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__exit: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-dnjp10-container`,
                                        nodeId: `dcQok4bDX`,
                                        rendersWithMotion: !0,
                                        scopeId: `Kg8hjQiJF`,
                                        children: a(K, {
                                          height: `100%`,
                                          id: `dcQok4bDX`,
                                          layoutId: `dcQok4bDX`,
                                          NGfkOqjTQ: `Визуальный дизайн`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    a(A, {
                                      height: 38,
                                      children: a(q, {
                                        __framer__animate: { transition: Z },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__exit: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-vu20wv-container`,
                                        nodeId: `jmqg7hpXf`,
                                        rendersWithMotion: !0,
                                        scopeId: `Kg8hjQiJF`,
                                        children: a(K, {
                                          height: `100%`,
                                          id: `jmqg7hpXf`,
                                          layoutId: `jmqg7hpXf`,
                                          NGfkOqjTQ: `Информационная архитектура`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        a(`section`, {
                          className: `framer-8ajljy`,
                          "data-border": !0,
                          "data-framer-name": `Education`,
                          id: ae,
                          ref: oe,
                          children: c(`div`, {
                            className: `framer-1hp68ou`,
                            "data-framer-name": `Container`,
                            children: [
                              a(`div`, {
                                className: `framer-10mhxdx`,
                                "data-framer-name": `Heading`,
                                children: a(R, {
                                  breakpoint: C,
                                  overrides: {
                                    tyfgCN33l: {
                                      children: a(i, {
                                        children: a(`h2`, {
                                          className: `framer-styles-preset-1egpd0d`,
                                          "data-styles-preset": `OJXYk5Wfe`,
                                          dir: `auto`,
                                          children: `Образование`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: a(en, {
                                    __framer__animate: { transition: Z },
                                    __framer__animateOnce: !0,
                                    __framer__enter: X,
                                    __framer__exit: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: a(i, {
                                      children: a(`h2`, {
                                        className: `framer-styles-preset-1jn8g55`,
                                        "data-styles-preset": `P0m9GBGFu`,
                                        dir: `auto`,
                                        children: `Образование`,
                                      }),
                                    }),
                                    className: `framer-k7coc5`,
                                    "data-framer-name": `Heading`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                              a(R, {
                                breakpoint: C,
                                overrides: {
                                  Tso8tApwX: {
                                    width: `min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px)`,
                                  },
                                  tyfgCN33l: {
                                    width: `min(max(min(${v?.width || `100vw`}, 1280px) - 80px, 1px), 1280px)`,
                                  },
                                },
                                children: a(A, {
                                  height: 95,
                                  width: `min(max(min(${v?.width || `100vw`}, 1280px) - 128px, 1px), 1280px)`,
                                  children: a(q, {
                                    __framer__animate: { transition: Z },
                                    __framer__animateOnce: !0,
                                    __framer__enter: X,
                                    __framer__exit: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1w7xqbk-container`,
                                    nodeId: `X6Uy8evxF`,
                                    rendersWithMotion: !0,
                                    scopeId: `Kg8hjQiJF`,
                                    children: a(W, {
                                      height: `100%`,
                                      id: `X6Uy8evxF`,
                                      layoutId: `X6Uy8evxF`,
                                      style: { width: `100%` },
                                      variant: Y(`KoUWbHhpK`),
                                      width: `100%`,
                                      XxSfmpXR1: `2022 – 2026 · МГТУ им. Носова`,
                                      Yib3v8NxN: `Бакалавриат · Прикладная информатика `,
                                      zQgy_tvwg: !1,
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    a(A, {
                      children: a(T, {
                        className: `framer-13kktwr-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: M,
                        nodeId: `NUmZxhi9M`,
                        scopeId: `Kg8hjQiJF`,
                        children: a(ve, {
                          height: `100%`,
                          id: `NUmZxhi9M`,
                          intensity: 6,
                          layoutId: `NUmZxhi9M`,
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
        `.framer-Cj4Y8.framer-10y3b7l, .framer-Cj4Y8 .framer-10y3b7l { display: block; }`,
        `.framer-Cj4Y8.framer-1cnwng4 { align-content: center; align-items: center; background-color: var(--token-f1adf1d0-324b-4e36-a3bc-ee5f43cc8b70, #f0f2f5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
        `.framer-Cj4Y8 .framer-1mroyfy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 64px 0px 64px; position: relative; width: 100%; }`,
        `.framer-Cj4Y8 .framer-mrazec, .framer-Cj4Y8 .framer-up4ouz, .framer-Cj4Y8 .framer-krvxtq { --border-bottom-width: 0px; --border-color: var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, #e8eaed); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 80px 0px; position: relative; width: 100%; }`,
        `.framer-Cj4Y8 .framer-19bn3uh { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Cj4Y8 .framer-4ytnbu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Cj4Y8 .framer-1pcpb2-container, .framer-Cj4Y8 .framer-1voyedk-container { flex: none; height: auto; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Cj4Y8 .framer-gnqfp7, .framer-Cj4Y8 .framer-maz9ba, .framer-Cj4Y8 .framer-1hp68ou { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Cj4Y8 .framer-1tc9421, .framer-Cj4Y8 .framer-1oqbjdy, .framer-Cj4Y8 .framer-10mhxdx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-Cj4Y8 .framer-1qg5uvu, .framer-Cj4Y8 .framer-11jtlx7, .framer-Cj4Y8 .framer-k7coc5 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Cj4Y8 .framer-12nstls, .framer-Cj4Y8 .framer-19477lz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Cj4Y8 .framer-1a2deob { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Cj4Y8 .framer-vfxjf-container, .framer-Cj4Y8 .framer-1ynij5e-container, .framer-Cj4Y8 .framer-14scpj0-container, .framer-Cj4Y8 .framer-6ij3vx-container, .framer-Cj4Y8 .framer-jkhaxm-container, .framer-Cj4Y8 .framer-hl9oz-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-Cj4Y8 .framer-1210nne { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 16px 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Cj4Y8 .framer-xvgc42-container, .framer-Cj4Y8 .framer-nxf8hz-container, .framer-Cj4Y8 .framer-1s78lnd-container, .framer-Cj4Y8 .framer-1kfwkas-container, .framer-Cj4Y8 .framer-1v6tr2y-container, .framer-Cj4Y8 .framer-1u8gzqw-container, .framer-Cj4Y8 .framer-84d5v0-container, .framer-Cj4Y8 .framer-dnjp10-container, .framer-Cj4Y8 .framer-vu20wv-container, .framer-Cj4Y8 .framer-13kktwr-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Cj4Y8 .framer-8ajljy { --border-bottom-width: 1px; --border-color: var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, #e8eaed); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 80px 0px; position: relative; width: 100%; }`,
        `.framer-Cj4Y8 .framer-1w7xqbk-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...Wt,
        `.framer-Cj4Y8[data-border="true"]::after, .framer-Cj4Y8 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-Cj4Y8.framer-1cnwng4 { width: 810px; } .framer-Cj4Y8 .framer-1mroyfy { padding: 0px 40px 0px 40px; } .framer-Cj4Y8 .framer-1a2deob { grid-template-columns: repeat(2, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-Cj4Y8.framer-1cnwng4 { width: 390px; } .framer-Cj4Y8 .framer-1mroyfy { padding: 0px 20px 0px 20px; } .framer-Cj4Y8 .framer-mrazec, .framer-Cj4Y8 .framer-up4ouz, .framer-Cj4Y8 .framer-krvxtq { padding: 40px 0px 40px 0px; } .framer-Cj4Y8 .framer-19bn3uh, .framer-Cj4Y8 .framer-4ytnbu { gap: 28px; } .framer-Cj4Y8 .framer-12nstls, .framer-Cj4Y8 .framer-19477lz { gap: 29px; } .framer-Cj4Y8 .framer-1a2deob { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-Cj4Y8 .framer-8ajljy { padding: 40px 0px 60px 0px; }}`,
      ],
      `framer-Cj4Y8`
    )),
    ($.displayName = `About`),
    ($.defaultProps = { height: 2127, width: 1280 }),
    v(
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
        ...Qt,
        ...tn,
        ...nn,
        ...rn,
        ...an,
        ...g(Ut),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) =>
        ne([() => x(G, {}, t), () => x(H, {}, t), () => x(K, {}, t), () => x(W, {}, t)], t),
    }),
    (_n = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerKg8hjQiJF`,
          slots: [],
          annotations: {
            framerScrollSections: `{"qsgnbgHMw":{"pattern":":qsgnbgHMw","name":"experience"},"xF4t9uhPf":{"pattern":":xF4t9uhPf","name":"experience"},"ia0GR15Vd":{"pattern":":ia0GR15Vd","name":"experience"},"LoB7OkfIo":{"pattern":":LoB7OkfIo","name":"education"}}`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `2127`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1280`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"tyfgCN33l":{"layout":["fixed","auto"]},"Tso8tApwX":{"layout":["fixed","auto"]}}}`,
            framerAutoSizeImages: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { _n as __FramerMetadata__, $ as default, sn as queryParamNames };
//# sourceMappingURL=LkAC-WG0VZTwwrqGJPZVjHkdIx7dM-fMjHW2LFiC9HU.DY3AdMVT.mjs.map
