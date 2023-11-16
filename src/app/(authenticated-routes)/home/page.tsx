import { BottomBar } from "@/components/bottom-bar";
import { Logo } from "@/components/logo";
import Image from "next/image";
import arrowLeft from "../../../../assets/arrowLeft.svg";
import arrowRight from "../../../../assets/arrowRight.svg";

export default function Home() {
  return (
    <div>
      <Logo variant="secondary" />

      <div className={"mt-40"}>
        <thead>
          <tr>
            <th className=" px-2 py-3 text-left text-xs font-medium text-sky-1 uppercase tracking-wider w-52 ">
              Exerício
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-sky-1 uppercase tracking-wider">
              Séries
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-sky-1 uppercase tracking-wider">
              Peso
            </th>
          </tr>
        </thead>

        <tbody className="border-2">
          <tr className="bg-gray-1 h-16">
            <td className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-2 rounded-l-lg">
              {" "}
              asd
            </td>
            <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              {" "}
              asd
            </td>
            <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider rounded-r-lg">
              {" "}
              asd
            </td>
          </tr>
          <div className="h-2"></div>
          <tr className="bg-gray-1 h-16">
            <td className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-2 rounded-l-lg">
              {" "}
              asd
            </td>
            <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              {" "}
              asd
            </td>
            <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider rounded-r-lg">
              {" "}
              asd
            </td>
          </tr>
          <div className="h-2"></div>
          <tr className="bg-gray-1 h-16">
            <td className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-2 rounded-l-lg">
              {" "}
              asd
            </td>
            <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              {" "}
              asd
            </td>
            <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider rounded-r-lg">
              {" "}
              asd
            </td>
          </tr>
          <div className="h-2"></div>
          <tr className="bg-gray-1 h-16">
            <td className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-2 rounded-l-lg">
              {" "}
              asd
            </td>
            <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              {" "}
              asd
            </td>
            <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider rounded-r-lg">
              {" "}
              asd
            </td>
          </tr>
          <div className="h-2"></div>
          <tr className="bg-gray-1 h-16">
            <td className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-2 rounded-l-lg">
              {" "}
              asd
            </td>
            <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              {" "}
              asd
            </td>
            <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider rounded-r-lg">
              {" "}
              asd
            </td>
          </tr>
        </tbody>
      </div>

      <div className="flex justify-center mt-28 gap-5">
        <button>
          {" "}
          <Image src={arrowLeft} className="w-6 h-6" alt="" />
        </button>
        <span className="text-2xl font-bold text-sky-1 uppercase tracking-wider">
          A
        </span>
        <button>
          {" "}
          <Image src={arrowRight} className="w-6 h-6 " alt="" />
        </button>
      </div>

      <BottomBar />
    </div>
  );
}
