import { Route } from "wouter";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
/*import Services from "../pages/Services";
import AboutMe from "../pages/About-me";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";
import NotFound from "../pages/Not-found";
import Testimonials from "../pages/Testimonials";*/

export default function Router() {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/Booking" component={Booking} />
      {/*<Route path="/Services" component={Services} />
      <Route path="/About-me" component={AboutMe} />
      <Route path="/Booking" component={Booking} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Not-found" component={NotFound} />
      <Route path="/Testimonials" component={Testimonials} />*/}
    </div>
  );
}
