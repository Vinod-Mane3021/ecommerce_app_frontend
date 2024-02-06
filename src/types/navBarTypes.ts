export interface CategoryProps {
  id: number;
  name: string;
  sections: SectionsProps[];
  imageData: ImageDataProps[];
}

export interface ImageDataProps {
  id: number;
  name: string;
  image: string;
  route: string;
}
export interface SectionsProps {
  id: number;
  name: string;
  items: ItemsProps[];
}
export interface ItemsProps {
  name: string;
  href: string;
}

export interface PopoverButtonProps {
  name: string;
  open: boolean;
  isNavOpen: boolean;
}
