import clsx from "clsx";
import Link from "next/link";

interface LinkButtonProps {
  text: string;
  link?: string;
  className?: string;
}

export default function LinkButton({ className, text, link = "" }: LinkButtonProps) {
  return (
    <Link href={link}>
      <button className={clsx("relative inline-block px-4 py-2 font-medium group", className)}>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span className="relative text-black group-hover:text-white">{text}</span>
      </button>
    </Link>
  );
}
