import {useState,useEffect} from "react";
import "./product.scss";
function Product () {
    const [data,setData] = useState([]);
    useEffect(() => {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data) =>{
            console.log(data.products);
            setData(data.products);
        })
    },[])
    return (
        <>
        <h1>Danh sách sản phẩm bằng gọi API</h1>
        <div className="product__list">
            {data.map((item) =>(
            <div className="product__item" key={item.id}>
                <div className="product__image">
                    <img src={item.thumbnail} alt={item.title}/>
                </div>
                <h3 className="product__title">{item.brand}</h3>
                <div className="product__price">Gía: {item.price}$</div>
            </div>
            ))}

        </div>
        </>
    )
}
export default Product;