import React, { useRef, useEffect } from "react";

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        // Initialize your canvas and drawing logic here
        // You can set up event listeners, draw initial content, etc.

        let offsetY = 0;
        const itemHeight = 50;

        const drawItem = (y: number) => {
          // Implement your drawing logic here
          // You can draw shapes, text, images, etc.
          context.fillStyle = "black";
          context.fillRect(0, y, canvas.width, itemHeight);
        };

        const handleScroll = () => {
          const { height } = canvas.getBoundingClientRect();
          const visibleItems = Math.ceil(height / itemHeight);
          const totalItems = visibleItems + 1;

          context.clearRect(0, 0, canvas.width, canvas.height);

          for (let i = 0; i < totalItems; i++) {
            const itemY = offsetY + i * itemHeight;
            drawItem(itemY);
          }

          offsetY += 1; // Adjust the scrolling speed as needed
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial drawing

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-screen h-screen bg-white"
      />
    </div>
  );
};

export default Canvas;
