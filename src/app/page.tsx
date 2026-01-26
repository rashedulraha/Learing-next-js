// import { SparklesPreview } from "@/components/SparklesPreview";
import { BackgroundBoxesDemo } from "@/components/BackgroundBoxesDemo";
// import { SpotlightPreview } from "@/components/SpotlightPreview";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        {/* <SpotlightPreview /> */}
        {/*adding more ui using shadcn and aceternity */}
        {/* <SparklesPreview /> */}
        {/*  more bg  */}
        <BackgroundBoxesDemo />
      </main>
    </div>
  );
}
