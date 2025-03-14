import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import { OrderStatus } from '../enum/order.enum';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsUUID('4')
  @IsOptional()
  id: number;

  @IsEnum(OrderStatus, { message: `Possible status values are ${OrderStatus}` })
  @IsOptional()
  status: OrderStatus;
}
