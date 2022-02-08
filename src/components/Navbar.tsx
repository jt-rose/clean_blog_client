import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

// home, login, search
// homepage / username, [create], activity, about
interface NavBarLinkData {
  href: string;
  linkName: string;
}

// links used on home page of site
const homeNavBarLinks: NavBarLinkData[] = [
  { href: "/", linkName: "Home" },
  { href: "/login", linkName: "Login" },
  { href: "/search", linkName: "Search" },
];

// generated links custom to each user's blog
const getUserNavbarLinks = (
  username: string,
  isAuthor: boolean
): NavBarLinkData[] => {
  const userLinks = [
    { href: "/", linkName: "Home" },
    { href: `/${username}`, linkName: username },
    { href: `/${username}/about`, linkName: "About" },
    { href: `/${username}/activity`, linkName: "Activity" },
  ];

  const fullLinks = isAuthor
    ? [...userLinks, { href: `/${username}/create`, linkName: "Create" }]
    : userLinks;

  return fullLinks;
};

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
export const UserNavbar = (props: { username: string; isAuthor: boolean }) => {
  const linkData = getUserNavbarLinks(props.username, props.isAuthor);
  return <Navbar linkData={linkData} />;
};
