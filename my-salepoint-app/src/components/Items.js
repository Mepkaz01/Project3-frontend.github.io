import axios from 'axios'
import React from 'react'
import { Link, Route } from  'react-router-dom'
import ShoppingCart from './ShoppingCart';



class Items extends React.Component {

    constructor(props){ 
    super(props)
    this.state={
        items: [],
        item: []
             
        
    };
}

componentDidMount =()=>{
    axios.get("http://localhost:3001/items/all")
    .then(resp =>{
        this.setState({
            items: resp.data
            }) 
        }
    )
}

thousands_separators = (num) => 
        {
            let num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
        }

filterBooks = () => {
    this.setState(
        {item: this.state.items.filter( category => 
            category.category === "Books")})
        
        }

filterCars = () => {
    this.setState(
        {item: this.state.items.filter( category => 
            category.category === "Cars")})}

filterGames = () => {
    this.setState(
        {item: this.state.items.filter( category => 
            category.category === "Games")})}        

filterElectronics = () => {
    this.setState(
        {item: this.state.items.filter( category => 
            category.category === "Electronics")})}
        
filterFurniture = () => {
    this.setState(
        {item: this.state.items.filter( category => 
            category.category === "Furniture")})} 

filterMenAccessories = () => {
    this.setState(
        {item: this.state.items.filter( category => 
            category.category === "Men's Accessories")})}  
            
            
filterMenClothing = () => {
    this.setState(
        {item: this.state.items.filter( category => 
            category.category === "Men's Clothing")})} 
            
filterWomenAccessories = () => {
    this.setState(
        {item: this.state.items.filter( category => 
            category.category === "Women's Accessories")})}  

filterWomenClothing = () => {
    this.setState(
        {item: this.state.items.filter( category => 
            category.category === "Women's Clothing")})}  



render = ()=>{

    return(
        <div>
            <nav style={{backgroundColor:'#03cffc',display:'flex', padding:'10px 30px',borderBottom:"3px solid", borderTop:'1px solid'}}>
            <Link to="/login" style={{padding:'4px 10px', textDecoration:'none', fontWeight:'bolder'}}>Log In</Link>
            <Link to="/signup" style={{padding:'4px 10px', textDecoration:'none', fontWeight:'bolder'}}>Sign Up</Link>
            <Link to="" style={{padding:'4px 10px', textDecoration:'none', fontWeight:'bolder'}} >About</Link>
            </nav>
            <div>
            <h1 style={{color:'#4682B4', fontWeight:'bolder'}}>Sneak Peek at All of Our Members' Listings</h1>
            <h2>For more information <Link to="/signup" style={{textDecoration:'none', color:'#66CDAA'}}>Sign Up</Link> or <Link to="/login" style={{textDecoration:'none', color:'#FA8072'}}>Log In</Link></h2>
            <br></br>
            <Link to="/" style={{textDecoration:'none', fontSize:'150%', color:'orange'}}>Back to Home Page</Link>
            <br></br>
            <br></br>
            <button onClick={this.filterBooks}>Books</button>
            <button onClick={this.filterCars}>Cars</button>
            <button onClick={this.filterGames}>Games</button>
            <button onClick={this.filterElectronics}>Electronics</button>
            <button onClick={this.filterFurniture}>Furniture</button>
            <button onClick={this.filterMenAccessories}>Men's Accessories</button>
            <button onClick={this.filterMenClothing}>Men's Clothing</button>
            <button onClick={this.filterWomenAccessories}>Women's Accessories</button>
            <button onClick={this.filterWomenClothing}>Women's Clothing</button>
            <br></br>
            <br></br>
            <div className="App1">

            {this.state.item.map(item =>
                <div>
                    
                    <img src={item.image} alt="Pic" width='400'/>
                    <h3>{item.itemName}</h3>
                    <h4>{item.category}{'  ( '}<span style={{color:'red'}}>{item.status}</span>{' )'}</h4>
                    <h3>{'$ '}<span style={{color:'blue'}}>{this.thousands_separators(item.price)}</span></h3>
                    
                </div>

            )}
            </div>
<<<<<<< HEAD
        </div>  

        
        </div>  
=======
        </div>
        </div>    
>>>>>>> 49c2377d37ecd59970de64db1a72dd94e3aee1a5
            
     
    )
}
}
export default Items;