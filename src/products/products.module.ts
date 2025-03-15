import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { TransportModule } from 'src/transport/nats.module';

@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [TransportModule],
})
export class ProductsModule {}
