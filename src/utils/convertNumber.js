// eslint-disable-next-line no-unused-vars
export const convertNumber = (num) => {
  var str = "" + num;
  var pad = "000";
  var ans = pad.substring(0, pad.length - str.length) + str;
  return ans;
};
