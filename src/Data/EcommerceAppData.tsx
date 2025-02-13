import { OnboardingPrograms } from "../TypesCheck/OnboardingTypesCheck";
import { CategoryParams } from "../TypesCheck/ProductsTypesCheck";

export const OnboardingData: OnboardingPrograms[] = [
    {
        "_id": "onboarding1",
        "text": "Image 1",
        "imageUrl": require('../../assets/onboarding/cat404.json'),
        "textColor": "#000080",
        "backgroundColor": "rgba(25,232,127, 1)"
    },

    {
        "_id": "onboarding2",
        "text": "Image 2",
        "imageUrl": require('../../assets/onboarding/panda.json'),
        "textColor": "#000080",
        "backgroundColor": "rgb(247, 9, 216)"
    },
]

export const Category: CategoryParams[] = [
    {
        "_id": "75632catgecc9e72013e5b61902ma",
        "name": "Men Fashion",
        "image": "https://gomsuhcm.com/wp-content/uploads/2023/12/Tho-tet-2-cau-hai-huoc-cho-nam-2024.jpg"
    },

    {
        "_id": "6530ebbcc9e72013e5b658dm",
        "name": "Women Fashion",
        // "image": require('../../assets/Category/si2.jpg')
        "image": "https://gomsuhcm.com/wp-content/uploads/2023/12/Tho-tet-2-cau-hai-huoc-cho-nam-2024.jpg"
    },
    {
        "_id": "757275catgecc9e72013e5b61902ch",
        "name": "Kids Fashion",
        //"image": require('../../assets/Category/si3.jpg')
        "image": "https://gomsuhcm.com/wp-content/uploads/2023/12/Tho-tet-2-cau-hai-huoc-cho-nam-2024.jpg"
    },
    {
        "_id": "757276catgecc9e72013e5b61902cf",
        "name": "Accessories",
        //"image": require('../../assets/Category/si4.jpg')
        "image": "https://gomsuhcm.com/wp-content/uploads/2023/12/Tho-tet-2-cau-hai-huoc-cho-nam-2024.jpg"
    },
    {
        "_id": "75727catgecc9e72013e5b61902cda",
        "name": "Beauty & Personal Care",
        //"image": require('../../assets/Category/si5.jpg')
        "image": "https://gomsuhcm.com/wp-content/uploads/2023/12/Tho-tet-2-cau-hai-huoc-cho-nam-2024.jpg"
    },
]

