import PropTypes from "prop-types";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
import { vleaf } from "../assets/icons";

const Card = ({
  image,
  alt,
  title,
  description,
  tags,
  git,
  gitLink,
  goToLink,
  index,
}) => {
  useEffect(() => {
    const element = document.querySelectorAll(".card");
    VanillaTilt.init(element, {
      max: 5,
      speed: 10,
      glare: true,
      "max-glare": 0.7,
    });
  }, []);

  return (
    <div className="bg-card rounded-3xl 2xl:rounded-[2.5rem] border-4 xl:border-6 2xl:border-8 border-[#4D688E] box-border font-inter silver-box-shadow gap-[30%] ~px-4/8 ~pt-4/8 ~pb-2/3 card">
      <div className="absolute h-full w-full top-0 overflow-clip rounded-3xl z-1">
        <div className="card-envelope max-md:pt-3 max-md:pb-2 ~md:~px-4/8 ~md:~pt-1/5 ~md:~pb-2/4 2xl:px-10 xl:before:[border-top:_1.1svh_solid_#4D688E] z-10">
          <div className="unselectable h-full w-full flex flex-col place-self-center pt-[0%] md:pt-[0.5%] justify-between z-30 box-border">
            <div className="flex flex-col w-full max-md:gap-1 ~md:~gap-0/2 z-30">
              <div className="flex w-full justify-between items-center z-30">
                <h3 className="~leading-4/10 font-extrabold text-[#24292E] [text-shadow:0px_0px_1px_#14253d]">
                  {title}
                </h3>
                <a
                  className="h-max w-max unselectable"
                  target="_blank"
                  rel="noopener"
                  href={gitLink}
                >
                  <img
                    src={git}
                    alt="GitHub icon"
                    className="flex max-md:~w-12/16 ~md/xl:~w-16/36 2xl:w-44 unselectable"
                    loading="lazy"
                  />
                </a>
              </div>
              <h5 className="font-thin xl:font-normal w-full text-pretty leading-[110%] lg:leading-[120%] justify-self-center overflow-hidden whitespace-normal z-30">
                {description}
              </h5>
            </div>
            <ul className="flex h-max ~gap-2/8 items-center justify-start z-30">
              {tags.map((tag) => (
                <h5
                  className="flex font-medium text-[#dfeeff] max-sm:rounded-md ~rounded-sm/2xl bg-gradient-to-tr from-[#256932] to-[#89AB4C] justify-center items-center gap-2 ~py-0/1 ~px-2/4"
                  key={tag}
                >
                  <img
                    src={vleaf}
                    className="max-md:h-3 max-md:w-3 ~md:~h-3/7 ~md:~w-3/8 transform rotate-[25deg]"
                    loading="lazy"
                  />
                  {tag}
                </h5>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center h-full w-full overflow-visible">
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
          className="absolute card-frame top-0 w-full aspect-video hover:cursor-pointer rounded-3xl unselectable z-0"
        />
      </div>
    </div>
  );
};

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

export default Card;
