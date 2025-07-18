import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';
import { Box, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export const F1Car = ({ position, onPositionChange, onSectionChange, currentSection }) => {
  const [chassis, chassisApi] = useBox(() => ({
    mass: 500,
    position: position || [0, 1, 0],
    args: [2, 0.5, 4],
    material: { friction: 0.1, restitution: 0.1 },
  }));

  const [wheels, wheelsApi] = useBox(() => ({
    mass: 10,
    args: [0.5, 0.5, 0.5],
    material: { friction: 0.7, restitution: 0.1 },
  }));

  const controls = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  const [carPosition, setCarPosition] = useState(new THREE.Vector3(0, 1, 0));
  const [lastSection, setLastSection] = useState(0);

  const engineForce = 800;
  const maxSteerVal = 0.8;
  const brakeForce = 100;

  // Track sections for collision detection
  const trackSections = [
    { position: [0, 0, 0], section: 0 },
    { position: [0, 0, -20], section: 1 },
    { position: [20, 0, -20], section: 2 },
    { position: [20, 0, 0], section: 3 },
    { position: [20, 0, 20], section: 4 },
    { position: [0, 0, 20], section: 5 },
    { position: [-20, 0, 20], section: 6 },
    { position: [-20, 0, 0], section: 7 },
  ];

  const checkSectionCollision = (carPos) => {
    const threshold = 8; // Distance to trigger section change
    for (let i = 0; i < trackSections.length; i++) {
      const section = trackSections[i];
      const distance = Math.sqrt(
        Math.pow(carPos.x - section.position[0], 2) + 
        Math.pow(carPos.z - section.position[2], 2)
      );
      
      if (distance < threshold && section.section !== lastSection) {
        setLastSection(section.section);
        if (onSectionChange) {
          onSectionChange(section.section);
        }
        break;
      }
    }
  };

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

    // Apply forces to chassis
    if (chassis.current) {
      const velocity = chassis.current.velocity;
      const position = chassis.current.position;
      
      // Apply engine force
      if (forward || backward) {
        const forwardVector = new THREE.Vector3(0, 0, force);
        forwardVector.applyQuaternion(chassis.current.quaternion);
        chassisApi.applyForce([forwardVector.x, forwardVector.y, forwardVector.z], [0, 0, 0]);
      }

      // Apply steering (torque)
      if (left || right) {
        chassisApi.applyTorque([0, steer * 200, 0]);
      }

      // Apply drag
      if (velocity) {
        const dragForce = -0.05;
        chassisApi.applyForce([velocity.x * dragForce, 0, velocity.z * dragForce], [0, 0, 0]);
      }

      // Update car position
      const newPosition = new THREE.Vector3(position.x, position.y, position.z);
      setCarPosition(newPosition);
      
      // Check for section changes
      checkSectionCollision(newPosition);
      
      // Callback for camera following
      if (onPositionChange) {
        onPositionChange(newPosition);
      }
    }
  });

  return (
    <group>
      {/* Car Chassis */}
      <Box ref={chassis} args={[2, 0.5, 4]} position={position}>
        <meshStandardMaterial color="#FF0000" />
      </Box>

      {/* Car Body Details */}
      <Box args={[1.5, 0.3, 3]} position={[carPosition.x, carPosition.y + 0.3, carPosition.z]}>
        <meshStandardMaterial color="#000000" />
      </Box>

      {/* Front Wing */}
      <Box args={[1.8, 0.1, 0.3]} position={[carPosition.x, carPosition.y + 0.1, carPosition.z + 2.2]}>
        <meshStandardMaterial color="#333333" />
      </Box>

      {/* Rear Wing */}
      <Box args={[1.6, 0.1, 0.4]} position={[carPosition.x, carPosition.y + 0.8, carPosition.z - 2]}>
        <meshStandardMaterial color="#333333" />
      </Box>

      {/* Wheels */}
      <Cylinder args={[0.3, 0.3, 0.2]} position={[carPosition.x + 0.8, carPosition.y - 0.2, carPosition.z + 1.5]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#111111" />
      </Cylinder>
      <Cylinder args={[0.3, 0.3, 0.2]} position={[carPosition.x - 0.8, carPosition.y - 0.2, carPosition.z + 1.5]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#111111" />
      </Cylinder>
      <Cylinder args={[0.3, 0.3, 0.2]} position={[carPosition.x + 0.8, carPosition.y - 0.2, carPosition.z - 1.5]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#111111" />
      </Cylinder>
      <Cylinder args={[0.3, 0.3, 0.2]} position={[carPosition.x - 0.8, carPosition.y - 0.2, carPosition.z - 1.5]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#111111" />
      </Cylinder>

      {/* Cockpit */}
      <Sphere args={[0.5, 16, 16]} position={[carPosition.x, carPosition.y + 0.6, carPosition.z + 0.5]}>
        <meshStandardMaterial color="#0066FF" transparent opacity={0.7} />
      </Sphere>

      {/* Exhaust flames effect */}
      {controls.current.forward && (
        <Cylinder args={[0.1, 0.3, 0.5]} position={[carPosition.x, carPosition.y + 0.2, carPosition.z - 2.5]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#FF6600" emissive="#FF6600" emissiveIntensity={0.5} />
        </Cylinder>
      )}
    </group>
  );
};