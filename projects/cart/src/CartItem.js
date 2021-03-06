import React from 'react';
import './index.css';
class CartItem extends React.Component{
    constructor()
    {
        super();
        this.state={price:999,
                    title:'Phone',
                    qty:0,
                    img:''}
        //this.increaseQuantity=this.increaseQuantity.bind(this);//this gets complicated it-seems!
    }
    increaseQuantity= ()=>{
        this.setState((prevState)=>{
            return {
                qty:prevState.qty+1
            }
        });
    }
    decreaseQuantity=()=>{
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        });
    }
    render()
    {
        const {price,title,qty}=this.state;

        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777',fontSize:25}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"
                            onClick={this.increaseQuantity}
                            />
            
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg"
                            onClick={this.decreaseQuantity}/>
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/3096/3096673.svg"
                            />
                    </div>
                </div>
            </div>
        );
    }
}

const styles={
    image: {
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;