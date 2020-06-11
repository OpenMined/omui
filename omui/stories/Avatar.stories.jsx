import React from "react";
import {
  withKnobs,
  boolean,
  select,
  text,
  number,
} from "@storybook/addon-knobs";
import { Avatar } from "../components/Avatar";
import { AvatarGroup } from "../components/AvatarGroup";
import { themeAvatarSizes, themeBadgeColors } from "../helpers/get-theme";

export default { title: "Avatar", decorators: [withKnobs] };

export const SingleAvatar = () => (
  <Avatar
    size={select("Size", themeAvatarSizes, "md")}
    badge={select("Badge color", ["", ...themeBadgeColors])}
    name={text("Name", "Optional Name")}
    src={text("src", "https://bit.ly/sage-adebayo")}
    showBorder={boolean("Show border", false)}
  />
);

export const MultipleAvatars = () => (
  <AvatarGroup
    size={select("Size", themeAvatarSizes, "md")}
    max={number("Max number of visible avatar", 2, { min: 1, step: 1 })}
  >
    <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
    <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
    <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
    <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
    <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
  </AvatarGroup>
);
