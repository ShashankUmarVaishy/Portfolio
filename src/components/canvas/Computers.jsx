import { Suspense,useState,useEffect } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import * as THREE from 'three';

extend(THREE);

const Computers = ({isMobile}) => {
  const computer = useGLTF('/desktop_pc/scene.gltf'); 

  return (
    <group>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={2} />
      <spotLight 
        position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={ isMobile? 0.5 :0.75}
        position={ isMobile? [-2,-2,-2.2]: [0,-3.75,-1.5]}
        intensity={1}
        rotation={[-0.01,-0.2,-0.1]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
   
  const[isMobile,setIsMobile]=useState(false);

  useEffect(()=>{
   const mediaQuery=window.matchMedia('(max-width:500px)');
   setIsMobile(mediaQuery.matches);
   const handleMediaQueryChange=(event)=>{
    setIsMobile(event.matches); 
   }
   mediaQuery.addEventListener('change',handleMediaQueryChange);
   return ()=>{
    mediaQuery.removeEventListener('change',handleMediaQueryChange);
   }
  },[]);


  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
