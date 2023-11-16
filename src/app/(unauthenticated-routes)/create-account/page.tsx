"use client";

import * as Input from "@/components/input";
import { Logo } from "@/components/logo";
import { Asterisk, Lock, Mail } from "lucide-react";
import { Person } from "phosphor-react";
import { useState } from "react";

interface CreateAccountProps {
  email?: string;
  password?: string;
  code?: string;
  name?: string;
}

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (url: string, requestBody: CreateAccountProps) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
      } else {
        const data = await response.json();
      }
    } catch (error) {
      console.error("Erro ao criar conta:", error);
    }
  };

  const handleEmailVerification = () => {
    handleSubmit("http://localhost:3001/users/verify-email", { email });
  };

  const handleCreateAccount = () => {
    handleSubmit("http://localhost:3001/users/create", {
      email,
      name,
      password,
      code,
    });
  };

  return (
    <div>
      <Logo variant="primary" />

      <p className={"text-gray-50 text-xl mt-20 text-center"}>Crie sua conta</p>

      <div className="mt-9">
        <Input.Root>
          <Input.Prefix>
            <Mail className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control
            id="email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className={"text-sky-1 font-normal"}
            onClick={handleEmailVerification}
          >
            Verificar
          </button>
        </Input.Root>

        <Input.Root>
          <Input.Prefix>
            <Person className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control
            id="name"
            type="name"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Input.Root>

        <Input.Root>
          <Input.Prefix>
            <Lock className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control
            id="password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Input.Root>
        <Input.Root>
          <Input.Prefix>
            <Lock className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control
            id="confirm-password"
            type="confirm-password"
            placeholder="Confirme a senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Input.Root>
        <Input.Root>
          <Input.Prefix>
            <Asterisk className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control
            id="code"
            type="code"
            placeholder="Código"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </Input.Root>
      </div>

      <button
        className={"bg-sky-1 text-black-1 p-2 rounded-lg mt-8 w-96 h-14"}
        onClick={handleCreateAccount}
      >
        Criar conta
      </button>
    </div>
  );
}
