import LinkComponent from "./LinkComponent"

const DirectionsLinks = ({ directions, setClicked }) => {
    return (
        <>
            {
                (setClicked && directions) ?
                directions.map((ele, i) => (
                    <div className="border-b-[1px] border-slate-300 w-full py-[13px]  pl-[10px]" key={i}>
                        <LinkComponent setClicked={setClicked} dierction={ele.dierction} name={ele.name} icon={ele.icon} />
                    </div>
                )):
                directions.map((ele, i) => (
                    
                        <LinkComponent dierction={ele.dierction} name={ele.name} icon={ele.icon} key={i} />
                    
                ))
            }
           

        </>
    )
}

export default DirectionsLinks