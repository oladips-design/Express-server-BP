class ErrorRes extends Error {
  constructor(errMessage, statuscode) {
    super(errMessage);
    this.statuscode = statuscode;
  }
}

module.exports = ErrorRes;
