"use client";

import * as Input from "@/components/input";
import { Logo } from "@/components/logo";
import { showToast } from "@/libs/toastify";
import { Asterisk, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { Person } from "phosphor-react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

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
  const router = useRouter();

  const translateErrorMessage = (
    originalMessages: string | string[]
  ): string | string[] => {
    const errorTranslations: { [key: string]: string } = {
      "email should not be empty": "O e-mail não deve estar vazio",
      "email must be an email": "O e-mail deve ser válido",
      "Email already in use": "O e-mail já esta em uso",
      "password must be longer than or equal to 4 characters":
        "A senha deve ter no mínimo 4 caracteres",
      "Invalid code": "Código inválido",
    };
    if (Array.isArray(originalMessages)) {
      return originalMessages.map(
        (message) => errorTranslations[message] || message
      );
    } else {
      return errorTranslations[originalMessages] || originalMessages;
    }
  };

  const handleSubmit = async (
    url: string,
    requestBody: CreateAccountProps,
    message: string,
    createAccount?: boolean
  ) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      console.log(response);

      if (response.ok) {
        showToast(`${message}`, "success");
      }
      if (createAccount === true && response.ok) {
        setTimeout(() => {
          router.push("/");
        }, 4000);
      } else {
        const responseData = await response.json();
        const translatedMessage = translateErrorMessage(responseData.message);
        showToast(`${translatedMessage}`, "error");
      }
    } catch (error) {
      console.error("Erro ao criar conta:", error);
    }
  };

  const handleEmailVerification = () => {
    handleSubmit(
      `${process.env.API_URL}/users/verify-email`,
      { email },
      "Email enviado com sucesso!"
    );
  };

  const handleCreateAccount = () => {
    handleSubmit(
      `${process.env.API_URL}/users/create`,
      {
        email,
        name,
        password,
        code,
      },
      "Conta criada com sucesso!",
      true
    );
  };

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div>
      <button onClick={handleClick} className="w-full">
        <Logo variant="primary" />
      </button>

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
            <ToastContainer />
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
        <ToastContainer />
      </button>
    </div>
  );
}
