import Card from "../../molecules/Card";
import style from "./index.module.scss";
import data from "./../../../data/service.json";

const OurServices = () => {
  return (
    <div className={style.serviceContainer} id="services">
      <div className={style.header}>
        <h6>{data?.subHeading}</h6>
        <h2>{data?.heading}</h2>
        <p>{data?.desc}</p>
      </div>
      <div className={style.services}>
        <div className={style.serviceCards}>
          {data?.services?.map((card: any) => (
            <Card
              key={card?.heading}
              heading={card?.heading}
              desc={card?.desc}
              icon={card?.icon}
              linkText={card?.linkText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
