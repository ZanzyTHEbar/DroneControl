import { PointLight } from 'three'

export const createLights = () => {
    const light = new PointLight('white', 1, 100)
    light.position.set(0, 10, 10)
    return light
}
