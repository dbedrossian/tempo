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
  },
  // checkMedia: (media_type, media_url, alt_text="") => {
  //   if(media_type === 'image') {
  //     // let imgEl = document.createElement('img');
  //     // imgEl.src = media_url;
  //     // imgEl.alt = alt_text;
  //     // return imgEl;
  //     let imgEl = $('<img></img>')
  //     imgEl.attr('src', media_url);
  //     imgEl.attr('alt', alt_text);
  //     return imgEl.html();
  //   }
  // }
};
