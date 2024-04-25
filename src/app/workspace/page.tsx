import SplitButton from "@/components/button/Button";
import Drawer from "@/components/drawer/Drawer";
import SnippetSection from "@/components/snippet/snippet";
import Collection from "@/components/workspace/Collection";
import Sidebar from "@/components/workspace/Sidebar";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
const WorkspacePage: React.FC = () => {
  return (
    <div className=" h-screen text-white text- bg-[#27272A]">
      {/* <h1>Create a New Collection</h1>
      <h1>Explore Through more collections</h1> */}
      <div style={{width:"75vw"}} className="fixed top-0  py-1 pr-3 flex justify-between items-center bg-gray-800 py-4">
        <div className="bg-gray-600 border-2 ml-6 px-2 border-gray-400 h-10 flex items-center rounded-l-md">
        <SearchIcon/>
        </div>
        
        <input
          type="text"
          className="w-10/12 h-10 vh-5 bg-gray-800 text-white  px-4 border-2 border-gray-400 hover:shadow-outline focus:outline-none  border-l-0 rounded-r-md"
          placeholder="Enter text..."
        />
        <div className="w-2/12 vh-6 flex justify-between pl-6 items-center">
          <NotificationsIcon className="text-gray-600 mr-3"/>
          
          <SplitButton  />
        </div>
      </div>
    
      <div className="mt-4 overflow-hidden">
        <SnippetSection />
        <Drawer />
      </div>
    </div>
  );
};

export default WorkspacePage;
