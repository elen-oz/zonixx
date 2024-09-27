import Image from 'next/image';
import HeroImg from '@/app/assets/images/hero5.webp';

const StartSection = () => (
  <section className="w-full py-6 text-center mx-auto px-4 sm:px-6 lg:px-8 z-20">
    <div className="flex items-center justify-center">
      <h2 className="text-xl sm:text-3xl md:text-4xl mt-7">
        push yourself harder to become better
      </h2>
    </div>

    <div className="relative">
      <Image
        src={HeroImg}
        alt="image"
        width={1112}
        className="w-full h-[300px] md:h-[600px] object-cover rounded-[4rem]"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-9">
        <h2 className="text-white big-title text-xl sm:text-4xl md:text-6xl">
          <span className="font-heading text-violet-900/95 text-xl sm:text-4xl md:text-6xl">
            Start search
          </span>{' '}
          by <br />
          body part, <br />
          target muscle <br />
          or exercise name
        </h2>
      </div>
    </div>
  </section>
);

export default StartSection;
