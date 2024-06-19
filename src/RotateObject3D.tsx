import * as THREE from 'three';
import 'src/App.css'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { useEffect } from 'react';
import { Coordinates } from 'src/Coordinates';
import CoordinatesHandler from 'src/CoordinatesHandler';

const fieldOfView = 45;
const nearPlane = 0.1;
const farPlane = 1000;

const zAxisTranslationOfObject = 12;
const aspectRatio = window.innerWidth / window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
const renderer = new THREE.WebGLRenderer();
const backgroundColor = "#808080";
const ambientLight = new THREE.AmbientLight(0xffffff);

const loader = new OBJLoader();
const mtlLoader = new MTLLoader();
let object3D: THREE.Object3D;

const rotationSpeedFactor = 0.004;
const logarithmBase = 6;
const coordinatesHandler = new CoordinatesHandler(window.innerWidth, window.innerHeight);

let xSpeed = 0.00;
let ySpeed = 0.00;

type Props = {
  selectedFileName: string
}

const RotateObject3D = ({ selectedFileName }: Props) => {
  camera.position.set(0, 0, zAxisTranslationOfObject);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(backgroundColor);

  document.body.appendChild(renderer.domElement);

  const mtlFileName = `./${selectedFileName}.mtl`;
  const objFileName = `./${selectedFileName}.obj`;


  useEffect(() => {
    scene.clear();

    scene.add(ambientLight);

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

    const animate = () => {
      requestAnimationFrame(animate);
      if (object3D) {
        setRotationSpeed();
        object3D.rotation.x -= xSpeed;
        object3D.rotation.y -= ySpeed;
      }
      renderer.render(scene, camera);
    }

    animate();
  }, [selectedFileName]);

  return null;
}

const setRotationSpeed = () => {
  if (Coordinates.isSet) {
    const { x: xCoord, y: yCoord } = coordinatesHandler.screenToCartesianCoordinates(Coordinates.x, Coordinates.y);
    const { xSpeed: xS, ySpeed: yS } = coordinatesHandler.cartesianToLogarithmicSpeedCoordinates(xCoord, yCoord,
      logarithmBase, rotationSpeedFactor);

    xSpeed = xS;
    ySpeed = yS;
  }
};

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

export default RotateObject3D;