import StatisticsCardsGroup from "../AdminPage/statisticsCardsGroup";
import WelcomeAmdin from "../AdminPage/WelcomeAmdin";
import SupportAdmin from "../AdminPage/SupportAdmin";
import OrdersStatus from "../AdminPage/OrdersStatus";
import TopProductsOrder from "../AdminPage/TopProductsOrder";
import { Line } from "react-chartjs-2";
import useFetchAdminStatistics from "../hooks/useFetchAdminStatistics";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const AdminPage = () => {

  const {statistics,ordersStatus,topProducts,incomeLast7Days}=useFetchAdminStatistics()

 
  const data = {
    labels: incomeLast7Days ? incomeLast7Days.map((ele) => { return ele.Day }) : []
    ,
    datasets: [
      {
        label: 'income day $',
        data: incomeLast7Days ? incomeLast7Days.map((ele) => { return ele.total }) : []
        ,
        fill: false,
        backgroundColor: 'rgb(255,255,255)', // blue-800
        borderColor: '#1565c0',
        borderWidth: 3,
        pointRadius: 8,
        pointHoverRadius: 10,
        tension: 0.1
      }
    ]
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',

      },
      title: {
        display: true,
        text: 'Last 7 days Income',


      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };


  return (
    <div className="py-[25px] flex flex-col gap-[50px]">
      <StatisticsCardsGroup statistics={statistics} />
      <div className="content grid grid-cols-2 max-[991px]:grid-cols-1 gap-[10px]">

        <div className="col1 flex flex-col gap-y-[25px]">
          <WelcomeAmdin />
          <SupportAdmin />
        </div>

        <div className="col2 flex flex-col gap-y-[25px]">
          <TopProductsOrder topProducts={topProducts} />
          <OrdersStatus ordersStatus={ordersStatus} />
        </div>

      </div>

      <div className="max-h-[600px] flex justify-center">
        <Line data={data} options={options} />
      </div>



    </div>


  )
}
export default AdminPage