import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10 gap-10">
      <h1 className="text-center">
        Are you looking to become a true web dev warrior?
      </h1>
      <div className="nes-container with-title is-centered bg-blue-200 md:w-[45rem]">
        <p className="title">Greetings!</p>
        <p>
          With 15 years of web development experience under my belt, I have a
          lot of tech stories to share. Join me as I passionately delve into my
          coding and task completion methods, offering valuable knowledge and
          insights along the way.
        </p>
      </div>

      <div className="nes-container is-rounded bg-white">
        <div className="flex flex-col items-center justify-center">
          <Image
            width={100}
            height={100}
            src={"/axe-and-shield.webp"}
            alt="Axe & Shield"
          />

          <p className="text-center">These are my skills</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <Link href="#" className="nes-badge">
              <span className="is-dark">Next.js</span>
            </Link>
            <Link href="#" className="nes-badge">
              <span className="is-primary">TypeScript</span>
            </Link>
            <Link href="#" className="nes-badge">
              <span className="is-warning">JavaScript</span>
            </Link>
            <Link href="#" className="nes-badge">
              <span className="is-success">Tailwind</span>
            </Link>
            <Link href="#" className="nes-badge">
              <span className="is-dark">Shadcn</span>
            </Link>
            <Link href="#" className="nes-badge">
              <span className="is-success">Warrior</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
