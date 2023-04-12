import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ProButton: typeof components.Button;
    ProCountdown: typeof components.Countdown;
  }
}
export {};
