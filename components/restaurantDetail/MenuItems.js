import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

const foods = [
    {
        title: "Lasagna",
        description:
            "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3B707DAE-A600-44FC-B7D5-15896184874D/Derivates/e3304b41-3431-4b6e-b600-8ee6bd94cdbe.jpg"
    },
    {
        title: "Chilaquiles",
        description:
            "Chilaquiles with cheese and sauce. A delicious mexican food",
        price: "$14.50",
        image: "https://t1.rg.ltmcdn.com/es/posts/6/9/0/chilaquiles_rojos_con_pollo_75096_orig.jpg"
    },
    {
        title: "Tandoori Chicken",
        description:
            "Amazing Indian dish with tenderloin chicken off the sizzy",
        price: "$19.20",
        image: "https://static.onecms.io/wp-content/uploads/sites/9/2021/10/21/grilled-tandoori-chicken-FT-RECIPE1021.jpg"
    },
    {
        title: "Chicken Caesar salad",
        description:
            "One can never go wrong with a chicken caesar salada. Healthy chicken meal",
        price: "$21.50",
        image: "https://www.seriouseats.com/thmb/ugNLQE6hZcoZx0Tzu780h1L3lfc=/3750x3750/smart/filters:no_upscale()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg"
    },
];

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    foodInfoStyle: {
        width: 240,
        justifyContent: 'space-evenly'
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '600'
    },
    imageStyle: {
        width: 100,
        height: 100,
        borderRadius: 8
    },
    iconOverriteStyle: {
        borderColor: "lightgray",
        borderRadius: 0
    }
});


export default function MenuItems({ restaurantName }) {
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                ...item,
                restaurantName: restaurantName,
                checkboxValue: checkboxValue
            }
        });
    };

    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);

    const isFoodInCart = (food, cartItems) => {
        return Boolean(cartItems.find((item) => item.title == food.title));
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <BouncyCheckbox
                            iconStyle={styles.iconOverriteStyle}
                            fillColor="green"
                            onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                            isChecked={isFoodInCart(food, cartItems)}
                        />
                        <FoodInfo food={food} />
                        <FoodImage image={food.image} />
                    </View>
                    <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20 }} />
                </View>
            ))}
        </ScrollView>
    )
}

const FoodInfo = ({ food }) => (
    <View style={styles.foodInfoStyle}>
        <Text style={styles.titleStyle}>{food.title}</Text>
        <Text>{food.description}</Text>
        <Text>{food.price}</Text>
    </View>
)

const FoodImage = ({ image }) => (
    <View>
        <Image source={{ uri: image }} style={styles.imageStyle} />
    </View>
)


