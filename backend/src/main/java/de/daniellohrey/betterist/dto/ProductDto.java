package de.daniellohrey.betterist.dto;


import de.daniellohrey.betterist.model.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder


public class ProductDto {

    private String id;
    private String product_name;

    public Product toProduct(){
        return Product.builder()
                .id(id)
                .product_name(product_name)
                .build();
    }

}