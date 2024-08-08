import {useState,useEffect} from "react";
import "./product.scss";
function Pagination () {
    const limit = 8;
    const [data,setData] = useState([]);

    //đặt 1 biến để khi click sang các trang,ví dụ như trang 1,2,3
    const [pageActive,setPageActive] = useState(0);

    //đặt 1 biến chứa số lượng các trang
    const [qualityPage,setQualityPage] = useState(0);

    useEffect(() => {
      fetch(`https://dummyjson.com/products?skip=${pageActive*limit}&limit=${limit}`)
        .then(res => res.json())
        .then((data) =>{
            // console.log(data.products);
            setData(data.products);
            console.log(data);
            setQualityPage(Math.ceil(data.total/limit));
        })
    },[pageActive]);

    //khi click vào các trang
    const handleClick = (e)=>{
        setPageActive(e);
    }
    return (
        <>
        <h1>Phân trang sản phẩm</h1>
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

        <ul className="pagination">
            {[...Array(qualityPage)].map((_,index) => (
                <li  className="pagination__item"key={index} onClick={() =>handleClick(index)}>{index+1}</li>             
            ))}
        </ul>
        </>
    )
}
export default Pagination;