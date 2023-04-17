import { useRoutes } from '@solidjs/router'
import { onMount } from 'solid-js'
import { routes } from '.'
//import Header from '@components/Header'

const AppRoutes = () => {
    const Path = useRoutes(routes)

    onMount(() => {
        console.log('AppRoutes mounted')
    })

    return (
        <>
            <Path />
        </>
    )
}

export default AppRoutes

/* 

<main class="pb-[5rem] w-[100%] px-8 max-w-[1920px]">
    <div class="header-wrapper">
        <Header
            name={connectedUserName() ? `Welcome ${connectedUserName()}` : 'Welcome!'}
            hideButtons={hideHeaderButtons()}
            onClick={() => {
                setHideHeaderButtons(false)
            }}
        />
    </div>
    <div class="pt-[70px]">
    </div>
</main>


*/