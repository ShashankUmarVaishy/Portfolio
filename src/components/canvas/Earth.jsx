"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('/planet/scene.gltf');
  return (
    <primitive
      object={earth.scene}
      scale={2.0}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 7.5],
      }}
    >
      <ambientLight intensity={1.8} />
      <hemisphereLight intensity={1.2} groundColor="#f8fafc" color="#ffffff" />
      <directionalLight position={[6, 8, 6]} intensity={2.5} />
      <directionalLight position={[-6, -4, -4]} intensity={1.2} color="#c084fc" />
      <pointLight position={[0, 0, 8]} intensity={1.5} />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;