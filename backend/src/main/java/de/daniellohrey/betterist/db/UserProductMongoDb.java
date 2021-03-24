package de.daniellohrey.betterist.db;

import de.daniellohrey.betterist.model.DbProduct;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface UserProductMongoDb extends PagingAndSortingRepository<DbProduct, String> {

    List<DbProduct> findAll();

}
