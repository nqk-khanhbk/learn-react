import "./tabs.scss";
import {useState,useEffect} from "react";
function Tabs(){
    const[data,setData] = useState([]);
    const[tabActive,setTabActive] = useState("products");

    useEffect(() => {
        fetch(`https://dummyjson.com/${tabActive}`)
          .then(res => res.json())
          .then(data =>{
            setData(data[tabActive]);
          })
    },[tabActive]);

    const handleChange = (e)=>{
        setTabActive(e);
    }
    console.log(data);
    return (
        <>
        <div className="tabs">
            <div className="tabs__item" onClick={()=>handleChange("products")}>
                Products
            </div>
            <div className="tabs__item" onClick={()=>handleChange("users")}>
                Users
            </div>
            <div className="tabs__item" onClick={()=>handleChange("posts")}>
                Posts
            </div>
        </div>

        <div className="tabs__content">
            <ul>
               {data.map(item =>(
                <li key={item.id}>
                    {item.title || `${item.firstName} ${item.lastName}`}
                </li>
               ))}
            </ul>
        </div>
        </>
    )
}
export default Tabs;