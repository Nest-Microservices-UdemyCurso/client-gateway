import { Type } from "class-transformer"
import { IsEnum, IsOptional, IsPositive } from "class-validator"
import { envs } from "src/config/envs"
import { StatusDto } from "src/orders/dto"
import { OrderStatus } from "src/orders/enum/order.enum"

export class PaginationDto {
    
    @IsPositive()
    @IsOptional()
    @Type(() => Number)
    page: number = envs.page
    
    @IsPositive()
    @IsOptional()
    @Type(() => Number)
    limit: number = envs.limit

    @IsEnum(OrderStatus, { message: `Possible status values are ${OrderStatus}` })    
    @IsOptional()
    status: StatusDto

}