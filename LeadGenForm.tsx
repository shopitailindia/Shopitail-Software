const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSffx1rSxkR7q_aL2T6F3aD_RSn9TmK64kNhEIeb1xSw_kqJAA/formResponse";

  const fd = new FormData();

  fd.append("entry.1636995483", formData.name);      // Full Name
  fd.append("entry.1971314036", formData.phone);    // Phone
  fd.append("entry.331570127", formData.email);     // Email
  fd.append("entry.1424047345", formData.orgType);  // Organization Type
  fd.append("entry.2052745801", formData.seats);    // Seats Needed
  fd.append("entry.1174324715", formData.message);  // Additional Details

  await fetch(formUrl, {
    method: "POST",
    mode: "no-cors",
    body: fd,
  });

  setSubmitted(true);

  setTimeout(() => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      orgType: "",
      seats: "",
      message: ""
    });
  }, 3000);
};
