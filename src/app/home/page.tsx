import { Logo } from "@/components/logo";
import Image from "next/image";
import add from "../../../assets/add.svg";
import arrowLeft from "../../../assets/arrowLeft.svg";
import arrowRight from "../../../assets/arrowRight.svg";
import home from "../../../assets/home.svg";
import profile from "../../../assets/profile.svg";


export default function Home() {
    return (
        <div>
            <Logo variant="secondary" />

            <div className={"mt-40"}>
                <thead>
                    <tr>
                        <th className=" px-2 py-3 text-left text-xs font-medium text-sky-1 uppercase tracking-wider w-52 ">Exerício</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-sky-1 uppercase tracking-wider">Séries</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-sky-1 uppercase tracking-wider">Peso</th>
                    </tr>
                </thead>

                <tbody className="border-2">
                    <tr className="bg-gray-1 h-16">
                        <td className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-2 rounded-l-lg"> asd</td>
                        <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> asd</td>
                        <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider rounded-r-lg"> asd</td>
                    </tr>
                    <div className="h-2"></div>
                    <tr className="bg-gray-1 h-16">
                        <td className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-2 rounded-l-lg"> asd</td>
                        <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> asd</td>
                        <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider rounded-r-lg"> asd</td>
                    </tr>
                    <div className="h-2"></div>
                    <tr className="bg-gray-1 h-16">
                        <td className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-2 rounded-l-lg"> asd</td>
                        <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> asd</td>
                        <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider rounded-r-lg"> asd</td>
                    </tr>
                    <div className="h-2"></div>
                    <tr className="bg-gray-1 h-16">
                        <td className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-2 rounded-l-lg"> asd</td>
                        <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> asd</td>
                        <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider rounded-r-lg"> asd</td>
                    </tr>
                    <div className="h-2"></div>
                    <tr className="bg-gray-1 h-16">
                        <td className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-2 rounded-l-lg"> asd</td>
                        <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> asd</td>
                        <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider rounded-r-lg"> asd</td>
                    </tr>
                </tbody>
            </div>

            <div className="flex justify-center mt-28 gap-5">
                <button>  <Image
                    src={arrowLeft}
                    className="w-6 h-6"
                    alt=""
                /></button>
                <span className="text-2xl font-bold text-sky-1 uppercase tracking-wider">A</span>
                <button>  <Image
                    src={arrowRight}
                    className="w-6 h-6 "
                    alt=""
                /></button>
            </div>


            <div className={"fixed bottom-0 left-1/2 transform -translate-x-1/2  w-4/5 h-24 flex space-x-4 justify-center gap-20 content-center"}>
                <button>  <Image
                    src={home}
                    className="w-8 h-8"
                    alt=""
                /></button>
                <button>  <Image
                    src={add}
                    className="w-8 h-8"
                    alt=""
                /></button>
                <button>  <Image
                    src={profile}
                    className="w-8 h-8 "
                    alt=""
                /></button>

            </div>
        </div >
    )
}