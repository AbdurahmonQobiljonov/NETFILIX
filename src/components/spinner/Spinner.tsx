import {ClipLoader} from "react-spinners";


const Spinner = ():JSX.Element => {
    return <ClipLoader
        size={150}
        css={`
            display: block;
            margin: 0 auto;
            border-color: red;`}
        color={'#123abc'}
        loading={true}/>
}

export default Spinner;