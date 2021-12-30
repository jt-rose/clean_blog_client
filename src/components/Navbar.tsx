import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

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

const NavBarLinks = (props: { mediaTarget: "desktop" | "mobile" }) => {
  return (
    <div id="navbarResponsive" className="navbar-collapse">
      <ul
        className="navbar-nav ms-auto py-4 py-lg-0"
        id={`navbar-${props.mediaTarget}`}
      >
        {[
          { href: "/", linkName: "Home" },
          { href: "/about", linkName: "About" },
          { href: "/post", linkName: "Sample Post" },
          { href: "/contact", linkName: "Contact" },
        ].map((pageInfo) => (
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

const NavBarDesktopLinks = () => <NavBarLinks mediaTarget="desktop" />;

const NavBarMobileLinks = (props: { visible: boolean }) => {
  return (
    <div
      className={`slider ${!props.visible && "closed"}`}
      id="navbarResponsive"
    >
      <NavBarLinks mediaTarget="mobile" />
    </div>
  );
};
const SiteLogo = () => (
  <Link href="/">
    <a className="navbar-brand">Start Bootstrap</a>
  </Link>
);

export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <nav id="mainNav" className="navbar navbar-expand-lg navbar-light">
      <div className="container px-4 px-lg-5">
        <div className="navbar-top-container">
          <SiteLogo />
          <NavBarDesktopLinks />
          <NavBarToggler visible={visible} setVisible={setVisible} />
        </div>
        <NavBarMobileLinks visible={visible} />
      </div>
    </nav>
  );
};
