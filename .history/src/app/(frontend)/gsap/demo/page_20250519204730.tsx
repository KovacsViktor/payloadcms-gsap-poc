import GSAPDraggable from "./GSAPDraggable";
import GSAPMorphSVG from "./GSAPMorphSVG";
import GSAPMotionPath from "./GSAPMotionPath";
import GSAPSplitText from "./GSAPSplitText";
import NextLink from 'next/link';

export default function GSAPDemoPage() {

    return (
        <>
            <GSAPDraggable />
            <GSAPMorphSVG />
            <GSAPMotionPath />
            <GSAPSplitText />
            <NextLink href="/gsap/scroll">
            <StyledButton variant="contained">
              Next {'>>'} Scroll Animations
            </StyledButton>
          </NextLink>
        </>
    )
}
