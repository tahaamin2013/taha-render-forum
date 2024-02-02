import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaPlus } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className="flex-none w-1/4 bg-white border border-zinc-400 fixed h-screen overflow-auto pt-20 bottom-0 px-8">
      <div className="p-4 flex flex-col gap-4 font-semibold text-lg">
        <Link href="/" className="flex gap-2 items-center">
          <FaHome />
          Home
        </Link>
        <hr />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline">
              Communities
            </AccordionTrigger>
            <AccordionContent>
              <Link href="/r/create" className="flex gap-2 items-center">
<FaPlus />
                Create a Community
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default SideBar;
