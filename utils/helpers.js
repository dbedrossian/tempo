module.exports = {
  format_time: (date) => {
    const options = { timeStyle: "short" }
    return date.toLocaleTimeString(undefined, options);
  },
  format_date: (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  },
  ifEquals: (a, b, options) => {
    if (a === b) {
      return options.fn(this);
      }
    
    return options.inverse(this);
  }
};
