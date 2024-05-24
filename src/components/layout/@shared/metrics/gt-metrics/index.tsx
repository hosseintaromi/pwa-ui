'use client';
import { init } from '@metrixorg/websdk';
import { useEffect } from 'react';

export default function GtMetrics() {
  useEffect(() => {
    init('eicxukkygmmuumh', 'da584e2c-ff19-4b0f-a005-5fb9723d1cd3');
  }, []);
  return null;
}

export { newEvent } from '@metrixorg/websdk';
