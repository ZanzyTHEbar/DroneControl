import { WebGLRenderer } from 'three'

export const createRenderer = () => {
    const renderer = new WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight, true)
    return renderer
}
