"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/ui/Button";
import Image from "next/image";
import { Container } from "./Container";

import {
  Server,
  Briefcase,
  AlignRight,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  X,
  MapPin,
  Phone,
  Activity,
  Building2,
  Headset,
  HelpCircle,
  Store,
  TrendingUp,
  Wifi,
  Zap,
  IdCard,
  UserRound,
} from "lucide-react";

export const navItems = [
  {
    name: "Services",
    href: "#",
    subLinks: [
      {
        name: "Mobile Plans",
        href: "/services/mobile",
        description: "Voice, data & SMS bundles for individuals and businesses",
        icon: <Phone className="w-5 h-5" />,
        color:
          "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
        cta: false,
      },
      {
        name: "Home Internet",
        href: "/services/broadband",
        description: "High-speed fiber and wireless broadband solutions",
        icon: <Wifi className="w-5 h-5" />,
        color:
          "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
        cta: false,
      },
      {
        name: "Business Solutions",
        href: "/services/business",
        description:
          "Enterprise connectivity, cloud PBX, and unified communications",
        icon: <Briefcase className="w-5 h-5" />,
        color:
          "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
        cta: false,
      },
      {
        name: "IoT & M2M",
        href: "/services/iot",
        description: "Smart connectivity for devices and machines",
        icon: <Server className="w-5 h-5" />,
        color:
          "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
        cta: true,
      },
    ],
  },
  {
    name: "Coverage",
    href: "#",
    subLinks: [
      {
        name: "Network Map",
        href: "/coverage/map",
        description: "Interactive map of our coverage areas",
        icon: <MapPin className="w-5 h-5" />,
        color:
          "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
        cta: false,
      },
      {
        name: "5G Rollout",
        href: "/coverage/5g",
        description: "Our next-generation network deployment plan",
        icon: <Zap className="w-5 h-5" />,
        color:
          "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
        cta: false,
      },
      {
        name: "Network Status",
        href: "/coverage/status",
        description: "Real-time network performance and outages",
        icon: <Activity className="w-5 h-5" />,
        color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
        cta: false,
      },
    ],
  },
  {
    name: "Support",
    href: "#",
    subLinks: [
      {
        name: "Help Center",
        href: "/support/help",
        description: "FAQs and troubleshooting guides",
        icon: <HelpCircle className="w-5 h-5" />,
        color:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
        cta: false,
      },
      {
        name: "SIM Registration",
        href: "/support/sim-registration",
        description: "Register your SIM online or book a center visit",
        icon: <IdCard className="w-5 h-5" />,
        color:
          "bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300",
        cta: false,
      },
      {
        name: "Contact Us",
        href: "/support/contact",
        description: "24/7 customer care channels",
        icon: <Headset className="w-5 h-5" />,
        color:
          "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
        cta: false,
      },
      {
        name: "Retail Stores",
        href: "/support/stores",
        description: "Find our service centers and kiosks",
        icon: <Store className="w-5 h-5" />,
        color:
          "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
        cta: false,
      },
    ],
  },
  {
    name: "About Us",
    href: "#",
    subLinks: [
      {
        name: "Our Company",
        href: "/about/company",
        description: "Mission, vision and leadership",
        icon: <Building2 className="w-5 h-5" />,
        color:
          "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
        cta: false,
      },
      {
        name: "Leadership",
        href: "/about/leadership",
        description: "Meet the team behind Xtottel",
        icon: <UserRound className="w-5 h-5" />,
        color: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
        cta: false,
      },
      {
        name: "Careers",
        href: "/about/careers",
        description: "Join our growing team",
        icon: <Briefcase className="w-5 h-5" />,
        color:
          "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
        cta: true,
      },
      {
        name: "Investors",
        href: "/about/investors",
        description: "Financial reports and shareholder information",
        icon: <TrendingUp className="w-5 h-5" />,
        color:
          "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
        cta: false,
      },
    ],
  },
  //   {
  //   name: "Newsroom",
  //   href: "/newsroom",
  // },
  {
    name: "Shop",
    href: "/shop",
  },
];


export function ExaHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setOpenSubMenu(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.entries(dropdownRefs.current).forEach(([, ref]) => {
        if (ref && !ref.contains(event.target as Node)) {
          setOpenSubMenu(null);
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg border-b transition-all duration-300 ${
        isScrolled
          ? "border-gray-200/80 dark:border-gray-800/80 shadow-sm"
          : "border-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={closeAllMenus}
          >
            <Image
              src="/logos/exaweb.png"
              width={170}
              height={125}
              alt="Sendexa Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item ? (
                <div
                  key={item.name}
                  className="relative"
                  ref={(el) => {
                    dropdownRefs.current[item.name] = el;
                  }}
                  onMouseEnter={() => setOpenSubMenu(item.name)}
                  onMouseLeave={() => setOpenSubMenu(null)}
                >
                  {/* The rest of the navigation item rendering goes here */}
                  <motion.div
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2.5 text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? "text-[#a08721] dark:text-teal-400 font-semibold"
                          : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.subLinks && (
                        <ChevronDown
                          className={`ml-1 w-4 h-4 inline-block transition-transform ${
                            openSubMenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>
                  </motion.div>

                  {/* Desktop Mega Menu */}
                  {item.subLinks && (
                    <AnimatePresence>
                      {openSubMenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{
                            type: "spring",
                            damping: 20,
                            stiffness: 300,
                          }}
                          className="absolute left-0 mt-1 w-[36rem] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl py-4 z-50 border border-gray-200/80 dark:border-gray-700/80"
                        >
                          <div className="grid grid-cols-2 gap-4 px-6">
                            {item.subLinks.map((subLink) => (
                              <motion.div
                                key={subLink.name}
                                whileHover={{
                                  x: 5,
                                  transition: {
                                    type: "spring",
                                    stiffness: 300,
                                  },
                                }}
                              >
                                <Link
                                  href={subLink.href}
                                  className={`block p-3 rounded-lg transition-all ${
                                    subLink.cta
                                      ? // ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500"
                                        "bg-gradient-to-r from-[#a08721] to-[#16335c] text-white hover:from-[#a08721]/90 hover:to-purple-500"
                                      : pathname === subLink.href
                                        ? "bg-blue-50 dark:bg-gray-800"
                                        : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                                  }`}
                                  onClick={closeAllMenus}
                                >
                                  <div className="flex items-start">
                                    {/* Icon container with conditional background */}
                                    <div
                                      className={`flex-shrink-0 mr-3 rounded-lg p-2 ${
                                        subLink.cta
                                          ? "bg-white/20"
                                          : subLink.color
                                      }`}
                                    >
                                      {subLink.icon}
                                    </div>

                                    {/* Text content: title and description */}
                                    <div>
                                      <div
                                        className={`font-medium ${
                                          subLink.cta
                                            ? "text-white"
                                            : "text-gray-900 dark:text-white"
                                        }`}
                                      >
                                        {subLink.name}
                                      </div>
                                      <div
                                        className={`text-xs mt-1 ${
                                          subLink.cta
                                            ? "text-white/80"
                                            : "text-gray-500 dark:text-gray-400"
                                        }`}
                                      >
                                        {subLink.description}
                                      </div>
                                    </div>

                                    {/* Optional CTA arrow icon aligned to the right */}
                                    {subLink.cta && (
                                      <ArrowRight className="ml-auto w-4 h-4 opacity-80" />
                                    )}
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ) : null
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="primary"
                className="gap-2"
                onClick={() => (window.location.href = "/get-sim")}
              >
                <span>Get a SIM</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="secondary"
                className="gap-2"
                onClick={() =>
                  (window.location.href = "https://my.xtottel.com")
                }
              >
                <span>My Xtottel</span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <AlignRight className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={closeAllMenus}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-screen w-10/11 max-w-md bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-xl z-50 border-l border-gray-200/80 dark:border-gray-800/80"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 h-20">
                {/* Sendexa Logo */}
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={closeAllMenus}
                >
                  <Image
                    src="/logos/exaweb.png"
                    width={170}
                    height={125}
                    alt="Sendexa Logo"
                  />
                </Link>

                <button
                  onClick={closeAllMenus}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="h-[calc(100vh-5rem)] overflow-y-auto p-4">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name} className="space-y-1">
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                        <Link
                          href={item.href}
                          className={`text-base font-medium ${
                            pathname === item.href
                              ? "text-[#a08721] dark:text-teal-400"
                              : "text-gray-900 dark:text-white"
                          }`}
                          onClick={closeAllMenus}
                        >
                          {item.name}
                        </Link>
                        {item.subLinks && (
                          <button
                            onClick={() => toggleSubMenu(item.name)}
                            className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                            aria-expanded={openSubMenu === item.name}
                          >
                            {openSubMenu === item.name ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </button>
                        )}
                      </div>

                      {/* Mobile Submenu - Updated to match working example */}
                      {item.subLinks && (
                        <AnimatePresence>
                          {openSubMenu === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 ml-4 border-l-2 border-gray-200 dark:border-gray-700 overflow-hidden"
                            >
                              <div className="space-y-2 py-2">
                                {item.subLinks.map((subLink) => (
                                  <Link
                                    key={subLink.name}
                                    href={subLink.href}
                                    className={`block p-3 rounded-lg transition-all ${
                                      subLink.cta
                                        ? "bg-gradient-to-r from-[#a08721] to-[#16335c] text-white"
                                        : pathname === subLink.href
                                          ? "bg-blue-50 dark:bg-gray-800"
                                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                    }`}
                                    onClick={closeAllMenus}
                                  >
                                    <div className="flex items-start">
                                      <div
                                        className={`flex-shrink-0 mr-3 rounded-lg p-2 ${
                                          subLink.cta
                                            ? "bg-white/20"
                                            : subLink.color
                                        }`}
                                      >
                                        {subLink.icon}
                                      </div>
                                      <div>
                                        <div
                                          className={`font-medium ${
                                            subLink.cta
                                              ? "text-white"
                                              : "text-gray-900 dark:text-white"
                                          }`}
                                        >
                                          {subLink.name}
                                        </div>
                                        <div
                                          className={`text-xs mt-1 ${
                                            subLink.cta
                                              ? "text-white/80"
                                              : "text-gray-500 dark:text-gray-400"
                                          }`}
                                        >
                                          {subLink.description}
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-8 p-4 space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="primary"
                      className="w-full gap-2"
                      onClick={() => {
                        closeAllMenus();
                        window.location.href = "/get-sim";
                      }}
                    >
                      <span>Get a SIM</span>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="secondary"
                      className="w-full gap-2"
                      onClick={() => {
                        closeAllMenus();
                        window.location.href = "https://my.xtottel.com";
                      }}
                    >
                      <span>My Xtottel</span>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
