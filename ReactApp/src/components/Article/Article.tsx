interface IArticleProps {
  title: String;
  price: String;
}

export default function Article({ title, price }: IArticleProps) {
  return (
    <div className="article">
      <div className="article-image-container">
        <img className="article-image" src="" alt="article image"></img>
      </div>
      <div className="article-labels">
        <span className="article-title">{title}</span>
        <span className="article-price">{price}</span>
      </div>
    </div>
  );
}
