import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { ReactNode } from "react";
import { SamplePost } from "../components/SamplePost";

// The Post page can accept any number of components for the post
// via the children prop
export const Post = (props: { children: ReactNode }) => {
  return (
    <>
      <Header
        title="Man must explore, and this is exploration at its greatest"
        subHeading="Problems look mighty small from 150 miles up"
        headerIMGPath="/img/post-bg.jpg"
      />
      <Navbar />
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

// to keep our frontend example simple, we will provide a direct sample
// in a live app this would be fetched from the server using SSR
const Sample = () => (
  <Post>
    <SamplePost />
  </Post>
);
export default Sample;
