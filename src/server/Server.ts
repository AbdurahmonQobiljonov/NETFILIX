import useHttp from "../hooks/http.hook";

const useNetflixService = () => {
    const {error, loading, request, clearError} = useHttp();

    const _apiBase: string = 'http://localhost:4000/';

    const getAllMovies = async (method:string) => {
        const res = await request(`${_apiBase}movies`, method);
        return res.data;
    }

    const getMovieById = async (id:string, method:string) => {
        return await request(`${_apiBase}movies${id}`, method);
    }

    return {loading, error, clearError, getAllMovies, getMovieById}
};

export default useNetflixService;