import { useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    return (
        <div className="bg-[#272D40] text-[#F0F0F0] text-[40px] h-[114px] flex justify-center items-center w-full gap-36">
            <a
                href="/information"
                className={location.pathname === "/information" ? "underline" : ""}
            >
                INFORMATION
            </a>
            <a
                href="/weather-information"
                className={location.pathname === "/weather-information" ? "underline" : ""}
            >
                WEATHER
            </a>
            <a
                href="/air-quality"
                className={location.pathname === "/air-quality" ? "underline" : ""}
            >
                AIR QUALITY
            </a>
        </div>
    );
}
