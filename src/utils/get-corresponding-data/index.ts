const getCorrespondingData = ({
    location = { slide: null, project: null, construction: null },
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

    if (location.slide) {
        return {
            data:
                (currentConstruction[0] && currentConstruction[0].tasks) || [],
            view: 'slide'
        };
    }
    if (location.slide === null && location.construction) {
        return {
            data: (currentProject[0] && currentProject[0].constructions) || [],
            view: 'construction'
        };
    }
    if (
        location.slide === null &&
        location.construction === null &&
        location.project
    ) {
        return { data: projects || [], view: 'project' };
    }
    return { data: [], view: 'dashboard' };
};

export default getCorrespondingData;
