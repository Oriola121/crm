import { Separator } from "@crm/components/ui/separator";
import { IoMailUnreadOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { PiCaretRight, PiCaretLeft } from "react-icons/pi";
import { useState } from "react";
import { cn } from "@crm/lib/utils";
import FullInfo from "./info";

const peopleDetails = [
  {
    name: "Jane Reyes",
    role: "COO",
    company: "Northwind Traders",
    image: "/uploads/jane.jpeg",
    actionText: "Engage with Jane Reyes",
    actionIcon: <IoMailUnreadOutline size={14} />,
    description:
      "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
    tags: ["Expand business", "High buying intent"],
  },
  {
    name: "Allan Munger",
    role: "Head of Real Estate Development",
    company: "Contoso Coffee",
    image: "/uploads/allan.jpeg",
    actionText: "Prepare for meeting with Allan",
    actionIcon: <LuCalendarDays size={14} />,
    description:
      "Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.",
    tags: ["Upcoming meeting", "Due today"],
  },
  {
    name: "Sophia Davis",
    role: "Marketing Manager",
    company: "Adventure Works",
    image: "/uploads/jane.jpeg",
    actionText: "Discuss marketing strategy with Sophia",
    actionIcon: <IoMailUnreadOutline size={14} />,
    description:
      "Sophia is interested in a proposal for a new social media marketing campaign.",
    tags: ["Marketing", "High engagement"],
  },
  {
    name: "Ethan Carter",
    role: "Sales Director",
    company: "Fabrikam",
    image: "/uploads/allan.jpeg",
    actionText: "Follow up with Ethan Carter",
    actionIcon: <LuCalendarDays size={14} />,
    description:
      "Follow up on Fabrikam's interest in expanding their sales network.",
    tags: ["Sales opportunity", "Urgent"],
  },
  {
    name: "Olivia Smith",
    role: "Product Manager",
    company: "Tailspin Toys",
    image: "/uploads/jane.jpeg",
    actionText: "Review product proposals with Olivia",
    actionIcon: <IoMailUnreadOutline size={14} />,
    description:
      "Olivia wants a detailed report on potential new product launches.",
    tags: ["Product review", "Moderate intent"],
  },
];

export default function Body() {
  const [showFullInfo, setShowFullInfo] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(peopleDetails.length / itemsPerPage);

  const handleShowFullInfo = () => {
    setShowFullInfo(!showFullInfo);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const currentPeople = peopleDetails.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="w-full bg-white shadow-xl rounded-md p-2 md:p-4 space-y-4 md:space-y-7">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <div className="flex items-center gap-2">
          <img
            width={20}
            height={20}
            src="/uploads/copilot.png"
            alt="Copilot"
          />
          <span className="text-sm md:text-[15px] font-semibold">
            Hi Mona, <span className="text-blue-600">68%</span> of goal achieved
            and rest can be achieved by focusing on 20 top leads.
          </span>
        </div>
        <div className="text-sm">metrics stays here</div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="space-y-4 px-2 md:px-4 w-full lg:w-3/4">
          <p className="text-xs font-light text-gray-500">
            Copilot has pinpointed 20 key leads that show strong purchase intent
            and are actively engaging. These leads need your focus
          </p>

          <div className="space-y-6 flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full relative">
              {currentPeople.map((person, index) => (
                <div
                  key={person.name}
                  className="rounded-md border space-y-2 p-3 shadow-md relative"
                >
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <img
                        src={person.image}
                        width={30}
                        height={30}
                        className="rounded-full"
                        alt={person.name}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">{person.name}</h4>
                      <p className="text-[10px] font-light text-gray-500 flex items-center gap-1">
                        {person.role}
                        <span className="p-[2px] rounded-full bg-gray-500" />
                        {person.company}
                      </p>
                    </div>
                  </div>

                  <div className="w-full relative bg-[#EBF8FF80] p-2 rounded-md">
                    <div
                      className="flex items-center gap-2 text-xs font-bold cursor-pointer"
                      onClick={handleShowFullInfo}
                    >
                      {person.actionIcon}
                      {person.actionText}
                    </div>
                    <p className="text-xs font-light text-gray-500">
                      {person.description}
                    </p>
                    <span className="absolute right-0 top-0 rounded-bl-md bg-white p-[5px]">
                      <BsStars className="text-blue-600 rotate-180" />
                    </span>
                  </div>

                  <p className="px-2 text-xs text-gray-500 font-light flex items-center gap-1">
                    {person.tags.map((tag, tagIndex) => (
                      <span key={tag} className="flex items-center">
                        {tag}
                        {tagIndex < person.tags.length - 1 && (
                          <span className="p-[2px] rounded-full bg-gray-500 mx-1" />
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              ))}

              {currentPage > 0 && (
                <div
                  className="absolute -left-4 top-[40%] rounded-full border bg-white p-1 flex items-center justify-center cursor-pointer"
                  onClick={handlePrevious}
                >
                  <PiCaretLeft className="text-blue-600" />
                </div>
              )}

              {currentPage < totalPages - 1 && (
                <div
                  className="absolute -right-4 top-[40%] rounded-full border bg-white p-1 flex items-center justify-center cursor-pointer"
                  onClick={handleNext}
                >
                  <PiCaretRight className="text-blue-600" />
                </div>
              )}
            </div>

            <div className="w-20 h-[3px] bg-blue-100 flex items-center gap-[2px]">
              {Array.from({ length: totalPages }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    index === currentPage ? "w-4" : "w-2",
                    "h-full",
                    index <= currentPage ? "bg-blue-600" : "bg-blue-100"
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <Separator orientation="vertical" className="h-[240px] w-[1px]" />
        </div>

        <div className="space-y-2 px-2 md:px-4 w-full lg:w-[30%]">
          <p className="text-sm font-light text-gray-500">
            Other key activities
          </p>

          <div className="space-y-2">
            <div className="border rounded-md shadow-md p-2 space-y-2">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full">
                  <img
                    src="/uploads/allan.jpeg"
                    className="rounded-full h-full w-full"
                    alt="Activity"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-semibold">
                    Cafe A100 for Woodland Bank
                  </h4>
                  <p className="text-[8px] font-light text-gray-500 flex items-center gap-1">
                    Woodland Bank
                    <span className="p-[2px] rounded-full bg-gray-500" />
                    $280,000
                    <span className="p-[2px] rounded-full bg-gray-500" />8 days
                    to close
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-full p-1 text-[10px] bg-[#EBF8FF80] rounded-md flex items-center gap-2">
                  <IoMailUnreadOutline />
                  Review draft and reply to Chris
                </div>
                <BsStars className="text-blue-600" />
              </div>
            </div>

            <div className="border rounded-md shadow-md p-2 space-y-2">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full">
                  <img
                    src="/uploads/allan.jpeg"
                    className="rounded-full h-full w-full"
                    alt="Activity"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-semibold">
                    Partnership opportunity for Fabrikam
                  </h4>
                  <p className="text-[8px] font-light text-gray-500 flex items-center gap-1">
                    Fabrikam
                    <span className="p-[2px] rounded-full bg-gray-500" />
                    $5,000,000
                    <span className="p-[2px] rounded-full bg-gray-500" />
                    12 days to close
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-full p-1 text-[9px] bg-[#EBF8FF80] rounded-md flex items-center gap-2">
                  <LuCalendarDays size={14} />
                  Prepare me for Fabrikam's key stakeholder meeting
                </div>
                <BsStars className="text-blue-600" />
              </div>
            </div>
          </div>

          <p className="text-blue-600 cursor-pointer text-xs font-semibold">
            Show all key activities
          </p>
        </div>
      </div>

      {showFullInfo && <FullInfo onClose={handleShowFullInfo} />}
    </div>
  );
}
