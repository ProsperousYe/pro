import { createApp } from "vue";
import App from "./app.vue";
import pro from "@pro/components";
const app = createApp(App);
app.use(pro);
app.mount("#app");