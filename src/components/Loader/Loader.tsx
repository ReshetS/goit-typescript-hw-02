import { FC } from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader: FC = () => {
  return (
    <RotatingLines
      visible={true}
      width="96"
      strokeColor="#3368f1"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
    />
  );
};

export default Loader;
