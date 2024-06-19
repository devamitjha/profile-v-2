export const formatDate = (dateString) => {
    const date = new Date(dateString);  
    const options = { year: 'numeric', month: 'short', day: 'numeric' }; // 'short' for abbreviated month name
    return date.toLocaleDateString('en-US', options);
};