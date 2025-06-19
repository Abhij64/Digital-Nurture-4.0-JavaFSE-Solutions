package Data_structures_and_Algorithms.Financial_Forecasting.Code;

public class FinanceForecast {

    static double forecastRecursive(double presentValue, double growthRate, int years) {
        if (years == 0)
            return presentValue;
        return forecastRecursive(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double presentValue = 10000;     
        double growthRate = 0.10;        
        int years = 5;

        double futureValue = forecastRecursive(presentValue, growthRate, years);
        System.out.println("Future Value after " + years + " years: Rs." + String.format("%.2f", futureValue));

    }
}
