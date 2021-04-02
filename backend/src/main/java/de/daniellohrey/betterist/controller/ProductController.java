package de.daniellohrey.betterist.controller;

import de.daniellohrey.betterist.model.DbProduct;
import de.daniellohrey.betterist.model.Product;
import de.daniellohrey.betterist.dto.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import de.daniellohrey.betterist.service.ProductService;
import org.springframework.web.server.ResponseStatusException;


import java.util.List;



@RestController
@RequestMapping("api/products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<DbProduct> getUserProductsList() {
        return productService.listProducts();
    }

    @GetMapping("{id}")
    public Product findProductById(@PathVariable String id) {
        return productService.getProductById(id)
                 .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product could not be found"));
    }

    @PostMapping
    public Product addProduct(@RequestBody ProductDto productDto) {
        return productService.addProduct(productDto);
    }


    @DeleteMapping("{id}")
    public void deleteProduct(@PathVariable String id){
        productService.deleteProduct(id);
    }


    @GetMapping("search/{keywords}")
    public List<Product> findProductByKeyword(@PathVariable String keywords,String id){
        return productService.getProductByKeywords(keywords,id);
    }


}
