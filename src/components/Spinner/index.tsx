import styled from "@emotion/styled";

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
    <StyledSpinner>
      <Spinner
        thickness={thickness}
        speed={speed}
        color={color}
        emptyColor={emptyColor}
        size={size}
      />
    </StyledSpinner>
  );
};

export default Spinner;

const StyledSpinner = styled.div`
  width: 100%;
  height: 100dhv;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
