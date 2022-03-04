import {IMovie} from "../../interfaces/interfaces";

export interface MovieViewProps {
    movies: IMovie[];
    onDelete: (id: string) => void,
    mainTitle: string
}