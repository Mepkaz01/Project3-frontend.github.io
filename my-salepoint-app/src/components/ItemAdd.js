import React, {Component} from "react"
import axios from "axios"

class ItemAdd extends Component {
    constructor(props) {
        super(props)
        this.state= {
            data: {

                itemName:"",
                category:"",
                price: "",
                status: "",
                description:"",
                image: "",
                userId: "1"             
                
            }
        }
    }

    handleChange = (event) => {
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [event.target.name]: event.target.value
            }
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        axios.post("http://localhost:3001/items/newitem", this.state.data)
        .then(resp => {
            console.log("item Created")
            console.log(resp)
            // this.props.history.push(`/items`)
            this.props.history.push(`/profile/${this.state.userId}`)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        console.log(this.state.data)
        return (
            <div>
                <h2>Add Item</h2>
                <form onSubmit={this.handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:"center"}}>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Item Name :</label><input onChange={this.handleChange} type="text" name="itemName" placeholder=" itemName" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Category :</label><input onChange={this.handleChange} type="text" name="category" placeholder="category" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Price :</label><input onChange={this.handleChange} type="text" name="price" placeholder="price" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}} /></div>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Status :</label><input onChange={this.handleChange} type="text" name="status" placeholder="status"style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}} /> </div>                
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Description :</label><input onChange={this.handleChange} type="text" name="description" placeholder="description" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/>  </div>               
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Image :</label><input onChange={this.handleChange} type="text" name="image" placeholder="image" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/>   </div>    
                {/* <div><input type="text" name="userId" value={this.state.userId} placeholder="userId" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>           */}
                <input type="submit" value="Confirm Add Listing" style={{ padding: '10px 10px', border:'0.25px solid', borderRadius:'5px', marginTop:'10px'}}/>           
                </form>
            </div>
        )
    }
}    

export default ItemAdd;