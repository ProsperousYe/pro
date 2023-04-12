import o from "./countdown.vue.mjs";
const s = (n) => (n.install = (t) => {
  const a = n.name;
  t.component(a, n);
}, n), l = s(o);
export {
  l as Countdown,
  l as default
};
