import { useState } from "react";
import { X } from "lucide-react";
import { PiCaretUp, PiUser, PiFile } from "react-icons/pi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { LuFiles } from "react-icons/lu";
import { MdOutlineNextPlan } from "react-icons/md";
import { cn } from "@crm/lib/utils";

export default function AgentUpdate({ onclose }) {
  const [emails, setEmails] = useState(["purchasing@contoso.com"]);
  const [inputValue, setInputValue] = useState("");
  const [isActivateEnabled, setIsActivateEnabled] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() && inputValue.includes("@")) {
      e.preventDefault();
      setEmails([...emails, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeEmail = (emailToRemove) => {
    setEmails(emails.filter((email) => email !== emailToRemove));
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
      onClick={onclose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-3/5 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-end">
          <X onClick={onclose} className="hover:text-red-500 cursor-pointer" />
        </div>

        <div className="p-4 space-y-4">
          <div className="flex items-center gap-2 font-bold">
            <img
              width={20}
              height={20}
              src="/uploads/copilot.png"
              alt="Copilot"
            />
            Agent Skill
          </div>

          <div className="w-full bg-white p-3 rounded-md shadow md text-xs space-y-2">
            <div className="flex items-center justify-between font-semibold">
              Check if on-hand inventory will allow sales orders to ship without
              delay
              <PiCaretUp />
            </div>

            <div className="space-y-4">
              <p className="text-sm">
                When
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md inline-flex items-center gap-2">
                  <PiUser /> any vendor
                </span>
                sends an email with changes to
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md inline-flex items-center gap-2">
                  <PiFile />
                  confirmed purchase orders
                </span>
                , check if the resulting
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md inline-flex items-center gap-2">
                  <HiBars3BottomRight /> on-hand inventory
                </span>
                will allow
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md inline-flex items-center gap-2">
                  <LuFiles /> all sales orders
                </span>
                to
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md inline-flex items-center gap-2">
                  <MdOutlineNextPlan /> ship without delay
                </span>
                . If so,
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md inline-flex items-center gap-2">
                  <MdOutlineNextPlan /> update the purchase order
                </span>
                to reflect the change.
              </p>
            </div>
          </div>
          <div className="space-y-2 ">
            <div className="flex items-center gap-2 text-sm">
              <img
                src="/uploads/outlook.png"
                width={30}
                height={30}
                alt="Outlook"
              />
              Enable email access
            </div>
            <p className="text-sm text-gray-600">
              Allow the agent to access email inboxes to read mail from known
              vendors
            </p>
            <div className="flex gap-2">
              <div className="flex-1 flex flex-wrap items-center gap-2 p-2 border rounded-md bg-gray-50">
                {emails.map((email) => (
                  <div
                    key={email}
                    className="inline-flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-md"
                  >
                    <span className="bg-gray-200 text-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">
                      {email[0].toUpperCase()}
                    </span>
                    <span className="text-sm">{email}</span>
                    <X
                      className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
                      onClick={() => removeEmail(email)}
                    />
                  </div>
                ))}
                <input
                  type="email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Add email..."
                  className="flex-1 min-w-[120px] bg-transparent outline-none text-sm"
                />
              </div>
              <div className="px-4 py-2 flex items-center justify-center bg-blue-600 text-white rounded-md text-sm">
                Allow access
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 pt-24">
          <div
            className={cn(
              "px-4 py-2 rounded-md",
              isActivateEnabled
                ? "bg-gray-100 text-gray-700 cursor-pointer"
                : "bg-gray-50 text-gray-400 cursor-not-allowed"
            )}
          >
            Activate
          </div>
          <div
            className="px-4 py-2 border text-gray-700 rounded-md cursor-pointer"
            onClick={onclose}
          >
            Close
          </div>
        </div>
      </div>
    </div>
  );
}
