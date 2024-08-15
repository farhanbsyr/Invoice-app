// font
import "@fontsource/poppins";

// css
import "./assets/main.css";
import "./assets/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
// createApp(App).use(store).use(router).mount("#app");
