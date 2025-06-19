package Design_principles_N_Patterns.FactoryMethodPatternExample.Code;

public class WordDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new WordDocument();
    }
}

