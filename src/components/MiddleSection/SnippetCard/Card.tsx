import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MoreVertIcon from '@mui/icons-material/MoreVert';
interface SnippetCardProps {
  title: string;
  code: string;
}

const SnippetCard: React.FC<SnippetCardProps> = ({ title, code }) => {
  return (
    <div
      style={{ width: "23vw", height: "14vh",borderRadius:"0.6rem" }}
      className="mb-6 mr-4 rounded-lg flex justify-center items-center  border-zinc-800 rounded justify-between hover:bg-zinc-950 rounded-lg hover:border-zinc-400 hover:border-2 overflow-hidden"
    >
      {/* <div className="w-2/12 flex flex-col items-center pt-3">LO</div> */}
      <div className="w-8/12 flex flex-col h-full pt-2 ">
        <div className="text-xl font-bold text-gray-300 flex justify-start pl-4">{title}</div>
        <div className="text-md font-semibold mb-2 text-gray-500 h-20 ">
          {code.substring(0, 60)}
        </div>
      </div>
      <div className="w-4/12 flex flex-col  justify-between items-center h-[90%]">
        <div className="flex h-10">
          {/* <div className="rounded full h-10 w-8  border-zinc-700 hover:border-zinc-400"><DeleteIcon/></div>
          <div className=" rounded full h-10 w-8 border-zinc-700 hover:border-zinc-400"><EditNoteIcon/></div> */}
          <div className="rounded full h-10 w-8  border-zinc-700 hover:border-zinc-400"><MoreVertIcon/></div>
        </div>
       
        <div className="flex items-center justify-center">
          {/* <div className="border-2 rounded-lg h-8 w-8 mb-2 mr-2"></div> */}
          {/* <div>2min</div> */}
        </div>
      </div>
    </div>
  );
};
export default SnippetCard;
