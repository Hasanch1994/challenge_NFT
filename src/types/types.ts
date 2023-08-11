export type NavigationTypes = {
  id: number;
  title: string;
  sub?: NavigationTypes; // sub is not requires
};

export type TabType = {
  title: string;
  content: React.ReactNode;
};
