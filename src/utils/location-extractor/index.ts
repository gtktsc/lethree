const extractLocation = (path: string) => {
    if (typeof path === 'string') {
        const locationFromUrl = path.split('/');
        return {
            project: locationFromUrl[1] || null,
            construction: locationFromUrl[2] || null,
            slide: locationFromUrl[3] || null
        };
    }
    return {
        project: null,
        construction: null,
        slide: null
    };
};

export default extractLocation;
