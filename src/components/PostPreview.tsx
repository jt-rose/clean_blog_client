import Link from "next/link";

export interface IPostPreview {
  postID: number;
  title: string;
  urlEncodedTitle: string;
  subtitle?: string;

  poster: string;
  date: Date;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const PostPreview = (props: IPostPreview) => {
  const { date } = props;
  const d = new Date(date);
  const fmtDate = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  return (
    <div className="post-preview">
      <Link href={`/${props.poster}/${props.urlEncodedTitle}`}>
        <a>
          <h2 className="post-title">{props.title}</h2>
          {props.subtitle && (
            <h3 className="post-subtitle">{props.subtitle}</h3>
          )}
        </a>
      </Link>
      <p className="post-meta">
        {"Posted by "}
        <Link href={`/${props.poster}`}>
          <a>{props.poster}</a>
        </Link>
        {" on "}
        {fmtDate}
      </p>
    </div>
  );
};
