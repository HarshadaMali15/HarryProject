
export const categories = [
  { id: "handmade", name: "Handmade", image: "/homepage/box.jpg", hasSubcategories: true },
  { id: "fashion", name: "Fashion", image: "/homepage/clothing.jpeg", hasSubcategories: true },
  { id: "home-garden", name: "Home & Garden", image: "/homepage/home-garden.jpeg", hasSubcategories: true },
  { id: "sports", name: "Sports & Outdoors", image: "/homepage/sports.jpeg", hasSubcategories: true },
  { id: "books", name: "Books", image: "/homepage/books.jpeg", hasSubcategories: true },
  { id: "art", name: "Art & Collectibles", image: "/homepage/art.jpeg", hasSubcategories: false },
  { id: "pets", name: "Pet Supplies", image: "/homepage/pet.jpeg", hasSubcategories: false },
  { id: "food", name: "Food & Sweets", image: "homePage/heartchoclate.webp", hasSubcategories: false },
  
]

export const subcategories: Record<string, string[]> = {
 
  handmade:["Crafted","Art", "Lamps", "Gifts"],
  fashion: ["Men's Clothing", "Women's Clothing", "Shoes", "Jewelry", "Watches"],
  "home-garden": ["Furniture", "Decor", "Kitchen", "Bedding", "Garden"],
  sports: ["Fitness", "Outdoor Recreation", "Team Sports", "Water Sports", "Winter Sports"],
  books: ["Fiction", "Non-Fiction", "Children's Books", "Textbooks", "Magazines"],
}
