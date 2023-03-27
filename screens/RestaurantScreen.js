import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity, TouchableOpacityComponent,
    View,
} from "react-native";
import {ArrowLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon, StarIcon} from "react-native-heroicons/outline";
import {useNavigation, useRoute} from "@react-navigation/native";
import {MapPinIcon} from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const {
        params: {
            id,
            imgUrl,
            name,
            address,
            genre,
            dishes,
            lat,
            long,
            rating,
            shortDescription,
            description
        }
    } = useRoute();

    return (
        <ScrollView>
            <View className="relative">
                <Image
                    source={{
                        url: imgUrl
                    }}
                    className="w-full h-56 bg-gray-300 p-4"
                />
                <TouchableOpacity
                    className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
                    onPress={navigation.goBack}
                >
                    <ArrowLeftIcon size={20} color="#00CCBB"/>
                </TouchableOpacity>
            </View>
            <View className="bg-white">
                <View className="px-4 pt-4 pb-4">
                    <Text className="font-bold text-3xl">{ name }</Text>
                    <View className="flex-row items-center space-x-2 my-1">
                        <StarIcon opacity={ 0.4 } size={ 20 } color="green"/>
                        <Text className="text-xs text-gray-500">
                            <Text className="text-xs text-green-500">{ rating } </Text>
                             · {genre}
                        </Text>
                        <View className="flex-row items-center space-x-1">
                            <MapPinIcon size={ 22 } color="gray"/>
                            <Text className="text-xs text-gray-500">Nearby · { address }</Text>
                        </View>
                    </View>
                    <Text className="text-gray-500 mt-2 pb-4">{ description }</Text>
                </View>

                <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                    <QuestionMarkCircleIcon color="gray" opacity={ 0.6 } size={ 20 }/>
                    <Text className="text-md font-bold pl-2 flex-1">
                        Hava a food allergy?
                    </Text>
                    <ChevronRightIcon color="#00CCBB"/>
                </TouchableOpacity>
            </View>

            <View>
                <Text className="font-bold text-xl px-4 my-6">
                    Menu
                </Text>

                {/*Dish Rows*/}

                {
                    dishes.map((dish) => (
                        <DishRow
                            key={dish.id}
                            id={dish.id}
                            name={dish.name}
                            description={dish.description}
                            price={dish.price}
                            imgUrl={dish.img_url}
                        />
                    ))
                }
            </View>
        </ScrollView>
    )
}

export default RestaurantScreen;