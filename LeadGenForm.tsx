const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const url =
    "https://docs.google.com/forms/d/e/1FAIpQLSffx1rSxkR7q_aL2T6F3aD_RSn9TmK64kNhEIeb1xSw_kqJAA/formResponse";

  const fd = new FormData();

  fd.append("entry.1636995483", "Test Name");
  fd.append("entry.1971314036", "9999999999");
  fd.append("entry.331570127", "test@gmail.com");
  fd.append("entry.1424047345", "business");
  fd.append("entry.2052745801", "2");
  fd.append("entry.1174324715", "test message");

  await fetch(url, {
    method: "POST",
    mode: "no-cors",
    body: fd,
  });

  alert("Submitted");
};
