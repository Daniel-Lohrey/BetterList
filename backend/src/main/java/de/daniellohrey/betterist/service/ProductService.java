package de.daniellohrey.betterist.service;

import de.daniellohrey.betterist.db.ProductMongoDb;

import de.daniellohrey.betterist.db.UserProductMongoDb;
import de.daniellohrey.betterist.model.Product;
import de.daniellohrey.betterist.dto.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;



@Service
public class ProductService {

    private final ProductMongoDb productMongoDb;
    private final UserProductMongoDb userProductMongoDb;


    @Autowired
    public ProductService(ProductMongoDb productMongoDb, UserProductMongoDb userProductMongoDb) {
        this.productMongoDb = productMongoDb;
        this.userProductMongoDb = userProductMongoDb;
    }


    public List<Product> listProducts() {
        return productMongoDb.findAll();
    }


    public Product getProductById (String id) {
        return productMongoDb.findById(id).get();
    }

    public Product addProduct(ProductDto productDto){
        Product product = productDto.toProduct();
        userProductMongoDb.save(product.toDbProduct());
        return product;
    }

    public void deleteProduct(String _id) {
         userProductMongoDb.deleteById(_id);
    }


    public List<Product> getProductByKeywords(String keywords) {
        return productMongoDb.findProductsBy_keywordsIsContainingAndLangIs(keywords, "de");
    }



}