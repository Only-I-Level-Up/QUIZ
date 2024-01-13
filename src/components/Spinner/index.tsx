type SpinnerProps = {
  thickness: string;
  speed: string;
  color: string;
  emptyColor: string;
  size: string;
};

const Spinner = ({
  thickness,
  speed,
  color,
  emptyColor,
  size,
}: SpinnerProps) => {
  return (
    <Spinner
      thickness={thickness}
      speed={speed}
      color={color}
      emptyColor={emptyColor}
      size={size}
    />
  );
};

export default Spinner;
