import logo from '../../assets/logo.png';
import mailIcon from '../../assets/mail-icon.png';

const MailBox = function () {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <img className="h-12 w-12 mb-0" src={mailIcon} alt="Email Logo" />
      </div>
      <div>
        <p className="text-base text-left sm:text-center tablet:text-right mb-px text-pink-400">
          Hey Theo! 🌻
        </p>
        <div className="mail-notification-title text-xl font-medium text-black text-left">
          Send Emails
        </div>
        <p className="chat-notification-message text-slate-500">
          You have a new message!
        </p>
      </div>
    </div>
  );
};

const Product = function () {
  return (
    <div
      id="animated-element"
      className="group relative m-6 h-64 w-64 opacity-0 transform transition-all delay-150 duration-500 ease-out animate-fade-in-up"
    >
      <img
        src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/s9-case-unselect-gallery-1-202403_GEO_VN_FMT_WHH?wid=752&hei=720&fmt=p-jpg&qlt=80&.v=1708729783552"
        alt="Delightful Image"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 backdrop-brightness-100 backdrop-filter transition-all duration-200 ease-in-out group-hover:bg-white/50 group-hover:backdrop-brightness-105"></div>
    </div>
  );
};

export default function AuthHeader() {
  return (
    <header className="container-md flex flex-col items-center mt-8 mb-8 tablet:mb-16">
      <img
        src={logo}
        alt="A canvas"
        className="object-contain mb-8 w-44 h-44"
      />
      <h1 className="text-xl tablet:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
      <div className="flex">
        <Product />
        <Product />
      </div>
      <MailBox />
    </header>
  );
}
