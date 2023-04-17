import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import type { WebGLRenderer, PerspectiveCamera } from 'three'

export const createControls = (camera: PerspectiveCamera, renderer: WebGLRenderer) => {
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    return controls
}
