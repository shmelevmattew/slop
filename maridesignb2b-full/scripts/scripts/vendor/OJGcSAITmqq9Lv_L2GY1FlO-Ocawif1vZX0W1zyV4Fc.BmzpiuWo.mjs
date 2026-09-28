import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  I as i,
  N as a,
  P as o,
  R as s,
  c,
  f as l,
  g as u,
  k as d,
  l as f,
  o as p,
  s as m,
  u as h,
  v as ee,
} from "./react.D20wc1Tc.mjs";
import { C as g, a as _, r as te, t as v } from "./motion.CkcImXlK.mjs";
import {
  A as y,
  B as ne,
  D as re,
  E as ie,
  Et as b,
  H as ae,
  N as x,
  Ot as oe,
  Pt as S,
  S as se,
  St as ce,
  T as le,
  Tt as ue,
  _ as de,
  a as fe,
  bt as pe,
  c as me,
  et as he,
  ft as ge,
  gt as _e,
  ht as ve,
  i as ye,
  jt as be,
  kt as xe,
  lt as Se,
  n as Ce,
  nt as C,
  o as w,
  p as we,
  pt as Te,
  q as T,
  r as E,
  t as Ee,
  v as De,
  vt as Oe,
  x as ke,
  xt as D,
  y as Ae,
  z as O,
} from "./framer.yAIV6S8_.mjs";
import { n as je, t as Me } from "./CSLyxpoHo.DIIkscYW.mjs";
import { a as Ne, c as Pe, i as Fe, o as Ie, r as Le, s as Re } from "./shared-lib.D6-R8ZSj.mjs";
import { i as ze, n as Be, r as Ve, t as He } from "./oELRBbrwg.Cj1IsSem.mjs";
import { n as Ue, t as We } from "./Video.CsxwoGXz.mjs";
import { n as Ge, t as k } from "./JrboWEA6q.BzEVjYMw.mjs";
import Ke, { t as qe } from "./9aXveMmx4jqB2tzgRoT9TWORUzUKpFre_lvcYU5ekRg.DeeYBbgl.mjs";
function Je(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ye,
  Xe,
  Ze,
  A,
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
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  j,
  ht,
  gt,
  M,
  _t = e(() => {
    (p(),
      T(),
      v(),
      n(),
      je(),
      Ue(),
      Pe(),
      Ge(),
      (Ye = O(k)),
      (Xe = O(Me)),
      (Ze = be(xe(Me))),
      (A = ae(k)),
      (Qe = ae(We)),
      ($e = { ZUsF_PjwN: { hover: !0 } }),
      (et = [`ZUsF_PjwN`, `TkvFnfxAC`, `TvbUoyejI`]),
      (tt = `framer-TPiiK`),
      (nt = {
        TkvFnfxAC: `framer-v-1m6duaj`,
        TvbUoyejI: `framer-v-afhmp7`,
        ZUsF_PjwN: `framer-v-2ojrom`,
      }),
      (rt = { bounce: 0, delay: 0, duration: 0.7, type: `spring` }),
      (it = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase() === t.toLowerCase()
          : e === t),
      (at = (e, t) => (e ? `SMpBiPeS1` : `aHFIrjR_v`)),
      (ot = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (st = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ct = {
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
      (lt = {
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
      (ut = ({ value: e, children: n }) => {
        let r = d(_),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(_.Provider, { value: a, children: n });
      }),
      (dt = { "Mob. - link": `TvbUoyejI`, "With link": `ZUsF_PjwN`, "Without link": `TkvFnfxAC` }),
      (ft = g.create(a)),
      (pt = { Image: `gA3EhiVzV`, Video: `ZH3MCZaaW` }),
      (mt = {
        "16:9": `LAwbB4b1m`,
        "4:3": `twjs7K9Uz`,
        "9:16": `Qp22wHMxf`,
        "Fit the height": `NGgdKHwEV`,
        "Image - Lightbox": `tRkCL8UMM`,
      }),
      (j = (e, t) => {
        let [n, r] = o(e),
          [i, a] = o(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (ht = ({
        assetType: e,
        autoPlay: t,
        file: n,
        height: r,
        id: i,
        image: a,
        label: o,
        link: s,
        ratio: c,
        showLabel: l,
        videoPoster: u,
        videoSource: d,
        videoURL: f,
        width: p,
        ...m
      }) => ({
        ...m,
        BO2ml1MO7: o ?? m.BO2ml1MO7 ?? `Project Name`,
        Cma_YYNdS: l ?? m.Cma_YYNdS ?? !0,
        EM503Yyv8: d ?? m.EM503Yyv8 ?? `URL`,
        FMKdf5_kR: pt[e] ?? e ?? m.FMKdf5_kR ?? `gA3EhiVzV`,
        HIBDyQS9z: a ??
          m.HIBDyQS9z ?? {
            pixelHeight: 2400,
            pixelWidth: 1808,
            src: `https://framerusercontent.com/images/FKu567Ema7PMMKT3JYd9fKrZM.png?width=1808&height=2400`,
            srcSet: `https://framerusercontent.com/images/FKu567Ema7PMMKT3JYd9fKrZM.png?scale-down-to=1024&width=1808&height=2400 771w,https://framerusercontent.com/images/FKu567Ema7PMMKT3JYd9fKrZM.png?scale-down-to=2048&width=1808&height=2400 1542w,https://framerusercontent.com/images/FKu567Ema7PMMKT3JYd9fKrZM.png?width=1808&height=2400 1808w`,
          },
        PV5txtlVj: n ?? m.PV5txtlVj,
        S2zlK9hsc: mt[c] ?? c ?? m.S2zlK9hsc ?? `twjs7K9Uz`,
        srWwkEYZP: u ?? m.srWwkEYZP,
        tWDXQOFMp:
          f ??
          m.tWDXQOFMp ??
          `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
        variant: dt[m.variant] ?? m.variant ?? `ZUsF_PjwN`,
        Xtp3eZS3y: t ?? m.Xtp3eZS3y ?? !0,
        z_qPDXah7: s ?? m.z_qPDXah7,
      })),
      (gt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (M = b(
        u(function (e, t) {
          let n = r(null),
            i = t ?? n,
            o = ee(),
            { activeLocale: s, setLocale: l } = _e(),
            u = Se(),
            {
              style: d,
              className: p,
              layoutId: m,
              variant: h,
              FMKdf5_kR: _,
              S2zlK9hsc: v,
              HIBDyQS9z: ne,
              EM503Yyv8: re,
              onEM503Yyv8Change: ie,
              tWDXQOFMp: b,
              ontWDXQOFMpChange: ae,
              PV5txtlVj: x,
              Cma_YYNdS: oe,
              BO2ml1MO7: S,
              z_qPDXah7: ce,
              Xtp3eZS3y: de,
              onXtp3eZS3yChange: fe,
              srWwkEYZP: pe,
              ...me
            } = ht(e),
            [he, ge] = j(re, ie),
            [ve, be] = j(b, ae),
            [xe, Ce] = j(de, fe),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: Te,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: Ee,
              setGestureState: De,
              setVariant: Oe,
              variants: ke,
            } = ue({
              cycleOrder: et,
              defaultVariant: `ZUsF_PjwN`,
              enabledGestures: $e,
              ref: i,
              variant: h,
              variantClassNames: nt,
            }),
            D = gt(e, ke),
            Ae = y(tt, Ne),
            O = () => E === `ZUsF_PjwN-hover` || C === `TvbUoyejI`;
          return c(te, {
            id: m ?? o,
            children: c(ft, {
              animate: ke,
              initial: !1,
              children: c(ut, {
                value: rt,
                children: c(we, {
                  href: ce,
                  motionChild: !0,
                  nodeId: `ZUsF_PjwN`,
                  openInNewTab: !0,
                  scopeId: `CHbAYxGNm`,
                  ...Je({ TkvFnfxAC: { href: void 0 } }, C, E),
                  children: f(g.a, {
                    ...me,
                    ...T,
                    className: `${y(Ae, `framer-2ojrom`, p, w)} framer-t1tp3d`,
                    "data-framer-name": `With link`,
                    layoutDependency: D,
                    layoutId: `ZUsF_PjwN`,
                    ref: i,
                    style: { ...d },
                    ...Je(
                      {
                        "ZUsF_PjwN-hover": { "data-framer-name": void 0 },
                        TkvFnfxAC: { "data-framer-name": `Without link` },
                        TvbUoyejI: { "data-framer-name": `Mob. - link` },
                      },
                      C,
                      E
                    ),
                    children: [
                      c(g.div, {
                        className: `framer-fj2xoo`,
                        "data-framer-name": `Container`,
                        layoutDependency: D,
                        layoutId: `fCDeKXUdQ`,
                        style: {
                          borderBottomLeftRadius: 8,
                          borderBottomRightRadius: 8,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        },
                        children: c(ye, {
                          height: 518,
                          width: u?.width || `100vw`,
                          y: (u?.y || 0) + 0 + (((u?.height || 532) - 0 - 518) / 2 + 0 + 0) + 0 + 0,
                          ...Je(
                            {
                              TvbUoyejI: {
                                y:
                                  (u?.y || 0) +
                                  0 +
                                  (((u?.height || 200) - 0 - 518) / 2 + 0 + 0) +
                                  0 +
                                  0,
                              },
                            },
                            C,
                            E
                          ),
                          children: c(le, {
                            className: `framer-1rsf2hq-container`,
                            "data-framer-name": `Image or video`,
                            layoutDependency: D,
                            layoutId: `Kb2BdFYAg-container`,
                            name: `Image or video`,
                            nodeId: `Kb2BdFYAg`,
                            rendersWithMotion: !0,
                            scopeId: `CHbAYxGNm`,
                            style: { scale: 1 },
                            variants: { "ZUsF_PjwN-hover": { scale: 1.04 } },
                            children: c(k, {
                              anZoJEIFY: ot(ne),
                              BCTDRzOub: ve,
                              fKub8Am_x: !0,
                              FKuzhyxj7: xe,
                              G7yt3I0Bf: `Drawing different concepts`,
                              HDfBm4At6: x,
                              height: `100%`,
                              id: `Kb2BdFYAg`,
                              ivVZuJJNC: `flex-start`,
                              layoutId: `Kb2BdFYAg`,
                              mED8caIc3: ot(pe),
                              name: `Image or video`,
                              onBCTDRzOubChange: be,
                              onFKuzhyxj7Change: Ce,
                              onPcq4pcgxqChange: ge,
                              Pcq4pcgxq: he,
                              rHHfCo80M: `0px`,
                              style: { width: `100%` },
                              TJ59E3smx: `var(--token-a28f7f0c-c9e5-4bf0-b0db-e724b985a12f, rgb(240, 241, 243))`,
                              variant: st(v),
                              width: `100%`,
                              xad4Xjhor: !1,
                              ZM3o8At_q: !1,
                              zPsZKOrt6: at(it(_, `gA3EhiVzV`), s),
                            }),
                          }),
                        }),
                      }),
                      oe !== !1 &&
                        c(g.div, {
                          className: `framer-1hcox27`,
                          layoutDependency: D,
                          layoutId: `nrGfiqknH`,
                          children: f(g.div, {
                            className: `framer-1vy3fjh`,
                            "data-framer-name": `Label`,
                            layoutDependency: D,
                            layoutId: `H4gqV3ewA`,
                            children: [
                              O() &&
                                c(g.div, {
                                  className: `framer-sjdyuz`,
                                  "data-framer-name": `icon`,
                                  layoutDependency: D,
                                  layoutId: `D4MMZcMvx`,
                                  style: { filter: `blur(5px)`, WebkitFilter: `blur(5px)` },
                                  variants: {
                                    "ZUsF_PjwN-hover": {
                                      filter: `blur(0px)`,
                                      WebkitFilter: `blur(0px)`,
                                    },
                                    TvbUoyejI: { filter: `none`, WebkitFilter: `none` },
                                  },
                                  children: c(Ze, {
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    animate: ct,
                                    animated: !0,
                                    className: `framer-1o8plyo`,
                                    "data-framer-appear-id": `1o8plyo`,
                                    initial: lt,
                                    layoutDependency: D,
                                    layoutId: `L1esl4ggu`,
                                    optimized: !0,
                                    style: {
                                      "--esondr": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                                    },
                                    variants: {
                                      TvbUoyejI: {
                                        "--esondr": `var(--token-51d11642-d88a-481a-9928-4807c91d56bc, rgb(113, 120, 128))`,
                                      },
                                    },
                                  }),
                                }),
                              c(se, {
                                __fromCanvasComponent: !0,
                                children: c(a, {
                                  children: c(g.p, {
                                    className: `framer-styles-preset-29mx3t`,
                                    "data-styles-preset": `KSv8TCPWH`,
                                    dir: `auto`,
                                    children: `Project Name`,
                                  }),
                                }),
                                className: `framer-kkpihg`,
                                fonts: [`Inter`],
                                layoutDependency: D,
                                layoutId: `BnbFvko80`,
                                text: S,
                                variants: {
                                  "ZUsF_PjwN-hover": {
                                    "--extracted-r6o4lv": `var(--token-28627c14-8287-467f-acdb-39bd94c81ffc, rgb(4, 17, 31))`,
                                  },
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Je(
                                  {
                                    "ZUsF_PjwN-hover": {
                                      children: c(a, {
                                        children: c(g.p, {
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
                                  C,
                                  E
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
          `.framer-TPiiK.framer-t1tp3d, .framer-TPiiK .framer-t1tp3d { display: block; }`,
          `.framer-TPiiK.framer-2ojrom { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 671px; }`,
          `.framer-TPiiK .framer-fj2xoo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-TPiiK .framer-1rsf2hq-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-TPiiK .framer-1hcox27 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 690px; }`,
          `.framer-TPiiK .framer-1vy3fjh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
          `.framer-TPiiK .framer-sjdyuz { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
          `.framer-TPiiK .framer-1o8plyo { flex: none; height: auto; position: relative; width: 13px; }`,
          `.framer-TPiiK .framer-kkpihg { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-TPiiK.framer-v-1m6duaj.framer-2ojrom, .framer-TPiiK.framer-v-afhmp7.framer-2ojrom { cursor: default; }`,
          `.framer-TPiiK.framer-v-afhmp7 .framer-sjdyuz { flex: none; width: min-content; }`,
          `.framer-TPiiK.framer-v-2ojrom.hover .framer-sjdyuz { flex: none; order: 0; width: min-content; }`,
          `.framer-TPiiK.framer-v-2ojrom.hover .framer-kkpihg { order: 1; }`,
          ...Ie,
        ],
        `framer-TPiiK`
      )),
      (M.displayName = `Experiment Card`),
      (M.defaultProps = { height: 532, width: 671 }),
      re(M, {
        variant: {
          options: [`ZUsF_PjwN`, `TkvFnfxAC`, `TvbUoyejI`],
          optionTitles: [`With link`, `Without link`, `Mob. - link`],
          title: `Variant`,
          type: w.Enum,
        },
        FMKdf5_kR: {
          defaultValue: `gA3EhiVzV`,
          options: [`gA3EhiVzV`, `ZH3MCZaaW`],
          optionTitles: [`Image`, `Video`],
          title: `Asset Type`,
          type: w.Enum,
        },
        onFMKdf5_kRChange: { changes: `FMKdf5_kR`, type: w.ChangeHandler },
        S2zlK9hsc: A?.variant && {
          ...A.variant,
          defaultValue: `twjs7K9Uz`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Ratio`,
        },
        onS2zlK9hscChange: { changes: `S2zlK9hsc`, type: w.ChangeHandler },
        HIBDyQS9z: {
          __defaultAssetReference: `data:framer/asset-reference,FKu567Ema7PMMKT3JYd9fKrZM.png?originalFilename=QmXY1uwx9ib6rA99VvGb9Pt2K2Fs4CEZsHjEA7nTtKkeAQ%3Fauto%3Dformat%26h%3D2400.png&width=1808&height=2400`,
          title: `Image`,
          type: w.ResponsiveImage,
        },
        EM503Yyv8: Qe?.srcType && {
          ...Qe.srcType,
          defaultValue: `URL`,
          description: `I recommend uploading videos to a service like [Cloudinary](https://cloudinary.com) to save bandwidth
`,
          hidden: void 0,
          optional: void 0,
          title: `Video source`,
        },
        onEM503Yyv8Change: { changes: `EM503Yyv8`, type: w.ChangeHandler },
        tWDXQOFMp: {
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          description: ``,
          displayTextArea: !0,
          title: `Video URL`,
          type: w.String,
        },
        ontWDXQOFMpChange: { changes: `tWDXQOFMp`, type: w.ChangeHandler },
        PV5txtlVj: A?.HDfBm4At6 && {
          ...A.HDfBm4At6,
          __defaultAssetReference: ``,
          description: void 0,
          hidden: void 0,
          title: `File`,
        },
        onPV5txtlVjChange: { changes: `PV5txtlVj`, type: w.ChangeHandler },
        Cma_YYNdS: { defaultValue: !0, title: `Show Label`, type: w.Boolean },
        onCma_YYNdSChange: { changes: `Cma_YYNdS`, type: w.ChangeHandler },
        BO2ml1MO7: {
          defaultValue: `Project Name`,
          displayTextArea: !0,
          title: `Label`,
          type: w.String,
        },
        onBO2ml1MO7Change: { changes: `BO2ml1MO7`, type: w.ChangeHandler },
        z_qPDXah7: { title: `Link`, type: w.Link },
        Xtp3eZS3y: { defaultValue: !0, title: `Auto Play`, type: w.Boolean },
        onXtp3eZS3yChange: { changes: `Xtp3eZS3y`, type: w.ChangeHandler },
        srWwkEYZP: {
          description: `Thumbnail before your video loads`,
          title: `Video poster`,
          type: w.ResponsiveImage,
        },
      }),
      ie(
        M,
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
          ...Ye,
          ...Xe,
          ...ne(Re),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (M.loader = { load: (e, t) => C([() => x(k, {}, t)], t) }));
  });
function N(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function vt(e) {
  return typeof e == `function` ? e() : e;
}
function yt(e, t) {
  return Dn[e] > Dn[t];
}
function bt(e) {
  let t;
  for (let n of e) {
    let e = vt(n);
    if (((t === void 0 || yt(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function xt(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function P(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function F(e) {
  throw Error(`Unexpected value: ${e}`);
}
function I(e, t, n, r) {
  (P(e >= t, e, `outside lower bound for`, r), P(e <= n, e, `outside upper bound for`, r));
}
function St(e) {
  return typeof e == `string`;
}
function L(e) {
  return Number.isFinite(e);
}
function R(e) {
  return e === null;
}
function Ct(e) {
  if (R(e)) return 0;
  switch (e.type) {
    case w.Array:
      return 1;
    case w.Boolean:
      return 2;
    case w.Color:
      return 3;
    case w.Date:
      return 4;
    case w.Enum:
      return 5;
    case w.File:
      return 6;
    case w.ResponsiveImage:
      return 10;
    case w.Link:
      return 7;
    case w.Number:
      return 8;
    case w.Object:
      return 9;
    case w.RichText:
      return 11;
    case w.String:
      return 12;
    case w.VectorSetItem:
      return 13;
    default:
      F(e);
  }
}
function wt(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = z.read(e);
    n.push(t);
  }
  return { type: w.Array, value: n };
}
function Tt(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) z.write(e, n);
}
function Et(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = z.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Dt(e) {
  return { type: w.Boolean, value: e.readUint8() !== 0 };
}
function Ot(e, t) {
  e.writeUint8(+!!t.value);
}
function kt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function At(e) {
  return { type: w.Color, value: e.readString() };
}
function jt(e, t) {
  e.writeString(t.value);
}
function Mt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Nt(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: w.Date, value: n.toISOString() };
}
function Pt(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function Ft(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function It(e) {
  return { type: w.Enum, value: e.readString() };
}
function Lt(e, t) {
  e.writeString(t.value);
}
function Rt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function zt(e) {
  return { type: w.File, value: e.readString() };
}
function Bt(e, t) {
  e.writeString(t.value);
}
function Vt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ht(e) {
  return { type: w.Link, value: e.readJson() };
}
function Ut(e, t) {
  e.writeJson(t.value);
}
function Wt(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Gt(e) {
  return { type: w.Number, value: e.readFloat64() };
}
function Kt(e, t) {
  e.writeFloat64(t.value);
}
function qt(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Jt(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = z.read(e);
  }
  return { type: w.Object, value: n };
}
function Yt(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), z.write(e, r));
}
function Xt(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = z.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Zt(e) {
  return { type: w.ResponsiveImage, value: e.readJson() };
}
function Qt(e, t) {
  e.writeJson(t.value);
}
function $t(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function en(e) {
  let t = e.readInt8();
  if (t === 0) return { type: w.RichText, value: e.readUint32() };
  if (t === 1) return { type: w.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function tn(e, t) {
  if (L(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (St(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function nn(e, t) {
  let n = e.value,
    r = t.value;
  if ((L(n) && L(r)) || (St(n) && St(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function rn(e) {
  return { type: w.String, value: e.readString() };
}
function an(e, t) {
  e.writeString(t.value);
}
function on(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function sn(e) {
  return { type: w.VectorSetItem, value: e.readUint32() };
}
function cn(e, t) {
  e.writeUint32(t.value);
}
function ln(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function un(e) {
  let t = Math.floor(Nn * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function dn(e, t) {
  let n = pn(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await Fn(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new In(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function fn(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function pn(e) {
  P(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function mn(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = z.read(e);
  }
  return t;
}
function* hn(e) {
  for (let t of e) yield* t.prioritySources;
}
var gn,
  z,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  B,
  V,
  On,
  kn,
  H,
  U,
  W,
  G,
  K,
  An,
  q,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  J,
  Ln,
  Rn,
  zn = e(() => {
    (i(),
      T(),
      (_n = Object.create),
      (vn = Object.defineProperty),
      (yn = Object.getOwnPropertyDescriptor),
      (bn = Object.getOwnPropertyNames),
      (xn = Object.getPrototypeOf),
      (Sn = Object.prototype.hasOwnProperty),
      (Cn = (e, t) =>
        function () {
          try {
            return (t || (0, e[bn(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (wn = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of bn(t))
            Sn.call(e, i) ||
              i === n ||
              vn(e, i, { get: () => t[i], enumerable: !(r = yn(t, i)) || r.enumerable });
        return e;
      }),
      (Tn = (e, t, n) => (
        (n = e == null ? {} : _n(xn(e))),
        wn(!t && e && e.__esModule ? n : vn(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (En = Tn(
        Cn({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (Dn = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (B = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (V =
        ((gn = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = B.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = B.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = B.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = B.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = B.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = B.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = B.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = B.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = B.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = B.Float64;
            this.ensureLength(e);
            let t = this.view.getFloat64(this.offset);
            return ((this.offset += e), t);
          }
          readBytes(e) {
            let t = this.offset,
              n = t + e,
              r = this.bytes.subarray(t, n);
            return ((this.offset = n), r);
          }
          readString() {
            let t = this.readUint32(),
              n = this.readBytes(t);
            return e.textDecoder.decode(n);
          }
          readJson() {
            let e = this.readString();
            return JSON.parse(e);
          }
          constructor(e) {
            (N(this, `bytes`, void 0),
              N(this, `offset`, 0),
              N(this, `view`, void 0),
              (this.bytes = e),
              (this.view = xt(this.bytes)));
          }
        }),
        N(gn, `textDecoder`, new TextDecoder()),
        gn)),
      s !== void 0 && s.requestIdleCallback,
      (On = 1024),
      (kn = 1.5),
      (H = (e) => 2 ** e - 1),
      (U = (e) => -(2 ** (e - 1))),
      (W = (e) => 2 ** (e - 1) - 1),
      (G = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: U(8),
        Int16: U(16),
        Int32: U(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (K = {
        Uint8: H(8),
        Uint16: H(16),
        Uint32: H(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: W(8),
        Int16: W(16),
        Int32: W(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (An = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * kn) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = xt(n)));
        }
        writeUint8(e) {
          I(e, G.Uint8, K.Uint8, `Uint8`);
          let t = B.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          I(e, G.Uint16, K.Uint16, `Uint16`);
          let t = B.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          I(e, G.Uint32, K.Uint32, `Uint32`);
          let t = B.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          I(e, G.Uint64, K.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          I(e, G.BigUint64, K.BigUint64, `BigUint64`);
          let t = B.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          I(e, G.Int8, K.Int8, `Int8`);
          let t = B.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          I(e, G.Int16, K.Int16, `Int16`);
          let t = B.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          I(e, G.Int32, K.Int32, `Int32`);
          let t = B.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          I(e, G.Int64, K.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          I(e, G.BigInt64, K.BigInt64, `BigInt64`);
          let t = B.BigInt64;
          (this.ensureLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = B.Float32;
          (this.ensureLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = B.Float64;
          (this.ensureLength(t), this.view.setFloat64(this.offset, e), (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t), this.bytes.set(e, this.offset), (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          (N(this, `offset`, 0),
            N(this, `bytes`, new Uint8Array(On)),
            N(this, `view`, xt(this.bytes)),
            N(this, `encoder`, new TextEncoder()),
            N(this, `encodedStrings`, new Map()));
        }
      }),
      (q = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            P(L(n), `Invalid chunkId`),
            P(L(r), `Invalid offset`),
            P(L(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (P(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (N(this, `chunkId`, void 0),
            N(this, `offset`, void 0),
            N(this, `length`, void 0),
            (this.chunkId = e),
            (this.offset = t),
            (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return wt(e);
            case 2:
              return Dt(e);
            case 3:
              return At(e);
            case 4:
              return Nt(e);
            case 5:
              return It(e);
            case 6:
              return zt(e);
            case 7:
              return Ht(e);
            case 8:
              return Gt(e);
            case 9:
              return Jt(e);
            case 10:
              return Zt(e);
            case 11:
              return en(e);
            case 12:
              return rn(e);
            case 13:
              return sn(e);
            default:
              F(t);
          }
        }),
          (e.write = function (e, t) {
            let n = Ct(t);
            if ((e.writeUint8(n), !R(t)))
              switch (t.type) {
                case w.Array:
                  return Tt(e, t);
                case w.Boolean:
                  return Ot(e, t);
                case w.Color:
                  return jt(e, t);
                case w.Date:
                  return Pt(e, t);
                case w.Enum:
                  return Lt(e, t);
                case w.File:
                  return Bt(e, t);
                case w.Link:
                  return Ut(e, t);
                case w.Number:
                  return Kt(e, t);
                case w.Object:
                  return Yt(e, t);
                case w.ResponsiveImage:
                  return Qt(e, t);
                case w.RichText:
                  return tn(e, t);
                case w.VectorSetItem:
                  return cn(e, t);
                case w.String:
                  return an(e, t);
                default:
                  F(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = Ct(e),
              i = Ct(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (R(e) || R(t)) return 0;
            switch (e.type) {
              case w.Array:
                return (P(t.type === w.Array), Et(e, t, n));
              case w.Boolean:
                return (P(t.type === w.Boolean), kt(e, t));
              case w.Color:
                return (P(t.type === w.Color), Mt(e, t));
              case w.Date:
                return (P(t.type === w.Date), Ft(e, t));
              case w.Enum:
                return (P(t.type === w.Enum), Rt(e, t));
              case w.File:
                return (P(t.type === w.File), Vt(e, t));
              case w.Link:
                return (P(t.type === w.Link), Wt(e, t));
              case w.Number:
                return (P(t.type === w.Number), qt(e, t));
              case w.Object:
                return (P(t.type === w.Object), Xt(e, t, n));
              case w.ResponsiveImage:
                return (P(t.type === w.ResponsiveImage), $t(e, t));
              case w.RichText:
                return (P(t.type === w.RichText), nn(e, t));
              case w.VectorSetItem:
                return (P(t.type === w.VectorSetItem), ln(e, t));
              case w.String:
                return (P(t.type === w.String), on(e, t, n));
              default:
                F(e);
            }
          }));
      })((z ||= {})),
      (jn = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = z.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static async deserialize(t, n) {
          let r = new V(t),
            i = r.readJson(),
            a = r.readUint8(),
            o = [];
          for (let e = 0; e < a; e++) {
            let e = r.readString();
            o.push(e);
          }
          let s = new e(o, { collation: i }),
            c = r.readUint32(),
            l = () => {
              let e = [];
              for (let t = 0; t < a; t++) {
                let t = z.read(r);
                e.push(t);
              }
              let t = q.read(r);
              s.entries.push({ values: e, pointer: t });
            };
          for (let e = 0; e < c; e++) {
            let e = n?.();
            (e && (await e), l());
          }
          return s;
        }
        serialize() {
          let e = new An();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(), e.writeUint32(this.entries.length), this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) z.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          (N(this, `fieldNames`, void 0),
            N(this, `options`, void 0),
            N(this, `entries`, []),
            (this.fieldNames = e),
            (this.options = t));
        }
      }),
      (Mn = 3),
      (Nn = 250),
      (Pn = [408, 429, 500, 502, 503, 504]),
      (Fn = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Pn.includes(r.status) || ++n > Mn) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > Mn) throw e;
          }
          await un(n);
        }
      }),
      (In = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((P(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = fn(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((P(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = fn(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          N(this, `chunks`, []);
        }
      }),
      (J = class {
        async loadModel() {
          let [e] = await dn(this.options.url, [this.options.range]);
          return (
            P(e, `Failed to load model`),
            jn.deserialize(e, () => {
              let e = bt(this.modelPrioritySources);
              return e ? S({ batch: !0, priority: e }) : void 0;
            })
          );
        }
        async getModel(e) {
          return (
            this.model ||
              (e && this.modelPrioritySources.add(e),
              (this.modelPromise ??= this.loadModel().finally(() => {
                this.modelPrioritySources.clear();
              })),
              (this.model ??= await this.modelPromise)),
            this.model
          );
        }
        async lookupItems(e, t) {
          P(e.length === this.fields.length, `Invalid query length`);
          let n = [(await this.getModel(t)).entries];
          for (let [r, i] of e.entries()) {
            let e = [];
            for (let a of n) {
              let n,
                o = t ? S({ batch: !0, priority: vt(t) }) : void 0;
              switch ((o && (await o), i.type)) {
                case `All`:
                  n = [a];
                  break;
                case `Equals`:
                  n = this.queryEquals(a, i, r);
                  break;
                case `NotEquals`:
                  n = this.queryNotEquals(a, i, r);
                  break;
                case `LessThan`:
                  n = this.queryLessThan(a, i, r);
                  break;
                case `GreaterThan`:
                  n = this.queryGreaterThan(a, i, r);
                  break;
                case `Contains`:
                  n = await this.queryContains(a, i, r, t);
                  break;
                case `StartsWith`:
                  n = await this.queryStartsWith(a, i, r, t);
                  break;
                case `EndsWith`:
                  n = await this.queryEndsWith(a, i, r, t);
                  break;
                default:
                  F(i);
              }
              e.push(...n);
            }
            n = e;
          }
          let r = [];
          for (let e of n)
            for (let n of e) {
              let e = t ? S({ batch: !0, priority: vt(t) }) : void 0;
              e && (await e);
              let i = {};
              for (let e = 0; e < this.options.fieldNames.length; e++) {
                let t = this.options.fieldNames[e];
                i[t] = n.values[e];
              }
              r.push({ pointer: n.pointer.toString(), data: i });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== w.String || t.value?.type !== w.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== w.String || t.value?.type !== w.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== w.String || t.value?.type !== w.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > z.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            z.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        async findItems(e, t, n, r) {
          let i = [],
            a = 0;
          for (let o = 0; o < e.length; o++) {
            let s = n ? S({ batch: !0, priority: vt(n) }) : void 0;
            s && (await s);
            let c = e[o].values[t];
            if (!r(c)) {
              if (a < o) {
                let t = e.slice(a, o);
                i.push(t);
              }
              a = o + 1;
            }
          }
          if (a < e.length) {
            let t = e.slice(a);
            i.push(t);
          }
          return i;
        }
        constructor(e) {
          (N(this, `options`, void 0),
            N(this, `schema`, void 0),
            N(this, `fields`, void 0),
            N(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            N(this, `modelPromise`, void 0),
            N(this, `model`, void 0),
            N(this, `modelPrioritySources`, new Set()),
            N(this, `collation`, void 0),
            (this.options = e));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (P(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n), (this.collation = this.options.collation));
        }
      }),
      (Ln = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = Fn(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new V(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = bt(this.scanPrioritySources),
                        t = e ? S({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = mn(n),
                        o = n.getOffset() - i,
                        s = new q(this.id, i, o).toString(),
                        c = { pointer: s, data: a };
                      (this.itemLoader.prime({ pointer: s, prioritySources: new Set() }, c),
                        r.push(c));
                    }
                    return r;
                  })
                  .finally(() => {
                    ((this.isScanning = !1), this.scanPrioritySources.clear());
                  }))),
            this.itemsPromise
          );
        }
        resolveItem(e, t) {
          let n = this.itemPrioritySources.get(e);
          (n || ((n = new Set()), this.itemPrioritySources.set(e, n)), t && n.add(t));
          let r = this.itemLoader.load({ pointer: e, prioritySources: n }),
            i = () => this.itemPrioritySources.delete(e);
          return (r.then(i, i), r);
        }
        constructor(e, t) {
          (N(this, `id`, void 0),
            N(this, `url`, void 0),
            N(this, `itemsPromise`, void 0),
            N(this, `isScanning`, !1),
            N(this, `scanPrioritySources`, new Set()),
            N(this, `itemPrioritySources`, new Map()),
            N(
              this,
              `itemLoader`,
              new En.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = q.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await dn(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = bt(hn(e)),
                      a = i ? S({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    P(o, `Missing range bytes`);
                    let s = mn(new V(o)),
                      c = e[t]?.pointer;
                    (P(c, `Missing pointer`), r.push({ pointer: c, data: s }));
                  }
                  return r;
                },
                { maxBatchSize: 250, cacheKeyFn: (e) => e.pointer }
              )
            ),
            (this.id = e),
            (this.url = t));
        }
      }),
      (Rn = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = q.fromString(e),
                r = this.chunks[n.chunkId];
              return (P(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = q.fromString(e.pointer),
            r = q.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return z.compare(e, t, n);
        }
        constructor(e) {
          (N(this, `options`, void 0),
            N(this, `id`, void 0),
            N(this, `schema`, void 0),
            N(this, `indexes`, void 0),
            N(this, `resolveRichText`, void 0),
            N(this, `resolveVectorSetItem`, void 0),
            N(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new Ln(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function Bn(e) {
  return typeof e == `object` && !!e && !l(e) && Un in e;
}
function Vn(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Hn(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let i = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return h(a, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return h(we, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a, o] = n;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          for (let t of o) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (Bn(r) && r.preload(), (i[t] = r));
          }
          let s = e[r];
          return (
            Vn(s, `Module not found`),
            Bn(s) && s.preload(),
            c(E, {
              componentIdentifier: r,
              children: (e) => c(Ee, { component: s, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return h(e === `a` ? g.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, i), i);
  };
}
var Y,
  Un,
  Wn,
  Gn = e(() => {
    (i(),
      p(),
      T(),
      n(),
      s !== void 0 && s.requestIdleCallback,
      (Un = `preload`),
      (Wn =
        (((Y = Wn || {})[(Y.Fragment = 1)] = `Fragment`),
        (Y[(Y.Link = 2)] = `Link`),
        (Y[(Y.Module = 3)] = `Module`),
        (Y[(Y.Tag = 4)] = `Tag`),
        (Y[(Y.Text = 5)] = `Text`),
        Y)));
  }),
  X,
  Kn,
  Z,
  qn,
  Jn,
  Yn,
  Xn,
  Q,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr = e(() => {
    (T(),
      zn(),
      Gn(),
      (X = {
        BRuWwVd8W: { isNullable: !0, type: w.String },
        createdAt: { isNullable: !0, type: w.Date },
        f0PpZP3uq: { isNullable: !0, type: w.Boolean },
        FWEBABPeE: { isNullable: !0, type: w.Enum },
        id: { isNullable: !1, type: w.String },
        ixi0ZSMR0: { isNullable: !0, type: w.Boolean },
        NCVJihNKA: { isNullable: !0, type: w.ResponsiveImage },
        nextItemId: { isNullable: !0, type: w.String },
        nKzP7hNO_: { isNullable: !0, type: w.Link },
        nXgtiKZOa: { isNullable: !0, type: w.String },
        previousItemId: { isNullable: !0, type: w.String },
        rIUtV0IiW: { isNullable: !0, type: w.String },
        tMPmtkpB7: { isNullable: !0, type: w.File },
        TrIEC9WVo: { isNullable: !0, type: w.ResponsiveImage },
        updatedAt: { isNullable: !0, type: w.Date },
        VuhF0Bnil: { isNullable: !0, type: w.Enum },
        xc8t_LQfm: { isNullable: !0, type: w.Enum },
      }),
      (Kn = [`id`]),
      (Z = { type: 1 }),
      (qn = [`previousItemId`]),
      (Jn = [`nextItemId`]),
      (Yn = [`id`, `rIUtV0IiW`]),
      (Xn = [`rIUtV0IiW`, `id`]),
      (Q = { type: 0 }),
      (Zn = [`BRuWwVd8W`]),
      (Qn = [`ixi0ZSMR0`]),
      ($n = [`rIUtV0IiW`]),
      (er = [`nKzP7hNO_`]),
      (tr = [`FWEBABPeE`]),
      (nr = [`xc8t_LQfm`]),
      (rr = [`NCVJihNKA`]),
      (ir = [`VuhF0Bnil`]),
      (ar = [`tMPmtkpB7`]),
      (or = [`nXgtiKZOa`]),
      (sr = [`f0PpZP3uq`]),
      (cr = [`TrIEC9WVo`]),
      (lr = []),
      (ur = (e) => {
        let t = lr[e];
        if (t) return t().then((e) => e.default);
      }),
      (dr = Hn({})),
      new Ae(),
      (fr = {
        collectionByLocaleId: {
          default: new Rn({
            chunks: [
              new URL(
                `./EpYcWa6M0-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `9e31c235-188e-4eab-99cf-d69773fa4f86default`,
            indexes: [
              new J({
                collation: Z,
                collectionSchema: X,
                fieldNames: Kn,
                range: { from: 0, to: 193 },
                url: new URL(
                  `./EpYcWa6M0-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Z,
                collectionSchema: X,
                fieldNames: qn,
                range: { from: 193, to: 385 },
                url: new URL(
                  `./EpYcWa6M0-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Z,
                collectionSchema: X,
                fieldNames: Jn,
                range: { from: 385, to: 573 },
                url: new URL(
                  `./EpYcWa6M0-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Z,
                collectionSchema: X,
                fieldNames: Yn,
                range: { from: 573, to: 875 },
                url: new URL(
                  `./EpYcWa6M0-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: Xn,
                range: { from: 875, to: 1177 },
                url: new URL(
                  `./EpYcWa6M0-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: Zn,
                range: { from: 1177, to: 1701 },
                url: new URL(
                  `./EpYcWa6M0-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: Qn,
                range: { from: 1701, to: 1817 },
                url: new URL(
                  `./EpYcWa6M0-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: $n,
                range: { from: 1817, to: 2015 },
                url: new URL(
                  `./EpYcWa6M0-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: er,
                range: { from: 2015, to: 2312 },
                url: new URL(
                  `./EpYcWa6M0-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: tr,
                range: { from: 2312, to: 2512 },
                url: new URL(
                  `./EpYcWa6M0-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: nr,
                range: { from: 2512, to: 2712 },
                url: new URL(
                  `./EpYcWa6M0-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: rr,
                range: { from: 2712, to: 6165 },
                url: new URL(
                  `./EpYcWa6M0-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: ir,
                range: { from: 6165, to: 6365 },
                url: new URL(
                  `./EpYcWa6M0-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: ar,
                range: { from: 6365, to: 6474 },
                url: new URL(
                  `./EpYcWa6M0-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: or,
                range: { from: 6474, to: 6611 },
                url: new URL(
                  `./EpYcWa6M0-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: sr,
                range: { from: 6611, to: 6727 },
                url: new URL(
                  `./EpYcWa6M0-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: cr,
                range: { from: 6727, to: 7672 },
                url: new URL(
                  `./EpYcWa6M0-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: dr,
            resolveVectorSetItem: ur,
            schema: X,
          }),
          NQfeamgS2: new Rn({
            chunks: [
              new URL(
                `./EpYcWa6M0-chunk-NQfeamgS2-0.framercms`,
                `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `9e31c235-188e-4eab-99cf-d69773fa4f86NQfeamgS2`,
            indexes: [
              new J({
                collation: Z,
                collectionSchema: X,
                fieldNames: Kn,
                range: { from: 0, to: 193 },
                url: new URL(
                  `./EpYcWa6M0-indexes-NQfeamgS2-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Z,
                collectionSchema: X,
                fieldNames: qn,
                range: { from: 193, to: 385 },
                url: new URL(
                  `./EpYcWa6M0-indexes-NQfeamgS2-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Z,
                collectionSchema: X,
                fieldNames: Jn,
                range: { from: 385, to: 573 },
                url: new URL(
                  `./EpYcWa6M0-indexes-NQfeamgS2-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Z,
                collectionSchema: X,
                fieldNames: Yn,
                range: { from: 573, to: 875 },
                url: new URL(
                  `./EpYcWa6M0-indexes-NQfeamgS2-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: Xn,
                range: { from: 875, to: 1177 },
                url: new URL(
                  `./EpYcWa6M0-indexes-NQfeamgS2-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: Zn,
                range: { from: 1177, to: 1701 },
                url: new URL(
                  `./EpYcWa6M0-indexes-NQfeamgS2-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: Qn,
                range: { from: 1701, to: 1817 },
                url: new URL(
                  `./EpYcWa6M0-indexes-NQfeamgS2-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: $n,
                range: { from: 1817, to: 2015 },
                url: new URL(
                  `./EpYcWa6M0-indexes-NQfeamgS2-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: er,
                range: { from: 2015, to: 2312 },
                url: new URL(
                  `./EpYcWa6M0-indexes-NQfeamgS2-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: tr,
                range: { from: 2312, to: 2512 },
                url: new URL(
                  `./EpYcWa6M0-indexes-NQfeamgS2-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: nr,
                range: { from: 2512, to: 2712 },
                url: new URL(
                  `./EpYcWa6M0-indexes-NQfeamgS2-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: rr,
                range: { from: 2712, to: 6165 },
                url: new URL(
                  `./EpYcWa6M0-indexes-NQfeamgS2-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: ir,
                range: { from: 6165, to: 6365 },
                url: new URL(
                  `./EpYcWa6M0-indexes-NQfeamgS2-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: ar,
                range: { from: 6365, to: 6474 },
                url: new URL(
                  `./EpYcWa6M0-indexes-NQfeamgS2-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: or,
                range: { from: 6474, to: 6611 },
                url: new URL(
                  `./EpYcWa6M0-indexes-NQfeamgS2-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: sr,
                range: { from: 6611, to: 6727 },
                url: new URL(
                  `./EpYcWa6M0-indexes-NQfeamgS2-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new J({
                collation: Q,
                collectionSchema: X,
                fieldNames: cr,
                range: { from: 6727, to: 7672 },
                url: new URL(
                  `./EpYcWa6M0-indexes-NQfeamgS2-0.framercms`,
                  `https://framerusercontent.com/modules/p2Ges6XHRc5iwz5id3eh/URSuqOXUJgKgL0NRCj2W/EpYcWa6M0.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: dr,
            resolveVectorSetItem: ur,
            schema: X,
          }),
        },
        displayName: `Experiments`,
        id: `9e31c235-188e-4eab-99cf-d69773fa4f86`,
      }),
      re(fr, {
        BRuWwVd8W: { defaultValue: ``, title: `Label`, type: w.String },
        ixi0ZSMR0: { defaultValue: !0, title: `Show label`, type: w.Boolean },
        rIUtV0IiW: { preventLocalization: !1, title: `Slug`, type: w.String },
        nKzP7hNO_: { title: `Link`, type: w.Link },
        FWEBABPeE: {
          defaultValue: `ZLZDR8ymQ`,
          options: [`ZLZDR8ymQ`, `KhgrosVhl`],
          optionTitles: [`Image`, `Video`],
          title: `Asset Type`,
          type: w.Enum,
        },
        xc8t_LQfm: {
          defaultValue: `QdfhOjIgr`,
          options: [`QdfhOjIgr`, `ofyhB6Dd4`, `G6KKUygOR`, `stx8aeJx0`],
          optionTitles: [`Fit Image`, `4:3`, `16:9`, `9:16`],
          title: `Ratio`,
          type: w.Enum,
        },
        NCVJihNKA: { title: `Image`, type: w.ResponsiveImage },
        VuhF0Bnil: {
          defaultValue: `yvNpdRZFb`,
          options: [`fjGh064gV`, `yvNpdRZFb`],
          optionTitles: [`URL`, `Upload`],
          title: `Video source`,
          type: w.Enum,
        },
        tMPmtkpB7: { allowedFileTypes: [`.mp4`, `.mpeg`], title: `Video File`, type: w.File },
        nXgtiKZOa: { defaultValue: ``, displayTextArea: !0, title: `Video URL`, type: w.String },
        f0PpZP3uq: { defaultValue: !0, title: `Video Auto Play`, type: w.Boolean },
        TrIEC9WVo: { title: `Video Poster`, type: w.ResponsiveImage },
        createdAt: { title: `Created`, type: w.Date },
        updatedAt: { title: `Updated`, type: w.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/EpYcWa6M0:default`,
          title: `Previous`,
          type: w.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/EpYcWa6M0:default`,
          title: `Next`,
          type: w.CollectionReference,
        },
      }));
  }),
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  $,
  Rr;
e(() => {
  (p(),
    T(),
    v(),
    n(),
    Fe(),
    _t(),
    Ge(),
    pr(),
    ze(),
    qe(),
    (mr = O(M)),
    (hr = be(fe)),
    (gr = oe(g.div)),
    (_r = O(Le)),
    (vr = {
      iYC9VDTgl: `(min-width: 810px) and (max-width: 1279.98px)`,
      rZenmYTu4: `(max-width: 809.98px)`,
      tbw3Qu30S: `(min-width: 1280px)`,
    }),
    (yr = []),
    (br = `framer-LPrNA`),
    (xr = {
      iYC9VDTgl: `framer-v-1u6ylo8`,
      rZenmYTu4: `framer-v-j0i2ng`,
      tbw3Qu30S: `framer-v-8zahtx`,
    }),
    (Sr = (e, t, n) => (e && t ? `position` : n)),
    (Cr = {
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
    (wr = {
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
    (Tr = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (Er = (e, t) => (e ? `ZUsF_PjwN` : `TkvFnfxAC`)),
    (Dr = (e, t) => {
      switch (e) {
        case `ZLZDR8ymQ`:
          return `gA3EhiVzV`;
        case `KhgrosVhl`:
          return `ZH3MCZaaW`;
        default:
          return `gA3EhiVzV`;
      }
    }),
    (Or = (e, t) => {
      switch (e) {
        case `QdfhOjIgr`:
          return `NGgdKHwEV`;
        case `ofyhB6Dd4`:
          return `twjs7K9Uz`;
        case `G6KKUygOR`:
          return `LAwbB4b1m`;
        case `stx8aeJx0`:
          return `Qp22wHMxf`;
        default:
          return `NGgdKHwEV`;
      }
    }),
    (kr = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Ar = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (jr = (e, t) => (e ? `TvbUoyejI` : `TkvFnfxAC`)),
    (Mr = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (Nr = () => ({
      from: { alias: `tqx4vecSF`, data: fr, type: `Collection` },
      select: [
        { collection: `tqx4vecSF`, name: `nKzP7hNO_`, type: `Identifier` },
        { collection: `tqx4vecSF`, name: `FWEBABPeE`, type: `Identifier` },
        { collection: `tqx4vecSF`, name: `xc8t_LQfm`, type: `Identifier` },
        { collection: `tqx4vecSF`, name: `NCVJihNKA`, type: `Identifier` },
        { collection: `tqx4vecSF`, name: `nXgtiKZOa`, type: `Identifier` },
        { collection: `tqx4vecSF`, name: `ixi0ZSMR0`, type: `Identifier` },
        { collection: `tqx4vecSF`, name: `BRuWwVd8W`, type: `Identifier` },
        { collection: `tqx4vecSF`, name: `rIUtV0IiW`, type: `Identifier` },
        { collection: `tqx4vecSF`, name: `f0PpZP3uq`, type: `Identifier` },
        { collection: `tqx4vecSF`, name: `TrIEC9WVo`, type: `Identifier` },
        { collection: `tqx4vecSF`, name: `id`, type: `Identifier` },
      ],
    })),
    (Pr = ({ query: e, pageSize: t, children: n }) => n(pe(e))),
    (Fr = { Desktop: `tbw3Qu30S`, Phone: `rZenmYTu4`, Tablet: `iYC9VDTgl` }),
    (Ir = ({ value: e }) =>
      ve()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Lr = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Fr[r.variant] ?? r.variant ?? `tbw3Qu30S`,
    })),
    ($ = b(
      u(function (e, n) {
        let i = r(null),
          o = n ?? i,
          s = ee(),
          { activeLocale: l, setLocale: u } = _e(),
          p = Se(),
          { style: h, className: v, layoutId: ne, variant: re, ...ie } = Lr(e);
        Oe(t(() => Ke({}, l), [l]));
        let [b, ae] = Te(re, vr, !1),
          x = y(br, He),
          oe = d(me)?.isLayoutTemplate,
          S = !!d(_)?.transition?.layout,
          le = Sr(oe, S),
          ue = D(`pnsJDqOef`),
          pe = r(null);
        return (
          ce(),
          ge({}),
          c(me.Provider, {
            value: {
              activeVariantId: b,
              humanReadableVariantMap: Fr,
              primaryVariantId: `tbw3Qu30S`,
              variantClassNames: xr,
            },
            children: f(te, {
              id: ne ?? s,
              children: [
                c(Ir, { value: `html body { background: rgb(252, 252, 252); }` }),
                f(g.div, {
                  ...ie,
                  className: y(x, `framer-8zahtx`, v),
                  ref: o,
                  style: { ...h },
                  children: [
                    c(g.div, {
                      className: `framer-hcw4et`,
                      "data-framer-name": `Main`,
                      layout: le,
                      children: c(`section`, {
                        className: `framer-msy6qf`,
                        "data-framer-name": `Case Studies`,
                        id: ue,
                        ref: pe,
                        children: f(`div`, {
                          className: `framer-1dq5m4x`,
                          "data-framer-name": `Container`,
                          children: [
                            c(`div`, {
                              className: `framer-1d1vqrm`,
                              "data-framer-name": `Case studies`,
                              children: c(Ce, {
                                children: c(Pr, {
                                  query: Nr(),
                                  children: (e, t, n) => {
                                    let r = e?.length ?? 0,
                                      i = Mr(r, 0);
                                    return c(m, {
                                      children: c(De, {
                                        breakpoint: b,
                                        overrides: { rZenmYTu4: { trackCount: 1 } },
                                        children: f(gr, {
                                          className: `framer-luwfr1`,
                                          columnMasonryLayoutEnabled: !0,
                                          parentIsDataRepeater: !0,
                                          rowGap: 20,
                                          trackCount: 3,
                                          children: [
                                            e?.map(
                                              (
                                                {
                                                  BRuWwVd8W: e,
                                                  f0PpZP3uq: t,
                                                  FWEBABPeE: n,
                                                  id: r,
                                                  ixi0ZSMR0: i,
                                                  NCVJihNKA: a,
                                                  nKzP7hNO_: o,
                                                  nXgtiKZOa: s,
                                                  rIUtV0IiW: u,
                                                  TrIEC9WVo: d,
                                                  xc8t_LQfm: f,
                                                },
                                                m
                                              ) => (
                                                (o ??= ``),
                                                (s ??= ``),
                                                (i ??= !0),
                                                (e ??= ``),
                                                (u ??= ``),
                                                (t ??= !0),
                                                c(
                                                  te,
                                                  {
                                                    id: `tqx4vecSF-${r}`,
                                                    children: c(de.Provider, {
                                                      value: { rIUtV0IiW: u },
                                                      children: c(`div`, {
                                                        className: `framer-1ufkifi`,
                                                        children: c(ke, {
                                                          links: [
                                                            {
                                                              href: o,
                                                              implicitPathVariables: {
                                                                rIUtV0IiW: u,
                                                              },
                                                            },
                                                            {
                                                              href: o,
                                                              implicitPathVariables: {
                                                                rIUtV0IiW: u,
                                                              },
                                                            },
                                                            {
                                                              href: o,
                                                              implicitPathVariables: {
                                                                rIUtV0IiW: u,
                                                              },
                                                            },
                                                          ],
                                                          children: (r) =>
                                                            c(De, {
                                                              breakpoint: b,
                                                              overrides: {
                                                                iYC9VDTgl: {
                                                                  width: `max(max((min(max(${p?.width || `100vw`}, 1px), 1280px) - 120px) / 3, 50px), 1px)`,
                                                                },
                                                                rZenmYTu4: {
                                                                  width: `max(max(min(max(${p?.width || `100vw`}, 1px), 1280px) - 40px, 50px), 1px)`,
                                                                },
                                                              },
                                                              children: c(ye, {
                                                                height: 532,
                                                                width: `max(max((min(max(${p?.width || `100vw`}, 1px), 1280px) - 168px) / 3, 50px), 1px)`,
                                                                y:
                                                                  (p?.y || 0) +
                                                                  0 +
                                                                  0 +
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
                                                                children: c(hr, {
                                                                  animate: Cr,
                                                                  className: `framer-13fyc7q-container`,
                                                                  "data-framer-appear-id": `13fyc7q-${m}`,
                                                                  initial: wr,
                                                                  nodeId: `qqyMAX25M`,
                                                                  optimized: !0,
                                                                  rendersWithMotion: !0,
                                                                  scopeId: `XCManpuE6`,
                                                                  children: c(De, {
                                                                    breakpoint: b,
                                                                    overrides: {
                                                                      iYC9VDTgl: {
                                                                        z_qPDXah7: r[1],
                                                                      },
                                                                      rZenmYTu4: {
                                                                        variant: Ar(jr(Tr(o), l)),
                                                                        z_qPDXah7: r[2],
                                                                      },
                                                                    },
                                                                    children: c(M, {
                                                                      BO2ml1MO7: e,
                                                                      Cma_YYNdS: i,
                                                                      EM503Yyv8: `URL`,
                                                                      FMKdf5_kR: Dr(n, l),
                                                                      height: `100%`,
                                                                      HIBDyQS9z: kr(a),
                                                                      id: `qqyMAX25M`,
                                                                      layoutId: `qqyMAX25M`,
                                                                      S2zlK9hsc: Or(f, l),
                                                                      srWwkEYZP: kr(d),
                                                                      style: { width: `100%` },
                                                                      tWDXQOFMp: s,
                                                                      variant: Ar(Er(Tr(o), l)),
                                                                      width: `100%`,
                                                                      Xtp3eZS3y: t,
                                                                      z_qPDXah7: r[0],
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                  r
                                                )
                                              )
                                            ),
                                            i !== !1 &&
                                              c(`div`, {
                                                className: `framer-1r1mgr5`,
                                                "data-border": !0,
                                                "data-framer-name": `Empty State`,
                                                children: c(se, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(a, {
                                                    children: c(`p`, {
                                                      className: `framer-styles-preset-1rps2lr`,
                                                      "data-styles-preset": `oELRBbrwg`,
                                                      dir: `auto`,
                                                      children: `No items`,
                                                    }),
                                                  }),
                                                  className: `framer-1dw13b`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                          ],
                                        }),
                                      }),
                                    });
                                  },
                                }),
                              }),
                            }),
                            c(`div`, {
                              className: `framer-1dwovsu`,
                              "data-framer-name": `Divider`,
                            }),
                          ],
                        }),
                      }),
                    }),
                    c(ye, {
                      children: c(fe, {
                        className: `framer-llnrrl-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: le,
                        nodeId: `TCDLqUOCt`,
                        scopeId: `XCManpuE6`,
                        children: c(Le, {
                          height: `100%`,
                          id: `TCDLqUOCt`,
                          intensity: 6,
                          layoutId: `TCDLqUOCt`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-LPrNA.framer-1m1xilh, .framer-LPrNA .framer-1m1xilh { display: block; }`,
        `.framer-LPrNA.framer-8zahtx { align-content: center; align-items: center; background-color: #fcfcfc; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
        `.framer-LPrNA .framer-hcw4et { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 27px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-LPrNA .framer-msy6qf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-LPrNA .framer-1dq5m4x { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1280px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 64px 0px 64px; position: relative; width: 1px; }`,
        `.framer-LPrNA .framer-1d1vqrm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LPrNA .framer-luwfr1 { display: grid; flex: none; gap: 20px 20px; height: min-content; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LPrNA .framer-1ufkifi { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LPrNA .framer-13fyc7q-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LPrNA .framer-1r1mgr5 { --border-bottom-width: 1px; --border-color: var(--token-91bb6ca9-22d2-4ec9-8b33-ef70d28dd5e7, rgba(255, 255, 255, 0.2)); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; align-self: start; background-color: var(--token-91bb6ca9-22d2-4ec9-8b33-ef70d28dd5e7, rgba(255, 255, 255, 0.2)); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; justify-self: start; min-height: 100%; min-width: 100%; padding: 10px; position: relative; width: min-content; }`,
        `.framer-LPrNA .framer-1dw13b { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-LPrNA .framer-1dwovsu { background-color: var(--token-1f1a3fc8-2220-4609-92ac-b2836646b5f8, #e8eaed); flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-LPrNA .framer-llnrrl-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...Be,
        `.framer-LPrNA[data-border="true"]::after, .framer-LPrNA [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-LPrNA.framer-8zahtx { width: 810px; } .framer-LPrNA .framer-1dq5m4x { padding: 0px 40px 0px 40px; }}`,
        `@media (max-width: 809.98px) { .framer-LPrNA.framer-8zahtx { width: 390px; } .framer-LPrNA .framer-1dq5m4x { gap: 60px; padding: 0px 20px 0px 20px; }}`,
      ],
      `framer-LPrNA`
    )),
    ($.displayName = `Home`),
    ($.defaultProps = { height: 2158.5, width: 1280 }),
    ie(
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
        ...mr,
        ..._r,
        ...ne(Ve),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = he.get(Nr(), n);
        return Promise.allSettled([
          r.preload(),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => [x(M, {}, t), x(k, {}, t)]));
          })(),
        ]);
      },
    }),
    (Rr = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerXCManpuE6`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `2158.5`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"iYC9VDTgl":{"layout":["fixed","auto"]},"rZenmYTu4":{"layout":["fixed","auto"]}}}`,
            framerContractVersion: `1`,
            framerScrollSections: `{"pnsJDqOef":{"pattern":":pnsJDqOef","name":"case-studies"}}`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1280`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Rr as __FramerMetadata__, $ as default, yr as queryParamNames };
//# sourceMappingURL=OJGcSAITmqq9Lv_L2GY1FlO-Ocawif1vZX0W1zyV4Fc.BmzpiuWo.mjs.map
