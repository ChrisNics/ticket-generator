"use client";
import { useState } from "react";
import Image from "next/image";

const FileUpload = ({ onFileChange, error }) => {
  const [uploadedImage, setUploadedImage] = useState(null); // State for uploaded image

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validation for file type
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      onFileChange(null, "Only JPG and PNG files are allowed.");
      return;
    }

    // Validation for file size (max 500KB)
    if (file.size > 500 * 1024) {
      onFileChange(null, "File size must not exceed 500KB.");
      return;
    }

    // Process the valid file
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target.result); // Display the uploaded image
      onFileChange(e.target.result, null); // Pass the image and clear errors
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    onFileChange(null, null); // Clear the file and errors
  };

  return (
    <>
      <div className="mt-8 flex flex-col justify-center">
        <p className="mb-2">Upload Avatar</p>

        <label className="relative flex w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-lg border-2 border-dashed border-neutral-700 bg-neutral-500/10 p-5 transition-all duration-75 hover:bg-neutral-500/50">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-300/20">
            {uploadedImage ? (
              <Image
                className="h-14 rounded-lg border-2 border-neutral-500 bg-cover bg-center"
                src={uploadedImage}
                width={50}
                height={50}
                alt="Uploaded Avatar"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center">
                <div className="h-[24px] w-[24px] bg-upload bg-center bg-no-repeat"></div>
              </div>
            )}
          </div>

          {uploadedImage ? (
            <div className="mt-4 flex w-max gap-x-2">
              <button
                className="rounded-lg bg-neutral-300/25 p-1.5 text-sm"
                onClick={handleRemoveImage}
              >
                Remove image
              </button>
              <label className="cursor-pointer rounded-lg bg-neutral-300/25 p-1.5 text-sm">
                Change image
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          ) : (
            <div className="text-center">Drag and drop or click to upload</div>
          )}

          <input
            type="file"
            accept="image/png, image/jpeg"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      {error ? (
        <div className="mt-2 flex gap-x-2 text-orange-700">
          <div className="h-[16px] w-[16px] bg-info-red bg-center bg-no-repeat" />
          <p className="text-xs text-orange-700">{error}</p>
        </div>
      ) : (
        <div className="mt-2 flex gap-x-2">
          <div className="h-[16px] w-[16px] bg-info bg-center bg-no-repeat" />
          <p className="text-xs">
            Upload your photo &#40;JPG or PNG, max size: 500KB&#41;.
          </p>
        </div>
      )}
    </>
  );
};

export default FileUpload;
