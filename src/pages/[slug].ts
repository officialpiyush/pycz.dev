import type { APIRoute } from "astro";
import { getLink } from "../utils/db";

export const get: APIRoute = async ({ params, redirect }) => {
  const link = await getLink(params.slug!);

  if (!link) {
    return redirect("/", 307);
  }

  return redirect(link, 307);
};
