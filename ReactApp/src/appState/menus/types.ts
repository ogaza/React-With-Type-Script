export type MenuName = "" | "menuOne" | "menuTwo";

export type MenusState = { menuName: MenuName };

export type SwitchMenuPayload = {
  menuName: MenuName;
};
