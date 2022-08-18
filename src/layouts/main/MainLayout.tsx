import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import {HeaderComponent} from "../../components";

const MainLayout:FC = () => {
    return (
        <div>
           <HeaderComponent/>
            <Outlet/>
        </div>
    );
};
export default MainLayout;