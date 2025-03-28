"use client";
import List03 from "@/components/globals/list";
import HomeButtons from "@/components/ui/home-buttons";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  const words = "Gerencie seus serviços com a Kyper";

  const description =
    "Deixe a forma que você organiza os processos de sua assistência técnica mais eficiente.";

  return (
    <main className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full">
        <div className="relative  w-full h-full flex justify-center min-h-[calc(100vh-4.5rem)] mt-20 overflow-hidden bg-[linear-gradient(to_right,transparent_1%,var(--gray-50)_10%,var(--gray-50)_90%,transparent_99%)] py-4 dark:bg-[linear-gradient(to_right,transparent_0%,var(--neutral-950)_10%,var(--neutral-950)_90%,transparent_100%)] md:py-10">
          <div className="container px-4">
            <div className="mb-10">
              <TextGenerateEffect
                duration={2}
                filter={false}
                words={words}
                className=" scroll-m-20  text-2xl md:text-3xl font-bold tracking-tight text-black dark:text-white text-left"
              />
              <TextGenerateEffect
                duration={1}
                filter={false}
                words={description}
                delay={0.5}
                className="mb-6 scroll-m-20 text-sm md:text-md text-muted-foreground dark:text-muted-foreground text-left"
              />

              <HomeButtons />
            </div>
            <List03 />
          </div>
        </div>
      </div>
    </main>
  );
}
