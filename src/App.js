import React from 'react';
import './App.css';
import catPhoto from './assets/img/Cat.png'

class App extends React.Component {
    state = {
        cardOne:{
            isSelected: true,
            isFocus:true,
            isDisable: false
        },
        cardTwo:{
            isSelected: true,
            isFocus:true,
            isDisable: false
        },
        cardThree:{
            isSelected: true,
            isFocus:true,
            isDisable: true
        },
    }

    focus = (e) => {
        let id = `card${e.currentTarget.id}`
        this.setState({[id]:{...this.state[id],isFocus: false}})
    }

    selectGood = (e) => {
        let id =`card${e.currentTarget.id}`
        this.setState({[id]: {...this.state[id],isSelected:!this.state[id].isSelected,isFocus: true}})
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <h1 className="main_title">Ты сегодня покормил кота?</h1>
                    <div className="goods">
                        <div onPointerLeave={this.focus} id='One' className="goods_card">
                            <div onClick={this.selectGood} id='One' className={`goods_body ${this.state.cardOne.isDisable ? '__disableCard' : this.state.cardOne.isSelected ? '__blueCard' : '__pinkCard'}`}>
                                <div className={`goods_item `}>
                                    <div className={`${this.state.cardOne.isDisable ? '__disable':null}`}>
                                        <header className="header">
                                            {this.state.cardOne.isFocus || this.state.cardOne.isSelected ?
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
                                            className={`goods_circle ${this.state.cardOne.isDisable ? '__disableCircle' : this.state.cardOne.isSelected ? '__blueCircle' : '__pinkCircle'}`}>
                                            <div className="goods_weight">
                                                <span className="weight_amount">0,5</span>
                                                <div className="weight_measure">кг</div>
                                            </div>
                                        </div>
                                        <img className="catPhoto" src={catPhoto}/>
                                </div>
                            </div>
                        </div>
                            { this.state.cardOne.isDisable ?
                                <footer className="card_footer"><span className='card_footer__disabled'>Печалька,с  закончился.</span>
                                </footer>
                                :this.state.cardOne.isSelected ?
                                    <footer className="card_footer">Чего сидишь? Порадуй котэ, <span className="card_buy">
                                <a onClick={this.selectGood} id='One' className="card_link"
                                   href="#">купи</a>.</span>
                                    </footer>
                                    :<footer className="card_footer">Печень утки разварная с артишоками</footer>}
                        </div>
                        <div onPointerLeave={this.focus} id='Two' className="goods_card">
                            <div onClick={this.selectGood} id='Two' className={`goods_body ${this.state.cardTwo.isDisable ? '__disableCard' : this.state.cardTwo.isSelected ? '__blueCard' : '__pinkCard'}`}>
                                <div className={`goods_item `}>
                                    <div className={`${this.state.cardTwo.isDisable ? '__disable':null}`}>
                                        <header className="header">
                                            {this.state.cardTwo.isFocus || this.state.cardTwo.isSelected ?
                                                <div>Сказочное заморское яство</div> :
                                                <div className="overhead">Котэ не одобряет?</div>
                                            }
                                            <div>
                                                <h2 className="header_title"><span
                                                    className="header_title __big">Нямушка</span>
                                                    <br/>с рыбой</h2>
                                            </div>
                                            <div className="header_subtitle">
                                                40 порций<br/>
                                                2 мыши в подарок
                                            </div>
                                        </header>
                                        <div
                                            className={`goods_circle ${this.state.cardTwo.isDisable ? '__disableCircle' : this.state.cardTwo.isSelected ? '__blueCircle' : '__pinkCircle'}`}>
                                            <div className="goods_weight">
                                                <span className="weight_amount">2</span>
                                                <div className="weight_measure">кг</div>
                                            </div>
                                        </div>
                                        <img className="catPhoto" src={catPhoto}/>
                                    </div>
                                </div>
                            </div>
                            { this.state.cardTwo.isDisable ?
                                <footer className="card_footer"><span className='card_footer__disabled'>Печалька,с рыбой закончился.</span>
                                </footer>
                                :this.state.cardTwo.isSelected ?
                                    <footer className="card_footer">Чего сидишь? Порадуй котэ, <span className="card_buy">
                                <a onClick={this.selectGood} id='Two' className="card_link"
                                   href="#">купи</a>.</span>
                                    </footer>
                                    :<footer className="card_footer">Головы щучьи с чесноком да свежайшая сёмгушка.</footer>}
                        </div>
                        <div onPointerLeave={this.focus} id='Three' className="goods_card">
                            <div onClick={this.selectGood} id='Three' className={`goods_body ${this.state.cardThree.isDisable ? '__disableCard' : this.state.cardThree.isSelected ? '__blueCard' : '__pinkCard'}`}>
                                <div className={`goods_item `}>
                                    <div className={`${this.state.cardThree.isDisable ? '__disable':null}`}>
                                        <header className="header">
                                            {this.state.cardThree.isFocus || this.state.cardThree.isSelected ?
                                                <div>Сказочное заморское яство</div> :
                                                <div className="overhead">Котэ не одобряет?</div>
                                            }
                                            <div>
                                                <h2 className="header_title"><span
                                                    className="header_title __big">Нямушка</span>
                                                    <br/>с курой</h2>
                                            </div>
                                            <div className="header_subtitle">
                                                100 порций<br/>
                                                мышей в подарок<br/>
                                                закзчик доволен
                                            </div>
                                        </header>
                                        <div
                                            className={`goods_circle ${this.state.cardThree.isDisable ? '__disableCircle' : this.state.cardThree.isSelected ? '__blueCircle' : '__pinkCircle'}`}>
                                            <div className="goods_weight">
                                                <span className="weight_amount">5</span>
                                                <div className="weight_measure">кг</div>
                                            </div>
                                        </div>
                                        <img className="catPhoto" src={catPhoto}/>
                                    </div>
                                </div>
                            </div>
                            { this.state.cardThree.isDisable ?
                                <footer className="card_footer"><span className='card_footer__disabled'>Печалька, с курой закончился.</span>
                                </footer>
                                :this.state.cardThree.isSelected ?
                                    <footer className="card_footer">Чего сидишь? Порадуй котэ, <span className="card_buy">
                                <a onClick={this.selectGood} id='Three' className="card_link"
                                   href="#">купи</a>.</span>
                                    </footer>
                                    :<footer className="card_footer">Филе из цыплят с трюфелями в бульоне.</footer>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
