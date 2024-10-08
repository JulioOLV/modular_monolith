import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import InvoiceFacadeInterface, {
  FindInvoiceFacadeInputDto,
  FindInvoiceFacadeOutputDto,
  GenerateInvoiceFacadeInputDto,
  GenerateInvoiceFacadeOutputDto,
} from "./invoice.facade.interface";

export type InvoiceFacadeProps = {
  generateInvoiceUsecase: UseCaseInterface;
  findInvoiceUsecase: UseCaseInterface;
};

export default class InvoiceFacade implements InvoiceFacadeInterface {
  private _generateInvoiceUsecase: UseCaseInterface;
  private _findInvoiceUsecase: UseCaseInterface;

  constructor(props: InvoiceFacadeProps) {
    this._generateInvoiceUsecase = props.generateInvoiceUsecase;
    this._findInvoiceUsecase = props.findInvoiceUsecase;
  }

  async generate(
    input: GenerateInvoiceFacadeInputDto
  ): Promise<GenerateInvoiceFacadeOutputDto> {
    return await this._generateInvoiceUsecase.execute(input);
  }

  async find(
    input: FindInvoiceFacadeInputDto
  ): Promise<FindInvoiceFacadeOutputDto> {
    return await this._findInvoiceUsecase.execute(input);
  }
}
