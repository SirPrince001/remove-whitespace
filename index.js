exports.removeWhiteSpace = function (string) {
  if (typeof string !== "string")
    throw new TypeError("plese enter string value");
  return string.replace(/\s/g, "").trim();
};
