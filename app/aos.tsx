'use client'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export function AosInit() {
  useEffect(() => {
    Aos.init({
      easing: 'ease-out-cubic',
      duration: 1500,
      once: true,
    });
  }, []);

  return null
}

