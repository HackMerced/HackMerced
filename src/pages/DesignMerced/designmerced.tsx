import React, { FC } from 'react';

import Navbar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import Schedule from '../../components/Schedule Design/schedule-design';

const DesignMerced: FC = (): JSX.Element => {
    return (
        <main className="DESIGNMERCED">
            <Navbar />
            <Schedule />
            <Footer />
        </main>
    );
};

export default DesignMerced;
