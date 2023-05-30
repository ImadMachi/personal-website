import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (secret !== process.env.NEXT_PUBLIC_SANITY_DRAFT_SECERT) {
    return new Response("Invalid token", { status: 401 });
  }

  draftMode().enable();

  if (slug) {
    redirect(`/blog/${slug}`);
  }

  redirect(`/blog`);
}
