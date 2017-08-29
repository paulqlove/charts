import React from "react";
import { number, object, array } from "prop-types";
import * as d3 from "d3";
import DataSeries from "./DataSeries";
import { connect } from "react-redux";

class Chart extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
            coin: this.props.coin
        };
    }


    render() {

        let { width, height, data, lineData, coin } = this.props;

        data = {
            points: lineData.points,
            xValues: [0,1,2,3,4,5,6],
            yMin: 0,
            yMax: 30
        };
        let xScale = d3.scalePoint()
            .domain(data.xValues)
            .range([0, width]);

        let yScale = d3.scaleLinear()
            .range([height, 10])
            .domain([data.yMin, data.yMax]);

        return (
            <svg width={width} height={height}>
                <DataSeries
                    lineData={data}
                    coin={coin}
                    xScale={xScale}
                    yScale={yScale}
                    width={width}
                    height={height}
                />
            </svg>
        );
    }
}

Chart.propTypes = {
    width: number,
    height: number,
    data: object,
    lineData: object,
    coin: array
};
const mapStateToProps = (state) => {
    return {
        data: state.data,
        width: 600,
        height: 300
    };
};
export default connect(mapStateToProps)(Chart);
