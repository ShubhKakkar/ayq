import bcrypt from "bcryptjs";

export const users = [
  {
    name: "John",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "Jane",
    email: "user@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
];

const data = {
  products: [
    {
      name: "Apple-Drink",
      slug: "apple-cherry-cinnamon",
      category: "sports-energy-drinks",
      images: ["https://source.unsplash.com/random/250x100"],
      price: 70,
      brand: "AyQ Beverages",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description:
        "Introducing our newest sports energy drink, Apple, Cherry and Cinnamon! This delicious blend of flavors is sure to give you the boost you need to power through your toughest workouts. With natural caffeine from green tea, electrolytes to hydrate your body, and a blend of vitamins to support your overall health, this drink is perfect for athletes of all levels. Whether you're hitting the gym or hitting the trails, this refreshing beverage will help you push through any challenge. So why wait? Try AyQ Beverages' Apple, Cherry and Cinnamon sports energy drink today and experience the power of nature!",
    },
    {
      name: "Orange-Drink",
      slug: "orange-mango-turmeric",
      category: "sports-energy-drinks",
      images: ["https://source.unsplash.com/random/100x250"],
      price: 70,
      brand: "AyQ Beverages",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description:
        "Introducing our new sports energy drink, bursting with the refreshing flavors of Orange, Mango and Turmeric! Perfect for athletes looking to refuel and recharge during their workouts, this delicious drink is packed with essential vitamins and nutrients to help you power through even the toughest training sessions. The Orange and Mango provide a burst of natural sweetness, while the Turmeric adds a hint of spicy flavor and is known for its powerful anti-inflammatory properties. Whether you're running, lifting, or playing your favorite sport, this energy drink is sure to give you the boost you need to stay at the top of your game.",
    },
    {
      name: "PowerBoost Sports Energy Drink",
      slug: "powerboost-sports-energy-drink",
      category: "sports-energy-drinks",
      images: ["https://source.unsplash.com/random/150x150"],
      price: "2.99",
      brand: "EnergyZone",
      rating: 4.5,
      numReviews: 50,
      countInStock: 100,
      description:
        "PowerBoost Sports Energy Drink is a great way to get a quick energy boost during or after physical activity. It contains a blend of carbohydrates, electrolytes, and caffeine to help improve physical performance and mental alertness. Plus, it's packed with essential vitamins and minerals to support overall health and wellness. Try it today and experience the power of PowerBoost!",
    },
    {
      name: "ElectroCharge Sports Energy Drink",
      slug: "electrocharge-sports-energy-drink",
      category: "sports-energy-drinks",
      images: ["https://source.unsplash.com/random/200x200"],
      price: "2.99",
      brand: "PowerUp",
      rating: 4.0,
      numReviews: 40,
      countInStock: 80,
      description:
        "ElectroCharge Sports Energy Drink is the perfect choice for athletes and active individuals looking for a quick boost of energy and hydration. It contains a blend of electrolytes, carbohydrates, and caffeine to help improve physical performance and mental alertness. Plus, it's low in calories and sugar, making it a healthy choice for those looking to maintain their fitness goals. Try ElectroCharge today and experience the power of electrolytes!",
    },
    {
      name: "EnergyGel Sports Energy Gel",
      slug: "energygel-sports-energy-gel",
      category: "sports-energy-gels",
      images: ["https://source.unsplash.com/random/200x100"],
      price: "1.49",
      brand: "EnergyZone",
      rating: 4.5,
      numReviews: 30,
      countInStock: 50,
      description:
        "EnergyGel Sports Energy Gel is a convenient, portable way to get a quick boost of energy and nutrients during physical activity. It contains a high concentration of carbohydrates, as well as electrolytes and other nutrients, to help support athletic performance and recovery. Plus, it's easy to carry and consume on the go, making it the perfect choice for athletes and active individuals on the move. Try EnergyGel today and feel the power of energy on the go!",
    },
    {
      name: "PowerGel Sports Energy Gel",
      slug: "powergel-sports-energy-gel",
      category: "sports-energy-gels",
      images: ["https://source.unsplash.com/random/100x200"],
      price: "1.49",
      brand: "PowerUp",
      rating: 4.0,
      numReviews: 20,
      countInStock: 40,
      description:
        "Power Gel Sports Energy Gel is a quick and easy way to get the energy and nutrients you need during physical activity. It contains a high concentration of carbohydrates, as well as electrolytes and other nutrients, to help support athletic performance and recovery. Plus, it's easy to carry and consume on the go, making it the perfect choice for athletes and active individuals on the move. Try PowerGel today and feel the power of energy on the go!",
    },
    {
      name: "EnergyBar Sports Energy Bar",
      slug: "energybar-sports-energy-bar",
      category: "sports-energy-bars",
      images: ["https://source.unsplash.com/random/150x150"],
      price: "1.99",
      brand: "EnergyZone",
      rating: 4.5,
      numReviews: 40,
      countInStock: 60,
      description:
        "EnergyBar Sports Energy Bar is a convenient, portable snack that's perfect for athletes and active individuals. It contains a combination of carbohydrates, protein, and other nutrients to help provide a quick boost of energy and support overall health and wellness. Plus, it's easy to carry and consume on the go, making it the perfect choice for busy athletes and active individuals. Try EnergyBar today and experience the power of energy on the go!",
    },
    {
      name: "PowerBar Sports Energy Bar",
      slug: "powerbar-sports-energy-bar",
      category: "sports-energy-bars",
      images: ["https://source.unsplash.com/random/200x200"],
      price: "1.99",
      brand: "PowerUp",
      rating: 4.0,
      numReviews: 30,
      countInStock: 50,
      description:
        "PowerBar Sports Energy Bar is a convenient, portable snack that's perfect for athletes and active individuals. It contains a combination of carbohydrates, protein, and other nutrients to help provide a quick boost of energy and support overall health and wellness. Plus, it's easy to carry and consume on the go, making it the perfect choice for busy athletes and active individuals. Try PowerBar today and experience the power of energy on the go!",
    },
    {
      name: "HydrationBoost Sports Hydration Drink",
      slug: "hydrationboost-sports-hydration-drink",
      category: "sports-hydration-drinks",
      images: ["https://source.unsplash.com/random/200x100"],
      price: "2.99",
      brand: "EnergyZone",
      rating: 4.5,
      numReviews: 50,
      countInStock: 100,
      description:
        "HydrationBoost Sports Hydration Drink is the perfect choice for athletes and active individuals looking to stay hydrated during physical activity. It contains a blend of electrolytes, such as sodium and potassium, which can help replace the minerals lost through sweat. Plus, it's low in calories and sugar, making it a healthy choice for those looking to maintain their fitness goals. Try HydrationBoost today and experience the power of hydration on the go!",
    },
    {
      name: "HydrationPower Sports Hydration Drink",
      slug: "hydrationpower-sports-hydration-drink",
      category: "sports-hydration-drinks",
      images: ["https://source.unsplash.com/random/100x200"],
      price: "2.99",
      brand: "PowerUp",
      rating: 4.0,
      numReviews: 40,
      countInStock: 80,
      description:
        "HydrationPower Sports Hydration Drink is the perfect choice for athletes and active individuals looking to stay hydrated during physical activity. It contains a blend of electrolytes, such as sodium and potassium, which can help replace the minerals lost through sweat. Plus, it's low in calories and sugar, making it a healthy choice for those looking to maintain their fitness goals. Try HydrationPower today and experience the power of hydration on the go!",
    },
    {
      name: "RecoveryBoost Sports Recovery Drink",
      slug: "recoveryboost-sports-recovery-drink",
      category: "sports-recovery-drinks",
      images: ["https://source.unsplash.com/random/100x200"],
      price: "3.99",
      brand: "Energy Zone",
      rating: 4.5,
      numReviews: 60,
      countInStock: 120,
      description:
        "RecoveryBoost Sports Recovery Drink is a great way to help athletes and active individuals recover after physical activity. It contains a combination of protein, carbohydrates, and other nutrients to help support muscle recovery and repair. Plus, it's low in calories and sugar, making it a healthy choice for those looking to maintain their fitness goals. Try RecoveryBoost today and experience the power of recovery!",
    },
    {
      name: "RecoveryPower Sports Recovery Drink",
      slug: "recoverypower-sports-recovery-drink",
      category: "sports-recovery-drinks",
      images: ["https://source.unsplash.com/random/100x200"],
      price: "3.99",
      brand: "PowerUp",
      rating: 4.0,
      numReviews: 50,
      countInStock: 100,
      description:
        "RecoveryPower Sports Recovery Drink is a great way to help athletes and active individuals recover after physical activity. It contains a combination of protein, carbohydrates, and other nutrients to help support muscle recovery and repair. Plus, it's low in calories and sugar, making it a healthy choice for those looking to maintain their fitness goals. Try RecoveryPower today and experience the power of recovery!",
    },
  ],
};

export default data;
