import React, { Component } from "react";
import "./styles/App.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { itemsFetchData } from "./actions/index";
import Chart from "./components/Chart";
import { array, object } from "prop-types";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props,
            lineData: this.props.lineData,
            coin: this.props.coin
        };
    }

    componentWillMount() {
      //  need to make btc a var and the number of days
        const url = "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=15&aggregate=1";
        this.props.fetchData(url)
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to React Paul</h2>
                </div>
                <Chart lineData={this.props.lineData} coin={this.props.coin}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const lineData = {
        points: [
            [{ x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 },
                { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 }]
            ,
            [{ x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 },
                { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 }]
            ,
            [{ x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 },
                { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 }]
        ]
    };
    return {
        lineData: lineData,
        coin: state.items.Data,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

App.propTypes = {
  lineData: object,
  coin: array
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
