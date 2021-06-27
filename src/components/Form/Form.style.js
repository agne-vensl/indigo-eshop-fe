import styled from "styled-components";

export const Form = styled.form`
  margin: 0 auto;
  max-width: 800px;

  & > button {
    margin-left: auto;
  }

  & > * > * {
    border: 1px solid #b6b6b6;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    outline-color: grey;
    padding: 0.9rem;
    width: 100%;
  }

  select:invalid {
    color: rgb(117, 117, 117);
  }

  select option:not(:disabled) {
    color: black;
  }

  textarea {
    resize: vertical;
  }

  @media screen and (min-width: 768px) {
    & > button {
      margin-left: 0;
      margin-right: auto;
    }

    & > * {
      display: flex;
    }

    & > * > :not(:first-child) {
      margin-left: 1rem;
    }
  }
`;
