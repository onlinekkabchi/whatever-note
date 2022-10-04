import { useParams } from "react-router-dom";
import { useNoteState } from "../noteContext";
import CardEditor from "../editor/cardEditor";
import { NoteTitleContainer, SearchBar } from "./styled-component/noteStyle";

const inputStyle = {
    background: "#fffdee",
    padding: "25px",
    left: "800px",
    position: "absolute",
};

export default function NoteInsider() {
    const param = useParams();
    const notes = useNoteState();
    const theNote = notes.find((note) => note.id === param.id);

    return (
        <div style={inputStyle}>
            <NoteTitleContainer>{theNote.name}</NoteTitleContainer>
            <SearchBar>
                <input
                    style={{
                        background: "#FFFDEE",
                        border: "0",
                        borderRadius: "15px",
                        padding: "10px",
                    }}
                    type="text"
                    onChange={() => {}}
                />
                <button>content 추가버튼</button>
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
