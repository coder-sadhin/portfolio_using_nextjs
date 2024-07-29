"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Services",
    path: "/services"
  },
  {
    name: "Resume",
    path: "/resume"
  },
  {
    name: "Work",
    path: "/work"
  },
  {
    name: "Contact",
    path: "/contact"
  },
];

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>

        <SheetContent className="flex flex-col">
          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Akkas<span className="text-accent">.dev</span>
                </h1>
            </Link>
          </div>
          <nav className="flex flex-col justify-center items-center gap-8">
            {Links.map((link, index) => (
                <Link 
                    key={index} 
                    href={link.path}
                    className={`${ link.path === pathname && "text-accent border-b-2 border-accent"} text-xl hover:text-accent transition-all`}
                >
                    {link.name}
                </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MobileNav;
