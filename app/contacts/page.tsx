import Image from 'next/image';
import HeroImage from '@/app/assets/images/hero7.webp';

const Page = () => (
  <section className="w-full py-12 text-center mx-auto px-4 sm:px-6 lg:px-8 z-20">
    <h1 className="big-title uppercase">Achieve your fitness goals</h1>
    <div className="relative">
      <Image
        src={HeroImage}
        alt="image"
        width={1112}
        className="w-full h-[300px] md:h-[600px] object-cover rounded-[4rem]"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-9">
        <h2 className="text-white big-title">
          track your <br />
          progress
        </h2>
      </div>
    </div>
  </section>
);

export default Page;
