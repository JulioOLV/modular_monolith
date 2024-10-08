import Id from "../../@shared/domain/value-object/id.value-object";
import Product from "../domain/product.entity";
import ProductNotFoundError from "../error/product-not-found.error";
import ProductGateway from "../gateway/product.gateway";
import ProductModel from "./product.model";

export default class ProductRepository implements ProductGateway {
  async add(product: Product): Promise<void> {
    try {
      await ProductModel.create({
        id: product.id.id,
        name: product.name,
        description: product.description,
        purchasePrice: product.purchasePrice,
        salesPrice: product.salesPrice,
        stock: product.stock,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async find(id: string): Promise<Product> {
    try {
      const product = await ProductModel.findOne({
        where: { id },
      });

      if (!product) {
        throw new ProductNotFoundError(id);
      }

      return new Product({
        id: new Id(product.dataValues.id),
        name: product.dataValues.name,
        description: product.dataValues.description,
        purchasePrice: product.dataValues.purchasePrice,
        salesPrice: product.dataValues.salesPrice,
        stock: product.dataValues.stock,
        createdAt: product.dataValues.createdAt,
        updatedAt: product.dataValues.updatedAt,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
