import * as THREE from 'three';
import './App.css'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { useEffect } from 'react';
import { Coordinates } from './Coordinates';
import CoordinateTransformer  from './CoordinateTransformer';

const fieldOfView = 45;
const nearPlane = 0.1;
const farPlane = 1000;

const rotationSpeedFactor = 0.2;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(fieldOfView, window.innerWidth / window.innerHeight, nearPlane, farPlane);
const renderer = new THREE.WebGLRenderer();
const backgroundColor = "#808080";


const RotateObject3D = ( {selectedFileName }: { selectedFileName : string } ) => {
  let xSpeed = 0.00;
  let ySpeed = 0.00;
  let zSpeed = 0.00;

  useEffect(() => {
    scene.clear();
    
    camera.position.set(0, 0, 10);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(backgroundColor);
    

    document.body.appendChild(renderer.domElement);
        
    const ambientLight = new THREE.AmbientLight( 0xffffff );
    scene.add( ambientLight );

    const loader = new OBJLoader();
    let object3D: THREE.Object3D;
    const mtlLoader = new MTLLoader();

    
    let mtlFileName = `./${selectedFileName }.mtl`; 
    let objFileName = `./${selectedFileName }.obj`;


    mtlLoader.load(
      mtlFileName,
      (materials) => {
        materials.preload();
        loader.setMaterials(materials);
        
        loader.load(
          objFileName,
        (object) => {
          object3D = object;
          scene.add(object);
          updateCameraToFitObject(camera, object);
        })
      }
    );

    const setRotationSpeed = () => {
      if (Coordinates.isSet) {
        const {x: xCoord, y: yCoord} = CoordinateTransformer.screenToCartesianCoordinates(Coordinates.x, Coordinates.y,
                                                              window.innerWidth, window.innerHeight);
        const {xSpeed: x, ySpeed: y, zSpeed: z} = CoordinateTransformer.twoDimensionalToThreeDimensional(
                                                              xCoord, yCoord, rotationSpeedFactor);
        xSpeed = x;
        ySpeed = y;
        zSpeed = z;
      }
    }

    const updateCameraToFitObject = (camera: THREE.PerspectiveCamera, object: THREE.Object3D<THREE.Object3DEventMap>) => {
      const box = new THREE.Box3().setFromObject(object);
      const size = box.getSize(new THREE.Vector3()).length();
      const center = box.getCenter(new THREE.Vector3());

      const halfSizeToFitOnScreen = size * 0.5;
      const halfFovY = THREE.MathUtils.degToRad(camera.fov * 0.5);
      const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);

      const direction = new THREE.Vector3().subVectors(camera.position, center).normalize();
      camera.position.copy(direction.multiplyScalar(distance).add(center));

      camera.lookAt(center);
    };
    

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
  }, [selectedFileName ]);

  return null;
}

export default RotateObject3D;
