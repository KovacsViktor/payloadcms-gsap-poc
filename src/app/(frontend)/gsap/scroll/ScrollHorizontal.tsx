'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { useGSAP } from "@gsap/react";
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

gsap.registerPlugin(Observer, useGSAP);

const SlideSection = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  top: 0,
  position: 'fixed',
  visibility: 'hidden',
  '&:first-of-type': {
    visibility: 'visible',
    '& .slide__content': {
      backgroundColor: '#6d597a',
    },
  },
  '&:nth-of-type(2) .slide__content': {
    backgroundColor: '#355070',
  },
  '&:nth-of-type(3) .slide__content': {
    backgroundColor: '#b56576',
  },
  '&:nth-of-type(4) .slide__content': {
    backgroundColor: '#9a8c98',
  },
}));

const SlideOuter = styled(Box)({
  width: '100%',
  height: '100%',
  overflowY: 'hidden',
});

const SlideInner = styled(Box)({
  width: '100%',
  height: '100%',
  overflowY: 'hidden',
});

const SlideContent = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
});

const SlideContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: '1400px',
  width: '100vw',
  margin: '0 auto',
  height: '90vh',
  marginBottom: '10vh',
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridTemplateRows: 'repeat(10, 1fr)',
  gridColumnGap: 0,
  gridRowGap: 0,
  padding: '0 1rem',
  [theme.breakpoints.up('md')]: {
    padding: '0 3rem',
    marginTop: '10vh',
    height: '80vh',
  },
}));

const SlideHeading = styled(Typography)(({ theme }) => ({
  '--width': 200,
  display: 'block',
  textAlign: 'left',
  fontFamily: '"Bandeins Sans & Strange Variable"',
  fontSize: 'clamp(5rem, 15vw, 15rem)',
  fontWeight: 900,
  fontVariationSettings: '"wdth" var(--width)',
  margin: 0,
  padding: 0,
  color: '#f2f1fc',
  zIndex: 999,
  mixBlendMode: 'difference',
  gridArea: '2 / 2 / 3 / 10',
  alignSelf: 'end',
  [theme.breakpoints.up('md')]: {
    gridArea: '1 / 1 / 4 / 10',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  marginTop: '4rem',
  gridArea: '2 / 1 / 7 / 8',
  [theme.breakpoints.up('md')]: {
    marginTop: 0,
    gridArea: '3 / 2 / 8 / 7',
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const Overlay = styled(Box)({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 2,
});

const OverlayContent = styled(Box)(({ theme }) => ({
  maxWidth: '1400px',
  width: '100vw',
  margin: '0 auto',
  padding: '0 1rem',
  height: '90vh',
  marginBottom: '10vh',
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridTemplateRows: 'repeat(10, 1fr)',
  gridColumnGap: 0,
  gridRowGap: 0,
  [theme.breakpoints.up('md')]: {
    padding: '0 3rem',
    marginTop: '10vh',
    height: '80vh',
  },
}));

const OverlayImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  margin: 0,
  gridArea: '4 / 3 / 9 / 11',
  [theme.breakpoints.up('md')]: {
    gridArea: '5 / 4 / 10 / 11',
  },
  '& img': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: '50% 50%',
  },
}));

const Count = styled(Typography)(({ theme }) => ({
  gridArea: '3 / 10 / 4 / 10',
  fontSize: 'clamp(3rem, 4vw, 15rem)',
  margin: 0,
  padding: 0,
  textAlign: 'right',
  borderBottom: '7px white solid',
  [theme.breakpoints.up('md')]: {
    gridArea: '3 / 10 / 4 / 11',
  },
}));

const slides = [
  {
    heading: 'SCROLL',
    image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDUzOA&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    heading: 'SWIPE',
    image: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDUzOA&ixlib=rb-1.2.1&q=85&w=400',
  },
  {
    heading: 'SCROLL',
    image: 'https://images.unsplash.com/photo-1537165924986-cc3568f5d454?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDU4NA&ixlib=rb-1.2.1&q=85&w=400',
  },
  {
    heading: 'SWIPE',
    image: 'https://images.unsplash.com/photo-1589271243958-d61e12b61b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDU4NA&ixlib=rb-1.2.1&q=80&w=400',
  },
];

const overlayImages = [
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTU4Mw&ixlib=rb-1.2.1&q=80&w=800',
  'https://images.unsplash.com/photo-1594666757003-3ee20de41568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTcwOA&ixlib=rb-1.2.1&q=80&w=800',
  'https://images.unsplash.com/photo-1579830341096-05f2f31b8259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTQ5Ng&ixlib=rb-1.2.1&q=80&w=800',
  'https://images.unsplash.com/photo-1603771628302-c32c88e568e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMxOTUxNg&ixlib=rb-1.2.1&q=80&w=800',
];

export default function ScrollHorizontal() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const slideImagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const outerWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const innerWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const countRef = useRef<HTMLParagraphElement>(null);
  const currentIndexRef = useRef(0);
  const animatingRef = useRef(false);

  const { contextSafe } = useGSAP();

  const gotoSection = contextSafe((index: number, direction: number) => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    const sections = gsap.utils.toArray<HTMLDivElement>(sectionsRef.current.filter(Boolean));
    const images = gsap.utils.toArray<HTMLImageElement>(imagesRef.current.filter(Boolean)).reverse();
    const slideImages = gsap.utils.toArray<HTMLImageElement>(slideImagesRef.current.filter(Boolean));
    const outerWrappers = gsap.utils.toArray<HTMLDivElement>(outerWrappersRef.current.filter(Boolean));
    const innerWrappers = gsap.utils.toArray<HTMLDivElement>(innerWrappersRef.current.filter(Boolean));
    const wrap = gsap.utils.wrap(0, sections.length);
    index = wrap(index);

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "expo.inOut" },
      onComplete: () => {
        animatingRef.current = false;
      }
    });

    const currentSection = sections[currentIndexRef.current];
    const heading = currentSection?.querySelector('.slide__heading');
    const nextSection = sections[index];
    const nextHeading = nextSection?.querySelector('.slide__heading');

    if (!heading || !nextHeading) return;

    gsap.set(sections, { zIndex: 0, autoAlpha: 0 });
    gsap.set([sections[currentIndexRef.current], images[index]], { zIndex: 1, autoAlpha: 1 });
    gsap.set([sections[index], images[currentIndexRef.current]], { zIndex: 2, autoAlpha: 1 });

    tl
      .set(countRef.current, { innerHTML: String(index + 1) }, 0.32)
      .fromTo(
        outerWrappers[index],
        { xPercent: 100 * direction },
        { xPercent: 0 },
        0
      )
      .fromTo(
        innerWrappers[index],
        { xPercent: -100 * direction },
        { xPercent: 0 },
        0
      )
      .to(
        heading,
        {
          "--width": 800,
          xPercent: 30 * direction
        },
        0
      )
      .fromTo(
        nextHeading,
        {
          "--width": 800,
          xPercent: -30 * direction
        },
        {
          "--width": 200,
          xPercent: 0
        },
        0
      )
      .fromTo(
        images[index],
        {
          xPercent: 125 * direction,
          scaleX: 1.5,
          scaleY: 1.3
        },
        { xPercent: 0, scaleX: 1, scaleY: 1, duration: 1 },
        0
      )
      .fromTo(
        images[currentIndexRef.current],
        { xPercent: 0, scaleX: 1, scaleY: 1 },
        {
          xPercent: -125 * direction,
          scaleX: 1.5,
          scaleY: 1.3
        },
        0
      )
      .fromTo(
        slideImages[index],
        { scale: 2 },
        { scale: 1 },
        0
      )
      .timeScale(0.8);

    currentIndexRef.current = index;
  });

  const setupScroll = contextSafe(() => {
    const observer = Observer.create({
      type: "wheel,touch,pointer",
      preventDefault: true,
      wheelSpeed: -1,
      onUp: () => gotoSection(currentIndexRef.current + 1, +1),
      onDown: () => gotoSection(currentIndexRef.current - 1, -1),
      tolerance: 10
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.code === "ArrowUp" || e.code === "ArrowLeft") && !animatingRef.current) {
        gotoSection(currentIndexRef.current - 1, -1);
      }
      if (
        (e.code === "ArrowDown" ||
          e.code === "ArrowRight" ||
          e.code === "Space" ||
          e.code === "Enter") &&
        !animatingRef.current
      ) {
        gotoSection(currentIndexRef.current + 1, 1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
  });

  useGSAP(() => {
    setupScroll();
  }, []);

  return (
    <Box >
      {slides.map((slide, index) => (
        <SlideSection
          key={index}
          ref={(el: HTMLDivElement | null) => {
            sectionsRef.current[index] = el;
          }}
        >
          <SlideOuter ref={(el: HTMLDivElement | null) => {
            outerWrappersRef.current[index] = el;
          }}>
            <SlideInner ref={(el: HTMLDivElement | null) => {
              innerWrappersRef.current[index] = el;
            }}>
              <SlideContent>
                <SlideContainer>
                  <SlideHeading className="slide__heading">
                    {slide.heading}
                  </SlideHeading>
                  <ImageContainer>
                    <img
                      src={slide.image}
                      alt=""
                      ref={(el: HTMLImageElement | null) => {
                        slideImagesRef.current[index] = el;
                      }}
                    />
                  </ImageContainer>
                </SlideContainer>
              </SlideContent>
            </SlideInner>
          </SlideOuter>
        </SlideSection>
      ))}

      <Overlay>
        <OverlayContent>
          <Count ref={countRef}>01</Count>
          <OverlayImageContainer>
            {overlayImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                ref={(el: HTMLImageElement | null) => {
                  imagesRef.current[index] = el;
                }}
              />
            ))}
          </OverlayImageContainer>
        </OverlayContent>
      </Overlay>
    </Box>
  );
} 