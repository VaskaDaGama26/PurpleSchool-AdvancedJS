const NewYearTimer = () => {
  const now = new Date();
  const currentYear = now.getFullYear();

  var newYear = new Date(currentYear + 1, 0, 1, 0, 0, 0);
  const diff = newYear - now;

  let months =
    (newYear.getFullYear() - now.getFullYear()) * 12 +
    (newYear.getMonth() - now.getMonth());
  let days = newYear.getDate() - now.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(newYear.getFullYear(), newYear.getMonth(), 0);
    days += lastMonth.getDate();
  }

  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  console.clear();
  console.log(
    `До нового года: ${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`
  );
};

setInterval(() => {
  NewYearTimer();
}, 1000);
