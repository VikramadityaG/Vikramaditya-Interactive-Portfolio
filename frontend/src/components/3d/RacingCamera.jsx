import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const RacingCamera = ({ carPosition, isActive = true }) => {
  const { camera, gl } = useThree();
  const cameraRef = useRef();

  useEffect(() => {
    if (isActive && carPosition) {
      // Set up top-down camera view
      camera.position.set(carPosition.x, carPosition.y + 15, carPosition.z);
      camera.lookAt(carPosition.x, carPosition.y, carPosition.z);
      camera.fov = 60;
      camera.updateProjectionMatrix();
    }
  }, [camera, carPosition, isActive]);

  useFrame(() => {
    if (isActive && carPosition) {
      // Smooth camera following
      const targetPosition = new THREE.Vector3(
        carPosition.x,
        carPosition.y + 15,
        carPosition.z + 5
      );
      
      const targetLookAt = new THREE.Vector3(
        carPosition.x,
        carPosition.y,
        carPosition.z
      );

      // Smooth camera movement
      camera.position.lerp(targetPosition, 0.1);
      
      // Look at the car
      const lookAtTarget = new THREE.Vector3();
      lookAtTarget.copy(camera.position);
      lookAtTarget.lerp(targetLookAt, 0.1);
      camera.lookAt(lookAtTarget);
      
      camera.updateMatrixWorld();
    }
  });

  return null;
};