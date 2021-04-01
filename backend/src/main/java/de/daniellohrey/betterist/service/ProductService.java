package de.daniellohrey.betterist.service;

import de.daniellohrey.betterist.db.ProductMongoDb;

import de.daniellohrey.betterist.db.UserProductMongoDb;
import de.daniellohrey.betterist.model.DbProduct;
import de.daniellohrey.betterist.model.Product;
import de.daniellohrey.betterist.dto.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;


@Service
public class ProductService {

    private final ProductMongoDb productMongoDb;
    private final UserProductMongoDb userProductMongoDb;


    @Autowired
    public ProductService(ProductMongoDb productMongoDb, UserProductMongoDb userProductMongoDb) {
        this.productMongoDb = productMongoDb;
        this.userProductMongoDb = userProductMongoDb;
    }


    public List<DbProduct> listProducts() {
        return userProductMongoDb.findAll();
    }


    public Optional<Product> getProductById (String id) {
        return productMongoDb.findById(id);
    }

    public Product addProduct(ProductDto productDto){
        Product product = productDto.toProduct();
        userProductMongoDb.save(product.toDbProduct());
        return product;
    }

    public void deleteProduct(String id) {
         userProductMongoDb.deleteById(id);
    }


    public List<Product> getProductByKeywords(String keywords, String id) {
        return productMongoDb.findProductsBy_keywordsIsContainingAndLangIsAndIdIs(keywords, "de",id);
    }

}
