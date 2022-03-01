import {useRef, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useForm, SubmitHandler} from "react-hook-form";
import {setActivePortal} from "../../redux/actions/actions";
import useNetflixService from "../../server/Server";

import './style.css';

type Inputs = {
    title: string;
    release_date: string;
    poster_path: string;
    vote_average: string;
    genres: string;
    runtime: string;
    overview: string;
};

const Form = (): JSX.Element => {
    const ref = useRef<HTMLFormElement>(null);
    const dispatch = useDispatch();
    const {postMovie} = useNetflixService();
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => postMovie(data, 'POST');

    const HandleOutsideClick = (e: any) => {
        document.body.style.overflow = 'auto';

        if (!e.path.includes(ref.current)) {
            // @ts-ignore
            dispatch(setActivePortal(false));
        }
    };

    useEffect(() => {
        document.body.addEventListener('click', HandleOutsideClick);
    }, []);

    return (
        // @ts-ignore
        <div ref={ref} className='w-50 p-5 container border-0 movie__form'>
            <form className='row g-3' onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-between w-100 align-items-center my-3">
                    <h1 className="d-block w-100 ml-3 font-weight-normal">ADD MOVIE</h1>
                    <span className="mr-3 font-weight-bold current-menu-parent Close"
                        // @ts-ignore
                          onClick={() => dispatch(setActivePortal(false))}>x</span>
                </div>
                <div className="col-md-8">
                    <label htmlFor="inputEmail4" className="form-label">TITLE</label>
                    <input defaultValue="title" {...register("title", {required: true,})} type="text"
                           className="form-control" id="inputEmail4"/>
                    {errors.title && <span>This field is required</span>}
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputPassword4" className="form-label ">RELEASE DATE</label>
                    <input type="date" defaultValue="title" {...register("release_date", {required: true,})}
                           className="form-control" id="inputPassword4"/>
                    {errors.release_date && <span>This field is required</span>}
                </div>
                <div className="col-md-8">
                    <label htmlFor="inputAddress" className="form-label my-3">MOVIE URL</label>
                    <input type="text" defaultValue="https" {...register("poster_path", {required: true,})}
                           className="form-control" id="inputAddress"/>
                    {errors.poster_path && <span>This field is required</span>}
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputAddress2" className="form-label my-3 ">RATING</label>
                    <input type="text" defaultValue="7.8" {...register("vote_average", {required: true,})}
                           className="form-control" id="inputAddress2"/>
                    {errors.vote_average && <span>This field is required</span>}
                </div>
                <div className="col-md-8 d-flex flex-column">
                    <label htmlFor="inputState" className="form-label my-3">State</label>
                    <select id="inputState" defaultValue='genres' {...register("genres", {required: true,})}
                            className="form-select w-100 h-50">
                        <option>Choose...</option>
                        <option>Asr</option>
                        <option>Arrow</option>
                        <option>Hello</option>
                    </select>
                    {errors.genres && <span>This field is required</span>}
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label my-3">RUNTIME</label>
                    <input type="text" defaultValue="minutes" {...register("runtime", {required: true,})}
                           className="form-control" id="inputZip"/>
                    {errors.runtime && <span>This field is required</span>}
                </div>
                <div className="col-12">
                    <label htmlFor="textArea" className="form-label my-3 ">OVERVIEW</label>
                    <textarea className="form-control h-100 inp" id="textArea"
                              defaultValue="Movie description" {...register("overview", {required: true,})}
                              rows={3}></textarea>
                    {errors.overview && <span>This field is required</span>}
                </div>
                <div className="col-12 d-flex justify-content-end mt-5">
                    <button type="submit" className="btn btn-outline-danger mt-5 col-2 mx-2">RESET</button>
                    <button type="submit" className="btn btn-danger mt-5 col-2">SUBMIT</button>
                </div>
            </form>
        </div>
    );
};

export default Form;


