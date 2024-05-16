import { Meta, StoryObj } from '@storybook/angular';
import { CalenderComponent } from '../components/calender/calender.component';

export default {
  title: 'Calender',
  component: CalenderComponent,
} as Meta;

type Story = StoryObj<CalenderComponent>;
export const Default: Story = {
  args: {
    message: 'This is a calender',
  },
};

