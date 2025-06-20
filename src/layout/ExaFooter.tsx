
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "./Container";
import Image from "next/image";
import {
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { FaXTwitter, FaSignal, FaWifi, FaMobile } from "react-icons/fa6";

export const ExaFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Mobile Plans", href: "/services/mobile", icon: <FaMobile className="inline mr-2" /> },
        { name: "Home Internet", href: "/services/broadband", icon: <FaWifi className="inline mr-2" /> },
        { name: "Business Solutions", href: "/services/business" },
        { name: "IoT Connectivity", href: "/services/iot" },
        { name: "5G Network", href: "/services/5g", icon: <FaSignal className="inline mr-2" /> },
      ],
    },
    {
      title: "Coverage",
      links: [
        { name: "Network Map", href: "/coverage/map", icon: <FaMapMarkerAlt className="inline mr-2" /> },
        { name: "5G Rollout", href: "/coverage/5g" },
        { name: "International Roaming", href: "/coverage/roaming" },
        { name: "Network Status", href: "/status" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/support" },
        { name: "Contact Us", href: "/contact" },
        { name: "Store Locator", href: "/stores" },
        { name: "Device Support", href: "/devices" },
        { name: "Community Forum", href: "/community" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Xtottel", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Investors", href: "/investors" },
        { name: "Newsroom", href: "/news" },
        { name: "Xtottel Foundation", href: "/foundation" },
      ],
    },
    // {
    //   title: "Legal",
    //   links: [
    //     { name: "Terms of Service", href: "/legal/terms" },
    //     { name: "Privacy Policy", href: "/legal/privacy" },
    //     { name: "Cookie Policy", href: "/legal/cookies" },
    //     { name: "Acceptable Use", href: "/legal/aup" },
    //     { name: "Compliance", href: "/legal/compliance" },
    //   ],
    // },
  ];

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-[#fcd116] mr-3" />,
      text: "Customer Care: 0800 800 000",
      href: "tel:+233551196764",
    },
    {
      icon: <FaEnvelope className="text-[#fcd116] mr-3" />,
      text: "help@xtottel.com",
      href: "mailto:help@xtottel.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-[#fcd116] mr-3" />,
      text: "Accra Digital Center, Ring Road",
    },
    {
      icon: <FaClock className="text-[#fcd116] mr-3" />,
      text: "Mon-Fri: 8AM-6PM | Sat: 9AM-2PM",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      href: "https://facebook.com/xtottel",
    },
    { 
      name: "Twitter", 
      icon: FaXTwitter, 
      href: "https://x.com/xtottel" 
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/company/xtottel",
    },
    { 
      name: "YouTube", 
      icon: FaYoutube, 
      href: "https://youtube.com/xtottel" 
    },
    { 
      name: "WhatsApp", 
      icon: FaWhatsapp, 
      href: "https://wa.me/+233201234567" 
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100 border-t border-gray-800">
      <Container>
        <div className="pt-12 pb-8">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-16">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* <Link href="/" className="flex items-center mb-4">
                <Image
                  src="/logos/xtottel-white.png"
                  width={180}
                  height={80}
                  alt="Xtottel Logo"
                  className="hover:opacity-90 transition-opacity"
                />
              </Link> */}

              <motion.p
                className="text-gray-400 mb-6 max-w-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Ghana&apos;s leading digital telecom provider, delivering innovative 
                connectivity solutions for homes, businesses, and IoT applications 
                nationwide.
              </motion.p>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-3"
              >
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mt-1">{item.icon}</span>
                    {item.href ? (
                      <Link 
                        href={item.href}
                        className="text-gray-400 hover:text-[#fcd116] transition-colors text-sm"
                      >
                        {item.text}
                      </Link>
                    ) : (
                      <span className="text-gray-400 text-sm">{item.text}</span>
                    )}
                  </div>
                ))}
              </motion.div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4 mt-6"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -4,
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-gray-800 hover:bg-[#fcd116] hover:text-gray-900 shadow-sm transition-all"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 col-span-1 lg:col-span-4">
              {footerLinks.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-[#fcd116] transition-colors flex items-center group"
                        >
                          <motion.span
                            whileHover={{ x: 5, color: "#fcd116" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="inline-flex items-center gap-1"
                          >
                            {link.icon && link.icon}
                            {link.name}
                            <motion.span
                              initial={{ opacity: 0, width: 0 }}
                              whileHover={{ opacity: 1, width: "0.5rem" }}
                              className="block h-px bg-[#fcd116]"
                            />
                          </motion.span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 my-8"
          />

          {/* Final Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500"
              aria-label={`Copyright ${currentYear} Xtottel`}
            >
              &copy; {currentYear}{" "}
              <span className="font-medium text-[#fcd116] transition-colors duration-300">
                Xtottel LLC.
              </span>
              . All rights reserved.
               {/* NCA License: TG-123456 */}
            </motion.p>

            {/* App Download Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <Link 
                href="#"
                className="hover:opacity-90 transition-opacity"
                aria-label="Download Xtottel App from Google Play"
              >
                <Image 
                  src="/images/google-play-badge.png" 
                  width={120} 
                  height={40} 
                  alt="Get on Google Play"
                />
              </Link>
              <Link 
                href="#"
                className="hover:opacity-90 transition-opacity"
                aria-label="Download Xtottel App from App Store"
              >
                <Image 
                  src="/images/app-store-badge.png" 
                  width={120} 
                  height={40} 
                  alt="Download on the App Store"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
