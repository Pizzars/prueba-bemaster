import React from 'react';

interface DividerProps {
    my?: string;
    border?: string;
    borderColor?: string;
    className?: string;
}

const Divider: React.FC<DividerProps> = ({
    my = "my-4",
    border = "border-t-2",
    borderColor = "border-black",
    className
}) => {

    return <hr className={`${my} ${border} ${borderColor} ${className}`} />;
};

export default Divider;
