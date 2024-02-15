import React, { useState } from 'react'

const Calc = () => {

    const [result, setResult] = useState("");
    const [bg, setBg] = useState("rgb(227 227 227)");
    const [btnc, setBtnc] = useState("rgb(233 233 233)");
    const [mbc, setMbc] = useState("rgb(211 211 211)");


    const click = (event) => {
        setResult(result.concat(event.target.value));
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("Error");
        }
    }

    const clear = () => {
        setResult("");
    }

    const del = () => {
        setResult(result.slice(0, -1));
    }

    const zx = {
        backgroundColor: { bg },
        backgroundColor: { btnc },
        backgroundColor: { mbc }
    }


    return (
        <div style={{ backgroundColor: bg }} className='main_div'>
            <div className='calc_main'>

                <div className='inpt_main'>
                    <input type='text' placeholder='Hello !' value={result} />
                    <div className='style'>
                        <span id='o' onClick={() => { setBg("#dccae7"); setBtnc("#dccae7"); setMbc("#f3edf7"); }}></span>
                        <span id='t' onClick={() => { setBg("#e7e1cb"); setBtnc("#d7cda8"); setMbc("#f7f5ee") }}></span>
                        <span id='th' onClick={() => { setBg("#d4cbe7"); setBtnc("#b7a8d7"); setMbc("#f1eef7") }}></span>
                        <span id='f' onClick={() => { setBg("#c4eeea"); setBtnc("#9ce2dc"); setMbc("#ebf9f8") }}></span>
                    </div>
                </div>

                <div style={{ backgroundColor: mbc }} className='btn_div'>
                    <button className='opp_b' style={{ backgroundColor: btnc }} onClick={clear}>AC</button>
                    <button className='opp_b' style={{ backgroundColor: btnc }}>()</button>
                    <button className='opp_b' style={{ backgroundColor: btnc }} value="%" onClick={click}>%</button>
                    <button className='opp_b' style={{ backgroundColor: btnc }} value="+" onClick={click}>+</button>
                    <button className='num_b' value="1" onClick={click}>1</button>
                    <button className='num_b' value="2" onClick={click}>2</button>
                    <button className='num_b' value="3" onClick={click}>3</button>
                    <button className='opp_b' style={{ backgroundColor: btnc }} value="-" onClick={click}>-</button>
                    <button className='num_b' value="4" onClick={click}>4</button>
                    <button className='num_b' value="5" onClick={click}>5</button>
                    <button className='num_b' value="6" onClick={click}>6</button>
                    <button className='opp_b' style={{ backgroundColor: btnc }} value="*" onClick={click}>x</button>
                    <button className='num_b' value="7" onClick={click}>7</button>
                    <button className='num_b' value="8" onClick={click}>8</button>
                    <button className='num_b' value="9" onClick={click}>9</button>
                    <button className='opp_b' style={{ backgroundColor: btnc }} value="/" onClick={click}>/</button>
                    <button className='num_b' value="0" onClick={click}>0</button>
                    <button className='num_b' value="." onClick={click}>.</button>
                    <button className='num_b' onClick={del}>←</button>
                    <button className='opp_b' style={{ backgroundColor: btnc }} onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calc;