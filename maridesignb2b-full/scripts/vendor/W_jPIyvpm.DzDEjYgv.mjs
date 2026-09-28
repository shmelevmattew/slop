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
  o as ee,
  v as u,
} from "./react.D20wc1Tc.mjs";
import { C as d, a as f, r as te, t as p } from "./motion.CkcImXlK.mjs";
import {
  A as m,
  B as h,
  D as g,
  E as _,
  Et as ne,
  H as v,
  N as re,
  S as ie,
  T as ae,
  Tt as oe,
  gt as se,
  i as ce,
  jt as le,
  kt as y,
  lt as ue,
  nt as b,
  o as x,
  p as de,
  q as S,
  z as C,
} from "./framer.yAIV6S8_.mjs";
import { a as fe, c as w, o as T, s as E } from "./shared-lib.D6-R8ZSj.mjs";
import { n as D, t as O } from "./Video.CsxwoGXz.mjs";
import { n as k, t as A } from "./JrboWEA6q.BzEVjYMw.mjs";
function j(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var M,
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
  pe,
  me,
  K,
  he,
  q,
  J,
  Y,
  ge,
  X,
  Z,
  _e = e(() => {
    (ee(),
      S(),
      p(),
      n(),
      D(),
      w(),
      k(),
      (M = C(A)),
      (N = le(y(d.div))),
      (P = v(O)),
      (F = v(A)),
      (I = { jv_VwLTRK: { hover: !0 }, Pd8lfntvN: { hover: !0 } }),
      (L = [`jv_VwLTRK`, `XSXNvVxYG`, `Pd8lfntvN`, `F12tDFvjj`, `CtJOxurEY`]),
      (R = `framer-9KRR0`),
      (z = {
        CtJOxurEY: `framer-v-zwq7xc`,
        F12tDFvjj: `framer-v-eue0ox`,
        jv_VwLTRK: `framer-v-1waqp66`,
        Pd8lfntvN: `framer-v-10t4z9g`,
        XSXNvVxYG: `framer-v-ez2rhg`,
      }),
      (B = { bounce: 0, delay: 0, duration: 0.7, type: `spring` }),
      (V = (e, t) => {
        switch (e) {
          case `bixDZYnZR`:
            return `NGgdKHwEV`;
          case `dSWTlqu_k`:
            return `twjs7K9Uz`;
          case `UH7GJNzf8`:
            return `LAwbB4b1m`;
          case `kgrDLqCSH`:
            return `Qp22wHMxf`;
          default:
            return `NGgdKHwEV`;
        }
      }),
      (H = (e, t) => {
        switch (e) {
          case `gA3EhiVzV`:
            return `SMpBiPeS1`;
          case `ZH3MCZaaW`:
            return `aHFIrjR_v`;
          default:
            return `SMpBiPeS1`;
        }
      }),
      (U = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (W = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (G = {
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
      (pe = {
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
      (me = ({ value: e, children: n }) => {
        let r = c(f),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: a, children: n });
      }),
      (K = {
        "Next Mobile": `F12tDFvjj`,
        Desktop: `jv_VwLTRK`,
        Mobile: `XSXNvVxYG`,
        Next: `Pd8lfntvN`,
        Variant: `CtJOxurEY`,
      }),
      (he = d.create(i)),
      (q = { Image: `gA3EhiVzV`, Video: `ZH3MCZaaW` }),
      (J = { "16:9": `UH7GJNzf8`, "4:3": `dSWTlqu_k`, "9:16": `kgrDLqCSH`, Fit: `bixDZYnZR` }),
      (Y = (e, t) => {
        let [n, r] = a(e),
          [i, o] = a(e);
        return t ? [e, t] : (e !== i && (r(e), o(e)), [n, r]);
      }),
      (ge = ({
        assetType: e,
        file: t,
        height: n,
        id: r,
        image: i,
        link: a,
        ratio: o,
        title: s,
        videoAutoPlay: c,
        videoPoster: l,
        videoSource: ee,
        videoURL: u,
        width: d,
        ...f
      }) => ({
        ...f,
        BO2ml1MO7: s ?? f.BO2ml1MO7 ?? `Project Name`,
        EM503Yyv8: ee ?? f.EM503Yyv8 ?? `URL`,
        FMKdf5_kR: q[e] ?? e ?? f.FMKdf5_kR ?? `gA3EhiVzV`,
        HIBDyQS9z: i ??
          f.HIBDyQS9z ?? {
            pixelHeight: 1620,
            pixelWidth: 2160,
            src: `https://framerusercontent.com/images/EqT1LhOLoaeWNzP5sgkly90t3iY.jpg?width=2160&height=1620`,
            srcSet: `https://framerusercontent.com/images/EqT1LhOLoaeWNzP5sgkly90t3iY.jpg?scale-down-to=512&width=2160&height=1620 512w,https://framerusercontent.com/images/EqT1LhOLoaeWNzP5sgkly90t3iY.jpg?scale-down-to=1024&width=2160&height=1620 1024w,https://framerusercontent.com/images/EqT1LhOLoaeWNzP5sgkly90t3iY.jpg?scale-down-to=2048&width=2160&height=1620 2048w,https://framerusercontent.com/images/EqT1LhOLoaeWNzP5sgkly90t3iY.jpg?width=2160&height=1620 2160w`,
          },
        i5krWJACu: J[o] ?? o ?? f.i5krWJACu ?? `bixDZYnZR`,
        srWwkEYZP: l ?? f.srWwkEYZP,
        tWDXQOFMp:
          u ??
          f.tWDXQOFMp ??
          `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
        u4PXkUzEY: t ?? f.u4PXkUzEY,
        variant: K[f.variant] ?? f.variant ?? `jv_VwLTRK`,
        Xtp3eZS3y: c ?? f.Xtp3eZS3y ?? !1,
        z_qPDXah7: a ?? f.z_qPDXah7,
      })),
      (X = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = ne(
        s(function (e, t) {
          let n = r(null),
            a = t ?? n,
            s = u(),
            { activeLocale: c, setLocale: ee } = se(),
            f = ue(),
            {
              style: p,
              className: h,
              layoutId: g,
              variant: _,
              FMKdf5_kR: ne,
              i5krWJACu: v,
              HIBDyQS9z: re,
              EM503Yyv8: le,
              onEM503Yyv8Change: y,
              tWDXQOFMp: b,
              ontWDXQOFMpChange: x,
              BO2ml1MO7: S,
              z_qPDXah7: C,
              Xtp3eZS3y: w,
              onXtp3eZS3yChange: T,
              srWwkEYZP: E,
              u4PXkUzEY: D,
              ...O
            } = ge(e),
            [k, M] = Y(le, y),
            [P, F] = Y(b, x),
            [K, q] = Y(w, T),
            {
              baseVariant: J,
              classNames: Z,
              clearLoadingGesture: _e,
              gestureHandlers: ve,
              gestureVariant: Q,
              isLoading: ye,
              setGestureState: be,
              setVariant: xe,
              variants: Se,
            } = oe({
              cycleOrder: L,
              defaultVariant: `jv_VwLTRK`,
              enabledGestures: I,
              ref: a,
              variant: _,
              variantClassNames: z,
            }),
            $ = X(e, Se),
            Ce = m(R, fe),
            we = () => !![`jv_VwLTRK-hover`, `Pd8lfntvN-hover`].includes(Q);
          return o(te, {
            id: g ?? s,
            children: o(he, {
              animate: Se,
              initial: !1,
              children: o(me, {
                value: B,
                children: o(de, {
                  href: C,
                  motionChild: !0,
                  nodeId: `jv_VwLTRK`,
                  openInNewTab: !1,
                  scopeId: `W_jPIyvpm`,
                  children: l(d.a, {
                    ...O,
                    ...ve,
                    className: `${m(Ce, `framer-1waqp66`, h, Z)} framer-5n9h0u`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: $,
                    layoutId: `jv_VwLTRK`,
                    ref: a,
                    style: { ...p },
                    ...j(
                      {
                        "jv_VwLTRK-hover": { "data-framer-name": void 0 },
                        "Pd8lfntvN-hover": { "data-framer-name": void 0 },
                        CtJOxurEY: { "data-framer-name": void 0 },
                        F12tDFvjj: { "data-framer-name": `Next Mobile` },
                        Pd8lfntvN: { "data-framer-name": `Next` },
                        XSXNvVxYG: { "data-framer-name": `Mobile` },
                      },
                      J,
                      Q
                    ),
                    children: [
                      o(d.div, {
                        className: `framer-18ut0r5`,
                        "data-framer-name": `Container`,
                        layoutDependency: $,
                        layoutId: `rjCb8clPA`,
                        style: {
                          borderBottomLeftRadius: 8,
                          borderBottomRightRadius: 8,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        },
                        children: o(ce, {
                          height: 518,
                          width: f?.width || `100vw`,
                          children: o(ae, {
                            className: `framer-1fbus7o-container`,
                            "data-framer-name": `Image or video`,
                            layoutDependency: $,
                            layoutId: `XWVNYcwbr-container`,
                            name: `Image or video`,
                            nodeId: `XWVNYcwbr`,
                            rendersWithMotion: !0,
                            scopeId: `W_jPIyvpm`,
                            style: { scale: 1 },
                            variants: {
                              "jv_VwLTRK-hover": { scale: 1.02 },
                              "Pd8lfntvN-hover": { scale: 1 },
                            },
                            children: o(A, {
                              anZoJEIFY: U(re),
                              BCTDRzOub: P,
                              fKub8Am_x: !0,
                              FKuzhyxj7: K,
                              G7yt3I0Bf: `Drawing different concepts`,
                              HDfBm4At6: D,
                              height: `100%`,
                              id: `XWVNYcwbr`,
                              ivVZuJJNC: `flex-start`,
                              layoutId: `XWVNYcwbr`,
                              mED8caIc3: U(E),
                              name: `Image or video`,
                              onBCTDRzOubChange: F,
                              onFKuzhyxj7Change: q,
                              onPcq4pcgxqChange: M,
                              Pcq4pcgxq: k,
                              rHHfCo80M: `8px`,
                              style: { width: `100%` },
                              TJ59E3smx: `var(--token-a28f7f0c-c9e5-4bf0-b0db-e724b985a12f, rgb(240, 241, 243))`,
                              variant: W(V(v, c)),
                              width: `100%`,
                              xad4Xjhor: !1,
                              ZM3o8At_q: !1,
                              zPsZKOrt6: H(ne, c),
                              ...j({ "jv_VwLTRK-hover": { FKuzhyxj7: !0 } }, J, Q),
                            }),
                          }),
                        }),
                      }),
                      o(d.div, {
                        className: `framer-1rqurht`,
                        layoutDependency: $,
                        layoutId: `Kn71ACmV_`,
                        children: l(d.div, {
                          className: `framer-1b7jxfl`,
                          "data-framer-name": `Tags`,
                          layoutDependency: $,
                          layoutId: `s7I6YMZPz`,
                          style: {
                            backdropFilter: `blur(10px)`,
                            WebkitBackdropFilter: `blur(10px)`,
                          },
                          children: [
                            we() &&
                              o(d.div, {
                                className: `framer-1eoxhqx`,
                                "data-framer-name": `icon`,
                                layoutDependency: $,
                                layoutId: `Myw30XkC8`,
                                style: { filter: `blur(5px)`, WebkitFilter: `blur(5px)` },
                                variants: {
                                  "jv_VwLTRK-hover": {
                                    filter: `blur(0px)`,
                                    WebkitFilter: `blur(0px)`,
                                  },
                                  "Pd8lfntvN-hover": {
                                    filter: `blur(0px)`,
                                    WebkitFilter: `blur(0px)`,
                                  },
                                },
                                children: o(N, {
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  animate: G,
                                  className: `framer-dgki1r`,
                                  "data-framer-appear-id": `dgki1r`,
                                  initial: pe,
                                  layoutDependency: $,
                                  layoutId: `rj8plEKDh`,
                                  optimized: !0,
                                  style: {
                                    backgroundColor: `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                                    borderBottomLeftRadius: 47,
                                    borderBottomRightRadius: 47,
                                    borderTopLeftRadius: 47,
                                    borderTopRightRadius: 47,
                                  },
                                }),
                              }),
                            o(ie, {
                              __fromCanvasComponent: !0,
                              children: o(i, {
                                children: o(d.p, {
                                  className: `framer-styles-preset-29mx3t`,
                                  "data-styles-preset": `KSv8TCPWH`,
                                  dir: `auto`,
                                  children: `Project Name`,
                                }),
                              }),
                              className: `framer-1ong0g0`,
                              fonts: [`Inter`],
                              layoutDependency: $,
                              layoutId: `vi_q9y0GN`,
                              text: S,
                              variants: {
                                "jv_VwLTRK-hover": {
                                  "--extracted-r6o4lv": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                                },
                                "Pd8lfntvN-hover": {
                                  "--extracted-r6o4lv": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...j(
                                {
                                  "jv_VwLTRK-hover": {
                                    children: o(i, {
                                      children: o(d.p, {
                                        className: `framer-styles-preset-29mx3t`,
                                        "data-styles-preset": `KSv8TCPWH`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31)))`,
                                        },
                                        children: `Project Name`,
                                      }),
                                    }),
                                  },
                                  "Pd8lfntvN-hover": {
                                    children: o(i, {
                                      children: o(d.p, {
                                        className: `framer-styles-preset-29mx3t`,
                                        "data-styles-preset": `KSv8TCPWH`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31)))`,
                                        },
                                        children: `Project Name`,
                                      }),
                                    }),
                                  },
                                },
                                J,
                                Q
                              ),
                            }),
                          ],
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
          `.framer-9KRR0.framer-5n9h0u, .framer-9KRR0 .framer-5n9h0u { display: block; }`,
          `.framer-9KRR0.framer-1waqp66 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 658px; }`,
          `.framer-9KRR0 .framer-18ut0r5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-9KRR0 .framer-1fbus7o-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-9KRR0 .framer-1rqurht { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 16px 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-9KRR0 .framer-1b7jxfl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; z-index: 2; }`,
          `.framer-9KRR0 .framer-1eoxhqx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 5px; position: relative; width: min-content; z-index: 1; }`,
          `.framer-9KRR0 .framer-dgki1r { flex: none; height: 4px; overflow: visible; position: relative; width: 7px; }`,
          `.framer-9KRR0 .framer-1ong0g0 { -webkit-user-select: none; flex: 1 0 0px; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-9KRR0.framer-v-10t4z9g.framer-1waqp66, .framer-9KRR0.framer-v-eue0ox.framer-1waqp66 { gap: 6px; width: 312px; }`,
          `.framer-9KRR0.framer-v-10t4z9g .framer-1rqurht, .framer-9KRR0.framer-v-eue0ox .framer-1rqurht { padding: 0px 0px 0px 8px; }`,
          `.framer-9KRR0.framer-v-1waqp66.hover .framer-1eoxhqx { order: 0; }`,
          `.framer-9KRR0.framer-v-1waqp66.hover .framer-1ong0g0 { order: 1; }`,
          ...T,
        ],
        `framer-9KRR0`
      )),
      (Z.displayName = `Case Study Card`),
      (Z.defaultProps = { height: 523, width: 658 }),
      g(Z, {
        variant: {
          options: [`jv_VwLTRK`, `XSXNvVxYG`, `Pd8lfntvN`, `F12tDFvjj`, `CtJOxurEY`],
          optionTitles: [`Desktop`, `Mobile`, `Next`, `Next Mobile`, `Variant`],
          title: `Variant`,
          type: x.Enum,
        },
        FMKdf5_kR: {
          defaultValue: `gA3EhiVzV`,
          options: [`gA3EhiVzV`, `ZH3MCZaaW`],
          optionTitles: [`Image`, `Video`],
          title: `Asset Type`,
          type: x.Enum,
        },
        onFMKdf5_kRChange: { changes: `FMKdf5_kR`, type: x.ChangeHandler },
        i5krWJACu: {
          defaultValue: `bixDZYnZR`,
          description: ``,
          options: [`bixDZYnZR`, `dSWTlqu_k`, `UH7GJNzf8`, `kgrDLqCSH`],
          optionTitles: [`Fit`, `4:3`, `16:9`, `9:16`],
          title: `Ratio`,
          type: x.Enum,
        },
        oni5krWJACuChange: { changes: `i5krWJACu`, type: x.ChangeHandler },
        HIBDyQS9z: {
          __defaultAssetReference: `data:framer/asset-reference,EqT1LhOLoaeWNzP5sgkly90t3iY.jpg?originalFilename=50.jpg&width=2160&height=1620`,
          title: `Image`,
          type: x.ResponsiveImage,
        },
        EM503Yyv8: P?.srcType && {
          ...P.srcType,
          defaultValue: `URL`,
          description: `I recommend uploading videos to a service like [Cloudinary](https://cloudinary.com) to save bandwidth
`,
          hidden: void 0,
          optional: void 0,
          title: `Video source`,
        },
        onEM503Yyv8Change: { changes: `EM503Yyv8`, type: x.ChangeHandler },
        tWDXQOFMp: {
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          description: ``,
          displayTextArea: !0,
          title: `Video URL`,
          type: x.String,
        },
        ontWDXQOFMpChange: { changes: `tWDXQOFMp`, type: x.ChangeHandler },
        BO2ml1MO7: {
          defaultValue: `Project Name`,
          displayTextArea: !0,
          title: `Title`,
          type: x.String,
        },
        onBO2ml1MO7Change: { changes: `BO2ml1MO7`, type: x.ChangeHandler },
        z_qPDXah7: { title: `Link`, type: x.Link },
        Xtp3eZS3y: { defaultValue: !1, title: `Video Auto Play`, type: x.Boolean },
        onXtp3eZS3yChange: { changes: `Xtp3eZS3y`, type: x.ChangeHandler },
        srWwkEYZP: {
          description: `Thumbnail before your video loads`,
          title: `Video poster`,
          type: x.ResponsiveImage,
        },
        u4PXkUzEY: F?.HDfBm4At6 && {
          ...F.HDfBm4At6,
          __defaultAssetReference: ``,
          description: void 0,
          hidden: void 0,
          title: `File`,
        },
        onu4PXkUzEYChange: { changes: `u4PXkUzEY`, type: x.ChangeHandler },
      }),
      _(
        Z,
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
          ...M,
          ...h(E),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Z.loader = { load: (e, t) => b([() => re(A, {}, t)], t) }));
  });
export { _e as n, Z as t };
//# sourceMappingURL=W_jPIyvpm.DzDEjYgv.mjs.map
