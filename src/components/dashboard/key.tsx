import { useEffect, useState } from "preact/hooks";

interface Props {
  refreshState: () => void;
}

export default function DashboardKey({ refreshState }: Props) {
  const [key, setKey] = useState<string>("");

  const setKeyInStorage = (e: Event) => {
    e.preventDefault();
    localStorage.setItem("key", key);
    refreshState();
  };

  useEffect(() => {
    console.log("Key component mounted");
  });

  return (
    <form onSubmit={setKeyInStorage} class="h-full flex flex-col items-center justify-center">
      <div class="flex items-center border-2 border-zinc-800 rounded text-2xl lg:text-3xl">
        <div class="bg-zinc-800 text-zinc-400 pl-4 pr-2 py-3">Key:</div>
        <input
          onKeyUp={(e) => setKey(e.currentTarget.value)}
          onKeyDown={(e) => setKey(e.currentTarget.value)}
          required
          placeholder="some key"
          class="pl-2 pr-4 py-2 outline-none underline bg-zinc-900 text-zinc-300 placeholder-zinc-600"
          type="password"
        />
      </div>

      <button
        type="submit"
        class="px-4 py-2 rounded bg-lime-500 bg-opacity-40 hover:bg-opacity-50 disabled:cursor-not-allowed"
      >
        Store
      </button>
    </form>
  );
}
