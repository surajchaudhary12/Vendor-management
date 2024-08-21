import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendor } from '../vendors/vendor.entity';
import { PurchaseOrder } from '../purchase-orders/purchase-order.entity';

export interface PerformanceMetrics {
  onTimeDeliveryRate: number;
  qualityRatingAvg: number;
  averageResponseTime: number;
  fulfillmentRate: number;
}

@Injectable()
export class PerformanceService {
  constructor(
    @InjectRepository(Vendor)
    private vendorsRepository: Repository<Vendor>,
    @InjectRepository(PurchaseOrder)
    private purchaseOrdersRepository: Repository<PurchaseOrder>,
  ) {}


  async calculatePerformance(vendorId: number): Promise<PerformanceMetrics> {
    const vendor = await this.vendorsRepository.findOne({ where: { id: vendorId } });
    if (!vendor) {
      throw new NotFoundException(`Vendor with ID ${vendorId} not found`);
    }

    const purchaseOrders = await this.purchaseOrdersRepository.find({ where: { vendor } });
    const totalOrders = purchaseOrders.length;

    const onTimeOrders = purchaseOrders.filter(
      (po) => po.deliveryDate <= po.orderDate && po.status === 'completed',
    ).length;

    const qualityRatings = purchaseOrders.map((po) => po.qualityRating).filter((rating) => rating !== null);
    const totalQualityRatings = qualityRatings.length;
    const averageQualityRating = totalQualityRatings > 0
      ? qualityRatings.reduce((sum, rating) => sum + rating, 0) / totalQualityRatings
      : 0;

    const responseTimes = purchaseOrders.map(
      (po) => po.acknowledgmentDate && po.issueDate ? (po.acknowledgmentDate.getTime() - po.issueDate.getTime()) / 1000 : null,
    ).filter((time) => time !== null);
    const averageResponseTime = responseTimes.length > 0
      ? responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length
      : 0;

    const fulfilledOrders = purchaseOrders.filter(
      (po) => po.status === 'completed',
    ).length;

    return {
      onTimeDeliveryRate: totalOrders > 0 ? (onTimeOrders / totalOrders) * 100 : 0,
      qualityRatingAvg: averageQualityRating,
      averageResponseTime: averageResponseTime,
      fulfillmentRate: totalOrders > 0 ? (fulfilledOrders / totalOrders) * 100 : 0,
    };
  }
}
