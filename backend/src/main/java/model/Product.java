package model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.lang.annotation.Documented;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder


public class Item {

    private String title;
    private String brands;
    private String url;
    private String barcode;
}
