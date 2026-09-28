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
  Et as ee,
  H as y,
  S as te,
  T as ne,
  Tt as re,
  V as b,
  gt as ie,
  i as ae,
  lt as oe,
  o as x,
  q as S,
  u as C,
  z as w,
} from "./framer.yAIV6S8_.mjs";
import { a as se, c as T, o as E, s as D } from "./shared-lib.D6-R8ZSj.mjs";
import { n as ce, t as O } from "./Video.CsxwoGXz.mjs";
function k(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var A,
  j,
  M,
  N,
  P,
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
  X = e(() => {
    (l(),
      S(),
      m(),
      n(),
      ce(),
      T(),
      (A = w(O)),
      (j = y(O)),
      (M = { tRkCL8UMM: { hover: !0 } }),
      (N = [`NGgdKHwEV`, `twjs7K9Uz`, `LAwbB4b1m`, `Qp22wHMxf`, `tRkCL8UMM`]),
      (P = `framer-KPT2p`),
      (F = {
        LAwbB4b1m: `framer-v-1dma8es`,
        NGgdKHwEV: `framer-v-9cv5wz`,
        Qp22wHMxf: `framer-v-1tue0i1`,
        tRkCL8UMM: `framer-v-itia0b`,
        twjs7K9Uz: `framer-v-yzfps0`,
      }),
      (I = { bounce: 0, delay: 0, duration: 0.7, type: `spring` }),
      (L = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase() === t.toLowerCase()
          : e === t),
      (R = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (z = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (B = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (V = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (H = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (U = {
        "16:9": `LAwbB4b1m`,
        "4:3": `twjs7K9Uz`,
        "9:16": `Qp22wHMxf`,
        "Fit the height": `NGgdKHwEV`,
        "Image - Lightbox": `tRkCL8UMM`,
      }),
      (W = d.create(i)),
      (G = { Image: `SMpBiPeS1`, Video: `aHFIrjR_v` }),
      (K = { Center: `center`, End: `flex-end`, Start: `flex-start` }),
      (q = ({
        backgroundColor: e,
        caption: t,
        captionAlign: n,
        file: r,
        height: i,
        id: a,
        image: o,
        radius: s,
        showBackground: c,
        showCaption: l,
        source: u,
        type: d,
        videoAutoPlay: f,
        videoControls: p,
        videoPoster: m,
        videoURL: h,
        width: g,
        ..._
      }) => ({
        ..._,
        anZoJEIFY: o ??
          _.anZoJEIFY ?? {
            pixelHeight: 1620,
            pixelWidth: 2160,
            src: `https://framerusercontent.com/images/HzwQQjTb7NqC58RjxAILkGp5tC8.jpg?width=2160&height=1620`,
            srcSet: `https://framerusercontent.com/images/HzwQQjTb7NqC58RjxAILkGp5tC8.jpg?scale-down-to=512&width=2160&height=1620 512w,https://framerusercontent.com/images/HzwQQjTb7NqC58RjxAILkGp5tC8.jpg?scale-down-to=1024&width=2160&height=1620 1024w,https://framerusercontent.com/images/HzwQQjTb7NqC58RjxAILkGp5tC8.jpg?scale-down-to=2048&width=2160&height=1620 2048w,https://framerusercontent.com/images/HzwQQjTb7NqC58RjxAILkGp5tC8.jpg?width=2160&height=1620 2160w`,
          },
        BCTDRzOub:
          h ??
          _.BCTDRzOub ??
          `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
        fKub8Am_x: c ?? _.fKub8Am_x ?? !0,
        FKuzhyxj7: f ?? _.FKuzhyxj7 ?? !0,
        G7yt3I0Bf: t ?? _.G7yt3I0Bf ?? `Drawing different concepts`,
        HDfBm4At6: r ?? _.HDfBm4At6,
        ivVZuJJNC: K[n] ?? n ?? _.ivVZuJJNC ?? `flex-start`,
        mED8caIc3: m ?? _.mED8caIc3,
        Pcq4pcgxq: u ?? _.Pcq4pcgxq,
        rHHfCo80M: s ?? _.rHHfCo80M ?? `0px`,
        TJ59E3smx:
          e ??
          _.TJ59E3smx ??
          `var(--token-a28f7f0c-c9e5-4bf0-b0db-e724b985a12f, rgb(240, 241, 243))`,
        variant: U[_.variant] ?? _.variant ?? `NGgdKHwEV`,
        xad4Xjhor: l ?? _.xad4Xjhor ?? !1,
        ZM3o8At_q: p ?? _.ZM3o8At_q ?? !1,
        zPsZKOrt6: G[d] ?? d ?? _.zPsZKOrt6 ?? `SMpBiPeS1`,
      })),
      (J = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = ee(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = ie(),
            m = oe(),
            {
              style: g,
              className: _,
              layoutId: v,
              variant: ee,
              zPsZKOrt6: y,
              anZoJEIFY: x,
              rHHfCo80M: S,
              Pcq4pcgxq: w,
              BCTDRzOub: T,
              FKuzhyxj7: E,
              mED8caIc3: D,
              HDfBm4At6: ce,
              ZM3o8At_q: A,
              xad4Xjhor: j,
              G7yt3I0Bf: U,
              TJ59E3smx: G,
              fKub8Am_x: K,
              ivVZuJJNC: Y,
              ...X
            } = q(e),
            {
              baseVariant: Z,
              classNames: le,
              clearLoadingGesture: ue,
              gestureHandlers: de,
              gestureVariant: Q,
              isLoading: fe,
              setGestureState: pe,
              setVariant: me,
              variants: he,
            } = re({
              cycleOrder: N,
              defaultVariant: `NGgdKHwEV`,
              enabledGestures: M,
              ref: o,
              variant: ee,
              variantClassNames: F,
            }),
            $ = J(e, he),
            ge = h(P, se),
            _e = L(y, `aHFIrjR_v`),
            ve = (e) => (Q === `tRkCL8UMM-hover` || Z === `tRkCL8UMM` ? !1 : e),
            ye = L(y, `SMpBiPeS1`),
            be = () => Q === `tRkCL8UMM-hover` || Z === `tRkCL8UMM`,
            xe = () => !(Q === `tRkCL8UMM-hover` || Z === `tRkCL8UMM`);
          return a(p, {
            id: v ?? s,
            children: a(W, {
              animate: he,
              initial: !1,
              children: a(H, {
                value: I,
                children: c(d.div, {
                  ...X,
                  ...de,
                  className: h(ge, `framer-9cv5wz`, _, le),
                  "data-framer-name": `Fit the height`,
                  layoutDependency: $,
                  layoutId: `NGgdKHwEV`,
                  ref: o,
                  style: { "--q99nl8": Y, opacity: 1, ...g },
                  variants: { "tRkCL8UMM-hover": { opacity: 0.8 } },
                  ...k(
                    {
                      "tRkCL8UMM-hover": { "data-framer-name": void 0 },
                      LAwbB4b1m: { "data-framer-name": `16:9` },
                      Qp22wHMxf: { "data-framer-name": `9:16` },
                      tRkCL8UMM: { "data-framer-name": `Image - Lightbox` },
                      twjs7K9Uz: { "data-framer-name": `4:3` },
                    },
                    Z,
                    Q
                  ),
                  children: [
                    ve(_e !== !1) &&
                      a(d.div, {
                        className: `framer-2r9std`,
                        "data-framer-name": `Video`,
                        layoutDependency: $,
                        layoutId: `se3sIyZ0r`,
                        style: {
                          borderBottomLeftRadius: R(S, 3),
                          borderBottomRightRadius: R(S, 2),
                          borderTopLeftRadius: R(S, 0),
                          borderTopRightRadius: R(S, 1),
                        },
                        children: a(ae, {
                          children: a(ne, {
                            className: `framer-1sm8yak-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: $,
                            layoutId: `TCS9G_8t5-container`,
                            nodeId: `TCS9G_8t5`,
                            rendersWithMotion: !0,
                            scopeId: `JrboWEA6q`,
                            children: a(O, {
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              borderRadius: 0,
                              bottomLeftRadius: 0,
                              bottomRightRadius: 0,
                              controls: A,
                              height: `100%`,
                              id: `TCS9G_8t5`,
                              isMixedBorderRadius: !1,
                              layoutId: `TCS9G_8t5`,
                              loop: !0,
                              muted: !0,
                              objectFit: `cover`,
                              playing: E,
                              poster: B(D),
                              posterEnabled: z(D),
                              srcFile: ce,
                              srcType: w,
                              srcUrl: T,
                              startTime: 0,
                              style: { width: `100%` },
                              topLeftRadius: 0,
                              topRightRadius: 0,
                              volume: 25,
                              width: `100%`,
                              ...k(
                                {
                                  LAwbB4b1m: { style: { height: `100%`, width: `100%` } },
                                  Qp22wHMxf: { style: { height: `100%`, width: `100%` } },
                                  twjs7K9Uz: { style: { height: `100%`, width: `100%` } },
                                },
                                Z,
                                Q
                              ),
                            }),
                          }),
                        }),
                      }),
                    ye !== !1 &&
                      c(d.div, {
                        className: `framer-zf4qai`,
                        "data-framer-name": `Image Container`,
                        layoutDependency: $,
                        layoutId: `xnMCm9LHS`,
                        style: {
                          borderBottomLeftRadius: R(S, 3),
                          borderBottomRightRadius: R(S, 2),
                          borderTopLeftRadius: R(S, 0),
                          borderTopRightRadius: R(S, 1),
                        },
                        children: [
                          K !== !1 &&
                            a(d.div, {
                              className: `framer-1bwzoze`,
                              "data-framer-name": `Background`,
                              layoutDependency: $,
                              layoutId: `w5k3E1Yp8`,
                              style: {
                                backgroundColor: G,
                                borderBottomLeftRadius: R(S, 3),
                                borderBottomRightRadius: R(S, 2),
                                borderTopLeftRadius: R(S, 0),
                                borderTopRightRadius: R(S, 1),
                              },
                            }),
                          be() &&
                            a(C, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                pixelHeight: 1620,
                                pixelWidth: 2160,
                                ...V(x),
                                positionX: `center`,
                                positionY: `center`,
                              },
                              className: `framer-9xf9wi`,
                              "data-framer-name": `Lightbox`,
                              fitImageDimension: `height`,
                              id: `${v}-9xf9wi`,
                              layoutDependency: $,
                              layoutId: `jaWEBL02S`,
                              lightbox: {
                                backdrop: `rgba(0, 0, 0, 0.8)`,
                                maxWidth: 1800,
                                padding: 20,
                                transition: I,
                                zIndex: 10,
                              },
                              lightboxClassName: ge,
                              style: {
                                borderBottomLeftRadius: R(S, 3),
                                borderBottomRightRadius: R(S, 2),
                                borderTopLeftRadius: R(S, 0),
                                borderTopRightRadius: R(S, 1),
                                scale: 1,
                              },
                              variants: { "tRkCL8UMM-hover": { scale: 1.02 } },
                              ...k(
                                {
                                  tRkCL8UMM: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: b(
                                        (m?.y || 0) +
                                          0 +
                                          (((m?.height || 200) - 0 - -8) / 2 + 0 + 0) +
                                          0 +
                                          0
                                      ),
                                      pixelHeight: 1620,
                                      pixelWidth: 2160,
                                      sizes: m?.width || `100vw`,
                                      ...V(x),
                                      positionX: `center`,
                                      positionY: `center`,
                                    },
                                  },
                                },
                                Z,
                                Q
                              ),
                            }),
                          xe() &&
                            a(C, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: b(
                                  (m?.y || 0) +
                                    0 +
                                    (((m?.height || 518) - 0 - -8) / 2 + 0 + 0) +
                                    0 +
                                    0
                                ),
                                pixelHeight: 1620,
                                pixelWidth: 2160,
                                sizes: m?.width || `100vw`,
                                ...V(x),
                                positionX: `center`,
                                positionY: `center`,
                              },
                              className: `framer-cgue1w`,
                              "data-framer-name": `Image`,
                              fitImageDimension: `height`,
                              layoutDependency: $,
                              layoutId: `oYyqwo0lC`,
                              style: {
                                borderBottomLeftRadius: R(S, 3),
                                borderBottomRightRadius: R(S, 2),
                                borderTopLeftRadius: R(S, 0),
                                borderTopRightRadius: R(S, 1),
                              },
                              ...k(
                                {
                                  LAwbB4b1m: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: b(
                                        (m?.y || 0) +
                                          0 +
                                          (((m?.height || 396) - 0 - -8) / 2 + 0 + 0) +
                                          0 +
                                          0
                                      ),
                                      pixelHeight: 1620,
                                      pixelWidth: 2160,
                                      sizes: m?.width || `100vw`,
                                      ...V(x),
                                      positionX: `center`,
                                      positionY: `center`,
                                    },
                                    fitImageDimension: void 0,
                                  },
                                  Qp22wHMxf: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: b(
                                        (m?.y || 0) +
                                          0 +
                                          (((m?.height || 200) - 0 - -8) / 2 + 0 + 0) +
                                          0 +
                                          0
                                      ),
                                      pixelHeight: 1620,
                                      pixelWidth: 2160,
                                      sizes: m?.width || `100vw`,
                                      ...V(x),
                                      positionX: `center`,
                                      positionY: `center`,
                                    },
                                    fitImageDimension: void 0,
                                  },
                                  twjs7K9Uz: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: b(
                                        (m?.y || 0) +
                                          0 +
                                          (((m?.height || 516) - 0 - -5) / 2 + 0 + 0) +
                                          0 +
                                          0
                                      ),
                                      pixelHeight: 1620,
                                      pixelWidth: 2160,
                                      sizes: m?.width || `100vw`,
                                      ...V(x),
                                      positionX: `center`,
                                      positionY: `center`,
                                    },
                                    fitImageDimension: void 0,
                                  },
                                },
                                Z,
                                Q
                              ),
                            }),
                        ],
                      }),
                    j !== !1 &&
                      a(te, {
                        __fromCanvasComponent: !0,
                        children: a(i, {
                          children: a(d.p, {
                            className: `framer-styles-preset-29mx3t`,
                            "data-styles-preset": `KSv8TCPWH`,
                            dir: `auto`,
                            children: `Drawing different concepts`,
                          }),
                        }),
                        className: `framer-1a291jv`,
                        "data-framer-name": `Caption`,
                        fonts: [`Inter`],
                        layoutDependency: $,
                        layoutId: `vVifQV_fd`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: U,
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
          `.framer-KPT2p.framer-1ozegr8, .framer-KPT2p .framer-1ozegr8 { display: block; }`,
          `.framer-KPT2p.framer-9cv5wz { align-content: var(--q99nl8); align-items: var(--q99nl8); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 690px; }`,
          `.framer-KPT2p .framer-2r9std { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-KPT2p .framer-1sm8yak-container { flex: 1 0 0px; height: auto; pointer-events: none; position: relative; width: 1px; z-index: 1; }`,
          `.framer-KPT2p .framer-zf4qai { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-KPT2p .framer-1bwzoze { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
          `.framer-KPT2p .framer-9xf9wi, .framer-KPT2p .framer-cgue1w { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-KPT2p .framer-1a291jv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-KPT2p.framer-v-yzfps0.framer-9cv5wz { gap: 5px; width: 688px; }`,
          `.framer-KPT2p.framer-v-yzfps0 .framer-1sm8yak-container, .framer-KPT2p.framer-v-yzfps0 .framer-cgue1w { aspect-ratio: 1.3333333333333333 / 1; }`,
          `.framer-KPT2p.framer-v-1dma8es.framer-9cv5wz { width: 704px; }`,
          `.framer-KPT2p.framer-v-1dma8es .framer-2r9std { align-content: center; align-items: center; justify-content: flex-start; }`,
          `.framer-KPT2p.framer-v-1dma8es .framer-1sm8yak-container, .framer-KPT2p.framer-v-1dma8es .framer-cgue1w { aspect-ratio: 1.7777777777777777 / 1; }`,
          `.framer-KPT2p.framer-v-1tue0i1.framer-9cv5wz { width: 693px; }`,
          `.framer-KPT2p.framer-v-1tue0i1 .framer-1sm8yak-container, .framer-KPT2p.framer-v-1tue0i1 .framer-cgue1w { aspect-ratio: 0.5625 / 1; }`,
          `.framer-KPT2p.framer-v-itia0b.framer-9cv5wz { cursor: pointer; }`,
          ...E,
        ],
        `framer-KPT2p`
      )),
      (Y.displayName = `Image & Video Container`),
      (Y.defaultProps = { height: 518, width: 690 }),
      _(Y, {
        variant: {
          options: [`NGgdKHwEV`, `twjs7K9Uz`, `LAwbB4b1m`, `Qp22wHMxf`, `tRkCL8UMM`],
          optionTitles: [`Fit the height`, `4:3`, `16:9`, `9:16`, `Image - Lightbox`],
          title: `Variant`,
          type: x.Enum,
        },
        zPsZKOrt6: {
          defaultValue: `SMpBiPeS1`,
          options: [`SMpBiPeS1`, `aHFIrjR_v`],
          optionTitles: [`Image`, `Video`],
          title: `Type`,
          type: x.Enum,
        },
        onzPsZKOrt6Change: { changes: `zPsZKOrt6`, type: x.ChangeHandler },
        anZoJEIFY: {
          __defaultAssetReference: `data:framer/asset-reference,HzwQQjTb7NqC58RjxAILkGp5tC8.jpg?originalFilename=NDA+Dashboard.jpg&width=2160&height=1620`,
          description: ``,
          title: `Image`,
          type: x.ResponsiveImage,
        },
        rHHfCo80M: {
          defaultValue: `0px`,
          description: `↓ The following controls are for the video`,
          title: `Radius`,
          type: x.BorderRadius,
        },
        Pcq4pcgxq: j?.srcType && {
          ...j.srcType,
          description: ``,
          hidden: void 0,
          optional: void 0,
          title: `Source`,
        },
        onPcq4pcgxqChange: { changes: `Pcq4pcgxq`, type: x.ChangeHandler },
        BCTDRzOub: {
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          displayTextArea: !0,
          title: `Video URL`,
          type: x.String,
        },
        onBCTDRzOubChange: { changes: `BCTDRzOub`, type: x.ChangeHandler },
        FKuzhyxj7: { defaultValue: !0, title: `Video Auto Play`, type: x.Boolean },
        onFKuzhyxj7Change: { changes: `FKuzhyxj7`, type: x.ChangeHandler },
        mED8caIc3: { title: `Video poster`, type: x.ResponsiveImage },
        HDfBm4At6: j?.srcFile && {
          ...j.srcFile,
          __defaultAssetReference: ``,
          description: void 0,
          hidden: void 0,
          title: `File`,
        },
        onHDfBm4At6Change: { changes: `HDfBm4At6`, type: x.ChangeHandler },
        ZM3o8At_q: { defaultValue: !1, title: `Video Controls`, type: x.Boolean },
        onZM3o8At_qChange: { changes: `ZM3o8At_q`, type: x.ChangeHandler },
        xad4Xjhor: { defaultValue: !1, title: `Show caption`, type: x.Boolean },
        onxad4XjhorChange: { changes: `xad4Xjhor`, type: x.ChangeHandler },
        G7yt3I0Bf: {
          defaultValue: `Drawing different concepts`,
          displayTextArea: !0,
          title: `Caption`,
          type: x.String,
        },
        onG7yt3I0BfChange: { changes: `G7yt3I0Bf`, type: x.ChangeHandler },
        TJ59E3smx: {
          defaultValue: `var(--token-a28f7f0c-c9e5-4bf0-b0db-e724b985a12f, rgb(240, 241, 243)) /* {"name":"Grey"} */`,
          title: `Background Color`,
          type: x.Color,
        },
        fKub8Am_x: { defaultValue: !0, title: `Show Background`, type: x.Boolean },
        onfKub8Am_xChange: { changes: `fKub8Am_x`, type: x.ChangeHandler },
        ivVZuJJNC: {
          defaultValue: `flex-start`,
          options: [`flex-start`, `center`, `flex-end`],
          optionTitles: [`Start`, `Center`, `End`],
          title: `Caption Align`,
          type: x.Enum,
        },
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
          ...A,
          ...g(D),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { X as n, Y as t };
//# sourceMappingURL=JrboWEA6q.BzEVjYMw.mjs.map
