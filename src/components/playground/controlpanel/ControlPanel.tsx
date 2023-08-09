import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ImageControl from "./ImageControl";

const ControlPanel = () => {
  const { name: elementName } = useSelector((state: RootState) => state.baseEl);

  return (
    <div className="w-1/5 p-2">
      {elementName === "image" && <ImageControl />}
    </div>
  );
};

export default ControlPanel;
