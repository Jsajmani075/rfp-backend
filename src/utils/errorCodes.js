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
    code: 2,
    httpStatusCode: 400,
  },
  VENDOR_NOT_EXIST: {
    name: 'VendorNotExistError',
    message: 'VendorNotExistError',
    explanation:
      'Vendor Doesnt exist.',
    code: 3,
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

  INTERNAL_SERVER_ERROR: {
    name: 'InternalServerError',
    message: 'Internal Server Error',
    explanation:
      'An unexpected error occurred while processing your request. Please try again later.',
    code: 5,
    httpStatusCode: 500,
  },
  RPF_NOT_EXIST: {
    name: 'RpfNotExistError',
    message: 'RpfNotExistError',
    explanation:
      'Rpf Doesnt exist.',
    code: 6,
    httpStatusCode: 400,
  },
  PROPOSAL_NOT_FOUND: {
    name: 'ProposalNotFoundError',
    message: 'Proposal Not Found Error',
    explanation:
      'Proposal Not Found Error',
    code: 7,
    httpStatusCode: 400,
  },
  REQUEST_VALIDATION_ERROR: {
    name: "RequestValidationError",
    message: "Request Validation Error",
    explanation:
      "The response data structure does not match the expected schema.",
    code: 8,
    httpStatusCode: 400,
  },
}
module.exports = ERRORS