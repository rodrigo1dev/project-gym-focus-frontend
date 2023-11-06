import Image from "next/image";
import { ComponentProps } from "react";
import { tv, VariantProps } from 'tailwind-variants';
import logo from "../../assets/logo.svg";

const logoVariant = tv({
    base: [
        'flex justify-center',
    ],

    variants: {
        variant: {
            primary: 'mt-32',
            secondary: 'mt-12',
        },
    },


})

export type LogoProps = ComponentProps<'div'> & VariantProps<typeof logoVariant>


export function Logo({ variant }: LogoProps) {
    return (
        <div className={logoVariant({ variant })}>
            <Image
                src={logo}
                className="w-10 h-10"
                alt={""}
                style={{ position: "relative", zIndex: 1 }}
            />
            <span className={`text-gray-50 text-3xl ml-4`}>GymFocus</span>
        </div>

    )
}