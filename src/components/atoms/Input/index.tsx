import style from "./index.module.scss";

interface IInput {
  type?: string;
  placeholder: string;
  name: string;
  icon: string;
}

const Input = (props: IInput) => {
  const { type = "text", placeholder, name, icon } = props;
  return (
    <div className={style.input}>
      {icon && <img src={icon} alt="icon" />}
      {type === "textarea" ? (
        <textarea placeholder={placeholder} name={name} required />
      ) : (
        <input type={type} placeholder={placeholder} name={name} required />
      )}
    </div>
  );
};

export default Input;
