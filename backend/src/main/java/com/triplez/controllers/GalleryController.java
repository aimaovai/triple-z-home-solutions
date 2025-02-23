package com.triplez.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.ListObjectsV2Request;
import software.amazon.awssdk.services.s3.model.ListObjectsV2Response;
import software.amazon.awssdk.services.s3.model.S3Object;

import java.util.ArrayList;
import java.util.List;

@RestController
public class GalleryController {

    private final String BUCKET_NAME = "triple-z-images";
    @Value("${cloud.aws.credentials.access-key}")
    private String accessKey;
    @Value("${cloud.aws.credentials.secret-key}")
    private String secretKey;

    @GetMapping("/api/gallery-images")
    public List<String> getGalleryImages() {
        List<String> imageUrls = new ArrayList<>();

        S3Client s3 = S3Client.builder()
                .region(Region.US_EAST_1)
                .credentialsProvider(() -> AwsBasicCredentials.create(
                        accessKey,
                        secretKey))
                .build();

        ListObjectsV2Request request = ListObjectsV2Request.builder()
                .bucket(BUCKET_NAME)
                .build();

        ListObjectsV2Response response = s3.listObjectsV2(request);

        for (S3Object object : response.contents()) {
            if (object.key().endsWith(".jpg") || object.key().endsWith(".png")) {
                String url = String.format("https://%s.s3.amazonaws.com/%s", BUCKET_NAME, object.key());
                imageUrls.add(url);
            }
        }

        return imageUrls;
    }
}
