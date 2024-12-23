import { BsStars } from "react-icons/bs";

export default function Research() {
  return (
    <div className="w-full p-2">
      <div className="w-full bg-white p-3 rounded-md shadow md">
        <div className="bg-[#EBF8FF80] text-xs p-2 rounded-md shadow md relative space-y-2">
          <p className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why I picked this lead
          </p>
          <ul className="space-y-1 text-gray-600 list-disc pl-6 text-[10px]">
            <li>
              Jane is a key decision maker and was browsing espresso machines on
              Phil Coffee's website.
            </li>
            <li>
              Multiple people at her company have reported 'slowness' during
              service requests.
            </li>
            <li>
              Northwind Traders currently see $500M in revenue from their
              in-store coffee shops.
            </li>
          </ul>

          <div className="w-4/5 grid grid-cols-3 gap-4">
            <div className="flex items-center p-2 gap-3 bg-white rounded-md shadow-md">
              <img
                src="/uploads/jane.jpeg"
                className="rounded-full w-10 h-10"
              />
              <div>
                <p className="text-[10px]">Decision Maker</p>
                <p className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Yes
                </p>
              </div>
            </div>
            <div className="flex items-center p-2 gap-3 bg-white rounded-md shadow-md">
              <img
                src="/uploads/jane.jpeg"
                className="rounded-full w-10 h-10"
              />
              <div>
                <p className="text-[10px]">Potential deal value</p>
                <p className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  $1M
                </p>
              </div>
            </div>
            <div className="flex items-center p-2 gap-3 bg-white rounded-md shadow-md">
              <img
                src="/uploads/jane.jpeg"
                className="rounded-full w-10 h-10"
              />
              <div>
                <p className="text-[10px]">Intent</p>
                <p className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  High
                </p>
              </div>
            </div>
          </div>

          <span className="absolute right-0 -top-[10px] rounded-bl-md bg-white p-[5px]">
            <BsStars className="text-blue-600 rotate-180" />
          </span>
        </div>
      </div>
    </div>
  );
}
