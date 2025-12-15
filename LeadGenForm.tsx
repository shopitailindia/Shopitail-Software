const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSffx1rSxkR7q_aL2T6F3aD_RSn9TmK64kNhEIeb1xSw_kqJAA/viewform?usp=dialog";

  const formData = new FormData();
  formData.append("entry.1636995483", formDataState.name);
  formData.append("entry.1971314036", formDataState.phone);
  formData.append("entry.331570127", formDataState.email);
  formData.append("entry.1424047345", formDataState.orgType);
  formData.append("entry.2052745801", formDataState.seats);
  formData.append("entry.1174324715", formDataState.message);

  fetch(formUrl, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });

  setSubmitted(true);
  setTimeout(() => setSubmitted(false), 3000);
};
