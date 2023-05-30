import Icons from "@/components/Icons";
import Image from "next/image";
import HeroImage from "@/images/hero.png";
import ReactImage from "@/images/reactjs.jpg";
import NextImage from "@/images/nextjs.jpg";
import NodeImage from "@/images/nodejs.jpg";
import ExpressImage from "@/images/expressjs.png";
import TypescriptImage from "@/images/typescript.png";
import IconBox from "@/components/IconBox";
import EntranceAnimation from "@/components/EntranceAnimation";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse items-center justify-center py-7 md:flex-row">
      <EntranceAnimation className="duration-1000 md:w-1/2" inScopeClass="visible block translate-y-0" outScopeClass="invisible -translate-y-2/4">
        <div>
          <h1 className="mb-5 mt-6 text-5xl font-bold md:text-6xl">
            <span className="text-blue-700 dark:text-blue-500">Full-Stack</span> Developer
          </h1>
          <p className="text-lg dark:text-gray-300">
            Hi, I am Imad, a skilled full-stack developer proficient in ReactJS, NextJS, and ExpressJS, dedicated to delivering exceptional web applications.
          </p>
          <div className="mt-4">
            <IconBox title="Github Profile">
              <Icons.Github className="text-gray-900 dark:text-gray-50" />
            </IconBox>
            <IconBox title="LinkedIn Profile">
              <Icons.Linkedin className="text-blue-600 dark:text-blue-500" />
            </IconBox>
          </div>
          <h2 className="mb-4 mt-5 text-2xl">Tech Stack</h2>
          <div className="flex space-x-5">
            <Image src={TypescriptImage} alt="typescript logo" width={60} height={60} className="rounded-full object-center" title="TypeScript" />
            <Image src={ReactImage} alt="typescript logo" width={60} height={60} className="rounded-full object-center" title="ReactJS" />
            <Image src={NextImage} alt="typescript logo" width={60} height={60} className="rounded-full object-center" title="NextJS" />
            <Image src={NodeImage} alt="typescript logo" width={60} height={60} className="rounded-full object-center" title="NodeJS" />
            <Image src={ExpressImage} alt="typescript logo" width={60} height={60} className="rounded-full object-center" title="ExpressJS" />
          </div>
        </div>
      </EntranceAnimation>
      <EntranceAnimation className="delay-200 duration-1000 md:w-1/2" inScopeClass="scale-100" outScopeClass="scale-0">
        <div className="items-center justify-center md:flex">
          <Image src={HeroImage} alt="personal image" width={300} />
        </div>
      </EntranceAnimation>
    </section>
  );
}
