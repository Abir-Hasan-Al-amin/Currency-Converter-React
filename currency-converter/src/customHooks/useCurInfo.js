import { useEffect, useState } from "react";
function useCurInfo(cur){
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${cur}.json`)
        .then((res)=>{
            return  res.json();
        })
        .then((res)=>{
            return setData(res[cur]);
        })
    },[cur]);
    return data;
}
export default useCurInfo;