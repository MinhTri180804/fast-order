export interface ICoreElement {
  attributeList?: IAttributes[];
  className?: string[];
  id?: string;
}

interface IAttributes {
  name: string;
  value: string;
}
