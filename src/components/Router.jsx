import { Route, Switch } from "wouter";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Booking from "../pages/Booking";
import AboutMe from "../pages/About-me";
import NotFound from "../pages/Not-found";
import Donation from "../pages/Donation";
import Contact from "../pages/Contact";


export default function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/Services" component={Services} />
      <Route path="/About-me" component={AboutMe} />
      <Route path="/Donation" component={Donation} />
      <Route path="/Booking" component={Booking} />
      <Route path="/Contact" component={Contact} />

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
