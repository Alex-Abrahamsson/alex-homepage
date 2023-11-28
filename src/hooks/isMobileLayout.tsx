import React, { useEffect, useState } from 'react';

export default function IsMobileLayout() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const resize = () => {
            setIsMobile(window.innerWidth < 850);
        };
        window.addEventListener('resize', resize);
        resize();
        return () => window.removeEventListener('resize', resize);
    }, []);

    return isMobile;
}