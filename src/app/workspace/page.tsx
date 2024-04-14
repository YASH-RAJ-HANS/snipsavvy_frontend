import Drawer from "@/components/drawer/Drawer";
const WorkspacePage: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-zinc-600">
        {/* Sidebar content goes here */}
      </div>
      <div className="w-3/4 bg-zinc-700">
        {/* Main content goes here */}
        <Drawer />
      </div>
    </div>
  );
};

export default WorkspacePage;