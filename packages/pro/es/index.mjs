import * as o from "./src/index.mjs";
import { Button as i } from "./src/button/index.mjs";
import { Countdown as x } from "./src/countdown/index.mjs";
const n = {
  install: (t) => {
    for (let e in o)
      t.use(o[e]);
  }
};
export {
  i as Button,
  x as Countdown,
  n as default
};
