import { BoxGeometry, MathUtils, Mesh, MeshStandardMaterial } from 'three'

declare module 'three' {
    interface Mesh {
        tick?: (delta: number) => void
    }
}

export const createCube = () => {
    const geometry = new BoxGeometry(2, 2, 2)
    const material = new MeshStandardMaterial({ color: 'purple' })
    const cube = new Mesh(geometry, material)

    cube.rotation.set(-0.5, -0.1, 0.8)

    // Before the scene is rendered, call the animate function

    cube.tick = (delta: number) => {
        // This function will be called once per frame
        const radiansPerSecond = MathUtils.degToRad(30)
        cube.rotation.z += radiansPerSecond * delta
        cube.rotation.x += radiansPerSecond * delta
        cube.rotation.y += radiansPerSecond * delta
    }

    return cube
}
