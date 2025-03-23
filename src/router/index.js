import { createRouter,createWebHistory } from "vue-router";
import android from "../pages/android.vue";

const router = createRouter({

    history: createWebHistory(),
    routes: [{
        path: '/',
        redirect: '/home'
    },{
        path: '/home',
        component: android
    }]
})

export default router