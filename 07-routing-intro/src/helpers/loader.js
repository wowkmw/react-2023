const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/hiteshchoudhary");
  const jsonData = await res.json();
  return jsonData;
};

export { githubInfoLoader };
