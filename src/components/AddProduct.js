import { useState } from "react";

function AddProduct(props) {
  const defaultState = {
    id: 0,
    name: "",
    price: 0,
  };
  const [newProduct, setNewProduct] = useState(defaultState);
  const [idCounter, setIdCounter] = useState(1);

  // Update the product state in this component.
  function handleOnChange(e) {
    let update = { ...newProduct };
    update[e.target.name] = e.target.value;
    setNewProduct(update);
  }

  // Inverse data flow by invoking props.add()
  function handleOnSubmit(e) {
    e.preventDefault();

    // Validation
    if (!newProduct.name || !newProduct.price) {
      return;
    }

    // Format the data
    newProduct.id = idCounter; // unique id needed for key attribute (best use uuid)
    newProduct.price = "$ " + parseFloat(newProduct.price).toFixed(2);

    props.add({ ...newProduct }); // spread syntax to clone (objects are passing by reference)
    setNewProduct(defaultState); // reset the product state
    setIdCounter(idCounter + 1); // increment id counter
    e.target.reset(); // reset the input fields
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        Product Name:
        <input type="text" name="name" onChange={handleOnChange} />
        Price:
        <input type="number" name="price" onChange={handleOnChange} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddProduct;
