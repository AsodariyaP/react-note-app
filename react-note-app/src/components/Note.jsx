const Note = ({ text }) => {
    return (
        <div className="p-4 m-4 border rounded-md shadow-md">
            <p className="text-lg">{text}</p>
        </div>
    );
}

export default Note; 