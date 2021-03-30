package de.daniellohrey.betterist.controller;

import de.daniellohrey.betterist.db.ProductMongoDb;
import de.daniellohrey.betterist.db.UserProductMongoDb;
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
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ProductControllerTest {
    @LocalServerPort
    private int port;


    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private ProductMongoDb productMongoDb;

    @Autowired
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
        //Given
        productMongoDb.save(Product.builder()
                .id("12345")
                .product_name("Product1")
                .brands("Milbona")
                .build());
        productMongoDb.save(Product.builder()
                .id("0001")
                .product_name("Product2")
                .brands("Milka")
                .build());

        //WHEN
        ResponseEntity<Product[]> response = testRestTemplate.getForEntity(getUrl(), Product[].class);

        //Then

        assertThat(response.getStatusCode(), Matchers.is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                Product.builder()
                        .id("12345")
                        .product_name("Product1")
                        .brands("Milbona")
                        .build(),
                Product.builder()
                        .id("0001")
                        .product_name("Product2")
                        .brands("Milka")
                        .build()));

    }

    @Test
    @DisplayName("Post a Product to the UserProductMongoDb")
    public void postProductToTheUserMongoDb(){
        //GIVEN
        DbProduct dbProduct = DbProduct.builder()
                .id("122")
                .product_name("productName")
                .build();

        //WHEN
        HttpEntity<DbProduct> entity = new HttpEntity<>(dbProduct);
        ResponseEntity<Product> response = testRestTemplate.postForEntity(getUrl(), entity, Product.class);
        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(Product.builder()
                .id("122")
                .product_name("productName")
                .build()));
        assertTrue(userProductMongoDb.existsById("122"));
    }


    @Test
    @DisplayName("DELETE to /api/products/id deletes the product")
    public void deleteCourse() {
        //GIVEN
        userProductMongoDb.save(DbProduct.builder()
                .id("001")
                .product_name("Apfel")
                .build());
        //WHEN
        testRestTemplate.delete(getUrl() + "/001");
        //THEN
        assertFalse(userProductMongoDb.existsById("001"));
    }


}