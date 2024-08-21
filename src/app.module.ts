import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VendorsModule } from './vendors/vendors.module';
import { PurchaseOrdersModule } from './purchase-orders/purchase-orders.module';
import { PerformanceModule } from './performance/performance.module';
import { Vendor } from './vendors/vendor.entity';
import { PurchaseOrder } from './purchase-orders/purchase-order.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Vendor, PurchaseOrder],
      synchronize: true,
    }),
    VendorsModule,
    PurchaseOrdersModule,
    PerformanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
