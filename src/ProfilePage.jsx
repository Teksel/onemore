import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Profile from './Profile';
const ProfilePage = () => {
    return (
        <div>
            <Header />
            <div class='content-wrapper'>
                <div class='sidebar-block'>
                    <SideBar />
                </div>
                <div class='content'>
                    <Profile />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage