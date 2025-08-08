import { useState, useEffect } from "react";

export default function DataBinding() {
    // 1st...................................................
    var products = [
        { Id: 1, Name: 'Samsung S23 256gb', Price: 42999.00 },
        { Id: 2, Name: 'Asus ROG Strix G15', Price: 61999.00 },
        { Id: 3, Name: 'Samsung Buds 2 Pro', Price: 7899.00 }
    ]
    const total = products.reduce((sum, product) => sum + product.Price, 0);

    //   2nd.............................................................

    var menu = [
        { Category: "Electronics", Product: ["Samsung S23", "Asus ROG Strix G15", "OnePlus TV 43 inch"] },
        { Category: "Cloths", Product: ["Jockey T-Shirt XXl", "Levi's Jeans 38", "Puma Shoes", "Wrogn Sleevless XXL"] },
        { Category: "Accessories", Product: ["Peter England Analog Watch", "Firebollt Smart Watch"] }
    ]

    // 3rd.............................................................

    const [prodct, setProdct] = useState(["TV", "Mobile", "Watches", "Automotives", "Techs"])


    return (
        <div className="container">

            {/* 1st................................................... */}

            <h1 className="text-center">Product Details</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) =>
                            <tr key={index}>
                                <td key={product}>{index + 1}. {product.Name}</td>
                                <td>{product.Price}</td>
                            </tr>
                        )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>{total.toLocaleString()} INR</strong></td>
                    </tr>
                </tfoot>
            </table>

            {/* 2nd................................................... */}

            <h1>Category list</h1>
            <br />
            <select>
                {
                    menu.map(item =>
                        <optgroup label={item.Category} key={item.Category}>
                            {
                                item.Product.map(product =>
                                    <option key={product}>{product}</option>
                                )
                            }
                        </optgroup>
                    )
                }
            </select>

            <br /><br />

            <ol>
                {
                    menu.map(item =>
                        <li key={item.Category}>{item.Category}
                            <ul>
                                {
                                    item.Product.map(product =>
                                        <li key={product}>
                                            {product}
                                        </li>
                                    )
                                }
                            </ul>
                        </li>

                    )
                }
            </ol>

            {/* 3rd ..................................................... */}

            <ol>
                {
                    prodct.map(prod =>
                        <li key={prod}>{prod}</li>
                    )
                }
            </ol>


        </div>
    );
}