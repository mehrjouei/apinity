import { Meta } from '@storybook/angular';
import { CardComponent } from './card.component';
import {CardModule} from './card.module';

export default {
  title: 'CardComponent',
  component: CardComponent,
} as Meta<CardComponent>;

export const Primary = {
  render: (args: CardComponent) => ({
    props: args,
    template:`
    <div>
    <apinity-card>
      <apinity-card-header>{{header}}</apinity-card-header>
      <apinity-card-content>{{content}}</apinity-card-content>
      <apinity-card-actions>Actions</apinity-card-actions>
    </apinity-card>
    </div>
    `,
    moduleMetadata: {
    imports: [CardModule]
  }
  }),
  args: {
    header:'My Header',
    content:'My Content'
  }  
};
