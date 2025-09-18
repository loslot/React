import {useState} from 'react'

export default function State() {
    const [number, setNumber] = useState(10)
  return (
    <div className="w-full h-[1000px] bg-red-200 p-96 ">
      <div className="h-[300px] w-[300px] bg-slate-400 rounded-3xl  p-20 ">
        <div class="w-full flex justify-center align-content-center">
        <h1 className="text-3xl m-3 ">{number}</h1>
        </div>

        <div className="w-full  flex justify-between">
        <button onClick={()=>setNumber(number-1)}  className="text-3xl bg-red-600 m-3  "disabled={ number<=0} >-1</button>
        <button onClick={()=>setNumber(number+1)}  className="text-3xl border-black bg-green-600 m-3 " disabled={ number>=20} >+1</button>
        </div>

      </div>
    </div>
  )
}
