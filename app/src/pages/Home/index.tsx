//import { CanvasHandler } from '@components/CanvasHandler'
import { Canvas } from 'solid-three'
import type { Component } from 'solid-js'
import Box from '@components/Box'

const Home: Component = () => {
    return (
        <Canvas
            camera={{
                position: [3, 3, 3],
            }}
            gl={{
                antialias: true,
            }}
            shadows>
            <Box />
            <ambientLight />
            <spotLight position={[0, 5, 10]} intensity={1} />
        </Canvas>
    )
}

export default Home
