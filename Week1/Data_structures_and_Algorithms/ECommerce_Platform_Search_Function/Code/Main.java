package Data_structures_and_Algorithms.ECommerce_Platform_Search_Function.Code;

import java.util.*;

public class Main {

    static Product linearSearch(Product[] products, String targetName) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(targetName)) {
                return p;
            }
        }
        return null;
    }

    static Product binarySearch(Product[] products, String targetName) {
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int comp = products[mid].productName.compareToIgnoreCase(targetName);

            if (comp == 0) return products[mid];
            else if (comp < 0) low = mid + 1;
            else high = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
    Product[] bigList = new Product[10000];
for (int i = 0; i < bigList.length; i++) {
    bigList[i] = new Product(i, "Product" + i, "Category" + (i % 10));
}

    Arrays.sort(bigList, Comparator.comparing(p -> p.productName.toLowerCase()));

    String searchFor = "Product9999";

    long startLinear = System.nanoTime();
    Product result1 = linearSearch(bigList, searchFor);
    long endLinear = System.nanoTime();
    System.out.println("Linear Search Result: " + (result1 != null ? result1.productName : "Not found"));
    System.out.println("Linear Search Time: " + (endLinear - startLinear) + " ns");

    long startBinary = System.nanoTime();
    Product result2 = binarySearch(bigList, searchFor);
    long endBinary = System.nanoTime();
    System.out.println("Binary Search Result: " + (result2 != null ? result2.productName : "Not found"));
    System.out.println("Binary Search Time: " + (endBinary - startBinary) + " ns");
}
}

