import React from 'react';
import ReactDOM from 'react-dom/client';
import './calc.css';

class Main extends React.Component {
    constructor(){
        super()
        this.state = {display: '0'}
    }

    numberClick(event) {
        const {display} = this.state
        const val = event.target.value
        var newdisplay
        if (display === "0")
            newdisplay = val
        else
            newdisplay = display + val
        this.setState({...this.state, display: newdisplay})
    }

    render() {
        const {display} = this.state
        const numberClick = this.numberClick.bind(this)

        return (
            <div className='main'>
                <img className='logo' src="https://d2o2figo6ddd0g.cloudfront.net/6/w/31cxsxy4no5n2j/Flagonly.jpg" alt="Whitworth University"/>
                <h1 style={{"textAlign":"center"}}>π-rates Calculator</h1>
                <table className='calc'>
                    <tbody>
                    <tr className='calc'>
                        <td colSpan="5"><span className="display" id="display">{display}</span></td>
                    </tr>
                    <tr>
                        <td><button className="number" onClick={numberClick} value='7'>7</button></td>
                        <td><button className="number"  onClick={numberClick} value='8'>8</button></td>
                        <td><button className="number"  onClick={numberClick}  value='9'>9</button></td>
                        <td><button className="op">/</button></td>
                        <td><button className="op">?</button></td>
                    </tr>
                    <tr>
                        <td><button className="number" onClick={numberClick}  value='4'>4</button></td>
                        <td><button className="number" onClick={numberClick}  value='5'>5</button></td>
                        <td><button className="number" onClick={numberClick}  value='6'>6</button></td>
                        <td><button className="op">*</button></td>
                        <td><button className="op">?</button></td>
                    </tr>
                    <tr>
                        <td><button className="number" onClick={numberClick}  value='1'>1</button></td>
                        <td><button className="number" onClick={numberClick}  value='2'>2</button></td>
                        <td><button className="number" onClick={numberClick} value='3'>3</button></td>
                        <td><button className="op">-</button></td>
                        <td><button className="op">?</button></td>
                    </tr>
                    <tr>
                        <td><button className="number" onClick={numberClick} value='0'>0</button></td>
                        <td><button className="op">CE</button></td>
                        <td><button className="op">=</button></td>
                        <td><button className="op">+</button></td>
                        <td><button className="op">?</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main user='Gus' />);