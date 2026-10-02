import CTAButton from "../components/CTAButton";

function EmbraceChange() {
  return (
    <div className="bg-theme-dark-green/40 bg-[url(./assets/background-2.jpg)] bg-cover bg-fixed bg-bottom bg-no-repeat bg-blend-multiply">
      <div className="z-20 h-20 w-full rounded-b-4xl bg-white"></div>
      <div className="container-big flex flex-col items-center justify-center gap-10 py-50! text-center text-white">
        <h2 className="text-4xl">
          Ready to <span className="italic">embrace</span> change?
        </h2>
        <p className="font-mono">
          Egestas convallis habitasse cursus mattis vestibulum iaculis cubilia
          ut volutpat. Dictumst quis pharetra neque convallis inceptos fusce
          augue curae. Hendrerit eu leo sem aenean potenti ridiculus atoque
          dictumst.
        </p>
        <CTAButton text={"Schedule a free call"} />
      </div>
      <div className="bg-theme-green z-10 h-20 w-full rounded-t-4xl"></div>
      {/* <div className="absolute top-0 z-0 h-full w-full bg-black/20"></div> */}
    </div>
  );
}

export default EmbraceChange;
