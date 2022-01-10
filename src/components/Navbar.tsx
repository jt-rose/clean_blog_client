import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

// home, login, search
// homepage / username, [create], activity, about
interface NavBarLinkData {
  href: string;
  linkName: string;
}

const homeNavBarLinks: NavBarLinkData[] = [
  { href: "/", linkName: "Home" },
  { href: "/login", linkName: "Login" },
  { href: "/search", linkName: "Search" },
];

const userNavBarLinks: NavBarLinkData[] = [
  { href: "/", linkName: "Home" },
  { href: "/[user]", linkName: "[user]" },
  { href: "/create", linkName: "Create" },
  { href: "/activity", linkName: "Activity" },
  { href: "/about", linkName: "About" },
];

const NavBarToggler = (props: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const { visible, setVisible } = props;
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={() => setVisible(!visible)}
    >
      Menu
      <i className="fas fa-bars"></i>
    </button>
  );
};

const NavBarLinks = (props: {
  mediaTarget: "desktop" | "mobile";
  linkData: NavBarLinkData[];
}) => {
  return (
    <div id="navbarResponsive" className="navbar-collapse">
      <ul
        className="navbar-nav ms-auto py-4 py-lg-0"
        id={`navbar-${props.mediaTarget}`}
      >
        {props.linkData.map((pageInfo) => (
          <li className="nav-item" key={pageInfo.linkName + " link"}>
            <Link href={pageInfo.href}>
              <a className="nav-link px-lg-3 py-3 py-lg-4">
                {pageInfo.linkName}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NavBarDesktopLinks = (props: { linkData: NavBarLinkData[] }) => (
  <NavBarLinks mediaTarget="desktop" linkData={props.linkData} />
);

const NavBarMobileLinks = (props: {
  visible: boolean;
  linkData: NavBarLinkData[];
}) => {
  return (
    <div
      className={`slider ${!props.visible && "closed"}`}
      id="navbarResponsive"
    >
      <NavBarLinks mediaTarget="mobile" linkData={props.linkData} />
    </div>
  );
};
const SiteLogo = () => (
  <Link href="/">
    <a className="navbar-brand">Start Bootstrap</a>
  </Link>
);

const Navbar = (props: { linkData: NavBarLinkData[] }) => {
  const [visible, setVisible] = useState(false);
  return (
    <nav id="mainNav" className="navbar navbar-expand-lg navbar-light">
      <div className="container px-4 px-lg-5">
        <div className="navbar-top-container">
          <SiteLogo />
          <NavBarDesktopLinks linkData={props.linkData} />
          <NavBarToggler visible={visible} setVisible={setVisible} />
        </div>
        <NavBarMobileLinks visible={visible} linkData={props.linkData} />
      </div>
    </nav>
  );
};

export const HomeNavbar = () => <Navbar linkData={homeNavBarLinks} />;
export const UserNavbar = () => <Navbar linkData={userNavBarLinks} />;
