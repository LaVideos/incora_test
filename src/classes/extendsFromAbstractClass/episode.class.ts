import {Show} from "../abstractClasses";
import {IGenre} from "../../interfaces";

export class Episode extends Show{
    duration!:number;

    constructor(name: string, genre: IGenre, releaseDate: number,duration:number,posterPath:string) {
        super(name, genre, releaseDate,posterPath);
        this.duration = duration;
    }

    getDuration(): number {
        return this.duration;
    }
}