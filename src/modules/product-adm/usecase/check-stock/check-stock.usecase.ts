import UseCaseInterface from "../../../@shared/usecase/use-case.interface";
import ProductGateway from "../../gateway/product.gateway";
import { CheckStockInputDto, CheckStockOutputDto } from "./check-stock.dto";

export default class CheckStockUseCase implements UseCaseInterface {
  private _productrepository: ProductGateway;

  constructor(productRepository: ProductGateway) {
    this._productrepository = productRepository;
  }

  async execute(input: CheckStockInputDto): Promise<CheckStockOutputDto> {
    const product = await this._productrepository.find(input.productId);
    return {
      productId: product.id.id,
      stock: product.stock,
    };
  }
}
