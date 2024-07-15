import axios from "axios";
import style from "./index.module.scss";
import Button from "../../atoms/Button";
import data from "./../../../data/contact.json";
import Input from "../../atoms/Input";
import { useState } from "react";

interface IInput {
    name: string;
    placeholder: string;
    icon: string;
    type: string;
}

const ContactUs = () => {
    const [disabled, setDisabled] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setDisabled(true);
        const formData = new FormData(e.target);
        const payload: any = {};

        data?.form?.inputField?.forEach((input: any) => {
            payload[input?.name] = formData.get(input?.name);
        });

        try {
            const response = await axios.post(
                "https://softwarepro-company.netlify.app/.netlify/functions/api/send-email",
                { ...payload, withCredentials: true }
            );

            if (response.status === 200) {
                alert("Email sent successfully!");
                e.target.reset();
            } else {
                console.error("Failed to send email");
                alert("Failed to send email. Please try again.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Error sending email. Please try again.");
        }
        setDisabled(false);
    };

    return (
        <div className={style.contactContainer} id="contact us">
            <div className={style.context}>
                <h6>{data?.contactContent?.subHeading}</h6>
                <h2>{data?.contactContent?.heading}</h2>
                <p>{data?.contactContent?.desc}</p>
                <h5>{data?.contactContent?.info}</h5>
                <a href={data?.contactContent?.link?.href}>
                    <img src={data?.contactContent?.link?.icon} alt="" />
                    <p>{data?.contactContent?.link?.text}</p>
                </a>
            </div>
            <form onSubmit={handleSubmit}>
                {data?.form?.inputField?.map((input: IInput) => (
                    <Input
                        key={input?.name}
                        name={input?.name}
                        placeholder={input?.placeholder}
                        icon={input?.icon}
                        type={input?.type}
                    />
                ))}
                <Button
                    icon={data?.form?.btnIcon}
                    type="submit"
                    disabled={disabled}
                >
                    {disabled ? data?.form?.loadingText : data?.form?.btnText}
                </Button>
            </form>
        </div>
    );
};

export default ContactUs;
