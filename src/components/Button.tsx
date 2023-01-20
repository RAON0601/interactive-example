import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button`
  background-color: initial;
  background-image: linear-gradient(-180deg, #00d775, #00bd68);
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 10%) 0 2px 4px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  height: 44px;
  line-height: 44px;
  outline: 0;
  overflow: hidden;
  padding: 0 20px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;
  width: 100%;
  z-index: 9;
  border: 0;

  &:hover {
    background: #00bd68;
  }
`;

function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
