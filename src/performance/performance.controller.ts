// src/performance/performance.controller.ts
import { PerformanceService } from './performance.service';
import { PerformanceMetrics } from './performance.service'; // Ensure this import path is correct
import { Controller, Get, Param } from '@nestjs/common';

@Controller('performance')
export class PerformanceController {
  constructor(private readonly performanceService: PerformanceService) {}

  @Get(':vendorId')
  async getVendorPerformance(@Param('vendorId') vendorId: number): Promise<PerformanceMetrics> {
    return this.performanceService.calculatePerformance(vendorId);
  }
}
