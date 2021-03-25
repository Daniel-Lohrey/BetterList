package de.daniellohrey.betterist.service;

import de.daniellohrey.betterist.db.ProductMongoDb;
import de.daniellohrey.betterist.db.UserProductMongoDb;
import de.daniellohrey.betterist.dto.ProductDto;
import de.daniellohrey.betterist.model.DbProduct;
import de.daniellohrey.betterist.model.Product;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpEntity;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.mockito.Mockito.*;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.*;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.mockito.Mockito.*;

class ProductServiceTest {


    private final ProductMongoDb productMongoDb = mock(ProductMongoDb.class);
    private UserProductMongoDb userProductMongoDb = mock(UserProductMongoDb.class);
    private final ProductService productService = new ProductService(productMongoDb, userProductMongoDb);

    @Test
    @DisplayName("List Products should return list from DB")
    public void listProducts() {
        //GIVEN
        when(productMongoDb.findAll()).thenReturn(List.of(
                Product.builder()
                        ._id("12345")
                        .product_name("Product1")
                        .brands("Milbona")
                        .build(),
                Product.builder()
                        ._id("0001")
                        .product_name("Product2")
                        .brands("Milka")
                        .build())
        );
        //WHEN
        List<Product> products = productService.listProducts();

        //THEN
        assertThat(products, containsInAnyOrder(
                Product.builder()
                        ._id("12345")
                        .product_name("Product1")
                        .brands("Milbona")
                        .build(),
                Product.builder()
                        ._id("0001")
                        .product_name("Product2")
                        .brands("Milka")
                        .build()));
    }




    /*  @Test
    @DisplayName("Add method should add Products into the userProductMongoDb")
    void addProductTest() {
        //GIVEN
        DbProduct dbProduct = DbProduct.builder()
                ._id("001")
                .product_name("Apfel")
                .build();
        when(userProductMongoDb.save(dbProduct))
                .thenReturn(dbProduct);


        //WHEN
        DbProduct addedProduct = productService.addProduct(dbProduct);


        //THEN
        DbProduct expectedProduct = DbProduct.builder()
                ._id("001")
                .product_name("Apfel")
                .build();

        assertThat(addedProduct, is(expectedProduct));
        verify(userProductMongoDb).save(expectedProduct);

    } */

      @Test
    @DisplayName("DeleteCourse deletes course from db ")
    public void deleteFromDb(){
        //WHEN
        productService.deleteProduct("123");

        //THEN
        verify(userProductMongoDb).deleteById("123");
    }
}