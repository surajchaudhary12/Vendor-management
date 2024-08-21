import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseOrder } from './purchase-order.entity';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { Vendor } from '../vendors/vendor.entity';

@Injectable()
export class PurchaseOrdersService {
  constructor(
    @InjectRepository(PurchaseOrder)
    private purchaseOrdersRepository: Repository<PurchaseOrder>,
    @InjectRepository(Vendor)
    private vendorsRepository: Repository<Vendor>,
  ) {}

  async create(createPurchaseOrderDto: CreatePurchaseOrderDto): Promise<PurchaseOrder> {
    const vendor = await this.vendorsRepository.findOne({ where: { id: createPurchaseOrderDto.vendorId } });
    if (!vendor) {
      throw new NotFoundException(`Vendor with ID ${createPurchaseOrderDto.vendorId} not found`);
    }

    const purchaseOrder = this.purchaseOrdersRepository.create({
      ...createPurchaseOrderDto,
      vendor,
    });

    return this.purchaseOrdersRepository.save(purchaseOrder);
  }

  async findAll(): Promise<PurchaseOrder[]> {
    return this.purchaseOrdersRepository.find({ relations: ['vendor'] });
  }

  async findOne(id: number): Promise<PurchaseOrder> {
    const purchaseOrder = await this.purchaseOrdersRepository.findOne({ where: { id }, relations: ['vendor'] });
    if (!purchaseOrder) {
      throw new NotFoundException(`Purchase Order with ID ${id} not found`);
    }
    return purchaseOrder;
  }

  async update(id: number, updatePurchaseOrderDto: CreatePurchaseOrderDto): Promise<PurchaseOrder> {
    const purchaseOrder = await this.purchaseOrdersRepository.preload({
      id,
      ...updatePurchaseOrderDto,
    });
    if (!purchaseOrder) {
      throw new NotFoundException(`Purchase Order with ID ${id} not found`);
    }
    return this.purchaseOrdersRepository.save(purchaseOrder);
  }

  async remove(id: number): Promise<void> {
    const result = await this.purchaseOrdersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Purchase Order with ID ${id} not found`);
    }
  }
}
