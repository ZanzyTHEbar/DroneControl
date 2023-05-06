import { Html } from 'solid-drei'
import { createSignal, useFrame, useThree, type Component } from 'solid-three'
import { Mesh } from 'three'

const Box: Component = () => {
    let mesh: Mesh | undefined
    const [hovered, setHovered] = createSignal(false)
    const [xrStart, setxrStart] = createSignal(false)

    const [state, setState] = createSignal()

    useThree((state) => {
        setState(state)
    })

    useFrame(() => {
        mesh!.rotation.y += 0.01
    })

    return (
        <>
            <mesh
                ref={mesh as any}
                onPointerEnter={(e) => setHovered(true)}
                onPointerLeave={(e) => setHovered(false)}>
                <boxBufferGeometry />
                <meshStandardMaterial color={hovered() ? 'blue' : 'green'} />
            </mesh>
            <Html position={[1, 1, 1]} occlude>
                <button
                    class='rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'
                    onClick={() => {
                        console.log('clicked')

                        if (!xrStart()) {
                            //const XR = ;
                            if (navigator.xr) {
                                const sessionInit = {
                                    optionalFeatures: [
                                        'local-floor',
                                        'bounded-floor',
                                        'hand-tracking',
                                        'layers',
                                    ],
                                }
                                navigator.xr
                                    .requestSession('immersive-vr', sessionInit)
                                    .then((xrSession) => {
                                        state()!['gl'].xr.setSession(xrSession)
                                    })
                            } else {
                                console.warn('WebXR not available')
                            }
                            setxrStart(true)
                        }
                    }}>
                    Enter VR
                </button>
            </Html>
        </>
    )
}

export default Box
