import { cookies } from "next/headers";
import { StringProvider } from "@/app/number/data";
import { Adder } from "./Adder";
import { NumberDisplay } from "./NumberDisplay";

export default function Home() {
  cookies();
  const randomNumber = Math.random();
  console.log(`This is a server ${randomNumber}`);
  return (
    <StringProvider defaultValue="hello">
      <div className="max-w-sm mx-auto mt-3 p-3 border border-green-600">
        <div>This is a server {randomNumber}</div>
        <Adder secret={randomNumber} />
        <NumberDisplay />
      </div>
    </StringProvider>
  );
}
