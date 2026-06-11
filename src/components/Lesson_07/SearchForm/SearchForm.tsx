
interface SearchFormProps {
  onSearch: (query: string) => void;
}

function SearchForm({ onSearch }: SearchFormProps) {

  const handleAction = (formData: FormData) => {
    const query = String(formData.get('query')).trim();
    if (!query) {
      alert('Please enter a search query');
      return;
    }
    onSearch(query);
  }

  return <form action={handleAction}>
    <input type="text" name="query" placeholder="Search query..." />
    <button type="submit">Search</button>
  </form>;
}
export default SearchForm