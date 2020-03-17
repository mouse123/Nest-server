import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get(':id')
  async getOneCompany(@Param('id') id: number) {
    return this.companyService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
