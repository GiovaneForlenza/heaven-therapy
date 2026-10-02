import HelpCards from "../components/HelpCards";

function HowCanIHelp() {
  return (
    <div
      className={`no-repeat overflow-hidden bg-[url(./assets/background.jpg)] bg-cover bg-fixed bg-no-repeat object-cover py-20`}
      //
    >
      <div className="container-large flex flex-col items-center justify-center gap-12">
        <h2 className="text-4xl text-white">How can I help</h2>
        <HelpCards />
      </div>
    </div>
  );
}

export default HowCanIHelp;
