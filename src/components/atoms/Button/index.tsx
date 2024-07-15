import style from "./index.module.scss";

type Link =
    | {
          isLink: true;
          href: string;
      }
    | {
          isLink?: false;
      };

type Ibutton = {
    children: string;
    icon?: string;
    type?: "submit" | "reset" | "button";
    disabled?: boolean;
} & Link;

const Button = (props: Ibutton) => {
    const { children, icon, type = "button", disabled = false } = props;

    return (
        <button className={style.btn} type={type} disabled={disabled}>
            {props.isLink ? (
                <a href={props.href} target="_blank" rel="noreferrer">
                    {icon && <img src={icon} alt="icon" />}
                    {children}
                </a>
            ) : (
                <span>
                    {icon && <img src={icon} alt="icon" />}
                    {children}
                </span>
            )}
        </button>
    );
};

export default Button;
