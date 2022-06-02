function ListProduct(props){
    return(
        <ul>
            {props.products.map(p => <li key={p.id}>{p.name}, {p.price}</li>)}
        </ul>
    );
}

export default ListProduct;