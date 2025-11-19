import { useState, useEffect } from "react";

export const useMobile = () =>{
    const [ isMobile, setIsMobile ] = useState(window.innerWidth <= 768 || window.innerHeight <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768 || window.innerHeight <= 768);

    useEffect(() => {
    window.addEventListener("resize", () => handleResize);
    return () => window.removeEventListener("resize", () => handleResize);
    }, []);

    return { isMobile }
}
