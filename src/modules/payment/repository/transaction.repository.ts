import Id from "../../@shared/domain/value-object/id.value-object";
import Transaction from "../domain/transaction.entity";
import PaymentGateway from "../gateway/payment.gateway";
import TransactionModel from "./transaction.model";

export default class TransactionRepository implements PaymentGateway {
  async save(input: Transaction): Promise<Transaction> {
    await TransactionModel.create({
      id: input.id.id,
      orderId: input.orderId,
      status: input.status,
      amount: input.amount,
      createdAt: input.createdAt,
      updatedAt: input.updatedAt,
    });

    return new Transaction({
      id: new Id(input.id.id),
      orderId: input.orderId,
      status: input.status,
      amount: input.amount,
      createdAt: input.createdAt,
      updatedAt: input.updatedAt,
    });
  }
}
