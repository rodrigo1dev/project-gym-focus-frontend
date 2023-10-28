import Image from "next/image";
import logo from "../../assets/Vector.svg";

export function Logo() {
    return (
        <div className={"flex mt-32 justify-center"}>
            <Image
                src={logo}
                className="w-10 h-10"
                alt={""}
                style={{ position: "relative", zIndex: 1 }}
            />
            <span className={`text-gray-50 text-3xl ml-4`}>GymFocus</span>
        </div>

    )
}