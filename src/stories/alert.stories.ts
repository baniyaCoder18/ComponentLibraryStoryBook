import { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from '../components/alert/alert.component';

export default {
  title: 'Alert',
  component: AlertComponent,
} as Meta;

type Story = StoryObj<AlertComponent>;
export const Default: Story = {
  args: {
    alertTitle:'',
    alertType:'error',
    alertMessages:['This is an alert'],
    closable:true,
    showAction:true,
    actionType:'close',
    autoClose:false,
    toggle:true
  },
};

