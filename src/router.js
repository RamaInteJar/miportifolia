import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import Show from "./pages/Show";
import {portifolioLoader} from './loader'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>} loader={portifolioLoader}>
    <Route path="" element={<Index/>}/>
    <Route path=":id" element={<Show/>}/>
    <Route path="Create"/>
    <Route path="Update/:id" />
    <Route path="Delete/:id" />
    </Route>
  )
);
export default router