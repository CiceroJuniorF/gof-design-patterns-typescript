import { FilePath } from "../../src/01-creational/02-factory-method/constants/file-path";
import { ScannerXML } from "../../src/01-creational/02-factory-method/scanner-xml";

describe("SacnnerXML", () => {
    it(`SacnnerXML. Is expected DataSet.content is '${FilePath.FILE_XML}XML'}`, () => {  
        expect(new ScannerXML(FilePath.FILE_XML).toScanFile().content).toBe(`${FilePath.FILE_XML}XML`);
    });
    it(`SacnnerXML. Is expected Error.message 'filePath is empty'`, () => {  
        let functionNewScannerXMLFilePahtEmpty= ()=>{new ScannerXML('')};    
        expect(functionNewScannerXMLFilePahtEmpty).toThrow("filePath is empty");
        expect(functionNewScannerXMLFilePahtEmpty).toThrow(Error);
    });
});