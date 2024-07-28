import React, { useRef, useState, MouseEvent } from 'react';

import { ComicGroupContainer, ComicGroupWrapper } from './ComicGroup.styles';

interface ComicGroupProps {
    children: React.ReactNode;
}

function ComicGroup({ children }: ComicGroupProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        if (containerRef.current) {
            setIsDragging(true);
            setStartX(e.pageX - containerRef.current.offsetLeft);
            setScrollLeft(containerRef.current.scrollLeft);
            containerRef.current.style.cursor = 'grabbing';
        }
    };

    const disableDragging = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !containerRef.current) return;
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = x - startX;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <ComicGroupWrapper
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={disableDragging}
            onMouseUp={disableDragging}
            onMouseMove={handleMouseMove}>
            <ComicGroupContainer>{children}</ComicGroupContainer>
        </ComicGroupWrapper>
    );
}

export default ComicGroup;
