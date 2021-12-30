import { Header } from "../components/Header";
import { PostPreview } from "../components/PostPreview";
import { Navbar } from "../components/Navbar";
import { IPostPreview, posts } from "../data/posts";

const Index = (props: { posts: IPostPreview[] }) => {
  return (
    <>
      <Header
        title="Clean Blog"
        subHeading="A Blog Theme by Start Bootstrap"
        headerIMGPath="/img/home-bg.jpg"
      />
      <Navbar />
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {/*<!-- Post preview-->*/}
            {props.posts.map((post) => (
              <div key={post.title + "-container"}>
                <PostPreview
                  title={post.title}
                  subtitle={post.subtitle}
                  date={post.date}
                  poster={post.poster}
                  postID={post.postID}
                  key={post.title + "-preview"}
                />
                <hr className="my-4" />
              </div>
            ))}

            {/*<!-- Pager-->*/}
            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">
                Older Posts →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// boilerplate for NextJS SSR
// this should be set up to enable server-side rendering
// from the appropriate database
/*
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
*/

// For our sample app, we will ignore SSR
// and statically generate the page with the post samples included
// but for a site with a live database,
// SSR should be enabled via getServerSideProps()
// to dynamically generate the page and maintain SEO
const IndexWithSample = () => <Index posts={posts} />;
export default IndexWithSample;
