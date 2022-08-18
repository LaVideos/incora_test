import React, {FC} from 'react';

import {Episode, Series} from "../../../classes/extendsFromAbstractClass";
import {movieGenres} from "../../../staticData";
import {StreamingService, User} from "../../../classes/mainClasses";

import css from '../allMovie/MovieComponent.module.css'
import {ShowInfoComponent} from "../showInfo/ShowInfoComponent";

const SeriesComponent:FC = () => {

    const episode = new Episode('first_episode', movieGenres[0], 2020,1.5,'');
    const series = new Series('s1', movieGenres[0],2015, [episode],2,'');
    const series1 = new Series('s2', movieGenres[0],2014, [episode],22,'');
    const series2 = new Series('s3', movieGenres[0],2022, [episode],24,'');
    const series3 = new Series('s4', movieGenres[0],2011, [episode],122,'');
    const streamingService = new StreamingService('series', [series,series1,series3,series2]);
    const user = new User();
    user.subscribe(streamingService)


    return (
        <div className={css.wrap}>
            <div>
                <div className={css.nameOfPage}>Series</div>
                <div className={css.postersWrap}>
                    {user.subscriptions[0].streamingService.shows.map(value => <ShowInfoComponent key={value.name} show={value}/>)}
                </div>
            </div>
        </div>
    );
};

export default SeriesComponent;