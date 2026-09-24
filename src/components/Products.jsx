import { useState } from "react";
import Counter from "./Counter";
import Product from "./Product";
import { v4 as uuid } from 'uuid';

function Products() {
  let showList = true;

 const [title, setTitle]=useState("")
 const [price, setPrice]=useState("")

  const [products, setProducts] = useState([
    { id: 1, label: "Product 1", price: 10 },
    { id: 2, label: "Product 2", price: 20 },
    { id: 3, label: "Product 3", price: 30 },
  

  ]);

  const titleInput= (e) => {
    setTitle(e.target.value)
  }

   const priceInput= (e) => {
  setPrice(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()
    let myProduct = {
      id: uuid(),
      label: title,
      price
    }

   setProducts([myProduct , ...products     ])

   setTitle("")
   setPrice(0)
  }
  
  

  const deleteProduct = (id) => {
    let myList = products.filter((product) => product.id !== id);
    setProducts(myList);
  };

  
  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="" className="form-label">
            Title
          </label>
          <input value={title} onChange={titleInput} type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="" className="form-label">
            Price
          </label>
          <input  value ={price} onChange={priceInput} type="number" className="form-control" />
        </div>

        <button  className="btn btn-info my-2 mb-2">Save</button>
      </form>
      <Counter />

      {showList && (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <Product id={product.id} onDeleteProduct={deleteProduct}>
                <div className="card-body">
                  <h4 className="card-title">{product.label}</h4>
                  <p className="card-text">
                    <button className="btn btn-danger">{product.price}</button>
                  </p>
                </div>
              </Product>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
