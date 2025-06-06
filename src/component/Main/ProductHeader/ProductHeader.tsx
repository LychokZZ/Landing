'use client';
import { useState } from 'react';
import s from './ProductHeader.module.scss';
import AdditionalText from './AdditionalText/AdditionalText';

const ProductHeader = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    // Переміщує маску кудись далеко — наприклад, за межі екрану
    e.currentTarget.style.setProperty('--x', `-1000px`);
    e.currentTarget.style.setProperty('--y', `-1000px`);
  };

  return (
    <div
      className={s.ProductHeaderContainer}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={s.Background}>
        <AdditionalText />
      </div>

      <div className={s.Foreground}>
        <div className={s.TextContainer}>
          <h1 className={s.Professional}>Professional</h1>
          <h1 className={s.Software}>Software</h1>
          <h1 className={s.Development}>Development</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
