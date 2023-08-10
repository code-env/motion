import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ImageControl from "./ImageControl";

const ControlPanel = () => {
  const { name: elementName } = useSelector((state: RootState) => state.baseEl);

  return (
    <div className="w-1/5 p-2 flex gap-4 flex-col">
      <p>Control panel</p>
      <div className="">{elementName === "image" && <ImageControl />}</div>
    </div>
  );
};

export default ControlPanel;
