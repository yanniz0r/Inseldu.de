import { FC, HTMLProps } from "react";

const inputClassName =
  "block w-full bg-slate-200 dark:bg-slate-800 placeholder:text-slate-400 dark:placeholder:text-slate-600 text-lg focus:outline-4 outline-offset-4 dark:outline-indigo-500 rounded-lg px-3 py-1.5 dark:text-white text-slate-800";

interface InputProps extends HTMLProps<HTMLInputElement> {}

const Input: FC<InputProps> = (props) => {
  return <input {...props} className={inputClassName} />;
};

export default Input;

interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {}

export const TextArea: FC<TextAreaProps> = (props) => {
  return <textarea {...props} className={inputClassName} />;
};
