import { onMount } from 'solid-js'
import { ThreeApp } from '@utils/three'
import './styles.css'

export function CanvasHandler() {
    onMount(() => {
        const container = document.getElementById('scene-container')
        if (container) {
            // create a Scene
            console.log('container', container)
            const threeApp = new ThreeApp(container)
            threeApp.start()
        }
    })
    return <div id="scene-container" />
}
