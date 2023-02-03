import "./styles.css";

export default function Search() {
  return (
    <div className="row containor">
      <form className="typename">
        <input
          type="text"
          placeholder="Type the city name"
          className="enterCity"
        />
        <input type="submit" value="Go" className="submitCity" />
      </form>
    </div>
  );
}
