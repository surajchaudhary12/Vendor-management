import { IsNotEmpty, IsNumber, IsString, IsDateString, IsJSON } from 'class-validator';

export class CreatePurchaseOrderDto {
  @IsString()
  @IsNotEmpty()
  poNumber: string;

  @IsNumber()
  vendorId: number;

  @IsDateString()
  orderDate: Date;

  @IsDateString()
  deliveryDate: Date;

  @IsJSON()
  items: string;

  @IsNumber()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsDateString()
  issueDate: Date;

  acknowledgmentDate?: Date;
}
