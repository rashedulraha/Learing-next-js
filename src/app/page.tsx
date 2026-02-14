// import { SparklesPreview } from "@/components/SparklesPreview";
// import { BackgroundBoxesDemo } from "@/components/BackgroundBoxesDemo";
// import { DottedGlowBackgroundDemoSecond } from "@/components/DottedGlowBackgroundDemoSecond";
// import { SpotlightPreview } from "@/components/SpotlightPreview";

// import { DottedGlowBackgroundDemoSecond } from "@/components/DottedGlowBackgroundDemoSecond";
// import { SparklesPreview } from "@/components/SparklesPreview";
import { SpotlightPreview } from "@/components/SpotlightPreview";

// import { BackgroundBeamsDemo } from "@/components/BackgroundBeamsDemo";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <SpotlightPreview />
        {/*adding more ui using shadcn and aceternity */}
        {/* <SparklesPreview /> */}
        {/*  more bg  */}
        {/* <BackgroundBoxesDemo /> */}
        {/* <DottedGlowBackgroundDemoSecond /> */}

        {/* <BackgroundBeamsDemo /> */}
      </main>
    </div>
  );
}
