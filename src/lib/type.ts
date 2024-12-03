export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
}

export interface ItemProp {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export interface ItemOrder {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  totalPrice: number;
  items: ItemOrder[];
  finished: boolean;
}

export interface MenuItemProps {
  itemMenu: FoodItem;
  quantity: number;
  onUpdateOrder: (itemMenu: FoodItem | ItemOrder, quantity: number) => void;
}
