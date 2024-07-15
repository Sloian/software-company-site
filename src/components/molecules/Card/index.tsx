import style from "./index.module.scss";

interface ICard {
    icon: string;
    heading: string;
    desc: string;
    linkText: string;
}

const Card = (props: ICard) => {
    const { icon, heading, desc } = props;

    return (
        <div className={style.card}>
            <img src={icon} alt="" />
            <h4>{heading}</h4>
            <p>{desc}</p>
        </div>
    );
};

export default Card;
