import {Show} from "../../abstractClasses";
import {IGenre} from "../../../interfaces";

const checkLength = (arr:Array<Show>)=>{
    if(arr.length <= 10){
        return arr
    }else {
        arr.length = 10
        return arr
    }
}

export class StreamingService {
    name!:string;
    shows!:Array<Show>;
    viewsByShowNames!: Map<string, number>;

    constructor(name: string, shows: Array<Show>, viewsByShowNames: Map<string, number> = new Map<string, number>()) {
        this.name = name;
        this.shows = shows;
        this.viewsByShowNames = viewsByShowNames;
    }

    addShow(show: Show){
        if (this.shows.length <= 0) {
            this.shows.push(show)
        }else{
            const a = this.shows.filter(value => value.name === show.name&&value.genre===show.genre&& show.realiseData===value.realiseData);
            if (a === null || a.length === 0) {
                this.shows.push(show);
            }else {
                alert('Error\nCheck aur service\nWe think that this show is already exist')
            }
        }
    }

    getShows() {
        return this.shows
    }

    getMostViewedShowsOfYear(){
        const data = new Date().getFullYear();
        let movieByYear:Array<Show> = [];
        for (const show of this.shows) {
            if (data === show.realiseData) {
                movieByYear.push(show)
                this.viewsByShowNames.has(show.name)
            }
        }

        return checkLength(movieByYear)
    }

    getMostViewedShowsOfGenre(genre: IGenre){
        let movieByGenre:Array<Show> = [];
        for (const show of this.shows) {
            if (show.genre.name === genre.name) {
                movieByGenre.push(show)
                this.viewsByShowNames.has(show.name)
            }
        }
        return checkLength(movieByGenre)
    }

}