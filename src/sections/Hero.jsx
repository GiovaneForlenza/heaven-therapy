import therapist1 from "../assets/therapist-1.jpg";
import CTAButton from "../components/CTAButton";

function Hero() {
  return (
    <div className="bg-theme-beige py-40">
      <div className="container-big">
        <div className="flex flex-col-reverse gap-4 md:inline">
          <div
            className={`bg-theme-green right-0 w-full overflow-hidden rounded-2xl md:absolute md:w-[45%] md:rounded-l-4xl`}
          >
            <img src={therapist1} alt="" className="" />
          </div>
          <div className="flex flex-col gap-4 md:w-[50%] md:gap-8">
            <h4>Online Trauma therapy in california</h4>
            <h1 className="text-5xl font-thin">
              Create Your Heaven: Embrace <span className="italic">Change</span>
              , Discover <span className="italic">Yourself</span>
            </h1>
            <CTAButton text={"Schedule a free call"} color={"green"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
