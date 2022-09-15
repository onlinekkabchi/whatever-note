import { useEffect, useState } from "react";
import Note from "./note";

export default function Collection() {
    return (
        <ul
            role="list"
            className="note-collection stack-large"
            aria-labelledby="list-heading"
        >
            {notes.map((e) => {
                return <Note key={e.id} name={e.name} />;
            })}
        </ul>
    );
}
