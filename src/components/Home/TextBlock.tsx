import React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
  icon: JSX.Element;
  className?: string;
}

export const TextBlock = ({ children, title, className, icon }: Props) => {
  return (
    <div className={`home__text-block ${className || ''}`}>
      <div className="text-icon">{icon}</div>
      <h2 className="subtitle">{title}</h2>
      {children}
    </div>
  );
};
