import {setActivePortal} from "../../redux/actions/actions";
import {SubmitHandler} from "react-hook-form";
import useNetflixService from "../../server/Server";
import FormView from "./FormView";

import {Inputs} from "./FormProps";

import './style.css';
import ErrorMessage from "../error_message/ErrorMessage";
import Spinner from "../spinner/Spinner";


const Form = (): JSX.Element => {
    const {postMovie, clearError, loading, error} = useNetflixService();

    const onSubmit: SubmitHandler<Inputs> = (data: any) => {
        postMovie(data, 'POST')
            .then(e => console.log(e));
        clearError();
    };

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    // @ts-ignore
    const content = !loading || error ? <FormView onSubmit={onSubmit} setActive={setActivePortal}/> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    );
};

export default Form;


