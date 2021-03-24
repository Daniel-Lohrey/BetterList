package de.daniellohrey.betterist.controller;

import de.daniellohrey.betterist.db.ProductMongoDb;
import de.daniellohrey.betterist.db.UserProductMongoDb;
import de.daniellohrey.betterist.dto.ProductDto;
import de.daniellohrey.betterist.model.DbProduct;
import de.daniellohrey.betterist.model.Product;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.arrayContainingInAnyOrder;
import static org.junit.jupiter.api.Assertions.assertTrue;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ProductControllerTest {
    @LocalServerPort
    private int port;


    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private ProductMongoDb productMongoDb;
    private UserProductMongoDb userProductMongoDb;

    @BeforeEach
    public void setup() {
        userProductMongoDb.deleteAll();
    }

    private String getUrl() {
        return "http://localhost:" + port + "/api/products";
    }


    @Test
    @DisplayName("Get api/product should return a list of products")
    public void getMappingShouldReturnListOfProducts() {
        productMongoDb.save(Product.builder()
                ._id("12345")
                .product_name("Product1")
                .brands("Milbona")
                .build());
        productMongoDb.save(Product.builder()
                ._id("0001")
                .product_name("Product2")
                .brands("Milka")
                .build());

        //WHEN
        ResponseEntity<Product[]> response = testRestTemplate.getForEntity(getUrl(), Product[].class);

        //Then

        assertThat(response.getStatusCode(), Matchers.is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
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

 /*   @Test
    @DisplayName("Post a Product to the UserProductMongoDb")
    public void postProductToTheUserMongoDb(){
        //Given
        List<Product> productList = List.of(
                Product.builder()._id("Kartoffel").product_name("800").build(),
                Product.builder()._id("Salz").product_name("1").build()
        );

        DbProduct dbProduct= DbProduct.builder()
                ._id("12345")
                .product_name("Müsliriegel")
                .build();
        userProductMongoDb.save(dbProduct);

        //When
        HttpEntity<DbProduct> postEntity = new HttpEntity<>(dbProduct);
        ResponseEntity<Product> response = testRestTemplate.postForEntity(getUrl(),postEntity,Product.class);

        //Then
        Product expected = Product.builder()
                ._id("12345")
                .product_name("Müsliriegel")
                .build();

        assertThat(response.getStatusCode(), Matchers.is(HttpStatus.OK));
        assertThat(response.getBody(), Matchers.is(expected));
        assertTrue(userProductMongoDb.existsById(response.getBody().get_id()));
    }
*/
}