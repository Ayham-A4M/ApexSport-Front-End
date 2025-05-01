
import OrderCard from "./OrderCard"
const DisplayOrdersCards = ({orders}) => {
  return (
    <>
        {
            orders.length > 0 &&
            orders.map((singleOrder) => (
                <OrderCard  key={singleOrder._id} singleOrder={singleOrder}/>
            ))
        }
    </>
  )
}

export default DisplayOrdersCards