import { useState } from "react";
import {
  PiCaretDown,
  PiChartLineDownDuotone,
  PiPlus,
  PiTrash,
} from "react-icons/pi";
import { FaSliders, FaBars } from "react-icons/fa6";
import { RiShareForwardBoxFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";
import { PiClockUserFill } from "react-icons/pi";
import { BsMicrosoftTeams } from "react-icons/bs";
import { VscRefresh } from "react-icons/vsc";
import { Separator } from "@crm/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@crm/components/ui/dropdown-menu";

export default function Header() {
  const ActionButtons = ({ isMobile = false }) => (
    <>
      {isMobile ? (
        <>
          <DropdownMenuItem className="flex items-center gap-2">
            <PiChartLineDownDuotone color="blue" />
            Show chart
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2">
            <FaSliders color="blue" />
            Focused view
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2">
            <PiPlus color="green" />
            New
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2">
            <VscRefresh />
            Refresh
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2">
            <BsMicrosoftTeams color="4B4E8C" />
            Collaborate
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2">
            <PiTrash />
            Delete
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2">
            <PiClockUserFill />
            Smart Data
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2">
            <IoFilter />
            Edit Filters
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2">
            <FiEdit />
            Edit Columns
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2">
            <RiShareForwardBoxFill />
            Share
          </DropdownMenuItem>
        </>
      ) : (
        <>
          <div className="flex items-center gap-1 p-1">
            <PiChartLineDownDuotone size={12} color="blue" />
            <span className="md:inline">Show chart</span>
          </div>

          <div className="flex items-center gap-1 p-1">
            <FaSliders size={12} color="blue" />
            <span className="md:inline">Focused view</span>
          </div>

          <div className="flex items-center gap-1 p-1">
            <PiPlus size={12} color="green" />
            <span className="md:inline">New</span>
          </div>

          <div className="flex items-center gap-1 p-1">
            <VscRefresh size={12} />
            <span className="md:inline">Refresh</span>
          </div>

          <div className="flex items-center gap-1 p-1">
            <BsMicrosoftTeams size={12} color="4B4E8C" />
            Collaborate
          </div>

          <div className="p-1 flex items-center gap-2">
            <span className="flex items-center gap-[2px]">
              <PiTrash size={12} />
              <span className="md:inline">Delete</span>
            </span>
            <span className="flex items-center gap-[2px]">
              <Separator orientation="vertical" className="w-[1px] h-3" />
              <PiCaretDown size={12} />
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1 rounded-md border">
              <PiClockUserFill size={12} /> Smart Data
            </div>

            <div className="flex items-center gap-1 px-2 py-1 rounded-md border">
              <IoFilter size={12} /> Edit Filters
            </div>

            <div className="flex items-center gap-1 px-2 py-1 rounded-md border">
              <FiEdit size={12} /> Edit Columns
            </div>

            <div className="p-2 flex items-center gap-2 bg-blue-800 text-[#E4E7EC] rounded-md">
              <RiShareForwardBoxFill size={12} />
              <span className="flex items-center gap-[2px]">
                <Separator orientation="vertical" className="w-[1px] h-3" />
                <PiCaretDown size={12} />
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );

  return (
    <header className="min-h-8 w-full rounded-md p-2 bg-white text-xs shadow-xl">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-shrink-0">
          My open leads
          <PiCaretDown size={16} />
        </div>

        <div className="hidden md:flex items-center gap-2 flex-wrap justify-end">
          <ActionButtons />
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 flex items-center gap-2">
                Menu
                <FaBars size={18} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <ActionButtons isMobile={true} />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
