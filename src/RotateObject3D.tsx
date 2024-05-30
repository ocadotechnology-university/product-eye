import * as THREE from 'three';
import './App.css'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { useEffect } from 'react';
import { Coordinates } from './Coordinates';

  
const RotateObject3D = () => {
  
  const fieldOfView = 45;
  const nearPlane = 0.1;
  const farPlane = 20;
  let xSpeed = 0.00;
  let ySpeed = 0.00;
  let zSpeed = 0.00;
  let rotationSpeedFactor = 0.2;
  const mouseScaleFactor= 2;
  const mouseXOset = -1;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(fieldOfView, window.innerWidth / window.innerHeight, nearPlane, farPlane);
  const renderer = new THREE.WebGLRenderer();
  const backgroundColor = "#242424";


  useEffect(() => {
    camera.position.set(0, 0, 12);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(backgroundColor);

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

    /*  
    function handleMovement(event: MouseEvent) {
      setRotationSpeed();
    }

    document.addEventListener('mousemove', handleMovement);
    */

    const screenToCartesianCoordinates = (screenX: number, screenY: number) => {
      const cartesionX = screenX - window.innerWidth/2;
      const cartesionY = window.innerHeight/2 - screenY;
      return {x: cartesionX, y: cartesionY};
    }

    const twoDimensionalToThreeDimensional = (x: number, y: number) => {
      const radianPhi = y * Math.PI / 180;
      const radianTheta = x * Math.PI / 180;

      const xEye = Math.cos(radianTheta) * Math.cos(radianPhi);
      const yEye = Math.sin(radianPhi);
      const zEye = Math.sin(radianTheta) * Math.cos(radianPhi);

      xSpeed = xEye * rotationSpeedFactor;
      ySpeed = yEye * rotationSpeedFactor;
      zSpeed = zEye * rotationSpeedFactor;
    }

    const setRotationSpeed = () => {
      if (Coordinates.isSet) {
        const {x: xCoord, y: yCoord} = screenToCartesianCoordinates(Coordinates.x, Coordinates.y);
        const mouseX: number = xCoord;
        const mouseY: number = yCoord;
        twoDimensionalToThreeDimensional(mouseX * mouseScaleFactor + mouseXOset, mouseY * mouseScaleFactor);
      }
    }

    const animate = () => {
      setRotationSpeed();
      requestAnimationFrame(animate);
      if (object3D) {
          object3D.rotation.x -= xSpeed;
          object3D.rotation.y -= ySpeed;
          object3D.rotation.z -= zSpeed;
        }
      renderer.render(scene, camera);
    }
    
    animate();
  });

  return null;
}

export default RotateObject3D;
