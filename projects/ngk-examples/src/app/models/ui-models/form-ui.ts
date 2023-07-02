export enum fieldType {
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

export const formUi = {
  groups: [
    {
      name: 'group1',
      fields: [
        {
          name: 'field1',
          type: fieldType.TextBox,
          hidden: false,
          mandatory: false,
          row: 1,
          column: 1,
        },
        {
          name: 'field2',
          type: fieldType.TextBox,
          hidden: false,
          mandatory: false,
          row: 1,
          column: 2,
        },
        {
          name: 'field3',
          type: fieldType.CheckBoxGroup,
          hidden: false,
          mandatory: false,
          items: [],
          row: 2,
          column: 1,
        },
        {
          name: 'field4',
          type: fieldType.RadioButtonGroup,
          hidden: false,
          mandatory: false,
          items: [],
          row: 3,
          column: 1,
        },
      ],
    },
  ],
};
