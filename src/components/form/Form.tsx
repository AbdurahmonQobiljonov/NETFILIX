import {useForm, SubmitHandler} from "react-hook-form";
import './style.css';

type Inputs = {
    title: string;
    releaseDate: string;
    movieUrl: string;
    rating: string;
    state: string;
    runtime: string;
    overview: string;
};

const Form = (): JSX.Element => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("title"));

    return (
        <div className='w-50 p-5 container border-0 movie__form'>
            <form className='row g-3' onSubmit={handleSubmit(onSubmit)}>
                <h1 className="d-block w-100 ml-3 font-weight-normal">ADD MOVIE</h1>
                <div className="col-md-8">
                    <label htmlFor="inputEmail4" className="form-label">TITLE</label>
                    <input defaultValue="title" {...register("title",{required:true,})} type="text" className="form-control" id="inputEmail4"/>
                    {errors.title && <span>This field is required</span>}
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputPassword4" className="form-label ">RELEASE DATE</label>
                    <input type="date" defaultValue="title" {...register("releaseDate",{required:true,})} className="form-control" id="inputPassword4"/>
                    {errors.releaseDate && <span>This field is required</span>}
                </div>
                <div className="col-md-8">
                    <label htmlFor="inputAddress" className="form-label my-3">MOVIE URL</label>
                    <input  type="text" defaultValue="https" {...register("movieUrl",{required:true,})} className="form-control" id="inputAddress" />
                    {errors.movieUrl && <span>This field is required</span>}
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputAddress2" className="form-label my-3 ">RATING</label>
                    <input type="text" defaultValue="7.8" {...register("rating",{required:true,})} className="form-control" id="inputAddress2" />
                    {errors.rating && <span>This field is required</span>}
                </div>
                <div className="col-md-8 d-flex flex-column">
                    <label htmlFor="inputState" className="form-label my-3">State</label>
                    <select id="inputState" value="Choose" {...register("state",{required:true,})} className="form-select w-100 h-50">
                        <option >Choose...</option>
                        <option>Asr</option>
                        <option>Arrow</option>
                        <option>Hello</option>
                    </select>
                    {errors.state && <span>This field is required</span>}
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label my-3">RUNTIME</label>
                    <input type="text" defaultValue="minutes" {...register("runtime",{required:true,})} className="form-control" id="inputZip"/>
                    {errors.runtime && <span>This field is required</span>}
                </div>
                <div className="col-12">
                    <label htmlFor="textArea" className="form-label my-3 ">OVERVIEW</label>
                    <textarea className="form-control inp h-100" id="textArea" defaultValue="Movie description" {...register("overview",{required:true,})}
                              rows={3}></textarea>
                    {errors.overview && <span>This field is required</span>}
                </div>
                <div className="col-12 d-flex justify-content-end mt-5">
                    <button type="submit" className="btn btn-outline-danger mt-5 col-2">RESET</button>
                    <button type="submit" className="btn btn-danger mt-5 col-2 ml-2">SUBMIT</button>
                </div>
            </form>
        </div>
    );
};

export default Form;


