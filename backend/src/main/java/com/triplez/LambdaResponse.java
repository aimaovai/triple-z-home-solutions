package com.triplez;

import java.util.List;

public class LambdaResponse {
    private List<String> imageUrls;

    public LambdaResponse(List<String> imageUrls) {
        this.imageUrls = imageUrls;
    }

    public List<String> getImageUrls() { return imageUrls; }
}
