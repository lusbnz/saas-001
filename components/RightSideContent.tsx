import React from "react";
import { IoCheckmarkCircleOutline, IoFlashSharp, IoPencilOutline } from "react-icons/io5";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

interface RightSideContentProps {
  item: string | null;
  tab: string;
}

const RightSideContent: React.FC<RightSideContentProps> = ({ item, tab }) => {
  return (
    <div
      className="hide-scrollbar flex flex-col h-full w-full bg-[#F8FAFC] p-4 gap-4"
      style={{ overflowY: "auto" }}
    >
      {item && (
        <>
          <div className="flex items-center justify-between px-1">
            <span style={{fontWeight: '700', fontSize: "18px"}}>{item}</span>
            <IoPencilOutline />
          </div>
          <Card>
            <CardHeader style={{ borderBottom: "1px solid #E5E5E5" }}>
              <CardTitle style={{ fontSize: "14px", fontWeight: "600" }}>
                Available Balance
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 py-4 px-6 text-[12px]">
              <div className="flex items-center justify-between">
                <span>Cash Left Over From Last Month</span>
                <span style={{ fontWeight: "600" }}>$ 540.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Assigned This Month</span>
                <span style={{ fontWeight: "600" }}>$ 540.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Cash Spending</span>
                <span style={{ fontWeight: "600" }}>$ 540.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Credit Spending</span>
                <span style={{ fontWeight: "600" }}>$ 540.00</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader style={{ borderBottom: "1px solid #E5E5E5" }}>
              <CardTitle
                className="flex items-center gap-2"
                style={{ fontSize: "14px", fontWeight: "600" }}
              >
                <IoCheckmarkCircleOutline />
                Target
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 py-4 px-6 text-[12px]">
              <div className="flex flex-col gap-1">
                <span style={{ fontWeight: "600" }}>
                  Set Aside Another $ 1000.00 Each Month
                </span>
                <span>By the End of the Month</span>
              </div>
              <Separator />
              <div
                className="w-100"
                style={{
                  color: "#67C122",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <IoCheckmarkCircleOutline
                  style={{ height: "80px", width: "80px" }}
                />
              </div>
              <span
                style={{
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "8px",
                  borderRadius: "8px",
                  backgroundColor: "#F1FBE9",
                  color: "#67C122",
                  cursor: "pointer",
                  margin: "8px 0"
                }}
              >
                You have met your target!
              </span>
              <div
                className="flex items-center justify-between"
                style={{ fontWeight: "600" }}
              >
                <span>Amount to Assign This Month</span>
                <span>$ 540.00</span>
              </div>
              <div
                className="flex items-center justify-between"
                style={{ fontWeight: "600" }}
              >
                <span>Assigned So Far</span>
                <span>$ 540.00</span>
              </div>
              <Separator />
              <div
                className="flex items-center justify-between"
                style={{ fontWeight: "600" }}
              >
                <span>Total</span>
                <span>$ 540.00</span>
              </div>
              <span
                style={{
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "8px",
                  borderRadius: "8px",
                  backgroundColor: "#EDF1F5",
                  color: "#5383E0",
                  cursor: "pointer",
                  margin: "8px 0"
                }}
              >
                Edit Target
              </span>
              <div className="flex items-center space-x-2">
                <Switch id="snoozed" />
                <Label htmlFor="snoozed">Snooze target for this month</Label>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      <Card>
        <CardHeader style={{ borderBottom: "1px solid #E5E5E5" }}>
          <CardTitle
            className="flex items-center gap-2"
            style={{ fontSize: "14px", fontWeight: "600" }}
          >
            <IoFlashSharp />
            Auto Assign
          </CardTitle>
        </CardHeader>
        <CardContent
          className="flex flex-col gap-4 py-4 px-6 text-[12px] text-[#5383E0]"
          style={{ fontWeight: "600" }}
        >
          <div className="flex items-center justify-between bg-[#EDF1F5] px-2 py-1 rounded-[8px]">
            <span>{tab}</span>
            <span style={{ fontWeight: "600" }}>$ 540.00</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between bg-[#EDF1F5] px-2 py-1 rounded-[8px]">
              <span>Assigned Last Month</span>
              <span style={{ fontWeight: "600" }}>$ 540.00</span>
            </div>
            <div className="flex items-center justify-between bg-[#EDF1F5] px-2 py-1 rounded-[8px]">
              <span>Spent Last Month</span>
              <span style={{ fontWeight: "600" }}>$ 540.00</span>
            </div>
            <div className="flex items-center justify-between bg-[#EDF1F5] px-2 py-1 rounded-[8px]">
              <span>Average Assigned</span>
              <span style={{ fontWeight: "600" }}>$ 540.00</span>
            </div>
            <div className="flex items-center justify-between bg-[#EDF1F5] px-2 py-1 rounded-[8px]">
              <span>Average Spent</span>
              <span style={{ fontWeight: "600" }}>$ 540.00</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between bg-[#EDF1F5] px-2 py-1 rounded-[8px]">
              <span>Reset Available Amounts</span>
              <span style={{ fontWeight: "600" }}>$ 540.00</span>
            </div>
            <div className="flex items-center justify-between bg-[#EDF1F5] px-2 py-1 rounded-[8px]">
              <span>Reset Assigned Amounts</span>
              <span style={{ fontWeight: "600" }}>$ 540.00</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {!item && (
        <Card>
          <CardHeader style={{ borderBottom: "1px solid #E5E5E5" }}>
            <CardTitle style={{ fontSize: "14px", fontWeight: "600" }}>
              Available in August
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 py-4 px-6 text-[12px]">
            <div className="flex items-center justify-between">
              <span>Left Over from Last Month</span>
              <span style={{ fontWeight: "600" }}>$ 540.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Available in August</span>
              <span style={{ fontWeight: "600" }}>$ 540.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Activity</span>
              <span style={{ fontWeight: "600" }}>$ 540.00</span>
            </div>
          </CardContent>
        </Card>
      )}

      <Card style={{ height: "200px" }}>
        <CardHeader style={{ borderBottom: "1px solid #E5E5E5" }}>
          <CardTitle style={{ fontSize: "14px", fontWeight: "600" }}>
            Note
          </CardTitle>
        </CardHeader>
        <CardContent
          className="flex flex-col gap-2 py-4 px-6"
          style={{ fontSize: "12px" }}
        >
          <Textarea placeholder="Enter a note..." />
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSideContent;
