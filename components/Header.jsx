import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-4 xl:py-7 text-white bg-pink-50/20">
        <div className="container mx-auto flex justify-between items-center">
            {/* this is logo section */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Akkas<span className="text-accent">.dev</span>
                </h1>
            </Link>

            {/* this is nav bar section */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link href="/contact">
                    <Button>Hire me</Button>
                </Link>
            </div>

            {/* mobile navbar */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header