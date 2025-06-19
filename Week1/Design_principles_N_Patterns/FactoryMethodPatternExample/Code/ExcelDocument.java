package Design_principles_N_Patterns.FactoryMethodPatternExample.Code;

public class ExcelDocument implements Document {
    public void open() {
        System.out.println("Opening Excel Document");
    }
}
