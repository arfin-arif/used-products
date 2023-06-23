export const formatTime = (timeString) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return new Date(timeString).toLocaleTimeString([], options);
  };

  export const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };