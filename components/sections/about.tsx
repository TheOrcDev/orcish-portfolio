import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

export default function About() {
  return (
    <section
      id="about"
      className="bg-black flex flex-col justify-center items-center px-10 md:px-40"
    >
      <h2 className="text-white text-4xl font-bold">About Me</h2>
      <div className="h-[50rem] w-full bg-black bg-grid-small-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <TextGenerateEffect words={words} />
      </div>
    </section>
  );
}
