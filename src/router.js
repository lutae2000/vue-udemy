import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "./pages/coaches/CoachesList.vue";
import NotFound from "./pages/NotFound.vue";
import store from "./store/index.js";
import { defineAsyncComponent } from "vue";

//컴포넌트 최적화
//라우팅에는 비동기 컴포넌트 사용안하는게 좋음
//코치 상세정보가 있을떄 페이지 랜더링
const CoachDetail = () => import("./pages/coaches/CoachDetail.vue");
const CoachRegistration = defineAsyncComponent(() =>
  import("./pages/coaches/CoachRegistration.vue")
);
const ContactCoach = defineAsyncComponent(() =>
  import("./pages/request/ContactCoach.vue")
);
const RequestReceived = defineAsyncComponent(() =>
  import("./pages/request/RequestsReceived.vue")
);
const UserAuth = defineAsyncComponent(() =>
  import("./pages/auth/UserAuth.vue")
);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDetail,
      props: true,
      children: [{ path: "contact", component: ContactCoach }],
    },
    {
      path: "/register",
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: "/requests",
      component: RequestReceived,
      meta: { requiresAuth: true },
    },
    { path: "/auth", component: UserAuth, meta: { requiresUnAuth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/coaches");
  } else {
    next();
  }
});

export default router;
