import { createRouter, createWebHistory } from "vue-router";
import Splash from "@/views/Splash.vue";
import Menu from "@/views/Menu.vue";
import Ayuda from "@/views/Ayuda.vue";
import Juego from "@/views/Juego.vue";
import Puntuacion from "@/views/Puntuacion.vue";
import Victory from "@/views/Victory.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "splash",
      component: Splash,
    },
    {
      path: "/menu",
      name: "menu",
      component: Menu,
    },
    {
      path: "/juego",
      name: "juego",
      component: Juego,
    },
    {
      path: "/puntuacion",
      name: "puntuacion",
      component: Puntuacion,
    },
    {
      path: "/ayuda",
      name: "ayuda",
      component: Ayuda,
    },
    {
      path: "/victory",
      name: "victory",
      component: Victory,
    },
  ],
});

export default router;
