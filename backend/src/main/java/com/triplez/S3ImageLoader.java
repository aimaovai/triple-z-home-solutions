package com.triplez;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.triplez.S3Service;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

public class S3ImageLoader implements RequestHandler<Map<String, Object>, Map<String, Object>> {

    private final S3Service s3Service;
    private final ObjectMapper objectMapper;

    public S3ImageLoader() {
        this.s3Service = new S3Service();
        this.objectMapper = new ObjectMapper();
    }

    @Override
    public Map<String, Object> handleRequest(Map<String, Object> event, Context context) {
        Map<String, Object> response = new HashMap<>();
        Map<String, String> headers = new HashMap<>();

        headers.put("Content-Type", "application/json");
        headers.put("Access-Control-Allow-Origin", "*");
        headers.put("Access-Control-Allow-Methods", "GET, OPTIONS");
        headers.put("Access-Control-Allow-Headers", "Content-Type, Authorization");

        try {
            // Extract headers and logs for debugging
            //Map<String, Object> headers = (Map<String, Object>) event.get("headers");
            Map<String, Object> receivedHeaders = (Map<String, Object>) event.get("headers");
            context.getLogger().log("Received Headers: " + receivedHeaders);

            // Fetch S3 Image URLs
            List<String> imageUrls = s3Service.getImageUrls();

            // Build API Gateway compatible response
            response.put("statusCode", 200);
            response.put("headers", headers);
            response.put("body", objectMapper.writeValueAsString(imageUrls));

        } catch (Exception e) {
            context.getLogger().log("Error: " + e.getMessage());
            response.put("statusCode", 500);
            response.put("body", "{\"error\": \"Internal Server Error\"}");
        }
        return response;
    }
}