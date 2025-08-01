import FileIcon from "./fileIcon";

const ResumeButton = ({ size = "", onClick }) => {
  return (
    <button 
      className={`text-beige hover:text-beige border-2 border-beige transform transition-transform duration-300 hover:-translate-y-1 ${size}`} 
      onClick={onClick}
    >
      <div className="flex flex-row gap-2 items-center justify-center">
        <FileIcon/>
        <p>CV</p>
      </div>
    </button>
  );
};

export default ResumeButton;