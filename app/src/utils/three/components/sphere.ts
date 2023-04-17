import { SphereGeometry, MathUtils, Mesh, MeshStandardMaterial } from 'three'

declare module 'three' {
    interface Mesh {
        tick?: (delta: number) => void
    }
}

export const createSphere = () => {
    const geometry = new SphereGeometry(2, 64, 64)
    const material = new MeshStandardMaterial({ color: '#00ff83' })
    const sphere = new Mesh(geometry, material)

    sphere.rotation.set(-0.5, -0.1, 0.8)

    // Before the scene is rendered, call the animate function

    sphere.tick = (delta: number) => {
        // This function will be called once per frame
        const radiansPerSecond = MathUtils.degToRad(30)
        sphere.rotation.z += delta * radiansPerSecond
        sphere.rotation.x += delta * radiansPerSecond
        sphere.rotation.y += delta * radiansPerSecond
    }

    return sphere
}
