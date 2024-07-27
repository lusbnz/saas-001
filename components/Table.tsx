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
import React, { useState } from "react";

interface TableComponentProps {
  data: BudgetItem[];
}

export function TableComponent({ data }: TableComponentProps) {
  const [expandedRows, setExpandedRows] = useState<string[]>([]);

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

  return (
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
            <TableRow onClick={() => handleExpandClick(item.category)}>
              <TableCell className="font-medium">{item.category}</TableCell>
              <TableCell className="text-right">{item.assigned}</TableCell>
              <TableCell className="text-right">{item.activity}</TableCell>
              <TableCell className="text-right">{item.available}</TableCell>
            </TableRow>
            {expandedRows.includes(item.category) &&
              item.items &&
              item.items.map((subItem: any) => (
                <TableRow key={subItem.subCategory} className="bg-[#F6F6F6]">
                  <TableCell className="pl-8">{subItem.subCategory}</TableCell>
                  <TableCell className="text-right">{subItem.assigned}</TableCell>
                  <TableCell className="text-right">{subItem.activity}</TableCell>
                  <TableCell className="text-right">
                    {subItem.available}
                  </TableCell>
                </TableRow>
              ))}
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
  );
}
