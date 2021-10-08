import React, { FC} from "react";

import "./styles.scss";

const Table: FC<{}> = (): JSX.Element => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Sl. No.</th>
                        <th>Time</th>
                        <th>Event</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                       <td>1</td>
                       <td>1:00 pm</td>
                       <td>Opening Ceremony</td> 
                    </tr>
                    <tr>
                       <td>2</td>
                       <td>2:00 pm</td>
                       <td>Hackathon Starts</td> 
                    </tr>
                    <tr>
                       <td>3</td>
                       <td>2:30 pm</td>
                       <td>Break</td> 
                    </tr>
                    <tr>
                       <td>4</td>
                       <td>3:30 pm</td>
                       <td>Hackathon Resumes</td> 
                    </tr>
                    <tr>
                       <td>5</td>
                       <td>5:00 pm</td>
                       <td>Closing ceremony</td> 
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;