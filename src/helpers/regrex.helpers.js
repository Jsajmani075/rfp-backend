const extractEmail = (str) => {
  const match = str.match(/<([^>]+)>/);
  return match ? match[1] : str;
};
module.exports = extractEmail