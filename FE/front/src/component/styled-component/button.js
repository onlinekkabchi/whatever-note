import styled from "styled-components";

const Button = styled.div`
    height: 100px;
    width: 200px;
    background: #ccd5ae;
    display: flex;
    alignitems: center;
    justify-content: center;
    cursor: -webkit-grabbing;
    position: absolute;
    border-radius: 25px;
    font-size: 18px;
    left: ${(props) => props.buttonStartPosition};
    visibility: ${(props) => props.showButton};
`;

export { Button };
