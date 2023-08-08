import { useMousePosition } from "../../hooks/mousePosition";
import Header from "./header";

const Wrapper = () => {
  const { x, y } = useMousePosition();

  // console.log(mousePosition);

  // Prevent zooming on mouse wheel event
  window.addEventListener(
    "wheel",
    (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  // Prevent zooming on keyboard shortcuts
  window.addEventListener("keydown", (event) => {
    if (
      (event.ctrlKey || event.metaKey) &&
      (event.key === "+" || event.key === "-")
    ) {
      event.preventDefault();
    }
  });

  return (
    <div
      className="absolute top-0 left-0
    w-full bg-red-500"
    >
      <Header />
      <div>
        <p>
          <span>x:{x}</span>
          <span>x:{y}</span>
        </p>
      </div>
    </div>
  );
};

export default Wrapper;
