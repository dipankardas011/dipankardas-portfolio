import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface Props {
  title: string;
  className?: string;
}

export default function AnimatedTitle({ title, className = '' }: Props) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const titleWidth = titleRef.current.clientWidth;
    const containerWidth = containerRef.current.clientWidth;
    const scrollDistance = titleWidth - containerWidth;

    if (scrollDistance > 0) {
      gsap.to(titleRef.current, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          markers: false,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden py-10 lg:pb-14">
      <h2
        ref={titleRef}
        className={`whitespace-nowrap font-display text-[114px] sm:text-[190px] md:text-[220px] lg:text-[300px] xl:text-[464px] font-bold leading-none tracking-[1.59px] lg:tracking-[5.59px] ${className}`}
      >
        {title}
      </h2>
    </div>
  );
}
