"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./portfolio.module.css";
import { Box, Pagination } from "@mui/material";
import Image from "next/image";
// import ServiceImage from "@/components/serviceimage/serviceimage";

export default function Portfolio() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 20;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const currentPageImages = images.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/gallery-images` //update NEXT_PUBLIC_BACKEND_URL to the hosted backedn url after hosting
        );
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
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
          <div className={styles.images}>
            {currentPageImages.map((url, index) => (
              <div
                key={index}
                style={{
                  width: "250px",
                  height: "250px",
                }}
              >
                {/* <img
                  src={url}
                  alt={`Image ${index}`}
                  className={styles.image}
                /> */}
                <Image
                src={url}
                alt={`Image ${index}`}
                width={250}
                height={250}
                className={styles.image}
              />
              </div>
              
            ))}
          </div>
          <Box className={styles.pagination}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              sx={{ ".MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": { backgroundColor: "black" } }}
            />
          </Box>
        </div>
      </div>
      <Footer />
    </div>
  );
}
