import { useEffect, useState } from "preact/hooks";
import client from "../../utils/server/client";
import DashboardKey from "./key";

export default function DashboardPage() {
  const [key, setKey] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [isKeySet, setIsKeySet] = useState<boolean>(false);

  const refreshState = () => {
    console.log("Refreshing state");
    const authKey = localStorage.getItem("key");
    if (authKey) {
      setIsKeySet(true);
    }
  };

  useEffect(() => {
    refreshState();
  }, []);

  const submitForm = async (e: Event) => {
    e.preventDefault();
    if (!key.length || !url.length) return;

    try {
      const result = await client.createLink.mutate({
        key,
        link: url,
      });

      alert(result);
    } catch (error: any) {
      alert(error);
    }
  };

  return isKeySet ? (
    <form
      onSubmit={submitForm}
      class="h-full flex flex-col items-center justify-center text-4xl lg:text-6xl font-black gap-5"
    >
      {/* <div class="-mb-3">
        // icon
      </div> */}
      <div class="flex items-center justify-center">
        <span class="text-zinc-500">pycz.dev/</span>
        <input
          onKeyUp={(e) => setKey(e.currentTarget.value)}
          onKeyDown={(e) => setKey(e.currentTarget.value)}
          required
          placeholder="github"
          class="outline-none w-1/4 underline bg-zinc-900 text-zinc-300 placeholder-zinc-600 text-3xl lg:text-5xl"
          type="text"
        />
      </div>
      <div class="flex items-center border-2 border-zinc-800 rounded text-2xl lg:text-3xl">
        <div class="bg-zinc-800 text-zinc-400 pl-4 pr-2 py-3">URL:</div>
        <input
          onKeyUp={(e) => setUrl(e.currentTarget.value)}
          onKeyDown={(e) => setUrl(e.currentTarget.value)}
          required
          placeholder="github.com/officialpiyush"
          class="pl-2 pr-4 py-2 outline-none underline bg-zinc-900 text-zinc-300 placeholder-zinc-600"
          type="url"
        />
      </div>

      <div class="py-2 text-xl">
        <button
          class="px-4 py-2 rounded bg-lime-500 bg-opacity-40 hover:bg-opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={!key.length || !url.length}
        >
          Create
        </button>
      </div>
    </form>
  ) : (
    <DashboardKey refreshState={refreshState} />
  );
}
