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
  const languageIcon =
    "https://img.icons8.com/?size=50&id=22183&format=png&color=808080";

  return (
    <div
      className="flex items-start border-zinc-800 rounded-lg hover:bg-zinc-950 hover:border-zinc-300 hover:border-2 shadow-lg overflow-hidden mb-6 mr-4 p-2"
      style={{
        width: "23vw",
        minHeight: "16vh",
        borderRadius: "0.6rem",
        gap: "10px",
        // transition: "border-width 100s",
      }}
    >
      <div className="flex items-center mr-2 text-gray-200">
        <Image
          src={languageIcon}
          alt="Icon"
          className="mt-1"
          width={25}
          height={25}
        />
      </div>
      <div className="flex flex-col justify-start w-full">
        <div className="text-2xl text-start font-semibold font-mono text-gray-100 mb-2">
          {title}
        </div>
        <div className="text-md text-start font-semibold leading-7 text-gray-400 pt-2 pb-2 ">
          { code.substring(0, 60)}
        </div>
      </div>
      <div className="ml-auto flex items-center justify-center">
        <div className="rounded-full h-10 w-10 flex items-center justify-center border-zinc-700 hover:border-zinc-400">
          <MoreVertIcon />
        </div>
      </div>
      {/* <div className="flex flex-wrap mt-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-blue-100 text-blue-800 rounded-full py-1 px-3 text-xs font-medium mr-2 mb-2"
          >
            {tag}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SnippetCard;
