// Lightweight error class that carries an HTTP status code through to the
// centralized error handler middleware.
class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = ApiError;
