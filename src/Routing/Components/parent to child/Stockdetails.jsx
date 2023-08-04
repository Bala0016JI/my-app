import React from "react";
import { useState } from "react";
import "./Stockfrom";
import "./Stocktable";

export default function Stockdetails() {

    const abcd = {
        StockName: "",
        Stockvalue: "",

    };

    const [stockdetails, setstockdetails] = useState(abcd)

    let handleStock = (e) => {
        e.preventDefaults();
        console.log(stockdetails)
    }


    let handleInput = (e) => {
        let { name, value } = e.target;
        if (name === "StockName" || name === "Stockvalue") {
            let d = {...stockdetails }
            d[name] = value;
            setstockdetails(d)
        }
    }
    return (
        <div>
            <form onSubmit={handleStock}>
                <div>
                    <label htmlFor="stockname">StockName</label>
                    <input
                        name="StockName"
                        value={stockdetails.StockName}
                        onInput={handleInput}
                        placeholder="StockName"

                    />
                </div>
                <div>
                    <label htmlFor="stockvalue">Stockvalue</label>
                    <input
                        name="Stockvalue"
                        value={stockdetails.Stockvalue}
                        onInput={handleInput}
                        placeholder="stockvalue"
                    />
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>


        </div>
    )
}