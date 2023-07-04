export enum FIELD_TYPE {
  TextBox,
  RadioButton,
  RadioButtonGroup,
  CheckBox,
  CheckBoxGroup,
  DropDown,
  ComboBox,
  AutoComplete,
  Grid,
  LookUp,
}

export interface FormUI {
  groups: Group[];
}

export interface Group {
  name: string;
  fields: Field[];
}

export interface Field {
  name: string;
  type: FIELD_TYPE;
  hidden: boolean;
  mandatory: boolean;
  row: number;
  column: number;
  items?: any[]; // Adjust the type according to the actual structure of items
}
