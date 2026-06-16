import sauravAsset from "@/assets/saurav.png.asset.json";
import piyushAsset from "@/assets/piyush.png.asset.json";

export type TeamMember = { name: string; role: string; bio: string; image: string };

export const team: TeamMember[] = [
  {
    name: "Saurav Kumar",
    role: "Founder · Web Developer · Social Media Expert",
    bio: "Founded Elarodital with a single mission — build websites and brand presences that grow businesses, not just look pretty.",
    image: sauravAsset.url,
  },
  {
    name: "Piyush Kumar",
    role: "SEO & Meta Ads Expert",
    bio: "Engineers SEO rankings and high-ROAS Meta ad funnels. Obsessed with data, search intent and creative testing.",
    image: piyushAsset.url,
  },
];