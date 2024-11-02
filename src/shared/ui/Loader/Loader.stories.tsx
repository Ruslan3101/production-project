import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader, ThemeButton } from './Loader';

const meta = {
    title: 'shared/Loader',
    component: Loader,

    args: { onClick: fn() },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],

};
export const Light: Story = {
    args: {},
};
