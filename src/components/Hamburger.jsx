import { useState } from "react";
import { Link } from "wouter";
import Hamburger from "hamburger-react";

export default function HamburgerComponent() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:invisible">
      <Hamburger color="#224dbe" size={30} toggled={open} toggle={setOpen} />
      {open && (
        <div className="z-40 fixed absolute top-0 left-0 w-screen h-screen text-black bg-white">
          <header className="flex w-full items-center justify-end">
            <Hamburger size={30} toggled={open} toggle={setOpen} />
          </header>
          <div
            className="open-hamburger flex flex-col gap-10 items-center
            justify-center h-screen text-3xl text-center"
          >
            <Link href="/Services">Services</Link>
            <Link href="/Booking">Booking</Link>
            <Link href="/About-me">About me</Link>
            <Link href="/Testimonials">Testimonials</Link>
            <Link href="/Contact">Contact</Link>
          </div>
        </div>
      )}
    </div>
  );
}
