"use client";
import { startTransition } from "react";

import { useString } from "@/app/number/useString";
import { useRouter } from "next/navigation";

export const Adder = ({ secret }: { secret: number }) => {
  const router = useRouter();
  const [number, setString] = useString();
  return (
    <div className="p-3 mb-3 border border-red-600">
      <button
        className="border border-gray-600 p-1 mr-2 rounded"
        onClick={() =>
          startTransition(() => {
            router.refresh();
          })
        }
      >
        Roll a Dice
      </button>
      <input
        type="text"
        className="border border-gray-600 p-1 rounded"
        defaultValue={number}
        onChange={(event) => {
          setString(event.target.value);
        }}
      />
      <div> Secret from SSC: {secret}</div>
    </div>
  );
};
