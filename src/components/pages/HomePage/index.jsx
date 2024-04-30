import { BooksSection } from "../../BooksSection"
import { DefaultTemplate } from "../../DefaultTemplate"
import { TitleSection } from "../../TitleSections"

export const HomePage = () => {
    return(
        <DefaultTemplate>
            <TitleSection />
            <BooksSection />
        </DefaultTemplate>

    )
}