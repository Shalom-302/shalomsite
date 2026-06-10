"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useTheme } from "next-themes";
import type { Group, Points as ThreePoints } from "three";

const FONT = "/fonts/JetBrainsMono-Bold.ttf";
const LETTERS = ["S", "H", "A", "A", "P", "I"];

function usePrefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* "SHAAPI" letters orbiting in a circular pivot — the portal. */
function LetterRing({
  color,
  radius,
  fontSize,
  speed,
  tilt,
  animate,
}: {
  color: string;
  radius: number;
  fontSize: number;
  speed: number;
  tilt: number;
  animate: boolean;
}) {
  const ref = useRef<Group>(null);
  useFrame((_, delta) => {
    if (animate && ref.current) ref.current.rotation.y += delta * speed;
  });
  return (
    <group rotation={[tilt, 0, 0]}>
      <group ref={ref}>
        {LETTERS.map((ch, i) => {
          const a = (i / LETTERS.length) * Math.PI * 2;
          return (
            <Text
              key={i}
              font={FONT}
              position={[Math.sin(a) * radius, 0, Math.cos(a) * radius]}
              rotation={[0, a, 0]}
              fontSize={fontSize}
              color={color}
              anchorX="center"
              anchorY="middle"
            >
              {ch}
            </Text>
          );
        })}
      </group>
    </group>
  );
}

/* Faint wireframe sphere behind — the universe being entered. */
function Portal({ color, animate }: { color: string; animate: boolean }) {
  const ref = useRef<Group>(null);
  useFrame((_, delta) => {
    if (animate && ref.current) {
      ref.current.rotation.y += delta * 0.08;
      ref.current.rotation.x -= delta * 0.03;
    }
  });
  return (
    <group ref={ref}>
      <mesh>
        <icosahedronGeometry args={[2.05, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

/* The figure — walks forward, then gets pulled into the portal, on a loop. */
function Figure({ color, animate }: { color: string; animate: boolean }) {
  const root = useRef<Group>(null);
  const lLeg = useRef<Group>(null);
  const rLeg = useRef<Group>(null);
  const lArm = useRef<Group>(null);
  const rArm = useRef<Group>(null);

  useFrame((state) => {
    if (!animate) return;
    const t = state.clock.elapsedTime;
    const cycle = (Math.sin(t * 0.45) + 1) / 2; // 0 = approaching, 1 = pulled in
    if (root.current) {
      root.current.position.set(0, -1.05 + Math.sin(t * 3) * 0.04, 1.6 - cycle * 1.7);
      root.current.scale.setScalar(1.55 - cycle * 0.35);
      root.current.rotation.y = Math.sin(t * 0.3) * 0.2;
    }
    // limbs: walking while approaching, reaching forward while pulled in
    const swing = Math.sin(t * 5) * 0.55 * (1 - cycle);
    const reach = cycle * 0.9;
    if (lLeg.current) lLeg.current.rotation.x = swing;
    if (rLeg.current) rLeg.current.rotation.x = -swing;
    if (lArm.current) lArm.current.rotation.x = -swing - reach;
    if (rArm.current) rArm.current.rotation.x = swing - reach;
  });

  const mat = <meshBasicMaterial color={color} />;

  return (
    <group ref={root}>
      <mesh position={[0, 0.62, 0]}>
        <sphereGeometry args={[0.15, 18, 18]} />
        {mat}
      </mesh>
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[0.22, 0.44, 0.14]} />
        {mat}
      </mesh>
      <group ref={lArm} position={[-0.16, 0.47, 0]}>
        <mesh position={[0, -0.19, 0]}>
          <boxGeometry args={[0.075, 0.38, 0.075]} />
          {mat}
        </mesh>
      </group>
      <group ref={rArm} position={[0.16, 0.47, 0]}>
        <mesh position={[0, -0.19, 0]}>
          <boxGeometry args={[0.075, 0.38, 0.075]} />
          {mat}
        </mesh>
      </group>
      <group ref={lLeg} position={[-0.07, 0.1, 0]}>
        <mesh position={[0, -0.21, 0]}>
          <boxGeometry args={[0.085, 0.42, 0.085]} />
          {mat}
        </mesh>
      </group>
      <group ref={rLeg} position={[0.07, 0.1, 0]}>
        <mesh position={[0, -0.21, 0]}>
          <boxGeometry args={[0.085, 0.42, 0.085]} />
          {mat}
        </mesh>
      </group>
    </group>
  );
}

function Dust({ color, animate }: { color: string; animate: boolean }) {
  const points = useRef<ThreePoints>(null);
  const cloud = useMemo(() => {
    const count = 220;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.4 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);
  useFrame((_, delta) => {
    if (animate && points.current) points.current.rotation.y -= delta * 0.05;
  });
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[cloud, 3]} count={cloud.length / 3} />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.028} transparent opacity={0.5} />
    </points>
  );
}

function Scene({ color, animate }: { color: string; animate: boolean }) {
  return (
    <group>
      <Portal color={color} animate={animate} />
      <Dust color={color} animate={animate} />
      <LetterRing color={color} radius={2.6} fontSize={0.72} speed={0.5} tilt={0.42} animate={animate} />
      <LetterRing color={color} radius={1.85} fontSize={0.4} speed={-0.34} tilt={-0.55} animate={animate} />
      <Figure color={color} animate={animate} />
    </group>
  );
}

export default function Hero3D() {
  const { resolvedTheme } = useTheme();
  const reduced = usePrefersReducedMotion();
  const color = resolvedTheme === "dark" ? "#e6e6e6" : "#141414";

  return (
    <Canvas
      camera={{ position: [0, 0.5, 7], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <Scene color={color} animate={!reduced} />
      </Suspense>
    </Canvas>
  );
}
