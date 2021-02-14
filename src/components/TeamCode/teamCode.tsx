import React, { FC,useState } from 'react';
 import Axios from 'axios'; 

import './teamCode.scss';

const TeamCode : FC = (): JSX.Element => {
    const [form, setForm] = useState({
        teamCode: '',
    });

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    ): void => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    function submit(){
        /*
        Axios.post(`https://hackmerced-tomoe.herokuapp.com/v1/design-merced/apply`, {
            teamCode: form.teamCode,
        })
        */
       
       Axios.post('https://hackmerced-teamcode.herokuapp.com/addTeam', {
        team_code: 'SAMPLE',
        user_id: '010101010101'
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    
     /*
     Axios.get('https://hackmerced-teamcode.herokuapp.com/getTeamInfo/deleteme3')
        .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
  });
*/
    }


return (

    
        <div className="team-code">
            <h1>Team Code</h1>
            <h3 className="teamCode">fkjlash</h3>
            <button className="generateButton" type="button">Generate</button>
            <p>- or -</p>
            <h2>Enter Team Code!</h2>
            <input className="teamcodeInput" type="password" id="codeInput" name="password" onChange={handleInputChange}></input>
            <button className="submitButton" type="button" onClick={submit}>Submit</button>
        </div>
        
        
    );
};

export default TeamCode;