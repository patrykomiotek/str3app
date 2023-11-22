type Props = {
  children: string | string[];
  // children: React.ReactNode
};

export const Text = ({ children }: Props) => {
  return <p>{children}</p>;
};
