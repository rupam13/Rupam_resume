export const social = [
  { url: "mailto:rupam13@hotmail.com", name: "mail" },
  { url: "https://wa.me/918857851277?text=Hi%20Rupam%2C", name: "whatsapp" },
  { url: "https://github.com/rupam13", name: "github" },
  { url: "https://www.linkedin.com/in/rupam-wadibhasme-82832912a/", name: "linkedin" },
  { url: "https://x.com/rupam_w", name: "x" },
] as const satisfies { url: string; name: "mail" | "whatsapp" | "github" | "instagram" | "linkedin" | "x" }[];
