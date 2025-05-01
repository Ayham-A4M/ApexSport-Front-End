import box from '../assets/order-status/box.svg'
import processing from '../assets/order-status/processing.svg'
import hourglass from '../assets/order-status/hourglass.svg'
import shipping from '../assets/order-status/truck.svg'
import tick from '../assets/order-status/tick.svg'
import {  useState } from 'react'

const StatusOrder = ({ Status }) => {
    const [statusNumber, SetStatusNumber] = useState(() => {
        switch (Status) {
            case 'pending': { return 1 }
            case 'processing': { return 2 }
            case 'shipping': { return 3 }
            case 'completed': { return 4 }
        }
    })
    return (

        <div className="relative w-[99%] max-w-[600px]">

            {
                statusNumber > 1 &&
                <div className="image absolute top-[-50px] left-[6%] w-fit">
                    <img src={tick} alt="" className="w-[30px] aspect-square" />
                </div>
            }

            {
                statusNumber > 2 &&
                <div className="image absolute top-[-50px] left-[35%] w-fit">
                    <img src={tick} alt="" className="w-[30px] aspect-square" />
                </div>
            }
            {
                statusNumber > 3 &&
                <div className="image absolute top-[-50px] left-[63%] w-fit">
                    <img src={tick} alt="" className="w-[30px] aspect-square" />
                </div>
            }


            {statusNumber == 4 &&
                <div className="image absolute top-[-50px] left-[89%] w-fit">
                    <img src={tick} alt="" className="w-[30px] aspect-square" />
                </div>
            }

            <div className="image absolute top-[-20px] left-[5%] bg-slate-400 p-[10px] rounded-full">
                <img src={hourglass} alt="" className="w-[20px] aspect-square" />
            </div>

            <div className="image absolute top-[-20px] left-[34%] bg-slate-400 p-[10px] rounded-full">
                <img src={processing} alt="" className="w-[20px] aspect-square" />
            </div>

            <div className="image absolute top-[-20px] left-[62%] bg-slate-400 p-[10px] rounded-full">
                <img src={shipping} alt="" className="w-[20px] aspect-square" />
            </div>

            <div className="image absolute top-[-20px] left-[88%] bg-slate-400 p-[10px] rounded-full">
                <img src={box} alt="" className="w-[20px] aspect-square" />
            </div>

            <hr className="w-[99%] max-w-[600px] bg-green-700 h-[4px]" />

        </div>
    )
}

export default StatusOrder