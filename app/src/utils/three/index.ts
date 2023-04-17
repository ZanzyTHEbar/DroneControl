import { createCamera } from './components/camera'
import { createCube } from './components/cube'
import { createLights } from './components/lights'
import { createScene } from './components/scene'
import { createSphere } from './components/sphere'

import { createControls } from './systems/controls'
import { Loop } from './systems/loop'
import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/resizer'
import type { WebGLRenderer, Scene, PerspectiveCamera } from 'three'

// These variables are module-scoped: we cannot access them
// from outside the module
let camera: PerspectiveCamera
let renderer: WebGLRenderer
let scene: Scene
let loop: Loop

export class ThreeApp {
    constructor(container: {
        append?: (arg0: HTMLCanvasElement) => void
        clientWidth?: number
        clientHeight?: number
    }) {
        camera = createCamera()
        scene = createScene()
        renderer = createRenderer()
        loop = new Loop(camera, scene, renderer)
        if (container.append) {
            container.append(renderer.domElement)
        }

        const controls = createControls(camera, renderer)

        const cube = createCube()
        const sphere = createSphere()
        const light = createLights()
        loop.updatables.push(cube, camera)
        scene.add(light, cube)
        controls.update()
        console.log('scene', scene)
        const resizer = new Resizer(container, camera, renderer)
    }

    render() {
        // draw a single frame
        renderer.render(scene, camera)
    }

    start() {
        loop.start()
    }

    stop() {
        loop.stop()
    }
}
