import {Show} from '../abstractClasses';
import {IGenre} from "../../interfaces";

import {Episode} from "./episode.class";

export class Series extends Show {

    episodes: Array<Episode>;

    constructor(name: string, genre: IGenre, releaseDate: number, episodes: Array<Episode>,private duration:number,posterPath:string) {
        super(name, genre, releaseDate,posterPath);
        this.episodes = episodes
    }

    getDuration(): number {
        return this.duration;
    }

}