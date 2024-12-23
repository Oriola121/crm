"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  ChevronDown,
  Home,
  Clock,
  Bookmark,
  Zap,
  LayoutDashboard,
  ListTodo,
  Building2,
  Users,
  Briefcase,
  FileText,
  ShoppingCart,
  Receipt,
  Package,
  FileBox,
  Mail,
  BarChart3,
  Menu,
  X,
} from "lucide-react";
import { MdSupportAgent } from "react-icons/md";

import { cn } from "@crm/lib/utils";
import { ScrollArea } from "@crm/components/ui/scroll-area";
import { PiPhone } from "react-icons/pi";

const MenuItem = ({
  icon: Icon,
  label,
  href,
  hasSubmenu = false,
  subMenuItems = [],
  closeSidebar,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (closeSidebar) closeSidebar();
  };

  if (hasSubmenu) {
    return (
      <div>
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-[#F7FAFC]",
            isActive ? "bg-[#F7FAFC]" : ""
          )}
        >
          <Icon className="w-4 h-4 mr-3 text-[#718096]" />
          <span className="flex-grow">{label}</span>
          <ChevronDown
            className={cn(
              "w-4 h-4 text-[#A0AEC0] transition-transform duration-200",
              isExpanded ? "rotate-180" : ""
            )}
          />
        </div>
        {isExpanded && (
          <div className="pl-11 bg-[#FAFBFC]">
            {subMenuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "block py-2 px-4 text-sm hover:bg-[#F7FAFC]",
                  pathname === item.href ? "text-[#3182CE]" : "text-[#718096]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-[#F7FAFC]",
        isActive ? "bg-white" : ""
      )}
      onClick={handleClick}
    >
      <Icon className="w-4 h-4 mr-3 text-[#718096]" />
      <span className="flex-grow">{label}</span>
    </Link>
  );
};

const SidebarSection = ({ title = "", children }) => (
  <div className="py-4">
    {title !== "" && (
      <div className="px-4 py-2 text-xs font-semibold text-[#A0AEC0]">
        {title}
      </div>
    )}
    {children}
  </div>
);

const recentSubMenuItems = [{ label: "", href: "" }];
const pinnedSubMenuItems = [{ label: "", href: "" }];
const performanceSubMenuItems = [{ label: "", href: "" }];

export default function AppSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleSidebar}
        className="fixed top-2 right-4 z-50 p-3 text-[#E4E7EC] rounded-full shadow-lg lg:hidden"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-48 bg-[#E4E7EC] border-r border-[#6B728080] shadow-xl transition-transform duration-300 lg:static lg:transform-none overflow-y-auto",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <ScrollArea className="h-full md:h-[90vh]">
          <SidebarSection>
            <MenuItem
              icon={Home}
              label="Home"
              href="/home"
              closeSidebar={toggleSidebar}
            />
            <MenuItem
              icon={MdSupportAgent}
              label="Agent Skill"
              href="/home/agent-skill"
              closeSidebar={toggleSidebar}
            />
            <MenuItem
              icon={Clock}
              label="Recent"
              href="/home/recent"
              hasSubmenu
              subMenuItems={recentSubMenuItems}
              closeSidebar={toggleSidebar}
            />
            <MenuItem
              icon={Bookmark}
              label="Pinned"
              href="/home/pinned"
              hasSubmenu
              subMenuItems={pinnedSubMenuItems}
              closeSidebar={toggleSidebar}
            />
          </SidebarSection>

          <SidebarSection title="My work">
            <MenuItem
              icon={Zap}
              label="Sales accelerator"
              href="/home/sales-accelerator"
              closeSidebar={toggleSidebar}
            />
            <MenuItem
              icon={LayoutDashboard}
              label="Dashboards"
              href="/home/dashboards"
              closeSidebar={toggleSidebar}
            />
            <MenuItem
              icon={ListTodo}
              label="Activities"
              href="/home/activities"
              closeSidebar={toggleSidebar}
            />
          </SidebarSection>

          <SidebarSection title="Customers">
            <MenuItem
              icon={Building2}
              label="Accounts"
              href="/home/accounts"
              closeSidebar={toggleSidebar}
            />
            <MenuItem
              icon={Users}
              label="Contacts"
              href="/home/contacts"
              closeSidebar={toggleSidebar}
            />
          </SidebarSection>

          <SidebarSection title="Sales">
            <MenuItem
              icon={PiPhone}
              label="Leads"
              href="/home/leads"
              closeSidebar={toggleSidebar}
            />
            <MenuItem
              icon={Briefcase}
              label="Opportunities"
              href="/home/opportunities"
              closeSidebar={toggleSidebar}
            />
            <MenuItem
              icon={FileText}
              label="Competitors"
              href="/home/competitors"
              closeSidebar={toggleSidebar}
            />
          </SidebarSection>

          <SidebarSection title="Collateral">
            <MenuItem
              icon={ShoppingCart}
              label="Quotes"
              href="/home/quotes"
              closeSidebar={toggleSidebar}
            />
            <MenuItem
              icon={Receipt}
              label="Orders"
              href="/home/orders"
              closeSidebar={toggleSidebar}
            />
            <MenuItem
              icon={FileBox}
              label="Invoices"
              href="/home/invoices"
              closeSidebar={toggleSidebar}
            />
            <MenuItem
              icon={Package}
              label="Products"
              href="/home/products"
              closeSidebar={toggleSidebar}
            />
            <MenuItem
              icon={FileText}
              label="Sales Literature"
              href="/home/sales-literature"
              closeSidebar={toggleSidebar}
            />
          </SidebarSection>

          <SidebarSection title="Marketing">
            <MenuItem
              icon={Mail}
              label="Marketing lists"
              href="/home/lists"
              closeSidebar={toggleSidebar}
            />
            <MenuItem
              icon={Zap}
              label="Quick Campaigns"
              href="/home/campaigns"
              closeSidebar={toggleSidebar}
            />
          </SidebarSection>

          <SidebarSection title="Performance">
            <MenuItem
              icon={BarChart3}
              label="Sales"
              href="/home/performance/sales"
              hasSubmenu
              subMenuItems={performanceSubMenuItems}
              closeSidebar={toggleSidebar}
            />
          </SidebarSection>
        </ScrollArea>
      </div>

      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
        ></div>
      )}
    </div>
  );
}
