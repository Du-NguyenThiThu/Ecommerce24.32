export interface CategoryParams {
    _id: string;
    name?: string;
    image: string;
    activeCat?: string;
    onPress?: () => void
}

export interface ICatParams {
    catProps: CategoryParams;
    catStyleProps: {
        width?: number;
        height?: number
        radius?: number;
        resizeMode?: "contain" | "cover" | "stretch"
    }
}

export interface ImageProps {
    _id?: string;
    imageUrl: string;
    colId?: string
}

export interface sizeProps {
    _id?: string;
    sizeType?: string;
}

export interface colProps {
    _id: string;
    colName?: string;
    colHexCode?: string
}
export interface IProducts {
    _id: string;
    name: string;
    images: ImageProps[];
    description?: string;
    price: number;
    oldPrice?: number;
    quantity?: number;
    isTopPick?: boolean;
    isFavorite?: boolean;
    sizes?: sizeProps[];
    color?: colProps[];
    inStock?: boolean;
    category?: string;
    subCategory?: string;
    parentId?: string
    createAt?: Date
    updatedAt?: Date
}


export interface PCProps {
    ProductParams: IProducts;
    PC: {
        onPress?: () => void;
        index?: number;
        toggleFavorite?: () => void
    }

    PCStyles: {
        width?: number;
        marginHorizontal?: number;
        marginBottom?: number;
        height?: number
        resizeMode?: "contain" | "cover" | "stretch";
        textAlign?: "center" | "auto" | "left"
    }
}

export interface Tablist {
    _id: string;
    name?: string;
    catId?: string;
    activeCat?: string;
    onPress?: () => void

}
export interface ITabListParams {
    TabList: Tablist[]
    textTitle?: string
}

export interface SubCategoryParams {
    _id: string;
    name: string;
    image: string;
    catId?: string;
    activeSubCat?: string;
    onPress?: () => void
}


export interface IProductClassParams {
    _id: string;
    name: string;
    catId?: string;
    parentId?: string;
    activeSubCat?: string;
    onPress?: () => void
}