import { BottomBar } from "@/components/bottom-bar";
import { Logo } from "@/components/logo";

export default function CreateWorkout() {
    return (
        <div>
            <Logo variant="primary" />

            <div className="flex justify-center">
                <form className="w-4/5 mt-40 ">
                    <div className="flex -mx-3">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2">
                                Exercício
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-1 text-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-2 focus:border-gray-500"
                                id="grid-password"
                                type="text"
                            />
                            <p className="text-gray-50 text-xs italic"></p>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full md:w-1/2 px-3 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2 ">
                                Séries
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-1 text-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-2 text-center"
                                id="grid-first-name"
                                type="text"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2">
                                Repetições
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-1 text-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-2 text-center"
                                id="grid-last-name"
                                type="text"

                            />
                        </div>
                    </div>
                    <div className="flex  -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2">
                                Peso
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-1 text-gray-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-2 text-center"
                                id="grid-first-name"
                                type="text"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2"
                                htmlFor="grid-state"
                            >
                                Divisão
                            </label>
                            <div className="grid items-center">
                                <select
                                    className="w-full h-11 px-3 bg-gray-1  text-gray-500 rounded focus:outline-none focus:bg-gray-2 text-center appearance-none"
                                    id="grid-state"
                                >
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                    <option>E</option>
                                    <option>F</option>
                                    <option>G</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>

            </div>

            <div className="flex justify-center">
                <button className={"bg-sky-1 text-black-1 p-2 rounded-lg mt-1 w-4/5 h-14 items-center"}>Salvar</button>
            </div >

            <BottomBar />
        </div>
    );
}
