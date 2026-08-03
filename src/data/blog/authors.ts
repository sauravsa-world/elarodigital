import sauravAsset from "@/assets/saurav.png.asset.json";
import piyushAsset from "@/assets/piyush.png.asset.json";

export type BlogAuthor = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  credentials: string[];
};

export const blogAuthors: BlogAuthor[] = [
  {
    id: "saurav",
    name: "Saurav Kumar",
    role: "Founder, Web Developer & Social Media Strategist — ElaroDigital, Gaya",
    bio: "Saurav founded ElaroDigital in Gaya, Bihar and has built and optimized websites, funnels and social media systems for schools, clinics, builders and retail brands across Bihar. He writes about web development, conversion design and brand growth for local businesses.",
    image: sauravAsset.url,
    credentials: [
      "8+ years building websites and funnels for Indian SMBs",
      "Works hands-on with clients in Gaya, Patna and across Bihar",
      "Specialises in conversion-focused design and Core Web Vitals",
    ],
  },
  {
    id: "piyush",
    name: "Piyush Kumar",
    role: "SEO & Performance Marketing Lead — ElaroDigital, Gaya",
    bio: "Piyush leads SEO and paid performance at ElaroDigital. He has run local SEO and Google/Meta ad campaigns for hospitals, coaching institutes, restaurants and real estate firms in Gaya, Patna and other Bihar cities, and writes about search intent, Maps ranking and lead economics.",
    image: piyushAsset.url,
    credentials: [
      "Manages local SEO and Maps ranking for Bihar businesses",
      "Runs Google Ads and Meta Ads with lead-cost accountability",
      "Google Business Profile and technical SEO specialist",
    ],
  },
];

export function getAuthor(id: string) {
  return blogAuthors.find((a) => a.id === id) ?? blogAuthors[0];
}