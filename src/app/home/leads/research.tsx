import { BsStars } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import { PiCaretDown } from "react-icons/pi";

export default function Research() {
  return (
    <div className="w-full p-2 space-y-2">
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
                alt="Jane"
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
                alt="Jane"
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
                alt="Jane"
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
            <BsStars className="text-blue-600 rotate-180" size={24} />
          </span>
        </div>

        <div className="flex items-center p-2 bg-white rounded-md shadow-md justify-between  text-xs">
          <div className="flex items-center gap-2 text-gray-500">
            <div className="p-[10px] bg-white rounded-md flex items-center justify-center border">
              <AiOutlineSafetyCertificate className="text-yellow-600" />
            </div>
            <div className="p-2 bg-white rounded-md flex items-center gap-2 border">
              <p>1</p>
              <AiOutlineSafetyCertificate className="text-yellow-600" />
              D365 Sales
            </div>
            <p className="py-2 px-3 bg-white rounded-md flex items-center justify-center border">
              2
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="bg-gray-300 px-1 rounded-sm">
              AI-generated content may be incorrect
            </p>
            <BsHandThumbsUp />
            <BsHandThumbsDown />
          </div>
        </div>
      </div>

      <div className="w-full bg-white p-3 rounded-md shadow md text-xs space-y-2">
        <div className="flex items-center justify-between font-semibold">
          About Jane
          <PiCaretDown />
        </div>
        <p className="text-gray-600">
          Jane Reyes, the Chief Operating Officer of Northwind Traders, is a
          dynamic leader with a proven track record in optimizing operations and
          enhancing customer experiences. Under her guidance, Northwind Traders'
          in-store coffee shops have flourished, becoming a hallmark of quality
          and innovation. Jane's commitment to excellence makes her an ideal
          partner for First Coffee. She’s always seeking top-tier equipment to
          elevate her coffee shop's offerings, ensuring consistent, high-quality
          service.
        </p>
      </div>
    </div>
  );
}
