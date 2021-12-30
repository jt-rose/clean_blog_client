import Image from "next/image";

export const Header = (props: {
  title: string;
  subHeading: string;
  headerIMGPath: string;
}) => {
  return (
    <header className="masthead">
      <div style={{ opacity: "50%" }}>
        <Image
          alt="Pen and Paper"
          src={props.headerIMGPath}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="container position-relative px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="page-heading">
              <h1>{props.title}</h1>
              <span className="subheading">{props.subHeading}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
