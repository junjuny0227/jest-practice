const checkIsPassedDate = (targetDate: Date): boolean => {
  const today = new Date();

  return today.getTime() >= targetDate.getTime();
};

export default checkIsPassedDate;
