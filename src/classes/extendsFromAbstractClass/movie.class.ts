import {IGenre} from "../../interfaces";
import {Show} from "../abstractClasses";

export class Movie extends Show{

    constructor(name: string, genre: IGenre, releaseDate: number,private duration:number,posterPath:string) {
        super(name, genre, releaseDate,posterPath);
    }

    getDuration(): number {
        return this.duration;
    }
}