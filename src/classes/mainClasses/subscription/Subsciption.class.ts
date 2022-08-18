import {Show} from "../../abstractClasses";
import {StreamingService} from "../streamingService/StreamingService.class";
import {IGenre} from "../../../interfaces";

const RandElInArray = (array:Array<Show>) => {
    let rand = Math.random() * array.length | 0;
    return array[rand];
}

export class Subscription {

    streamingService!:StreamingService;

    constructor(streamingService: StreamingService) {
        this.streamingService = streamingService;
    }

    watch(showName: string) {

        const arrMovie = this.streamingService.getShows();
        const index = arrMovie.findIndex(value => value.name === showName);
        if (index === -1) {
           alert(`Error\nShow with name : < ${showName} > was not found `);
        }else {
            this.streamingService.viewsByShowNames.set(arrMovie[index].name, (this.streamingService.viewsByShowNames.get(arrMovie[index].name) || 0) + 1)
            return arrMovie[index]
        }
    }

    getRecommendationTrending() : Show {
        return RandElInArray(this.streamingService.getMostViewedShowsOfYear())
    }

    getRecommendationByGenre(genre: IGenre): Show {
        return RandElInArray(this.streamingService.getMostViewedShowsOfGenre(genre));
    }
}