import React from "react";
import { IoPencilOutline, IoPencilSharp } from "react-icons/io5";
import { Button } from "./ui/button";

interface RightSideContentProps {
  item: string | null;
}

const RightSideContent: React.FC<RightSideContentProps> = ({ item }) => {
  return (
    <div className="flex flex-col h-full w-full bg-[#F8FAFC]">
      {item && (
        <div className="flex flex-col h-full w-full p-4">
          <div className="flex w-full items-center justify-between pt-1">
            <span className="font-bold">{item}</span>
            <IoPencilOutline />
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSideContent;
