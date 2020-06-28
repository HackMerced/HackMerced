import React from 'react';
import HMTITLE from '../../assets/images/placeholder-title.png';
import HMTOWER from '../../assets/images/placeholder-tower.png';

import './title.scss';

const styles2 = {
    width: '400px',
    height: '175px',
};
const styles3 = {
    width: '650px',
    height: '705px',
};

const Title: React.FC = () => {
    return (
        <section className="TITLE t-wave">
            <div className="hackmerced-title">
                <img src={HMTITLE} style={styles2} alt="HACKMERCED TITLE" />
            </div>
            {/* <div className="font-black TITLE-TEXT">
                HackMerced <br />{' '}
            </div> */}
            <div className="title-subtext text-gray-100 ">The biggest San Joaquin Valley hackathon.</div>
            <button className="bg-white text-black BUTTON font-bold">Subscribe</button>
            <div className="hackmerced-tower">
                <img src={HMTOWER} style={styles3} alt="HACKMERCED TITLE" />
            </div>
        </section>
    );
};

export default Title;
