"use client";

import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TableCategory, tableData, tabs } from "@/data/budgets";
import { DateRangePicker } from "@/components/DateRangePicker";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { TableComponent } from "@/components/Table";
import { useState } from "react";
import RightSideContent from "@/components/RightSideContent";
import { IoFilterOutline, IoOptionsOutline, IoRefreshOutline, IoReorderThreeOutline, IoReorderTwoOutline, IoRepeatOutline } from "react-icons/io5";

export default function Budget() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleSelectItem = (name: string) => {
    if (activeItem === name) {
      setActiveItem(null);
    } else {
      setActiveItem(name);
    }
  };

  return (
    <div className="h-full pt-6">
      <Tabs defaultValue="all" className="h-full space-y-6">
        <div className="space-between flex items-center px-4">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="ml-auto mr-4 hidden lg:flex items-center gap-4">
            <DateRangePicker />
            <Button variant={"outline"}>
              <PlusCircledIcon className="mr-2 h-4 w-4" />
              Add transaction
            </Button>
          </div>
        </div>

        {tabs.map((tab) => {
          const currentTabValue: TableCategory = tab.value as TableCategory;

          return (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="border-none p-0 outline-none"
              style={{ height: "calc(100vh - 124px)" }}
            >
              <Separator />
              <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={70} maxSize={70}>
                  <div className="flex flex-col h-full w-full items-start p-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="pb-4 flex items-center gap-2">
                        <Button variant="outline">
                          <PlusCircledIcon className="mr-2" />
                          Category Group
                        </Button>
                        <Button variant="outline">
                          <IoRepeatOutline className="mr-2" />
                          Undo
                        </Button>
                        <Button variant="outline">
                          <IoRefreshOutline className="mr-2" />
                          Recent Move
                        </Button>
                      </div>
                      <div className="pb-4 flex items-center gap-2">
                        <Button variant="outline">
                          <IoFilterOutline className="mr-2" />
                          Filter
                        </Button>
                        <Button variant="outline">
                          <IoOptionsOutline className="mr-2" />
                          View
                        </Button>
                      </div>
                    </div>
                    <Separator />
                    <TableComponent
                      data={tableData[currentTabValue]}
                      handleSelectItem={handleSelectItem}
                    />
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel
                  defaultSize={30}
                  maxSize={50}
                  className="hidden lg:block"
                >
                  <div className="flex h-full w-full items-start">
                    <RightSideContent item={activeItem} tab={tab.label} />
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
