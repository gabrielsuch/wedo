import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  height: 95px;
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background-color: var(--color-primary-dark);
  margin: 4px;

  :hover {
    background-color: var(--color-primary);
  }

  .title {
    h3 {
      word-break: break-word;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .date {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .alignItems {
    display: flex;
    flex-direction: row;

    p:nth-child(2) {
      padding-left: 10px;
    }
  }

  .icon {
    button:hover {
      background-color: var(--color-secondary);
      color: white;
      border-radius: 0px;
      border-bottom-right-radius: 10px;
    }
  }
`;
