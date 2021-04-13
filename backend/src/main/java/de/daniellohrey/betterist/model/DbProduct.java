package de.daniellohrey.betterist.model;

import com.fasterxml.jackson.annotation.JsonProperty;
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
@Document(collection = "userProducts")

public class DbProduct {

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

}
