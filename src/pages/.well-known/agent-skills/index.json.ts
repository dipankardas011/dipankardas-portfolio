import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const base = site ? site.origin : "https://dipankar-das.com";
  const skills = await getCollection("agent-skills");

  const skillEntries = await Promise.all(
    skills.map(async (skill) => {
      const content = skill.body ?? "";
      const encoder = new TextEncoder();
      const hashBuffer = await crypto.subtle.digest(
        "SHA-256",
        encoder.encode(content)
      );
      const sha256 = Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      return {
        name: skill.id,
        type: "skill",
        description: skill.data.description,
        url: `${base}/.well-known/agent-skills/${skill.id}/SKILL.md`,
        sha256,
      };
    })
  );

  return new Response(
    JSON.stringify(
      {
        $schema: "https://agentskills.io/schema/discovery-index/v0.2.0.json",
        skills: skillEntries,
      },
      null,
      2
    ),
    { headers: { "Content-Type": "application/json" } }
  );
};
