import { Clock, type WebGLRenderer, type Scene, type PerspectiveCamera, type Mesh } from 'three'

const clock = new Clock()

export class Loop {
    camera: PerspectiveCamera
    scene: Scene
    renderer: WebGLRenderer
    updatables: any[]
    constructor(camera: PerspectiveCamera, scene: Scene, renderer: WebGLRenderer) {
        this.camera = camera
        this.scene = scene
        this.renderer = renderer
        this.updatables = []
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            // tell every animated object to tick forward one frame
            this.tick()

            // render a frame
            this.renderer.render(this.scene, this.camera)
        })
    }

    stop() {
        this.renderer.setAnimationLoop(null)
    }

    tick() {
        // only call the getDelta function once per frame!
        const delta = clock.getDelta()

        // console.log(
        //   `The last frame rendered in ${delta * 1000} milliseconds`,
        // );

        for (const object of this.updatables) {
            if (object.tick) object.tick(delta)
        }
    }
}
