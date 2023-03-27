import {ScrollView, Text} from "react-native";
import CategoryCard from "./CategoryCard";
import useCategories from '../hooks/useCategories';
import {Fragment} from "react";

const Categories = ({ categories }) => {
    return (
        <ScrollView
            contentContainerStyle={
                {
                    paddingHorizontal: 15,
                    paddingTop: 10
                }
            }
            showsHorizontalScrollIndicator={false}
            horizontal
        >

            {/*Category Cards*/}
            {
                categories?.data?.map((category) => (
                        <CategoryCard
                             key={category.id}
                             id={category.id}
                             imgUrl={category.img_url}
                             name={category.name}/>
                    )
                )
            }
        </ScrollView>
    );
}

export default Categories;