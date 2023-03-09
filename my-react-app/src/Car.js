import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            brand: "Dodge",
            model: "Dart",
            color: "grey",
            year: 2016
        };
    }
    changeColor = () => {
        this.setState({color: "blue"});
      }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}.
                </p>
                <button
                    type="button"
                    onClick={this.changeColor}
                >Change color</button>
            </div>
        );
    }
}

export default Car;