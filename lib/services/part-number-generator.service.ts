export class PartNumberGeneratorService {
  generate(data: {
    partTypeCode: string;
    systemGroupCode: string;
    functionNo: number;
    importCode: string;
    supplierCode: string;
    variantCode: string;
    versionCode: string;
  }) {
    const functionNo = data.functionNo.toString().padStart(3, "0");

    return (
      data.partTypeCode +
      data.systemGroupCode +
      data.importCode +
      functionNo +
      data.supplierCode +
      data.versionCode +
      data.variantCode
      
    );
  }
}