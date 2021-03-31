package de.daniellohrey.betterist.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "products")


public class Product {

    @Id
    private String id;
    @JsonProperty("product_name")
    private String name;
    private String product_name_de;
    private String brands;
    private String nutriscore_grade;
    private String nova_group;
    private Nutriments nutriments;
    private String ingredients_text_de;
    private String quantity;
    private List<String> _keywords;
    private String lang;




    public DbProduct toDbProduct(){
        return DbProduct.builder()
                .id(id)
                .name(name)
                .build();
    }

}
