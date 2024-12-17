'use client'

import React, { useRef, useState } from 'react';
import './ImageSlider.css'; // Arquivo CSS separado

type ImageSliderProps = {
  images: string[];
  children: React.ReactElement;
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images, children }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Função para mover o slider ao clicar nos botões
  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 300; // Distância de scroll (ajuste conforme necessário)
      sliderRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  // Eventos de arrasto
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="slider-wrapper">
      {/* Botão Esquerdo */}
      <button className="nav-button left" onClick={() => scrollSlider('left')}>
        &#10094;
      </button>

      {/* Slider */}
      <div
        className="slider-container"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        {children}
      </div>

      {/* Botão Direito */}
      <button className="nav-button right" onClick={() => scrollSlider('right')}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;