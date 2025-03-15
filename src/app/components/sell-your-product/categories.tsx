
export const categories = [
  { id: "electronics", name: "Electronics", image: "/1.jpg", hasSubcategories: true },
  { id: "fashion", name: "Fashion", image: "/1.jpg", hasSubcategories: true },
  { id: "home-garden", name: "Home & Garden", image: "/1.jpg", hasSubcategories: true },
  { id: "sports", name: "Sports & Outdoors", image: "/1.jpg", hasSubcategories: true },
  { id: "books", name: "Books", image: "/1.jpg", hasSubcategories: true },
  { id: "art", name: "Art & Collectibles", image: "/1.jpg", hasSubcategories: false },
  { id: "pets", name: "Pet Supplies", image: "/1.jpg", hasSubcategories: false },
  { id: "handmade", name: "Handmade", image: "/1.jpg", hasSubcategories: false },
]

export const subcategories: Record<string, string[]> = {
  electronics: ["Smartphones", "Laptops", "Audio", "Cameras", "Accessories"],
  fashion: ["Men's Clothing", "Women's Clothing", "Shoes", "Jewelry", "Watches"],
  "home-garden": ["Furniture", "Decor", "Kitchen", "Bedding", "Garden"],
  sports: ["Fitness", "Outdoor Recreation", "Team Sports", "Water Sports", "Winter Sports"],
  books: ["Fiction", "Non-Fiction", "Children's Books", "Textbooks", "Magazines"],
}
