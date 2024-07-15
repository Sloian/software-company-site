import Button from "../../atoms/Button";
import style from "./index.module.scss";
import data from "./../../../data/home.json";

const Home = () => {
    return (
        <section className={style.home}>
            <div className={style.heroContent}>
                <h1>{data?.heading}</h1>
                <p>{data?.desc}</p>
                <Button isLink href={"https://jobs.dou.ua/companies/diceus/"}>
                    {data?.btnText}
                </Button>
            </div>
            <img src={data?.heroImg} alt="" />
        </section>
    );
};

export default Home;
