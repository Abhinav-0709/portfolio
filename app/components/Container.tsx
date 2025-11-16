import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string; 
}

const Container = ({ children, className = '' }: ContainerProps) => {
    return (
        <div
            className={`
        max-w-6xl  // Sets the max content width (1152px)
        mx-auto     // Centers the content horizontally
        px-4        // Standard horizontal padding for mobile
        md:px-8     // Standard horizontal padding for desktop
        ${className}  // Allows us to add any extra classes
      `}
        >
            {children}
        </div>
    );
};

export default Container;