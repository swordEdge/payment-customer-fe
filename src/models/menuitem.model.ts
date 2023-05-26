export interface ISidebarMenuItem {
  label: string;
  activatedIconUrl: string;
  deactivatedIconUrl: string;
  to: string;
  activatedPath: string;
}

export interface IProfileMenuItem {
  label: string;
  to: string;
  activatedPath: string;
}
