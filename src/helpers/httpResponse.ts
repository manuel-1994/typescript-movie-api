import { Response } from "express";

enum HttpStatus{
  OK = 200,
  CREATED = 201,
  BAD_REQUETS = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

export default class HttpResponse{
  public Ok(res:Response, data:any):Response{
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      statusMsg: "Success",
      data
    })
  }

  public Created(res:Response, data:any):Response{
    return res.status(HttpStatus.CREATED).json({
      status: HttpStatus.CREATED,
      statusMsg: "Created",
      data
    })
  }

  public BadRequest(res:Response, error:string):Response{
    return res.status(HttpStatus.BAD_REQUETS).json({
      status: HttpStatus.BAD_REQUETS,
      statusMsg: "Bad Request",
      error
    })
  }

  public Unauthorized(res:Response, error:string):Response{
    return res.status(HttpStatus.UNAUTHORIZED).json({
      status: HttpStatus.UNAUTHORIZED,
      statusMsg: "Unauthorized",
      error
    })
  }

  public Forbidden(res:Response, error:string):Response{
    return res.status(HttpStatus.FORBIDDEN).json({
      status: HttpStatus.FORBIDDEN,
      statusMsg: "Forbidden",
      error
    })
  }

  public NotFound(res:Response, error:string):Response{
    return res.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      statusMsg: "Not found",
      error
    })
  }

  public Error(res:Response, error:any):Response{
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      statusMsg: "Internal server error",
      error
    })
  }
}