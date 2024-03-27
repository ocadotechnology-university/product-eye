import React, { Component } from 'react';
import * as THREE from 'three';
import reactLogo from './assets/react.svg'
import viteLogo from './vite.svg'
import './App.css'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


class App extends Component {
  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 20);
    const renderer = new THREE.WebGLRenderer();

    camera.position.set(0, 0, 5);
    let rotationSpeed = 0.01;
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
      
    const ambientLight = new THREE.AmbientLight( 0xffffff );
    scene.add( ambientLight );


    /////
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setFromPoints([new THREE.Vector3(0, -window.innerHeight / 2, 0), new THREE.Vector3(0, window.innerHeight / 2, 0)]);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);
    /////

    let loader = new OBJLoader();
    let object3D: THREE.Object3D;

    loader.load(
      '/Cerberus.obj',
      function (object) {
        object3D = object;
        scene.add(object);
      }
    );
      
    function handleMouseMove(event: MouseEvent) {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      rotationSpeed = mouseX * 0.03;
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

  }

  render() {
    return null;
  }
  
}

export default App;
