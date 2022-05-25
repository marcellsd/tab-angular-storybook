
import { Story, Meta } from '@storybook/angular/types-6-0';

import {TabItensComponent} from 'src/app/components/tabItens.component';

export default {
  title: 'Tab/Itens',
  component: TabItensComponent,
 
  argTypes: {
    currentTab: { control: { type: 'range', min: 0, max: 5, step: 1 } }
  },
} as Meta;


const Template: Story<TabItensComponent> = (args: TabItensComponent) => ({
  props: args,
});

export const TabItens1 = Template.bind({});

TabItens1.args = {
  tabNames: ['T 1','T 2','T 3','T 4'],
  tabTexts: ['Texto do primeiro tab',
              'Texto do segundo tab',
              'Texto do terceiro tab',
              'Texto do quarto tab'],
    currentTab: 0,
};

export const TabItens2 = Template.bind({});
TabItens2.args = {
    tabNames: ['T 1','T 2','T 3','T 4','T 5'],
    tabTexts: ['Texto do primeiro tab',
              'Texto do segundo tab',
              'Texto do terceiro tab',
              'Texto do quarto tab',
              'Texto do quinta tab'],
  currentTab: 2
};


