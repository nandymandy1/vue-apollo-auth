import Store from '../store';

export default {
    path: '/dashboard',
    name: "Dashboard",
    component: () => import("@/views/Dashboard/index.vue"),
    meta: {
        requiresAuth: true,
    },
    redirect: "/dashboard/posts",
    children: [{
            path: "posts",
            name: "MyPosts",
            component: () => import("@/views/Dashboard/posts/index.vue")
        },
        {
            path: "profile",
            name: "MyProfile",
            component: () => import("@/views/Dashboard/profile/index.vue")
        },
        {
            path: "logout",
            name: "Logout",
            beforeEnter: (from, to, next) => {
                Store.dispatch('Auth/logOut');
                next('/')
            }
        },
    ],
}