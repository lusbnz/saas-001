import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Menu } from "../components/menu";
import { Sidebar } from "../components/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { budgets, tabs } from "../data/budgets";
import { DateRangePicker } from "@/components/DateRangePicker";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default async function Budget() {
  return (
    <div className="block">
      <Menu />
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar budgets={budgets} className="hidden lg:block" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full py-6">
                <Tabs defaultValue="all" className="h-full space-y-6">
                  <div className="space-between flex items-center px-4">
                    <TabsList>
                      {tabs.map((tab) => (
                        <TabsTrigger key={tab.value} value={tab.value}>
                          {tab.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    <div className="ml-auto mr-4 flex items-center gap-4">
                      <DateRangePicker className="hidden md:block"/>
                      <Button>
                        <PlusCircledIcon className="mr-2 h-4 w-4" />
                        Add transaction
                      </Button>
                    </div>
                  </div>

                  {tabs.map((tab) => (
                    <TabsContent
                      key={tab.value}
                      value={tab.value}
                      className="border-none p-0 outline-none"
                    >
                      <Separator />
                      <ResizablePanelGroup direction="horizontal" className="px-4">
                        <ResizablePanel defaultSize={70}>
                          <div className="flex h-[640px] w-100 items-start p-2">
                            <span className="font-semibold">One</span>
                          </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={30} className="hidden md:block">
                          <div className="flex h-[640px] w-100 items-start p-2">
                            <span className="font-semibold">Two</span>
                          </div>
                        </ResizablePanel>
                      </ResizablePanelGroup>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
