import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

export function Prefix(props: InputPrefixProps) {
    return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

export function Control(props: InputControlProps) {
    return (
        <input
            className="flex-1 bg-gray-1 place text-gray-400 border-none outline-none"
            {...props}
        />
    )
}


type InputRootProps = ComponentProps<'div'>

export function Root(props: InputRootProps) {
    return (
        <div
            className="flex w-96 h-14 items-center gap-4 rounded-md px-3 py-2 bg-gray-1 mt-4"
            {...props}
        />
    )
}
