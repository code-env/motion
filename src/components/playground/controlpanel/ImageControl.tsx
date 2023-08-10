import { useDispatch } from "react-redux";
import { changeImageProps } from "../../../redux/slice/imageSlice";

const ImageControl = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="enter the image src"
        onChange={(e) => dispatch(changeImageProps(e.target.value))}
        className="border-gray-500 border bg-transparent px-4 py-1 rounded"
      />
    </div>
  );
};

export default ImageControl;
