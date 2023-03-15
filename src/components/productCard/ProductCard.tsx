import './ProductCard.scss'
const phone = {
  // eslint-disable-next-line no-octal-escape
  image: 'https://fedox.com.ua/content/images/29/1080x1080l80bc20/p1400393752-apple-iphone-64gb.html-39499155136569.webp',
  title: 'Apple iPhone Xs 64GB Silver (iMT9G2FS/A)',
  price: 899,
  priceWithdiscount: 799,
  screen: '5.8” OLED',
  capacity: '64 GB',
  ram: '4 GB'
}

export const ProductCard = () => {
  const {
    image,
    title,
    price,
    priceWithdiscount,
    screen,
    capacity,
    ram,
  } = phone;
  return (
    <div className="product-card container__width">
      <img
        src={image}
        alt={title}
        className="product-card__image"
      />
      <h1 className="product-card__title">
        {title}
      </h1>

      <div className="product-card__price-container">
        <p className="product-card__price">
          ${priceWithdiscount}
        </p>
        <p className="product-card__price--crossed">
          ${price}
        </p>
      </div>

      <div className="product-card__details-container">
        <div className="product-card__details">
          <p
            className="product-card__details__title"
          >
            Screen
          </p>
          <p>{screen}</p>
        </div>

        <div className="product-card__details">
          <p
            className="product-card__details__title"
          >
            Capacity
          </p>
          <p>{capacity}</p>
        </div>

        <div className="product-card__details">
          <p
            className="product-card__details__title"
          >
            RAM
          </p>
          <p>{ram}</p>
        </div>
      </div>

      <div className="product-card__button-container">
        <button
          type="button"
          className="product-card__button"
        >
          Add to cart
        </button>
        <button
          type="button"
          className="product-card__button-favorite"
        >
          <i className="icon-heart"/>
        </button>
      </div>
    </div>
  );
}
