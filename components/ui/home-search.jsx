"use client";
import React, { useState } from "react";
import { Input } from "./input";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeSearch = () => {
  const [searchTerm, setSearchTerm] = useState(""); // ✅ FIXED

  const [isImageSearchActive, setImageSearchActive] = useState(false);

  const [imagePreview, setImagePreview] = useState("");

  const [searchImage, setSearchImage] = useState(null);

  const [isUploading, setUploading] = useState(false);



  const handleTextSubmit = (e) => {
    e.preventDefault(); // ✅ Prevent page reload
    console.log("Search submitted:", searchTerm); // Replace with logic or navigation
  };

  const handleImageSearch = (e) => {
    e.preventDefault(); // ✅ Prevent page reload
    console.log("Search submitted:", searchTerm); // Replace with logic or navigation
  };

  return (
    <div>
      <form onSubmit={handleTextSubmit}>
        <div className="relative flex items-center mt-2">
          <Input
            type="text"
            placeholder="Enter make, model, or use our AI Image Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-12 py-6 w-full rounded-full border-gray-300 bg-white/95 backdrop-blur-sm"
          />

          <div className="absolute right-[100px]">
            <Camera
              size={35}
              onClick={() => setImageSearchActive(!isImageSearchActive)}
              className="cursor-pointer rounded-xl p-1.5"
              style={{
                background: isImageSearchActive ? "black" : "",
                color: isImageSearchActive ? "white" : "",
              }}
            />
          </div>

          <div>
            <Button type="submit" className="absolute right-2 rounded-full mt-[-18]">
              Search
            </Button>
          </div>
        </div>
      </form>

      {isImageSearchActive && (
        <div className="mt-4">
          <form onSubmit={handleImageSearch}>
            <div>
              {imagePreview ? <div> </div> : (
                <div></div>
              )}
            </div>
          </form>
        </div>
      )}

    </div>
  );
};

export default HomeSearch;
