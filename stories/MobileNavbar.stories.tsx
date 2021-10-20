import React from "react";
import { Meta, Story } from "@storybook/react";
import { MobileNavbar, MobileNavbarProps } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "MobileNavbar",
  component: MobileNavbar,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/0t0pK5luEdxTorOcg92K49/My-Travel-App?node-id=88%3A24089",
    },
  },
};

export default meta;

interface Props extends MobileNavbarProps {
  darkMode: boolean;
}

const StoryMobileNavbar: Story<Props> = (args) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <StoryLayout {...args} className="">
      <MobileNavbar open={open} setOpen={setOpen} />
    </StoryLayout>
  );
};

export const Default = StoryMobileNavbar.bind({});

Default.args = {
  darkMode: false,
  open: false,
};

Default.parameters = {
  controls: { exclude: ["setOpen"] },
};