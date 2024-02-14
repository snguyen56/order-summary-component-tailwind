import icon from "./assets/icon-music.svg";
import banner from "./assets/illustration-hero.svg";

function App() {
  return (
    <main className="grid h-screen w-screen place-items-center bg-pale-blue bg-[url('./assets/pattern-background-mobile.svg')] bg-no-repeat sm:bg-[url('./assets/pattern-background-desktop.svg')] sm:bg-repeat-x">
      <div className=" h-[567px] w-[327px] overflow-hidden rounded-[20px] bg-white text-center drop-shadow-2xl md:h-[697px] md:w-[450px]">
        <img src={banner} alt="illustration hero" />
        <h1 className="mt-[30px] text-[22px] font-black text-dark-blue md:mt-[43px] md:text-[28px]">
          Order Summary
        </h1>
        <p className="mt-[15px] px-10 text-[15px] font-medium leading-6 text-desaturated-blue md:px-16 md:text-base md:leading-[26px]">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="mx-6 mt-[26px] flex items-center justify-between rounded-xl bg-very-pale-blue px-4 py-4 md:mx-12 md:mt-[20px] md:px-6 md:py-6">
          <div className="flex items-center gap-[20px]">
            <img src={icon} alt="music symbol icon" />
            <div className="text-[14px] md:text-base">
              <h2 className="font-black  text-dark-blue">Annual Plan</h2>
              <p className="font-medium  text-desaturated-blue">$59.99/year</p>
            </div>
          </div>
          <a className="cursor-pointer text-[13px] font-bold text-bright-blue underline hover:text-bright-blue/75 hover:no-underline">
            Change
          </a>
        </div>
        <div className="mt-[24px] flex flex-col gap-6 px-6 text-[15px] md:mt-[32px] md:gap-8 md:px-12">
          <button className="rounded-xl bg-bright-blue py-[14px] font-bold text-white shadow shadow-bright-blue hover:bg-bright-blue/75">
            Proceed to Payment
          </button>
          <a className="cursor-pointer font-bold text-desaturated-blue hover:text-dark-blue">
            Cancel Order
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;
