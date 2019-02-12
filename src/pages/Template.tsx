import * as React from "react";

interface TemplateProps {// tslint:disable-line
    header: string | JSX.Element;
    children?: JSX.Element;
}

const Template = (props: TemplateProps) => {
    return(
        <div className="page-container">
            <div className="page-header container-fluid">
                {typeof props.header === "string" ? <h4>{props.header}</h4> : props.header}
            </div>
            <div className="page-body">
                {props.children}
            </div>
        </div>
    );
};

export default Template;
