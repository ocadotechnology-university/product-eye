import * as THREE from 'three';
import './App.css'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { useEffect } from 'react';

  
const RotateObject3D = () => {
  
  const fieldOfView = 45;
  const nearPlane = 0.1;
  const farPlane = 20;
  let rotationSpeed = 0.01;
  let rotationSpeedFactor = 0.03;
  const mouseXScaleFactor = 2;
  const mouseXOset = -1;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(fieldOfView, window.innerWidth / window.innerHeight, nearPlane, farPlane);
  const renderer = new THREE.WebGLRenderer();


  useEffect(() => {
    camera.position.set(0, 0, 12);
      
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
        
    const ambientLight = new THREE.AmbientLight( 0xffffff );
    scene.add( ambientLight );

    const loader = new OBJLoader();
    let object3D: THREE.Object3D;
    const mtlLoader = new MTLLoader();

    
    mtlLoader.load(
      '/apple.mtl',
      (materials) => {
        materials.preload();
        loader.setMaterials(materials);
        
        loader.load(
        '/apple.obj',
        (object) => {
          object3D = object;
          scene.add(object);
        })
      }
    );

        
    function handleMouseMove(event: MouseEvent) {
      const mouseX = (event.clientX / window.innerWidth) * mouseXScaleFactor + mouseXOset;
      rotationSpeed = mouseX * rotationSpeedFactor;
    }

    document.addEventListener('mousemove', handleMouseMove);

    function animate() {
      requestAnimationFrame(animate);
      if (object3D) {
          object3D.rotation.y += rotationSpeed;
        }
      renderer.render(scene, camera);
    }
    
    animate();
  });

  return null;
}

export default RotateObject3D;