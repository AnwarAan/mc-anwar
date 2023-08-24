const SoccialMedia = ({ link, image }) => {
  return (
    <div className="mx-2">
      <a href={link}>
        <img src={image} alt="" />
      </a>
    </div>
  );
};

export default SoccialMedia;
