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
    className="bg-card rounded-3xl 2xl:rounded-[2.5rem] border-4 xl:border-6 2xl:border-8 border-[#4D688E] box-border font-fotrodin silver-box-shadow gap-[30%] px-4 pt-4 xl:px-6 xl:pt-6 2xl:px-8 2xl:pt-8 pb-3 card"
    >
      <div className="absolute h-full w-full top-0 overflow-clip rounded-3xl z-1">
        <div className="card-envelope px-1 pt-[2%] xl:before:[border-top:_1.1svh_solid_#4D688E] z-10">
          <div className="unselectable h-[80%] w-[95%] flex flex-col place-self-center pt-[0%] md:pt-[0.5%] justify-between z-30 box-border [transform:skewY(-2deg)]">
            <div className="flex flex-col w-full gap-[0.5svw]">
              <div className="flex justify-start items-center gap-2 z-30">
                <h3 className="leading-4 font-semibold text-[#14253d]">
                  {title}
                </h3>
                <a className="h-max w-max unselectable" target="_blank" rel="noopener" href={gitLink}>
                  <img src={git} alt="GitHub icon" className="h-[5svw] w-[5sw] md:h-[4svh] md:w-[4svh] unselectable hover:scale-105"/>
                </a>
              </div>
              <h5 className="font-thin xl:font-normal w-full text-pretty leading-[110%] lg:leading-[120%] justify-self-center overflow-hidden whitespace-normal  z-30">
                {description}
              </h5>
            </div>
            <ul className="flex h-max gap-2 items-center justify-start z-30">
              {tags.map(tag => (
                <h5 className="flex font-thin text-[#dfeeff] rounded-xl bg-[#4D688E] justify-center items-center py-0 md:py-[1px] px-2 md:px-3" key={tag}>
                  {tag}
                </h5>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div 
        className="relative flex justify-center items-center h-full w-full overflow-visible"
      >
        <img 
            tabIndex={index}
            src={image}
            alt={alt}
            className="absolute w-full card-image top-0 aspect-video object-fill hover:cursor-pointer border-2 2xl:border-4 rounded-3xl border-[#4D688E] unselectable"
        />
        <a
          href={goToLink}
          target="_blank"
          rel="noopener"
          className="absolute card-frame top-0 w-full aspect-video hover:cursor-pointer rounded-3xl unselectable z-0"/>
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