import styled from "styled-components";

const CollectionContainer = styled.div`
    display: flex;
    margin: 0;
`;

const InputBox = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    margin: 15px;
`;

const CardList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: ${(props) => (props.open ? "0px" : "-700px")};
    width: 800px;
    min-height: 1173px;
    background: #fffdee;
    z-index: 1;
    // border: 1px solid #000000;
`;

export { CollectionContainer, InputBox, CardList };
