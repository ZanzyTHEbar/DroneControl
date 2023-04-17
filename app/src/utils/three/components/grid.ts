import { Mesh, PlaneGeometry, MeshBasicMaterial } from 'three'

export const createGrid = () => {
    // each square
    const planeW = 50 // pixels
    const planeH = 50 // pixels
    const numW = 50 // how many wide (50*50 = 2500 pixels wide)
    const numH = 50 // how many tall (50*50 = 2500 pixels tall)
    const plane = new Mesh(
        new PlaneGeometry(planeW * numW, planeH * numH, planeW, planeH),
        new MeshBasicMaterial({
            color: 0x000000,
            wireframe: true,
        })
    )

    //plane.tick = (delta: number) => {}

    return plane
}
