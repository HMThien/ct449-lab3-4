import { createWebHashHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;