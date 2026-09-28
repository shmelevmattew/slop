import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { U as t, q as n, y as r } from "./framer.yAIV6S8_.mjs";
import { n as i, t as a } from "./shared-lib.D6-R8ZSj.mjs";
import { i as o, n as s } from "./tzJhfwJaL.BK0yVW5k.mjs";
function c(e, t) {
  let n = e?.wGmP6opvl;
  return {
    breakpoints: [
      { hash: `bv24gb`, mediaQuery: `(min-width: 1280px)` },
      { hash: `1myucei`, mediaQuery: `(min-width: 810px) and (max-width: 1279.98px)` },
      { hash: `k8kmwx`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: {
      IFUYWcQbh: `hero`,
      PkmMH3HIg: `2`,
      PxgoJZBCV: `1`,
      t5J31CYjK: `6`,
      tNFuzW41X: `5`,
      tvUan5Wi2: `3`,
      wwOoxBDVX: `4`,
    },
    robots: `max-image-preview:large`,
    serializationId: `framer-iD016`,
    title: `${n === void 0 ? `{{wGmP6opvl}}` : d(n)} - My Framer Site`,
    viewport: `width=device-width`,
  };
}
async function l(e, n) {
  let i = new r(),
    a = {
      from: { alias: `xYCOw7mrL`, data: s, type: `Collection` },
      select: [{ collection: `xYCOw7mrL`, name: `wGmP6opvl`, type: `Identifier` }],
      where: t(e, `xYCOw7mrL`),
    },
    o = await i.query(a, n);
  if (o.length === 0) throw Error(`No data matches pathVariables`);
  let l = o[0];
  return c(l, n);
}
async function u(e, t) {
  let n = new r(),
    i = {
      from: { alias: `xYCOw7mrL`, data: s, type: `Collection` },
      select: [{ collection: `xYCOw7mrL`, name: `wGmP6opvl`, type: `Identifier` }],
    };
  for (let t of e) i.select.push({ collection: `xYCOw7mrL`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: c(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var d,
  f,
  p,
  m = e(() => {
    (n(),
      o(),
      a(),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = 1),
      (p = {
        exports: {
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
m();
export {
  p as __FramerMetadata__,
  c as default,
  u as fetchAllMetadata,
  l as fetchMetadata,
  f as metadataVersion,
  m as t,
};
//# sourceMappingURL=n476wkOjWELP3Q76_SQ5TB84bZQ6raZCDEAi4WQL5FE.Lmu8zNi6.mjs.map
