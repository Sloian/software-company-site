import style from "./index.module.scss";

interface ILoading {
  percent: number;
}

const Loading = (props: ILoading) => {
  const { percent } = props;

  return (
    <div className={style.loader}>
      <h1>{percent}%</h1>
    </div>
  );
};

export default Loading;
