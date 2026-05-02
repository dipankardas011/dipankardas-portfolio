import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";

export const getStaticPaths: GetStaticPaths = async () => {
  const skills = await getCollection("agent-skills");
  return skills.map((skill) => ({
    params: { skill: skill.id },
    props: { body: skill.body ?? "" },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  return new Response(props.body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
