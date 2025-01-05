import React from 'react';
import './Css/transactionCard.css';
import DepositIcon from '../assets/icons/depositCard.png';
import PaypalIcon from '../assets/icons/paypal.png';
import UserIcon from '../assets/icons/doller.png';

const TransactionCard = () => {
    return (
        <div className="transaction-card">
            <div className="transaction-item">
                <div className="icon-circle deposit-bg">
                    <img src={DepositIcon} alt="Deposit Icon" className="icon" />
                </div>
                <div className="transaction-details">
                    <h4>Deposit from my Card</h4>
                    <p className="date">28 January 2021</p>
                </div>
                <div className="transaction-amount negative">-$850</div>
            </div>

            <div className="transaction-item">
                <div className="icon-circle paypal-bg">
                    <img src={PaypalIcon} alt="Paypal Icon" className="icon" />
                </div>
                <div className="transaction-details">
                    <h4>Deposit Paypal</h4>
                    <p className="date">25 January 2021</p>
                </div>
                <div className="transaction-amount positive">+$2,500</div>
            </div>

            <div className="transaction-item">
                <div className="icon-circle user-bg">
                    <img src={UserIcon} alt="User Icon" className="icon" />
                </div>
                <div className="transaction-details">
                    <h4>Jemi Wilson</h4>
                    <p className="date">21 January 2021</p>
                </div>
                <div className="transaction-amount positive">+$5,400</div>
            </div>
        </div>
    );
};

export default TransactionCard;