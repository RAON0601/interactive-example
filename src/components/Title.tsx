import styled from "styled-components";

type TitleProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  color?: string;
};

const StyledTitle = styled.h1<TitleProps>`
  text-align: center;
  font-size: 4rem;

  color: ${(props) => props.color ?? "white"};
`;

function Title({ children, color, style }: TitleProps) {
  return (
    <StyledTitle color={color} style={style}>
      {children}
    </StyledTitle>
  );
}

export default Title;
