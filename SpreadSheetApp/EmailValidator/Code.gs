function isEmail(input) {
  var check = /\S+@\S+\.\S+/;
  return check.test(input);
}
