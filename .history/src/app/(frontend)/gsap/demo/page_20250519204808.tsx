import GSAPDraggable from "./GSAPDraggable";
import GSAPMorphSVG from "./GSAPMorphSVG";
import GSAPMotionPath from "./GSAPMotionPath";
import GSAPSplitText from "./GSAPSplitText";
import NextLink from 'next/link';
import { Button } from '@mui/material';


export default function GSAPDemoPage() {

    return (
        <>
            <GSAPDraggable />
            <GSAPMorphSVG />
            <GSAPMotionPath />
            <GSAPSplitText />
            <NextLink href="/gsap/scroll">
               {'>>'} Scroll Animations
          </NextLink>
        </>
    )
}
