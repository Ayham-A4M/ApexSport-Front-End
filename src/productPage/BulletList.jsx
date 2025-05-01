
import InformationPoint from "./InformationPoint"
const BulletList = ({ ArrayOfBullet }) => {
    return (
        <div>
            <ul className="flex flex-col gap-[20px] text-[17px]">
                {
                    ArrayOfBullet &&
                    ArrayOfBullet.map((element) => (
                        <InformationPoint infoName={element.infoName} value={element.value} />
                    ))
                }
            </ul>
        </div>
    )
}

export default BulletList