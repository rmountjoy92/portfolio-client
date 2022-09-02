const routes = [
  {
    path: "/",
    component: () => import("components/main/MainLayout"),
    children: [
      { path: "", component: () => import("components/main/ResumePage") },
      { path: "skills", component: () => import("components/main/ResumePage") },
      {
        path: "education",
        component: () => import("components/main/ResumePage"),
      },
      {
        path: "experience",
        component: () => import("components/main/ResumePage"),
      },
      {
        path: "projects",
        component: () => import("components/main/ResumePage"),
      },
      {
        path: "hobbies",
        component: () => import("components/main/ResumePage"),
      },
      {
        path: "references",
        component: () => import("components/main/ResumePage"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("components/global/404Page"),
  },
];

export default routes;
