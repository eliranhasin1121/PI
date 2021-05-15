import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';


export default () => {

  const [isMobile, setIsMobile] = useState();
  const [isTablet, setIsTablet] = useState(false);

  const newIsMobile = useMediaQuery({ maxWidth: 735 });
  const newIsTablet = useMediaQuery({ minWidth: 736, maxWidth: 980 });
  const isPortrait = useMediaQuery({ orientation: 'portrait' });
  const middleScreen = useMediaQuery({ minWidth: 1400 });
  const bigScreen = useMediaQuery({ minWidth: 1800 });

  useEffect(() => {
    setIsMobile(newIsMobile);

  }, [isTablet, newIsMobile]);

  useEffect(() => {
    setIsTablet(newIsTablet);
  }, [isMobile, newIsTablet]);

  return {
    isTablet,
    isMobile,
    isPortrait,
    isDevice: isTablet || isMobile,
    middleScreen,
    bigScreen,
  };
};