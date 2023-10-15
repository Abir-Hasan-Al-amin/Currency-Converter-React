import { useState } from 'react'
import {InputBox} from './components/input.js'
import useCurInfo from './customHooks/useCurInfo'
import './App.css'

function App() {
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("bdt");
  const [convertAmount,setConvertAmount]=useState(0);

    const curInfo= useCurInfo(from);
    const options=Object.keys(curInfo);
    const swap=()=>{
      setFrom(to);
      setTo(from);
      setConvertAmount(amount);
      setAmount(convertAmount);
    }
    const convert=()=>{
      setConvertAmount(amount*curInfo[to]);
    }
    return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://c0.wallpaperflare.com/preview/266/613/101/money-finance-bank-cash.jpg')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert();
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              curOptions={options}
                              onCurChange={(c)=>setFrom(c)}
                              selectCur={from}
                              onAmountChange={(amount)=>setAmount(amount)}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertAmount}
                              curOptions={options}
                              onCurChange={(c)=>setTo(c)}
                              selectCur={to}
                              amountDisable
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App
