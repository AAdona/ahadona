import { useEffect } from 'react';

function MouseMove() {
  useEffect(() => {
    const blob = document.querySelector('.cursor-follower') as HTMLElement;

    function updateCursorPosition(event: PointerEvent) {
      const { clientX, clientY } = event;

      blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 1000, fill: "forwards"});
    }

    document.body.addEventListener('pointermove', updateCursorPosition);

    return () => {
      document.body.removeEventListener('pointermove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="cursor-follower">
      {/* You can add other content here if needed */}
    </div>
  );
}

export default MouseMove;
