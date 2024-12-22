import { Camera, X } from "lucide-react";
import { BsStars } from "react-icons/bs";

export default function FullInfo({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-8 w-[90%] md:w-1/2 space-y-4"
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

          <div className="w-full relative bg-[#EBF8FF80] p-2 rounded-md flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <BsStars className="text-blue-600 rotate-180" />
            </div>
            <div className="flex items-center gap-2">Edit</div>
          </div>
        </div>
      </div>
    </div>
  );
}
