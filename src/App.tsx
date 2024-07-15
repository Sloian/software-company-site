import AboutUs from "./components/organisms/AboutUs";
import ContactUs from "./components/organisms/ContactUs";
import Home from "./components/organisms/Home";
import Navbar from "./components/molecules/Navbar";
import OurServices from "./components/organisms/OurServices";
import Loading from "./components/organisms/Loading";
import { useEffect, useState } from "react";

function App() {
    const [percent, setPercent] = useState(0);
    const progress = 10;

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prevPercent) => {
                const newPercent = prevPercent + progress;
                return newPercent >= 101 ? 101 : newPercent;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [progress]);

    return (
        <>
            {percent > 100 ? (
                <div>
                    <Navbar />
                    <Home />
                    <AboutUs />
                    <OurServices />
                    <ContactUs />
                </div>
            ) : (
                <Loading percent={percent} />
            )}
        </>
    );
}

export default App;
