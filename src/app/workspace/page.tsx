import Drawer from "@/components/drawer/Drawer";
import SnippetSection from "@/components/snippet/snippet";
import Collection from "@/components/workspace/Collection";
import Sidebar from "@/components/workspace/Sidebar";
const WorkspacePage: React.FC = () => {
  return (
    <div className=" h-screen text-white text-">
      {/* <h1>Create a New Collection</h1>
      <h1>Explore Through more collections</h1> */}
      <SnippetSection/>
      <Drawer/>
    </div>
  );
};

export default WorkspacePage;