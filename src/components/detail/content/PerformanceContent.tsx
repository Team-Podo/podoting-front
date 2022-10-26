import {Viewer} from "@toast-ui/react-editor";
import React from "react";
import {Content} from "../../../models/detail";

function PerformanceContent({contents}:{contents:Content[]}) {
    return <>
        <div className="content">
            {contents && contents.map((i, idx) =>
                <div style={{whiteSpace: "pre-line"}} className="content-inner" key={idx}>
                    <h3>{i.title}</h3>
                    <Viewer initialValue={i.content}/>
                </div>)}
        </div>
    </>
}

export default PerformanceContent