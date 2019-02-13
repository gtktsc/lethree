const extractLocation = (path: string) => {
    if (typeof path === 'string') {
        const locationFromUrl = path.split('/');
        console.log(locationFromUrl);
        return {
            project: locationFromUrl[1] || null,
            construction: locationFromUrl[2] || null,
            task: locationFromUrl[3] || null,
            slide: locationFromUrl[4] || null
        };
    }
    return {
        project: null,
        construction: null,
        task: null,
        slide: null
    };
};

export default extractLocation;
