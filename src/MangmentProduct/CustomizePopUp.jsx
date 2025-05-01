import { MdFormatListBulletedAdd } from "react-icons/md";
import { useState } from "react"
import { IoMdCloseCircle } from "react-icons/io";

const CustomizePopUp = ({setCustomize,setCustomizePopUp}) => {
    const [customeName, setCustomeName] = useState('');
    const [options, setOptions] = useState([]);
    const handleAddNewOption = () => {
        setOptions(prev => [...prev, {  id:prev.length,value: "" }]);
    }
    const handleChangeOptionInput = (value, id) => {
        const newOptions = [...options];
        for (let i = 0; i < options.length; i++) {
            if (options[i].id === id) {
                options[i].value = value;
                break;
            }
        }
        setOptions(newOptions);
    }
    const handleDeleteOption = (id) => {
        console.log(id);
        let newOptions = [...options];
        newOptions = newOptions.filter((e) => e.id != id)
        setOptions(newOptions);
    }
    const handleApplyOptions=()=>{
        if(customeName&&options.length>0){
            setCustomize(prev => [...prev,{customeName,options}]);
        }
        setCustomizePopUp(false);
    }
    return (
        <div className="flex w-[90%] max-w-[500px] border-[1px]  p-[15px] rounded-[4px] border-[--main-blue]">
            <div className="flex flex-col gap-[15px] w-full">
                <div>
                    <input type="text" value={customeName} onChange={(e) => { setCustomeName(e.target.value) }} className=" py-[3px] px-[3px] outline-none border-[1px] rounded-[4px] border-slate-500 max-w-[250px]" placeholder="custome name ..." />
                </div>
                <div className="flex items-center gap-[5px]">
                    <span className="text-[--main-blue] text-[17px]">options</span>
                    <MdFormatListBulletedAdd className="text-[--main-blue] text-[20px] cursor-pointer hover:text-[#2c9b8c] duration-300" onClick={() => { handleAddNewOption() }} />
                </div>
                <div className="flex flex-col gap-[10px]">
                    {
                        options.length > 0 &&
                        options.map((e) => (
                            <div className="flex items-center gap-[10px]" key={e.id}>   
                                <IoMdCloseCircle className="text-red-600 text-[20px]" onClick={() => { handleDeleteOption(e.id) }} />
                                <input type="text" onChange={(ele) => { handleChangeOptionInput(ele.target.value, e.id) }} className=" py-[2px] px-[3px] outline-none border-[1px] rounded-[4px] border-slate-500 max-w-[200px]" placeholder="custome name ..." />
                            </div>
                        ))
                    }
                </div>
                <div className="w-full flex justify-center">
                    <button className=" px-[25px] py-[2px] rounded-[4px] border-[--main-blue] border-[1px] bg-slate-100 duration-300 hover:bg-[--main-blue] hover:text-slate-100" onClick={(e)=>{e.preventDefault();handleApplyOptions()}}>Apply</button>
                </div>
            </div>
        </div>
    )
}

export default CustomizePopUp