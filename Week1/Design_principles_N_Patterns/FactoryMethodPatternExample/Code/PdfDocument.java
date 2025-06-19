package Design_principles_N_Patterns.FactoryMethodPatternExample.Code;

public class PdfDocument implements Document {
    public void open() {
        System.out.println("Opening PDF Document");
    }
}
