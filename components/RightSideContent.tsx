import React from "react";
import { IoPencilOutline, IoPencilSharp } from "react-icons/io5";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface RightSideContentProps {
  item: string | null;
}

const RightSideContent: React.FC<RightSideContentProps> = ({ item }) => {
  return (
    <div className="flex flex-col h-full w-full bg-[#F8FAFC] p-4 gap-4">
      <Card>
        <CardHeader style={{ borderBottom: "1px solid #E5E5E5" }}>
          <CardTitle style={{ fontSize: "12px" }}>Auto Assign</CardTitle>
        </CardHeader>
        <CardContent className="p-2" style={{ fontSize: "12px" }}>
          content
        </CardContent>
      </Card>

      <Card>
        <CardHeader style={{ borderBottom: "1px solid #E5E5E5" }}>
          <CardTitle style={{ fontSize: "12px" }}>
            Available in August
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 p-2" style={{ fontSize: "12px" }}>
          <div className="flex items-center justify-between">
              <span>Left Over from Last Month</span>
              <span>$ 540.00</span>
          </div>
          <div className="flex items-center justify-between">
              <span>Available in August</span>
              <span>$ 540.00</span>
          </div>
          <div className="flex items-center justify-between">
              <span>Activity</span>
              <span>$ 540.00</span>
          </div>
        </CardContent>
      </Card>

      {/* {item && (
        <div className="flex flex-col h-full w-full p-4">
          <div className="flex w-full items-center justify-between pt-1">
            <span className="font-bold">{item}</span>
            <IoPencilOutline />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default RightSideContent;
