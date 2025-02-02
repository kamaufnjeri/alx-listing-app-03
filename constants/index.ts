import { PropertyProps } from "@/interfaces";

export const API_URL = 'https://api.example.com/properties';
export const PLACEHOLDER_IMAGE = '/assets/placeholder.jpg';


export const PROPERTYLISTINGSAMPLE: PropertyProps [] = [
  {
    name: "Modern Apartment",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.5,
    category: ["Apartment", "Modern"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "4"
    },
    image: "/images/image-1.jpg",
    discount: "10% off",
    reviews: [
      { name: "Alice", comment: "Great place!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Bob", comment: "Loved the view!", avatar: "/images/avatar-2.jpg", rating: 4 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Cozy Cottage",
    address: {
      state: "London",
      city: "London",
      country: "UK"
    },
    rating: 4.7,
    category: ["Cottage", "Cozy"],
    price: 1500,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "3"
    },
    image: "/images/image-2.jpg",
    discount: "15% off",
    reviews: [
      { name: "Chris", comment: "Very cozy and comfortable!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Dana", comment: "Perfect getaway spot.", avatar: "/images/avatar-2.jpg", rating: 4.5 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Luxury Villa",
    address: {
      state: "Los Angeles",
      city: "Los Angeles",
      country: "USA"
    },
    rating: 4.8,
    category: ["Villa", "Luxury"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "10"
    },
    image: "/images/image-3.jpg",
    discount: "20% off",
    reviews: [
      { name: "Emma", comment: "Absolutely stunning!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Frank", comment: "Worth every penny.", avatar: "/images/avatar-2.jpg", rating: 4.8 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "City Loft",
    address: {
      state: "Paris",
      city: "Paris",
      country: "France"
    },
    rating: 4.6,
    category: ["Loft", "City"],
    price: 3000,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "6"
    },
    image: "/images/image-4.jpg",
    discount: "5% off",
    reviews: [
      { name: "Grace", comment: "Amazing ambiance!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Hank", comment: "Great for business trips.", avatar: "/images/avatar-2.jpg", rating: 4.6 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Beach House",
    address: {
      state: "Malibu",
      city: "Malibu",
      country: "USA"
    },
    rating: 4.9,
    category: ["House", "Beach"],
    price: 4000,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "8"
    },
    image: "/images/image-5.jpg",
    discount: "10% off",
    reviews: [
      { name: "Ivy", comment: "Loved the ocean view!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Jack", comment: "Perfect for families.", avatar: "/images/avatar-2.jpg", rating: 4.9 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Mountain Cabin",
    address: {
      state: "Aspen",
      city: "Aspen",
      country: "USA"
    },
    rating: 4.4,
    category: ["Cabin", "Mountain"],
    price: 1800,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/images/image-6.jpg",
    discount: "7% off",
    reviews: [
      { name: "Kate", comment: "Great escape to nature.", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Leo", comment: "Peaceful and quiet.", avatar: "/images/avatar-2.jpg", rating: 4.4 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  }
];
