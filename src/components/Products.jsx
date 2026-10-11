import { useState } from "react";
import Counter from "./Counter";
import Product from "./Product";
import { v4 as uuid } from "uuid";

function Products() {
  const showList = true;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [priceMessage, setPriceMessage] = useState("");

  const [products, setProducts] = useState([
    { id: 1, label: "Product 1", price: 10 },
    { id: 2, label: "Product 2", price: 20 },
    { id: 3, label: "Product 3", price: 30 },
  ]);

  const validateTitle = (value) => {
    if (value.trim() === "") {
      return "Title is required!";
    }

    if (value.trim().length < 3) {
      return "Please enter at least 3 characters!";
    }

    return "";
  };

  const titleInput = (e) => {
    const value = e.target.value;

    setTitle(value);
    setMessage(validateTitle(value));
  };

  const priceInput = (e) => {
    setPrice(e.target.value);
    setPriceMessage("");
  };

  const submitForm = (e) => {
    e.preventDefault();

    const titleError = validateTitle(title);
    const numericPrice = Number(price);

    const priceError =
      price.trim() === "" ||
      !Number.isFinite(numericPrice) ||
      numericPrice < 0
        ? "Please enter a valid price of 0 or more!"
        : "";

    setMessage(titleError);
    setPriceMessage(priceError);

    if (titleError || priceError) {
      return;
    }

    const myProduct = {
      id: uuid(),
      label: title.trim(),
      price: numericPrice,
    };

    setProducts((previousProducts) => [
      myProduct,
      ...previousProducts,
    ]);

    setTitle("");
    setPrice("");
  };

  const deleteProduct = (id) => {
    setProducts((previousProducts) =>
      previousProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div>
      <form onSubmit={submitForm} noValidate>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>

          <input
            id="title"
            value={title}
            onChange={titleInput}
            type="text"
            className="form-control"
          />

          {message && (
            <div className="alert alert-danger">{message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Price
          </label>

          <input
            id="price"
            value={price}
            onChange={priceInput}
            type="number"
            min="0"
            step="0.01"
            className="form-control"
          />

          {priceMessage && (
            <div className="alert alert-danger">
              {priceMessage}
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-info my-2">
          Save
        </button>
      </form>

      <Counter />

      {showList && (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <Product
                id={product.id}
                onDeleteProduct={deleteProduct}
              >
                <div className="card-body">
                  <h4 className="card-title">{product.label}</h4>

                  <p className="card-text">
                    <span className="badge bg-danger">
                      {product.price}
                    </span>
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