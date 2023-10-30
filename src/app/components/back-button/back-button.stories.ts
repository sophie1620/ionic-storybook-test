import { applicationConfig, moduleMetadata, type Meta, type StoryObj, componentWrapperDecorator } from '@storybook/angular';

import { BackButtonComponent } from './back-button.component';
import { IonButton, IonicModule } from '@ionic/angular';
import { importProvidersFrom } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentsModule } from '../components.module';
import { SharedModule } from 'src/app/shared.module';


const meta: Meta<BackButtonComponent> = {
  title: 'App/BackButtonComponent',
  component: BackButtonComponent,
  parameters: {
    layout: 'centered'
  },
  args: {
    variant: 'primary',
    btnCTA: 'Go back',
  },
  render: (args: BackButtonComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['primary', 'secondary'] },
    btnCTA: {
      control: 'text' 
    }, 
    fill: {
      control: 'radio',
      options: ['clear', 'solid', 'outline'],
    },
    size: {
      control: 'radio',
      options: ['small', 'default', 'large'],
    },
    disabled: { control: 'boolean' },
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
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    (storyFn) => {
      const story = storyFn();
      return story;
    },
    componentWrapperDecorator((story) => `<ion-app style="margin: 100px">${story}</ion-app>`), 
  ],
};

export default meta;
type Story = StoryObj<BackButtonComponent>;

export const Primary: Story = {

};

export const Secondary: Story = {
  args: {
    btnType: 'warning',
    btnCTA: 'Warning!',
    fill: 'outline',
    size: 'small'
  },
};
