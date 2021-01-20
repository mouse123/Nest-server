import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//数据库模块
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm'
//子模块
import { CatsModule } from './cats/cats.module';
import { CompanyModule } from './company/company.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '106.53.108.154',
      port: 3306,
      username: 'root',
      password: 'Root123456.',
      database: 'Database1',
      entities: [__dirname+ '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    CatsModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection){} //建立连接
}
