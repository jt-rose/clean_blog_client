import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { useMemo, useState } from "react";

import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";
import { HistoryEditor } from "slate-history";

type CustomElement = { type: "paragraph"; children: CustomText[] };
type CustomText = { text: string; bold?: true };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const CreatePost = () => {
  const initialValue: Descendant[] = [
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ];
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<Descendant[]>(initialValue);
  return (
    <>
      <Header
        title="Create New post"
        subHeading="Let your pen wander..."
        headerIMGPath="/img/home-bg.jpg"
      />
      <Navbar />
      <Slate editor={editor} value={value} onChange={setValue}>
        <Editable />
      </Slate>
    </>
  );
};

export default CreatePost;
