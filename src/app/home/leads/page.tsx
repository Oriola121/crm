"use client";
import { BiSolidBookOpen } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { PiPhone } from "react-icons/pi";
import { FaRegMessage } from "react-icons/fa6";
import Header from "./header";
import Body from "./body";
import SupportTicketTable from "./table";

export default function Page() {
  return (
    <div className="h-full flex flex-col md:flex-row">
      <div className="w-full p-2 md:p-4 space-y-2">
        <Header />
        <Body />
        <SupportTicketTable />
      </div>

      <div className="w-full md:w-10 h-10 md:h-full py-2 flex flex-row md:flex-col items-center justify-center md:justify-normal bg-[#E4E7EC] space-x-5 md:space-x-0 md:space-y-5">
        <BiSolidBookOpen />
        <TiMessages />
        <PiPhone />
        <FaRegMessage />
      </div>
    </div>
  );
}
