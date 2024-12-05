interface WelcomePageProps {
  setPage: (value: number) => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ setPage }) => {
  setTimeout(() => {
    setPage(2);
  }, 2000);
  return (
    <div>
      <div className="bg-slate-200 relative w-full h-screen flex flex-col justify-center items-center">
        <img src="background/welcomeBG.png" alt="" className="h-full fixed" />
        <img src="background/Rectangle.svg" alt="" className="h-full fixed" />
        <div className="absolute bottom-14 flex flex-col gap-7 w-80 px-4">
          <p className="text-white text-4xl font-semibold">Welcome to</p>
          <p className="text-white text-6xl font-bold">Shoea</p>
          <p className="text-white text-base font-semibold">
            The best sneakers & shoes e-commerse app of the century for your
            fashion needs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
