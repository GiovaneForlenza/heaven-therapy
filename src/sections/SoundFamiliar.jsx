import { CheckCircleIcon } from "lucide-react";
import plantvase from "../assets/plant-vase.jpg";

function SoundFamiliar() {
  return (
    <div className="flex h-fit flex-col items-end py-16 md:relative">
      <div className="bg-theme-green float-end flex w-full flex-col items-center justify-center gap-8 rounded-b-4xl py-12 pb-32 text-white md:w-[80%] md:rounded-none">
        <h3 className="text-4xl">Sound familiar?</h3>
        <div className="flex max-w-100 flex-row gap-2">
          <CheckCircleIcon width={150} height={30} className="" />
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
        <div className="flex max-w-100 flex-row gap-2">
          <CheckCircleIcon width={150} height={30} className="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
        <div className="flex max-w-100 flex-row gap-2">
          <CheckCircleIcon width={150} height={30} className="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
      </div>
      <div className="relative m-auto -mt-20 w-fit overflow-hidden rounded-4xl md:absolute md:-left-10 md:mt-10 md:ml-20 md:w-[30%]">
        <img src={plantvase} alt="" className="m-auto" />
      </div>
    </div>
  );
}

export default SoundFamiliar;
