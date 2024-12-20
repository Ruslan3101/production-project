import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    args: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],

};
export const Light: Story = {
    args: {},
};
