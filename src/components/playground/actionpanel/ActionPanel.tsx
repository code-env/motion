import ActionBar from "./actionbar";
import MiniBar from "./minibar";

const ActionPanel = () => {
  return (
    <div className="w-1/5 min-h-screen border-r border-green-500 max-w-[500px] flex">
      <MiniBar />
      <ActionBar />
    </div>
  );
};

export default ActionPanel;
