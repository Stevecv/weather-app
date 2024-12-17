import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faSearch} from "@fortawesome/free-solid-svg-icons";

export default function WeatherInformation() {
    return (
        <div>
            <div className="bg-[#FAFBFC] shadow-xl rounded-full w-[689px] h-[105px] text-[43px] flex items-center">
                <FontAwesomeIcon icon={faSearch} className="pl-4 text-[#696969]" />
                <input name="myInput" placeholder="Search Location..." className="w-full h-full rounded-br-full rounded-tr-full outline-none ml-4 text-[#696969] bg-[#FAFBFC]"/>
            </div>
        </div>
    )
}