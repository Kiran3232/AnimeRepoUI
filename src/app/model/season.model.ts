import { Episode } from './episode.model';

export class Season{

    number : number;
    episodes : Array<Episode> = new Array<Episode>();
    constructor(){}
}