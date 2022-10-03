import { useParams } from "react-router-dom";
import { useNoteState } from "../noteContext";
import CardEditor from "../editor/cardEditor";
import { NoteTitleContainer, SearchBar } from "./styled-component/noteStyle";

export default function NoteInsider() {
    const param = useParams();
    const notes = useNoteState();
    const theNote = notes.find((note) => note.id === param.id);

    return (
        <div
            style={{
                background: "#fffdee",
                padding: "25px",
                left: "150px",
                position: "absolute",
                // width: "auto",
                // height: "auto",
            }}
        >
            <NoteTitleContainer>{theNote.name}</NoteTitleContainer>
            <SearchBar>
                검색창<button>content 추가버튼</button>
            </SearchBar>
            {theNote["cards"].length > 0 ? (
                theNote["cards"].map((crd) => (
                    <CardEditor name={crd.name} contents={crd.contents} />
                ))
            ) : (
                <div>단어카드없음</div>
            )}
        </div>
    );
}
