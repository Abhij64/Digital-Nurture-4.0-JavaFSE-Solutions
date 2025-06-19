package Design_principles_N_Patterns.FactoryMethodPatternExample.Code;

public class ExcelDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new ExcelDocument();
    }
}

