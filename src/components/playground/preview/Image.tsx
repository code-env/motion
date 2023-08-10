import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { drophere, imageplaceholder } from "../../../assets";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const ImageContainer = () => {
  const [file, setFile] = useState<File>();
  const { src: changedImage } = useSelector(
    (state: RootState) => state.imageState
  );

  console.log(changedImage, file);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        setFile(file);
      });
    },
  });

  return (
    <div className="image__container  flex items-center justify-center">
      {file ? (
        <div className="w-1/2 ">
          <img
            src={
              changedImage
                ? URL.createObjectURL(changedImage)
                : URL.createObjectURL(file)
            }
            alt=""
            className="w-full"
          />
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={isDragActive ? "active imagedrop" : "imagedrop"}
        >
          <input
            {...getInputProps()}
            accept=".jpg,.png,.svg,.gif"
            className="hidden"
          />
          {isDragActive ? (
            <img src={drophere} alt="" />
          ) : (
            <div className="dropandbrowse">
              <img src={imageplaceholder} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
