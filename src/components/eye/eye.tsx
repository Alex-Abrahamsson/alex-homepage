import React, { useState, useEffect, useRef, FC } from 'react';

interface IEye {
    top: string;
    left: string;
    width: string;
    height: string;
}

const Eye: FC<IEye> = ({ top, left, width, height }) => {
    const [rotationAngle, setRotationAngle] = useState<number>(0);
    const eyeRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const mouseMoveHandler = (event: MouseEvent) => {
            if (eyeRef.current) {
                const eyeRect = eyeRef.current.getBoundingClientRect();
                const eyeX = eyeRect.left + eyeRect.width / 2;
                const eyeY = eyeRect.top + eyeRect.height / 2;
                const radian = Math.atan2(event.clientY - eyeY, event.clientX - eyeX);
                const rotation = radian * (180 / Math.PI);
                setRotationAngle(rotation);
            }
        };
        window.addEventListener('mousemove', mouseMoveHandler);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);

    return (
        <div 
            ref={eyeRef}
            style={{ 
                position: 'absolute', 
                top: top, 
                left: left, 
                width: width, 
                height: height, 
                borderRadius: '50%',
                zIndex: 1000,
                backgroundColor: 'white',
            }}
        >
            <div
                style={{
                    position: 'relative',
                    top: '25%',
                    left: '25%',
                    width: '50%',
                    height: '50%',
                    borderRadius: '50%',
                    backgroundColor: 'black',
                    transform: `rotate(${rotationAngle}deg) translateX(5px)`
                }}
            />
        </div>
    );
};

export default Eye;