import {EmptyStyle} from "./EmptyStyle";

function Empty({text} : {text:string}) {
    return <EmptyStyle>
        <p>{text}</p>
    </EmptyStyle>
}

export default Empty