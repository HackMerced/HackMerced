import React, { FC} from "react";

import "./styles.scss";

const Table: FC<{}> = (): JSX.Element => {
    return(
        <>
            <div className="heading">
                <h2 className="heading-text">Schedule</h2>
            </div>
            <div className="timeline">
                <div className="container left">
                    <div className="content">
                    <span className="title">12:30 pm</span>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per.</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                    <span className="title">1:00 pm</span>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per.</p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                    <span className="title">1:30 pm</span>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per.</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                    <span className="title">2:00 pm</span>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table;