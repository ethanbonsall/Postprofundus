/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, useTexture } from "@react-three/drei";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mq.matches);

    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

export type CardItem = {
  title: string;
  description: string;
  imageUrl: string;
};

type Props = {
  items: CardItem[];
  radius?: number;
  durationS?: number;

  // DOM card size
  widthPx?: number;
  heightPx?: number;

  // 3D plane size (world units)
  planeW?: number;
  planeH?: number;

  className?: string;
};

function SpinningGroup({
  children,
  durationS,
}: {
  children: React.ReactNode;
  durationS: number;
}) {
  const g = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!g.current) return;
    g.current.rotation.y += (delta * (Math.PI * 2)) / durationS;
  });
  return <group ref={g}>{children}</group>;
}

function CardPlane({
  item,
  angle,
  radius,
  widthPx,
  heightPx,
  planeW,
  planeH,
  isMobile,
}: {
  item: CardItem;
  angle: number;
  radius: number;
  widthPx: number;
  heightPx: number;
  planeW: number;
  planeH: number;
  isMobile: boolean;
}) {
  const tex = useTexture(item.imageUrl);

  useMemo(() => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = true;
    tex.needsUpdate = true;
  }, [tex]);

  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;

  return (
    // Face the card outward (toward the camera when on front arc)
    <group position={[x, 0, z]} rotation={[0, angle, 0]}>
      <mesh>
        <planeGeometry args={[planeW, planeH]} />
        <meshBasicMaterial transparent opacity={0} side={THREE.DoubleSide} />
      </mesh>

      <Html
        transform
        zIndexRange={[1500, 0]}
        distanceFactor={1.0}
        position={[0, isMobile ? 0.34 : 0.2, 0.05]}
        style={{
          width: `${widthPx}px`,
          height: `${heightPx}px`,
          pointerEvents: "auto",
        }}
      >
        <div className="h-full w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm backdrop-blur">
          <div className="px-3 pt-3">
            <h3 className="text-sm font-semibold text-zinc-900 line-clamp-1">
              {item.title}
            </h3>
          </div>

          <div className="px-3 pt-2">
            <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-32 w-full object-cover"
                draggable={false}
              />
            </div>
          </div>

          <div className="px-3 py-3">
            <p className="text-[11px] leading-snug text-zinc-600 line-clamp-4">
              {item.description}
            </p>
          </div>
        </div>
      </Html>
    </group>
  );
}

export default function Card3DCarouselR3F({
  items,
  radius = 3,
  durationS = 40,
  widthPx = 240,
  heightPx = 300,
  planeW = 1.7,
  planeH = 2.5,
  className = "",
}: Props) {
  const count = Math.max(1, items.length);
  const angles = useMemo(
    () => Array.from({ length: count }, (_, i) => (i / count) * Math.PI * 2),
    [count]
  );
  const isMobile = useIsMobile();

  return (
    <div className={`w-full ${className}`}>
      <div className="relative h-[60svh] lg:h-[70dvh] w-full">
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 
                bg-black/60 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-md text-xs lg:text-sm z-[99999] text-nowrap text-center"
        >
          Drag to rotate • Scroll to zoom • Double click to pan
        </div>
        <Canvas
          dpr={[2, 3]}
          camera={{
            position: [0, isMobile ? 0.4 : 0.1, 6.5],
            fov: 14,
          }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <color attach="background" args={["#e4e4e7"]} />

          <SpinningGroup durationS={durationS}>
            {items.map((item, i) => (
              <CardPlane
                key={`${item.title}-${i}`}
                item={item}
                angle={angles[i]}
                radius={radius}
                widthPx={widthPx}
                heightPx={heightPx}
                planeW={planeW}
                planeH={planeH}
                isMobile={isMobile}
              />
            ))}
          </SpinningGroup>

          <OrbitControls
            rotateSpeed={0.35}
            enableDamping
            dampingFactor={0.08}
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            touches={{
              ONE: THREE.TOUCH.ROTATE,
              TWO: THREE.TOUCH.DOLLY_PAN,
            }}
          />
        </Canvas>
      </div>
    </div>
  );
}
