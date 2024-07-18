import { useState } from 'react';
import styles from './AuthInputs.module.css'; //👉 Import css modules stylesheet as styles
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import cityImg from '../../assets/city.png';
import doraImg from '../../assets/doremon.gif';

const Article = function (props) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden tablet:max-w-2xl font-sans">
      <div className="tablet:flex tablet:flex-col">
        <div className="tablet:shrink-0 tablet:grow">
          <img
            className="h-48 w-full object-cover tablet:h-full"
            src={props.img}
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8 text-center tablet:text-left">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {props.title}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {props.desc}
          </a>
          <p className="mt-2 text-slate-500">{props.content}</p>
          <button className="mt-2 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

const Contact = function () {
  return (
    <div className="relative mx-auto h-80 max-w-md overflow-hidden bg-white shadow-lg ring-1 ring-slate-900/5 dark:bg-slate-800 w-64 mt-6 tablet:mt-0">
      <div className="absolute left-0 right-0 top-0 flex items-center bg-slate-50/90 px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10 backdrop-blur-sm dark:bg-slate-700/90 dark:text-slate-200 dark:ring-black/10">
        Contacts
      </div>
      <div className="flex h-80 flex-col divide-y overflow-auto dark:divide-slate-200/5">
        <div className="flex items-center gap-4 p-4 items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
          />
          <strong className="text-sm font-medium text-slNameate-900 dark:text-slate-200">
            Andrew Alfred
          </strong>
        </div>
        <div className="flex items-center gap-4 p-4 items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
          />
          <strong className="text-sm font-medium text-slate-900 dark:text-slate-200">
            Debra Houston
          </strong>
        </div>
        <div className="flex items-center gap-4 p-4 items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
          />
          <strong className="text-sm font-medium text-slate-900 dark:text-slate-200">
            Jane White
          </strong>
        </div>
        <div className="flex items-center gap-4 p-4 items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
          />
          <strong className="text-sm font-medium text-slate-900 dark:text-slate-200">
            Ray Flint
          </strong>
        </div>
        <div className="flex items-center gap-4 p-4 items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
          />
          <strong className="text-sm font-medium text-slate-900 dark:text-slate-200">
            Mindy Albrect
          </strong>
        </div>
        <div className="flex items-center gap-4 p-4 items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
          />
          <strong className="text-sm font-medium text-slate-900 dark:text-slate-200">
            David Arnold
          </strong>
        </div>
      </div>
    </div>
  );
};

//⭐️ ❗️this Input Component should be imported from an external Module
const Input = function ({ label, invalid, ...props }) {
  //👉 Dynamic & Conditional Styling:
  let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase',
    inputClasses = 'w-full px-3 py-2 leading-tight border rounded shadow';

  if (invalid) {
    labelClasses += ' text-red-400';
    inputClasses += ' text-red-500 bg-red-100 border-red-300';
  } else {
    labelClasses += ' text-stone-300';
    inputClasses += ' text-gray-700 bg-stone-300';
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
};

export default function AuthInputsCssModules() {
  //⭐️ manage inputs with State
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  //⭐️
  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div className={`page-wrapper ${styles['page-wrapper-auth']}`}>
      <AuthHeader />
      <main>
        <form className="container-md tablet:flex">
          <div
            id="auth-inputs"
            className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-slate-800 "
          >
            {/* control */}
            <div className="flex flex-col gap-2 text-left mb-6">
              <Input
                type="email"
                label="Email"
                invalid={emailNotValid}
                onChange={event =>
                  handleInputChange('email', event.target.value)
                }
              />
              <Input
                type="password"
                label="Password"
                invalid={passwordNotValid}
                onChange={event =>
                  handleInputChange('password', event.target.value)
                }
              />
            </div>

            {/* action */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="text-amber-400 hover:text-amber-500"
              >
                Create a new account
              </button>
              <button
                className="px-4 py-2 font-semibold upppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500"
                onClick={handleLogin}
              >
                Sign In
              </button>
            </div>
          </div>
          <Contact />
        </form>
      </main>

      <article>
        <div className="container-md grid grid-cols-1 tablet:grid-cols-3 gap-7">
          {[
            {
              id: 'p1',
              img: `${cityImg}`,
              title: 'Company retreats',
              desc: 'Incredible accommodation for your team',
              content:
                'Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.',
            },
            {
              id: 'p2',
              img: `${cityImg}`,
              title: 'Company retreats',
              desc: 'Incredible accommodation for your team',
              content:
                'Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.',
            },
            {
              id: 'p3',
              img: `${cityImg}`,
              title: 'Company retreats',
              desc: 'Incredible accommodation for your team',
              content:
                'Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.',
            },
            {
              id: 'p4',
              img: `${doraImg}`,
              title: 'Company retreats',
              desc: 'Incredible accommodation for your team',
              content:
                'Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.',
            },
            {
              id: 'p5',
              img: `${doraImg}`,
              title: 'Company retreats',
              desc: 'Incredible accommodation for your team',
              content:
                'Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.',
            },
          ].map(({ id, img, title, desc, content }) => (
            <Article
              key={id}
              img={img}
              title={title}
              desc={desc}
              content={content}
            />
          ))}
        </div>
      </article>
    </div>
  );
}
