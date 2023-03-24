import React from 'react';
import styled, { keyframes } from 'styled-components';

const PieChart = ({ percent }: { percent: number }) => {
  const animation = keyframes`
    0% {
      stroke-dasharray: 0, 100;
    }
    100% {
      stroke-dasharray: ${percent}, ${100 - percent};
    }
  `;

  const Circle = styled.circle`
    animation: ${animation} 2s;
  `;

  return (
    <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
      <circle cx="20" cy="20" r="15.91549430918954" fill="transparent"></circle>
      <circle
        cx="20"
        cy="20"
        r="15.91549430918954"
        stroke="rgba(255, 255, 255, 0.125)"
        fill="transparent"
        strokeWidth="3.5"
      ></circle>
      <Circle
        className="pie-color"
        cx="20"
        cy="20"
        r="15.91549430918954"
        fill="transparent"
        strokeWidth="3.5"
        strokeDasharray={`${percent} ${100 - percent}`}
        strokeDashoffset="25"
      ></Circle>
    </svg>
  );
};

export default PieChart;
