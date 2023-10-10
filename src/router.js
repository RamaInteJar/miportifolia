import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import {portifolioLoader} from './loader'
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact"
import Projects from "./pages/Projects";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>} >
    <Route path="" element={<Index/>} loader={portifolioLoader}/>
    <Route path="" element={<AboutMe/>}/>
    <Route path="" element={<Contact/>}/>
    <Route path="" element={<Projects/>}/>
    </Route>
  )
);
export default router