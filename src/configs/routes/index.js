import { lazy } from "react";

const menu = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('../../pages/Home'))
  },
  {
    path: '/profile',
    exact: true,
    component: lazy(() => import('../../pages/Profile'))
  },
  {
    path: '/pokemon/:id',
    exact: true,
    component: lazy(() => import('../../pages/Detail'))
  }
]

export { menu };