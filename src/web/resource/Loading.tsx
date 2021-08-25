import React from 'react';

export interface ILoadingProps {
  width: number;
  height: number;
  color: string;
}

export default function Loading(props: Partial<ILoadingProps>) {
  const { width, height, color } = {
    width: 24,
    height: 18,
    color: '#FF6700',
    ...props,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 24 30"
    >
      <rect
        x="0"
        y="7.6416"
        width="4"
        height="14.7168"
        fill={color}
        opacity="0.2"
      >
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
      </rect>
      <rect
        x="8"
        y="5.1416"
        width="4"
        height="19.7168"
        fill={color}
        opacity="0.2"
      >
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
      </rect>
      <rect
        x="16"
        y="7.3584"
        width="4"
        height="15.2832"
        fill={color}
        opacity="0.2"
      >
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </svg>
  );
}
