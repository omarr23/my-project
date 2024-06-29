import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [DatabaseModule, AdminsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
