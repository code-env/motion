import { useDispatch } from "react-redux";
import { changeImageProps } from "../../../redux/slice/imageSlice";
import { ChangeEvent } from "react";
import { buttonVariants } from "../../ui/Button";

const ImageControl = () => {
  const dispatch = useDispatch();

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      dispatch(changeImageProps(files[0]));
    }
  };
  return (
    <div className="w-full h-full overflow-hidden">
      <label htmlFor="file">
        <input
          type="file"
          className="hidden"
          id="file"
          onChange={handleChangeImage}
        />
        <span className={buttonVariants({ variant: "default" })}>
          Change image
        </span>
      </label>
    </div>
  );
};

export default ImageControl;
