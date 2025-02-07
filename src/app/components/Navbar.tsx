"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { data: session } = useSession();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleSubmenu = (submenu: string) => {
    setActiveSubmenu((prevSubmenu) => (prevSubmenu === submenu ? null : submenu));
  };

  function stringToColor(string: string): string {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
  }

  function getInitials(name: string): string {
    const names = name.split(' ');
    const initials = names.map((n) => n[0]).join('');
    return initials.toUpperCase();
  }

  const userInitials = session?.user?.name ? getInitials(session.user.name) : '';
  const bgColor = session?.user?.name ? stringToColor(session.user.name) : '#ccc';

  return (
    <div className={cn("fixed top-0 inset-x-0 z-50 w-full", className)}>
      <nav className="bg-black w-full">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
          <div className="lg:hidden sm:flex md:flex">
            {session?.user ? (
              <div className="relative">
                <button
                  className="text-white focus:outline-none"
                  onClick={handleProfileClick}
                >
                  <FaUserCircle size={24} />
                </button>
                {isProfileMenuOpen && (
                  <div className="absolute lg:right-0 mt-2 w-50 bg-[#282828] shadow-md rounded-md">
                    <div className="flex space-x-3 p-4 pb-5">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: bgColor }}>
                          <span className="text-white font-semibold">
                            {userInitials}
                          </span>
                        </button>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold">{session.user.name}</p>
                        <p className="text-xs text-gray-500">{session.user.email}</p>
                      </div>
                    </div>
                    <div className="border-lg border-gray-200">
                      <button
                        className="w-full text-left px-4 py-2 text-sm text-white bg-purple-600 hover:font-bold hover:bg-purple-800"
                        onClick={() => signOut()}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login">
                <button className="text-white focus:outline-none">Login</button>
              </Link>
            )}
          </div>

          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="Logo" className="w-16 h-16" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center justify-center flex-grow">
            <Menu setActive={setActive} className="flex lg:space-x-4 flex-row">
              <MenuItem setActive={setActive} active={active} item="What we do >">
                <div className="flex justify-around space-y-6 m-2 mx-10 lg:space-x-10">
                  <div className="flex flex-col lg:space-y-4 py-7">
                    <p className="mb-2 text-xl text-slate-400 hover:text-yellow-400 hover:cursor-text">
                      What we do<span>➡️</span>
                    </p>
                    <HoveredLink href="/service">
                      <span className="hover:border-b-4 animate-in hover:text-blue-400 border-neutral-100 border-y-gray-400">
                        Services
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/research">
                      <span className="hover:border-b-4 animate-in hover:text-blue-400 border-neutral-100 border-y-gray-400">
                        Research & Innovations
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/security">
                      <span className="hover:border-b-4 animate-in hover:text-blue-400 border-neutral-100 border-y-gray-400">
                        Security
                      </span>
                    </HoveredLink>
                  </div>
                  <div className="flex flex-col space-y-4 pt-7">
                    <HoveredLink href="">
                      <span className="text-sm text-slate-400"></span>
                    </HoveredLink>
                    <HoveredLink href="/learning">
                      <span className="hover:border-b-4 animate-in border-neutral-100 border-y-gray-400 hover:text-blue-400">
                        Learning
                      </span>
                    </HoveredLink>
                  </div>
                </div>
              </MenuItem>
               
              <Link href="/ProjectPortfolio" className="ml-2">
                <MenuItem setActive={setActive} active={active} item="Project Portfolio" />
              </Link>

              <Link href="/whatweThink" className="ml-2">
                <MenuItem setActive={setActive} active={active} item="What we think" />
              </Link>
              <MenuItem setActive={setActive} active={active} item="What we are >">
                <div className="flex justify-around space-y-6 lg:space-x-10 p-10 rounded">
                  <div className="flex flex-col space-y-4">
                    <p className="mb-2 text-xl text-slate-400 hover:text-yellow-400 hover:cursor-pointer">
                      About Arohi Software <span>➡️</span>
                    </p>
                    <HoveredLink href="/courses">
                      <span className="text-sm text-slate-400">
                        Our organization
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/leaders">
                      <span className="hover:border-b-4 hover:text-blue-400">
                        Leaders
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/location">
                      <span className="hover:border-b-4 hover:text-blue-400">
                        Locations
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/gallery">
                      <span className="hover:border-b-4 hover:text-blue-400">
                        Gallery
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/events">
                      <span className="hover:border-b-4 hover:text-blue-400">
                        Events
                      </span>
                    </HoveredLink>
                  </div>
                  <div className="flex flex-col space-y-4 pt-7">
                    <HoveredLink href="/courses">
                      <span className="text-sm text-slate-400">
                        Media & Investors
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/media">
                      <span className="hover:border-b-4 animate-in border-neutral-100 border-y-gray-400 hover:text-blue-400">
                        News Room
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/investor">
                      <span className="hover:border-b-4 hover:text-blue-400">
                        Investor Relations
                      </span>
                    </HoveredLink>
                  </div>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Careers >">
                <div className="flex justify-around space-y-6 space-x-10 p-10 rounded">
                  <div className="flex flex-col space-y-4">
                    <p className="mb-2 text-xl text-slate-400 hover:text-yellow-400 hover:cursor-text">
                      Careers home <span>➡️</span>
                    </p>
                    <HoveredLink href="/courses">
                      <span className="text-sm text-slate-400 cursor-text">
                        Training & Internships
                      </span>
                    </HoveredLink>

                    <HoveredLink href="/careers">
                      <span className="hover:border-b-4 animate-in hover:text-blue-400 border-neutral-100 border-y-gray-400">
                        Careers
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/courses">
                      <span className="hover:border-b-4 animate-in hover:text-blue-400 border-neutral-100 border-y-gray-400">
                        Training & Development
                      </span>
                    </HoveredLink>

                    <HoveredLink href="/experienceProf">
                      <span className="hover:border-b-4 animate-in hover:text-blue-400 border-neutral-100 border-y-gray-400">
                        Experience Professionals
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/worken">
                      <span className="hover:border-b-4 animate-in hover:text-blue-400 border-neutral-100 border-y-gray-400">
                        Work environment
                      </span>
                    </HoveredLink>
                  </div>
                  <div className="flex flex-col space-y-4 pt-7">
                    <HoveredLink href="/courses">
                      <span className="text-sm text-slate-400 cursor-text">
                        Find Jobs
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/jobs">
                      <span className="hover:border-b-4 animate-in hover:text-blue-400 border-neutral-100 border-y-gray-400">
                        Search all Jobs
                      </span>
                    </HoveredLink>

                    <HoveredLink href="/contact">
                      <span className="text-sm pt-2 text-slate-400 hover:text-yellow-500 cursor-pointer">
                        Contact Us
                      </span>
                    </HoveredLink>
                    <HoveredLink href="/faq">
                      <span className="text-sm text-slate-400 hover:text-yellow-500 cursor-pointer">
                        FAQ
                      </span>
                    </HoveredLink>
                  </div>
                </div>
              </MenuItem>
            </Menu>
          </div>

             {/* Login button or profile button */}
          <div className="hidden lg:flex px-8">
            {session?.user ? (
              <div className="relative">
                <button
                  className="text-white focus:outline-none"
                  onClick={handleProfileClick}
                >
                  <FaUserCircle size={24} />
                </button>
                {isProfileMenuOpen && (
                  <div className="absolute lg:right-0 mt-2 w-50 bg-[#282828] shadow-md rounded-md">
                  <div className="flex space-x-3 p-4 pb-5">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center justify-center w-10 h-10 rounded-full"
                style={{ backgroundColor: bgColor }}>
                      <span className="text-white font-semibold">
                  {userInitials}
                </span>
                      </button>
                    </div>
                    <div className=" space-y-1">
                       <p className="text-sm font-semibold ">{session.user.name}</p>
                    <p className="text-xs text-gray-500">{session.user.email}</p>
                    </div>
                  </div>
                  <div className="border-lg border-gray-200">
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-white bg-purple-600  hover:font-bold hover:bg-purple-800"
                      onClick={() => signOut()}
                    >
                      Logout
                    </button>
                  </div>
                </div>
                )}
              </div>
            ) : (
              <Link href="/login">
                <button className="text-white focus:outline-none">Login</button>
              </Link>
            )}
          </div>


          <div className="lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900  bg-opacity-95 z-50 flex flex-col p-4">
          <div className="flex justify-end">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="mt-8 space-y-10">
            <div>
              <button
                className="text-white  text-left mb-4 w-full focus:outline-none"
                onClick={() => toggleSubmenu('whatWeDo')}
              >
                What we do {activeSubmenu === 'whatWeDo' ? '▲' : '▼'}
              </button>
              {activeSubmenu === 'whatWeDo' && (
                <div className="pl-4 mt-2 space-y-2 text-righ">
                  <Link href="/service" onClick={handleLinkClick}>
                    <p className="text-gray-400">Services</p>
                  </Link>
                  <Link href="/research" onClick={handleLinkClick}>
                    <p className="text-gray-400">Research & Innovations</p>
                  </Link>
                  <Link href="/security" onClick={handleLinkClick}>
                    <p className="text-gray-400">Security</p>
                  </Link>
                  <Link href="/learning" onClick={handleLinkClick}>
                    <p className="text-gray-400">Learning</p>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/ProjectPortfolio" className="ml-2">
                <MenuItem setActive={setActive} active={active} item="Project Portfolio" />
              </Link>
            <Link href="/whatweThink" onClick={handleLinkClick}>
              <p className="text-white text-left mt-4">What we think</p>
            </Link>
            <div>
              <button
                className="text-white text-left w-full focus:outline-none"
                onClick={() => toggleSubmenu('whatWeAre')}
              >
                What we are {activeSubmenu === 'whatWeAre' ? '▲' : '▼'}
              </button>
              {activeSubmenu === 'whatWeAre' && (
                <div className="pl-4 mt-2 space-y-2 text-left">
                  <Link href="/leaders" onClick={handleLinkClick}>
                    <p className="text-gray-400">Leaders</p>
                  </Link>
                  <Link href="/location" onClick={handleLinkClick}>
                    <p className="text-gray-400">Locations</p>
                  </Link>
                  <Link href="/gallery" onClick={handleLinkClick}>
                    <p className="text-gray-400">Gallery</p>
                  </Link>
                  <Link href="/events" onClick={handleLinkClick}>
                    <p className="text-gray-400">Events</p>
                  </Link>
                  <Link href="/media" onClick={handleLinkClick}>
                    <p className="text-gray-400">Media & Investors</p>
                  </Link>
                  <Link href="/newsroom" onClick={handleLinkClick}>
                    <p className="text-gray-400">News Room</p>
                  </Link>
                  <Link href="/investor" onClick={handleLinkClick}>
                    <p className="text-gray-400">Investor Relations</p>
                  </Link>
                </div>
              )}
            </div>
            <div>
              <button
                className="text-white text-left w-full focus:outline-none"
                onClick={() => toggleSubmenu('careers')}
              >
                Careers {activeSubmenu === 'careers' ? '▲' : '▼'}
              </button>
              {activeSubmenu === 'careers' && (
                <div className="pl-4 mt-2 space-y-2 text-left">
                  <Link href="/training" onClick={handleLinkClick}>
                    <p className="text-gray-400">Training & Internships</p>
                  </Link>
                  <Link href="/careers" onClick={handleLinkClick}>
                    <p className="text-gray-400">Careers</p>
                  </Link>
                  <Link href="/campus" onClick={handleLinkClick}>
                    <p className="text-gray-400">Campus Hiring</p>
                  </Link>
                  <Link href="/jobs" onClick={handleLinkClick}>
                    <p className="text-gray-400">Jobs</p>
                  </Link>
                </div>
              )}
            </div>
             </div>
              </div>
      )}
    </div>
  );
}

export default Navbar;
