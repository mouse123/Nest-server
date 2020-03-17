import { Injectable, HttpService } from '@nestjs/common';
import { Interface } from './interfaces/company.interface';

@Injectable()
export class CompanyService {
  constructor(private readonly http: HttpService) {}
  private readonly company: Interface[] = [];

  async findOne(id: number) {
    try {
      const res = await this.http.get(`https://www.itjuzi.com/api/companies/${id}?type=basic`).toPromise();
      return res.data.data
    } catch (error) {
      console.log(error)
      return []
    }
    
  }
}
