import "./23-container-queries.css";
export function ContainerQueries() {
  return (
    <div className="query-demo">
      <article className="query-demo__card">
        <div className="query-demo__image">Zdjęcie</div>
        <div>
          <h3>Container queries</h3>
          <p>
            Przeciągnij szerokość kontenera, jeśli przeglądarka umożliwia
            resize.
          </p>
        </div>
      </article>
    </div>
  );
}
