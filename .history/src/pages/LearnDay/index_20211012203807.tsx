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
                    <div>Title</div>
                    
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
