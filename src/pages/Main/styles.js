import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
   margin-top: 30px;
   display: flex;

   input {
      flex: 1;
      border: 1px solid ${props => (props.error ? '#b71c1c' : '#eee')};
      padding: 10px 15px;
      border-radius: 4px;
      font-size: 16px;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
   }

   input::placeholder,
   input::-webkit-input-placeholder {
      color: #ccc;
   }
`;

const rotate = keyframes`
   from {
      transform: rotate(0deg);
   }

   to {
      transform: rotate(360deg);
   }
`;

export const SubmitButton = styled.button.attrs(props => ({
   type: 'submit',
   disabled: props.isLoading,
}))`
   background: #1565c0;
   border: none;
   padding: 0 15px;
   margin-left: 10px;
   border-radius: 4px;
   display: flex;
   justify-content: center;
   align-items: center;

   &:hover {
      transition: all 0.2s ease-in-out;
      background: #0d47a1;
   }

   &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
   }

   ${props =>
      props.isLoading &&
      css`
         svg {
            animation: ${rotate} 2s linear infinite;
         }
      `}
`;

export const List = styled.ul`
   list-style: none;
   margin-top: 30px;

   li {
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & + li {
         border-top: 1px solid rgba(0, 0, 0, 0.05);
      }

      div {
         display: flex;
         justify-content: center;
         align-items: center;

         a {
            text-decoration: none;
            font-weight: bold;
            color: #0d47a1;
         }

         svg {
            width: 30px;
            height: 18px;
            color: #c62828;
            cursor: pointer;

            &:hover {
               transition: all 0.2s ease-in-out;
               color: #b71c1c;
               transform: scale(1.05);
            }
         }
      }
   }
`;
