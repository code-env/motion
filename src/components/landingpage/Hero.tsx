import React from "react";
import GradientText from "../ui/GradientText";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="flex flex-col gap-8">
        <div className="rounded-full p-1 h-full flex items-center  bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 w-fit gap-1 mx-auto">
          <Button label="New" className="bg-violet-500" roundedFull />
          <p className="flex items-center pr-2 gap-1">
            Want to contribute? You can do that
            <Link
              to="https://github.com/code-env/motion"
              target="_blank"
              className="text-white underline"
            >
              here
            </Link>
            <ChevronRight />
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-6xl font-extrabold capitalize">
            creating animations
          </h1>
          <GradientText
            label="has never been easier"
            className="text-6xl font-extrabold capitalize"
          />
        </div>
        <p className="text-center text-slate-400">
          MotionGround is an online playground for Framer Motion that lets you{" "}
          <br />
          visually create and customize animations and transitions with ease.
        </p>
        <Button
          label="Get Started for Free"
          gradient
          className="w-fit self-center"
          roundedFull
        />
      </div>
    </div>
  );
};

export default Hero;
