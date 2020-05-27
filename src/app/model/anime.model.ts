import { Season } from './season.model';

export class Anime{
    airEndDate : string;
    airStartDate : string;
    description : string;
    id : string;
    image : {type: string, data: string};
    name : string;
    pictureName : string;
    source : string;
    seasons : Array<Season>;
}