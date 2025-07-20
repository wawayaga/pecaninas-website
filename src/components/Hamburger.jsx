import { useState } from "react";
import Hamburger from "hamburger-react";

export default function HamburgerComponent() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:invisible">
      <Hamburger color="#224dbe" size={40} toggled={open} toggle={setOpen} />
      {open && (
        <div className="fixed absolute top-0 left-0 w-screen h-screen text-black bg-white">
          <header className="flex w-full items-center justify-end">
            <Hamburger size={40} toggled={open} toggle={setOpen} />
          </header>
          <main className="open-hamburger flex flex-col gap-10 items-center justify-center h-screen text-3xl text-center">
            <a id="ham" href="">
              Services
            </a>
            <a id="ham" href="">
              Booking
            </a>
            <a id="ham" href="">
              About me
            </a>
            <a id="ham" href="">
              Testimonials
            </a>
            <a id="ham" href="">
              Contact
            </a>
          </main>
        </div>
      )}
    </div>
  );
}
