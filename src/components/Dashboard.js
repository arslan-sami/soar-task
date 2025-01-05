import React from 'react';
import './Css/dashboard.css';
import Card from './Card';
import TransactionCard from './TransactionCard';
import PolarAreaChart from './PolarChart';
import BarChart from './BarChart';
import QuickTransferCard from './quickTrasnfer';
import LineChart from './LineChart';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <div className='dashboard-top-section'>
                <div className='dashboard-left-section'>
                    <div className='dashboard-card-container'>
                        <div className='dashboard-header-section'>
                            <div className='dashboard-header-left-section'>
                                <h3>My Cards</h3>
                            </div>
                            <div className='dashboard-header-right-section'>
                                <p>See All</p>
                            </div>
                        </div>
                        <div className='dashboard-card-bottom-section'>
                            <Card
                                isDark={true}
                                balance='$5,756'
                                cardHolder='Eddy Cusuma'
                                validThru='12/22'
                                acNo='3778 **** **** 1234'
                            />
                            <Card
                                isDark={false}
                                balance='$5,756'
                                cardHolder='Eddy Cusuma'
                                validThru='12/22'
                                acNo='3778 **** **** 1234'
                            />
                        </div>

                    </div>
                    <div className='dashboard-bar-chart-container'>
                        <BarChart />
                    </div>

                </div>
                <div className='dashboard-right-section'>
                    <div className='dashboard-recent-transactions-container'>

                        <div className='dashboard-header-left-section'>
                            <h3>Recent Transactions</h3>
                        </div>
                        <TransactionCard />
                    </div>
                    <div className='dashboard-header-left-section'>
                        <h3>Expense Statistics</h3>
                    </div>
                    <div className='dashboard-polar-chart-container'>
                        <PolarAreaChart />
                    </div>

                </div>
            </div>
            <div className='dashboard-bottom-section'>
                <div className='dashboard-bottom-left-section'>
                    <h3>Quick Transfer</h3>
                    <QuickTransferCard />
                </div>
                <div className='dashboard-bottom-right-section'>
                    <h3>Balance History</h3>
                    <div className='line-chart-container'>
                        <LineChart />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;