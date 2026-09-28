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
  H as b,
  N as x,
  S,
  T as C,
  Tt as w,
  V as ee,
  a as T,
  c as te,
  ct as ne,
  f as E,
  ft as re,
  gt as ie,
  ht as ae,
  i as D,
  jt as O,
  kt as k,
  lt as A,
  nt as j,
  o as M,
  pt as oe,
  q as N,
  u as se,
  v as P,
  vt as F,
  xt as ce,
  yt as le,
  z as I,
} from "./framer.yAIV6S8_.mjs";
import { i as L, n as R, r as ue, t as de } from "./aWuz3iYI_.DEIS9tXR.mjs";
import { i as fe, n as pe, r as me, t as he } from "./QesmqopY4.kXLSfQ0p.mjs";
import { i as ge, n as _e, r as ve, t as ye } from "./UHueIzRog.0H0OD-Uz.mjs";
import { n as be, t as xe } from "./O7WRG9NIo.DQFX-uT2.mjs";
import { a as Se, c as Ce, i as we, o as Te, r as Ee, s as De } from "./shared-lib.D6-R8ZSj.mjs";
import { n as Oe, t as ke } from "./Video.CsxwoGXz.mjs";
import { i as Ae, n as je, r as Me, t as Ne } from "./UN67IVlmf.QEFGp4eo.mjs";
import Pe, { t as Fe } from "./EJuYfOV-oE9NyQznNPkK5TPEuo_bn55psxg8qW8cDuE.BJn_CNpe.mjs";
function Ie(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  z,
  Ke = e(() => {
    (l(),
      N(),
      m(),
      n(),
      L(),
      fe(),
      (Le = [`Cz514smY5`, `U_5UOE24g`]),
      (Re = `framer-AtzV9`),
      (ze = { Cz514smY5: `framer-v-g5dcz5`, U_5UOE24g: `framer-v-1yqlurh` }),
      (Be = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
      (Ve = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (He = { Border: `U_5UOE24g`, Fill: `Cz514smY5` }),
      (Ue = d.create(i)),
      (We = ({ heading: e, height: t, id: n, text: r, width: i, ...a }) => ({
        ...a,
        NyOF2qV63:
          r ??
          a.NyOF2qV63 ??
          `I love questioning things and finding new ways to innovate, always driven by curiosity.`,
        variant: He[a.variant] ?? a.variant ?? `Cz514smY5`,
        w0Wkkqoya: e ?? a.w0Wkkqoya ?? `Curiosity`,
      })),
      (Ge = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (z = y(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = ie();
          A();
          let {
              style: m,
              className: g,
              layoutId: _,
              variant: v,
              w0Wkkqoya: y,
              NyOF2qV63: b,
              ...x
            } = We(e),
            {
              baseVariant: C,
              classNames: ee,
              clearLoadingGesture: T,
              gestureHandlers: te,
              gestureVariant: ne,
              isLoading: E,
              setGestureState: re,
              setVariant: ae,
              variants: D,
            } = w({
              cycleOrder: Le,
              defaultVariant: `Cz514smY5`,
              ref: o,
              variant: v,
              variantClassNames: ze,
            }),
            O = Ge(e, D),
            k = h(Re, he, de);
          return a(p, {
            id: _ ?? s,
            children: a(Ue, {
              animate: D,
              initial: !1,
              children: a(Ve, {
                value: Be,
                children: a(d.div, {
                  ...x,
                  ...te,
                  className: h(k, `framer-g5dcz5`, g, ee),
                  "data-framer-name": `Fill`,
                  layoutDependency: O,
                  layoutId: `Cz514smY5`,
                  ref: o,
                  style: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `rgba(0, 0, 0, 0)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    backgroundColor: `var(--token-f1adf1d0-324b-4e36-a3bc-ee5f43cc8b70, rgb(247, 248, 250))`,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    ...m,
                  },
                  variants: {
                    U_5UOE24g: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, rgb(232, 234, 237))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                    },
                  },
                  ...Ie({ U_5UOE24g: { "data-border": !0, "data-framer-name": `Border` } }, C, ne),
                  children: c(d.div, {
                    className: `framer-1raggpj`,
                    "data-framer-name": `Container`,
                    layoutDependency: O,
                    layoutId: `y6XABkU88`,
                    children: [
                      a(d.div, {
                        className: `framer-17svr40`,
                        "data-framer-name": `Heading`,
                        layoutDependency: O,
                        layoutId: `qScfjbud6`,
                        children: a(S, {
                          __fromCanvasComponent: !0,
                          children: a(i, {
                            children: a(d.h3, {
                              className: `framer-styles-preset-wn04p3`,
                              "data-styles-preset": `QesmqopY4`,
                              dir: `auto`,
                              children: `Curiosity`,
                            }),
                          }),
                          className: `framer-jftx83`,
                          "data-framer-name": `Heading`,
                          fonts: [`Inter`],
                          layoutDependency: O,
                          layoutId: `IgaeluBxB`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                      a(S, {
                        __fromCanvasComponent: !0,
                        children: a(i, {
                          children: a(d.p, {
                            className: `framer-styles-preset-1smn5pm`,
                            "data-styles-preset": `aWuz3iYI_`,
                            dir: `auto`,
                            children: `I love questioning things and finding new ways to innovate, always driven by curiosity.`,
                          }),
                        }),
                        className: `framer-1nxshq3`,
                        "data-framer-name": `Text`,
                        fonts: [`Inter`],
                        layoutDependency: O,
                        layoutId: `xcKjKaOqg`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: b,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
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
          `.framer-AtzV9.framer-1uq97ug, .framer-AtzV9 .framer-1uq97ug { display: block; }`,
          `.framer-AtzV9.framer-g5dcz5 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px; position: relative; width: 328px; }`,
          `.framer-AtzV9 .framer-1raggpj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-AtzV9 .framer-17svr40 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-AtzV9 .framer-jftx83 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-AtzV9 .framer-1nxshq3 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...pe,
          ...R,
          `.framer-AtzV9[data-border="true"]::after, .framer-AtzV9 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-AtzV9`
      )),
      (z.displayName = `Value Card`),
      (z.defaultProps = { height: 143.5, width: 328 }),
      _(z, {
        variant: {
          options: [`Cz514smY5`, `U_5UOE24g`],
          optionTitles: [`Fill`, `Border`],
          title: `Variant`,
          type: M.Enum,
        },
        w0Wkkqoya: {
          defaultValue: `Curiosity`,
          displayTextArea: !1,
          title: `Heading`,
          type: M.String,
        },
        onw0WkkqoyaChange: { changes: `w0Wkkqoya`, type: M.ChangeHandler },
        NyOF2qV63: {
          defaultValue: `I love questioning things and finding new ways to innovate, always driven by curiosity.`,
          displayTextArea: !0,
          title: `Text`,
          type: M.String,
        },
        onNyOF2qV63Change: { changes: `NyOF2qV63`, type: M.ChangeHandler },
      }),
      v(
        z,
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
          ...g(me),
          ...g(ue),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function qe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  B,
  lt = e(() => {
    (l(),
      N(),
      m(),
      n(),
      Oe(),
      (Je = I(ke)),
      (Ye = b(ke)),
      (Xe = [`rwlcIwzDK`, `gSgQh3DYT`]),
      (Ze = `framer-Qst4D`),
      (Qe = { gSgQh3DYT: `framer-v-167t7h9`, rwlcIwzDK: `framer-v-1sjibm8` }),
      ($e = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (et = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (tt = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase() === t.toLowerCase()
          : e === t),
      (nt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (rt = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (it = { Desktop: `rwlcIwzDK`, Mobile: `gSgQh3DYT` }),
      (at = d.create(i)),
      (ot = { Image: `gA3EhiVzV`, Video: `ZH3MCZaaW` }),
      (st = ({
        appear: e,
        assetType: t,
        height: n,
        id: r,
        image: i,
        radius: a,
        video: o,
        width: s,
        ...c
      }) => ({
        ...c,
        FMKdf5_kR: ot[t] ?? t ?? c.FMKdf5_kR ?? `gA3EhiVzV`,
        HIBDyQS9z: i ?? c.HIBDyQS9z,
        Ocs0vz418: e ?? c.Ocs0vz418,
        RF9K196Dt: a ?? c.RF9K196Dt ?? `48px`,
        variant: it[c.variant] ?? c.variant ?? `rwlcIwzDK`,
        yim5AIkbF:
          o ?? c.yim5AIkbF ?? `https://framerusercontent.com/assets/JHNKZRR8YjoYDrNeb9vUDuRFP0.mp4`,
      })),
      (ct = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (B = y(
        o(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = u(),
            { activeLocale: s, setLocale: l } = ie(),
            f = A(),
            {
              style: m,
              className: g,
              layoutId: _,
              variant: v,
              FMKdf5_kR: y,
              HIBDyQS9z: b,
              yim5AIkbF: x,
              Ocs0vz418: S,
              RF9K196Dt: T,
              ...te
            } = st(e),
            {
              baseVariant: E,
              classNames: re,
              clearLoadingGesture: ae,
              gestureHandlers: O,
              gestureVariant: k,
              isLoading: j,
              setGestureState: M,
              setVariant: oe,
              variants: N,
            } = w({
              cycleOrder: Xe,
              defaultVariant: `rwlcIwzDK`,
              ref: i,
              variant: v,
              variantClassNames: Qe,
            }),
            P = ct(e, N),
            { activeVariantCallback: F, delay: ce } = ne(E);
          le(E, {
            default: F(async (...e) => {
              if (S && (await S(...e)) === !1) return !1;
            }),
          });
          let I = h(Ze),
            L = tt(y, `ZH3MCZaaW`),
            R = tt(y, `gA3EhiVzV`);
          return a(p, {
            id: _ ?? o,
            children: a(at, {
              animate: N,
              initial: !1,
              children: a(rt, {
                value: et,
                children: a(d.div, {
                  ...te,
                  ...O,
                  className: h(I, `framer-1sjibm8`, g, re),
                  "data-framer-name": `Desktop`,
                  "data-highlight": !0,
                  layoutDependency: P,
                  layoutId: `rwlcIwzDK`,
                  ref: i,
                  style: {
                    borderBottomLeftRadius: $e(T, 3),
                    borderBottomRightRadius: $e(T, 2),
                    borderTopLeftRadius: $e(T, 0),
                    borderTopRightRadius: $e(T, 1),
                    ...m,
                  },
                  variants: {
                    gSgQh3DYT: {
                      borderBottomLeftRadius: 28,
                      borderBottomRightRadius: 28,
                      borderTopLeftRadius: 28,
                      borderTopRightRadius: 28,
                    },
                  },
                  ...qe({ gSgQh3DYT: { "data-framer-name": `Mobile` } }, E, k),
                  children: c(d.div, {
                    className: `framer-1ewz4ar`,
                    "data-framer-name": `Container`,
                    layoutDependency: P,
                    layoutId: `Vn6jlWF1J`,
                    style: {
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                    children: [
                      L !== !1 &&
                        a(D, {
                          children: a(C, {
                            className: `framer-6yuxy4-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: P,
                            layoutId: `GumZ6uJ0a-container`,
                            nodeId: `GumZ6uJ0a`,
                            rendersWithMotion: !0,
                            scopeId: `Idw0PrwRG`,
                            children: a(ke, {
                              backgroundColor: `var(--token-e0742186-4bc9-4362-9c1b-2066a4df8250, rgba(255, 255, 255, 0))`,
                              borderRadius: 0,
                              bottomLeftRadius: 0,
                              bottomRightRadius: 0,
                              controls: !1,
                              height: `100%`,
                              id: `GumZ6uJ0a`,
                              isMixedBorderRadius: !1,
                              layoutId: `GumZ6uJ0a`,
                              loop: !0,
                              muted: !0,
                              objectFit: `cover`,
                              playing: !0,
                              posterEnabled: !0,
                              srcFile: x,
                              srcType: `Upload`,
                              srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                              startTime: 0,
                              style: { height: `100%`, width: `100%` },
                              topLeftRadius: 0,
                              topRightRadius: 0,
                              volume: 25,
                              width: `100%`,
                            }),
                          }),
                        }),
                      R !== !1 &&
                        a(se, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: ee(
                              (f?.y || 0) +
                                0 +
                                (((f?.height || 480) -
                                  0 -
                                  (Math.max(0, ((f?.height || 480) - 0 - 0) / 1) * 1 + 0)) /
                                  2 +
                                  0 +
                                  0) +
                                0
                            ),
                            sizes: f?.width || `100vw`,
                            ...nt(b),
                            positionX: `center`,
                            positionY: `top`,
                          },
                          className: `framer-zrg1rz`,
                          "data-framer-name": `Image`,
                          layoutDependency: P,
                          layoutId: `edwFYN1JI`,
                          style: {
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                          },
                          variants: {
                            gSgQh3DYT: {
                              borderBottomLeftRadius: 20,
                              borderBottomRightRadius: 20,
                              borderTopLeftRadius: 20,
                              borderTopRightRadius: 20,
                            },
                          },
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
          `.framer-Qst4D.framer-1rhwoub, .framer-Qst4D .framer-1rhwoub { display: block; }`,
          `.framer-Qst4D.framer-1sjibm8 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 480px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 658px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Qst4D .framer-1ewz4ar { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Qst4D .framer-6yuxy4-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-Qst4D .framer-zrg1rz { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
          `.framer-Qst4D.framer-v-167t7h9.framer-1sjibm8 { width: 327px; }`,
          `.framer-Qst4D.framer-v-167t7h9 .framer-zrg1rz { will-change: var(--framer-will-change-override, transform); }`,
        ],
        `framer-Qst4D`
      )),
      (B.displayName = `Image Gallery card`),
      (B.defaultProps = { height: 480, width: 658 }),
      _(B, {
        variant: {
          options: [`rwlcIwzDK`, `gSgQh3DYT`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: M.Enum,
        },
        FMKdf5_kR: {
          defaultValue: `gA3EhiVzV`,
          options: [`gA3EhiVzV`, `ZH3MCZaaW`],
          optionTitles: [`Image`, `Video`],
          title: `Asset Type`,
          type: M.Enum,
        },
        onFMKdf5_kRChange: { changes: `FMKdf5_kR`, type: M.ChangeHandler },
        HIBDyQS9z: { title: `Image`, type: M.ResponsiveImage },
        yim5AIkbF: Ye?.srcFile && {
          ...Ye.srcFile,
          __defaultAssetReference: `data:framer/asset-reference,JHNKZRR8YjoYDrNeb9vUDuRFP0.mp4?originalFilename=Case+study+02+-+video.mp4`,
          description: void 0,
          hidden: void 0,
          title: `Video`,
        },
        onyim5AIkbFChange: { changes: `yim5AIkbF`, type: M.ChangeHandler },
        Ocs0vz418: { title: `Appear`, type: M.EventHandler },
        RF9K196Dt: { defaultValue: `48px`, title: `Radius`, type: M.BorderRadius },
      }),
      v(B, [{ explicitInter: !0, fonts: [] }, ...Je], { supportsExplicitInterCodegen: !0 }));
  });
function ut(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  V,
  wt = e(() => {
    (l(),
      N(),
      m(),
      n(),
      (dt = O(k(d.div))),
      (ft = { NTOZ4ArUs: { hover: !0 } }),
      (pt = [`YwXIpD7H8`, `NTOZ4ArUs`]),
      (mt = `framer-8gQMj`),
      (ht = { NTOZ4ArUs: `framer-v-w92hbc`, YwXIpD7H8: `framer-v-a6sule` }),
      (gt = { bounce: 0.3, delay: 0, duration: 0.5, type: `spring` }),
      (_t = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (vt = {
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
      (yt = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (bt = { Active: `YwXIpD7H8`, Inactive: `NTOZ4ArUs` }),
      (xt = d.create(i)),
      (St = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        IoySuG0Je: e ?? i.IoySuG0Je,
        variant: bt[i.variant] ?? i.variant ?? `YwXIpD7H8`,
      })),
      (Ct = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (V = y(
        o(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = u(),
            { activeLocale: s, setLocale: c } = ie();
          A();
          let { style: l, className: f, layoutId: m, variant: g, IoySuG0Je: _, ...v } = St(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: ee,
              setGestureState: T,
              setVariant: te,
              variants: E,
            } = w({
              cycleOrder: pt,
              defaultVariant: `YwXIpD7H8`,
              enabledGestures: ft,
              ref: i,
              variant: g,
              variantClassNames: ht,
            }),
            re = Ct(e, E),
            { activeVariantCallback: ae, delay: D } = ne(y),
            O = ae(async (...e) => {
              if ((T({ isPressed: !1 }), _ && (await _(...e)) === !1)) return !1;
            }),
            k = h(mt);
          return a(p, {
            id: m ?? o,
            children: a(xt, {
              animate: E,
              initial: !1,
              children: a(yt, {
                value: gt,
                children: a(d.div, {
                  ...v,
                  ...S,
                  className: h(k, `framer-a6sule`, f, b),
                  "data-framer-name": `Active`,
                  "data-highlight": !0,
                  layoutDependency: re,
                  layoutId: `YwXIpD7H8`,
                  onTap: O,
                  ref: i,
                  style: { ...l },
                  ...ut(
                    {
                      "NTOZ4ArUs-hover": { "data-framer-name": void 0 },
                      NTOZ4ArUs: { "data-framer-name": `Inactive` },
                    },
                    y,
                    C
                  ),
                  children: a(dt, {
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    animate: _t,
                    className: `framer-1lbx4qs`,
                    "data-framer-appear-id": `1lbx4qs`,
                    initial: vt,
                    layoutDependency: re,
                    layoutId: `FOBFnDObx`,
                    optimized: !0,
                    style: {
                      backgroundColor: `var(--token-f7afab8f-991d-426d-a212-51d8456d5a36, rgb(250, 250, 250))`,
                      borderBottomLeftRadius: 5,
                      borderBottomRightRadius: 5,
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                    },
                    variants: {
                      "NTOZ4ArUs-hover": {
                        backgroundColor: `var(--token-f7afab8f-991d-426d-a212-51d8456d5a36, rgb(250, 250, 250))`,
                      },
                      NTOZ4ArUs: {
                        backgroundColor: `var(--token-57ba8170-867f-4c2d-9ec7-5e518ba3de02, rgba(218, 218, 230, 0.5))`,
                      },
                    },
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-8gQMj.framer-1wprw0j, .framer-8gQMj .framer-1wprw0j { display: block; }`,
          `.framer-8gQMj.framer-a6sule { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-8gQMj .framer-1lbx4qs { flex: none; height: 13px; overflow: visible; position: relative; width: 21px; }`,
          `.framer-8gQMj.framer-v-w92hbc .framer-1lbx4qs { height: 10px; width: 10px; }`,
          `.framer-8gQMj.framer-v-w92hbc.hover .framer-1lbx4qs { height: 13px; width: 21px; }`,
        ],
        `framer-8gQMj`
      )),
      (V.displayName = `Icon Button`),
      (V.defaultProps = { height: 13, width: 21 }),
      _(V, {
        variant: {
          options: [`YwXIpD7H8`, `NTOZ4ArUs`],
          optionTitles: [`Active`, `Inactive`],
          title: `Variant`,
          type: M.Enum,
        },
        IoySuG0Je: { title: `Click`, type: M.EventHandler },
      }),
      v(V, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function H(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  U,
  Nt,
  Pt,
  W,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  G,
  Ut = e(() => {
    (l(),
      N(),
      m(),
      n(),
      ge(),
      lt(),
      wt(),
      (Tt = I(B)),
      (Et = O(k(C))),
      (Dt = I(V)),
      (Ot = O(k(S))),
      (kt = [`xwHSOT9NL`, `GLQAopYBG`, `iLEJl4Xid`, `xDZKf7n9r`]),
      (At = `framer-uQfX8`),
      (jt = {
        GLQAopYBG: `framer-v-g6ga6t`,
        iLEJl4Xid: `framer-v-1c1sp4c`,
        xDZKf7n9r: `framer-v-1gl0mqy`,
        xwHSOT9NL: `framer-v-uepjpq`,
      }),
      (Mt = { bounce: 0.3, delay: 0, duration: 0.5, type: `spring` }),
      (U = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0, duration: 0.8, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Nt = {
        opacity: 0.8,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.98,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Pt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (W = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ft = (e, t) => `translateX(-50%) ${t}`),
      (It = {
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
      (Lt = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (Rt = { 1: `xwHSOT9NL`, 2: `GLQAopYBG`, 3: `iLEJl4Xid`, 4: `xDZKf7n9r` }),
      (zt = d.create(i)),
      (Bt = { Center: `center`, End: `flex-end`, Start: `flex-start` }),
      (Vt = ({
        caption1: e,
        caption2: t,
        caption3: n,
        caption4: r,
        captionAlignment: i,
        height: a,
        id: o,
        image1: s,
        image2: c,
        image3: l,
        image4: u,
        width: d,
        ...f
      }) => ({
        ...f,
        ik7sKAM10: u ??
          f.ik7sKAM10 ?? {
            pixelHeight: 2400,
            pixelWidth: 1371,
            src: `https://framerusercontent.com/images/EDYiOsuihIt0wU0r3L3ODclir0.jpg?width=1371&height=2400`,
            srcSet: `https://framerusercontent.com/images/EDYiOsuihIt0wU0r3L3ODclir0.jpg?scale-down-to=1024&width=1371&height=2400 584w,https://framerusercontent.com/images/EDYiOsuihIt0wU0r3L3ODclir0.jpg?scale-down-to=2048&width=1371&height=2400 1169w,https://framerusercontent.com/images/EDYiOsuihIt0wU0r3L3ODclir0.jpg?width=1371&height=2400 1371w`,
          },
        iqUXDXQLs: t ?? f.iqUXDXQLs ?? `Tokyo streets`,
        JFPwUoRuW: c ??
          f.JFPwUoRuW ?? {
            pixelHeight: 2400,
            pixelWidth: 1600,
            src: `https://framerusercontent.com/images/z8VU7ggLjCkMCJKg3hOJzM9omM.png?width=1600&height=2400`,
            srcSet: `https://framerusercontent.com/images/z8VU7ggLjCkMCJKg3hOJzM9omM.png?scale-down-to=1024&width=1600&height=2400 682w,https://framerusercontent.com/images/z8VU7ggLjCkMCJKg3hOJzM9omM.png?scale-down-to=2048&width=1600&height=2400 1365w,https://framerusercontent.com/images/z8VU7ggLjCkMCJKg3hOJzM9omM.png?width=1600&height=2400 1600w`,
          },
        KcCs3a9nK: r ?? f.KcCs3a9nK ?? `Art workshop`,
        kf2MWwF9V: n ?? f.kf2MWwF9V ?? `My dogs`,
        q6jw0Fxur: l ??
          f.q6jw0Fxur ?? {
            pixelHeight: 2400,
            pixelWidth: 1808,
            src: `https://framerusercontent.com/images/SwmHaZVFNqNY7xMWATNx0WU8P0.png?width=1808&height=2400`,
            srcSet: `https://framerusercontent.com/images/SwmHaZVFNqNY7xMWATNx0WU8P0.png?scale-down-to=1024&width=1808&height=2400 771w,https://framerusercontent.com/images/SwmHaZVFNqNY7xMWATNx0WU8P0.png?scale-down-to=2048&width=1808&height=2400 1542w,https://framerusercontent.com/images/SwmHaZVFNqNY7xMWATNx0WU8P0.png?width=1808&height=2400 1808w`,
          },
        rgbDAzRQ2: Bt[i] ?? i ?? f.rgbDAzRQ2 ?? `center`,
        variant: Rt[f.variant] ?? f.variant ?? `xwHSOT9NL`,
        xFkRs8mMP: e ?? f.xFkRs8mMP ?? `Thats's me`,
        yK4RUXrFB: s ??
          f.yK4RUXrFB ?? {
            alt: ``,
            pixelHeight: 800,
            pixelWidth: 1200,
            src: `https://framerusercontent.com/images/mylFkysVSbWg5DAfJYnSMRd0FKk.jpg?width=1200&height=800`,
            srcSet: `https://framerusercontent.com/images/mylFkysVSbWg5DAfJYnSMRd0FKk.jpg?scale-down-to=512&width=1200&height=800 512w,https://framerusercontent.com/images/mylFkysVSbWg5DAfJYnSMRd0FKk.jpg?scale-down-to=1024&width=1200&height=800 1024w,https://framerusercontent.com/images/mylFkysVSbWg5DAfJYnSMRd0FKk.jpg?width=1200&height=800 1200w`,
          },
      })),
      (Ht = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = y(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = ie(),
            m = A(),
            {
              style: g,
              className: _,
              layoutId: v,
              variant: y,
              yK4RUXrFB: b,
              JFPwUoRuW: x,
              q6jw0Fxur: S,
              ik7sKAM10: ee,
              xFkRs8mMP: T,
              iqUXDXQLs: te,
              kf2MWwF9V: E,
              KcCs3a9nK: re,
              rgbDAzRQ2: ae,
              ...O
            } = Vt(e),
            {
              baseVariant: k,
              classNames: j,
              clearLoadingGesture: M,
              gestureHandlers: oe,
              gestureVariant: N,
              isLoading: se,
              setGestureState: P,
              setVariant: F,
              variants: ce,
            } = w({
              cycleOrder: kt,
              defaultVariant: `xwHSOT9NL`,
              ref: o,
              variant: y,
              variantClassNames: jt,
            }),
            I = Ht(e, ce),
            { activeVariantCallback: L, delay: R } = ne(k),
            ue = L(async (...e) => {
              await R(() => F(`GLQAopYBG`, !0), 6e3);
            }),
            de = L(async (...e) => {
              await R(() => F(`iLEJl4Xid`, !0), 6e3);
            }),
            fe = L(async (...e) => {
              await R(() => F(`xDZKf7n9r`, !0), 6e3);
            }),
            pe = L(async (...e) => {
              await R(() => F(`xwHSOT9NL`, !0), 6e3);
            }),
            me = L(async (...e) => {
              F(`xwHSOT9NL`);
            }),
            he = L(async (...e) => {
              F(`GLQAopYBG`);
            }),
            ge = L(async (...e) => {
              F(`iLEJl4Xid`);
            }),
            _e = L(async (...e) => {
              F(`xDZKf7n9r`);
            });
          le(k, { default: ue, GLQAopYBG: de, iLEJl4Xid: fe, xDZKf7n9r: pe });
          let ve = h(At, ye),
            be = () => ![`GLQAopYBG`, `iLEJl4Xid`, `xDZKf7n9r`].includes(k),
            xe = () => k === `GLQAopYBG`,
            Se = () => k === `iLEJl4Xid`,
            Ce = () => k === `xDZKf7n9r`;
          return a(p, {
            id: v ?? s,
            children: a(zt, {
              animate: ce,
              initial: !1,
              children: a(Lt, {
                value: Mt,
                children: c(d.div, {
                  ...O,
                  ...oe,
                  className: h(ve, `framer-uepjpq`, _, j),
                  "data-framer-name": `1`,
                  "data-highlight": !0,
                  layoutDependency: I,
                  layoutId: `xwHSOT9NL`,
                  ref: o,
                  style: {
                    "--1amasfg": ae,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    ...g,
                  },
                  variants: {
                    GLQAopYBG: {
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    },
                    iLEJl4Xid: {
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    },
                    xDZKf7n9r: {
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    },
                  },
                  ...H(
                    {
                      GLQAopYBG: { "data-framer-name": `2` },
                      iLEJl4Xid: { "data-framer-name": `3` },
                      xDZKf7n9r: { "data-framer-name": `4` },
                    },
                    k,
                    N
                  ),
                  children: [
                    c(d.div, {
                      className: `framer-3todho`,
                      "data-framer-name": `Container`,
                      layoutDependency: I,
                      layoutId: `rvNWqtMaV`,
                      children: [
                        be() &&
                          a(D, {
                            height: Math.max(0, ((m?.height || 464) - 0 - 29.6) / 1) * 1 - 0,
                            width: m?.width || `100vw`,
                            y: (m?.y || 0) + 0 + 0 + 0,
                            children: a(Et, {
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              animate: U,
                              className: `framer-fpxjkc-container`,
                              "data-framer-appear-id": `fpxjkc`,
                              "data-framer-name": `1`,
                              initial: Nt,
                              layoutDependency: I,
                              layoutId: `MPfGCsL4C-container`,
                              name: `1`,
                              nodeId: `MPfGCsL4C`,
                              optimized: !0,
                              rendersWithMotion: !0,
                              scopeId: `rZIfVfqv7`,
                              children: a(B, {
                                FMKdf5_kR: `gA3EhiVzV`,
                                height: `100%`,
                                HIBDyQS9z: Pt(b),
                                id: `MPfGCsL4C`,
                                layoutId: `MPfGCsL4C`,
                                name: `1`,
                                RF9K196Dt: `20px`,
                                style: { height: `100%`, width: `100%` },
                                variant: W(`rwlcIwzDK`),
                                width: `100%`,
                                yim5AIkbF: `https://framerusercontent.com/assets/keTCYDcjCdg5QUThMd5Lx9Yeg.mp4`,
                              }),
                            }),
                          }),
                        xe() &&
                          a(D, {
                            ...H(
                              {
                                GLQAopYBG: {
                                  height: Math.max(0, ((m?.height || 464) - 0 - 29.6) / 1) * 1 - 0,
                                  width: m?.width || `100vw`,
                                  y: (m?.y || 0) + 0 + 0 + 0,
                                },
                              },
                              k,
                              N
                            ),
                            children: a(Et, {
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              animate: U,
                              className: `framer-1tq6wvw-container`,
                              "data-framer-appear-id": `1tq6wvw`,
                              "data-framer-name": `2`,
                              initial: Nt,
                              layoutDependency: I,
                              layoutId: `g9OS8QJx2-container`,
                              name: `2`,
                              nodeId: `g9OS8QJx2`,
                              optimized: !0,
                              rendersWithMotion: !0,
                              scopeId: `rZIfVfqv7`,
                              children: a(B, {
                                FMKdf5_kR: `gA3EhiVzV`,
                                height: `100%`,
                                HIBDyQS9z: Pt(x),
                                id: `g9OS8QJx2`,
                                layoutId: `g9OS8QJx2`,
                                name: `2`,
                                RF9K196Dt: `20px`,
                                style: { height: `100%`, width: `100%` },
                                variant: W(`rwlcIwzDK`),
                                width: `100%`,
                                yim5AIkbF: `https://framerusercontent.com/assets/keTCYDcjCdg5QUThMd5Lx9Yeg.mp4`,
                              }),
                            }),
                          }),
                        Se() &&
                          a(D, {
                            ...H(
                              {
                                iLEJl4Xid: {
                                  height: Math.max(0, ((m?.height || 464) - 0 - 29.6) / 1) * 1 - 0,
                                  width: m?.width || `100vw`,
                                  y: (m?.y || 0) + 0 + 0 + 0,
                                },
                              },
                              k,
                              N
                            ),
                            children: a(Et, {
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              animate: U,
                              className: `framer-3wba7x-container`,
                              "data-framer-appear-id": `3wba7x`,
                              "data-framer-name": `3`,
                              initial: Nt,
                              layoutDependency: I,
                              layoutId: `qHAiQ1xGe-container`,
                              name: `3`,
                              nodeId: `qHAiQ1xGe`,
                              optimized: !0,
                              rendersWithMotion: !0,
                              scopeId: `rZIfVfqv7`,
                              children: a(B, {
                                FMKdf5_kR: `gA3EhiVzV`,
                                height: `100%`,
                                HIBDyQS9z: Pt(S),
                                id: `qHAiQ1xGe`,
                                layoutId: `qHAiQ1xGe`,
                                name: `3`,
                                RF9K196Dt: `20px`,
                                style: { height: `100%`, width: `100%` },
                                variant: W(`rwlcIwzDK`),
                                width: `100%`,
                                yim5AIkbF: `https://framerusercontent.com/assets/keTCYDcjCdg5QUThMd5Lx9Yeg.mp4`,
                              }),
                            }),
                          }),
                        Ce() &&
                          a(D, {
                            ...H(
                              {
                                xDZKf7n9r: {
                                  height: Math.max(0, ((m?.height || 464) - 0 - 29.6) / 1) * 1 - 0,
                                  width: m?.width || `100vw`,
                                  y: (m?.y || 0) + 0 + 0 + 0,
                                },
                              },
                              k,
                              N
                            ),
                            children: a(Et, {
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              animate: U,
                              className: `framer-55zyfk-container`,
                              "data-framer-appear-id": `55zyfk`,
                              "data-framer-name": `4`,
                              initial: Nt,
                              layoutDependency: I,
                              layoutId: `zW12U3rM2-container`,
                              name: `4`,
                              nodeId: `zW12U3rM2`,
                              optimized: !0,
                              rendersWithMotion: !0,
                              scopeId: `rZIfVfqv7`,
                              children: a(B, {
                                FMKdf5_kR: `gA3EhiVzV`,
                                height: `100%`,
                                HIBDyQS9z: Pt(ee),
                                id: `zW12U3rM2`,
                                layoutId: `zW12U3rM2`,
                                name: `4`,
                                RF9K196Dt: `20px`,
                                style: { height: `100%`, width: `100%` },
                                variant: W(`rwlcIwzDK`),
                                width: `100%`,
                                yim5AIkbF: `https://framerusercontent.com/assets/keTCYDcjCdg5QUThMd5Lx9Yeg.mp4`,
                              }),
                            }),
                          }),
                        c(d.div, {
                          className: `framer-1eiqcqd`,
                          "data-framer-name": `Navigation`,
                          layoutDependency: I,
                          layoutId: `oDmvS1DNf`,
                          style: {
                            backdropFilter: `blur(20px)`,
                            backgroundColor: `var(--token-91bb6ca9-22d2-4ec9-8b33-ef70d28dd5e7, rgba(255, 255, 255, 0.2))`,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            WebkitBackdropFilter: `blur(20px)`,
                          },
                          transformTemplate: Ft,
                          children: [
                            a(D, {
                              height: 13,
                              y:
                                (m?.y || 0) +
                                0 +
                                0 +
                                Math.max(0, ((m?.height || 464) - 0 - 29.6) / 1) * 1 -
                                47 +
                                7,
                              children: a(C, {
                                className: `framer-1owngg7-container`,
                                layoutDependency: I,
                                layoutId: `HZ2vmoQNs-container`,
                                nodeId: `HZ2vmoQNs`,
                                rendersWithMotion: !0,
                                scopeId: `rZIfVfqv7`,
                                children: a(V, {
                                  height: `100%`,
                                  id: `HZ2vmoQNs`,
                                  IoySuG0Je: me,
                                  layoutId: `HZ2vmoQNs`,
                                  variant: W(`YwXIpD7H8`),
                                  width: `100%`,
                                  ...H(
                                    {
                                      GLQAopYBG: { variant: W(`NTOZ4ArUs`) },
                                      iLEJl4Xid: { variant: W(`NTOZ4ArUs`) },
                                      xDZKf7n9r: { variant: W(`NTOZ4ArUs`) },
                                    },
                                    k,
                                    N
                                  ),
                                }),
                              }),
                            }),
                            a(D, {
                              height: 13,
                              y:
                                (m?.y || 0) +
                                0 +
                                0 +
                                Math.max(0, ((m?.height || 464) - 0 - 29.6) / 1) * 1 -
                                47 +
                                7,
                              children: a(C, {
                                className: `framer-11it44x-container`,
                                layoutDependency: I,
                                layoutId: `l3qr1MBZz-container`,
                                nodeId: `l3qr1MBZz`,
                                rendersWithMotion: !0,
                                scopeId: `rZIfVfqv7`,
                                children: a(V, {
                                  height: `100%`,
                                  id: `l3qr1MBZz`,
                                  IoySuG0Je: he,
                                  layoutId: `l3qr1MBZz`,
                                  variant: W(`NTOZ4ArUs`),
                                  width: `100%`,
                                  ...H({ GLQAopYBG: { variant: W(`YwXIpD7H8`) } }, k, N),
                                }),
                              }),
                            }),
                            a(D, {
                              height: 13,
                              y:
                                (m?.y || 0) +
                                0 +
                                0 +
                                Math.max(0, ((m?.height || 464) - 0 - 29.6) / 1) * 1 -
                                47 +
                                7,
                              children: a(C, {
                                className: `framer-1iwrtbw-container`,
                                layoutDependency: I,
                                layoutId: `Ksg9tnInX-container`,
                                nodeId: `Ksg9tnInX`,
                                rendersWithMotion: !0,
                                scopeId: `rZIfVfqv7`,
                                children: a(V, {
                                  height: `100%`,
                                  id: `Ksg9tnInX`,
                                  IoySuG0Je: ge,
                                  layoutId: `Ksg9tnInX`,
                                  variant: W(`NTOZ4ArUs`),
                                  width: `100%`,
                                  ...H({ iLEJl4Xid: { variant: W(`YwXIpD7H8`) } }, k, N),
                                }),
                              }),
                            }),
                            a(D, {
                              height: 13,
                              y:
                                (m?.y || 0) +
                                0 +
                                0 +
                                Math.max(0, ((m?.height || 464) - 0 - 29.6) / 1) * 1 -
                                47 +
                                7,
                              children: a(C, {
                                className: `framer-mv1g2n-container`,
                                layoutDependency: I,
                                layoutId: `IsVyJ57Nr-container`,
                                nodeId: `IsVyJ57Nr`,
                                rendersWithMotion: !0,
                                scopeId: `rZIfVfqv7`,
                                children: a(V, {
                                  height: `100%`,
                                  id: `IsVyJ57Nr`,
                                  IoySuG0Je: _e,
                                  layoutId: `IsVyJ57Nr`,
                                  variant: W(`NTOZ4ArUs`),
                                  width: `100%`,
                                  ...H({ xDZKf7n9r: { variant: W(`YwXIpD7H8`) } }, k, N),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    be() &&
                      a(Ot, {
                        __fromCanvasComponent: !0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        animate: U,
                        children: a(i, {
                          children: a(d.p, {
                            className: `framer-styles-preset-1wjc5v6`,
                            "data-styles-preset": `UHueIzRog`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-51d11642-d88a-481a-9928-4807c91d56bc, rgb(113, 120, 128)))`,
                            },
                            children: `Thats's me`,
                          }),
                        }),
                        className: `framer-1npjnx6`,
                        "data-framer-appear-id": `1npjnx6`,
                        "data-framer-name": `1`,
                        fonts: [`Inter`],
                        initial: It,
                        layoutDependency: I,
                        layoutId: `vVHAjGywt`,
                        optimized: !0,
                        style: {
                          "--extracted-r6o4lv": `var(--token-51d11642-d88a-481a-9928-4807c91d56bc, rgb(113, 120, 128))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: T,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    xe() &&
                      a(Ot, {
                        __fromCanvasComponent: !0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        animate: U,
                        children: a(i, {
                          children: a(d.p, {
                            className: `framer-styles-preset-1wjc5v6`,
                            "data-styles-preset": `UHueIzRog`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-51d11642-d88a-481a-9928-4807c91d56bc, rgb(113, 120, 128)))`,
                            },
                            children: `Thats's me`,
                          }),
                        }),
                        className: `framer-6kly33`,
                        "data-framer-appear-id": `6kly33`,
                        "data-framer-name": `2`,
                        fonts: [`Inter`],
                        initial: It,
                        layoutDependency: I,
                        layoutId: `D9nXlhQ87`,
                        optimized: !0,
                        style: {
                          "--extracted-r6o4lv": `var(--token-51d11642-d88a-481a-9928-4807c91d56bc, rgb(113, 120, 128))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: te,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    Se() &&
                      a(Ot, {
                        __fromCanvasComponent: !0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        animate: U,
                        children: a(i, {
                          children: a(d.p, {
                            className: `framer-styles-preset-1wjc5v6`,
                            "data-styles-preset": `UHueIzRog`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-51d11642-d88a-481a-9928-4807c91d56bc, rgb(113, 120, 128)))`,
                            },
                            children: `Thats's me`,
                          }),
                        }),
                        className: `framer-1enm57f`,
                        "data-framer-appear-id": `1enm57f`,
                        "data-framer-name": `3`,
                        fonts: [`Inter`],
                        initial: It,
                        layoutDependency: I,
                        layoutId: `K1WaS4I2C`,
                        optimized: !0,
                        style: {
                          "--extracted-r6o4lv": `var(--token-51d11642-d88a-481a-9928-4807c91d56bc, rgb(113, 120, 128))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: E,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    Ce() &&
                      a(Ot, {
                        __fromCanvasComponent: !0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        animate: U,
                        children: a(i, {
                          children: a(d.p, {
                            className: `framer-styles-preset-1wjc5v6`,
                            "data-styles-preset": `UHueIzRog`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-51d11642-d88a-481a-9928-4807c91d56bc, rgb(113, 120, 128)))`,
                            },
                            children: `Thats's me`,
                          }),
                        }),
                        className: `framer-1qfoj68`,
                        "data-framer-appear-id": `1qfoj68`,
                        "data-framer-name": `4`,
                        fonts: [`Inter`],
                        initial: It,
                        layoutDependency: I,
                        layoutId: `nMYJ1gFHp`,
                        optimized: !0,
                        style: {
                          "--extracted-r6o4lv": `var(--token-51d11642-d88a-481a-9928-4807c91d56bc, rgb(113, 120, 128))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: re,
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
          `.framer-uQfX8.framer-1asg0ba, .framer-uQfX8 .framer-1asg0ba { display: block; }`,
          `.framer-uQfX8.framer-uepjpq { align-content: var(--1amasfg); align-items: var(--1amasfg); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 464px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 397px; }`,
          `.framer-uQfX8 .framer-3todho { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-uQfX8 .framer-fpxjkc-container, .framer-uQfX8 .framer-1tq6wvw-container, .framer-uQfX8 .framer-3wba7x-container, .framer-uQfX8 .framer-55zyfk-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
          `.framer-uQfX8 .framer-1eiqcqd { align-content: center; align-items: center; bottom: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 7px; position: absolute; width: min-content; z-index: 4; }`,
          `.framer-uQfX8 .framer-1owngg7-container, .framer-uQfX8 .framer-11it44x-container, .framer-uQfX8 .framer-1iwrtbw-container, .framer-uQfX8 .framer-mv1g2n-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
          `.framer-uQfX8 .framer-1npjnx6, .framer-uQfX8 .framer-6kly33, .framer-uQfX8 .framer-1enm57f, .framer-uQfX8 .framer-1qfoj68 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ..._e,
        ],
        `framer-uQfX8`
      )),
      (G.displayName = `Image Gallery`),
      (G.defaultProps = { height: 464, width: 397 }),
      _(G, {
        variant: {
          options: [`xwHSOT9NL`, `GLQAopYBG`, `iLEJl4Xid`, `xDZKf7n9r`],
          optionTitles: [`1`, `2`, `3`, `4`],
          title: `Variant`,
          type: M.Enum,
        },
        yK4RUXrFB: {
          __defaultAssetReference: `data:framer/asset-reference,mylFkysVSbWg5DAfJYnSMRd0FKk.jpg?originalFilename=Qmb2QVwEKoAJmY2ef18kHTGeVz8YCUXAAkzzxm2cRL5toS%3Fauto%3Dformat%26w%3D1200.jpg&preferredSize=auto&width=1200&height=800`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,mylFkysVSbWg5DAfJYnSMRd0FKk.jpg?originalFilename=Qmb2QVwEKoAJmY2ef18kHTGeVz8YCUXAAkzzxm2cRL5toS%3Fauto%3Dformat%26w%3D1200.jpg&preferredSize=auto&width=1200&height=800`,
          },
          title: `Image 1`,
          type: M.ResponsiveImage,
        },
        JFPwUoRuW: {
          __defaultAssetReference: `data:framer/asset-reference,z8VU7ggLjCkMCJKg3hOJzM9omM.png?originalFilename=QmQq7Ppq2nmB7EKQTRSDQb2RdhmCw1DvkXsUBnPuHcj6my%3Fauto%3Dformat%26h%3D2400.png&width=1600&height=2400`,
          title: `Image 2`,
          type: M.ResponsiveImage,
        },
        q6jw0Fxur: {
          __defaultAssetReference: `data:framer/asset-reference,SwmHaZVFNqNY7xMWATNx0WU8P0.png?originalFilename=QmQp246jngz8hpWVrivxSmDRvmmeitRFXbP138Tw2ksjvQ%3Fauto%3Dformat%26h%3D2400.png&width=1808&height=2400`,
          title: `Image 3`,
          type: M.ResponsiveImage,
        },
        ik7sKAM10: {
          __defaultAssetReference: `data:framer/asset-reference,EDYiOsuihIt0wU0r3L3ODclir0.jpg?originalFilename=QmSYs7q9aBUYnT7NnDHvTR8MDsArNPc1bu4K6qXvqKhjRK%3Fauto%3Dformat%26h%3D2400.jpg&width=1371&height=2400`,
          title: `Image 4`,
          type: M.ResponsiveImage,
        },
        xFkRs8mMP: {
          defaultValue: `Thats's me`,
          displayTextArea: !1,
          title: `Caption 1`,
          type: M.String,
        },
        onxFkRs8mMPChange: { changes: `xFkRs8mMP`, type: M.ChangeHandler },
        iqUXDXQLs: {
          defaultValue: `Tokyo streets`,
          displayTextArea: !1,
          title: `Caption 2`,
          type: M.String,
        },
        oniqUXDXQLsChange: { changes: `iqUXDXQLs`, type: M.ChangeHandler },
        kf2MWwF9V: {
          defaultValue: `My dogs`,
          displayTextArea: !1,
          title: `Caption 3`,
          type: M.String,
        },
        onkf2MWwF9VChange: { changes: `kf2MWwF9V`, type: M.ChangeHandler },
        KcCs3a9nK: {
          defaultValue: `Art workshop`,
          displayTextArea: !1,
          title: `Caption 4`,
          type: M.String,
        },
        onKcCs3a9nKChange: { changes: `KcCs3a9nK`, type: M.ChangeHandler },
        rgbDAzRQ2: {
          defaultValue: `center`,
          options: [`flex-start`, `center`, `flex-end`],
          optionTitles: [`Start`, `Center`, `End`],
          title: `Caption Alignment`,
          type: M.Enum,
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
          ...Tt,
          ...Dt,
          ...g(ve),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (G.loader = { load: (e, t) => (t.locale, Promise.allSettled([x(B, {}, t), x(V, {}, t)])) }));
  });
function Wt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  K,
  tn = e(() => {
    (l(),
      N(),
      m(),
      n(),
      Ce(),
      (Gt = [`cM87t5M69`, `qN22FNT7e`]),
      (Kt = `framer-Wktx8`),
      (qt = { cM87t5M69: `framer-v-1cac62c`, qN22FNT7e: `framer-v-1hsztng` }),
      (Jt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Yt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Xt = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (Zt = { Border: `qN22FNT7e`, Fill: `cM87t5M69` }),
      (Qt = d.create(i)),
      ($t = ({ height: e, id: t, image: n, title: r, width: i, ...a }) => ({
        ...a,
        AHwBSeqKG: n ?? a.AHwBSeqKG,
        variant: Zt[a.variant] ?? a.variant ?? `cM87t5M69`,
        zYB4wRkr8: r ?? a.zYB4wRkr8 ?? `Sketching in coffee shops`,
      })),
      (en = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = y(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = ie(),
            m = A(),
            {
              style: g,
              className: _,
              layoutId: v,
              variant: y,
              zYB4wRkr8: b,
              AHwBSeqKG: x,
              ...C
            } = $t(e),
            {
              baseVariant: T,
              classNames: te,
              clearLoadingGesture: ne,
              gestureHandlers: E,
              gestureVariant: re,
              isLoading: ae,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = w({
              cycleOrder: Gt,
              defaultVariant: `cM87t5M69`,
              ref: o,
              variant: y,
              variantClassNames: qt,
            }),
            j = en(e, k),
            M = h(Kt, Se);
          return a(p, {
            id: v ?? s,
            children: a(Qt, {
              animate: k,
              initial: !1,
              children: a(Xt, {
                value: Jt,
                children: c(d.div, {
                  ...C,
                  ...E,
                  className: h(M, `framer-1cac62c`, _, te),
                  "data-framer-name": `Fill`,
                  layoutDependency: j,
                  layoutId: `cM87t5M69`,
                  ref: o,
                  style: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `rgba(0, 0, 0, 0)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    backgroundColor: `var(--token-f1adf1d0-324b-4e36-a3bc-ee5f43cc8b70, rgb(247, 248, 250))`,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    ...g,
                  },
                  variants: {
                    qN22FNT7e: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, rgb(232, 234, 237))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                    },
                  },
                  ...Wt({ qN22FNT7e: { "data-border": !0, "data-framer-name": `Border` } }, T, re),
                  children: [
                    a(se, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: ee((m?.y || 0) + (6 + ((m?.height || 49.5) - 12 - 37.5) / 2)),
                        sizes: `44px`,
                        ...Yt(x),
                      },
                      className: `framer-j8ntal`,
                      layoutDependency: j,
                      layoutId: `Mvgbu6K6M`,
                      style: {
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                      },
                    }),
                    a(d.div, {
                      className: `framer-aezg2a`,
                      layoutDependency: j,
                      layoutId: `iV1FbSA3E`,
                      children: a(S, {
                        __fromCanvasComponent: !0,
                        children: a(i, {
                          children: a(d.p, {
                            className: `framer-styles-preset-29mx3t`,
                            "data-styles-preset": `KSv8TCPWH`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31)))`,
                            },
                            children: `Sketching in coffee shops`,
                          }),
                        }),
                        className: `framer-ybpqs1`,
                        "data-framer-name": `Heading`,
                        fonts: [`Inter`],
                        layoutDependency: j,
                        layoutId: `r5sr2a9ox`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: b,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
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
          `.framer-Wktx8.framer-u2copm, .framer-Wktx8 .framer-u2copm { display: block; }`,
          `.framer-Wktx8.framer-1cac62c { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 6px 12px 6px 6px; position: relative; width: min-content; }`,
          `.framer-Wktx8 .framer-j8ntal { aspect-ratio: 1.1764705882352942 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 38px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 44px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Wktx8 .framer-aezg2a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-Wktx8 .framer-ybpqs1 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          ...Te,
          `.framer-Wktx8[data-border="true"]::after, .framer-Wktx8 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Wktx8`
      )),
      (K.displayName = `Passions card`),
      (K.defaultProps = { height: 49.5, width: 251 }),
      _(K, {
        variant: {
          options: [`cM87t5M69`, `qN22FNT7e`],
          optionTitles: [`Fill`, `Border`],
          title: `Variant`,
          type: M.Enum,
        },
        zYB4wRkr8: {
          defaultValue: `Sketching in coffee shops`,
          displayTextArea: !0,
          title: `Title`,
          type: M.String,
        },
        onzYB4wRkr8Change: { changes: `zYB4wRkr8`, type: M.ChangeHandler },
        AHwBSeqKG: { title: `Image`, type: M.ResponsiveImage },
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
          ...g(De),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function q(e, t) {
  for (; t; ) {
    let n = an[t.id];
    if (n && n.status === `fulfilled`) {
      let t = n.read()[e];
      if (t) return t;
    }
    t = t.fallback;
  }
}
function nn(e) {
  let t = [];
  for (; e; ) {
    let n = an[e.id];
    if (n) {
      let e = n.preload();
      e && t.push(e);
    }
    e = e.fallback;
  }
  if (t.length > 0) return Promise.all(t);
}
function rn(e) {
  let t = nn(e);
  if (t) throw t;
}
var an,
  on = e(() => {
    (N(), (an = { NQfeamgS2: new E(() => import("./JsvokrnkF-0.B3UZuJRa.mjs")) }));
  }),
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  J,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  Y,
  wn,
  Tn,
  X,
  Z,
  En,
  Dn,
  Q,
  $,
  On,
  kn,
  An,
  jn,
  Mn;
e(() => {
  (l(),
    N(),
    m(),
    n(),
    we(),
    Ke(),
    be(),
    Ut(),
    tn(),
    L(),
    Ae(),
    on(),
    Fe(),
    (sn = I(G)),
    (cn = O(k(T))),
    (ln = O(S)),
    (un = I(xe)),
    (dn = O(T)),
    (fn = O(d.div)),
    (pn = k(S)),
    (mn = I(K)),
    (J = k(T)),
    (hn = I(z)),
    (gn = I(Ee)),
    (_n = {
      UNuDnDcoL: `(min-width: 810px) and (max-width: 1279.98px)`,
      verLRbbvb: `(max-width: 809.98px)`,
      VyjK1BH9Z: `(min-width: 1280px)`,
    }),
    (vn = []),
    (yn = `framer-vktB6`),
    (bn = {
      UNuDnDcoL: `framer-v-1bvmoz9`,
      verLRbbvb: `framer-v-1drchgo`,
      VyjK1BH9Z: `framer-v-g6e5u4`,
    }),
    (xn = (e, t, n) => (e && t ? `position` : n)),
    (Sn = {
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
    (Cn = {
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
    (Y = { bounce: 0, delay: 0, duration: 1.1, type: `spring` }),
    (wn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Y,
      x: 0,
      y: 0,
    }),
    (Tn = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (X = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (En = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (Dn = {
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
    (Q = {
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
    ($ = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Y,
      x: 0,
      y: 10,
    }),
    (On = { Desktop: `VyjK1BH9Z`, Phone: `verLRbbvb`, Tablet: `UNuDnDcoL` }),
    (kn = ({ value: e }) =>
      ae()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (An = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: On[r.variant] ?? r.variant ?? `VyjK1BH9Z`,
    })),
    (jn = y(
      o(function (e, n) {
        let o = r(null),
          l = n ?? o,
          m = u(),
          { activeLocale: g, setLocale: _ } = ie(),
          v = A(),
          { style: y, className: b, layoutId: x, variant: S, ...C } = An(e);
        F(t(() => Pe({}, g), [g]));
        let [w, ee] = oe(S, _n, !1),
          ne = h(yn, Ne, de),
          E = s(te)?.isLayoutTemplate,
          ae = !!s(f)?.transition?.layout,
          O = xn(E, ae),
          k = ce(`Y1J_nvxfZ`),
          j = r(null);
        rn(g);
        let M = ce(`RhNFT819H`),
          N = r(null),
          se = ce(`KtXgRS5rW`),
          le = r(null);
        return (
          re({}),
          a(te.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: On,
              primaryVariantId: `VyjK1BH9Z`,
              variantClassNames: bn,
            },
            children: c(p, {
              id: x ?? m,
              children: [
                a(kn, {
                  value: `html body { background: var(--token-f7afab8f-991d-426d-a212-51d8456d5a36, rgb(250, 250, 250)); }`,
                }),
                c(d.div, {
                  ...C,
                  className: h(ne, `framer-g6e5u4`, b),
                  ref: l,
                  style: { ...y },
                  children: [
                    c(d.div, {
                      className: `framer-14tioq8`,
                      "data-framer-name": `Main`,
                      layout: O,
                      children: [
                        a(`section`, {
                          className: `framer-1psb2g3`,
                          "data-border": !0,
                          "data-framer-name": `About`,
                          id: k,
                          ref: j,
                          children: a(`div`, {
                            className: `framer-11gmqbc`,
                            "data-framer-name": `Container`,
                            children: c(fn, {
                              animate: Sn,
                              className: `framer-xbw5v3`,
                              "data-framer-appear-id": `xbw5v3`,
                              "data-framer-name": `About`,
                              initial: Cn,
                              optimized: !0,
                              children: [
                                a(P, {
                                  breakpoint: w,
                                  overrides: {
                                    UNuDnDcoL: {
                                      width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 80px, 1px), 1280px) - 40px) / 2, 1px)`,
                                    },
                                    verLRbbvb: {
                                      height: 464,
                                      width: `min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px)`,
                                      y: (v?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0,
                                    },
                                  },
                                  children: a(D, {
                                    height: 553,
                                    width: `calc(min(max(min(${v?.width || `100vw`}, 1280px) - 128px, 1px), 1280px) * 0.42)`,
                                    children: a(P, {
                                      breakpoint: w,
                                      overrides: {
                                        verLRbbvb: {
                                          __framer__animate: { transition: Y },
                                          __framer__animateOnce: !0,
                                          __framer__enter: En,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          animate: void 0,
                                          initial: void 0,
                                          optimized: void 0,
                                        },
                                      },
                                      children: a(cn, {
                                        animate: wn,
                                        className: `framer-osxhim-container`,
                                        "data-framer-appear-id": `osxhim`,
                                        initial: Tn,
                                        nodeId: `m01e8U4pn`,
                                        optimized: !0,
                                        rendersWithMotion: !0,
                                        scopeId: `JsvokrnkF`,
                                        children: a(P, {
                                          breakpoint: w,
                                          overrides: { verLRbbvb: { style: { width: `100%` } } },
                                          children: a(G, {
                                            height: `100%`,
                                            id: `m01e8U4pn`,
                                            ik7sKAM10: X(
                                              {
                                                pixelHeight: 953,
                                                pixelWidth: 853,
                                                src: `https://framerusercontent.com/images/DpLjJBpUWA6xoqYQk4AVY6OSg.jpg?width=853&height=953`,
                                                srcSet: `https://framerusercontent.com/images/DpLjJBpUWA6xoqYQk4AVY6OSg.jpg?width=853&height=953 853w`,
                                              },
                                              ``
                                            ),
                                            iqUXDXQLs: q(`v1`, g) ?? `Поле`,
                                            JFPwUoRuW: X(
                                              {
                                                pixelHeight: 1031,
                                                pixelWidth: 853,
                                                src: `https://framerusercontent.com/images/ChL3END6pqSskOort5UI9CcvDUc.jpg?width=853&height=1031`,
                                                srcSet: `https://framerusercontent.com/images/ChL3END6pqSskOort5UI9CcvDUc.jpg?scale-down-to=1024&width=853&height=1031 847w,https://framerusercontent.com/images/ChL3END6pqSskOort5UI9CcvDUc.jpg?width=853&height=1031 853w`,
                                              },
                                              ``
                                            ),
                                            KcCs3a9nK: q(`v3`, g) ?? `Тоже я`,
                                            kf2MWwF9V: q(`v2`, g) ?? `Остановка`,
                                            layoutId: `m01e8U4pn`,
                                            q6jw0Fxur: X(
                                              {
                                                pixelHeight: 954,
                                                pixelWidth: 853,
                                                src: `https://framerusercontent.com/images/ptcCPyDPRQKvtCEdxYKH2rTE.jpg?width=853&height=954`,
                                                srcSet: `https://framerusercontent.com/images/ptcCPyDPRQKvtCEdxYKH2rTE.jpg?width=853&height=954 853w`,
                                              },
                                              ``
                                            ),
                                            rgbDAzRQ2: `center`,
                                            style: { height: `100%`, width: `100%` },
                                            variant: Z(`xwHSOT9NL`),
                                            width: `100%`,
                                            xFkRs8mMP: q(`v0`, g) ?? `Я`,
                                            yK4RUXrFB: X(
                                              {
                                                pixelHeight: 1009,
                                                pixelWidth: 853,
                                                src: `../../assets/images/lmUd3NnvOXWrZKMTpRtKlecSEU.jpg`,
                                                srcSet: `../../assets/images/lmUd3NnvOXWrZKMTpRtKlecSEU.jpg 853w`,
                                              },
                                              ``
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                c(`div`, {
                                  className: `framer-kebei7`,
                                  "data-framer-name": `Right`,
                                  children: [
                                    c(`div`, {
                                      className: `framer-8b2quk`,
                                      "data-framer-name": `Text`,
                                      children: [
                                        a(ln, {
                                          __fromCanvasComponent: !0,
                                          animate: wn,
                                          children:
                                            q(`v4`, g) ??
                                            a(i, {
                                              children: c(`h2`, {
                                                className: `framer-styles-preset-q0odjm`,
                                                "data-styles-preset": `UN67IVlmf`,
                                                dir: `auto`,
                                                children: [
                                                  `Привет, Я Маша. `,
                                                  a(`br`, {}),
                                                  a(`span`, {
                                                    style: {
                                                      "--framer-text-color": `var(--token-51d11642-d88a-481a-9928-4807c91d56bc, rgb(113, 120, 128))`,
                                                    },
                                                    children: `UX/UI и продуктовый дизайнер`,
                                                  }),
                                                ],
                                              }),
                                            }),
                                          className: `framer-54an8q`,
                                          "data-framer-appear-id": `54an8q`,
                                          "data-framer-name": `Heading`,
                                          fonts: [`Inter`],
                                          initial: Cn,
                                          optimized: !0,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(ln, {
                                          __fromCanvasComponent: !0,
                                          animate: Dn,
                                          children:
                                            q(`v5`, g) ??
                                            c(i, {
                                              children: [
                                                a(`p`, {
                                                  className: `framer-styles-preset-1smn5pm`,
                                                  "data-styles-preset": `aWuz3iYI_`,
                                                  dir: `auto`,
                                                  children: `Я\xA0живу и\xA0работаю в\xA0Магнитогорске, создаю веб-сервисы и\xA0цифровые продукты, которые должны быть одновременно простыми и\xA0надежными. В\xA0основном я\xA0занимаюсь SaaS-решениями и B2B\xA0внутренними платформами, где пользовательский опыт важнее декоративных элементов.`,
                                                }),
                                                a(`p`, {
                                                  className: `framer-styles-preset-1smn5pm`,
                                                  "data-styles-preset": `aWuz3iYI_`,
                                                  dir: `auto`,
                                                  children: `Я\xA0начинала карьеру с\xA0веб-дизайна, но\xA0вскоре переключился на\xA0более сложные системы: erp, crm, дашборды,  и\xA0инструменты для ежедневной командной работы. `,
                                                }),
                                                a(`p`, {
                                                  className: `framer-styles-preset-1smn5pm`,
                                                  "data-styles-preset": `aWuz3iYI_`,
                                                  dir: `auto`,
                                                  children: `Для меня важно делать продукты понятными: устранять барьеры и\xA0лишний шум, помогая пользователям решать задачи, не\xA0отвлекаясь на\xA0сам интерфейс.`,
                                                }),
                                                a(`p`, {
                                                  className: `framer-styles-preset-1smn5pm`,
                                                  "data-styles-preset": `aWuz3iYI_`,
                                                  dir: `auto`,
                                                  children: `В\xA0свободное время я\xA0занимаюсь поиском визуальных идей, изучением новых инструментов, геймдизайном и\xA0небольшими сторонними проектами, которые позволяют мне экспериментировать  свободнее.`,
                                                }),
                                              ],
                                            }),
                                          className: `framer-1ajuc2p`,
                                          "data-framer-appear-id": `1ajuc2p`,
                                          "data-framer-name": `Subheading`,
                                          fonts: [`Inter`],
                                          initial: Cn,
                                          optimized: !0,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    a(P, {
                                      breakpoint: w,
                                      overrides: {
                                        verLRbbvb: {
                                          y:
                                            (v?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            496 +
                                            0 +
                                            644.4,
                                        },
                                      },
                                      children: a(D, {
                                        height: 44,
                                        children: a(dn, {
                                          animate: Dn,
                                          className: `framer-1p1uvf5-container`,
                                          "data-framer-appear-id": `1p1uvf5`,
                                          "data-framer-name": `CTA`,
                                          initial: Cn,
                                          name: `CTA`,
                                          nodeId: `I2sFImxMV`,
                                          optimized: !0,
                                          rendersWithMotion: !0,
                                          scopeId: `JsvokrnkF`,
                                          children: a(xe, {
                                            bYMrbF3CO: `https://t.me/marishinybekova`,
                                            height: `100%`,
                                            id: `I2sFImxMV`,
                                            Iw3bv_gkH: !0,
                                            layoutId: `I2sFImxMV`,
                                            name: `CTA`,
                                            Og1_ZrdX2: !0,
                                            rzEJyeGCD: !1,
                                            variant: Z(`r_ypCUA4W`),
                                            width: `100%`,
                                            XQBi6J5Qe: q(`v6`, g) ?? `Обсудить проект`,
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
                        a(`section`, {
                          className: `framer-1bx76si`,
                          "data-border": !0,
                          "data-framer-name": `Enjoy`,
                          id: M,
                          ref: N,
                          children: a(`div`, {
                            className: `framer-1glmbz`,
                            "data-framer-name": `Container`,
                            children: c(`div`, {
                              className: `framer-160gsax`,
                              "data-framer-name": `Values`,
                              children: [
                                a(`div`, {
                                  className: `framer-8g1ibs`,
                                  "data-framer-name": `Heading`,
                                  children: a(pn, {
                                    __framer__animate: { transition: Y },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__exit: $,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children:
                                      q(`v7`, g) ??
                                      a(i, {
                                        children: c(`h2`, {
                                          className: `framer-styles-preset-q0odjm`,
                                          "data-styles-preset": `UN67IVlmf`,
                                          dir: `auto`,
                                          children: [
                                            `Чем интересуюсь `,
                                            a(`span`, {
                                              style: {
                                                "--framer-text-color": `var(--token-51d11642-d88a-481a-9928-4807c91d56bc, rgb(113, 120, 128))`,
                                              },
                                              children: `сейчас`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    className: `framer-apdvc8`,
                                    "data-framer-name": `Heading`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                c(`div`, {
                                  className: `framer-1rspz3u`,
                                  "data-framer-name": `Values Container`,
                                  children: [
                                    a(P, {
                                      breakpoint: w,
                                      overrides: {
                                        verLRbbvb: {
                                          width: `min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px)`,
                                          y:
                                            (v?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1224.4 +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            68.4 +
                                            0 +
                                            0,
                                        },
                                      },
                                      children: a(D, {
                                        height: 49,
                                        children: a(J, {
                                          __framer__animate: { transition: Y },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: $,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-dbl3un-container`,
                                          nodeId: `fpRzsrRj8`,
                                          rendersWithMotion: !0,
                                          scopeId: `JsvokrnkF`,
                                          children: a(P, {
                                            breakpoint: w,
                                            overrides: { verLRbbvb: { style: { width: `100%` } } },
                                            children: a(K, {
                                              AHwBSeqKG: X(
                                                {
                                                  pixelHeight: 320,
                                                  pixelWidth: 241,
                                                  src: `../../assets/images/HlzOrT3cpSgi7iag3FY17GIDZxI.jpeg`,
                                                },
                                                ``
                                              ),
                                              height: `100%`,
                                              id: `fpRzsrRj8`,
                                              layoutId: `fpRzsrRj8`,
                                              variant: Z(`cM87t5M69`),
                                              width: `100%`,
                                              zYB4wRkr8: q(`v8`, g) ?? `AI инструменты`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(P, {
                                      breakpoint: w,
                                      overrides: {
                                        verLRbbvb: {
                                          width: `min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px)`,
                                          y:
                                            (v?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1224.4 +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            68.4 +
                                            0 +
                                            61,
                                        },
                                      },
                                      children: a(D, {
                                        height: 49,
                                        children: a(J, {
                                          __framer__animate: { transition: Y },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: $,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-pyjecb-container`,
                                          nodeId: `Z8o_31qGX`,
                                          rendersWithMotion: !0,
                                          scopeId: `JsvokrnkF`,
                                          children: a(P, {
                                            breakpoint: w,
                                            overrides: { verLRbbvb: { style: { width: `100%` } } },
                                            children: a(K, {
                                              AHwBSeqKG: X(
                                                {
                                                  pixelHeight: 2400,
                                                  pixelWidth: 1200,
                                                  src: `../../assets/images/u2O6qTRb5QBuZioDl5AEouDMdgw-05e32e.jpg`,
                                                  srcSet: `../../assets/images/u2O6qTRb5QBuZioDl5AEouDMdgw.jpg 512w,../../assets/images/u2O6qTRb5QBuZioDl5AEouDMdgw-691c66.jpg 1024w,../../assets/images/u2O6qTRb5QBuZioDl5AEouDMdgw-05e32e.jpg 1200w`,
                                                },
                                                ``
                                              ),
                                              height: `100%`,
                                              id: `Z8o_31qGX`,
                                              layoutId: `Z8o_31qGX`,
                                              variant: Z(`cM87t5M69`),
                                              width: `100%`,
                                              zYB4wRkr8: q(`v9`, g) ?? `Минимализм`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(P, {
                                      breakpoint: w,
                                      overrides: {
                                        verLRbbvb: {
                                          width: `min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px)`,
                                          y:
                                            (v?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1224.4 +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            68.4 +
                                            0 +
                                            122,
                                        },
                                      },
                                      children: a(D, {
                                        height: 49,
                                        children: a(J, {
                                          __framer__animate: { transition: Y },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: $,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1oi0x2j-container`,
                                          nodeId: `HCqt7pS71`,
                                          rendersWithMotion: !0,
                                          scopeId: `JsvokrnkF`,
                                          children: a(P, {
                                            breakpoint: w,
                                            overrides: { verLRbbvb: { style: { width: `100%` } } },
                                            children: a(K, {
                                              AHwBSeqKG: X(
                                                {
                                                  pixelHeight: 320,
                                                  pixelWidth: 224,
                                                  src: `../../assets/images/3SOjNfVSOGrcMstTmY6BvPbWQ.jpeg`,
                                                },
                                                ``
                                              ),
                                              height: `100%`,
                                              id: `HCqt7pS71`,
                                              layoutId: `HCqt7pS71`,
                                              variant: Z(`cM87t5M69`),
                                              width: `100%`,
                                              zYB4wRkr8: q(`v10`, g) ?? `Дизайн системы`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(P, {
                                      breakpoint: w,
                                      overrides: {
                                        verLRbbvb: {
                                          width: `min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px)`,
                                          y:
                                            (v?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1224.4 +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            68.4 +
                                            0 +
                                            183,
                                        },
                                      },
                                      children: a(D, {
                                        height: 49,
                                        children: a(J, {
                                          __framer__animate: { transition: Y },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: $,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1xqhoiz-container`,
                                          nodeId: `sSayPxJnq`,
                                          rendersWithMotion: !0,
                                          scopeId: `JsvokrnkF`,
                                          children: a(P, {
                                            breakpoint: w,
                                            overrides: { verLRbbvb: { style: { width: `100%` } } },
                                            children: a(K, {
                                              AHwBSeqKG: X(
                                                {
                                                  pixelHeight: 1200,
                                                  pixelWidth: 686,
                                                  src: `../../assets/images/AJf9QmWLh3c433NP8MGu8kL5FQw-853ff3.jpg`,
                                                  srcSet: `../../assets/images/AJf9QmWLh3c433NP8MGu8kL5FQw.jpg 585w,../../assets/images/AJf9QmWLh3c433NP8MGu8kL5FQw-853ff3.jpg 686w`,
                                                },
                                                ``
                                              ),
                                              height: `100%`,
                                              id: `sSayPxJnq`,
                                              layoutId: `sSayPxJnq`,
                                              variant: Z(`cM87t5M69`),
                                              width: `100%`,
                                              zYB4wRkr8: q(`v11`, g) ?? `Геймдизайн`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(P, {
                                      breakpoint: w,
                                      overrides: {
                                        verLRbbvb: {
                                          width: `min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px)`,
                                          y:
                                            (v?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1224.4 +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            68.4 +
                                            0 +
                                            244,
                                        },
                                      },
                                      children: a(D, {
                                        height: 49,
                                        children: a(J, {
                                          __framer__animate: { transition: Y },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: $,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1an7xux-container`,
                                          nodeId: `Ydlc3smSW`,
                                          rendersWithMotion: !0,
                                          scopeId: `JsvokrnkF`,
                                          children: a(P, {
                                            breakpoint: w,
                                            overrides: { verLRbbvb: { style: { width: `100%` } } },
                                            children: a(K, {
                                              AHwBSeqKG: X(
                                                {
                                                  pixelHeight: 919,
                                                  pixelWidth: 735,
                                                  src: `../../assets/images/IiFsyqreIj54XxFaA1KJHokEPM.jpg`,
                                                  srcSet: `../../assets/images/IiFsyqreIj54XxFaA1KJHokEPM.jpg 735w`,
                                                },
                                                ``
                                              ),
                                              height: `100%`,
                                              id: `Ydlc3smSW`,
                                              layoutId: `Ydlc3smSW`,
                                              variant: Z(`cM87t5M69`),
                                              width: `100%`,
                                              zYB4wRkr8: q(`v12`, g) ?? `Торты`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(P, {
                                      breakpoint: w,
                                      overrides: {
                                        verLRbbvb: {
                                          width: `min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px)`,
                                          y:
                                            (v?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1224.4 +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            68.4 +
                                            0 +
                                            305,
                                        },
                                      },
                                      children: a(D, {
                                        height: 49,
                                        children: a(J, {
                                          __framer__animate: { transition: Y },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: $,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-13vat9w-container`,
                                          nodeId: `kOH4W9Y6A`,
                                          rendersWithMotion: !0,
                                          scopeId: `JsvokrnkF`,
                                          children: a(P, {
                                            breakpoint: w,
                                            overrides: { verLRbbvb: { style: { width: `100%` } } },
                                            children: a(K, {
                                              AHwBSeqKG: X(
                                                {
                                                  pixelHeight: 916,
                                                  pixelWidth: 736,
                                                  src: `../../assets/images/pp0mbhq54FFWe3o2ifLCIJbVk.jpg`,
                                                  srcSet: `../../assets/images/pp0mbhq54FFWe3o2ifLCIJbVk.jpg 736w`,
                                                },
                                                ``
                                              ),
                                              height: `100%`,
                                              id: `kOH4W9Y6A`,
                                              layoutId: `kOH4W9Y6A`,
                                              variant: Z(`cM87t5M69`),
                                              width: `100%`,
                                              zYB4wRkr8: q(`v13`, g) ?? `Сбор грибов`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(P, {
                                      breakpoint: w,
                                      overrides: {
                                        verLRbbvb: {
                                          width: `min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px)`,
                                          y:
                                            (v?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1224.4 +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            68.4 +
                                            0 +
                                            366,
                                        },
                                      },
                                      children: a(D, {
                                        height: 49,
                                        children: a(J, {
                                          __framer__animate: { transition: Y },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: $,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-190mkug-container`,
                                          nodeId: `aTpb5EZXm`,
                                          rendersWithMotion: !0,
                                          scopeId: `JsvokrnkF`,
                                          children: a(P, {
                                            breakpoint: w,
                                            overrides: { verLRbbvb: { style: { width: `100%` } } },
                                            children: a(K, {
                                              AHwBSeqKG: X(
                                                {
                                                  pixelHeight: 1205,
                                                  pixelWidth: 736,
                                                  src: `../../assets/images/LORn6gbGLQLFlgPoUlF4I4OeekY-1a9911.jpg`,
                                                  srcSet: `../../assets/images/LORn6gbGLQLFlgPoUlF4I4OeekY.jpg 625w,../../assets/images/LORn6gbGLQLFlgPoUlF4I4OeekY-1a9911.jpg 736w`,
                                                },
                                                ``
                                              ),
                                              height: `100%`,
                                              id: `aTpb5EZXm`,
                                              layoutId: `aTpb5EZXm`,
                                              variant: Z(`cM87t5M69`),
                                              width: `100%`,
                                              zYB4wRkr8: q(`v14`, g) ?? `Походы в горы`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(P, {
                                      breakpoint: w,
                                      overrides: {
                                        verLRbbvb: {
                                          width: `min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px)`,
                                          y:
                                            (v?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1224.4 +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            68.4 +
                                            0 +
                                            427,
                                        },
                                      },
                                      children: a(D, {
                                        height: 49,
                                        children: a(J, {
                                          __framer__animate: { transition: Y },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: $,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1u8kyk2-container`,
                                          nodeId: `E3OIQbM_w`,
                                          rendersWithMotion: !0,
                                          scopeId: `JsvokrnkF`,
                                          children: a(P, {
                                            breakpoint: w,
                                            overrides: { verLRbbvb: { style: { width: `100%` } } },
                                            children: a(K, {
                                              AHwBSeqKG: X(
                                                {
                                                  pixelHeight: 736,
                                                  pixelWidth: 736,
                                                  src: `../../assets/images/U4vuIxN1SbQIKkAf9qAJXTyyelw-5f3a23.jpg`,
                                                  srcSet: `../../assets/images/U4vuIxN1SbQIKkAf9qAJXTyyelw.jpg 512w,../../assets/images/U4vuIxN1SbQIKkAf9qAJXTyyelw-5f3a23.jpg 736w`,
                                                },
                                                ``
                                              ),
                                              height: `100%`,
                                              id: `E3OIQbM_w`,
                                              layoutId: `E3OIQbM_w`,
                                              variant: Z(`cM87t5M69`),
                                              width: `100%`,
                                              zYB4wRkr8: q(`v15`, g) ?? `Сноубординг`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(P, {
                                      breakpoint: w,
                                      overrides: {
                                        verLRbbvb: {
                                          width: `min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px)`,
                                          y:
                                            (v?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1224.4 +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            68.4 +
                                            0 +
                                            488,
                                        },
                                      },
                                      children: a(D, {
                                        height: 49,
                                        children: a(J, {
                                          __framer__animate: { transition: Y },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: $,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1harzoc-container`,
                                          nodeId: `ctuy43Sgq`,
                                          rendersWithMotion: !0,
                                          scopeId: `JsvokrnkF`,
                                          children: a(P, {
                                            breakpoint: w,
                                            overrides: { verLRbbvb: { style: { width: `100%` } } },
                                            children: a(K, {
                                              AHwBSeqKG: X(
                                                {
                                                  pixelHeight: 965,
                                                  pixelWidth: 941,
                                                  src: `../../assets/images/5sqQEifklxXJzuOZXmm7fnLWpKI.jpg`,
                                                  srcSet: `../../assets/images/5sqQEifklxXJzuOZXmm7fnLWpKI.jpg 941w`,
                                                },
                                                ``
                                              ),
                                              height: `100%`,
                                              id: `ctuy43Sgq`,
                                              layoutId: `ctuy43Sgq`,
                                              variant: Z(`cM87t5M69`),
                                              width: `100%`,
                                              zYB4wRkr8: q(`v16`, g) ?? `Путешествия`,
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
                        }),
                        a(`section`, {
                          className: `framer-35b6fe`,
                          "data-border": !0,
                          "data-framer-name": `Values`,
                          id: se,
                          ref: le,
                          children: a(`div`, {
                            className: `framer-1z0od7s`,
                            "data-framer-name": `Container`,
                            children: c(`div`, {
                              className: `framer-1llmlfw`,
                              "data-framer-name": `Values`,
                              children: [
                                a(`div`, {
                                  className: `framer-xigsdr`,
                                  "data-framer-name": `Heading`,
                                  children: a(pn, {
                                    __framer__animate: { transition: Y },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__exit: $,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children:
                                      q(`v17`, g) ??
                                      a(i, {
                                        children: c(`h2`, {
                                          className: `framer-styles-preset-q0odjm`,
                                          "data-styles-preset": `UN67IVlmf`,
                                          dir: `auto`,
                                          children: [
                                            `Ценности, лежащие`,
                                            a(`br`, {}),
                                            a(`span`, {
                                              style: {
                                                "--framer-text-color": `var(--token-51d11642-d88a-481a-9928-4807c91d56bc, rgb(113, 120, 128))`,
                                              },
                                              children: `в основе моей работы`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    className: `framer-77wn8b`,
                                    "data-framer-name": `Heading`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                c(`div`, {
                                  className: `framer-1xkt5i8`,
                                  "data-framer-name": `Values Container`,
                                  children: [
                                    a(P, {
                                      breakpoint: w,
                                      overrides: {
                                        UNuDnDcoL: {
                                          width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 80px, 1px), 1280px) - 18px) / 2, 200px)`,
                                        },
                                        verLRbbvb: {
                                          width: `max(min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px), 200px)`,
                                          y:
                                            (v?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1909.8 +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            68.4 +
                                            0 +
                                            0,
                                        },
                                      },
                                      children: a(D, {
                                        height: 143,
                                        width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 128px, 1px), 1280px) - 36px) / 4, 200px)`,
                                        children: a(J, {
                                          __framer__animate: { transition: Y },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: $,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-mb0pmp-container`,
                                          nodeId: `n3Sv5IICQ`,
                                          rendersWithMotion: !0,
                                          scopeId: `JsvokrnkF`,
                                          children: a(z, {
                                            height: `100%`,
                                            id: `n3Sv5IICQ`,
                                            layoutId: `n3Sv5IICQ`,
                                            NyOF2qV63:
                                              q(`v19`, g) ??
                                              `Проявляю инициативу и принимаю решения, даже когда путь не ясен`,
                                            style: { width: `100%` },
                                            variant: Z(`Cz514smY5`),
                                            w0Wkkqoya: q(`v18`, g) ?? `Храбрость`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(P, {
                                      breakpoint: w,
                                      overrides: {
                                        UNuDnDcoL: {
                                          width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 80px, 1px), 1280px) - 18px) / 2, 200px)`,
                                        },
                                        verLRbbvb: {
                                          width: `max(min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px), 200px)`,
                                          y:
                                            (v?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1909.8 +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            68.4 +
                                            0 +
                                            155,
                                        },
                                      },
                                      children: a(D, {
                                        height: 143,
                                        width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 128px, 1px), 1280px) - 36px) / 4, 200px)`,
                                        children: a(J, {
                                          __framer__animate: { transition: Y },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: $,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-h2h8wc-container`,
                                          nodeId: `QJFkn31_R`,
                                          rendersWithMotion: !0,
                                          scopeId: `JsvokrnkF`,
                                          children: a(z, {
                                            height: `100%`,
                                            id: `QJFkn31_R`,
                                            layoutId: `QJFkn31_R`,
                                            NyOF2qV63:
                                              q(`v21`, g) ??
                                              `Открыто общаюсь и\xA0сосредатачиваюсь на\xA0том, что важно для результата`,
                                            style: { width: `100%` },
                                            variant: Z(`Cz514smY5`),
                                            w0Wkkqoya: q(`v20`, g) ?? `Честность`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(P, {
                                      breakpoint: w,
                                      overrides: {
                                        UNuDnDcoL: {
                                          width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 80px, 1px), 1280px) - 18px) / 2, 200px)`,
                                        },
                                        verLRbbvb: {
                                          width: `max(min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px), 200px)`,
                                          y:
                                            (v?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1909.8 +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            68.4 +
                                            0 +
                                            310,
                                        },
                                      },
                                      children: a(D, {
                                        height: 143,
                                        width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 128px, 1px), 1280px) - 36px) / 4, 200px)`,
                                        children: a(J, {
                                          __framer__animate: { transition: Y },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: $,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-7y51q5-container`,
                                          nodeId: `y9j44IuC2`,
                                          rendersWithMotion: !0,
                                          scopeId: `JsvokrnkF`,
                                          children: a(z, {
                                            height: `100%`,
                                            id: `y9j44IuC2`,
                                            layoutId: `y9j44IuC2`,
                                            NyOF2qV63:
                                              q(`v23`, g) ??
                                              `Я\xA0сохраняю гикость, быстро учусь и\xA0адаптируюсь к\xA0трудностям`,
                                            style: { width: `100%` },
                                            variant: Z(`Cz514smY5`),
                                            w0Wkkqoya: q(`v22`, g) ?? `Адаптивность`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(P, {
                                      breakpoint: w,
                                      overrides: {
                                        UNuDnDcoL: {
                                          width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 80px, 1px), 1280px) - 18px) / 2, 200px)`,
                                        },
                                        verLRbbvb: {
                                          width: `max(min(max(min(${v?.width || `100vw`}, 1280px) - 40px, 1px), 1280px), 200px)`,
                                          y:
                                            (v?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1909.8 +
                                            40 +
                                            0 +
                                            0 +
                                            0 +
                                            68.4 +
                                            0 +
                                            465,
                                        },
                                      },
                                      children: a(D, {
                                        height: 143,
                                        width: `max((min(max(min(${v?.width || `100vw`}, 1280px) - 128px, 1px), 1280px) - 36px) / 4, 200px)`,
                                        children: a(J, {
                                          __framer__animate: { transition: Y },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__exit: $,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1l1g4nm-container`,
                                          nodeId: `Q4kl4_h9f`,
                                          rendersWithMotion: !0,
                                          scopeId: `JsvokrnkF`,
                                          children: a(z, {
                                            height: `100%`,
                                            id: `Q4kl4_h9f`,
                                            layoutId: `Q4kl4_h9f`,
                                            NyOF2qV63:
                                              q(`v25`, g) ??
                                              `Люблю сотруничать, верю, что лучшие результаты достигаются в\xA0команде.`,
                                            style: { width: `100%` },
                                            variant: Z(`Cz514smY5`),
                                            w0Wkkqoya: q(`v24`, g) ?? `Работа в команде`,
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
                      ],
                    }),
                    a(D, {
                      children: a(T, {
                        className: `framer-1gbti61-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: O,
                        nodeId: `ZJiQjh8pi`,
                        scopeId: `JsvokrnkF`,
                        children: a(Ee, {
                          height: `100%`,
                          id: `ZJiQjh8pi`,
                          intensity: 6,
                          layoutId: `ZJiQjh8pi`,
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
        `.framer-vktB6.framer-1smb97y, .framer-vktB6 .framer-1smb97y { display: block; }`,
        `.framer-vktB6.framer-g6e5u4 { align-content: center; align-items: center; background-color: var(--token-f7afab8f-991d-426d-a212-51d8456d5a36, #fafafa); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
        `.framer-vktB6 .framer-14tioq8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: visible; padding: 0px 64px 0px 64px; position: relative; width: 100%; }`,
        `.framer-vktB6 .framer-1psb2g3 { --border-bottom-width: 0px; --border-color: var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, #e8eaed); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 80px 0px; position: relative; width: 100%; }`,
        `.framer-vktB6 .framer-11gmqbc, .framer-vktB6 .framer-1z0od7s { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1280px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-vktB6 .framer-xbw5v3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-vktB6 .framer-osxhim-container { aspect-ratio: 0.8703703703703703 / 1; flex: none; height: auto; position: relative; width: 42%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-vktB6 .framer-kebei7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-vktB6 .framer-8b2quk, .framer-vktB6 .framer-160gsax, .framer-vktB6 .framer-1llmlfw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vktB6 .framer-54an8q { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-vktB6 .framer-1ajuc2p { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-vktB6 .framer-1p1uvf5-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-vktB6 .framer-1bx76si, .framer-vktB6 .framer-35b6fe { --border-bottom-width: 0px; --border-color: var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, #e8eaed); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 80px 0px; position: relative; width: 100%; }`,
        `.framer-vktB6 .framer-1glmbz { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-vktB6 .framer-8g1ibs, .framer-vktB6 .framer-xigsdr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 395px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vktB6 .framer-apdvc8, .framer-vktB6 .framer-77wn8b { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-vktB6 .framer-1rspz3u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 12px 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vktB6 .framer-dbl3un-container, .framer-vktB6 .framer-pyjecb-container, .framer-vktB6 .framer-1oi0x2j-container, .framer-vktB6 .framer-1xqhoiz-container, .framer-vktB6 .framer-1an7xux-container, .framer-vktB6 .framer-13vat9w-container, .framer-vktB6 .framer-190mkug-container, .framer-vktB6 .framer-1u8kyk2-container, .framer-vktB6 .framer-1harzoc-container, .framer-vktB6 .framer-1gbti61-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-vktB6 .framer-1xkt5i8 { display: grid; flex: none; gap: 12px 12px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(200px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vktB6 .framer-mb0pmp-container, .framer-vktB6 .framer-h2h8wc-container, .framer-vktB6 .framer-7y51q5-container, .framer-vktB6 .framer-1l1g4nm-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        ...je,
        ...R,
        `.framer-vktB6[data-border="true"]::after, .framer-vktB6 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-vktB6.framer-g6e5u4 { width: 810px; } .framer-vktB6 .framer-14tioq8 { padding: 0px 40px 0px 40px; } .framer-vktB6 .framer-osxhim-container { flex: 1 0 0px; width: 1px; } .framer-vktB6 .framer-kebei7 { gap: 32px; } .framer-vktB6 .framer-1rspz3u { gap: 18px; } .framer-vktB6 .framer-1xkt5i8 { gap: 18px; grid-template-columns: repeat(2, minmax(200px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-vktB6.framer-g6e5u4 { width: 390px; } .framer-vktB6 .framer-14tioq8 { padding: 0px 20px 0px 20px; } .framer-vktB6 .framer-1psb2g3 { padding: 0px 0px 40px 0px; } .framer-vktB6 .framer-xbw5v3 { flex-direction: column; gap: 32px; } .framer-vktB6 .framer-osxhim-container { aspect-ratio: unset; width: 100%; will-change: unset; } .framer-vktB6 .framer-kebei7 { flex: none; width: 100%; } .framer-vktB6 .framer-1bx76si, .framer-vktB6 .framer-35b6fe { padding: 40px 0px 40px 0px; } .framer-vktB6 .framer-160gsax, .framer-vktB6 .framer-1llmlfw { gap: 32px; } .framer-vktB6 .framer-1rspz3u { flex-direction: column; } .framer-vktB6 .framer-dbl3un-container, .framer-vktB6 .framer-pyjecb-container, .framer-vktB6 .framer-1oi0x2j-container, .framer-vktB6 .framer-1xqhoiz-container, .framer-vktB6 .framer-1an7xux-container, .framer-vktB6 .framer-13vat9w-container, .framer-vktB6 .framer-190mkug-container, .framer-vktB6 .framer-1u8kyk2-container, .framer-vktB6 .framer-1harzoc-container { width: 100%; } .framer-vktB6 .framer-1xkt5i8 { grid-template-columns: repeat(1, minmax(200px, 1fr)); }}`,
      ],
      `framer-vktB6`
    )),
    (jn.displayName = `Home`),
    (jn.defaultProps = { height: 2108, width: 1280 }),
    v(
      jn,
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
        ...sn,
        ...un,
        ...mn,
        ...hn,
        ...gn,
        ...g(Me),
        ...g(ue),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (jn.loader = {
      load: (e, t) =>
        j([() => x(G, {}, t), () => x(xe, {}, t), () => x(K, {}, t), () => x(z, {}, t)], t),
    }),
    (Mn = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerJsvokrnkF`,
          slots: [],
          annotations: {
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"UNuDnDcoL":{"layout":["fixed","auto"]},"verLRbbvb":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `2108`,
            framerAutoSizeImages: `true`,
            framerContractVersion: `1`,
            framerScrollSections: `{"Y1J_nvxfZ":{"pattern":":Y1J_nvxfZ","name":"case-studies"},"RhNFT819H":{"pattern":":RhNFT819H","name":"case-studies"},"KtXgRS5rW":{"pattern":":KtXgRS5rW","name":"case-studies"}}`,
            framerIntrinsicWidth: `1280`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Mn as __FramerMetadata__, jn as default, vn as queryParamNames };
//# sourceMappingURL=RNl3_Xbn0KwoMTtekcJeI_Bo2phftXNWM_g8XnMPpsM.CU417qoH.mjs.map
