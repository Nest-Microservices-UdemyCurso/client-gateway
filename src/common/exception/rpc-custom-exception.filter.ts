import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class RpcCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const rpcError = exception.getError();
    
    if ( typeof rpcError === 'object' && 'status' in rpcError && 'message' in rpcError ) {
       const status = isNaN(rpcError.status as number) ? 401 : rpcError.status as number;
       return response.status(status).json(rpcError);
    } 
    
   response.status(401).json({
      status: 401,
      message: rpcError,
    });

  }
}
