export type IconType = {
  iconName: string;
  fontSize?: string;
};

export interface ButtonType {
  icon: IconType;
  href?: string;
  title?: string;
}

export interface ProjectProps {
  bg: string;
  title: string;
  desc: string;
  buttons: ButtonType[];
  stack: ButtonType[];
}

export interface FooterItemProps {
  title: string;
  icon: IconType;
  link?: string;
}
