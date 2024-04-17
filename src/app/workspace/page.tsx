import Drawer from "@/components/drawer/Drawer";
import Collection from "@/components/workspace/Collection";
import Sidebar from "@/components/workspace/Sidebar";
const WorkspacePage: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-zinc-600 flex">
        {/* Sidebar content goes here */}
        <Sidebar/>
        <Collection/>
      </div>
      <div className="w-3/4 bg-zinc-700">
        {/* Main content goes here */}
        <Drawer />
      </div>
    </div>
  );
};

export default WorkspacePage;