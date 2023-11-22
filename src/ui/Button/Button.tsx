// enum Color {
//   carrot = "#e67e22",
//   alizarin = "#e74c3c",
//   "peter-river" = "#3498db",
//   clouds = "#ecf0f1",
//   "midnight-blue" = "#2c3e50",
// }

const palette = {
  carrot: "#e67e22",
  alizarin: "#e74c3c",
  "peter-river": "#3498db",
  clouds: "#ecf0f1",
  "midnight-blue": "#2c3e50",
};

type Color = keyof typeof palette;

type Props = {
  label: string;
  color?: Color;
  bgColor?: Color;
};

export const Button = ({
  label,
  color = "clouds",
  bgColor = "midnight-blue",
}: Props) => {
  const styles = {
    color: palette[color],
    backgroundColor: palette[bgColor],
  };

  return <button style={styles}>{label}</button>;
};
