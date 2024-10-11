import { FC, FormEvent } from "react";
import { FiSearch } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  function handleSubmit(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const input = form.elements.namedItem("search") as HTMLInputElement;
    const query = input.value.trim();
    if (query === "") {
      toast.error("Search query cannot be empty!");
    } else {
      onSearch(query);
    }
    form.reset();
  }

  return (
    <header className={style.searchBar}>
      <Toaster />
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          className={style.searchFld}
        />
        <button type="submit" className={style.searchBtn}>
          <FiSearch size="24px" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
