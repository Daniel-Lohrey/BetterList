package de.daniellohrey.betterist.utils;


import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class IdUtility {

        public static String generateId() {
        return UUID.randomUUID().toString();
    }
}
