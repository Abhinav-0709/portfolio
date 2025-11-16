/// <reference types="@react-three/fiber" />
"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, OrbitControls } from "@react-three/drei";
import { Mesh } from "three";


function ModelScene() {
    const meshRef = useRef<Mesh>(null!);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.002;
            meshRef.current.rotation.y += 0.002;
        }
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[6, 6, 6]} intensity={1} color="green" />

            <Icosahedron ref={meshRef} args={[2.5, 0]}>
                <meshStandardMaterial color="white" wireframe />
            </Icosahedron>
            <OrbitControls enableZoom={false} enablePan={false} />
        </>
    );
}


export default function ThreeDModel() {
    return (
        <Canvas>
            <ModelScene />
        </Canvas>
    );
}