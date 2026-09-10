import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the hovered element is clickable
      const isClickable = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button');
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[100] transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div 
        className={`flex items-center gap-2 whitespace-nowrap bg-white text-black rounded-full border border-gray-200 transition-all duration-300 ease-out ${
          isHovering ? 'px-4 py-2 opacity-100 scale-100' : 'w-4 h-4 opacity-70 scale-100 -translate-x-1/2 -translate-y-1/2'
        }`}
      >
        {isHovering && (
          <>
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
              arrow_outward
            </span>
            <span className="text-sm font-medium tracking-wide font-sans">Explore</span>
          </>
        )}
      </div>
    </div>
  );
}
