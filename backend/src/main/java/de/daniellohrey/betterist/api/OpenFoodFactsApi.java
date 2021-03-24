package de.daniellohrey.betterist.api;


import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import de.daniellohrey.betterist.model.Product;

import lombok.val;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;


@Service
public class OpenFoodFactsApi {

    // Klasse und Methoden können vorerst ignoriert werden !!!!

/*
        private final IdUtils idUtils;
        private final String openFoodFactsApiKey;


        @Autowired
        public OpenFoodFactsApi(IdUtils idUtils, @Value("${OPEN_FOOD_FACTS_API_KEY}") String openFoodFactsApiKey) {
            this.idUtils = idUtils;
            this.openFoodFactsApiKey = openFoodFactsApiKey;
        }

        public List<Product> searchProductByName(String productName) throws UnirestException {

            JSONArray products = getUniRestRequest(productName);
            val productList = new ArrayList<Product>();
            for (int i = 0; i < products.length(); i++) {
                val jsonObject = products.getJSONObject(i);
                String id = getProductIdIfPossibleOrGiveOwnId(jsonObject);
                String name = getProductNameIfPossible(jsonObject);
                String brands = getBrandIfPossible(jsonObject);
                productList.add( new Product(id, name, brands));
            }
            return productList;
        }


        private String getProductIdIfPossibleOrGiveOwnId(JSONObject productObject) {
            try {
                return productObject.getString("_id");
            } catch (JSONException e) {
                return idUtils.generateId();
            }
        }

        private String getProductNameIfPossible(JSONObject productObject) {
            try {
                return productObject.keySet().contains("product_name") ? productObject.getString("product_name")
                        : productObject.getString("product_name_de");
            } catch (JSONException e) {
                return "Bitte Produktnamen eintragen";
            }
        }

        private String getBrandIfPossible(JSONObject productObject) {
            try {
                return productObject.keySet().contains("brands") ?
                        productObject.getString("brands") : productObject.getString("Bitte Hersteller eintragen");
            } catch (JSONException e) {
                return "Bitte Hersteller eintragen";
            }
        }


        private JSONArray getUniRestRequest(String productName) throws UnirestException {
            Unirest.setTimeouts(8000, 8000);
            return Unirest.get("https://de.openfoodfacts.org/cgi/search.pl?search_terms=" + productName.replace(" ", "%20") + "&sort_by=unique_scans_n&json=true")
                    .header("Accept", "application/json")
                    .header("User-Agent", "BetterList")
                    .header("Authorization", openFoodFactsApiKey)
                    .asJson()
                    .getBody()
                    .getObject()
                    .getJSONArray("products");
        } */
    }