import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 725px;
    height: ${(props) => (props.openCard ? "auto" : "100px")};
    background: #faedcd;
    border-radius: 25px;
    padding: 0 0 0 25px;
    margin-bottom: 25px;
`;

const Content = styled.div`
    display: none;
    width: 670px;
    min-height: 53px;
    background: #fffdee;
    align-items: center;
    border-radius: 15px;
    padding: 0 0 0 25px;
    margin-bottom: 25px;
`;

export { Content, CardContainer };
