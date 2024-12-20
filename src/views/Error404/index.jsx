import { useRouteError } from "react-router-dom";
import style from "./Error404.module.css";

const Error404 = () => {
  const error = useRouteError();

  return (
    <div className={style.container}>
      <h3 className={style.title}>{error.status}</h3>
      <p className={style.description}> {`Ops!... ${error.statusText}`}</p>
    </div>
  );
};

export default Error404;
