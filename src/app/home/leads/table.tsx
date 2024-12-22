import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@crm/components/ui/table";
import { Checkbox } from "@crm/components/ui/checkbox";
import { PiArrowDown, PiCaretDown } from "react-icons/pi";

const initialData = [
  {
    id: 1,
    name: "Winford Asher",
    topic: "Cafe A100 for commercial use",
    status: "New",
    createdAt: "4/02/2024 12:00 PM",
  },
  {
    id: 2,
    name: "Josia Love",
    topic: "Upgrading service plan",
    status: "New",
    createdAt: "3/30/2024 7:45 AM",
  },
  {
    id: 3,
    name: "Harrison Curtis",
    topic: "Issue with throughput on EspressoMaster",
    status: "New",
    createdAt: "3/28/2024 3:30 PM",
  },
  {
    id: 4,
    name: "Jermaine Bennett",
    topic: "New roaster in distribution facility",
    status: "New",
    createdAt: "3/25/2024 11:05 AM",
  },
  {
    id: 5,
    name: "Gerald Stephens",
    topic: "Concerns on current machines",
    status: "New",
    createdAt: "3/23/2024 4:50 PM",
  },
  {
    id: 6,
    name: "Halie Griffiths",
    topic: "Expanding business",
    status: "New",
    createdAt: "3/21/2024 10:20 AM",
  },
  {
    id: 7,
    name: "Rachel Michael",
    topic: "Addressing service concerns",
    status: "New",
    createdAt: "3/19/2024 1:15 PM",
  },
  {
    id: 8,
    name: "Alex Baker",
    topic: "Premium coffee beans",
    status: "New",
    createdAt: "3/17/2024 8:00 AM",
  },
  {
    id: 9,
    name: "Lilly Pyles",
    topic: "Cafe A100 bulk rate",
    status: "New",
    createdAt: "3/13/2024 2:45 PM",
  },
  {
    id: 10,
    name: "Jane Reyes",
    topic: "Improving cost per cup",
    status: "New",
    createdAt: "3/10/2024 9:30 AM",
  },
];

export default function SupportTicketTable() {
  const [data] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 15;

  // Filter logic
  const filteredData = data.filter((item) =>
    [item.name, item.topic].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Checkbox handlers
  const toggleRow = (id) => {
    const newSelected = new Set(selectedRows);
    newSelected.has(id) ? newSelected.delete(id) : newSelected.add(id);
    setSelectedRows(newSelected);
  };

  const toggleAll = () => {
    const allSelected = selectedRows.size === paginatedData.length;
    setSelectedRows(
      new Set(allSelected ? [] : paginatedData.map((row) => row.id))
    );
  };

  return (
    <div className="space-y-4 bg-white shadow-xl rounded-md p-4">
      <div className="flex items-center gap-4">
        <div className="relative w-full max-w-sm">
          <input
            placeholder="Search, sort and filter with copilot"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="focus:outline-none border w-full rounded-md px-2 py-1 text-sm"
          />
          <img
            src="/uploads/copilot.png"
            alt="Copilot"
            className="absolute right-2 top-[5px] w-5 h-5"
          />
        </div>
      </div>

      <div className="rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  className="border-[#474747]/50"
                  checked={selectedRows.size === paginatedData.length}
                  onCheckedChange={toggleAll}
                />
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  Name
                  <PiCaretDown />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  Topic
                  <PiCaretDown />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  Status reason
                  <PiCaretDown />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  Created on
                  <PiArrowDown />
                  <PiCaretDown />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id} className="text-gray-500">
                <TableCell>
                  <Checkbox
                    className="border-[#474747]/50"
                    checked={selectedRows.has(row.id)}
                    onCheckedChange={() => toggleRow(row.id)}
                  />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.topic}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 text-sm text-gray-500 hover:text-black disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-2 text-sm text-gray-500 hover:text-black disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
