// src/performance/performance.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerformanceService } from './performance.service';
import { PerformanceController } from './performance.controller';
import { Vendor } from '../vendors/vendor.entity'; // Import Vendor entity if needed
import { PurchaseOrder } from '../purchase-orders/purchase-order.entity'; // Adjusted import path

@Module({
  imports: [
    TypeOrmModule.forFeature([Vendor, PurchaseOrder]), // Import repositories here
  ],
  providers: [PerformanceService],
  controllers: [PerformanceController],
})
export class PerformanceModule {}
