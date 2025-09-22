"use client"
import { X, PanelLeftClose, MessageCircle, FileText, Grid, PanelRightClose } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
  className?: string
  onFloxaClick: (flowTitle?: string) => void // Added prop for Floxa button click (optional flow title)
}

export default function CollapsibleSidebar({ isOpen, onToggle, className, onFloxaClick }: SidebarProps) {
  // const navItems = [

  // ]

  // Small set of Floxa quick-start options shown when sidebar is expanded
  const floxaOptions = [
    "Project Assistant",
    "Meeting Intelligence",
    "Onboarding Intelligence",
    "Strategic Upsell Intelligence",
    "Customer Intelligence with Crisis Management",
    "Digital Transformation Intelligence",
    "Proactive Staffing Intelligence",
    "Strategic Growth Command Center",
  ]

  return (
    <div
      className={cn(
        "h-full bg-white border-r border-gray-200 transition-all duration-200 flex flex-col",
        isOpen ? "w-64" : "w-12",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center p-3 border-b border-gray-100">
        {isOpen ? (
          <>
            <div className="flex items-center gap-3 mt-2 flex-1">
              <div className="w-9 h-9 rounded-md flex items-center justify-center shadow-sm">
                <Image src="/images/copilot.svg" alt="Microsoft Copilot" width={20} height={20} />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Microsoft Copilot</div>
                <div className="text-xs text-gray-500">AI for work</div>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onToggle} className="h-8 w-8 p-0">
              <PanelLeftClose size={18} />
            </Button>
          </>
        ) : (
          <Button variant="ghost" size="sm" onClick={onToggle} className="h-8 w-8 p-0">
            <PanelRightClose size={18} />
          </Button>
        )}
      </div>

      {/* Search (expanded only) */}
      {/* {isOpen && (
        <div className="px-3 pt-3 pb-2">
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 text-sm">
            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search" className="bg-transparent border-none focus:outline-none ml-3 w-full text-xs" />
          </div>
        </div>
      )} */}

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto pt-3 px-2">
        <nav className="space-y-1">
          {/* Nav items */}
          {/* {navItems.map((n) => (
            <Link
              href="#"
              key={n.label}
              title={!isOpen ? n.label : undefined}
              className={cn(
                "flex items-center gap-3 rounded-md",
                isOpen ? "px-3 py-2" : "justify-center py-2",
                "hover:bg-gray-50 transition-colors"
              )}
            >
              <div className={cn("w-9 h-9 flex items-center justify-center rounded-full", n.color ?? "bg-gray-200")}>
                <Image src={n.icon} alt={n.label} width={18} height={18} />
              </div>
              {isOpen && <span className="text-sm text-gray-800">{n.label}</span>}
            </Link>
          ))} */}

          {/* Floxa entry (prominent) */}
          <div className={cn("mt-2")}>
            {/* <Link
              href="#"
              onClick={(e) => { e.preventDefault(); onFloxaClick(); }}
              title={!isOpen ? "Floxa" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-md",
                isOpen ? "px-3 py-2" : "justify-center py-2",
                "hover:bg-gray-50 transition-colors"
              )}
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-400 to-emerald-400 shadow-sm">
                <Image src="/images/floxa_image.png" alt="Floxa" width={18} height={18} />
              </div>
              {isOpen && <span className="text-sm text-gray-800 font-medium">Floxa</span>}
            </Link> */}

            {/* Floxa quick options (expanded) */}
            {isOpen && (
              <div className="mt-3 grid grid-cols-1 gap-2">
                {floxaOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={(e) => { e.preventDefault(); onFloxaClick(opt); }}
                    className="flex items-center gap-3 p-2 rounded-lg border border-transparent hover:border-gray-200 bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition"
                  >
                    {/* <div className="w-8 h-8 rounded-md bg-slate-50 flex items-center justify-center">
                      <div className="w-5 h-5">
                
                        <Image src="/images/brandmark.png" alt="" width={20} height={20} className="opacity-90" />
                      </div>
                    </div> */}
                    <div className="text-left">
                      <div className="text-sm font-normal text-gray-700 leading-tight">{opt}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Other actions */}
          {/* <div className="mt-4 border-t pt-3">
            <Link
              href="#"
              className={cn(
                "flex items-center rounded-md my-1",
                isOpen ? "px-3 py-2" : "justify-center py-2",
                "hover:bg-gray-50"
              )}
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100">
                <Image src="/images/create-icon.svg" alt="Create" width={18} height={18} />
              </div>
              {isOpen && <span className="ml-1 text-sm text-gray-800">Create</span>}
            </Link>

            <Link
              href="#"
              className={cn(
                "flex items-center rounded-md my-1",
                isOpen ? "px-3 py-2" : "justify-center py-2",
                "hover:bg-gray-50"
              )}
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100">
                <Image src="/images/apps-icon.svg" alt="Apps" width={18} height={18} />
              </div>
              {isOpen && <span className="ml-1 text-sm text-gray-800">Apps</span>}
            </Link>
          </div> */}
        </nav>
      </div>

      {/* Footer / account - compact */}
      {/* <div className="p-3 border-t border-gray-100">
        <div className={cn("flex items-center gap-3 rounded-md", isOpen ? "px-1 py-1" : "justify-center py-1")}>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image src="/images/brandmark.png" alt="account" width={32} height={32} />
          </div>
          {isOpen && (
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">You</div>
              <div className="text-xs text-gray-500">Workspace</div>
            </div>
          )}
        </div>
      </div> */}
    </div>
  )
}