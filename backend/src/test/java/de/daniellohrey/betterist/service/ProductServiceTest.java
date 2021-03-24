package de.daniellohrey.betterist.service;

import de.daniellohrey.betterist.db.ProductMongoDb;
import de.daniellohrey.betterist.db.UserProductMongoDb;
import de.daniellohrey.betterist.model.Product;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static com.mongodb.internal.connection.tlschannel.util.Util.assertTrue;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class ProductServiceTest {


    private final ProductMongoDb productMongoDb = mock(ProductMongoDb.class);
    private UserProductMongoDb userProductMongoDb;
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

 /*   @DisplayName("A not existing product should be added to db")
    public void testAddNotExistingProduct() {
        //GIVEN
        Optional<Product> optionalOfProductToAdd = Optional.of(Product.builder()
                        ._id("12345")
                        .product_name("Product1")
                        .brands("Milbona")
                        .build());

        when(userProductMongoDb.existsById(optionalOfProductToAdd.get().get_id())).thenReturn(false);

        //WHEN
        Optional<Product> actual = productService.addProduct(optionalOfProductToAdd.get());

        //THEN
        verify(userProductMongoDb).save(optionalOfProductToAdd.get());
        assertTrue(actual.isPresent());
        assertThat(actual, Matchers.is(optionalOfProductToAdd));
    } */
}