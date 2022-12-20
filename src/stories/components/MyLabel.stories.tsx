import { MyLabel, MyLabelProps } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default{
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: {control: 'select'},
        color: {control: 'select'},
        fontColor: {control: 'color'}
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel>= (args: MyLabelProps)=><MyLabel {...args}/>

export const Basic = Template.bind({});
Basic.args={
    size:'normal',
    allCaps: false // true: Capitalizar toda la palabra
}
export const AllCaps = Template.bind({});
AllCaps.args={
    size:'normal',
    allCaps: true, // true: Capitalizar toda la palabra
  
}
export const Primary = Template.bind({});
Primary.args={
    size:'normal',
    color: 'primary'
}

export const Secondary = Template.bind({});
Secondary.args={
    size:'normal',
    color: 'secondary', //primary | secondary | terciary
}
export const Terciary = Template.bind({});
Terciary.args={
    size:'normal',
    color: 'tertiary',
}
export const CustomFontColor = Template.bind({});
CustomFontColor.args={
    size:'h1',
    fontColor: '#5517ac'
}