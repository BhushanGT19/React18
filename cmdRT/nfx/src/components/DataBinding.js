export default function DataBinding() {
    var categories = ["All", "Car", "Bike"];
    // var categories = {
    //     Name : 'carz',
    //     Price : 5500000,
    //     Brand : 'all',
    //     Stock : true
    // }
    return (
        <div className="container-fluid">
            <h1>Categories</h1>

            {/* <dl>
                <dt>Name</dt>
                <dd>{categories.Name}</dd>
            <dt>Price</dt>
                <dd>{categories.Price}</dd>
            <dt>Brand</dt>
                <dd>{categories.Brand}</dd>
                <dt>Stock</dt>
                <dd>{(categories.Stock) ? "available" : "will available soon"}</dd>
            </dl> */}
            <ol>
                {
                    categories.map(category => <li key={category}>{category}</li>)
                }
            </ol>
            <select>
                {
                    categories.map(category => <option value={category} key={category}>{category}</option>)
                }
            </select>

        </div>
    );
}