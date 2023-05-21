import "./searchResult.css"
import { Link } from "react-router-dom"

const Result=(props)=>{
    return  (
        props.items.map((item)=>{return(
            
            <div className="key" key={item.id}>
            <Link className="itm-lnk" to={`/Brew/${item._id}`}>
            <img className="image" src={item.image} alt="" />
            </Link>
            <h1 className="item-heading">{item.name}</h1>  
            
              
            </div>
            
        ) 
            
        
           
        })
    )
 
    
}
export default Result