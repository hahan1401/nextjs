'use client';

import axiosInstance from '@/network/axios';
import { useState } from 'react';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [progress, setProgress] = useState('0%');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedImage);

    try {
      const response = await axiosInstance.post('/upload', formData, {
        onUploadProgress: (e) => {
          console.log('=====', e);
          setProgress(`${Math.round(e.progress * 100)}%`)
        },
      });


      if (response.data.responseData) {
        console.log('Image uploaded successfully.');
        setProgress('done')
      } else {
        console.error('Image upload failed.');
        setProgress('failed')
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <strong>{`Loaded: ${progress}`}</strong>
      <button className='block px-4 py-2 mt-4 border-black border' onClick={handleImageUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;
