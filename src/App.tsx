import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MoviePage, FindPage} from "./pages";
import {MainLayout} from "./layouts";
import SeriesPage from "./pages/series/seriesPage";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/movies'}/>}></Route>
                    <Route path={'/movies'} element={<MoviePage/>}>
                    </Route>
                    <Route path={'/series'} element={<SeriesPage/>}></Route>
                    <Route path={'/find'} element={<FindPage/>}></Route>
                </Route>
            </Routes>

        </div>
    );
};

export default App;