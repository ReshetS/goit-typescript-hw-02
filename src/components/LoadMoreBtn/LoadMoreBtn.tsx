import { FC } from "react";
import style from "./LoadMoreBtn.module.css";

interface LoadMoreProps {
  onClick: () => void;
}

const LoadMoreBtn: FC<LoadMoreProps> = ({ onClick }) => {
  return (
    <button className={style.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
