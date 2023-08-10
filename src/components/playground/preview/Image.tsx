import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { imageplaceholder } from "../../../assets";
import { useDropzone } from "react-dropzone";

const Image = () => {
  const { src } = useSelector((state: RootState) => state.imageState);
  const { acceptedFiles, getInputProps, getRootProps } = useDropzone();

  const files = acceptedFiles.map((file, index) => (
    <img src={URL.createObjectURL(file)} key={index} />
  ));

  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps} className="hidden" />
      <img src={imageplaceholder} alt="" />
      <div>{files}</div>
    </div>
  );
};
export default Image;
