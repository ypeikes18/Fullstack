import React from "react";
import { Link } from 'react-router-dom'

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = { subscribers: 50,
                       fee: 5 };
        this.possibleSubscribers = [
           50, 100, 200, 500, 1000,
           10000, 25000 
        ];
        this.possibeFees = [
            5, 10, 20, 50
        ];
        this.addComas = this.addComas.bind(this);
    }

    update(stateKey) {
        return e => {
            e.preventDefault()
            this.setState({
                [stateKey]: e.currentTarget.value
            })
        }
    }

    addComas(num) {
        num = num.toString();
        if(num.length < 4) return num;
        let newNum = '';
        let remainder = '';

        num.split('').forEach((digit, i) => {
            newNum += digit;
            remainder = num.slice(i + 1);
            if(remainder.length % 3 === 0
               && i < num.length - 1) {
                newNum += ','
            }
        })

        return newNum;
    }


    render() {
        const revenue = this.state.subscribers * this.state.fee;
        return (
            <div id="calculator">
                <h1>Estimate what you could make on Fullstack</h1>
                <select name='subscribers'
                        onChange={this.update('subscribers')}>
                            {this.possibleSubscribers.map((num, i) => (
                                <option value={num}
                                        key={i}>
                                        
                                {`${this.addComas(num)} subscribers`} 
                                </option>
                    ))}
                </select>

                <select name='fee'
                        onChange={this.update('fee')}>
                    {this.possibeFees.map((num, i) => (
                        <option value={num}
                                key={i}>
                           {`$${this.addComas(num)}/month`} 
                        </option>
                    ))}
                </select>

                <span>
                    <strong>{`$${this.addComas(revenue)}`}</strong> per month
                </span>
                <Link className='orange-button' 
                      to='/sign-up'>
                      Get Started
                </Link>
            </div>
        )
    }


}

export default Calculator;