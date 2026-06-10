export const social = [
  { url: "mailto:rupam13@hotmail.com", name: "mail" },
  { url: "https://github.com/rupam13", name: "github" },
  { url: "https://www.linkedin.com/in/rupam-wadibhasme-82832912a/", name: "linkedin" },
  { url: "https://x.com/rupam_w", name: "x" },
  //{ url: "https://www.instagram.com/davidhckh/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
