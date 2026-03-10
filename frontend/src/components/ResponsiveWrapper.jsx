import React, { useState, useEffect } from 'react';

const ResponsiveWrapper = ({ desktopComponent: Desktop, mobileComponent: Mobile }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // If no mobile specific component is provided, fallback to the desktop one
    if (isMobile && Mobile) {
        return <Mobile />;
    }

    return <Desktop />;
};

export default ResponsiveWrapper;
