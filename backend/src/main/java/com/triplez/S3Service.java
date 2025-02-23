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
        String accessKey = ConfigLoader.get("aws.accessKey");
        String secretKey = ConfigLoader.get("aws.secretKey");
        String region = ConfigLoader.get("aws.region");

        // Initialize S3Client
        this.s3Client = S3Client.builder()
                .region(Region.of(region))
                .credentialsProvider(StaticCredentialsProvider.create(AwsBasicCredentials.create(accessKey, secretKey)))
                .build();
    }

    public List<String> getImageUrls() {
        String bucketName = ConfigLoader.get("aws.s3.bucketName");

        ListObjectsV2Request listRequest = ListObjectsV2Request.builder()
                .bucket(bucketName)
                .build(); // No prefix, fetches all objects from the root

        ListObjectsV2Response listResponse = s3Client.listObjectsV2(listRequest);

        return listResponse.contents()
                .stream()
                .map(S3Object::key)
                .map(key -> String.format("https://%s.s3.amazonaws.com/%s", bucketName, key))
                .collect(Collectors.toList());
    }
}