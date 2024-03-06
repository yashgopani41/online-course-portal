import React from "react";
import { BookOpen, BadgeIcon, GraduationCap } from "lucide-react";
import Image from "next/image";

const SideNav = () => {
  const menu = [
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
    },
    {
      id: 2,
      name: "Membership",
      icon: BadgeIcon,
    },
    {
      id: 3,
      name: "Be Instructor",
      icon: GraduationCap,
    },
  ];

  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <Image src="/logo.png" alt="logo" width={150} height={100} />
      <hr className="mt-7" />
      {/*  Menu List  */}
      <div className="mt-5">
        {menu.map((item, index) => (
          <div
            className="group flex gap-3 mt-2 p-3 text-[18px] items-center text-gray-600 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200"
            key={item.id}
          >
            <item.icon className="group-hover:animate-bounce" />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
