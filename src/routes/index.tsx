import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Hearts } from "@/components/birthday/Hearts";
import {
  HeroScene,
  PhotoScene,
  LetterScene,
  SpecialScene,
  GiftScene,
  FinalScene,
} from "@/components/birthday/scenes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, Madhu ❤️" },
      {
        name: "description",
        content:
          "A handmade birthday surprise for Madhu — memories, a letter, and a little gift, one scene at a time.",
      },
      { property: "og:title", content: "Happy Birthday, Madhu ❤️" },
      {
        property: "og:description",
        content: "A handmade birthday surprise: memories, a letter, and a little gift.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
    ],
  }),
  component: Index,
});

function Index() {
  const [scene, setScene] = useState(0);
  const next = () => setScene((s) => s + 1);

  const scenes = [
    <HeroScene key="hero" next={next} />,
    <PhotoScene key="photos" next={next} />,
    <LetterScene key="letter" next={next} />,
    <SpecialScene key="special" next={next} />,
    <GiftScene key="gift" next={next} />,
    <FinalScene key="final" restart={() => setScene(0)} />,
  ];

  return (
    <main className="relative w-full overflow-x-hidden">
      <Hearts />
      <div key={scene}>{scenes[scene]}</div>
    </main>
  );
}
