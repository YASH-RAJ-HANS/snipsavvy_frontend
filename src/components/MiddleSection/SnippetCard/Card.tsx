import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";

interface SnippetCardProps {
  title: string;
  code: string;
  description: string;
  tags: string[];
}

const SnippetCard: React.FC<SnippetCardProps> = ({
  title,
  code,
  description,
  tags,
}) => {
  const languageIcon = "https://img.icons8.com/?size=50&id=22181&format=png";

  return (
    <div
      className="flex items-start border-zinc-800 rounded-lg hover:bg-zinc-950 hover:border-zinc-100 hover:border-4 overflow-hidden mb-6 mr-4 p-2"
      style={{
        width: "23vw",
        height: "14vh",
        borderRadius: "0.6rem",
      }}
    >
      <div className="flex items-center mr-2">
        <Image src={languageIcon} alt="Icon" width={40} height={40} />
      </div>

      <div className="flex flex-col justify-start">
        <div className="text-xl font-semibold font-sans text-gray-300 mb-2 pl-2">
          {title}
        </div>
        <div className="text-md font-semibold text-gray-500 h-20 overflow-hidden pl-2">
          {code.substring(0, 60)}
        </div>
      </div>
      <div className="flex items-center justify-center ml-auto">
        <div className="rounded-full h-10 w-10 flex items-center justify-center border-zinc-700 hover:border-zinc-400">
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
};

export default SnippetCard;
