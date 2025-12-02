const ERRORS = {
  WRONG_PASSWORD: {
    name: 'WrongPasswordError',
    message: 'WrongPasswordError',
    explanation:
      'you are entering wrong password. Please try again later with some other password.',
    code: 1,
    httpStatusCode: 400,
  },
  VENDOR_NOT_ACTIVE: {

  },

  VENDOR_ALREADY_EXIST: {

  },
  VENDOR_NOT_EXIST: {
    name: 'VendorNotExitError',
    message: 'VendorNotExitError',
    explanation:
      'Vendor Doesnt exist.',
    code: 4,
    httpStatusCode: 400,
  },
  USER_NOT_FOUND: {
    name: 'UserNotFoundError',
    message: 'User Not Found Error',
    explanation:
      'User Doesnt exist.',
    code: 4,
    httpStatusCode: 400,
  }

}
module.exports = ERRORS