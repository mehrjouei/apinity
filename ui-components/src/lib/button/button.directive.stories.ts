import { CommonModule } from '@angular/common';
import { Meta } from '@storybook/angular';
import { ButtonDirective } from './button.directive';

export default {
    title: 'ButtonDirective',
    component: ButtonDirective,
    argTypes: {
        color:{ 
            defaultValue: "primary",
            control: { type: "select", options: ["basic", "primary", "success", "warning"] } },
      },
} as Meta<ButtonDirective>;

export const Primary = {
    render: (args: ButtonDirective) => ({
        props: args,
        moduleMetadata: {
            declarations: [ButtonDirective],
            imports: [CommonModule]
        },
        template: `<button apinity-button [attr.color]="color" [loading]="loading">Click me!</button>`

    }), args: {
        loading: false,
    },
    
};