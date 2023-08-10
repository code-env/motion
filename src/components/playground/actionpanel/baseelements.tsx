import { useState } from "react";
// import "../../styles/baseelements.scss";
import { ChevronRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { baseElements } from "../../../constants";
import clsx from "clsx";
// import baseEL from "../../../redux/slice/baseEL";
import { useDispatch } from "react-redux/es/exports";
// import { RootState } from "../../../redux/store";
import { changeEl } from "../../../redux/slice/baseEL";

type baseEl = {
  name: string;
  icon: LucideIcon;
};

const BaseElements = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();

  // const dispatch = useDispatch();

  // const handleDragStart = () => {
  // dispatch(startDrag(name));
  // };
  //
  // const handleDragEnd = () => {
  //   // dispatch(endDrag());
  // };

  const handleClick = (element: baseEl) => {
    dispatch(changeEl(element.name));
  };

  return (
    <div className="p-2">
      <div className="flex flex-col gap-2">
        <motion.div className="base__header">
          <button
            className={clsx(
              "flex items-center w-full text-gray-300 text-sm justify-between"
            )}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Base Elements
            <ChevronRight
              className={clsx(
                "duration-300 transition-all",
                isOpen && "rotate-90"
              )}
            />
          </button>
        </motion.div>
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { height: "auto" },
            closed: { height: 0 },
          }}
          className="grid grid-cols-2 gap-2"
        >
          {baseElements.map((el, index) => (
            <motion.div
              key={index}
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: "-10%" },
              }}
              onClick={() => handleClick(el)}
              className="border border-gray-500 w-full flex flex-col gap-2 p-2 items-center justify-center rounded-md cursor-pointer duration-300 hover:bg-violet-500 hover:border-violet-500"
              // onDragEnd={handleDragEnd}
            >
              <el.icon />
              <p className="capitalize font-light"> {el.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {preview && (
        <div
          className="window"
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => {
            event.preventDefault();
            setPreview(null);
          }}
        >
          {preview}
        </div>
      )}
    </div>
  );
};

export default BaseElements;
