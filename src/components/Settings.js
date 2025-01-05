import React, { useState } from 'react';
import '../components/Css/settings.css';
import InputField from './InputField';
import profilePic from '../assets/images/profilepic.png';
import { FaPencilAlt } from 'react-icons/fa';

const Settings = () => {
    const [selectedTab, setSelectedTab] = useState('edit-profile');

    return (
        <div className="setting-container">
            <div className='body-container'>
                <div className="setting-header">
                    <div className="tab-container">
                        <div
                            className={`tab-item ${selectedTab === 'edit-profile' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('edit-profile')}
                        >
                            Edit Profile
                        </div>
                        <div
                            className={`tab-item ${selectedTab === 'preference' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('preference')}
                        >
                            Preference
                        </div>
                        <div
                            className={`tab-item ${selectedTab === 'security' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('security')}
                        >
                            Security
                        </div>
                    </div>
                </div>

                <div className="setting-body">
                    <div className="setting-left">
                        <div className="profile-container">
                            <img src={profilePic} alt="profile-pic" className="setting-profile-pic" />
                            <div className="edit-icon">
                                <FaPencilAlt size={12} color="white" />
                            </div>
                        </div>
                    </div>
                    <div className="setting-middle">
                        <InputField
                            placeholder="Charlene Reed"
                            fieldName="Your Name"
                            type="text"
                            dob={false}
                        />
                        <InputField
                            placeholder="charlenereed@gmail.com "
                            fieldName="Email"
                            type="text"
                            dob={false}
                        />
                        <InputField
                            placeholder="Enter your name"
                            fieldName="Your Name"
                            type="date"
                            dob={true}
                        />
                        <InputField
                            placeholder="San Jose, California, USA"
                            fieldName="Permanent Address"
                            type="text"
                            dob={false}
                        />
                        <InputField
                            placeholder="45962"
                            fieldName="Postal Code"
                            type="number"
                            dob={false}
                        />
                    </div>
                    <div className="setting-right">
                        <InputField
                            placeholder="Enter your name"
                            fieldName="Charlene Reed "
                            type="text"
                        />
                        <InputField
                            placeholder="******"
                            fieldName="Password"
                            type="text"
                        />
                        <InputField
                            placeholder="San Jose, California, USA"
                            fieldName="Present Address"
                            type="text"
                        />
                        <InputField
                            placeholder="San Jose"
                            fieldName="City"
                            type="text"
                        />
                        <InputField
                            placeholder="USA"
                            fieldName="Country"
                            type="text"
                        />
                    </div>
                    <div className="button-container">
                        <button className="save-button">Save</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Settings;
