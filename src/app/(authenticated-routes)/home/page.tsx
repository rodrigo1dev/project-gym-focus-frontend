"use client";

import { BottomBar } from "@/components/bottom-bar";
import { Logo } from "@/components/logo";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import arrowLeft from "../../../../assets/arrowLeft.svg";
import arrowRight from "../../../../assets/arrowRight.svg";

interface SessionProps {
  user_id: string;
  data: {
    access_token: string;
    expires_in: number;
    refresh_token: string;
  };
}
interface workoutsProps {
  id: string;
  exerciseInfoId: string;
  amountOfRepetitions: string;
  amountOfSeries: string;
  weight: string;
  exerciseInfo: {
    id: string;
    name: string;
    grouping: string;
  };
}

export default function Home() {
  const divisions = ["A", "B", "C", "D", "E", "F", "G"];
  const [workouts, setworkouts] = useState<Array<workoutsProps>>([]);
  const [division, setDivision] = useState("A");

  const fetchDataFromBackend = async () => {
    try {
      const session = await getSession();
      const token = session as any;
      console.log(session);

      const response = await fetch(
        `${process.env.API_URL}/workouts/find-all-workouts-by-division?division=${division}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.data.access_token}`,
          },
        }
      );

      const data = await response.json();

      if (Array.isArray(data)) {
        setworkouts(data);
      } else {
        console.error("A resposta do backend não é uma array:", data);
      }
    } catch (error) {
      console.error("Erro ao obter dados do backend", error);
    }
  };

  useEffect(() => {
    fetchDataFromBackend();
  }, [division]);

  const handleDivisionChange = (direction: "next" | "prev") => {
    setDivision((prevDivision) => {
      const currentIndex = divisions.indexOf(prevDivision);
      let newIndex;

      if (direction === "next") {
        newIndex = (currentIndex + 1) % divisions.length;
      } else {
        newIndex = (currentIndex - 1 + divisions.length) % divisions.length;
      }

      return divisions[newIndex];
    });
  };

  return (
    <div>
      <Logo variant="secondary" />

      <div className={"mt-36 border-spacing-y-3"}>
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

        <div className="max-h-96 overflow-x-auto scrollbar-thin scrollbar-thumb-sky-1">
          {workouts.length === 0 ? (
            <p className=" px-2 py-3 text-center text-xs font-medium text-sky-1 uppercase tracking-wider w-full mt-48">
              Nenhum Exercício cadastrado
            </p>
          ) : (
            <tbody className="border-2">
              {workouts.map((item) => (
                <tr key={item.id} className="bg-gray-1 h-16">
                  <td className=" mt-4  text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-2 pr-4 rounded-l-lg w-56 ">
                    {item.exerciseInfo.name}
                  </td>

                  <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider pr-4 w-20">
                    {item.amountOfSeries}
                  </td>

                  <td className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider rounded-r-lg w-20">
                    {item.weight}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </div>
      </div>

      <div className="pl-1 flex justify-center gap-5 fixed bottom-16 left-1/2 transform -translate-x-1/2  w-2/3 h-40 space-x-2 items-center">
        <button onClick={() => handleDivisionChange("prev")}>
          <Image src={arrowLeft} className="w-6 h-6" alt="" />
        </button>

        <h2 className="text-2xl font-bold text-sky-1 uppercase ">{division}</h2>

        <button onClick={() => handleDivisionChange("next")}>
          <Image src={arrowRight} className="w-6 h-6" alt="" />
        </button>
      </div>

      <BottomBar />
    </div>
  );
}
