import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
    1: {
        title: "Some Project 1",
        image: projectOne,
        description: (
            <>
                <p>
                Banet ipsum dolor sit amica.
                </p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
    },
    2: {
        title: "Some Project 2",
        image: projectTwo,
        description: (
            <>
                <p>
                Lorem ipsum dolor sit amet.
                </p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
    },
    3: {
        title: "Some Project 3",
        image: projectThree,
        description: (
            <>
                <p>
                Lorem ipsum dol sit amet?
                </p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
    },
}

export default projects;