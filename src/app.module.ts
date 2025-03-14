import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { TransportModule } from './transport/nats.module';

@Module({
  imports: [ProductsModule, OrdersModule, TransportModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
