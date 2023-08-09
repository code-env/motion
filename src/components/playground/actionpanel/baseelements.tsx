import { useState } from "react";
// import "../../styles/baseelements.scss";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { baseElements } from "../../../constants";
import clsx from "clsx";

const BaseElements = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [preview, setPreview] = useState(null);
  // const dispatch = useDispatch();

  // const handleDragStart = () => {
  // dispatch(startDrag(name));
  // };

  // const handleDragEnd = () => {
  //   // dispatch(endDrag());
  // };

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
              className="border border-gray-300 w-full flex flex-col gap-2 p-2 items-center justify-center rounded-md cursor-pointer duration-300 hover:bg-violet-500 hover:border-violet-500"
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
            // Render the dropped element in the preview window
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
