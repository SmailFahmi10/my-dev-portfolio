import { profile } from "@/lib/profile";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-x-8 gap-y-2 px-5 pb-8 pt-0 font-mono text-xs text-background/60 sm:px-8">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <p>{profile.location}</p>
    </div>
  </footer>
);

export default Footer;
