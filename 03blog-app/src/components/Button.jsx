import React from 'react';

const Button = ({
    children,
    type = 'button',
    bgcolor = 'bg-blue-600',
    textColor = 'white',
    className = '',
    ...props
}) => {
    return (
        <button className={`py-2 px-4 rounded-lg ${bgcolor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}

export default Button;
