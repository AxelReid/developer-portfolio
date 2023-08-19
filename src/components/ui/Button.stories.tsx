import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

export default {
  title: "UI/Button",
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
};
// export const : Story = {
//   args: {
//     variant: "default",
//     children:'Default'
//   },
// };
