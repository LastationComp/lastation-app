import { ChangeEvent } from "react"

export default function TextField({value, placeholder, type, setValue}: {
    value: string,
    placeholder: string,
    type: string,
    setValue: any
}) {
    return (
        <>
        <input placeholder={placeholder} type={type} className=" rounded w-full p-1 shadow-md outline-1 outline-blue-400 outline  focus:outline-blue-700 focus:outline-1"  value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}  />
        </>
    )
}