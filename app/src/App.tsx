import { lazy, onMount, Suspense } from 'solid-js'
import { handleAppBoot, handleTitlebar } from '@utils/hooks/app'

const AppRoutes = lazy(() => import('@routes/Routes'))

const App = () => {
    const ref = document.getElementById('titlebar')
    onMount(() => {
        handleTitlebar(false)
        handleAppBoot()
    })

    return (
        <div class="App overflow-y-auto items-center">
            <Suspense>
                <AppRoutes />
            </Suspense>
        </div>
    )
}

export default App
