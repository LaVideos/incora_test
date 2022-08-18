import {FC} from 'react';

import css from '../../showInfo/ShowInfoComponent.module.css'
import {useAppSelector} from "../../../../hooks/hooks";


const FindMovieComponent: FC = () => {

    const {movie} = useAppSelector(state => state.show);

    return (
      <span>{movie&&
        <div className={css.posterWrap}>

            <div>
                <div className={css.info}>
                    <div className={css.name}>{movie.name}</div>
                    <div>{movie.realiseData}</div>
                    <div>Genre - {movie.genre.name}</div>
                    <div>Duration - {movie.getDuration()} hour</div>
                </div>
                <img src={movie.posterPath} alt={movie.name} className={css.poster}/></div>
        </div>}</span>
);
};

export {FindMovieComponent};