import React, {FC, useEffect} from 'react';
import {Movie} from "../../../classes/extendsFromAbstractClass";
import {movieGenres} from "../../../staticData";
import {StreamingService, User} from "../../../classes/mainClasses";
import css from './MovieComponent.module.css'
import {useAppDispatch} from "../../../hooks/hooks";
import {actions} from "../../../redux/slice";
import {ShowInfoComponent} from "../showInfo/ShowInfoComponent";


const MovieComponent: FC = () => {

    const movie = new Movie('mr nobody', movieGenres[7], 2010, 3, 'https://kritikanstvo.ru/movies/m/mrnobody/posters/mrnobody_300591.jpg');
    const movie2 = new Movie('seven', movieGenres[17], 2022, 2, 'https://cdn.shopify.com/s/files/1/1416/8662/products/Seven_1995_fr_original_film_art_831b2ac4-8c8a-412c-acd5-bd74a7952015_1200x.jpg?v=1646946715');
    const movie3 = new Movie('Lord of the Rings', movieGenres[9], 2001, 3.5, 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg');
    const movie4 = new Movie('inglorious bastards', movieGenres[0], 2007, 2, 'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg');
    const movie5 = new Movie('interstellar', movieGenres[15], 2014, 3, 'https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/interstellar-ice-walk-i23290.jpg');
    const movie6 = new Movie('sleepy hollow', movieGenres[11], 1999, 2, 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/c6d111a32bb0b243806516e8ce8fbd66e5c2db6acf0ddd7702f63a3b06a01472._RI_V_TTW_.jpg');
    const movie7 = new Movie('corpse bride', movieGenres[11], 2005, 1.3, 'https://m.media-amazon.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_FMjpg_UX1000_.jpg');
    const movie8 = new Movie('goodfellas', movieGenres[5], 1990, 2.5, 'https://static.kinoafisha.info/k/movie_posters/canvas/800x1200/upload/movie_posters/4/7/7/5550774/664911201653465057.jpg');
    const movie9 = new Movie('2001 a space odyssey', movieGenres[15], 1969, 3.5, 'https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg')
    const movie10 = new Movie('In Bruges', movieGenres[7], 2022, 2, 'https://m.media-amazon.com/images/M/MV5BMTUwOGFiM2QtOWMxYS00MjU2LThmZDMtZDM2MWMzNzllNjdhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg')
    const streamingService = new StreamingService('shows', [movie3,movie, movie2,movie4,movie5,movie6,movie7,movie8,movie9,movie10]);
    const user = new User();
    user.subscribe(streamingService)


    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(actions.getShowArr(user))
    },[])

    //
    // console.log("getMostViewedShowsOfGenre - " + JSON.stringify(
    //     user.subscriptions[0].streamingService.getMostViewedShowsOfGenre(movieGenres[0])));
    // console.log('----------------------------')
    // console.log("getMostViewedShowsOfYear - " + JSON.stringify(
    //     user.subscriptions[0].streamingService.getMostViewedShowsOfYear()));
    // console.log('----------------------------')
    // console.log("getRecommendationTrending - " + JSON.stringify(
    //     user.subscriptions[0].getRecommendationTrending()));
    // console.log('----------------------------')
    // console.log("getRecommendationByGenre - " + JSON.stringify(
    //     user.subscriptions[0].getRecommendationByGenre(movieGenres[0])));
    // console.log('----------------------------')
    // console.log("watch - " + JSON.stringify(
    //     user.subscriptions[0].watch('sleepy hollow')))



    return (
        <div className={css.wrap}>
            <div>
                <div className={css.nameOfPage}>Movie</div>
                <div  className={css.postersWrap}>
                    {user.subscriptions[0].streamingService.shows.map(value => <ShowInfoComponent key={value.name} show={value}/>)}
                </div>
            </div>
        </div>
    );
};

export default MovieComponent;