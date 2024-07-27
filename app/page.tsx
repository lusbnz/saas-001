import { Metadata } from "next";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Menu } from "./components/menu";
import { Sidebar } from "./components/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { budgets } from "./data/budgets";
import { DateRangePicker } from "@/components/DateRangePicker";

export const metadata: Metadata = {
  title: "saas-01",
  description: "Create by Lusbnz.",
};

export default function HomePage() {
  return (
    <div className="block">
      <Menu />
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar budgets={budgets} className="hidden lg:block" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
                <Tabs defaultValue="all" className="h-full space-y-6">
                  <div className="space-between flex items-center">
                    <TabsList>
                      <TabsTrigger value="all" className="relative">
                        All
                      </TabsTrigger>
                      <TabsTrigger value="underfunded">Underfunded</TabsTrigger>
                      <TabsTrigger value="overfunded">Overfunded</TabsTrigger>
                      <TabsTrigger value="available">Available</TabsTrigger>
                      <TabsTrigger value="snoozed" disabled>
                        Snoozed
                      </TabsTrigger>
                    </TabsList>
                    <div className="ml-auto mr-4 flex items-center gap-4">
                      <DateRangePicker/>
                      <Button>
                        <PlusCircledIcon className="mr-2 h-4 w-4" />
                        Add transaction
                      </Button>
                    </div>
                  </div>
                  <TabsContent
                    value="all"
                    className="border-none p-0 outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Check Now
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Top picks for you. Updated daily.
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                  </TabsContent>
                  <TabsContent
                    value="underfunded"
                    className="border-none p-0 outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Check Now
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Top picks for you. Updated daily.
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                  </TabsContent>
                  <TabsContent
                    value="overfunded"
                    className="border-none p-0 outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Check Now
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Top picks for you. Updated daily.
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                  </TabsContent>
                  <TabsContent
                    value="available"
                    className="border-none p-0 outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Check Now
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Top picks for you. Updated daily.
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
