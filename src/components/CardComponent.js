import React from "react";

function CardComponent(props) {
  const { tag, articles } = props;

  return (
    <div className="card">
      <header>
        <h3>{tag}</h3>
        {tag == "Listings" && (
          <a href="#">
            <small>See all</small>
          </a>
        )}
      </header>
      <ul>
        {articles.map((a) => {
          return (
            <li key={a.id}>
              <a href="#">{a.mainTitle}</a>
              <br />
              <small>{a.subtext}</small>
              {a.newarticle && <span>new</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CardComponent;
