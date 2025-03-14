import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { TransportModule } from 'src/transport/nats.module';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [TransportModule],
})
export class OrdersModule {}
