import ActionPanel from "../components/playground/actionpanel/ActionPanel";
import ControlPanel from "../components/playground/controlpanel/ControlPanel";
import Preview from "../components/playground/preview/Preview";

const Playground = () => {
  return (
    <div className="w-full bg-[#121212] min-h-screen text-white flex">
      <ActionPanel />
      <Preview />
      <ControlPanel />
    </div>
  );
};

export default Playground;
