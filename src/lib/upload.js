const upload = async (file) => {
  if (!file) {
    throw new Error("No image selected");
  }

  const formData = new FormData();

  formData.append("file", file);
  formData.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
  );

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }/image/upload`,
    {
      method: "POST",
      body: formData,
    },
  );

  if (!response.ok) {
    const error = await response.json();
    console.log(error);
    throw new Error("Image upload failed");
  }

  const data = await response.json();

  return data.secure_url;
};

export default upload;
