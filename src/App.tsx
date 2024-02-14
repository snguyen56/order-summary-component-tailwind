import icon from "./assets/icon-music.svg";
import banner from "./assets/illustration-hero.svg";

function App() {
  return (
    <main className="bg-pale-blue grid h-screen w-screen place-items-center bg-[url('./assets/pattern-background-mobile.svg')] bg-no-repeat sm:bg-[url('./assets/pattern-background-desktop.svg')] sm:bg-repeat-x">
      <div className=" h-[567px] w-[327px] overflow-hidden rounded-[20px] bg-white text-center drop-shadow-2xl md:h-[697px] md:w-[450px]">
        <img src={banner} alt="illustration hero" />
        <h1 className="text-dark-blue mt-[30px] text-[22px] font-black md:mt-[43px] md:text-[28px]">
          Order Summary
        </h1>
        <p className="text-desaturated-blue mt-[15px] px-10 text-[15px] font-medium leading-6 md:px-16 md:text-base md:leading-[26px]">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="bg-very-pale-blue mx-6 mt-[26px] flex items-center justify-between rounded-xl px-4 py-4 md:mx-12 md:mt-[20px] md:px-6 md:py-6">
          <div className="flex items-center gap-[20px]">
            <img src={icon} alt="music symbol icon" />
            <div className="text-[14px] md:text-base">
              <h2 className="text-dark-blue  font-black">Annual Plan</h2>
              <p className="text-desaturated-blue  font-medium">$59.99/year</p>
            </div>
          </div>
          <a
            href=""
            className="text-bright-blue hover:text-bright-blue/75 text-[13px] font-bold underline hover:no-underline"
          >
            Change
          </a>
        </div>
        <div className="mt-[24px] flex flex-col gap-6 px-6 text-[15px] md:mt-[32px] md:gap-8 md:px-12">
          <button className="bg-bright-blue shadow-bright-blue hover:bg-bright-blue/75 rounded-xl py-[14px] font-bold text-white shadow">
            Proceed to Payment
          </button>
          <a
            href=""
            className="text-desaturated-blue hover:text-dark-blue font-bold"
          >
            Cancel Order
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;
