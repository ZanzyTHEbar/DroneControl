const setSize = (
    container: {
        append?: (arg0: HTMLCanvasElement) => void
        clientWidth?: number
        clientHeight?: number
    },
    camera: { aspect: number; updateProjectionMatrix: () => void },
    renderer: {
        setSize: (arg0: number, arg1: number) => void
        setPixelRatio: (arg0: number) => void
    }
) => {
    if (!container.clientWidth && !container.clientHeight)
        throw new Error('container.clientWidth && container.clientHeight are undefined')

    if (container.clientHeight && container.clientWidth) {
        camera.aspect = container.clientWidth / container.clientHeight
        // update the camera's frustum
        camera.updateProjectionMatrix()
        // update the size of the renderer AND the canvas
        renderer.setSize(container.clientWidth, container.clientHeight)
        // set the pixel ratio (for mobile devices)
        renderer.setPixelRatio(window.devicePixelRatio)
    }
}

export class Resizer {
    constructor(
        container: {
            append?: (arg0: HTMLCanvasElement) => void
            clientWidth?: number
            clientHeight?: number
        },
        camera: { aspect: number; updateProjectionMatrix: () => void },
        renderer: {
            setSize: (arg0: number, arg1: number) => void
            setPixelRatio: (arg0: number) => void
        }
    ) {
        // set initial size on load
        setSize(container, camera, renderer)
    }
}
