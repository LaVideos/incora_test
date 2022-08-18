import React,{FC} from 'react';
import {MovieComponent} from "../../components";
import {Outlet} from "react-router-dom";

const MoviePage:FC = () => {
    return (
        <div>
            <Outlet/>
            <MovieComponent/>
        </div>
    );
};

export default MoviePage;