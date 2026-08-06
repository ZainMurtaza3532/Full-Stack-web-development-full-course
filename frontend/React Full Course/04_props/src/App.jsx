// App.jsx (Parent Component)
import React from "react";
import Card from "./components/Card";

function App() {
  // Card data array for better organization
  const cardData = [
    {
      title: "Mountain Adventure",
      description: "Explore breathtaking mountain landscapes and challenging trails.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "https://example.com/mountain-adventure"
    },
    {
      title: "Ocean Exploration",
      description: "Discover the mysteries of the deep blue sea and its marine life.",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "https://example.com/ocean-exploration"
    },
    {
      title: "Forest Trekking",
      description: "Immerse yourself in the tranquility of ancient forests.",
      imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "https://example.com/forest-trekking"
    },
    {
      title: "Desert Safari",
      description: "Experience the vast beauty of desert landscapes.",
      imageUrl: "https://www.w3schools.com/w3css/img_lights.jpg",
      link: "https://example.com/desert-safari"
    },
    {
      title: "City Lights",
      description: "Discover vibrant urban landscapes and cityscapes.",
      imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "https://example.com/city-lights"
    },
    {
      title: "Northern Lights",
      description: "Witness the magical aurora borealis in the night sky.",
      imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "https://example.com/northern-lights"
    },
    {
      title: "Forest Trekking",
      description: "Immerse yourself in the tranquility of ancient forests.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s",
      link: "https://example.com/forest-trekking"
    },
    {
      title: "Desert Safari",
      description: "Experience the vast beauty of desert landscapes.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYqoKTu_o3Zns2yExbst2Co84Gpc2Q1RJbA&s",
      link: "https://example.com/desert-safari"
    },
    {
      title: "City Lights",
      description: "Discover vibrant urban landscapes and cityscapes.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqXUWHhvgS_uCZR1vCu0jYrGiSS_5OahAeA&s",
      link: "https://example.com/city-lights"
    },
    {
      title: "Northern Lights",
      description: "Witness the magical aurora borealis in the night sky.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD___toorJRxO09qtGdnu3PBANyYHpGPUMRQ&s",
      link: "https://example.com/northern-lights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-indigo-800">React Props Example</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Beautiful cards demonstrating React props with images, links, and responsive design
        </p>
        
        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cardData.map((card) => (
            <Card 
              // key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;