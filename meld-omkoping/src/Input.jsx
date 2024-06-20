import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 1.4em;
  box-shadow: 2px 2px 0 slategray;
`;

export default function Button({ type, label, ...props }) {
  return (
    <div>
      <label>
        {`${label}: `}
        <StyledInput type={type} {...props} />
      </label>
    </div>
  );
}
