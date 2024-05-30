import styled from 'styled-components';

//[💚 Good Practice]: often wrap Label and Input components into a single Component
/* 
🌸 Dynamic/Conditional Styling with Styled Components
  (
    e.g. set the color value dynamically:
    --> ❗️pass 'props' obj into Styled Component
    --> [🔹Custom Styled Component's naming convention]: 
          custom props properties start with '$' prefix so they won't clash with built-in SC props
  )
*/
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => (props.$invalid ? '#f87171' : '#6b7280')};

  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({ $invalid }) => ($invalid ? '#fed2d2' : '#d1d5db')};
  color: ${({ $invalid }) => ($invalid ? '#ef4444' : '#374151')};
  border: 1px solid ${({ $invalid }) => ($invalid ? '#f73f3f' : 'transparent')};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export default function CustomInput({ label, invalid, ...props }) {
  return (
    <p>
      <Label $invalid={invalid}>{label}</Label>
      <Input $invalid={invalid} {...props} />
    </p>
  );
}
