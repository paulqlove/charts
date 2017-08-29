import React from "react";
import { string, number } from "prop-types";

class Line extends React.Component {

    // getDefaultProps() {
    //     return {
    //         stroke: "blue",
    //         fill: "none",
    //         strokeWidth:  3
    //     };
    // }

    render() {
        let { path, stroke, fill, strokeWidth } = this.props;
        return (
            <path
                d={path}
                fill="none"
                stroke="blue"
                strokeWidth= "5"
            />
        );
    }
}
Line.propTypes = {
    path: string,
    stroke: string,
    fill: string,
    strokeWidth: number
};
export default Line;
