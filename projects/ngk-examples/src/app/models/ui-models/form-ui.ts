import { FIELD_TYPE, FormUI } from 'ngk-composite-builder';

export const formUi: FormUI = {
  groups: [
    {
      name: 'group1',
      fields: [
        {
          name: 'field1',
          type: FIELD_TYPE.TextBox,
          hidden: false,
          mandatory: false,
          row: 1,
          column: 1,
        },
        {
          name: 'field2',
          type: FIELD_TYPE.TextBox,
          hidden: false,
          mandatory: false,
          row: 1,
          column: 2,
        },
        {
          name: 'field3',
          type: FIELD_TYPE.CheckBoxGroup,
          hidden: false,
          mandatory: false,
          items: [],
          row: 2,
          column: 1,
        },
        {
          name: 'field4',
          type: FIELD_TYPE.RadioButtonGroup,
          hidden: false,
          mandatory: false,
          items: [],
          row: 3,
          column: 1,
        },
      ],
    },
    {
      name: 'group2',
      fields: [
        {
          name: 'field1',
          type: FIELD_TYPE.TextBox,
          hidden: false,
          mandatory: false,
          row: 1,
          column: 1,
        },
        {
          name: 'field2',
          type: FIELD_TYPE.TextBox,
          hidden: false,
          mandatory: false,
          row: 1,
          column: 2,
        },
        {
          name: 'field3',
          type: FIELD_TYPE.CheckBoxGroup,
          hidden: false,
          mandatory: false,
          items: [],
          row: 2,
          column: 1,
        },
        {
          name: 'field4',
          type: FIELD_TYPE.RadioButtonGroup,
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
