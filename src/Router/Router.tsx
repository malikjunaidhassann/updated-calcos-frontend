import {
    createBrowserRouter,
  } from "react-router-dom";
import { navigationLinks } from "./Routes";


export const router = createBrowserRouter(navigationLinks.filter(link => link.isActive).map(link => {
    return {
        path: link.link,
        element: link.element
    }
}));