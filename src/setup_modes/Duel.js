import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Duel = () =>{

    const location = useLocation();
    const currentPage = location.pathname

    return (
        <div>
            <div style={{height:'70px'}}></div>
            <div>
                Duel Mode Screen, {currentPage}
            </div>
        </div>
    )
}

export default Duel