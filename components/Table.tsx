"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BudgetItem } from "@/data/budgets";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";

interface TableComponentProps {
  data: BudgetItem[];
  handleSelectItem: any;
}

export function TableComponent({
  data,
  handleSelectItem,
}: TableComponentProps) {
  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  useEffect(() => {
    setExpandedRows(data.map((item) => item.category));
  }, []);

  const totalAssigned = data
    .reduce((sum, item) => sum + parseFloat(item.assigned.slice(1)), 0)
    .toFixed(2);

  const handleExpandClick = (category: string) => {
    setExpandedRows((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const getCheckedBackgroundColor = (
    assigned: string,
    available: string
  ): { backgroundColor: string; progressValue: number } => {
    const assignedNum = parseFloat(assigned.slice(1)) || 0;
    const availableNum = parseFloat(available.slice(1)) || 0;

    const progressValue =
      availableNum > 0 ? (availableNum / assignedNum) * 100 : 0;

    const backgroundColor =
      availableNum > assignedNum / 2
        ? "#65C01F"
        : availableNum > 0
        ? "#F8D655"
        : "#EF4444";

    return {
      backgroundColor,
      progressValue,
    };
  };

  return (
    <ScrollArea className="h-[600px] flex w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Category</TableHead>
            <TableHead className="w-[100px] text-right">Assigned</TableHead>
            <TableHead className="w-[100px] text-right">Activity</TableHead>
            <TableHead className="w-[100px] text-right">Available</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: any) => (
            <React.Fragment key={item.category}>
              <TableRow
                onClick={() => handleExpandClick(item.category)}
                className="bg-[#F6F6F6]"
              >
                <TableCell className="font-medium">{item.category}</TableCell>
                <TableCell className="text-right">{item.assigned}</TableCell>
                <TableCell className="text-right">{item.activity}</TableCell>
                <TableCell className="text-right font-[600] pr-[10px]">
                  {item.available}
                </TableCell>
              </TableRow>
              {expandedRows.includes(item.category) &&
                item.items &&
                item.items.map((subItem: any) => {
                  const { backgroundColor, progressValue } =
                    getCheckedBackgroundColor(
                      subItem.assigned,
                      subItem.available
                    );

                  return (
                    <TableRow
                      style={{ cursor: "pointer" }}
                      key={subItem.subCategory}
                      onClick={() => handleSelectItem(subItem.subCategory)}
                    >
                      <TableCell>
                        <div className="flex flex-col items-start gap-1">
                          <span>{subItem.subCategory}</span>
                          <Progress
                            value={progressValue}
                            backgroundColor={backgroundColor}
                          />
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        {subItem.assigned}
                      </TableCell>
                      <TableCell className="text-right">
                        {subItem.activity}
                      </TableCell>
                      <TableCell className="text-right">
                        <span
                          style={{
                            backgroundColor: backgroundColor,
                            padding: "2px 8px",
                            borderRadius: "16px",
                            opacity: 0.8,
                          }}
                        >
                          {subItem.available}
                        </span>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </React.Fragment>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">${totalAssigned}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </ScrollArea>
  );
}
