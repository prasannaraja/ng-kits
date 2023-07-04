import { FIELD_TYPE, FormUI } from 'ngk-composite-builder';

export const formUi: FormUI = {
  groups: [
    {
      name: 'Group 1',
      fields: [
        {
          name: 'TextField',
          type: FIELD_TYPE.TextBox,
          hidden: false,
          mandatory: true,
          row: 1,
          column: 1,
        },
        {
          name: 'RadioButton',
          type: FIELD_TYPE.RadioButton,
          hidden: false,
          mandatory: false,
          row: 2,
          column: 1,
        },
        {
          name: 'RadioButtonGroup',
          type: FIELD_TYPE.RadioButtonGroup,
          hidden: false,
          mandatory: true,
          row: 3,
          column: 1,
          items: ['Option 1', 'Option 2', 'Option 3'],
        },
        {
          name: 'CheckBox',
          type: FIELD_TYPE.CheckBox,
          hidden: false,
          mandatory: false,
          row: 4,
          column: 1,
        },
        {
          name: 'CheckBoxGroup',
          type: FIELD_TYPE.CheckBoxGroup,
          hidden: false,
          mandatory: true,
          row: 5,
          column: 1,
          items: ['Option 1', 'Option 2', 'Option 3'],
        },
        {
          name: 'DropDown',
          type: FIELD_TYPE.DropDown,
          hidden: false,
          mandatory: true,
          row: 6,
          column: 1,
          items: ['Option 1', 'Option 2', 'Option 3'],
        },
        {
          name: 'ComboBox',
          type: FIELD_TYPE.ComboBox,
          hidden: false,
          mandatory: false,
          row: 7,
          column: 1,
        },
        {
          name: 'AutoComplete',
          type: FIELD_TYPE.AutoComplete,
          hidden: true,
          mandatory: true,
          row: 8,
          column: 1,
        },
        {
          name: 'Grid',
          type: FIELD_TYPE.Grid,
          hidden: false,
          mandatory: false,
          row: 9,
          column: 1,
        },
        {
          name: 'LookUp',
          type: FIELD_TYPE.LookUp,
          hidden: true,
          mandatory: true,
          row: 10,
          column: 1,
        },
      ],
    },
    {
      name: 'Group 2',
      fields: [
        {
          name: 'TextField',
          type: FIELD_TYPE.TextBox,
          hidden: false,
          mandatory: true,
          row: 1,
          column: 1,
        },
        {
          name: 'RadioButton',
          type: FIELD_TYPE.RadioButton,
          hidden: false,
          mandatory: false,
          row: 2,
          column: 1,
        },
        {
          name: 'RadioButtonGroup',
          type: FIELD_TYPE.RadioButtonGroup,
          hidden: false,
          mandatory: true,
          row: 3,
          column: 1,
          items: ['Option 1', 'Option 2', 'Option 3'],
        },
        {
          name: 'CheckBox',
          type: FIELD_TYPE.CheckBox,
          hidden: false,
          mandatory: false,
          row: 4,
          column: 1,
        },
        {
          name: 'CheckBoxGroup',
          type: FIELD_TYPE.CheckBoxGroup,
          hidden: false,
          mandatory: true,
          row: 5,
          column: 1,
          items: ['Option 1', 'Option 2', 'Option 3'],
        },
        {
          name: 'DropDown',
          type: FIELD_TYPE.DropDown,
          hidden: false,
          mandatory: true,
          row: 6,
          column: 1,
          items: ['Option 1', 'Option 2', 'Option 3'],
        },
        {
          name: 'ComboBox',
          type: FIELD_TYPE.ComboBox,
          hidden: false,
          mandatory: false,
          row: 7,
          column: 1,
        },
        {
          name: 'AutoComplete',
          type: FIELD_TYPE.AutoComplete,
          hidden: true,
          mandatory: true,
          row: 8,
          column: 1,
        },
        {
          name: 'Grid',
          type: FIELD_TYPE.Grid,
          hidden: false,
          mandatory: false,
          row: 9,
          column: 1,
        },
        {
          name: 'LookUp',
          type: FIELD_TYPE.LookUp,
          hidden: true,
          mandatory: true,
          row: 10,
          column: 1,
        },
      ],
    },
  ],
};
