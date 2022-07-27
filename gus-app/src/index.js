import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Mariners extends React.Component{
    render() {
        return (
            <img src="https://c1.neweggimages.com/WebResource/Themes/Nest/logos/Newegg_full_color_logo_RGB.SVG" alt="nice"></img>
        )
    }
}

class Main extends React.Component{
    constructor() {
        super()

        this.state = {
            'count': 0
        }
    }

    incrementCount() {
        const { count } = this.state
        this.setState({...this.state, count: count+1})
    }

    decrementCount() {
        const { count } = this.state
        this.setState({...this.state, count: count-1})
    }

    render(){
        const {user} = this.props
        const {count} = this.state
        return (
            <div className='Main'>
                <p>Hello {user}</p>
                <Mariners/>
                <p>{count} clicks</p>
                <button onClick={this.incrementCount.bind(this)}>increment</button>
                <button onClick={this.decrementCount.bind(this)}>Decrement</button>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main user='Gus' />);