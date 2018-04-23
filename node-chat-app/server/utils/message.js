var time = new Date().getTime();
var generateMessage = (from, text) => {
  return {
    from,
    text,
    time,
  };
};
module.exports = {generateMessage};
