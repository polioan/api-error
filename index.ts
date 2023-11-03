interface EsNextErrorOptions {
  cause?: unknown
}

export interface ApiErrorOptions extends EsNextErrorOptions {
  message: string
  status: number
}

export class ApiError extends Error {
  public status: number

  constructor({ message, cause, status }: ApiErrorOptions) {
    super()

    this.message = message
    this.cause = cause

    this.status = status

    this.name = 'ApiError'
  }

  public static badRequest(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 400, message, cause: options?.cause })
  }

  public static unauthorized(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 401, message, cause: options?.cause })
  }

  public static paymentRequired(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 402, message, cause: options?.cause })
  }

  public static forbidden(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 403, message, cause: options?.cause })
  }

  public static notFound(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 404, message, cause: options?.cause })
  }

  public static methodNotAllowed(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 405, message, cause: options?.cause })
  }

  public static notAcceptable(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 406, message, cause: options?.cause })
  }

  public static proxyAuthenticationRequired(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 407, message, cause: options?.cause })
  }

  public static requestTimeout(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 408, message, cause: options?.cause })
  }

  public static conflict(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 409, message, cause: options?.cause })
  }

  public static gone(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 410, message, cause: options?.cause })
  }

  public static lengthRequired(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 411, message, cause: options?.cause })
  }

  public static preconditionFailed(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 412, message, cause: options?.cause })
  }

  public static payloadTooLarge(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 413, message, cause: options?.cause })
  }

  public static uriTooLong(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 414, message, cause: options?.cause })
  }

  public static unsupportedMediaType(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 415, message, cause: options?.cause })
  }

  public static rangeNotSatisfiable(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 416, message, cause: options?.cause })
  }

  public static expectationFailed(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 417, message, cause: options?.cause })
  }

  public static imaTeapot(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 418, message, cause: options?.cause })
  }

  public static misdirectedRequest(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 421, message, cause: options?.cause })
  }

  public static unprocessableEntity(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 422, message, cause: options?.cause })
  }

  public static locked(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 423, message, cause: options?.cause })
  }

  public static failedDependency(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 424, message, cause: options?.cause })
  }

  public static tooEarly(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 425, message, cause: options?.cause })
  }

  public static upgradeRequired(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 426, message, cause: options?.cause })
  }

  public static preconditionRequired(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 428, message, cause: options?.cause })
  }

  public static tooManyRequests(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 429, message, cause: options?.cause })
  }

  public static requestHeaderFieldsTooLarge(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 431, message, cause: options?.cause })
  }

  public static unavailableForLegalReasons(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 451, message, cause: options?.cause })
  }

  public static internalServerError(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 500, message, cause: options?.cause })
  }

  public static notImplemented(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 501, message, cause: options?.cause })
  }

  public static badGateway(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 502, message, cause: options?.cause })
  }

  public static serviceUnavailable(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 503, message, cause: options?.cause })
  }

  public static gatewayTimeout(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 504, message, cause: options?.cause })
  }

  public static httpVersionNotSupported(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 505, message, cause: options?.cause })
  }

  public static variantAlsoNegotiates(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 506, message, cause: options?.cause })
  }

  public static insufficientStorage(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 507, message, cause: options?.cause })
  }

  public static loopDetected(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 508, message, cause: options?.cause })
  }

  public static notExtended(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 510, message, cause: options?.cause })
  }

  public static networkAuthenticationRequired(
    message: string,
    options?: EsNextErrorOptions | undefined
  ) {
    return new ApiError({ status: 511, message, cause: options?.cause })
  }
}
