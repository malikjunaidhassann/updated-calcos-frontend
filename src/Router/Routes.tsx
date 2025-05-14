import Blog from "../pages/blogs";
import Home from "../pages/home";
import AboutUs from "../pages/aboutUs";
import Result from '../pages/results'

const NavLinks = [
    { title: "Home", isActive: true, link: "/" },
    { title: "About Us", isActive: false, link: "/about-us" },
    { title: "Blog", isActive: false, link: "/blog" },
  ];

const footerLinks = [
    { title: "About Us", isActive: false, link: "/about-us" },
    { title: "Press", isActive: true, link: "/" },
    { title: "Apps", isActive: false, link: "/" },
    { title: "Blog", isActive: false, link: "/blog" },
    { title: "Clearance", isActive: false, link: "/" },
];

const navigationLinks = [
  { title: "Home", isActive: true, link: "/", element: <Home /> },
  { title: "Result", isActive: true, link: "/results", element: <Result /> },
  { title: "About Us", isActive: true, link: "/about-us" , element: <AboutUs />},
  { title: "Blog", isActive: true, link: "/blog", element: <Blog />},
  { title: "Press", isActive: false, link: "/" },
  { title: "Apps", isActive: false, link: "/" },
  { title: "Clearance", isActive: false, link: "/" },
]


export { NavLinks as default, footerLinks, navigationLinks };