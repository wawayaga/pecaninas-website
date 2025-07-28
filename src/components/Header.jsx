import Logo from "./Logo";
import HamburgerComponent from "./Hamburger";
import { Link } from "wouter";

export default function Header() {
  return (
    <div>
      {/*Desktop-header */}
      <header className="desktop-header flex bg-white justify-between items-center">
        <Logo />
        <nav className="navbar text-blue carlito-bold text-lg items-center gap-4 md:flex pr-10">
          <Link href="/Services">Services</Link>
          <Link href="/About-me">About me</Link>
          <Link href="/Donation">Donation</Link>
          <Link href="/Contact">Contact</Link>
        </nav>
      </header>
      {/*Mobile header*/}
      <header className="md:hidden bg-white justify-between flex items-center">
        <Logo />
        <HamburgerComponent />
      </header>
    </div>
  );
}
