package com.triplez;

import com.triplez.ConfigLoader;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.auth.credentials.DefaultCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.ListObjectsV2Request;
import software.amazon.awssdk.services.s3.model.ListObjectsV2Response;
import software.amazon.awssdk.services.s3.model.S3Object;

import java.util.List;
import java.util.stream.Collectors;

public class S3Service {
    private final S3Client s3Client;

    public S3Service() {
        // Load credentials from application.properties
//        String accessKey = ConfigLoader.get("AWS_ACCESS_KEY");
//        String secretKey = ConfigLoader.get("AWS_SECRET_ACCESS_KEY");
        String region = ConfigLoader.get("AWS_REGION");

        // Initialize S3Client
//        this.s3Client = S3Client.builder()
//                .region(Region.of(region))
//                .credentialsProvider(StaticCredentialsProvider.create(AwsBasicCredentials.create(accessKey, secretKey)))
//                .build();
        this.s3Client = S3Client.builder()
                .region(Region.of(region))
                .credentialsProvider(DefaultCredentialsProvider.create()) // IAM Role credentials
                .build();
    }

    public List<String> getImageUrls() {
        String bucketName = ConfigLoader.get("bucketName");

        ListObjectsV2Request listRequest = ListObjectsV2Request.builder()
                .bucket(bucketName)
                .build(); // No prefix, fetches all objects from the root

        ListObjectsV2Response listResponse = s3Client.listObjectsV2(listRequest);
        List<String> imageExtensions = List.of(".png", ".jpg", ".jpeg", ".gif", ".bmp", ".webp", ".tiff", ".svg");

        return listResponse.contents()
                .stream()
                .map(S3Object::key)
                .filter(key -> imageExtensions.stream()
                .anyMatch(ext -> key.toLowerCase().endsWith(ext)))
                .map(key -> String.format("https://%s.s3.amazonaws.com/%s", bucketName, key))
                .collect(Collectors.toList());
    }
}