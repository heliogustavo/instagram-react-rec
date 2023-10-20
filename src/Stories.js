import Story from "./Story";

export default function Stories() {
    
    const stories = [
        { name: "9gag", image: "assets/img/9gag.svg" },
        { name: "meowed", image: "assets/img/meowed.svg" },
        { name: "barked", image: "assets/img/barked.svg" },
        { name: "nathanwpylestrangeplanet", image: "assets/img/nathanwpylestrangeplanet.svg" },
        { name: "wawawicomics", image: "assets/img/wawawicomics.svg" },
        { name: "respondeai", image: "assets/img/respondeai.svg" },
        { name: "filomoderna", image: "assets/img/filomoderna.svg" },
        { name: "memeriagourmet", image: "assets/img/memeriagourmet.svg" }
    ]

    return (
        <div class="stories">
           
            { stories.map( (s) => <Story key={s.name} name={s.name} image={s.image}/> )}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}