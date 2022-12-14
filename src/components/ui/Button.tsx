interface Props {
  name: string;
  icon?: any;
}
const Button: React.FC<Props> = ({ name, icon }: Props) => {
  return (
    <button type="button">
      {icon}
      {name}
    </button>
  );
};

export default Button;
