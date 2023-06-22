import './ProductImage.scss';

type Props = {
  img: string;
  alt: string;
  height: string;
  width: string;
};

const ProductImage = ({ img, alt, height, width }: Props) => {
  return (
    <img
      className="image"
      src={img}
      alt={alt}
      style={{ height: height, width: width }}
      loading="lazy"
    ></img>
  );
};

export default ProductImage;
