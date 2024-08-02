"use client";

import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import {
  IoPushOutline,
  IoRepeatOutline,
  IoRefreshOutline,
  IoSearchOutline,
  IoOptionsOutline,
} from "react-icons/io5";
import { budgets } from "@/data/budgets";

export default function AccountDetail() {
  const pathname = usePathname();
  const budgetValue = pathname.split("/").pop();

  const budgetLabel = budgets.find(
    (budget) => budget.value === budgetValue
  )?.label;

  return (
    <div className="h-full pt-6">
      <div defaultValue="spending" className="h-full space-y-6">
        <div
          className="space-between flex items-center px-4 h-[36px]"
          style={{ fontSize: "20px", fontWeight: "600" }}
        >
          {budgetLabel}
        </div>

        <div
          className="border-none p-0 outline-none w-100"
          style={{ height: "calc(100vh - 124px)" }}
        >
          <Separator />

          <div className="p-4 h-[68px] flex items-center justify-between w-100">
            <div className="flex items-center gap-2 w-100">
              <Button variant={"outline"}>
                <PlusCircledIcon className="mr-2" />
                Add transaction
              </Button>

              <Button variant={"outline"}>
                <IoPushOutline className="mr-2" />
                File Import
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
            <div className="items-center gap-2 w-100 hidden lg:flex">
              <Button variant={"outline"}>
                <IoOptionsOutline className="mr-2" />
                View
              </Button>

              <div className="relative mr-2 w-[200px]">
                <IoSearchOutline className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search Accounts"
                  className="rounded-lg bg-background pl-8 w-[200px]"
                />
              </div>
            </div>
          </div>

          <Separator />

          <div className="flex w-100 h-100 p-4">Content</div>
        </div>
      </div>
    </div>
  );
}
