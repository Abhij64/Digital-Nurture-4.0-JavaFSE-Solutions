package Design_principles_N_Patterns.FactoryMethodPatternExample.Code;

public class PdfDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new PdfDocument();
    }
}

