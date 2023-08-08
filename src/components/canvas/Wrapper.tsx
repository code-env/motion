import { useMousePosition } from "../../hooks/mousePosition";
import Header from "./header";

const Wrapper = () => {
  const mousePosition = useMousePosition();

  console.log(mousePosition);

  return (
    <div
      className="absolute top-0 left-0
    w-full"
    >
      <Header />
      <div></div>
    </div>
  );
};

export default Wrapper;
