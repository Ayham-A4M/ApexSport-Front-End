import StatisticCard from "./statisticCard"


function StatisticsCardsGroup({ statistics }) {
    return (
        statistics &&
        <div className="statistics w-full items-center grid grid-cols-4 max-[650px]:grid-cols-2  gap-[5px]">
            <StatisticCard title={' Products'} Value={statistics.numberOfProducts ? statistics.numberOfProducts : 0} Color={'#c62929'}  />
            <StatisticCard title={'Total orders'} Value={statistics.totalOrders ? statistics.totalOrders : 0} Color={'#33cc55'} />
            <StatisticCard title={'Total sales'} Value={statistics.TotalSeals ? statistics.TotalSeals : '0$'} Color={'#488caa'}  />
            <StatisticCard title={'Users'} Value={statistics.numberOfUsers ? statistics.numberOfUsers : 0} Color={'#2244ff'} />
        </div>

    )
}

export default StatisticsCardsGroup