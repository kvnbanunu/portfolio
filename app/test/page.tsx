import { Settings } from "@/components/kh/Settings";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-white">
      <Button asChild className="bg-khd-base">
        <Link href="/">Home</Link>
      </Button>
      <Settings />
    </div>
  );
}
