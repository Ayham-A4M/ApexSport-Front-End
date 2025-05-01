import OrderCard from "./OrderCard"

const DisplayOrders = ({orders}) => {
    return(
      <div className="flex flex-col gap-[25px]">
        {
            orders && orders.map((item,i)=>(
                <OrderCard order={item} key={i}/>
            ))
        }
      </div>



    )
}

export default DisplayOrders