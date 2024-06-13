import logo from '../../assets/logo.png';
import mailIcon from '../../assets/mail-icon.png';
import styles from '../../pages/AuthInputs/AuthInputs.module.css';

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

export default function AuthHeader() {
  return (
    <header className="container-md">
      <img src={logo} alt="A canvas" />
      <h1 className={styles['header-h1']}>ReactArt</h1>
      <p className={styles['header-p']}>
        A community of artists and art-lovers.
      </p>
      <MailBox />
    </header>
  );
}
