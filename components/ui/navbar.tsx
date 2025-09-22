"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 👈 get current path

export default function Navbar() {
  const pathname = usePathname(); // 👈 current URL path

  const navItems = [
    { name: "Home", href: "/", icon: null },
    {
      name: "Microsoft Teams",
      href: "/teams",
      icon: "/images/teams.png",
      activeIcon: "/images/teams-active.png",
      color: "bg-indigo-500 text-white",
    },
    {
      name: "Slack",
      icon: "/images/slack.png",
      href: "/slack",
      activeIcon: "/images/slack-active.png",
      color: "bg-[#6264A7] text-white",
    },
    {
      name: "Copilot",
      icon: "/images/copilot.png",
      href: "/copilot",
      activeIcon: "/images/copilot-active.png",
      color: "bg-[#0066B8] text-white",
    },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Floxa Logo" width={100} height={40} />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href; // 👈 compare with URL
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? item.name === "Home"
                      ? "bg-indigo-500 text-white shadow"
                      : item.name === "Microsoft Teams"
                      ? "bg-[#7177CB] text-white shadow"
                      : item.name === "Slack"
                      ? "bg-[#4A154B] text-white shadow"
                      : item.name === "Copilot"
                      ? "bg-[#2359A9] text-white shadow"
                      : "bg-indigo-500 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {item.icon && (
                  <Image
                    src={isActive && item.activeIcon ? item.activeIcon : item.icon}
                    alt={item.name}
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                )}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
