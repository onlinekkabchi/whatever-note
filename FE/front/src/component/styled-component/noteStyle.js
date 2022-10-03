import styled from "styled-components";

const NoteContainer = styled.li`
    width: 725px;
    height: 100px;
    background: ${(props) =>
        props.longPressTriggered ? "#CCD5AE" : "#E9EDC9"};
    display: flex;
    align-items: center;
    border-radius: 25px;
    padding: 0 0 0 25px;
    margin-bottom: 25px;
`;

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

const NoteTitleContainer = styled.div`
    width: 725px;
    height: 100px;
    background: #e9edc9;
    display: flex;
    align-items: center;
    border-radius: 25px;
    padding: 0 0 0 25px;
    margin-bottom: 25px;
`;

const SearchBar = styled.div`
    width: 725px;
    height: 100px;
    background: #e9edc9;
    display: flex;
    align-items: center;
    border-radius: 25px;
    padding: 0 0 0 25px;
    margin-bottom: 25px;
`;

export { Button, NoteContainer, NoteTitleContainer, SearchBar };
