export interface IMovie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    revenue: number;
    runtime: number;
    vote_average: number;
    vote_count: number;
    tagline: string;
    genres: string[];
}

export interface IMovies {
    movies: IMovie[];
    movie: IMovie|null;
    activePortal:boolean;
}