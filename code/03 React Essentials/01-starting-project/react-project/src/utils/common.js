export const KEY_USER = 'USER_ARRAY';

/**
 *
 * @returns {Boolean}
 */
const isSupported = function () {
  return typeof Storage !== 'undefined';
};

/**
 *
 * @param {String} key
 * @param {*} value
 */
export const setLocalStorage = function (key, value) {
  //check browser support for localStorage/sessionStorage
  if (isSupported()) localStorage.setItem(key, JSON.stringify(value));
  else throw new Error('Sorry! No Web Storage support..');
};

/**
 *
 * @param {String} key
 * @param {*} defaultVal
 *
 * @returns
 */
export const getLocalStorage = function (key, defaultVal = '') {
  //parse the stored value back into its original form
  if (isSupported()) return JSON.parse(localStorage.getItem(key)) ?? defaultVal;
  else console.log('Sorry! No Web Storage support..');
};

/**
 * @brief format Date based on locales
 *
 * @param {Date} date
 */
export const formatDate = function (date) {
  let localeBrowser, localeVI, localeUS, options;

  /**
   * @brief general configuration
   */
  const config = function () {
    //get locale from User's Browser
    localeBrowser = navigator.language;

    //Viet locale
    localeVI = 'vi-VN';

    //US locale
    localeUS = 'en-US';

    //formatting date & time
    options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
  };

  config();
  return new Intl.DateTimeFormat(localeUS, options).format(date);
};

/**
 *
 * @param {String} dateStr
 */
export const validateDateFormat = function (dateStr) {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  return regex.test(dateStr);
};

/**
 *  @brief handle image lazy loading
 */
export const lazyLoading = function () {
  const lazyImages = document.querySelectorAll('img.lazy-load');

  const obsCallback = function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove('lazy-load');
        lazyImageObserver.unobserve(lazyImage);
      }
    });
  };

  const obsOptions = {
    root: null,
    threshold: 0.05,
  };

  const lazyImageObserver = new IntersectionObserver(obsCallback, obsOptions);
  lazyImages.forEach(img => lazyImageObserver.observe(img));
};
