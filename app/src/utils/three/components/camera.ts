import { PerspectiveCamera, MathUtils } from 'three'

declare module 'three' {
    interface PerspectiveCamera {
        tick?: (delta: number) => void
    }
}

export function createCamera() {
    const camera = new PerspectiveCamera(
        75, // fov = Field Of View
        window.innerWidth / window.innerHeight,
        0.1, // near clipping plane
        1000 // far clipping plane
    )

    // move the camera back so we can view the scene
    camera.position.set(0, 0, 10)
    camera.tick = (delta: number) => {
        // This function will be called once per frame
        const radiansPerSecond = MathUtils.degToRad(30)

        if (camera.position.z <= 10 || camera.position.z >= 20) {
            camera.position.z = 10
        }
        // q: Make the camera zoom out by ten meters, then reverse direction to zoom in again - you must use the modular operator to do this
        camera.position.z += 10 * (delta * radiansPerSecond)
        camera.position.z %= 20

        // now reverse direction
        // camera.position.z -= 10 * (delta * radiansPerSecond)
        // camera.position.z %= 20

        console.log('camera.position.z', camera.position.z)
    }
    return camera
}
