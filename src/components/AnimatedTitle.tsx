import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import classNames from 'classnames';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TitleProps {
  title: string;
  titleClassName?: string;
  className?: string;
}

const AnimatedTitle: React.FC<TitleProps> = ({
  title,
  titleClassName = '',
  className = '',
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const containerWidth =
        document.querySelector('.container')?.clientWidth || 0;

      gsap.to(titleRef.current, {
        x: containerWidth - titleRef.current.clientWidth,
        scrollTrigger: {
          start: 'top left',
          end: 'bottom right',
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div className={classNames('overflow-hidden py-10 lg:pb-14', className)}>
      <h1
        ref={titleRef}
        className={classNames(
          'whitespace-nowrap font-display text-[114px] sm:text-[190px] md:text-[220px] lg:text-[300px] xl:text-[464px] font-bold leading-none tracking-[1.59px] lg:tracking-[5.59px]',
          titleClassName
        )}
      >
        {title}
      </h1>
    </div>
  );
};

export default AnimatedTitle;
