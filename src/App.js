import React from 'react';
import './App.css';
import catPhoto from './assets/img/Cat.png'
import './assets/font/exo2.0-Thin.otf'

class App extends React.Component {
    state = {
        card_one: true,
        card_two: true,
        card_three: true,
        isFocusOne:true,
        isFocusTwo:true,
        isFocusThree:true,
        isDisableCardOne: false,
        isDisableCardTwo: false,
        isDisableCardThree: false,
    }

    focus = () => {
        this.setState({isFocus: false},console.log(this.state.card_one,this.state.isFocus))
    }

    selectGood = (e) => {
        let id = e.currentTarget.id
        this.setState({[id]: !this.state[id],isFocus: true}, console.log(this.state[id]))
    }

    zero = (x) => {
        let y = this.state.card_one
        if (y){
            x = "goods_body __blueCard"
        } else {
            x = "goods_body __pinkCard"
        }
    }

    render() {

        return (
            <div className="App">
                <div className="container">
                    <h1 className="main_title">Ты сегодня покормил кота?</h1>
                    <div className="goods">
                        <div onPointerLeave={this.focus}  className="goods_card">
                            <div onClick={this.selectGood} id='card_one' className={`goods_body ${this.state.isDisableCardOne ? '__disableCard' : this.state.card_one ? '__blueCard' : '__pinkCard'}`}>
                                <div className={`goods_item `}>
                                    <div className={`${this.state.isDisableCardOne ? '__disable':null}`}>
                                        <header className="header">
                                            {this.state.isFocus || this.state.card_one ?
                                                <div>Сказочное заморское яство</div> :
                                                <div className="overhead">Котэ не одобряет?</div>
                                            }
                                            <div>
                                                <h2 className="header_title"><span
                                                    className="header_title __big">Нямушка</span>
                                                    <br/>с фуа-гра</h2>
                                            </div>
                                            <div className="header_subtitle">
                                                10 порций<br/>
                                                мышь в подарок
                                            </div>
                                        </header>
                                        <div
                                            className={`goods_circle ${this.state.isDisableCardOne ? '__disableCircle' : this.state.card_one ? '__blueCircle' : '__pinkCircle'}`}>
                                            <div className="goods_weight">
                                                <span className="weight_amount">0,5</span>
                                                <div className="weight_measure">кг</div>
                                            </div>
                                        </div>
                                        <img className="catPhoto" src={catPhoto}/>
                                </div>
                            </div>
                        </div>
                            { this.state.isDisableCardOne ?
                                <footer className="card_footer"><span className='card_footer__disabled'>Печалька,с  закончился.</span>
                                </footer>
                                :this.state.card_one ?
                                    <footer className="card_footer">Чего сидишь? Порадуй котэ, <span className="card_buy">
                                <a onClick={this.selectGood} id='card_one' className="card_link"
                                   href="#">купи</a>.</span>
                                    </footer>
                                    :<footer className="card_footer">Печень утки разварная с артишоками</footer>}
                        </div>
                        <div onPointerLeave={this.focus}  className="goods_card">
                            <div onClick={this.selectGood} id='card_two' className={`goods_body ${this.state.isDisableCardTwo ? '__disableCard' : this.state.card_two ? '__blueCard' : '__pinkCard'}`}>
                                <div className={`goods_item `}>
                                    <div className={`${this.state.isDisableCardTwo ? '__disable':null}`}>
                                        <header className="header">
                                            {this.state.isFocus || this.state.card_two ?
                                                <div>Сказочное заморское яство</div> :
                                                <div className="overhead">Котэ не одобряет?</div>
                                            }
                                            <div>
                                                <h2 className="header_title"><span
                                                    className="header_title __big">Нямушка</span>
                                                    <br/>с фуа-гра</h2>
                                            </div>
                                            <div className="header_subtitle">
                                                10 порций<br/>
                                                мышь в подарок
                                            </div>
                                        </header>
                                        <div
                                            className={`goods_circle ${this.state.isDisableCardTwo ? '__disableCircle' : this.state.card_two ? '__blueCircle' : '__pinkCircle'}`}>
                                            <div className="goods_weight">
                                                <span className="weight_amount">0,5</span>
                                                <div className="weight_measure">кг</div>
                                            </div>
                                        </div>
                                        <img className="catPhoto" src={catPhoto}/>
                                    </div>
                                </div>
                            </div>
                            { this.state.isDisableCardTwo ?
                                <footer className="card_footer"><span className='card_footer__disabled'>Печалька,с  закончился.</span>
                                </footer>
                                :this.state.card_two ?
                                    <footer className="card_footer">Чего сидишь? Порадуй котэ, <span className="card_buy">
                                <a onClick={this.selectGood} id='card_two' className="card_link"
                                   href="#">купи</a>.</span>
                                    </footer>
                                    :<footer className="card_footer">Печень утки разварная с артишоками</footer>}
                        </div>
                        <div onPointerLeave={this.focus}  className="goods_card">
                            <div onClick={this.selectGood} id='card_three' className={`goods_body ${this.state.isDisableCardThree ? '__disableCard' : this.state.card_three ? '__blueCard' : '__pinkCard'}`}>
                                <div className={`goods_item `}>
                                    <div className={`${this.state.isDisableCardThree ? '__disable':null}`}>
                                        <header className="header">
                                            {this.state.isFocus || this.state.card_three ?
                                                <div>Сказочное заморское яство</div> :
                                                <div className="overhead">Котэ не одобряет?</div>
                                            }
                                            <div>
                                                <h2 className="header_title"><span
                                                    className="header_title __big">Нямушка</span>
                                                    <br/>с фуа-гра</h2>
                                            </div>
                                            <div className="header_subtitle">
                                                10 порций<br/>
                                                мышь в подарок
                                            </div>
                                        </header>
                                        <div
                                            className={`goods_circle ${this.state.isDisableCardThree ? '__disableCircle' : this.state.card_three ? '__blueCircle' : '__pinkCircle'}`}>
                                            <div className="goods_weight">
                                                <span className="weight_amount">0,5</span>
                                                <div className="weight_measure">кг</div>
                                            </div>
                                        </div>
                                        <img className="catPhoto" src={catPhoto}/>
                                    </div>
                                </div>
                            </div>
                            { this.state.isDisableCardThree ?
                                <footer className="card_footer"><span className='card_footer__disabled'>Печалька,с  закончился.</span>
                                </footer>
                                :this.state.card_three ?
                                    <footer className="card_footer">Чего сидишь? Порадуй котэ, <span className="card_buy">
                                <a onClick={this.selectGood} id='card_three' className="card_link"
                                   href="#">купи</a>.</span>
                                    </footer>
                                    :<footer className="card_footer">Печень утки разварная с артишоками</footer>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
