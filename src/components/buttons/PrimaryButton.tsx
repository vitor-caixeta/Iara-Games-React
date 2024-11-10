import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export const PrimaryButton: React.FC<{
  title: string;
  onClick: () => void;
  style?: React.CSSProperties;
}> = (props) => {
  const [isHovered, setIsHovered] = useState(false); 

  const defaultStyle: React.CSSProperties = {
    backgroundColor: '#E01C6A', 
    border: 'none',
    color: 'white',
    transition: 'background-color 0.3s ease', 
  };

  const hoverStyle: React.CSSProperties = {
    backgroundColor: '#D0175D', 
  };

  return (
    <Button
      onClick={props.onClick}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
      style={{ ...defaultStyle, ...props.style, ...(isHovered ? hoverStyle : {}) }} 
    >
      {props.title}
    </Button>
  );
}
