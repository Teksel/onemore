import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Dialogs from './Dialogs';
const DialogsPage = () => {
    return (
        <div>
            <Header />
            <div class='content-wrapper'>
                <div class='sidebar-block'>
                    <SideBar />
                </div>
                <div class='content'>
                    <Dialogs />
                </div>
            </div>
        </div>
    );
};

export default DialogsPage