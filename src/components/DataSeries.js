import React from "react";
import { string, func, object } from "prop-types";
import * as d3 from "d3";
import Line from "./Line";
import { connect } from "react-redux";

class DataSeries extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     dataReal: this.props.data,
        //     data: {
        //         points: [
        //             [{ x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 },
        //                 { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 }]
        //             ,
        //             [{ x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 },
        //                 { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 }]
        //             ,
        //             [{ x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 },
        //                 { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 }]
        //         ]
        //     }
        // };
    }


    // getDefaultProps() {
    //     return {
    //         data: [],
    //         interpolationType: "cardinal",
    //         colors: d3.scale.category10()
    //     };
    // }

    render() {
        let { lineData, xScale, yScale } = this.props;

        let line = d3.line()
            .x((d) => {
                return xScale(d.x);
            })
            .y((d) => {
                return yScale(d.y);
            });
        let lines = lineData.points.map((series, id) => {

            return (
                <Line
                    path={line(series)}
                    stroke={d3.color(id)}
                    key={id}
                />
            );
        });

        return (
            <g>
                <g>{lines}</g>
            </g>
        );
    }

}

DataSeries.propTypes = {
    colors:             func,
    data:               object,
    lineData:           object,
    interpolationType:  string,
    xScale:             func,
    yScale:             func
};
const mapStateToProps = (state) => {
  console.log("mapp 33", state);
    return {
        data: state.data
    };
};
export default connect(mapStateToProps)(DataSeries);
