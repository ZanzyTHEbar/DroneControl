import { lazy } from 'solid-js'
import type { RouteDefinition } from '@solidjs/router'

const Home = lazy(() => import('@pages/Home'))
/* const Settings = lazy(() => import('@pages/Settings/index'))
const AppSettings = lazy(() => import('@pages/AppSettings/index'))
const CropSettings = lazy(() => import('@pages/CropSettings/index'))
const page404 = lazy(() => import('@pages/Page404/index')) */

export const routes: RouteDefinition[] = [
    { path: '/', component: Home },
/*     { path: '/appSettings', component: AppSettings },
    { path: '/cropSettings', component: CropSettings },
    { path: '/settings/:flag', component: Settings },
    { path: '**', component: page404 }, */
]
