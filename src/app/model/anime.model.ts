import { Season } from './season.model';

export class Anime {
    airEndDate: string;
    airStartDate: string;
    description: string;
    id: string;
    imagePath: string;
    name: string;
    source: string;
    images: Array<String> = [];
    seasons: Array<Season> = new Array<Season>();
    youtubeTrailerUrl: string;
    whereToWatch: Array<String> = [];
}