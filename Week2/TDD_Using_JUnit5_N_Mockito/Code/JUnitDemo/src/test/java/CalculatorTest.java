import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calc;

    @Before
    public void setUp() {
        System.out.println("Setting up calculator...");
        calc = new Calculator(); // Arrange
    }

    @After
    public void tearDown() {
        System.out.println("Cleaning up after test...");
        calc = null;
    }


    @Test
    public void testAdd() {
        // Act
        int result = calc.add(10, 20);

        // Assert
        assertEquals(30, result);
    }

    @Test
    public void testSubtract() {
        // Act
        int result = calc.subtract(50, 20);

        // Assert
        assertEquals(30, result);
    }

    @Test
    public void testMultiply() {
        // Act
        int result = calc.multiply(5, 6);

        // Assert
        assertEquals(30, result);
    }

    @Test
    public void testDivide() {
        // Act
        int result = calc.divide(60, 2);

        // Assert
        assertEquals(30, result);
    }
}
