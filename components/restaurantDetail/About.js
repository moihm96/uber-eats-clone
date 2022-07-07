import React from 'react';
import { View, Text, Image } from 'react-native';

const yelpRestaurantInfo = {
    name: "Farmhouse Kitchen Thai cuisine",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    price: "$$",
    reviews: '1500',
    rating: 4.5,
    categories: [{ title: "Thai" }, { title: "Comfort Food" }]
};


export default function About({ route }) {
    const { name, image, price, reviews, rating, categories } = route.params;
    const formattedCategories = categories.map((cat) => cat.title).join(" • ");
    const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+) `;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <ResturantDescription description={description} />
        </View>
    )
}

const RestaurantImage = ({ image }) => (
    <Image source={{ uri: image }} style={{ width: "100%", height: 120 }} />
);

const RestaurantName = ({ name }) => (
    <Text style={{ fontSize: 22, fontWeight: "600", marginTop: 10, marginHorizontal: 15 }}>{name}</Text>
);

const ResturantDescription = ({ description }) => (
    <Text style={{ fontSize: 14.5, fontWeight: "400", marginTop: 10, marginHorizontal: 15 }}>{description}</Text>
)