export type NavigationTypes = {
  id: number;
  title: string;
  sub?: NavigationTypes; // sub is not requires
};

export type TabType = Pick<NavigationTypes, "title"> & {
  title: string;
  content: React.ReactNode;
};

export type AttributeType = Pick<TabType, "title"> & {
  id: number;
  type: string;
  percent: number;
  value: number | string;
};

// inheritance  id,title,value of attribute type
export type DetailType = Omit<AttributeType, "type" | "percent">;

export type CountDownType = Omit<AttributeType, "percent" | "title">;

export type BaseContextType = {
  termIsOpen: boolean;
  handleTerms: (status: boolean) => void;
};
