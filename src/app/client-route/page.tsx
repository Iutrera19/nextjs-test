"use client"

import { clientSideFunction } from '@/utils/client-utils';
import { useTheme } from '../components/theme-provider';
import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

export default function ClientRoutePage() {
  const theme = useTheme();
  const settings = {
    dots: true,
  };
  const result = clientSideFunction();
  return (
    <h1 style={{ color: theme.colors.secondary}}>Client router page {result}</h1>
  );
}


// export default function ClientRoutePage() {
//   return <h1>Client Route {result}</h1>;
// }