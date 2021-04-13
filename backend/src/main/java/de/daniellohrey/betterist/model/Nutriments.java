package de.daniellohrey.betterist.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "products")

public class Nutriments {


    private String energy_serving;
    private String proteins;
    private String carbohydrates_value;
    private String fat_serving;


}
