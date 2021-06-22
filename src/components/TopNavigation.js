import React from 'react'
import '../styles/top_navigation.scss';
import addressImg from '../images/address.png';
import numberImg from '../images/number.png';
import timeImg from '../images/time.png';

const TopNavigation = () => {
    return (
        <div className="container">
            <div className="address">
                <img src={addressImg} alt="addressImg"/>
                <p>Baker Street, London, 21 - UK </p>
            </div>

            <div className="number">
                <img src={numberImg} alt="numberImg"/>
                <p>+00123456789 </p>
            </div>

            <div className="time">
                <img src={timeImg} alt="timeImg"/>
                <p>Open Time : All weeks 8:00 - 12:00 </p>
            </div>
        </div>
    )
}

export default TopNavigation
