/**
 * @description
 * It is procedural function.
 * JS ECMA6
 * @author Nikola Lukic
 * @www maximumroulette.com
 */
export let protect = (db, dc, vc) => {

  if(typeof vc !== 'undefined') {
    document.addEventListener("visibilitychange", vc);
  }

  if(typeof dc !== 'undefined') {
    const noop = function() {};
    console.log = noop;
    console.info = noop;
    console.warn = noop;
    // console.error = noop;
    console.debug = noop;
    console.trace = noop;
    // console.time = noop;
    // console.timeEnd = noop;
    // console.timeLog = noop;

    // console.group = noop;
    // console.groupCollapsed = noop;
    // console.groupEnd = noop;

    // console.table = noop;
    // console.dir = noop;
    // console.dirxml = noop;

    // console.clear = noop;
    // console.count = noop;
    // console.countReset = noop;
    // console.assert = noop;
  }

  if(typeof db !== 'undefined') {
    if(window.innerHeight < window.outerHeight) {
      let test = window.outerHeight - window.innerHeight;
      if(test > 100) {
        location.assign('https://banned.from.web.app.not.existing__');
      }
    }

    if(window.innerWidth < window.outerWidth) {
      let testW = window.outerWidth - window.innerWidth;
      if(testW > 100) {
        location.assign('https://banned.from.web.app.not.existing__');
      }
    }

    window.addEventListener('keydown', (e) => {
      if(e.code == "F12" || e.code == "F5") {
        e.preventDefault();
        // console.error(`Prevented`);
        return false;
      }
    });
  }
}