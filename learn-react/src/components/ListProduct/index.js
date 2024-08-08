import { listProduct } from "../../database/ListProduct";
import "./ListProduct.scss";
function ListProduct () {
    console.log(listProduct);
    return (
        <>
        <div className="listProduct">
            {listProduct.map((item) => (
             <div className="listProduct__item" key={item.id}>
                 <img src={item.image} alt={item.name}></img>
                 <div className="listProduct__item-title">{item.name}</div>
                 <div className="listProduct__item-price">Gía:{item.price}</div>
             </div>
            ))}
           
        </div>
        </>
    )
}
export default ListProduct;