import { IconNames } from "../icon";

export interface SideMenuProps {
  menuItems: MenuItemProps[];
  footerItems?: MenuItemProps[];
  className?: string;
}

export interface MenuItemProps {
  icon: IconNames;
  path: string;
  label?: string;
  active?: boolean;
  className?: string;
}
