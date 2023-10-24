import { applicationConfig, moduleMetadata, type Meta, type StoryObj, componentWrapperDecorator } from '@storybook/angular';

import { BackButtonComponent } from './back-button.component';
import { IonButton, IonicModule } from '@ionic/angular';
import { importProvidersFrom } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentsModule } from '../components.module';


const meta: Meta<BackButtonComponent> = {
  title: 'App/BackButtonComponent',
  component: BackButtonComponent,
  render: (args: BackButtonComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    color: {
      control: { type: 'color' }
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
      declarations: [BackButtonComponent],
      imports: [ComponentsModule],
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
type Story = StoryObj<BackButtonComponent>;

export const Primary: Story = {
  args: {
    color: 'orange'
  },
};

export const Secondary: Story = {
  args: {
    color: 'black'
  },
};

export const Danger: Story = {
  args: {
    color: 'green',
  },
};

export const Warning: Story = {
  args: {
    color: 'red',
  },
};