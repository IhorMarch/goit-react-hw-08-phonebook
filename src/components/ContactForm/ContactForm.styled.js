import styled from 'styled-components';


export const Title= styled.h2`
 text-align: center;
  font-size: 26px;
  letter-spacing: 2px;
  margin-bottom:20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  margin:auto;
  border: 3px solid ;
  border-radius: 4px;
  margin-bottom:20px;
  margin-top:20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  font-size: 20px;
`;

export const Input = styled.input`
  padding: 8px 12px;

  cursor: pointer;
`;

export const Button = styled.button`
  padding: 8px 12px;
  width: 300px;
  margin:auto;
  text-align:center;
  border-radius: 4px;
  border: 3px ;

  font-size: 18px;

&:hover,
  &:focus {

    background-color: #e2e5e8;
  }



`;