import React from "react";
interface SnippetCardProps {
  title: string;
  description: string;
}

const SnippetCard: React.FC<SnippetCardProps> = ({ title, description }) => {
  return (
    <div
      style={{width: "21vw", height: "16vh" }}
      className="pt-2 px-2 pb-3 mb-2 mr-4 flex border-gray-900 border-2 justify-between bg-gray-900 rounded-lg hover:border-white hover:border-2 overflow-hidden"
    >
      {/* <div className="w-2/12 flex flex-col items-center pt-3">LO</div> */}
      <div className="8/12 flex flex-col  mr-2 pl-2 ">
        <div className="text-2xl font-semibold mb-2 ">{title}</div>
        <div>{description.substring(0, 60)}</div>
      </div>
      <div className="w-2/12 flex flex-col justify-center items-center">
        <div className="bg-white rounded full h-8 w-8 mb-2 mr-2">Yas</div>
        <div>2min</div>
      </div>
    </div>
  );
}
export default SnippetCard;
