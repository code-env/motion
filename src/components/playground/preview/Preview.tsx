// import Canvas from "./canvas";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Image from "./Image";

const Preview = () => {
  const { name } = useSelector((state: RootState) => state.baseEl);
  return (
    <div className="flex-1 h-full text-white min-h-screen relative border-r flex items-center justify-center">
      {name === "image" && <Image />}
    </div>
  );
};

export default Preview;
