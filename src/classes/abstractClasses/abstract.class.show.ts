import {IGenre} from "../../interfaces";

export abstract class Show {
    name: string;
    genre: IGenre;
    realiseData: number;
    posterPath:string;

    protected constructor(name: string, genre: IGenre, realiseData: number,posterPath:string) {
        this.name = name;
        this.genre = genre;
        this.realiseData = realiseData;
        this.posterPath = posterPath;
    };

    abstract getDuration(): number;
}