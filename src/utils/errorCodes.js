const ERRORS = {
  WRONG_PASSWORD: {
    name: 'WrongPasswordError',
    message: 'WrongPasswordError',
    explanation:
      'you are entering wrong password. Please try again later with some other password.',
    code: 1,
    httpStatusCode: 400,
  },

  VENDOR_ALREADY_EXIST: {
    name: 'VendorAlreadyExistError',
    message: 'Vendor Already Exist Error',
    explanation:
      'Vendor Already exist.',
    code: 4,
    httpStatusCode: 400,
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
  },
  UN_AUTHORIZE: {
    name: "UnAuthorize",
    message: "Unauthorized ",
    explanation:
      "An unexpected error occurred while processing your request. Please try again later.",
    code: 5,
    httpStatusCode: 403,
  },
  INVALID_TOKEN: {
    name: 'InvalidToken',
    message: 'Your session has expired, please log in again',
    explanation:
      'An unexpected error occurred while processing your request. Please try again later.',
    code: 3025,
    httpStatusCode: 401,
  },


  INTERNAL_SERVER_ERROR: {
    name: 'InternalServerError',
    message: 'Internal Server Error',
    explanation:
      'An unexpected error occurred while processing your request. Please try again later.',
    code: 1004,
    httpStatusCode: 500,
  },
  RPF_NOT_EXIST: {
    name: 'RpfNotExitError',
    message: 'RpfNotExitError',
    explanation:
      'Rpf Doesnt exist.',
    code: 4,
    httpStatusCode: 400,
  },
}
module.exports = ERRORS