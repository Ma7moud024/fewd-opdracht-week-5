import styled from "styled-components";

const StyledButton = styled.button`
  background: linear-gradient(#e66465, #9198e5);
  border-radius: 5px;
  color: white;
  font-size: 1.4em;
  box-shadow: 2px 2px 0 slategray;
`;

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
