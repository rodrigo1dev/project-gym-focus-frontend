import * as Input from "@/components/input";
import { Lock, Mail } from "lucide-react";
import Image from "next/image";
import logo from "../../assets/Vector.svg";

export default function Login() {
  return (
    <div className={"bg-black-1 flex-col h-screen flex-grow flex items-center"}>

      <div className={"flex mt-32"}>
        <Image
          src={logo}
          className="w-10 h-10"
          alt={""}
          style={{ position: "relative", zIndex: 1 }}
        />
        <span className={`text-gray-50 text-3xl ml-4`}>GymFocus</span>
      </div>

      <p className={"text-gray-50 text-xl mt-52"}>Acesse sua conta</p>

      <Input.Root>
        <Input.Prefix>
          <Mail className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control
          id="email"
          type="email"
          placeholder="E-mail"

        />
      </Input.Root>

      <Input.Root >
        <Input.Prefix>
          <Lock className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control
          id="Senha"
          type="Senha"
          placeholder="Senha"
        />
      </Input.Root>


      <button className={"bg-sky-1 text-black-1 p-2 rounded-lg mt-8 w-96 h-14"}>Entrar</button>

      <p className={"text-gray-50 text-xl mt-28"}>Ainda não tem uma conta?</p>

      <button className={"bg-transparent border border-sky-1 text-black-1 p-2 rounded-lg mt-8 w-96 h-14 text-sky-1"}>Criar conta</button>

    </div>
  );
}
