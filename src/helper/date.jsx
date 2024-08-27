
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`; // Corrected string template syntax
};

// Export the formatDate function
export default formatDate;


