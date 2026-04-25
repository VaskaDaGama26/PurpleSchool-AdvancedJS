const users = [
    {
      name: "userInvalid",
      birthday: [],
    },
    {
      name: "user1",
      birthday: "2020-01-12",
    },
    {
      name: "user2",
      birthday: "2001-09-30",
    },
    {
      name: "user3",
      birthday: "1982-03-07",
    },
    {
      name: "user4",
      birthday: "2040-05-08",
    },
  ];
  
  const isAdult = (user) => {
    if (typeof user.birthday !== "string")
      return `Неверный тип данных даты рождения`;
  
    const today = new Date();
    const birthday = new Date(user.birthday);
  
    if (birthday.getFullYear() > today.getFullYear())
      return `Год рождения не может превышать нынешний год`;
  
    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();
  
    let finalAge =
      monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())
        ? --age
        : age;
  
    return finalAge >= 14;
  };
  
  users.forEach((user) => {
    console.log(isAdult(user));
  });
  