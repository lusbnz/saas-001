"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { reports } from "@/data/budgets";
import { Separator } from "@/components/ui/separator";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DateRangePicker } from "@/components/DateRangePicker";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { IoArchiveOutline, IoDownloadOutline } from "react-icons/io5";

export default function Reports() {
  return (
    <div className="h-full pt-6">
      <Tabs defaultValue="spending" className="h-full space-y-6">
        <div className="space-between flex items-center px-4">
          <TabsList>
            {reports.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {reports.map((report) => (
          <TabsContent
            key={report.value}
            value={report.value}
            className="border-none p-0 outline-none w-100"
            style={{ height: "calc(100vh - 192px)" }}
          >
            <Separator />

            <div className="flex items-center p-4 w-100">
              <div className="flex items-center gap-2 w-100">
                <Select>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      <SelectItem value="bill">Bill</SelectItem>
                      <SelectItem value="needs">Needs</SelectItem>
                      <SelectItem value="wants">Wants</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="All Accounts" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Accounts</SelectLabel>
                      <SelectItem value="all_income">All Income</SelectItem>
                      <SelectItem value="salary">Salary</SelectItem>
                      <SelectItem value="saving">Saving</SelectItem>
                      <SelectItem value="investment">Investment</SelectItem>
                      <SelectItem value="credit_card">Credit Card</SelectItem>
                      <SelectItem value="car">Car</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <DateRangePicker className="hidden lg:flex"/>
              </div>

              <Button variant={"outline"} className="ml-auto mr-4 hidden lg:flex">
                <IoDownloadOutline className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>

            <Separator />

            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={70} maxSize={70}>
                <div className="flex flex-col h-full w-full items-start p-4">
                  Content
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel
                defaultSize={30}
                maxSize={50}
                className="hidden lg:block"
              >
                <div className="flex h-full w-full items-start">
                  <div
                    className="flex flex-col h-full w-full bg-[#F8FAFC] p-4 gap-4"
                    style={{ overflowY: "auto" }}
                  >
                    Right Side Content
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
