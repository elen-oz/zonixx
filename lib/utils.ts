export const simplifyExerciseUrl = (url: string, prefix = '/data/', suffix = '.gif')=> {
    const baseUrl = 'https://v2.exercisedb.io/image/';

    try {
        if (url.startsWith(baseUrl)) {
            const imageName = url.slice(baseUrl.length);
            return `${prefix}${imageName}${suffix}`;
        } else {
            console.warn(`Unexpected format URL: ${url}`);
            return url;
        }
    } catch (error) {
        console.error('Error handling URL:', error);
        return '';
    }
}

