import React, { useState,useEffect } from 'react';

export default function useResize(myRef){
    const [width,setWidth] = useState(0);
    const [height,setHight] = useState(0);

    useEffect(() => {
const handleResize = (e) => {
    setWidth(myRef.current.offsetWidth);
    setHight(myRef.current.offsetHight); 
}
window.addEventListener('resize',handleResize);

return () => window.removeEventListener('resize',handleResize);
    },[myRef])


    return { height,width };
}