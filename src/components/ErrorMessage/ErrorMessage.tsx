import { FC } from "react";
import style from "./ErrorMessage.module.css";

interface ErrorProps {
  error: string;
}

const ErrorMessage: FC<ErrorProps> = ({ error }) => {
  return <div className={style.errorMessage}>{error}</div>;
};

export default ErrorMessage;
