import { Route } from "wouter";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Booking from "../pages/Booking";
import AboutMe from "../pages/About-me";
import NotFound from "../pages/Not-found";
/*
import Contact from "../pages/Contact";
import Testimonials from "../pages/Testimonials";*/

export default function Router() {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/Services" component={Services} />
      <Route path="/Booking" component={Booking} />
      <Route path="/Services" component={Services} />
      <Route path="/About-me" component={AboutMe} />
      <Route path="/Not-found" component={NotFound} />
      {/*
      <Route path="/Contact" component={Contact} />
      <Route path="/Testimonials" component={Testimonials} />*/}
    </div>
  );
}
