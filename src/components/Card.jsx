import PropTypes from 'prop-types';
import VanillaTilt from 'vanilla-tilt'
import { useEffect } from 'react'

const Card = ({ image, alt, title, description, tags, git, gitLink, goToLink, index}) => {
  useEffect(()=>{
    const element = document.querySelectorAll(".card");
    VanillaTilt.init(element, {
      max: 5,
      speed: 10,
      glare: true,
      "max-glare": 0.7,
    });
  }, []);

  return (
    <div 
    className="bg-card items-start rounded-3xl border-4 border-[#4D688E] box-border font-fotrodin silver-box-shadow gap-0 px-4 pt-4 pb-3 card "
    >
      <div className="absolute h-full w-full top-0 overflow-clip rounded-3xl z-1">
        <div className="card-envelope z-10"/>
      </div>
      <div 
        className="relative flex justify-center items-center h-full w-full overflow-visible"
      >
        <img 
            tabIndex={index}
            src={image}
            alt={alt}
            className="absolute w-full card-image top-0 aspect-video object-fill hover:cursor-pointer border-2 rounded-3xl border-[#4D688E] unselectable"
        />
        <a
          href={goToLink}
          className="absolute card-frame top-0 w-full aspect-video hover:cursor-pointer rounded-3xl unselectable z-0"/>
      </div>
      <div className="unselectable h-full w-full flex flex-col row-start-2 row-end-3 col-span-1 justify-between z-30 box-border">
        <div className="flex justify-start items-center text-lg gap-2 z-30">
          <h3 className="leading-4 font-semibold text-[#14253d]">
            {title}
          </h3>
          <a className="h-max w-max unselectable" href={gitLink}>
            <img src={git} alt="GitHub icon" className="h-5 w-5 unselectable hover:scale-105"/>
          </a>
        </div>
        <p className="font-normal text-sm h-[3rem] w-full text-pretty leading-4 justify-self-center overflow-hidden whitespace-normal z-30">{description}</p>
        <ul className="flex h-max gap-2 items-center justify-start z-30">
          {tags.map(tag => (
            <li className="font-thin text-xs text-[#dfeeff] rounded-3xl bg-[#4D688E] px-2" key={tag}>
            {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.any,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  git: PropTypes.string.isRequired,
  gitLink: PropTypes.string.isRequired,
  goToLink: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card