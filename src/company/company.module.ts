import { Module, HttpModule } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [HttpModule],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
