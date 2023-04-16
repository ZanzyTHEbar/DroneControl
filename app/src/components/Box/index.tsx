import { createSignal, useFrame } from 'solid-three'
import { Mesh } from 'three'

export function Box() {
    let mesh: Mesh | undefined
    const [hovered, setHovered] = createSignal(false)

    useFrame(() => (mesh!.rotation.y += 0.01))

    return (
        <mesh
            ref={mesh}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}>
            <boxBufferGeometry />
            <meshStandardMaterial color={hovered() ? 'blue' : 'green'} />
        </mesh>
    )
}
