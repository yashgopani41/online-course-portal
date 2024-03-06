import React from "react";
import { Search, BellDot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="p-4 bg-white flex justify-between">
      <div className="flex gap-2 border p-2 rounded-md">
        <Search className="text-dark h-5 w-5" />
        <input type="text" placeholder="Search..." className="outline-none" />
      </div>
      <div className="flex items-center gap-4">
        <BellDot className="text-gray-500" />
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Header;
