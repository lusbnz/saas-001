import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  IoWalletOutline,
  IoCellularOutline,
  IoServerOutline,
  IoCalendarOutline,
  IoArchiveOutline,
} from "react-icons/io5";

import { Budget } from "../data/budgets";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  budgets: Budget[];
}

export function Sidebar({ budgets }: SidebarProps) {
  return (
    <div className="space-y-4 py-4">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Discover
        </h2>
        <div className="space-y-1">
          <Button variant="secondary" className="w-full justify-start">
            <Link
              href="/budget"
              className="flex items-center w-full justify-start"
            >
              <IoWalletOutline className="mr-2" />
              Budget
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <IoCellularOutline className="mr-2" />
            Reports
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
              <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
              <circle cx="12" cy="12" r="2" />
              <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
              <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
            </svg>
            All Accounts
          </Button>
        </div>
      </div>
      <Separator />
      <div className="px-3 py-2">
        <Button variant="ghost" className="w-full justify-start">
          <IoCalendarOutline className="mr-2" />
          Calendar
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <IoArchiveOutline className="mr-2" />
          Task Management
        </Button>
      </div>
      <Separator />
      <div className="py-2">
        <h2 className="relative px-7 text-lg font-semibold tracking-tight">
          Budget
        </h2>
        <ScrollArea className="h-[280px] px-1">
          <div className="space-y-1 p-2">
            {budgets?.map((budget, i) => (
              <Button
                key={`${budget}-${i}`}
                variant="ghost"
                className="w-full justify-start font-normal"
              >
                <IoServerOutline className="mr-2" />
                {budget}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
      <Separator />
      <div className="px-3 w-100">
        <Button variant="outline" className="w-full justify-start">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          Add budget
        </Button>
      </div>
    </div>
  );
}
