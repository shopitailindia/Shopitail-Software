const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSffx1rSxkR7q_aL2T6F3aD_RSn9TmK64kNhEIeb1xSw_kqJAA/formResponse";

  const formDataToSend = new FormData();
  formDataToSend.append("entry.111111111", formData.name);     // Full Name
  formDataToSend.append("entry.222222222", formData.phone);    // Phone
  formDataToSend.append("entry.333333333", formData.orgType);  // Org Type
  formDataToSend.append("entry.444444444", formData.seats);    // Seats

  try {
    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formDataToSend,
    });

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", orgType: "", seats: "" });
    }, 3000);

  } catch (error) {
    console.error("Submission error", error);
  }
};
