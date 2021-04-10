package de.daniellohrey.betterist.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import de.daniellohrey.betterist.model.Nutriments;
import de.daniellohrey.betterist.model.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder


public class ProductDto {

    private String id;
    private String product_name;
    private String brands;
    private String nutriscore_grade;
    private String nova_group;
    private Nutriments nutriments;
    private String ingredients_text_de;
    private String quantity;
    private List<String> additives_prev_original_tags;
    private List<String> allergens_tags;


    public Product toProduct(){
        return Product.builder()
                .id(id)
                .product_name(product_name)
                .brands(brands)
                .nutriscore_grade(nutriscore_grade)
                .nova_group(nova_group)
                .nutriments(nutriments)
                .ingredients_text_de(ingredients_text_de)
                .quantity(quantity)
                .additives_prev_original_tags(additives_prev_original_tags)
                .allergens_tags(allergens_tags)
                .build();
    }

}
