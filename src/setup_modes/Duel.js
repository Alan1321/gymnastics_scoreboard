import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import InputDropDowns from '../utils/InputDropDowns';

const Duel = () =>{

    const location = useLocation();
    const currentPage = location.pathname

    return (
        <div>
            <div style={{height:'70px'}}></div>
            <div>
                <h2 style={{textAlign:"center"}}>Team1 Data for Duel Mode.</h2>
                <InputDropDowns/>
            </div>
        </div>
    )
}

export default Duel