import { FC } from "react";

interface ParagraphsProps {
  text: string;
}

const Paragraphs: FC<ParagraphsProps> = (props) => {
  const paragraphs = props.text.split("\n").map((paragraph, index) => (
    <p className="mb-2" key={index}>
      {paragraph}
    </p>
  ));
  return <>{paragraphs}</>;
};

export default Paragraphs;
