export default {
    path: '/auth',
    name: "Authentication",
    component: () => import("@/views/Auth/index.vue"),
    meta: {
        requiresGuest: true,
    },
    redirect: "/auth/login",
    children: [{
            path: "login",
            name: "Login",
            component: () => import("@/views/Auth/Login.vue"),
        },
        {
            path: "register",
            name: "Registeration",
            component: () => import("@/views/Auth/Register.vue"),
        },
    ],
}