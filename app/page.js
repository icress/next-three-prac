'use client'

import Image from 'next/image';
import styles from './page.module.css';
import { Canvas } from '@react-three/fiber';
import Floor from '@/components/floor';
import Box from '@/components/box';
import LightBulb from '@/components/lightbulb';

export default function Home() {
  return (
    <div className={styles.scene}>
      <Canvas
        shadows
        className={styles.canvas}
        camera={{
          position: [-6, 7, 7,],
        }}
      >
        <ambientLight color={'white'} intensity={0.3} />
        <LightBulb position={[3, 3, 3]} />
        <Box rotateX={3} rotateY={10} />
        <Floor position={[-5, -1, 0]} />
      </Canvas>
    </div>
  );
}

