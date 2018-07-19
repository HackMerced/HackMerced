import React, { Component } from 'react';

class FAQ extends Component {
    render() {
        return (
            <faq>
                <div className="container">
                <h1>FAQ</h1>
                    <div className="Question">
                    <h4>Are there any requirements to attend?</h4>
                        <p>As long as you're an undergraduate you're good! Refer to the MLH code of conduct for any uncertainties.</p>
                    </div>
                    <div className="Question">
                    <h4>What if I have no coding background?</h4>
                        <p>You're still able to attend and compete! Work with a team or ask any one of our volunteers for help!</p>
                    </div>
                    <div className="Question">
                    <h4>What are the prizes?</h4>
                        <p>We will annouonce them as soon as possible!</p>
                    </div>
                    <div className="Question">
                    <h4>How much will it cost me?</h4>
                        <p>Free 99 baby </p>
                    </div>
                    <div className="Question">
                    <h4>Where can I sleep on campus?</h4>
                        <p>Anywhere that's comfy in the designated area =)</p>
                    </div>

                </div>
            </faq>
        );
    }
}

export default FAQ ;