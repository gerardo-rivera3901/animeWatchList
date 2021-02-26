import styled from 'styled-components'

export const HeaderForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
  top: 0;
  padding: 1% 2%;
  background: #32746D;
  /* position: fixed; */
  h1 {
    color: #fff;
    width: 50%;
  }
  div {
    display: flex;
  }
  input {
    padding: 0.25rem 0.5rem;
  }
  #search {
    margin: 2%;
    padding: 0.5rem 2rem;
    border-radius: 5px;
  }
`;

export const StyledCard = styled.div`
  width: 80%;
  background: grey;
`;
