type Props = {
  children: string;
  // children: React.ReactNode
};

export const Text = ({ children }: Props) => {
  return <p>{children}</p>;
};
