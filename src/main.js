import "./assets/main.css";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const arrayPoints = new Array();

app.use(router);

app.mount("#app");

export default arrayPoints;
