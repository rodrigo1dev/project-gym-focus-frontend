import * as Input from "@/components/input";
import { Logo } from "@/components/logo";
import { Asterisk, Lock, Mail } from "lucide-react";

export default function CreateAccount() {
    return (
        <div>
            <Logo variant="primary" />

            <p className={"text-gray-50 text-xl mt-20 text-center"}>Crie sua conta</p>

            <div className="mt-9">
                <Input.Root>
                    <Input.Prefix>
                        <Mail className="h-5 w-5 text-zinc-500" />
                    </Input.Prefix>
                    <Input.Control id="email" type="email" placeholder="E-mail" />
                    <button className={"text-sky-1 font-normal"}>Verificar</button>
                </Input.Root>
                <Input.Root>
                    <Input.Prefix>
                        <Lock className="h-5 w-5 text-zinc-500" />
                    </Input.Prefix>
                    <Input.Control id="password" type="password" placeholder="Senha" />
                </Input.Root>
                <Input.Root>
                    <Input.Prefix>
                        <Lock className="h-5 w-5 text-zinc-500" />
                    </Input.Prefix>
                    <Input.Control
                        id="confirm-password"
                        type="confirm-password"
                        placeholder="Confirme a senha"
                    />
                </Input.Root>
                <Input.Root>
                    <Input.Prefix>
                        <Asterisk className="h-5 w-5 text-zinc-500" />
                    </Input.Prefix>
                    <Input.Control id="code" type="code" placeholder="Código" />
                </Input.Root>
            </div>

            <button className={"bg-sky-1 text-black-1 p-2 rounded-lg mt-8 w-96 h-14"}>
                Criar conta
            </button>
        </div>
    );
}
