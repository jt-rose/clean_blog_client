import { Header } from "./Header";
import { UserNavbar } from "./Navbar";
import { ReactNode } from "react";

// The Post page can accept any number of components for the post
// via the children prop
export const Post = (props: {
  children: ReactNode;
  username: string;
  isAuthor: boolean;
}) => {
  return (
    <>
      <Header
        title="Man must explore, and this is exploration at its greatest"
        subHeading="Problems look mighty small from 150 miles up"
        headerIMGPath="/img/post-bg.jpg"
      />
      <UserNavbar username={props.username} isAuthor={props.isAuthor} />
      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <>{props.children}</>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
