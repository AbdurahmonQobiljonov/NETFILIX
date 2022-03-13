export interface Inputs {
    title: string;
    release_date: string;
    poster_path: string;
    vote_average: string;
    genres: string;
    runtime: string;
    overview: string;
}

export interface FormProps {
    onSubmit: (inputs: Inputs) => void;
    setActive: (active:boolean) => {type:string, payload:boolean}
}
