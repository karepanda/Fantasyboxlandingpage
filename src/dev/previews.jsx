import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {FaqSection} from "@/app/components/landing/FaqSection.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/FaqSection">
                <FaqSection/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews