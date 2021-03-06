(function () {
  'use strict';
  function ErrorInfo(line, column, msg) {
    this.line = line;
    this.column = column;
    this.msg = msg;
  }
  var ErrorHandler = {};
  ErrorHandler.errors = [];
  ErrorHandler.addRedefinition = function (token, type, id) {
    var msg = type + ' ' + id + ' is already defined';
    this.errors.push(new ErrorInfo(token.line, token.column, msg));
  };
  ErrorHandler.addUndefinition = function (token, type, id) {
    var msg = type + ' ' + id + ' has not been defined';
    this.errors.push(new ErrorInfo(token.line, token.column, msg));
  }
  ErrorHandler.addWrongGenre = function (token, expression, current, id) {
    var msg = "'" + id + "' is not a '" + expression + "' but a '" + current + "'";
    this.errors.push(new ErrorInfo(token.line, token.column, msg));
  }
  ErrorHandler.addWrongType = function (token, expression, current, id) {
    var msg = "'" + id + "' should be a(n) " + expression + " value, not a(n) " + current + " value";
    this.errors.push(new ErrorInfo(token.line, token.column, msg));
  }
  ErrorHandler.addWrongParameterNum = function (token, current, count, id) {
    var msg = "method '" + id + "' wrong argument(s): (" + current + " for " + count + ")";
    this.errors.push(new ErrorInfo(token.line, token.column, msg));
  }
  ErrorHandler.addReturnWrongType = function (token, expression) {
    var msg = "return type should be " + expression;
    this.errors.push(new ErrorInfo(token.line, token.column, msg));
  }
  ErrorHandler.getErrors = function () {
    return this.errors;
  };
  exports.ErrorHandler = ErrorHandler;
})();