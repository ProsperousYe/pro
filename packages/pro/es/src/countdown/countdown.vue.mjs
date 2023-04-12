import { defineComponent as a, ref as d, computed as o, openBlock as f, createElementBlock as v, normalizeClass as y, unref as l, toDisplayString as r } from "vue";
import "./style/index.css";
const _ = a({ name: "pro-countdown" }), h = /* @__PURE__ */ a({
  ..._,
  props: {
    type: null,
    time: null,
    format: null,
    autoStart: { type: Boolean },
    immediate: { type: Boolean },
    delay: null,
    onEnd: null,
    onTick: null,
    trigger: null
  },
  setup(u) {
    const e = u;
    let t = d(e.time);
    const c = () => {
      if (e.immediate) {
        const n = setInterval(() => {
          t.value -= 1e3, t.value <= 0 ? (clearInterval(n), e.onEnd && e.onEnd()) : e.onTick && e.onTick(t.value);
        }, 1e3);
      } else
        setTimeout(() => {
          const n = setInterval(() => {
            t.value -= 1e3, t.value <= 0 ? (clearInterval(n), e.onEnd && e.onEnd()) : e.onTick && e.onTick(t.value);
          }, 1e3);
        }, e.delay);
    }, i = o(() => ({ [`pro-count--${e.type}`]: e.type })), s = o(() => Math.floor(t.value / 36e5)), m = o(() => Math.floor(t.value % 36e5 / 6e4)), p = o(() => Math.floor(t.value % 6e4 / 1e3));
    return c(), (n, k) => (f(), v("div", {
      class: y(["pro-count", l(i)])
    }, r(l(s)) + " : " + r(l(m)) + " : " + r(l(p)), 3));
  }
});
export {
  h as default
};
