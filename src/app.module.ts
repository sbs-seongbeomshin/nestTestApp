import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BmsModule } from './bms.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:20032/bms', {
      connectionName: 'bms',
    }),
    MongooseModule.forRoot('mongodb://localhost:20032/inverter', {
      connectionName: 'inverter',
    }),
    BmsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
