export type NavigationTypes = {
  id: number;
  title: string;
  sub?: NavigationTypes; // sub is not requires
};
