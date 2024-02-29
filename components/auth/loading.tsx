import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image src="/p4.svg"
        alt="Logo"
        width={140}
        height={140}
        className="animate-pulse duration-800"
      />
    </div>
  )
}
