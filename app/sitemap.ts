import type { MetadataRoute } from "next";

const BASE_URL = "https://armyaftcalculator.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: {
    path: string;
    priority: number;
    changeFrequency: "yearly" | "monthly";
  }[] = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" },
    { path: "/aft-calculator", priority: 0.9, changeFrequency: "monthly" },
    { path: "/calculator", priority: 0.9, changeFrequency: "monthly" },
    { path: "/min-max", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.5, changeFrequency: "yearly" },
    { path: "/cft", priority: 0.9, changeFrequency: "monthly" },
    { path: "/mdl", priority: 0.6, changeFrequency: "yearly" },
    { path: "/hrp", priority: 0.6, changeFrequency: "yearly" },
    { path: "/sdc", priority: 0.6, changeFrequency: "yearly" },
    { path: "/plk", priority: 0.6, changeFrequency: "yearly" },
    { path: "/spt", priority: 0.6, changeFrequency: "yearly" },
    { path: "/tmr", priority: 0.6, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
