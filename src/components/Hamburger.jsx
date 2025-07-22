import { useState } from "react";
import Hamburger from "hamburger-react";

export default function HamburgerComponent() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:invisible p-3">
      <Hamburger color="#224dbe" size={30} toggled={open} toggle={setOpen} />
      {open && (
        <div className="fixed absolute top-0 left-0 w-screen h-screen text-black bg-white">
          <header className="flex w-full items-center justify-end">
            <Hamburger size={30} toggled={open} toggle={setOpen} />
          </header>
          <div
            className="open-hamburger flex flex-col gap-10 items-center
            justify-center h-screen text-3xl text-center"
          >
            <a id="open-hamburger" href="">
              Services
            </a>
            <a id="open-hamburger" href="">
              Booking
            </a>
            <a id="open-hamburger" href="">
              About me
            </a>
            <a id="open-hamburger" href="">
              Testimonials
            </a>
            <a id="open-hamburger" href="">
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
