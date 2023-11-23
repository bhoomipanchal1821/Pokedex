import "./SearchBox.css";

interface SearchboxProps {
  onInputChange: (inputValue: string) => void;
}
const SearchBox = ({onInputChange}: SearchboxProps) => {
  return (
    <div className="conatiner d-flex justify-content-center">
      <div className="row w-50 h-50 text-dark mx-auto">
        <input
          className="form-control form-control-lg mt-5 shadow-none p-2"
          onChange={(e) => {
            console.log(e.target.value);
            onInputChange(e.target.value);
          }}
          type="search"
          placeholder="Search Pokemon"
        />
      </div>
    </div>
  );
};
export default SearchBox;
