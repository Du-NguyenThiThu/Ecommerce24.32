import { OnboardingPrograms } from "../TypesCheck/OnboardingTypesCheck";
import { CategoryParams, IProductClassParams, IProducts, SubCategoryParams } from "../TypesCheck/ProductsTypesCheck";

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
        "image": "exp://192.168.1.3:8083/assets/Men/clothing/sweetShirtRed1.jpg"
    },

    {
        "_id": "6530ebbcc9e72013e5b658dm",
        "name": "Women Fashion",
        "image": "exp://192.168.1.3:8083/assets/assets/WMen/HoodedShortGown.jpg"
    },
    {
        "_id": "757275catgecc9e72013e5b61902ch",
        "name": "Kids Fashion",
        "image": "//192.168.1.3:8083/assets/assets/Kids/kidsjeans1.jpg"
    },
    {
        "_id": "757276catgecc9e72013e5b61902cf",
        "name": "Accessories",
        "image": "//192.168.1.3:8083/assets/assets/Accessories/blackBelt1.png"
    },
    {
        "_id": "75727catgecc9e72013e5b61902cda",
        "name": "Beauty & Personal Care",
        "image": "//192.168.1.3:8083/assets/assets/BeautyP/Perfume.jpg"
    },
]


export const subCategories: SubCategoryParams[] = [
    {
        "_id": "77633scatgecc9e72013e5b61902ma",
        "name": "Clothing", // men fashion
        "image": "http://172.20.10.3:8081/assets/assets/Men/clothing/sweetShirtBlue2.png",
        "catId": "75632catgecc9e72013e5b61902ma", // men fashion

    },

    {
        "_id": "78734scatgecc9e72013e5b61902mb",
        "name": "Shoes", // men fashion
        "image": "http://172.20.10.3:8081/assets/assets/Men/Shoes/formalShoeBlack.jpg",
        "catId": "75632catgecc9e72013e5b61902ma",  // men fashion
    },

    {
        "_id": "78745scatgecc9e72013e5b61902mc",
        "name": "Watches", // men fashion
        "image": "http://172.20.10.3:8081/assets/assets/Men/Watches/GoldWatch.jpg",
        "catId": "75632catgecc9e72013e5b61902ma", // men fashion 
    },

    {
        "_id": "78756scatgecc9e72013e5b61902md",
        "name": "Bags", // men fashion
        "image": "http://172.20.10.3:8081/assets/assets/Men/Men_bags_Thumbnails.png",
        "catId": "75632catgecc9e72013e5b61902ma", // men fashion 
    },

    {
        "_id": "78767scatgecc9e72013e5b61902me",
        "name": "Accessories", // men fashion
        "image": "http://172.20.10.3:8081/assets/assets/Men/MensFashion_accessories.png",
        "catId": "75632catgecc9e72013e5b61902ma", // men fashion 
    },

    {
        "_id": "6530ebbcc9e72013e5b65933",
        "name": "clothing", // women fashion
        "image": "http://172.20.10.3:8081/assets/assets/WMen/clothing/3pcsWomenTshirt3.jpg",
        "catId": "6530ebbcc9e72013e5b658dm",

    },

    {
        "_id": "6211fdbcc9e72013e5b65916",
        "name": "Bags", // women fashion,
        "image": "http://172.20.10.3:8081/assets/assets/WMen/WHandBagPink2.png",
        "catId": "6530ebbcc9e72013e5b658dm", // women fashion 
    },

    {
        "_id": "6200fdbcc9e72013e5b65915",
        "name": "Jewelry", // women fashion,
        "image": "http://172.20.10.3:8081/assets/assets/WMen/Jewlery-sets.jpg",
        "catId": "6530ebbcc9e72013e5b658dm",  // women fashion
    },



    {
        "_id": "6212fdbcc9e72013e5b65917",
        "name": "Shoes", // women fashion,
        "image": "http://172.20.10.3:8081/assets/assets/WMen/slippers_993x550.jpg",
        "catId": "6530ebbcc9e72013e5b658dm", // women fashion 
    },

    {
        "_id": "6213fdbcc9e72013e5b65918",
        "name": "Watches", // women fashion,
        "image": "http://172.20.10.3:8081/assets/assets/WMen/women_watches_Thumbnails.png",
        "catId": "6530ebbcc9e72013e5b658dm", // women fashion 
    },

]

export const productClass: IProductClassParams[] = [


    {
        "_id": "77633scatgecc9e72013e5b62002ja",
        "name": "Tops", // men fashion
        "parentId": "77633scatgecc9e72013e5b61902ma", //Clothing
        "catId": "75632catgecc9e72013e5b61902ma", // men fashion

    },

    {
        "_id": "77633scatgecc9e72013e5b62003jb",
        "name": "Bottoms", // men fashion
        "parentId": "77633scatgecc9e72013e5b61902ma", //Clothing
        "catId": "75632catgecc9e72013e5b61902ma", // men fashion
    },

    {
        "_id": "77633scatgecc9e72013e5b62004jc",
        "name": "Hoodies & Sweetshirt", // men fashion
        "parentId": "77633scatgecc9e72013e5b61902ma", //Clothing
        "catId": "75632catgecc9e72013e5b61902ma", // men fashion
    },

    {
        "_id": "78734scatgecc9e72013e5cd1934bm",
        "name": "Formal Shoes", // men fashion
        "parentId": "78734scatgecc9e72013e5b61902mb", // shoes
        "catId": "75632catgecc9e72013e5b61902ma", // men fashion 
    },

    {
        "_id": "78734scatgecc9e72013e5cd1935bo",
        "name": "Sneakers", // men fashion
        "parentId": "78734scatgecc9e72013e5b61902mb", // shoes
        "catId": "75632catgecc9e72013e5b61902ma", // men fashion 
    },

    {
        "_id": "78734scatgecc9e72013e5cd1936bp",
        "name": "Sandals", // men fashion
        "parentId": "78734scatgecc9e72013e5b61902mb", // shoes
        "catId": "75632catgecc9e72013e5b61902ma", // men fashion 
    },

    {
        "_id": "78745scatgecc9e72013e5d71912cf",
        "name": "Sports Watch", // men fashion
        "parentId": "78745scatgecc9e72013e5b61902mc", // watches
        "catId": "75632catgecc9e72013e5b61902ma", // men fashion 
    },

    {
        "_id": "78745scatgecc9e72013e5d71923cg",
        "name": "Leather Watch", // men fashion
        "parentId": "78745scatgecc9e72013e5b61902mc", // watches
        "catId": "75632catgecc9e72013e5b61902ma", // men fashion 
    },

    {
        "_id": "78745scatgecc9e72013e5d71924ch",
        "name": "Bracelet Watch", // men fashion
        "parentId": "78745scatgecc9e72013e5b61902mc", // watches
        "catId": "75632catgecc9e72013e5b61902ma", // men fashion 
    },


    {
        "_id": "6530ebbcc9e72013e5b65422gb",
        "name": "Dresses", // women fashion
        "parentId": "6530ebbcc9e72013e5b65933", // clothing
        "catId": "6530ebbcc9e72013e5b658dm",// women fashion

    },

    {
        "_id": "6530ebbcc9e72013e5b65434gc",
        "name": "Tops", // women fashion
        "parentId": "6530ebbcc9e72013e5b65933", // clothing
        "catId": "6530ebbcc9e72013e5b658dm",// women fashion

    },

    {
        "_id": "6530ebbcc9e72013e5b65445gd",
        "name": "Bottoms", // women fashion
        "parentId": "6530ebbcc9e72013e5b65933", // clothing
        "catId": "6530ebbcc9e72013e5b658dm",// women fashion

    },


    {
        "_id": "6211fdbcc9e72013e5b65978ad",
        "name": "Handbag", // women fashion,
        "parentId": "6211fdbcc9e72013e5b65916", // bags
        "catId": "6530ebbcc9e72013e5b658dm", // women fashion 
    },

    {
        "_id": "6211fdbcc9e72013e5b65979ae",
        "name": "Clutches", // women fashion,
        "parentId": "6211fdbcc9e72013e5b65916", // bags
        "catId": "6530ebbcc9e72013e5b658dm", // women fashion 
    },

    {
        "_id": "6211fdbcc9e72013e5b65980af",
        "name": "Cross body bags", // women fashion,
        "parentId": "6211fdbcc9e72013e5b65916", // bags
        "catId": "6530ebbcc9e72013e5b658dm", // women fashion 
    },

    {
        "_id": "6211fdbcc9e72013e5b65981ag",
        "name": "Back packs", // women fashion,
        "parentId": "6211fdbcc9e72013e5b65916", // bags
        "catId": "6530ebbcc9e72013e5b658dm", // women fashion 
    },

    /* {
         "_id":"6212fdbcc9e72013e5b65917",
         "name":"Shoes", // women fashion,
         "images":"http://172.20.10.3:8081/assets/assets/WMen/slippers_993x550.jpg",
         "catId":"6530ebbcc9e72013e5b658dm", // women fashion 
     },
 
     {
         "_id":"6213fdbcc9e72013e5b65918",
         "name":"Watches", // women fashion,
         "images":"http://172.20.10.3:8081/assets/assets/WMen/women_watches_Thumbnails.png",
         "catId":"6530ebbcc9e72013e5b658dm", // women fashion 
     },*/

]

export const Products: IProducts[] = [

    {
        // "ProductParams":{
        "_id": "6531addcc9e72013e5b6191b",
        "name": "Coperate Gown",
        "images": [
            {
                "_id": "cpg123",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WomenFashion/clothing/CoperateGown1.png",
                "colId": "701530addcc9e72013e5b6100a"
            },

            {
                "_id": "cpg1234",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WomenFashion/clothing/CoperateGown2.png",
                "colId": "702130addcc9e72013e5b6101a"
            },


        ],
        "description": "Coperate Gown For Ladies and Women",
        "price": 600,
        "quantity": 10,

        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6530ebbcc9e72013e5b65933", // clothing
        "parentId": "6530ebbcc9e72013e5b65422gb", // dresses
        "isTopPick": false,
        'isFavorite': false,
        "color": [
            {
                "_id": "701530addcc9e72013e5b6100a",
                "colName": "Black",
                "colHexCode": "#000"
            },
            {
                "_id": "702130addcc9e72013e5b6101a",
                "colName": "Red",
                "colHexCode": "#FF0000"
            },

        ],

        "sizes": [
            {
                "_id": "801530addcc9e72013e5b6100a",
                "sizeType": "S",
            },
            {
                "_id": "801530addcc9e72013e5b71089bc",
                "sizeType": "M",
            },
            {
                "_id": "802130addcc9e72013e5b1019cb",
                "sizeType": "L",
            },
        ]
    },
    // },

    {

        "_id": "65302addcc9e72013e5b61902bc",
        "name": "Sleeveless Gown",
        "images": [
            {
                "_id": "slg1221",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WomenFashion/clothing/SleevelessGown1.png",
                "colId": "701632addcc9e72013e5b6101ab"
            },
            {
                "_id": "slg1222",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WomenFashion/clothing/SleevelessGown2.png",
                "colId": "701634addcc9e72013e5b6102ac"
            },
            {
                "_id": "slg1223",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WomenFashion/clothing/SleevelessGown3.png",
                "colId": "701633addcc9e72013e5b6103ad"
            },

        ],
        "description": "Dinner Gown For Ladies Women Office Skirt Casual Turkey Wears Dres",
        "price": 600,
        "quantity": 10,

        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6530ebbcc9e72013e5b65933", // clothing
        "parentId": "6530ebbcc9e72013e5b65422gb", // shirt
        "isTopPick": true,
        'isFavorite': false,
        "color": [
            {
                "_id": "701632addcc9e72013e5b6101ab",
                "colName": "Purple",
                "colHexCode": "#800080"
            },
            {
                "_id": "701634addcc9e72013e5b6102ac",
                "colName": "Red",
                "colHexCode": "#FF0000"
            },

            {
                "_id": "701633addcc9e72013e5b6103ad",
                "colName": "Yellow",
                "colHexCode": "#FFFF00"
            },



        ],
        "sizes": [
            {
                "_id": "801540addcc9e72013e5b6100a",
                "sizeType": "S",
            },
            {
                "_id": "801550addcc9e72013e5b6100a",
                "sizeType": "M",
            },
            {
                "_id": "802140addcc9e72013e5b6101a",
                "sizeType": "L",
            },
            {
                "_id": "802250addcc9e72013e5b6102a",
                "sizeType": "XL",
            },
            {
                "_id": "802360addcc9e72013e5b6103a",
                "sizeType": "XXL",
            },
        ]
    },

    {

        "_id": "6545bddcc9e72013e5b6190b",
        "name": "Women Gown",
        "images": [
            {
                "_id": "wng1233",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WomenFashion/clothing/WomenGown1.jpg",

            },

            {
                "_id": "wng1234",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WomenFashion/clothing/WomenGown2.jpg",

            },

        ],
        "description": "Dinner Gown For Ladies Women Office Skirt Casual Turkey Wears Dres",
        "price": 600,
        "quantity": 10,

        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6530ebbcc9e72013e5b65933", // clothing
        "parentId": "6530ebbcc9e72013e5b65422gb", // dresses
        "isTopPick": true,
        'isFavorite': false,

        "sizes": [
            {
                "_id": "801630fddcc9e72013e5b6100a",
                "sizeType": "S",
            },
            {
                "_id": "801640fddcc9e72013e5b6100a",
                "sizeType": "L",
            },
            {
                "_id": "802641fddcc9e72013e5b6101a",
                "sizeType": "Medium",
            },
            {
                "_id": "802642fddcc9e72013e5b6102a",
                "sizeType": "XL",
            },
            {
                "_id": "802644fddcc9e72013e5b6103a",
                "sizeType": "XXL",
            },
        ]
    },

    {
        "_id": "65333eadcc9e72013e5b61902bc",
        "name": "Long Sleeve Shirt",
        "images": [
            {
                "_id": "lgss1221",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WomenFashion/clothing/LongSleeveShirt1.jpg",
                "colId": "701743faddcc9e72013e5b6100a"
            },
            {
                "_id": "lgss1222",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WomenFashion/clothing/LongSleeveShirt21.jpg",
                "colId": "701744fbddcc9e72013e5b6100a"
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,

        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6530ebbcc9e72013e5b65933", // clothing
        "parentId": "6530ebbcc9e72013e5b65434gc", // tops
        "isTopPick": false,
        'isFavorite': false,
        "color": [
            {
                "_id": "701743faddcc9e72013e5b6100a",
                "colName": "Red",
                "colHexCode": "#FF0000"
            },

            {
                "_id": "701744fbddcc9e72013e5b6100a",
                "colName": "Bleck",
                "colHexCode": "#000"
            },

        ],
        "sizes": [
            {
                "_id": "801544fbddcc9e72013e5b6100a",
                "sizeType": "S",
            },
            {
                "_id": "801555fbddcc9e72013e5b6100a",
                "sizeType": "M",
            },
            {
                "_id": "802156fbddcc9e72013e5b6101a",
                "sizeType": "L",
            },
            {
                "_id": "802257fbddcc9e72013e5b6102a",
                "sizeType": "XL",
            },
            {
                "_id": "802358fbddcc9e72013e5b6103a",
                "sizeType": "XXL",
            },
        ]
    },

    {
        "_id": "65434aaecc9e72013e5b61902bc",
        "name": "Oversize Shirt",
        "images": [
            {
                "_id": "ovss1221",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WomenFashion/clothing/OverSizeShirt1.jpg",
                "colId": "701745fbddcc9e72013e5b6100b"
            },
            {
                "_id": "ovss1222",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WomenFashion/clothing/OverSizeShirt2.jpg",
                "colId": "701746fcddcc9e72013e5b6101ba"
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,

        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6530ebbcc9e72013e5b65933", // clothing
        "parentId": "6530ebbcc9e72013e5b65434gc", // tops
        "isTopPick": false,
        'isFavorite': false,
        "color": [
            {
                "_id": "701745fbddcc9e72013e5b6100b",
                "colName": "White",
                "colHexCode": "#FFF"
            },

            {
                "_id": "701746fcddcc9e72013e5b6101ba",
                "colName": "Purple",
                "colHexCode": "#800080"
            },

        ],
        "sizes": [
            {
                "_id": "801557fcddcc9e72013e5b6100ba",
                "sizeType": "S",
            },
            {
                "_id": "801558fcddcc9e72013e5b6100bb",
                "sizeType": "M",
            },
            {
                "_id": "802159fcddcc9e72013e5b6101bc",
                "sizeType": "L",
            },

        ]
    },

    {
        "_id": "65435daecc9e72013e5b61902bc",
        "name": "3PCS Women Tops",
        "images": [
            {
                "_id": "wtpcs1221",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WomenFashion/clothing/3pcsWomenTshirt1.jpg",

            },
            {
                "_id": "wtpcs1222",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WomenFashion/clothing/3pcsWomenTshirt1.jpg",

            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,

        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6530ebbcc9e72013e5b65933", // clothing
        "parentId": "6530ebbcc9e72013e5b65434gc", // tops
        "isTopPick": false,
        'isFavorite': false,
        "sizes": [
            {
                "_id": "801659fcddcc9e72013e5b6100ba",
                "sizeType": "S",
            },
            {
                "_id": "801670fcddcc9e72013e5b6100bb",
                "sizeType": "M",
            },
            {
                "_id": "802671fcddcc9e72013e5b6101bc",
                "sizeType": "L",
            },

        ]
    },

    {
        "_id": "65437agecc9e72013e5b6722d",
        "name": "High Waist Jean",
        "images": [
            {
                "_id": "hwj1221",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WomenFashion/clothing/LadiesHighWaistJean1.jpg",
                "colId": "701748fcadcc9e72013e5b6100b"
            },
            {
                "_id": "hwj1222",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WomenFashion/clothing/LadiesHighWaistJeanBlack2.jpg",
                "colId": "701749fcedcc9e72013e5b6100ce"
            },

            {
                "_id": "hwj1223",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WomenFashion/clothing/LadiesHighWaistJeanBlue3.jpg",
                "colId": "701750fcddcc9e72013e5b6100cd"
            },


        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,

        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6530ebbcc9e72013e5b65933", // clothing
        "parentId": "6530ebbcc9e72013e5b65445gd", // bottoms
        "isTopPick": false,
        'isFavorite': false,
        "color": [
            {
                "_id": "701748fcadcc9e72013e5b6100b",
                "colName": "White",
                "colHexCode": "#FFF"
            },

            {
                "_id": "701749fcedcc9e72013e5b6100ce",
                "colName": "black",
                "colHexCode": "#000"
            },

            {
                "_id": "701750fcddcc9e72013e5b6100cd",
                "colName": "Blue",
                "colHexCode": "#0000FF"
            },

        ],
        "sizes": [
            {
                "_id": "801557fcddcc9e72013e5b6100ba",
                "sizeType": "26",
            },
            {
                "_id": "801558fcddcc9e72013e5b6100bb",
                "sizeType": "28",
            },
            {
                "_id": "802159fcddcc9e72013e5b6101bc",
                "sizeType": "32",
            },

        ]
    },

    {
        "_id": "65437agecc9e72013e5m2972c",
        "name": "Pallazo Jean",
        "images": [
            {
                "_id": "hwj1221",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WMen/clothing/Bottoms/PallazoJean.jpg",
                "colId": "702848fcadcc9e72013e5b6402b"
            },



        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,

        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6530ebbcc9e72013e5b65933", // clothing
        "parentId": "6530ebbcc9e72013e5b65445gd", // bottoms
        "isTopPick": false,
        'isFavorite': false,
        "sizes": [
            {
                "_id": "801557fcddcc9e72013e5b6100ba",
                "sizeType": "26",
            },
            {
                "_id": "801558fcddcc9e72013e5b6100bb",
                "sizeType": "28",
            },
            {
                "_id": "802159fcddcc9e72013e5b6101bc",
                "sizeType": "32",
            },

        ]
    },

    // women bags
    {
        "_id": "65437agecc9e72013e5b61313bc",
        "name": "3Pcs Women Handbag",
        "images": [
            {
                "_id": "hwhng132fscb34bg",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WMen/bags/HandBag/WHandBagBlack1.png",
                "colId": "701748fcadcc9e7201Whnbg5b6101b"
            },

            {
                "_id": "hwhng132fscb35bf",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WMen/bags/HandBag/WHandBagPink2.png",
                "colId": "701748fcadcc9e7201Whnbg5b6102bb"
            },

            {
                "_id": "hwhng132fscb46be",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WMen/bags/HandBag/WHandBagSilver3.png",
                "colId": "701748fcadcc9e7201Whnbg5b6103bc"
            },
        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,

        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6211fdbcc9e72013e5b65916", // bags
        "parentId": "6211fdbcc9e72013e5b65978ad", // handbag
        "isTopPick": false,
        'isFavorite': false,
        "color": [
            {
                "_id": "701748fcadcc9e7201Whnbg5b6101b",
                "colName": "black",
                "colHexCode": "#000"
            },

            {
                "_id": "701748fcadcc9e7201Whnbg5b6102bb",
                "colName": "pink",
                "colHexCode": "#FFC0CB"
            },

            {
                "_id": "701748fcadcc9e7201Whnbg5b6103bc",
                "colName": "silver",
                "colHexCode": "#C0C0C0"
            },

        ],
    },

    {
        "_id": "65437agecc67e72013e5b6142bc",
        "name": "Totebag",
        "images": [
            {
                "_id": "hwhng132fscbtot35cg",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WMen/bags/HandBag/ToteBag.jpg",
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,

        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6211fdbcc9e72013e5b65916", // bags
        "parentId": "6211fdbcc9e72013e5b65978ad", // handbag
        "isTopPick": false,
        'isFavorite': false,
    },

    {
        "_id": "65437agecc67e72013e5b6143bd",
        "name": "3Pcs Brown Handbag",
        "images": [
            {
                "_id": "hwbg132fscbtot36cd",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WMen/bags/HandBag/3SetHandBagBrown3.png",
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,

        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6211fdbcc9e72013e5b65916", // bags
        "parentId": "6211fdbcc9e72013e5b65978ad", // handbag
        "isTopPick": false,
        'isFavorite': false,
    },

    {
        "_id": "65437cc67e72013e5cbd61123bf",
        "name": "Beach straw bag",
        "images": [
            {
                "_id": "hwbg132fscbd37cd",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WMen/bags/CrossBodyBags/BeachStrawBag.jpg",
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,

        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6211fdbcc9e72013e5b65916", // bags
        "parentId": "6211fdbcc9e72013e5b65980af", // cross bpdy bags
        "isTopPick": false,
        'isFavorite': false,
    },


    {
        "_id": "65437cc67e72013e5cbd61124be",
        "name": "CBD bag",
        "images": [
            {
                "_id": "hwbg132fscbd37cd",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WMen/bags/CrossBodyBags/CBDBag.jpg",
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6211fdbcc9e72013e5b65916", // bags
        "parentId": "6211fdbcc9e72013e5b65980af", // cross bpdy bags
        "isTopPick": false,
        'isFavorite': false,
    },

    {
        "_id": "65437cc67e72013e5cbd71125bg",
        "name": "Waist bag",
        "images": [
            {
                "_id": "hwbg132fscbd388ce",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WMen/bags/CrossBodyBags/WaistBag.jpg",
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6211fdbcc9e72013e5b65916", // bags
        "parentId": "6211fdbcc9e72013e5b65980af", // cross bpdy bags
        "isTopPick": false,
        'isFavorite': false,
    },

    {
        "_id": "65437cc67e72013e5clbd71326bh",
        "name": "Metallic Purse",
        "images": [
            {
                "_id": "hwbg132fclbd338cf",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WMen/bags/Clutches/MetallicPurse.jpg",
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6211fdbcc9e72013e5b65916", // bags
        "parentId": "6211fdbcc9e72013e5b65979ae", // clutches bags
        "isTopPick": false,
        'isFavorite': false,
    },

    {
        "_id": "65437cc67e72013e5clbd71327bi",
        "name": "Gold Purse",
        "images": [
            {
                "_id": "hwbg132fclbd339cg",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WMen/bags/Clutches/GoldPurse.jpg",
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6211fdbcc9e72013e5b65916", // bags
        "parentId": "6211fdbcc9e72013e5b65979ae", // clutches bags
        "isTopPick": false,
        'isFavorite': false,
    },

    {
        "_id": "65437cc67e72013e5clbd71328bj",
        "name": "Envelope Purse",
        "images": [
            {
                "_id": "hwbg132fclbd340ch",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WMen/bags/Clutches/EnvelopClutchPurse.jpg",
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6211fdbcc9e72013e5b65916", // bags
        "parentId": "6211fdbcc9e72013e5b65979ae", // clutches bags
        "isTopPick": false,
        'isFavorite': false,
    },

    {
        "_id": "65439adbcc9e72013e5b61903bb",
        "name": "Baggy Jean",
        "images": [
            {
                "_id": "bgyj1221",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/WMen/clothing/Bottoms/BaggyJeans.jpg",
            },
        ],

        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "6530ebbcc9e72013e5b658dm", // Women Fashion
        "subCategory": "6530ebbcc9e72013e5b65933", // clothing
        "parentId": "6530ebbcc9e72013e5b65445gd", // bottoms
        "isTopPick": false,
        'isFavorite': false,
        "sizes": [
            {
                "_id": "801561fcddcc9e72013e5b6102bh",
                "sizeType": "24",
            },
            {
                "_id": "801562fcddcc9e72013e5b6102bh",
                "sizeType": "25",
            },


        ]
    },


    //Men Fashion
    {
        "_id": "75642magecc9e72013e5b61902ma",
        "name": "Sweat Shirt",
        "images": [
            {
                "_id": "sts1221",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/MensFashion/clothing/sweetShirtRed1.jpg",
                "colId": "701342maadcc9e72013e5b6100ma"
            },
            {
                "_id": "stss1222",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/MensFashion/clothing/sweetShirtBlue2.png",
                "colId": "701343maadcc9e72013f7c6121mc"
            },

            {
                "_id": "stss1223",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/MensFashion/clothing/sweetShirtBlack3.png",
                "colId": "701343maadcc9e72013e6c6120mb"
            },


        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,

        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "77633scatgecc9e72013e5b61902ma", // clothing
        "parentId": "77633scatgecc9e72013e5b62004jc", // Hoodies & Sweatshirt
        "isTopPick": false,
        'isFavorite': false,
        "color": [
            {
                "_id": "701342maadcc9e72013e5b6100ma",
                "colName": "Red",
                "colHexCode": "#FF0000"
            },

            {
                "_id": "701343maadcc9e72013e6c6120mb",
                "colName": "black",
                "colHexCode": "#000"
            },

            {
                "_id": "701343maadcc9e72013f7c6121mc",
                "colName": "Blue",
                "colHexCode": "#0000FF"
            },

        ],
        "sizes": [
            {
                "_id": "701345mabdcc9e72013e5b6105scs",
                "sizeType": "S",
            },
            {
                "_id": "701346mabdcc9e72013e5b71scm",
                "sizeType": "M",
            },
            {
                "_id": "701347macdcc9e72013e5b7103scl",
                "sizeType": "L",
            },

        ]
    },


    {
        "_id": "75651maghecc9e72013e5b61902mb",
        "name": "Men Tops",
        "images": [
            {
                "_id": "hde1221",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/MensFashion/clothing/MFNTops2.png",
                "colId": "701342mabacc9e72013e4b713de"
            },
            {
                "_id": "hde1222",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/MensFashion/clothing/MFNTops1.png",
                "colId": "701342mabacc9e72013e4b711df"
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "77633scatgecc9e72013e5b61902ma", // clothing
        "parentId": "77633scatgecc9e72013e5b62002ja", // tops
        "isTopPick": true,
        'isFavorite': false,
        "color": [


            {
                "_id": "701342mabacc9e72013e4b713de",
                "colName": "yellow",
                "colHexCode": "#FFFF00"
            },

            {
                "_id": "701342mabacc9e72013e4b711df",
                "colName": "White",
                "colHexCode": "#FFF"
            },
        ],

    },

    {
        "_id": "75651maghecc9e72014f7b61902mdb",
        "name": "Men Flowered Shirt",
        "images": [
            {
                "_id": "hde1221",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/clothing/shirt/menShirtYellow1.jpg",
                "colId": "701342mabacc9e72013e5b6109mdd"
            },
            {
                "_id": "hde1222",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/clothing/shirt/menFlowerShirtBlack2.jpg",
                "colId": "701343mabccc9e72013e5c6110mda"
            },

            {
                "_id": "hde12323",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/clothing/shirt/menFlowerShirt3.jpg",
                "colId": "701343mabccc9e792013e5b6112mb"
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "77633scatgecc9e72013e5b61902ma", // clothing
        "parentId": "77633scatgecc9e72013e5b62002ja", // tops
        "isTopPick": true,
        'isFavorite': false,
        "color": [
            {
                "_id": "701342mabacc9e72013e5b6109mdd",
                "colName": "yellow",
                "colHexCode": "#FFFF00"
            },

            {
                "_id": "701343mabccc9e72013e5c6110mda",
                "colName": "black",
                "colHexCode": "#000"
            },

        ],

    },

    {
        "_id": "75651maghecc9e72014f7c61503mdc",
        "name": "Men T-Shirt",
        "images": [
            {
                "_id": "hdf123156",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/clothing/shirt/menShirtWhite.jpg",
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "77633scatgecc9e72013e5b61902ma", // clothing
        "parentId": "77633scatgecc9e72013e5b62002ja", // tops
        "isTopPick": false,
        'isFavorite': false,
    },

    {
        "_id": "75651magh014f7Mbot61503mda",
        "name": "Blue Jean",
        "images": [
            {
                "_id": "M1243Botf123157dc",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/clothing/Bottoms/BlueJean.jpg",
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "77633scatgecc9e72013e5b61902ma", // clothing
        "parentId": "77633scatgecc9e72013e5b62003jb", // bottoms
        "isTopPick": false,
        'isFavorite': false,
    },

    {
        "_id": "75651magh014f7Mbot61504mdb",
        "name": "Stock Jeans",
        "images": [
            {
                "_id": "M1243Botf123158dd",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/clothing/Bottoms/StockJeansBlack.jpg",
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "77633scatgecc9e72013e5b61902ma", // clothing
        "parentId": "77633scatgecc9e72013e5b62003jb", // bottoms
        "isTopPick": false,
    },

    {
        "_id": "75651magh014f7Mbot61505mde",
        "name": "Joggers pant",
        "images": [
            {
                "_id": "M1243Botf123159de",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/clothing/Bottoms/JoggersPantSilver1.jpg",
                "colId": "701342mabttc9e72014b6b42mvp"
            },


            {
                "_id": "M1243Botf123160df",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/clothing/Bottoms/joggerPantBlack2.jpg",
                "colId": "701342mabttc9e72014b6b411mv"

            },

        ],

        "color": [
            {
                "_id": "701342mabttc9e72014b6b42mvp",
                "colName": "silver",
                "colHexCode": "#C0C0C0"
            },

            {
                "_id": "701342mabttc9e72014b6b411mv",
                "colName": "black",
                "colHexCode": "#000"
            },



        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "77633scatgecc9e72013e5b61902ma", // clothing
        "parentId": "77633scatgecc9e72013e5b62003jb", // bottoms
        "isTopPick": false,
    },


    {
        "_id": "75651c2bx2014f7c6155c",
        "name": "Nude Hoodie",
        "images": [
            {
                "_id": "hdf123156",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/clothing/Hoodies/HoodieNude.jpg",
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "77633scatgecc9e72013e5b61902ma", // clothing
        "parentId": "77633scatgecc9e72013e5b62004jc", // Hoodie & sweatshirt
        "isTopPick": false,
    },

    {
        "_id": "75651macc2bx2014f7c60215fda",
        "name": "Black Hoodie",
        "images": [
            {
                "_id": "hdfe123167",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/clothing/Hoodies/HoodieBlack.jpg",
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "77633scatgecc9e72013e5b61902ma", // clothing
        "parentId": "77633scatgecc9e72013e5b62004jc", // Hoodie & sweatshirt
        "isTopPick": false,
    },


    {
        "_id": "42651ecc2bx2014f7c61579dx",
        "name": "Zipper Sweatshirt",
        "images": [
            {
                "_id": "hdfe1231672bb",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/clothing/Hoodies/SweatShirtZipperWhite1.jpg",
            },

            {
                "_id": "hdfe1231673bc",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/clothing/Hoodies/SweatShirtZipperBlack2.jpg",
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "77633scatgecc9e72013e5b61902ma", // clothing
        "parentId": "77633scatgecc9e72013e5b62004jc", // Hoodie & sweatshirt
        "isTopPick": false,
    },


    {
        "_id": "75642magesh42ed013e5b61902pb",
        "name": "Misslai Sneakers",
        "images": [
            {
                "_id": "stshs1212",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/Shoes/Sneakers/MisslaiSneakerWhite2.jpg",
                "colId": "701342maadshsnk2013e5bx"
            },
            {
                "_id": "stshsnk1213",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/Shoes/Sneakers/MisslaiSneakerBlack1.jpg",
                "colId": "701342maadshsnk2013f5by"
            },

        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,

        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "78734scatgecc9e72013e5b61902mb", // shoes
        "parentId": "78734scatgecc9e72013e5cd1935bo", // sneakers
        "isTopPick": true,
        "color": [
            {
                "_id": "701342maadshsnk2013f5by",
                "colName": "Black",
                "colHexCode": "#000"
            },

            {
                "_id": "701342maadshsnk2013e5bx",
                "colName": "White",
                "colHexCode": "#FFF"
            },
        ],
        "sizes": [
            {
                "_id": "701345mabdc272snk013e5b61ma",
                "sizeType": "29",
            },
            {
                "_id": "701345mabdc272snk013e5b62mb",
                "sizeType": "34",
            },
            {
                "_id": "701345mabdc272snk013f5b63mc",
                "sizeType": "39",
            },

        ]
    },

    {
        "_id": "75642magesh42ed013e5b61903pc",
        "name": "Casual Sneakers",
        "images": [
            {
                "_id": "stshs1212fx",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/Shoes/Sneakers/CasualSneakersBrown.jpg",
            },
        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,

        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "78734scatgecc9e72013e5b61902mb", // shoes
        "parentId": "78734scatgecc9e72013e5cd1935bo", // sneakers
        "isTopPick": false,
        "sizes": [
            {
                "_id": "701345mabdc272snk013e5b71na",
                "sizeType": "34",
            },
            {
                "_id": "701345mabdc272snk013e5b72nb",
                "sizeType": "29",
            },
            {
                "_id": "701345mabdc272snk013f5b73nc",
                "sizeType": "32",
            },

        ]
    },

    {
        "_id": "75642magesh42ed013e5c61904pd",
        "name": "Casual Sneakers",
        "images": [
            {
                "_id": "stshs12123c6df",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/Shoes/Sneakers/SportsSneakers.jpg",
                "colId": "701342maadshsnk2013e5bx"
            },
        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,

        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "78734scatgecc9e72013e5b61902mb", // shoes
        "parentId": "78734scatgecc9e72013e5cd1935bo", // sneakers
        "isTopPick": false,
    },


    {
        "_id": "75642magesh42ed013fsh3201pd",
        "name": "Alagzi Leather Shoe",
        "images": [
            {
                "_id": "stshs12123fsh6df",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/Shoes/FormalShoes/AlagziLeatherShoeBrown.jpg",
            },
        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,

        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "78734scatgecc9e72013e5b61902mb", // shoes
        "parentId": "78734scatgecc9e72013e5cd1934bm", // formal shoes
        "isTopPick": false,
    },


    {
        "_id": "75642magesh42ed013fsh3202pe",
        "name": "Formal Shoe",
        "images": [
            {
                "_id": "stshs12123fsh7de",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/Shoes/FormalShoes/formalShoeBlack.jpg",
            },
        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "78734scatgecc9e72013e5b61902mb", // shoes
        "parentId": "78734scatgecc9e72013e5cd1934bm", // Formal Shoes
        "isTopPick": false,
    },

    {
        "_id": "75642magesh42ed013fsh3203pf",
        "name": "White Leather Shoe",
        "images": [
            {
                "_id": "stshs12124fsh9dg",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/Shoes/FormalShoes/leatherShoeWhite.jpg",
            },
        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "78734scatgecc9e72013e5b61902mb", // shoes
        "parentId": "78734scatgecc9e72013e5cd1934bm", // Formal Shoes
        "isTopPick": false,
    },

    {
        "_id": "75642magesh42ed013snd3303pb",
        "name": "OELEZ Sandals",
        "images": [
            {
                "_id": "stshs12124fsh10ef",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/Shoes/Sandals/OELEZSandalsBrown.jpg",
            },
        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "78734scatgecc9e72013e5b61902mb", // shoes
        "parentId": "78734scatgecc9e72013e5cd1936bp", // sandals
        "isTopPick": false,
    },


    {
        "_id": "75642magesh42ed013snd3304pc",
        "name": "Leather Sandals",
        "images": [
            {
                "_id": "stshs12124fsh101eg",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/Shoes/Sandals/LeatheSandal.jpg",
            },
        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "78734scatgecc9e72013e5b61902mb", // shoes
        "parentId": "78734scatgecc9e72013e5cd1936bp", // sandals
        "isTopPick": false,
    },

    {
        "_id": "75642magesh42ed013snd3405pd",
        "name": "Unisex Sandals",
        "images": [
            {
                "_id": "stshs12124fsh102gf",
                "imageUrl": "http://172.20.10.3:8081/assets/assets/Men/Shoes/Sandals/unisexSandals.jpg",
            },
        ],
        "description": "This Product is a very good and affordable",
        "price": 600,
        "quantity": 10,
        "category": "75632catgecc9e72013e5b61902ma", // Men Fashion
        "subCategory": "78734scatgecc9e72013e5b61902mb", // shoes
        "parentId": "78734scatgecc9e72013e5cd1936bp", // sandals
        "isTopPick": false,
    },
]