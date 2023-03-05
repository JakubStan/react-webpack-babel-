<Carousel interval={null}>
  {WineData.map((wine) => {
    return (
      <Carousel.Item id={wine.id}>
        <div className="item-content">
          <div className="left-col">
            <p>{wine.year}</p>
            <h4>{wine.name}</h4>
            <p className="description">{wine.description}</p>
          </div>

          <img src={wine.src} />

          <div className="right-col">
            <div className="wine-info">
              <p>Format</p>
              <p>{wine.format}</p>
            </div>
            <div className="wine-info">
              <p>Zawartosć Alkocholu</p>
              <p>{wine.alkochol} %</p>
            </div>
            <div className="wine-info">
              <p>Cena</p>
              <p>{wine.price} Є</p>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          id="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="Prev"
          id="prev"
        >
          <span class="carousel-control-Prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Prev</span>
        </button>
      </Carousel.Item>
    );
  })}
</Carousel>;
