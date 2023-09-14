import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const {dispatch, currency} = useContext(AppContext)
    const [cur, setCur] = useState(currency)
    const currencyHandler = (e) => {
        if(e.target.value === "Currency"){
            alert("proper input required")
            return
        }
        setCur(e.target.value)
        dispatch({
            type: "CHG_CURRENCY",
            payload: cur
        })
    }
    return(
        <form>
            <select className="form-select bg-success" value={currency} onChange={currencyHandler}>
                <option>Currency</option>
                <option 
                    value="$"
                >$ Doller</option>
                <option 
                    value="€"
                >€ Euro</option>
                <option
                    selected
                    value="£"
                >£ Pound</option>
                <option 
                    value="&#8377;"
                >&#8377; Rupee</option>
            </select>
        </form>
    );
}

export default Currency;