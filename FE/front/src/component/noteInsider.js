import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNoteState } from "../noteContext";
import CardEditor from "../hook/cardEditor";
import { createContext } from "react";

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

export default function NoteInsider() {
    const param = useParams();
    const notes = useNoteState();
    const theNote = notes.find((note) => note.id === param.id);

    return (
        <div
            style={{
                background: "#fffdee",
                border: "1px solid #000000",
                // position: "absolute",
                // width: "auto",
                // height: "auto",
            }}
        >
            <NoteTitleContainer>{theNote.name}</NoteTitleContainer>
            <SearchBar>
                검색창<button>content 추가버튼</button>
            </SearchBar>
            {theNote["cards"].length > 0 ? (
                theNote["cards"].map((crd) => <CardEditor name={crd.name} />)
            ) : (
                <div>카드없음</div>
            )}
            <button
                onClick={() => {
                    console.log(theNote);
                }}
            >
                {" "}
                내용물확인{" "}
            </button>
        </div>
    );
}
