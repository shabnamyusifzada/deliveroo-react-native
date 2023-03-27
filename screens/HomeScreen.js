import {Fragment} from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    View
} from "react-native";
import {
    AdjustmentsVerticalIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    UserIcon
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import useCategories from "../hooks/useCategories";

const HomeScreen = () => {

    const {data: categories, isLoading, isSuccess} = useCategories()

    return (
        <SafeAreaView className="bg-white pt-5">

            {/*Header*/}

            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon color="#00CCBB" size="20"/>
                    </Text>
                </View>
                <UserIcon color="#00CCBB" size="20"/>
            </View>

            {/*Search*/}

            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="gray" size="20"/>
                    <TextInput
                        placeholder="Restaurants and cuisines"
                        keyboardType="default"
                    />
                </View>
                <AdjustmentsVerticalIcon color="#00CCBB" size="20"/>
            </View>

            {/*Body*/}
            <ScrollView>

                {/*Categories*/}

                <Categories categories={categories}/>

                {/*Featured Rows*/}

                {
                    isLoading && (
                        <Fragment>
                             <Text>Loading...</Text>
                         </Fragment>
                    )
                }

                {
                    isSuccess &&
                    categories?.data?.map((category) => (
                        <FeaturedRow
                            key={category.id}
                            id={category.id}
                            name={category.name}
                            description={category.description}
                        />
                    ))
                }

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;