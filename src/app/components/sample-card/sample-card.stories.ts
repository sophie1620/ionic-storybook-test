import { applicationConfig, moduleMetadata, type Meta, type StoryObj, componentWrapperDecorator } from '@storybook/angular';

import { SampleCardComponent } from './sample-card.component';
import { IonicModule } from '@ionic/angular';
import { importProvidersFrom } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const meta: Meta<SampleCardComponent> = {
  title: 'App/SampleCardComponent',
  component: SampleCardComponent,
  args: { 
    darkMode: false,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequuntur doloremque obcaecati doloribus vel explicabo nostrum ullam quos officia! Suscipit repudiandae laudantium mollitia deleniti eveniet? Quaerat esse nam minima?Accusantium!'
  },
  render: (args: SampleCardComponent) => ({
    props: {
      ...args,
    }
  }),
  argTypes: {
    darkMode: { 
      control: { type: 'boolean'}
    },
    text: {
      control: { type: 'text' }
    }
  },
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom([IonicModule.forRoot(
        {
          backButtonText: '',
          backButtonIcon: 'chevron-back-outline',
          animated: true,
          rippleEffect: true,
          mode: 'md',
        }
      )])],
    }),
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    (storyFn) => {
      const story = storyFn();
      return story;
    },
    componentWrapperDecorator((story) => `<ion-app>${story}</ion-app>`),
  ],
};

export default meta;
type Story = StoryObj<SampleCardComponent>;

export const Default: Story = {
  
}

export const LongText: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda repellat placeat et, eius molestiae similique! Repudiandae ex debitis quo ducimus nisi molestiae aut laboriosam laborum consequuntur, delectus modi magni. Sit eveniet corporis nobis deserunt id necessitatibus quae esse nemo.Eaque enim animi voluptate aperiam iure obcaecati.Dignissimos repellat officiis dicta voluptatum cum culpa nemo.Nisi harum voluptate officia illo? Ea soluta sit facilis molestiae laudantium pariatur quod amet aliquam.Sapiente, odit!'
  }
}