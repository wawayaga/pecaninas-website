import Logo from "./Logo";
import HamburgerComponent from "./Hamburger";

export default function Header() {
  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div>
          <HamburgerComponent />
        </div>
        <div className="navbar carlito-bold text-lg items-center gap-4 invisible md:visible md:flex pr-10">
          <a href="">Services</a>
          <a href="">Booking</a>
          <a href="">About me</a>
          <a href="">Testimonials</a>
          <a href="">Contact</a>
        </div>
      </nav>
    </header>
  );
}
