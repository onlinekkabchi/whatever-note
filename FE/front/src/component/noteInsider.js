import { useLoaderData } from "react-router-dom";
export default function NoteInsider() {
    const loader = useLoaderData();

    return (
        <div
            style={{
                background: "#fffdee",
                border: "1px solid #000000",
                // position: "absolute",
                width: "725px",
                height: "500px",
            }}
        >
            <button
                onClick={() => {
                    console.log(loader);
                }}
            >
                {loader.name}
            </button>
        </div>
    );
}
