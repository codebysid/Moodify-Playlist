class StandardError extends Error {
  constructor(status, message, stackTrace) {
    super(message);
    this.status = status;
    this.message = message;
    this.success = false;

    if (stackTrace) {
      this.stackTrace = stackTrace;
    } else {
      this.stackTrace = Error.captureStackTrace(this, this.constructor);
    }
  }
}

class StandardResponse {
  constructor(status, message, data) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.success = true;
  }
}

module.exports = { StandardError, StandardResponse };
