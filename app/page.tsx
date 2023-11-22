import Image from "next/image";

import ServiceBox from "./components/ServiceBox";
import ContactBox from "./components/ContactBox";
import Subscribe from "./components/Subscribe";
import SectionTitle from "@/components/shared/SectionTitle";
import Slider from "./components/Slider";

import { contacts, services } from "@/constants";

export default function Home() {
  return (
    <main>
      <section
        style={{ backgroundImage: `url('/images/home/hero.jpg')` }}
        className="min-h-screen bg-cover bg-center bg-no-repeat"
      >
        <div className="flex min-h-screen items-center justify-center">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Image
                src="/svg/logo.svg"
                alt="logo"
                width={110}
                height={122}
                // className="duration-500 animate-in fade-in zoom-in"
              />
              <Image
                src="/svg/v-line.svg"
                alt="line"
                width={2}
                height={80}
                className="hidden h-20 w-1 md:inline-block"
              />
              <Image
                src="/svg/luca.svg"
                alt="luca"
                width={260}
                height={80}
                // className="delay-1000 duration-500 animate-in fade-in slide-in-from-left"
              />
              <Image
                src="/svg/squad.svg"
                alt="squad"
                width={325}
                height={100}
                // className="delay-[1500ms] duration-500 animate-in fade-in slide-in-from-left"
              />
            </div>
            <div className="mt-3 text-center md:mt-0">
              <p className="text-lg font-medium text-white">
                Where your construction dreams come to life{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="my-16">
            <SectionTitle primaryText="OUR" secondaryText="SERVICES" />
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-6 xs:justify-center lg:justify-start">
            {services.map((item) => (
              <ServiceBox key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto my-16">
          <Slider />
        </div>
      </section>

      <section>
        <div className="container mx-auto mb-32 mt-52">
          <div className="flex flex-wrap items-center gap-6">
            {contacts.map((item) => (
              <ContactBox key={item.title} item={item} />
            ))}

            <Subscribe />
          </div>
        </div>
      </section>
    </main>
  );
}
