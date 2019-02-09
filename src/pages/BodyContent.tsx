import * as React from "react";

const BodyContent = (props: any) => {
    return(
        <h1> {props.match.params.page} </h1>
    );
};

export default BodyContent;
