export interface IPostPreview {
  postID: number;
  title: string;
  subtitle?: string;

  poster: string;
  date: Date;
}

const sampleDate = new Date();
export const posts: IPostPreview[] = [
  {
    postID: 1,
    title: "Man must explore, and this is exploration at its greatest",
    subtitle: "Problems look mighty small from 150 miles up",
    date: sampleDate,
    poster: "Sample Poster",
  },
  {
    postID: 2,
    title:
      "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
    date: sampleDate,
    poster: "Sample Poster",
  },
  {
    postID: 3,
    title: "Science has not yet mastered prophecy",
    subtitle:
      "We predict too much for the next year and yet far too little for the next ten.",
    date: sampleDate,
    poster: "Sample Poster",
  },
  {
    postID: 4,
    title: "Failure is not an option",
    subtitle:
      "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
    date: sampleDate,
    poster: "Sample Poster",
  },
];
