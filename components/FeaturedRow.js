import {
    ScrollView,
    Text,
    View
} from "react-native";
import {ArrowRightIcon} from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import useRestaurants from "../hooks/useRestaurants";
import {Fragment} from "react";

const FeaturedRow = ({id, name, description}) => {

    const {data: restaurants, isLoading, isSuccess} = useRestaurants();

    return (
        <View className="mx-4">
            <View className="mt-4 flex-row items-center justify-between">
                <Text className="font-bold text-lg">{name}</Text>
                <ArrowRightIcon color="#00CCBB"/>
            </View>

            <Text className="text-xs text-gray-500">{description}</Text>

            <ScrollView
                contentContainerStyle={
                    {
                        paddingHorizontal: 15
                    }
                }
                showsHorizontalScrollIndicator={false}
                horizontal
                className="pt-4"
            >
                {
                    isLoading && (
                        <Fragment>
                            <Text>Loading...</Text>
                        </Fragment>
                    )
                }
                {
                    isSuccess &&
                    restaurants?.data.map((restaurant) => (
                        <RestaurantCard
                            id={ restaurant.id}
                            key={ restaurant.id }
                            imgUrl={ restaurant.img_url }
                            name={ restaurant.name }
                            rating={ restaurant.rating }
                            genre={ restaurant.genre.name }
                            address={ restaurant.address }
                            shortDescription={ restaurant.short_description }
                            description={ restaurant.description }
                            dishes={ restaurant.dishes }
                            long={ restaurant.longitude }
                            lat={ restaurant.latitude }
                        />

                    ))
                }
            </ScrollView>
        </View>
    )
}

export default FeaturedRow