import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const BAR_HEIGHTS = [3.5, 5, 2.5, 6, 4, 7, 3, 5.5];
const SPACING = 1.4;

function Bars() {
  const group = useRef();

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={group}>
      {BAR_HEIGHTS.map((h, i) => {
        const color = i % 2 === 0 ? "#4a7fd4" : "#f59e0b";
        return (
          <mesh key={i} position={[(i - (BAR_HEIGHTS.length - 1) / 2) * SPACING, h / 2, 0]}>
            <boxGeometry args={[0.8, h, 0.8]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.25}
              metalness={0.3}
              roughness={0.4}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function AnimatedBackground() {
  return (
    <Canvas
      camera={{ fov: 60, position: [0, 2, 14] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        opacity: 0.5,
      }}
    >
      <color attach="background" args={["#0a0f1e"]} />
      <fogExp2 attach="fog" args={["#0a0f1e", 0.035]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} />
      <pointLight position={[-5, 5, -5]} color="#4a7fd4" intensity={0.8} />
      <Bars />
    </Canvas>
  );
}
