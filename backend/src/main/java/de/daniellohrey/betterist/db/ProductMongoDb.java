package de.daniellohrey.betterist.db;


import de.daniellohrey.betterist.model.Product;
import org.springframework.data.repository.PagingAndSortingRepository;


import java.util.List;

public interface ProductMongoDb extends PagingAndSortingRepository<Product, String> {

    List<Product> findAll();

    List<Product> findProductsBy_keywordsIsContainingAndLangIs(String keyword, String lang);


}
