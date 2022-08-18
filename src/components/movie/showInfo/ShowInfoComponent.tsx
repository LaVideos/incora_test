import {FC} from 'react';
import {IProps} from "../../../interfaces";

import css from './ShowInfoComponent.module.css'


const ShowInfoComponent: FC<IProps> = ({show}) => {
    return (
        <div className={css.posterWrap}>
            <div className={css.info}>
                <div className={css.name}>{show.name}</div>
                <div>{show.realiseData}</div>
                <div>Genre - {show.genre.name}</div>
                <div>Duration - {show.getDuration()} hour</div>
            </div>
            <img src={show.posterPath} alt={show.name} className={css.poster}/>
        </div>
    );
};

export {ShowInfoComponent};