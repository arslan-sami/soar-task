import React from 'react';
import './Css/card.css';
import CardLogo from '../assets/icons/masterIcon.png';
import CardLogoDark from '../assets/icons/masterIconDark.png';
import CardChip from '../assets/icons/chipCard.png';
import CardChipDark from '../assets/icons/chipCardDark.png';

const Card = ({ balance, cardHolder, validThru, acNo, isDark }) => {
    return (
        <div className={ isDark ? 'debit-card-dark-mode' : 'debit-card-light-mode' }>
            <div className='dashboard-card-top-section'>
                <div className='dashboard-card-header'>
                    <div className={isDark ? 'card-header-left-dark' : 'card-header-left-light'}>
                        <p>Balance</p>
                        <h1>{balance}</h1>
                    </div>
                    <div className='card-header-right'>
                        <img src={isDark ? CardChip : CardChipDark} alt='Card Chip' className='card-chip' />
                    </div>
                </div>
                <div className='dashboard-card-middle'>
                    <div className={isDark ?'card-middle-left-dark' : 'card-middle-left-light'}>
                        <p>CARD HOLDER</p>
                        <p>{cardHolder}</p>
                    </div>
                    <div className={isDark ?'card-middle-right-dark' : 'card-middle-right-light'}>
                        <p>VALID THRU</p>
                        <p>{validThru}</p>
                    </div>
                </div>
            </div>

            <div className= { isDark ? 'dashboard-card-footer-dark' : 'dashboard-card-footer-light' }>
                <div className={ isDark ? 'card-footer-left-dark' : 'card-footer-left-light' }>
                    <p>{acNo}</p>
                </div>
                <div className='card-footer-right'>
                    <img src={isDark ? CardLogo : CardLogoDark} alt='Card Logo' className='card-logo' />
                </div>
            </div>
        </div>
    );
};

export default Card;