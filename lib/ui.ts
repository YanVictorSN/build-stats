import { createSystem } from "frog/ui";

export const {
  Box,
  Row,
  Rows,
  Columns,
  Column,
  Divider,
  Image,
  Heading,
  Text,
  VStack,
  Spacer,
  vars,
} = createSystem({
  colors: {
    bg: "#0142F5",
    white: "#FBFCFE",
    black: "#0B0D0E",
    blue: "#0142F5",
  },
  frames: {
    height: 1024,
    width: 1024,
  },
  fonts: {
    default: [
      {
        name: "Inter",
        source: "google",
        weight: 500,
      },
    ],
    default_points: [
      {
        name: "Inter",
        source: "google",
        weight: 700,
      },
    ],
    title_display: [
      {
        name: "Bricolage Grotesque",
        source: "google",
      },
    ],
  },
});
