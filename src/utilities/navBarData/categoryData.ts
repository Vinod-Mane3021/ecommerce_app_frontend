import { CategoryProps } from "../types/navBarTypes";
import { newInImages } from "./imageData";
import { MenSection, newInSection } from "./sectionsData";

export const navigation = [
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
        imageData: newInImages,
    },
    {
        id: 3,
        name: "Women",
        sections: newInSection,
        imageData: newInImages,
    },
    {
        id: 4,
        name: "Kids",
        sections: MenSection,
        imageData: newInImages,
    },
    {
        id: 5,
        name: "Sale",
        sections: newInSection,
        imageData: newInImages,
    },
    {
        id: 6,
        name: "Polos",
        sections: [],
        imageData: [],
    },
    {
        id: 7,
        name: "Sneakers",
        sections: [],
        imageData: [],
    },
    {
        id: 8,
        name: "Collections",
        sections: MenSection,
        imageData: newInImages,
    },
    {
        id: 9,
        name: "We are Lacoste",
        sections: MenSection,
        imageData: newInImages,
    },
];




