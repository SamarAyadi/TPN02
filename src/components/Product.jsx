import PropTypes from "prop-types";

function Product({ children ,onDeleteProduct,  id }) {
  return (
    <>
      <div className="my-4">
        <div className="card text-white bg-primary mb-3">{children}</div>
      </div>

      <button onClick={()=>onDeleteProduct(id)} className="btn btn-info">Delete</button>
    </>
  );
}

Product.propTypes = {
  label: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
