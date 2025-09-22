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
  onFloxaClick: () => void // Added prop for Floxa button click
}

export default function CollapsibleSidebar({ isOpen, onToggle, className, onFloxaClick }: SidebarProps) {
  const navItems = [
    { icon: "/images/chat-icon.svg", label: "Chat", color: "bg-pink-500" },
    { icon: "/images/chat-icon.svg", label: "Floxa", color: "bg-teal-500" },
    { icon: "/images/create-icon.svg", label: "Create" },
    { icon: "/images/apps-icon.svg", label: "Apps" },
  ]

  return (
    <div
      className={cn(
        "h-full bg-white border-r border-gray-200 transition-all duration-200",
        isOpen ? "w-full" : "w-12",
        className
      )}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-gray-100">
          {isOpen ? (
            <>
              <div className="flex items-center mt-2 flex-1">
                <Image
                  src="/images/copilot.svg"
                  alt="Microsoft Copilot"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span className="text-base font-medium">Microsoft Copilot</span>
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

        {/* Search bar (only when expanded) */}
        {isOpen && (
          <div className="px-4 pt-3 pb-2">
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none focus:outline-none text-sm ml-2 w-full"
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto pt-2">
          <nav className="px-2">

            <Link
              href="#"

              className={cn(
                "flex items-center rounded-md my-1",
                isOpen ? "px-3 py-3" : "justify-center py-3",
                "hover:bg-gray-100"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center",

                )}
              >


                <Image
                  src="/images/chat-icon.svg"
                  alt="Chat" width={20}
                  height={20}
                  className="text-white"
                />



              </div>
              {isOpen && <span className="ml-3 text-gray-800">Chat</span>}
            </Link>



            <Link
              href="#"
              onClick={onFloxaClick} // Trigger Floxa functionality
              className={cn(
                "flex items-center rounded-md my-1",
                isOpen ? "px-3 py-3" : "justify-center py-3",
                "hover:bg-gray-100"
              )}
            >
              <div className="flex items-center justify-center">


                <Image
                  src="/images/floxa_image.png"
                  alt="Floxa"
                  width={20}
                  height={20}
                  className="text-white"
                />



              </div>
              {isOpen && <span className="ml-3 text-gray-800">Floxa</span>}
            </Link>
            <Link
              href="#"

              className={cn(
                "flex items-center rounded-md my-1",
                isOpen ? "px-3 py-3" : "justify-center py-3",
                "hover:bg-gray-100"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center",

                )}
              >


                <Image
                  src="/images/create-icon.svg"
                  alt="Ceate" width={20}
                  height={20}
                  className="text-white"
                />



              </div>
              {isOpen && <span className="ml-3 text-gray-800">Create</span>}
            </Link>
            <Link
              href="#"

              className={cn(
                "flex items-center rounded-md my-1",
                isOpen ? "px-3 py-3" : "justify-center py-3",
                "hover:bg-gray-100"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center",

                )}
              >


                <Image
                  src="/images/apps-icon.svg"
                  alt="Apps" width={20}
                  height={20}
                  className="text-white"
                />



              </div>
              {isOpen && <span className="ml-3 text-gray-800">Apps</span>}
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}