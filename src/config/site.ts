import { SiteConfig } from "@/types";
import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
  name: "WiseAI",
  description:
    "AI Operations Platform for Data Scientists, Data Engineers, and DevOps",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
  links: {
    twitter: "https://twitter.com/artificialwisdomai",
    github: "https://github.com/artificialwisdomai/origin",
  },
};
