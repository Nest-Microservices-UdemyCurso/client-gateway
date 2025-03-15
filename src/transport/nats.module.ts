import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, NATS_SERVICE } from 'src/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: NATS_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: [process.env.NATS_SERVER || 'nats://nats-server:4222'], // Esto es para desplegar
          // servers: envs.natsServer,  // Esto es para local
        },
      },
    ]),
  ],
  exports: [
    ClientsModule.register([
      {
        name: NATS_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: [process.env.NATS_SERVER || 'nats://nats-server:4222'], // Esto es para desplegar
          // servers: envs.natsServer,    // Esto es para local
        },
      },
    ]),
  ],
})
export class TransportModule {}
