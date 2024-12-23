import { Camera, X } from "lucide-react";
import { BsStars } from "react-icons/bs";
import { PiPencil } from "react-icons/pi";
import { LuSendHorizonal } from "react-icons/lu";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@crm/components/ui/tabs";
import Research from "./research";

export default function FullInfo({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-3/5 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold flex items-center gap-2">
            <Camera className="text-blue-600" size={20} />
            Engage with Jane Reyes
          </div>
          <X onClick={onClose} className="hover:text-red-500 cursor-pointer" />
        </div>

        <div className="space-y-2">
          <div className="w-full p-2 border rounded-md shadow-lg flex items-center gap-2">
            <img src="/uploads/jane.jpeg" className="rounded-full w-10 h-10" />
            <div>
              <h1 className="font-semibold">Jane Reyes</h1>
              <p className="text-sm text-gray-600">COO, Northwind Traders</p>
            </div>
          </div>

          <div className="w-full relative bg-[#EBF8FF80] px-4 py-2 rounded-md flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] text-gray-500">
              <BsStars className="text-blue-600 rotate-180" size={24} />
              Jane may be interested in upgrading espresso machines for her
              in-store coffee shops.
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <div className="flex items-center gap-2 bg-white px-2 py-1 text-blue-500 rounded-md shadow-md">
                <PiPencil /> Edit
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-2 py-1 text-white rounded-md shadow-md">
                <LuSendHorizonal /> Approve and send
              </div>
            </div>
          </div>
          <Tabs>
            <Tabs defaultValue="Engage">
              <TabsList className="flex justify-start w-full bg-transparent cursor-pointer bg-white shadow-md rounded-md py-4">
                <div className="w-[30%] flex justify-around">
                  <TabsTrigger
                    value="Engage"
                    className="text-xs cursor-pointer border-b-2 border-transparent data-[state=active]:border-blue-500 -mb-[10px] relative"
                  >
                    Engage
                  </TabsTrigger>
                  <TabsTrigger
                    value="Research"
                    className="text-xs cursor-pointer border-b-2 border-transparent data-[state=active]:border-blue-500 -mb-[10px] relative"
                  >
                    Research
                  </TabsTrigger>
                </div>
              </TabsList>

              <TabsContent value="Engage"></TabsContent>
              <TabsContent value="Research">
                <Research />
              </TabsContent>
            </Tabs>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
