import style from "./index.module.scss";
import data from "./../../../data/navbar.json";

const Navbar = () => {
  const handleClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={style.navbar}>
      <h3>{data?.name}</h3>
      <ul>
        {data?.tabs?.map((tab: string) => (
          <li key={tab} onClick={() => handleClick(tab?.toLowerCase())}>
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
