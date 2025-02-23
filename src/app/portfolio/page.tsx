"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./portfolio.module.css";
import { Box, Pagination } from "@mui/material";
import Image from "next/image";

export default function Portfolio() {
  const [images, setImages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const imagesPerPage = 20;

  // Fetch images from the backend
  useEffect(() => {
    const fetchImages = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
          });

          if (!response.ok) throw new Error("Failed to fetch images");

          const result = await response.json();
          setImages(result);
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      };

      fetchImages();
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const currentPageImages = images.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  // Handle Pagination Change
  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <div className="body">
      <Header />
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Portfolio</h2>
        </div>
        <div>
          {images.length === 0 ? (
            <p className={styles.loading}>Loading images...</p>
          ) : (
            <>
              <div className={styles.images}>
                {currentPageImages.map((url, index) => (
                  <div key={index} style={{ width: "250px", height: "250px" }}>
                    <Image
                      src={url}
                      alt={`Image ${index}`}
                      width={250}
                      height={250}
                      className={styles.image}
                      priority
                    />
                  </div>
                ))}
              </div>
              {/* Pagination */}
              {totalPages > 1 && (
                <Box className={styles.pagination}>
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    sx={{
                      "& .Mui-selected": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                  />
                </Box>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
