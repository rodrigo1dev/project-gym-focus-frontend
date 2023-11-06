import * as Input from "@/components/input";
import { Logo } from "@/components/logo";
import { Lock, Mail } from "lucide-react";

export default function Login() {
  return (
    <div>
      <Logo variant="primary" />


      <p className={"text-gray-50 text-xl mt-52 text-center"}>Acesse sua conta</p>

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

      <p className={"text-gray-50 text-xl mt-28 "}>Ainda não tem uma conta?</p>

      <button className={"bg-transparent border border-sky-1 p-2 rounded-lg mt-8 w-96 h-14 text-sky-1"}>Criar conta</button>
    </div >
  );
}
