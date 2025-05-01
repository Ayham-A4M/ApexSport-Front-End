

const Customes = ({ CustomeArray,customes,setCustomes}) => {
    const handleUpdateCustomeValue = (customeName, option) => {
        const newCustomes = [...customes];
        if (newCustomes.length === 0) {
            newCustomes.push({ customeName, option });
        }
        else {
            for (let i = 0; i < newCustomes.length; i++) {
                if (newCustomes[i].customeName === customeName) {
                    newCustomes[i].option = option;
                    break;
                } else if (i == newCustomes.length - 1) {
                    newCustomes.push({ customeName, option });
                }
            }
        }

        setCustomes(newCustomes);
    }
    return (
        <div className="custome w-full flex flex-col gap-[20px]">
            {
                CustomeArray.length > 0 &&
                CustomeArray.map((ele) => (

                    <div className="w-full flex gap-[10px] items-center border-[1px] rounded-[6px] border-[--main-blue] p-[5px]">
                        <h2 className="text-[18px] text-[--main-blue] font-medium">{ele.customeName}:</h2>
                        {
                            ele.options.length > 0 && // there are options inside each ele and each option has id and value
                            ele.options.map((element) => (
                                <div className="flex items-center gap-[5px]">
                                    <label htmlFor={element.id}>{element.value}</label>
                                    <input type="radio" id={element.id} value={element.value} name={ele.customeName} onChange={(e) => { handleUpdateCustomeValue(ele.customeName, e.target.value) }} />
                                </div>

                            ))
                        }

                    </div>
                ))

            }
        </div>
    )
}

export default Customes