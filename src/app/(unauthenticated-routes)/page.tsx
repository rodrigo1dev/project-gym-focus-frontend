"use client";

import * as Input from "@/components/input";
import { Logo } from "@/components/logo";
import { Lock, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.log(result);
      return;
    }

    router.replace("/home");
  }
  return (
    <div>
      <Logo variant="primary" />

      <p className={"text-gray-50 text-xl mt-52 text-center"}>
        Acesse sua conta
      </p>

      <form onSubmit={handleSubmit}>
        <Input.Root>
          <Input.Prefix>
            <Mail className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control
            id="email"
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Input.Root>

        <Input.Root>
          <Input.Prefix>
            <Lock className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control
            id="Senha"
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Input.Root>

        <button
          type="submit"
          className={"bg-sky-1 text-black-1 p-2 rounded-lg mt-8 w-96 h-14"}
        >
          Entrar
        </button>
      </form>

      <p className={"text-gray-50 text-xl mt-28 "}>Ainda não tem uma conta?</p>

      <button
        className={
          "bg-transparent border border-sky-1 p-2 rounded-lg mt-8 w-96 h-14 text-sky-1"
        }
        onClick={() => router.push("/create-account")}
      >
        Criar conta
      </button>
    </div>
  );
}
