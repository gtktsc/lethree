const getCorrespondingData = ({
    location = { task: null, slide: null, project: null, construction: null },
    projects
}) => {
    const currentProject = projects.filter(
        project => project.name === location.project
    );

    const currentConstruction =
        currentProject &&
        currentProject[0] &&
        currentProject[0].constructions &&
        currentProject[0].constructions.filter(
            construction => construction.name === location.construction
        );

    const currentTask =
        currentConstruction &&
        currentConstruction[0] &&
        currentConstruction[0].tasks &&
        currentConstruction[0].tasks.filter(
            task => task.name === location.task
        );

    const currentSlide =
        currentTask &&
        currentTask[0] &&
        currentTask[0].slides &&
        currentTask[0].slides.filter(slide => slide.name === location.slide);

    if (location.slide) {
        return {
            data: (currentSlide[0] && currentSlide[0].slides) || [],
            view: 'slide'
        };
    }
    if (location.slide === null && location.task) {
        return {
            data: (currentTask[0] && currentTask[0].slides) || [],
            view: 'task'
        };
    }
    if (
        location.task === null &&
        location.slide === null &&
        location.construction
    ) {
        return {
            data:
                (currentConstruction[0] && currentConstruction[0].tasks) || [],
            view: 'construction'
        };
    }
    if (
        location.slide === null &&
        location.task === null &&
        location.construction === null &&
        location.project
    ) {
        return {
            data: (currentProject[0] && currentProject[0].constructions) || [],
            view: 'project'
        };
    }
    return { data: [], view: 'dashboard' };
};

export default getCorrespondingData;
