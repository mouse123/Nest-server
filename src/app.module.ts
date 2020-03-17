import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [CatsModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
