"use client";
import React, { useState } from "react";
import { Input } from "./input";
import { Camera, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {useDropzone} from 'react-dropzone'
import { toast } from "sonner";
import { useRouter } from "next/navigation"; // ✅




const HomeSearch = () => {
  const [searchTerm, setSearchTerm] = useState(""); // ✅ FIXED

  const [isImageSearchActive, setImageSearchActive] = useState(false);

  const [imagePreview, setImagePreview] = useState("");

  const [searchImage, setSearchImage] = useState(null);

  const [isUploading, setUploading] = useState(false);

  const [isProcessing, setIsProcessing] = useState(false);


  const router = useRouter()


  const handleTextSubmit = async(e) => {
    e.preventDefault(); // ✅ Prevent page reload
    console.log("Search submitted:", searchTerm); // Replace with logic or navigation
    if(!searchTerm.trim()){
      toast.error("Please enter a search term");
      return;
    }

    router.push(`/cars?search=${encodeURIComponent(searchTerm)}`);

  };

  const handleImageSearch = async(e) => {
    e.preventDefault(); // ✅ Prevent page reload
    console.log("Search submitted:", searchTerm); // Replace with logic or navigation
    if(!searchImage){
      toast.error("Please upload an image first");
      return;
    }
  };
  
  const onDrop = (acceptedFiles) => {
    // Do something with the files
    const file = acceptedFiles[0];

    if(file){
      if(file.size > 5 *1024 * 1024){
        toast.error("Image Size must be less than 5MB");
        return;
      }

      setUploading(true);
      setSearchImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setUploading(false);
        toast.success("Image uploaded successfully");
      };

      reader.onerror = () => {
        setUploading(true);
        toast.error("Failed to Read the Image.");
      };

      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive , isDragReject} = useDropzone({ onDrop , 
    accept: {
      "image/*": [".jpeg" , ".jpg" , ".png"],
    },
    maxFiles: 1,
  });


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
            <Button
              type="submit"
              className="absolute right-2 rounded-full mt-[-18]"
            >
              Search
            </Button>
          </div>
        </div>
      </form>

      {isImageSearchActive && (
        <div className="mt-4">
          <form onSubmit={handleImageSearch}>
            <div className="border-2 border-dashed border-gray-300 rounded-3xl p-6 text-center ">
              {imagePreview ? (
                <div className="flex flex-col items-center">
                  <img src={imagePreview} alt="car preview" className="h-40 object-contain mb-4"/>
                  <Button variant="outline" onClick={() => {
                    setSearchImage(null);
                    setImagePreview("");
                    toast.info("Image Removed");
                  }}>
                   Remove Image 
                  </Button>
                </div>
              ) : (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center">
                    <Upload className="h-12 w-12 text-gray-400 mb-2" />
                    <p className="text-gray-500 mb-2">
                      {isDragActive && !isDragReject
                        ? "Leave the files here to upload"
                        : "Drag & Drop a car image or click to select"}
                    </p>

                    {isDragReject && (
                      <p className="text-red-500 mb-2">Invalid image type</p>
                    )}
                    <p className="text-gray-400 text-sm">
                      Supports: JPG , PNG (MAX 5MB)
                    </p>
                  </div>
                </div>
              )}
            </div>

            {imagePreview && <Button type="submit" className="w-full mt-2" disabled={isUploading}>{isUploading ? "Uploading..." : "Search with this Image"}</Button>}
          </form>
        </div>
      )}
    </div>
  );
};

export default HomeSearch;
