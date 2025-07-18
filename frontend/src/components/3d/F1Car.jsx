import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useBox, useRaycastVehicle } from '@react-three/cannon';
import { Box, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export const F1Car = ({ position, onPositionChange }) => {
  const [chassis, chassisApi] = useBox(() => ({
    mass: 500,
    position: position || [0, 0, 0],
    args: [2, 0.5, 4],
    material: { friction: 0.1, restitution: 0.1 },
  }));

  const [wheels, wheelsApi] = useBox(() => ({
    mass: 10,
    args: [0.5, 0.5, 0.5],
    material: { friction: 0.7, restitution: 0.1 },
  }));

  const vehicle = useRaycastVehicle(() => ({
    chassisBody: chassis,
    wheelInfos: [
      {
        radius: 0.3,
        directionLocal: [0, -1, 0],
        axleLocal: [1, 0, 0],
        suspensionStiffness: 60,
        suspensionRestLength: 0.1,
        maxSuspensionForce: 10000,
        maxSuspensionTravel: 0.3,
        dampingRelaxation: 10,
        dampingCompression: 10,
        frictionSlip: 5,
        rollInfluence: 0.01,
        useCustomSlidingRotationalSpeed: true,
        customSlidingRotationalSpeed: -30,
        isFrontWheel: true,
      },
      {
        radius: 0.3,
        directionLocal: [0, -1, 0],
        axleLocal: [1, 0, 0],
        suspensionStiffness: 60,
        suspensionRestLength: 0.1,
        maxSuspensionForce: 10000,
        maxSuspensionTravel: 0.3,
        dampingRelaxation: 10,
        dampingCompression: 10,
        frictionSlip: 5,
        rollInfluence: 0.01,
        useCustomSlidingRotationalSpeed: true,
        customSlidingRotationalSpeed: -30,
        isFrontWheel: true,
      },
      {
        radius: 0.3,
        directionLocal: [0, -1, 0],
        axleLocal: [1, 0, 0],
        suspensionStiffness: 60,
        suspensionRestLength: 0.1,
        maxSuspensionForce: 10000,
        maxSuspensionTravel: 0.3,
        dampingRelaxation: 10,
        dampingCompression: 10,
        frictionSlip: 5,
        rollInfluence: 0.01,
        useCustomSlidingRotationalSpeed: true,
        customSlidingRotationalSpeed: -30,
        isFrontWheel: false,
      },
      {
        radius: 0.3,
        directionLocal: [0, -1, 0],
        axleLocal: [1, 0, 0],
        suspensionStiffness: 60,
        suspensionRestLength: 0.1,
        maxSuspensionForce: 10000,
        maxSuspensionTravel: 0.3,
        dampingRelaxation: 10,
        dampingCompression: 10,
        frictionSlip: 5,
        rollInfluence: 0.01,
        useCustomSlidingRotationalSpeed: true,
        customSlidingRotationalSpeed: -30,
        isFrontWheel: false,
      },
    ],
    wheelBodies: [wheels, wheels, wheels, wheels],
  }));

  const controls = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  const engineForce = 300;
  const maxSteerVal = 0.5;
  const brakeForce = 50;

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          controls.current.forward = true;
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          controls.current.backward = true;
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          controls.current.left = true;
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          controls.current.right = true;
          break;
      }
    };

    const handleKeyUp = (e) => {
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          controls.current.forward = false;
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          controls.current.backward = false;
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          controls.current.left = false;
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          controls.current.right = false;
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame(() => {
    const { forward, backward, left, right } = controls.current;

    const force = forward ? -engineForce : backward ? engineForce : 0;
    const steer = left ? -maxSteerVal : right ? maxSteerVal : 0;

    vehicle.setSteeringValue(steer, 0);
    vehicle.setSteeringValue(steer, 1);
    vehicle.applyEngineForce(force, 2);
    vehicle.applyEngineForce(force, 3);

    if (!forward && !backward) {
      vehicle.setBrake(brakeForce, 2);
      vehicle.setBrake(brakeForce, 3);
    } else {
      vehicle.setBrake(0, 2);
      vehicle.setBrake(0, 3);
    }

    // Get car position for camera following
    if (onPositionChange && chassis.current) {
      const position = chassis.current.position;
      onPositionChange(position);
    }
  });

  return (
    <group>
      {/* Car Chassis */}
      <Box ref={chassis} args={[2, 0.5, 4]}>
        <meshStandardMaterial color="#FF0000" />
      </Box>

      {/* Car Body Details */}
      <Box position={[0, 0.3, 0]} args={[1.5, 0.3, 3]}>
        <meshStandardMaterial color="#000000" />
      </Box>

      {/* Front Wing */}
      <Box position={[0, 0.1, 2.2]} args={[1.8, 0.1, 0.3]}>
        <meshStandardMaterial color="#333333" />
      </Box>

      {/* Rear Wing */}
      <Box position={[0, 0.8, -2]} args={[1.6, 0.1, 0.4]}>
        <meshStandardMaterial color="#333333" />
      </Box>

      {/* Wheels */}
      <Cylinder position={[0.8, -0.2, 1.5]} args={[0.3, 0.3, 0.2]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#111111" />
      </Cylinder>
      <Cylinder position={[-0.8, -0.2, 1.5]} args={[0.3, 0.3, 0.2]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#111111" />
      </Cylinder>
      <Cylinder position={[0.8, -0.2, -1.5]} args={[0.3, 0.3, 0.2]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#111111" />
      </Cylinder>
      <Cylinder position={[-0.8, -0.2, -1.5]} args={[0.3, 0.3, 0.2]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#111111" />
      </Cylinder>

      {/* Cockpit */}
      <Sphere position={[0, 0.6, 0.5]} args={[0.5, 16, 16]}>
        <meshStandardMaterial color="#0066FF" transparent opacity={0.7} />
      </Sphere>
    </group>
  );
};