import React, { FC } from "react";

import Navbar from "../../components/NavBar";

import "./styles.scss";

const LearnDay: FC = (): JSX.Element => {
    // const { width } = useWindowDimensions();
    // const [form, setForm] = useState<{ email: string }>({ email: "" });

    // // Handles Change on the fields of the form
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    //     const { name, value } = event.target;
    //     setForm({ ...form, [name]: value });
    // };

    // // Handles the submission action when the submit button is pressed
    // const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    //     event.preventDefault();
    //     Axios.post(
    //         `https://hackmerced-tomoe.herokuapp.com/v1/auth/login-resetpassword`,
    //         form,
    //     ).then((response: AxiosResponse) => console.log(response));
    // };

    return (
        /*Title component*/
        <main>
            <Navbar />
            <section className="grid-container">
                <div className="texts">
                    <div className="title">Hacktually II</div>
                    <div className="h2">Local Hack Day: Learn</div>
                    <div className="h3">Learn to tackle new skills, explore different realms of technology, and champion exciting projects in a workshop event hosted by HackMerced on <strong>November 13, 2021.</strong></div>
                    <button className="LD_">Sign Up</button>
                </div>
                <div className="images"></div>
            </section>
        </main>
        /*FAQ component*/
        /* Schedule component*/
        /* render Footer component */
    );
};

export default LearnDay;
