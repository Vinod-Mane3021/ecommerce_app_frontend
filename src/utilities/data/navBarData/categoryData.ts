import { CategoryProps } from "../../../types/navBarTypes";
import { kidsImages, menImages, newInImages, womenImages } from "./imageData";
import { kidsSection } from "./sections/kids";
import { MenSection } from "./sections/men";
import {newInSection } from "./sections/newIn";
import { saleSection } from "./sections/sale";
import { womenSection } from "./sections/women";

export const navigation: CategoryProps[] = [
    {
        id: 1,
        name: "New In",
        sections: newInSection,
        imageData: newInImages,
    },
    {
        id: 2,
        name: "Men",
        sections: MenSection,
        imageData: menImages,
    },
    {
        id: 3,
        name: "Women",
        sections: womenSection,
        imageData: womenImages,
    },
    {
        id: 4,
        name: "Kids",
        sections: kidsSection,
        imageData: kidsImages,
    },
    {
        id: 5,
        name: "Sale",
        sections: saleSection,
        imageData: kidsImages,
    },
    {
        id: 6,
        name: "Sneakers",
        sections: [],
        imageData: [],
    },
    {
        id: 7,
        name: "Polos",
        sections: [],
        imageData: [],
    },
    {
        id: 8,
        name: "Collections",
        sections: MenSection,
        imageData: menImages,
    },
    {
        id: 9,
        name: "We are Lacoste",
        sections: MenSection,
        imageData: newInImages,
    },
];




