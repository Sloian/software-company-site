import Button from "../../atoms/Button";
import style from "./index.module.scss";
import data from "./../../../data/about.json";

const AboutUs = () => {
    return (
        <div className={style.aboutUsContainer} id="about us">
            <img src={data?.heroImg} alt="" />
            <div className={style.content}>
                <h6>{data?.subHeading}</h6>
                <h2>{data?.heading}</h2>
                <p>{data?.firstDesc}</p>
                <p>{data?.secondDesc}</p>
                <Button
                    isLink={true}
                    href="https://jobs.dou.ua/companies/diceus/"
                >
                    {data?.btnText}
                </Button>
            </div>
        </div>
    );
};

export default AboutUs;
