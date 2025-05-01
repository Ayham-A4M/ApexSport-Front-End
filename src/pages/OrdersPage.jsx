import useGetOrders from "../hooks/useGetOrders";
import SectionHeader from "../components/SectionHeader"
import DisplayOrders from "../Orders/DisplayOrders";
import OopsSomthingWrong from "../components/OopsSomthingWrong";
import LoadingPage from "./LoadingPage";
const OrdersPage = () => {
  const {orders,setOrder}=useGetOrders();
  return (
    <div className="flex flex-col gap-[50px] py-[20px]">
      <SectionHeader sectionName={'My Orders'} />

      {

        orders ?
          orders.length > 0 ?
            <>
              <div className="order-the-cards flex justify-start items-center gap-[10px] px-[10px] py-[7px] rounded-[10px] w-fit bg-slate-300">
                <label htmlFor="OldestFirst" className="text-[15px] font-semibold text-[--main-blue]">oldest first:</label>
                <input type="checkbox" id="OldestFirst" className="ui-checkbox" onChange={() => { setOrder(prev => -prev) }} />
              </div>
              <DisplayOrders orders={orders} />
            </>
            : <div>Empty</div>

          : typeof orders == 'undefined' ? <OopsSomthingWrong /> : <LoadingPage />
      }

    </div>
  )
}

export default OrdersPage